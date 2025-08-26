---
tags: [eu-server]
title: "server-factory 荷兰 AMD EPYC™ 7702P 测评"
published: 2023-10-13
---

## 套餐

**_Provider : server-factory  
Type/Plan : NL-AMD EPYC™ XXS IPv6 ONLY VPS 24 HOUR TRIAL  
Processor : AMD EPYC™ 7702P  
Num of Core : 1Cores  
Memory : 2 GB DDR4 RAM  
Storage : 25 GiB NVME PCIe 4.0 SSD (RAID 10)  
Bandwidth : 100G@ 1 Gbps IN | 1 Gbps OUT  
Location : Eygelshoven  
Price : € 0 / 月_**

## 测评

### lscpu

```shell
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  1
  On-line CPU(s) list:   0
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD EPYC 7702P 64-Core Processor
    BIOS Model name:     pc-q35-8.0  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          23
    Model:               49
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           1
    Stepping:            0
    BogoMIPS:            3999.99
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush
                          mmx fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl c
                         puid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 sse4_1 sse4_2 x2ap
                         ic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm
                          cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_cor
                         e ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 rdseed a
                         dx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 clzero xsaveerptr wbnoin
                         vd arat npt lbrv nrip_save tsc_scale vmcb_clean pausefilter pfthreshold v_vmsav
                         e_vmload vgif umip rdpid arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   64 KiB (1 instance)
  L1i:                   64 KiB (1 instance)
  L2:                    512 KiB (1 instance)
  L3:                    16 MiB (1 instance)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 32 minutes
Processor  : AMD EPYC 7702P 64-Core Processor
CPU cores  : 1 @ 1999.999 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 0.0 KiB
Disk       : 24.5 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-13-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv4 Network Information:
---------------------------------
ISP        : Cloudflare, Inc.
ASN        : AS13335 Cloudflare, Inc.
Host       : Cloudflare WARP
Location   : Eindhoven, North Brabant (NB)
Country    : Netherlands

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 254.04 MB/s  (63.5k) | 2.78 GB/s    (43.5k)
Write      | 254.72 MB/s  (63.6k) | 2.80 GB/s    (43.8k)
Total      | 508.76 MB/s (127.1k) | 5.59 GB/s    (87.3k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.16 GB/s     (8.1k) | 5.57 GB/s     (5.4k)
Write      | 4.38 GB/s     (8.5k) | 5.94 GB/s     (5.8k)
Total      | 8.54 GB/s    (16.6k) | 11.52 GB/s   (11.2k)

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1055                          
Multi Core      | 1048                          
Full Test       | https://browser.geekbench.com/v5/cpu/21831909
```

### Bench

```shell
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 7702P 64-Core Processor
 CPU Cores          : 1 @ 1999.999 MHz
 CPU Cache          : 512 KB
 AES-NI             : Enabled
 VM-x/AMD-V         : Enabled
 Total Disk         : 24.5 GB (1.1 GB Used)
 Total Mem          : 1.9 GB (535.5 MB Used)
 System uptime      : 0 days, 0 hour 26 min
 Load average       : 0.13, 0.04, 0.01
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-13-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : Online / Online
 Organization       : AS13335 Cloudflare, Inc.
 Location           : Eindhoven / NL
 Region             : North Brabant
----------------------------------------------------------------------
 I/O Speed(1st run) : 808 MB/s
 I/O Speed(2nd run) : 797 MB/s
 I/O Speed(3rd run) : 803 MB/s
 I/O Speed(average) : 802.7 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    981.90 Mbps       923.19 Mbps         3.74 ms     
 Los Angeles, US  196.79 Mbps       983.15 Mbps         140.26 ms   
 Dallas, US       298.35 Mbps       979.48 Mbps         112.44 ms   
 Montreal, CA     567.90 Mbps       841.80 Mbps         89.01 ms    
 Paris, FR        905.12 Mbps       1021.39 Mbps        19.27 ms    
 Amsterdam, NL    876.64 Mbps       907.19 Mbps         6.81 ms     
 Shanghai, CN     366.27 Mbps       817.05 Mbps         306.23 ms   
 Nanjing, CN      266.25 Mbps       703.59 Mbps         268.34 ms   
 Hongkong, CN     4.99 Mbps         0.19 Mbps           220.18 ms   
 Singapore, SG    201.36 Mbps       793.95 Mbps         158.88 ms   
 Tokyo, JP        1.69 Mbps         825.89 Mbps         242.29 ms   
----------------------------------------------------------------------
 Finished in        : 5 min 12 sec
 Timestamp          : 2023-10-13 02:25:39 CEST
----------------------------------------------------------------------
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD EPYC 7702P 64-Core Processor (x86_64)
1 cores @ 0 MHz  |  1.9 GiB RAM
Number of Processes: 1  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          2116
  Integer Math                     4730 Million Operations/s
  Floating Point Math              3486 Million Operations/s
  Prime Numbers                    16.7 Million Primes/s
  Sorting                          2942 Thousand Strings/s
  Encryption                       1153 MB/s
  Compression                      20570 KB/s
  CPU Single Threaded              1987 Million Operations/s
  Physics                          281 Frames/s
  Extended Instructions (SSE)      1666 Million Matrices/s

Memory Mark:                       1289
  Database Operations              680 Thousand Operations/s
  Memory Read Cached               24917 MB/s
  Memory Read Uncached             12752 MB/s
  Memory Write                     13041 MB/s
  Available RAM                    1257 Megabytes
  Memory Latency                   54 Nanoseconds
  Memory Threaded                  11358 MB/s
--------------------------------------------------------------------------
```

