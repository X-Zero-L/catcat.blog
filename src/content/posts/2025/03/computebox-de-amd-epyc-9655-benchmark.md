---
title: "ComputeBox 德国 AMD Epyc 9655 测试"
published: 2025-03-29
categories: 
  - "vps"
  - "eu-server"
---

# ComputeBox 商家介绍

ComputeBox，最近的新商家，位于德国默尔恩（近汉堡）。根据商家介绍，是一家小型独立数据中心，使用100%可再生能源供电。说是自由硬件 AMD EPYC Turin 9655、DDR5 RAM、KIOXIA NVME。根据目前已知的信息，以下是他们的数据中心，循 N+1 Tier 3 标准，与主要互联网运营商（包括 Telekom、Vodafone、CoreBackbone、Arelion 和 Hurricane Electric）有多个上行链路，并且通过了 ISO 27001:2017 认证。该数据中心保证 99.98% 的正常运行时间，并拥有超过一周的备用电源。看着挺不错挺正规的，**[数据中心介绍](https://www.csn-solutions.de/unternehmen/impressionen)**。面板是全新自研的，不过倒是和v6node那个面板很接近，目前仍在开发中，不过VNC 和防火墙等功能即将推出。

**目前机器跑分喜人，但由于灵车特性，不排除后面超售可能，谨慎购买。**

**Test-IP** **: 91.108.80.108**

**官网地址** **：[ComputeBox.de](https://computebox.de/)**

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-39.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-39.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-39.jpg" alt="公司大楼鸟瞰图，绿色环境" loading="lazy">
</picture>

# 套餐

- **_Provider : ComputeBox_**

- **_Type/Plan : Launch Promo_**

- **_Processor : AMD EPYC 9655 96-Core Processor_**

- **_Num of Core :_** **_3_** **_Cores_**

- **_Memory :_** **_6_** **_GB_**

- **_Storage : 5_****_0_** **_GB NVMe_**

- **_Bandwidth :_** **_2_****_TB @ 10 Gbps IN | 10 Gbps OUT_**

- **_Location : DE_**

- **_Price : \$4.45_**

# 控制面板

相比老旧的一些面板，这个响应速度和处理速度几乎断崖式领先。下单开机不到10s机器就创建完毕。

注册没有要求审核资料，也没有Maxmind去审核风险，邮箱接验证码后填写一点基本资料就可以了。只有欧美的几个国家和美国，亚洲似乎都没有，商家说可以发工单去修正。如果是欧洲国家，机器会包含增值税。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-41.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-41.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-41.jpg" alt="选择CPU和套餐配置选项界面" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-42.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-42.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-42.jpg" alt="服务器状态监控和硬件规格详情" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/2d255ec02e44afa07e51e493eafecc30.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/2d255ec02e44afa07e51e493eafecc30.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/2d255ec02e44afa07e51e493eafecc30.jpg" alt="CPU套餐促销，特惠每月4.45欧元" loading="lazy">
</picture>

# 测评

使用Debian12模板登录的时候发现禁止使用root，需要从子用户提权。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/d15a35712abbe683ab6b462c13a567cd.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/d15a35712abbe683ab6b462c13a567cd.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/d15a35712abbe683ab6b462c13a567cd.jpg" alt="请使用用户computebox登录而非root" loading="lazy">
</picture>

## CPU

```
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          52 bits physical, 57 bits virtual
  Byte Order:             Little Endian
CPU(s):                   3
  On-line CPU(s) list:    0-2
Vendor ID:                AuthenticAMD
  Model name:             AMD EPYC 9655 96-Core Processor
    CPU family:           26
    Model:                2
    Thread(s) per core:   1
    Core(s) per socket:   3
    Socket(s):            1
    Stepping:             1
    BogoMIPS:             5199.99
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl 
                          cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lah                          f_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core invpcid_single ssbd ibrs ibpb stibp ibrs_enhanced vmmcall fsgsbase tsc_adju                          st bmi1 avx2 smep bmi2 erms invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves                           avx_vnni avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean flushbyasid pausefilter pfthreshold v_vmsave_vmload vgif avx512vbm                          i umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq la57 rdpid bus_lock_detect movdiri movdir64b fsrm avx512_vp2inters                          ect flush_l1d arch_capabilities
Virtualization features:  
  Virtualization:         AMD-V
  Hypervisor vendor:      KVM
  Virtualization type:    full
Caches (sum of all):      
  L1d:                    192 KiB (3 instances)
  L1i:                    192 KiB (3 instances)
  L2:                     1.5 MiB (3 instances)
  L3:                     48 MiB (3 instances)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-2
Vulnerabilities:          
  Gather data sampling:   Not affected
  Itlb multihit:          Not affected
  L1tf:                   Not affected
  Mds:                    Not affected
  Meltdown:               Not affected
  Mmio stale data:        Not affected
  Reg file data sampling: Not affected
  Retbleed:               Not affected
  Spec rstack overflow:   Not affected
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

## Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 14 minutes
Processor  : AMD EPYC 9655 96-Core Processor
CPU cores  : 3 @ 2599.998 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 5.8 GiB
Swap       : 0.0 KiB
Disk       : 49.1 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-32-cloud-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Stephan Rakowski, trading as CSN Solutions e.K.
ASN        : AS212341 Stephan Rakowski, trading as CSN Solutions e.K.
Host       : Moritz Moeller Workstations
Location   : Mölln, Schleswig-Holstein (SH)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 681.32 MB/s (170.3k) | 5.02 GB/s    (78.5k)
Write      | 683.12 MB/s (170.7k) | 5.05 GB/s    (78.9k)
Total      | 1.36 GB/s   (341.1k) | 10.08 GB/s  (157.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 5.92 GB/s    (11.5k) | 6.11 GB/s     (5.9k)
Write      | 6.23 GB/s    (12.1k) | 6.52 GB/s     (6.3k)
Total      | 12.15 GB/s   (23.7k) | 12.63 GB/s   (12.3k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 4.71 Gbits/sec  | 714 Mbits/sec   | 14.8 ms        
Eranium         | Amsterdam, NL (100G)      | 4.86 Gbits/sec  | 9.30 Gbits/sec  | 15.7 ms        
Uztelecom       | Tashkent, UZ (10G)        | 2.09 Gbits/sec  | 2.01 Gbits/sec  | 94.6 ms        
Leaseweb        | Singapore, SG (10G)       | 961 Mbits/sec   | 1.03 Gbits/sec  | 171 ms         
Clouvider       | Los Angeles, CA, US (10G) | 871 Mbits/sec   | 1.17 Gbits/sec  | 155 ms         
Leaseweb        | NYC, NY, US (10G)         | 1.77 Gbits/sec  | 2.21 Gbits/sec  | 84.6 ms        
Edgoo           | Sao Paulo, BR (1G)        | 716 Mbits/sec   | 926 Mbits/sec   | 191 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2897                          
Multi Core      | 7539                          
Full Test       | https://browser.geekbench.com/v6/cpu/11262024
```

## GeekBench5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-32-cloud-amd64 x86_64
  Model                         QEMU Standard PC (Q35 + ICH9, 2009)
  Motherboard                   N/A
  BIOS                          EFI Development Kit II / OVMF 3.20230228-4

处理器信息
  Name                          AMD EPYC 9655 96-Core Processor                
  Topology                      1 Processor, 3 Cores
  Identifier                    AuthenticAMD Family 26 Model 2 Stepping 1
  Base Frequency                2.60 GHz
  L1 Instruction Cache          64.0 KB x 3
  L1 Data Cache                 64.0 KB x 3
  L2 Cache                      512 KB x 3
  L3 Cache                      16.0 MB

内存信息
  Size                          5.79 GB

单核测试分数：2197
多核测试分数：5887
详细结果链接：https://browser.geekbench.com/v5/cpu/23436432
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%209655
```

## UnixBench

```
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat: GNU/Linux
   OS: GNU/Linux -- 6.1.0-32-cloud-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.129-1 (2025-03-06)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="ANSI_X3.4-1968", collate="ANSI_X3.4-1968")
   CPU 0: AMD EPYC 9655 96-Core Processor (5200.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9655 96-Core Processor (5200.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD EPYC 9655 96-Core Processor (5200.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   06:33:11 up 52 min,  3 users,  load average: 0.11, 0.07, 0.18; runlevel Mar

------------------------------------------------------------------------
Benchmark Run: Sat Mar 29 2025 06:33:11 - 07:01:06
3 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       87834313.3 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    11092.3 MWIPS (10.0 s, 7 samples)
Execl Throughput                               8089.9 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2911834.4 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          749698.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       9595443.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                             4189689.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  76014.9 lps   (10.0 s, 7 samples)
Process Creation                              13898.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  22584.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5975.8 lpm   (60.0 s, 2 samples)
System Call Overhead                        3769905.8 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   87834313.3   7526.5
Double-Precision Whetstone                       55.0      11092.3   2016.8
Execl Throughput                                 43.0       8089.9   1881.4
File Copy 1024 bufsize 2000 maxblocks          3960.0    2911834.4   7353.1
File Copy 256 bufsize 500 maxblocks            1655.0     749698.8   4529.9
File Copy 4096 bufsize 8000 maxblocks          5800.0    9595443.9  16543.9
Pipe Throughput                               12440.0    4189689.2   3367.9
Pipe-based Context Switching                   4000.0      76014.9    190.0
Process Creation                                126.0      13898.5   1103.1
Shell Scripts (1 concurrent)                     42.4      22584.7   5326.6
Shell Scripts (8 concurrent)                      6.0       5975.8   9959.7
System Call Overhead                          15000.0    3769905.8   2513.3
                                                                   ========
System Benchmarks Index Score                                        3267.5

------------------------------------------------------------------------
Benchmark Run: Sat Mar 29 2025 07:01:06 - 07:29:01
3 CPUs in system; running 3 parallel copies of tests

Dhrystone 2 using register variables      262037231.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    33254.9 MWIPS (10.0 s, 7 samples)
Execl Throughput                              15084.9 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       8419160.3 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         2230519.4 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      25156663.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                            12503136.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                1251634.9 lps   (10.0 s, 7 samples)
Process Creation                              45958.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  45277.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   6502.3 lpm   (60.0 s, 2 samples)
System Call Overhead                       11311022.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  262037231.4  22453.9
Double-Precision Whetstone                       55.0      33254.9   6046.3
Execl Throughput                                 43.0      15084.9   3508.1
File Copy 1024 bufsize 2000 maxblocks          3960.0    8419160.3  21260.5
File Copy 256 bufsize 500 maxblocks            1655.0    2230519.4  13477.5
File Copy 4096 bufsize 8000 maxblocks          5800.0   25156663.1  43373.6
Pipe Throughput                               12440.0   12503136.8  10050.8
Pipe-based Context Switching                   4000.0    1251634.9   3129.1
Process Creation                                126.0      45958.7   3647.5
Shell Scripts (1 concurrent)                     42.4      45277.7  10678.7
Shell Scripts (8 concurrent)                      6.0       6502.3  10837.2
System Call Overhead                          15000.0   11311022.7   7540.7
                                                                   ========
System Benchmarks Index Score                                        9573.3
```

## [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```
AMD EPYC 9655 96-Core Processor (x86_64)
3 cores @ 0 MHz  |  5.8 GiB RAM
Number of Processes: 3  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          10350
  Integer Math                     23019 Million Operations/s
  Floating Point Math              23021 Million Operations/s
  Prime Numbers                    90.5 Million Primes/s
  Sorting                          13578 Thousand Strings/s
  Encryption                       4797 MB/s
  Compression                      101920 KB/s
  CPU Single Threaded              3829 Million Operations/s
  Physics                          1514 Frames/s
  Extended Instructions (SSE)      8819 Million Matrices/s

Memory Mark:                       2453
  Database Operations              4511 Thousand Operations/s
  Memory Read Cached               34172 MB/s
  Memory Read Uncached             31785 MB/s
  Memory Write                     30466 MB/s
  Available RAM                    5476 Megabytes
  Memory Latency                   77 Nanoseconds
  Memory Threaded                  94907 MB/s
--------------------------------------------------------------------------
```

## WordPress BenchMark

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-49.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-49.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-49.jpg" alt="服务器性能测试结果，所有项100%优秀" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-50.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-50.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-50.jpg" alt="服务器性能测试结果，得分9.9" loading="lazy">
</picture>

## IP质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-43.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-43.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-43.jpg" alt="IP风险分析报告，含多项安全指标" loading="lazy">
</picture>

## 网络质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-44.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-44.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-44.jpg" alt="终端显示网络质量和延迟的详细信息。" loading="lazy">
</picture>

## 回程路由

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-46.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-46.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-46.jpg" alt="网络追踪报告显示多条线路延迟信息" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-47.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-47.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-47.jpg" alt="网络路由追踪数据显示多个国际节点" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-48.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-48.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-48.jpg" alt="网络路由追踪结果显示多个节点信息" loading="lazy">
</picture>

## BGP Info

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-40.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-40.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-40.jpg" alt="网络拓扑结构图，显示多个ISP连接" loading="lazy">
</picture>

# 题外话

下周开始HostBrr也将退出AMD 5代的VPS/VDS的配置促销，目前ComputeBox的价格也许能引起Hostbrr的价格调整也说不定，等HostBrr发布，我也会买台来测试。
