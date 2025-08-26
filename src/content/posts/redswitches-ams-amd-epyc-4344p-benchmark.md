---
tags: [eu-server]
title: "Redswitches  荷兰万兆 AMD EPYC 4344P 测评"
published: 2025-05-07
---

**RedSwitches是一家全球托管服务提供商，在全球 20 多个地点提供高性能专用（裸机）服务器、基础设施即服务 (IaaS) 和托管主机解决方案，自称拥有超过15 年的行业经验，机器硬件配置不错，但是价格和网络不行，标称10G的带宽，实际上很难跑满。**

## Looking Glass

- **Amsterdam ： [https://lg.redswitches.com/](https://lg.redswitches.com/)**

## 配置

- **CPU ： AMD EPYC 4344P 8-Core Processor**

- **MEM ：****2 x 32 GB DDR5-5****2****00MT/s Micron CT32G56C46U5.C16B2**

- **DISK ：2 x 931.5G CT1000P3PSSD8**

- **Network : 2 x Intel Corporation I210 Gigabit Network Connection**

- **MOTHERBOARD : Supermicro H13SAE-MF (BIOS版本: Supermicro H13SAE-MF (BIOS版本: 2.2)**

- **Price: \$199/month**

## 测评

### CPU

```shell
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          48 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   16
  On-line CPU(s) list:    0-15
Vendor ID:                AuthenticAMD
  Model name:             AMD EPYC 4344P 8-Core Processor
    CPU family:           25
    Model:                97
    Thread(s) per core:   2
    Core(s) per socket:   8
    Socket(s):            1
    Stepping:             2
    Frequency boost:      enabled
    CPU max MHz:          5388.2808
    CPU min MHz:          3000.0000
    BogoMIPS:             7585.28
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdts                          cp lm constant_tsc rep_good nopl nonstop_tsc cpuid extd_apicid aperfmperf rapl pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 movbe popc                          nt aes xsave avx f16c rdrand lahf_lm cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce topoext p                          erfctr_core perfctr_nb bpext perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba ibrs ibpb stibp ibrs_enhanced vmmcall fsgsbase bmi1 avx                          2 smep bmi2 erms invpcid cqm rdt_a avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xs                          avec xgetbv1 xsaves cqm_llc cqm_occup_llc cqm_mbm_total cqm_mbm_local avx512_bf16 clzero irperf xsaveerptr rdpru wbnoinvd cppc arat npt lbrv                           svm_lock nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold avic v_vmsave_vmload vgif v_spec_ctrl avx512vbmi 
                          umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid overflow_recov succor smca fsrm flush_l1d
Virtualization features:  
  Virtualization:         AMD-V
Caches (sum of all):      
  L1d:                    256 KiB (8 instances)
  L1i:                    256 KiB (8 instances)
  L2:                     8 MiB (8 instances)
  L3:                     32 MiB (1 instance)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-15
Vulnerabilities:          
  Gather data sampling:   Not affected
  Itlb multihit:          Not affected
  L1tf:                   Not affected
  Mds:                    Not affected
  Meltdown:               Not affected
  Mmio stale data:        Not affected
  Reg file data sampling: Not affected
  Retbleed:               Not affected
  Spec rstack overflow:   Mitigation; safe RET
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl and seccomp
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP always-on; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### 硬件检测

```shell

  CPU 型号              AMD EPYC 4344P 8-Core Processor
  CPU 核心              合计 8 核心，16 线程
  CPU 状态              当前主频 3800.000 MHz
  内存大小              63380 MB (699 MB 已用)
  交换分区              4095 MB (0 MB 已用)

  第 1 块硬盘           通电 215 小时，型号 CT1000P3PSSD8
  第 2 块硬盘           通电 215 小时，型号 CT1000P3PSSD8

  硬盘大小              912.5 GB

  服务器时间            2025-05-07 13:28:28
  运行时间              0 days 2 hour 58 min
  系统负载              0.00, 1.64, 11.17
  虚拟化技术            No Virtualization Detected

  IPv4 地址             43.250.xxx.xxx
  运营商                AS50049 RedSwitches
  地理位置              NL, Flevoland, Lelystad

  操作系统              Ubuntu 22.04.5 jammy (x86_64)
  系统内核              5.15.0-139-generic
  TCP 加速              cubic

  当前脚本版本          1.4.1.1

  顺序写入 (1st)        924 MB/s
  顺序写入 (2nd)        931 MB/s
  顺序写入 (3rd)        928 MB/s
  顺序写入 (4th)        867 MB/s
  顺序写入 (5th)        900 MB/s
  顺序写入 (avg)        917.3 MB/s
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 1 hours, 0 minutes
Processor  : AMD EPYC 4344P 8-Core Processor
CPU cores  : 16 @ 3000.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 61.9 GiB
Swap       : 4.0 GiB
Disk       : 911.7 GiB
Distro     : Ubuntu 22.04.5 LTS
Kernel     : 5.15.0-139-generic
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : FOP Danik Vyacheslav Evgenievich
ASN        : AS50049 RedSwitches
Host       : RedSwitches
Location   : Amsterdam, North Holland (NH)
Country    : The Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/mapper/vg0-root):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 562.25 MB/s (140.5k) | 2.16 GB/s    (33.9k)
Write      | 563.73 MB/s (140.9k) | 2.18 GB/s    (34.0k)
Total      | 1.12 GB/s   (281.4k) | 4.35 GB/s    (67.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.53 GB/s     (4.9k) | 2.71 GB/s     (2.6k)
Write      | 2.67 GB/s     (5.2k) | 2.89 GB/s     (2.8k)
Total      | 5.21 GB/s    (10.1k) | 5.60 GB/s     (5.4k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 7.82 Gbits/sec  | 753 Mbits/sec   | 6.87 ms        
Eranium         | Amsterdam, NL (100G)      | 9.40 Gbits/sec  | 3.04 Gbits/sec  | 9.90 ms        
Uztelecom       | Tashkent, UZ (10G)        | 945 Mbits/sec   | 256 Mbits/sec   | 102 ms         
Leaseweb        | Singapore, SG (10G)       | 871 Mbits/sec   | 876 Mbits/sec   | 160 ms         
Clouvider       | Los Angeles, CA, US (10G) | 731 Mbits/sec   | 114 Mbits/sec   | 142 ms         
Leaseweb        | NYC, NY, US (10G)         | 1.80 Gbits/sec  | 918 Mbits/sec   | 76.8 ms        
Edgoo           | Sao Paulo, BR (1G)        | 828 Mbits/sec   | 247 Mbits/sec   | 199 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2949                          
Multi Core      | 15069                         
Full Test       | https://browser.geekbench.com/v6/cpu/11851349
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Ubuntu 22.04.5 LTS
  Kernel                        Linux 5.15.0-139-generic x86_64
  Model                         Supermicro Super Server
  Motherboard                   Supermicro H13SAE-MF
  BIOS                          American Megatrends International, LLC. 2.2

处理器信息
  Name                          AMD EPYC 4344P 8-Core Processor                
  Topology                      1 Processor, 8 Cores, 16 Threads
  Identifier                    AuthenticAMD Family 25 Model 97 Stepping 2
  Base Frequency                5.39 GHz
  L1 Instruction Cache          32.0 KB x 8
  L1 Data Cache                 32.0 KB x 8
  L2 Cache                      1.00 MB x 8
  L3 Cache                      32.0 MB

内存信息
  Size                          61.9 GB

单核测试分数：2227
多核测试分数：13822
详细结果链接：https://browser.geekbench.com/v5/cpu/23528000
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%204344P
```

### Bench

```shell
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 4344P 8-Core Processor
 CPU Cores          : 16 @ 3000.000 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 915.7 GB (3.5 GB Used)
 Total Mem          : 61.9 GB (585.0 MB Used)
 Total Swap         : 4.0 GB (0 Used)
 System uptime      : 0 days, 1 hour 20 min
 Load average       : 1.47, 2.19, 1.77
 OS                 : Ubuntu 22.04.5 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.15.0-139-generic
 TCP CC             : cubic
 Virtualization     : Dedicated
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS50049 RedSwitches
 Location           : Lelystad / NL
 Region             : Flevoland
----------------------------------------------------------------------
 I/O Speed(1st run) : 916 MB/s
 I/O Speed(2nd run) : 902 MB/s
 I/O Speed(3rd run) : 911 MB/s
 I/O Speed(average) : 909.7 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    443.94 Mbps       1783.19 Mbps        230.73 ms   
 Paris, FR        8382.82 Mbps      9396.68 Mbps        10.23 ms    
 Amsterdam, NL    3300.31 Mbps      1290.45 Mbps        2.32 ms     
 Hong Kong, CN    511.05 Mbps       830.28 Mbps         174.05 ms   
 Singapore, SG    244.54 Mbps       1674.67 Mbps        325.42 ms   
 Tokyo, JP        369.04 Mbps       1657.92 Mbps        236.33 ms   
----------------------------------------------------------------------
 Finished in        : 3 min 8 sec
 Timestamp          : 2025-05-07 11:54:28 UTC
----------------------------------------------------------------------
```

### IP解锁

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/05/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/05/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/05/image-5.jpg" alt="IP信息与风险分析显示屏截图" loading="lazy">
</picture>

### UnixBench

```shell
root@ams-2-2-22:~/byte-unixbench/UnixBench/results# cat ams-2-2-22-2025-05-07-01
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: ams-2-2-22: GNU/Linux
   OS: GNU/Linux -- 5.15.0-139-generic -- #149-Ubuntu SMP Fri Apr 11 22:06:13 UTC 2025
   Machine: x86_64 (x86_64)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 4: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 5: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 6: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 7: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 8: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 9: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 10: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 11: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 12: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 13: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 14: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 15: AMD EPYC 4344P 8-Core Processor (7585.3 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   12:11:59 up  1:41,  3 users,  load average: 0.00, 0.03, 0.45; runlevel 2025-05-07

------------------------------------------------------------------------
Benchmark Run: Wed May 07 2025 12:11:59 - 12:40:27
16 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       80783754.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    12965.4 MWIPS (10.0 s, 7 samples)
Execl Throughput                               5696.5 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1199988.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          307792.4 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       4079523.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1778131.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 273589.2 lps   (10.0 s, 7 samples)
Process Creation                              11585.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  18987.5 lpm   (60.1 s, 2 samples)
Shell Scripts (8 concurrent)                  15098.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        1759876.3 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   80783754.4   6922.3
Double-Precision Whetstone                       55.0      12965.4   2357.4
Execl Throughput                                 43.0       5696.5   1324.8
File Copy 1024 bufsize 2000 maxblocks          3960.0    1199988.8   3030.3
File Copy 256 bufsize 500 maxblocks            1655.0     307792.4   1859.8
File Copy 4096 bufsize 8000 maxblocks          5800.0    4079523.0   7033.7
Pipe Throughput                               12440.0    1778131.8   1429.4
Pipe-based Context Switching                   4000.0     273589.2    684.0
Process Creation                                126.0      11585.7    919.5
Shell Scripts (1 concurrent)                     42.4      18987.5   4478.2
Shell Scripts (8 concurrent)                      6.0      15098.7  25164.5
System Call Overhead                          15000.0    1759876.3   1173.3
                                                                   ========
System Benchmarks Index Score                                        2614.1

------------------------------------------------------------------------
Benchmark Run: Wed May 07 2025 12:40:27 - 13:08:29
16 CPUs in system; running 16 parallel copies of tests

Dhrystone 2 using register variables      817127478.3 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   166313.7 MWIPS (10.0 s, 7 samples)
Execl Throughput                              60061.3 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      13229536.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         3704387.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      18620699.5 KBps  (30.0 s, 2 samples)
Pipe Throughput                            21398151.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                2735131.5 lps   (10.0 s, 7 samples)
Process Creation                             136410.1 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                 163061.5 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  21771.5 lpm   (60.0 s, 2 samples)
System Call Overhead                       21784940.2 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  817127478.3  70019.5
Double-Precision Whetstone                       55.0     166313.7  30238.8
Execl Throughput                                 43.0      60061.3  13967.7
File Copy 1024 bufsize 2000 maxblocks          3960.0   13229536.2  33407.9
File Copy 256 bufsize 500 maxblocks            1655.0    3704387.9  22383.0
File Copy 4096 bufsize 8000 maxblocks          5800.0   18620699.5  32104.7
Pipe Throughput                               12440.0   21398151.8  17201.1
Pipe-based Context Switching                   4000.0    2735131.5   6837.8
Process Creation                                126.0     136410.1  10826.2
Shell Scripts (1 concurrent)                     42.4     163061.5  38457.9
Shell Scripts (8 concurrent)                      6.0      21771.5  36285.8
System Call Overhead                          15000.0   21784940.2  14523.3
                                                                   ========
System Benchmarks Index Score                                       22659.4
```

### PassMark PerformanceTest Linux

```shell
AMD EPYC 4344P 8-Core Processor (x86_64)
8 cores @ 5388 MHz  |  61.9 GiB RAM
Number of Processes: 16  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          35266
  Integer Math                     109990 Million Operations/s
  Floating Point Math              59502 Million Operations/s
  Prime Numbers                    161 Million Primes/s
  Sorting                          55686 Thousand Strings/s
  Encryption                       26323 MB/s
  Compression                      411764 KB/s
  CPU Single Threaded              4103 Million Operations/s
  Physics                          2589 Frames/s
  Extended Instructions (SSE)      27865 Million Matrices/s

Memory Mark:                       3636
  Database Operations              9554 Thousand Operations/s
  Memory Read Cached               40536 MB/s
  Memory Read Uncached             38780 MB/s
  Memory Write                     24882 MB/s
  Available RAM                    59800 Megabytes
  Memory Latency                   53 Nanoseconds
  Memory Threaded                  52167 MB/s
--------------------------------------------------------------------------
```

### 融合怪Go

```shell
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC 4344P 8-Core Processor @3000.000 MHz
 CPU 数量            : 16 Physical CPU(s)
 CPU 缓存            : L1: 512 KB / L2: 8 MB / L3: 32 MB
 GPU 型号            : ASPEED Graphics Family
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ❌ Disabled
 内存                : 1.38 GB / 61.90 GB
 气球驱动            : ❌ Undetected
 内核页合并          : ❌ Undetected
 虚拟内存 Swap       : 0.00 MB / 4.00 GB
 硬盘空间            : 3.72 GB / 911.20 GB
 启动盘路径          : /dev/mapper/vg0-root
 系统                : ubuntu 22.04 [x86_64] 
 内核                : 5.15.0-139-generic
 系统在线时间        : 0 days, 02 hours, 48 minutes
 时区                : UTC
 负载                : 0.25 / 10.41 / 20.41
 虚拟化架构          : Dedicated (No visible signage)
 NAT类型             : Full Cone
 TCP加速方式         : cubic
 IPV4 ASN            : AS50049 Redswitches Pty Ltd.
 IPV4 Location       : Amsterdam / Noord-Holland / Netherlands
 IPV4 Active IPs     : 0/256 (subnet /24) 45/1024 (prefix /22)
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   6484.07
16 线程测试(多核)得分:  54958.21
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 44889.88 MB/s(47.07K IOPS, 5s)
单线程顺序读速度: 78204.04 MB/s(82.00K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       558.50 MB/s(139.6k)     559.98 MB/s(140.0k)     1.12 GB/s(279.6k)       
/root         64k      2.16 GB/s(33.8k)        2.17 GB/s(33.9k)        4.33 GB/s(67.7k)        
/root         512k     2.52 GB/s(4913)         2.65 GB/s(5174)         5.17 GB/s(10.1k)        
/root         1m       2.72 GB/s(2653)         2.90 GB/s(2829)         5.61 GB/s(5482)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的网络可能没有正常配置IPv4，或者没有IPv4网络接入
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 德国汉堡(HAM11S06)
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
Apple                     YES (Region: NLD) [Native]
BingSearch                YES (Region: AU)
Claude                    YES [Native]
Dazn                      YES (Region: AU) [Native]
Disney+                   YES (Region: NL) [Native]
Gemini                    NO
GoogleSearch              YES
Google Play Store         YES (Region: NL) [Native]
IQiYi                     YES (Region: NL) [Native]
Instagram Licensed Audio  YES [Native]
KOCOWA                    YES [Native]
MetaAI                    Unknown: get www.meta.ai failed with code: 200
Netflix                   YES (Region: US) [Native]
Netflix CDN               SE
OneTrust                  YES (Region: AU) [Via DNS]
ChatGPT                   YES (Region: AU) [Native]
Paramount+                YES [Native]
Amazon Prime Video        YES (Region: NL) [Native]
Reddit                    YES
SonyLiv                   YES (Region: NL) [Native]
Sora                      YES (Region: AU)
Spotify Registration      YES (Region: AU) [Native]
Steam Store               YES (Community Available) (Region: AU)
TVBAnywhere+              YES (Region: AU) [Native]
TikTok                    YES (Region: AU) [Native]
Viu.com                   YES [Native]
Wikipedia Editability     YES
YouTube Region            YES (Region: NL) [Native]
YouTube CDN               HAM
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 12 [8] 
VPN得分(越低越好): 80 [8] 
代理得分(越低越好): 93 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 93 [8] 
欺诈得分(越低越好): 0 [1 E] 
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2] 恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: corporate [9] DataCenter/WebHosting/Transit [3] unknown [C] hosting [0 7 A]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7 D] 
是否数据中心: No [5 6 8 C] Yes [0 1 A]
是否移动设备: Yes [E] No [5 A C]
是否代理: No [0 1 4 5 6 7 8 9 A C D E] 
是否VPN: No [0 1 6 7 A C D E] 
是否Tor: No [0 1 3 6 7 8 A C D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D]
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 313(Total_Check) 0(Clean) 3(Blacklisted) 17(Other) 
--------------------------------------邮件端口检测--------------------------------------
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
GMX       ✔     ✔     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✘     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京电信v4 219.141.140.10           电信163    [普通线路] 
北京移动v4 221.179.155.161          移动CMI    [普通线路] 
上海移动v4 211.136.112.200          移动CMI    [普通线路] 
广州移动v4 120.196.165.24           移动CMI    [普通线路] 
成都移动v4 211.137.96.205           移动CMI    [普通线路] 移动CMIN2  [精品线路] 
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
[NextTrace API] preferred API IP - 8.210.125.129 - 778.69ms - Misaka.HKG
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.86 ms      AS50049                       荷兰, 弗莱福兰省, 莱利斯塔德
0.57 ms      AS50049                       荷兰, 北荷兰省, 阿姆斯特丹
0.56 ms      AS50049                       荷兰, 弗莱福兰省, 莱利斯塔德
0.86 ms      AS50049                       荷兰, 弗莱福兰省, 莱利斯塔德
0.99 ms      AS50049                       荷兰, 弗莱福兰省, 莱利斯塔德
1.48 ms      AS3257                        荷兰, 弗莱福兰省, 莱利斯塔德, gtt.net 
2.22 ms      AS3257     [GTT-EU]           荷兰, 北荷兰省, 阿姆斯特丹, gtt.net 
1.64 ms      AS4134                        荷兰, 北荷兰省, 阿姆斯特丹, www.chinatelecom.com.cn 
267.32 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
253.92 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
*
310.78 ms    AS4134     [CHINANET-GD]      中国, 广东, 深圳, www.chinatelecom.com.cn  电信
*
263.93 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.54 ms      AS50049                       荷兰, 弗莱福兰省, 莱利斯塔德
0.58 ms      AS50049                       荷兰, 北荷兰省, 阿姆斯特丹
0.56 ms      AS50049                       荷兰, 弗莱福兰省, 莱利斯塔德
0.86 ms      AS50049                       荷兰, 弗莱福兰省, 莱利斯塔德
1.00 ms      AS50049                       荷兰, 弗莱福兰省, 莱利斯塔德
7.09 ms      AS3257                        荷兰, 弗莱福兰省, 莱利斯塔德, gtt.net 
11.00 ms     AS3257     [GTT-BACKBONE]     德国, 黑森, 美因河畔法兰克福, gtt.net 
*
*
308.46 ms    AS4837     [CU169-BACKBONE]   中国, 北京, chinaunicom.cn  联通
*
*
247.13 ms    AS17816    [APNIC-AP]         中国, 广东, 茂名市, chinaunicom.cn  联通
271.38 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
268.39 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.53 ms      AS50049                       荷兰, 弗莱福兰省, 莱利斯塔德
0.43 ms      AS50049                       荷兰, 北荷兰省, 阿姆斯特丹
0.57 ms      AS50049                       荷兰, 弗莱福兰省, 莱利斯塔德
0.86 ms      AS50049                       荷兰, 弗莱福兰省, 莱利斯塔德
1.01 ms      AS50049                       荷兰, 弗莱福兰省, 莱利斯塔德
1.78 ms      AS1299     [SE-TELIAEU]       荷兰, 北荷兰省, 阿姆斯特丹, arelion.com 
1.77 ms      AS1299     [ARELION-NET]      荷兰, 北荷兰省, 阿姆斯特丹, arelion.com 
8.44 ms      AS1299     [ARELION-NET]      英国, 英格兰, 伦敦, arelion.com 
58.96 ms     AS1299     [ARELION-NET]      英国, 英格兰, 伦敦, arelion.com 
9.35 ms      AS1299     [ARELION-NET]      英国, 英格兰, 伦敦, arelion.com 
266.13 ms    AS58453    [CMI-INT]          中国, 广东, 广州, cmi.chinamobile.com  移动
268.25 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
268.84 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
254.88 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
258.34 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
259.52 ms    AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
```

### NetQuality

<figure>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/05/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/05/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/05/image-6.jpg" alt="网络延迟和连接信息的终端屏幕截图" loading="lazy">
</picture>

<figcaption>

image

</figcaption>

</figure>