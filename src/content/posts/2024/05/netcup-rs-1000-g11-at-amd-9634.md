---
title: "Netcup RS 1000 G11 维也纳 AMD  9634 测评"
published: 2024-05-14
categories: 
  - "vps"
  - "eu-server"
---

今天闲来无事，第一次尝试注册Netcup。一次成功，用时6个小时，完成了开号，免税，机器激活一条路服务。似乎难度比想象中的简单的多。首月用了5欧优惠券，实付5.69欧，随机开的地区是维也纳。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/image-3.jpg" alt="" loading="lazy">
</picture>

## 配置：

- **_Provider : Netcup_**

- **_Type/Plan : RS 1000 G11_**

- **_Processor : AMD EPYC 9634 84-Core Processor_**

- **_Num of Core :_** **_4_** **_Cores_**

- **_Memory :_** **_8_** **_GB_**

- **_Storage : 26_****_0_** **_GB NVMe_**

- **_Bandwidth : 120TB @ 2.5 Gbps IN | 2.5 Gbps OUT_**

- **_Location :_** AT

- **_Price : € 8._****_6_****_/ Month_**

## 测评

### lscpu

```
root@netcup:~# lscpu
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          52 bits physical, 57 bits virtual
  Byte Order:             Little Endian
CPU(s):                   4
  On-line CPU(s) list:    0-3
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         QEMU
  Model name:             AMD EPYC 9634 84-Core Processor
    BIOS Model name:      pc-i440fx-6.2  CPU @ 2.0GHz
    BIOS CPU family:      1
    CPU family:           25
    Model:                17
    Thread(s) per core:   1
    Core(s) per socket:   4
    Socket(s):            1
    Stepping:             1
    BogoMIPS:             4493.24
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht 
                          syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmu                          lqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdra                          nd hypervisor lahf_lm cmp_legacy cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core inv                          pcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f                           avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsave                          c xgetbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat avx512vbmi umip pku ospke avx512_vbmi2 g                          fni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq la57 rdpid fsrm arch_capabilities
Virtualization features:  
  Hypervisor vendor:      KVM
  Virtualization type:    full
Caches (sum of all):      
  L1d:                    256 KiB (4 instances)
  L1i:                    256 KiB (4 instances)
  L2:                     2 MiB (4 instances)
  L3:                     64 MiB (4 instances)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-3
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
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; Retpolines; IBPB conditional; IBRS_FW; STIBP disabled; RSB filling; PBRSB-eIBRS Not affec                          ted; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 0 minutes
Processor  : AMD EPYC 9634 84-Core Processor
CPU cores  : 4 @ 2246.624 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 7.8 GiB
Swap       : 0.0 KiB
Disk       : 251.8 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-21-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : netcup GmbH
ASN        : AS197540 netcup GmbH
Host       : De Netcup KVM VIE
Location   : Vienna, Vienna (9)
Country    : Austria

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 214.94 MB/s  (53.7k) | 509.16 MB/s   (7.9k)
Write      | 215.50 MB/s  (53.8k) | 511.84 MB/s   (7.9k)
Total      | 430.44 MB/s (107.6k) | 1.02 GB/s    (15.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 551.08 MB/s   (1.0k) | 773.46 MB/s    (755)
Write      | 580.36 MB/s   (1.1k) | 824.97 MB/s    (805)
Total      | 1.13 GB/s     (2.2k) | 1.59 GB/s     (1.5k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 2.62 Gbits/sec  | 2.35 Gbits/sec  | 37.3 ms        
Eranium         | Amsterdam, NL (100G)      | 2.64 Gbits/sec  | 2.36 Gbits/sec  | -- 
Telia           | Helsinki, FI (10G)        | busy            | busy            | 40.3 ms        
Uztelecom       | Tashkent, UZ (10G)        | 2.42 Gbits/sec  | 1.66 Gbits/sec  | 97.1 ms        
Leaseweb        | Singapore, SG (10G)       | 1.87 Gbits/sec  | 1.48 Gbits/sec  | 303 ms         
Clouvider       | Los Angeles, CA, US (10G) | 914 Mbits/sec   | 848 Mbits/sec   | 159 ms         
Leaseweb        | NYC, NY, US (10G)         | 2.23 Gbits/sec  | 2.11 Gbits/sec  | 98.8 ms        
Edgoo           | Sao Paulo, BR (1G)        | 2.25 Gbits/sec  | 347 Mbits/sec   | 191 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 2.56 Gbits/sec  | 2.28 Gbits/sec  | 37.3 ms        
Eranium         | Amsterdam, NL (100G)      | busy            | busy            | -- 
Uztelecom       | Tashkent, UZ (10G)        | 1.39 Gbits/sec  | 1.30 Gbits/sec  | 97.1 ms        
Leaseweb        | Singapore, SG (10G)       | 2.03 Gbits/sec  | busy            | 309 ms         
Clouvider       | Los Angeles, CA, US (10G) | 1.01 Gbits/sec  | 507 Mbits/sec   | 159 ms         
Leaseweb        | NYC, NY, US (10G)         | 2.38 Gbits/sec  | 2.09 Gbits/sec  | 98.7 ms        
Edgoo           | Sao Paulo, BR (1G)        | 2.23 Gbits/sec  | 1.09 Gbits/sec  | 191 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2036                          
Multi Core      | 6739                          
Full Test       | https://browser.geekbench.com/v6/cpu/6096262
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```
AMD EPYC 9634 84-Core Processor (x86_64)
4 cores @ 0 MHz  |  7.8 GiB RAM
Number of Processes: 4  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          10642
  Integer Math                     24255 Million Operations/s
  Floating Point Math              21394 Million Operations/s
  Prime Numbers                    79.2 Million Primes/s
  Sorting                          15233 Thousand Strings/s
  Encryption                       5258 MB/s
  Compression                      104775 KB/s
  CPU Single Threaded              2886 Million Operations/s
  Physics                          1405 Frames/s
  Extended Instructions (SSE)      9687 Million Matrices/s

