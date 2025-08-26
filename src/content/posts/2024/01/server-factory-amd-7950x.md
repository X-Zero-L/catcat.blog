---
title: "Server-Factory AMD 7950X 荷兰预售"
published: 2024-01-10
categories: 
  - "vps"
  - "eu-server"
---

Server-Factory 这次我是预售48欧买的，结果跳票从瑞典跳到荷兰跳到今年才开机。之前推出的纯ipv6机在MJJ中挺受欢迎的，硬盘IO很不错。据反馈之前的epyc系列和5000系列也非常稳定。**商家不允许退款**，支持使用加密货币和PayPal。服务器位于荷兰 Eygelshoven 的 SkyLink 数据中心。

## 商家信息

Looking Glass：[https://lg.nl.server-factory.com/](https://lg.nl.server-factory.com/ ) 

Status：[https://server-factory-status.com/status/infrastructure](https://server-factory-status.com/status/infrastructure)

## 套餐

**_Provider : Server-Factory  
Type/Plan : NL-AMD RYZEN™ 7000 XS VPS-2c4g  
Processor : AMD Ryzen 9 7950X (4.5 GHz++)  
Num of Core : 2 Cores  
Memory : 2 GB DDR5 RAM  
Storage : 100 GB NVMe(PCIe 4.0)  
Bandwidth : 8TB @ 500 Mbps IN | 500 Mbps OUT  
Location : NL  
Price : 48 € per year_** 

## 测评

### lscpu

```
root@catcat:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  2
  On-line CPU(s) list:   0,1
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD Ryzen 9 7950X 16-Core Processor
    BIOS Model name:     pc-q35-8.1  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               97
    Thread(s) per core:  1
    Core(s) per socket:  2
    Socket(s):           1
    Stepping:            2
    BogoMIPS:            8983.12
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse
                          sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_kn
                         own_freq pni pclmulqdq ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer a
                         es xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 
                         3dnowprefetch osvw perfctr_core ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 s
                         mep bmi2 erms invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd s
                         ha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinv
                         d arat npt lbrv nrip_save tsc_scale vmcb_clean flushbyasid pausefilter pfthreshold v_vmsave_
                         vmload vgif avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_b
                         italg avx512_vpopcntdq rdpid fsrm flush_l1d arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   128 KiB (2 instances)
  L1i:                   128 KiB (2 instances)
  L2:                    1 MiB (2 instances)
  L3:                    32 MiB (2 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0,1
Vulnerabilities:         
  Gather data sampling:  Not affected
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec rstack overflow:  Mitigation; safe RET, no microcode
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS 
                         Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 17 minutes
Processor  : AMD Ryzen 9 7950X 16-Core Processor
CPU cores  : 2 @ 4491.560 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 98.3 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-17-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Maximilian Jacobsen
ASN        : AS206075 Maximilian Jacobsen
Host       : De Maximilian Jacobsen
Location   : Eygelshoven, Limburg (LI)
Country    : The Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda2):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 426.46 MB/s (106.6k) | 3.36 GB/s    (52.6k)
Write      | 427.59 MB/s (106.8k) | 3.38 GB/s    (52.9k)
Total      | 854.06 MB/s (213.5k) | 6.75 GB/s   (105.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 3.81 GB/s     (7.4k) | 3.67 GB/s     (3.5k)
Write      | 4.02 GB/s     (7.8k) | 3.92 GB/s     (3.8k)
Total      | 7.83 GB/s    (15.3k) | 7.59 GB/s     (7.4k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | busy            | 2.38 Gbits/sec  | 8.69 ms        
Scaleway        | Paris, FR (10G)           | busy            | 2.37 Gbits/sec  | 11.9 ms        
NovoServe       | North Holland, NL (40G)   | 2.60 Gbits/sec  | 2.42 Gbits/sec  | 4.16 ms        
Uztelecom       | Tashkent, UZ (10G)        | 427 Mbits/sec   | 1.75 Gbits/sec  | 92.1 ms        
Clouvider       | NYC, NY, US (10G)         | 515 Mbits/sec   | 1.75 Gbits/sec  | 77.5 ms        
Clouvider       | Dallas, TX, US (10G)      | 388 Mbits/sec   | 1.32 Gbits/sec  | 120 ms         
Clouvider       | Los Angeles, CA, US (10G) | 458 Mbits/sec   | 1.18 Gbits/sec  | 149 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 2.51 Gbits/sec  | 2.36 Gbits/sec  | 8.71 ms        
Scaleway        | Paris, FR (10G)           | 2.42 Gbits/sec  | busy            | 12.7 ms        
NovoServe       | North Holland, NL (40G)   | 2.59 Gbits/sec  | 2.38 Gbits/sec  | 4.22 ms        
Uztelecom       | Tashkent, UZ (10G)        | 92.1 Mbits/sec  | 1.69 Gbits/sec  | 92.2 ms        
Clouvider       | NYC, NY, US (10G)         | 260 Mbits/sec   | 1.78 Gbits/sec  | 77.4 ms        
Clouvider       | Dallas, TX, US (10G)      | 344 Mbits/sec   | 1.22 Gbits/sec  | 120 ms         
Clouvider       | Los Angeles, CA, US (10G) | 376 Mbits/sec   | 1.10 Gbits/sec  | 149 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 3068                          
Multi Core      | 5415                          
Full Test       | https://browser.geekbench.com/v6/cpu/4335471

YABS completed in 12 min 9 sec
```

### Bench

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 7950X 16-Core Processor
 CPU Cores          : 2 @ 4491.560 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 98.3 GB (1.6 GB Used)
 Total Mem          : 3.8 GB (336.5 MB Used)
 System uptime      : 0 days, 0 hour 31 min
 Load average       : 0.07, 0.26, 0.14
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-17-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS206075 Maximilian Jacobsen
 Location           : Hopel / NL
 Region             : Limburg
----------------------------------------------------------------------
 I/O Speed(1st run) : 2.0 GB/s
 I/O Speed(2nd run) : 1.7 GB/s
 I/O Speed(3rd run) : 1.5 GB/s
 I/O Speed(average) : 1774.9 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    2557.28 Mbps      2406.96 Mbps        3.92 ms     
 Los Angeles, US  233.97 Mbps       2312.56 Mbps        145.32 ms   
 Dallas, US       290.43 Mbps       2253.09 Mbps        117.68 ms   
 Montreal, CA     120.47 Mbps       669.66 Mbps         84.22 ms    
 Paris, FR        1062.19 Mbps      2290.47 Mbps        16.62 ms    
 Amsterdam, NL    2508.63 Mbps      2264.76 Mbps        4.49 ms     
 Shanghai, CN     49.27 Mbps        1354.14 Mbps        167.53 ms   
 Chongqing, CN    0.44 Mbps         0.19 Mbps           258.67 ms   
 Hongkong, CN     145.40 Mbps       1958.24 Mbps        191.03 ms   
 Mumbai, IN       253.09 Mbps       2340.14 Mbps        124.36 ms   
 Singapore, SG    101.28 Mbps       24.25 Mbps          411.42 ms   
 Tokyo, JP        110.31 Mbps       1142.64 Mbps        240.93 ms   
----------------------------------------------------------------------
 Finished in        : 5 min 59 sec
 Timestamp          : 2024-01-10 15:35:26 CET
----------------------------------------------------------------------
```

### Geekbench 5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-17-amd64 x86_64
  Model                         QEMU Standard PC (Q35 + ICH9, 2009)
  Motherboard                   N/A
  BIOS                          Proxmox distribution of EDK II 4.2023.08-2

处理器信息
  Name                          AMD Ryzen 9 7950X
  Topology                      1 Processor, 2 Cores
  Identifier                    AuthenticAMD Family 25 Model 97 Stepping 2
  Base Frequency                4.49 GHz
  L1 Instruction Cache          64.0 KB x 2
  L1 Data Cache                 64.0 KB x 2
  L2 Cache                      512 KB x 2
  L3 Cache                      16.0 MB

内存信息
  Size                          3.79 GB

单核测试分数：2212
多核测试分数：4169
详细结果链接：https://browser.geekbench.com/v5/cpu/22123435
```

### byte-unixbench 性能测试

```
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat: GNU/Linux
   OS: GNU/Linux -- 6.1.0-17-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.69-1 (2023-12-30)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD Ryzen 9 7950X 16-Core Processor (8983.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD Ryzen 9 7950X 16-Core Processor (8983.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   15:41:24 up 43 min,  1 user,  load average: 0.14, 0.15, 0.11; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Wed Jan 10 2024 15:41:24 - 16:09:44
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       84357772.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    13345.1 MWIPS (10.0 s, 7 samples)
Execl Throughput                               7767.3 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2275920.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          601569.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       7931506.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3437281.0 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  81563.4 lps   (10.0 s, 7 samples)
Process Creation                              21699.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  21882.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   3764.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        2806512.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   84357772.6   7228.6
Double-Precision Whetstone                       55.0      13345.1   2426.4
Execl Throughput                                 43.0       7767.3   1806.3
File Copy 1024 bufsize 2000 maxblocks          3960.0    2275920.0   5747.3
File Copy 256 bufsize 500 maxblocks            1655.0     601569.5   3634.9
File Copy 4096 bufsize 8000 maxblocks          5800.0    7931506.1  13675.0
Pipe Throughput                               12440.0    3437281.0   2763.1
Pipe-based Context Switching                   4000.0      81563.4    203.9
Process Creation                                126.0      21699.3   1722.2
Shell Scripts (1 concurrent)                     42.4      21882.9   5161.1
Shell Scripts (8 concurrent)                      6.0       3764.2   6273.7
System Call Overhead                          15000.0    2806512.6   1871.0
                                                                   ========
System Benchmarks Index Score                                        3000.3

------------------------------------------------------------------------
Benchmark Run: Wed Jan 10 2024 16:09:44 - 16:38:04
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      164587088.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    26484.9 MWIPS (10.0 s, 7 samples)
Execl Throughput                              10880.8 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2298917.4 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          739314.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3706414.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                             6678454.1 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 817581.4 lps   (10.0 s, 7 samples)
Process Creation                              35495.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  29362.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   3887.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        3062638.5 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  164587088.7  14103.4
Double-Precision Whetstone                       55.0      26484.9   4815.4
Execl Throughput                                 43.0      10880.8   2530.4
File Copy 1024 bufsize 2000 maxblocks          3960.0    2298917.4   5805.3
File Copy 256 bufsize 500 maxblocks            1655.0     739314.3   4467.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    3706414.1   6390.4
Pipe Throughput                               12440.0    6678454.1   5368.5
Pipe-based Context Switching                   4000.0     817581.4   2044.0
Process Creation                                126.0      35495.2   2817.1
Shell Scripts (1 concurrent)                     42.4      29362.7   6925.2
Shell Scripts (8 concurrent)                      6.0       3887.2   6478.6
System Call Overhead                          15000.0    3062638.5   2041.8
                                                                   ========
System Benchmarks Index Score                                        4559.1

======= Script description and score comparison completed! ======= 
```

### Monster 测试

```
root@catcat:~# curl -sL bench.monster | bash -s 
---------------------------------------------------------------------------
 Region: Global  https://bench.monster v1.7.4 2023-12-15 
 Usage : curl -sL bench.monster | bash -s -- -Global
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 12 (64 Bit)
 Virt/Kernel  : KVM / 6.1.0-17-amd64
 CPU Model    : AMD Ryzen 9 7950X 16-Core Processor
 CPU Cores    : 2 @ 4491.560 MHz x86_64 512 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 5.75, 6.40, 3.90
 Total Space  : 99G (2.0G ~3% used)
 Total RAM    : 3879 MB (412 MB + 986 MB Buff in use)
 Total SWAP   : 0 MB (0 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 0 days 1:41
---------------------------------------------------------------------------
 Location     : The Netherlands, Eygelshoven (Limburg)
 ASN & ISP    : AS206075, Maximilian Jacobsen / Maximilian Jacobsen
---------------------------------------------------------------------------

 ## Geekbench v6 CPU Benchmark:

  Single Core : 3022  (MONSTER)
   Multi Core : 5433

 ## IO Test

 CPU Speed:
    bzip2     : 251 MB/s
   sha256     : 503 MB/s
   md5sum     : 915 MB/s

 RAM Speed:
   Avg. write : 7816.5 MB/s
   Avg. read  : 14882.1 MB/s

 Disk Speed:
   1st run    : 2.0 GB/s
   2nd run    : 1.8 GB/s
   3rd run    : 1.6 GB/s
   -----------------------
   Average    : 1843.2 MB/s
```

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 7950X 16-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 4491.560 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 1.00 MB / L3: 32.00 MB
 硬盘空间          : 1.92 GiB / 97.84 GiB
 启动盘路径        : /dev/sda2
 内存              : 419.19 MiB / 3.79 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 1 hour 48 min
 负载              : 0.13, 1.61, 2.50
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-17-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS206075 Maximilian Jacobsen
 IPV4 位置         : Hopel / Limburg / NL
 IPV6 ASN          : AS206075 server-factory.com
 IPV6 位置         : Eygelshoven / Limburg
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          6536 Scores
 2 线程测试(多核)得分:          13180 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          80174.25 MB/s
 单线程写测试:          44249.84 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         121 MB/s (29.47 IOPS, 0.87s))           152 MB/s (37118 IOPS, 0.69s)
 1GB-1M Block           3.0 GB/s (2897 IOPS, 0.35s)             3.4 GB/s (3197 IOPS, 0.31s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 421.06 MB/s (105.2k) | 3.01 GB/s    (47.0k)
Write      | 422.17 MB/s (105.5k) | 3.02 GB/s    (47.3k)
Total      | 843.24 MB/s (210.8k) | 6.04 GB/s    (94.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.03 GB/s     (7.8k) | 3.54 GB/s     (3.4k)
Write      | 4.25 GB/s     (8.3k) | 3.78 GB/s     (3.6k)
Total      | 8.28 GB/s    (16.1k) | 7.33 GB/s     (7.1k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS15S45)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS17S06)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：荷兰
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：荷兰
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：荷兰区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：荷兰区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: NL)
 HotStar:                               No
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: NL)
 Amazon Prime Video:                    Yes (Region: NL)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   INTL
 Viu.com:                               No
 YouTube CDN:                           Amsterdam 
 Netflix Preferred CDN:                 Frankfurt  
 Spotify Registration:                  No
 Steam Currency:                        EUR
 ChatGPT:                               Yes
 Bing Region:                           NL
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               No
 Disney+:                               Yes (Region: NL)
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: NL)
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           Amsterdam 
 Netflix Preferred CDN:                 Frankfurt  
 Spotify Registration:                  No
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           NL
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【NL】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: NL 城市: Hopel 服务商: AS206075 Maximilian Jacobsen
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     测试超时
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.25 ms  AS206075  荷兰, 林堡省, 艾赫尔斯霍芬, maximilian-jacobsen.de
3.53 ms  AS60068  荷兰, 北荷兰省, 阿姆斯特丹, cdn77.com
4.06 ms  AS1299  荷兰, 北荷兰省, 阿姆斯特丹, telia.com
4.83 ms  AS1299  荷兰, 北荷兰省, 阿姆斯特丹, telia.com
11.09 ms  AS1299  英国, 伦敦, telia.com
11.91 ms  AS1299  英国, 伦敦, telia.com
13.97 ms  AS1299  英国, 伦敦, telia.com
208.66 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
220.95 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.23 ms  AS206075  荷兰, 林堡省, 艾赫尔斯霍芬, maximilian-jacobsen.de
3.76 ms  AS60068  荷兰, 北荷兰省, 阿姆斯特丹, cdn77.com
4.20 ms  AS1299  荷兰, 北荷兰省, 阿姆斯特丹, telia.com
14.06 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
10.71 ms  AS4837  德国, 黑森州, 法兰克福, chinaunicom.com, 联通
157.73 ms  AS4837  中国, 北京, chinaunicom.com, 联通
166.80 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
185.12 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
167.93 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
191.38 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
184.12 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.32 ms  AS206075  荷兰, 林堡省, 艾赫尔斯霍芬, maximilian-jacobsen.de
3.47 ms  AS60068  荷兰, 北荷兰省, 阿姆斯特丹, cdn77.com
4.07 ms  AS201011  荷兰, 北荷兰省, 阿姆斯特丹, core-backbone.com
9.35 ms  AS201011  德国, 黑森州, 法兰克福, core-backbone.com
17.14 ms  *  德国, 黑森州, 法兰克福, de-cix.net
19.70 ms  AS58453  德国, 黑森州, 法兰克福, chinamobile.com, 移动
260.13 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
288.14 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
285.24 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
289.20 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
294.54 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
288.85 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    2523.63 Mbps    2417.51 Mbps    3.53     0.0%
法兰克福         2003.24 Mbps    2322.18 Mbps    9.41     0.0%
洛杉矶           238.46 Mbps     1673.99 Mbps    140.03   0.0%
联通上海5G       49.22 Mbps      1360.20 Mbps    186.87   0.0%
电信天津5G       5.67 Mbps       64.45 Mbps      192.88   1.1%
移动Chengdu      0.80 Mbps       1094.70 Mbps    279.25   27.0%
移动陕西5G       0.08 Mbps       1214.39 Mbps    324.71   30.7%
------------------------------------------------------------------------
 总共花费      : 5 分 29 秒
 时间          : Wed Jan 10 16:51:33 CET 2024
