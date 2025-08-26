---
tags: [docker, laboratory]
title: "Docker 部署 ani-rss 实现自动追番"
published: 2024-09-11
coverImage: "QQ_1726020301071.png"
---

\[timeline\] 2025-07-06 | v2本吧更新 | 见文章最后的更新教程 \[/timeline\]

Ani-RSS 的工作原理和功能与 AutoBangumi非常类似，但是解决了不少AutoBangumi的痛点问题。作者超能肝，一天能发三四个版。(干翻 ab，ani-rss永存)

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/image-4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/image-4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/image-4.jpg" alt="" loading="lazy">
</picture>

## 1\. 前言

项目地址：[https://github.com/wushuo894/ani-rss](https://github.com/wushuo894/ani-rss)

官网：[Ani-RSS](https://docs.wushuo.top/)

官方部署教程（推荐看看）：[快速开始](https://docs.wushuo.top/docker)

二次元狂喜！

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726020301071.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726020301071.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/QQ_1726020301071.jpg" alt="" loading="lazy">
</picture>

## 2.部署(本文基于 Debian 12)

### 2.1 安装 docker

以下操作需要在 root 用户下完成，请使用 `sudo -i` 或 `su root` 切换到 root 用户进行操作。

首先，安装一些必要的软件包：

```shell
apt update
apt upgrade -y
apt install curl vim wget gnupg dpkg apt-transport-https lsb-release ca-certificates
```

然后加入 Docker 的 GPG 公钥和 apt 源：

Debian

```shell
curl -sSL https://download.docker.com/linux/debian/gpg | gpg --dearmor > /usr/share/keyrings/docker-ce.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-ce.gpg] https://download.docker.com/linux/debian $(lsb_release -sc) stable" > /etc/apt/sources.list.d/docker.list
```

Ubuntu

```shell
curl -sSL https://download.docker.com/linux/debian/gpg | gpg --dearmor > /usr/share/keyrings/docker-ce.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-ce.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -sc) stable" > /etc/apt/sources.list.d/docker.list
```

国内机器可以用[清华 TUNA](https://mirrors.tuna.tsinghua.edu.cn/) 的国内源：

Debian

```shell
curl -sS https://download.docker.com/linux/debian/gpg | gpg --dearmor > /usr/share/keyrings/docker-ce.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-ce.gpg] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/debian $(lsb_release -sc) stable" > /etc/apt/sources.list.d/docker.list
```

Ubuntu

```shell
curl -sS https://download.docker.com/linux/debian/gpg | gpg --dearmor > /usr/share/keyrings/docker-ce.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-ce.gpg] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu $(lsb_release -sc) stable" > /etc/apt/sources.list.d/docker.list
```

然后更新系统后即可安装 Docker CE 和 Docker Compose 插件：

```shell
apt update
apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

此时可以使用 `docker version` 命令检查是否安装成功：

### 2.2 安装 Docker Compose

因为我们已经安装了 `docker-compose-plugin`，所以 Docker 目前已经自带 `docker compose` 命令，基本上可以替代 `docker-compose`：

```shell
root@debian ~ # docker compose version
Docker Compose version v2.27.1
```

如果某些镜像或命令不兼容，则我们还可以单独安装 Docker Compose：

我们可以使用 Docker 官方发布的 [Github](https://github.com/docker/compose) 直接安装最新版本：

```shell
curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-Linux-x86_64 > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

此时可以使用 `docker-compose version` 命令检查是否安装成功：

```shell
root@debian ~ # docker-compose version
Docker Compose version v2.27.1
```

### 2.3 修改 docker 配置

以下配置会增加一段自定义内网 IPv6 地址，开启容器的 IPv6 功能，以及限制日志文件大小，防止 Docker 日志塞满硬盘 ：

```shell
cat > /etc/docker/daemon.json << EOF
{
    "log-driver": "json-file",
    "log-opts": {
        "max-size": "20m",
        "max-file": "3"
    },
    "ipv6": true,
    "fixed-cidr-v6": "fd00:dead:beef:c0::/80",
    "experimental":true,
    "ip6tables":true
}
EOF
```

然后重启 Docker 服务：

```shell
systemctl restart docker
```

## 3\. 部署 Ani-RSS

### 3.1 创建配置文件

```shell
mkdir -p /root/docker/ani-rss/config
也可以自己选择自己的下载目录，只需要和下面路径一致就可以
mkdir -p /root/docker/ani-rss/downloads   （可选）
cd /docker/ani-rss
```

| 参数 | 作用 | 默认值 |
| --- | --- | --- |
| PORT | 端口号 | 7789 |
| CONFIG | 配置文件存放位置 | /config |
| TZ | 时区 | Asia/Shanghai |

ps: 如果需要开启 文件已下载自动跳过 功能 请确保 qBittorrent 与本程序 docker 映射挂载路径一致

### 3.2 docker-compose.yaml 部署

强烈建议新开一个 qb 进行单独的下载操作，不要和其他项目占用的 qb 混用。

我这里提供一个镜像容器的地址吧。

swr.ap-southeast-1.myhuaweicloud.com/soyorin/ani-rss:latest

强烈推荐使用 **qBittorrent**。

创建docker-compose.yaml文件，内容如下:

```shell
vim docker-compose.yaml
```

```shell
services:
  ani-rss:
    container_name: ani-rss
    volumes:
      - /root/docker/ani-rss/config:/config
      - /docker/ani-rss/downloads:/download  # 下载的存储路径 需要和ani-rss保持一致
    ports:
      - 7789:7789
    environment:
      - PORT=7789
      - CONFIG=/config
      - TZ=Asia/Shanghai
    restart: always
    image: swr.ap-southeast-1.myhuaweicloud.com/soyorin/ani-rss:latest
  
  qbittorrent:
    image: swr.ap-southeast-1.myhuaweicloud.com/soyorin/qbittorrent:latest
    container_name: qbittorrent-mikan
    restart: always
    tty: true
    network_mode: bridge
    hostname: qbitorrent
    stop_grace_period: 10m
    volumes:
      - /docker/ani-rss/downloads:/download   # 下载的存储路径 需要和ani-rss保持一致
    tmpfs:
      - /tmp
    environment:
      - QB_USERNAME=你的账户
      - QB_PASSWORD=你的密码
      - WEBUI_PORT=15768   #qb 的 web 端口
      - BT_PORT=34567       # BT端口
      - PUID=0        
      - PGID=0        
    ports:
      - 15768:15768           # qb web 端口映射
      - 34567:34567      
      - 34567:34567/udp  
```

### 3.3 启动项目

```shell
docker compose up -d
```

查看是否成功

```shell
docker ps -a 
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726018765245.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726018765245.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/QQ_1726018765245.jpg" alt="" loading="lazy">
</picture>

## 4\. 访问以及使用

默认 用户名: admin 密码: admin

访问上方 http:// ip: 7789 即可访问

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726018975088.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726018975088.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/QQ_1726018975088.jpg" alt="" loading="lazy">
</picture>

### 4.1 修改密码

由于可以公网访问，所以修改我们的用户名与密码是必须的。其中 qbittorrent(在 docker-compose.yaml 里可以直接设置) 。Ani-RSS 的地址需要在 WEB-UI 中修改。

右上角-设置-登录设置

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726019078021.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726019078021.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/QQ_1726019078021.jpg" alt="" loading="lazy">
</picture>

### 4.2 设置参考

#### 4.2.1 连接设置参考

连接 qbittorrent，设置保存位置和存储方式。

都是字面意思，这里不再多解释，建议开启自动删除，拼音首字母。

保存位置需要和docker-compose.yaml 里设置的容器内部一致。

注意 设置里的地址不要末尾不要加/

##### 自动删除已完成任务[](https://docs.wushuo.top/docs#%E8%87%AA%E5%8A%A8%E5%88%A0%E9%99%A4%E5%B7%B2%E5%AE%8C%E6%88%90%E4%BB%BB%E5%8A%A1)

当下载器中已下载并完成做种后删除任务，不会删除本地文件

##### 同时下载数量限制[](https://docs.wushuo.top/docs#%E5%90%8C%E6%97%B6%E4%B8%8B%E8%BD%BD%E6%95%B0%E9%87%8F%E9%99%90%E5%88%B6)

防止同时下载任务过多IO爆炸导致qb卡死

强烈建议视性能设置, 推荐 1-2

##### 拼音首字母[](https://docs.wushuo.top/docs#%E6%8B%BC%E9%9F%B3%E9%A6%96%E5%AD%97%E6%AF%8D)

用于整理番剧到A-Z文件夹中 如:

```shell
.
├── #
│   └── 【我推的孩子】
│       └── Season 2
│           ├── 【我推的孩子】 S02E12.mkv
│           ├── 【我推的孩子】 S02E13.mkv
│           ├── 【我推的孩子】 S02E14.mkv
│           ├── 【我推的孩子】 S02E15.mkv
│           ├── 【我推的孩子】 S02E16.mkv
│           ├── 【我推的孩子】 S02E17.mkv
│           ├── 【我推的孩子】 S02E18.mkv
│           ├── 【我推的孩子】 S02E19.mkv
│           └── 【我推的孩子】 S02E20.mkv
├── B
│   ├── 不时用俄语小声说真心话的邻桌艾莉同学
│   │   └── Season 1
│   │       ├── 不时用俄语小声说真心话的邻桌艾莉同学 S01E01.mp4
│   │       ├── 不时用俄语小声说真心话的邻桌艾莉同学 S01E02.mp4
│   │       ├── 不时用俄语小声说真心话的邻桌艾莉同学 S01E03.mp4
│   │       ├── 不时用俄语小声说真心话的邻桌艾莉同学 S01E04.mp4
│   │       ├── 不时用俄语小声说真心话的邻桌艾莉同学 S01E05.mp4
│   │       ├── 不时用俄语小声说真心话的邻桌艾莉同学 S01E06.mp4
│   │       ├── 不时用俄语小声说真心话的邻桌艾莉同学 S01E07.mp4
│   │       ├── 不时用俄语小声说真心话的邻桌艾莉同学 S01E08.mp4
│   │       ├── 不时用俄语小声说真心话的邻桌艾莉同学 S01E09.mp4
│   │       └── 不时用俄语小声说真心话的邻桌艾莉同学 S01E10.mp4
│   └── 败犬女主太多了！
│       └── Season 1
│           ├── 败犬女主太多了！ S01E01.mp4
│           ├── 败犬女主太多了！ S01E02.mkv
│           ├── 败犬女主太多了！ S01E03.mkv
│           ├── 败犬女主太多了！ S01E04.mkv
│           ├── 败犬女主太多了！ S01E05.mkv
│           ├── 败犬女主太多了！ S01E06.mkv
│           ├── 败犬女主太多了！ S01E07.mkv
│           └── 败犬女主太多了！ S01E08.mkv
```

##### 设置参考

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726019309038.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726019309038.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/QQ_1726019309038.jpg" alt="" loading="lazy">
</picture>

#### 4.2.2 基础设置参考

##### RSS间隔(分钟)[](https://docs.wushuo.top/docs#rss%E9%97%B4%E9%9A%94%E5%88%86%E9%92%9F)

RSS更新检查的间隔，单位 分钟

##### 自动重命名[](https://docs.wushuo.top/docs#%E8%87%AA%E5%8A%A8%E9%87%8D%E5%91%BD%E5%90%8D)

自动命名视频与字幕让其易于刮削

如:

```shell
2024-09-01 13:29:06.865 [rss-task-thread] INFO  ani.rss.util.TorrentUtil - 添加下载 Wonderful 光之美少女！ S01E31
2024-09-01 13:29:06.866 [rss-task-thread] INFO  ani.rss.util.TorrentUtil - 下载种子 Wonderful 光之美少女！ S01E31
2024-09-01 13:29:46.352 [rename-task-thread] INFO  ani.rss.util.TorrentUtil - 重命名 [FLsnow][Wonderful_Precure！][31][1080P]/[FLsnow][Wonderful_Precure！][31][1080P].mkv ==> Wonderful 光之美少女！ S01E31.mkv
2024-09-01 13:29:46.362 [rename-task-thread] INFO  ani.rss.util.TorrentUtil - 重命名 [FLsnow][Wonderful_Precure！][31][1080P]/[FLsnow][Wonderful_Precure！][31][1080P].cht.ass ==> Wonderful 光之美少女！ S01E31.cht.ass
2024-09-01 13:29:46.365 [rename-task-thread] INFO  ani.rss.util.TorrentUtil - 重命名 [FLsnow][Wonderful_Precure！][31][1080P]/[FLsnow][Wonderful_Precure！][31][1080P].chs.ass ==> Wonderful 光之美少女！ S01E31.chs.ass
2024-09-01 13:38:49.392 [rename-task-thread] INFO  ani.rss.util.TorrentUtil - 删除已完成任务 Wonderful 光之美少女！ S01E31
```

##### 重命名间隔(分钟)[](https://docs.wushuo.top/docs#%E9%87%8D%E5%91%BD%E5%90%8D%E9%97%B4%E9%9A%94%E5%88%86%E9%92%9F)

单位 分钟

##### 自动跳过[](https://docs.wushuo.top/docs#%E8%87%AA%E5%8A%A8%E8%B7%B3%E8%BF%87)

自动检测季度文件夹下是否已经下载某集

支持的命名:

```shell
├─A
│  └─安达与岛村
│      ├─S1
│      │       安达与岛村 S1E1.mp4
│      ├─S01
│      │       安达与岛村 S01E02.mp4
│      ├─Season 1
│      │       S1E3.mp4
│      └─Season 01
│              S01E04.mp4
│              安达与岛村(2020) S1E5.mp4
│              安达与岛村(2020) S01E06.mp4
```

PS: 此选项 **必须启用自动重命名**。确保 **下载工具** 与 **ani-rss** 的 docker 映射挂载路径 **保持一致**

##### 动推断剧集偏移[](https://docs.wushuo.top/docs#%E8%87%AA%E5%8A%A8%E6%8E%A8%E6%96%AD%E5%89%A7%E9%9B%86%E5%81%8F%E7%A7%BB)

当添加RSS时会根据最小集数计算出集数偏移

如 无职转生 第二季 是从 第 0 集开始的 则自动识别偏移为 1

如 我推的孩子 第二季 有些字幕组是从第 12 集开始的 则自动识别偏移为 -11

主要看你的个人喜好决定是否开启

##### 自动禁用订阅[](https://docs.wushuo.top/docs#%E8%87%AA%E5%8A%A8%E7%A6%81%E7%94%A8%E8%AE%A2%E9%98%85)

根据 Bangumi 获取总集数 当所有集数都已下载时自动禁用该订阅

##### 设置参考

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726019420863.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726019420863.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/QQ_1726019420863.jpg" alt="" loading="lazy">
</picture>

### 4.2.3 全局排除设置

由于字幕组通常发布会连带好几个版本的，可以通过排除选择自己最喜欢的版本。

例如：

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/14e35711c5547562e5f9f5a4ec7e39a3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/14e35711c5547562e5f9f5a4ec7e39a3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/14e35711c5547562e5f9f5a4ec7e39a3.jpg" alt="" loading="lazy">
</picture>

如果你不想下载繁日的版本，你可以在全局设置

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726020109445.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726020109445.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/QQ_1726020109445.jpg" alt="" loading="lazy">
</picture>

当然你也可以对单独的番剧进行设置

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726020168546.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726020168546.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/QQ_1726020168546.jpg" alt="" loading="lazy">
</picture>

### 4.3.4 TG通知设置

#### 4.3.4.1 获取 Token

首先要去TG 的 [`BotFather`](https://t.me/BotFather) 创建bot(跟着提示操作就好)

1. 输入 `/newbot` 后回车它会回你以下内容Alright, a new bot. How are we going to call it? Please choose a name for your bot.

3. 这个名字是显示名称 （display name）,不是唯一识别码，现在随便设置一下，之后可以通过 `/setname` 修改比如设置成 `Zhang san's sweety bot`

5. 接着会让你设置唯一名称。字符串必须 endsWith `bot`，比如 `abc_bot` 或 `HelloWorldbot` 都是合法的。如果你设置的名字已经被占用需要重新设置。比如你设置成了 `test_bot`Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris\_bot.

7. 恭喜！设置成功。会返回给你重要的 API token，务必要保存好它。另外你的 bot 的唯一 url 就已经生成: `https://t.me/test_bot`Done! Congratulations on your new bot. You will find it at t.me/test\_bot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.Use this token to access the HTTP API:  
    12345678:sdfsfadsfasdfasdfasdfgdfhdfghfgh  
    Keep your token secure and store it safely, it can be used by anyone to control your bot.For a description of the Bot API, see this page: [https://core.telegram.org/bots/api](https://core.telegram.org/bots/api)

9. 一些其他必要的命令
    - `/setdescription` 帮助你设置 bot 的描述
    
    - `/setuserpic` 设置 bot 的头像。上传的图片 size 需要大于等于 150x150。而且上传图片需要选择压缩，不能上传文件！

#### 4.3.4.2 获取 chatId

观察这个 url `https://api.telegram.org/bot{token}/getUpdates`

使用第二步获得的 `token` 替换上述 url 中的 `{token}` 然后得到新的 url，复制粘贴到浏览器地址栏，回车请求。不出意外你会得到如下 response

1234`{     "ok": true,     "result": [] }`

很好。这时你打开你的 bot，随便和它说一句话，比如给它发一句 "Hello World"，然后重新请求一遍上述的 url（替换过 token 的），然后浏览器调用 Ctrl + F 搜索 **"id":1** 就能获取到 chatId

#### 4.3.4.3 填入启用

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/image-5.jpg" alt="" loading="lazy">
</picture>

点击测试，即可成功。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/image-6.jpg" alt="" loading="lazy">
</picture>

### 4.3.5 Bark 通知

#### 4.3.5.1 部署 Bark

创建文件夹

mkdir -p /root/docker/bark

vim docker-compose.yaml

```shell
services:
  bark-server:
    image: finab/bark-server
    container_name: bark-server
    restart: always
    volumes:
      - ./data:/data
    ports:
      - "18999:8080"
```

```shell
之后输入 http://ip:8090/ping 访问了。如何有域名需求，自行设置反代。不做赘述
```

```shell
iOS在 APP Store 里找到 Bark打开 APP，默认指向了官方服务器 api.day.app，需要点右上角的 + 号来添加我们前面搭建的私有服务器：输入你的 ip:端口测试连接并进行绑定会显示不同内容的发送格式#  推送内容https://地址/Xy4ssdd2pARjLfFY/这里改成你自己的推送内容# 推送标题https://地址/Xy4ssdd2pARjLfFY/推送标题/这里改成你自己的推送内容
```

拿到地址后面类似 **Xy4ssdd2pARjLfFY** 一串数据就行。

填入Ani-RSS 就行。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726296667862.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1726296667862.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/QQ_1726296667862.jpg" alt="" loading="lazy">
</picture>

### 4.4 如何洗版换源

通常我们追番讲究时效性，会选择Baha CR等片源，进而选择Ani进行订阅，但因为Baha是繁体也有翻译的问题，因此常常我们会优选高质量字幕组的作品进行入库整理。而Ani-RSS正好提供了该功能。

首先进行基础设置，**打开备用RSS按钮，关闭自动跳过功能。**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/f9d207fc623a7102ddb917f86ae31fd1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/f9d207fc623a7102ddb917f86ae31fd1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/f9d207fc623a7102ddb917f86ae31fd1.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/19fba66c736b40221b4ab397e270bd22.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/19fba66c736b40221b4ab397e270bd22.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/19fba66c736b40221b4ab397e270bd22.jpg" alt="" loading="lazy">
</picture>

然后找到你当前订阅的番剧，设置字幕组的版本为主RSS，ANI等Baha等追番流媒体设置为备用RSS。

添加方式和 之前主RSS一致，选择Ani就行。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/4502f3fd5253697d222442623f3b0f2b.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/4502f3fd5253697d222442623f3b0f2b.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/4502f3fd5253697d222442623f3b0f2b.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/37723fb2132b2958952b53c5ad1cbfb2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/37723fb2132b2958952b53c5ad1cbfb2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/37723fb2132b2958952b53c5ad1cbfb2.jpg" alt="" loading="lazy">
</picture>

添加成功后，可以查看预览。**这样当番剧更新，第一时间会从备用RSS进行下载，保证第一时间追番。当主RSS字幕组更新后，会将备用RSS的版本删除，将主RSS的版本入库整理。**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/image-7.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/image-7.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/image-7.jpg" alt="" loading="lazy">
</picture>

## 更新v2版本

由于作者之后自己写的屎山太多了，于是进行了破坏性的v2版本更新。

如果你现在的版本的用的尚可，没必要追着更新，大部分新增的功能都不是不可获取的。

```shell
1. 关闭 ani-rss

docekr stop ani-rss

2. 复制文件 ani.json 与 config.json 为，`ani.v2.json` 、 `config.v2.json`。
由于文件会持久化，所以我们直接进行备份和重命名
cp ani.json ani.json.bak
mv ani.json ani.v2.json
cp config.json config.json.bak
mv config.json config.v2.json

3. 使用文本编辑器打开 `ani.v2.json` 替换文字 backRssList 为 standbyRssList

如果你是Linux，我这里直接给出命令 
sed -i 's/"backRssList"/"standbyRssList"/g' ani.v2.json

4. 重启 ani-rss, 大部分配置即可保留

PS: 你可能需要重新编写保存位置模版
```

## 5\. 如果你是懒狗

参照 [猫猫Emby服食用指南](https://catcat.blog/catcat-emby.html?swcfpc=1) 向我申请。