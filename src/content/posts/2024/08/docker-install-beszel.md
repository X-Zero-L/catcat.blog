---
title: "Docker 部署 Beszel 轻量化监控"
published: 2024-08-05
categories: 
  - "docker"
  - "laboratory"
---

上周在逛 Reddit 的时候 偶然发现了这个项目，主打一个轻量化监控。可以理解成小号的Prometheus那一套系统，有自动备份到 S3，监控，Docker 统计等一系列功能。部署也比较方便，可以使用 docker 也可以使用 systemctl 方式。

## 面板部署安装

### 创建文件夹

```
mkdir -p /root/docker/beszel 
```

### docker-compose.yaml 文件

```
services:
  beszel:
    image: 'henrygd/beszel'
    container_name: 'beszel'
    restart: unless-stopped
    ports:
      - '8090:8090'
    volumes:
      - ./beszel_data:/beszel_dat
```

### 运行

```
docker compose up -d

```

### 面板配置

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1722823987857.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1722823987857.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/QQ_1722823987857.jpg" alt="" loading="lazy">
</picture>

### 填入你想要监控的目的主机 ip 和 想显示的名字

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1722824007246.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1722824007246.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/QQ_1722824007246.jpg" alt="" loading="lazy">
</picture>

## Agent 安装

### 下载 Agent 文件

```
curl -sL "https://github.com/henrygd/beszel/releases/latest/download/beszel-agent_$(uname -s)_$(uname -m | sed 's/x86_64/amd64/' | sed 's/armv7l/arm/' | sed 's/aarch64/arm64/').tar.gz" | tar -xz -O beszel-agent | tee ./beszel-agent >/dev/null && chmod +x beszel-agent && ls beszel-agent
```

### 创建 systemd 进程

```
sudo vim /etc/systemd/system/beszel-agent.service
```

### 服务进程文件编写

```
[Unit]
Description=Beszel Agent
After=network.target

[Service]
Environment="PORT=45876"   ## 你的端口
Environment="KEY=ssh-ed25519 A"  ##你的 Key
ExecStart=/root/docker/beszel/beszel-agent   ## 你的agent下载位置
Restart=always
User=root
WorkingDirectory=/root/docker/beszel   ## 你的文件位置

[Install]
WantedBy=multi-user.target
```

### 重新加载 systemd 配置

```
sudo systemctl daemon-reload
sudo systemctl start beszel-agent
sudo systemctl enable beszel-agent
```

### 检查服务运行状态

```
sudo systemctl status beszel-agent
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1722824074637.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1722824074637.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/QQ_1722824074637.jpg" alt="" loading="lazy">
</picture>

### 检查面板是否接受到数据

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1722824383646.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1722824383646.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/QQ_1722824383646.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1722829991734.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1722829991734.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/QQ_1722829991734.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1722830018467.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1722830018467.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/QQ_1722830018467.jpg" alt="" loading="lazy">
</picture>
