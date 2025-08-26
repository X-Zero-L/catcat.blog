---
tags: [us-server]
title: "Oplink 美国 AMD 7950X 测评"
published: 2024-02-06
---

这家争议挺大，主要矛盾点在于安装费(黑五活动可以免设置费)。商家的意思安装费是用于筛选客户，只保留精致的用户。新用户可以购买测试3天，如果不满意可以全额退款，包括设置费。就目前买过机器的人而言，表现是很好的。确实做到了像他描述的那样，因为门槛高，所以相对而已邻居的素质也更高。网络而言并不是很好，

## 套餐

**_Provider : Oplink  
Type/Plan : Premium VPS 7950x  
Processor : AMD Ryzen 9 7950X (4.5 GHz++)  
Num of Core : 6 Cores  
Memory : 16 GB DDR5 RAM  
Storage : 500 GB NVMe(PCIe 4.0)  
Bandwidth : 32TB @ 10G Mbps IN | 10G Mbps OUT  
Location : US  
Price : \$29.95 USD + \$4.95 Setup Fee_**

## 测评

### Yabs

```shell
---------------------------------
Uptime     : 0 days, 0 hours, 20 minutes
Processor  : AMD Ryzen 9 7950X 16-Core Processor
CPU cores  : 6 @ 4499.980 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 15.6 GiB
Swap       : 0.0 KiB
Disk       : 484.5 GiB
Distro     : Ubuntu 22.04.3 LTS
Kernel     : 5.15.0-92-generic
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : The Optimal Link Corporation
ASN        : AS40156 The Optimal Link Corporation
Host       : The Optimal Link Corporation
Location   : Houston, Texas (TX)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 479.26 MB/s (119.8k) | 5.56 GB/s    (86.9k)
Write      | 480.52 MB/s (120.1k) | 5.59 GB/s    (87.3k)
Total      | 959.79 MB/s (239.9k) | 11.15 GB/s  (174.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 8.10 GB/s    (15.8k) | 8.45 GB/s     (8.2k)
Write      | 8.53 GB/s    (16.6k) | 9.01 GB/s     (8.8k)
Total      | 16.64 GB/s   (32.5k) | 17.47 GB/s   (17.0k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
Clouvider       | London, UK (10G)          | busy            | busy            | 102 ms         
Scaleway        | Paris, FR (10G)           | 1.53 Gbits/sec  | 1.73 Gbits/sec  | 104 ms         
NovoServe       | North Holland, NL (40G)   | 1.40 Gbits/sec  | 1.38 Gbits/sec  | 115 ms         
Uztelecom       | Tashkent, UZ (10G)        | 676 Mbits/sec   | 435 Mbits/sec   | 210 ms         
Clouvider       | NYC, NY, US (10G)         | 5.13 Gbits/sec  | 2.03 Gbits/sec  | 35.1 ms        
Clouvider       | Dallas, TX, US (10G)      | 7.62 Gbits/sec  | 4.44 Gbits/sec  | 5.90 ms        
Clouvider       | Los Angeles, CA, US (10G) | 4.76 Gbits/sec  | 1.64 Gbits/sec  | 36.2 ms        

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
Clouvider       | London, UK (10G)          | 1.51 Gbits/sec  | busy            | 102 ms         
Scaleway        | Paris, FR (10G)           | busy            | busy            | 104 ms         
NovoServe       | North Holland, NL (40G)   | 1.37 Gbits/sec  | 1.45 Gbits/sec  | 115 ms         
Uztelecom       | Tashkent, UZ (10G)        | busy            | busy            | 210 ms         
Clouvider       | NYC, NY, US (10G)         | 5.25 Gbits/sec  | 4.32 Gbits/sec  | 35.1 ms        
Clouvider       | Dallas, TX, US (10G)      | 8.12 Gbits/sec  | 4.84 Gbits/sec  | 5.87 ms        
Clouvider       | Los Angeles, CA, US (10G) | 4.68 Gbits/sec  | 1.67 Gbits/sec  | 36.3 ms        

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2740                          
Multi Core      | 9614                          
```

