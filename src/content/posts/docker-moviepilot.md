---
tags: [docker]
title: "Docker 部署 自动化观影平台MoviePilot"
published: 2024-02-28
---

- 2024年7月11日更新：重写了docker-compose.yaml文件，按照新版本参数方式调整

\[admonition color="red"\]**[MoviePilot](https://github.com/jxxghp/MoviePilot) 是NasTools作者的新项目，是一款Nas媒体库自动化管理工具，仅用于学习交流使用，请勿在国内的平台宣传此项目。**\[/admonition\]

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-6.jpg" alt="" loading="lazy">
</picture>

由于MoviePilot的部署依赖多个服务，以及相关的基础知识，需要一定的技术。在安装之前，默认你已经掌握或了解以下的内容

- Docker
    - 安装及基础的指令使用
    
    - Docker-compose 安装和使用

- Linux 下的相关知识和指令操作
    - UID id -u
    
    - PID id -g
    
    - 查看端口占用命令 lsof -i:<port>
    
    - 软链接、硬链接
    
    - Cron表达式
    
    - 查看主机IP ifconfig

- PT 下载器
    - qbittorrent
    
    - transmission

- 媒体服务器
    - emby
    
    - plex
    
    - jellyfin

- [PT站点](https://iecho.cc/2019/01/09/PT-%E4%B8%8B%E8%BD%BD%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E5%85%BB%E8%80%81/)
    - 需要有一个[MoviePilot 支持的PT站](https://github.com/jxxghp/MoviePilot#2-%E7%94%A8%E6%88%B7%E8%AE%A4%E8%AF%81)才能使用,否则下面的内容不用看了

## 安装

本指南默认采用Debian12 Linux系统进行安装部署，NAS用户请自行按照相关变量自行修改配置。

### 获取UID GID

ssh 服务器 ，输入 `id -u id -g` 分别获取UID GID

- UID=0

- GID=0

### 创建目录

#### 1\. MoviePilot目录

需要设置三个目录，存放配置和core数据，以及媒体数据

在MoviePilot 目录下新建如下的目录结构

- `/MoviePilot/moviepilot/config` → config 信息

- `/MoviePilot/moviepilot/core` → 核心数据

- `/hdd/media` → 媒体数据(`文件硬链接目录`)

#### 2.QBitTorrent 目录

需要设置两个目录，一个用来映射下载目录，一个用来映射QBitTorrent 的配置

在MoviePilot 目录下新建如下的目录结构

- `/MoviePilot/qbittorrent` → config信息

- `/MoviePilot/media/downloads` → 下载数据

#### 4.Emby 目录

需要设置两个目录，一个映射媒体数据，一个映射配置目录

在MoviePilot 目录下新建如下的目录结构

- `/MoviePilot/emby` → config信息

- `/MoviePilot/media` → 媒体数据(`文件硬链接目录`)

```shell
文件目录一览：

MoviePilot
├── emby
├── media
│   └── downloads
├── moviepilot
│   ├── config
│   └── core
└── qbittorrent
```

### 依赖安装

#### 1.安装CookieCloud（不推荐安装，建议使用MoviePilot内置CookieCloud,见下方红字）

CookieCloud是一个和自架服务器同步Cookie的小工具，可以将浏览器的Cookie及Local storage同步到手机和云端，它支持端对端加密，可设定同步时间间隔。主要用来同步各大PT站点的cookie信息供MoviePilot自动同步导入使用。

```shell
docker run -d --name=cookiecloud -p 8088:8088 --restart=always easychen/cookiecloud:latest
```

【测试是否安装成功】

打开 http://<ip>:8088 出现hello world 提示即安装服务端成功

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-25.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-25.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-25.jpg" alt="" loading="lazy">
</picture>

**【安装浏览器插件】**

注意需要登录你的PT站点,一定要先登录上，否则后续MoviePilot启动时可能没有站点信息。

[chrome商店](https://chromewebstore.google.com/detail/cookiecloud/ffjiejobkoibkjlhjnlgmcnnigeelbdl) 下载安装插件后，进行参数配置后保存，然后手动测试是否同步成功。

- `服务器地址` 如果是局域网，填写 `http://<ip>:8088` ，如果有公网，则填写公网地址

- `用户KEY` 可以自定义,也可以使用默认生成的，后面会用到

- `端对端加密密码` 可以自定义，也可以使用默认生成的，后面会用到

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-26.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-26.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-26.jpg" alt="" loading="lazy">
</picture>

**由于外部CookieCloud 极其不稳定，容易同步cookie失败以及无法正常建立连接。因此建议不要使用自建的CookieCloud方案。优先使用MoviePilot的内置模块，填写方法同外部一样，只需要按照要求修改地址就行。即 服务器地址是 http(s):你的MoviePilot的IP:端口/cookiecloud**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-7.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-7.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-7.jpg" alt="" loading="lazy">
</picture>

#### 2.安装MoviePilot Emby qBitTorrent

下面给出完整的docker-compose 文件，需要自行修改其中的变量

```shell
version: '3.3'
 
# MoviePilot 地址：https://github.com/jxxghp/MoviePilot
 
services:
    qbittorrent:
        image: 'linuxserver/qbittorrent:latest'
        container_name: qbittorrent
        restart: always
        tty: true
        hostname: qbittorrent
        volumes:
            - '/root/MoviePilot/qbittorrent/config:/config' # 目录已提前创建好
            - '/hdd/media/download:/media/download' # 目录已提前创建好
        tmpfs:
            - '/tmp'
        environment:
            - 'QB_USERNAME=你的名称' # 自行修改
            - 'QB_PASSWORD=你的密码'       # 自行修改 
            - 'BT_PORT=49678'
            - 'PUID=0'
            - 'PGID=0'
        ports:
            - target: 8080
              published: 8080
              protocol: tcp
            - target: 49678
              published: 49678
              protocol: tcp
            - target: 49678
              published: 49678
              protocol: udp
        network_mode: bridge
 
    emby:
        container_name: emby
        ports:
            - target: 8096
              published: 8096
              protocol: tcp
            - target: 8920
              published: 8920
              protocol: tcp
            - target: 11900
              published: 11900
              protocol: udp
            - target: 7359
              published: 7359
              protocol: udp
        volumes:
            - '/root/MoviePilot/emby/config:/config' # 目录已提前创建好
            - '/hdd/media:/data'  # 目录已提前创建好
        environment:
            - TZ=Asia/Shanghai
        restart: always
        hostname: emby
        network_mode: bridge
        image: 'amilys/embyserver:latest'
 
    moviepilot:
        ports:
            - target: 3000
              published: 3000
              protocol: tcp
        environment:
            # WEB服务端口，默认3000，可自行修改，不能与API服务端口冲突
            - 'NGINX_PORT=3000'
            # API服务端口，默认3001，可自行修改，不能与WEB服务端口冲突
            - 'PORT=3001'
            # 运行程序用户的uid，默认0
            - 'PUID=0'
            # 运行程序用户的gid，默认0
            - 'PGID=0'
            # 掩码权限，默认000，可以考虑设置为022
            - 'UMASK=000'
            # 时区
            - 'TZ=Asia/Shanghai'
            # 重启时自动更新，true/release/dev/false，默认release，需要能正常连接Github 注意：如果出现网络问题可以配置PROXY_HOST
            - 'MOVIEPILOT_AUTO_UPDATE=true'
            # 网络代理，访问themoviedb或者重启更新需要使用代理访问，格式为http(s)://ip:port、socks5://user:pass@host:port
            - 'PROXY_HOST='
            # 观众认证
            - 'AUTH_SITE=audiences'
            - 'AUDIENCES_UID=你的id'    # 自行修改获取
            - 'AUDIENCES_PASSKEY=你的key'
            # 超级管理员用户名，默认admin，安装后使用该用户登录后台管理界面，注意：启动一次后再次修改该值不会生效，除非删除数据库文件！
            - 'SUPERUSER=admin'
            # API密钥，默认moviepilot，在媒体服务器Webhook、微信回调等地址配置中需要加上?token=该值，建议修改为复杂字符串
            - 'API_TOKEN=moviepilot'
            # 大内存模式，默认为false，开启后会增加缓存数量，占用更多的内存，但响应速度会更快
            - 'BIG_MEMORY_MODE=true'
            # DNS over HTTPS开关，`true`/`false`，默认`true`，开启后会使用DOH对api.themoviedb.org等域名进行解析，以减少被DNS污染的情况，提升网络连通性
            - 'DOH_ENABLE=true'
            # 元数据识别缓存过期时间（小时），数字型，不配置或者配置为0时使用系统默认（大内存模式为7天，否则为3天），调大该值可减少themoviedb的访问次数
            - 'META_CACHE_EXPIRE='
            # Github token，提高自动更新、插件安装等请求Github Api的限流阈值，格式：ghp_****
            - 'GITHUB_TOKEN='
            # 开发者模式，true/false，默认false，开启后会暂停所有定时任务
            - 'DEV=false'
            # debug模式，开启后会输出debug日志
            - 'DEBUG=true'
            # 启动时自动检测和更新资源包（站点索引及认证等），true/false，默认true，需要能正常连接Github            - 'AUTO_UPDATE_RESOURCE=true'
            # TMDB API地址，默认api.themoviedb.org，也可配置为api.tmdb.org、tmdb.movie-pilot.org 或其它中转代理服务地址，能连通即可
            - 'TMDB_API_DOMAIN=api.themoviedb.org'
            # TMDB图片地址，默认image.tmdb.org，可配置为其它中转代理以加速TMDB图片显示，如：static-mdb.v.geilijiasu.com
            - 'TMDB_IMAGE_DOMAIN=image.tmdb.org'
            # 登录首页电影海报，tmdb/bing，默认tmdb
            - 'WALLPAPER=tmdb'
            #  媒体信息识别来源，themoviedb/douban，默认themoviedb，使用douban时不支持二级分类
            - 'RECOGNIZE_SOURCE=themoviedb'
            # Fanart开关，true/false，默认true，关闭后刮削的图片类型会大幅减少
            - 'FANART_ENABLE=true'
            # 刮削元数据及图片使用的数据源，themoviedb/douban，默认themoviedb
            - 'SCRAP_SOURCE=themoviedb'
            # 新增已入库媒体是否跟随TMDB信息变化，true/false，默认true，为false时即使TMDB信息变化了也会仍然按历史记录中已入库的信息进行刮削
            - 'SCRAP_FOLLOW_TMDB=true'
            # 远程交互搜索时自动择优下载的用户ID（消息通知渠道的用户ID），多个用户使用,分割，设置为 all 代表全部用户自动择优下载，未设置需要手动选择资源或者回复0才自动择优下载
            - 'AUTO_DOWNLOAD_USER=all'
            # OCR识别服务器地址，格式：http(s)://ip:port，用于识别站点验证码实现自动登录获取Cookie等，不配置默认使用内建服务器https://movie-pilot.org
            - 'OCR_HOST=https://movie-pilot.org'
            # 下载站点字幕，true/false，默认true
            - 'DOWNLOAD_SUBTITLE=true'
            # 电影重命名格式
            - 'MOVIE_RENAME_FORMAT={{title}}{% if year %} ({{year}}){% endif %}/{{title}}{% if year %} ({{year}}){% endif %}{% if part %}-{{part}}{% endif %}{% if videoFormat %} - {{videoFormat}}{% endif %}{{fileExt}}'
            # 电视剧重命名格式
            - 'TV_RENAME_FORMAT={{title}}{% if year %} ({{year}}){% endif %}/Season {{season}}/{{title}} - {{season_episode}}{% if part %}-{{part}}{% endif %}{% if episode %} - 第 {{episode}} 集{% endif %}{{fileExt}}'
            # 插件市场仓库地址，仅支持Github仓库main分支，多个地址使用,分隔
            - 'PLUGIN_MARKET=https://github.com/jxxghp/MoviePilot-Plugins/,https://github.com/thsrite/MoviePilot-Plugins/,https://github.com/honue/MoviePilot-Plugins/,https://github.com/InfinityPacer/MoviePilot-Plugins/,https://github.com/dandkong/MoviePilot-Plugins/,https://github.com/Aqr-K/MoviePilot-Plugins/,https://github.com/AnjoyLi/MoviePilot-Plugins/,https://github.com/WithdewHua/MoviePilot-Plugins/,https://github.com/HankunYu/MoviePilot-Plugins/,https://github.com/baozaodetudou/MoviePilot-Plugins/,https://github.com/almus2zhang/MoviePilot-Plugins/,https://github.com/Pixel-LH/MoviePilot-Plugins/,https://github.com/lightolly/MoviePilot-Plugins/,https://github.com/suraxiuxiu/MoviePilot-Plugins/,https://github.com/gxterry/MoviePilot-Plugins/'

        restart: always
        tty: true
        volumes:
            - '/root/MoviePilot/moviepilot/config:/config'
            - '/root/MoviePilot/moviepilot/core:/moviepilot'
            - '/var/run/docker.sock:/var/run/docker.sock:ro'
            - '/hdd/media:/media'
        network_mode: bridge
        hostname: moviepilot
        container_name: moviepilot
        image: 'jxxghp/moviepilot:latest'
```

下面是一些具体的参数解析

需要填写的参数和环境变量有很多，参考[官方文档](https://github.com/jxxghp/MoviePilot#%E9%85%8D%E7%BD%AE),建议复制后使用

- `容器名称` 随意填写，或者使用默认值

- 勾选 `启用自动重新启动`

- `端口设置-本地端口` 设置为`3000`

- `存储空间`设置
    - `/MoviePilot/moviepilot/config` → `/config`
    
    - `/MoviePilot/moviepilot/core` → `/moviepilot`
    
    - `/var/run/docker.sock` → `/var/run/docker.sock` 映射宿主机docker.sock文件到容器`/var/run/docker.sock`，以支持内建重启操作。
    
    - `/MoviePilot/media` → `/media`

- `环境变量` 设置（key=value）
    - `PUID=`0 根据实际获取到的为准，填写错误有文件读写权限问题！
    
    - `PGID=`0 根据实际获取到的为准，填写错误有文件读写权限问题！
    
    - UMASK=022
    
    - `TZ=`Asia/Shanghai 时区
    
    - `MOVIEPILOT_AUTO_UPDATE`\=release 重启更新
    
    - `NGINX_PORT`\=3000 WEB服务端口
    
    - `SUPERUSER`\=xxxx 超管名，自己定义
    
    - `SUPERUSER_PASSWORD`\=xxxxxx 超管密码，自定义即可，新版本会默认在log下生成，需要查看
    
    - `WALLPAPER`\=tmdb 登录首页电影海报，`tmdb`/`bing`，默认`tmdb`
    
    - `API_TOKEN`\=moviepilot API密钥，在媒体服务器Webhook、微信回调等地址配置中需要加上?token=<该值>
    
    - `PROXY_HOST`\= 网络代理，可选
    
    - `TMDB_API_DOMAIN`\=api.themoviedb.org TMDB API地址
    
    - DOWNLOAD\_PATH=/media/downloads 下载保存目录，不要自定义
    
    - DOWNLOAD\_MOVIE\_PATH=/media/downloads/movies 电影下载目录，不要修改
    
    - DOWNLOAD\_TV\_PATH=/media/downloads/tv 电视剧下载目录，不要修改
    
    - DOWNLOAD\_ANIME\_PATH=/media/downloads/anime 动画下载目录，不要修改
    
    - DOWNLOAD\_SUBTITLE=false 下载站点字幕
    
    - DOWNLOAD\_CATEGORY=false 下载二级目录开关
    
    - DOWNLOADER\_MONITOR=true 下载器监控
    
    - SUBSCRIBE\_MODE=spider 订阅模式默认为spider
    
    - SUBSCRIBE\_RSS\_INTERVAL=30 RSS订阅模式刷新时间间隔（分钟）
    
    - SCRAP\_METADATA=true 刮削入库的媒体文件
    
    - SCRAP\_FOLLOW\_TMDB=true 新增已入库媒体是否跟随TMDB信息变化
    
    - TORRENT\_TAG=MOVIEPILOT 下载器种子标签
    
    - LIBRARY\_PATH=/media 媒体库目录
    
    - LIBRARY\_MOVIE\_NAME=movies 电影媒体库目录名称
    
    - LIBRARY\_TV\_NAME=tv 电视剧媒体库目录称
    
    - LIBRARY\_ANIME\_NAME=anime 动漫媒体库目录称
    
    - LIBRARY\_CATEGORY=false 媒体库二级分类开关
    
    - TRANSFER\_TYPE=link 整理转移方式，支持`link`/`copy`/`move`/`softlink`/`rclone_copy`/`rclone_move` ，推荐使用硬链接
    
    - OVERWRITE\_MODE=size 转移覆盖模式，默认为`size`，支持`nerver`/`size`/`always`/`latest`，分别表示`不覆盖同名文件`/`同名文件根据文件大小覆盖（大覆盖小）`/`总是覆盖同名文件`/`仅保留最新版本，删除旧版本文件（包括非同名文件）`
    
    - COOKIECLOUD\_HOST=http://<ip>:8088 cookie cloud 服务器地址
    
    - COOKIECLOUD\_KEY=xxx cookie cloud 浏览器插件中设置的key
    
    - COOKIECLOUD\_PASSWORD=xxx cookie cloud 浏览器插件中设置的端对端加密秘钥
    
    - COOKIECLOUD\_INTERVAL=20 CookieCloud同步间隔（分钟）
    
    - USER\_AGENT=USER\_AGENT=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 CookieCloud对应的浏览器UA，可选，设置后可增加连接站点的成功率，同步站点后可以在管理界面中修改
    
    - SUBSCRIBE\_SEARCH=false 订阅搜索，`true`/`false`，默认`false`，
    
    - PLUGIN\_MARKET=https://raw.githubusercontent.com/jxxghp/MoviePilot-Plugins/main/
    
    - `MESSAGER`\=telegram 消息通知渠道，支持 `telegram`/`wechat`/`slack`/`synologychat`，开启多个渠道时使用`,`分隔。同时还需要配置对应渠道的环境变量，非对应渠道的变量可删除，推荐使用`telegram`。非必选项，如果不设置就不会有消息通知。
    
    - TELEGRAM\_TOKEN=xxxx Telegram Bot Token [教程](https://hellodk.cn/post/743)
    
    - TELEGRAM\_CHAT\_ID=xxxxx Telegram Chat ID
    
    - DOWNLOADER=qbittorrent 下载器，支持qbittorrent/transmission
    
    - QB\_HOST=http://<ip>:8080 qbittorrent地址，根据你自己设置的填写
    
    - QB\_USER=admin qbittorrent 用户名，根据你设置的填写
    
    - QB\_PASSWORD=adminadmin qbittorrent密码,根据你设置的填写
    
    - QB\_CATEGORY=false qbittorrent分类自动管理
    
    - QB\_SEQUENTIAL=true qbittorrent按顺序下载
    
    - QB\_FORCE\_RESUME=false qbittorrent忽略队列限制，强制继续
    
    - MEDIASERVER=emby 媒体服务器，支持`emby`/`jellyfin`/`plex`
    
    - EMBY\_HOST=http://<ip>:8096 Emby服务器地址,,根据你设置的填写
    
    - EMBY\_API\_KEY=xxxxxxx Emby Api Key,在Emby`设置->高级->API密钥`处生成，可以先不填，后面部署完成补充然后更新容器配置就行
    
    - MEDIASERVER\_SYNC\_INTERVAL=6
    
    - **AUTH\_SITE**\=hdfans 认证站点**非常重要！需要填写MoviePilot支持的认证PT站点信息，完整的列表请看**[**官方的支持**](https://github.com/jxxghp/MoviePilot#2-%E7%94%A8%E6%88%B7%E8%AE%A4%E8%AF%81)**，如果没有站点可以去电报群求药**
    
    - **HDFANS\_UID**\=<站点id>
    
    - **HDFANS\_PASSKEY**\=<站点秘钥>
    
    - BIG\_MEMORY\_MODE=false 大内存模式
    
    - MOVIE\_RENAME\_FORMAT={{title}}{% if year %} ({{year}}){% endif %}/{{title}}{% if year %} ({{year}}){% endif %}{% if part %}-{{part}}{% endif %}{% if videoFormat %} - {{videoFormat}}{% endif %}{{fileExt}} 电影重命名格式
    
    - TV\_RENAME\_FORMAT={{title}}{% if year %} ({{year}}){% endif %}/Season {{season}}/{{title}} - {{season\_episode}}{% if part %}-{{part}}{% endif %}{% if episode %} - 第 {{episode}} 集{% endif %}{{fileExt}} 电视剧重命名格式

【测试】

**打开 http://<ip>:3000 登录进入，密码使用 docker logs `moviepilot` 查看**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-27.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-27.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-27.jpg" alt="" loading="lazy">
</picture>

## 使用

### 二级目录 插件安装

前往插件下 安装 **二级分类策略 - 配置** 插件

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-8.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-8.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-8.jpg" alt="" loading="lazy">
</picture>

```shell
# 配置电影的分类策略
movie:
  # 分类名同时也是目录名
  动画电影:
    # 匹配 genre_ids 内容类型，16是动漫
    genre_ids: '16'
  华语电影:
    # 匹配语种
    original_language: 'zh,cn,bo,za'
  # 未匹配以上条件时，分类为外语电影
  外语电影:

# 配置电视剧的分类策略
tv:
  # 分类名同时也是目录名
  国漫:
    # 匹配 genre_ids 内容类型，16是动漫
    genre_ids: '16'
    # 匹配 origin_country 国家，CN是中国大陆，TW是中国台湾，HK是中国香港
    origin_country: 'CN,TW,HK'
  日番:
    # 匹配 genre_ids 内容类型，16是动漫
    genre_ids: '16'
    # 匹配 origin_country 国家，JP是日本
    origin_country: 'JP'
  纪录片:
     # 匹配 genre_ids 内容类型，99是纪录片
    genre_ids: '99'
  综艺:
    # 匹配 genre_ids 内容类型，10764 10767都是综艺
    genre_ids: '10764,10767'
  儿童:
    # 匹配 genre_ids 内容类型，10762是儿童
    genre_ids: '10762'
  国产剧:
    # 匹配 origin_country 国家，CN是中国大陆，TW是中国台湾，HK是中国香港
    origin_country: 'CN,TW,HK'
  欧美剧:
    # 匹配 origin_country 国家，主要欧美国家列表
    origin_country: 'US,FR,GB,DE,ES,IT,NL,PT,RU,UK'
  日韩剧:
    # 匹配 origin_country 国家，主要亚洲国家列表
    origin_country: 'JP,KP,KR,TH,IN,SG'
  # 未匹配以上分类，则命名为未分类
  未分类:
```

### 目录设定

**在设定 目录 选项中，根据 你的 下载目录 和预想** **的刮削目录 进行修改。**

我的目录结构

```shell
media
├── download
│   ├── AV
│   ├── 动漫
│   ├── 手动整理
│   ├── 电影
│   └── 电视剧
├── 动漫
│   ├── 儿童
│   └── 番剧
├── 电影
│   ├── 动画电影
│   ├── 华语电影
│   └── 外语电影
└── 电视剧
    ├── 国产剧
    ├── 日韩剧
    ├── 未分类
    ├── 欧美剧
    ├── 纪录片
    └── 综艺
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-9.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-9.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-9.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-10.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-10.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-10.jpg" alt="" loading="lazy">
</picture>

### 站点同步

按照上文红色的cookiecloud进行设置。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-11.jpg" alt="" loading="lazy">
</picture>

如果上述步骤都完成，恭喜你，大概率已经搭建完成。现在可以同步站点进行测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-12.jpg" alt="" loading="lazy">
</picture>

**如果同步成功，站点管理 栏目 里面应该会有相关的站点。**

### 下载器和媒体管理器

这部分应该没人不会吧，根据你自己的部署情况进行修改调整。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-13.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-13.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-13.jpg" alt="" loading="lazy">
</picture>

如此，一个最基础的MoviePilot已经搭建完成，剩下的可以自由探索。