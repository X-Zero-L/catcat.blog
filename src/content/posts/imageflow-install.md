---
tags: [docker, laboratory]
title: "ImageFlow 一款更适合你的图床"
published: 2025-03-22
coverImage: "gmonnnuasaahvq3.jpg"
---

一直以来我都是用的chevereto来作为图床管理，但是这个作者太脑瘫了。项目越改越辣鸡，经常增加一些虚头八脑的社交之类的功能，导致整个项目越来越臃肿卡顿，至于市面上其他的项目，我也不想再过多尝试，大部分都是基于多用户场景的，和我想要的相违背。本着既然没有，那就自己创造，还能加点我自己喜欢的功能，例如avif和webp格式自动压缩，API自适应横屏竖屏输出。于是 [ImageFlow](https://github.com/Yuri-NagaSaki/ImageFlow/) 就诞生了。

仓库地址：[https://github.com/Yuri-NagaSaki/ImageFlow/](https://github.com/Yuri-NagaSaki/ImageFlow) 欢迎点点star

## ✨ 主要特性[](https://github.com/Yuri-NagaSaki/ImageFlow/blob/main/README_zh.md#-%E4%B8%BB%E8%A6%81%E7%89%B9%E6%80%A7)

- **API 密钥认证**：安全的 API 密钥验证机制，保护您的图片上传功能

- **自适应图像服务**：根据设备类型（桌面端/移动端）自动提供横向或纵向图片

- **现代格式支持**：自动检测浏览器兼容性并提供 WebP 或 AVIF 格式图片

- **简单的 API**：通过简单的 API 调用获取随机图片

- **用户友好的上传界面**：支持拖拽上传，具有暗黑模式和实时预览功能

- **图片管理功能**：通过直观的管理界面查看、筛选和删除图片

- **自动图像处理**：上传后自动检测图像方向并转换为多种格式

- **多存储支持**：支持本地存储和 S3 兼容存储

## 🚀 技术优势

[](https://github.com/Yuri-NagaSaki/ImageFlow/blob/main/README_zh.md#-%E6%8A%80%E6%9C%AF%E4%BC%98%E5%8A%BF)

1. **安全性**：API 密钥验证机制确保图片上传和管理功能的安全访问

3. **格式转换**：自动将上传的图片转换为 WebP 和 AVIF 格式，减少 30-50% 的文件大小

5. **设备适配**：为不同设备提供最合适的图片方向

7. **热重载**：上传的图片无需重启服务即可立即可用

9. **并发处理**：使用 Go 的并发特性高效处理图像转换

11. **可扩展性**：模块化设计便于扩展和定制

13. **响应式设计**：完美适配桌面端和移动端设备

15. **暗黑模式支持**：自动适应系统主题。

17. **灵活存储**：支持本地和 S3 兼容存储，通过 .env 文件轻松配置

## 📸 界面预览

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image1.jpg" alt="ImageFlow" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image2.jpg" alt="ImageFlow" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image3.jpg" alt="ImageFlow" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image4.jpg" alt="ImageFlow" loading="lazy">
</picture>

## 快速开始

可以选择两种方式，都非常方便，一种是Docker，一种是 二进制部署。

先说最简单的Docker吧

### Docker部署

拉取并进入仓库

```shell
git clone https://github.com/Yuri-NagaSaki/ImageFlow && cd ImageFlow
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-23.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-23.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-23.jpg" alt="终端中显示Git clone命令执行过程" loading="lazy">
</picture>

修改.env

```shell
cp .env.example .env
vim .env
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-24.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-24.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-24.jpg" alt="" loading="lazy">
</picture>

根据所选择的部署模式调整 参数，具体 S3 的 下列参数如何获得这里就不再过多赘述了

```shell
# API Keys
API_KEY=your_api_key_here  # 这是你的API key 用于身份验证登录

# Storage Configuration
STORAGE_TYPE=local  # Options: local, s3  根据部署模式选择
LOCAL_STORAGE_PATH=static/images # Local

# S3 Configuration (required when STORAGE_TYPE=s3)
S3_ENDPOINT=
S3_REGION=
S3_ACCESS_KEY=
S3_SECRET_KEY=
S3_BUCKET=

# Custom Domain (optional)
CUSTOM_DOMAIN=   # 这里是S3 一般都会有的自定义域名。
```

拉取镜像准备部署

```shell
docker compose up -d
一般默认监听8686端口，如有必要，自行修改。
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-25.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-25.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-25.jpg" alt="Docker终端显示docker compose和ps命令输出" loading="lazy">
</picture>

### 本地部署

#### 安装依赖

安装 Go (1.22+)

安装 WebP 工具: **sudo apt-get install webp** (Ubuntu/Debian)

安装 AVIF 工具: **sudo apt-get install libavif-bin** (Ubuntu)

注意：这里的需要avif 1.0版本以上，Debian系统默认安装的是0.9 版本。需要自行[编译安装](https://github.com/AOMediaCodec/libavif)。

Ubuntu 24.04 默认即可安装最新版本

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-26.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-26.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-26.jpg" alt="终端显示Ubuntu版本信息" loading="lazy">
</picture>

下载二进制文件修改env

默认提供 X86 和ARM的，自行选择

```shell
git clone https://github.com/Yuri-NagaSaki/ImageFlow && cd ImageFlow
https://github.com/Yuri-NagaSaki/ImageFlow/releases/download/v1.0/imageflow-x86
chmod 777 imageflow-x86
cp .env.example .env
vim .env
./imageflow-x86
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-27.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-27.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-27.jpg" alt="终端显示文件操作与服务器启动" loading="lazy">
</picture>

创建service

```shell
[Unit]
Description=ImageFlow Service
After=network.target

[Service]
ExecStart=/path/to/imageflow
WorkingDirectory=/path/to/imageflow/directory
Restart=always
User=youruser

[Install]
WantedBy=multi-user.target
```

## 如何使用

打开 IP:8686端口 输入你在env设置的API\_Key

开始上传图片

**注意：由于压缩在本地进行，请选择CPU较强的进行部署**

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-28.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-28.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-28.jpg" alt="图片上传界面，支持拖放和选择文件" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-29.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-29.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-29.jpg" alt="二次元角色插画，两名女孩亲密互动" loading="lazy">
</picture>

点击右上进入管理

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-30.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-30.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-30.jpg" alt="上传工具界面，支持多种图片格式。" loading="lazy">
</picture>

这里会获取到你上传和压缩后的所有图片

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-31.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-31.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-31.jpg" alt="动漫角色图片集合，文件管理界面" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-32.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-32.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-32.jpg" alt="" loading="lazy">
</picture>

当然你也可以对某个图片进行删除，他会连带删除原始图片 avif 和webp 。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-33.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-33.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-33.jpg" alt="蓝发动漫角色，紫色服装，卡通风格" loading="lazy">
</picture>

### 访问API

API的地址是 IP:8686/api/ramdom

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-34.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-34.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-34.jpg" alt="窗前的动漫女孩插图" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-35.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-35.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-35.jpg" alt="动漫少女化妆，身上涂鸦涂装" loading="lazy">
</picture>

到此全部完成！

## 🤝 贡献

欢迎贡献！随时提交代码、报告问题或提出改进建议！