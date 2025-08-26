---
title: "Kubernetes 部署应用到集群中"
published: 2023-09-14
categories: 
  - "kubernetes"
  - "laboratory"
---

#### 命令行运行

```
kubectl run testapp --image=ccr.ccs.tencentyun.com/k8s-tutorial/test-k8s:v1
kubectl get pod 查看是否成功建立

```

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-77.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-77.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-77.jpg" alt="" loading="lazy">
</picture>

#### YML文件部署

##### pod.yaml 文件

```
apiVersion: v1
kind: Pod
metadata:
  name: test-pod
spec:
  # 定义容器，可以多个
  containers:
    - name: test-k8s # 容器名字
      image: ccr.ccs.tencentyun.com/k8s-tutorial/test-k8s:v1 # 镜像
```

#### 部署命令

```
mkdir Deployment && cd Deployment 
vim pod.yml # 填入上面的文件内容
kubectl apply -f pod.yml #创建pod
```

#### Deployment方式

##### app.yml文件

```
apiVersion: apps/v1
kind: Deployment
metadata:
  # 部署名字
  name: test-k8s
spec:
  replicas: 2
  # 用来查找关联的 Pod，所有标签都匹配才行
  selector:
    matchLabels:
      app: test-k8s
  # 定义 Pod 相关数据
  template:
    metadata:
      labels:
        app: test-k8s
    spec:
      # 定义容器，可以多个
      containers:
      - name: test-k8s # 容器名字
        image: ccr.ccs.tencentyun.com/k8s-tutorial/test-k8s:v1 # 镜像

```

#### 部署命令

```
kubectl apply -f app.yml 
kubectl get deployment
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-79-1024x266.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-79-1024x266.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-79-1024x266.jpg" alt="" loading="lazy">
</picture>

#### Deployment 通过 label 关联起来 Pods

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-80.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-80.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-80.jpg" alt="" loading="lazy">
</picture>

### 常用命令

```
# 查看pod的IP等信息
kubectl get pod -o wide 
# 部署应用
kubectl apply -f app.yaml
# 查看 deployment
kubectl get deployment
# 查看 pod
kubectl get pod -o wide
# 查看 pod 详情
kubectl describe pod pod-name
# 查看 log
kubectl logs pod-name
# 进入 Pod 容器终端， -c container-name 可以指定进入哪个容器。
kubectl exec -it pod-name -- bash
# 伸缩扩展副本
kubectl scale deployment test-k8s --replicas=5
# 把集群内端口映射到节点
kubectl port-forward pod-name 8090:8080
# 查看历史
kubectl rollout history deployment test-k8s
# 回到上个版本
kubectl rollout undo deployment test-k8s
# 回到指定版本
kubectl rollout undo deployment test-k8s --to-revision=2
# 删除部署
kubectl delete deployment test-k8s
```

#### kubectl describe ID 查看 pod 详情

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-81.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-81.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-81.jpg" alt="" loading="lazy">
</picture>

#### kubectl logs ID 查看日志

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-82-1024x130.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-82-1024x130.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-82-1024x130.jpg" alt="" loading="lazy">
</picture>

#### kubectl logs ID -f 持续查看日志

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-83-1024x127.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-83-1024x127.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-83-1024x127.jpg" alt="" loading="lazy">
</picture>

#### kubectl exec -it ID- bash 进入Pod

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-84-1024x56.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-84-1024x56.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-84-1024x56.jpg" alt="" loading="lazy">
</picture>

#### kubectl scale deployment ID --replicas=5 伸缩扩展副本

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-85-1024x344.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-85-1024x344.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-85-1024x344.jpg" alt="" loading="lazy">
</picture>

#### kubectl port-forward pod-name 1234:8080 映射容器内部端口

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-86-1024x159.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-86-1024x159.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-86-1024x159.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-87.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-87.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-87.jpg" alt="" loading="lazy">
</picture>
