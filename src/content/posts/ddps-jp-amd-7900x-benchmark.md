---
tags: [jp-server]
title: "DDPS 日本 AMD 7900X 测评"
published: 2025-07-13
---

DDPS是一家注册在美国的日本商家，日本分部地址在大版府大阪市。2023年12月左右成立，提供高性能或大流量的日本VPS，另有日本独服和机房托管，支持信用卡和PayPal付款。但是注意，机器下单后纯手动开通，我这个下单一个多月机器都没开出来。就算开工单也无任何工单。性能型VPS属于7900X和9900X混开，差距不大。有两个数据中心可以选 MC Digital Realty NRT10（IIJ 10Gbps） 和 国际方向的Datacamp/CDN77 的 Equinix TY8。

> > **商家手动开机，时间极长，工单极慢，谨慎下单**
> 
> ## 套餐
> 
> - **_Provider :_** **_D_****_D_****_P_****_S_**
> 
> - **_Type/Plan : TY-4G_**
> 
> - **_Processor : AMD Ryzen 9 7900 12-Core Processor_**
> 
> - **_Num of Core :_** **_2_** **_Cores_**
> 
> - **_Memory :_** **_4_** **_GB_**
> 
> - **_Storage :_** **_8_****_0 GB NVMe_**
> 
> - **_Bandwidth : 2T_****_B @ 1_****_0_** **_Gbps IN | 10 Gbps OUT_**
> 
> - **_Location :_ JP**

## 测评

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 4 minutes
Processor  : AMD Ryzen 9 7900 12-Core Processor
CPU cores  : 2 @ 3693.052 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 81.0 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : STANDARD PC (I440FX + PIIX, 1996)
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : DDPS Networks, LLC
ASN        : AS18526 DDPS Networks, LLC
Host       : DDPS Networks, LLC
Location   : Tokyo, Tokyo (13)
Country    : Japan

fio Disk Speed Tests (Mixed R/W 50/50) (Partition -):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 454.60 MB/s (113.6k) | 2.36 GB/s    (36.8k)
Write      | 455.80 MB/s (113.9k) | 2.37 GB/s    (37.0k)
Total      | 910.41 MB/s (227.6k) | 4.73 GB/s    (73.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.80 GB/s     (5.4k) | 3.00 GB/s     (2.9k)
Write      | 2.95 GB/s     (5.7k) | 3.20 GB/s     (3.1k)
Total      | 5.76 GB/s    (11.2k) | 6.20 GB/s     (6.0k)
```

### GeekBench 5

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-29.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-29.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-29.jpg" alt="image" loading="lazy">
</picture>

### GeekBench6

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-31.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-31.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-31.jpg" alt="image" loading="lazy">
</picture>

### IP质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/044b801f2cf07a7e4f09db3ad421c803.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/044b801f2cf07a7e4f09db3ad421c803.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/044b801f2cf07a7e4f09db3ad421c803.jpg" alt="044b801f2cf07a7e4f09db3ad421c803" loading="lazy">
</picture>

### 网络质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-25.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-25.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-25.jpg" alt="image" loading="lazy">
</picture>

### 三网回程

#### 北京

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-26.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-26.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-26.jpg" alt="image" loading="lazy">
</picture>

#### 上海

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-27.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-27.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-27.jpg" alt="image" loading="lazy">
</picture>

### 广东

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-28.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-28.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-28.jpg" alt="image" loading="lazy">
</picture>

### BGP

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-30.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-30.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-30.jpg" alt="image" loading="lazy">
</picture>