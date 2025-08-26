---
tags: [eu-server]
title: "HostBrr 德国 AMD 9950X 测评"
published: 2024-09-08
---

HostBrr于今天也开启了9950X的销售，这次机房不在Hetzner，网络相比ntt和hz有了不小的进步。目前提供VPS，VDS两种产品销售，作为新发售的CPU，性价比不错，想尝鲜的可以玩玩。

## 什么是VDS

HostBrr 目前对于VDS定义是 1 vCore = 1 CPU 线程。vCore 不固定，但任何时候都不会配置超过 30 个 vCore。这实际上会随时提供专用一个 vCore 的性能，而留下 2 个 vCore 可用于系统后台任务。 即：你需要购买2vcpu=1真实核心。

## 测试套餐

- **_Provider : Hostbrr_**

- **_Type/Plan :_** **_9950X-12GBrr - VDS_**

- **_Processor :_** **_AMD Ryzen 9 9950X 16-Core Processor_**

- **_Num of Core :_** **_2_** **_Cores_**

- **_Memory : 1_****_2_** **_GB_**

- **_Storage : 15_****_0_** **_GB NVMe_**

- **_Bandwidth : 40TB @ 10 Gbps IN | 10 Gbps OUT_**

- **_Location : DE_**

- **_Price :_** **_\$18.00_**

