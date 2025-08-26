---
tags: [strong-server]
title: "Hostbrr 芬兰周年庆6T存储优惠 测评"
published: 2024-05-14
---

前几天周年庆又抢到一台闪购6T,美滋滋。这次是芬兰，EPYC的cpu，和之前销售的芬兰存储不一样了。新母鸡是Hetzner 前几天推出的SX295。全新硬盘，很爽。

美滋滋哇哈哈

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/image-2.jpg" alt="" loading="lazy">
</picture>

## 官网

地址：[https://hostbrr.com/](https://slink.catcat.blog/HostBrr)（含有AFF）

## 套餐

3 vCore AMD EPYC 7502P  
6 GB DDR4 ECC RAM   
60 GB NVMe Gen4 Storage  
6000 GB HDD Raid-6 storage  
15000 GB Bandwidth @ 1 Gbps  
1 IPv4 & IPv6/64   
Hosted in Helsinki, Finland

€6/month or €60/year

## 测评

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 4 days, 4 hours, 37 minutes
Processor  : AMD EPYC 7502P 32-Core Processor
CPU cores  : 3 @ 2495.298 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 5.8 GiB
Swap       : 1024.0 MiB
Disk       : 59.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Hetzner
ASN        : AS24940 Hetzner Online GmbH
Location   : Nuremberg, Bavaria (BY)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 259.04 MB/s  (64.7k) | 1.56 GB/s    (24.4k)
Write      | 259.72 MB/s  (64.9k) | 1.57 GB/s    (24.6k)
Total      | 518.77 MB/s (129.6k) | 3.14 GB/s    (49.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.89 GB/s     (3.7k) | 1.91 GB/s     (1.8k)
Write      | 1.99 GB/s     (3.9k) | 2.04 GB/s     (1.9k)
Total      | 3.89 GB/s     (7.6k) | 3.96 GB/s     (3.8k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 914 Mbits/sec   | 645 Mbits/sec   | 36.3 ms        
Eranium         | Amsterdam, NL (100G)      | 923 Mbits/sec   | 894 Mbits/sec   | -- 
Telia           | Helsinki, FI (10G)        | busy            | busy            | 1.10 ms        
Uztelecom       | Tashkent, UZ (10G)        | 872 Mbits/sec   | 538 Mbits/sec   | 66.8 ms        
Leaseweb        | Singapore, SG (10G)       | 367 Mbits/sec   | 415 Mbits/sec   | 306 ms         
Clouvider       | Los Angeles, CA, US (10G) | 726 Mbits/sec   | 137 Mbits/sec   | 151 ms         
Leaseweb        | NYC, NY, US (10G)         | 737 Mbits/sec   | 519 Mbits/sec   | 92.9 ms        
Edgoo           | Sao Paulo, BR (1G)        | 756 Mbits/sec   | 99.4 Mbits/sec  | 170 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 837 Mbits/sec   | 852 Mbits/sec   | 36.2 ms        
Eranium         | Amsterdam, NL (100G)      | busy            | busy            | -- 
Uztelecom       | Tashkent, UZ (10G)        | 889 Mbits/sec   | 588 Mbits/sec   | 65.2 ms        
Leaseweb        | Singapore, SG (10G)       | 405 Mbits/sec   | 331 Mbits/sec   | 306 ms         
Clouvider       | Los Angeles, CA, US (10G) | 759 Mbits/sec   | 296 Mbits/sec   | 151 ms         
Leaseweb        | NYC, NY, US (10G)         | 844 Mbits/sec   | 626 Mbits/sec   | 92.5 ms        
Edgoo           | Sao Paulo, BR (1G)        | 709 Mbits/sec   | 127 Mbits/sec   | 169 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1427                          
Multi Core      | 3694                          
```

### HDD测试

```shell
fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vdb1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 120.56 MB/s  (30.1k) | 424.01 MB/s   (6.6k)
Write      | 120.87 MB/s  (30.2k) | 426.24 MB/s   (6.6k)
Total      | 241.44 MB/s  (60.3k) | 850.25 MB/s  (13.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 389.78 MB/s    (761) | 411.34 MB/s    (401)
Write      | 410.49 MB/s    (801) | 438.73 MB/s    (428)
Total      | 800.28 MB/s   (1.5k) | 850.08 MB/s    (829)
```