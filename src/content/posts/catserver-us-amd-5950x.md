---
tags: [us-server]
title: "CatServer 美国 AMD 5950X 测评 （斯巴达机房）"
published: 2024-05-25
---

首先商家肯定是Oneman。我没买到过斯巴达的机器(久仰大名)，看见这个，买来先试水看看。为什么会给4核心呢，根据商家的说法是有脚本根据母鸡负载动态控制vCPU quota。母鸡没有满负载前不会限制，vps可以跑满4个物理核心。母鸡满负载后会限制到1个物理核心。和HH的圣诞促销很类似，2c独享。

## 机器配置

- CPU：4 核 AMD 5950X(1核独享)

- 内存：6GB

- 硬盘：80GB NVMe

- 流量：3T

- 带宽：1Gbps

- 防御：200Gb/s TCP

- 福利：可免费更换一次，如果检测到服务器为公共代理（机场），则收取费用10CAD

价格：88CNY(不要防御的话需要75CNY)

## 测评

### lscpu

```shell
root@catcat:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         40 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  4
  On-line CPU(s) list:   0-3
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD Ryzen 9 5950X 16-Core Processor
    BIOS Model name:     pc-i440fx-5.2  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               33
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           4
    Stepping:            2
    BogoMIPS:            6787.24
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 
                         syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pc                         lmulqdq ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdr                         and hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_                         core ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid rdseed adx 
                         smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves clzero xsaveerptr wbnoinvd arat npt nri                         p_save umip pku ospke vaes vpclmulqdq rdpid fsrm arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   128 KiB (4 instances)
  L1i:                   128 KiB (4 instances)
  L2:                    2 MiB (4 instances)
  L3:                    256 MiB (4 instances)
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
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not af                         fected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 4 minutes
Processor  : AMD Ryzen 9 5950X 16-Core Processor
CPU cores  : 4 @ 3393.624 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 5.8 GiB
Swap       : 0.0 KiB
Disk       : 78.6 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Spartan Host Ltd
ASN        : AS201106 Spartan Host Ltd
Host       : Spartan Host LLC
Location   : Seattle, Washington (WA)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 245.56 MB/s  (61.3k) | 1.88 GB/s    (29.4k)
Write      | 246.20 MB/s  (61.5k) | 1.89 GB/s    (29.5k)
Total      | 491.76 MB/s (122.9k) | 3.77 GB/s    (58.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.56 GB/s     (5.0k) | 3.24 GB/s     (3.1k)
Write      | 2.69 GB/s     (5.2k) | 3.46 GB/s     (3.3k)
Total      | 5.25 GB/s    (10.2k) | 6.71 GB/s     (6.5k)

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1565                          
Multi Core      | 5027                          
Full Test       | https://browser.geekbench.com/v5/cpu/22516055

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2044                          
Multi Core      | 5837                          
Full Test       | https://browser.geekbench.com/v6/cpu/6253845
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD Ryzen 9 5950X 16-Core Processor (x86_64)
4 cores @ 0 MHz  |  5.8 GiB RAM
Number of Processes: 4  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          11838
  Integer Math                     29180 Million Operations/s
  Floating Point Math              23275 Million Operations/s
  Prime Numbers                    86.7 Million Primes/s
  Sorting                          16365 Thousand Strings/s
  Encryption                       6165 MB/s
  Compression                      115114 KB/s
  CPU Single Threaded              3333 Million Operations/s
  Physics                          1523 Frames/s
  Extended Instructions (SSE)      9415 Million Matrices/s

Memory Mark:                       2476
  Database Operations              4323 Thousand Operations/s
  Memory Read Cached               34070 MB/s
  Memory Read Uncached             21175 MB/s
  Memory Write                     14616 MB/s
  Available RAM                    4687 Megabytes
  Memory Latency                   56 Nanoseconds
  Memory Threaded                  38466 MB/s
--------------------------------------------------------------------------------
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 5950X 16-Core Processor
 CPU 核心数        : 4
 CPU 频率          : 3393.624 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 2.00 MB / L3: 256.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 209.11 MiB / 5.79 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.75 GiB / 78.63 GiB
 启动盘路径        : /dev/vda1
 系统在线时间      : 0 days, 0 hour 29 min
 负载              : 0.32, 0.76, 0.53
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS201106 Spartan Host Ltd
 IPV4 位置         : Seattle / Washington / US
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          5329 Scores
 4 线程测试(多核)得分:          20046 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          61755.63 MB/s
 单线程写测试:          37597.08 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         83.2 MB/s (20.32 IOPS, 1.26s))          113 MB/s (27513 IOPS, 0.93s)
 1GB-1M Block           1.2 GB/s (1162 IOPS, 0.86s)             2.7 GB/s (2594 IOPS, 0.39s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 273.38 MB/s  (68.3k) | 1.98 GB/s    (31.0k)
Write      | 274.10 MB/s  (68.5k) | 1.99 GB/s    (31.2k)
Total      | 547.48 MB/s (136.8k) | 3.98 GB/s    (62.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.86 GB/s     (5.5k) | 3.32 GB/s     (3.2k)
Write      | 3.01 GB/s     (5.8k) | 3.54 GB/s     (3.4k)
Total      | 5.87 GB/s    (11.4k) | 6.86 GB/s     (6.7k)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  洛杉机(LAX31S13)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：US 区
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: US)
 Disney+:                               Yes (Region: US)
 Netflix:                               Yes (Region: US)
 YouTube Premium:                       Yes
 Amazon Prime Video:                    Yes (Region: US)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   US
 YouTube CDN:                           Los Angeles, CA 
 Netflix Preferred CDN:                 Seattle, WA  
 Spotify Registration:                  Yes (Region: US)
 Steam Currency:                        USD
 ChatGPT:                               Yes
 Bing Region:                           US
 Wikipedia Editability:                 No
 Instagram Licensed Audio:              Yes
 ---Forum---
 Reddit:                                Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【US】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 24 [8] 
VPN得分(越低越好): 31 [8] 
代理得分(越低越好): 98 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 99 [8] 
欺诈得分(越低越好): 0 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.001 (Low) [A] 
公司滥用得分(越低越好): 0.0024 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2] 
安全信息:
使用类型: hosting [0 7 9 A] business [8] DataCenter/WebHosting/Transit [3]
公司类型: business [7] hosting [0 A]
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 5 6 A] No [1 8]
是否移动设备: No [5 A] Yes [E]
是否代理: No [0 1 4 6 7 8 9 A B D] Yes [5 E]
是否VPN: No [0 1 A C] Yes [6 7 D E]
是否Tor: No [0 1 3 6 7 8 A B D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: Yes [6 7 D] No [1 8]
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A D E] 
是否威胁: No [7 8 D] 
是否中继: No [0 7 8 D] 
是否Bogon: No [7 8 A D] 
是否机器人: No [E] 
DNS-黑名单: 338(Total_Check) 0(Clean) 6(Blacklisted) 80(Other) 
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  qq邮箱：No
  yandex邮箱: Yes
----------------三网回程--基于oneclickvirt/backtrace开源----------------
国家: US 城市: Seattle 服务商: AS201106 Spartan Host Ltd
北京电信 219.141.140.10  联通4837   [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 联通4837   [普通线路] 
上海电信 202.96.209.133  联通4837   [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 联通4837   [普通线路] 
广州电信 58.60.188.222   联通4837   [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  联通4837   [普通线路] 
成都电信 61.139.2.69     联通4837   [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  联通4837   [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.14 ms  *  局域网
0.41 ms  AS50131,AS201106  美国, 华盛顿州, 西雅图, spartanhost.org
210.36 ms  AS40065  美国, 加利福尼亚州, 洛杉矶, ceranetworks.com
189.39 ms  AS4837  中国, 上海, chinaunicom.com, 联通
188.82 ms  AS4837  中国, 上海, chinaunicom.com, 联通
230.83 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
238.64 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
238.36 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.10 ms  *  局域网
0.53 ms  AS50131,AS201106  美国, 华盛顿州, 西雅图, spartanhost.org
208.99 ms  AS40065  美国, 加利福尼亚州, 洛杉矶, ceranetworks.com
200.41 ms  AS4837  中国, 上海, chinaunicom.com, 联通
173.12 ms  AS4837  中国, 上海, chinaunicom.com, 联通
199.00 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
197.98 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
196.12 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.13 ms  *  局域网
2.36 ms  AS50131,AS201106  美国, 华盛顿州, 西雅图, spartanhost.org
209.80 ms  AS40065  美国, 加利福尼亚州, 洛杉矶, ceranetworks.com
181.51 ms  AS4837  中国, 上海, chinaunicom.com, 联通
208.08 ms  AS4837  中国, 上海, chinaunicom.com, 联通
175.33 ms  AS4837  中国, 上海, chinaunicom.com, 联通
201.65 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
203.95 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
206.11 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
199.81 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
206.28 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    891.63 Mbps     948.83 Mbps     26.70    0.0%
洛杉矶           933.34 Mbps     951.23 Mbps     27.18    0.0%
日本东京         8.04 Mbps       950.49 Mbps     129.66   2.7%
联通上海5G       11.99 Mbps      12.90 Mbps      162.67   0.0%
联通WuXi         282.85 Mbps     764.51 Mbps     191.82   0.0%
电信合肥5G       9.32 Mbps       7.48 Mbps       186.51   0.0%
电信Zhenjiang5G  225.10 Mbps     762.70 Mbps     214.80   NULL
------------------------------------------------------------------------
 总共花费      : 5 分 53 秒
 时间          : Sat May 25 02:29:07 EDT 2024
------------------------------------------------------------------------
```