------------------------------------------------------------------------
```

### PassMark PerformanceTest Linux 测试

```
AMD Ryzen 9 7950X 16-Core Processor (x86_64)
2 cores @ 0 MHz  |  3.8 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          8001
  Integer Math                     17830 Million Operations/s
  Floating Point Math              15863 Million Operations/s
  Prime Numbers                    64.5 Million Primes/s
  Sorting                          11097 Thousand Strings/s
  Encryption                       3933 MB/s
  Compression                      75469 KB/s
  CPU Single Threaded              4239 Million Operations/s
  Physics                          1048 Frames/s
  Extended Instructions (SSE)      6772 Million Matrices/s

Memory Mark:                       2573
  Database Operations              2902 Thousand Operations/s
  Memory Read Cached               40699 MB/s
  Memory Read Uncached             39382 MB/s
  Memory Write                     22930 MB/s
  Available RAM                    3573 Megabytes
  Memory Latency                   57 Nanoseconds
  Memory Threaded                  49782 MB/s
--------------------------------------------------------------------------
```

### 硬盘读写测试

```
root@catcat:~# dd if=/dev/zero of=256 bs=64K count=4K oflag=dsync
4096+0 records in
4096+0 records out
268435456 bytes (268 MB, 256 MiB) copied, 1.42346 s, 189 MB/s
root@catcat:~# 
```

### 多地回程测试

```
No:1/9 Traceroute to 中国 深圳 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 188.114.96.0 - 572.21ms - Misaka.BER
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes packets
1   31.41.249.3     AS206075                  荷兰  Hopel        
                                              0.35 ms
