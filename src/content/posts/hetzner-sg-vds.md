---
tags: [sg-server]
title: "Hetzner 新加坡 VDS 测评"
published: 2024-08-06
---

期待已久的Hetzner 新加坡终于上线了。只能说，理想很美好，显示很骨感。并没有想象中能够媲美德国的优惠，性价比非常低，带宽属于单向1T，CPU仅有7002，7003起，价格7.4欧起步，属实有点上不起。额外每T的流量 7.40 欧元。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/image-11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/image-11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/image-11.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/image-12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/image-12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/image-12.jpg" alt="" loading="lazy">
</picture>

## 测评

### lscpu

```shell
root@catcat:~# lscpu
Architecture:                       x86_64
CPU op-mode(s):                     32-bit, 64-bit
Byte Order:                         Little Endian
Address sizes:                      40 bits physical, 48 bits virtual
CPU(s):                             2
On-line CPU(s) list:                0,1
Thread(s) per core:                 2
Core(s) per socket:                 1
Socket(s):                          1
NUMA node(s):                       1
Vendor ID:                          AuthenticAMD
CPU family:                         25
Model:                              1
Model name:                         AMD EPYC-Milan Processor
Stepping:                           1
CPU MHz:                            2396.398
BogoMIPS:                           4792.79
Hypervisor vendor:                  KVM
Virtualization type:                full
L1d cache:                          32 KiB
L1i cache:                          32 KiB
L2 cache:                           512 KiB
L3 cache:                           32 MiB
NUMA node0 CPU(s):                  0,1
Vulnerability Gather data sampling: Not affected
Vulnerability Itlb multihit:        Not affected
Vulnerability L1tf:                 Not affected
Vulnerability Mds:                  Not affected
Vulnerability Meltdown:             Not affected
Vulnerability Mmio stale data:      Not affected
Vulnerability Retbleed:             Not affected
Vulnerability Spec store bypass:    Mitigation; Speculative Store Bypass disabled via prctl and seccomp
Vulnerability Spectre v1:           Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:           Mitigation; Retpolines; IBPB conditional; IBRS_FW; STIBP conditional; RSB filling; PBRSB-eIBRS Not affected; B                                    HI Not affected
Vulnerability Srbds:                Not affected
Vulnerability Tsx async abort:      Not affected
Flags:                              fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall n                                    x mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx1                                    6 pcid sse4_1 sse4_2 x2apic movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy cr8_legacy ab                                    m sse4a misalignsse 3dnowprefetch osvw topoext perfctr_core invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsba                                    se bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves clze                                    ro xsaveerptr wbnoinvd arat umip pku ospke rdpid
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 1 hours, 2 minutes
Processor  : AMD EPYC-Milan Processor
CPU cores  : 2 @ 2396.398 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 7.6 GiB
Swap       : 0.0 KiB
Disk       : 75.0 GiB
Distro     : Ubuntu 20.04.6 LTS
Kernel     : 5.4.0-189-generic
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Hetzner Online GmbH
ASN        : AS215859 Hetzner Online GmbH
Host       : Hetzner Online GmbH
Location   : Gunzenhausen, Bavaria (BY)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 174.11 MB/s  (43.5k) | 1.71 GB/s    (26.8k)
Write      | 174.57 MB/s  (43.6k) | 1.72 GB/s    (26.9k)
Total      | 348.68 MB/s  (87.1k) | 3.44 GB/s    (53.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.66 GB/s     (5.2k) | 2.88 GB/s     (2.8k)
Write      | 2.80 GB/s     (5.4k) | 3.07 GB/s     (3.0k)
Total      | 5.46 GB/s    (10.6k) | 5.96 GB/s     (5.8k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 519 Mbits/sec   | 384 Mbits/sec   | 170 ms         
Eranium         | Amsterdam, NL (100G)      | 1.08 Gbits/sec  | 1.02 Gbits/sec  | -- 
Uztelecom       | Tashkent, UZ (10G)        | 834 Mbits/sec   | 505 Mbits/sec   | 186 ms         
Leaseweb        | Singapore, SG (10G)       | busy            | 8.26 Gbits/sec  | 1.28 ms        
Clouvider       | Los Angeles, CA, US (10G) | 617 Mbits/sec   | 1.05 Gbits/sec  | 165 ms         
Leaseweb        | NYC, NY, US (10G)         | 588 Mbits/sec   | 724 Mbits/sec   | -- 
Edgoo           | Sao Paulo, BR (1G)        | 482 Mbits/sec   | 478 Mbits/sec   | 327 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | busy            | 374 Mbits/sec   | 170 ms         
Eranium         | Amsterdam, NL (100G)      | busy            | busy            | -- 
Uztelecom       | Tashkent, UZ (10G)        | 914 Mbits/sec   | 876 Mbits/sec   | 186 ms         
Leaseweb        | Singapore, SG (10G)       | 9.26 Gbits/sec  | 9.28 Gbits/sec  | 1.68 ms        
Clouvider       | Los Angeles, CA, US (10G) | 818 Mbits/sec   | 177 Mbits/sec   | 165 ms         
Leaseweb        | NYC, NY, US (10G)         | 712 Mbits/sec   | 752 Mbits/sec   | 228 ms         
Edgoo           | Sao Paulo, BR (1G)        | 461 Mbits/sec   | 480 Mbits/sec   | 326 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1937                          
Multi Core      | 2419                          
Full Test       | https://browser.geekbench.com/v6/cpu/7217346

```

