---
tags: [us-server]
title: "Fiberstate 洛杉矶万兆 AMD 9950x 测评"
published: 2025-05-06
---

\[admonition title="警告" color="red"\]**由于温度过高，散热不佳，我已退款，见文末的温度对比，此外这款机器商家明确说了无法提供其他散热方式**\[/admonition\]

**We have the server running in the exact specification and cooling Supermicro designed it to run with in this chassis. There is nothing additional we can add to it to aid in cooling.** 

**Fiberstate 是最近两年在 [LowEndTalk](https://lowendtalk.com/) 兴起的 商家，以极高性价比的杜甫而闻名，目前经营 盐城湖 洛杉矶两个地区（2025年下班会拓展纽约，打通欧洲），其中盐城湖是直营机房，rehouse改建的，机房驻场是可以的，工单一叫，回复之后马上几分钟就开始处理了，工作速度快，也不拖沓的。洛杉矶应该是租用的别的机柜，且洛杉矶本次促销属于预配置，无法修改，洛杉矶只能4TB单盘。盐湖城可以自定义，但是洛杉矶网络明显优于盐湖城，看个人需要。**

**PS:需要注意的是，本次促销的机器使用了**

**Supermicro H13SRD-F 主板，MicroCloud A+ Server AS -3015MR-H8TNR 机箱，此为8子星机箱，目前看存在无法跑满9950X的情况（目前观察最高只能5.5Ghz）。****目前可以确认的是存在散热缺陷，CPU温度非常高。**

**Supermicro H13SRD-F主板规格，M.2插槽为PCIe 5.0 x2，正好与Samsung 990 EVO Plus的设计匹配，因此链路宽度为x2是正常现象，Samsung 990 EVO Plus这款SSD是三星的高性能NVMe固态硬盘，采用PCIe 4.0 x4和PCIe 5.0 x2混合设计。它在PCIe 4.0接口下以4条通道运行，在PCIe 5.0接口下则以2条通道运行。**

## Looking Glass

- Salt Lake City Looking Glass: [https://slc.lg.fiberstate.com/](https://www.nodeseek.com/jump?to=https%3A%2F%2Fslc.lg.fiberstate.com%2F)

- Los Angeles Looking Glass: [https://lax.lg.fiberstate.com/](https://www.nodeseek.com/jump?to=https%3A%2F%2Flax.lg.fiberstate.com%2F)

## 配置

- **CPU ： AMD Ryzen 9 9950X**

- **MEM ：4 x 32 GB DDR5-3600MT/s** **CT32G48C40U5.C16A1**

- **DISK ：4001GB Samsung SSD 990 EVO Plus 4TB + 62GB USB DISK 3.0**

- **Network : 2 x Intel 82599ES 10-Gigabit SFI/SFP+**

- **MOTHERBOARD : Supermicro H13SRD-F v1.00**

```shell
System Information

  PROCESSOR:              AMD Ryzen 9 9950X 16-Core @ 8.18GHz
    Core Count:           16                                            
    Thread Count:         32                                            
    Extensions:           SSE 4.2                                       
                          + AVX512_VNNI                                 
                          + AVX512CD                                    
                          + AVX2                                        
                          + AVX                                         
                          + RDRAND                                      
                          + FSGSBASE                                    
    Cache Size:           64 MB                                         
    Microcode:            0xb404023                                     
    Core Family:          Family 26 Model 68                            
    Scaling Driver:       amd-pstate-epp performance (EPP: performance) 

  GRAPHICS:               ASPEED 2GB
    Screen:               1024x768         

  MOTHERBOARD:            Supermicro H13SRD-F v1.00
    BIOS Version:         1.4                                   
    Chipset:              AMD Device 14d8                       
    Network:              2 x Intel 82599ES 10-Gigabit SFI/SFP+ 

  MEMORY:                 4 x 32 GB DDR5-3600MT/s

  DISK:                   4001GB Samsung SSD 990 EVO Plus 4TB + 62GB USB DISK 3.0
    File-System:          ext4                          
    Mount Options:        errors=remount-ro relatime rw 
    Disk Scheduler:       NONE                          
    Disk Details:         Block Size: 4096              

  OPERATING SYSTEM:       Debian GNU/Linux 12
    Kernel:               6.8.4-2-pve (x86_64)                                                                                                           
    Compiler:             GCC 12.2.0                                                                                                                     
    Security:             gather_data_sampling: Not affected                                                                                             
                          + itlb_multihit: Not affected                                                                                                  
                          + l1tf: Not affected                                                                                                           
                          + mds: Not affected                                                                                                            
                          + meltdown: Not affected                                                                                                       
                          + mmio_stale_data: Not affected                                                                                                
                          + reg_file_data_sampling: Not affected                                                                                         
                          + retbleed: Not affected                                                                                                       
                          + spec_rstack_overflow: Not affected                                                                                           
                          + spec_store_bypass: Mitigation of SSB disabled via prctl                                                                      
                          + spectre_v1: Mitigation of usercopy/swapgs barriers and __user pointer sanitization                                           
                          + spectre_v2: Mitigation of Enhanced / Automatic IBRS IBPB: conditional STIBP: always-on RSB filling PBRSB-eIBRS: Not affected 
                          + srbds: Not affected                                                                                                          
                          + tsx_async_abort: Not affected                                                                                                
```

## 测评

### CPU

```shell
root@pve:~# lscpu
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          48 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   32
  On-line CPU(s) list:    0-31
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         Advanced Micro Devices, Inc.
  Model name:             AMD Ryzen 9 9950X 16-Core Processor
    BIOS Model name:      AMD Ryzen 9 9950X 16-Core Processor             Unknown CPU @ 4.3GHz
    BIOS CPU family:      107
    CPU family:           26
    Model:                68
    Thread(s) per core:   2
    Core(s) per socket:   16
    Socket(s):            1
    Stepping:             0
    CPU(s) scaling MHz:   64%
    CPU max MHz:          8180.0000
    CPU min MHz:          600.0000
    BogoMIPS:             8583.31
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good a
                          md_lbr_v2 nopl nonstop_tsc cpuid extd_apicid aperfmperf rapl pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand lahf_lm cmp_legacy
                           svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce topoext perfctr_core perfctr_nb bpext perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pstate 
                          ssbd mba perfmon_v2 ibrs ibpb stibp ibrs_enhanced vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid cqm rdt_a avx512f avx512dq rdseed adx smap avx512ifma clfl
                          ushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves cqm_llc cqm_occup_llc cqm_mbm_total cqm_mbm_local user_shstk avx_vnni avx512_bf16 clzero irp
                          erf xsaveerptr rdpru wbnoinvd cppc arat npt lbrv svm_lock nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold avic v_vmsave_vmload vgif x2av
                          ic v_spec_ctrl vnmi avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid bus_lock_detect movdiri movdir64b overfl
                          ow_recov succor smca fsrm avx512_vp2intersect flush_l1d
Virtualization features:  
  Virtualization:         AMD-V
Caches (sum of all):      
  L1d:                    768 KiB (16 instances)
  L1i:                    512 KiB (16 instances)
  L2:                     16 MiB (16 instances)
  L3:                     64 MiB (2 instances)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-31
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
  Spectre v2:             Mitigation; Enhanced / Automatic IBRS, IBPB conditional, STIBP always-on, RSB filling, PBRSB-eIBRS Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
root@pve:~# 
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 25 minutes
Processor  : AMD Ryzen 9 9950X 16-Core Processor
CPU cores  : 32 @ 5229.091 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 123.4 GiB
Swap       : 8.0 GiB
Disk       : 94.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.8.4-2-pve
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : FiberState, LLC
ASN        : AS26042 FiberState, LLC
Host       : Fiberstate LLC
Location   : Draper, Utah (UT)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/mapper/pve-root):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.64 GB/s   (411.9k) | 1.16 GB/s    (18.2k)
Write      | 1.65 GB/s   (413.0k) | 1.17 GB/s    (18.3k)
Total      | 3.30 GB/s   (825.0k) | 2.34 GB/s    (36.6k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.49 GB/s     (2.9k) | 1.51 GB/s     (1.4k)
Write      | 1.57 GB/s     (3.0k) | 1.61 GB/s     (1.5k)
Total      | 3.06 GB/s     (5.9k) | 3.12 GB/s     (3.0k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 1.33 Gbits/sec  | 1.72 Gbits/sec  | 126 ms         
Eranium         | Amsterdam, NL (100G)      | 1.16 Gbits/sec  | 1.73 Gbits/sec  | 128 ms         
Uztelecom       | Tashkent, UZ (10G)        | 756 Mbits/sec   | 841 Mbits/sec   | 244 ms         
Leaseweb        | Singapore, SG (10G)       | 570 Mbits/sec   | 938 Mbits/sec   | 230 ms         
Clouvider       | Los Angeles, CA, US (10G) | 7.43 Gbits/sec  | 6.38 Gbits/sec  | 0.301 ms       
Leaseweb        | NYC, NY, US (10G)         | 2.68 Gbits/sec  | 4.35 Gbits/sec  | 57.1 ms        
Edgoo           | Sao Paulo, BR (1G)        | 706 Mbits/sec   | 1.17 Gbits/sec  | 171 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 3226                          
Multi Core      | 17957                         
Full Test       | https://browser.geekbench.com/v6/cpu/11830731

YABS completed in 7 min 41 sec
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.8.4-2-pve x86_64
  Model                         Supermicro AS -3015MR-H8TNR
  Motherboard                   Supermicro H13SRD-F
  BIOS                          American Megatrends International, LLC. 1.4

处理器信息
  Name                          AMD Ryzen 9 9950X 16-Core Processor            
  Topology                      1 Processor, 16 Cores, 32 Threads
  Identifier                    AuthenticAMD Family 26 Model 68 Stepping 0
  Base Frequency                8.18 GHz
  L1 Instruction Cache          32.0 KB x 16
  L1 Data Cache                 48.0 KB x 16
  L2 Cache                      1.00 MB x 16
  L3 Cache                      32.0 MB x 2

内存信息
  Size                          123 GB

单核测试分数：2412
多核测试分数：22261
详细结果链接：https://browser.geekbench.com/v5/cpu/23519732
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%209950X
```

### Bench

```shell
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2024-11-11
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 9950X 16-Core Processor
 CPU Cores          : 32 @ 600.000 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 102.9 GB (5.3 GB Used)
 Total Mem          : 123.4 GB (3.0 GB Used)
 Total Swap         : 8.0 GB (0 Used)
 System uptime      : 0 days, 3 hour 1 min
 Load average       : 0.00, 0.31, 5.97
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.8.4-2-pve
 TCP CC             : cubic
 Virtualization     : Dedicated
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS26042 FiberState, LLC
 Location           : Los Angeles / US
 Region             : California
----------------------------------------------------------------------
 I/O Speed(1st run) : 2.8 GB/s
 I/O Speed(2nd run) : 2.6 GB/s
 I/O Speed(3rd run) : 3.0 GB/s
 I/O Speed(average) : 2867.2 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    6367.26 Mbps      9315.68 Mbps        13.91 ms    
 Paris, FR        708.10 Mbps       7895.82 Mbps        129.36 ms   
 Amsterdam, NL    600.73 Mbps       3283.61 Mbps        126.40 ms   
 Shanghai, CN     239.02 Mbps       6095.52 Mbps        195.49 ms   
 Singapore, SG    330.32 Mbps       6204.44 Mbps        169.75 ms   
 Tokyo, JP        734.62 Mbps       8446.52 Mbps        118.03 ms   
----------------------------------------------------------------------
 Finished in        : 3 min 17 sec
 Timestamp          : 2025-05-05 19:38:20 PDT
----------------------------------------------------------------------
```

### IP解锁

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/05/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/05/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/05/image.jpg" alt="网络安全风险评估和IP信息显示" loading="lazy">
</picture>

```shell
============[ Multination ]============
 Dazn:                                  Yes (Region: US)
 Disney+:                               Yes (Region: US)
 Netflix:                               Yes (Region: US)
 YouTube Premium:                       Yes (Region: US)
 Amazon Prime Video:                    Yes (Region: US)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  No
 OneTrust Region:                       US [Utah]
 iQyi Oversea Region:                   US
 Bing Region:                           US
 Apple Region:                          US
 YouTube CDN:                           Los Angeles, CA
 Netflix Preferred CDN:                 Los Angeles, CA
 ChatGPT:                               Yes
 Google Gemini:                         Yes (Region: USA)
 Claude:                                No
 Wikipedia Editability:                 Yes
 Google Play Store:                     United States 
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        USD
 ---Forum---
 Reddit:                                Yes
 ---Game---
 SD Gundam G Generation Eternal:        Yes
=======================================
===========[ North America ]===========
 Paramount+:                            Failed (Error: 406)
 Discovery+:                            Yes (Region: US)
 Acorn TV:                              Yes
 BritBox:                               Yes
 SonyLiv:                               Yes (Region: US)
 NBA TV:                                Yes
 TLC GO:                                Yes (Region: US)
 Shudder:                               Yes
 Fubo TV:                               Yes (Region:US)
 Tubi TV:                               Yes
 Pluto TV:                              Yes
 KOCOWA:                                Yes
 AMC+:                                  Yes (Region: USA)
 MathsSpot Roblox:                      Failed (Error: FailureUnauthorized)
 ---US---
 FOX:                                   Yes
 Hulu:                                  Yes
 NFL+:                                  Yes
 ESPN+:[Sponsored by Jam]               Yes
 MGM+:                                  No
 Starz:                                 Failed (Error: PAGE ERROR)
 Philo:                                 Yes
 FXNOW:                                 Yes
 HBO Max:                               Yes (Region: US)
 Crackle:                               Yes
 CW TV:                                 Yes
 A&E TV:                                Yes
 NBC TV:                                Yes
 Sling TV:                              Yes
 encoreTVB:                             Yes
 Peacock TV:                            Yes
 Popcornflix:                           Failed (Network Connection)
 Crunchyroll:                           Yes
 Directv Stream:                        Yes
 Meta AI:                               No
 ---CA---
 HotStar:                               No (Discontinued in the US)
 CBC Gem:                               No
 Crave:                                 No
=======================================
```

### UnixBench

```shell
------------------------------------------------------------------------
Benchmark Run: Mon May 05 2025 18:03:56 - 18:32:15
32 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables      103429451.8 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    13481.4 MWIPS (10.0 s, 7 samples)
Execl Throughput                              10210.7 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       3310260.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          870510.2 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      11187945.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                             5095741.9 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 450221.2 lps   (10.0 s, 7 samples)
Process Creation                              13723.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  28986.2 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  21790.9 lpm   (60.0 s, 2 samples)
System Call Overhead                        4144112.5 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  103429451.8   8862.8
Double-Precision Whetstone                       55.0      13481.4   2451.2
Execl Throughput                                 43.0      10210.7   2374.6
File Copy 1024 bufsize 2000 maxblocks          3960.0    3310260.9   8359.2
File Copy 256 bufsize 500 maxblocks            1655.0     870510.2   5259.9
File Copy 4096 bufsize 8000 maxblocks          5800.0   11187945.8  19289.6
Pipe Throughput                               12440.0    5095741.9   4096.3
Pipe-based Context Switching                   4000.0     450221.2   1125.6
Process Creation                                126.0      13723.3   1089.1
Shell Scripts (1 concurrent)                     42.4      28986.2   6836.4
Shell Scripts (8 concurrent)                      6.0      21790.9  36318.1
System Call Overhead                          15000.0    4144112.5   2762.7
                                                                   ========
System Benchmarks Index Score                                        4803.0

------------------------------------------------------------------------
Benchmark Run: Mon May 05 2025 18:32:15 - 19:00:14
32 CPUs in system; running 32 parallel copies of tests

Dhrystone 2 using register variables     1656117699.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   350666.2 MWIPS (10.1 s, 7 samples)
Execl Throughput                              67033.2 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      30947432.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks        15386597.2 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      14988780.5 KBps  (30.0 s, 2 samples)
Pipe Throughput                            98901506.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                8988285.5 lps   (10.0 s, 7 samples)
Process Creation                             167558.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                 291668.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  38147.6 lpm   (60.0 s, 2 samples)
System Call Overhead                       95558930.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0 1656117699.4 141912.4
Double-Precision Whetstone                       55.0     350666.2  63757.5
Execl Throughput                                 43.0      67033.2  15589.1
File Copy 1024 bufsize 2000 maxblocks          3960.0   30947432.9  78150.1
File Copy 256 bufsize 500 maxblocks            1655.0   15386597.2  92970.4
File Copy 4096 bufsize 8000 maxblocks          5800.0   14988780.5  25842.7
Pipe Throughput                               12440.0   98901506.3  79502.8
Pipe-based Context Switching                   4000.0    8988285.5  22470.7
Process Creation                                126.0     167558.3  13298.3
Shell Scripts (1 concurrent)                     42.4     291668.4  68789.7
Shell Scripts (8 concurrent)                      6.0      38147.6  63579.3
System Call Overhead                          15000.0   95558930.9  63706.0
                                                                   ========
System Benchmarks Index Score                                       48638.9
```

### PassMark PerformanceTest Linux

```shell
AMD Ryzen 9 9950X 16-Core Processor (x86_64)
16 cores @ 8180 MHz  |  123.4 GiB RAM
Number of Processes: 32  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          57648
  Integer Math                     246002 Million Operations/s
  Floating Point Math              142440 Million Operations/s
  Prime Numbers                    256 Million Primes/s
  Sorting                          70769 Thousand Strings/s
  Encryption                       44488 MB/s
  Compression                      766920 KB/s
  CPU Single Threaded              4290 Million Operations/s
  Physics                          2662 Frames/s
  Extended Instructions (SSE)      55570 Million Matrices/s

Memory Mark:                       3324
  Database Operations              13948 Thousand Operations/s
  Memory Read Cached               40422 MB/s
  Memory Read Uncached             38967 MB/s
  Memory Write                     20812 MB/s
  Available RAM                    119075 Megabytes
  Memory Latency                   61 Nanoseconds
  Memory Threaded                  51337 MB/s
--------------------------------------------------------------------------
```

### 融合怪Go

```shell
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD Ryzen 9 9950X 16-Core Processor @5243.427 MHz
 CPU 数量            : 32 Physical CPU(s)
 CPU 缓存            : L1: 1 MB / L2: 16 MB / L3: 64 MB
 GPU 型号            : ASPEED Graphics Family
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ❌ Disabled
 内存                : 3.10 GB / 123.42 GB
 气球驱动            : ❌ Undetected
 内核页合并          : ❌ Undetected
 虚拟内存 Swap       : 0.00 MB / 8.00 GB
 硬盘空间            : 5.51 GB / 93.93 GB
 启动盘路径          : /dev/mapper/pve-root
 系统                : debian 12.5 [x86_64] 
 内核                : 6.8.4-2-pve
 系统在线时间        : 0 days, 03 hours, 31 minutes
 时区                : PDT
 负载                : 0.00 / 0.00 / 0.85
 虚拟化架构          : Dedicated (No visible signage)
 NAT类型             : Full Cone
 TCP加速方式         : cubic
 IPV4 ASN            : AS26042 Fiberstate, LLC
 IPV4 Location       : Draper / Utah / United States
 IPV4 Active IPs     : 94/256 (subnet /24) 471552/16777216 (prefix /8)
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   6432.00
32 线程测试(多核)得分:  107656.49
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 37806.64 MB/s(39.64K IOPS, 5s)
单线程顺序读速度: 97162.82 MB/s(101.88K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       1.62 GB/s(406.2k)       1.63 GB/s(407.3k)       3.25 GB/s(813.5k)       
/root         64k      1.17 GB/s(18.3k)        1.17 GB/s(18.4k)        2.34 GB/s(36.6k)        
/root         512k     1.47 GB/s(2876)         1.55 GB/s(3029)         3.02 GB/s(5905)         
/root         1m       1.65 GB/s(1608)         1.76 GB/s(1715)         3.40 GB/s(3323)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: NUQ(NUQ04S38)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前IPv4出口所在地区即将开通DisneyPlus
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Apple                     YES (Region: USA)
BingSearch                YES (Region: US)
Claude                    YES
Dazn                      YES (Region: US)
Disney+                   YES (Region: US)
Gemini                    YES (Region: USA)
GoogleSearch              YES
Google Play Store         YES (Region: US)
IQiYi                     YES (Region: US)
Instagram Licensed Audio  YES
KOCOWA                    YES
MetaAI                    Unknown: get www.meta.ai failed with code: 200
Netflix                   YES (Region: US)
Netflix CDN               US
OneTrust                  YES (Region: US UTAH)
ChatGPT                   YES (Region: US)
Paramount+                YES
Amazon Prime Video        YES (Region: US)
Reddit                    YES
SonyLiv                   YES (Region: US)
Sora                      YES (Region: US)
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: US)
TVBAnywhere+              YES (Region: US)
TikTok                    YES (Region: US)
Viu.com                   YES
Wikipedia Editability     YES
YouTube Region            YES (Region: US)
YouTube CDN               NUQ
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 9 [8] 
VPN得分(越低越好): 97 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 77 [8]
欺诈得分(越低越好): 0 [1 E] 
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0031 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] consumer [9] business [8] isp [A] unknown [C] hosting [0 7]
公司类型: isp [7 A] business [0]
是否云提供商: Yes [7 D] 
是否数据中心: No [0 5 6 8 A C] Yes [1]
是否移动设备: No [5 A C] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 A C D E] 
是否VPN: No [0 1 6 7 A C D E] 
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 313(Total_Check) 0(Clean) 9(Blacklisted) 23(Other) 
--------------------------------------邮件端口检测--------------------------------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✘     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✔     ✔     ✔     ✘     ✔     ✘    
Sohu      ✔     ✔     ✔     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✔     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✔     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✔     ✘    
AOL       ✔     ✔     ✘     ✘     ✘     ✘    
GMX       ✔     ✘     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✔     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京移动v4 221.179.155.161          移动CMI    [普通线路] 
上海电信v4 202.96.209.133           电信163    [普通线路] 
上海移动v4 211.136.112.200          移动CMI    [普通线路] 
广州电信v4 58.60.188.222            电信163    [普通线路] 
成都电信v4 61.139.2.69              电信163    [普通线路] 
北京电信v6 2400:89c0:1053:3::69     检测不到回程路由节点的IPV6地址
北京联通v6 2400:89c0:1013:3::54     检测不到回程路由节点的IPV6地址
北京移动v6 2409:8c00:8421:1303::55  检测不到回程路由节点的IPV6地址
上海电信v6 240e:e1:aa00:4000::24    检测不到回程路由节点的IPV6地址
上海联通v6 2408:80f1:21:5003::a     检测不到回程路由节点的IPV6地址
上海移动v6 2409:8c1e:75b0:3003::26  检测不到回程路由节点的IPV6地址
广州电信v6 240e:97c:2f:3000::44     检测不到回程路由节点的IP地址
广州联通v6 2408:8756:f50:1001::c    检测不到回程路由节点的IP地址
广州移动v6 2409:8c54:871:1001::12   检测不到回程路由节点的IPV6地址
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 45.88.193.28 - 9.67ms - 🐠 (Relay) → Misaka.LAX
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.35 ms      AS26042                       美国, fiberstate.com 
1.19 ms      AS3257                        美国, 加利福尼亚, 洛杉矶, gtt.net 
298.11 ms    AS3257                        美国, gtt.net 
206.94 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
156.72 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
164.09 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
212.41 ms    AS134774   [CHINANET-GD]      中国, 广东, 深圳, chinatelecom.cn  电信
*
161.09 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.50 ms      AS26042                       美国, fiberstate.com 
1.28 ms      AS3257                        美国, 加利福尼亚, 洛杉矶, gtt.net 
7.93 ms      AS3257     [GTT-BACKBONE]     美国, 加利福尼亚, 圣何塞, gtt.net 
147.41 ms    AS3257                        美国, 加利福尼亚, 圣何塞, gtt.net 
272.57 ms    AS4837     [CU169-BACKBONE]   中国, 上海, chinaunicom.cn  联通
184.62 ms    AS4837     [CU169-BACKBONE]   中国, 上海, chinaunicom.cn  联通
*
*
186.15 ms    AS17816    [APNIC-AP]         中国, 广东省, 广州市, chinaunicom.cn 
189.77 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
185.94 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.32 ms      AS26042                       美国, fiberstate.com 
0.64 ms      AS6453     [CCBB-LVW]         美国, 加利福尼亚州, 洛杉矶, tatacommunications.com 
*
0.75 ms      AS6453                        美国, 加利福尼亚, 洛杉矶, tatacommunications.com 
0.62 ms      AS58453    [CMI-INT]          美国, 加利福尼亚, 洛杉矶, cmi.chinamobile.com  移动
176.44 ms    AS58453    [CMI-INT]          中国, 广东, 广州, cmi.chinamobile.com  移动
179.95 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
183.28 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
174.41 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
192.23 ms    AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   6372.47 Mbps    9397.08 Mbps    13.87 ms        Not available.  
洛杉矶          7938.97 Mbps    6097.03 Mbps    0.35 ms         0.0%            
日本东京        196.36 Mbps     1746.82 Mbps    115.46 ms       1.0%            
联通上海5G      532.89 Mbps     5956.26 Mbps    171.02 ms       0.0%            
电信Suzhou5G    515.19 Mbps     1602.58 Mbps    137.48 ms       Not available.  
移动Chengdu     231.40 Mbps     4872.45 Mbps    205.09 ms       Not available.  
----------------------------------------------------------------------------------
花费          : 8 分 47 秒
时间          : Mon May 5 20:13:22 PDT 2025
----------------------------------------------------------------------------------
```

### NetQuality

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/05/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/05/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/05/image-1.jpg" alt="网络检测报告，显示延迟和连接信息。" loading="lazy">
</picture>

### 机器设备

#### 主板

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/05/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/05/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/05/image-2.jpg" alt="服务器主板电路板，绿色背景" loading="lazy">
</picture>

#### 机箱

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/05/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/05/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/05/image-3.jpg" alt="高性能机架式服务器，前面板多硬盘插槽" loading="lazy">
</picture>

## 散热对比

### 有负载的5950X

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/05/d9c9d61adfb55a4d5f0a6e9f7190fe93.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/05/d9c9d61adfb55a4d5f0a6e9f7190fe93.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/05/d9c9d61adfb55a4d5f0a6e9f7190fe93.jpg" alt="Ryzen 9 5950X CPU性能监控屏幕截图" loading="lazy">
</picture>

### 自组的液冷9950X

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/05/78a0aa722322049f44a27cb350df71ee.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/05/78a0aa722322049f44a27cb350df71ee.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/05/78a0aa722322049f44a27cb350df71ee.jpg" alt="Ryzen 9 9950X CPU使用情况图示" loading="lazy">
</picture>

### Fiberstate 9950X

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/05/image-4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/05/image-4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/05/image-4.jpg" alt="CPU使用情况显示，温度73摄氏度。" loading="lazy">
</picture>

## 总结

**总的来说，虽然是8子星的机器，就价格和网络而言，发挥到90%-95%的水平已经是相当不错的水平。如果不是极致的性能散热需求，130刀的售价能享受到 9950x 128G内存 4T的NVME 还有10G的洛杉矶带宽已经赢麻了。**