2   185.229.189.214 AS60068  [CDN77-peerlinks] 捷克 布拉格   cdn77.com 
                                              3.70 ms
3   62.115.150.177  AS1299   [ARELION-NET]    荷兰 北荷兰省 阿姆斯特丹  arelion.com 
                                              4.00 ms
4   62.115.120.226  AS1299   [ARELION-NET]    荷兰 北荷兰省 阿姆斯特丹  arelion.com 
                                              4.46 ms
5   213.155.136.98  AS1299   [TELIANET]       英国 英格兰 伦敦  arelion.com 
                                              11.49 ms
6   62.115.120.239  AS1299   [ARELION-NET]    英国 英格兰 伦敦  arelion.com 
                                              8.74 ms
7   62.115.14.114   AS1299   [ARELION-NET]    英国 英格兰 伦敦  arelion.com 
                                              11.21 ms
8   202.97.58.25    AS4134   [CHINANET-BB]    中国 广东 广州 X-I chinatelecom.com.cn  电信
                                              191.80 ms
9   202.97.12.42    AS4134   [CHINANET-BB]    中国 广东 广州  chinatelecom.com.cn  电信
                                              186.76 ms
10  *
11  *
12  *
13  59.36.216.1     AS4134                    中国 广东 江门市  chinatelecom.com.cn  电信
                                              196.78 ms

