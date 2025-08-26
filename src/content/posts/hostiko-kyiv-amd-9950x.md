---
tags: [eu-server]
title: "Hostiko 基辅 AMD 9950X 测评"
published: 2024-08-25
---

除开Hybula(不让我下单，测不了),找好久终于找到了其他销售9950X的商家。商家来自乌克兰，不支持PayPal。本文不构成任何购买建议，仅仅只是为了测试9950X。

## 配置：

- **_Provider : Hostiko_**

- **_Type/Plan :_** **_UA-PERF-2_**

- **_Processor :_** **_AMD Ryzen 9 9950X 16-Core Processor_**

- **_Num of Core :_** **_2_** **_Cores_**

- **_Memory :_** **_8_** **_GB_**

- **_Storage : 10_****_0_** **_GB NVMe_**

- **_Bandwidth : 10 Gbps IN | 10 Gbps OUT_**

- **_Location :_** **_Kyiv_**

- **_Price :_** **_19.70 \$/month_**

## 测评

### CPU

```shell
root@catcat:~# lscpu
Architecture:                       x86_64
CPU op-mode(s):                     32-bit, 64-bit
Byte Order:                         Little Endian
Address sizes:                      48 bits physical, 48 bits virtual
CPU(s):                             2
On-line CPU(s) list:                0,1
Thread(s) per core:                 1
Core(s) per socket:                 2
Socket(s):                          1
NUMA node(s):                       1
Vendor ID:                          AuthenticAMD
CPU family:                         26
Model:                              68
Model name:                         AMD Ryzen 9 9950X 16-Core Processor
Stepping:                           0
CPU MHz:                            4291.920
BogoMIPS:                           8583.84
Hypervisor vendor:                  KVM
Virtualization type:                full
L1d cache:                          128 KiB
L1i cache:                          128 KiB
L2 cache:                           1 MiB
L3 cache:                           16 MiB
NUMA node0 CPU(s):                  0,1
Vulnerability Gather data sampling: Not affected
Vulnerability Itlb multihit:        Not affected
Vulnerability L1tf:                 Not affected
Vulnerability Mds:                  Not affected
Vulnerability Meltdown:             Not affected
Vulnerability Mmio stale data:      Not affected
Vulnerability Retbleed:             Not affected
Vulnerability Spec rstack overflow: Not affected
Vulnerability Spec store bypass:    Mitigation; Speculative Store Bypass disabled via prctl and seccomp
Vulnerability Spectre v1:           Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:           Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not affected
Vulnerability Srbds:                Not affected
Vulnerability Tsx async abort:      Not affected
Flags:                              fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx m                                    mxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 sse4                                    _1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy cr8_lega                                    cy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 av                                    x2 smep bmi2 erms invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw av                                    x512vl xsaveopt xsavec xgetbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat avx512vbmi umip pku ospke avx51                                    2_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid movdiri movdir64b fsrm avx512_vp2in                                    tersect flush_l1d arch_capabilities
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 4 minutes
Processor  : AMD Ryzen 9 9950X 16-Core Processor
CPU cores  : 2 @ 4291.920 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 7.8 GiB
Swap       : 512.0 MiB
Disk       : 98.3 GiB
Distro     : Debian GNU/Linux 11 (bullseye)
Kernel     : 5.10.0-28-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : HOSTIKO
ASN        : AS203394 MDCLOUD LTD
Location   : Kyiv, Kyiv City (30)
Country    : Ukraine

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda2):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 625.19 MB/s (156.2k) | 5.40 GB/s    (84.4k)
Write      | 626.84 MB/s (156.7k) | 5.43 GB/s    (84.8k)
Total      | 1.25 GB/s   (313.0k) | 10.83 GB/s  (169.3k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.47 GB/s     (4.8k) | 4.16 GB/s     (4.0k)
Write      | 2.61 GB/s     (5.0k) | 4.44 GB/s     (4.3k)
Total      | 5.09 GB/s     (9.9k) | 8.61 GB/s     (8.4k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 4.93 Gbits/sec  | 4.99 Gbits/sec  | 37.8 ms        
Eranium         | Amsterdam, NL (100G)      | busy            | 5.47 Gbits/sec  | 35.7 ms        
Uztelecom       | Tashkent, UZ (10G)        | 673 Mbits/sec   | 1.49 Gbits/sec  | 92.7 ms        
Leaseweb        | Singapore, SG (10G)       | 762 Mbits/sec   | busy            | 184 ms         
Clouvider       | Los Angeles, CA, US (10G) | 715 Mbits/sec   | 1.03 Gbits/sec  | 173 ms         
Leaseweb        | NYC, NY, US (10G)         | 1.54 Gbits/sec  | 1.68 Gbits/sec  | 110 ms         
Edgoo           | Sao Paulo, BR (1G)        | 733 Mbits/sec   | 780 Mbits/sec   | 225 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 4.97 Gbits/sec  | 4.97 Gbits/sec  | 37.8 ms        
Eranium         | Amsterdam, NL (100G)      | 3.04 Gbits/sec  | 5.37 Gbits/sec  | 35.5 ms        
Uztelecom       | Tashkent, UZ (10G)        | 1.72 Gbits/sec  | 1.65 Gbits/sec  | 92.7 ms        
Leaseweb        | Singapore, SG (10G)       | 829 Mbits/sec   | busy            | 184 ms         
Clouvider       | Los Angeles, CA, US (10G) | 978 Mbits/sec   | 1.04 Gbits/sec  | 172 ms         
Leaseweb        | NYC, NY, US (10G)         | 1.58 Gbits/sec  | 1.66 Gbits/sec  | 110 ms         
Edgoo           | Sao Paulo, BR (1G)        | 615 Mbits/sec   | 777 Mbits/sec   | 225 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 3254                          
Multi Core      | 5668                          
Full Test       | https://browser.geekbench.com/v6/cpu/7487078

YABS completed in 11 min 57 sec
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 11 (bullseye)
  Kernel                        Linux 5.10.0-28-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.0-4.module_el8.9.0+3659+9c8643f3

处理器信息
  Name                          AMD Ryzen 9 9950X 16-Core Processor            
  Topology                      1 Processor, 2 Cores
  Identifier                    AuthenticAMD Family 26 Model 68 Stepping 0
  Base Frequency                4.29 GHz
  L1 Instruction Cache          64.0 KB x 2
  L1 Data Cache                 64.0 KB x 2
  L2 Cache                      512 KB x 2
  L3 Cache                      16.0 MB

内存信息
  Size                          7.76 GB

单核测试分数：2415
多核测试分数：4313
详细结果链接：https://browser.geekbench.com/v5/cpu/22808798
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%209950X
```

