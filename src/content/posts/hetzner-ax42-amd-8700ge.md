---
tags: [eu-server]
title: "Hetzner AX42 AMD 8700GE 测评"
published: 2024-07-01
---

- 为了隆重庆祝欧洲足球锦标赛，Hetzner 开启了他们的世界杯促销。AX42 当红系列和他们的托管服务器产品线全部免安装费，活动持续到 2024 年 7 月 12 日。AMD Ryzen™ 7 PRO 8700GE 拥有Radeon 780M Graphics 核显，可以作为编解码机器。由于是 Hetzner 刚上新不久的新产品线，硬盘很大概率都是新的，有需要的人不要错过哦。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/07/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/07/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/07/image.jpg" alt="" loading="lazy">
</picture>

## 套餐

_**Provider : Hetzner  
Type/Plan : AX42  
Processor : AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics  
Num of Core : 8 个 vCore  @ 3.5+ GHz  
Memory : 64 GB DDR5 RAM  
Storage : 512 GB NVMe\*2(PCIe 4.0)  
Bandwidth : Unlimited @ 1 Gbps IN | 1 Gbps OUT  
Location : FI  
Price : € 46 /month**_

## 测评

### CPU

```shell
root@rescue ~ # lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  16
  On-line CPU(s) list:   0-15
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        Advanced Micro Devices, Inc.
  Model name:            AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics
    BIOS Model name:     AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics  Unknown CPU @ 3.6GHz
    BIOS CPU family:     107
    CPU family:          25
    Model:               117
    Thread(s) per core:  2
    Core(s) per socket:  8
    Socket(s):           1
    Stepping:            2
    CPU(s) scaling MHz:  33%
    CPU max MHz:         6136.0000
    CPU min MHz:         400.0000
    BogoMIPS:            7299.88
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx
                          mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good amd_lbr_v2 nopl nonstop_tsc cpuid extd_apicid aperfmpe
                         rf rapl pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand lahf_lm cmp_l
                         egacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce topoext perfctr_core p
                         erfctr_nb bpext perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba perfmon_v2 ibrs ibpb stibp ibrs_enhance
                         d vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid cqm rdt_a avx512f avx512dq rdseed adx smap avx512ifma clflu
                         shopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves cqm_llc cqm_occup_llc cqm_mbm_total
                          cqm_mbm_local avx512_bf16 clzero irperf xsaveerptr rdpru wbnoinvd cppc arat npt lbrv svm_lock nrip_save tsc_sc
                         ale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold avic v_vmsave_vmload vgif x2avic v_spec_ctrl v
                         nmi avx512vbmi umip pku avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid over
                         flow_recov succor smca fsrm flush_l1d
Virtualization features: 
  Virtualization:        AMD-V
Caches (sum of all):     
  L1d:                   256 KiB (8 instances)
  L1i:                   256 KiB (8 instances)
  L2:                    8 MiB (8 instances)
  L3:                    16 MiB (1 instance)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0-15
Vulnerabilities:         
  Gather data sampling:  Not affected
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec rstack overflow:  Mitigation; Safe RET
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Enhanced / Automatic IBRS, IBPB conditional, STIBP always-on, RSB filling, PBRSB-eIBRS Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
root@rescue ~ # 
```

### Yabs

```shell
Tue Jul  2 09:23:32 AM CEST 2024

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 2 minutes
Processor  : AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics
CPU cores  : 16 @ 3419.016 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 60.5 GiB
Swap       : 31.0 GiB
Disk       : 905.8 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-21-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Hetzner
ASN        : AS24940 Hetzner Online GmbH
Location   : Nuremberg, Bavaria (BY)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/md3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 794.23 MB/s (198.5k) | 2.77 GB/s    (43.3k)
Write      | 796.32 MB/s (199.0k) | 2.78 GB/s    (43.5k)
Total      | 1.59 GB/s   (397.6k) | 5.56 GB/s    (86.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 3.60 GB/s     (7.0k) | 3.78 GB/s     (3.6k)
Write      | 3.80 GB/s     (7.4k) | 4.03 GB/s     (3.9k)
Total      | 7.41 GB/s    (14.4k) | 7.82 GB/s     (7.6k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2873                          
Multi Core      | 13174                         
Full Test       | https://browser.geekbench.com/v6/cpu/6751464

YABS completed in 4 min 45 sec
```

### Bench