No:2/9 Traceroute to 中国 上海 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2a06:98c1:3121::] - 197.12ms - Misaka.LAX
{"error":"Challenge does not exist or has expired"}

RetToken failed 3 times, please try again after a while, exit

No:3/9 Traceroute to 中国 北京 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2a06:98c1:3120::] - 141.94ms - Misaka.BER
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes packets
1   31.41.249.3     AS206075                  荷兰  Hopel        
                                              0.29 ms
2   185.229.189.214 AS60068  [CDN77-peerlinks] 捷克 布拉格   cdn77.com 
                                              3.62 ms
3   62.115.150.177  AS1299   [ARELION-NET]    荷兰 北荷兰省 阿姆斯特丹  arelion.com 
                                              4.07 ms
4   62.115.120.226  AS1299   [ARELION-NET]    荷兰 北荷兰省 阿姆斯特丹  arelion.com 
                                              4.35 ms
5   *
6   62.115.120.239  AS1299   [ARELION-NET]    英国 英格兰 伦敦  arelion.com 
                                              33.57 ms
7   62.115.14.114   AS1299   [ARELION-NET]    英国 英格兰 伦敦  arelion.com 
                                              11.79 ms
8   *
9   202.97.12.61    AS4134   [CHINANET-BB]    中国 北京   chinatelecom.com.cn  电信
                                              153.50 ms