Memory Mark:                       2560
  Database Operations              4239 Thousand Operations/s
  Memory Read Cached               27935 MB/s
  Memory Read Uncached             26181 MB/s
  Memory Write                     25798 MB/s
  Available RAM                    7613 Megabytes
  Memory Latency                   70 Nanoseconds
  Memory Threaded                  101624 MB/s
--------------------------------------------------------------------------------
```

### Bench

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 9634 84-Core Processor
 CPU Cores          : 4 @ 2246.624 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✗ Disabled
 Total Disk         : 251.8 GB (1.8 GB Used)
 Total Mem          : 7.8 GB (296.6 MB Used)
 System uptime      : 0 days, 0 hour 28 min
 Load average       : 0.06, 0.22, 0.22
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-21-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Location           : Klagenfurt am Wörthersee / AT
 Region             : Carinthia
 Region             : No ISP detected
----------------------------------------------------------------------
 I/O Speed(1st run) : 872 MB/s
 I/O Speed(2nd run) : 873 MB/s
 I/O Speed(3rd run) : 900 MB/s
 I/O Speed(average) : 881.7 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    2492.76 Mbps      2392.55 Mbps        0.60 ms     
 Los Angeles, US  547.25 Mbps       1203.65 Mbps        162.21 ms   
 Dallas, US       458.76 Mbps       1329.42 Mbps        135.18 ms   
 Montreal, CA     188.51 Mbps       858.20 Mbps         100.17 ms   
 Amsterdam, NL    1414.55 Mbps      2390.10 Mbps        19.57 ms    
 Shanghai, CN     41.30 Mbps        1354.42 Mbps        298.48 ms   
 Chongqing, CN    0.21 Mbps         0.23 Mbps           734.30 ms   
 Hongkong, CN     0.97 Mbps         456.91 Mbps         433.41 ms   
 Mumbai, IN       11.66 Mbps        1775.46 Mbps        330.50 ms   
 Singapore, SG    57.12 Mbps        17.82 Mbps          266.79 ms   
 Tokyo, JP        215.97 Mbps       1495.03 Mbps        261.94 ms   
----------------------------------------------------------------------
```

