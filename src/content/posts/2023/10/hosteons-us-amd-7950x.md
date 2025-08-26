---
title: "HostEONS  美国 AMD 7950X  VDS 测评"
published: 2023-10-21
categories: 
  - "vps"
  - "us-server"
---

这家争议挺大的，老板似乎很会营销，在上次促销中就把3950 和5950x混着一起卖，最后说 他只销售锐龙，而且在mjj入场之后，老板还专门为mjj推出半杯套餐，美其名曰VDS。实际上你需要购买两核才能独享一个真正的单核（独享存疑）。现在推出的7950X vds应该是同一个套路，至于性能，中规中矩的水平，在这个价格算不上什么优势，实际上用了一段实际之后，性能还是下降了（CPU ,IO,网络均出现下滑）。介于老板的做事形式和MJJ的无脑，不是很推荐上车。（请注意，这家**无退款**。）

> ## 套餐
> 
> **_Provider : HostEONS  
> Type/Plan : Ryzen 7950X Hybrid Server 2  
> Processor : AMD Ryzen 9 7950X (4.5 GHz++)  
> Num of Core : 2 Cores  
> Memory : 8 GB DDR5 RAM  
> Storage : 50 GB NVMe(PCIe 4.0)  
> Bandwidth : 30TB @ 10 Gbps IN | 10 Gbps OUT  
> Location : USA (Salt Lake City, UT)  
> Price : \$14 /month_**

