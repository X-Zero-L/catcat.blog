---
tags: [docker, laboratory]
title: "Docker搭建AutoLady订阅\"学习资料\""
published: 2024-11-19
---

从 别人看到的项目，发现蛮不错的。来搭建试一下。如果可以的话，整个自动化追剧整理项目就大圆满了。前有 [MoviePilot](https://catcat.blog/docker-moviepilot.html) 刮削整理入库，中后 [ANi-RSS](https://catcat.blog/docker-ani-rss.html) 整理新番，现在最后一块拼图 AutoLady 也就位了。

## 部署 AutoLady

**我还是建议每个项目用单独的 qb 进行管理，不要混在一起，这将可能导致自动化出现问题！**

Docker 的安装部署已经在 ANI-RSS 中详细描述，这里不在赘述。有需要的前往 [Docker 部署 ani-rss 实现自动追番](https://catcat.blog/docker-ani-rss.html) 进行查看。

```shell
mkdir -p /root/docker/autolady
version: '3'
services:
  byte-muse:
    image: envyafish/byte-muse:latest
    container_name: byte-muse
    restart: always
    networks:
      - bridge
    ports:
      - "8043:80"
    volumes:
      - ./data:/data
networks:
  bridge:
    driver: bridge
```

首次启动需在日志中查看默认的管理员账号、密码：

```shell
docker logs auto-lady
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731994688777.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731994688777.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/QQ_1731994688777.jpg" alt="" loading="lazy">
</picture>

反向代理和域名配置不在赘述，自行配置。

最终打开 ip:8043 ,出现项目名称即是部署成功。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731994724111.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731994724111.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/QQ_1731994724111.jpg" alt="" loading="lazy">
</picture>

## 使用 AutoLady

### 配置 qbittorrent

位置：设置-下载器

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731994985625.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731994985625.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/QQ_1731994985625.jpg" alt="" loading="lazy">
</picture>

### 配置令牌

M-team的令牌在实验室-控制台-存取令牌界面可以生成：

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731995312205.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731995312205.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/QQ_1731995312205.jpg" alt="" loading="lazy">
</picture>

FSM 的也在控制台

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731995607564.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731995607564.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/QQ_1731995607564.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731995439104.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731995439104.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/QQ_1731995439104.jpg" alt="" loading="lazy">
</picture>

## 开始下载

在搜索里，输入想要的"老师"和"番号" ，在出现的内容下面点击下载，即可完成。

其他功能，相信各位老司机有这个需求的懂得都懂。

刮削入库可以参考这篇：[日本成人影片刮削器 MetaTube 的搭建与配置教程](https://catcat.blog/docker-metatube.html)

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731996792278.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/QQ_1731996792278.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/QQ_1731996792278.jpg" alt="" loading="lazy">
</picture>