10  *
11  *
12  *
13  220.181.53.1    AS23724  [CHINANET-IDC]   中国 北京   bjtelecom.net  电信
                                              168.73 ms

No:4/9 Traceroute to 中国 广州 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 188.114.96.0 - 53.74ms - Misaka.BER
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes packets
1   31.41.249.3     AS206075                  荷兰  Hopel        
                                              0.15 ms
2   185.229.189.214 AS60068  [CDN77-peerlinks] 捷克 布拉格   cdn77.com 
                                              3.66 ms
3   62.115.150.177  AS1299   [ARELION-NET]    荷兰 北荷兰省 阿姆斯特丹  arelion.com 
                                              4.13 ms
4   62.115.120.226  AS1299   [ARELION-NET]    荷兰 北荷兰省 阿姆斯特丹  arelion.com 
                                              4.26 ms
5   *
6   62.115.124.117  AS1299   [ARELION-NET]    德国 黑森州 美因河畔法兰克福  arelion.com 
                                              10.96 ms
7   *
8   219.158.14.81   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              200.24 ms
9   219.158.4.133   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              198.51 ms
10  219.158.3.57    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              174.13 ms
11  120.83.0.62     AS17816  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              201.65 ms
12  120.80.79.194   AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              182.74 ms
13  *
14  *
15  *
16  *
17  *
18  *
19  *
20  *
21  *
22  *
23  *
24  *
25  *
26  *
27  *
28  *
29  *
30  *

