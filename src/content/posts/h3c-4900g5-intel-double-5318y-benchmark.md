---
tags: [大陆服务器]
title: "自组 H3C 4900G5 Intel 双路 5318Y 测试"
published: 2025-06-23
---

**业务扩容需要，买了几台，做个赛博测试。品牌机，懂得都懂哈。**

## 配置

- **CPU ： 2\* Intel(R) Xeon(R) Gold 5318Y CPU**

- **MEM ：12 x 32 GB DDR4-3200MT/s** **Hynix** **HMA84GR7DJR4N-XN**

- **DISK ：480G SSSTC ER2-GD480** + **4 \* 3.84 T SAMSUNG MZQLB3T8HALS-00007**

- **MOTHERBOARD : H3C RS35M2C16SB 0302A65F**

- **BIOS: New H3C Technologies Co., Ltd. H3C UniServer R4900 G5**

### 测评

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 57 minutes
Processor  : Intel(R) Xeon(R) Gold 5318Y CPU @ 2.10GHz
CPU cores  : 96 @ 800.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 377.3 GiB
Swap       : 0.0 KiB
Disk       : 7.1 TiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.8.12-9-pve
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ❌ Offline

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 465.41 MB/s (116.3k) | 1.77 GB/s    (27.7k)
Write      | 466.64 MB/s (116.6k) | 1.78 GB/s    (27.8k)
Total      | 932.06 MB/s (233.0k) | 3.56 GB/s    (55.6k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.80 GB/s     (3.5k) | 1.92 GB/s     (1.8k)
Write      | 1.90 GB/s     (3.7k) | 2.05 GB/s     (2.0k)
Total      | 3.70 GB/s     (7.2k) | 3.97 GB/s     (3.8k)
```

### GeekBench5

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-20.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-20.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-20.jpg" alt="image" loading="lazy">
</picture>

### GeekBench6

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-21.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-21.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-21.jpg" alt="image" loading="lazy">
</picture>

### UniBench

```shell
------------------------------------------------------------------------
Benchmark Run: Mon Jun 23 2025 17:57:42 - 18:25:46
96 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       37731747.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     5778.5 MWIPS (9.9 s, 7 samples)
Execl Throughput                               3598.4 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1061186.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          281744.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3320546.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1747185.1 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 132640.8 lps   (10.0 s, 7 samples)
Process Creation                               7084.1 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  10897.8 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   9137.8 lpm   (60.0 s, 2 samples)
System Call Overhead                        1431165.4 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   37731747.9   3233.2
Double-Precision Whetstone                       55.0       5778.5   1050.6
Execl Throughput                                 43.0       3598.4    836.8
File Copy 1024 bufsize 2000 maxblocks          3960.0    1061186.5   2679.8
File Copy 256 bufsize 500 maxblocks            1655.0     281744.0   1702.4
File Copy 4096 bufsize 8000 maxblocks          5800.0    3320546.9   5725.1
Pipe Throughput                               12440.0    1747185.1   1404.5
Pipe-based Context Switching                   4000.0     132640.8    331.6
Process Creation                                126.0       7084.1    562.2
Shell Scripts (1 concurrent)                     42.4      10897.8   2570.2
Shell Scripts (8 concurrent)                      6.0       9137.8  15229.6
System Call Overhead                          15000.0    1431165.4    954.1
                                                                   ========
System Benchmarks Index Score                                        1731.5

------------------------------------------------------------------------
Benchmark Run: Mon Jun 23 2025 18:25:46 - 18:54:04
96 CPUs in system; running 96 parallel copies of tests

Dhrystone 2 using register variables     1942250052.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   502401.8 MWIPS (9.9 s, 7 samples)
Execl Throughput                              31730.2 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      47026411.6 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks        14138470.4 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      80646990.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                            91970999.1 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                7463422.4 lps   (10.0 s, 7 samples)
Process Creation                             116652.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                 163630.0 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  22374.9 lpm   (60.1 s, 2 samples)
System Call Overhead                       85921923.3 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0 1942250052.6 166431.0
Double-Precision Whetstone                       55.0     502401.8  91345.8
Execl Throughput                                 43.0      31730.2   7379.1
File Copy 1024 bufsize 2000 maxblocks          3960.0   47026411.6 118753.6
File Copy 256 bufsize 500 maxblocks            1655.0   14138470.4  85428.8
File Copy 4096 bufsize 8000 maxblocks          5800.0   80646990.0 139046.5
Pipe Throughput                               12440.0   91970999.1  73931.7
Pipe-based Context Switching                   4000.0    7463422.4  18658.6
Process Creation                                126.0     116652.8   9258.2
Shell Scripts (1 concurrent)                     42.4     163630.0  38592.0
Shell Scripts (8 concurrent)                      6.0      22374.9  37291.6
System Call Overhead                          15000.0   85921923.3  57281.3
                                                                   ========
System Benchmarks Index Score                                       48433.0
```