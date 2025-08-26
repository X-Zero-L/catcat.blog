---
title: "Docker 部署 wallos 管理你的订阅"
published: 2024-02-12
categories: 
  - "docker"
  - "laboratory"
---

## 1\. 前言

在日常生活中，我们常常订阅各种流媒体服务、购买VPS等，但追踪这些订阅制费用往往令人头疼。虽然一些人选择在Notion、Excel等工具中记录这些开销，或者使用微信小程序进行管理，但这些方式可能显得不够方便和个性化。而使用一些订阅性质的记账APP虽然也能达到同样的效果，但是费用也是毕竟昂贵的。最近在GitHub上发现了Wallos这个开源项目，它提供了一种自托管的方式，让费用管理变得更为便捷。

## 2\. 部署

```
mkdir -p /root/data/docker_data/wallos
cd /root/data/docker_data/wallos
vim docker-compose.yml
```

```

version: '3.0'

services:
  wallos:
    container_name: wallos
    image: bellamy/wallos:latest
    ports:
      - "8282:80/tcp"
    environment:
      TZ: 'America/Toronto'
    # Volumes store your data between container upgrades
    volumes:
      - './db:/var/www/html/db'
      - './logos:/var/www/html/images/uploads/logos'
    restart: unless-stopped
```

```
docker compose up -d
```

## 3.使用

只需打开浏览器并打开`ip:port`运行 wallos 的机器即可。也可以使用反向代理 域名访问  
第一次运行 wallos 时，必须创建一个用户帐户。  
转到设置并个性化您的头像并添加您的家庭成员，同时添加/删除任何类别和货币。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-11.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-12.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-13.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-13.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-13.jpg" alt="" loading="lazy">
</picture>
