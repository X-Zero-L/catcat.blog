---
tags: [eu-server]
title: "OVH Advance-1 德国万兆 AMD 4244P 测评"
published: 2025-06-28
---

**之前一直以来注册都被ovh免税拒绝，昨天听闻优惠，实在按捺不住再次尝试，终于注册****成功****。**

**OVH 是一家总部位于法国的全球领先云计算与基础设施提供商，主要经营独立服务器、云服务器、公有云、VPS、域名、DDoS 防护、对象存储、备份解决方案及企业网络服务，因价格透明、高防护能力和遍布全球的数据中心而广受欢迎。但是默认都含税，且官方明确表示不欢迎中国人，注册免税较为困难。****OVH经常会出一些促销服务器，经常能够抽奖，能开出比默认标配更好的配置，因而热度一直久居不下。**

**最近OVH正好迎来升级，KS系列带宽升级为 500Mbps,SYS系列升级为 1Gbps (有 2Gbps 选项),  
advance****系列新增了一个 3Gbps 带宽的选项, ADV系列3G成为标配且不收安装费（活动才有）且包含25G内网，禁不住优惠下场。周末有时间研究下25G内网玩法。**

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-33-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-33-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-33-scaled.jpg" alt="image" loading="lazy">
</picture>

## 配置

- **CPU ： AMD EPYC 4244P 6-Core Processor**

- **MEM ：2 x 16 GB DDR4-5200MT/s Samsung M323R2GA3PB0-CWMOD**

- **DISK ：2 \* 960GB** **SAMSUNG MZQL2960HCJR-00A07**

- **Network : 2****5****G Port network BCM57502 NetXtreme-E 10Gb/25Gb/40Gb/50Gb Ethernet**

- **Bandwidth** : ****25Gbit/s unmetered**** ↓/ ****3Gbit/s unmetered**** ↑

- **Price: €84.99**

- **BIOS: American Megatrends International, LLC. 20.01.OV04 (02/21/2025)**

- **SLA : 99.95%**

## 测评

### Yabs

```shell
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #
#              Yet-Another-Bench-Script              #
#                     v2025-04-20                    #
# https://github.com/masonr/yet-another-bench-script #
# ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## ## #

Fri Jun 27 17:55:50 UTC 2025

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 38 minutes
Processor  : AMD EPYC 4244P 6-Core Processor
CPU cores  : 12 @ 3000.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 31.0 GiB
Swap       : 1024.0 MiB
Disk       : 878.7 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-37-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : OVH SAS
ASN        : AS16276 OVH SAS
Host       : OVH GmbH
Location   : Limburg an der Lahn, Hesse (HE)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/md3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 904.31 MB/s (226.0k) | 1.49 GB/s    (23.3k)
Write      | 906.69 MB/s (226.6k) | 1.50 GB/s    (23.4k)
Total      | 1.81 GB/s   (452.7k) | 2.99 GB/s    (46.7k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.83 GB/s     (3.5k) | 1.96 GB/s     (1.9k)
Write      | 1.93 GB/s     (3.7k) | 2.09 GB/s     (2.0k)
Total      | 3.76 GB/s     (7.3k) | 4.06 GB/s     (3.9k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 2.86 Gbits/sec  | 5.27 Gbits/sec  | 19.1 ms        
Eranium         | Amsterdam, NL (100G)      | 2.90 Gbits/sec  | 22.9 Gbits/sec  | 10.3 ms        
Uztelecom       | Tashkent, UZ (10G)        | busy            | busy            | -- 
Leaseweb        | Singapore, SG (10G)       | 1.01 Gbits/sec  | 958 Mbits/sec   | -- 
Clouvider       | Los Angeles, CA, US (10G) | 756 Mbits/sec   | 1.21 Gbits/sec  | 153 ms         
Leaseweb        | NYC, NY, US (10G)         | 2.16 Gbits/sec  | 2.20 Gbits/sec  | 86.5 ms        
Edgoo           | Sao Paulo, BR (1G)        | 724 Mbits/sec   | 894 Mbits/sec   | 233 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 2.67 Gbits/sec  | 7.59 Gbits/sec  | 19.1 ms        
Eranium         | Amsterdam, NL (100G)      | 2.84 Gbits/sec  | busy            | 10.4 ms        
Uztelecom       | Tashkent, UZ (10G)        | busy            | busy            | -- 
Leaseweb        | Singapore, SG (10G)       | 961 Mbits/sec   | busy            | 161 ms         
Clouvider       | Los Angeles, CA, US (10G) | 843 Mbits/sec   | 1.15 Gbits/sec  | 153 ms         
Leaseweb        | NYC, NY, US (10G)         | 2.13 Gbits/sec  | busy            | 86.2 ms        
Edgoo           | Sao Paulo, BR (1G)        | 704 Mbits/sec   | 736 Mbits/sec   | 233 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2938                          
Multi Core      | 12549                         
Full Test       | https://browser.geekbench.com/v6/cpu/12624869

YABS completed in 13 min 54 sec
```

### GeekBench5

