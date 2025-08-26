---
tags: [server-guide]
title: "什么值得买-持续更新ing（VPS推荐）"
published: 2023-07-05
---

> ## 前言
> 
> 经常有朋友会问我 "什么 VPS 适合建站、跑项目"、"什么 VPS 适合用来科学上网"、"什么 VPS 适合离线下载，PT下载" 之类的问题。于是准备写一篇我使用的VPS（什么值得买推荐）。

**PS:这里不会出现CloudCone,Racknerd等超兽大王商家的推荐，以下均目前本人所持，长期使用的商家。**

## 项目,建站,性能需求型推荐

### 1.Hetzner

**俗称欧洲阿里云，性能钢炮。Hetzner 拥有数十万台服务器，是欧洲最大的数据中心运营商之一。自 1997 年成立以来，Hetzner 一直为私人和企业客户提供强大的托管产品和可靠的 IT 基础设施。通过结合其在创新技术、有吸引力的价格、专家支持和灵活的客户服务方面的优势，Hetzner 在德国和欧洲内外扩大了市场。Hetzner 是一家德国公司，在纽伦堡和法尔肯施泰因（均位于德国）和芬兰赫尔辛基拥有并运营着自己的高科技数据中心，最近又在美国弗吉尼亚州阿什本增设了一个新机房。一共有四个数据中心：德国 2 个，芬兰 1 个，美国 1 个。Hetzner 家的 VPS 和独服价格实惠，性能稳定，NVMe SSD，10Gbp 带宽，支持信用卡、Paypal 付款。就是到国内网络比较慢。AMD EPYC 处理器的 VDS 套餐性能可以。2024年还升级了旧的 CX产品线，价格同ARM系列持平。非常适合一些小业务需求。2024年 8 月更新，新上的新加坡地区，性价比较差。**

#### 相关测试

