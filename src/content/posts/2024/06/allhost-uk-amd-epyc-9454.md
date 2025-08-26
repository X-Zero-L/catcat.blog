---
title: "AllHost UK AMD EPYC 9454 测评"
published: 2024-06-18
categories: 
  - "vps"
  - "eu-server"
---

**最近运气是真的不错，Let回帖中了好几次奖了，这次也是。英国商家，AS号是 AS42831。后台管理面板采用 VirtFusion。有epyc 和 Ryzen 两个系列。提供BGP会话，一次性设置费5.00 英镑。订单享受72h无理由退款，25邮件端口封闭，单个 6 小时内 CPU 持续平均使用率不得超过 80%。**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-31.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-31.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-31.jpg" alt="" loading="lazy">
</picture>

## 配置：

- **_Provider : AllHost_**

- **_Type/Plan : **EPYC 2-2-32**_**

- **_Processor : AMD EPYC 9454 48-Core Processor_**

- **_Num of Core :_** **_2_** **_Cores_**

- **_Memory :_** **_2_** **_GB_**

- **_Storage : 3_****_2_** **_GB NVMe_**

- **_Bandwidth : 5TB @ 8 Gbps IN | 8 Gbps OUT_**

- **_Location :_ UK**

- **_Price : \$4.98_**

## 测评

### lscpu

```
root@AllHost:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         52 bits physical, 57 bits virtual
  Byte Order:            Little Endian
CPU(s):                  2
  On-line CPU(s) list:   0,1
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD EPYC 9454 48-Core Processor
    BIOS Model name:     pc-i440fx-7.2  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               17
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           2
    Stepping:            1
    BogoMIPS:            5499.99
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall                          nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 
                         fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor l                         ahf_lm cmp_legacy cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core invpcid_single ssbd ib                         rs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx512dq rdseed adx sm                         ap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves avx512_bf1                         6 clzero xsaveerptr wbnoinvd arat avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni                          avx512_bitalg avx512_vpopcntdq la57 rdpid fsrm arch_capabilities
Virtualization features: 
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   64 KiB (2 instances)
  L1i:                   64 KiB (2 instances)
  L2:                    2 MiB (2 instances)
  L3:                    512 MiB (2 instances)
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
root@AllHost:~# 
```

### Yabs

```
Tue Jun 18 08:50:29 AM CST 2024

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 9 minutes
Processor  : AMD EPYC 9454 48-Core Processor
CPU cores  : 2 @ 2749.996 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 1.9 GiB
Swap       : 0.0 KiB
Disk       : 31.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : AH CLOUD LTD
ASN        : AS207108 AH CLOUD LTD
Host       : AH CLOUD LTD
Location   : Canary Wharf, England (ENG)
Country    : United Kingdom

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 388.78 MB/s  (97.1k) | 1.23 GB/s    (19.2k)
Write      | 389.81 MB/s  (97.4k) | 1.23 GB/s    (19.3k)
Total      | 778.59 MB/s (194.6k) | 2.46 GB/s    (38.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 409.39 MB/s    (799) | 518.80 MB/s    (506)
Write      | 431.14 MB/s    (842) | 553.35 MB/s    (540)
Total      | 840.54 MB/s   (1.6k) | 1.07 GB/s     (1.0k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 8.18 Gbits/sec  | 5.09 Gbits/sec  | 4.29 ms        
Eranium         | Amsterdam, NL (100G)      | 8.69 Gbits/sec  | 4.51 Gbits/sec  | -- 
Uztelecom       | Tashkent, UZ (10G)        | 2.01 Gbits/sec  | 1.17 Gbits/sec  | 90.9 ms        
Leaseweb        | Singapore, SG (10G)       | 358 Mbits/sec   | 527 Mbits/sec   | 308 ms         
Clouvider       | Los Angeles, CA, US (10G) | 786 Mbits/sec   | busy            | 139 ms         
Leaseweb        | NYC, NY, US (10G)         | 1.31 Gbits/sec  | 2.39 Gbits/sec  | 71.3 ms        
Edgoo           | Sao Paulo, BR (1G)        | 535 Mbits/sec   | 793 Mbits/sec   | 192 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 7.97 Gbits/sec  | 7.17 Gbits/sec  | 4.28 ms        
Eranium         | Amsterdam, NL (100G)      | busy            | busy            | -- 
Uztelecom       | Tashkent, UZ (10G)        | 2.14 Gbits/sec  | 1.87 Gbits/sec  | 90.3 ms        
Leaseweb        | Singapore, SG (10G)       | 262 Mbits/sec   | 523 Mbits/sec   | 307 ms         
Clouvider       | Los Angeles, CA, US (10G) | 1.06 Gbits/sec  | busy            | 139 ms         
Leaseweb        | NYC, NY, US (10G)         | 784 Mbits/sec   | 2.66 Gbits/sec  | 70.6 ms        
Edgoo           | Sao Paulo, BR (1G)        | 578 Mbits/sec   | 888 Mbits/sec   | 192 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2123                          
Multi Core      | 3851                          
Full Test       | https://browser.geekbench.com/v6/cpu/6560091

YABS completed in 15 min 0 sec
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```
AMD EPYC 9454 48-Core Processor (x86_64)
2 cores @ 0 MHz  |  1.9 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          5587
  Integer Math                     12470 Million Operations/s
  Floating Point Math              10904 Million Operations/s
  Prime Numbers                    40.5 Million Primes/s
  Sorting                          7779 Thousand Strings/s
  Encryption                       2697 MB/s
  Compression                      54272 KB/s
  CPU Single Threaded              2974 Million Operations/s
  Physics                          723 Frames/s
  Extended Instructions (SSE)      4797 Million Matrices/s

