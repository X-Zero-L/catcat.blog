---
title: "HostDZire 印度 AMD 7K62 测评"
published: 2025-07-21
categories: 
  - "india-server"
  - "vps"
---

**HostDZire 是一家总部位于印度比哈尔邦帕特纳（Patna）的私营主机服务提供商，成立于 2013 年左右。此前一直主营的业务是[Leaseweb](https://en.wikipedia.org/wiki/Leaseweb)的杜甫分销业务。由于去年最近**[Leaseweb](https://en.wikipedia.org/wiki/Leaseweb)**推出了全球廉价的vps计划，因而也开始涉及vps相关。但是此次的印度属于HostDZire自运营的，和[Leaseweb](https://en.wikipedia.org/wiki/Leaseweb)无关，稳定性存疑（目前已经炸过几次了）。**目前其他地区的基础套餐已经被 **[Leaseweb](https://en.wikipedia.org/wiki/Leaseweb)** 下架,目前已恢复订购。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-37.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-37.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-37.jpg" alt="image" loading="lazy">
</picture>

**AMD EPYC 7K62 应该是来自腾讯的星星海，由于去年腾讯孟买的业务全部终止，我猜测应该是印度人这时候回购的(至于能不能维保，目前不知道)。机器目前托管于印度知名的[铁山机房](https://www.nodeseek.com/jump?to=https%3A%2F%2Fwww.ironmountain.com%2Fdata-centers%2Flocations%2Fmumbai-data-center)。机房还是有足够稳定性的，不是印度野鸡机房。此外机器的虚拟化是罕见的VMware，超售情况未知。但是在[LowEndTalk](https://www.nodeseek.com/jump?to=https%3A%2F%2Flowendtalk.com%2Fdiscussion%2Fcomment%2F4463170%23Comment_4463170) 下承认如果超售，性能比我发的yabs低了30%以上，可以要求我们把你们移到不同的节点。我们会照办的。CPU的使用率接受 [60% 的连续 CPU 使用率是可以的。](https://www.nodeseek.com/jump?to=https%3A%2F%2Flowendtalk.com%2Fdiscussion%2Fcomment%2F4462636%23Comment_4462636)**

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-35.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-35.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-35.jpg" alt="image" loading="lazy">
</picture>

## 机器套餐

## 套餐

- **_Provider : HostDZire_**

- **_Processor : AMD EPYC 7K62 48-Core Processor_**

- **_Num of Core : 16_** **_Cores_**

- **_Memory : 32_** **_GB_**

- **_Storage : 24_****_0 GB NVMe_**

- **_Bandwidth : 8TB @ 10 Gbps IN | 10 Gbps OUT ( Shared )_**

- **_Location : IN_**

- **_Price : €27.20 EUR/Annually_**

## 测评

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 8 hours, 52 minutes
Processor  : AMD EPYC 7K62 48-Core Processor
CPU cores  : 16 @ 2595.124 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 31.4 GiB
Swap       : 759.1 MiB
Disk       : 241.0 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 5.4.0-42-generic
VM Type    : VMWARE VIRTUAL PLATFORM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Hostdzire Web Services Private Limited
ASN        : AS150623 HOSTDZIRE WEB SERVICES PRIVATE LIMITED
Host       : Hostdzire Web Services Private Limited
Location   : Mumbai, Maharashtra (MH)
Country    : India

fio Disk Speed Tests (Mixed R/W 50/50) (Partition -):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 221.16 MB/s  (55.2k) | 2.24 GB/s    (35.0k)
Write      | 221.74 MB/s  (55.4k) | 2.25 GB/s    (35.2k)
Total      | 442.90 MB/s (110.7k) | 4.49 GB/s    (70.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.19 GB/s     (8.1k) | 3.82 GB/s     (3.7k)
Write      | 4.41 GB/s     (8.6k) | 4.08 GB/s     (3.9k)
Total      | 8.61 GB/s    (16.8k) | 7.91 GB/s     (7.7k)

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1002                          
Multi Core      | 11807                         
Full Test       | https://browser.geekbench.com/v5/cpu/23679852
```

### PassMark PerformanceTest Linux

```
AMD EPYC 7K62 48-Core Processor (x86_64)
16 cores @ 2595 MHz  |  31.4 GiB RAM
Number of Processes: 16  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          27023
  Integer Math                     75081 Million Operations/s
  Floating Point Math              54380 Million Operations/s
  Prime Numbers                    189 Million Primes/s
  Sorting                          43684 Thousand Strings/s
  Encryption                       18250 MB/s
  Compression                      320510 KB/s
  CPU Single Threaded              2119 Million Operations/s
  Physics                          3034 Frames/s
  Extended Instructions (SSE)      26469 Million Matrices/s

Memory Mark:                       2671
  Database Operations              10109 Thousand Operations/s
  Memory Read Cached               24002 MB/s
  Memory Read Uncached             11867 MB/s
  Memory Write                     12032 MB/s
  Available RAM                    30968 Megabytes
  Memory Latency                   53 Nanoseconds
  Memory Threaded                  89660 MB/s
--------------------------------------------------------------------------
```

### IP检测

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/f456cae2653d266b9018dfda581cae90.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/f456cae2653d266b9018dfda581cae90.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/f456cae2653d266b9018dfda581cae90.jpg" alt="f456cae2653d266b9018dfda581cae90" loading="lazy">
</picture>

### 网络质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/36d53f82336945ca47974554f3ef2af8.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/36d53f82336945ca47974554f3ef2af8.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/36d53f82336945ca47974554f3ef2af8.jpg" alt="36d53f82336945ca47974554f3ef2af8" loading="lazy">
</picture>

### 三网回程

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-32.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-32.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-32.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-33.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-33.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-33.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-34.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-34.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-34.jpg" alt="image" loading="lazy">
</picture>

### NWS

```
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : AMD EPYC 7K62 48-Core Processor
 CPU Cores          : 16 @ 2595.124 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 236.2 GB (2.9 GB Used)
 Total RAM          : 31.4 GB (345.4 MB Used)
 Total Swap         : 759.1 MB (0 Used)
 System uptime      : 0 days, 9 hour 27 min
 Load average       : 0.00, 0.01, 0.09
 OS                 : Ubuntu 20.04.1 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.4.0-42-generic
 Virtualization     : VMWARE
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv4
 IPv6 Access        : ❌ Offline
 IPv4 Access        : ✔ Online
 ISP                : Hostdzire Web Services Private Limited
 ASN                : AS150623 HOSTDZIRE WEB SERVICES PRIVATE LIMITED
 Host               : Hostdzire Web Services Private Limited
 Location           : Mumbai, Maharashtra-MH, India
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Hostdzire Web Services Private 

 Nearest          0.17 ms     0.0%    9197.00 Mbps   9338.54 Mbps   Bfiber Broadband - Mumbai 

 Bangalore, IN    18.00 ms    0.0%    1553.30 Mbps   442.56 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      22.97 ms    0.0%    1840.17 Mbps   320.42 Mbps    Jio - Chennai 
 Mumbai, IN       0.84 ms     0.0%    8853.43 Mbps   9227.93 Mbps   Melbicom - Mumbai 

 Seattle, US      247.02 ms   N/A     1710.87 Mbps   272.69 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  228.77 ms   0.0%    1684.65 Mbps   252.14 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       262.65 ms   0.0%    1504.02 Mbps   149.09 Mbps    Hivelocity - Dallas, TX 
 Miami, US        242.38 ms   0.0%    1669.36 Mbps   61.53 Mbps     Telxius - Miami, FL 
 New York, US     233.08 ms   0.0%    1681.69 Mbps   166.63 Mbps    GSL Networks - New York, NY 
 Toronto, CA      204.63 ms   0.0%    1496.60 Mbps   253.77 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  280.61 ms   N/A     1641.52 Mbps   214.34 Mbps    INFINITUM - Ciudad de México 

 London, UK       137.88 ms   0.0%    1860.15 Mbps   330.68 Mbps    VeloxServ Communications - London 
 Amsterdam, NL    122.05 ms   0.0%    1813.91 Mbps   282.13 Mbps    31173 Services AB - Amsterdam 
 Paris, FR        124.92 ms   N/A     1763.33 Mbps   296.14 Mbps    Axione - Paris 
 Frankfurt, DE    122.11 ms   0.0%    1696.39 Mbps   277.14 Mbps    Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       129.14 ms   0.0%    1869.91 Mbps   285.13 Mbps    Play - Warszawa 
 Bucharest, RO    134.18 ms   0.0%    1862.27 Mbps   262.17 Mbps    Vodafone Romania Mobile - Bucharest - Bucharest 
 Moscow, RU       157.49 ms   0.0%    613.63 Mbps    48.97 Mbps     t2 Russia - Moscow 

 Jeddah, SA       168.38 ms   0.0%    1857.82 Mbps   237.80 Mbps    Saudi Telecom Company 
 Dubai, AE        37.11 ms    N/A     1845.86 Mbps   168.41 Mbps    e& UAE - Dubai 
 Istanbul, TR     FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Tehran, IR       FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Cairo, EG        FAILED - IP has been rate limited. Try again after 1 hour.                                                  

 Tokyo, JP        FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Chengdu, CM-CN   FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Hong Kong, CN    FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Singapore, SG    FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Jakarta, ID      FAILED - IP has been rate limited. Try again after 1 hour.                                                  

 Sydney, AU       FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 2400.80 Mbps
 Avg UL Speed       : 1144.40 Mbps

 Total DL Data      : 57.45 GB
 Total UL Data      : 14.51 GB
 Total Data         : 71.96 GB
---------------------------------------------------------------------------
 Duration           : 9 min 44 sec
 System Time        : 21/07/2025 - 02:08:16 UTC
 Total Script Runs  : 118640
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1753063164_2FFYHV_GLOBAL.txt
---------------------------------------------------------------------------
```

### BGP

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-36.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-36.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-36.jpg" alt="image" loading="lazy">
</picture>