### GeekBench5

```

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-21-amd64 x86_64
  Model                         netcup KVM Server
  Motherboard                   N/A
  BIOS                          netcup RS 1000 G11

处理器信息
  Name                          AMD EPYC 9634 84-Core Processor                
  Topology                      1 Processor, 4 Cores
  Identifier                    AuthenticAMD Family 25 Model 17 Stepping 1
  Base Frequency                2.25 GHz
  L1 Instruction Cache          64.0 KB x 4
  L1 Data Cache                 64.0 KB x 4
  L2 Cache                      512 KB x 4
  L3 Cache                      16.0 MB

内存信息
  Size                          7.75 GB

单核测试分数：1525
多核测试分数：5636
详细结果链接：https://browser.geekbench.com/v5/cpu/22484297
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%209634
```

### **UnixBench**

```
4 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       55525369.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     9111.2 MWIPS (10.0 s, 7 samples)
Execl Throughput                               4996.3 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1136403.4 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          293966.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3433402.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1556070.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  81611.0 lps   (10.0 s, 7 samples)
Process Creation                               9715.1 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  15876.1 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5153.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        1440742.3 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   55525369.7   4758.0
Double-Precision Whetstone                       55.0       9111.2   1656.6
Execl Throughput                                 43.0       4996.3   1161.9
File Copy 1024 bufsize 2000 maxblocks          3960.0    1136403.4   2869.7
File Copy 256 bufsize 500 maxblocks            1655.0     293966.9   1776.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    3433402.0   5919.7
Pipe Throughput                               12440.0    1556070.8   1250.9
Pipe-based Context Switching                   4000.0      81611.0    204.0
Process Creation                                126.0       9715.1    771.0
Shell Scripts (1 concurrent)                     42.4      15876.1   3744.4
Shell Scripts (8 concurrent)                      6.0       5153.7   8589.5
System Call Overhead                          15000.0    1440742.3    960.5
                                                                   ========
System Benchmarks Index Score                                        1856.8

------------------------------------------------------------------------
4 CPUs in system; running 4 parallel copies of tests

Dhrystone 2 using register variables      218616179.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    36405.8 MWIPS (10.0 s, 7 samples)
Execl Throughput                              14158.7 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       4486437.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         1167223.7 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      13263517.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                             6213440.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 956375.9 lps   (10.0 s, 7 samples)
Process Creation                              29922.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  38368.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5553.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        5839018.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  218616179.7  18733.2
Double-Precision Whetstone                       55.0      36405.8   6619.2
Execl Throughput                                 43.0      14158.7   3292.7
File Copy 1024 bufsize 2000 maxblocks          3960.0    4486437.9  11329.4
File Copy 256 bufsize 500 maxblocks            1655.0    1167223.7   7052.7
File Copy 4096 bufsize 8000 maxblocks          5800.0   13263517.9  22868.1
Pipe Throughput                               12440.0    6213440.7   4994.7
Pipe-based Context Switching                   4000.0     956375.9   2390.9
Process Creation                                126.0      29922.3   2374.8
Shell Scripts (1 concurrent)                     42.4      38368.4   9049.2
Shell Scripts (8 concurrent)                      6.0       5553.2   9255.3
System Call Overhead                          15000.0    5839018.9   3892.7
                                                                   ========
System Benchmarks Index Score                                        6605.3
```

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 9634 84-Core Processor
 CPU 核心数        : 4
 CPU 频率          : 2246.624 MHz
 CPU 缓存          : L1: 256.00 KB / L2: 2.00 MB / L3: 64.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 167.33 MiB / 7.75 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.67 GiB / 250.88 GiB
 启动盘路径        : /dev/vda3
 系统在线时间      : 0 days, 0 hour 22 min
 负载              : 0.06, 0.15, 0.16
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-21-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 IPV4 ASN          : AS197540 Netcup GmbH
 IPV4 位置         : Klagenfurt am Woerthersee / AT-2
 IPV6 ASN          : AS197540 netcup
 IPV6 位置         : Vienna / Vienna / Austria
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          4547 Scores
 4 线程测试(多核)得分:          18131 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          48213.53 MB/s
 单线程写测试:          30185.70 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         27.5 MB/s (6706 IOPS, 3.82s)            38.0 MB/s (9267 IOPS, 2.76s)
 1GB-1M Block           520 MB/s (496 IOPS, 2.02s)              3.1 GB/s (2994 IOPS, 0.33s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 203.29 MB/s  (50.8k) | 514.93 MB/s   (8.0k)
Write      | 203.83 MB/s  (50.9k) | 517.64 MB/s   (8.0k)
Total      | 407.13 MB/s (101.7k) | 1.03 GB/s    (16.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 535.90 MB/s   (1.0k) | 733.22 MB/s    (716)
Write      | 564.38 MB/s   (1.1k) | 782.05 MB/s    (763)
Total      | 1.10 GB/s     (2.1k) | 1.51 GB/s     (1.4k)
正在并发测试中，大概2~3分钟无输出，请耐心等待。。。
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：奥地利
[IPV6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：德国
----------------Youtube-----------------
[IPV4]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: ANEXIAAT
视频缓存节点地域: 奥地利维也纳(VIE1)
[IPV6]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: ANEXIAAT
视频缓存节点地域: 奥地利维也纳(VIE1)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：AT 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：DE 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: AT)
 Disney+:                               Yes (Region: AT)
 Netflix:                               Yes (Region: AT)
 YouTube Premium:                       Yes (Region: AT)
 Amazon Prime Video:                    Yes (Region: AT)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   INTL
 YouTube CDN:                           ANEXIAAT in Vienna 
 Netflix Preferred CDN:                 Associated with [ANEXIA Internetdienstleistungs] in [Vienna ]
 Spotify Registration:                  Yes (Region: AT)
 Steam Currency:                        EUR
 ChatGPT:                               Yes
 Bing Region:                           AT
 Wikipedia Editability:                 Yes
 Instagram Licensed Audio:              Yes
 ---Forum---
 Reddit:                                Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: AT)
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 YouTube CDN:                           ANEXIAAT in Vienna 
 Netflix Preferred CDN:                 Associated with [ANEXIA Internetdienstleistungs] in [Vienna ]
 Spotify Registration:                  Yes (Region: AT)
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           AT
 Wikipedia Editability:                 Yes
 Instagram Licensed Audio:              Yes
 ---Forum---
 Reddit:                                Failed (Network Connection)
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【AT】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 68 [8]
VPN得分(越低越好): 25 [8] 
代理得分(越低越好): 29 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 42 [8] 
欺诈得分(越低越好): 0 [1 E] 
滥用得分(越低越好): 0 [3] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 92 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [7] corporate [9]
公司类型: business [A] hosting [0 7]
是否云提供商: Yes [7] 
是否数据中心: Yes [0 1] No [5 6 8 A]
是否移动设备: Yes [E] No [5 A]
是否代理: No [0 1 4 5 6 7 8 9 A B E] 
是否VPN: No [0 1 6 7 A C E] 
是否TorExit: No [1 7] 
是否Tor出口: No [1 7] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8] 
是否攻击者: No [7 8] 
是否滥用者: No [7 8 A E]
是否威胁: No [7 8] 
是否中继: No [0 7 8] 
是否Bogon: No [7 8 A] 
是否机器人: No [E] 
DNS-黑名单: 338(Total_Check) 0(Clean) 2(Blacklisted) 5(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0046 (Low) [A] 
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
是否TorExit: No [1 D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A B] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D]
是否中继: No [D] 
是否Bogon: No [A D] 
DNS-黑名单: 338(Total_Check) 0(Clean) 0(Blacklisted) 338(Other) 
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  yandex邮箱: Yes
  qq邮箱：No
