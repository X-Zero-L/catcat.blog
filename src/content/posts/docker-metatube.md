---
tags: [docker]
title: "日本成人影片刮削器 MetaTube 的搭建与配置教程"
published: 2024-02-04
---

## 一、MetaTube 介绍

**官网：**[https://metatube-community.github.io/](https://metatube-community.github.io/)

**项目地址：**[https://github.com/metatube-community/jellyfin-plugin-metatube](https://github.com/metatube-community/jellyfin-plugin-metatube)

整理过媒体库的都知道，资源的刮削一直是里面最令人头疼的问题。尤其在，市场规模庞大的日本成人电影这块，自带的那些刮削器和就显得有些无能为力了。

在 MetaTube 之前，我也是有测试过一些类似的刮削器，只是常常由于一些维护的原因，经常出现刮不到演员的头像啊，数据库失败等问题

直到我偶然之前在 Github 上查找相关插件项目查到了 MetaTube。

MetaTube 是一个开源项目，我个人觉得它比较好的地方是对日本成人影片的支持很不错（支持多个数据源），而且还内置有演员提供源，在刮削影片信息的同时也会帮用户建立演员的档案，可以说是非常贴心了。

不同于其它刮削器，MetaTube 是客户端（即 安装的对应插件）和服务器端配合着一起使用的。具体来说，我们刮削成人影片的数据时，服务器端会先在支持的源数据网站访问拉取数据并将其处理成适合 Jellyfin/Emby/Plex 使用的数据后，再经由客户端写入 Jellyfin/Emby/Plex 的影片数据库。

MetaTube 支持的成人影片检索网站挺多的，以后可能还会加别的，我就不一个一个列出来了，大家可以在后端代码的这个文件夹里看到支持的网站：

[https://github.com/metatube-community/metatube-sdk-go/tree/main/provider](https://github.com/metatube-community/metatube-sdk-go/tree/main/provider)

## 二、部署

### Docker-Compose部署

> 请确保部署平台已有Docker、Docker-compose环境（会用到8080端口，如果占用，请修改docker-compose.yml文件）

```shell
mkdir metatube-sdk-go && cd metatube-sdk-go
curl -sL https://raw.githubusercontent.com/metatube-community/metatube-sdk-go/main/docker-compose.yml -o docker-compose.yml
docker compose up -d
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image.jpg" alt="" loading="lazy">
</picture>

## 三、MetaTube 插件的安装与配置

弄完了上面的服务端，接着安装对应的 Jellyfin 插件配置就可以了，因为这部分比较简单，我就直接复制一下作者提供的安装步骤了：

> 1.进入 Jellyfin 控制台 > 插件 > 存储库，点击添加
> 
> 2.输入存储库名称：MetaTube
> 
> 3.输入存储库URL：https://raw.githubusercontent.com/metatube-community/jellyfin-plugin-metatube/dist/manifest.json
> 
> 4.在插件目录下找到 MetaTube，点击安装 重启Jellyfin**安装说明参考：**[https://metatube-community.github.io/wiki/plugin-installation/](https://metatube-community.github.io/wiki/plugin-installation/)

安装好 MetaTube 的插件后，在插件目录里找到 MetaTube，点击它就能打开设置页面。

由于是针对初期配置的说明，关于 MetaTube 那些具体选项的作用我就不一一细说了，只说下怎么填写我们前面搭建好的服务端信息。

Server：填写服务端的地址和端口，比如 http://ip:8080

Token：填写服务端配置的密钥（密码），没有就留空

只是想要连接配置好服务端，写好这两项就够了，后面的都是针对刮削器的设置，大家根据自己的情况设置即可。

搞定设置之后，记得点下最下面的 Save 按钮保存配置，剩下的就是和我们平常使用 Jellyfin 刮削器一样了，可以直接在媒体库设置里指定使用 MetaTube 作为数据提供源~

Plex，emby等同理

## 四、效果展示

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-1.jpg" alt="" loading="lazy">
</picture>