---
title: "Sharon 新站 GoMami 香港 AMD 9950X 测评"
published: 2025-08-13
categories: 
  - "vps"
  - "hk-server"
---

相关前言可以见 [Sharon 新站 GoMami 香港 AMD 7763 测评](https://catcat.blog/sharon-gomami-amd-7763-benchamark.html)

废话不多说，我们直接跑。

本次首发优惠码为 **HappyBirthday**

## 官网

立即体验 → [https://gomami.io](https://gomami.io/)

带 AFF → [https://gomami.io/aff.php?aff=4](https://gomami.io/aff.php?aff=4)

## 套餐

- **_Provider : GoMami_**

- **_Type/Plan : HKG.Peak.X5.Mini_**

- **_Processor : AMD Ryzen 9 9950X 16-Core Processor_**

- **_Num of Core :_** **_2_** **_Cores_**

- **_Memory :_** **_4_** **_GB_**

- **_Storage : 4_****_0 GB NVMe_**

- **_Bandwidth :_** **_1_****_TB(only out) @ 1 Gbps IN | 1 Gbps OUT ( Shared )_**

- **_Location :_ _HK_**

- **_Price : \$59.00 USD / [\$50.15 USD](https://gomami.io/aff.php?aff=4&pid=1)_** **_（Use HappyBirthday ）_**

## 测评

**机器相比AMD 7763系列是锁了IO的，砍了对半。CPU是满血9950X的分数，和我的纯杜甫相差不大。**

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 12 minutes
Processor  : AMD Ryzen 9 9950X 16-Core Processor
CPU cores  : 2 @ 4291.912 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 39.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
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
Read       | 399.31 MB/s  (99.8k) | 430.46 MB/s   (6.7k)
Write      | 400.36 MB/s (100.0k) | 432.73 MB/s   (6.7k)
Total      | 799.67 MB/s (199.9k) | 863.20 MB/s  (13.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 520.34 MB/s   (1.0k) | 561.11 MB/s    (547)
Write      | 547.99 MB/s   (1.0k) | 598.48 MB/s    (584)
Total      | 1.06 GB/s     (2.0k) | 1.15 GB/s     (1.1k)

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2566                          
Multi Core      | 4520                          
Full Test       | https://browser.geekbench.com/v5/cpu/23723730

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 3419                          
Multi Core      | 5974                          
Full Test       | https://browser.geekbench.com/v6/cpu/13293079
```

### PassMark PerformanceTest Linux

```
AMD Ryzen 9 9950X 16-Core Processor (x86_64)
2 cores @ 0 MHz  |  3.8 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          8451
  Integer Math                     18926 Million Operations/s
  Floating Point Math              18796 Million Operations/s
  Prime Numbers                    71.0 Million Primes/s
  Sorting                          10974 Thousand Strings/s
  Encryption                       3959 MB/s
  Compression                      80655 KB/s
  CPU Single Threaded              4660 Million Operations/s
  Physics                          1221 Frames/s
  Extended Instructions (SSE)      6789 Million Matrices/s

Memory Mark:                       2058
  Database Operations              3237 Thousand Operations/s
  Memory Read Cached               42468 MB/s
  Memory Read Uncached             41153 MB/s
  Memory Write                     19809 MB/s
  Available RAM                    2000 Megabytes
  Memory Latency                   65 Nanoseconds
  Memory Threaded                  45291 MB/s
--------------------------------------------------------------------------------
```

### UnixBench

```
========================================================================
   BYTE UNIX Benchmarks (Version 6.0.0)

   System: catcat.blog: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD Ryzen 9 9950X 16-Core Processor (8583.8 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD Ryzen 9 9950X 16-Core Processor (8583.8 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   11:23:12 up 44 min,  2 users,  load average: 0.00, 0.13, 0.17; runlevel 2025-08-13

------------------------------------------------------------------------
Benchmark Run: Wed Aug 13 2025 11:23:12 - 11:51:30
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables      106400208.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    13708.8 MWIPS (10.0 s, 7 samples)
Execl Throughput                               8881.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2442971.4 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          617173.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       8594560.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                             4437671.4 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 299976.3 lps   (10.0 s, 7 samples)
Process Creation                              27085.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  28053.5 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5735.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        4178434.1 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  106400208.4   9117.4
Double-Precision Whetstone                       55.0      13708.8   2492.5
Execl Throughput                                 43.0       8881.1   2065.4
File Copy 1024 bufsize 2000 maxblocks          3960.0    2442971.4   6169.1
File Copy 256 bufsize 500 maxblocks            1655.0     617173.5   3729.1
File Copy 4096 bufsize 8000 maxblocks          5800.0    8594560.0  14818.2
Pipe Throughput                               12440.0    4437671.4   3567.3
Pipe-based Context Switching                   4000.0     299976.3    749.9
Process Creation                                126.0      27085.2   2149.6
Shell Scripts (1 concurrent)                     42.4      28053.5   6616.4
Shell Scripts (8 concurrent)                      6.0       5735.7   9559.5
System Call Overhead                          15000.0    4178434.1   2785.6
                                                                   ========
System Benchmarks Index Score                                        3988.6

------------------------------------------------------------------------
Benchmark Run: Wed Aug 13 2025 11:51:30 - 12:19:48
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      210625400.2 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    27238.4 MWIPS (10.0 s, 7 samples)
Execl Throughput                              16785.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       4798590.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         1220281.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      13384231.3 KBps  (30.0 s, 2 samples)
Pipe Throughput                             8766242.1 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 861876.9 lps   (10.0 s, 7 samples)
Process Creation                              56212.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  43194.2 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5899.4 lpm   (60.0 s, 2 samples)
System Call Overhead                        8260592.4 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  210625400.2  18048.4
Double-Precision Whetstone                       55.0      27238.4   4952.4
Execl Throughput                                 43.0      16785.1   3903.5
File Copy 1024 bufsize 2000 maxblocks          3960.0    4798590.8  12117.7
File Copy 256 bufsize 500 maxblocks            1655.0    1220281.8   7373.3
File Copy 4096 bufsize 8000 maxblocks          5800.0   13384231.3  23076.3
Pipe Throughput                               12440.0    8766242.1   7046.8
Pipe-based Context Switching                   4000.0     861876.9   2154.7
Process Creation                                126.0      56212.2   4461.3
Shell Scripts (1 concurrent)                     42.4      43194.2  10187.3
Shell Scripts (8 concurrent)                      6.0       5899.4   9832.3
System Call Overhead                          15000.0    8260592.4   5507.1
                                                                   ========
System Benchmarks Index Score                                        7398.1
```

### IO测试

相比7763的版本，差了挺多。

```
root@catcat:~# dd if=/dev/zero of=testfile bs=1M count=10240
10240+0 records in
10240+0 records out
10737418240 bytes (11 GB, 10 GiB) copied, 12.6975 s, 846 MB/s
root@catcat:~# 
```

### IP质量

这个后面就不测了，因为IP是同批的，都一样。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-50.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-50.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-50.jpg" alt="image" loading="lazy">
</picture>

### WordPress BenchMark

### PHP8.0

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-51.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-51.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-51.jpg" alt="image" loading="lazy">
</picture>

#### PHP8.4

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-52.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-52.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-52.jpg" alt="image" loading="lazy">
</picture>

## 总结

**相比_HKG.Pulse.Mini_ 的AMD 7763来说，多出来的20刀相当于都在CPU上了。但是唯一美中不足的地方在于机器锁了IO，从fio同样的命令生成了10G的测试文件，差距有3倍。但是从非极端性能的情况来讲，wordpress等应用服务还是足够。**
