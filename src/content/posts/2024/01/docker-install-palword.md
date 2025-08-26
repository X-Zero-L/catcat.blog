---
title: "Docker 部署 幻兽帕鲁联机服务器"
published: 2024-01-22
categories: 
  - "docker"
  - "laboratory"
---

## 配置需求

## Requirements

| CPU | 4Cores (recommend) |
| --- | --- |
| RAM | 16GB Recommend over 32GB for stable operation. It is possible to start the server with 8 GB, but the further you play, the server will crash due to out of memory. |
| Network | UDP Port 8211 (Default) Port forwarding required. |

## 命令

```
docker volume create palworld_saved

docker pull docker.mirrors.sjtug.sjtu.edu.cn/kagurazakanyaa/palworld

docker run -d --name=palworld-server -v "palworld_saved:/opt/palworld/Pal/Saved" -p 8211:8211/udp kagurazakanyaa/palworld
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-30.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-30.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-30.jpg" alt="" loading="lazy">
</picture>

## 配置文件

需要进入容器

```
docker exec -it 容器id /bin/bash 
```

```
/opt/palworld/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
编辑后重新运行即可
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-31.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-31.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-31.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/123837134e190d6c96e26f2b5e12126a.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/123837134e190d6c96e26f2b5e12126a.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/123837134e190d6c96e26f2b5e12126a.jpg" alt="" loading="lazy">
</picture>
