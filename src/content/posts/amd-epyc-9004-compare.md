---
tags: [server-guide]
title: "AMD EPYC 9004 系列常见商家大对比"
published: 2024-05-30
---

来个赛博对比。近期上let上有关Root Server的讨论居高不下，具体可见[此贴](https://lowendtalk.com/discussion/195101/avoid-avoro-eu-php-friends-and-dataforest-oversold-root-servers-and-fraudsters/p1)。高性能大鸡的商家遇到了集中扫货，卖独服也不要，只要长期占用的低配置小鸡。根据帖中的描述来看，其实并没有所谓的Root Server（包括Netcup）。都是共享核心，允许别人在你的资源未充分使用前进行占用。

下面来点我手里有的9004 系列的VPS的近况吧。

## Netcup G11

```shell
Basic System Information:
---------------------------------
Uptime     : 15 days, 6 hours, 0 minutes
Processor  : AMD EPYC 9634 84-Core Processor
CPU cores  : 4 @ 2246.624 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 7.8 GiB
Swap       : 0.0 KiB
Disk       : 251.8 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-21-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : netcup GmbH
ASN        : AS197540 netcup GmbH
Host       : De Netcup KVM VIE
Location   : Vienna, Vienna (9)
Country    : Austria

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 23.66 MB/s    (5.9k) | 157.75 MB/s   (2.4k)
Write      | 23.66 MB/s    (5.9k) | 158.58 MB/s   (2.4k)
Total      | 47.32 MB/s   (11.8k) | 316.33 MB/s   (4.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 184.69 MB/s    (360) | 249.73 MB/s    (243)
Write      | 194.50 MB/s    (379) | 266.36 MB/s    (260)
Total      | 379.19 MB/s    (739) | 516.09 MB/s    (503)

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 518                           
Multi Core      | 1105                          
Full Test       | https://browser.geekbench.com/v5/cpu/22531769

YABS completed in 5 min 24 sec
```

## NaranjaTech 黑五 年付 65欧

```shell

Basic System Information:
---------------------------------
Uptime     : 29 days, 23 hours, 0 minutes
Processor  : AMD EPYC 9554P 64-Core Processor
CPU cores  : 4 @ 3099.998 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 7.8 GiB
Swap       : 0.0 KiB
Disk       : 196.7 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.6.29-x64v4-xanmod1
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : NextGenWebs, S.L.
ASN        : AS41608 NextGenWebs, S.L.
Host       : NextGenWebs, S.L.
Location   : Amsterdam, North Holland (NH)
Country    : The Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 242.15 MB/s  (60.5k) | 3.53 GB/s    (55.2k)
Write      | 242.79 MB/s  (60.6k) | 3.55 GB/s    (55.5k)
Total      | 484.94 MB/s (121.2k) | 7.09 GB/s   (110.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.74 GB/s     (5.3k) | 3.33 GB/s     (3.2k)
Write      | 2.89 GB/s     (5.6k) | 3.56 GB/s     (3.4k)
Total      | 5.63 GB/s    (11.0k) | 6.89 GB/s     (6.7k)

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1185                          
Multi Core      | 3483                          
Full Test       | https://browser.geekbench.com/v5/cpu/22531782

YABS completed in 2 min 35 sec
```

## AdvinServers-9554 黑五 德国 年付 24欧

```shell
Basic System Information:
---------------------------------
Uptime     : 39 days, 2 hours, 6 minutes
Processor  : AMD EPYC 9554 64-Core Processor
CPU cores  : 2 @ 3099.996 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 36.4 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-13-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Advin Services LLC
ASN        : AS206216 Advin Services LLC
Host       : Advin Services LLC
Location   : Amsterdam, North Holland (NH)
Country    : The Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 155.05 MB/s  (38.7k) | 1.18 GB/s    (18.4k)
Write      | 155.46 MB/s  (38.8k) | 1.18 GB/s    (18.5k)
Total      | 310.52 MB/s  (77.6k) | 2.36 GB/s    (37.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.48 GB/s     (4.8k) | 2.48 GB/s     (2.4k)
Write      | 2.62 GB/s     (5.1k) | 2.64 GB/s     (2.5k)
Total      | 5.10 GB/s     (9.9k) | 5.13 GB/s     (5.0k)

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1028                          
Multi Core      | 1817                          
Full Test       | https://browser.geekbench.com/v5/cpu/22531787

YABS completed in 3 min 20 sec
```

## Entrywan 月付3刀

```shell
Basic System Information:
---------------------------------
Uptime     : 13 days, 21 hours, 17 minutes
Processor  : AMD EPYC 9124 16-Core Processor
CPU cores  : 1 @ 3000.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 975.0 MiB
Disk       : 8.8 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-21-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Entrywan LLC
ASN        : AS14219 ENTRYWAN LLC
Host       : Cogent communications - IPENG
Location   : Franklin, Tennessee (TN)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 184.36 MB/s  (46.0k) | 2.64 GB/s    (41.3k)
Write      | 184.85 MB/s  (46.2k) | 2.66 GB/s    (41.5k)
Total      | 369.21 MB/s  (92.3k) | 5.30 GB/s    (82.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.79 GB/s     (9.3k) | 5.11 GB/s     (4.9k)
Write      | 5.05 GB/s     (9.8k) | 5.45 GB/s     (5.3k)
Total      | 9.84 GB/s    (19.2k) | 10.56 GB/s   (10.3k)

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1507                          
Multi Core      | 1448                          
Full Test       | https://browser.geekbench.com/v5/cpu/22531793

YABS completed in 2 min 15 sec
```

## [ShockHosting](https://catcat.blog/shockhosting-sg-amd-9354p.html) 月付19.99刀

```shell
Basic System Information:
---------------------------------
Uptime     : 4 days, 6 hours, 8 minutes
Processor  : AMD EPYC 9354P 32-Core Processor
CPU cores  : 4 @ 3250.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 7.8 GiB
Swap       : 512.0 MiB
Disk       : 117.6 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Shock Hosting LLC
ASN        : AS395092 Shock Hosting LLC
Host       : Shock Hosting LLC
Location   : Singapore, North West (03)
Country    : Singapore

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 446.75 MB/s (111.6k) | 5.89 GB/s    (92.0k)
Write      | 447.93 MB/s (111.9k) | 5.92 GB/s    (92.5k)
Total      | 894.68 MB/s (223.6k) | 11.81 GB/s  (184.6k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 16.74 GB/s   (32.7k) | 31.22 GB/s   (30.4k)
Write      | 17.63 GB/s   (34.4k) | 33.30 GB/s   (32.5k)
Total      | 34.37 GB/s   (67.1k) | 64.52 GB/s   (63.0k)

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1561                          
Multi Core      | 6013                          
Full Test       | https://browser.geekbench.com/v5/cpu/22531838

YABS completed in 2 min 7 sec
```

## Hybula 季付27欧

```shell
Basic System Information:
---------------------------------
Uptime     : 38 days, 9 hours, 56 minutes
Processor  : AMD EPYC 9554 64-Core Processor
CPU cores  : 4 @ 3099.998 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 49.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online
 
IPv6 Network Information:
---------------------------------
ISP        : Hybula B.V.
ASN        : AS35133 Hybula B.V.
Host       : Hybula B.V
Location   : Amsterdam, North Holland (NH)
Country    : Netherlands
 
fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 368.47 MB/s  (92.1k) | 4.94 GB/s    (77.2k)
Write      | 369.44 MB/s  (92.3k) | 4.97 GB/s    (77.6k)
Total      | 737.91 MB/s (184.4k) | 9.91 GB/s   (154.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 6.40 GB/s    (12.5k) | 6.18 GB/s     (6.0k)
Write      | 6.74 GB/s    (13.1k) | 6.59 GB/s     (6.4k)
Total      | 13.14 GB/s   (25.6k) | 12.78 GB/s   (12.4k)
 
Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1566                        
Multi Core      | 6237                          
```

LiteServer 的9754 因为4k读写限制的原因已经丢弃

就结果而言，一分钱一分货。