----------------三网回程--基于oneclickvirt/backtrace开源----------------
国家: AT 城市: Klagenfurt am Wörthersee 服务商: 
北京电信 219.141.136.12  检测不到回程路由节点的IP地址
北京联通 202.106.50.1    联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
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
0.17 ms  AS197540  奥地利, anexia.com
0.59 ms  AS47147  奥地利, 维也纳州, 维也纳, anexia.com
0.61 ms  AS47147  奥地利, 维也纳州, 维也纳, anexia.com
1.25 ms  AS1299  奥地利, 维也纳州, 维也纳, telia.com
1.08 ms  AS1299  奥地利, 维也纳州, 维也纳, telia.com
12.34 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
13.27 ms  AS4134  德国, 黑森州, 法兰克福, chinatelecom.com.cn, 电信
196.35 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.27 ms  AS197540  奥地利, anexia.com
0.71 ms  AS47147  奥地利, 维也纳州, 维也纳, anexia.com
0.78 ms  AS47147  奥地利, 维也纳州, 维也纳, anexia.com
1.10 ms  AS1299  奥地利, 维也纳州, 维也纳, telia.com
1.80 ms  AS1299  奥地利, 维也纳州, 维也纳, telia.com
12.00 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
27.23 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
240.74 ms  AS4837  德国, 黑森州, 法兰克福, chinaunicom.com, 联通
231.03 ms  AS4837  中国, 北京, chinaunicom.com, 联通
496.41 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
310.00 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
295.16 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.27 ms  AS197540  奥地利, anexia.com
0.54 ms  AS47147  奥地利, 维也纳州, 维也纳, anexia.com
1.31 ms  AS1299  奥地利, 维也纳州, 维也纳, telia.com
1.15 ms  AS1299  奥地利, 维也纳州, 维也纳, telia.com
12.01 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
11.69 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
12.49 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
12.30 ms  AS58453  德国, 黑森州, 法兰克福, chinamobile.com, 移动
151.75 ms  AS58453  美国, 纽约州, 纽约, chinamobile.com, 移动
151.72 ms  AS58453  美国, 纽约州, 纽约, chinamobile.com, 移动
160.64 ms  AS58453  美国, 加利福尼亚州, 洛杉矶, chinamobile.com, 移动
331.00 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
323.17 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
290.82 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
343.75 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
289.83 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
334.34 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    2494.59 Mbps    2412.58 Mbps    0.59     NULL
法兰克福         2554.52 Mbps    2411.22 Mbps    12.43    0.0%
洛杉矶           590.42 Mbps     1687.26 Mbps    152.77   0.0%
联通WuXi         7.49 Mbps       2429.12 Mbps    256.73   0.0%
联通上海5G       5.65 Mbps       450.23 Mbps     283.12   0.3%
电信浙江         1.04 Mbps       1143.35 Mbps    188.43   NULL
电信Zhenjiang5G  1.13 Mbps       1806.95 Mbps    189.47   NULL
------------------------------------------------------------------------
 总共花费      : 5 分 13 秒
 时间          : Tue May 14 17:25:33 CEST 2024
