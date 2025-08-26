---
title: "Worldstream 荷兰万兆 Intel(R) E-2336 测评"
published: 2025-06-27
categories: 
  - "vps"
  - "eu-server"
---

**机器来自朋友，待测，感谢提供。**

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-25-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-25-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-25-scaled.jpg" alt="image" loading="lazy">
</picture>

**Worldstream 是一家总部位于荷兰、专注于 IaaS（基础设施即服务）的云基础设施供应商，主要业务涵盖专属服务器、托管托管（colocation）、私有及公有云、存储解决方案，以及网络与 DDoS 攻护等服务。Worldstream 在荷兰 Naaldwijk 拥有两座自建数据中心，共管理约 15,000 致服务，已扩建第二阶段，规划将扩充至 20,000 机架 除此之外，他们在法兰克福的 maincubes FRA01 也设有 PoP，实现其网络骨干的区域扩展。**

**他们的机器正价比较昂贵，我也是第一次见到这么便宜的10G带宽的Worldstream，属实稀有。同款正价来到210欧元+49欧元****安装****费****。**

## 硬件

- **CPU ： Intel(R) Xeon(R) E-2336 CPU @ 2.90GHz**

- **MEM ：2 x 32 GB DDR4-3200MT/s M391A4G43AB1-CWE**

- **DISK ：****2\*480GB MZ7LH480HBHQ0D3 + 2\*10TB TOSHIBA MG06ACA10TE**

- **Network : 10G Port** **82599ES 10-Gigabit SFI/SFP+ Network Connection**

- **Bandwidth** : **100TB（In+Out）**

- **Price: €64.95**（目前已绝版）

