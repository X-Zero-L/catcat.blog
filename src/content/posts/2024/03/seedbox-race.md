---
title: "PT盒子教程&如何种子竞速刷流"
published: 2024-03-03
categories: 
  - "pt"
---

- 2024年4月27日 更新 : 馒头 上传计算最多三倍体积大小的限制现在也套用至未完成的种子。拆包刷流退出历史舞台。

## 写在前面

由于国内上传带宽的逐步锁紧，已经运营商对PCDN的封锁，家宽刷流已经不是一个好的选择。本人前两天电信商宽累积PT的qb只挂了20T上传（一年多）的情况下，仍然触发了运营商对上传过大导致的对光猫的封锁。电信的客户经理提到，无论出于何种原因，一旦遭到限速，将只有一次解封机会，后续如果仍然触发，后果将由自行承担。如果你选择家宽刷流，请一定限速限速限速。

## 刷流的要点

网络连接性（优先内网），硬盘的IO（SSD起步），CPU以及内存不能太小。

## 盒子的选择、购买

（这段都是抄来的）

首先，得先明确，刷什么站，需要杜甫还是共享，注重性价比还是注重速度。

### SeedBox（非必要不要选购）

#### 这是什么？

> 顾名思义，共享就是多人使用一台服务器，公用一个 IP，使用同一个硬盘。

#### 有什么不好处?