Looking Glass: [https://lg.slc2.hosteons.com](https://lg.slc2.hosteons.com/)

### 测评

### lscpu

```
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  2
  On-line CPU(s) list:   0,1
Vendor ID:               AuthenticAMD
  Model name:            AMD Ryzen 9 7950X 16-Core Processor
    CPU family:          25
    Model:               97
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           2
    Stepping:            2
    BogoMIPS:            8999.90
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx mmxext
                          fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 sse4_1 sse4
                         _2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy ab
                         m sse4a misalignsse 3dnowprefetch osvw perfctr_core ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep
                          bmi2 erms invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xs
                         aveopt xsavec xgetbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean v_
                         vmsave_vmload avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntd
                         q rdpid fsrm arch_capabilities
Virtualization features:
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):
  L1d:                   64 KiB (2 instances)
  L1i:                   64 KiB (2 instances)
  L2:                    2 MiB (2 instances)
  L3:                    128 MiB (2 instances)
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 10 minutes
Processor  : AMD Ryzen 9 7950X 16-Core Processor
CPU cores  : 2 @ 4499.952 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 7.8 GiB
Swap       : 1024.0 MiB
Disk       : 48.1 GiB
Distro     : Ubuntu 22.04.3 LTS
Kernel     : 5.15.0-86-generic
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Ipxo LLC
ASN        : AS60721 Bursabil Teknoloji A.S.
Host       : Hosteons Pte. Ltd
Location   : Los Angeles, California (CA)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ----
Read       | 713.10 MB/s (178.2k) | 1.80 GB/s    (28.1k)
Write      | 714.98 MB/s (178.7k) | 1.81 GB/s    (28.3k)
Total      | 1.42 GB/s   (357.0k) | 3.61 GB/s    (56.5k)
           |                      |
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ----
Read       | 1.84 GB/s     (3.6k) | 1.49 GB/s     (1.4k)
Write      | 1.94 GB/s     (3.7k) | 1.59 GB/s     (1.5k)
Total      | 3.79 GB/s     (7.4k) | 3.09 GB/s     (3.0k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping
----- | ----- | ---- | ---- | ----
Clouvider       | London, UK (10G)          | 1.53 Gbits/sec  | 1.57 Gbits/sec  | 115 ms
Scaleway        | Paris, FR (10G)           | 1.53 Gbits/sec  | 1.41 Gbits/sec  | 130 ms
NovoServe       | North Holland, NL (40G)   | 1.23 Gbits/sec  | 1.21 Gbits/sec  | 123 ms
Uztelecom       | Tashkent, UZ (10G)        | 830 Mbits/sec   | 855 Mbits/sec   | 219 ms
Clouvider       | NYC, NY, US (10G)         | 3.35 Gbits/sec  | 3.45 Gbits/sec  | 53.6 ms
Clouvider       | Dallas, TX, US (10G)      | 2.52 Gbits/sec  | 2.47 Gbits/sec  | 140 ms
Clouvider       | Los Angeles, CA, US (10G) | 5.65 Gbits/sec  | 5.98 Gbits/sec  | 20.1 ms

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2901                         
Multi Core      | 5222                          
```

### Bench

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 7950X 16-Core Processor
 CPU Cores          : 2 @ 4499.952 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 48.1 GB (4.3 GB Used)
 Total Mem          : 7.8 GB (185.3 MB Used)
 Total Swap         : 1024.0 MB (0 Used)
 System uptime      : 0 days, 0 hour 4 min
 Load average       : 0.43, 0.14, 0.05
 OS                 : Ubuntu 22.04.3 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.15.0-86-generic
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS142036 Hosteons Pte. Ltd.
 Location           : Salt Lake City / US
 Region             : Utah
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.5 GB/s
 I/O Speed(2nd run) : 1.5 GB/s
 I/O Speed(3rd run) : 1.5 GB/s
 I/O Speed(average) : 1536.0 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency
 Speedtest.net    7265.33 Mbps      5913.65 Mbps        0.98 ms
 Los Angeles, US  5106.03 Mbps      6542.13 Mbps        15.47 ms
 Dallas, US       2287.21 Mbps      6438.38 Mbps        36.09 ms
 Montreal, CA     662.56 Mbps       902.45 Mbps         65.42 ms
 Paris, FR        526.75 Mbps       3942.75 Mbps        149.22 ms
 Amsterdam, NL    616.64 Mbps       5650.93 Mbps        130.07 ms
 Shanghai, CN     374.91 Mbps       2960.21 Mbps        197.60 ms
 Chongqing, CN    7.21 Mbps         0.66 Mbps           205.26 ms
 Guangzhou, CN    437.55 Mbps       23.04 Mbps          184.94 ms
 Mumbai, IN       291.41 Mbps       2917.16 Mbps        280.57 ms
 Singapore, SG    400.02 Mbps       4068.97 Mbps        191.79 ms
 Tokyo, JP        139.43 Mbps       5930.03 Mbps        124.19 ms
----------------------------------------------------------------------
 Finished in        : 5 min 46 sec
 Timestamp          : 2023-10-18 20:04:08 WIB
----------------------------------------------------------------------
```

### byte-unixbench 性能测试

```
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       79195958.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    13279.0 MWIPS (10.0 s, 7 samples)
Execl Throughput                               7957.9 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2405750.3 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          641880.1 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       7259972.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3238909.4 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 102611.8 lps   (10.0 s, 7 samples)
Process Creation                              13374.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  25870.5 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5527.0 lpm   (60.0 s, 2 samples)
System Call Overhead                        2868479.3 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   79195958.5   6786.3
Double-Precision Whetstone                       55.0      13279.0   2414.4
Execl Throughput                                 43.0       7957.9   1850.7
File Copy 1024 bufsize 2000 maxblocks          3960.0    2405750.3   6075.1
File Copy 256 bufsize 500 maxblocks            1655.0     641880.1   3878.4
File Copy 4096 bufsize 8000 maxblocks          5800.0    7259972.4  12517.2
Pipe Throughput                               12440.0    3238909.4   2603.6
Pipe-based Context Switching                   4000.0     102611.8    256.5
Process Creation                                126.0      13374.5   1061.5
Shell Scripts (1 concurrent)                     42.4      25870.5   6101.5
Shell Scripts (8 concurrent)                      6.0       5527.0   9211.7
System Call Overhead                          15000.0    2868479.3   1912.3
                                                                   ========
System Benchmarks Index Score                                        3062.8

------------------------------------------------------------------------

2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      156881381.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    26529.9 MWIPS (10.0 s, 7 samples)
Execl Throughput                              15078.4 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       4723529.4 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         1265264.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      14208225.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                             6429434.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 863898.8 lps   (10.0 s, 7 samples)
Process Creation                              37017.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  39834.5 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5663.3 lpm   (60.0 s, 2 samples)
System Call Overhead                        5679527.4 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  156881381.5  13443.1
Double-Precision Whetstone                       55.0      26529.9   4823.6
Execl Throughput                                 43.0      15078.4   3506.6
File Copy 1024 bufsize 2000 maxblocks          3960.0    4723529.4  11928.1
File Copy 256 bufsize 500 maxblocks            1655.0    1265264.8   7645.1
File Copy 4096 bufsize 8000 maxblocks          5800.0   14208225.4  24496.9
Pipe Throughput                               12440.0    6429434.7   5168.4
Pipe-based Context Switching                   4000.0     863898.8   2159.7
Process Creation                                126.0      37017.5   2937.9
Shell Scripts (1 concurrent)                     42.4      39834.5   9394.9
Shell Scripts (8 concurrent)                      6.0       5663.3   9438.8
System Call Overhead                          15000.0    5679527.4   3786.4
                                                                   ========
System Benchmarks Index Score                                        6490.9
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```
AMD Ryzen 9 7950X 16-Core Processor (x86_64)
2 cores @ 0 MHz  |  7.8 GiB RAM
Number of Processes: 2  |  Test Iterations: 2  |  Test Duration: Very Long
-
CPU Mark:                          7941
  Integer Math                     17405 Million Operations/s
  Floating Point Math              15691 Million Operations/s
  Prime Numbers                    64.3 Million Primes/s
  Sorting                          10950 Thousand Strings/s
  Encryption                       3848 MB/s
  Compression                      75486 KB/s
  CPU Single Threaded              4227 Million Operations/s
  Physics                          1029 Frames/s
  Extended Instructions (SSE)      7079 Million Matrices/s

Memory Mark:                       2778
  Database Operations              2935 Thousand Operations/s
  Memory Read Cached               40083 MB/s
  Memory Read Uncached             37415 MB/s
  Memory Write                     21703 MB/s
  Available RAM                    6563 Megabytes
  Memory Latency                   60 Nanoseconds
  Memory Threaded                  49708 MB/s
```

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 7950X 16-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 4499.952 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 64.00 MB
 硬盘空间          : 8.62 GiB / 50 GiB
 启动盘路径        : /dev/vda1
 内存              : 263.73 MiB / 7.88 GiB
 Swap              : 0 KiB / 511.98 MiB
 系统在线时间      : 7 days, 2 hour 3 min
 负载              : 0.22, 0.09, 0.09
 系统              : Ubuntu 22.04.1 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.0-46-generic
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS142036 Hosteons Pte. Ltd.
 IPV4 位置         : Singapore / Singapore / SG
 IPV6 ASN          : AS142036 Hosteons
 IPV6 位置         : Salt Lake City / Utah
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		6139 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		76009.03 MB/s
 单线程写测试:		42505.81 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		95.8 MB/s (23.40 IOPS, 1.09s)		113 MB/s (27542 IOPS, 0.93s)
 1GB-1M Block		2.1 GB/s (2043 IOPS, 0.49s)		3.3 GB/s (3144 IOPS, 0.32s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 493.26 MB/s (123.3k) | 1.82 GB/s    (28.4k)
Write      | 494.56 MB/s (123.6k) | 1.83 GB/s    (28.6k)
Total      | 987.82 MB/s (246.9k) | 3.65 GB/s    (57.0k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.74 GB/s     (3.4k) | 2.17 GB/s     (2.1k)
Write      | 1.84 GB/s     (3.5k) | 2.32 GB/s     (2.2k)
Total      | 3.58 GB/s     (7.0k) | 4.49 GB/s     (4.3k)
正在并发测试中，大概2~3分钟无输出，请耐心等待。。。
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: VODAFONET
视频缓存节点地域: ADB(ADB1)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  洛杉机(LAX17S56)
Youtube识别地域: 新加坡(SG)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：美国
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：美国
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：美国区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：美国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: US)
 HotStar:				No
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				VODAFONET in Izmir 
 Netflix Preferred CDN:			Los Angeles, CA  
 Spotify Registration:			Yes (Region: US)
 Steam Currency:			USD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				Yes (Region: US)
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: SG)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Los Angeles, CA 
 Netflix Preferred CDN:			Los Angeles, CA  
 Spotify Registration:			Yes (Region: US)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【US】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  hosting⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ 
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
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  yandex邮箱: Yes
  qq邮箱：No
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: SG 城市: Singapore 服务商: AS142036 Hosteons Pte. Ltd.
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
19.17 ms 	AS142036 美国 内华达州 拉斯维加斯 IDC
1.40 ms 	AS174 [COGENT-BONE] 美国 犹他州 盐湖城 cogentco.com
1.82 ms 	AS174 [COGENT-BONE] 美国 犹他州 盐湖城 cogentco.com
16.13 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 旧金山 cogentco.com
17.19 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 圣何塞 cogentco.com
18.65 ms 	AS174 美国 加利福尼亚州 圣克拉拉 cogentco.com
183.46 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
176.23 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
181.69 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
178.60 ms 	AS134774 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.cn 电信
288.14 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
15.24 ms 	AS142036 美国 内华达州 拉斯维加斯 IDC
0.25 ms 	AS26042 美国 犹他州 盐湖城 FiberState, LLC
115.32 ms 	AS3356 美国 犹他州 盐湖城 level3.com
24.29 ms 	AS3356 美国 加利福尼亚州 洛杉矶 level3.com
339.59 ms 	AS3356 美国 加利福尼亚州 洛杉矶 Level3-CU-Peer level3.com
242.37 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
224.89 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
241.79 ms 	AS17816 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
230.10 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
349.16 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
12.51 ms 	AS142036 美国 内华达州 拉斯维加斯 IDC
0.26 ms 	AS26042 美国 犹他州 盐湖城 FiberState, LLC
2.20 ms 	AS3356 美国 犹他州 盐湖城 level3.com
21.58 ms 	AS3356 美国 加利福尼亚州 洛杉矶 level3.com
21.78 ms 	AS3356 美国 加利福尼亚州 洛杉矶 level3.com
21.55 ms 	AS58453 [CMI-INT] 美国 加利福尼亚州 洛杉矶 cmi.chinamobile.com 移动
185.29 ms 	AS58453 [CMI-INT] 中国 广东省 广州市 cmi.chinamobile.com 移动
175.25 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
185.13 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
187.80 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
189.23 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
181.80 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 1857.20 Mbps	 7007.73 Mbps	 15.13	  0.0%
洛杉矶		 2993.53 Mbps	 6991.86 Mbps	 15.23	  0.0%
日本东京	 2803.36 Mbps	 1184.84 Mbps	 122.19	  NULL
联通郑州5G	 261.28 Mbps	 532.56 Mbps	 176.54	  NULL
联通WuXi	 2.19 Mbps	 3826.38 Mbps	 387.07	  14.3%
电信Nanjing5G	 28.92 Mbps	 1984.24 Mbps	 158.41	  0.3%
电信Zhenjiang5G	 7.91 Mbps	 2015.94 Mbps	 154.43	  NULL
移动Chengdu	 2.65 Mbps	 6926.26 Mbps	 235.01	  1.7%
----------------------------------------------------------------
```

### SpeedTest

```
   Speedtest by Ookla

      Server: Sumo Fiber - Salt Lake City, UT (id: 2185)
         ISP: Deft Hosting
Idle Latency:     0.99 ms   (jitter: 0.11ms, low: 0.90ms, high: 1.17ms)
    Download:  6280.18 Mbps (data used: 2.9 GB)
                 24.28 ms   (jitter: 1.83ms, low: 1.01ms, high: 28.35ms)
      Upload:  7487.52 Mbps (data used: 7.1 GB)
                 47.07 ms   (jitter: 44.23ms, low: 0.96ms, high: 829.63ms)
 Packet Loss:     0.0%
  Result URL: https://www.speedtest.net/result/c/68c9b05c-5f4e-4ddd-8914-40e8773ca1a3
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/10/image-184.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/10/image-184.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/10/image-184.jpg" alt="" loading="lazy">
</picture>

### 国内延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/10/image-185.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/10/image-185.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/10/image-185.jpg" alt="" loading="lazy">
</picture>

### 全球延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/10/image-186.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/10/image-186.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/10/image-186.jpg" alt="" loading="lazy">
</picture>
