---
title: "Avoro 德国 AMD EPYC 7513 测评"
published: 2024-02-27
categories: 
  - "vps"
  - "eu-server"
---

这家挺多人推荐的，和PHP-Friends 是同一家公司的。不过Avoro不需要合同，PHP-Friends是合同形式进行交付的。CPU是需要抽奖的，有AMD Epyc 7452, AMD Epyc 7513, AMD Epyc 7763这三款。据说是很快会推出四代Epyc。机器性价比还算可以，带一个备份。多核表现真的好，秒杀liteserver同等配置。网站首页价格默认含税，下订单可以免除税。

> ## 套餐
> 
> **_Provider : Avoro  
> Type/Plan : ROOTSERVER S  
> Processor : AMD EPYC 7513 32-Core  
> Num of Core : 4 Cores  
> Memory : 8 GB  
> Storage : 160 GB NVMe  
> Bandwidth : Unlimited @ 10 Gbps IN | 10 Gbps OUT  
> Location : DE  
> Price : € 7.5/ Month_**

## 测评

### lscpu

```
root@v1709013788:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  4
  On-line CPU(s) list:   0-3
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD EPYC 7513 32-Core Processor
    BIOS Model name:     pc-i440fx-7.2  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               1
    Thread(s) per core:  1
    Core(s) per socket:  4
    Socket(s):           1
    Stepping:            1
    BogoMIPS:            5190.24
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflus                         h mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good n                         opl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 
                         sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hyperv                         isor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osv                         w perfctr_core invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust                          bmi1 avx2 smep bmi2 invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt x                         savec xgetbv1 xsaves clzero xsaveerptr wbnoinvd arat npt nrip_save umip pku os                         pke vaes vpclmulqdq rdpid arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   256 KiB (4 instances)
  L1i:                   256 KiB (4 instances)
  L2:                    2 MiB (4 instances)
  L3:                    64 MiB (4 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0-3
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
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling                         , PBRSB-eIBRS Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 1 minutes
Processor  : AMD EPYC 7513 32-Core Processor
CPU cores  : 4 @ 2595.124 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 7.8 GiB
Swap       : 1024.0 MiB
Disk       : 157.4 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-17-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : dataforest GmbH
ASN        : AS58212 dataforest GmbH
Host       : dataforest GmbH
Location   : Offenbach Am Main, Hesse (HE)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 273.56 MB/s  (68.3k) | 3.21 GB/s    (50.2k)
Write      | 274.28 MB/s  (68.5k) | 3.23 GB/s    (50.5k)
Total      | 547.84 MB/s (136.9k) | 6.45 GB/s   (100.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 8.13 GB/s    (15.8k) | 15.98 GB/s   (15.6k)
Write      | 8.57 GB/s    (16.7k) | 17.04 GB/s   (16.6k)
Total      | 16.71 GB/s   (32.6k) | 33.02 GB/s   (32.2k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 8.56 Gbits/sec  | 3.49 Gbits/sec  | 13.7 ms        
Scaleway        | Paris, FR (10G)           | 4.53 Gbits/sec  | busy            | 12.8 ms        
NovoServe       | North Holland, NL (40G)   | 9.73 Gbits/sec  | 8.83 Gbits/sec  | 7.52 ms        
Uztelecom       | Tashkent, UZ (10G)        | 1.52 Gbits/sec  | 942 Mbits/sec   | 100 ms         
Clouvider       | NYC, NY, US (10G)         | 1.02 Gbits/sec  | 1.19 Gbits/sec  | 85.6 ms        
Clouvider       | Dallas, TX, US (10G)      | 252 Mbits/sec   | 258 Mbits/sec   | 115 ms         
Clouvider       | Los Angeles, CA, US (10G) | 739 Mbits/sec   | 441 Mbits/sec   | 144 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1447                          
Multi Core      | 4557                          
Full Test       | https://browser.geekbench.com/v6/cpu/5086273

YABS completed in 10 min 44 sec
```

### Bench

