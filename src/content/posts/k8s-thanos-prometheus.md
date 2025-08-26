---
tags: [kubernetes]
title: "使用 Thanos 管理多 Prometheus 数据实现高可用"
published: 2024-08-12
---

# 介绍 [](https://blog.men.ci/thanos-low-cost-metrics-on-homelab/#%E4%BB%8B%E7%BB%8D)

Thanos 是一套基于 Prometheus 的服务监控方案，它为 Prometheus 扩展了中心化查询与长期存储的能力。通过 Thanos，我们可以将一个或多个 Prometheus 收集到的指标数据同步到对象存储（如 S3 兼容的对象存储）中，并通过连接到对象储存进行全局的 PromQL 查询。Thanos 有多个微服务组件，这里我们用到 Thanos Sidecar、Thanos Store 和 Thanos Query：

- **Thanos Sidecar: 在运行 Prometheus 的主机上运行，连接对象存储，将 Prometheus 的时序数据库产生的每个块自动上传到对象存储中；**

- **Thanos Store: 连接对象存储，对对象存储中的数据进行查询；**

- **Thanos Query: 将多个 Thanos 组件作为数据源组合起来，对整体数据进行查询。**

- **Thanos Query Frontend: 提升查Query询性能**

- **Thanos Compactor: 对对象存储中的数据进行压缩采样**

- **Thanos Ruler: 配置管理告警规则**

- **Thanos Receive: 接收 Prometheus Remote Write 的数据**

每个 Thanos 组件都会同时暴露 PromQL HTTP 接口和 Thanos StoreAPI gRPC 接口，所以既可以将 Thanos 组件用 Thanos Query 进行级联，也可以将任意一个 Thanos 组件实例接入 Grafana。

# 部署 

**【注】在 release-0.11 版本之后新增了 NetworkPolicy 默认是允许自己访问。 如果了解 NetworkPolicy 可以修改一下默认的规则。 可以用查看 ls manifests/\*networkPolicy\*。 如果不修改的话则会影响到修改 NodePort 类型也无法访问， 如果不会 Networkpolicy 可以直接删除就行。**

### 修改镜像源

```shell
# 查找
grep -rn 'quay.io' *
# 批量替换
sed -i 's/quay.io/quay.mirrors.ustc.edu.cn/g' `grep "quay.io" -rl *`
# 再查找
grep -rn 'quay.io' *
grep -rn 'image: ' *
```

### 修改 prometheus 的 service

```shell
# 设置对外访问端口，增加如下两行，完整配置也贴出来了。
# type: NodePort
# nodePort: 30090

vi manifests/prometheus-service.yaml

apiVersion: v1
kind: Service
metadata:
  labels:
    app.kubernetes.io/component: prometheus
    app.kubernetes.io/instance: k8s
    app.kubernetes.io/name: prometheus
    app.kubernetes.io/part-of: kube-prometheus
    app.kubernetes.io/version: 2.53.0
  name: prometheus-k8s
  namespace: monitoring
spec:
  type: NodePort
  ports:
  - name: web
    port: 9090
    targetPort: web
    nodePort: 30090
  - name: reloader-web
    port: 8080
    targetPort: reloader-web
  selector:
    app.kubernetes.io/component: prometheus
    app.kubernetes.io/instance: k8s
    app.kubernetes.io/name: prometheus
    app.kubernetes.io/part-of: kube-prometheus
  sessionAffinity: ClientIP
```

[](https://blog.men.ci/thanos-low-cost-metrics-on-homelab/#%E9%83%A8%E7%BD%B2)

### 修改 grafana 的 service

```shell
# 设置对外访问端口，增加如下两行，完整配置也贴出来了。
# type: NodePort
# nodePort: 30300
vi manifests/grafana-service.yaml

apiVersion: v1
kind: Service
metadata:
  labels:
    app.kubernetes.io/component: grafana
    app.kubernetes.io/name: grafana
    app.kubernetes.io/part-of: kube-prometheus
    app.kubernetes.io/version: 11.1.0
  name: grafana
  namespace: monitoring
spec:
  type: NodePort
  ports:
  - name: http
    port: 3000
    targetPort: http
    nodePort: 30300
  selector:
    app.kubernetes.io/component: grafana
    app.kubernetes.io/name: grafana
    app.kubernetes.io/part-of: kube-prometheus
```

### 修改 alertmanager 的 service

```shell
apiVersion: v1
kind: Service
metadata:
  labels:
    app.kubernetes.io/component: alert-router
    app.kubernetes.io/instance: main
    app.kubernetes.io/name: alertmanager
    app.kubernetes.io/part-of: kube-prometheus
    app.kubernetes.io/version: 0.27.0
  name: alertmanager-main
  namespace: monitoring
spec:
  type: NodePort
  ports:
  - name: web
    port: 9093
    targetPort: web
    nodePort: 30093
  - name: reloader-web
    port: 8080
    targetPort: reloader-web
  selector:
    app.kubernetes.io/component: alert-router
    app.kubernetes.io/instance: main
    app.kubernetes.io/name: alertmanager
    app.kubernetes.io/part-of: kube-prometheus
  sessionAffinity: ClientIP
```

为了降低成本，使用自建的 MinIO 代替 S3 / OSS 服务作为对象存储。这边不在赘述 Minio 部署

```shell
git clone https://github.com/Yuri-NagaSaki/Prometheus-Operator-Thanos.git
cd Prometheus-Operator-Thanos
```

### CRD 创建

```shell
kubectl create -f setup/
```

### 创建所有基础组件

kubectl apply -f .

创建完毕后会提供如下新增Kind

- Alertmanager

- PodMonitor

- Probe

- Prometheus

- PrometheusRule

- ServiceMonitor

- ThanosRuler

### 更新prometheus配置

```shell
kubectl create -f thanos/
```

### 创建 Thanos 模块（选择你要使用的 Thanos 模式）

```shell
kubectl create -f thanos/thanos-sidecar
kubectl create -f thanos/thanos-receive
```

### 根据需要创建 Rules

```shell
kubectl create -f thanos/rules
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1723446738641.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1723446738641.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/QQ_1723446738641.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1723446761746.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1723446761746.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/QQ_1723446761746.jpg" alt="" loading="lazy">
</picture>

### 注意事项

  
**reading meta file failed, will override it” err=”failed to read /prometheus/thanos.shipper.json: open /prometheus/thanos.shipper.json: no such file or directory”**

解决方案:  
使用thanos sidecar模式时，sidecar 会读取prometheus数据目录下的thanos.shipper.json文件，文件主要作用是当sidecar上传到对象存储时，会更新记录到此文件中。  
出现上面的原因是thanos.shipper.json文件的权限是root，sidecar权限不够没法读取和写入，sidecar自身又没有重试读取的机制所以就算进入容器将这个文件重新授权为可写入和读取都不行，只能将prometheus进行持久化后进行这个文件授权777，然后重启prometheus整个pod