- 大多数共享盒子都非常看脸，如果你有一个捣蛋调皮的邻居，那就完犊子了。(指循环跑 io的崽种）

- 流量大多数有限制

- 不能自己折腾服务器

- 国内大多数站点都不允许共享盒子

以下是整理的大站的盒子限速表：

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/03/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/03/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/03/image.jpg" alt="" loading="lazy">
</picture>

https://catcat.blog/pt%e7%ab%99%e7%82%b9%e9%99%90%e7%ae%b1%e9%99%90%e9%80%9f%e8%a1%a8.html

#### 既然大多数国内站点都不支持，而且还有那么多不好处，那么我买它干啥？

- 便宜

- 便宜

- 便宜

- 你可以只花几十 RMB 就可以享受到 10G 乃至 20G 的带宽

- 大多数的网络素质都极佳，比如 sh 就是用的 leaseweb 的网络，同样的配置下，leaseweb 可以保证更高的优先级，换人话说就是，你单个种子的 ratio 更高。

- 内网互刷效率极高

#### 那么在哪里才能买到呢？

这里只推我我买过的。

- [seedhost](https://www.seedhost.eu/)

> 俗称 sh ，流量少，盘一般大，刷力尚可，超过流量上限后限速至100mbps，提供安装rt de，起步6欧元，这家其实也有提供杜甫出租，但是常年无货。其SSD机器据说刷力不错，外站经常见到。支持信用卡，paypal。

- [hostingby.design](https://my.hostingby.design/aff.php?aff=1266)

以前的seedbox.io，现在改名了。服务器和seedhost一样，位于leaseweb(以前是NFOrce)。提供leaseweb 和hetzner的杜甫二次专售，刷力可以。但是由于热门，需要抢。刷外站效果极好。

## 虚拟服务器

虚拟专用服务器（也称为VPS）是**物理服务器上的独立虚拟环境**，物理服务器由云服务提供商或网站托管服务提供商拥有和运营。 VPS 托管使用虚拟化技术将一台物理机器拆分为共享资源的多个专用服务器环境。

一般来说，就国内PT站点而言，用的最多的就是BuyVM，Hetzner Cloud，Netcup。

### BuyVM介绍

BuyVM成立于 2010 年，英国注册公司 FRAN­TECH SO­LU­TIONS LTD (07743806) 旗下的 VPS 品牌，知名老牌商家。目前主营美国纽约、拉斯维加斯、迈阿密和卢森堡的 KVM VPS (自主研发 Stal­lion 管理面板，最高万兆 (10Gbps) 带宽不限制流量，1 个 IPv4 和 /48 IPv6，免费快照，支持 Win­dows 系统。)。BuyVM在以上地区都提供了可供 VPS 挂载的 Block Stor­age Slabs (附加存储块)，每 256GB 仅需 $1.25 / 月。在2023年之前，由于支付宝结算可以使用加元结算，10G不限流量，卢森堡抗DMCA投诉的特点广受推崇。但2023年之后，由于现在只能用美元结算，性价比一再降低，10G的不限流量也成为空话（首先本身机器就需要先使用3个月以上才会升级），块存储需要每天蹲点抢购。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/03/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/03/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/03/image-1.jpg" alt="" loading="lazy">
</picture>

这个配置和这个价格 其实去刷流，也刷不过别人。一旦竞速起来，由于cpu和内存的限制，往往qb和deluge直接崩溃。说实话，保种的性价比其实也不是很高。

```

Basic System Information:
---------------------------------
Uptime     : 68 days, 11 hours, 10 minutes
Processor  : AMD Ryzen 9 5900X 12-Core Processor
CPU cores  : 1 @ 3693.058 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 461.3 MiB
Swap       : 0.0 KiB
Disk       : 9.8 GiB
Distro     : Debian GNU/Linux 11 (bullseye)
Kernel     : 5.10.0-26-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : FranTech Solutions
ASN        : AS53667 FranTech Solutions
Host       : FranTech Solutions
Location   : Luxembourg, Luxembourg (LU)
Country    : Luxembourg

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 407.38 MB/s (101.8k) | 1.75 GB/s    (27.4k)
Write      | 408.46 MB/s (102.1k) | 1.76 GB/s    (27.6k)
Total      | 815.85 MB/s (203.9k) | 3.52 GB/s    (55.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.07 GB/s     (4.0k) | 2.05 GB/s     (2.0k)
Write      | 2.18 GB/s     (4.2k) | 2.19 GB/s     (2.1k)
Total      | 4.25 GB/s     (8.3k) | 4.24 GB/s     (4.1k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 1.11 Gbits/sec  | 951 Mbits/sec   | 14.6 ms        
Scaleway        | Paris, FR (10G)           | 1.11 Gbits/sec  | 974 Mbits/sec   | 10.1 ms        
```

### Hetzner Cloud

又称 HZ，受馒头成人大包的影响，非常火热。默认按小时计费，随用随删，20T流量封顶，内网互刷。走别人推荐链接注册赠送20刀体验金，还有论坛的20刀试用。加起来40刀可以刷几百t的馒头流量。但这边会存在一个问题，叫拆包。

#### 什么叫拆包

**拆包**: 只下载大包中的一部分文件。这种行为在除了馒头成人大包以外的站点属于严打范围。尤其是使用自动化拆包的行为，利用盒子的高上传，和拆包的低下载，获取高额的ratio。但对于种子本身无任何贡献。

\[admonition color="red"\]**！！！！ 请不要在馒头成人大包以外的范围使用此行为！！！！**\[/admonition\]

#### 如何注册

官网地址：[Hetzner 官网](https://hetzner.cloud/?ref=5WVbNP94ckFR)（使用该链接首次注册或者购买机器，可以得到 20 欧的试用金（有效期一个月），可以试用各种型号的 VPS）

目前2024新年度社群代码已更新，输入**HCC24-L7ST92**可得20欧元。

推荐使用ARM机型刷，价格更加低廉一点。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/03/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/03/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/03/image-2.jpg" alt="" loading="lazy">
</picture>

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 3 minutes
Processor  : Neoverse-N1
CPU cores  : 2 @ ??? MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 3.7 GiB
Swap       : 0.0 KiB
Disk       : 37.5 GiB
Distro     : Ubuntu 22.04.3 LTS
Kernel     : 5.15.0-79-generic
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online
 
IPv6 Network Information:
---------------------------------
ISP        : Hetzner Online GmbH
ASN        : AS24940 Hetzner Online GmbH
Host       : Hetzner
Location   : Nuremberg, Bavaria (BY)
Country    : Germany
 
fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 146.45 MB/s  (36.6k) | 1.22 GB/s    (19.1k)
Write      | 146.36 MB/s  (36.5k) | 1.26 GB/s    (19.6k)
Total      | 292.81 MB/s  (73.2k) | 2.48 GB/s    (38.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.09 GB/s     (4.0k) | 2.10 GB/s     (2.0k)
Write      | 2.27 GB/s     (4.4k) | 2.34 GB/s     (2.2k)
Total      | 4.36 GB/s     (8.5k) | 4.44 GB/s     (4.3k)
 
Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1074                          
Multi Core      | 1908                          
Full Test       | https://browser.geekbench.com/v6/cpu/2942919
```

### Netcup

这家也是德国商家，Netcup账号比较严格，需要订购产品的时候才能注册账号，注册后账号需要提供身份证明。提供的身份证明有：国外机票、驾驶证、VISA银行卡，相比HZ的注册难度小。价格算不上便宜，但由于2.5G口+120T的高速流量+320G的硬盘还是性价比稍可。还有一点值得说的就是netcup连续多年荣获欧洲最喜爱的网络托管商，他们非常在乎口碑，服务也非常好，不过由于欧洲的云计算厂商都是先用再付款（账单后出），所以被很多居心叵测的用户用来薅羊毛，netcup在国内聘请了公司专门和这些“用了不给钱”的用户打官司，所以如果是合同机，请一定要完成合同，下单前做好慎重考虑。

下面是一些注意事项，请格外注意。⚠️

#### 1、合同时间问题

netcup平时官网订购，VPS产品默认计费周期是6个月的，意思是第一次要交6个月的费用。可以选择按小时计费，计费周期是1个月，价格会贵一点。

Root-Server系列默认计费周期也是6个月，还有一个最短合同期是12个月，简单点说就是最低要订购一年，每6个月付一次。可以选择计费周期按月计算，合同期一个月，但是价格会贵一点。

#### 2、订单取消问题

netcup针对使用中的主机VPS取消，要在下一次续约时间前至少31天提交，也就是至少提前一个月提交取消申请。假如你购买的是计费周期按月计算的VPS，你只想用一个月，不想续约，那么就要在你购买付款后的第一天就要在后台点取消产品，否则将进入下个计费周期，至少订购2个月。

当然不知道具体取消时间也很简单，后台管理界面Cancellation里显示了当前时间终止合同后的生效时间。上面显示的时间就是你现在终止后，你的VPS最后使用的到期时间。

#### 3、法律问题

德国人很重视规则，也可以说是有点死板，对合同执行非常严格，但同时产品非常厚道，价格便宜，不会存在什么超售情况，非常稳定，值得信奈。

像上面说的合同取消问题，就有部分买家没注意，然后又不想续约，后续不付款，导致收到了催缴的律师函，据说在国内有法律团队。

因此，最好避免因违约不付款而产生的法律问题，目前所知道的，整个网上好像只有一个人收到过律师函，不知真假。虽说大概率可能炒作，但我们要尽量避免违约，做一个合规的买家。

#### 4、机房位置问题

主要有2个机房，纽伦堡和维也纳，相对国内网络来说，前者纽伦堡连接性更好。

#### **5、宽带和流量问题（重中之重）**

普通VPS流量为80TB，1G的带宽，超过80TB后会宽带会限制在100M带宽，可以无限流量，没有任何额外费用。

Root-Server系列是不限流量的，根服务器2.5G带宽，每个VPS保证至少1G可用带宽。为了保证其它客户的公平性，在同时满足以下条件时会被限制在200M带宽使用。

1、一个月内超过120TB流量。

2、 超过60分钟的时间连续使用超过1Gbit/s的带宽。

上述2个条件，第一个很好理解，第二个估计部分人会觉得绕口，这里简单描述一下具体情况：就是你的VPS在一个小时内的流量超过了128M/s\*3600s=460800M=460G，就是说只要保证一小时流量不超过460G，就可以一直以2.5G带宽运行。

上面2个条件，特别是第二个条件，一般人极难达到，就算是作为PT盒子刷流，以连续1小时平均带宽超过1Gbit/s上传运行也是非常少见的。（这里的1G是上行+下行的带宽，刷流是比较容易到的，要注意限速）

当然如果部分盒子用户担心达到后带宽变200M，有一个很简单办法，就是在流量超过120T时，将网络限制到1Gbit/s即可，这样永远就可以以1Gbit/s带宽运行了，不用担心任何限制。（限速的1G带宽是上行+下行总和）

## 专用服务器

相当于你手里的电脑PC。一切都是专用的（网络可能不是），上面一台又一台的虚拟服务器就是运行在一台台专用服务器上。相比VPS而言，他有更好的自定义性，更强的性能，但是不会有崽种和你抢带宽抢 IO。而且可以疯狂折腾。但同时价格可能是VPS的几倍。

一般内站常见的专用服务器有：OVH,Hetzner,leaseweb,Scaleway,op等

### [Oneprovider](https://oneprovider.com/dedicated-servers/1gbps)

著名黄牛，没有自己的机器，全都是转售，转中间商差价。部分机型未涨价前性价比不错，实在没钱可以考虑。（都没钱了还刷流干嘛呢？？？？）

只有这款刷流还算可以

OneProvider France Paris (Xeon E3-1220 v2 or better) 24.99€ (續費已漲價到34.49€)

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/03/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/03/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/03/image-3.jpg" alt="" loading="lazy">
</picture>

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-06-10
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E3-1240 V2 @ 3.40GHz
 CPU Cores          : 8 @ 3648.482 MHz
 CPU Cache          : 8192 KB
 AES-NI             : Enabled
 VM-x/AMD-V         : Enabled
 Total Disk         : 1.8 TB (13.5 GB Used)
 Total Mem          : 31.3 GB (10.4 GB Used)
 System uptime      : 123 days, 14 hour 28 min
 Load average       : 0.13, 0.16, 0.17
 OS                 : Debian GNU/Linux 11
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.0.0-0.deb11.6-amd64
 TCP CC             : bbrx
 Virtualization     : Dedicated
 IPv4/IPv6          : Online / Online
 Organization       : AS12876 SCALEWAY S.A.S.
 Location           : Paris / FR
 Region             : Île-de-France
----------------------------------------------------------------------
 I/O Speed(1st run) : 371 MB/s
 I/O Speed(2nd run) : 186 MB/s
 I/O Speed(3rd run) : 153 MB/s
 I/O Speed(average) : 236.7 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    891.81 Mbps       902.67 Mbps         1.44 ms     
 Los Angeles, US  591.72 Mbps       912.54 Mbps         150.74 ms   
 Dallas, US       569.03 Mbps       909.23 Mbps         123.03 ms   
 Montreal, CA     774.07 Mbps       907.34 Mbps         92.86 ms    
 Paris, FR        926.51 Mbps       835.23 Mbps         1.39 ms     
 Amsterdam, NL    851.90 Mbps       876.90 Mbps         13.77 ms    
 Shanghai, CN     452.05 Mbps       629.72 Mbps         275.31 ms   
 Nanjing, CN      439.45 Mbps       852.80 Mbps         226.86 ms   
 Hongkong, CN     681.50 Mbps       830.52 Mbps         252.80 ms   
 Singapore, SG    275.68 Mbps       202.97 Mbps         238.84 ms   
 Tokyo, JP        354.98 Mbps       894.00 Mbps         228.99 ms   
----------------------------------------------------------------------
 Finished in        : 5 min 33 sec
 Timestamp          : 2023-06-18 15:43:17 CST
----------------------------------------------------------------------
```

### Hetzner

上面介绍过了，管子默认都是 1G 对等，无限流量，理论你一个月跑 270T 上传都是可能的。升级 10G 需要额外的安装费，且流量变为 10T。超出后 1euro/T。  
其普通机器在非活动期间有安装费且费用较高（34欧元）起步，属于中高档机器，而大部分人购买的是其拍[拍卖机](https://www.hetzner.com/sb)，拍卖机价格浮动，有的时候可以遇到比较好的传家宝机器，其后台支持机器转让，因此在hostloc上有不少人转手机器赚取差价。 在购买机器时不会立即扣款，在 14 天后出账单，且机器使用不满14天可以无条件退款，请勿滥用，可能导致封号。  

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/03/image-4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/03/image-4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/03/image-4.jpg" alt="" loading="lazy">
</picture>

**Hetzner的使用教程请见下文：**

https://catcat.blog/hetzner-dedicated-guide.html

### [hostingby.design](https://my.hostingby.design/aff.php?aff=1266)

上面也同样介绍过，同样属于二手商家。但这家是一家盒子商家，有一些黑魔法，对于种子的竞速也是比较有心得。有一些[Swizzin](https://swizzin.net/) 特调的参数。leaseweb的网络连接性属于是一等一的，在同样竞速的条件下，你的分享率肯定是高于其他盒子。默认发货需要48h，如果需要对方调教盒子，也需要24h。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/03/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/03/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/03/image-5.jpg" alt="" loading="lazy">
</picture>

# 如何跑满

### 安装软件（一般有三种脚本方向）

**[Dedicated-Seedbox](https://github.com/jerry048/Dedicated-Seedbox)**（杰大脚本）

[**quickbox**](https://github.com/amefs/quickbox-lite)（EFS脚本）

[**Swizz**](https://swizzin.net/)[**in**](https://swizzin.ltd/)（老外的脚本）

我一般使用的下面两种，提供一个web台作为集中管理。第一种的话适合VPS上随便用用，比如馒头的每周大包，快速创建一个镜像克隆用，部署安装很快。安装的方法，建议参照官网，一般都是一键脚本，然后填信息就完事，如果真有人想看，可以回头补上。

## 刷流软件

流派一般现在分为两种，deluge和qbittorrent。只适合刷刷刷，不适合保大量的种子，会非常卡。

transmission：适合保种，就我个人而言，我用 TR 保了 1.6W 种子都不带卡的。

### deluge优化

这部分其实没有什么标准答案，只能提供一个方向。

如果是用的 Deluge 启用 HPS 即可。  
HPS 是 ltconfig 自带的参数，全称High Performance Seed，如何启用？看下图。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/03/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/03/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/03/image-6.jpg" alt="" loading="lazy">
</picture>

**ltconfig 的配置**

> 你可以去[这里](https://www.libtorrent.org/single-page-ref.html)来查看具体的，下面是我使用的，⚠️注意，是我使用的，请根据自己服务器调整
> 
> 需要先停止deluge，然后写入配置，然后重载才能生效。
> 
> ```
> {
> 'active_checking': 1,
>  'active_dht_limit': 600,
>  'active_downloads': -1,
>  'active_limit': -1,
>  'active_loaded_limit': 0,
>  'active_lsd_limit': 60,
>  'active_seeds': -1,
>  'active_tracker_limit': 8000,
>  'aio_max': 300,
>  'aio_threads': 8,
>  'alert_mask': 861,
>  'alert_queue_size': 10000,
>  'allow_i2p_mixed': False,
>  'allow_multiple_connections_per_ip': True,
>  'allow_partial_disk_writes': True,
>  'allowed_enc_level': 3,
>  'allowed_fast_set_size': 0,
>  'always_send_user_agent': False,
>  'announce_crypto_support': True,
>  'announce_double_nat': False,
>  'announce_ip': '',
>  'announce_to_all_tiers': False,
>  'announce_to_all_trackers': False,
>  'anonymous_mode': False,
>  'apply_ip_filter_to_trackers': True,
>  'auto_manage_interval': 30,
>  'auto_manage_prefer_seeds': False,
>  'auto_manage_startup': 60,
>  'auto_scrape_interval': 1800,
>  'auto_scrape_min_interval': 300,
>  'auto_sequential': True,
>  'ban_web_seeds': True,
>  'broadcast_lsd': True,
>  'cache_buffer_chunk_size': 1024,
>  'cache_expiry': 60,
>  'cache_size': 524288,
>  'cache_size_volatile': 512,
>  'checking_mem_usage': 6600,
>  'choking_algorithm': 0,
>  'close_file_interval': 0,
>  'close_redundant_connections': True,
>  'coalesce_reads': False,
>  'coalesce_writes': False,
>  'connect_seed_every_n_download': 5,
>  'connection_speed': 2000,
>  'connections_limit': 1048576,
>  'connections_slack': 10,
>  'contiguous_recv_buffer': True,
>  'decrease_est_reciprocation_rate': 3,
>  'default_cache_min_age': 1,
>  'default_est_reciprocation_rate': 16000,
>  'dht.aggressive_lookups': True,
>  'dht.block_ratelimit': 5,
>  'dht.block_timeout': 300,
>  'dht.enforce_node_id': False,
>  'dht.extended_routing_table': True,
>  'dht.ignore_dark_internet': True,
>  'dht.item_lifetime': 0,
>  'dht.max_dht_items': 700,
>  'dht.max_fail_count': 20,
>  'dht.max_peers_reply': 100,
>  'dht.max_torrent_search_reply': 20,
>  'dht.max_torrents': 2000,
>  'dht.privacy_lookups': False,
>  'dht.read_only': False,
>  'dht.restrict_routing_ips': True,
>  'dht.restrict_search_ips': True,
>  'dht.search_branching': 5,
>  'dht.service_port': 0,
>  'dht_announce_interval': 900,
>  'dht_bootstrap_nodes': 'dht.aelitis.com:6881,router.bittorrent.com:6881,router.bitcomet.com:6881,router.utorrent.com:6881,dht.transmissionbt.com:6881,dht.libtorrent.org:25401',
>  'dht_upload_rate_limit': 20000,
>  'disable_hash_checks': False,
>  'disk_io_read_mode': 0,
>  'disk_io_write_mode': 0,
>  'dont_count_slow_torrents': False,
>  'dont_flush_write_cache': False,
>  'download_rate_limit': 0,
>  'enable_dht': True,
>  'enable_incoming_tcp': True,
>  'enable_incoming_utp': False,
>  'enable_lsd': True,
>  'enable_natpmp': False,
>  'enable_outgoing_tcp': True,
>  'enable_outgoing_utp': False,
>  'enable_upnp': False,
>  'explicit_cache_interval': 30,
>  'explicit_read_cache': False,
>  'file_checks_delay_per_block': 0,
>  'file_pool_size': 1000,
>  'force_proxy': False,
>  'guided_read_cache': False,
>  'half_open_limit': -1,
>  'handshake_client_version': '',
>  'handshake_timeout': 20,
>  'hashing_threads': 1,
>  'i2p_hostname': '',
>  'i2p_port': 0,
>  'ignore_limits_on_local_network': True,
>  'ignore_resume_timestamps': True,
>  'in_enc_policy': 1,
>  'inactive_down_rate': 2048,
>  'inactive_up_rate': 2048,
>  'inactivity_timeout': 20,
>  'incoming_starts_queued_torrents': False,
>  'increase_est_reciprocation_rate': 20,
>  'initial_picker_threshold': 4,
>  'lazy_bitfields': False,
>  'listen_interfaces': '0.0.0.0:31076',
>  'listen_queue_size': 3000,
>  'listen_system_port_fallback': False,
>  'local_download_rate_limit': 0,
>  'local_service_announce_interval': 300,
>  'local_upload_rate_limit': 0,
>  'lock_disk_cache': False,
>  'lock_files': False,
>  'low_prio_disk': False,
>  'max_allowed_in_request_queue': 3000,
>  'max_failcount': 1,
>  'max_http_recv_buffer_size': 6291456,
>  'max_metadata_size': 31457280,
>  'max_out_request_queue': 3000,
>  'max_paused_peerlist_size': 1000,
>  'max_peerlist_size': 3000,
>  'max_pex_peers': 200,
>  'max_queued_disk_bytes': 58720256,
>  'max_rejects': 5,
>  'max_retry_port_bind': 10,
>  'max_suggest_pieces': 32,
>  'min_announce_interval': 4500,
>  'min_reconnect_time': 0,
>  'mixed_mode_algorithm': 0,
>  'mmap_cache': '',
>  'network_threads': 0,
>  'no_atime_storage': True,
>  'no_connect_privileged_ports': False,
>  'no_recheck_incomplete_resume': False,
>  'num_optimistic_unchoke_slots': 0,
>  'num_outgoing_ports': 0,
>  'num_want': 200,
>  'optimistic_disk_retry': 600,
>  'optimistic_unchoke_interval': 30,
>  'out_enc_policy': 1,
>  'outgoing_interfaces': '',
>  'outgoing_port': 0,
>  'peer_connect_timeout': 15,
>  'peer_fingerprint': '-DE205s-',
>  'peer_timeout': 30,
>  'peer_turnover': 4,
>  'peer_turnover_cutoff': 90,
>  'peer_turnover_interval': 300,
>  'piece_timeout': 20,
>  'predictive_piece_announce': 0,
>  'prefer_rc4': True,
>  'prefer_udp_trackers': True,
>  'prioritize_partial_pieces': False,
>  'proxy_hostname': '',
>  'proxy_hostnames': False,
>  'proxy_password': '',
>  'proxy_peer_connections': False,
>  'proxy_port': 10809,
>  'proxy_tracker_connections': False,
>  'proxy_type': 0,
>  'proxy_username': '',
>  'rate_limit_ip_overhead': True,
>  'rate_limit_utp': True,
>  'read_cache_line_size': 1024,
>  'recv_socket_buffer_size': 8388608,
>  'report_redundant_bytes': True,
>  'report_true_downloaded': False,
>  'report_web_seed_downloads': True,
>  'request_queue_time': 3,
>  'request_timeout': 15,
>  'seed_choking_algorithm': 0,
>  'seed_time_limit': -60,
>  'seed_time_ratio_limit': -100,
>  'seeding_outgoing_connections': True,
>  'seeding_piece_quota': 60,
>  'send_buffer_low_watermark': 16777216,
>  'send_buffer_watermark': 83886080,
>  'send_buffer_watermark_factor': 250,
>  'send_redundant_have': True,
>  'send_socket_buffer_size': 16777216,
>  'share_mode_target': 3,
>  'share_ratio_limit': -100,
>  'smooth_connects': False,
>  'ssl_listen': 0,
>  'stop_tracker_timeout': 15,
>  'strict_end_game_mode': False,
>  'strict_super_seeding': False,
>  'suggest_mode': 1,
>  'support_merkle_torrents': True,
>  'support_share_mode': False,
>  'tick_interval': 250,
>  'torrent_connect_boost': 300,
>  'tracker_backoff': 250,
>  'tracker_completion_timeout': 60,
>  'tracker_maximum_response_length': 1048576,
>  'tracker_receive_timeout': 30,
>  'udp_tracker_token_expiry': 60,
>  'unchoke_interval': 15,
>  'unchoke_slots_limit': -1,
>  'upload_rate_limit': 0,
>  'upnp_ignore_nonrouters': False,
>  'urlseed_max_request_bytes': 16777216,
>  'urlseed_pipeline_size': 5,
>  'urlseed_timeout': 20,
>  'urlseed_wait_retry': 30,
>  'use_dht_as_fallback': False,
>  'use_disk_cache_pool': True,
>  'use_disk_read_ahead': True,
>  'use_parole_mode': False,
>  'use_read_cache': True,
>  'use_write_cache': True,
>  'user_agent': 'Deluge/2.0.5 libtorrent/1.1.14.0',
>  'utp_connect_timeout': 3000,
>  'utp_cwnd_reduce_timer': 100,
>  'utp_delayed_ack': 0,
>  'utp_fin_resends': 2,
>  'utp_gain_factor': 3000,
>  'utp_loss_multiplier': 50,
>  'utp_min_timeout': 500,
>  'utp_num_resends': 3,
>  'utp_syn_resends': 2,
>  'utp_target_delay': 100,
>  'volatile_read_cache': False,
>  'web_seed_name_lookup_retry': 1800,
>  'whole_pieces_threshold': 20,
>  'write_cache_line_size': 2048
> }
> ```

> _**哦对了，有的时候你会发现下面有的选项在你的机器上没有，这是因为 libtorrent 版本不一致造成的，忽略它即可。**_

**硬盘的优化**

> 设计到了调度算法，想要深入研究的可以去看看国内外大佬写的论文、详解。  
> 优先选nvme的硬盘进行刷流

需要注意的是，不是所有 Linux 内核都会带 mq-deadline，如果你发现无法启用 mq-deadline，你需要自己编译一个内核模块出来。

### qbittorrent优化

- 缓存大小应设置为机器可用总内存的 1/4 左右。如果您选择 qBittorrent 4.3.x，您需要考虑内存泄漏并将其设置为 1/8。

- aio\_threads 默认设置为 4，应该适合 HDD。对于SSD甚至NVMe服务器，您可以考虑将其增加到8甚至16。
    - 对于 qBittorrent 4.3.x - 4.6.x，您可以在高级设置选项卡中更改它。
    
    - `Session\AsyncIOThreadsCount=8`对于 qBittorrent 4.1.x，您可以通过在 \[BitTorrent\] 部分下 添加来在 /home/$username/.config/qBittorrent/qBittorrent.conf 中进行设置
        - 编辑前请关闭qBittorrent
    
    - 对于 Deluge，您可以安装[ltconfig](https://github.com/ratanakvlun/deluge-ltconfig/releases/tag/v0.3.1)并通过插件进行编辑
        - aio\_threads=8

- 在 I/O 较差的机器上运行，​​则可以将 send\_buffer\_low\_watermark、send\_buffer\_watermark 和 send\_buffer\_watermark\_factor 设置为较低的值。
    - 对于 qBittorrent 4.3.x，您可以在高级设置选项卡中更改它。
    
    - `Session\SendBufferWatermark=5120`对于 qBittorrent 4.1.x，您可以在 /home/$username/.config/qBittorrent/qBittorrent.conf 中通过添加,`Session\SendBufferLowWatermark=1024`并`Session\SendBufferWatermarkFactor=150`在 \[BitTorrent\] 部分下 进行设置
        - 编辑前请关闭qBittorrent
    
    - 对于 Deluge，您可以安装[ltconfig](https://github.com/ratanakvlun/deluge-ltconfig/releases/tag/v0.3.1)并通过插件进行编辑
        - send\_buffer\_low\_watermark=1048576
        
        - send\_buffer\_watermark=5242880
        
        - send\_buffer\_watermark\_factor=150

- tick\_internal 默认设置为 100，对于某些较弱的 CPU 来说可能太高。考虑将其更改为 250 或 500。
    - 遗憾的是，无法在 qBittorrent 中更改此设置
    
    - 对于 Deluge，您可以安装[ltconfig](https://github.com/ratanakvlun/deluge-ltconfig/releases/tag/v0.3.1)并通过插件进行编辑
        - tick\_interval=250

### 自动删种

自动删种这边有两个选择，一个是 De 的插件，一个是 [AutoRemoveTorrents](https://autoremove-torrents.readthedocs.io/zh_CN/latest/index.html)  
我现在主用的是 AutoRemoveTorrents（下面会简称为 ART），这里就简单的讲讲安装和配置吧。  
ART 有两种安装方式，第一种是直接通过 pip 安装。

```
pip3 install autoremove-torrents
```

第二种是从 Github 安装

```
git clone https://github.com/jerrymakesjelly/autoremove-torrents.git
cd autoremove-torrents
python3 setup.py install
```

`autoremove-torrents` 会在当前工作目录中寻找 `config.yml` 文件。有关更多命令行参数，请查看下面的表格。

| 参数名 | 参数缩写 | 描述 |
| --- | --- | --- |
| –view | \-v | 运行并查看有哪些种子可以删除，但不要真正地删除它们。 |
| –conf | \-c | 指定配置文件的路径。 |
| –task | \-t | 运行指定的任务。参数值就是要执行的任务名。 |
| –log | \-l | 指定日志文件的路径。 |

例如：

```
autoremove-torrents --view --conf=/home/myserver/autoremove-torrents/config.yml
```

它等价于：

```
autoremove-torrents -v -c /home/myserver/autoremove-torrents/config.yml
```

要想自动删除种子，我们得先创建配置文件以及 log 目录.

```
# 创建 art 目录
mkdir -p /root/.config/art/artlogs
```

然后使用 `vi /root/.config/art/config.yml` 来创建 art 配置文件。  
创建好后写入自己的配置文件，然后保存退出即可。配置文件的说明可以去参考[ART 的文档](https://autoremove-torrents.readthedocs.io/zh_CN/latest/config.html#part-3-strategy-block)  
这里给出我自己的配置文件作为一个小小的参考。`delete_task: client: 你的客户端类型，比如 deluge qbittorrent host: 127.0.0.1:58846 username: 你客户端的账号 password: 你客户端的密码 strategies: bhd: trackers: - landof.tv stats: - Uploading remove: (ratio > 1.1 and seeding_time > 3600 ) delete_data: true`

然后，需要在命令行中输入 `crontab -e`

```
*/15 * * * * /usr/local/bin/autoremove-torrents -c /root/.config/art/config.yml -l /root/.config/art/artlogs`
```

并将上述代码丢到 crontab 当中，ART 就会每 15 分钟运行一次，按照 `/root/.config/art/config.yml` 设置好的规则，删除种子，并将 log 文件生成到 `/root/.config/art/artlogs` 目录中。

在完成上述工作之后，ART 的配置就完事了。

### Deluge插件删种

下面给出脚本文件

```
"""
deluge 删种脚本，优先保留体积大、下载人数多、上传速度高、做种时间少的种子。
用过一些删种工具，逻辑都比较粗暴，所以自己写了一个，
每个种子综合考虑各项情况，分配加权把各项加起来，从低到高删除直到剩余空间大于指定值。
40% 取当前速度和平均速度的平均值，20% 取做种中种子的上传速度按做种时间权重分配的值，
剩下的 40% 中其中一部分为取做种中种子的上传速度按下载上传人数权重分配的值，另一部分为按做种人数分配的值
比例取决于参数 KS，同时有考虑体积，体积越大加权越高（大约是 0.2 次方）
"""

from time import sleep
from deluge_client import LocalDelugeRPCClient, FailedToReconnectException
from loguru import logger
from ssl import SSLError
from collections import deque
from typing import Union, Any, Tuple, List
import os

MIN_FREE_SPACE = 3725  # type: Union[int, float]
'最小剩余空间(GiB)，当下载速度未超过临界值 MAX_DR 时小于这个值删种'
MIN_FREE_SPACE_LOWER = 3725 / 3  # type: Union[int, float]
'''当下载速度超过临界值 MAX_DR 时小于这个值删种。
硬盘空间足够的话建议两个值的差 1024(1TB) 以上'''
MAX_DR = 10 * 1024 ** 2  # type: Union[int, float]
'下载速度临界值'
MODE = 1  # type: Any
'为 1 时先删除做种中的种子，删完后再删下载中的种子；否则综合考虑一起删'
KS = 0.5  # type: Union[int, float]
'按做种人数分配的权重占 40% 的比例，取值范围 [0, 1]，为 0 代表不考虑做种人数，这个参数的目的在于延长孤种的保种时间'
INTERVAL = 600  # type: Union[int, float]
'删种的时间间隔'
MIN_DOWN_TIME = 3600  # type: Union[int, float]
'下载时间小于这个值不删'
S0 = 300  # type: Union[int, float]
LOG_PATH = ''  # type: str
EXCLUDE_LABELS = ['seed', 'public']  # type: Union[Tuple[Any, ...], List[str]]
'如果种子有这些标签，删种时会跳过'

class Deluge(LocalDelugeRPCClient):
    timeout = 10

    def __init__(self,
                 host: str = '127.0.0.1',
                 port: int = 58846,
                 username: str = '',
                 password: str = '',
                 decode_utf8: bool = True,
                 automatic_reconnect: bool = True,
                 ):
        super().__init__(host, port, username, password, decode_utf8, automatic_reconnect)

    def call(self, method, *args, **kwargs):
        if not self.connected and method != 'daemon.login':
            for i in range(5):
                try:
                    self.reconnect()
                    logger.debug(f'Connected to deluge client on {self.host}')
                    break
                except SSLError:
                    sleep(0.3 * 2 ** i)
        try:
            return super().call(method, *args, **kwargs)
        except FailedToReconnectException:
            logger.error(f'Failed to reconnect to deluge client on {self.host}')
        except:
            raise

class AutoDel:
    def __init__(self, client: Deluge):
        self.client = client
        self.sur = deque(maxlen=100)
        self.free_space = MIN_FREE_SPACE * 1024 ** 3
        self.torrent_status = {}
        self.ses_dr = 0
        self.torrent_keys = ['active_time', 'download_payload_rate', 'name', 'state',
                             'seeding_time', 'total_peers', 'total_seeds', 'total_size',
                             'total_done', 'total_uploaded', 'upload_payload_rate', 'label'
                             ]

    def update_session(self):
        self.free_space = self.client.core.get_free_space()
        if not isinstance(self.free_space, int):
            raise

        seed_ur = 0
        up_status = self.client.core.get_torrents_status({'state': 'Seeding'}, ['upload_payload_rate'])
        if not isinstance(up_status, dict):
            raise
        for _id, data in up_status.items():
            seed_ur += data['upload_payload_rate']
        self.sur.append(seed_ur)

        self.ses_dr = self.client.core.get_session_status(['download_rate'])['download_rate']

        if self.free_space < MIN_FREE_SPACE * 1024 ** 3:
            self.torrent_status = self.client.core.get_torrents_status({}, self.torrent_keys)
            if not isinstance(self.torrent_status, dict):
                raise

    def run(self):
        while True:
            try:
                while True:
                    try:
                        self.update_session()
                        break
                    except:
                        pass
                min_space = (MIN_FREE_SPACE if self.ses_dr < MAX_DR else MIN_FREE_SPACE_LOWER) * 1024 ** 3
                if self.free_space >= min_space:
                    logger.debug(f'There is free space {self.free_space / 1024 ** 3:.3f} GiB. '
                                 f'No need to del any torrents.')
                else:
                    indicator, info = self.weight()
                    while self.free_space < min_space:
                        if not indicator:
                            break
                        i = indicator.index(min(indicator))
                        state = 'Failed to delete'
                        try:
                            self.client.core.remove_torrent(info[i]['_id'], True)
                            state = 'Successfully deleted'
                        except TimeoutError as e:
                            # 正常操作，一般实际上是已经删了
                            logger.error(f'{e.__class__.__name__}: {e}')
                        except Exception as e:
                            if e.__class__.__name__ == 'InvalidTorrentError':
                                # 正常操作，基本上也是删了
                                logger.error(f"{e.__module__}.{e.__class__.__name__}: "
                                             f"Torrent_id {info[i]['_id']} not in session")
                            else:
                                logger.exception(e)
                        self.free_space += info[i]['done']
                        logger.warning(f"{state} {info[i]['state'].lower()} torrent {info[i]['_id']}, "
                                       f"name | {info[i]['name']}. ")
                        if state == 'Successfully deleted':
                            logger.info(f"{info[i]['done'] / 1024 ** 3:.3f} GiB space released. "
                                        f"Free space {self.free_space / 1024 ** 3:.3f} GiB.")
                        sleep(info[i]['done'] / 1024 ** 3 / 10)
                        del indicator[i]
                        del info[i]
            except Exception as e:
                logger.exception(e)
            finally:
                sleep(INTERVAL)

    @staticmethod
    def torrent_filter(state):
        return lambda tup: tup[1]['label'] not in EXCLUDE_LABELS and tup[1]['state'] == state

    def weight(self):
        total_peer_weight = 0
        total_time_weight = 0
        total_peers = 0
        num = 0
        indicator = []
        info = []
        e_m = 0.0
        av_ur = sum(self.sur) / len(self.sur)
        if av_ur == 0:
            av_ur = 1048576

        for _id, data in filter(self.torrent_filter('Seeding'), self.torrent_status.items()):
            total_peers += data['total_peers']
            num += 1

        av_peer_num = total_peers / num if num > 0 else 0

        for _id, data in filter(self.torrent_filter('Seeding'), self.torrent_status.items()):
            data['peer_weight'] = (data['total_peers'] * (1 - KS) + av_peer_num * KS) / (
                data['total_seeds'] if data['total_seeds'] > 0 else 1) * data['total_size']
            total_peer_weight += data['peer_weight']
            k_time = data['seeding_time'] / 3600
            k_size = data['total_size'] / (S0 * 1024 ** 3)
            data['time_weight'] = pow(1 + pow((k_time / k_size), 2), -0.5)
            total_time_weight += data['time_weight']

        if total_time_weight > 0:
            for _id, data in filter(self.torrent_filter('Seeding'), self.torrent_status.items()):
                ur_e = data['upload_payload_rate'] * 0.4
                ur_tm_p = av_ur * data['time_weight'] / total_time_weight
                if total_peer_weight > 0:
                    ur_pr_p = av_ur * data['peer_weight'] / total_peer_weight
                    ur_e += ur_pr_p * 0.4 + ur_tm_p * 0.2
                else:
                    ur_e += ur_tm_p * 0.6
                sz_e = data['total_done'] / 1024 ** 3
                e = ur_e * pow(sz_e, -0.8)
                indicator.append(e)
                info.append({'_id': _id, 'name': data['name'], 'done': data['total_done'], 'state': data['state']})
            if MODE == 1 or av_ur == 0:
                e_m = max(indicator) + 1

        for _id, data in filter(self.torrent_filter('Downloading'), self.torrent_status.items()):
            if data['active_time'] < MIN_DOWN_TIME:
                continue
            au = data['total_uploaded'] / (data['active_time'] + 1)
            ur = data['upload_payload_rate']
            ur_e = au * 0.5 + ur * 0.5
            sz_a = data['download_payload_rate'] * INTERVAL / 2
            if sz_a < data['total_size'] - data['total_done']:
                sz_e = data['total_size'] / 1024 ** 3
            else:
                sz_e = (sz_a + data['total_done']) / 1024 ** 3
            if sz_e == 0:
                continue
            e = ur_e * pow(sz_e, -0.8) + e_m
            indicator.append(e)
            info.append({'_id': _id, 'name': data['name'], 'done': data['total_done'], 'state': data['state']})

        return indicator, info

log_path = LOG_PATH or f'{os.path.splitext(__file__)[0]}.log'
logger.add(level='DEBUG', sink=log_path, encoding='utf-8', rotation="5 MB")

AutoDel(Deluge()).run()
```

你需要在deluge种下载label插件，给你需要自动删除的分类打上标签，创建计划任务，运行此脚本

```
python3 xx.py
```

# 常见黑话

```
art: auto remove torrents，一种自动删种工具。

auto_feed: 一种油猴脚本，可以用于一键转种。此类工具还有easy_upload等。

ban: 指禁用账号。

cf: cloudflare，多数站点套了cf，即由cf提供CDN服务。

docker: Docker容器与虚拟机类似，但二者在原理上不同。容器是将操作系统层虚拟化，虚拟机则是虚拟化硬件，因此容器更具有便携性、高效地利用服务器

emby: 和jellyfin、flex类似，一种本地影音工具，具有串流、海报墙等功能。

flexget: 一种增强型rss获取工具。

free: pt站点中只记上传量，不记下载量的一种优惠。同理2xfree指上传量记2倍，不计下载量;50%指上传量记1倍，下载量按50%计算。

H&R: hit & run，下完就跑，为避免这种行为，有些站会限制下载到x%后，必须在y天内做种时间达到z小时，或者分享率达到1.0。H&R不通过达到一定次数后，将会被禁用账号。

hosts: 当用户在浏览器中输入一个需要登录的网址时，系统会首先自动从Hosts文件中寻找对应的IP地址，一旦找到，系统会立即打开对应网页，如果没有找到，则系统会再将网址提交DNS域名解析服务器进行IP地址的解析。一般通过修改hosts来解决站点上不去、tracker连不上的问题。

hz: hetzner，一种盒子提供商。

io: 一般指硬盘读写能力，当io跟不上上传/下载速度时会引起卡io。

IYUU Plus: 一种工具，通常用于辅种、种子转移。

kiwi浏览器: 安卓手机的一个浏览器，可在手机上使用PTPP等Chrome桌面扩展。Yandex、猴狐浏览器等浏览器也能实现同样的效果。

nas: 本地存储工具，家庭化服务器，可实现多种功能。

Nastool: 一种工具，通常用于rss刷流、刮削等。

passkey: 种子的密钥，用于识别不同用户，千万不可泄露。

PT: private tracker，一种私密的种子追踪器，通常不对外开放，通过邀请进站。

PT_Gen: 用于一键获取并生成PT站常见的豆瓣信息格式。

PTPP: PT助手Plus，一种浏览器扩展，吧里常见的数据图就是用该插件生成。可在Edge浏览器扩展商店找到。

qb: qBittorrent，一种BT客户端，通常用于刷流。

rss: 定时自动获取种子，可用于追剧、刷流等。

tr: transmission，一种BT客户端，由于资源占用小一般用于保种。

tracker: 用于从服务器获取连接同一种子的其他用户，以及向服务器汇报数据。

uid: 你的数字ID。点进你的个人主页，网址最后面的数字即为你的uid。

UPnP: 自动设置端口转发。如果UPnP使能，不用再手动设置端口转发。

ut: utorrent，一种远古的BT客户端，因Windows上的2.0.4版本十分轻巧，依然有不少人在使用。

VPS: 虚拟服务器，相当于把一台计算机分成多个小机，会受到同一母机上的邻居影响。

八桂: 即吧规。

八级求邀: 指百度PT吧达到8级才能开贴求邀。

绑定: 帮忙顶贴的意思。

保号: 账号不会因为长时间不登录而被禁用。通常在达到某个等级后可获得该权益。

保种: 同做种，指下载完成后给其他人上传。种子完成后自动进入做种状态。

备案: 指在站点登记盒子、多IP、同IP多号等的行为。

比特彗星: 一种BT客户端，支持和不支持该客户端的站点五五开。

毕业: 指站点达到最高等级。也有些人用来指达到保号等级。

拆包: 只下载大包中的一部分文件。

超速: 网站设置了最大上传速度，超过该速度即超速，可能的后果有: 超速部分的上传量不计、警告甚至禁用账号。

船票: 岛的邀请。

大包: 体积很大的种子，通常包含多种资源。

大佬: 吧友之间互相的称呼。

德国战车: 因大多数盒子ip属地为德国而得名。

电报: 也叫tg，全称为telegram，是俄国开发的一种即时通讯工具。

电子书战士: 做种很多电子书，换取魔力数量加成。

动态IP: IP会不定期变化，家宽多是动态lP。

端口转发/端口映射: 开放某个端口使外网能访问到。

独服: 有时也叫杜甫，指独立服务器，相当于一台云上的独立计算机，不会受邻居影响。48.独占/禁转: 指该资源为源站独家，不允许转载到其他站。

发种: 把本地文件制成种子，或把其他站种子发布出来称为发种。多数站点发种人可获得双倍上传量，不受盒子规则限制，相应地也有最低做种时间限制。

辅种: 同样的一个种子会被多站转载，通过辅种可以用一份文件在多个站进行上传。通常用iyuu自动辅种。

官窑: 官方邀请，在站点论坛邀请区可见。52.官种: pt站点官方小组发布的种子。

刮削: 也叫搜刮，指从tmdb等网站获取片名、海报等元数据，在emby等软件中呈现海报墙。

公网IP: wan口获取到的IP与网站显示的IP一致即公网IP，可有效提高连接性。

工作组: 为站点工作的成员。

光猫桥接: 光猫只承担光电转化作用，由路由器拨号。

黑群晖: 在非群辉nas上使用群辉系统。

黑种: 下载量按100%计算的种子。

盒子: 即Seedbox，使用服务器做种、刷流。因为国外的服务器带宽很大，通常1Gbps起步，所以很多人用盒子来快速获取上传量，也有少数人用来保种。

红种、黄种: 连接不上tracker或连接tracker困难，需要具体情况具体分析。

黄星: 站点对捐赠用户的一种奖励。通常享受双倍时魔和永久保号。

换邀: 交换邀请，同交易一样是各站严厉打击的行为，发现即ban。

架构: 内站多为nexusPHP架构，也有少数站点使用gz等其他架构。

校验: 检查你的本地文件是否与种子相符。跳过校验称为跳检。

机票: 空的邀请。

捐V: 给站点捐赠金额，站点送VIP作为回馈。

开邀: 站点开放普通用户的邀请权限。

开注: 站点开放注册。

砍树: 通过开注、官窑、捐入等方式进站的人叫树根，该人发展的下家、下家的下家等叫树枝，其中一人违规而ban掉上面提到的所有人，称为砍树。

连坐: 一人违规，上家或下家受到牵连称为连坐。

流控: 流量控制，有些站短时间流量过大会被冻结下载权限、警告甚至禁用账号，故需要流控。通常发生在短时间内大量下载种子的情景。

馒头: 有时也叫面食，一个站点，其他站点的外号同理。蒸馒头即攒魔力发送馒头邀请。

魔力: 有时也叫茉莉，PT站常见的一种保种奖励，通常可以用来换上传量、购买勋章、发送邀请等。一般来说，发布时间久(有些站是做种时间久)、做种人数少、体积大的种子得到的魔力更多。有些站也称为鲨币、憨豆等。

年中考核/年终考核: 一种古老的考核方式，现在内站已基本被消灭。

平均做种时间: 平均每个种子的做种时间。可以通过辅种提高该值。

契约: 发邀时的一种约定，常见的形式有x个月内保种yT、x个月内时魔达到z等。

权贵: 指站点的管理人员和贵宾。

上家/下家: 你的邀请人是你的上家，你邀请的人是你的下家。

删号: 账号被站点删除，无法恢复。

十二大: 民间对具有影响力的十二个站点的总称。有时也作九大、十大、十一大。

时魔: 有时也叫石墨，指每小时获得的魔力。

射魔: 在魔力使用页面赠送魔力。有些站关闭了该功能，需要发种才能在种子页面射魔。

刷流: 刷上传量。

吴昊: 没有账号的意思。

限盒: 对盒子用户进行限制。常见的措施有不享受种子优惠（即黑种)、72小时内只记3倍上传量等。

限转: 在发布后一段时间内限时禁止转载。87.新人考核: 网站对新入站会员的考试，未通过将被禁用账号。常见的指标有上传量、下载量、魔力、做种体积、平均做种时间等。

药: 邀请的意思，有时也叫。求药即求邀，发药即发邀。

应求: 有人在站内发布了求种，找到求种人所需资源并上传到站内的行为称为应求，通常可以得到魔力奖励。

一贴多求: 指在一个帖子里求多个站，包括多选一。

永V: 永久VIP。

预注册ID: 有些站发邀需要填写用户名，发邀时填写的这个用户名即为预注册ID。

站免: 指全站free。官免即官种free。

种子转移: 把qb里的种子转移到tr，或反过来。

转种: 发种的一种，把从一个站转到另一个站，与iyuu的种子转移是不同的概念。

做种积分: 一般指不含加成的魔力。大多数站的做种积分作为升级条件之一，不允许消费。

做种体积: 处于做种状态的种子的大小，可多站叠加。

3o/4o/5o: 一种最便宜的独立服务器，3ol4o/5o指的是价格为3/4/5欧元，其实都是一种配置。

9kg: 不说了，自己领会。
```

```

以上是一些最基础入门的PT刷流和优化方法，未完待更。
```