```shell
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics
 CPU Cores          : 16 @ 2940.112 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 936.8 GB (1.8 GB Used)
 Total Mem          : 60.6 GB (884.1 MB Used)
 Total Swap         : 31.0 GB (0 Used)
 System uptime      : 0 days, 0 hour 7 min
 Load average       : 1.05, 0.92, 0.40
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-21-amd64
 TCP CC             : cubic
 Virtualization     : Dedicated
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS24940 Hetzner Online GmbH
 Location           : Helsinki / FI
 Region             : Uusimaa
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.5 GB/s
 I/O Speed(2nd run) : 1.5 GB/s
 I/O Speed(3rd run) : 1.5 GB/s
 I/O Speed(average) : 1536.0 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    917.53 Mbps       894.52 Mbps         0.37 ms     
 Los Angeles, US  537.49 Mbps       536.43 Mbps         166.98 ms   
 Dallas, US       636.63 Mbps       770.15 Mbps         138.75 ms   
 Montreal, CA     341.84 Mbps       884.74 Mbps         121.18 ms   
 Amsterdam, NL    940.32 Mbps       941.47 Mbps         28.46 ms    
 Hongkong, CN     438.35 Mbps       485.76 Mbps         196.92 ms   
 Mumbai, IN       426.54 Mbps       664.74 Mbps         142.76 ms   
 Singapore, SG    77.66 Mbps        21.13 Mbps          227.80 ms   
 Tokyo, JP        346.94 Mbps       522.86 Mbps         255.96 ms   
----------------------------------------------------------------------
 Finished in        : 4 min 43 sec
 Timestamp          : 2024-07-02 09:33:38 CEST
----------------------------------------------------------------------
```

### GeekBench 5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-21-amd64 x86_64
  Model                         Hetzner
  Motherboard                   ASRockRack B665D4U-1L
  BIOS                          American Megatrends International, LLC. 10.07

处理器信息
  Name                          AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics 
  Topology                      1 Processor, 8 Cores, 16 Threads
  Identifier                    AuthenticAMD Family 25 Model 117 Stepping 2
  Base Frequency                6.74 GHz
  L1 Instruction Cache          32.0 KB x 8
  L1 Data Cache                 32.0 KB x 8
  L2 Cache                      1.00 MB x 8
  L3 Cache                      16.0 MB

内存信息
  Size                          60.6 GB

单核测试分数：2135
多核测试分数：12066
详细结果链接：https://browser.geekbench.com/v5/cpu/22639897
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%207%20PRO%208700GE
```

### PassMark PerformanceTest Linux

```shell
AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (x86_64)
8 cores @ 6743 MHz  |  60.6 GiB RAM
Number of Processes: 16  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          30304
  Integer Math                     103292 Million Operations/s
  Floating Point Math              55561 Million Operations/s
  Prime Numbers                    99.5 Million Primes/s
  Sorting                          45731 Thousand Strings/s
  Encryption                       23153 MB/s   
  Compression                      351170 KB/s  
  CPU Single Threaded              4035 Million Operations/s
  Physics                          1940 Frames/s
  Extended Instructions (SSE)      22368 Million Matrices/s

Memory Mark:                       3460
  Database Operations              8941 Thousand Operations/s
  Memory Read Cached               39140 MB/s   
  Memory Read Uncached             38799 MB/s   
  Memory Write                     27556 MB/s   
  Available RAM                    61117 Megabytes
  Memory Latency                   58 Nanoseconds
  Memory Threaded                  58482 MB/s   
