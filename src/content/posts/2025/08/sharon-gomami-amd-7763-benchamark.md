---
title: "Sharon 新站 GoMami 香港 AMD 7763  测评"
published: 2025-08-12
categories: 
  - "vps"
  - "hk-server"
---

**伟大的龙带着他们的新产品线又回来了。这次一共三个系列，分别是GoMami Peak X5 （9950X系列） GoMami Pulse (7763系列) 和 GoMami Forge（杜甫系列）线路都是China Mainland Optimized Pro （163PP / 4837 / 58453），杜甫系列使用 CN2 GIA / 9929 / CMIN2。根据董事长的回复，后续应该会有国内三大的清洗，国际cfmt，gcore，ctc后面也会上。目前只能信用支付，后续会有国内支付方式。**

本次首发优惠码为 **HappyBirthday**

## 官网

立即体验 → [https://gomami.io](https://gomami.io)

带AFF → [https://gomami.io/aff.php?aff=4](https://gomami.io/aff.php?aff=4)

## 机器套餐

本次测试均采用**Debian13**，据说同比Debian12 在AMD下有17%的性能提升（道听途说，切勿当真）。

## 套餐

- **_Provider : GoMami_**

- **_Type/Plan : HKG.Pulse.Mini_**

- **_Processor : AMD EPYC 7763 64-Core Processor_**

- **_Num of Core :_** **_2_** **_Cores_**

- **_Memory :_** **_4_** **_GB_**

- **_Storage : 4_****_0 GB NVMe_**

- **_Bandwidth :_** **_1_****_TB(only out) @ 1 Gbps IN | 1 Gbps OUT ( Shared )_**

- **_Location :_ _HK_**

- **_Price : \$39.00 USD / [\$33.15 USD](https://gomami.io/aff.php?aff=4&pid=4)_** **_（Use HappyBirthday ）_**

## 测评

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 4 minutes
Processor  : AMD EPYC 7763 64-Core Processor
CPU cores  : 2 @ 2449.986 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 39.9 GiB
Distro     : Debian GNU/Linux 13 (trixie)
Kernel     : 6.12.38+deb13-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Next Hop LLC
ASN        : AS36002 Next Hop LLC
Host       : Telescope Communications
Location   : Hong Kong, Kowloon ()
Country    : Hong Kong

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 328.63 MB/s  (82.1k) | 1.09 GB/s    (17.0k)
Write      | 329.50 MB/s  (82.3k) | 1.09 GB/s    (17.1k)
Total      | 658.13 MB/s (164.5k) | 2.19 GB/s    (34.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.14 GB/s     (2.2k) | 1.20 GB/s     (1.1k)
Write      | 1.20 GB/s     (2.3k) | 1.28 GB/s     (1.2k)
Total      | 2.34 GB/s     (4.5k) | 2.49 GB/s     (2.4k)

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1170                          
Multi Core      | 2323                          
Full Test       | https://browser.geekbench.com/v5/cpu/23722839

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1537                          
Multi Core      | 2798                          
Full Test       | https://browser.geekbench.com/v6/cpu/13286453

YABS completed in 2 min 24 sec
```

### PassMark PerformanceTest Linux

```
AMD EPYC 7763 64-Core Processor (x86_64)
2 cores @ 0 MHz  |  3.8 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          4307
  Integer Math                     9877 Million Operations/s
  Floating Point Math              8012 Million Operations/s
  Prime Numbers                    32.4 Million Primes/s
  Sorting                          6101 Thousand Strings/s
  Encryption                       2140 MB/s
  Compression                      41553 KB/s
  CPU Single Threaded              2280 Million Operations/s
  Physics                          560 Frames/s
  Extended Instructions (SSE)      3514 Million Matrices/s

Memory Mark:                       2004
  Database Operations              1884 Thousand Operations/s
  Memory Read Cached               23429 MB/s
  Memory Read Uncached             21252 MB/s
  Memory Write                     20618 MB/s
  Available RAM                    2519 Megabytes
  Memory Latency                   58 Nanoseconds
  Memory Threaded                  40749 MB/s
--------------------------------------------------------------------------------
```

### IO测速

```
root@catcat:~# dd if=/dev/zero of=testfile bs=1M count=10240
10240+0 records in
10240+0 records out
10737418240 bytes (11 GB, 10 GiB) copied, 4.62496 s, 2.3 GB/s
```

### IP 质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-49.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-49.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-49.jpg" alt="image" loading="lazy">
</picture>

### 网络质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-37.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-37.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-37.jpg" alt="image" loading="lazy">
</picture>

### 三网回程

#### 北京

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-38.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-38.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-38.jpg" alt="image" loading="lazy">
</picture>

#### 上海

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-39.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-39.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-39.jpg" alt="image" loading="lazy">
</picture>

#### 广东

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-40.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-40.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-40.jpg" alt="image" loading="lazy">
</picture>

### Ping

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-45-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-45-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-45-scaled.jpg" alt="image" loading="lazy">
</picture>

### NWS

```
--------------------------------------------------------------------------- 
 CPU Model          : AMD EPYC 7763 64-Core Processor                                                                                                                                        
 CPU Cores          : 2 @ 2449.986 MHz
 CPU Cache          : 512 KB                                                                                                                                                                 
 AES-NI             : ✔ Enabled                                                                                                                                                              
 VM-x/AMD-V         : ✔ Enabled                                                               
 Total Disk         : 39.9 GB (2.2 GB Used)                                                                                                                                                  
 Total RAM          : 3.8 GB (445.0 MB Used)                                                  
 System uptime      : 0 days, 0 hour 35 min                                                                                                                                                  
 Load average       : 0.00, 0.12, 0.19                                                        
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)                                                                                                                                                        
 Kernel             : 6.1.0-9-amd64                                                           
 Virtualization     : KVM                                                                     
 TCP Control        : cubic                                                                   
--------------------------------------------------------------------------- 
 Basic Network Info
--------------------------------------------------------------------------- 
 Primary Network    : IPv4                                                                    
 IPv6 Access        : ❌ Offline                                                                                                                                                             
 IPv4 Access        : ✔ Online                                                                
 ISP                : Next Hop LLC                                                                                                                                                           
 ASN                : AS36002 Next Hop LLC
 Host               : Telescope Communications                                                                                                                                               
 Location           : Hong Kong, Kowloon-, Hong Kong                       
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)  
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      
                                               
 ISP: NEXTHOP                 
                                                                                              
 Nearest          2.11 ms     N/A     954.52 Mbps    264.38 Mbps    Misaka Network, Inc. - Hong Kong 
                                                                                              
 Bangalore, IN    71.70 ms    0.0%    956.80 Mbps    886.66 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      64.96 ms    0.0%    922.13 Mbps    842.01 Mbps    Jio - Chennai 
 Mumbai, IN       191.53 ms   0.0%    972.67 Mbps    411.73 Mbps    Melbicom - Mumbai 
                                                                                              
 Seattle, US      161.17 ms   N/A     760.12 Mbps    570.32 Mbps    Comcast - Seattle, WA
 Bangalore, IN    71.70 ms    0.0%    956.80 Mbps    886.66 Mbps    Bharti Airtel Ltd - Bangalore                                                                   
 Chennai, IN      64.96 ms    0.0%    922.13 Mbps    842.01 Mbps    Jio - Chennai 
 Mumbai, IN       191.53 ms   0.0%    972.67 Mbps    411.73 Mbps    Melbicom - Mumbai 
                                               
 Seattle, US      161.17 ms   N/A     760.12 Mbps    570.32 Mbps    Comcast - Seattle, WA     
 Los Angeles, US  176.91 ms   0.3%    809.70 Mbps    167.58 Mbps    ReliableSite Hosting - Los Angeles, CA                                                                                   
 Dallas, US       222.53 ms   0.0%    896.73 Mbps    204.57 Mbps    Hivelocity - Dallas, TX 
 Miami, US        285.20 ms   0.0%    567.21 Mbps    271.24 Mbps    Telxius - Miami, FL 
 New York, US     241.78 ms   0.0%    912.92 Mbps    457.38 Mbps    GSL Networks - New York, NY                                                                                              
 Toronto, CA      214.58 ms   0.0%    640.60 Mbps    413.41 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  217.46 ms   N/A     846.55 Mbps    401.90 Mbps    INFINITUM - Ciudad de México                                                                                             
                                               
 London, UK       177.24 ms   0.0%    976.69 Mbps    565.30 Mbps    VeloxServ Communications - London                                                                                        
 Amsterdam, NL    184.11 ms   0.0%    931.92 Mbps    526.42 Mbps    31173 Services AB - Amsterdam                                                                                            
 Paris, FR        183.82 ms   N/A     957.65 Mbps    596.74 Mbps    Axione - Paris            
 Frankfurt, DE    184.56 ms   0.0%    565.82 Mbps    297.43 Mbps    Clouvider Ltd - Frankfurt am Main                                                                                        
 Warsaw, PL       177.11 ms   0.0%    975.23 Mbps    623.60 Mbps    Play - Warszawa           
 Bucharest, RO    195.36 ms   0.0%    941.97 Mbps    536.71 Mbps    Vodafone Romania Mobile - Bucharest - Bucharest                                                                          
 Moscow, RU       FAILED                                                                      
                                               
 Jeddah, SA       243.37 ms   0.0%    873.70 Mbps    460.03 Mbps    Saudi Telecom Company                                                                    
 Dubai, AE        189.53 ms   N/A     976.62 Mbps    760.30 Mbps    e& UAE - Dubai            
 Istanbul, TR     289.84 ms   0.0%    789.07 Mbps    375.13 Mbps    Turkcell - Istanbul       
 Tehran, IR       248.54 ms   0.0%    711.98 Mbps    340.98 Mbps    Irancell - Tehran         
 Cairo, EG        FAILED                                                         
                                               
 Tokyo, JP        105.66 ms           977.51 Mbps    FAILED         GSL Networks - Tokyo 
 Chengdu, CM-CN   FAILED                                                                      
 Hong Kong, CN    1.56 ms     0.0%    955.17 Mbps    586.35 Mbps    Misaka Network, Inc. - Hong Kong                                                                                         
 Singapore, SG    FAILED                                                                      
 Jakarta, ID      52.53 ms    0.0%    860.11 Mbps    987.16 Mbps    PT Solnet Indonesia - Jakarta                                                                                            
                                               
 Sydney, AU       139.30 ms   0.0%    970.42 Mbps    745.03 Mbps    Aussie Broadband - Sydney                                                                                                
---------------------------------------------------------------------------
 Avg DL Speed       : 868.15 Mbps                                                             
 Avg UL Speed       : 491.70 Mbps
                                                                                              
 Total DL Data      : 29.62 GB                                                                
 Total UL Data      : 17.47 GB                 
 Total Data         : 47.08 GB
--------------------------------------------------------------------------- 
```

### 测速

拉满!

10GB文件 广东电信直取下载

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-41.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-41.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-41.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-42.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-42.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-42.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-43.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-43.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-43.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-44.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-44.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-44.jpg" alt="image" loading="lazy">
</picture>

### BGP

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-48.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-48.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-48.jpg" alt="image" loading="lazy">
</picture>

### WordPress BenchMark

作为一个AMD Epyc 三代的米兰来说自然是比不过 AMD的高频Ryzen 系列，但是也足够使用。

期待9950X的结果。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-46.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-46.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-46.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-47-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-47-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-47-scaled.jpg" alt="image" loading="lazy">
</picture>

## 总结

一如既往的贯彻了Sharon优秀的亚太网络，全网拉直，绿油油的一片。后续如果防御和备份能跟上，再观察观察稳定性，一定会是亚太非常不错的建站机器。（只跑代理太亏了吧）
