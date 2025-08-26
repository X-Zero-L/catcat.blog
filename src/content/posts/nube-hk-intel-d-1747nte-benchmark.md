---
tags: [hk-server]
title: "Nube 香港 Intel D-1747NTE 测试"
published: 2025-08-05
---

**最近牛老板上线了一批特价香港杜甫，长租最低68刀每月。机器硬件都是全新的，通电不足100h，固态均属于刚开封的状态。网络没啥好说的，国际网络，想买来跑国内的几乎不用想了，除非去加钱。特别要注意的是采用95计费，这点跑国际带宽的需要额外注意。机器没有硬raid，做的是软raid。**

## 配置

- **CPU ： Intel(R) Xeon(R) D-1747NTE CPU @ 2.50GHz**

- **MEM ：4 x 16 GB DDR4-2666MT/s** **Micron** **MTA36ASF4G72PZ-2G6E1**

- **DISK ：2 \* 1.92 T Micron\_7450\_MTFDKBG1T9TFR**

- **Network : 2 \* 10G Intel Corporation Ethernet Connection E823-L for SFP**

- **MOTHERBOARD : Wingtech F60002\_10\_31**

- **BIOS: American Megatrends International, LLC.**

- **PRICE：$68 长期租用**

- **ORDER：Telegram [@BeefyAsian](http://beefyasian/)**

- **IP : 赠送 IP4/32 + IP6/64 + 2x 10G 上连互联网端口，不限速，不计费。合理利用，不可长时间跑高**

## 销售策略

**按月散租销售**

- **客户按月散租，无须支付履约保证金。**

- **客户按月预付月租。**

- **默认交付国际优化轻量版线路。端口限速 200 Mbps 。**

- **每个日历月内，服务器 95 带宽超过 100 Mbps 部分需按 0.28 USD/Mbps 补差价。**

- **客户需支付一次性交付费用 68 USD 。**

- **香港杜甫按月散租月租费 88 USD 。**

**长期租用销售**

- **客户承诺连续租用 18 个月。客户支付 3 个月月租作为履约保证金。**

- **客户按月预付月租。**

- **默认交付国际优化轻量版线路。端口限速 2x 10 Gbps 。**

- **每个日历月内，服务器 95 带宽超过 100 Mbps 部分需按 0.28 USD/Mbps 补差价。**

- **免除一次性交付费用 68 USD 。**

- **香港杜甫 18 个月长租月租费 68 USD 。**

- **长租一切都可以联系升级。**

- **客户不支付超带宽补差价费用怎么办？按月散租客户：终止服务。长租客户：按拒付金额双倍扣减履约保证金。当履约保证金金额小于一个月月租时，认为客户违约，终止服务。**

## 测评

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 15 hours, 54 minutes
Processor  : Intel(R) Xeon(R) D-1747NTE CPU @ 2.50GHz
CPU cores  : 20 @ 800.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 62.4 GiB
Swap       : 4.0 GiB
Disk       : 3.5 TiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.8.0-71-generic
VM Type    : WTE310T6_F60002AC1   719901225941        
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Eons Data Communications Limited
ASN        : AS138997 Eons Data Communications Limited
Host       : Eons Data Communications Limited
Location   : Ha Kwai Chung, Kwai Tsing (NKT)
Country    : Hong Kong

fio Disk Speed Tests (Mixed R/W 50/50) (Partition -):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 542.72 MB/s (135.6k) | 1.31 GB/s    (20.5k)
Write      | 544.16 MB/s (136.0k) | 1.32 GB/s    (20.7k)
Total      | 1.08 GB/s   (271.7k) | 2.64 GB/s    (41.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.50 GB/s     (2.9k) | 1.53 GB/s     (1.4k)
Write      | 1.58 GB/s     (3.0k) | 1.63 GB/s     (1.5k)
Total      | 3.09 GB/s     (6.0k) | 3.17 GB/s     (3.0k)

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1075                          
Multi Core      | 8739                          
Full Test       | https://browser.geekbench.com/v5/cpu/23708944
```

### Bench

```shell
------------------------------------------------------------------------
Benchmark Run: Tue Aug 05 2025 08:25:08 - 08:53:13
20 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       44236503.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     6787.6 MWIPS (10.1 s, 7 samples)
Execl Throughput                               3872.9 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1173438.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          321874.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2990892.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1956144.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 152674.9 lps   (10.0 s, 7 samples)
Process Creation                               8571.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  12673.0 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   8603.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        1529717.3 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   44236503.5   3790.6
Double-Precision Whetstone                       55.0       6787.6   1234.1
Execl Throughput                                 43.0       3872.9    900.7
File Copy 1024 bufsize 2000 maxblocks          3960.0    1173438.2   2963.2
File Copy 256 bufsize 500 maxblocks            1655.0     321874.0   1944.9
File Copy 4096 bufsize 8000 maxblocks          5800.0    2990892.1   5156.7
Pipe Throughput                               12440.0    1956144.8   1572.5
Pipe-based Context Switching                   4000.0     152674.9    381.7
Process Creation                                126.0       8571.2    680.3
Shell Scripts (1 concurrent)                     42.4      12673.0   2988.9
Shell Scripts (8 concurrent)                      6.0       8603.2  14338.6
System Call Overhead                          15000.0    1529717.3   1019.8
                                                                   ========
System Benchmarks Index Score                                        1901.5

------------------------------------------------------------------------
Benchmark Run: Tue Aug 05 2025 08:53:13 - 09:21:18
20 CPUs in system; running 20 parallel copies of tests

Dhrystone 2 using register variables      596659274.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   122851.3 MWIPS (10.0 s, 7 samples)
Execl Throughput                              35692.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      10349725.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         3285950.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      13970693.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                            21676350.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                2303688.1 lps   (10.0 s, 7 samples)
Process Creation                              80159.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  92669.2 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  12127.6 lpm   (60.0 s, 2 samples)
System Call Overhead                       20120782.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  596659274.7  51127.6
Double-Precision Whetstone                       55.0     122851.3  22336.6
Execl Throughput                                 43.0      35692.1   8300.5
File Copy 1024 bufsize 2000 maxblocks          3960.0   10349725.5  26135.7
File Copy 256 bufsize 500 maxblocks            1655.0    3285950.9  19854.7
File Copy 4096 bufsize 8000 maxblocks          5800.0   13970693.9  24087.4
Pipe Throughput                               12440.0   21676350.3  17424.7
Pipe-based Context Switching                   4000.0    2303688.1   5759.2
Process Creation                                126.0      80159.2   6361.8
Shell Scripts (1 concurrent)                     42.4      92669.2  21855.9
Shell Scripts (8 concurrent)                      6.0      12127.6  20212.7
System Call Overhead                          15000.0   20120782.9  13413.9
                                                                   ========
System Benchmarks Index Score                                       16632.6
```

### IP质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-19.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-19.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-19.jpg" alt="image" loading="lazy">
</picture>

### 网络质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-20.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-20.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-20.jpg" alt="image" loading="lazy">
</picture>

### 回程测试

#### 北京

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-21.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-21.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-21.jpg" alt="image" loading="lazy">
</picture>

#### 上海

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-22.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-22.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-22.jpg" alt="image" loading="lazy">
</picture>

#### 广东

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-23.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-23.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-23.jpg" alt="image" loading="lazy">
</picture>

### NWS

```shell
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) D-1747NTE CPU @ 2.50GHz
 CPU Cores          : 20 @ 3000.000 MHz
 CPU Cache          : 15360 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 1.7 TB (7.1 GB Used)
 Total RAM          : 62.4 GB (2.3 GB Used)
 Total Swap         : 4.0 GB (0 Used)
 System uptime      : 0 days, 16 hour 19 min
 Load average       : 1.01, 0.78, 4.57
 OS                 : Ubuntu 24.04.2 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.8.0-71-generic
 Virtualization     : NONE
 TCP Control        : bbr
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv6
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : Eons Data Communications Limited
 ASN                : AS138997 Eons Data Communications Limited
 Host               : Eons Data Communications Limited
 Location           : Ha Kwai Chung, Kwai Tsing-NKT, Hong Kong
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Eons Data Communications 

 Nearest          0.41 ms     0.0%    8530.22 Mbps   9384.27 Mbps   SmarTone - Hong Kong 

 Bangalore, IN    194.60 ms   0.0%    3917.44 Mbps   445.74 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      65.64 ms    0.0%    7022.20 Mbps   1346.57 Mbps   Jio - Chennai 
 Mumbai, IN       91.92 ms    0.0%    7467.98 Mbps   3922.49 Mbps   Melbicom - Mumbai 

 Seattle, US      170.70 ms   N/A     3247.36 Mbps   526.63 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  156.62 ms   0.0%    5197.88 Mbps   594.74 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       178.86 ms   0.0%    5855.39 Mbps   2053.54 Mbps   Hivelocity - Dallas, TX 
 Miami, US        226.11 ms   0.0%    1272.42 Mbps   1492.10 Mbps   Telxius - Miami, FL 
 New York, US     240.41 ms   0.0%    7828.26 Mbps   2057.27 Mbps   GSL Networks - New York, NY 
 Toronto, CA      224.88 ms   0.0%    1320.00 Mbps   420.23 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  196.99 ms   N/A     4661.76 Mbps   487.85 Mbps    INFINITUM - Ciudad de México 

 London, UK       194.93 ms   0.0%    3591.76 Mbps   2256.01 Mbps   VeloxServ Communications - London 
 Amsterdam, NL    178.84 ms   0.0%    18.11 Mbps     774.40 Mbps    31173 Services AB - Amsterdam 
 Paris, FR        238.38 ms   N/A     8441.46 Mbps   550.54 Mbps    Axione - Paris 
 Frankfurt, DE    201.73 ms   0.0%    3794.00 Mbps   442.79 Mbps    Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       206.54 ms   0.0%    4691.96 Mbps   2446.84 Mbps   Play - Warszawa 
 Bucharest, RO    205.77 ms   0.0%    9416.23 Mbps   1057.48 Mbps   Vodafone Romania Mobile - Bucharest - Bucharest 
```