```
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 7513 32-Core Processor
 CPU Cores          : 4 @ 2595.124 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 158.4 GB (3.3 GB Used)
 Total Mem          : 7.8 GB (370.2 MB Used)
 Total Swap         : 1024.0 MB (0 Used)
 System uptime      : 0 days, 0 hour 19 min
 Load average       : 0.00, 0.18, 0.26
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-17-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS58212 dataforest GmbH
 Location           : Frankfurt am Main / DE
 Region             : Hesse
----------------------------------------------------------------------
 I/O Speed(1st run) : 818 MB/s
 I/O Speed(2nd run) : 1.5 GB/s
 I/O Speed(3rd run) : 855 MB/s
 I/O Speed(average) : 1069.7 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    8262.49 Mbps      8460.64 Mbps        0.15 ms     
 Los Angeles, US  590.59 Mbps       1151.14 Mbps        144.22 ms   
 Dallas, US       731.06 Mbps       1464.18 Mbps        116.27 ms   
 Montreal, CA     141.90 Mbps       808.16 Mbps         89.02 ms    
 Paris, FR        6700.23 Mbps      7198.29 Mbps        10.60 ms    
 Amsterdam, NL    6000.83 Mbps      4633.27 Mbps        7.39 ms     
 Shanghai, CN     534.78 Mbps       1970.35 Mbps        159.27 ms   
 Hongkong, CN     411.90 Mbps       2005.53 Mbps        206.81 ms   
 Mumbai, IN       556.95 Mbps       1920.73 Mbps        124.02 ms   
 Singapore, SG    318.55 Mbps       2461.71 Mbps        327.24 ms   
 Tokyo, JP        329.51 Mbps       1923.61 Mbps        240.08 ms   
----------------------------------------------------------------------
 Finished in        : 5 min 2 sec
 Timestamp          : 2024-02-27 07:36:41 CET
----------------------------------------------------------------------
```

### GeekBench5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-17-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS rel-1.16.1-0-g3208b098f51a-prebuilt.qemu.org

处理器信息
  Name                          AMD EPYC 7513 32-Core Processor                
  Topology                      1 Processor, 4 Cores
  Identifier                    AuthenticAMD Family 25 Model 1 Stepping 1
  Base Frequency                2.60 GHz
  L1 Instruction Cache          64.0 KB x 4
  L1 Data Cache                 64.0 KB x 4
  L2 Cache                      512 KB x 4
  L3 Cache                      16.0 MB

内存信息
  Size                          7.75 GB

