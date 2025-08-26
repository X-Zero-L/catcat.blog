---
tags: [us-server]
title: "AlphaVPS 洛杉矶 AMD 7700X 测评"
published: 2023-09-07
---

> ## 套餐
> 
> 2G-Ryzen  
> 2x AMD Ryzen vCPU  
> 2GB DDR4 Memory  
> 30GB NVMe  
> 2TB on 1Gbit/s  
> 1x IPv4 and /64 IPv6  
>   
> €5.99/m

## 测评

#### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 3 minutes
Processor  : AMD Ryzen 7 7700X 8-Core Processor
CPU cores  : 2 @ 4491.540 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 1024.0 MiB
Disk       : 28.4 GiB
Distro     : Ubuntu 20.04.6 LTS
Kernel     : 5.4.0-147-generic
VM Type    : KVM
Net Online : IPv4 & IPv6

IPv6 Network Information:
---------------------------------
ISP        : WebNX, Inc.
ASN        : AS18450 WebNX, Inc.
Host       : WebNX, Inc.
Location   : Cheyenne, Wyoming (WY)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ----
Read       | 873.75 MB/s (218.4k) | 1.09 GB/s    (17.0k)
Write      | 876.06 MB/s (219.0k) | 1.09 GB/s    (17.1k)
Total      | 1.74 GB/s   (437.4k) | 2.19 GB/s    (34.2k)
           |                      |
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ----
Read       | 3.79 GB/s     (7.4k) | 4.84 GB/s     (4.7k)
Write      | 3.99 GB/s     (7.7k) | 5.16 GB/s     (5.0k)
Total      | 7.78 GB/s    (15.1k) | 10.01 GB/s    (9.7k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping
----- | ----- | ---- | ---- | ----
Clouvider       | London, UK (10G)          | 637 Mbits/sec   | 852 Mbits/sec   | 127 ms
Scaleway        | Paris, FR (10G)           | 687 Mbits/sec   | 855 Mbits/sec   | 141 ms
NovoServe       | North Holland, NL (40G)   | 635 Mbits/sec   | 677 Mbits/sec   | 179 ms
Uztelecom       | Tashkent, UZ (10G)        | 628 Mbits/sec   | 691 Mbits/sec   | 242 ms
Clouvider       | NYC, NY, US (10G)         | 875 Mbits/sec   | 467 Mbits/sec   | 74.1 ms
Clouvider       | Dallas, TX, US (10G)      | 926 Mbits/sec   | 932 Mbits/sec   | 40.4 ms
Clouvider       | Los Angeles, CA, US (10G) | 941 Mbits/sec   | 941 Mbits/sec   | 21.9 ms

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping
----- | ----- | ---- | ---- | ----
Clouvider       | London, UK (10G)          | 628 Mbits/sec   | 44.2 Mbits/sec  | 127 ms
Scaleway        | Paris, FR (10G)           | 697 Mbits/sec   | 652 Mbits/sec   | 138 ms
NovoServe       | North Holland, NL (40G)   | 620 Mbits/sec   | busy            | 179 ms
Uztelecom       | Tashkent, UZ (10G)        | 550 Mbits/sec   | 517 Mbits/sec   | 242 ms
Clouvider       | NYC, NY, US (10G)         | 808 Mbits/sec   | 690 Mbits/sec   | 72.5 ms
Clouvider       | Dallas, TX, US (10G)      | 905 Mbits/sec   | 912 Mbits/sec   | 40.3 ms
Clouvider       | Los Angeles, CA, US (10G) | 911 Mbits/sec   | 921 Mbits/sec   | 21.9 ms
```

### Bench

```shell
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2022-06-01
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 7 7700X 8-Core Processor
 CPU Cores          : 2 @ 4491.540 MHz
 CPU Cache          : 512 KB
 AES-NI             : Enabled
 VM-x/AMD-V         : Enabled
 Total Disk         : 28.5 GB (4.1 GB Used)
 Total Mem          : 1.9 GB (134.7 MB Used)
 Total Swap         : 1024.0 MB (5.2 MB Used)
 System uptime      : 0 days, 0 hour 46 min
 Load average       : 0.12, 0.74, 0.93
 OS                 : Ubuntu 20.04.6 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.4.0-147-generic
 TCP CC             : bbr
 Virtualization     : KVM
 Organization       : AS18450 WebNX, Inc.
 Location           : Los Angeles / US
 Region             : California
----------------------------------------------------------------------
 I/O Speed(1st run) : 3.1 GB/s
 I/O Speed(2nd run) : 3.1 GB/s
 I/O Speed(3rd run) : 3.1 GB/s
 I/O Speed(average) : 3174.4 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency
 Speedtest.net    858.14 Mbps       931.92 Mbps         40.99 ms
 Los Angeles, US  916.78 Mbps       929.13 Mbps         16.70 ms
 Dallas, US       892.39 Mbps       930.09 Mbps         37.19 ms
 Montreal, CA     768.86 Mbps       935.20 Mbps         68.06 ms
 Paris, FR        493.41 Mbps       932.15 Mbps         160.63 ms
 Amsterdam, NL    601.68 Mbps       950.40 Mbps         141.50 ms
 Shanghai, CN     258.37 Mbps       899.73 Mbps         283.84 ms
 Nanjing, CN      523.82 Mbps       943.74 Mbps         158.09 ms
 Guangzhou, CN    3.95 Mbps         703.90 Mbps         172.48 ms
 Hongkong, CN     4.96 Mbps         3.93 Mbps           150.86 ms
 Singapore, SG    488.17 Mbps       881.54 Mbps         161.51 ms
 Tokyo, JP        710.17 Mbps       887.66 Mbps         121.40 ms
----------------------------------------------------------------------
```

### **PerformanceTest**

```shell
AMD Ryzen 7 7700X 8-Core Processor (x86_64)
2 cores @ 4491 MHz  |  1.9 GiB RAM
Number of Processes: 2  |  Test Iterations: 3  |  Test Duration: Very Long
--------------------------------------------------------------------------
CPU Mark:                          7913
  Integer Math                     17654 Million Operations/s
  Floating Point Math              16482 Million Operations/s
  Prime Numbers                    64.1 Million Primes/s
  Sorting                          10062 Thousand Strings/s
  Encryption                       3819 MB/s
  Compression                      75776 KB/s
  CPU Single Threaded              4238 Million Operations/s
  Physics                          1028 Frames/s
  Extended Instructions (SSE)      7004 Million Matrices/s

Memory Mark:                       1916
  Database Operations              2774 Thousand Operations/s
  Memory Read Cached               41333 MB/s
  Memory Read Uncached             38881 MB/s
  Memory Write                     22108 MB/s
  Available RAM                    1510 Megabytes
  Memory Latency                   59 Nanoseconds
  Memory Threaded                  46088 MB/s
```

### **UnixBench**

```shell
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       82250362.3 lps   (10.0 s, 10 samples)
Double-Precision Whetstone                    13671.1 MWIPS (10.0 s, 10 samples)
Execl Throughput                              11121.8 lps   (30.0 s, 4 samples)
File Copy 1024 bufsize 2000 maxblocks       2642904.5 KBps  (30.0 s, 4 samples)
File Copy 256 bufsize 500 maxblocks          704646.0 KBps  (30.0 s, 4 samples)
File Copy 4096 bufsize 8000 maxblocks       8256639.9 KBps  (30.0 s, 4 samples)
Pipe Throughput                             4228287.5 lps   (10.0 s, 10 samples)
Pipe-based Context Switching                 183162.8 lps   (10.0 s, 10 samples)
Process Creation                              35756.5 lps   (30.0 s, 4 samples)
Shell Scripts (1 concurrent)                  30712.4 lpm   (60.0 s, 4 samples)
Shell Scripts (8 concurrent)                   5431.8 lpm   (60.0 s, 4 samples)
System Call Overhead                        5519520.3 lps   (10.0 s, 10 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   82250362.3   7048.0
Double-Precision Whetstone                       55.0      13671.1   2485.7
Execl Throughput                                 43.0      11121.8   2586.5
File Copy 1024 bufsize 2000 maxblocks          3960.0    2642904.5   6674.0
File Copy 256 bufsize 500 maxblocks            1655.0     704646.0   4257.7
File Copy 4096 bufsize 8000 maxblocks          5800.0    8256639.9  14235.6
Pipe Throughput                               12440.0    4228287.5   3398.9
Pipe-based Context Switching                   4000.0     183162.8    457.9
Process Creation                                126.0      35756.5   2837.8
Shell Scripts (1 concurrent)                     42.4      30712.4   7243.5
Shell Scripts (8 concurrent)                      6.0       5431.8   9052.9
System Call Overhead                          15000.0    5519520.3   3679.7
                                                                   ========
System Benchmarks Index Score                                        4051.0

------------------------------------------------------------------------
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      160306340.0 lps   (10.0 s, 10 samples)
Double-Precision Whetstone                    27300.4 MWIPS (10.0 s, 10 samples)
Execl Throughput                              20533.8 lps   (29.9 s, 4 samples)
File Copy 1024 bufsize 2000 maxblocks       4787169.2 KBps  (30.0 s, 4 samples)
File Copy 256 bufsize 500 maxblocks         1279569.5 KBps  (30.0 s, 4 samples)
File Copy 4096 bufsize 8000 maxblocks      11688626.5 KBps  (30.0 s, 4 samples)
Pipe Throughput                             8434503.3 lps   (10.0 s, 10 samples)
Pipe-based Context Switching                 910565.9 lps   (10.0 s, 10 samples)
Process Creation                              61375.2 lps   (30.0 s, 4 samples)
Shell Scripts (1 concurrent)                  41571.0 lpm   (60.0 s, 4 samples)
Shell Scripts (8 concurrent)                   5929.4 lpm   (60.0 s, 4 samples)
System Call Overhead                       11243558.2 lps   (10.0 s, 10 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  160306340.0  13736.6
Double-Precision Whetstone                       55.0      27300.4   4963.7
Execl Throughput                                 43.0      20533.8   4775.3
File Copy 1024 bufsize 2000 maxblocks          3960.0    4787169.2  12088.8
File Copy 256 bufsize 500 maxblocks            1655.0    1279569.5   7731.5
File Copy 4096 bufsize 8000 maxblocks          5800.0   11688626.5  20152.8
Pipe Throughput                               12440.0    8434503.3   6780.1
Pipe-based Context Switching                   4000.0     910565.9   2276.4
Process Creation                                126.0      61375.2   4871.0
Shell Scripts (1 concurrent)                     42.4      41571.0   9804.5
Shell Scripts (8 concurrent)                      6.0       5929.4   9882.4
System Call Overhead                          15000.0   11243558.2   7495.7
                                                                   ========
System Benchmarks Index Score                                        7534.8
```

### Geekbench 6

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/h9FOqMt+BK+IwAAAABJRU5ErkJggg==.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/h9FOqMt+BK+IwAAAABJRU5ErkJggg==.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/h9FOqMt+BK+IwAAAABJRU5ErkJggg==.jpg" alt="" loading="lazy">
</picture>

### Geekbench 5

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-30-1024x233.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-30-1024x233.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-30-1024x233.jpg" alt="" loading="lazy">
</picture>

### SpeedTest

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-31-1024x439.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-31-1024x439.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-31-1024x439.jpg" alt="" loading="lazy">
</picture>