测评地址：[Hetzner-Dedicated-VDS-EPYC-9654](https://catcat.blog/hetzner-dedicated.html)

测评地址：[Hetzner-Shared vCPU-VPS-X86](https://catcat.blog/hetzner%e7%be%8e%e8%a5%bf%e4%bf%84%e5%8b%92%e5%86%88vps%e8%af%84%e6%b5%8b.html)

测评地址：[Hetzner-Shared vCPU-VPS-ARM](https://catcat.blog/hetzner-arm-%e5%92%8cx86-%e5%af%b9%e6%af%94%e8%af%84%e6%b5%8b.html)

测评地址：[Hetzner-Dedicated server](https://catcat.blog/hetzner-25%e6%ac%a7%e6%9d%9c%e7%94%ab%e6%b5%8b%e8%af%95.html)

测评地址：[Hetzner 新加坡 VDS 测评](https://catcat.blog/hetzner-sg-vds.html)

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/07/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/07/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/07/image.jpg" alt="" loading="lazy">
</picture>

#### 购买链接

**官网地址：[Hetzner 官网](https://hetzner.cloud/?ref=5WVbNP94ckFR)（使用该链接首次注册或者购买机器，可以得到 20 欧的试用金（有效期一个月），可以试用各种型号的 VPS）**

**2025年社区20欧信用代码：HCC25-L4ET82**

### 2.Crunchbits

一家 2021 年 11 月 30 日成立的美国主机商，主营 NVMe KVM VPS、EPYC 高频 NVMe VPS、锐龙 5950X NVMe KVM VPS、大硬盘存储、VDS锐龙 7950X 、GPU 显卡服务器和独立服务器，数据中心位于美国 爱达荷州。最近在Low促销，生意不错，荣获 2023 最受推荐的供应商。机器稳定性不错，已有一台年兽近 360 天运行，2024年初的时候有年兽套餐，性价比极高，4.5G内存配125G 硬盘跑一些监控，小日志什么的非常合适。（目前年兽套餐已经无法循环计费，商家给出了升级版的迁移方案。）

#### 相关测试

测评地址：[Crunchbits-5950X](https://catcat.blog/crunchbits.html)

测评地址：[Crunchbits-7950x VDS](https://catcat.blog/crunchbits-17-vds.html)

测评地址：[Crunchbits Special](https://catcat.blog/crunchbits-special.html)[](http://img.laoda.de/i/2023/02/11/ibby0z-2.webp)

#### 购买链接

官网地址：[Crunchbits 官网](https://crunchbits.com/)（无AFF）

促销请关注 [Crunchbits-lowendtalk](https://lowendtalk.com/profile/crunchbits)

### 3.Liteserver （近两年涨价离谱，非黑五不推荐）

2007年的老商家，自有ASN AS60404，主机托管于荷兰Serverius DC1资料中心，有NVMe及HDD可选，均提供1Gbps网络线路，流量会使用完成后会限速10Mbps。Liteserver的性价比很不错，在欧洲的口碑良好。支持NVME和HDD款互相切换，每年黑五都有五折优惠。2023年黑五进货了AMD 四代 9754系列，现在nvme款有两套选择，CPU不同，7763和9754。两款CPU性能差距不是很大，但是9754款存在io限制。建议的慎入。

#### 相关测试

测评地址：[LiteServer 荷兰  AMD EPYC™ Genoa 9754 测评](https://catcat.blog/liteserver-%e8%8d%b7%e5%85%b0-amd-epyc-genoa-9754-%e6%b5%8b%e8%af%84.html)

测评地址：[LiteServer 荷兰 AMD Milan 7763 测评](https://catcat.blog/112-2.html)

#### 购买链接

官网地址：[Liteserver官网](https://clients.liteserver.nl/aff.php?aff=621)（有AFF）

### 4.Netcup

德国和 Hetzner 齐名的供应商，有 ARM，VDS，VPS，域名，块存储等一系列业务。经常做活动，有概率可以拿到很不错的配置，例如 RS2000 硬盘翻倍到 1T 的配置。唯一缺点是德国人对于合同的严谨性，部分机型存在合同期，购买前需谨慎。Netcup连续多年荣获欧洲最喜爱的网络托管商，他们非常在乎口碑，服务也非常好。

测评地址：[Netcup RS 1000 G11 维也纳 AMD 9634 测评](https://catcat.blog/netcup-rs-1000-g11-at-amd-9634.html)

注册教程：[Netcup 注册免税入坑指南](https://catcat.blog/netcup-signup.html)(内含优惠券)

### 5.Alwyzon

奥地利云服务商 Alwyzon，Hohl IT e.U.旗下品牌，主要售卖 KVM 虚拟化的 VPS，大硬盘存储 VPS 和独立服务器，在奥地利最大互联网中心 Interxion 园区内运营所有服务器。欧洲对等互联优秀。2024年也更新了性能款的产品线，目前使用的四代EPYC，Raid10 存储。

#### 相关测试

测评地址：[Alwyzon 维也纳 AMD EPYC™ Genoa 9354P 测评](https://catcat.blog/alwyzon-at-amd-epyc-genoa-9354p.html)

#### 购买链接

官网地址：[Alwyzon 官网](https://www.alwyzon.com/en)（无AFF）

### 6.Nube.sh

**快车道老板的品牌，知名上游，很多常见的例如lain 都是他们的下游。虚拟机流量计费为单向计费，只计算流出流量，不记流入。支持按小时计费。也有裸金属租用等，价格从亚太的角度来说挺不错。目前地区已经有了HK,US,SG,JP。机器性能比较不错，Zen 3 EPYC的1 vCPU 加 1GB DDR4内存最低每月2.82美金起。自营 IP 骨干网。控制台也是出钱自研的，非常简洁直观。**

<iframe src="https://static.nube.sh/html-image/speed-sc/336x280/index.html?lp=https%3A%2F%2Fnube.sh%2Finvite%2F424692390H4EEM" style="width:336px;height:280px;border:none;" scrolling="no" frameborder="0"></iframe>

#### 相关测试

**测评地址：[Nube Cloud 香港 AMD 7713 测评](https://catcat.blog/alwyzon-at-amd-epyc-genoa-9354p.html)**

**测评地址：[Nube Cloud 香港 AMD 7950X 独立服务器 测评](https://catcat.blog/nube-cloud-hk-amd-7950x.html)**

**测评地址：[Nube Cloud 美国 AMD 7663 测评](https://catcat.blog/nube-amd-7663-sjc.html)**

**测评地址：[Nube Cloud 香港 AMD 7532 独立服务器 测评](https://catcat.blog/nube-cloud-hk-amd-7532-dedicated-server.html)**

**测评地址：[Nube.SH 香港 AMD 9950X 裸金属服务器测评](https://catcat.blog/nube-sh-hk-amd-9950x.html)**

#### 购买链接

**官网地址：[Nube.sh 官网](https://nube.sh/invite/424692390H4EEM)（有AFF）**

### 7.Evoxt

Evoxt，美国商家，成立于2020年，自有ASN 212083。老板是马来西亚华裔，工单支持中文，目前数据中心有12 个节点。机器的 CPU 和 IO 配置都比较可以，有些热门地区托管在比较知名的上游，比如香港日本在 xtom 的数据中心。香港也使用 7950x，其他地区也有像 epyc 四代一样的配置。

#### 相关测试

测评地址：[Evoxt AMD EPYC-Genoa 荷兰测评](https://catcat.blog/alwyzon-at-amd-epyc-genoa-9354p.html)

测评地址：[Evoxt AMD EPYC-Genoa 波兰测评](https://catcat.blog/evoxt-amd-epyc-genoa-pl.html)

测评地址：[Evoxt AMD Ryzen 7950x 香港测评](https://catcat.blog/evoxt-amd-epyc-genoa-pl.html)

#### 购买链接

**官网地址：[Evoxt 官网](https://console.evoxt.com/aff.php?aff=292)（有AFF）**

**优惠码: AFF292-sa （5%折扣）**

## 离线下载,存储PT下载型推荐

对于下载需求分为两类，短期存储和长期存储。通过 VPS 下载中转然后上传到网盘，不需要长期保存，下载完传到网盘就删除，通常一部电影的大小在 5G 左右，一般 VPS 只有 10-20G 左右磁盘容量，除去系统和软件的占用，最多只能 1-2 个任务同时进行。如果有同时下载更多任务的需求，或者需要长期存储，那就需要考虑更大的空间，或者直接上大盘鸡了。

PT下载对网络和内存CPU都有一定的考验，流量消耗极大，常规机器刷力堪忧。

### 1.HostBrr （可刷PT，但注意流量，Hetzner转售）

Hetzner转售商，性价比极高。价格低廉（平均单价 2.2$/1TB），适合保种，离线下载用。目前开业一年有余，非常好。服务器主要位于**德国/芬兰**，支持Linux/Windows有储存鸡、高配鸡（7950XD、5950X、3900x、12900k）、独服、虚拟主机、Nat鸡，可以说什么都有。商家工单回复还算快、急的话可以直接去LET私聊商家，态度很好，无客户歧视。退款政策：14天内无条件退款（非常爽快），发工单即可。

#### 相关测试

测评地址：[Hostbrr 德国 AMD 9454P 测评](https://catcat.blog/hostbrr-amd-9454p.html)

测评地址：[Hostbbr 3T超大存储年付72刀翻倍款vps测评](https://catcat.blog/hostbbr-3t%e8%b6%85%e5%a4%a7%e5%ad%98%e5%82%a8vps%e6%b5%8b%e8%af%84.html)

测评地址：[Hostbbr 存储 NAT VPS 测评](https://catcat.blog/hostbbr.html)

测评地址：[Hostbrr 芬兰周年庆6T存储优惠 测评](https://catcat.blog/hostbrr-fi-6t.html)

测评地址：[Hostbrr 德国周年庆6T存储优惠 测评](https://catcat.blog/hostbrr-1-year-celebration-deals-6t.html)

测评地址：[Hostbrr DE AMD 7950X3D 测评](https://catcat.blog/hostbrr-de-amd-7950x3d-%e6%b5%8b%e8%af%84.html)

#### 购买链接

官网地址：[HostBrr 官网](https://my.hostbrr.com/order/forms/a/MzQw)（含AFF）

促销请关注 [HostBrr-lowendtalk](https://lowendtalk.com/profile/labze)

### 2.BuyVM（PT刷力很烂，离线下载不错，唯一优点抗DMCA）

运营了十多年的老牌 VPS 商家，其无限流量 VPS 低至 3.5 美元/月，加上仅需 1.25 美元/月的 256G 附加存储空间，总共只需 4.75 美元/月就可以拥有一个 256G 无限流量大盘鸡。。连续付三个月可以升级为PRO用户，带宽升级到10G无限。由于极具性价比，所以经常处于缺货状态。有需求建议先**注册账号**。晚上凌晨为补货时间。

2025年更新：目前已经被 Cloudzy AI 收购。卢森堡地区可能会迁移去瑞士或者荷兰，具体方案还没给出。DMCA抗的效果未知。

#### 相关测试

测评地址：[BuyVM-Luxembourg-5900X](https://catcat.blog/buyvm-%e5%8d%a2%e6%a3%ae%e5%a0%a1-5900x-%e4%b8%8d%e9%99%90%e6%b5%81%e9%87%8f.html)

#### 购买链接

官网地址：[BuyVM官网](https://my.frantech.ca/aff.php?aff=6455)(有 AFF)