Memory Mark:                       1708
  Database Operations              2133 Thousand Operations/s
  Memory Read Cached               28244 MB/s
  Memory Read Uncached             27090 MB/s
  Memory Write                     25960 MB/s
  Available RAM                    1464 Megabytes
  Memory Latency                   69 Nanoseconds
  Memory Threaded                  54273 MB/s
--------------------------------------------------------------------------------
```

### Geekbench 5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.2-debian-1.16.2-1

处理器信息
  Name                          AMD EPYC 9454 48-Core Processor                
  Topology                      2 Processors, 2 Cores
  Identifier                    AuthenticAMD Family 25 Model 17 Stepping 1
  Base Frequency                2.75 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      256 MB

内存信息
  Size                          1.89 GB

单核测试分数：1562
多核测试分数：3009
详细结果链接：https://browser.geekbench.com/v5/cpu/22591441
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%209454
```

### byte-unixbench 性能测试

```
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: AllHost: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9454 48-Core Processor (5500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9454 48-Core Processor (5500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   09:32:32 up 51 min,  2 users,  load average: 0.07, 0.08, 0.15; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Tue Jun 18 2024 09:32:32 - 10:00:29
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       58436405.1 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     9058.0 MWIPS (10.0 s, 7 samples)
Execl Throughput                               5147.3 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1490400.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          393409.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       4648932.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                             2764383.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 157072.9 lps   (10.0 s, 7 samples)
Process Creation                              11997.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  15876.1 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   2818.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        2934056.3 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   58436405.1   5007.4
Double-Precision Whetstone                       55.0       9058.0   1646.9
Execl Throughput                                 43.0       5147.3   1197.0
File Copy 1024 bufsize 2000 maxblocks          3960.0    1490400.9   3763.6
File Copy 256 bufsize 500 maxblocks            1655.0     393409.0   2377.1
File Copy 4096 bufsize 8000 maxblocks          5800.0    4648932.4   8015.4
Pipe Throughput                               12440.0    2764383.7   2222.2
Pipe-based Context Switching                   4000.0     157072.9    392.7
Process Creation                                126.0      11997.2    952.2
Shell Scripts (1 concurrent)                     42.4      15876.1   3744.4
Shell Scripts (8 concurrent)                      6.0       2818.2   4697.0
System Call Overhead                          15000.0    2934056.3   1956.0
                                                                   ========
System Benchmarks Index Score                                        2284.8

------------------------------------------------------------------------
Benchmark Run: Tue Jun 18 2024 10:00:29 - 10:28:26
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      115067193.8 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    18120.0 MWIPS (9.9 s, 7 samples)
Execl Throughput                               7941.3 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1520035.3 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          423704.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       4537664.2 KBps  (30.0 s, 2 samples)
Pipe Throughput                             5500671.6 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 561535.4 lps   (10.0 s, 7 samples)
Process Creation                              24492.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  21192.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   2833.3 lpm   (60.0 s, 2 samples)
System Call Overhead                        4414369.4 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  115067193.8   9860.1
Double-Precision Whetstone                       55.0      18120.0   3294.5
Execl Throughput                                 43.0       7941.3   1846.8
File Copy 1024 bufsize 2000 maxblocks          3960.0    1520035.3   3838.5
File Copy 256 bufsize 500 maxblocks            1655.0     423704.8   2560.1
File Copy 4096 bufsize 8000 maxblocks          5800.0    4537664.2   7823.6
Pipe Throughput                               12440.0    5500671.6   4421.8
Pipe-based Context Switching                   4000.0     561535.4   1403.8
Process Creation                                126.0      24492.8   1943.9
Shell Scripts (1 concurrent)                     42.4      21192.4   4998.2
Shell Scripts (8 concurrent)                      6.0       2833.3   4722.2
System Call Overhead                          15000.0    4414369.4   2942.9
                                                                   ========
System Benchmarks Index Score                                        3539.5

======= Script description and score comparison completed! ======= 
```

