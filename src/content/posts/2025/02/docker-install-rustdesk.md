---
title: "Docker 搭建 Rustdesk 自建中继服务器"
published: 2025-02-27
categories: 
  - "docker"
  - "laboratory"
---

RustDesk 是一款开源的远程桌面应用程序，旨在为用户提供简单、安全且高效的远程访问体验。它由 Rust 语言编写（这也是其名称的由来），以轻量化和高性能著称。与传统的远程桌面工具（如 TeamViewer 或 AnyDesk）不同，RustDesk 的最大亮点在于它支持自托管。这意味着你完全可以掌控自己的数据，摆脱对第三方服务器的依赖，同时确保连接的隐私性和安全性。

RustDesk 的设计理念是“开箱即用”。无论是远程控制电脑还是文件传输，它都不需要复杂的配置即可上手。对于普通用户，你可以使用官方提供的公共服务器快速连接；而对于追求极致控制的高级用户，自建中继服务器则是一个完美的选择。

## RustDesk 的核心优势

- **开源透明**：RustDesk 的代码托管在 GitHub 上，任何人都可以查看、审计甚至贡献代码，确保没有隐藏的后门或隐私风险。
- **跨平台支持**：它兼容 Windows、macOS、Linux、iOS 和 Android，几乎覆盖了所有主流操作系统。
- **端到端加密**：基于 NaCl 的加密技术，让你的远程连接始终安全无虞。
- **自托管选项**：通过自建服务器，你可以完全掌握数据流向，避免依赖第三方服务，提升隐私保护。
- **简单易用**：无论是技术小白还是资深玩家，RustDesk 的界面和功能都兼顾了易用性与灵活性。

## 为什么选择自建中继服务器？

尽管 RustDesk 默认提供了一个免费的公共服务器，但对于有特定需求的用户来说，自建中继服务器有以下优势：

1. **更高的隐私性**：所有连接数据都在你自己的服务器上，不经过任何第三方。
2. **更好的性能**：根据你的网络环境优化服务器位置，减少延迟。
3. **完全控制**：你可以自定义配置，满足企业或个人特殊需求。

## 为什么现在推荐部署 RustDesk？

当前是部署 RustDesk 自建中继服务器的绝佳时机，尤其是因为国内多家公有云厂商近期推出了轻量高带宽服务器。这些服务器以低成本、高性能和充足带宽著称，非常适合运行 RustDesk 的中继和信号服务器。以下是具体理由：

- **成本效益高**：轻量服务器通常提供 1 核 CPU、1 GB 内存起步的配置，已足以满足 RustDesk 服务器的最低硬件需求，且价格亲民，年费甚至可能低至30（如某些活动价格），大大降低了自建服务器的门槛。
- **高带宽支持**：RustDesk 的中继服务器在处理多用户连接和数据传输时对带宽要求较高，而国内轻量高带宽服务器提供的200M无限带宽和BGP接入，足以支持稳定、低延迟的远程连接，特别适合远程办公或团队协作场景。
- **快速部署与扩展**：这些服务器通常支持 Docker 一键部署，结合 RustDesk 的开源特性，你可以快速搭建并根据需求灵活扩展，无论是个人使用还是企业级应用都游刃有余。
- **本地化优势**：依托国内云服务商的服务器，连接速度更快，延迟更低，特别适合在中国大陆地区使用，规避了国际链路可能带来的不稳定性和速度瓶颈。

需要注意的是，近期有不法分子利用 RustDesk 进行诈骗活动。如果有人通过电话要求你安装 RustDesk，尤其是你不认识或不信任的人，请立即挂断电话并拒绝安装，以保护你的隐私和财产安全。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-46.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-46.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-46.jpg" alt="" loading="lazy">
</picture>

## 部署

这里不在描述如何安装docker了，相信看我博客看的多的都会了。

直接给出docker-compose.yaml

```
networks:
  dozzle_default:
    external: true

services:
  hbbs: # RustDesk ID/Rendezvous 服务器
    container_name: hbbs
    ports:
      - 21115:21115 # 用于 NAT 类型测试的 TCP
      - 21116:21116 # TCP打孔
      - 21116:21116/udp # UDP心跳/ID服务器
      - 21118:21118 # 如果要运行web客户端，则使用TCP进行web套接字
    image: rustdesk/rustdesk-server:latest
    command: hbbs
    volumes:
      - /data/rustdesk/hbbs:/root
    environment:
      - 'RELAY=IP:21117' # 运行这些容器的服务器的【IP:port】或域名
      - 'ENCRYPTED_ONLY=1' # 开启加密
      - 'KEY=Key' # 自定义KEY，去掉这一行可以自动生成
    networks:
      - dozzle_default
    depends_on:
      - hbbr
    restart: unless-stopped

  hbbr: # RustDesk 中继服务器
    container_name: hbbr
    ports:
      - 21117:21117 # TCP中继
      - 21119:21119 # 如果要运行web客户端，则使用TCP进行web套接字
    image: rustdesk/rustdesk-server:latest
    command: hbbr
    volumes:
      - /data/rustdesk/hbbr:/root
    networks:
      - dozzle_default
    restart: unless-stopped
```

```
docker compose up -d  启动
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-42.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-42.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-42.jpg" alt="" loading="lazy">
</picture>

## 安装和使用

安装客户端

找到 设置---网络---ID/中继服务器

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-43.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-43.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-43.jpg" alt="" loading="lazy">
</picture>

填入你在服务端设置的key和你的服务器地址:端口即可

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-44.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-44.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-44.jpg" alt="" loading="lazy">
</picture>

其他用法和 向日葵/Todesk 类似，不在赘述了

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-45.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-45.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-45.jpg" alt="" loading="lazy">
</picture>
