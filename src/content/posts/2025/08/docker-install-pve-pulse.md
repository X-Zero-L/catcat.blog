---
title: "Docker 搭建 PVE 监控 Pulse"
published: 2025-08-05
categories: 
  - "docker"
  - "laboratory"
---

**最近搞PVE的时候偶然发现的项目，发现PVE上完善的监控还是比较少的。只有通过部署PVE-Exporter然后暴露接口给 Prometheus 然后通过Grafana展示。找来找去发现了 Pulse。Pulse 是一个为 Proxmox VE（虚拟环境）和 Proxmox Backup Server（PBS）提供实时监控的开源 Web 应用程序[](https://github.com/rcourtman/Pulse)。之前的版本部署还挺繁琐的（要给PVE点点点增加权限各种各样的），作者新增了命令行一目了然。**

**GitHub 地址为：[https://github.com/rcourtman/Pulse](https://github.com/rcourtman/Pulse%E3%80%82)**

## 主要特点[](https://github.com/rcourtman/Pulse?tab=readme-ov-file#key-features)

- **实时监控——通过 WebSockets 实时更新虚拟机、容器、节点和存储**

- **智能警报- 可通过电子邮件和 webhook 通知配置阈值（Discord、Slack、Gotify、Telegram、ntfy.sh、Teams）**

- **警报历史记录- 持久存储警报事件，包含详细指标和时间线**

- **统一备份- PBS 备份、PVE 备份和快照的单一视图**

- **PBS 推送模式- 监控隔离/防火墙的 PBS 服务器，无需入站连接**

- **现代用户界面- 响应式设计，具有深色/浅色主题、虚拟滚动和可扩展图表**

- **性能- 使用 Go 构建，以最小化资源使用，当没有客户端连接时停止轮询**

- **默认安全- 加密配置存储，具有灵活的凭证管理**

## 预览

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-28.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-28.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-28.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-30.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-30.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-30.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-29.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-29.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-29.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-27-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-27-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-27-scaled.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-31-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-31-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-31-scaled.jpg" alt="image" loading="lazy">
</picture>

## 部署

这里作者提供了三种方式，根据自己的喜好吧。

```
# Option A: Automated LXC Container (Easiest)
bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/ct/pulse.sh)"

# Option B: Docker (Multi-arch: AMD64, ARM64, ARMv7)
docker run -d -p 7655:7655 -v pulse_data:/data --restart unless-stopped rcourtman/pulse:latest

# Option C: Manual Install (For existing LXC/VMs)
curl -fsSL https://raw.githubusercontent.com/rcourtman/Pulse/main/install.sh | sudo bash
```

### Docker部署

```
root@docker:~/docker_yaml/Pulse# cat docker-compose.yml 
version: "3.8"
 
services:
  pulse:
    image: rcourtman/pulse:latest
    container_name: pulse
    restart: unless-stopped
    network_mode: host
    volumes:
      - ./data:/data
      - ./webhook:/var/lib/pulse
      - ./config:/etc/pulse
```

### 启动

```
docker compose up -d 
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-32-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-32-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-32-scaled.jpg" alt="image" loading="lazy">
</picture>

**打开 IP:7655 即可访问，注意不要暴露公网，如果有必要请加验证。**

## 使用

### 连接PVE

直接点击 Settings 开始连接PVE

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-31-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-31-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-31-scaled.jpg" alt="image" loading="lazy">
</picture>

这里我们一般都选择 API Token 进行验证。

根据下面的设置进行快速创建

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-33.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-33.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-33.jpg" alt="image" loading="lazy">
</picture>

如果没有设置https 证书，记得关闭验证

信息都填写完毕后点击 Test 检查连接

### 设置告警通知

支持的挺多的，自己根据喜好选择吧

目前版本webhooks有bug，无法持久化，等待作者修复

[https://github.com/rcourtman/Pulse/issues/249](https://github.com/rcourtman/Pulse/issues/249)

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-34.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-34.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-34.jpg" alt="image" loading="lazy">
</picture>

同时也能可视化设置告警的阈值，相当的方便

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-35.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-35.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-35.jpg" alt="image" loading="lazy">
</picture>

## 总结

其他就没什么了，简单好用，还能监控多个PVE，所有设置都被作者可视化了。就像作者说的

**Real-time monitoring for Proxmox VE and PBS with alerts, webhooks, and a clean web interface.**
