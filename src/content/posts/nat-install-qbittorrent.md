---
tags: [laboratory]
title: "Nat机部署qbittorrent"
published: 2023-08-29
---

## 安装qbittorrent

采用一键脚本

```shell
bash <(wget -qO- https://raw.githubusercontent.com/jerry048/Dedicated-Seedbox/main/Install.sh) <用户名称> <用户密码> <缓存大小(单位:GiB，且为整数)>
```

## 端口转发

填入8080

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/08/image-8.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/08/image-8.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/08/image-8.jpg" alt="" loading="lazy">
</picture>

## 修改配置文件

使用 root 用户登录到服务器；  
找到 `qbittorrent.conf` 文件（如 `~/.config/qBittorrent/qBittorrent.conf` ）并打开；  
在`[Preferences]`中 设置

```shell
WebUI\HostHeaderValidation=false
WebUI\CSRFProtection=false
```

如果没有 `WebUI\CSRFProtection` 选项，可自行添加；  
修改完成后保存并退出；  
重新启动 `qbittorrent` 服务，即可使用