### 融合怪脚本

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 9454 48-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 2749.996 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 2.00 MB / L3: 512.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 222.09 MiB / 1.89 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 2.07 GiB / 31.82 GiB
 启动盘路径        : /dev/vda3
 系统在线时间      : 0 days, 0 hour 39 min
 负载              : 0.06, 0.20, 0.22
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS207108 AH CLOUD LTD
 IPV4 位置         : Coventry / England / GB
 IPV6 ASN          : AS207108 Ah Cloud
 IPV6 位置         : Canary Wharf / England / United Kingdom
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          4628 Scores
 2 线程测试(多核)得分:          9289 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          51513.60 MB/s
 单线程写测试:          30898.10 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         58.5 MB/s (14.28 IOPS, 1.79s))          37.6 MB/s (9182 IOPS, 2.79s)
 1GB-1M Block           1.4 GB/s (1302 IOPS, 0.77s)             1.7 GB/s (1642 IOPS, 0.61s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 402.76 MB/s (100.6k) | 1.31 GB/s    (20.4k)
Write      | 403.83 MB/s (100.9k) | 1.31 GB/s    (20.5k)
Total      | 806.59 MB/s (201.6k) | 2.62 GB/s    (41.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 379.36 MB/s    (740) | 470.35 MB/s    (459)
Write      | 399.52 MB/s    (780) | 501.67 MB/s    (489)
Total      | 778.88 MB/s   (1.5k) | 972.02 MB/s    (948)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：英国
[IPV6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：英国
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: LHR(LHR25S41)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: LHR(LHR25S41)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：GB 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：GB 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: GB)
 Disney+:                               Yes (Region: GB)
 Netflix:                               Yes (Region: GB)
 YouTube Premium:                       Yes (Region: GB)
 Amazon Prime Video:                    Yes (Region: GB)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  Yes (Region: GB)
 Instagram Licensed Audio:              No
 OneTrust Region:                       GB [England]
 iQyi Oversea Region:                   GB
 Bing Region:                           GB
 YouTube CDN:                           London
 Netflix Preferred CDN:                 London
 ChatGPT:                               Yes
 Wikipedia Editability:                 Yes
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        GBP
 ---Forum---
 Reddit:                                Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  IPv6 Is Not Currently Supported
 Disney+:                               IPv6 Is Not Currently Supported
 Netflix:                               Yes (Region: GB)
 YouTube Premium:                       Yes (Region: GB)
 Amazon Prime Video:                    IPv6 Is Not Currently Supported
 TVBAnywhere+:                          IPv6 Is Not Currently Supported
 Spotify Registration:                  Yes (Region: GB)
 Instagram Licensed Audio:              No
 OneTrust Region:                       GB [England]
 iQyi Oversea Region:                   IPv6 Is Not Currently Supported
 Bing Region:                           GB
 YouTube CDN:                           London
 Netflix Preferred CDN:                 London
 ChatGPT:                               Failed (Network Connection)
 Wikipedia Editability:                 Yes
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:                                IPv6 Is Not Currently Supported
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【GB】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 19 [8] 
VPN得分(越低越好): 49 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 95 [8]
欺诈得分(越低越好): 0 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: hosting [0 7 9 A] business [8] DataCenter/WebHosting/Transit [3]
公司类型: hosting [0 A] isp [7]
是否云提供商: Yes [7 D] 
是否数据中心: No [5 6 8] Yes [0 1 A]
是否移动设备: No [5 A] Yes [E]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B D]
是否VPN: No [0 1 6 7 A C D] Yes [E]
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A D E] 
是否威胁: No [7 8 D] 
是否中继: No [0 7 8 D] 
是否Bogon: No [7 8 A D] 
是否机器人: No [E] 
DNS-黑名单: 338(Total_Check) 0(Clean) 6(Blacklisted) 5(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0 (Very Low) [A] 
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
DNS-黑名单: 338(Total_Check) 0(Clean) 0(Blacklisted) 338(Other) 
Google搜索可行性：YES
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✘     ✔     ✔     ✘     ✔     ✘    
Sohu      ✘     ✔     ✔     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✔     ✘    
AOL       ✘     ✔     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✔     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
国家: GB 城市: Coventry 服务商: AS207108 AH CLOUD LTD
北京电信 219.141.140.10  电信163    [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 移动CMIN2  [精品线路] 
上海电信 202.96.209.133  检测不到回程路由节点的IP地址
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
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
6.81 ms  AS42831  英国, 考文垂, ukservers.com
3.67 ms  AS42831  英国, 考文垂, ukservers.com
6.59 ms  AS3356  英国, 伦敦, level3.com
6.87 ms  AS3356  英国, 伦敦, level3.com
241.04 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
262.27 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
3.68 ms  AS42831  英国, 考文垂, ukservers.com
20.11 ms  AS42831  英国, 考文垂, ukservers.com
6.55 ms  AS3356  英国, 伦敦, level3.com
138.61 ms  AS3356  美国, 加利福尼亚州, 洛杉矶, level3.com
309.71 ms  AS3356  美国, 加利福尼亚州, 洛杉矶, level3.com
324.76 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
317.86 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
293.61 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
316.18 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
297.14 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
3.70 ms  AS42831  英国, 考文垂, ukservers.com
3.69 ms  AS42831  英国, 考文垂, ukservers.com
6.60 ms  AS3356  英国, 伦敦, level3.com
19.33 ms  AS3356  英国, 伦敦, level3.com
7.75 ms  AS58453  英国, 伦敦, chinamobile.com, 移动
261.22 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
196.94 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
204.85 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
212.37 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
204.90 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    8131.46 Mbps    7346.21 Mbps    3.69     0.0%
法兰克福         8599.90 Mbps    4737.95 Mbps    18.12    0.0%
洛杉矶           485.41 Mbps     4354.35 Mbps    131.60   0.0%
联通WuXi         1148.77 Mbps    4356.87 Mbps    235.62   0.0%
电信Suzhou5G     0.73 Mbps       293.56 Mbps     291.01   NULL
电信浙江         0.95 Mbps       1.26 Mbps       230.53   NULL
移动Beijing      445.62 Mbps     1933.31 Mbps    220.04   0.0%
------------------------------------------------------------------------
 总共花费      : 6 分 51 秒
 时间          : Tue Jun 18 09:27:57 CST 2024
------------------------------------------------------------------------
```

### 流媒体解锁

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-29.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-29.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-29.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-30.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-30.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-30.jpg" alt="" loading="lazy">
</picture>

### Network

```
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : AMD EPYC 9454 48-Core Processor
 CPU Cores          : 2 @ 2749.996 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ❌ Disabled
 Total Disk         : 31.9 GB (2.4 GB Used)
 Total RAM          : 1.9 GB (397.7 MB Used)
 System uptime      : 0 days, 1 hour 56 min
 Load average       : 0.00, 1.24, 2.30
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 Virtualization     : KVM
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv6
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : AH CLOUD LTD
 ASN                : AS207108 AH CLOUD LTD
 Host               : AH CLOUD LTD
 Location           : Canary Wharf, England-ENG, United Kingdom
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Ah Cloud 

 Nearest          3.67 ms     N/A     5234.71 Mbps   8153.85 Mbps   YouFibre - London 

 Kochi, IN        167.38 ms   0.0%    3904.36 Mbps   535.38 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    152.34 ms   0.0%    4167.33 Mbps   565.41 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      248.61 ms   N/A     3274.32 Mbps   321.80 Mbps    Jio - Chennai 
 Mumbai, IN       131.40 ms   0.0%    5154.87 Mbps   547.48 Mbps    i3D.net - Mumbai 
 Delhi, IN        160.33 ms   0.0%    3434.22 Mbps   513.87 Mbps    Tata Play Fiber - New Delhi 

 Seattle, US      147.48 ms   N/A     3540.59 Mbps   611.08 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  130.30 ms   0.0%    3342.37 Mbps   541.28 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       108.31 ms   0.0%    3088.56 Mbps   800.99 Mbps    i3D.net - Dallas, TX 
 Miami, US        102.30 ms   N/A     3350.31 Mbps   603.45 Mbps    Dish Wireless - Miami, FL 
 New York, US     70.57 ms    N/A     890.36 Mbps    784.90 Mbps    fdcservers.net - New York, NY 
 Toronto, CA      86.61 ms    0.0%    3282.41 Mbps   1044.99 Mbps   Rogers - Toronto, ON 
 Mexico City, MX  169.21 ms   N/A     2630.45 Mbps   525.65 Mbps    INFINITUM - Mexico City 

 London, UK       3.93 ms     0.0%    7078.01 Mbps   7884.91 Mbps   VeloxServ Communications - London 
 Amsterdam, NL    9.72 ms     0.0%    4940.66 Mbps   6756.28 Mbps   31173 Services AB - Amsterdam 
 Paris, FR        10.63 ms    N/A     5411.02 Mbps   2347.95 Mbps   Axione - Paris 
 Frankfurt, DE    15.89 ms    0.0%    6776.42 Mbps   4681.18 Mbps   Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       30.93 ms    0.0%    6639.26 Mbps   2319.09 Mbps   Play - Warszawa 
 Bucharest, RO    44.19 ms    0.0%    5818.07 Mbps   1939.48 Mbps   Vodafone Romania Fixed – Bucharest - Bucharest 
 Moscow, RU       52.27 ms    0.0%    5828.93 Mbps   1962.05 Mbps   Rostelecom - Moscow 

 Jeddah, SA       84.35 ms    0.0%    5255.09 Mbps   1103.92 Mbps   Saudi Telecom Company 
 Dubai, AE        128.43 ms   0.0%    5490.77 Mbps   773.86 Mbps    du - Dubai  
 Fujairah, AE     132.78 ms   0.0%    6407.38 Mbps   786.97 Mbps    ETISALAT-UAE - Fujairah 
 Istanbul, TR     52.80 ms    0.0%    7027.91 Mbps   1331.47 Mbps   Turkcell - Istanbul 
 Tehran, IR       95.91 ms    0.0%    4692.10 Mbps   958.36 Mbps    Asiatech - Tehran 

 Tokyo, JP        238.81 ms   0.0%    3342.08 Mbps   352.58 Mbps    IPA CyberLab 400G - Tokyo 
 Shanghai, CU-CN  277.87 ms   0.0%    2859.17 Mbps   330.21 Mbps    China Unicom 5G - Shanghai 
 Nanjing, CT-CN   611.43 ms   7.0%    868.60 Mbps    0.85 Mbps      China Telecom JiangSu 5G - Nanjing 
 Hong Kong, CN    219.94 ms   N/A     1936.64 Mbps   279.05 Mbps    STC - Hong Kong 
 Singapore, SG    FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Jakarta, ID      FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 4333.38 Mbps
 Avg UL Speed       : 1702.02 Mbps

 Total DL Data      : 176.50 GB
 Total UL Data      : 59.28 GB
 Total Data         : 235.78 GB
---------------------------------------------------------------------------
 Duration           : 14 min 22 sec
 System Time        : 18/06/2024 - 10:51:53 CST
 Total Script Runs  : 48264
---------------------------------------------------------------------------
 Result             : https://result.nws.sh/r/1718678139_N2WIBQ_GLOBAL.txt
---------------------------------------------------------------------------
```