### Bench

```shell
 CPU Model          : AMD Ryzen 9 7950X 16-Core Processor
 CPU Cores          : 6 @ 4499.980 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 484.5 GB (1.6 GB Used)
 Total Mem          : 15.6 GB (221.6 MB Used)
 System uptime      : 0 days, 0 hour 2 min
 Load average       : 0.39, 0.13, 0.05
 OS                 : Ubuntu 22.04.3 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.15.0-92-generic
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS40156 The Optimal Link Corporation
 Location           : Houston / US
 Region             : Texas
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.5 GB/s
 I/O Speed(2nd run) : 1.8 GB/s
 I/O Speed(3rd run) : 2.2 GB/s
 I/O Speed(average) : 1877.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    7586.17 Mbps      8161.37 Mbps        0.75 ms     
 Los Angeles, US  2138.41 Mbps      3854.96 Mbps        43.46 ms    
 Dallas, US       7399.73 Mbps      5130.61 Mbps        5.25 ms     
 Montreal, CA     880.51 Mbps       882.29 Mbps         38.90 ms    
 Paris, FR        750.25 Mbps       5508.00 Mbps        107.29 ms   
 Amsterdam, NL    735.68 Mbps       2748.66 Mbps        112.95 ms   
 Shanghai, CN     16.49 Mbps        1684.88 Mbps        183.91 ms   
 Mumbai, IN       369.22 Mbps       2146.11 Mbps        224.30 ms   
 Singapore, SG    395.75 Mbps       3723.43 Mbps        201.61 ms   
 Tokyo, JP        604.17 Mbps       2078.46 Mbps        136.35 ms   
----------------------------------------------------------------------
```

### byte-unixbench 性能测试

```shell
6 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       76446801.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    12709.8 MWIPS (9.7 s, 7 samples)
Execl Throughput                               7853.7 lps   (29.8 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2370804.7 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          636404.6 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       6747492.3 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3531683.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 257257.9 lps   (10.0 s, 7 samples)
Process Creation                              14310.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  15682.1 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   8165.5 lpm   (60.0 s, 2 samples)
System Call Overhead                        2829431.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   76446801.9   6550.7
Double-Precision Whetstone                       55.0      12709.8   2310.9
Execl Throughput                                 43.0       7853.7   1826.4
File Copy 1024 bufsize 2000 maxblocks          3960.0    2370804.7   5986.9
File Copy 256 bufsize 500 maxblocks            1655.0     636404.6   3845.3
File Copy 4096 bufsize 8000 maxblocks          5800.0    6747492.3  11633.6
Pipe Throughput                               12440.0    3531683.8   2839.0
Pipe-based Context Switching                   4000.0     257257.9    643.1
Process Creation                                126.0      14310.5   1135.8
Shell Scripts (1 concurrent)                     42.4      15682.1   3698.6
Shell Scripts (8 concurrent)                      6.0       8165.5  13609.2
System Call Overhead                          15000.0    2829431.9   1886.3
                                                                   ========
System Benchmarks Index Score                                        3263.2

------------------------------------------------------------------------

6 CPUs in system; running 6 parallel copies of tests

Dhrystone 2 using register variables      453129785.0 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    76366.0 MWIPS (10.0 s, 7 samples)
Execl Throughput                              26883.7 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1740142.7 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          498479.6 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3541943.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                            20177471.4 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                1435090.5 lps   (10.0 s, 7 samples)
Process Creation                              52064.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  73699.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  10572.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        7923054.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  453129785.0  38828.6
Double-Precision Whetstone                       55.0      76366.0  13884.7
Execl Throughput                                 43.0      26883.7   6252.0
File Copy 1024 bufsize 2000 maxblocks          3960.0    1740142.7   4394.3
File Copy 256 bufsize 500 maxblocks            1655.0     498479.6   3012.0
File Copy 4096 bufsize 8000 maxblocks          5800.0    3541943.4   6106.8
Pipe Throughput                               12440.0   20177471.4  16219.8
Pipe-based Context Switching                   4000.0    1435090.5   3587.7
Process Creation                                126.0      52064.3   4132.1
Shell Scripts (1 concurrent)                     42.4      73699.7  17382.0
Shell Scripts (8 concurrent)                      6.0      10572.2  17620.4
System Call Overhead                          15000.0    7923054.7   5282.0
                                                                   ========
System Benchmarks Index Score                                        8294.1

======= Script description and score comparison completed! ======= 
```

