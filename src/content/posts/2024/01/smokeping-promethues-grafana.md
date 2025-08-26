---
title: "基于Smokeping+Promethues+Grafana搭建网络质量监控"
published: 2024-01-20
categories: 
  - "docker"
  - "laboratory"
---

> ### 二、环境准备

| 组件 | **版本** |
| --- | --- |
| **系统** | **Debian GNU/Linux 12 (bookworm)** |

## Smokeping 部署

Smokeping是一款监控网络状态和稳定性的开源软件（它是rrdtool的作者开发的），Smokeping会向目标设备和系统发送各种类型的测试数据包，测量、记录，并通过rrdtool制图方式，图形化地展示网络的时延情况，进而能够清楚的判断出网络的即时通信情况，如：延迟、丢包率、是否是BGP多线等。

### **组件**介绍

general（普通设置） 、alerts（警报设置）、Datebase（数据库参数）、presentation(网络自定义)、slaves（从smokeping定义）、targets（目标设置—“含插件定义”）

### Docker 部署

```
docker pull linuxserver/smokeping
docker run -d \
--name=smokeping \
-e TZ=Asia/Shanghai \
-p 9080:80 \
-v /home/config/smokeping:/config \
-v /home/data/smokeping:/data \
--restart unless-stopped \
linuxserver/smokeping
```

### 部署推送脚本

```
apt update && apt upgrade
apt install -y rrdtool
cd /home/config/smokeping/
git clone https://github.com/Sayyiku/idc_ping_monitor.git
unzip idc_ping_monitor-master.zip(如果是因为网络上传，需要用到此命令解压)
mv idc_ping_monitor-master/smokeping/location/ /home/config/smokeping/
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-14.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-14.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-14.jpg" alt="" loading="lazy">
</picture>

### 编辑Smokeping 监控配置

```
vim Targets
```

```
*** Targets ***
 
probe = FPing
 
menu = Top
title = 网络节点质量监控
remark = Smokeping 网络质量监控系统

@include /config/location/cmcc
@include /config/location/telcom
@include /config/location/tencent
@include /config/location/unicom
```

### 更新Smokeping

```
find /home/data/smokeping/ -name "*.rrd"|xargs rm -f
docker restart 容器 ID
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-25.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-25.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-25.jpg" alt="" loading="lazy">
</picture>

### 修改脚本

IP 修改为本机IP

```
root@VM-4-17-debian:/home/config/smokeping# vim /home/config/smokeping/idc_ping_monitor-master/collection_to_prometheus.py

'LOG_FILE' : '/tmp/smoking_pushgateway.log',
'prometheus_gateway' : 'http://ip:9091', 
'data_dir' : '/home/data/smokeping'
```

### 设置定时任务

```
crontab -e 
* * * * * python3 /home/config/smokeping/idc_ping_monitor-master/collection_to_prometheus.py
```

## Promethues部署

### 时序数据介绍

时序数据库强调的是以时间为主坐标，根据时间的流逝来记录事物的变化关系。关系型数据库主要是描述事物与事物之间的变化关系，这个关系相对于时间就比较复杂，比如一对多，多对多。而时间相对简单，只需要简单记录在这个时间点的某个事物发生的变化。监控数据恰恰符合这个时间变化，我们只需要记录某个指标在时间流逝当中的变化即可。

时序数据库非常适合"变化"。比如在关系型数据库中描述事物的关系，使用表结构，一旦定义下来，就遵循这个表结构不断的采集数据，如果发生变化，比如新增一个采集维度，那就要变更表结构，DDL操作对于关系型数据库来说，是非常大的代价。然后这对于时序数据库来说，并没有这个烦恼，时间序列数据集跟踪整个系统的改动并不断插入新数据，而不是更新原有数据。所以，对于监控数据来说，采集新的数据维度对于整个表结构不会有任何影响，因为它压根就没有表结构。

### 容器部署Promethues

```
root@VM-4-17-debian:~# docker run -d -p 9090:9090 --name prometheus prom/prometheus
root@VM-4-17-debian:~# docker cp prometheus:/etc/prometheus/prometheus.yml ./
```

### 持久化部署

```
root@VM-4-17-debian:~# docker rm -f prometheus
prometheus
root@VM-4-17-debian:~# mkdir /data/prometheus/
root@VM-4-17-debian:~# cp prometheus.yml /data/prometheus/
root@VM-4-17-debian:~# docker run -d -p 9090:9090 --name prometheus \
-v /data/prometheus/:/etc/prometheus/ \
-e TZ="Asia/Shanghai" \
-v /etc/localtime:/etc/localtime \
prom/prometheus
3fbee8038e5256c622dda73078bd5e04aea3c7abe9a2da62b61cf64541d0c50e
root@VM-4-17-debian:~# 
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-15.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-15.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-15.jpg" alt="" loading="lazy">
</picture>

### Prometheus  pushgateway部署

### Docker部署

```
root@VM-4-17-debian:~# docker run -d --name="prometheus_pushgateway" -p 9091:9091 prom/pushgateway
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-16.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-16.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-16.jpg" alt="" loading="lazy">
</picture>

### 修改prometheus配置，添加pushgateway

```
root@VM-4-17-debian:~# vim /data/prometheus/prometheus.yml
  - job_name: prometheus_pushgateway
    honor_labels: true                       # 避免收集数据本身的 job 和 instance被pushgateway实例信息覆盖
    static_configs:
    - targets: ['ip:9091']
      labels:
        instance: pushgateway
root@VM-4-17-debian:~# docker restart prometheus
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-17.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-17.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-17.jpg" alt="" loading="lazy">
</picture>

### prometheus web(IP:9090)

查看pushgateway状态是否为UP

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-18.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-18.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-18.jpg" alt="" loading="lazy">
</picture>

## Grafana 部署

官网介绍：[https://grafana.com/docs/grafana/latest/](https://grafana.com/docs/grafana/latest/)

### Docker部署

```
[root@VM-4-17-debian ~]# mkdir /data/grafana-storage
[root@VM-4-17-debian ~]# chmod 777 /data/grafana-storage/

[root@VM-4-17-debian ~]# docker run -d -p 3000:3000 \
--name grafana \
-v /data/grafana-storage:/var/lib/grafana \
-e "GF_SECURITY_ADMIN_PASSWORD=123456" \
grafana/grafana
```

### Grafana WEB访问

浏览器ip:3000访问验证，用户名：admin 密码：123456

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-19.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-19.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-19.jpg" alt="" loading="lazy">
</picture>

### 添加数据源

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-20.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-20.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-20.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-21.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-21.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-21.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-22.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-22.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-22.jpg" alt="" loading="lazy">
</picture>

### 监控模板添加

JSON文件在grafana文件夹下

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-24.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-24.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-24.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-23.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-23.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-23.jpg" alt="" loading="lazy">
</picture>

# 效果预览

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-27.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-27.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-27.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-28.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-28.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-28.jpg" alt="" loading="lazy">
</picture>