单核测试分数：1109
多核测试分数：3874
详细结果链接：https://browser.geekbench.com/v5/cpu/22263251
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%207513
```

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7513 32-Core Processor
 CPU 核心数        : 4
 CPU 频率          : 2595.124 MHz
 CPU 缓存          : L1: 256.00 KB / L2: 2.00 MB / L3: 64.00 MB
 硬盘空间          : 3.54 GiB / 157.37 GiB
 启动盘路径        : /dev/sda1
 内存              : 216.93 MiB / 7.75 GiB
 Swap              : 0 KiB / 1024.00 MiB
 系统在线时间      : 0 days, 0 hour 30 min
 负载              : 0.19, 0.35, 0.32
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-17-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS58212 dataforest GmbH
 IPV4 位置         : Frankfurt am Main / Hesse / DE
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          3758 Scores
 4 线程测试(多核)得分:          14261 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          42418.44 MB/s
 单线程写测试:          24482.76 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         8.4 MB/s (2050 IOPS, 12.49s)            90.6 MB/s (22120 IOPS, 1.16s)
 1GB-1M Block           1.2 GB/s (1101 IOPS, 0.91s)             1.1 GB/s (1053 IOPS, 0.95s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 271.25 MB/s  (67.8k) | 3.16 GB/s    (49.5k)
Write      | 271.97 MB/s  (67.9k) | 3.18 GB/s    (49.7k)
Total      | 543.23 MB/s (135.8k) | 6.35 GB/s    (99.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 9.63 GB/s    (18.8k) | 11.27 GB/s   (11.0k)
Write      | 10.14 GB/s   (19.8k) | 12.02 GB/s   (11.7k)
Total      | 19.78 GB/s   (38.6k) | 23.30 GB/s   (22.7k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA15S37)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：德国
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：德国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: DE)
 HotStar:                               No
 Disney+:                               Yes (Region: US)
 Netflix:                               Yes (Region: DE)
 YouTube Premium:                       Yes (Region: DE)
 Amazon Prime Video:                    Yes (Region: DE)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   DE
 Viu.com:                               No
 YouTube CDN:                           Frankfurt 
 Netflix Preferred CDN:                 Frankfurt  
 Spotify Registration:                  No
 Steam Currency:                        EUR
 ChatGPT:                               Yes
 Bing Region:                           DE
 Instagram Licensed Audio:              Yes
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
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测0 ③
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  yandex邮箱: Yes
  qq邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: DE 城市: Frankfurt am Main 服务商: AS58212 dataforest GmbH
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 测试超时
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
6.24 ms  AS58212  德国, 黑森州, 法兰克福, dataforest.net
53.84 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
283.29 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
251.35 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
268.40 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
280.40 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.70 ms  AS58212  德国, 黑森州, 法兰克福, dataforest.net
1.10 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
1.30 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
1.49 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
1.07 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
166.22 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
196.07 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
199.04 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
348.79 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
171.25 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
5.54 ms  AS58212  德国, 黑森州, 法兰克福, dataforest.net
1.72 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
1.41 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
32.63 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
14.96 ms  AS58453  德国, 黑森州, 法兰克福, chinamobile.com, 移动
258.82 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
284.12 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
287.87 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
285.74 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
291.68 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
286.39 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    7846.93 Mbps    7244.41 Mbps    0.16     0.0%
法兰克福         6285.25 Mbps    6774.78 Mbps    1.22     0.0%
新加坡           155.41 Mbps     751.25 Mbps     154.37   0.7%
联通海南         381.04 Mbps     1129.76 Mbps    164.60   NULL
电信西宁         0.65 Mbps       1717.01 Mbps    242.45   18.0%
电信Zhenjiang5G  0.59 Mbps       214.13 Mbps     471.74   NULL
------------------------------------------------------------------------
 总共花费      : 5 分 19 秒
 时间          : Tue Feb 27 07:47:09 CET 2024
------------------------------------------------------------------------
```

### PassMark PerformanceTest Linux 测试

```
AMD EPYC 7513 32-Core Processor (x86_64)
4 cores @ 0 MHz  |  7.8 GiB RAM
Number of Processes: 4  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          8657
  Integer Math                     21817 Million Operations/s
  Floating Point Math              17593 Million Operations/s
  Prime Numbers                    68.2 Million Primes/s
  Sorting                          11102 Thousand Strings/s
  Encryption                       4770 MB/s
  Compression                      82857 KB/s
  CPU Single Threaded              2367 Million Operations/s
  Physics                          1093 Frames/s
  Extended Instructions (SSE)      6675 Million Matrices/s

Memory Mark:                       2152
  Database Operations              3243 Thousand Operations/s
  Memory Read Cached               23733 MB/s
  Memory Read Uncached             15577 MB/s
  Memory Write                     11035 MB/s
  Available RAM                    7534 Megabytes
  Memory Latency                   70 Nanoseconds
  Memory Threaded                  52893 MB/s
--------------------------------------------------------------------------
```

### Speedtest

```
root@v1709013788:~# speedtest

   Speedtest by Ookla

      Server: Server-Bench - Frankfurt am Main (id: 52344)
         ISP: dataforest
Idle Latency:     0.20 ms   (jitter: 0.03ms, low: 0.18ms, high: 0.24ms)
    Download:  9285.73 Mbps (data used: 7.5 GB)                                                   
                  2.05 ms   (jitter: 0.50ms, low: 0.29ms, high: 4.12ms)
      Upload:  7961.51 Mbps (data used: 4.6 GB)                                                   
                  1.60 ms   (jitter: 0.29ms, low: 0.32ms, high: 2.48ms)
 Packet Loss:     0.0%
  Result URL: https://www.speedtest.net/result/c/cfe95c6f-f6d3-416e-8b0e-482455b67611
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-21.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-21.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-21.jpg" alt="" loading="lazy">
</picture>