### 全局网络测试

```shell
 ## CDN Speedtest

 CacheFly :  84.76 MiB/s |  678.07 Mbps  | ping  27.885ms
 Gdrive   :   9.10 KiB/s |    0.07 Mbps  | ping   6.064ms

 ## North America Speedtest

 Softlayer, Washington, USA :  13.61 MiB/s |  108.91 Mbps  | ping  30.331ms
 SoftLayer, San Jose, USA   :  25.47 MiB/s |  203.74 Mbps  | ping  43.611ms
 SoftLayer, Dallas, USA     :       0 B/s |      N/A       | ping error!
 Vultr, New Jersey, USA     :   4.10 MiB/s |   32.83 Mbps  | ping  33.675ms
 Vultr, Seattle, USA        :  41.21 MiB/s |  329.69 Mbps  | ping  55.324ms
 Vultr, Dallas, USA         :  50.77 MiB/s |  406.18 Mbps  | ping   5.651ms
 Vultr, Los Angeles, USA    :  61.74 MiB/s |  493.89 Mbps  | ping  35.765ms
 Ramnode, New York, USA     :  37.10 MiB/s |  296.78 Mbps  | ping  34.492ms
 Ramnode, Atlanta, USA      :  87.22 MiB/s |  697.75 Mbps  | ping  18.817ms

 ## Europe Speedtest

 Vultr, London, UK            :  22.15 MiB/s |  177.16 Mbps  | ping 101.015ms
 LeaseWeb, Frankfurt, Germany :  39.69 KiB/s |    0.31 Mbps  | ping 114.489ms
 Hetzner, Germany             :     297 B/s |      N/A       | ping 114.407ms
 Ramnode, Alblasserdam, NL    :  10.65 MiB/s |   85.21 Mbps  | ping 113.979ms
 Vultr, Amsterdam, NL         :  19.18 MiB/s |  153.47 Mbps  | ping 112.635ms
 EDIS, Stockholm, Sweden      :     400 B/s |      N/A       | ping 137.679ms
 OVH, Roubaix, France         :     363 B/s |      N/A       | ping 110.873ms
 Online, France               : 501.25 KiB/s |    3.92 Mbps  | ping 104.054ms
 Prometeus, Milan, Italy      :     418 B/s |      N/A       | ping 121.831ms

 ## Exotic Speedtest

 Sydney, Australia     :   6.32 MiB/s |   50.54 Mbps  | ping 233.600ms
 Lagoon, New Caledonia :     292 B/s |      N/A       | ping 235.014ms
 Hosteasy, Moldova     :   4.86 MiB/s |   38.85 Mbps  | ping 149.269ms
 Prima, Argentina      : 280.71 KiB/s |    2.19 Mbps  | ping error!

 ## Asia Speedtest

 SoftLayer, Singapore : 141.00 KiB/s |    1.10 Mbps  | ping 205.761ms
 Linode, Tokyo, Japan :  12.03 MiB/s |   96.24 Mbps  | ping 141.534ms
 Linode, Singapore    :   6.70 MiB/s |   53.58 Mbps  | ping 232.179ms
 Vultr, Tokyo, Japan  :  14.27 MiB/s |  114.16 Mbps  | ping 150.413ms
```

### 网络测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-6.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/afbc0087eac770d116a1f739ce2e99ca.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/afbc0087eac770d116a1f739ce2e99ca.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/afbc0087eac770d116a1f739ce2e99ca.jpg" alt="" loading="lazy">
</picture>