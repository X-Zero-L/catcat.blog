---
title: "Alwyzon 维也纳 AMD EPYC™ Genoa 9354P 测评"
published: 2023-10-23
categories: 
  - "vps"
  - "eu-server"
---

一个字，性能炸裂（gb6 单核已经和5950x持平了）。目前接触到的第三家使用到Genoa的商家，第一家是Zgo（9354P）(看上去由于技术还是什么原因，ZGO的表现远远不如Awyzon),第二家是Hetzner（但由于供应问题，一直开不出9654）。Alwyzon 其实没啥好说的，欧洲维也纳的老牌商家，在奥地利最大互联网中心 Interxion 园区内运营所有服务器。欧洲对等互联优秀。特别适合欧洲业务使用。我的评价是**100分！**

[Zgo-9354P测评](https://catcat.blog/zgocloud-%E7%B3%BB%E5%88%97%E6%B5%8B%E8%AF%84%EF%BC%88%E6%96%B0%E5%95%86%E5%AE%B6%EF%BC%8Cxtom%E6%9C%BA%E6%88%BF%EF%BC%8C%E4%BB%8B%E6%84%8F%E6%85%8E%E5%85%A5%EF%BC%89.html)

## CPU性能天梯

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/10/image-187.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/10/image-187.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/10/image-187.jpg" alt="" loading="lazy">
</picture>

## 套餐

**_Provider : Alwyzon  
Type/Plan : Virtual Server E8+  
Processor : AMD EPYC 9354P 32-Core Processor  
Num of Core : 4 个vCore  @ 3.3+ GHz  
Memory : 8 GB DDR5 RAM  
Storage : 240 GB NVMe(PCIe 4.0 Raid 10)  
Bandwidth : 50TB @ 3 Gbps IN | 3 Gbps OUT  
Location : Vienna  
Price : $16 /month_**

## 测评

### lscpu

```
root@catcat:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         52 bits physical, 57 bits virtual
  Byte Order:            Little Endian
CPU(s):                  4
  On-line CPU(s) list:   0-3
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD EPYC 9354P 32-Core Processor
    BIOS Model name:     pc-i440fx-8.0  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               17
    Thread(s) per core:  1
    Core(s) per socket:  4
    Socket(s):           1
    Stepping:            1
    BogoMIPS:            6499.99
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr ss                         e sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_                         known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline                         _timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a mis                         alignsse 3dnowprefetch osvw perfctr_core invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsba                         se tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx512dq rdseed adx smap avx512ifma 
                         clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves avx512_bf1                         6 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean pausefilter pfthr                         eshold v_vmsave_vmload vgif avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx                         512_vnni avx512_bitalg avx512_vpopcntdq la57 rdpid fsrm arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   256 KiB (4 instances)
  L1i:                   256 KiB (4 instances)
  L2:                    2 MiB (4 instances)
  L3:                    64 MiB (4 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0-3
Vulnerabilities:         
  Gather data sampling:  Not affected
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec rstack overflow:  Mitigation; safe RET
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS                          Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 7 minutes
Processor  : AMD EPYC 9354P 32-Core Processor
CPU cores  : 4 @ 3249.996 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 7.8 GiB
Swap       : 0.0 KiB
Disk       : 236.2 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-13-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Alwyzon
ASN        : AS40994 Hohl IT e.U.
Host       : Hohl IT e.U.
Location   : Vienna, Vienna (9)
Country    : Austria

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 355.34 MB/s  (88.8k) | 5.06 GB/s    (79.1k)
Write      | 356.28 MB/s  (89.0k) | 5.09 GB/s    (79.5k)
Total      | 711.62 MB/s (177.9k) | 10.15 GB/s  (158.6k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 16.60 GB/s   (32.4k) | 21.59 GB/s   (21.0k)
Write      | 17.49 GB/s   (34.1k) | 23.02 GB/s   (22.4k)
Total      | 34.10 GB/s   (66.6k) | 44.62 GB/s   (43.5k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2191                          
Multi Core      | 7142                          
Full Test       | https://browser.geekbench.com/v6/cpu/3212889

YABS completed in 5 min 24 sec
```

### [Geekbench 5](https://github.com/i-abc/GB5#geekbench-5-%E4%B8%93%E6%B5%8B)

```
系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-13-amd64 x86_64
  Model                         Alwyzon Virtual Server
  Motherboard                   N/A
  BIOS                          SeaBIOS rel-1.16.2-0-gea1b7a073390-prebuilt.qemu.org

处理器信息
  Name                          AMD EPYC 9354P 32-Core Processor               
  Topology                      1 Processor, 4 Cores
  Identifier                    AuthenticAMD Family 25 Model 17 Stepping 1
  Base Frequency                3.25 GHz
  L1 Instruction Cache          64.0 KB x 4
  L1 Data Cache                 64.0 KB x 4
  L2 Cache                      512 KB x 4
  L3 Cache                      16.0 MB

内存信息
  Size                          7.75 GB

单核测试分数：1575
多核测试分数：5862
详细结果链接：https://browser.geekbench.com/v5/cpu/21869003
```

### Bench

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 9354P 32-Core Processor
 CPU Cores          : 4 @ 3249.996 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 236.2 GB (1.4 GB Used)
 Total Mem          : 7.8 GB (353.9 MB Used)
 System uptime      : 0 days, 0 hour 16 min
 Load average       : 0.31, 0.48, 0.27
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-13-amd64
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS40994 Hohl IT e.U.
 Location           : Langenzersdorf / AT
 Region             : Lower Austria
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.6 GB/s
 I/O Speed(2nd run) : 1.7 GB/s
 I/O Speed(3rd run) : 1.7 GB/s
 I/O Speed(average) : 1706.7 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    3243.54 Mbps      2389.79 Mbps        4.14 ms     
 Los Angeles, US  524.18 Mbps       3833.04 Mbps        155.17 ms   
 Dallas, US       624.57 Mbps       3885.48 Mbps        127.18 ms   
 Montreal, CA     612.18 Mbps       893.72 Mbps         101.04 ms   
 Paris, FR        3048.20 Mbps      3981.85 Mbps        18.31 ms    
 Amsterdam, NL    2727.03 Mbps      3958.86 Mbps        18.85 ms    
 Shanghai, CN     296.84 Mbps       2640.91 Mbps        260.71 ms   
 Guangzhou, CN    197.47 Mbps       826.63 Mbps         293.77 ms   
 Mumbai, IN       660.18 Mbps       3936.83 Mbps        119.39 ms   
 Singapore, SG    58.12 Mbps        97.68 Mbps          236.46 ms   
 Tokyo, JP        105.26 Mbps       659.83 Mbps         222.54 ms   
----------------------------------------------------------------------
 Finished in        : 6 min 12 sec
 Timestamp          : 2023-10-23 14:46:39 UTC
----------------------------------------------------------------------
```

### Benchy

```
Server Insight                                  Hardware Information
--------------------- ---------------------
OS         : Debian GNU/Linux 12 (bookworm)     Model       : AMD EPYC 9354P 32-Core Processor
Location   : Netherlands                        Core        : 4 @ 3249.996 MHz
Kernel     : 6.1.0-13-amd64                     AES-NI      : ✔ Enabled
Uptime     : 0 days, 0 hrs, 24 mins, 28 secs    VM-x/AMD-V  : ✔ Enabled
Virt       : kvm                                Swap        : 0.0 KiB   

Disk & Memory Usage                             Network Information
--------------------- ---------------------
Disk (1)   : 236.1 GiB                          ASN         : AS40994   
Disk Usage : 1.4 GiB (1% Used)                  ISP         : Hohl IT e.U.
Mem        : 7.8 GiB                            IPv4        : ✔ Enabled
Mem Usage  : 0.4 GiB (5% Used)                  IPv6        : ✔ Enabled

Disk Performance Check (ext4 on /dev/sda1) (R: Read, W: Write, T: Total)
+---------------------------------------------------------------------------+
| Size | Read        | Write       | Total       |       IOPS (R,W,T)       |
+===========================================================================+
| 4k   | 342.02 MB/s | 342.92 MB/s | 684.94 MB/s | 87.5k  | 87.8k  | 175.3k |
| 64k  | 4.55 GB/s   | 4.57 GB/s   | 9.13 GB/s   | 74.6k  | 75.0k  | 149.6k |
| 512k | 15.83 GB/s  | 16.68 GB/s  | 32.51 GB/s  | 32.4k  | 34.2k  | 66.6k  |
| 1m   | 21.74 GB/s  | 23.19 GB/s  | 44.94 GB/s  | 22.3k  | 23.8k  | 46.0k  |
+---------------------------------------------------------------------------+

Network Performance Test (Region: Mixed)
+---------------------------------------------------------------------------------+
| Prot. | Provider    | Location        | Send         | Receive      | Latency   |
+---------------------------------------------------------------------------------+
| IPv4  | Airstream   | Wisconsin, US   |    1.5 Gb/s  |    1.6 Gb/s  |  113.6 ms |
|       | Uztelecom   | Tashkent, UZ    |        busy  |        busy  |   74.5 ms |
|       | Novogara    | Amsterdam, NL   |    3.6 Gb/s  |    2.3 Gb/s  |   22.4 ms |
|       | FiberBy     | Copenhagen, DK  |    2.3 Gb/s  |    3.8 Gb/s  |   22.8 ms |
+---------------------------------------------------------------------------------+
| IPv6  | Airstream   | Wisconsin, US   |    1.6 Gb/s  |    1.6 Gb/s  |  113.5 ms |
|       | Uztelecom   | Tashkent, UZ    |    2.3 Gb/s  |        busy  |   74.7 ms |
|       | Novogara    | Amsterdam, NL   |    3.3 Gb/s  |    2.3 Gb/s  |   22.4 ms |
|       | FiberBy     | Copenhagen, DK  |    1.3 Gb/s  |    3.9 Gb/s  |   24.6 ms |
+---------------------------------------------------------------------------------+

+-----------------------------------------------+
| Geekbench 6.1.0 for Linux AVX2                |
+===============================================+
| Single Core        | 2182                     |
| Multi Core         | 7136                     |
+-----------------------------------------------+
| https://browser.geekbench.com/v6/cpu/3213162  |
+-----------------------------------------------+
| Benchy time spent  | 9 Minutes 14 Seconds     |
+-----------------------------------------------+
```

### byte-unixbench 性能测试

```
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat: GNU/Linux
   OS: GNU/Linux -- 6.1.0-13-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.55-1 (2023-09-29)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9354P 32-Core Processor (6500.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9354P 32-Core Processor (6500.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD EPYC 9354P 32-Core Processor (6500.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD EPYC 9354P 32-Core Processor (6500.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   15:51:06 up 9 min,  2 users,  load average: 0.26, 0.54, 0.30; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Mon Oct 23 2023 15:51:06 - 16:19:03
4 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       58431049.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     9086.2 MWIPS (9.9 s, 7 samples)
Execl Throughput                               4497.0 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1231696.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          322168.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       4321447.5 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1416316.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  47657.7 lps   (10.0 s, 7 samples)
Process Creation                              12152.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  14354.6 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   3788.6 lpm   (60.0 s, 2 samples)
System Call Overhead                        1076636.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   58431049.9   5006.9
Double-Precision Whetstone                       55.0       9086.2   1652.0
Execl Throughput                                 43.0       4497.0   1045.8
File Copy 1024 bufsize 2000 maxblocks          3960.0    1231696.8   3110.3
File Copy 256 bufsize 500 maxblocks            1655.0     322168.8   1946.6
File Copy 4096 bufsize 8000 maxblocks          5800.0    4321447.5   7450.8
Pipe Throughput                               12440.0    1416316.2   1138.5
Pipe-based Context Switching                   4000.0      47657.7    119.1
Process Creation                                126.0      12152.7    964.5
Shell Scripts (1 concurrent)                     42.4      14354.6   3385.5
Shell Scripts (8 concurrent)                      6.0       3788.6   6314.3
System Call Overhead                          15000.0    1076636.9    717.8
                                                                   ========
System Benchmarks Index Score                                        1742.5

------------------------------------------------------------------------
Benchmark Run: Mon Oct 23 2023 16:19:03 - 16:47:00
4 CPUs in system; running 4 parallel copies of tests

Dhrystone 2 using register variables      233114284.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    36338.3 MWIPS (9.9 s, 7 samples)
Execl Throughput                              11868.6 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1383108.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          463474.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       4169751.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                             5570252.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 970624.5 lps   (10.0 s, 7 samples)
Process Creation                              39191.6 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  31584.6 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4247.9 lpm   (60.0 s, 2 samples)
System Call Overhead                        2814077.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  233114284.6  19975.5
Double-Precision Whetstone                       55.0      36338.3   6607.0
Execl Throughput                                 43.0      11868.6   2760.1
File Copy 1024 bufsize 2000 maxblocks          3960.0    1383108.8   3492.7
File Copy 256 bufsize 500 maxblocks            1655.0     463474.0   2800.4
File Copy 4096 bufsize 8000 maxblocks          5800.0    4169751.8   7189.2
Pipe Throughput                               12440.0    5570252.7   4477.7
Pipe-based Context Switching                   4000.0     970624.5   2426.6
Process Creation                                126.0      39191.6   3110.4
Shell Scripts (1 concurrent)                     42.4      31584.6   7449.2
Shell Scripts (8 concurrent)                      6.0       4247.9   7079.8
System Call Overhead                          15000.0    2814077.6   1876.1
                                                                   ========
System Benchmarks Index Score                                        4582.1

======= Script description and score comparison completed! ======= 
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```
AMD EPYC 9354P 32-Core Processor (x86_64)
4 cores @ 0 MHz  |  7.8 GiB RAM
Number of Processes: 4  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          10943
  Integer Math                     24959 Million Operations/s
  Floating Point Math              21985 Million Operations/s
  Prime Numbers                    81.9 Million Primes/s
  Sorting                          15608 Thousand Strings/s
  Encryption                       5431 MB/s
  Compression                      107009 KB/s
  CPU Single Threaded              2965 Million Operations/s
  Physics                          1455 Frames/s
  Extended Instructions (SSE)      10031 Million Matrices/s

Memory Mark:                       2683
  Database Operations              4543 Thousand Operations/s
  Memory Read Cached               28772 MB/s
  Memory Read Uncached             28102 MB/s
  Memory Write                     26593 MB/s
  Available RAM                    7462 Megabytes
  Memory Latency                   66 Nanoseconds
  Memory Threaded                  111374 MB/s
--------------------------------------------------------------------------
```

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 9354P 32-Core Processor
 CPU 核心数        : 4
 CPU 频率          : 3249.996 MHz
 CPU 缓存          : L1: 256.00 KB / L2: 2.00 MB / L3: 64.00 MB
 硬盘空间          : 1.43 GiB / 236.07 GiB
 启动盘路径        : /dev/sda1
 内存              : 186.11 MiB / 7.75 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 1 hour 0 min
 负载              : 0.13, 0.12, 0.23
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-13-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS40994 Hohl IT e.U.
 IPV4 位置         : Langenzersdorf / Lower Austria / AT
 IPV6 ASN          : AS40994 Hohl IT e.U.
 IPV6 位置         : Vienna / Vienna
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		4664 Scores
 4 线程测试(多核)得分: 		18696 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		50457.88 MB/s
 单线程写测试:		31246.37 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		75.9 MB/s (18.53 IOPS, 1.38s)		90.6 MB/s (22127 IOPS, 1.16s)
 1GB-1M Block		1.2 GB/s (1120 IOPS, 0.89s)		5.1 GB/s (4864 IOPS, 0.21s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 355.70 MB/s  (88.9k) | 4.77 GB/s    (74.6k)
Write      | 356.64 MB/s  (89.1k) | 4.80 GB/s    (75.0k)
Total      | 712.34 MB/s (178.0k) | 9.57 GB/s   (149.6k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 17.02 GB/s   (33.2k) | 23.32 GB/s   (22.7k)
Write      | 17.92 GB/s   (35.0k) | 24.88 GB/s   (24.2k)
Total      | 34.95 GB/s   (68.2k) | 48.21 GB/s   (47.0k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 匈牙利布达佩斯(BUD02S30)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 捷克 布拉格(PRG03S08)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：奥地利
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：奥地利
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：奥地利区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：奥地利区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: AT)
 HotStar:				No
 Disney+:				No
 Netflix:				Yes (Region: AT)
 YouTube Premium:			Failed
 Amazon Prime Video:			Yes (Region: AT)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				Budapest 
 Netflix Preferred CDN:			Associated with [RETN Limited] in [Budapest ]
 Spotify Registration:			Yes (Region: AT)
 Steam Currency:			EUR
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: AT)
 Netflix:				Originals Only
 YouTube Premium:			Failed
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Prague 
 Netflix Preferred CDN:			Associated with [RETN Limited] in [Budapest ]
 Spotify Registration:			Yes (Region: AT)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【AT】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):business①  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes②   No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测88 ③
Google搜索可行性：YES
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: AT 城市: Langenzersdorf 服务商: AS40994 Hohl IT e.U.
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    测试超时
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
8.94 ms 	AS40994 奥地利 下奥地利州 朗根策斯多夫 alwyzon.com
11.50 ms 	AS40994 奥地利 维也纳州 维也纳 alwyzon.com
0.41 ms 	AS40994 奥地利 维也纳州 维也纳 alwyzon.com
0.46 ms 	AS40994 奥地利 维也纳州 维也纳 alwyzon.com
0.65 ms 	AS9002 奥地利 维也纳州 维也纳 retn.net
112.80 ms 	AS9002 [RETN-BACKBONE] 德国 黑森州 美因河畔法兰克福 retn.net
14.05 ms 	AS9002 德国 黑森州 美茵河畔法兰克福 RETN-CT-Peer retn.net
381.57 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
287.69 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
287.76 ms 	AS4134 [APNIC-AP] 中国 广东省 深圳市 chinatelecom.com.cn 电信
291.65 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
11.31 ms 	AS40994 奥地利 下奥地利州 朗根策斯多夫 alwyzon.com
6.55 ms 	AS40994 奥地利 维也纳州 维也纳 alwyzon.com
0.36 ms 	AS40994 奥地利 维也纳州 维也纳 alwyzon.com
0.86 ms 	AS174 [COGENT-149] 奥地利 维也纳州 维也纳 cogentco.com
6.89 ms 	AS174 [COGENT-BONE] 德国 巴伐利亚州 慕尼黑 cogentco.com
11.95 ms 	AS174 [COGENT-BONE] 德国 黑森州 美因河畔法兰克福 cogentco.com
21.42 ms 	AS174 [COGENT-BONE] 法国 法兰西岛大区 巴黎 cogentco.com
98.24 ms 	AS174 [COGENT-BONE] 美国 华盛顿哥伦比亚特区 华盛顿 cogentco.com
113.57 ms 	AS174 [COGENT-BONE] 美国 佐治亚州 亚历山大 cogentco.com
197.08 ms 	AS174 [COGENT-BONE] 美国 德克萨斯州 休斯顿 cogentco.com
144.17 ms 	AS174 [COGENT-BONE] 美国 得克萨斯州 埃尔帕索 cogentco.com
198.15 ms 	AS174 [COGENT-BONE] 美国 亚利桑那州 凤凰城 cogentco.com
164.25 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 洛杉矶 cogentco.com
163.80 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 洛杉矶 cogentco.com
381.38 ms 	AS174 美国 加利福尼亚州 洛杉矶 cogentco.com
389.15 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
394.25 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
391.21 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
399.29 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
391.99 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
7.86 ms 	AS40994 奥地利 下奥地利州 朗根策斯多夫 alwyzon.com
146.84 ms 	AS40994 奥地利 维也纳州 维也纳 alwyzon.com
0.39 ms 	AS40994 奥地利 维也纳州 维也纳 alwyzon.com
0.37 ms 	AS40994 奥地利 维也纳州 维也纳 alwyzon.com
0.49 ms 	AS9002 奥地利 维也纳州 维也纳 retn.net
19.17 ms 	AS9002 [RETN-BACKBONE] 德国 黑森州 美因河畔法兰克福 retn.net
231.53 ms 	AS58453 [CMI-INT] 德国 黑森州 美茵河畔法兰克福 cmi.chinamobile.com 移动
205.91 ms 	AS58453 [CMI-INT] 中国 北京市 cmi.chinamobile.com 移动
329.62 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
338.65 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
295.92 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
341.49 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
256.87 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
297.76 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 932.37 Mbps	 919.81 Mbps	 0.38	  0.0%
法兰克福	 3469.07 Mbps	 3953.27 Mbps	 12.30	  0.0%
新加坡		 426.91 Mbps	 3186.25 Mbps	 149.90	  0.0%
联通湖南5G	 310.52 Mbps	 2.39 Mbps	 266.10	  NULL
联通Fuzhou	 292.12 Mbps	 1738.74 Mbps	 267.11	  0.0%
电信天津	 0.00 Mbps	 2317.58 Mbps	 236.87	  NULL
电信Nanjing5G	 386.15 Mbps	 1893.35 Mbps	 237.31	  0.0%
------------------------------------------------------------------------
 总共花费      : 5 分 48 秒
 时间          : Mon Oct 23 15:30:02 UTC 2023
------------------------------------------------------------------------
```

### Misaka延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/10/image-188.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/10/image-188.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/10/image-188.jpg" alt="" loading="lazy">
</picture>
