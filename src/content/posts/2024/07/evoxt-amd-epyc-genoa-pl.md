---
title: "Evoxt AMD EPYC-Genoa 波兰测评"
published: 2024-07-14
categories: 
  - "eu-server"
---

这家开业有几年了。地区目前有香港，日本 ，美国，波兰，英国，马来西亚，德国等地区。前一段时间他们家的香港和日本炒的比较火，因为托管的是Xtom的机房，线路大家都懂，加上之前水灾，老板赔偿的可以。也有很多人拿他们家当Tiktok，我不涉及这些，不做说明。这次新上了波兰机房，这种地区咱们就不看网络了。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/07/image-16.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/07/image-16.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/07/image-16.jpg" alt="" loading="lazy">
</picture>

## 配置：

- **_Provider :_ Evoxt**

- **_Type/Plan : ****VM-2****_**

- **_Processor : AMD EPYC-Genoa_**

- **_Num of Core :_** **_2_** **_Cores_**

- **_Memory :_** **_4_** **_GB_**

- **_Storage : 3_****_0_** **_GB NVMe_**

- **_Bandwidth : 2TB @ 1 Gbps IN | 1 Gbps OUT_**

- **_Location :_** **_PL_**

- _**Price : \$11.99**_

## 测评

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 4 hours, 33 minutes
Processor  : AMD EPYC-Genoa Processor
CPU cores  : 2 @ 4491.540 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 29.4 GiB
Distro     : Debian GNU/Linux 11 (bullseye)
Kernel     : 5.10.0-8-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Evoxt Enterprise
ASN        : AS149440 Evoxt Enterprise
Host       : Evoxtv6 9 PL
Location   : Warsaw, Mazovia (14)
Country    : Poland

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 529.15 MB/s (132.2k) | 2.86 GB/s    (44.7k)
Write      | 530.54 MB/s (132.6k) | 2.88 GB/s    (45.0k)
Total      | 1.05 GB/s   (264.9k) | 5.74 GB/s    (89.7k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.70 GB/s     (5.2k) | 1.75 GB/s     (1.7k)
Write      | 2.85 GB/s     (5.5k) | 1.87 GB/s     (1.8k)
Total      | 5.56 GB/s    (10.8k) | 3.62 GB/s     (3.5k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
Clouvider       | London, UK (10G)          | 920 Mbits/sec   | 886 Mbits/sec   | 28.5 ms        
Eranium         | Amsterdam, NL (100G)      | 929 Mbits/sec   | 930 Mbits/sec   | -- 
Uztelecom       | Tashkent, UZ (10G)        | busy            | 494 Mbits/sec   | 101 ms         
Leaseweb        | Singapore, SG (10G)       | 394 Mbits/sec   | 459 Mbits/sec   | 355 ms         
Clouvider       | Los Angeles, CA, US (10G) | 601 Mbits/sec   | 275 Mbits/sec   | 165 ms         
Leaseweb        | NYC, NY, US (10G)         | 759 Mbits/sec   | 598 Mbits/sec   | 104 ms         
Edgoo           | Sao Paulo, BR (1G)        | 611 Mbits/sec   | 243 Mbits/sec   | 204 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
Clouvider       | London, UK (10G)          | 909 Mbits/sec   | 914 Mbits/sec   | 28.5 ms        
Eranium         | Amsterdam, NL (100G)      | busy            | busy            | -- 
Uztelecom       | Tashkent, UZ (10G)        | 828 Mbits/sec   | busy            | 101 ms         
Leaseweb        | Singapore, SG (10G)       | busy            | 406 Mbits/sec   | -- 
Clouvider       | Los Angeles, CA, US (10G) | busy            | 340 Mbits/sec   | 165 ms         
Leaseweb        | NYC, NY, US (10G)         | 743 Mbits/sec   | 633 Mbits/sec   | -- 
Edgoo           | Sao Paulo, BR (1G)        | 648 Mbits/sec   | 191 Mbits/sec   | 204 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2885                          
Multi Core      | 5068                          
```

### Bench

```
CPU Model          : AMD EPYC-Genoa Processor
 CPU Cores          : 2 @ 4491.540 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✗ Disabled
 Total Disk         : 29.4 GB (1.9 GB Used)
 Total Mem          : 3.8 GB (247.8 MB Used)
 System uptime      : 0 days, 4 hour 27 min
 Load average       : 0.15, 0.08, 0.71
 OS                 : Debian GNU/Linux 11
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.10.0-8-amd64
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS149440 Evoxt Enterprise
 Location           : Mokotów / PL
 Region             : Mazovia
----------------------------------------------------------------------
 I/O Speed(1st run) : 2.5 GB/s
 I/O Speed(2nd run) : 2.4 GB/s
 I/O Speed(3rd run) : 2.1 GB/s
 I/O Speed(average) : 2389.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    927.96 Mbps       928.68 Mbps         1.77 ms     
 Los Angeles, US  474.39 Mbps       643.69 Mbps         172.94 ms   
 Dallas, US       561.98 Mbps       666.21 Mbps         143.66 ms   
 Montreal, CA     755.53 Mbps       923.85 Mbps         105.06 ms   
 Amsterdam, NL    924.96 Mbps       941.96 Mbps         21.56 ms    
 Hongkong, CN     340.32 Mbps       558.43 Mbps         237.28 ms   
 Mumbai, IN       570.16 Mbps       690.33 Mbps         142.03 ms   
 Singapore, SG    58.27 Mbps        11.99 Mbps          339.49 ms   
 Tokyo, JP        321.04 Mbps       348.95 Mbps         249.53 ms   
----------------------------------------------------------------------
 Finished in        : 4 min 34 sec
```

### **UnixBench**

```
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       78812817.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    12863.3 MWIPS (9.8 s, 7 samples)
Execl Throughput                              12246.0 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2566000.6 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          684513.1 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       8132420.5 KBps  (30.0 s, 2 samples)
Pipe Throughput                             4292465.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 221275.5 lps   (10.0 s, 7 samples)
Process Creation                              19406.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  26157.6 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4528.9 lpm   (60.0 s, 2 samples)
System Call Overhead                        4735741.1 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   78812817.7   6753.5
Double-Precision Whetstone                       55.0      12863.3   2338.8
Execl Throughput                                 43.0      12246.0   2847.9
File Copy 1024 bufsize 2000 maxblocks          3960.0    2566000.6   6479.8
File Copy 256 bufsize 500 maxblocks            1655.0     684513.1   4136.0
File Copy 4096 bufsize 8000 maxblocks          5800.0    8132420.5  14021.4
Pipe Throughput                               12440.0    4292465.2   3450.5
Pipe-based Context Switching                   4000.0     221275.5    553.2
Process Creation                                126.0      19406.7   1540.2
Shell Scripts (1 concurrent)                     42.4      26157.6   6169.2
Shell Scripts (8 concurrent)                      6.0       4528.9   7548.2
System Call Overhead                          15000.0    4735741.1   3157.2
                                                                   ========
System Benchmarks Index Score                                        3732.3

------------------------------------------------------------------------
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      154692797.3 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    25624.7 MWIPS (10.0 s, 7 samples)
Execl Throughput                              13992.4 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1158144.1 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          289177.6 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2867743.2 KBps  (30.0 s, 2 samples)
Pipe Throughput                             8409878.1 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 953172.5 lps   (10.0 s, 7 samples)
Process Creation                              36679.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  32825.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4316.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        4190635.5 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  154692797.3  13255.6
Double-Precision Whetstone                       55.0      25624.7   4659.0
Execl Throughput                                 43.0      13992.4   3254.0
File Copy 1024 bufsize 2000 maxblocks          3960.0    1158144.1   2924.6
File Copy 256 bufsize 500 maxblocks            1655.0     289177.6   1747.3
File Copy 4096 bufsize 8000 maxblocks          5800.0    2867743.2   4944.4
Pipe Throughput                               12440.0    8409878.1   6760.4
Pipe-based Context Switching                   4000.0     953172.5   2382.9
Process Creation                                126.0      36679.8   2911.1
Shell Scripts (1 concurrent)                     42.4      32825.4   7741.8
Shell Scripts (8 concurrent)                      6.0       4316.7   7194.5
System Call Overhead                          15000.0    4190635.5   2793.8
                                                                   ========
System Benchmarks Index Score                                        4273.0

======= Script description and score comparison completed! ======= 
```

### 速度测试

```
## CDN Speedtest

 CacheFly : 109.89 MiB/s |  879.12 Mbps  | ping   3.790ms
 Gdrive   :   5.46 KiB/s |    0.04 Mbps  | ping   3.537ms

 ## North America Speedtest

 Softlayer, Washington, USA :   9.42 MiB/s |   75.37 Mbps  | ping 105.077ms
 SoftLayer, San Jose, USA   :       0 B/s |      N/A       | ping error!
 SoftLayer, Dallas, USA     :       0 B/s |      N/A       | ping error!
 Vultr, New Jersey, USA     :  20.98 MiB/s |  167.85 Mbps  | ping  97.677ms
 Vultr, Seattle, USA        :  12.17 MiB/s |   97.36 Mbps  | ping 156.368ms
 Vultr, Dallas, USA         :  13.96 MiB/s |  111.65 Mbps  | ping 141.221ms
 Vultr, Los Angeles, USA    :  11.64 MiB/s |   93.09 Mbps  | ping 159.729ms
 Ramnode, New York, USA     :  21.95 MiB/s |  175.59 Mbps  | ping 103.414ms
 Ramnode, Atlanta, USA      :  19.24 MiB/s |  153.96 Mbps  | ping 117.404ms

 ## Europe Speedtest

 Vultr, London, UK            :  72.78 MiB/s |  582.24 Mbps  | ping  28.948ms
 LeaseWeb, Frankfurt, Germany : 229.53 KiB/s |    1.79 Mbps  | ping  21.605ms
 Hetzner, Germany             :   1.28 KiB/s |    0.01 Mbps  | ping  27.937ms
 Ramnode, Alblasserdam, NL    :  55.97 MiB/s |  447.73 Mbps  | ping  23.531ms
 Vultr, Amsterdam, NL         :  76.57 MiB/s |  612.56 Mbps  | ping  20.386ms
 EDIS, Stockholm, Sweden      :   1.49 KiB/s |    0.01 Mbps  | ping  32.235ms
 OVH, Roubaix, France         :   2.43 KiB/s |    0.02 Mbps  | ping  32.241ms
 Online, France               :  74.51 MiB/s |  596.05 Mbps  | ping  29.268ms
 Prometeus, Milan, Italy      :   1.12 KiB/s |    0.01 Mbps  | ping  28.403ms

 ## Exotic Speedtest

 Sydney, Australia     :   1.86 MiB/s |   14.91 Mbps  | ping 328.327ms
 Lagoon, New Caledonia :     284 B/s |      N/A       | ping 326.843ms
 Hosteasy, Moldova     :  33.43 MiB/s |  267.47 Mbps  | ping  52.104ms
 Prima, Argentina      :   1.61 MiB/s |   12.85 Mbps  | ping error!

 ## Asia Speedtest

 SoftLayer, Singapore :   1.07 MiB/s |    8.52 Mbps  | ping 322.655ms
 Linode, Tokyo, Japan :   3.12 MiB/s |   24.93 Mbps  | ping 240.623ms
 Linode, Singapore    :   1.58 MiB/s |   12.61 Mbps  | ping 305.713ms
 Vultr, Tokyo, Japan  :   4.80 MiB/s |   38.41 Mbps  | ping 253.422ms

```

### 流媒体测试

```
============[ Multination ]============
 Dazn:                                  Yes (Region: PL)
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: PL)
 Amazon Prime Video:                    Yes (Region: PL)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  No
 Instagram Licensed Audio:              Yes
 OneTrust Region:                       PL [Mazovia]
 iQyi Oversea Region:                   US
 Bing Region:                           PL
 YouTube CDN:                           [ATMAN] in [Warsaw]
 Netflix Preferred CDN:                 Warsaw
 ChatGPT:                               Yes
 Wikipedia Editability:                 No
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        PLN
 ---Forum---
 Reddit:                                No
=======================================
```

### BGP

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/07/image-15.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/07/image-15.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/07/image-15.jpg" alt="" loading="lazy">
</picture>