--------------------------------------------------------------------------
```

### byte-unixbench 性能测试

```shell
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: Hetzner-AX42: GNU/Linux
   OS: GNU/Linux -- 6.1.0-21-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.90-1 (2024-05-03)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 4: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 5: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 6: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 7: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 8: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 9: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 10: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 11: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 12: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 13: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 14: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 15: AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics (7300.4 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   09:53:00 up 31 min,  1 user,  load average: 0.17, 1.75, 1.46; runlevel 2024-07-02

------------------------------------------------------------------------
Benchmark Run: Tue Jul 02 2024 09:53:00 - 10:21:25
16 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       78803894.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    12869.6 MWIPS (10.0 s, 7 samples)
Execl Throughput                               4777.2 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1148568.3 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          293392.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3694174.7 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1715040.5 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 253781.4 lps   (10.0 s, 7 samples)
Process Creation                               9959.4 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  12146.6 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  11314.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        1680808.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   78803894.7   6752.7
Double-Precision Whetstone                       55.0      12869.6   2339.9
Execl Throughput                                 43.0       4777.2   1111.0
File Copy 1024 bufsize 2000 maxblocks          3960.0    1148568.3   2900.4
File Copy 256 bufsize 500 maxblocks            1655.0     293392.3   1772.8
File Copy 4096 bufsize 8000 maxblocks          5800.0    3694174.7   6369.3
Pipe Throughput                               12440.0    1715040.5   1378.6
Pipe-based Context Switching                   4000.0     253781.4    634.5
Process Creation                                126.0       9959.4    790.4
Shell Scripts (1 concurrent)                     42.4      12146.6   2864.8
Shell Scripts (8 concurrent)                      6.0      11314.7  18857.8
System Call Overhead                          15000.0    1680808.6   1120.5
                                                                   ========
System Benchmarks Index Score                                        2318.0

------------------------------------------------------------------------
Benchmark Run: Tue Jul 02 2024 10:21:25 - 10:49:25
16 CPUs in system; running 16 parallel copies of tests

Dhrystone 2 using register variables      750185316.3 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   152712.2 MWIPS (10.1 s, 7 samples)
Execl Throughput                              41389.0 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      10936466.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         3027240.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      18531670.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                            18489848.4 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                2182367.7 lps   (10.0 s, 7 samples)
Process Creation                             111780.9 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                 110774.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  14339.0 lpm   (60.0 s, 2 samples)
System Call Overhead                       18841208.4 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  750185316.3  64283.2
Double-Precision Whetstone                       55.0     152712.2  27765.9
Execl Throughput                                 43.0      41389.0   9625.4
File Copy 1024 bufsize 2000 maxblocks          3960.0   10936466.8  27617.3
File Copy 256 bufsize 500 maxblocks            1655.0    3027240.9  18291.5
File Copy 4096 bufsize 8000 maxblocks          5800.0   18531670.4  31951.2
Pipe Throughput                               12440.0   18489848.4  14863.2
Pipe-based Context Switching                   4000.0    2182367.7   5455.9
Process Creation                                126.0     111780.9   8871.5
Shell Scripts (1 concurrent)                     42.4     110774.7  26126.1
Shell Scripts (8 concurrent)                      6.0      14339.0  23898.3
System Call Overhead                          15000.0   18841208.4  12560.8
                                                                   ========
System Benchmarks Index Score                                       18458.6
```

### 通电检测

```shell

  CPU 型号              AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics
  CPU 核心              合计 8 核心，16 线程
  CPU 状态              当前主频 3831.563 MHz
  内存大小              62029 MB (805 MB 已用)

  第 1 块硬盘           通电 0 小时，型号 SAMSUNG MZVL2512HCJQ-00B07
  第 2 块硬盘           通电 0 小时，型号 SAMSUNG MZVL2512HCJQ-00B07

  硬盘大小              0.0 GB

  服务器时间            2024-07-02 09:03:08
  运行时间              0 days 0 hour 2 min
  系统负载              0.04, 0.04, 0.01
  虚拟化技术            No Virtualization Detected

  IPv4 地址             37.27.xxx.xxx
  IPv6 地址             2a01:4f9:xxxx:xxxx
  运营商                AS24940 Hetzner Online GmbH
  地理位置              FI, Uusimaa, Helsinki

  操作系统              Debian 12.5 bookworm (x86_64)
  系统内核              6.7.4
  TCP 加速              cubic

  当前脚本版本          1.4.1.1

  顺序写入 (1st)        3100 MB/s
  顺序写入 (2nd)        3100 MB/s
  顺序写入 (3rd)        3100 MB/s
  顺序写入 (4th)        3000 MB/s
  顺序写入 (5th)        3100 MB/s
  顺序写入 (avg)        3100.0 MB/s
```

### 融合怪脚本测试

```shell
--------------------- A Bench Script By spiritlhl ----------------------
                   测评频道: https://t.me/vps_reviews                    
版本：2024.06.24
更新日志：VPS融合怪测试(集百家之长)                       
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 7 PRO 8700GE w/ Radeon 780M Graphics
 CPU 核心数        : 1 物理核心, 8 总核心, 16 总线程数
 CPU 频率          : 1600.000 MHz
 CPU 缓存          : L1: 256.00 KB / L2: 8.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 385.30 MiB / 60.56 GiB
 Swap              : 0 KiB / 30.98 GiB
 硬盘空间          : 1.71 GiB / 904.61 GiB
 启动盘路径        : /dev/md3
 系统在线时间      : 0 days, 0 hour 14 min
 负载              : 0.29, 0.36, 0.30
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-21-amd64
 TCP加速方式       : cubic
 虚拟化架构        : Dedicated
 IPV4 ASN          : AS24940 Hetzner Online GmbH
 IPV4 位置         : Helsinki / Uusimaa / FI
 IPV6 ASN          : AS24940 Hetzner Online
 IPV6 位置         : Germany
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          6198 Scores
 16 线程测试(多核)得分:                 49602 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          75235.63 MB/s
 单线程写测试:          42286.47 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         189 MB/s (46.12 IOPS, 0.56s))           204 MB/s (49830 IOPS, 0.51s)
 1GB-1M Block           5.5 GB/s (5286 IOPS, 0.19s)             5.4 GB/s (5116 IOPS, 0.20s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 782.07 MB/s (195.5k) | 2.79 GB/s    (43.6k)
Write      | 784.13 MB/s (196.0k) | 2.81 GB/s    (43.9k)
Total      | 1.56 GB/s   (391.5k) | 5.60 GB/s    (87.6k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 3.74 GB/s     (7.3k) | 3.89 GB/s     (3.8k)
Write      | 3.94 GB/s     (7.6k) | 4.15 GB/s     (4.0k)
Total      | 7.68 GB/s    (15.0k) | 8.05 GB/s     (7.8k)
正在并发测试中，大概2~3分钟无输出，请耐心等待。。。
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：芬兰
[IPV6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：德国
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: HEM(HEM08S05)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: HEM(HEM09S01)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：FI 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：DE 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【FI】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 0 [8] 
VPN得分(越低越好): 100 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 29 [1] 93 [E]
Companny滥用得分(越低越好): 0.0002 (Very Low) [A] 
ASN滥用得分(越低越好): 0.001 (Low) [A] 
公司滥用得分(越低越好): 0.0002 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: business [8] hosting - high probability [C] hosting [0 7 9 A]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1 5 6 A C] No [8]
是否移动设备: Yes [E] No [5 A C]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B C D]
是否VPN: Yes [A E] No [0 1 6 7 C D]
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D] Yes [E]
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 311(Total_Check) 0(Clean) 4(Blacklisted) 22(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1]
ASN滥用得分(越低越好): 0.001 (Low) [A] 
ASN滥用得分(越低越好): 0.001 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: hosting [A] 
公司类型: hosting [A] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A B D] 
是否VPN: No [1 A D] 
是否Tor: No [1 A B D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A B] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D] 
是否中继: No [D]
是否Bogon: No [A D] 
DNS-黑名单: 311(Total_Check) 0(Clean) 0(Blacklisted) 311(Other) 
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
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 移动CMIN2  [精品线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 移动CMIN2  [精品线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.64 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
0.40 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
0.80 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
0.32 ms  AS1299  芬兰, 新地区, 赫尔辛基, telia.com
1.44 ms  AS1299  芬兰, 新地区, 赫尔辛基, telia.com
7.86 ms  AS1299  瑞典, 斯德哥尔摩省, 斯德哥尔摩, telia.com
28.36 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
29.25 ms  AS4134  德国, 黑森州, 法兰克福, chinatelecom.com.cn, 电信
288.61 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
279.54 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
276.94 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
6.46 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
6.70 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
7.44 ms  AS1299  芬兰, 新地区, 赫尔辛基, telia.com
32.15 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
35.37 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
183.45 ms  AS4837  中国, 北京, chinaunicom.com, 联通
180.86 ms  AS4837  中国, 北京, chinaunicom.com, 联通
175.67 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
180.57 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
169.97 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.65 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
0.60 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
20.68 ms  AS24940  德国, 黑森州, 法兰克福, hetzner.com
20.60 ms  AS24940  德国, 黑森州, 法兰克福, hetzner.com
28.28 ms  AS58453  德国, 黑森州, 法兰克福, chinamobile.com, 移动
241.89 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
227.42 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
244.62 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
228.04 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
233.52 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
230.73 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
235.50 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    715.82 Mbps     507.35 Mbps     0.38     0.0%
法兰克福         949.26 Mbps     960.13 Mbps     25.67    0.0%
洛杉矶           522.75 Mbps     919.92 Mbps     155.82   0.0%
联通WuXi         916.79 Mbps     697.23 Mbps     265.77   0.0%
电信浙江         96.03 Mbps      375.55 Mbps     265.72   NULL
电信浙江         179.28 Mbps     360.98 Mbps     280.11   NULL
------------------------------------------------------------------------
 总共花费      : 4 分 17 秒
 时间          : Tue Jul  2 09:39:23 CEST 2024
------------------------------------------------------------------------
```