No:5/9 Traceroute to 中国 上海 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 188.114.97.0 - 75.39ms - Misaka.BER
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes packets
1   31.41.249.3     AS206075                  荷兰  Hopel        
                                              0.12 ms
2   185.229.189.214 AS60068  [CDN77-peerlinks] 捷克 布拉格   cdn77.com 
                                              3.63 ms
3   62.115.150.177  AS1299   [ARELION-NET]    荷兰 北荷兰省 阿姆斯特丹  arelion.com 
                                              4.10 ms
4   *
5   62.115.120.241  AS1299   [ARELION-NET]    德国 黑森州 美因河畔法兰克福  arelion.com 
                                              11.47 ms
6   *
7   219.158.43.25   AS4837   [CU169-BACKBONE] 德国 黑森 美因河畔法兰克福  chinaunicom.cn  联通
                                              11.06 ms
8   219.158.14.149  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              196.58 ms
9   219.158.103.25  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              192.00 ms
10  219.158.6.201   AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn 
                                              176.51 ms
11  *
12  *
13  210.22.66.174   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              180.46 ms
14  112.65.95.129   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              196.15 ms

No:6/9 Traceroute to 中国 北京 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2a06:98c1:3121::] - 74.80ms - Misaka.BER
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes packets
1   31.41.249.3     AS206075                  荷兰  Hopel        
                                              0.35 ms
2   185.229.189.214 AS60068  [CDN77-peerlinks] 捷克 布拉格   cdn77.com 
                                              3.75 ms
3   62.115.150.177  AS1299   [ARELION-NET]    荷兰 北荷兰省 阿姆斯特丹  arelion.com 
                                              4.26 ms
4   62.115.120.226  AS1299   [ARELION-NET]    荷兰 北荷兰省 阿姆斯特丹  arelion.com 
                                              4.79 ms