------------------------------------------------------------------------
```

### network-speed.xyz

```
---------------------------------------------------------------------------
 CPU Model          : AMD EPYC 9634 84-Core Processor
 CPU Cores          : 4 @ 2246.624 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ❌ Disabled
 Total Disk         : 251.8 GB (1.8 GB Used)
 Total RAM          : 7.8 GB (294.1 MB Used)
 System uptime      : 0 days, 0 hour 40 min
 Load average       : 0.25, 0.30, 0.23
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-21-amd64
 Virtualization     : KVM
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv6
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : netcup GmbH
 ASN                : AS197540 netcup GmbH
 ASN (IPv4)         : 
 Host               : De Netcup KVM VIE
 Location           : Vienna, Vienna-9, Austria
 Location (IPv4)    : Klagenfurt am Wörthersee, Carinthia, AT
---------------------------------------------------------------------------
 Speedtest.net (Region: EUROPE)
---------------------------------------------------------------------------
Location         Latency     Loss    DL Speed       UP Speed       Server

 ISP: netcup

 Nearest          0.22 ms     0.0%    845.85 Mbps    784.82 Mbps    Jonas de Vries

 London, UK       18.04 ms    0.0%    2386.87 Mbps   2516.37 Mbps   M247 Ltd - London
 Manchester, UK   22.44 ms    N/A     2390.50 Mbps   2606.24 Mbps   Vodafone UK - Manchester
 Dublin, IE       26.16 ms    0.0%    2393.29 Mbps   2617.84 Mbps   Three Ireland - Dublin
 Amsterdam, NL    23.27 ms    0.0%    2356.48 Mbps   2539.97 Mbps   Melbicom - Amsterdam
 Eygelshoen, NL   26.29 ms    0.0%    2357.37 Mbps   1230.61 Mbps   SkyLink Data Center BV - Eygelshoven
 Paris, FR        12.71 ms    0.0%    2379.13 Mbps   2503.56 Mbps   ORANGE - Paris
 Marseille, FR    19.43 ms    0.0%    2399.79 Mbps   2518.83 Mbps   GSL Networks - Marseille
 Madrid, ES       34.28 ms    0.0%    2375.44 Mbps   2530.49 Mbps   Orange - Jazztel - Madrid
 Barcelona, ES    36.26 ms    0.0%    2387.19 Mbps   2479.00 Mbps   Adamo - Barcelona
 Lisbon, PT       61.19 ms    0.0%    2351.87 Mbps   1471.31 Mbps   Edgoo Networks - Lisbon
 Rome, IT         25.92 ms    0.0%    2427.86 Mbps   2557.72 Mbps   TIM SpA - Rome
 Milan, IT        13.02 ms    0.0%    1742.04 Mbps   2510.97 Mbps   Fastweb SpA - Milan
 Zurich, CH       9.80 ms     0.0%    2388.74 Mbps   2504.21 Mbps   Sunrise Communication AG - Zurich
 Frankfurt, DE    3.79 ms     0.0%    2384.63 Mbps   2499.79 Mbps   Deutsche Telekom - Frankfurt am Main
 Berlin, DE       10.32 ms    N/A     2355.19 Mbps   943.56 Mbps    Misaka Network, Inc. - Berlin
 Vienna, AT       12.09 ms    0.0%    2389.53 Mbps   2504.74 Mbps   A1 Telekom Austria AG - Vienna
 Budapest, HU     14.31 ms    0.0%    2354.23 Mbps   2514.81 Mbps   ATW Internet Kft. - Budapest
 Gdansk, PL       23.24 ms    0.0%    2220.51 Mbps   2493.15 Mbps   T-Mobile Polska S.A. - Gdańsk
 Warsaw, PL       22.39 ms    0.0%    2391.34 Mbps   2559.23 Mbps   Orange Polska S.A. - Warsaw
 Lviv, UA         25.21 ms    0.0%    2391.64 Mbps   2523.67 Mbps   Kyivstar - Lviv
 Kyiv, UA         30.70 ms    0.0%    2388.91 Mbps   2843.33 Mbps   O3 - Kyiv
 Minsk, BY        35.61 ms    0.0%    2363.78 Mbps   2669.06 Mbps   A1 - Minsk
 Bucharest, RO    32.09 ms    0.0%    2390.50 Mbps   2788.82 Mbps   Orange Romania SA - Bucuresti
 Timisoara, RO    33.42 ms    0.0%    2357.96 Mbps   2651.57 Mbps   Digi
 Helsinki, FI     30.44 ms    0.0%    2354.40 Mbps   2822.54 Mbps   Elisa Oyj - Helsinki
 Stockholm, SE    47.29 ms    0.0%    2353.37 Mbps   2167.88 Mbps   i3D.net - Stockholm
 Oslo, NO         29.41 ms    0.0%    2388.20 Mbps   2680.78 Mbps   Speedtest.net - Oslo
 Moscow, RU       36.30 ms    0.0%    2386.39 Mbps   2535.91 Mbps   MTS - Moscow
 Petersburg, RU   37.60 ms    0.0%    2381.96 Mbps   2578.17 Mbps   MegaFon - Saint Petersburg
 Istanbul, TR     46.81 ms    0.0%    2388.67 Mbps   2617.66 Mbps   Turkcell - Istanbul
 Tbilisi, GE      63.57 ms    0.0%    2377.05 Mbps   1437.74 Mbps   Silknet JSC - Tbilisi
---------------------------------------------------------------------------
```
