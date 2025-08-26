---
title: "利用Grafana和Promethus在服务器上搭建BT下载器流量统计面板"
published: 2023-07-17
categories: 
  - "docker"
  - "laboratory"
---

## 效果

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/07/image-175.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/07/image-175.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/07/image-175.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/07/image-176.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/07/image-176.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/07/image-176.jpg" alt="" loading="lazy">
</picture>

## 准备工作

- Grafana 和 Promethus部署成功

- 准备好你所有下载的用户名/密码并确保可联通

## 准备配置文件

vim config.yml

```
root@Sakura:~# cat config.yml 
qb:  

  client: qbittorrent  

  host: http://ip:8080

  username: your username

  password: password

qb2:  

  client: qbittorrent  

  host: http://ip:8080

  username: your username  

  password: password

de:  

  client: deluge 

  host: http://ip:prot

  username: your username  

  password: password

tr:  

  client: Transmission 

  host: http://ip:prot

  username: your username  

  password: password
```

## 部署

```
docker run -d -p 9000:9000 -v /root/config.yml:/config/config.yml leishi1313/downloader-exporter
```

其中/root/config.yml是你上面文件的位置，可以使用pwd命令查看

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/07/image-177.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/07/image-177.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/07/image-177.jpg" alt="" loading="lazy">
</picture>

## 检查是否成功连接

`IP:9000`确认下是否有如下页面，有类似输出代表downloader-exporter成功部署

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/07/image-178.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/07/image-178.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/07/image-178.jpg" alt="" loading="lazy">
</picture>

## Grafana新建面板

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/07/image-179.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/07/image-179.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/07/image-179.jpg" alt="" loading="lazy">
</picture>

### 选择数据源

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/07/image-180.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/07/image-180.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/07/image-180.jpg" alt="" loading="lazy">
</picture>