5   62.115.137.223  AS1299   [ARELION-NET]    德国 黑森州 美因河畔法兰克福  arelion.com 
                                              11.44 ms
6   *
7   *
8   219.158.6.21    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn 
                                              149.79 ms
9   219.158.4.105   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              215.46 ms
10  219.158.24.125  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              194.13 ms
11  *
12  *
13  61.49.140.217   AS4808                    中国 北京   chinaunicom.cn  联通
                                              157.78 ms

No:7/9 Traceroute to 中国 深圳 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 188.114.96.0 - 47.34ms - Misaka.BER
IP Geo Data Provider: LeoMoeAPI
traceroute to 120.233.53.1, 30 hops max, 52 bytes packets
1   31.41.249.3     AS206075                  荷兰  Hopel        
                                              0.21 ms
2   185.229.189.214 AS60068  [CDN77-peerlinks] 捷克 布拉格   cdn77.com 
                                              3.61 ms
3   81.95.9.44      AS201011                  荷兰 北荷兰省 阿姆斯特丹  core-backbone.com 
                                              3.92 ms
4   80.249.208.40   *                         荷兰 北荷兰省 阿姆斯特丹        
                                              16.76 ms
5   223.118.18.173  AS58453  [CMI-INT]        英国 英格兰 伦敦  cmi.chinamobile.com  移动
                                              15.99 ms
6   *
7   221.183.68.125  AS9808   [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              293.41 ms
8   221.183.92.21   AS9808   [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              300.35 ms
9   *
10  221.183.39.166  AS9808   [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              294.80 ms
11  *
12  *
13  120.233.53.1    AS56040  [APNIC-AP]       中国 广东 深圳  chinamobile.com  移动
                                              296.71 ms

No:8/9 Traceroute to 中国 上海 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2a06:98c1:3120::] - 187.54ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes packets
1   31.41.249.3     AS206075                  荷兰  Hopel        
                                              0.22 ms
2   185.229.189.214 AS60068  [CDN77-peerlinks] 捷克 布拉格   cdn77.com 
                                              3.73 ms
3   81.95.9.44      AS201011                  荷兰 北荷兰省 阿姆斯特丹  core-backbone.com 
                                              3.93 ms
4   80.249.208.40   *                         荷兰 北荷兰省 阿姆斯特丹        
                                              17.55 ms
5   223.118.18.185  AS58453  [CMI-INT]        英国 英格兰 伦敦  cmi.chinamobile.com  移动
                                              17.28 ms
6   *
7   *
8   *
9   *
10  *
11  *
12  183.194.216.129 AS9808   [APNIC-AP]       中国 上海   chinamobile.com  移动
                                              301.29 ms

No:9/9 Traceroute to 中国 北京 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2a06:98c1:3120::] - 192.71ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes packets
1   31.41.249.3     AS206075                  荷兰  Hopel        
                                              0.07 ms
2   185.229.189.214 AS60068  [CDN77-peerlinks] 捷克 布拉格   cdn77.com 
                                              3.61 ms
3   81.95.9.44      AS201011                  荷兰 北荷兰省 阿姆斯特丹  core-backbone.com 
                                              4.11 ms
4   80.249.208.40   *                         荷兰 北荷兰省 阿姆斯特丹        
                                              16.72 ms
5   223.118.18.173  AS58453  [CMI-INT]        英国 英格兰 伦敦  cmi.chinamobile.com  移动
                                              16.06 ms
6   223.120.22.18   AS58453  [CMI-INT]        中国 广东 广州 北京-广州 cmi.chinamobile.com  移动
                                              294.63 ms
7   221.183.55.106  AS9808   [CMNET]          中国 北京  回国到达层 chinamobile.com  移动
                                              294.96 ms
8   *
9   *
10  *
11  211.136.67.113  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              309.57 ms
12  211.136.67.166  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              318.96 ms
13  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              323.63 ms
14  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              323.71 ms
15  *
16  211.136.25.153  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              320.71 ms
```

### 国内延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-7.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-7.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-7.jpg" alt="" loading="lazy">
</picture>

### 全球延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-8.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-8.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-8.jpg" alt="" loading="lazy">
</picture>