### byte-unixbench 性能测试

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat.blog: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD Ryzen 9 5950X 16-Core Processor (6787.2 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD Ryzen 9 5950X 16-Core Processor (6787.2 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD Ryzen 9 5950X 16-Core Processor (6787.2 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD Ryzen 9 5950X 16-Core Processor (6787.2 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   02:49:01 up 54 min,  1 user,  load average: 0.00, 0.23, 0.43; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sat May 25 2024 02:49:01 - 03:16:58
4 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       62738312.1 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    10690.2 MWIPS (10.0 s, 7 samples)
Execl Throughput                               4672.7 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1811538.6 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          474387.4 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       5781139.5 KBps  (30.0 s, 2 samples)
Pipe Throughput                             2855915.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 114477.0 lps   (10.0 s, 7 samples)
Process Creation                               9829.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  11581.1 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4708.8 lpm   (60.0 s, 2 samples)
System Call Overhead                        3388221.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   62738312.1   5376.0
Double-Precision Whetstone                       55.0      10690.2   1943.7
Execl Throughput                                 43.0       4672.7   1086.7
File Copy 1024 bufsize 2000 maxblocks          3960.0    1811538.6   4574.6
File Copy 256 bufsize 500 maxblocks            1655.0     474387.4   2866.4
File Copy 4096 bufsize 8000 maxblocks          5800.0    5781139.5   9967.5
Pipe Throughput                               12440.0    2855915.3   2295.8
Pipe-based Context Switching                   4000.0     114477.0    286.2
Process Creation                                126.0       9829.7    780.1
Shell Scripts (1 concurrent)                     42.4      11581.1   2731.4
Shell Scripts (8 concurrent)                      6.0       4708.8   7848.0
System Call Overhead                          15000.0    3388221.9   2258.8
                                                                   ========
System Benchmarks Index Score                                        2401.7

------------------------------------------------------------------------
Benchmark Run: Sat May 25 2024 03:16:58 - 03:44:54
4 CPUs in system; running 4 parallel copies of tests

Dhrystone 2 using register variables      235482182.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    42311.5 MWIPS (10.0 s, 7 samples)
Execl Throughput                              14677.7 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1896258.3 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          505257.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       4905568.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                            10871720.9 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 779972.7 lps   (10.0 s, 7 samples)
Process Creation                              43895.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  38635.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5242.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        7958302.2 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  235482182.6  20178.4
Double-Precision Whetstone                       55.0      42311.5   7693.0
Execl Throughput                                 43.0      14677.7   3413.4
File Copy 1024 bufsize 2000 maxblocks          3960.0    1896258.3   4788.5
File Copy 256 bufsize 500 maxblocks            1655.0     505257.5   3052.9
File Copy 4096 bufsize 8000 maxblocks          5800.0    4905568.4   8457.9
Pipe Throughput                               12440.0   10871720.9   8739.3
Pipe-based Context Switching                   4000.0     779972.7   1949.9
Process Creation                                126.0      43895.7   3483.8
Shell Scripts (1 concurrent)                     42.4      38635.4   9112.1
Shell Scripts (8 concurrent)                      6.0       5242.2   8737.0
System Call Overhead                          15000.0    7958302.2   5305.5
                                                                   ========
System Benchmarks Index Score                                        5860.9

======= Script description and score comparison completed! ======= 
```