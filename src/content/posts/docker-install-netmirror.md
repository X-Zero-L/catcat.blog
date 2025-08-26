---
tags: [docker, laboratory]
title: "Docker 部署多节点 Looking Glass 面板NetMirror"
published: 2025-07-28
---

**最近因为客户需要做四线监控测试，我们在网上找了一圈 Looking Glass 面板，结果发现市面上现有的项目大多是基于 PHP 的老旧方案，要么界面陈旧、功能有限，要么已经多年无人维护，根本无法满足现代网络运维和多线路展示的需求。**

**于是，我们干脆决定自己动手，联合小伙伴一起开发了一个全新的 Looking Glass 项目 —— NetMirror，希望能为各大 IDC 运营商、oneman 运维以及广大网络爱好者提供更现代、更易用的解决方案。**

**在此也特别感谢 [wikihost-opensource](https://github.com/wikihost-opensource) 和 [Hybula](https://github.com/hybula/lookingglass) ，他们的项目为我们提供了很多设计和架构上的灵感。**

### NetMirror 是什么？

**NetMirror 是一个功能丰富、界面美观的现代化 Looking Glass 服务端面板，适用于展示和测试多线路网络节点状态。它支持常见的网络诊断工具（如 `ping`、`traceroute`、`mtr`、`speedtest` 等），并支持多地区节点统一展示，方便用户对比各线路的性能和可达性。**

## 官方Demo

**开源地址**：[https://github.com/catcat-blog/NetMirror](https://github.com/catcat-blog/NetMirror) **（欢迎点点star）**

[See it in action here!](https://lg.catcat.cloud/)

## ✨ 功能特性[](https://github.com/catcat-blog/NetMirror/blob/main/README_zh_CN.md#-%E5%8A%9F%E8%83%BD%E7%89%B9%E6%80%A7)

- **现代 UI: 基于 Vue3 + TailwindCSS 打造的响应式界面。**

- **网络工具: 集成了 Ping、iPerf3 和 Speedtest,BGP接口等一套工具。**

- **实时流量: 实时监控网络接口流量。**

- **交互式 Shell: 用于基本诊断的模拟 Shell 环境。**

- **轻松部署: 以单个 Docker 容器的形式提供。**

- **可定制: 通过环境变量配置功能和服务器详情。**

- ****多节点支持**: 考虑到部分商家的地区很多，同时也新增了主从地区切换的模块。**

- **安全设计：仅暴露面板与相关接口，节点通过 gRPC 安全通信。**

### 🧪 为什么选择 NetMirror？

**如果你正在为你的 VPS 提供网络测试服务、或者希望展示自己多地区的网络质量，NetMirror 将是一个轻量但功能完整的选择。你不再需要手动维护老旧 PHP 项目，也不必再折腾前后端对接。我们已经为你打包好了一切。**

## 📸 界面预览

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-44.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-44.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-44.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-45.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-45.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-45.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-46-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-46-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-46-scaled.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-47-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-47-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-47-scaled.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-48-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-48-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-48-scaled.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-49-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-49-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-49-scaled.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-50.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-50.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-50.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-51.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-51.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-51.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-52.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-52.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-52.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-53.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-53.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-53.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-54.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-54.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-54.jpg" alt="image" loading="lazy">
</picture>

这里可以定义你的多个数据中心，直接跳转查看其他地区的LG。

## 部署

### Docker 部署

### **克隆仓库**

```shell
git clone https://github.com/Yuri-NagaSaki/NetMirror.git cd NetMirror
```

### **创建环境文件**

**复制环境文件示例以创建您自己的配置。**

```shell
cp .env.example .env
```

**注意: 如果 `.env.example` 文件不存在，您可以创建一个空的 `.env` 文件，并从下表中添加您需要的变量。**

### **自定义您的配置 (可选)**

**编辑 `.env` 文件以设置您的服务器位置、公网 IP 地址和其他选项。**

### **启动服务:**

```shell
services:
  als:
    image: soyorins/netmirror:latest
    container_name: looking-glass-e
    restart: always
    network_mode: host
    user: root
    env_file:
      - .env
    volumes:
      - ./data:/data
      - ./.air.toml:/app/.air.toml
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:${HTTP_PORT:-80}/"]
      interval: 30s
      timeout: 10s
      retries: 3
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

```shell
docker compose up -d
```

**应用将可以通过 `http://<您的服务器IP>` 访问。默认端口是 3000，可以通过 `HTTP_PORT` 环境变量进行更改。**

### ENV配置解释

```shell
# ALS - Another Looking-glass Server 环境变量
# 将此文件复制为 .env 并填写您需要的值。

# --- 网络设置 ---
# 服务器绑定的 IP 地址。留空以绑定到所有网络接口。
LISTEN_IP=0.0.0.0
# 监听的 HTTP 端口。
HTTP_PORT=3000

# --- 服务器信息 ---
# 描述服务器位置的字符串。
LOCATION=BGP
# 服务器的公共 IPv4 地址。如果为空，将自动检测。
PUBLIC_IPV4=
# 服务器的公共 IPv6 地址。如果为空，将自动检测。
PUBLIC_IPV6=

# --- 网站品牌设置 ---
# 网站Logo设置，支持多种格式：
# 1. 图片URL: LOGO=https://example.com/logo.png
# 2. Base64图片: LOGO=data:image/png;base64,iVBORw0K...
# 3. Emoji表情: LOGO=🌐
# 4. 纯文本: LOGO=NetMirror
# 5. SVG代码: LOGO=<svg viewBox="0 0 24 24">...</svg>

# 示例：使用网络图标SVG
LOGO=<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="m16.24 7.76-1.41 1.41M15.76 16.24l1.41 1.41M7.76 16.24l1.41-1.41M7.76 7.76l1.41 1.41M12 3v6M12 15v6M3 12h6M15 12h6"/></svg>

# Logo类型（可选，留空自动检测）
# 支持的值: auto, url, base64, emoji, text, svg
LOGO_TYPE=auto

# 其他示例（取消注释测试）：
# 使用Emoji: LOGO=🌐
# 使用文本: LOGO=NetMirror
# 使用简单SVG图标: LOGO=<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z"/></svg>

# --- 功能开关 ---
# 设置为 'true' 或 'false' 来启用/禁用功能。
# 显示实时网卡流量图。
DISPLAY_TRAFFIC=true
# 启用 LibreSpeed (HTML5) 速度测试。
ENABLE_SPEEDTEST=true
# 启用 Ping 工具。
UTILITIES_PING=true
# 启用 MTR 工具。
UTILITIES_MTR=true
# 启用 Traceroute 工具。
UTILITIES_TRACEROUTE=true
# 启用 Speedtest.net CLI 集成。
UTILITIES_SPEEDTESTDOTNET=true
# 启用交互式伪 Shell。
UTILITIES_FAKESHELL=true
# 启用 iPerf3 服务器工具。
UTILITIES_IPERF3=true

# --- 功能配置 ---
# 用于下载速度测试的文件大小列表，以空格分隔。
# 例如："10MB 100MB 1GB"
SPEEDTEST_FILE_LIST=100MB 1GB 10GB
# iPerf3 服务器端口范围 - 起始。
UTILITIES_IPERF3_PORT_MIN=30000
# iPerf3 服务器端口范围 - 结束。
UTILITIES_IPERF3_PORT_MAX=31000

# --- 自定义 ---
# 显示赞助商信息。支持多种格式：
# 1. 本地文件路径：
#    - Markdown文件: SPONSOR_MESSAGE=/data/sponsor.md
#    - HTML文件: SPONSOR_MESSAGE=/data/sponsor.html
# 2. 网络链接：
#    - Markdown链接: SPONSOR_MESSAGE=https://example.com/sponsor.md (会下载内容)
#    - HTML页面链接: SPONSOR_MESSAGE=https://example.com/sponsor.html (会用iframe嵌入)
# 3. 直接内容：
#    - 纯文本: SPONSOR_MESSAGE="感谢使用我们的服务"
#    - HTML代码: SPONSOR_MESSAGE="<div><h2>赞助我们</h2><p>内容...</p></div>"
#    - Markdown文本: SPONSOR_MESSAGE="## 标题\n**粗体**内容"

# 使用 data 目录中的 Markdown 示例文件测试
SPONSOR_MESSAGE=data/sponsor-iframe-example.html

# 测试其他格式（取消注释可测试）：
# 使用 HTML iframe 页面
# SPONSOR_MESSAGE=/data/sponsor-iframe-example.html
# 使用外部网站 iframe
# SPONSOR_MESSAGE=https://example.com/sponsor
# 使用直接 HTML 内容
# SPONSOR_MESSAGE="<div style='text-align:center;'><h2 style='color:#0ea5e9;'>💝 感谢支持</h2><p>您的支持让我们更有动力！</p><a href='https://github.com/sponsors/username' target='_blank' style='color:#0ea5e9;'>GitHub Sponsors</a></div>"

# --- Looking Glass 节点配置 ---
# 节点列表格式: NAME1|LOCATION1|URL1;NAME2|LOCATION2|URL2
# 例如: "London|London, UK|http://IP:Port;Singapore|Singapore, SG|http://IP:Port;Tokyo|Tokyo, JP|http://IP:Port"
LG_NODES=London|London, UK|http://IP:Port;Singapore|Singapore, SG|http://IP:Port;Tokyo|Tokyo, JP|http://IP:Port;Frankfurt|Frankfurt, DE|http://IP:Port;New York|New York, US|http://IP:Port;Los Angeles|Los Angeles, US|http://IP:Port
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-55-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-55-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-55-scaled.jpg" alt="image" loading="lazy">
</picture>

镜像大小非常小，30MB不大，基本上所有机器都能部署。