### Bench

```shell
----------------------------------------------------------------------
 CPU Model          : AMD EPYC-Milan Processor
 CPU Cores          : 2 @ 2396.398 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✗ Disabled
 Total Disk         : 75.0 GB (1.5 GB Used)
 Total Mem          : 7.6 GB (148.5 MB Used)
 System uptime      : 0 days, 1 hour 33 min
 Load average       : 0.08, 0.23, 0.69
 OS                 : Ubuntu 20.04.6 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.4.0-189-generic
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS215859 Hetzner Online GmbH
 Location           : Singapore / SG
 Region             : Singapore
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.7 GB/s
 I/O Speed(2nd run) : 1.9 GB/s
 I/O Speed(3rd run) : 1.9 GB/s
 I/O Speed(average) : 1877.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    506.81 Mbps       4398.13 Mbps        152.82 ms   
 Los Angeles, US  537.58 Mbps       3446.30 Mbps        167.18 ms   
 Dallas, US       419.92 Mbps       3170.53 Mbps        195.03 ms   
 Montreal, CA     98.55 Mbps        379.86 Mbps         244.72 ms   
 Amsterdam, NL    289.08 Mbps       950.79 Mbps         222.57 ms   
 Hongkong, CN     2418.82 Mbps      7434.45 Mbps        31.76 ms    
 Mumbai, IN       617.46 Mbps       7942.82 Mbps        57.64 ms    
 Singapore, SG    519.11 Mbps       936.86 Mbps         40.95 ms    
 Tokyo, JP        1183.22 Mbps      7405.44 Mbps        66.69 ms    
----------------------------------------------------------------------
 Finished in        : 5 min 19 sec
 Timestamp          : 2024-08-06 13:26:37 UTC
----------------------------------------------------------------------
```

### UnixBench

