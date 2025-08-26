---
title: "Hostbrr 德国周年庆6T存储优惠 测评"
published: 2024-05-03
categories: 
  - "strong-server"
  - "vps"
---

HostBrr目前已经开业一周年，作为Hetzner的二道贩子目前在LowEndTalk口碑非常不错。他的存储产品，大内存产品性价比很棒。虽然最近一个月频频遭到网络攻击，但Hostbrr给人的态度感觉很不错(用他们家产品一年了)。又是迁移机房，升级ddos保护，各种补偿升级CPU。官方在4月22号开启了官方闪购和大内存促销，有幸半夜三点抢到了一台(仅限8台，无补货可能)。

## 官网

地址：[https://hostbrr.com/](https://slink.catcat.blog/HostBrr)（含有AFF）

## 套餐

FLASH DAY 1  
2 vCore Intel Xeon W-2145  
4 GB DDR4 ECC RAM  
60 GB NVMe Gen4 Storage  
6000 GB HDD Raid-6 storage  
20000 GB Bandwidth @ 1 Gbps  
1 IPv4 & IPv6/64  
Hosted in Falkenstein, Germany  
€6/month  
€60/year

官网地址：[HostBrr](https://urls.catcat.blog/hostbrr)(含AFF)

[促销帖子](https://lowendtalk.com/discussion/194296/hostbrr-1-year-celebration-deals-epic-epyc-deals-storage-flash-deals/p1)（目前已经全部产品缺货）

## 测评

### Yabs

```

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 38 minutes
Processor  : Intel(R) Xeon(R) W-2145 CPU @ 3.70GHz
CPU cores  : 2 @ 3695.998 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 1024.0 MiB
Disk       : 5.9 TiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Hetzner Online GmbH
ASN        : AS24940 Hetzner Online GmbH
Location   : Falkenstein, Saxony (SN)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 90.53 MB/s   (22.6k) | 1.11 GB/s    (17.3k)
Write      | 90.77 MB/s   (22.6k) | 1.11 GB/s    (17.4k)
Total      | 181.31 MB/s  (45.3k) | 2.23 GB/s    (34.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.11 GB/s     (4.1k) | 2.09 GB/s     (2.0k)
Write      | 2.22 GB/s     (4.3k) | 2.23 GB/s     (2.1k)
Total      | 4.33 GB/s     (8.4k) | 4.33 GB/s     (4.2k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 927                           
Multi Core      | 1562                          
Full Test       | https://browser.geekbench.com/v6/cpu/5949693

YABS completed in 10 min 37 sec
```

### HDD 测试

```
fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vdb1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 24.33 MB/s    (6.0k) | 49.87 MB/s     (779)
Write      | 24.35 MB/s    (6.0k) | 50.16 MB/s     (783)
Total      | 48.68 MB/s   (12.1k) | 100.04 MB/s   (1.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 140.37 MB/s    (274) | 256.87 MB/s    (250)
Write      | 147.83 MB/s    (288) | 273.98 MB/s    (267)
Total      | 288.20 MB/s    (562) | 530.85 MB/s    (517)
```

至于其他就不测了，没什么有意。Hetzner已经是我们的老朋友了，哈哈哈。