- **_Order : [Order now!](https://my.hostbrr.com/order/config/index/9950XP/?group_id=61&pricing_id=1037&currency=EUR&a=MzQw)_**（含 AFF）

## 购买地址

### VPS（促销代码 **9950XBRR**）

| **内存** | **Ryzen 9950X** | 固态硬盘 | **Bandwidth @ 1****0****Gbps** | **IPv4 \| IPv6** | 月付价格 | 年付价格 | 购买 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1GB | **1** 9950X Cores | 15GB NVMe | 3TB | 1 IPv4 \| 1 /64 | **€3.9/m** | **€29.25/y** | [购买链接](https://my.hostbrr.com/order/main/packages/9950X/?group_id=60&currency=EUR&a=MzQw) |
| 2GB | 1 9950X Cores | 30GB NVMe | 5TB | 1 IPv4 \| 1 /64 | **€****5****/m** | **€37.5/y** | [购买链接](https://my.hostbrr.com/order/main/packages/9950X/?group_id=60&currency=EUR&a=MzQw) |
| 4GB | 2 9950X Cores | 60GB NVMe | 10TB | 1 IPv4 \| 1 /64 | **€9.****9****/m** | **€74.99/y** | [购买链接](https://my.hostbrr.com/order/main/packages/9950X/?group_id=60&currency=EUR&a=MzQw) |
| 6GB | 3 9950X Cores | 100GB NVMe | 15TB | 1 IPv4 \| 1 /64 | **\$14.99/m** | **€112.46**/y | [购买链接](https://my.hostbrr.com/order/main/packages/9950X/?group_id=60&currency=EUR&a=MzQw) |

### VDS

| **内存** | **Ryzen 995****0****X** | 固态硬盘 | **Bandwidth @** **1****0****Gbps** | **IPv4 \| IPv6** | 月付价格 | 年付价格 | 购买 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6GB | **1** 9950X Cores | 75GB NVMe | 20TB | 1 IPv4 \| 1 /64 | **€****8****/m** | **€8****0****/y** | [购买链接](https://my.hostbrr.com/order/config/index/9950XP/?group_id=61&pricing_id=1028&currency=EUR&a=MzQw) |
| 2GB | 1 9950X Cores | 30GB NVMe | 5TB | 1 IPv4 \| 1 /64 | **€1****6****/m** | **€16****0****/y** | [购买链接](https://my.hostbrr.com/order/config/index/9950XP/?group_id=61&pricing_id=1037&currency=EUR&a=MzQw) |

## 测评

### lscpu

```shell
root@catcat:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  2
  On-line CPU(s) list:   0,1
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD Ryzen 9 9950X 16-Core Processor
    BIOS Model name:     pc-i440fx-7.2  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          26
    Model:               68
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           2
    Stepping:            0
    BogoMIPS:            8583.79
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1                         gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt tsc_dea                         dline_timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfct                         r_core ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx512dq rdseed adx smap avx512if                         ma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves avx_vnni avx512_bf16 clzero xsaveerptr wbnoinv                         d arat npt lbrv nrip_save tsc_scale vmcb_clean pausefilter pfthreshold v_vmsave_vmload vgif avx512vbmi umip pku ospke avx512_vbmi2                          gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid bus_lock_detect movdiri movdir64b fsrm avx512_vp2intersect 
                         arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   96 KiB (2 instances)
  L1i:                   64 KiB (2 instances)
  L2:                    2 MiB (2 instances)
  L3:                    128 MiB (2 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0,1
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
```

### Yabs

```shell
Sun Sep  8 02:07:30 PM CST 2024

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 7 minutes
Processor  : AMD Ryzen 9 9950X 16-Core Processor
CPU cores  : 2 @ 4291.896 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 11.6 GiB
Swap       : 1024.0 MiB
Disk       : 149.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Harmony Solutions GmbH
ASN        : Unknown
Host       : Harmony Solutions GmbH
Location   : Kelkheim, Hesse (HE)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 709.00 MB/s (177.2k) | 5.36 GB/s    (83.8k)
Write      | 710.87 MB/s (177.7k) | 5.39 GB/s    (84.2k)
Total      | 1.41 GB/s   (354.9k) | 10.75 GB/s  (168.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.71 GB/s     (9.2k) | 4.57 GB/s     (4.4k)
Write      | 4.96 GB/s     (9.7k) | 4.87 GB/s     (4.7k)
Total      | 9.68 GB/s    (18.9k) | 9.44 GB/s     (9.2k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 8.91 Gbits/sec  | 9.06 Gbits/sec  | 12.1 ms        
Eranium         | Amsterdam, NL (100G)      | 9.33 Gbits/sec  | 8.89 Gbits/sec  | 7.30 ms        
Uztelecom       | Tashkent, UZ (10G)        | busy            | 2.00 Gbits/sec  | 93.7 ms        
Leaseweb        | Singapore, SG (10G)       | 1.05 Gbits/sec  | 1.09 Gbits/sec  | 163 ms         
Clouvider       | Los Angeles, CA, US (10G) | 917 Mbits/sec   | 1.20 Gbits/sec  | 142 ms         
Leaseweb        | NYC, NY, US (10G)         | 2.21 Gbits/sec  | 2.30 Gbits/sec  | 82.3 ms        
Edgoo           | Sao Paulo, BR (1G)        | 875 Mbits/sec   | 888 Mbits/sec   | 187 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 8.00 Gbits/sec  | 8.88 Gbits/sec  | 11.9 ms        
Eranium         | Amsterdam, NL (100G)      | 9.11 Gbits/sec  | 8.89 Gbits/sec  | 7.29 ms        
Uztelecom       | Tashkent, UZ (10G)        | 1.46 Gbits/sec  | 1.99 Gbits/sec  | 93.1 ms        
Leaseweb        | Singapore, SG (10G)       | 1.03 Gbits/sec  | 1.08 Gbits/sec  | 163 ms         
Clouvider       | Los Angeles, CA, US (10G) | 1.21 Gbits/sec  | 1.26 Gbits/sec  | 142 ms         
Leaseweb        | NYC, NY, US (10G)         | 2.22 Gbits/sec  | 2.28 Gbits/sec  | 81.7 ms        
Edgoo           | Sao Paulo, BR (1G)        | 915 Mbits/sec   | 931 Mbits/sec   | 189 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 3363                          
Multi Core      | 5890                          
Full Test       | https://browser.geekbench.com/v6/cpu/7673872

YABS completed in 10 min 56 sec
```

### GeekBench5

```shell
系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.2-debian-1.16.2-1

处理器信息
  Name                          AMD Ryzen 9 9950X 16-Core Processor            
  Topology                      2 Processors, 2 Cores
  Identifier                    AuthenticAMD Family 26 Model 68 Stepping 0
  Base Frequency                4.29 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 48.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      64.0 MB

内存信息
  Size                          11.6 GB

单核测试分数：2542
多核测试分数：4330
详细结果链接：https://browser.geekbench.com/v5/cpu/22848095
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%209950X
```

### UnixBench

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat.blog: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD Ryzen 9 9950X 16-Core Processor (8583.8 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD Ryzen 9 9950X 16-Core Processor (8583.8 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   14:45:47 up 45 min,  2 users,  load average: 0.18, 0.42, 0.25; runlevel 2024-09-08

------------------------------------------------------------------------
Benchmark Run: Sun Sep 08 2024 14:45:47 - 15:14:05
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables      107703452.3 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    13887.9 MWIPS (10.0 s, 7 samples)
Execl Throughput                               8472.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2314507.1 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          570917.6 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       8028730.5 KBps  (30.0 s, 2 samples)
Pipe Throughput                             4117328.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 160288.5 lps   (10.0 s, 7 samples)
Process Creation                              21713.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  25734.5 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5030.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        3784936.3 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  107703452.3   9229.1
Double-Precision Whetstone                       55.0      13887.9   2525.1
Execl Throughput                                 43.0       8472.1   1970.3
File Copy 1024 bufsize 2000 maxblocks          3960.0    2314507.1   5844.7
File Copy 256 bufsize 500 maxblocks            1655.0     570917.6   3449.7
File Copy 4096 bufsize 8000 maxblocks          5800.0    8028730.5  13842.6
Pipe Throughput                               12440.0    4117328.7   3309.7
Pipe-based Context Switching                   4000.0     160288.5    400.7
Process Creation                                126.0      21713.2   1723.3
Shell Scripts (1 concurrent)                     42.4      25734.5   6069.5
Shell Scripts (8 concurrent)                      6.0       5030.2   8383.6
System Call Overhead                          15000.0    3784936.3   2523.3
                                                                   ========
System Benchmarks Index Score                                        3531.3

------------------------------------------------------------------------
Benchmark Run: Sun Sep 08 2024 15:14:05 - 15:42:23
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      211040693.0 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    27134.3 MWIPS (10.0 s, 7 samples)
Execl Throughput                               8104.5 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       4426946.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         1140051.6 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      11737680.2 KBps  (30.0 s, 2 samples)
Pipe Throughput                             8176172.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 710984.2 lps   (10.0 s, 7 samples)
Process Creation                              49459.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  39600.5 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4291.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        7370624.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  211040693.0  18084.0
Double-Precision Whetstone                       55.0      27134.3   4933.5
Execl Throughput                                 43.0       8104.5   1884.8
File Copy 1024 bufsize 2000 maxblocks          3960.0    4426946.9  11179.2
File Copy 256 bufsize 500 maxblocks            1655.0    1140051.6   6888.5
File Copy 4096 bufsize 8000 maxblocks          5800.0   11737680.2  20237.4
Pipe Throughput                               12440.0    8176172.8   6572.5
Pipe-based Context Switching                   4000.0     710984.2   1777.5
Process Creation                                126.0      49459.8   3925.4
Shell Scripts (1 concurrent)                     42.4      39600.5   9339.7
Shell Scripts (8 concurrent)                      6.0       4291.7   7152.8
System Call Overhead                          15000.0    7370624.7   4913.7
                                                                   ========
System Benchmarks Index Score                                        6304.8
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD Ryzen 9 9950X 16-Core Processor (x86_64)
2 cores @ 0 MHz  |  11.6 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          8461
  Integer Math                     18970 Million Operations/s
  Floating Point Math              18639 Million Operations/s
  Prime Numbers                    69.4 Million Primes/s
  Sorting                          11121 Thousand Strings/s
  Encryption                       3896 MB/s
  Compression                      81921 KB/s
  CPU Single Threaded              4729 Million Operations/s
  Physics                          1218 Frames/s
  Extended Instructions (SSE)      6770 Million Matrices/s

Memory Mark:                       2824
  Database Operations              3471 Thousand Operations/s
  Memory Read Cached               42555 MB/s
  Memory Read Uncached             39973 MB/s
  Memory Write                     19900 MB/s
  Available RAM                    10331 Megabytes
  Memory Latency                   65 Nanoseconds
  Memory Threaded                  44919 MB/s
--------------------------------------------------------------------------
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 9950X 16-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 4291.896 MHz
 CPU 缓存          : L1: 96.00 KB / L2: 2.00 MB / L3: 128.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 668.37 MiB / 11.65 GiB
 Swap              : 0 KiB / 1024.00 MiB
 硬盘空间          : 4.38 GiB / 149.82 GiB
 启动盘路径        : /dev/vda3
 系统在线时间      : 0 days, 1 hour 44 min
 负载              : 3.64, 8.97, 5.76
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS214902 Philip Fjaera trading as PFWeb Solutions
 IPV4 位置         : Bad Soden am Taunus / Hesse / DE
 IPV6 ASN          : AS58212 Dataforest GmbH
 IPV6 位置         : Frankfurt am Main / DE-HE
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          6671 Scores
 2 线程测试(多核)得分:          13604 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          106287.38 MB/s
 单线程写测试:          40175.59 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         177 MB/s (43.13 IOPS, 0.59s))           227 MB/s (55329 IOPS, 0.46s)
 1GB-1M Block           2.8 GB/s (2677 IOPS, 0.37s)             8.9 GB/s (8465 IOPS, 0.12s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 642.05 MB/s (160.5k) | 4.79 GB/s    (74.9k)
Write      | 643.75 MB/s (160.9k) | 4.82 GB/s    (75.3k)
Total      | 1.28 GB/s   (321.4k) | 9.61 GB/s   (150.3k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.30 GB/s     (8.4k) | 4.24 GB/s     (4.1k)
Write      | 4.53 GB/s     (8.8k) | 4.52 GB/s     (4.4k)
Total      | 8.84 GB/s    (17.2k) | 8.77 GB/s     (8.5k)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：德国
[IPV6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：德国
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: IAD(IAD30S49)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA16S31)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：DE 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：DE 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: DE)
 Disney+:                               Yes (Region: DE)
 Netflix:                               Yes (Region: DE)
 YouTube Premium:                       Yes (Region: DE)
 Amazon Prime Video:                    Yes (Region: DE)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  Yes (Region: DE)
 Instagram Licensed Audio:              No
 OneTrust Region:                       DE [Unknown]
 iQyi Oversea Region:                   DE
 Bing Region:                           DE
 YouTube CDN:                           Washington DC
 Netflix Preferred CDN:                 Zurich
 ChatGPT:                               Yes
 Google Gemini:                         No
 Wikipedia Editability:                 Yes
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        EUR
 ---Forum---
 Reddit:                                Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  IPv6 Is Not Currently Supported
 Disney+:                               IPv6 Is Not Currently Supported
 Netflix:                               Yes (Region: DE)
 YouTube Premium:                       Yes (Region: DE)
 Amazon Prime Video:                    IPv6 Is Not Currently Supported
 TVBAnywhere+:                          IPv6 Is Not Currently Supported
 Spotify Registration:                  Yes (Region: DE)
 Instagram Licensed Audio:              No
 OneTrust Region:                       DE [Unknown]
 iQyi Oversea Region:                   IPv6 Is Not Currently Supported
 Bing Region:                           DE
 YouTube CDN:                           Frankfurt
 Netflix Preferred CDN:                 Vienna
 ChatGPT:                               Failed (Network Connection)
 Google Gemini:                         No
 Wikipedia Editability:                 Yes
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:                                IPv6 Is Not Currently Supported
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【DE】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 68 [8] 
VPN得分(越低越好): 17 [8] 
代理得分(越低越好): 46 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 33 [8] 
欺诈得分(越低越好): 65 [E] 0 [1]
滥用得分(越低越好): 0 [3] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2] 无记录数: 94 [2]  
安全信息:
使用类型: unknown [C] hosting [0 7 9] DataCenter/WebHosting/Transit [3]
公司类型: hosting [A] business [0 7]
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 6 A] No [1 5 8 C]
是否移动设备: Yes [E] No [5 A C]
是否代理: Yes [5 6 E] No [0 1 4 7 8 9 A C D]
是否VPN: Yes [7 D E] No [0 1 6 A C]
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A E] 
是否匿名: No [1 8] Yes [6 7 D]
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 312(Total_Check) 0(Clean) 5(Blacklisted) 81(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.012 (Elevated) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [A]
公司类型: hosting [A]
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A B D] 
是否VPN: No [1 A D] 
是否Tor: No [1 3 A B D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A B] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D] 
是否中继: No [D] 
是否Bogon: No [A D] 
DNS-黑名单: 312(Total_Check) 0(Clean) 0(Blacklisted) 312(Other) 
Google搜索可行性：YES
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
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
Sina      ✔     ✘     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  电信163    [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 移动CMIN2  [精品线路] 
广州电信 58.60.188.222   检测不到回程路由节点的IP地址
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.36 ms         AS214902 德国 黑森州 法兰克福
0.47 ms         AS58212 德国 黑森州 美因河畔法兰克福 dataforest.net
0.58 ms         AS199524 [LU-GCORELABS] 美国 弗吉尼亚州 阿什本 gcore.com
0.75 ms         AS1299 [ARELION-NET] 德国 黑森州 美因河畔法兰克福 arelion.com
1.22 ms         AS1299 [ARELION-NET] 德国 黑森州 美因河畔法兰克福 arelion.com
7.84 ms         AS1299 [ARELION-NET] 荷兰 北荷兰省 阿姆斯特丹 arelion.com
9.24 ms         AS1299 [ARELION-NET] 瑞典 斯德哥尔摩省 斯德哥尔摩 arelion.com
255.84 ms       AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
262.50 ms       AS4134 [CHINANET-GD] 中国 广东 深圳 www.chinatelecom.com.cn 电信
265.64 ms       AS4134 中国 广东 深圳 福田区 www.chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.26 ms         AS214902 德国 黑森州 法兰克福
0.61 ms         AS58212 德国 黑森州 美因河畔法兰克福 dataforest.net
0.58 ms         AS199524 [LU-GCORELABS] 美国 弗吉尼亚州 阿什本 gcore.com
0.77 ms         * RFC1918
0.69 ms         * RFC1918
0.89 ms         AS1299 [ARELION-NET] 德国 黑森州 美因河畔法兰克福 arelion.com
165.06 ms       AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
194.52 ms       AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
169.31 ms       AS17816 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
195.09 ms       AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
173.76 ms       AS17623 [APNIC-AP] 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.34 ms         AS214902 德国 黑森州 法兰克福
1.96 ms         AS58212 德国 黑森州 美因河畔法兰克福 dataforest.net
0.69 ms         AS199524 [LU-GCORELABS] 美国 弗吉尼亚州 阿什本 gcore.com
1.19 ms         AS1299 [ARELION-NET] 德国 黑森州 美因河畔法兰克福 arelion.com
15.22 ms        AS1299 [ARELION-NET] 德国 黑森 美因河畔法兰克福 Telia-CM-Cust arelion.com
14.29 ms        AS58453 [CMI-INT] 德国 黑森 美茵河畔法兰克福 cmi.chinamobile.com 移动
221.27 ms       AS58453 [CMI-INT] 德国 黑森 美因河畔法兰克福 cmi.chinamobile.com 移动
222.94 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
223.99 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
220.80 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
227.56 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
221.81 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
220.47 ms       AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    3883.41 Mbps    1888.27 Mbps    1.21     0.0%
法兰克福         9437.65 Mbps    9422.17 Mbps    0.64     0.0%
洛杉矶           620.49 Mbps     2419.32 Mbps    145.85   0.0%
联通上海5G       282.34 Mbps     12.18 Mbps      158.03   0.0%
联通WuXi         694.12 Mbps     7789.64 Mbps    176.13   0.0%
电信Zhenjiang5G  123.06 Mbps     2919.30 Mbps    263.49   NULL
------------------------------------------------------------------------
 总共花费      : 4 分 59 秒
 时间          : Sun Sep  8 15:48:55 CST 2024
------------------------------------------------------------------------
```

### IP 检测

#### IPv4

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/image-1.jpg" alt="" loading="lazy">
</picture>

### WordPress BenchMark

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/image-2.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/image-3.jpg" alt="" loading="lazy">
</picture>

### CheckHost

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/5db3431d4cd0fea16968e0e8be5e2892.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/5db3431d4cd0fea16968e0e8be5e2892.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/5db3431d4cd0fea16968e0e8be5e2892.jpg" alt="" loading="lazy">
</picture>