```shell
系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-37-amd64 x86_64
  Model                         AsrockRack B650D4U3-2Q/BCM
  Motherboard                   ASRockRack B650D4U3-2Q/BCM
  BIOS                          American Megatrends International, LLC. 20.01.OV04

处理器信息
  Name                          AMD EPYC 4244P 6-Core Processor                
  Topology                      1 Processor, 6 Cores, 12 Threads
  Identifier                    AuthenticAMD Family 25 Model 97 Stepping 2
  Base Frequency                3.80 GHz
  L1 Instruction Cache          32.0 KB x 6
  L1 Data Cache                 32.0 KB x 6
  L2 Cache                      1.00 MB x 6
  L3 Cache                      32.0 MB

内存信息
  Size                          31.0 GB

单核测试分数：2082
多核测试分数：11083
详细结果链接：https://browser.geekbench.com/v5/cpu/23638607
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%204244P
```

### 硬件检测

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/38c423b4c3b05ff0864aee3524599738.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/38c423b4c3b05ff0864aee3524599738.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/38c423b4c3b05ff0864aee3524599738.jpg" alt="38c423b4c3b05ff0864aee3524599738" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-28.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-28.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-28.jpg" alt="image" loading="lazy">
</picture>

### UnixBench

```shell
------------------------------------------------------------------------
Benchmark Run: Sat Jun 28 2025 00:45:05 - 01:13:06
12 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       78453858.8 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    12529.7 MWIPS (10.0 s, 7 samples)
Execl Throughput                               4840.7 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1170330.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          299589.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       4180265.7 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1692018.9 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 119232.5 lps   (10.0 s, 7 samples)
Process Creation                               7162.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  13092.8 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  10924.3 lpm   (60.0 s, 2 samples)
System Call Overhead                        1674525.8 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   78453858.8   6722.7
Double-Precision Whetstone                       55.0      12529.7   2278.1
Execl Throughput                                 43.0       4840.7   1125.7
File Copy 1024 bufsize 2000 maxblocks          3960.0    1170330.5   2955.4
File Copy 256 bufsize 500 maxblocks            1655.0     299589.5   1810.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    4180265.7   7207.4
Pipe Throughput                               12440.0    1692018.9   1360.1
Pipe-based Context Switching                   4000.0     119232.5    298.1
Process Creation                                126.0       7162.8    568.5
Shell Scripts (1 concurrent)                     42.4      13092.8   3087.9
Shell Scripts (8 concurrent)                      6.0      10924.3  18207.2
System Call Overhead                          15000.0    1674525.8   1116.4
                                                                   ========
System Benchmarks Index Score                                        2147.4

------------------------------------------------------------------------
Benchmark Run: Sat Jun 28 2025 01:13:06 - 01:41:04
12 CPUs in system; running 12 parallel copies of tests

Dhrystone 2 using register variables      671473265.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   124190.3 MWIPS (10.1 s, 7 samples)
Execl Throughput                              40036.9 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      10192752.6 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         2726994.2 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      16993423.5 KBps  (30.0 s, 2 samples)
Pipe Throughput                            15600552.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                1830609.5 lps   (10.0 s, 7 samples)
Process Creation                             101611.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                 124343.8 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  16740.5 lpm   (60.0 s, 2 samples)
System Call Overhead                       15822963.5 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  671473265.6  57538.4
Double-Precision Whetstone                       55.0     124190.3  22580.1
Execl Throughput                                 43.0      40036.9   9310.9
File Copy 1024 bufsize 2000 maxblocks          3960.0   10192752.6  25739.3
File Copy 256 bufsize 500 maxblocks            1655.0    2726994.2  16477.3
File Copy 4096 bufsize 8000 maxblocks          5800.0   16993423.5  29299.0
Pipe Throughput                               12440.0   15600552.2  12540.6
Pipe-based Context Switching                   4000.0    1830609.5   4576.5
Process Creation                                126.0     101611.7   8064.4
Shell Scripts (1 concurrent)                     42.4     124343.8  29326.4
Shell Scripts (8 concurrent)                      6.0      16740.5  27900.9
System Call Overhead                          15000.0   15822963.5  10548.6
                                                                   ========
System Benchmarks Index Score                                       17042.9
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD EPYC 4244P 6-Core Processor (x86_64)
6 cores @ 3800 MHz  |  31.0 GiB RAM
Number of Processes: 12  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          27295
  Integer Math                     78314 Million Operations/s
  Floating Point Math              43048 Million Operations/s
  Prime Numbers                    160 Million Primes/s
  Sorting                          43449 Thousand Strings/s
  Encryption                       19514 MB/s
  Compression                      300021 KB/s
  CPU Single Threaded              3969 Million Operations/s
  Physics                          2223 Frames/s
  Extended Instructions (SSE)      21042 Million Matrices/s

Memory Mark:                       3434
  Database Operations              7183 Thousand Operations/s
  Memory Read Cached               38717 MB/s
  Memory Read Uncached             35724 MB/s
  Memory Write                     23906 MB/s
  Available RAM                    29517 Megabytes
  Memory Latency                   53 Nanoseconds
  Memory Threaded                  49632 MB/s
--------------------------------------------------------------------------
```

### IP质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-29-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-29-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-29-scaled.jpg" alt="image" loading="lazy">
</picture>

### 网络质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-30-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-30-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-30-scaled.jpg" alt="image" loading="lazy">
</picture>

### SpeedTest

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-32.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-32.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-32.jpg" alt="image" loading="lazy">
</picture>