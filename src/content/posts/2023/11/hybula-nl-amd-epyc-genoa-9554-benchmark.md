---
title: "Hybula 荷兰预售 AMD EPYC™ Genoa 9554 测评"
published: 2023-11-30
categories: 
  - "vps"
  - "eu-server"
---

Hybula的新套餐，路由和网络都很不错，除了价格较贵，其他没啥缺点。

原价13欧/月，36欧/季，黑五预售打75折，实付27欧/季，并且在LowendTalk评论留下订单号可升级7个备份。

##### Network

Our new network is located in Amsterdam, the Netherlands, which is directly interconnected with our dark fiber ring. Transit is provided by a terabits scaled backbone ([AS35133](https://bgp.tools/as/35133)) with a premium blend of peering and transits. We are present in all major data centers in Amsterdam like Equinix, Interxion/DRE, Nikhef, Iron Mountain. Our network is currently upstreamed by CDN77, NovoSrve, Liberty Global, Cosmic Global, ERA-IX, giving us access to Arelion (Telia), Lumen (Level3), Cogent, NTT, GTT, Core-Backbone, Telecom Italia Sparkle, Vodafone, Orange, HE, AMS-IX, NL-ix, Cloudflare, Google. Even optimized routes to CTGNet (AS23764), China Telecom (AS4134), China Mobile (AS58453), China Unicom (AS4837).

  
**_looking glass here: [https://lg-nl-ams.hybula.net/](https://lg-nl-ams.hybula.net/)_**

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/11/image-7.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/11/image-7.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/11/image-7.jpg" alt="" loading="lazy">
</picture>

> ## 套餐

**_Provider : Hybula  
Type/Plan : HC4  
Processor : AMD EPYC 9554  
Num of Core : 4 Cores  
Memory : 4 GB  
Storage : 50 GB NVMe  
Bandwidth : 10 TB @ 2 Gbps  
Location : NL  
Price : € 13 / Month_**

## 测评

### lscpu

```
root@catcat:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 57 bits virtual
  Byte Order:            Little Endian
CPU(s):                  4
  On-line CPU(s) list:   0-3
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        Red Hat
  Model name:            AMD EPYC 9554 64-Core Processor
    BIOS Model name:     RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               17
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           4
    Stepping:            1
    BogoMIPS:            6199.99
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pa                         t pse36 clflush mmx fxsr sse sse2 syscall nx mmxext fxsr_opt pdp                         e1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pn                         i pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcn                         t tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_l                         m cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch 
                         osvw perfctr_core invpcid_single ssbd ibrs ibpb stibp vmmcall fs                         gsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx51                         2dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni a                         vx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves avx512_bf16 clze                         ro xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_cl                         ean pausefilter pfthreshold v_vmsave_vmload vgif avx512vbmi umip                          pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_                         bitalg avx512_vpopcntdq la57 rdpid fsrm flush_l1d arch_capabilit                         ies
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   128 KiB (4 instances)
  L1i:                   128 KiB (4 instances)
  L2:                    4 MiB (4 instances)
  L3:                    1 GiB (4 instances)
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
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitiza                         tion
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disable                         d, RSB filling, PBRSB-eIBRS Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 1 minutes
Processor  : AMD EPYC 9554 64-Core Processor
CPU cores  : 4 @ 3099.998 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 49.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Hybula B.V.
ASN        : AS35133 Hybula B.V.
Host       : Hybula B.V
Location   : Amsterdam, North Holland (NH)
Country    : Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 368.47 MB/s  (92.1k) | 4.94 GB/s    (77.2k)
Write      | 369.44 MB/s  (92.3k) | 4.97 GB/s    (77.6k)
Total      | 737.91 MB/s (184.4k) | 9.91 GB/s   (154.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 6.40 GB/s    (12.5k) | 6.18 GB/s     (6.0k)
Write      | 6.74 GB/s    (13.1k) | 6.59 GB/s     (6.4k)
Total      | 13.14 GB/s   (25.6k) | 12.78 GB/s   (12.4k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2150                          
Multi Core      | 6941                          
Full Test       | https://browser.geekbench.com/v6/cpu/3781848

YABS completed in 5 min 27 sec
```

### GeekBench5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.1-1.el9

处理器信息
  Name                          AMD EPYC 9554 64-Core Processor                
  Topology                      4 Processors, 4 Cores
  Identifier                    AuthenticAMD Family 25 Model 17 Stepping 1
  Base Frequency                3.10 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      256 MB

内存信息
  Size                          3.79 GB

单核测试分数：1563
多核测试分数：6046
详细结果链接：https://browser.geekbench.com/v5/cpu/21998359
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%209554
```

### byte-unixbench 性能测试

```
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat.blog: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9554 64-Core Processor (6200.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9554 64-Core Processor (6200.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD EPYC 9554 64-Core Processor (6200.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD EPYC 9554 64-Core Processor (6200.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   09:24:02 up  1:34,  3 users,  load average: 0.93, 0.81, 0.56; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Thu Nov 30 2023 09:24:02 - 09:51:58
4 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       57383695.1 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     8938.1 MWIPS (10.0 s, 7 samples)
Execl Throughput                               4354.6 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1465012.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          389170.1 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       4925572.2 KBps  (30.0 s, 2 samples)
Pipe Throughput                             2752657.4 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 103754.0 lps   (10.0 s, 7 samples)
Process Creation                              10483.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  16804.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4400.1 lpm   (60.0 s, 2 samples)
System Call Overhead                        2907664.4 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   57383695.1   4917.2
Double-Precision Whetstone                       55.0       8938.1   1625.1
Execl Throughput                                 43.0       4354.6   1012.7
File Copy 1024 bufsize 2000 maxblocks          3960.0    1465012.2   3699.5
File Copy 256 bufsize 500 maxblocks            1655.0     389170.1   2351.5
File Copy 4096 bufsize 8000 maxblocks          5800.0    4925572.2   8492.4
Pipe Throughput                               12440.0    2752657.4   2212.7
Pipe-based Context Switching                   4000.0     103754.0    259.4
Process Creation                                126.0      10483.8    832.1
Shell Scripts (1 concurrent)                     42.4      16804.9   3963.4
Shell Scripts (8 concurrent)                      6.0       4400.1   7333.4
System Call Overhead                          15000.0    2907664.4   1938.4
                                                                   ========
System Benchmarks Index Score                                        2241.5

------------------------------------------------------------------------
Benchmark Run: Thu Nov 30 2023 09:51:58 - 10:19:55
4 CPUs in system; running 4 parallel copies of tests

Dhrystone 2 using register variables      228106264.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    35795.0 MWIPS (9.9 s, 7 samples)
Execl Throughput                              12201.0 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        888573.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          231398.6 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2894941.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                            10928778.1 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 690956.0 lps   (10.0 s, 7 samples)
Process Creation                              40685.0 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  35707.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4940.9 lpm   (60.0 s, 2 samples)
System Call Overhead                        3711258.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  228106264.9  19546.4
Double-Precision Whetstone                       55.0      35795.0   6508.2
Execl Throughput                                 43.0      12201.0   2837.4
File Copy 1024 bufsize 2000 maxblocks          3960.0     888573.5   2243.9
File Copy 256 bufsize 500 maxblocks            1655.0     231398.6   1398.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    2894941.1   4991.3
Pipe Throughput                               12440.0   10928778.1   8785.2
Pipe-based Context Switching                   4000.0     690956.0   1727.4
Process Creation                                126.0      40685.0   3229.0
Shell Scripts (1 concurrent)                     42.4      35707.4   8421.6
Shell Scripts (8 concurrent)                      6.0       4940.9   8234.8
System Call Overhead                          15000.0    3711258.9   2474.2
                                                                   ========
System Benchmarks Index Score                                        4362.6

======= Script description and score comparison completed! ======= 
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```
AMD EPYC 9554 64-Core Processor (x86_64)
4 cores @ 0 MHz  |  3.8 GiB RAM
Number of Processes: 4  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          10767
  Integer Math                     24575 Million Operations/s
  Floating Point Math              21682 Million Operations/s
  Prime Numbers                    80.4 Million Primes/s
  Sorting                          15369 Thousand Strings/s
  Encryption                       5349 MB/s
  Compression                      105168 KB/s
  CPU Single Threaded              2919 Million Operations/s
  Physics                          1432 Frames/s
  Extended Instructions (SSE)      9829 Million Matrices/s

Memory Mark:                       2189
  Database Operations              4483 Thousand Operations/s
  Memory Read Cached               28149 MB/s
  Memory Read Uncached             27232 MB/s
  Memory Write                     26292 MB/s
  Available RAM                    2610 Megabytes
  Memory Latency                   66 Nanoseconds
  Memory Threaded                  109609 MB/s
--------------------------------------------------------------------------
```

### Bench

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 9554 64-Core Processor
 CPU Cores          : 4 @ 3099.998 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 49.9 GB (2.2 GB Used)
 Total Mem          : 3.8 GB (444.9 MB Used)
 System uptime      : 0 days, 0 hour 16 min
 Load average       : 0.08, 0.28, 0.23
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS35133 Hybula B.V.
 Location           : Amsterdam / NL
 Region             : North Holland
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.7 GB/s
 I/O Speed(2nd run) : 2.1 GB/s
 I/O Speed(3rd run) : 2.2 GB/s
 I/O Speed(average) : 2048.0 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    1994.44 Mbps      1901.59 Mbps        0.58 ms     
 Los Angeles, US  650.12 Mbps       1498.51 Mbps        137.34 ms   
 Dallas, US       839.07 Mbps       1408.75 Mbps        109.22 ms   
 Montreal, CA     176.02 Mbps       932.51 Mbps         82.23 ms    
 Paris, FR        2014.82 Mbps      1905.05 Mbps        12.10 ms    
 Amsterdam, NL    1996.21 Mbps      1902.88 Mbps        1.16 ms     
 Shanghai, CN     521.13 Mbps       1120.94 Mbps        191.79 ms   
 Hongkong, CN     231.15 Mbps       994.26 Mbps         238.13 ms   
 Mumbai, IN       765.60 Mbps       1882.66 Mbps        121.76 ms   
 Singapore, SG    260.88 Mbps       1465.60 Mbps        320.40 ms   
 Tokyo, JP        338.02 Mbps       669.73 Mbps         226.27 ms   
----------------------------------------------------------------------
 Finished in        : 5 min 27 sec
 Timestamp          : 2023-11-30 08:12:22 CST
----------------------------------------------------------------------
```

### 融合怪脚本测速

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 9554 64-Core Processor
 CPU 核心数        : 4
 CPU 频率          : 3099.998 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 4.00 MB / L3: 1024.00 MB
 硬盘空间          : 2.18 GiB / 49.82 GiB
 启动盘路径        : /dev/vda3
 内存              : 294.30 MiB / 3.79 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 24 min
 负载              : 0.00, 0.12, 0.18
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS35133 Hybula B.V.
 IPV4 位置         : Amsterdam / North Holland / NL
 IPV6 ASN          : AS35133 Hybula B.V.
 IPV6 位置         : Amsterdam / NL-NH
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		4602 Scores
 4 线程测试(多核)得分: 		18389 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		50732.77 MB/s
 单线程写测试:		31281.96 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		92.1 MB/s (22.48 IOPS, 1.14s)		119 MB/s (29154 IOPS, 0.88s)
 1GB-1M Block		1.3 GB/s (1268 IOPS, 0.79s)		6.4 GB/s (6085 IOPS, 0.16s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 395.46 MB/s  (98.8k) | 4.10 GB/s    (64.0k)
Write      | 396.50 MB/s  (99.1k) | 4.12 GB/s    (64.4k)
Total      | 791.97 MB/s (197.9k) | 8.22 GB/s   (128.5k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 6.65 GB/s    (12.9k) | 6.95 GB/s     (6.7k)
Write      | 7.00 GB/s    (13.6k) | 7.41 GB/s     (7.2k)
Total      | 13.66 GB/s   (26.6k) | 14.36 GB/s   (14.0k)
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
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：荷兰
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
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
 Dazn:					Yes (Region: NL)
 HotStar:				No
 Disney+:				Yes (Region: NL)
 Netflix:				Yes (Region: NL)
 YouTube Premium:			Yes (Region: NL)
 Amazon Prime Video:			Yes (Region: NL)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				Amsterdam 
 Netflix Preferred CDN:			Amsterdam  
 Spotify Registration:			Yes (Region: NL)
 Steam Currency:			EUR
 ChatGPT:				Yes
 Bing Region:				NL
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: NL)
 Netflix:				Yes (Region: NL)
 YouTube Premium:			Yes (Region: NL)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Amsterdam 
 Netflix Preferred CDN:			London  
 Spotify Registration:			Yes (Region: NL)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Failed
 Bing Region:				NL
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【NL】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):business①  Data Center/Web Hosting/Transit⑤  business⑧  business⑨  
  公司类型(company_type):isp①  hosting⑧  
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
国家: NL 城市: Amsterdam 服务商: AS35133 Hybula B.V.
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 电信163 [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  电信163 [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.28 ms 	AS35133 荷兰 北荷兰省 阿姆斯特丹 hybula.com
0.73 ms 	AS35133 荷兰 北荷兰省 阿姆斯特丹 hybula.com
0.69 ms 	AS24875 [NL-NOVOSERVE] 荷兰 北荷兰省 阿姆斯特丹 novoserve.com
1.02 ms 	AS24875 [NL-NOVOSERVE] 荷兰 北荷兰省 阿姆斯特丹 novoserve.com
3.58 ms 	* 英国 英格兰 波普勒
207.97 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
407.49 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
211.89 ms 	AS134774 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.cn 电信
210.03 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.26 ms 	AS35133 荷兰 北荷兰省 阿姆斯特丹 hybula.com
0.70 ms 	AS35133 荷兰 北荷兰省 阿姆斯特丹 hybula.com
0.70 ms 	AS24875 [NL-NOVOSERVE] 荷兰 北荷兰省 阿姆斯特丹 novoserve.com
1.01 ms 	AS24875 [NL-NOVOSERVE] 荷兰 北荷兰省 阿姆斯特丹 novoserve.com
8.56 ms 	AS4837 [CU169-BACKBONE] 德国 黑森州 美因河畔法兰克福 chinaunicom.cn
151.55 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
158.84 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
359.77 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
160.42 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
174.73 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
159.07 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.36 ms 	AS35133 荷兰 北荷兰省 阿姆斯特丹 hybula.com
0.77 ms 	AS35133 荷兰 北荷兰省 阿姆斯特丹 hybula.com
0.76 ms 	AS24875 [NL-NOVOSERVE] 荷兰 北荷兰省 阿姆斯特丹 novoserve.com
0.97 ms 	* [NL-NOVOSERVE] 荷兰 北荷兰省 阿姆斯特丹
1.37 ms 	* [NL-NOVOSERVE] 荷兰 北荷兰省 哈勒姆
4.13 ms 	AS58453 [CMI-INT] 荷兰 北荷兰省 哈勒姆 cmi.chinamobile.com 移动
8.71 ms 	AS58453 [CMI-INT] 德国 黑森州 美因河畔法兰克福 cmi.chinamobile.com 移动
211.87 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
210.00 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
209.61 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
209.94 ms 	AS9808 [CMNET] 中国 上海市 chinamobile.com 移动
211.65 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
218.79 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
218.56 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 1996.10 Mbps	 1925.37 Mbps	 0.57	  NULL
法兰克福	 2011.60 Mbps	 1877.88 Mbps	 10.08	  0.0%
新加坡		 482.94 Mbps	 1644.42 Mbps	 159.85	  NULL
联通郑州5G	 766.75 Mbps	 773.16 Mbps	 163.03	  NULL
联通成都	 10.11 Mbps	 11.78 Mbps	 170.40	  NULL
电信Nanjing5G	 83.12 Mbps	 1665.12 Mbps	 151.05	  0.0%
电信江苏5G	 12.58 Mbps	 23.19 Mbps	 148.88	  0.3%
移动硬核通信	 240.46 Mbps	 154.20 Mbps	 225.14	  NULL
------------------------------------------------------------------------
 总共花费      : 5 分 32 秒
 时间          : Thu Nov 30 08:19:48 CST 2023
------------------------------------------------------------------------
```

### 综合测试

```
---------------------------------------------------------------------------
 Region: Global  https://bench.monster v1.7.3 2023-10-27 
 Usage : curl -sL bench.monster | bash -s -- -Global
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 12 (64 Bit)
 Virt/Kernel  : KVM / 6.1.0-9-amd64
 CPU Model    : AMD EPYC 9554 64-Core Processor
 CPU Cores    : 4 @ 3099.998 MHz x86_64 1024 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 0.04, 0.94, 2.96
 Total Space  : 50G (2.6G ~6% used)
 Total RAM    : 3878 MB (534 MB + 1021 MB Buff in use)
 Total SWAP   : 0 MB (0 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 0 days 2:46
---------------------------------------------------------------------------
 Location     : Netherlands, Amsterdam (North Holland)
 ASN & ISP    : AS35133, Hybula B.V. / Hybula B.V
---------------------------------------------------------------------------

 ## Geekbench v6 CPU Benchmark:

  Single Core : 2151  (THE BEAST)
   Multi Core : 6903

 ## IO Test

 CPU Speed:
    bzip2     : 175 MB/s
   sha256     : 358 MB/s
   md5sum     : 654 MB/s

 RAM Speed:
   Avg. write : 5461.3 MB/s
   Avg. read  : 10922.7 MB/s

 Disk Speed:
   1st run    : 1.7 GB/s
   2nd run    : 1.7 GB/s
   3rd run    : 2.3 GB/s
   -----------------------
   Average    : 1945.6 MB/s

 ## Global Speedtest.net

 Location                       Upload           Download         Ping   
---------------------------------------------------------------------------
 Nearby                         1201.88 Mbit/s   1594.52 Mbit/s   18.956 ms
---------------------------------------------------------------------------
 USA, New York (Hivelocity)     235.14 Mbit/s    222.49 Mbit/s    74.333 ms
 USA, Chicago (Windstream)      181.77 Mbit/s    324.38 Mbit/s    97.694 ms
 USA, Houston (Comcast)         154.90 Mbit/s    329.18 Mbit/s   111.941 ms
 USA, Miami (Comcast)           160.57 Mbit/s    299.24 Mbit/s   114.087 ms
 USA, Los Angeles (Windstream)  117.44 Mbit/s    154.34 Mbit/s   155.902 ms
 UK, London (toob Ltd)          1242.92 Mbit/s   1452.34 Mbit/s   17.693 ms
 France, Paris (Orange)         1364.74 Mbit/s   1562.83 Mbit/s   13.283 ms
 Germany, Berlin (DNS:NET)      934.49 Mbit/s    881.97 Mbit/s    16.985 ms
 Spain, Madrid (MasMovil)       642.20 Mbit/s    1133.65 Mbit/s   26.913 ms
 Italy, Rome (Unidata)          532.41 Mbit/s    398.58 Mbit/s    32.859 ms
 India, Mumbai (Tatasky)        147.45 Mbit/s    391.54 Mbit/s   128.336 ms
 Singapore (StarHub)            117.01 Mbit/s    156.99 Mbit/s   156.248 ms
 Japan, Tsukuba (SoftEther)     51.57 Mbit/s     80.18 Mbit/s    224.137 ms
 Australia, Sydney (Optus)      19.49 Mbit/s     51.54 Mbit/s    302.768 ms
 RSA, Randburg (Cool Ideas)     112.82 Mbit/s    223.63 Mbit/s   168.570 ms
```

### Speedtest

```
   Speedtest by Ookla

      Server: Claranet Benelux B.V. - Amsterdam (id: 30847)
         ISP: Hybula
Idle Latency:     1.00 ms   (jitter: 0.01ms, low: 0.98ms, high: 1.01ms)
    Download:  1896.04 Mbps (data used: 904.4 MB)                                                   
                  0.70 ms   (jitter: 0.04ms, low: 0.62ms, high: 0.85ms)
      Upload:  1993.43 Mbps (data used: 3.2 GB)                                                   
                  0.90 ms   (jitter: 0.09ms, low: 0.81ms, high: 3.90ms)
 Packet Loss:     0.0%
  Result URL: https://www.speedtest.net/result/c/8f1fc4b6-111a-43fb-b8a2-b26fc305e0d2
```

### Misaka Ping

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/11/f4834bba02b954ca8add5c5f29d3b816.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/11/f4834bba02b954ca8add5c5f29d3b816.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/11/f4834bba02b954ca8add5c5f29d3b816.jpg" alt="" loading="lazy">
</picture>

### 全球延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/11/image-8.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/11/image-8.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/11/image-8.jpg" alt="" loading="lazy">
</picture>