### byte-unixbench 性能测试

```shell
------------------------------------------------------------------------
Benchmark Run: Fri Oct 13 2023 03:09:15 - 03:37:13
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       41228549.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     7266.2 MWIPS (10.0 s, 7 samples)
Execl Throughput                               3233.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        972857.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          259813.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3010288.6 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1446888.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 177791.4 lps   (10.0 s, 7 samples)
Process Creation                              10388.0 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   8490.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1139.5 lpm   (60.0 s, 2 samples)
System Call Overhead                        1593115.3 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   41228549.5   3532.9
Double-Precision Whetstone                       55.0       7266.2   1321.1
Execl Throughput                                 43.0       3233.1    751.9
File Copy 1024 bufsize 2000 maxblocks          3960.0     972857.0   2456.7
File Copy 256 bufsize 500 maxblocks            1655.0     259813.9   1569.9
File Copy 4096 bufsize 8000 maxblocks          5800.0    3010288.6   5190.2
Pipe Throughput                               12440.0    1446888.3   1163.1
Pipe-based Context Switching                   4000.0     177791.4    444.5
Process Creation                                126.0      10388.0    824.4
Shell Scripts (1 concurrent)                     42.4       8490.7   2002.5
Shell Scripts (8 concurrent)                      6.0       1139.5   1899.1
System Call Overhead                          15000.0    1593115.3   1062.1
                                                                   ========
System Benchmarks Index Score                                        1491.2
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7702P 64-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 1999.999 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 512.00 KB / L3: 16.00 MB
 硬盘空间          : 1.53 GiB / 24.03 GiB
 启动盘路径        : /dev/sda2
 内存              : 539.34 MiB / 1.89 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 1 hour 46 min
 负载              : 0.78, 2.75, 1.93
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-13-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,不支持回环
 IPV4 ASN          : AS13335 Cloudflare, Inc.
 IPV4 位置         : Eindhoven / North Brabant / NL
 IPV6 ASN          : AS206075 server-factory.com
 IPV6 位置         : Eygelshoven / Limburg
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分:           1635 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          44851.14 MB/s
 单线程写测试:          20108.00 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         54.0 MB/s (13.18 IOPS, 1.94s))          76.8 MB/s (18738 IOPS, 1.37s)
 1GB-1M Block           782 MB/s (746 IOPS, 1.34s)              1.1 GB/s (1062 IOPS, 0.94s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 251.48 MB/s  (62.8k) | 2.78 GB/s    (43.5k)
Write      | 252.15 MB/s  (63.0k) | 2.79 GB/s    (43.7k)
Total      | 503.63 MB/s (125.9k) | 5.58 GB/s    (87.2k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 5.08 GB/s     (9.9k) | 6.15 GB/s     (6.0k)
Write      | 5.35 GB/s    (10.4k) | 6.55 GB/s     (6.4k)
Total      | 10.43 GB/s   (20.3k) | 12.71 GB/s   (12.4k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: GRU(GRU14S23)
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
 Disney+:                               Yes (Region: NL)
 Netflix:                               Yes (Region: NL)
 YouTube Premium:                       Failed
 Amazon Prime Video:                    Yes (Region: NL)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   US
 Viu.com:                               No
 YouTube CDN:                           Sao Paulo 
 Netflix Preferred CDN:                 Brussels  
 Spotify Registration:                  Yes (Region: NL)
 Steam Currency:                        EUR
 ChatGPT:                               Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               No
 Disney+:                               Yes (Region: NL)
 Netflix:                               Originals Only
 YouTube Premium:                       Failed
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           Amsterdam 
 Netflix Preferred CDN:                 Associated with [RETN Limited] in [Budapest ]
 Spotify Registration:                  Yes (Region: NL)
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【NL】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 6②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Content Delivery Network⑤  hosting⑧  hosting⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes②   No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ②   Yes⑥ ⑦ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测88 ③
Google搜索可行性：NO
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: NL 城市: Eindhoven 服务商: AS13335 Cloudflare, Inc.
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    测试超时
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     测试超时
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    测试超时
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       测试超时
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
5.40 ms         AS13335 [CLOUDFLARENET] 美国 佐治亚州 亚特兰大 cloudflare.com
5.62 ms         AS13335 荷兰 北荷兰省 阿姆斯特丹 cloudflare.com
7.05 ms         AS13335 [CLOUDFLARENET] 荷兰 北荷兰省 阿姆斯特丹 cloudflare.com
6.89 ms         AS1299 [ARELION-NET] 荷兰 北荷兰省 阿姆斯特丹 arelion.com
7.27 ms         AS1299 [ARELION-NET] 荷兰 北荷兰省 阿姆斯特丹 arelion.com
13.22 ms        AS1299 [TELIANET] 英国 英格兰 伦敦 arelion.com
13.34 ms        AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
93.22 ms        AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
260.04 ms       AS4134 [CHINANET-BB] 中国 香港 chinatelecom.com.cn 电信
256.61 ms       AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
261.71 ms       AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
260.09 ms       AS134774 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.cn 电信
255.52 ms       AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
5.45 ms         AS13335 [CLOUDFLARENET] 美国 佐治亚州 亚特兰大 cloudflare.com
5.63 ms         AS13335 荷兰 北荷兰省 阿姆斯特丹 cloudflare.com
10.25 ms        AS13335 [CLOUDFLARENET] 荷兰 北荷兰省 阿姆斯特丹 cloudflare.com
7.40 ms         AS1239 荷兰 北荷兰省 阿姆斯特丹 AMS-IX - Sprint - 100Gbps sprint.net
7.49 ms         AS1239 [SPRINTLINK] 荷兰 北荷兰省 阿姆斯特丹 sprint.net
13.49 ms        AS1239 [UK-SPRINTLINK] 英国 英格兰 伦敦 sprint.net
89.68 ms        AS1239 [SPRINT-INNET9] 美国 纽约州 纽约 sprint.net
83.61 ms        AS1239 [SPRINT-INNET9] 美国 纽约州 纽约 sprint.net
83.59 ms        AS1239 [SPRINT-INNET9] 美国 纽约州 纽约 sprint.net
90.00 ms        AS1239 [SPRINT-INNET9] 美国 怀俄明州 沃兰 sprint.net
90.51 ms        AS1239 [SPRINT-INNET9] 美国 马里兰州 巴尔的摩 sprint.net
124.99 ms       AS1239 [SPRINT-INNET9] 美国 弗吉尼亚州 费尔法克斯 sprint.net
126.88 ms       AS1239 [SPRINT-INNET9] 美国 佐治亚州 亚历山大 sprint.net
121.92 ms       AS1239 [SPRINT-INNET9] 美国 德克萨斯州 沃思堡 sprint.net
155.31 ms       AS1239 [SPRINT-INNET9] 美国 加利福尼亚州 里亚托 sprint.net
158.33 ms       AS1239 [SPRINT-INNET9] 美国 加利福尼亚州 洛杉矶 sprint.net
365.67 ms       AS1239 [SPRINT-INNET] 美国 加利福尼亚州 洛杉矶 sprint.net
338.93 ms       AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
329.34 ms       AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
332.95 ms       AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
338.46 ms       AS17816 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
332.88 ms       AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
315.58 ms       AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
5.43 ms         AS13335 [CLOUDFLARENET] 美国 佐治亚州 亚特兰大 cloudflare.com
5.88 ms         AS13335 荷兰 北荷兰省 阿姆斯特丹 cloudflare.com
7.24 ms         AS13335 [CLOUDFLARENET] 荷兰 北荷兰省 阿姆斯特丹 cloudflare.com
7.08 ms         AS1299 [ARELION-NET] 荷兰 北荷兰省 阿姆斯特丹 arelion.com
7.28 ms         AS1299 [ARELION-NET] 荷兰 北荷兰省 阿姆斯特丹 arelion.com
13.53 ms        AS1299 [TELIANET] 英国 英格兰 伦敦 arelion.com
13.34 ms        AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
26.52 ms        AS1299 [ARELION-NET] 英国 英格兰 伦敦 arelion.com
223.81 ms       AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
207.63 ms       AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
218.98 ms       AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
265.23 ms       AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
221.80 ms       AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
220.28 ms       AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    903.90 Mbps     935.73 Mbps     4.04     0.0%
法兰克福         1014.45 Mbps    997.12 Mbps     10.55    0.0%
洛杉矶           598.67 Mbps     899.59 Mbps     146.28   1.2%
联通WuXi         724.55 Mbps     838.00 Mbps     314.42   0.0%
联通湖南5G       272.66 Mbps     9.70 Mbps       325.07   NULL
电信Suzhou5G     737.72 Mbps     847.73 Mbps     265.00   NULL
电信Nanjing5G    217.27 Mbps     796.27 Mbps     273.70   0.0%
移动Chengdu      0.21 Mbps       468.39 Mbps     288.18   8.0%
移动硬核通信     16.34 Mbps      44.38 Mbps      232.14   NULL
------------------------------------------------------------------------
```