### Bench

```shell
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 9950X 16-Core Processor
 CPU Cores          : 2 @ 4291.920 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✗ Disabled
 Total Disk         : 98.8 GB (1.6 GB Used)
 Total Mem          : 7.8 GB (61.0 MB Used)
 Total Swap         : 512.0 MB (0 Used)
 System uptime      : 0 days, 0 hour 20 min
 Load average       : 0.13, 0.26, 0.16
 OS                 : Debian GNU/Linux 11
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.10.0-28-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Region             : No ISP detected
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.4 GB/s
 I/O Speed(2nd run) : 1.6 GB/s
 I/O Speed(3rd run) : 1.7 GB/s
 I/O Speed(average) : 1604.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    9350.10 Mbps      17601.49 Mbps       3.78 ms     
 Los Angeles, US  519.50 Mbps       3470.81 Mbps        171.94 ms   
 Dallas, US       610.86 Mbps       4283.59 Mbps        144.73 ms   
 Montreal, CA     142.99 Mbps       911.52 Mbps         111.01 ms   
 Amsterdam, NL    1989.89 Mbps      4175.61 Mbps        33.17 ms    
 Hongkong, CN     369.73 Mbps       3295.68 Mbps        234.98 ms   
 Mumbai, IN       86.26 Mbps        5727.48 Mbps        140.16 ms   
 Singapore, SG    129.85 Mbps       240.30 Mbps         270.09 ms   
 Tokyo, JP        360.21 Mbps       1299.01 Mbps        209.19 ms   
----------------------------------------------------------------------
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD Ryzen 9 9950X 16-Core Processor (x86_64)
2 cores @ 4291 MHz  |  7.8 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          8350
  Integer Math                     18668 Million Operations/s
  Floating Point Math              18609 Million Operations/s
  Prime Numbers                    69.1 Million Primes/s
  Sorting                          10848 Thousand Strings/s
  Encryption                       3871 MB/s
  Compression                      79838 KB/s
  CPU Single Threaded              4469 Million Operations/s
  Physics                          1194 Frames/s
  Extended Instructions (SSE)      6882 Million Matrices/s

Memory Mark:                       2576
  Database Operations              3206 Thousand Operations/s
  Memory Read Cached               40585 MB/s
  Memory Read Uncached             35495 MB/s
  Memory Write                     19473 MB/s
  Available RAM                    7639 Megabytes
  Memory Latency                   71 Nanoseconds
  Memory Threaded                  45718 MB/s
--------------------------------------------------------------------------
```

