---
title: "2024 猫猫的黑五订单记录（持续更新ing）"
published: 2024-11-29
categories: 
  - "黑五"
---

今年黑五的气氛相较前几年略显疲软，全球经济的下滑导致越来越少的商家在黑五发布令人心动的促销。

点名批评Hetzner，简直黑五惊吓。美区节点全面涨价且流量从20T爆砍至1T。导致我刚从其他地方迁到Hetzner 美区的K8S节点成本陡然上升。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-29.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-29.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-29.jpg" alt="" loading="lazy">
</picture>

OVH：😆 Netcup：😆

名言：

> 一个账号一个鸡 | One chicken per account  
> 付款只能用批批 | PayPal payments only  
> 超过伍刀别买鸡 | Don't buy if above five dollars  
> 判定停权就争议 | Dispute if account restricted  
> 白嫖半年免费鸡 | free chicken for half year  
> 删号删鸡不扎心 | No worries if account or chicken deleted  
> 不买黄牛溢价鸡 | Don't buy overpriced chicken from scalpers  
> 无脑直冲是傻逼 | Stupid people buy without thinking

\[tip type="danger" title="警告"\]本文非推荐，仅仅是我目前买的\[/tip\]

**目前总消费：** **8欧+24美元+7美元**

## **FameSystems**

德国大鸡，期待挺久了。虽然商家对于流量比较抠搜，总体来说通过cf缓存的话还是够用。之前一直三代米兰促销的时候就想买个试试了，一直忍到了黑五。商家果然推出了两款新型号 AMD EPYC 9654 和 AMD 9900X ，从机器整体来看性价比非常不错，机器也据说是老板全新采购的，机房和bero在同一个。购买时可以选择Linux和Windows，这是两个不同架构，Linux分配KVM，Windows分配HyperV。

\[tip type="danger" title="注意"\]目前只支持余额交易，年付请谨慎\[/tip\]

我购买的配置：

- 6x AMD EPYC 9654 Cores

- 24 GB DDR5 RAM

- 300 GB PCIe 5.0 NVME storage space

- 1 IPv4 address

- /64-IPv6 subnet

- 2 Gbit/s (Shared)

- 3 Backup Slots

- Price: €8.00/month **(€ 80.00/yr)**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-30.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-30.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-30.jpg" alt="" loading="lazy">
</picture>

机器的性能后续再说吧，现在刚开机，大家都在跑Yabs ,没什么意义。

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 19 minutes
Processor  : AMD EPYC 9654 96-Core Processor
CPU cores  : 6 @ 2400.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 23.5 GiB
Swap       : 1024.0 MiB
Disk       : 293.2 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-28-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv4 Network Information:
---------------------------------
ISP        : ROETH \u0026 BECK GbR
ASN        : AS44486 Oliver Horscht is trading as \"SYNLINQ\"
Host       : Rene Roeth trading as ROETH \u0026 BECK GbR
Location   : Gelnhausen, Hesse (HE)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 361.22 MB/s  (90.3k) | 3.73 GB/s    (58.3k)
Write      | 362.17 MB/s  (90.5k) | 3.75 GB/s    (58.6k)
Total      | 723.40 MB/s (180.8k) | 7.48 GB/s   (117.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.92 GB/s     (9.6k) | 7.71 GB/s     (7.5k)
Write      | 5.18 GB/s    (10.1k) | 8.23 GB/s     (8.0k)
Total      | 10.10 GB/s   (19.7k) | 15.94 GB/s   (15.5k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1976                          
Multi Core      | 8489                          
Full Test       | https://browser.geekbench.com/v6/cpu/9136287

YABS completed in 7 min 32 sec
```

## BuyVM

其实这家没什么好说的，就是续费而已。卢森堡用来反代和抗DMCA ，便宜又好用。

**消费 24 美元。**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-31.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-31.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-31.jpg" alt="" loading="lazy">
</picture>

## [HostBrr DirectAdmin Storage Boxes](https://catcat.blog/hostbrr-directadmin-storage-boxes-chevereto.html?swcfpc=1)

这个我觉得性价比也挺高的，7刀一年500G，当个小图床和存储box够用了。但是由于性价比过高，导致目前下单和使用人数太多，机器明显出现了瓶颈问题，估计老板对这个系列正焦头烂额，连今年的黑五都没怎么参与。

**消费** **7** **美元。**