## 测评

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 48 minutes
Processor  : Intel(R) Xeon(R) E-2336 CPU @ 2.90GHz
CPU cores  : 12 @ 2890.115 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 62.6 GiB
Swap       : 7.6 GiB
Disk       : 871.4 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-37-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : WorldStream B.V.
ASN        : AS49981 WorldStream
Host       : WorldStream B.V.
Location   : Naaldwijk, South Holland (ZH)
Country    : The Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/md0):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 319.02 MB/s  (79.7k) | 480.61 MB/s   (7.5k)
Write      | 319.86 MB/s  (79.9k) | 483.14 MB/s   (7.5k)
Total      | 638.88 MB/s (159.7k) | 963.76 MB/s  (15.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 345.89 MB/s    (675) | 345.51 MB/s    (337)
Write      | 364.27 MB/s    (711) | 368.52 MB/s    (359)
Total      | 710.17 MB/s   (1.3k) | 714.04 MB/s    (696)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 7.48 Gbits/sec  | 7.58 Gbits/sec  | 8.52 ms        
Eranium         | Amsterdam, NL (100G)      | 9.40 Gbits/sec  | 9.40 Gbits/sec  | 2.11 ms        
Uztelecom       | Tashkent, UZ (10G)        | busy            | busy            | -- 
Leaseweb        | Singapore, SG (10G)       | 978 Mbits/sec   | 1.02 Gbits/sec  | 157 ms         
Clouvider       | Los Angeles, CA, US (10G) | 1.03 Gbits/sec  | 936 Mbits/sec   | 164 ms         
Leaseweb        | NYC, NY, US (10G)         | 2.06 Gbits/sec  | 2.50 Gbits/sec  | -- 
Edgoo           | Sao Paulo, BR (1G)        | 856 Mbits/sec   | 739 Mbits/sec   | 223 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 6.53 Gbits/sec  | 7.64 Gbits/sec  | 8.48 ms        
Eranium         | Amsterdam, NL (100G)      | 9.27 Gbits/sec  | 9.27 Gbits/sec  | 1.96 ms        
Uztelecom       | Tashkent, UZ (10G)        | busy            | busy            | -- 
Leaseweb        | Singapore, SG (10G)       | 844 Mbits/sec   | 1.11 Gbits/sec  | 157 ms         
Clouvider       | Los Angeles, CA, US (10G) | 892 Mbits/sec   | 865 Mbits/sec   | 164 ms         
Leaseweb        | NYC, NY, US (10G)         | 1.76 Gbits/sec  | 2.49 Gbits/sec  | 78.2 ms        
Edgoo           | Sao Paulo, BR (1G)        | 749 Mbits/sec   | 638 Mbits/sec   | 223 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1485                          
Multi Core      | 6799                          
Full Test       | https://browser.geekbench.com/v6/cpu/12622177
```

### GeekBench5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-37-amd64 x86_64
  Model                         Dell Inc. PowerEdge R250
  Motherboard                   Dell Inc. 0569RT
  BIOS                          Dell Inc. 1.12.0

处理器信息
  Name                          Intel(R) Xeon(R) E-2336 CPU @ 2.90GHz
  Topology                      1 Processor, 6 Cores, 12 Threads
  Identifier                    GenuineIntel Family 6 Model 167 Stepping 1
  Base Frequency                2.90 GHz
  L1 Instruction Cache          32.0 KB x 6
  L1 Data Cache                 48.0 KB x 6
  L2 Cache                      512 KB x 6
  L3 Cache                      12.0 MB

内存信息
  Size                          62.6 GB

单核测试分数：1136
多核测试分数：5968
详细结果链接：https://browser.geekbench.com/v5/cpu/23637873
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=Intel%20Xeon%20E-2336
```

### 硬件检测

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-23.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-23.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-23.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-22.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-22.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-22.jpg" alt="image" loading="lazy">
</picture>

### UnixBench

```
Benchmark Run: Fri Jun 27 2025 14:15:25 - 14:43:30
12 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       42452751.3 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     6506.1 MWIPS (10.0 s, 7 samples)
Execl Throughput                               3998.5 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1210955.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          319127.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3454223.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1838891.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 215584.6 lps   (10.0 s, 7 samples)
Process Creation                               9639.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   4769.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   7681.3 lpm   (60.0 s, 2 samples)
System Call Overhead                        1478988.2 lps   (10.0 s, 7 samples)

fei xue DC1, [2025/6/27 21:17]
System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   42452751.3   3637.8
Double-Precision Whetstone                       55.0       6506.1   1182.9
Execl Throughput                                 43.0       3998.5    929.9
File Copy 1024 bufsize 2000 maxblocks          3960.0    1210955.0   3058.0
File Copy 256 bufsize 500 maxblocks            1655.0     319127.5   1928.3
File Copy 4096 bufsize 8000 maxblocks          5800.0    3454223.9   5955.6
Pipe Throughput                               12440.0    1838891.3   1478.2
Pipe-based Context Switching                   4000.0     215584.6    539.0
Process Creation                                126.0       9639.7    765.1
Shell Scripts (1 concurrent)                     42.4       4769.4   1124.9
Shell Scripts (8 concurrent)                      6.0       7681.3  12802.1
System Call Overhead                          15000.0    1478988.2    986.0
                                                                   ========
System Benchmarks Index Score                                        1807.5

------------------------------------------------------------------------
Benchmark Run: Fri Jun 27 2025 14:43:30 - 15:11:38
12 CPUs in system; running 12 parallel copies of tests

Dhrystone 2 using register variables      265845204.8 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    70732.0 MWIPS (10.0 s, 7 samples)
Execl Throughput                              28593.5 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       7304861.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         2024278.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      16782756.5 KBps  (30.0 s, 2 samples)
Pipe Throughput                            12263451.0 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                1600617.5 lps   (10.0 s, 7 samples)
Process Creation                              78352.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  71885.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   9580.6 lpm   (60.0 s, 2 samples)
System Call Overhead                       11854090.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  265845204.8  22780.2
Double-Precision Whetstone                       55.0      70732.0  12860.4
Execl Throughput                                 43.0      28593.5   6649.7
File Copy 1024 bufsize 2000 maxblocks          3960.0    7304861.0  18446.6
File Copy 256 bufsize 500 maxblocks            1655.0    2024278.5  12231.3
File Copy 4096 bufsize 8000 maxblocks          5800.0   16782756.5  28935.8
Pipe Throughput                               12440.0   12263451.0   9858.1
Pipe-based Context Switching                   4000.0    1600617.5   4001.5
Process Creation                                126.0      78352.8   6218.5
Shell Scripts (1 concurrent)                     42.4      71885.9  16954.2
Shell Scripts (8 concurrent)                      6.0       9580.6  15967.7
System Call Overhead                          15000.0   11854090.7   7902.7
                                                                   ========
System Benchmarks Index Score                                       11713.9
```

### PassMark PerformanceTest Linux

```
Intel Xeon E-2336 CPU @ 2.90GHz (x86_64)
6 cores @ 2900 MHz  |  62.6 GiB RAM
Number of Processes: 12  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          13291
  Integer Math                     42365 Million Operations/s
  Floating Point Math              21277 Million Operations/s
  Prime Numbers                    56.5 Million Primes/s
  Sorting                          21314 Thousand Strings/s
  Encryption                       9284 MB/s
  Compression                      153756 KB/s
  CPU Single Threaded              2035 Million Operations/s
  Physics                          1017 Frames/s
  Extended Instructions (SSE)      9270 Million Matrices/s

Memory Mark:                       2958
  Database Operations              5605 Thousand Operations/s
  Memory Read Cached               20394 MB/s
  Memory Read Uncached             16106 MB/s
  Memory Write                     14254 MB/s
  Available RAM                    63491 Megabytes
  Memory Latency                   41 Nanoseconds
  Memory Threaded                  44796 MB/s
--------------------------------------------------------------------------
```

### IP解锁

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-26.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-26.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-26.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-27.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-27.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-27.jpg" alt="image" loading="lazy">
</picture>
