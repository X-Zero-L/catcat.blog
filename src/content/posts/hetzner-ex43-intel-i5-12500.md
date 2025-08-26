---
tags: [eu-server]
title: "Hetzner EX43 Intel i5 12500 测评"
published: 2024-07-19
---

日常捡垃圾 发现拍卖鸡好东西。通电平均2000小时，读写总计20T。

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 1 minutes
Processor  : 12th Gen Intel(R) Core(TM) i5-12500
CPU cores  : 12 @ 800.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 62.6 GiB
Swap       : 0.0 KiB
Disk       : 936.3 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-21-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Hetzner Online GmbH
ASN        : AS24940 Hetzner Online GmbH
Host       : Incopro Ltd
Location   : Helsinki, Uusimaa (18)
Country    : Finland

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/md2):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.36 GB/s   (341.7k) | 2.78 GB/s    (43.5k)
Write      | 1.37 GB/s   (342.6k) | 2.79 GB/s    (43.7k)
Total      | 2.73 GB/s   (684.4k) | 5.58 GB/s    (87.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 3.65 GB/s     (7.1k) | 4.02 GB/s     (3.9k)
Write      | 3.84 GB/s     (7.5k) | 4.29 GB/s     (4.1k)
Total      | 7.50 GB/s    (14.6k) | 8.32 GB/s     (8.1k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2647                          
Multi Core      | 10585                         
Full Test       | https://browser.geekbench.com/v6/cpu/6973346
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-21-amd64 x86_64
  Model                         ASUS System Product Name
  Motherboard                   ASUSTeK COMPUTER INC. PRIME Z690M-HZ
  BIOS                          American Megatrends Inc. 9023

处理器信息
  Name                          Intel Core i5-12500
  Topology                      1 Processor, 6 Cores, 12 Threads
  Identifier                    GenuineIntel Family 6 Model 151 Stepping 5
  Base Frequency                5.90 GHz
  L1 Instruction Cache          32.0 KB x 6
  L1 Data Cache                 48.0 KB x 6
  L2 Cache                      1.25 MB x 6
  L3 Cache                      18.0 MB

内存信息
  Size                          62.6 GB

单核测试分数：1943
多核测试分数：9460
详细结果链接：https://browser.geekbench.com/v5/cpu/22698716
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=Intel%20Core%20i5-12500
```

### BYTE UNIX Benchmarks

```shell
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: Debian-K8S: GNU/Linux
   OS: GNU/Linux -- 6.1.0-21-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.90-1 (2024-05-03)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: 12th Gen Intel(R) Core(TM) i5-12500 (5990.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 1: 12th Gen Intel(R) Core(TM) i5-12500 (5990.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 2: 12th Gen Intel(R) Core(TM) i5-12500 (5990.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 3: 12th Gen Intel(R) Core(TM) i5-12500 (5990.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 4: 12th Gen Intel(R) Core(TM) i5-12500 (5990.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 5: 12th Gen Intel(R) Core(TM) i5-12500 (5990.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 6: 12th Gen Intel(R) Core(TM) i5-12500 (5990.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 7: 12th Gen Intel(R) Core(TM) i5-12500 (5990.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 8: 12th Gen Intel(R) Core(TM) i5-12500 (5990.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 9: 12th Gen Intel(R) Core(TM) i5-12500 (5990.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 10: 12th Gen Intel(R) Core(TM) i5-12500 (5990.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 11: 12th Gen Intel(R) Core(TM) i5-12500 (5990.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   11:38:58 up 19 min,  1 user,  load average: 0.21, 0.18, 0.19; runlevel 2024-07-19

------------------------------------------------------------------------
Benchmark Run: Fri Jul 19 2024 11:38:58 - 12:06:55
12 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       72264895.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    10613.2 MWIPS (10.0 s, 7 samples)
Execl Throughput                               7170.9 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2208806.6 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          599666.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       5684332.6 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3348145.4 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 411110.7 lps   (10.0 s, 7 samples)
Process Creation                               2953.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   3442.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  11505.3 lpm   (60.0 s, 2 samples)
System Call Overhead                        3261965.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   72264895.9   6192.4
Double-Precision Whetstone                       55.0      10613.2   1929.7
Execl Throughput                                 43.0       7170.9   1667.7
File Copy 1024 bufsize 2000 maxblocks          3960.0    2208806.6   5577.8
File Copy 256 bufsize 500 maxblocks            1655.0     599666.5   3623.4
File Copy 4096 bufsize 8000 maxblocks          5800.0    5684332.6   9800.6
Pipe Throughput                               12440.0    3348145.4   2691.4
Pipe-based Context Switching                   4000.0     411110.7   1027.8
Process Creation                                126.0       2953.7    234.4
Shell Scripts (1 concurrent)                     42.4       3442.9    812.0
Shell Scripts (8 concurrent)                      6.0      11505.3  19175.6
System Call Overhead                          15000.0    3261965.9   2174.6
                                                                   ========
System Benchmarks Index Score                                        2579.2

------------------------------------------------------------------------
Benchmark Run: Fri Jul 19 2024 12:06:55 - 12:34:54
12 CPUs in system; running 12 parallel copies of tests

Dhrystone 2 using register variables      606986789.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   105842.8 MWIPS (10.0 s, 7 samples)
Execl Throughput                              43539.4 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      12188863.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         3694240.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      17765538.2 KBps  (30.0 s, 2 samples)
Pipe Throughput                            23809146.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                2666573.1 lps   (10.0 s, 7 samples)
Process Creation                             136256.9 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                 102189.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  13620.7 lpm   (60.0 s, 2 samples)
System Call Overhead                       28194471.8 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  606986789.4  52012.6
Double-Precision Whetstone                       55.0     105842.8  19244.1
Execl Throughput                                 43.0      43539.4  10125.4
File Copy 1024 bufsize 2000 maxblocks          3960.0   12188863.2  30780.0
File Copy 256 bufsize 500 maxblocks            1655.0    3694240.0  22321.7
File Copy 4096 bufsize 8000 maxblocks          5800.0   17765538.2  30630.2
Pipe Throughput                               12440.0   23809146.7  19139.2
Pipe-based Context Switching                   4000.0    2666573.1   6666.4
Process Creation                                126.0     136256.9  10814.0
Shell Scripts (1 concurrent)                     42.4     102189.9  24101.4
Shell Scripts (8 concurrent)                      6.0      13620.7  22701.2
System Call Overhead                          15000.0   28194471.8  18796.3
                                                                   ========
System Benchmarks Index Score                                       19501.9
```

### PassMark PerformanceTest Linux

```shell
12th Gen Intel Core i5-12500 (x86_64)
6 cores @ 5900 MHz  |  62.6 GiB RAM
Number of Processes: 12  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          21648
  Integer Math                     65484 Million Operations/s
  Floating Point Math              47066 Million Operations/s
  Prime Numbers                    73.2 Million Primes/s
  Sorting                          32004 Thousand Strings/s
  Encryption                       14543 MB/s
  Compression                      238101 KB/s
  CPU Single Threaded              3859 Million Operations/s
  Physics                          1497 Frames/s
  Extended Instructions (SSE)      14551 Million Matrices/s

Memory Mark:                       3633
  Database Operations              8054 Thousand Operations/s
  Memory Read Cached               34741 MB/s
  Memory Read Uncached             25803 MB/s
  Memory Write                     16511 MB/s
  Available RAM                    61733 Megabytes
  Memory Latency                   41 Nanoseconds
  Memory Threaded                  44226 MB/s
```