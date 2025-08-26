---
tags: [docker, laboratory]
title: "Docker 部署 自动化观影 MoviePilot v2"
published: 2025-04-02
---

# 前言

MoviePilot v1 部署：[Docker 部署 自动化观影平台MoviePilot](https://catcat.blog/docker-moviepilot.html)

之前写个一版[v1](https://catcat.blog/docker-moviepilot.html)的，其实已经很够用了，但是作者又开了一个新坑。我也懒得迁移，所以一直也没迁移也没升级，近来又添了一台存储服务器，于是顺手体验一下v2有了哪些变化。

# 对比

从配置文件上来讲，v2做了很大的改变，v1之前大量的环境变量参数现如今都不允许在docker-compose.yaml里再设置了，站点认证和各种各样的配置都已经集成到可视化界面设置中去。

# 部署

## 环境准备

### 下载器

- **Qbittorrent**：版本要求 >= `4.3.9`

- **Transmission**：版本要求 >= `3.0`

### 媒体服务器

- **Emby**：建议版本 >= `4.8.0.45`

- **Jellyfin**：推荐使用`latest`分支

- **Plex**：无特定版本要求

### CookieCloud

- **CookieCloud服务端**：可选，MoviePilot已经内置了CookieCloud服务端，如需独立安装可参考 [easychen/CookieCloud](https://github.com/easychen/CookieCloud) 说明 **注意：这个独立安装不是很推荐，建议使用集成好的。**

- **CookieCloud浏览器插件**：不管是使用CookieCloud独立服务端还是使用内置服务，都需要安装浏览器插件，访问 [此处](https://github.com/easychen/CookieCloud/releases) 下载安装到浏览器。

## 部署

```shell
mkdir MoviePilot
cd MoviePilot
vim docker-compose.yaml
非必要可以不修改yaml文件，比v1好很多
docker compse up -d
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-52.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-52.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-52.jpg" alt="Docker终端显示容器状态和警告信息。" loading="lazy">
</picture>

```shell
services:
  moviepilot:
    stdin_open: true  # 是否打开标准输入流（交互模式），为 true 时容器可以保持运行并与用户交互
    tty: true  # 是否分配伪终端，使容器的终端行为更像一个真实的终端
    container_name: moviepilot-v2  # 容器的名称
    hostname: moviepilot-v2  # 容器主机名

    # 网关设置
    network_mode: host  # 内置的网关
    # networks:  # 自定义网关
    #  - moviepilot

    # 端口映射，当network_mode的值为 host 时，将失效
    # ports:
      # 前端 UI 显示
      # - target: 3000  # 容器内部端口设置为 3000
      #   published: 3000  # 映射到宿主机的 3000 端口，允许外部访问
      #   protocol: tcp  # TCP 协议，可选udp
      # API 接口
      # - target: 3001  # 容器内部端口设置为 3001
      #   published: 3001  # 映射到宿主机的 3001 端口，允许外部访问
      #   protocol: tcp  # TCP 协议，可选udp

    # 目录映射：宿主机目录:容器内目录
    volumes:
      - './media:/media'  # 媒体库或下载库路径
      - './moviepilot-v2/config:/config'  # moviepilot 的配置文件存放路径
      - './moviepilot-v2/core:/moviepilot/.cache/ms-playwright'  # 浏览器内核存放路径
      - '/var/run/docker.sock:/var/run/docker.sock:ro'  # 用于获取宿主机的docker管理权，一般用于UI页面重启或自动更新

    # 环境变量：- '变量名=值‘
    environment:
      - 'NGINX_PORT=3000'  # UI页面的内部监听端口
      - 'PORT=3001'  # API接口的内部监听端口
      - 'PUID=0'  # 设置应用运行时的用户 ID 为 0（root 用户）
      - 'PGID=0'  # 设置应用运行时的组 ID 为 0（root 组）
      - 'UMASK=000'  # 文件创建时的默认权限掩码，000 表示不限制权限
      - 'TZ=Asia/Shanghai'  # 设置时区为上海（Asia/Shanghai）
      # - 'AUTH_SITE=iyuu'  # 设置认证站点，v2.0.7+版本以后可不设置，直接通过 UI 配置
      # - 'IYUU_SIGN=xxxx'  # 单个站点密钥，配合 AUTH_SITE 使用
      - 'SUPERUSER=admin'  # 设置超级用户为 admin
      # - 'API_TOKEN=无需手动配置，系统会自动生成。如果需要自定义配置，必须为16位以上的复杂字符串'

    # 重启模式:
    restart: always  # 始终重启
    image: jxxghp/moviepilot-v2:latest

# 当使用内置网关时，可不启用
# networks:
#   moviepilot:  # 定义一个名为 moviepilot 的自定义网络
#     name: moviepilot  # 网络的名称
```

## 反向代理

如需开启域名访问MoviePilot，则需要搭建反向代理服务。以`nginx`为例，需要添加以下配置项，否则可能会导致部分功能无法访问（`ip:port`修改为实际值）：

```shell
location / {
    proxy_pass http://ip:port;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

反向代理使用SSL时，还需要开启http2，否则会导致日志加载时间过长或不可用：

```shell
server {
    listen 443 ssl;
    http2 on;
    # ...
}
```

**代理服务连接超时时间应尽量长⼀些，比如10分钟，避免代理服务器强制中断请求。**

# 使用

## 打开网页

IP:3000 或者你配置反向代理的域名

登录用户**admin**密码可以使用 docker logs moviepilot-v2 获取

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-53.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-53.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-53.jpg" alt="终端显示程序日志信息，含更新和下载步骤" loading="lazy">
</picture>

## 认证

进入之后点击右上角头像 下拉选框 - 用户认证进行站点的认证。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-51.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-51.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-51.jpg" alt="用户认证界面，输入用户ID和密钥" loading="lazy">
</picture>

- **根据下表配置`AUTH_SITE`，以及对应站点的认证参数：**

| 站点名 | AUTH\_SITE | 环境变量 |
| --- | --- | --- |
| IYUU | iyuu | `IYUU_SIGN`：IYUU登录令牌 |
| 憨憨 | hhclub | `HHCLUB_USERNAME`：用户名   `HHCLUB_PASSKEY`：密钥 |
| 观众 | audiences | `AUDIENCES_UID`：用户ID   `AUDIENCES_PASSKEY`：密钥 |
| 高清杜比 | hddolby | `HDDOLBY_ID`：用户ID   `HDDOLBY_PASSKEY`：密钥 |
| 织梦 | zmpt | `ZMPT_UID`：用户ID   `ZMPT_PASSKEY`：密钥 |
| 自由农场 | freefarm | `FREEFARM_UID`：用户ID   `FREEFARM_PASSKEY`：密钥 |
| 红豆饭 | hdfans | `HDFANS_UID`：用户ID   `HDFANS_PASSKEY`：密钥 |
| 冬樱 | wintersakura | `WINTERSAKURA_UID`：用户ID   `WINTERSAKURA_PASSKEY`：密钥 |
| 红叶PT | leaves | `LEAVES_UID`：用户ID   `LEAVES_PASSKEY`：密钥 |
| 1PTBA | ptba | `PTBA_UID`：用户ID   `PTBA_PASSKEY`：密钥 |
| 冰淇淋 | icc2022 | `ICC2022_UID`：用户ID   `ICC2022_PASSKEY`：密钥 |
| 杏坛 | xingtan | `XINGTAN_UID`：用户ID   `XINGTAN_PASSKEY`：密钥 |
| 象站 | ptvicomo | `PTVICOMO_UID`：用户ID   `PTVICOMO_PASSKEY`：密钥 |
| AGSVPT | agsvpt | `AGSVPT_UID`：用户ID   `AGSVPT_PASSKEY`：密钥 |
| 麒麟 | hdkyl | `HDKYL_UID`：用户ID   `HDKYL_PASSKEY`：密钥 |
| 青蛙 | qingwa | `QINGWA_UID`：用户ID   `QINGWA_PASSKEY`：密钥 |
| 蝶粉 | discfan | `DISCFAN_UID`：用户ID   `DISCFAN_PASSKEY`：密钥 |
| 海胆之家 | haidan | `HAIDAN_ID`：用户ID   `HAIDAN_PASSKEY`：密钥 |
| Rousi | rousi | `ROUSI_UID`：用户ID   `ROUSI_PASSKEY`：密钥 |
| Sunny | sunny | `SUNNY_UID`：用户ID   `SUNNY_PASSKEY`：密钥 |
| 咖啡 | ptcafe | `PTCAFE_UID`：用户ID   `PTCAFE_PASSKEY`：密钥 |
| PTZone | ptzone | `PTZONE_UID`：用户ID   `PTZONE_PASSKEY`：密钥 |
| 库非 | kufei | `KUFEI_UID`：用户ID   `KUFEI_PASSKEY`：密钥 |
| YemaPT | yemapt | `YEMAPT_UID`：用户ID   `YEMAPT_AUTH`：密钥   注意：需v2.2.0或以上版本 |
| 回声 | hspt | `HSPT_UID`：用户ID   `HSPT_AUTH`：密钥 |
| 星陨阁 | xingyunge | `XINGYUNGE_UID`：用户ID   `XINGYUNGE_PASSKEY`：密钥 |
| 财神 | cspt | `CSPT_UID`：用户ID   `CSPT_PASSKEY`：密钥 |
| 唐门 | tmpt | `TMPT_UID`：用户ID   `TMPT_PASSKEY`：密钥 |
| 雨 | raingfh | `RAINGFH_UID`：用户ID   `RAINGFH_PASSKEY`：密钥 |
| GTK | gtkpw | `GTKPW_UID`：用户ID   `GTKPW_PASSKEY`：密钥 |
| PTLGS | ptlgs | `PTLGS_UID`：用户ID   `PTLGS_PASSKEY`：密钥 |
| HDBAO | hdbao | `HDBAO_UID`：用户ID   `HDBAO_PASSKEY`：密钥 |
| 下水道 | sewerpt | `SEWERPT_UID`：用户ID   `SEWERPT_PASSKEY`：密钥 |

## 进阶配置

V1版本有些进阶配置参数需要通过配置文件进行配置（不配置会自动使用默认值），配置文件名：`app.env`，放配置文件根目录，点击 [此处](https://raw.githubusercontent.com/jxxghp/MoviePilot/main/config/app.env) 可下载模板。

我这里挑几个我开启的，配置路径在 **moviepilot-v2/config/app.env**

PS:我发现webui里也可以设置。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-54.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-54.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-54.jpg" alt="高级设置界面截图，显示各种选项和开关。" loading="lazy">
</picture>

其他配置根据自己的喜好来

```shell
# BIG_MEMORY_MODE 大内存模式，开启后会增加缓存数量，但会占用更多内存# PLUGIN_MARKET 插件市场仓库地址，多个地址使用`,`分隔，保留最后的/#SEARCH_MULTIPLE_NAME 搜索多个名称，true/false，为true时搜索时会同时搜索中英文及原始名称，搜索结果会更全面,但会增加搜索时间；为false时其中一个名称搜索到结果或全部名称搜索完毕即停止#AUTO_UPDATE_RESOURCE 启动时自动检测和更新资源包（站点索引及认证等），true/false，默认true，需要能正常连接Github，仅支持Docker镜像
```

```shell
BIG_MEMORY_MODE=true
PLUGIN_MARKET=https://github.com/jxxghp/MoviePilot-Plugins/,https://github.com/thsrite/MoviePilot-Plugins/,https://github.com/honue/MoviePilot-Plugins/,https://github.com/InfinityPacer/MoviePilot-Plugins/,https://github.com/dandkong/MoviePilot-Plugins/,https://github.com/Aqr-K/MoviePilot-Plugins/,https://github.com/AnjoyLi/MoviePilot-Plugins/,https://github.com/WithdewHua/MoviePilot-Plugins/,https://github.com/HankunYu/MoviePilot-Plugins/,https://github.com/baozaodetudou/MoviePilot-Plugins/,https://github.com/almus2zhang/MoviePilot-Plugins/,https://github.com/Pixel-LH/MoviePilot-Plugins/,https://github.com/lightolly/MoviePilot-Plugins/,https://github.com/suraxiuxiu/MoviePilot-Plugins/,https://github.com/gxterry/MoviePilot-Plugins/,https://github.com/hotlcc/MoviePilot-Plugins-Third/,https://github.com/boeto/MoviePilot-Plugins/,https://github.com/xiangt920/MoviePilot-Plugins/
SEARCH_MULTIPLE_NAME=true
AUTO_UPDATE_RESOURCE=true
```

编辑完后重启容器 docker restart moviepilot-v2

## CSS主题

```shell
body, #app, .v-application {
    height: 100% !important;
    min-height: initial !important;
    background: none !important;
    backdrop-filter: blur(20px); /* 增加背景模糊效果 */
    transition: transform 0.5s ease, box-shadow 0.5s ease; /* 设定过渡效果 */
    box-shadow: 0 0 5px rgba(0,0,0,0.3); /* 添加阴影效果 */
    border-radius: 10px; /* 设置圆角 */
    animation: bodyFadeIn 1s; /* 应用淡入动画 */
}
/* 设置 body, #app 和 .v-application 的样式，包括高度、背景、模糊效果、过渡效果、阴影、圆角和动画 */

@keyframes bodyFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
/* 定义一个淡入动画 */

.layout-wrapper {
    height: 100%;
    overflow: auto;
}
::-webkit-scrollbar-thumb {
    background: rgba(var(--v-theme-perfect-scrollbar-thumb),0.8) !important;
    transition: background 0.3s ease-in-out;
}
/* 自定义滚动条滑块样式及其过渡效果 */

::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1bb !important;
}
/* 设置滚动条滑块悬停时的样式 */
* {
    font-weight: bold;  /* 所有文字加粗 */
}
/* 设置所有文字加粗 */

.v-application, .v-card--variant-elevated, .v-list {
    background: none !important;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    border-radius: 10px;
}
/* 设置 .v-application 和 .v-card--variant-elevated .v-list 的样式，包括背景、过渡效果、阴影和圆角 */

.layout-nav-type-vertical .layout-vertical-nav {
    background: rgba(var(--v-theme-background),0.3);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    border-radius: 10px;
}
/* 设置垂直导航栏的背景、过渡效果、阴影和圆角 */

.v-card, .v-field--variant-solo, .v-field--variant-solo-filled, .v-field--variant-solo-inverted {
    background: rgba(var(--v-theme-background),0.3);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
}
/* 设置卡片、列表项和表单域的样式，包括背景、过渡效果、阴影和圆角 */

.v-card:hover, .v-field--variant-solo:hover, .v-field--variant-solo-filled:hover, .v-field--variant-solo-inverted:hover {
    transform: scale(1.01);
    box-shadow: 0 0 25px rgba(0,0,0,0.8);
}
/* 设置卡片、列表项和表单域的悬停效果，包括缩放和增强阴影 */

.v-dialog .v-card {
    background: rgba(var(--v-theme-background),0.5);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    border-radius: 10px;
}
/* 设置对话框中卡片的样式，包括背景、过渡效果、阴影和圆角 */

.v-toolbar {
    background: rgba(var(--v-table-header-background),0.3) !important;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    border-radius: 10px;
}
/* 设置工具栏的背景、过渡效果、阴影和圆角 */

.v-application .fc {
    background: rgba(var(--v-theme-surface),0.3) !important;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    border-radius: 10px;
}
/* 设置列表和应用程序表面的背景、过渡效果、阴影和圆角 */

.v-application .fc .fc-scrollgrid-section-sticky > * {
    background: rgba(var(--v-theme-surface),0.2) !important;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    border-radius: 10px;
}
/* 设置滚动网格粘性部分的背景、过渡效果、阴影和圆角 */

.navbar-blur.layout-navbar .navbar-content-container, .v-table {
    background: none !important;
    /* transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; */
    /* box-shadow: 0 0 5px rgba(0,0,0,0.3); */
    /* border-radius: 10px; */
}
/* 设置导航栏和表格的背景、过渡效果、阴影和圆角 */

.v-data-table th, .v-data-table td {
    background: rgba(var(--v-theme-surface),0.4) !important;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    border-radius: 10px;
}
/* 设置数据表格单元格的背景、过渡效果、阴影和圆角 */

.v-skeleton-loader {
    background: rgba(var(--v-theme-surface),0.2) !important;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    border-radius: 10px;
}
/* 设置骨架加载器的背景、过渡效果、阴影和圆角 */

.bg-primary {
    background-color: rgba(0, 0, 0, 0.6) !important;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    border-radius: 10px;
}
/* 设置主要背景颜色、过渡效果、阴影和圆角 */

@media (max-width: 600px) {
    body, #app, .v-application {
        backdrop-filter: blur(4px);
    }

    .v-card, .v-field--variant-solo, .v-field--variant-solo-filled, .v-field--variant-solo-inverted {
        box-shadow: 0 0 3px rgba(0,0,0,0.3);
    }

    .v-card:hover, .v-field--variant-solo:hover, .v-field--variant-solo-filled:hover, .v-field--variant-solo-inverted:hover {
        transform: scale(1.01);
        box-shadow: 0 0 20px rgba(0,0,0,0.8);
    }
}
/* 响应式设计，针对宽度小于600px的设备，设置不同的模糊效果和阴影 */
 
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-55.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-55.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-55.jpg" alt="界面主题切换选项菜单" loading="lazy">
</picture>

## 媒体库设置

基本设置和v1逻辑原理一样，只是把下载和媒体合并在一起设置。

如果需要二级目录，需要安装二级目录插件，使用方法和v1一致 。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/c60bd4be9a32e0a918ebe2d6986d2402.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/c60bd4be9a32e0a918ebe2d6986d2402.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/c60bd4be9a32e0a918ebe2d6986d2402.jpg" alt="媒体下载目录管理界面截图" loading="lazy">
</picture>

## QB 设置

建议关闭自动分类，这样很大程度能保证和上面媒体库要下载的位置保持一致。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-56.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-56.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-56.jpg" alt="qBittorrent配置界面设置选项截图" loading="lazy">
</picture>

### CookieCloud 设置

基本没差，参考[v1](https://catcat.blog/docker-moviepilot.html)

## 词表设置

以下来自互联网

### 自定义识别词

- [https://movie-pilot.org/etherpad/p/MoviePilot\_TV\_Words](https://movie-pilot.org/etherpad/p/MoviePilot_TV_Words)

- [https://movie-pilot.org/etherpad/p/MoviePilot\_Anime\_Words](https://movie-pilot.org/etherpad/p/MoviePilot_Anime_Words)

### **自定义制作组/字幕组**

```shell
喵萌奶茶屋
风车字幕组
银色子弹字幕组
枫叶字幕组
诸神字幕组
❀拨雪寻春❀
VARYG
AI-Raws
ANi
SweetSub
LoliHouse
VCB-Studio
7³ACG
OPFans枫雪动漫
SilverBullet
APTX4869
Snow-Raws
B-Global
CR
KKTV
Baha
MyVideo
AMZN
KKTV
friDay
Disney+
LINETV
NF
Viu
Crunchyroll
Netflix
Amazon
MAX
AppleTV+
HMAX
BiliBili
Abema
CatchPlay
iTunes
Remux
ADWeb
NTb
FLUX
DSNP
银色子弹字幕组
RLWeb
Breeze@Sunny
Rain@Sunny
RLeaves
 
```

### 自定义占位符

```shell
\b(简繁内封|简繁日内封|简繁日英内封|简繁官字内封|官简内封|简日双语|简体内封|简体内嵌|繁体内嵌|简英双语|简繁外挂|简体|HDR|DoVi)\b
```

### 文件整理屏蔽词

```shell
__\w{6}/
Special Ending Movie
\[((TV|BD|\bBlu-ray\b)?\s*CM\s*\d{2,3})\]
\[Teaser.*?\]
\[PV.*?\]
\[NC[OPED]+.*?\]
\[S\d+\s+Recap(\s+\d+)?\]
Menu
Preview
\b(CDs|SPs|Scans|Bonus|映像特典|映像|specials|特典CD|Menu|Logo|Preview|/mv)\b
\b(NC)?(Disc|片头|OP|OVA|OAD|SP|ED|Advice|Trailer|BDMenu|片尾|PV|CM|Preview|MENU|Info|EDPV|SongSpot|BDSpot)(\d{0,2}|_ALL)\b
WiKi.sample
```

## 规则设置

### 自定义规则

`MoviePilot-V2`加入了自定义规则，可以自定义编写用于筛选资源的规则列表，主要用于管理资源的分类和过滤条件。每个条目都有一个`id`（标识符）、`name`（名称）、`include`（包含条件）和`exclude`（排除条件）等字段。自定义规则列表能帮助用户更加精准、快捷地找到符合偏好的高质量资源，同时保证了筛选的灵活性和效率，让MP的订阅功能得到了史诗级的提升。

```shell
[{"id":"Complete","name":"Complete","include":"(全|共)\\d(集|期)|完结|合集|Complete","exclude":""},{"id":"filterGlobal","name":"filterGlobal","include":"","exclude":"(?i)日语无字|先行|DV|MiniBD|DIY原盘|iPad|UPSCALE|AV1|BDMV|RMVB|DVD|vcd|480p|OPUS","seeders":""},{"id":"filerGroup","name":"filerGroup","include":"","exclude":"(?i)SubsPlease|Up to 21°C|VARYG|TELESYNC|NTb|sGnb|BHYS|DBD|HDH|COLLECTiVE|SRVFI|HDSPad"},{"id":"filterMovie","name":"filterMovie","include":"","exclude":"","seeders":"","size_range":"0-22000"},{"id":"filterSeries","name":"filterSeries","include":"","exclude":"","size_range":"0-102400"},{"id":"AnimeGroup","name":"AnimeGroup","include":"7³ACG|VCB-Studio","exclude":"","size_range":""},{"id":"Audiences","name":"Audiences","include":"ADE|ADWeb","exclude":"","seeders":""},{"id":"HHWEB","name":"HHWEB","include":"HHWEB","exclude":""},{"id":"Crunchyroll","name":"Crunchyroll","include":"CR|Crunchyroll","exclude":""},{"id":"Netflix","name":"Netflix","include":"Netflix|NF","exclude":""},{"id":"B-Global","name":"B-Global","include":"B-Global|BG","exclude":""},{"id":"AMZN","name":"AMZN","include":"AMZN|Amazon","exclude":""},{"id":"HQ","name":"HQ","include":"HQ|高码|EDR","exclude":"","size_range":""},{"id":"DDP","name":"DDP","include":"DDP","exclude":""}]
```

- **Complete**：筛选全集或完结资源。`include`中有匹配“(全|共)\\d(集|期)|完结|合集|Complete”内容的条件，表示要包含这些关键词的资源。

- **filterGlobal**：全局过滤器，用于排除不需要的资源。`exclude`字段包含多种过滤关键词（如“日语无字”、“先行”等），排除与这些关键词匹配的资源。

- **filerGroup**：用于排除不符合要求的小组资源，`exclude`字段包含多个小组的名称（如“SubsPlease”、“Up to 21°C”等）。

- **filterMovie**：电影资源的过滤规则，`size_range`字段设置了大小限制为0到22000MB。

- **filterSeries**：剧集资源的过滤规则，`size_range`字段设置了大小限制为0到102400MB。

- **AnimeGroup**：特定动漫小组的筛选规则，`include`字段包含“7³ACG”和“VCB-Studio”等。

- **Audiences**：包含特定观众群体的关键词，如“ADE”和“ADWeb”。

- **HHWEB**：筛选包含“HHWEB”关键字的资源。

- **Crunchyroll**：筛选包含“CR”或“Crunchyroll”关键词的资源。

- **Netflix**：筛选包含“Netflix”或“NF”关键词的资源。

- **B-Global**：筛选包含“B-Global”或“BG”关键词的资源。

- **AMZN**：筛选包含“AMZN”或“Amazon”关键词的资源。

- **HQ**：筛选包含高清资源（“HQ”或“高码”或“EDR”）。

- **DDP**：筛选包含“DDP”关键词的资源。

### 优先级规则

`MoviePilot-V2`再次更新了优先级规则的**高度自定义**，让有动手能力的大佬，可以**手搓完美契合自己的订阅规则**。本次升级将订阅规则细分至`媒体类型（电影、电视剧）`与`媒体类别（根据你的二级分类而定）`。比如我想自定义电影的订阅规则，可以自定义。我还想自定义二级分类下华语电影的订阅规则，同样可以自定义。

```shell
[{"name":"前置过滤","rule_string":"filterGlobal& !BLU & !REMUX & !3D & !DOLBY &filerGroup","media_type":"","category":""},{"name":"动画电影","rule_string":" SPECSUB & 4K & BLURAY & H265 > CNSUB & 4K & BLURAY & H265 > CNSUB & 4K & BLURAY > CNSUB & 1080P & BLURAY > CNSUB & 4K > CNSUB & 1080P ","media_type":"电影","category":"动画电影"},{"name":"华语电影","rule_string":" 4K & BLURAY & H265 > 1080P & BLURAY > 4K > 1080P ","media_type":"电影","category":"华语电影"},{"name":"外语电影","rule_string":" SPECSUB & 4K & BLURAY & H265 &filterMovie> CNSUB & 4K & BLURAY & H265 &filterMovie> CNSUB & 1080P & BLURAY &filterMovie> CNSUB & 4K &filterMovie> CNSUB & 1080P &filterMovie","media_type":"电影","category":"外语电影"},{"name":"日番","rule_string":"AnimeGroup& CNSUB & BLURAY & 1080P >Audiences& H265 & BLURAY & 1080P >Audiences&AMZN&HHWEB& CNSUB & 1080P >Audiences&Crunchyroll& CNSUB & 1080P >Audiences&Netflix&HHWEB& CNSUB & 1080P >Audiences&B-Global& 4K & CNSUB >Audiences&B-Global& 1080P & CNSUB >Audiences&HHWEB& CNSUB & 1080P > CNSUB & BLURAY & 1080P > 1080P & CNSUB > 1080P ","media_type":"电视剧","category":"日番"},{"name":"国漫","rule_string":" 4K &Audiences&HHWEB&DDP> 4K &Audiences&HHWEB> 1080P &Audiences&HHWEB> 4K > 1080P > 720P ","media_type":"电视剧","category":"国漫"},{"name":"纪录片","rule_string":" 4K & BLURAY > 1080P & BLURAY > 4K > 1080P ","media_type":"电视剧","category":"纪录片"},{"name":"综艺","rule_string":" 4K & WEBDL &Complete> 4K & WEBDL &HHWEB> WEBDL & 1080P &HHWEB> 4K & WEBDL &Audiences> 1080P &Audiences& WEBDL > 1080P ","media_type":"电视剧","category":"综艺"},{"name":"国产剧","rule_string":" 4K & WEBDL &HQ> 4K & WEBDL > 4K & WEBDL > 1080P > 720P ","media_type":"电视剧","category":"国产剧"},{"name":"欧美剧","rule_string":" SPECSUB & 1080P & BLURAY &filterSeries> 1080P & WEBDL & CNSUB &filterSeries> CNSUB &filterSeries","media_type":"电视剧","category":"欧美剧"},{"name":"日韩剧","rule_string":" SPECSUB & 1080P & BLURAY &filterSeries> CNSUB & 1080P &filterSeries> 1080P & CNSUB &filterSeries> CNSUB &filterSeries ","media_type":"电视剧","category":"日韩剧"},{"name":"现场","rule_string":" CNSUB & 4K > CNSUB & 1080P > 4K > 1080P > !720P ","media_type":"电影","category":"现场"}]
```

- **前置过滤**：用于在进行其他筛选之前，排除特定的资源格式。`rule_string`包含过滤条件`filterGlobal`，并排除了“BLU”、“REMUX”、“3D”和“DOLBY”格式，同时排除了小组过滤条件`filerGroup`。

- **动画电影**：针对动画电影的优先规则，按以下顺序选择：
    - 有外挂字幕的4K H265蓝光
    
    - 有中文内嵌字幕的4K H265蓝光
    
    - 有中文内嵌字幕的4K蓝光
    
    - 有中文内嵌字幕的1080P蓝光
    
    - 有中文内嵌字幕的4K或1080P

- **华语电影**：针对华语电影的优先规则，按以下顺序选择：
    - 4K H265蓝光
    
    - 1080P蓝光
    
    - 4K或1080P

- **外语电影**：针对外语电影的优先规则，结合`filterMovie`的条件，按以下顺序选择：
    - 有外挂字幕的4K H265蓝光
    
    - 有中文内嵌字幕的4K H265蓝光
    
    - 有中文内嵌字幕的1080P蓝光
    
    - 有中文内嵌字幕的4K或1080P

- **日番**：针对日本动漫剧集的优先规则，按以下顺序选择：
    - 动漫小组资源，包含中文内嵌字幕的1080P蓝光
    
    - 包含外挂字幕的1080P H265蓝光或来自特定平台的1080P
    
    - 各种平台的4K或1080P

- **国漫**：针对中国动漫剧集的优先规则，按以下顺序选择：
    - 包含外挂字幕的4K，优先有DDP音轨的资源
    
    - 各种1080P和4K

- **纪录片**：针对纪录片资源的优先规则，按以下顺序选择：
    - 4K蓝光
    
    - 1080P蓝光
    
    - 各种4K和1080P

- **综艺**：针对综艺节目的优先规则，按以下顺序选择：
    - 完整的4K WEBDL
    
    - 包含HHWEB或Audiences字幕组的4K或1080P WEBDL

- **国产剧**：针对国产电视剧的优先规则，按以下顺序选择：
    - 高清4K WEBDL，优先包含HQ的高码率资源
    
    - 各种4K、1080P和720P的WEBDL

- **欧美剧**：针对欧美电视剧的优先规则，结合`filterSeries`的条件，按以下顺序选择：
    - 有外挂字幕的1080P蓝光
    
    - 1080P WEBDL，包含中文内嵌字幕
    
    - 其他包含中文内嵌字幕的资源

- **日韩剧**：针对日韩电视剧的优先规则，按以下顺序选择：
    - 有外挂字幕的1080P蓝光
    
    - 包含中文内嵌字幕的1080P资源

- **现场**：针对现场表演或现场记录的资源，按以下顺序选择：
    - 中文内嵌字幕的4K或1080P
    
    - 排除720P

## 引用

- [MoviePilot 官方Wiki](https://wiki.movie-pilot.org/)

- [MoviePilot-V2，实现全自动化订阅+整理+削刮+搜索下载的观影一条龙](https://www.huanhq.com/archives/moviepilot-v2)