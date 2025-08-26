---
tags: [eu-server]
title: "Hostbrr AMD EPYC 9655 测评"
published: 2025-04-18
---

# 前言

时隔 Hostbrr 二周年，终于开启了新系列的销售（AMD EPYC 9655），包含和一周年一样的[闪购](https://lowendtalk.com/discussion/204684/hostbrr-two-year-anniversary-deals-amd-epyc-turin-block-storage-flash-deals/p1)优惠。有需要的可以自行关注。还是老样子，机器在dataforest，同时提供块存储，最大20T，每T是2欧元。相较于[ComputeBox](https://catcat.blog/computebox-de-amd-epyc-9655-benchmark.html) ，带宽给的比较多，但是价格也略贵了点。

## 套餐

| 套餐 | CPU | 内存 | 带宽 | 流量 | 价格 (每月)**有AFF** |
| --- | --- | --- | --- | --- | --- |
| MINI-EPYC Anniversary | 1 vCore AMD EPYC 9655 | 4 GB DDR5 ECC RAM | 10 Gbps | 10 TB Bandwidth | [€3.00 EUR](https://my.hostbrr.com/order/config/index/anniversary/?group_id=59&pricing_id=1196&a=MzQw) |
| NICE-EPYC Anniversary | 2 vCore AMD EPYC 9655 | 6 GB DDR5 ECC RAM | 10 Gbps | 20 TB Bandwidth | [€5.00 EUR](https://my.hostbrr.com/order/config/index/anniversary/?group_id=59&pricing_id=1198&a=MzQw) |
| EPIC-EPYC Anniversary | 4 vCore AMD EPYC 9655 | 16 GB DDR5 ECC RAM | 10 Gbps | 40 TB Bandwidth | [€9.00 EUR](https://my.hostbrr.com/order/config/index/anniversary/?group_id=59&pricing_id=1203&a=MzQw) |

- **_Provider : Hostbrr_**

- **_Type/Plan : EPIC-EPYC Anniversary_**

- **_Processor : AMD EPYC 9655 96-Core Processor_**

- **_Num of Core : 4_** **_Cores_**

- **_Memory : 1_****_6_** **_GB_**

- **_Storage : 16_****_0_** **_GB NVMe_**

- **_Bandwidth : 40_****_TB @ 10 Gbps IN | 10 Gbps OUT_**

- **_Location : DE_**

- **_Price : \$11_**

## 测评

### CPU

```shell
root@catcat:~/scripts# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         52 bits physical, 57 bits virtual
  Byte Order:            Little Endian
CPU(s):                  4
  On-line CPU(s) list:   0-3
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD EPYC 9655 96-Core Processor
    BIOS Model name:     pc-i440fx-7.2  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          26
    Model:               2
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           4
    Stepping:            1
    BogoMIPS:            5200.00
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_g
                         ood nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c 
                         rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core invpcid_single ssbd ibrs ibpb stibp vmmcal
                         l fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl
                          xsaveopt xsavec xgetbv1 xsaves avx_vnni avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean pausefilter pfthreshold
                          v_vmsave_vmload vgif avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq la57 rdpid movdiri movd
                         ir64b fsrm avx512_vp2intersect arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   192 KiB (4 instances)
  L1i:                   128 KiB (4 instances)
  L2:                    4 MiB (4 instances)
  L3:                    1.5 GiB (4 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0-3
Vulnerabilities:         
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
root@catcat:~/scripts# 
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 13 minutes
Processor  : AMD EPYC 9655 96-Core Processor
CPU cores  : 4 @ 2600.002 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 15.6 GiB
Swap       : 1024.0 MiB
Disk       : 159.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : dataforest GmbH
ASN        : AS58212 dataforest GmbH
Host       : dataforest GmbH
Location   : Kriftel, Hesse (HE)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 488.54 MB/s (122.1k) | 3.68 GB/s    (57.5k)
Write      | 489.83 MB/s (122.4k) | 3.70 GB/s    (57.8k)
Total      | 978.37 MB/s (244.5k) | 7.38 GB/s   (115.3k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 685.76 MB/s   (1.3k) | 4.49 GB/s     (4.3k)
Write      | 722.19 MB/s   (1.4k) | 4.78 GB/s     (4.6k)
Total      | 1.40 GB/s     (2.7k) | 9.27 GB/s     (9.0k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 6.81 Gbits/sec  | 5.97 Gbits/sec  | 13.9 ms        
Eranium         | Amsterdam, NL (100G)      | 9.36 Gbits/sec  | 8.66 Gbits/sec  | 7.69 ms        
Uztelecom       | Tashkent, UZ (10G)        | 1.43 Gbits/sec  | 1.50 Gbits/sec  | 91.4 ms        
Leaseweb        | Singapore, SG (10G)       | 499 Mbits/sec   | 1.10 Gbits/sec  | 161 ms         
Clouvider       | Los Angeles, CA, US (10G) | 956 Mbits/sec   | 995 Mbits/sec   | 149 ms         
Leaseweb        | NYC, NY, US (10G)         | 2.07 Gbits/sec  | 1.97 Gbits/sec  | 86.4 ms        
Edgoo           | Sao Paulo, BR (1G)        | 879 Mbits/sec   | 665 Mbits/sec   | 188 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 6.52 Gbits/sec  | 5.87 Gbits/sec  | 13.9 ms        
Eranium         | Amsterdam, NL (100G)      | 8.29 Gbits/sec  | 14.5 Gbits/sec  | 7.64 ms        
Uztelecom       | Tashkent, UZ (10G)        | 14.1 Mbits/sec  | 1.72 Gbits/sec  | 90.4 ms        
Leaseweb        | Singapore, SG (10G)       | 833 Mbits/sec   | 1.10 Gbits/sec  | -- 
Clouvider       | Los Angeles, CA, US (10G) | 1.16 Gbits/sec  | 1.25 Gbits/sec  | 149 ms         
Leaseweb        | NYC, NY, US (10G)         | 2.12 Gbits/sec  | 2.24 Gbits/sec  | 83.6 ms        
Edgoo           | Sao Paulo, BR (1G)        | 898 Mbits/sec   | 624 Mbits/sec   | 188 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2843                          
Multi Core      | 8971                          
Full Test       | https://browser.geekbench.com/v6/cpu/11569747
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.2-debian-1.16.2-1

处理器信息
  Name                          AMD EPYC 9655 96-Core Processor                
  Topology                      4 Processors, 4 Cores
  Identifier                    AuthenticAMD Family 26 Model 2 Stepping 1
  Base Frequency                2.60 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 48.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      384 MB

内存信息
  Size                          15.6 GB

单核测试分数：1796
多核测试分数：6605
详细结果链接：https://browser.geekbench.com/v5/cpu/23482496
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%209655
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD EPYC 9655 96-Core Processor (x86_64)
4 cores @ 0 MHz  |  15.6 GiB RAM
Number of Processes: 4  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          13651
  Integer Math                     30796 Million Operations/s
  Floating Point Math              30814 Million Operations/s
  Prime Numbers                    121 Million Primes/s
  Sorting                          18025 Thousand Strings/s
  Encryption                       6374 MB/s
  Compression                      135768 KB/s
  CPU Single Threaded              3837 Million Operations/s
  Physics                          2033 Frames/s
  Extended Instructions (SSE)      11901 Million Matrices/s

Memory Mark:                       2565
  Database Operations              6062 Thousand Operations/s
  Memory Read Cached               34115 MB/s
  Memory Read Uncached             31626 MB/s
  Memory Write                     25638 MB/s
  Available RAM                    14506 Megabytes
  Memory Latency                   85 Nanoseconds
  Memory Threaded                  127675 MB/s
--------------------------------------------------------------------------
```

### UnixBench

```shell
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9655 96-Core Processor (5200.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9655 96-Core Processor (5200.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD EPYC 9655 96-Core Processor (5200.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD EPYC 9655 96-Core Processor (5200.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   15:57:35 up  1:19,  2 users,  load average: 0.21, 0.05, 0.06; runlevel 2025-04-18

------------------------------------------------------------------------
Benchmark Run: Fri Apr 18 2025 15:57:35 - 16:25:31
4 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       88148615.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    11071.9 MWIPS (10.0 s, 7 samples)
Execl Throughput                               7383.2 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1904581.4 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          484757.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       6968637.3 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3350920.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 181980.3 lps   (10.0 s, 7 samples)
Process Creation                               9623.9 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   8255.6 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5854.5 lpm   (60.0 s, 2 samples)
System Call Overhead                        3048128.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   88148615.4   7553.4
Double-Precision Whetstone                       55.0      11071.9   2013.1
Execl Throughput                                 43.0       7383.2   1717.0
File Copy 1024 bufsize 2000 maxblocks          3960.0    1904581.4   4809.5
File Copy 256 bufsize 500 maxblocks            1655.0     484757.8   2929.1
File Copy 4096 bufsize 8000 maxblocks          5800.0    6968637.3  12014.9
Pipe Throughput                               12440.0    3350920.7   2693.7
Pipe-based Context Switching                   4000.0     181980.3    455.0
Process Creation                                126.0       9623.9    763.8
Shell Scripts (1 concurrent)                     42.4       8255.6   1947.1
Shell Scripts (8 concurrent)                      6.0       5854.5   9757.6
System Call Overhead                          15000.0    3048128.9   2032.1
                                                                   ========
System Benchmarks Index Score                                        2714.0

------------------------------------------------------------------------
Benchmark Run: Fri Apr 18 2025 16:25:31 - 16:53:28
4 CPUs in system; running 4 parallel copies of tests

Dhrystone 2 using register variables      349054606.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    44341.5 MWIPS (10.0 s, 7 samples)
Execl Throughput                              15961.4 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       7382311.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         1933223.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      24514369.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                            13353957.9 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                1188394.8 lps   (10.0 s, 7 samples)
Process Creation                              49987.6 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  47257.0 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   6849.4 lpm   (60.0 s, 2 samples)
System Call Overhead                       12142661.2 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  349054606.9  29910.4
Double-Precision Whetstone                       55.0      44341.5   8062.1
Execl Throughput                                 43.0      15961.4   3712.0
File Copy 1024 bufsize 2000 maxblocks          3960.0    7382311.8  18642.2
File Copy 256 bufsize 500 maxblocks            1655.0    1933223.9  11681.1
File Copy 4096 bufsize 8000 maxblocks          5800.0   24514369.9  42266.2
Pipe Throughput                               12440.0   13353957.9  10734.7
Pipe-based Context Switching                   4000.0    1188394.8   2971.0
Process Creation                                126.0      49987.6   3967.3
Shell Scripts (1 concurrent)                     42.4      47257.0  11145.5
Shell Scripts (8 concurrent)                      6.0       6849.4  11415.7
System Call Overhead                          15000.0   12142661.2   8095.1
                                                                   ========
System Benchmarks Index Score                                       10059.4
```

### IP质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image.jpg" alt="IP质量报告，风险评估，德国位置数据。" loading="lazy">
</picture>

### 网络质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-1.jpg" alt="网络质量检测报告，显示延迟和连接信息" loading="lazy">
</picture>

### 三网路由

#### 北京

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-2.jpg" alt="网络线路追踪示例，显示不同路径和延迟。" loading="lazy">
</picture>

#### 上海

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-3.jpg" alt="网络路由跟踪显示通往上海的路径。" loading="lazy">
</picture>

#### 广东

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-4.jpg" alt="江苏到广东三种网络路径跟踪结果" loading="lazy">
</picture>