```shell
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat: GNU/Linux
   OS: GNU/Linux -- 5.4.0-189-generic -- #209-Ubuntu SMP Fri Jun 7 14:05:13 UTC 2024
   Machine: x86_64 (x86_64)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC-Milan Processor (4792.8 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 1: AMD EPYC-Milan Processor (4792.8 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   11:50:15 up 2 min,  1 user,  load average: 0.77, 0.35, 0.13; runlevel 2024-08-06

------------------------------------------------------------------------
Benchmark Run: Tue Aug 06 2024 11:50:15 - 12:18:12
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       55583034.0 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     9236.6 MWIPS (9.9 s, 7 samples)
Execl Throughput                               7802.2 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1722767.3 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          484619.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       4229870.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3009439.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  45070.1 lps   (10.0 s, 7 samples)
Process Creation                              18483.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  17863.8 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   2894.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        3848781.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   55583034.0   4762.9
Double-Precision Whetstone                       55.0       9236.6   1679.4
Execl Throughput                                 43.0       7802.2   1814.5
File Copy 1024 bufsize 2000 maxblocks          3960.0    1722767.3   4350.4
File Copy 256 bufsize 500 maxblocks            1655.0     484619.9   2928.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    4229870.1   7292.9
Pipe Throughput                               12440.0    3009439.2   2419.2
Pipe-based Context Switching                   4000.0      45070.1    112.7
Process Creation                                126.0      18483.7   1467.0
Shell Scripts (1 concurrent)                     42.4      17863.8   4213.1
Shell Scripts (8 concurrent)                      6.0       2894.7   4824.5
System Call Overhead                          15000.0    3848781.6   2565.9
                                                                   ========
System Benchmarks Index Score                                        2348.3

------------------------------------------------------------------------
Benchmark Run: Tue Aug 06 2024 12:18:12 - 12:46:08
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables       79959917.0 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    15553.0 MWIPS (9.8 s, 7 samples)
Execl Throughput                               9923.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2433727.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          647862.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       5522522.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3903715.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 423170.2 lps   (10.0 s, 7 samples)
Process Creation                              31533.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  20657.8 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   3023.5 lpm   (60.0 s, 2 samples)
System Call Overhead                        4634725.1 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   79959917.0   6851.7
Double-Precision Whetstone                       55.0      15553.0   2827.8
Execl Throughput                                 43.0       9923.1   2307.7
File Copy 1024 bufsize 2000 maxblocks          3960.0    2433727.2   6145.8
File Copy 256 bufsize 500 maxblocks            1655.0     647862.3   3914.6
File Copy 4096 bufsize 8000 maxblocks          5800.0    5522522.8   9521.6
Pipe Throughput                               12440.0    3903715.7   3138.0
Pipe-based Context Switching                   4000.0     423170.2   1057.9
Process Creation                                126.0      31533.3   2502.6
Shell Scripts (1 concurrent)                     42.4      20657.8   4872.1
Shell Scripts (8 concurrent)                      6.0       3023.5   5039.2
System Call Overhead                          15000.0    4634725.1   3089.8
                                                                   ========
System Benchmarks Index Score                                        3694.0
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC-Milan Processor
 CPU 核心数        : 2
 CPU 频率          : 2396.398 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 512.00 KB / L3: 32.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 406.58 MiB / 7.57 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.54 GiB / 74.80 GiB
 启动盘路径        : /dev/sda1
 系统在线时间      : 0 days, 1 hour 26 min
 负载              : 0.35, 0.23, 0.91
 系统              : Ubuntu 20.04.6 LTS (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 5.4.0-189-generic
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 IPV4 ASN          : AS215859 Hetzner Online GmbH
 IPV4 位置         : Singapore / Singapore / SG
 IPV6 ASN          : AS215859 Hetzner Online
 IPV6 位置         : United States
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		4496 Scores
 2 线程测试(多核)得分: 		4774 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		53653.55 MB/s
 单线程写测试:		25303.13 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		37.5 MB/s (9148 IOPS, 2.80s)		52.7 MB/s (12863 IOPS, 1.99s)
 1GB-1M Block		1.1 GB/s (1088 IOPS, 0.92s)		1.6 GB/s (1480 IOPS, 0.68s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 173.04 MB/s  (43.2k) | 1.56 GB/s    (24.4k)
Write      | 173.50 MB/s  (43.3k) | 1.57 GB/s    (24.5k)
Total      | 346.55 MB/s  (86.6k) | 3.13 GB/s    (48.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.43 GB/s     (4.7k) | 2.60 GB/s     (2.5k)
Write      | 2.56 GB/s     (5.0k) | 2.77 GB/s     (2.7k)
Total      | 4.99 GB/s     (9.7k) | 5.37 GB/s     (5.2k)
正在并发测试中，大概2~3分钟无输出，请耐心等待。。。
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：新加坡
[IPV6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：德国
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN10S14)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN11S18)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：SG 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：DE 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: DE)
 Disney+:				No (IP Banned By Disney+ 1)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: DE)
 Amazon Prime Video:			Yes (Region: SG)
 TVBAnywhere+:				Yes
 Spotify Registration:			No
 Instagram Licensed Audio:		Failed (Error: PAGE ERROR)
 OneTrust Region:			DE [Unknown]
 iQyi Oversea Region:			INTL
 Bing Region:				DE
 YouTube CDN:				Singapore
 Netflix Preferred CDN:			Singapore
 ChatGPT:				Yes
 Google Gemini:				No
 Wikipedia Editability:			Yes
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			EUR
 ---Forum---
 Reddit:				No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					IPv6 Is Not Currently Supported
 Disney+:				IPv6 Is Not Currently Supported
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: DE)
 Amazon Prime Video:			IPv6 Is Not Currently Supported
 TVBAnywhere+:				IPv6 Is Not Currently Supported
 Spotify Registration:			No
 Instagram Licensed Audio:		Failed (Error: PAGE ERROR)
 OneTrust Region:			US [Unknown]
 iQyi Oversea Region:			IPv6 Is Not Currently Supported
 Bing Region:				DE
 YouTube CDN:				Singapore
 Netflix Preferred CDN:			Singapore
 ChatGPT:				Failed (Network Connection)
 Google Gemini:				No
 Wikipedia Editability:			Yes
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:				IPv6 Is Not Currently Supported
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 84 [8] 
VPN得分(越低越好): 8 [8] 
代理得分(越低越好): 20 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 19 [8] 
欺诈得分(越低越好): 33 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] unknown [C] hosting [0 7 9]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7 D] 
是否数据中心: No [5 6 8 C] Yes [0 1 A]
是否移动设备: No [5 A C] Yes [E]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B C D]
是否VPN: Yes [E] No [0 1 6 7 A C D]
是否Tor: No [0 1 3 6 7 8 A B C D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 310(Total_Check) 0(Clean) 6(Blacklisted) 6(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 33 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] 
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
DNS-黑名单: 310(Total_Check) 0(Clean) 0(Blacklisted) 310(Other) 
Google搜索可行性：YES
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✘     ✘     ✔     ✘     ✔     ✘    
163       ✘     ✘     ✔     ✘     ✔     ✘    
Sohu      ✘     ✘     ✔     ✘     ✔     ✘    
Yandex    ✘     ✘     ✔     ✘     ✔     ✘    
Gmail     ✘     ✘     ✘     ✘     ✘     ✘    
Outlook   ✘     ✘     ✔     ✘     ✔     ✘    
Office365 ✘     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✘     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✘     ✔     ✘     ✔     ✘    
MailRU    ✘     ✘     ✘     ✘     ✘     ✘    
AOL       ✘     ✘     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✘     ✘     ✘     ✘     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
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
2.60 ms  *  局域网
0.11 ms  AS215859  新加坡, hetzner.com
21.47 ms  AS215859  新加坡, hetzner.com
0.54 ms  AS215859  新加坡, hetzner.com
8.79 ms  AS215859  新加坡, hetzner.com
2.73 ms  AS2914  新加坡, ntt.com
137.09 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
146.26 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
2.66 ms  *  局域网
0.72 ms  AS215859  新加坡, hetzner.com
64.89 ms  AS215859  新加坡, hetzner.com
1.00 ms  AS215859  新加坡, hetzner.com
1.09 ms  AS215859  新加坡, hetzner.com
1.97 ms  AS18106  新加坡, viewqwest.com
180.51 ms  AS18106  德国, 黑森州, 法兰克福, viewqwest.com
160.78 ms  AS6774  德国, 黑森州, 法兰克福, bics.com
216.58 ms  AS6774  BICS.COM 骨干网, bics.com
215.45 ms  AS4837  中国, 北京, chinaunicom.com, 联通
219.41 ms  AS4837  中国, 北京, chinaunicom.com, 联通
249.88 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
255.44 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
258.80 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
253.18 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
4.33 ms  *  局域网
1.08 ms  AS215859  新加坡, hetzner.com
1.74 ms  AS215859  新加坡, hetzner.com
0.92 ms  AS215859  新加坡, hetzner.com
0.95 ms  AS215859  新加坡, hetzner.com
2.22 ms  AS18106  新加坡, viewqwest.com
228.51 ms  AS18106  德国, 黑森州, 法兰克福, viewqwest.com
160.65 ms  AS6774  德国, 黑森州, 法兰克福, bics.com
204.65 ms  AS58453  德国, 黑森州, 法兰克福, chinamobile.com, 移动
225.39 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
370.74 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
371.25 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
227.99 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
229.21 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
234.99 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
233.59 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 411.82 Mbps	 3854.45 Mbps	 155.89	  0.0%
新加坡		 17750.36 Mbps	 8846.77 Mbps	 0.71	  0.0%
中国香港	 1422.32 Mbps	 7099.87 Mbps	 31.85	  0.0%
联通成都	 203.99 Mbps	 1.86 Mbps	 281.48	  NULL
------------------------------------------------------------------------
 总共花费      : 3 分 27 秒
 时间          : Tue Aug  6 13:16:55 UTC 2024
------------------------------------------------------------------------

```

### IP质量检测

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/image-13.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/image-13.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/image-13.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/image-14.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/image-14.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/image-14.jpg" alt="" loading="lazy">
</picture>

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD EPYC-Milan Processor (x86_64)
1 cores @ 2396 MHz  |  7.6 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          3861
  Integer Math                     9542 Million Operations/s
  Floating Point Math              6075 Million Operations/s
  Prime Numbers                    23.5 Million Primes/s
  Sorting                          5675 Thousand Strings/s
  Encryption                       2454 MB/s
  Compression                      37964 KB/s
  CPU Single Threaded              2894 Million Operations/s
  Physics                          502 Frames/s
  Extended Instructions (SSE)      2429 Million Matrices/s

Memory Mark:                       2068
  Database Operations              1037 Thousand Operations/s
  Memory Read Cached               27707 MB/s
  Memory Read Uncached             26513 MB/s
  Memory Write                     25869 MB/s
  Available RAM                    7082 Megabytes
  Memory Latency                   76 Nanoseconds
  Memory Threaded                  27630 MB/s
--------------------------------------------------------------------------------
```