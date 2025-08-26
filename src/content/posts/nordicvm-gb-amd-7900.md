---
tags: [eu-server]
title: "NordicVM 英国 AMD 7900 测试"
published: 2024-01-20
---

忘记了什么时候注册的商家（似乎刚成立1年多），今天收到了他们的邮件。新上架了英国7900的服务器，惊奇发现性能还不错,单核性能目前3000分,控制面板采用的是virtfusion。

## 套餐

**_Provider : NordicVM  
Type/Plan : \[10GBPS\] RYZEN 9 KVM VPS - KVM-GAME2G  
Processor : AMD Ryzen 9 7900  
Num of Core : 2 Cores  
Memory : 2 GB DDR5 RAM  
Storage : 50 GB NVMe(PCIe 4.0)  
Bandwidth : UNLIMITED @ 1G Mbps IN | 1G Mbps OUT  
Location : GB  
Price : €6.99_** 

## 测评

### lscpu

```shell
root@catcat:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         40 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  2
  On-line CPU(s) list:   0,1
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD Ryzen 9 7900 12-Core Processor
    BIOS Model name:     pc-i440fx-5.2  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               97
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           2
    Stepping:            2
    BogoMIPS:            7386.15
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 
                         syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pc                         lmulqdq ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdr                         and hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_                         core ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx                         512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec                          xgetbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat npt nrip_save avx512vbmi umip pku ospk                         e avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid fsrm arch_cap                         abilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   64 KiB (2 instances)
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
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not af                         fected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```shell

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 1 minutes
Processor  : AMD Ryzen 9 7900 12-Core Processor
CPU cores  : 2 @ 3693.078 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 0.0 KiB
Disk       : 49.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Ace Data Centers
ASN        : Unknown
Host       : Ace Data Centers, Inc.
Location   : London, England (ENG)
Country    : United Kingdom

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 442.50 MB/s (110.6k) | 758.39 MB/s  (11.8k)
Write      | 443.67 MB/s (110.9k) | 762.38 MB/s  (11.9k)
Total      | 886.18 MB/s (221.5k) | 1.52 GB/s    (23.7k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.01 GB/s     (1.9k) | 1.02 GB/s     (1.0k)
Write      | 1.06 GB/s     (2.0k) | 1.09 GB/s     (1.0k)
Total      | 2.08 GB/s     (4.0k) | 2.11 GB/s     (2.0k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 940 Mbits/sec   | 940 Mbits/sec   | 3.86 ms        
Scaleway        | Paris, FR (10G)           | busy            | 937 Mbits/sec   | 17.0 ms        
NovoServe       | North Holland, NL (40G)   | 954 Mbits/sec   | 868 Mbits/sec   | 13.6 ms        
Uztelecom       | Tashkent, UZ (10G)        | 874 Mbits/sec   | 566 Mbits/sec   | 113 ms         
Clouvider       | NYC, NY, US (10G)         | 889 Mbits/sec   | 737 Mbits/sec   | 76.0 ms        
Clouvider       | Dallas, TX, US (10G)      | 861 Mbits/sec   | 388 Mbits/sec   | 107 ms         
Clouvider       | Los Angeles, CA, US (10G) | 829 Mbits/sec   | 382 Mbits/sec   | 144 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 3003                          
Multi Core      | 5190                          
Full Test       | https://browser.geekbench.com/v6/cpu/4474242

YABS completed in 9 min 25 sec
```

### Bench

```shell
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 7900 12-Core Processor
 CPU Cores          : 2 @ 3693.078 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 49.9 GB (2.1 GB Used)
 Total Mem          : 1.9 GB (280.8 MB Used)
 System uptime      : 0 days, 0 hour 13 min
 Load average       : 0.06, 0.26, 0.16
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS212027 Daniel Jackson
 Location           : London / GB
 Region             : England
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.4 GB/s
 I/O Speed(2nd run) : 1.4 GB/s
 I/O Speed(3rd run) : 1.4 GB/s
 I/O Speed(average) : 1433.6 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    813.90 Mbps       919.13 Mbps         104.49 ms   
 Los Angeles, US  633.37 Mbps       762.28 Mbps         136.21 ms   
 Dallas, US       769.22 Mbps       789.19 Mbps         108.23 ms   
 Montreal, CA     762.09 Mbps       924.35 Mbps         77.58 ms    
 Paris, FR        948.05 Mbps       952.97 Mbps         23.89 ms    
 Amsterdam, NL    941.19 Mbps       941.37 Mbps         16.07 ms    
 Shanghai, CN     120.77 Mbps       252.00 Mbps         220.93 ms   
 Hongkong, CN     4.90 Mbps         0.46 Mbps           194.22 ms   
 Mumbai, IN       454.04 Mbps       655.30 Mbps         190.36 ms   
 Singapore, SG    216.29 Mbps       683.38 Mbps         310.43 ms   
 Tokyo, JP        339.83 Mbps       493.23 Mbps         252.17 ms   
----------------------------------------------------------------------
 Finished in        : 5 min 32 sec
 Timestamp          : 2024-01-20 20:51:16 CST
----------------------------------------------------------------------
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.14.0-2

处理器信息
  Name                          AMD Ryzen 9 7900
  Topology                      2 Processors, 2 Cores
  Identifier                    AuthenticAMD Family 25 Model 97 Stepping 2
  Base Frequency                3.69 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      64.0 MB

内存信息
  Size                          1.89 GB

单核测试分数：2106
多核测试分数：4030
详细结果链接：https://browser.geekbench.com/v5/cpu/22153573
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%207900
```

### byte-unixbench 性能测试

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat.blog: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD Ryzen 9 7900 12-Core Processor (7386.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD Ryzen 9 7900 12-Core Processor (7386.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   20:56:33 up 23 min,  1 user,  load average: 0.17, 0.16, 0.14; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sat Jan 20 2024 20:56:33 - 21:24:55
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       82445222.0 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    12891.1 MWIPS (10.0 s, 7 samples)
Execl Throughput                               7847.3 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2158875.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          562449.6 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       7244721.7 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3989278.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 224968.1 lps   (10.0 s, 7 samples)
Process Creation                              12249.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  24213.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4127.8 lpm   (60.0 s, 2 samples)
System Call Overhead                        4205955.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   82445222.0   7064.7
Double-Precision Whetstone                       55.0      12891.1   2343.8
Execl Throughput                                 43.0       7847.3   1825.0
File Copy 1024 bufsize 2000 maxblocks          3960.0    2158875.0   5451.7
File Copy 256 bufsize 500 maxblocks            1655.0     562449.6   3398.5
File Copy 4096 bufsize 8000 maxblocks          5800.0    7244721.7  12490.9
Pipe Throughput                               12440.0    3989278.8   3206.8
Pipe-based Context Switching                   4000.0     224968.1    562.4
Process Creation                                126.0      12249.5    972.2
Shell Scripts (1 concurrent)                     42.4      24213.9   5710.8
Shell Scripts (8 concurrent)                      6.0       4127.8   6879.7
System Call Overhead                          15000.0    4205955.6   2804.0
                                                                   ========
System Benchmarks Index Score                                        3242.5

------------------------------------------------------------------------
Benchmark Run: Sat Jan 20 2024 21:24:55 - 21:53:17
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      162865824.8 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    25467.8 MWIPS (10.0 s, 7 samples)
Execl Throughput                              11635.5 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1807219.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          524728.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       5681281.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                             7846061.5 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 827177.7 lps   (10.0 s, 7 samples)
Process Creation                              32850.9 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  29200.5 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4061.8 lpm   (60.0 s, 2 samples)
System Call Overhead                        4878568.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  162865824.8  13955.9
Double-Precision Whetstone                       55.0      25467.8   4630.5
Execl Throughput                                 43.0      11635.5   2705.9
File Copy 1024 bufsize 2000 maxblocks          3960.0    1807219.9   4563.7
File Copy 256 bufsize 500 maxblocks            1655.0     524728.9   3170.6
File Copy 4096 bufsize 8000 maxblocks          5800.0    5681281.8   9795.3
Pipe Throughput                               12440.0    7846061.5   6307.1
Pipe-based Context Switching                   4000.0     827177.7   2067.9
Process Creation                                126.0      32850.9   2607.2
Shell Scripts (1 concurrent)                     42.4      29200.5   6886.9
Shell Scripts (8 concurrent)                      6.0       4061.8   6769.7
System Call Overhead                          15000.0    4878568.9   3252.4
                                                                   ========
System Benchmarks Index Score                                        4737.4

======= Script description and score comparison completed! ======= 
```

### Monster 测试

```shell
---------------------------------------------------------------------------
 Region: Global  https://bench.monster v1.7.4 2023-12-15 
 Usage : curl -sL bench.monster | bash -s -- -Global
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 12 (64 Bit)
 Virt/Kernel  : KVM / 6.1.0-9-amd64
 CPU Model    : AMD Ryzen 9 7900 12-Core Processor
 CPU Cores    : 2 @ 3693.078 MHz x86_64 1024 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 7.08, 6.89, 4.04
 Total Space  : 50G (2.6G ~6% used)
 Total RAM    : 1932 MB (378 MB + 888 MB Buff in use)
 Total SWAP   : 0 MB (0 MB in use)
 IPv4/IPv6    : ✔ Online / ❌ Offline
 Uptime       : 0 days 1:21
---------------------------------------------------------------------------
 Location     : United Kingdom, London (England)
 ASN & ISP    : , Ace Data Centers / Ace Data Centers, Inc.
---------------------------------------------------------------------------

 ## Geekbench v5 CPU Benchmark:

  Single Core : 2039  (MONSTER)
   Multi Core : 3955

 ## IO Test

 CPU Speed:
    bzip2     : 243 MB/s
   sha256     : 499 MB/s
   md5sum     : 914 MB/s

 RAM Speed:
   Avg. write : 6656.0 MB/s
   Avg. read  : 13960.5 MB/s

 Disk Speed:
   1st run    : 1.4 GB/s
   2nd run    : 1.4 GB/s
   3rd run    : 1.4 GB/s
   -----------------------
   Average    : 1433.6 MB/s
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 7900 12-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 3693.078 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 2.00 MB / L3: 128.00 MB
 硬盘空间          : 2.53 GiB / 49.82 GiB
 启动盘路径        : /dev/vda3
 内存              : 382.57 MiB / 1.89 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 1 hour 24 min
 负载              : 1.00, 3.62, 3.31
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS212027 Daniel Jackson
 IPV4 位置         : London / England / GB
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          6524 Scores
 2 线程测试(多核)得分:          12785 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          78782.56 MB/s
 单线程写测试:          43765.29 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         57.3 MB/s (13.98 IOPS, 1.83s))          114 MB/s (27833 IOPS, 0.92s)
 1GB-1M Block           1.5 GB/s (1436 IOPS, 0.70s)             2.5 GB/s (2366 IOPS, 0.42s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 446.18 MB/s (111.5k) | 755.65 MB/s  (11.8k)
Write      | 447.36 MB/s (111.8k) | 759.63 MB/s  (11.8k)
Total      | 893.54 MB/s (223.3k) | 1.51 GB/s    (23.6k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 985.94 MB/s   (1.9k) | 1.07 GB/s     (1.0k)
Write      | 1.03 GB/s     (2.0k) | 1.14 GB/s     (1.1k)
Total      | 2.02 GB/s     (3.9k) | 2.21 GB/s     (2.1k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: IAD(IAD30S49)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：美国
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[提醒] 无法获取DisneyPlus权验接口信息，当前测试可能会不准确
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：美国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: US)
 HotStar:                               No
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes
 Amazon Prime Video:                    Yes (Region: US)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   US
 Viu.com:                               No
 YouTube CDN:                           Washington DC 
 Netflix Preferred CDN:                 London  
 Spotify Registration:                  No
 Steam Currency:                        USD
 ChatGPT:                               Yes
 Bing Region:                           US
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【US】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  business⑧  
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
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测89 ③
Google搜索可行性：NO
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: GB 城市: London 服务商: AS212027 Daniel Jackson
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     测试超时
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
12.80 ms  AS212027  英国, 西米德兰兹郡, 考文垂, acedatacenters.com
0.48 ms  AS212027  英国, 西米德兰兹郡, 考文垂, pebblehost.com
3.78 ms  AS212027  英国, 西米德兰兹郡, 考文垂, pebblehost.com
106.87 ms  AS3356  英国, 伦敦, level3.com
广州联通 210.21.196.6
15.60 ms  AS212027  英国, 西米德兰兹郡, 考文垂, acedatacenters.com
0.44 ms  AS212027  英国, 西米德兰兹郡, 考文垂, pebblehost.com
10.28 ms  AS212027  英国, 伦敦, pebblehost.com
7.83 ms  AS3257  英国, 伦敦, gtt.net
17.98 ms  AS3257  德国, 黑森州, 法兰克福, gtt.net
207.49 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
204.40 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
234.18 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
210.76 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
211.17 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
28.77 ms  AS212027  英国, 西米德兰兹郡, 考文垂, acedatacenters.com
0.28 ms  AS212027  英国, 西米德兰兹郡, 考文垂, pebblehost.com
3.75 ms  AS212027  英国, 伦敦, pebblehost.com
4.10 ms  AS1299  英国, 伦敦, telia.com
8.53 ms  AS1299  英国, 伦敦, telia.com
200.00 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
202.88 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
203.07 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
216.21 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
219.28 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
214.19 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    796.22 Mbps     950.70 Mbps     110.12   0.0%
法兰克福         949.19 Mbps     949.38 Mbps     21.62    0.0%
洛杉矶           682.07 Mbps     897.63 Mbps     128.32   0.0%
联通上海5G       330.12 Mbps     500.79 Mbps     224.06   0.0%
联通Fuzhou       0.96 Mbps       7.94 Mbps       184.32   4.4%
电信天津5G       0.95 Mbps       10.54 Mbps      1465.46          14.9%
移动Chengdu      862.02 Mbps     768.37 Mbps     232.17   0.0%
------------------------------------------------------------------------
 总共花费      : 6 分 24 秒
 时间          : Sat Jan 20 22:03:53 CST 2024
------------------------------------------------------------------------
```

### PassMark PerformanceTest Linux 测试

```shell
AMD Ryzen 9 7900 12-Core Processor (x86_64)
2 cores @ 0 MHz  |  1.9 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          7664
  Integer Math                     17202 Million Operations/s
  Floating Point Math              13768 Million Operations/s
  Prime Numbers                    63.7 Million Primes/s
  Sorting                          10754 Thousand Strings/s
  Encryption                       3756 MB/s
  Compression                      74746 KB/s
  CPU Single Threaded              4222 Million Operations/s
  Physics                          1029 Frames/s
  Extended Instructions (SSE)      6572 Million Matrices/s

Memory Mark:                       2061
  Database Operations              2943 Thousand Operations/s
  Memory Read Cached               41230 MB/s
  Memory Read Uncached             40471 MB/s
  Memory Write                     26143 MB/s
  Available RAM                    1568 Megabytes
  Memory Latency                   53 Nanoseconds
  Memory Threaded                  59569 MB/s
--------------------------------------------------------------------------------
```

### 硬盘读写测试

好猛的硬盘

```shell
root@catcat:~# dd if=/dev/zero of=256 bs=64K count=4K oflag=dsync
4096+0 records in
4096+0 records out
268435456 bytes (268 MB, 256 MiB) copied, 1.11176 s, 241 MB/s
root@catcat:~# 
```

### 全球延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-29.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-29.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-29.jpg" alt="" loading="lazy">
</picture>