### UnixBench

```shell
root@catcat:~/byte-unixbench/UnixBench/results# cat catcat.blog-2024-08-25-01
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat.blog: GNU/Linux
   OS: GNU/Linux -- 5.10.0-28-amd64 -- #1 SMP Debian 5.10.209-2 (2024-01-31)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD Ryzen 9 9950X 16-Core Processor (8583.8 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 1: AMD Ryzen 9 9950X 16-Core Processor (8583.8 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   13:09:38 up 30 min,  1 user,  load average: 0.26, 0.16, 0.12; runlevel 2024-08-25

------------------------------------------------------------------------
Benchmark Run: Sun Aug 25 2024 13:09:38 - 13:37:56
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables      101006040.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    13415.9 MWIPS (10.0 s, 7 samples)
Execl Throughput                              12616.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       3168801.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          789109.4 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       9954681.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                             5172504.0 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  88042.7 lps   (10.0 s, 7 samples)
Process Creation                              28699.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  29544.0 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5897.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        4644410.5 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  101006040.7   8655.2
Double-Precision Whetstone                       55.0      13415.9   2439.3
Execl Throughput                                 43.0      12616.1   2934.0
File Copy 1024 bufsize 2000 maxblocks          3960.0    3168801.2   8002.0
File Copy 256 bufsize 500 maxblocks            1655.0     789109.4   4768.0
File Copy 4096 bufsize 8000 maxblocks          5800.0    9954681.1  17163.2
Pipe Throughput                               12440.0    5172504.0   4158.0
Pipe-based Context Switching                   4000.0      88042.7    220.1
Process Creation                                126.0      28699.5   2277.7
Shell Scripts (1 concurrent)                     42.4      29544.0   6967.9
Shell Scripts (8 concurrent)                      6.0       5897.2   9828.7
System Call Overhead                          15000.0    4644410.5   3096.3
                                                                   ========
System Benchmarks Index Score                                        4022.2

------------------------------------------------------------------------
Benchmark Run: Sun Aug 25 2024 13:37:56 - 14:06:15
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      197105546.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    26084.0 MWIPS (10.0 s, 7 samples)
Execl Throughput                              11499.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2401512.7 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          758871.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       9290157.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                            10277972.5 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 847288.6 lps   (10.0 s, 7 samples)
Process Creation                              43952.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  44005.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5407.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        9321834.2 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  197105546.6  16889.9
Double-Precision Whetstone                       55.0      26084.0   4742.5
Execl Throughput                                 43.0      11499.1   2674.2
File Copy 1024 bufsize 2000 maxblocks          3960.0    2401512.7   6064.4
File Copy 256 bufsize 500 maxblocks            1655.0     758871.3   4585.3
File Copy 4096 bufsize 8000 maxblocks          5800.0    9290157.8  16017.5
Pipe Throughput                               12440.0   10277972.5   8262.0
Pipe-based Context Switching                   4000.0     847288.6   2118.2
Process Creation                                126.0      43952.2   3488.3
Shell Scripts (1 concurrent)                     42.4      44005.4  10378.6
Shell Scripts (8 concurrent)                      6.0       5407.7   9012.8
System Call Overhead                          15000.0    9321834.2   6214.6
                                                                   ========
System Benchmarks Index Score                                        6225.0
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 9950X 16-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 4291.920 MHz
 CPU 缓存          : L1: 256.00 KB / L2: 1.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 540.15 MiB / 7.76 GiB
 Swap              : 0 KiB / 512.00 MiB
 硬盘空间          : 2.24 GiB / 98.34 GiB
 启动盘路径        : /dev/vda2
 系统在线时间      : 0 days, 1 hour 41 min
 负载              : 0.00, 0.62, 2.30
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-28-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS203394 Mdcloud
 IPV4 位置         : Vinnytsia / Vinnytsia / Ukraine
 IPV6 ASN          : AS203394 Mdcloud
 IPV6 位置         : Kyiv / Kyiv City / Ukraine
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          7001 Scores
 2 线程测试(多核)得分:          13972 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          104308.66 MB/s
 单线程写测试:          40794.41 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         177 MB/s (43.15 IOPS, 0.59s))           211 MB/s (51426 IOPS, 0.50s)
 1GB-1M Block           2.6 GB/s (2512 IOPS, 0.40s)             12.0 GB/s (11415 IOPS, 0.09s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 609.71 MB/s (152.4k) | 5.47 GB/s    (85.5k)
Write      | 611.32 MB/s (152.8k) | 5.50 GB/s    (86.0k)
Total      | 1.22 GB/s   (305.2k) | 10.97 GB/s  (171.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 3.73 GB/s     (7.2k) | 4.22 GB/s     (4.1k)
Write      | 3.93 GB/s     (7.6k) | 4.50 GB/s     (4.4k)
Total      | 7.66 GB/s    (14.9k) | 8.73 GB/s     (8.5k)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：乌克兰
[IPV6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：乌克兰
----------------Youtube-----------------
[IPV4]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: GIGANET
视频缓存节点地域: KBP(KBP9)
[IPV6]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: GIGANET
视频缓存节点地域: KBP(KBP9)
---------------DisneyPlus---------------
[IPV4]
当前IPv4出口所在地区即将开通DisneyPlus
[IPV6]
当前IPv4出口所在地区即将开通DisneyPlus
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: UA)
 Disney+:                               Available For [Disney+ UA] Soon
 Netflix:                               Yes (Region: UA)
 YouTube Premium:                       No
 Amazon Prime Video:                    Yes (Region: UA)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  Failed (Error: PAGE ERROR)
 Instagram Licensed Audio:              No
 OneTrust Region:                       UA [Vinnytsia]
 iQyi Oversea Region:                   UA
 Bing Region:                           WW
 YouTube CDN:                           [GIGANET] in [Kiev]
 Netflix Preferred CDN:                 [Ukrainian Telecommunication Group] in [Kiev]
 ChatGPT:                               Yes
 Google Gemini:                         No
 Wikipedia Editability:                 Yes
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        UAH
 ---Forum---
 Reddit:                                Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  IPv6 Is Not Currently Supported
 Disney+:                               IPv6 Is Not Currently Supported
 Netflix:                               Yes (Region: UA)
 YouTube Premium:                       Yes (Region: GB)
 Amazon Prime Video:                    IPv6 Is Not Currently Supported
 TVBAnywhere+:                          IPv6 Is Not Currently Supported
 Spotify Registration:                  No
 Instagram Licensed Audio:              No
 OneTrust Region:                       UA [Kyiv City]
 iQyi Oversea Region:                   IPv6 Is Not Currently Supported
 Bing Region:                           WW
 YouTube CDN:                           [GIGANET] in [Kiev]
 Netflix Preferred CDN:                 [Ukrainian Telecommunication Group] in [Kiev]
 ChatGPT:                               Failed (Network Connection)
 Google Gemini:                         No
 Wikipedia Editability:                 Yes
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:                                IPv6 Is Not Currently Supported
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【UA】
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
欺诈得分(越低越好): 65 [E] 0 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0035 (Low) [A] 
公司滥用得分(越低越好): 0.0352 (High) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: hosting [7 9 A] business [8] FixedLineISP [3] hosting - moderate probability [C]
公司类型: hosting [A] isp [7]
是否云提供商: Yes [7 D] 
是否数据中心: No [1 5 6 8 C] Yes [A]
是否移动设备: Yes [E] No [5 A C]
是否代理: No [1 4 5 6 7 8 9 A B C D] Yes [E]
是否VPN: Yes [E] No [1 6 7 A C D]
是否Tor: No [1 3 6 7 8 A B C D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D]
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 312(Total_Check) 0(Clean) 9(Blacklisted) 81(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0035 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: hosting [A] DataCenter/WebHosting/Transit [3]
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
163       ✘     ✔     ✘     ✘     ✘     ✘    
Sohu      ✘     ✘     ✘     ✘     ✘     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✔     ✘    
AOL       ✘     ✔     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✘     ✘     ✘     ✘     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  检测不到回程路由节点的IP地址
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   检测不到回程路由节点的IP地址
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     检测不到回程路由节点的IP地址
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.08 ms         * RFC1918
0.17 ms         * RFC1918
1.47 ms         AS174 [COGENT-149] 乌克兰 基辅 cogentco.com
1.13 ms         AS174 [COGENT-BONE] 乌克兰 基辅 cogentco.com
17.09 ms        AS174 [COGENT-BONE] 斯洛伐克 西斯洛伐克 布拉迪斯拉 cogentco.com
18.17 ms        AS174 [COGENT-BONE] 奥地利 维也纳 维也纳 cogentco.com
24.01 ms        AS174 [COGENT-BONE] 德国 巴伐利亚 慕尼黑 cogentco.com
29.14 ms        AS174 [COGENT-BONE] 德国 黑森 美因河畔法兰克福 cogentco.com
29.12 ms        AS174 [COGENT-BONE] 德国 黑森 美因河畔法兰克福 cogentco.com
* ms    AS174 [COGENT-149] 德国 黑森 美因河畔法兰克福 Cogent-CT-Peer cogentco.com
广州联通 210.21.196.6
0.08 ms         * RFC1918
0.21 ms         * RFC1918
0.96 ms         AS174 [COGENT-149] 乌克兰 基辅 cogentco.com
1.17 ms         AS174 [COGENT-BONE] 乌克兰 基辅 cogentco.com
17.10 ms        AS174 [COGENT-BONE] 斯洛伐克 西斯洛伐克 布拉迪斯拉 cogentco.com
18.44 ms        AS174 [COGENT-BONE] 奥地利 维也纳 维也纳 cogentco.com
23.78 ms        AS174 [COGENT-BONE] 德国 巴伐利亚 慕尼黑 cogentco.com
45.54 ms        AS174 [COGENT-BONE] 德国 黑森 美因河畔法兰克福 cogentco.com
31.83 ms        AS174 [COGENT-BONE] 德国 黑森 美因河畔法兰克福 cogentco.com
30.06 ms        AS174 [COGENT-BONE] 德国 黑森 美因河畔法兰克福 cogentco.com
30.09 ms        AS174 [COGENT-BONE] 德国 黑森 美因河畔法兰克福 cogentco.com
28.08 ms        AS174 [COGENT-149] 德国 黑森 美因河畔法兰克福 cogentco.com
268.62 ms       AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
广州移动 120.196.165.24
0.07 ms         * RFC1918
0.17 ms         * RFC1918
34.32 ms        AS2914 [EU-NTTEUROPE] 德国 黑森 美因河畔法兰克福 gin.ntt.net
47.97 ms        AS2914 [NTT-BACKBONE] 德国 黑森 美因河畔法兰克福 gin.ntt.net
39.14 ms        AS2914 [NTT-BACKBONE] 意大利 伦巴第大区 米兰广域市 gin.ntt.net
42.97 ms        AS2914 [NTT-BACKBONE] 意大利 伦巴第大区 米兰广域市 gin.ntt.net
186.58 ms       AS2914 [NTT-BACKBONE] 新加坡 gin.ntt.net
198.80 ms       AS2914 [NTT-GIN] 新加坡 gin.ntt.net
285.48 ms       AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
242.45 ms       AS58453 [CMI-INT] 中国 广东 广州 cmi.chinamobile.com 移动
240.89 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    9464.32 Mbps    18932.59 Mbps   3.16     0.0%
法兰克福         1169.07 Mbps    3327.40 Mbps    27.59    NULL
洛杉矶           761.06 Mbps     8074.58 Mbps    172.63   NULL
```