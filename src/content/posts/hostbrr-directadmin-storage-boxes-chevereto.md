---
tags: [laboratory]
title: "HostBrr DirectAdmin Storage Boxes 图床神器！"
published: 2024-11-20
---

**随着黑五的到来，我的老朋友又推出的新的存储套餐。这次新增了 DirectAdmin 的套餐。其实就是虚拟主机，给的盘挺大的，价格非常优惠。底层仍然是 Hetzner的SX295 机器，Raid6阵列。我也是第一回用，今天略微研究了下，发现搭图床超级方便。**

\[tip type="danger" title="注意注意"\]这个是共享ip,被邻居恶搞风险非常高，介意误入\[/tip\]

## 测试套餐

- **_Provider : Hostbrr_**

- **_Type/Plan : StorageBox 500 GB_**

- **_Processor : AMD EPYC 7402P_**

- **_500 GB NVMe Cached HDD_**

- **_2.5 TB Bandwidth_**

- **SSH/FTP/rSync**

- **_UNLIMITED Domains_**

- **_UNLIMITED Subdomains_**

- **_UNLIMITED Databases_**

- **_Free SSL Certificates_**

- **_Softaculous Script Installer_**

- **_DirectAdmin Control Panel_**

- **_Hosted in Falkenstein, Germany_**

- **_Price: €7/year_**

- **_Order : [Order now!](https://my.hostbrr.com/order/main/packages/BF2024/?group_id=63&currency=EUR/a/MzQw)_（含 AFF）**

如果有更大的需求，可以购买其他版本，优惠码：**BFBOX**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-25.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-25.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-25.jpg" alt="" loading="lazy">
</picture>

## Chevereto 图床搭建方法

其实很简单，一开始我想复杂了。

下单完成激活后，邮箱会收到一个激活邮件。大概类似以下这样，你要做的就是登录。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-17.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-17.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-17.jpg" alt="" loading="lazy">
</picture>

在下面这里修改你的语言，添加你的域名----应该是和你购买时候填写的域名会一致，如果你购买的时候不是瞎写的话。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-19.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-19.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-19.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-18.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-18.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-18.jpg" alt="" loading="lazy">
</picture>

然后进入**子域名管理**界面，添加你需要设置图床的子域名，当然你要使用顶级域也可以。

**同时需要在域名解析商那里进行域名的解析，如果是CloudFlare，请先关闭小黄云，部署成功后再打开。**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-20.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-20.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-20.jpg" alt="" loading="lazy">
</picture>

当上面前置条件完成后，就可以去应用市场完成一键安装。

直接拉到选项的最底下，有个 **ClipBucket** ，点击进入。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-21.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-21.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-21.jpg" alt="" loading="lazy">
</picture>

会新增打开一个页面，里面有很多php类型的项目，可以根据自己的需要安装。

我这里选择 安装chevereto ，点击 intall，选择你需要安装的域名，和默认的管理员账户密码。等待一会即可完成安装。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-23.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-23.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-23.jpg" alt="" loading="lazy">
</picture>

**经过测试，可以直接进行4.1.4往4.2.3的最新版本升级，前提是你是有激活码用户，如果是其他，可以自行从网络下载破解的安装包进行创建网站安装。这里仅展示购买的用户安装。**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-24.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-24.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-24.jpg" alt="" loading="lazy">
</picture>