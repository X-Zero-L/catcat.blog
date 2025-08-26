---
title: "Hetzner Helsinki 独立服务器 AMD 5950X 测评"
published: 2024-02-13
categories: 
  - "vps"
  - "eu-server"
---

## 机器配置

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/c73ce45c131fafff1cb473b41cbdab2e.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/c73ce45c131fafff1cb473b41cbdab2e.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/c73ce45c131fafff1cb473b41cbdab2e.jpg" alt="" loading="lazy">
</picture>

## 测评

### lscpu

```
root@Hetnzer-5950X ~ # lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  32
  On-line CPU(s) list:   0-31
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        Advanced Micro Devices, Inc.
  Model name:            AMD Ryzen 9 5950X 16-Core Processor
    BIOS Model name:     AMD Ryzen 9 5950X 16-Core Processor             Unknown CPU @ 3.4GHz
    BIOS CPU family:     107
    CPU family:          25
    Model:               33
    Thread(s) per core:  2
    Core(s) per socket:  16
    Socket(s):           1
    Stepping:            0
    Frequency boost:     enabled
    CPU(s) scaling MHz:  45%
    CPU max MHz:         5083.3979
    CPU min MHz:         2200.0000
    BogoMIPS:            6787.52
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse ss                         e2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl nonstop_tsc cpuid                          extd_apicid aperfmperf rapl pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe po                         pcnt aes xsave avx f16c rdrand lahf_lm cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 
                         3dnowprefetch osvw ibs skinit wdt tce topoext perfctr_core perfctr_nb bpext perfctr_llc mwaitx 
                         cpb cat_l3 cdp_l3 hw_pstate ssbd mba ibrs ibpb stibp vmmcall fsgsbase bmi1 avx2 smep bmi2 erms 
                         invpcid cqm rdt_a rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves cqm_llc                          cqm_occup_llc cqm_mbm_total cqm_mbm_local clzero irperf xsaveerptr rdpru wbnoinvd arat npt lbr                         v svm_lock nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold avi                         c v_vmsave_vmload vgif v_spec_ctrl umip pku ospke vaes vpclmulqdq rdpid overflow_recov succor s                         mca fsrm
Virtualization features: 
  Virtualization:        AMD-V
Caches (sum of all):     
  L1d:                   512 KiB (16 instances)
  L1i:                   512 KiB (16 instances)
  L2:                    8 MiB (16 instances)
  L3:                    64 MiB (2 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0-31
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
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP always-on, RSB filling, PBRSB-eIBRS No                         t affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```

Tue Feb 13 10:46:19 AM CET 2024

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 5 minutes
Processor  : AMD Ryzen 9 5950X 16-Core Processor
CPU cores  : 32 @ 3637.398 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 125.7 GiB
Swap       : 4.0 GiB
Disk       : 6.9 TiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-13-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Hetzner
ASN        : AS24940 Hetzner Online GmbH
Location   : Nuremberg, Bavaria (BY)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/md2):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 891.60 MB/s (222.9k) | 3.06 GB/s    (47.9k)
Write      | 893.96 MB/s (223.4k) | 3.08 GB/s    (48.1k)
Total      | 1.78 GB/s   (446.3k) | 6.15 GB/s    (96.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 3.84 GB/s     (7.5k) | 4.27 GB/s     (4.1k)
Write      | 4.05 GB/s     (7.9k) | 4.55 GB/s     (4.4k)
Total      | 7.89 GB/s    (15.4k) | 8.83 GB/s     (8.6k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2232                          
Multi Core      | 11963                         
Full Test       | https://browser.geekbench.com/v6/cpu/4892236

YABS completed in 5 min 1 sec
```

### 通电时长测试

```

  CPU 型号              AMD Ryzen 9 5950X 16-Core Processor
  CPU 核心              合计 16 核心，32 线程
  CPU 状态              当前主频 4043.007 MHz
  内存大小              128719 MB (3180 MB 已用)
  交换分区              4089 MB (0 MB 已用)

  第 1 块硬盘           通电 7831 小时，型号 SAMSUNG MZQL23T8HCLS-00A07
  第 2 块硬盘           通电 7831 小时，型号 SAMSUNG MZQL23T8HCLS-00A07

  硬盘大小              7169.0 GB

  服务器时间            2024-02-13 10:49:36
  运行时间              0 days 0 hour 9 min
  系统负载              2.59, 0.69, 0.24
  虚拟化技术            No Virtualization Detected

  IPv4 地址             65.108.xxx.xxx
  IPv6 地址             2a01:4f9:xxxx:xxxx
  运营商                AS24940 Hetzner Online GmbH
  地理位置              DE, Bavaria, Gunzenhausen

  操作系统              Debian 12.2 bookworm (x86_64)
  系统内核              6.1.0-13-amd64
  TCP 加速              cubic

  当前脚本版本          1.4.1.1

  顺序写入 (1st)        2000 MB/s
  顺序写入 (2nd)        1100 MB/s
  顺序写入 (3rd)        1100 MB/s
  顺序写入 (4th)        1800 MB/s
  顺序写入 (5th)        1900 MB/s
  顺序写入 (avg)        1600.0 MB/s
```

### GeekBench5

```

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-13-amd64 x86_64
  Model                         ASUS System Product Name
  Motherboard                   ASUSTeK COMPUTER INC. Pro WS 565-ACE
  BIOS                          American Megatrends Inc. 9901

处理器信息
  Name                          AMD Ryzen 9 5950X
  Topology                      1 Processor, 16 Cores, 32 Threads
  Identifier                    AuthenticAMD Family 25 Model 33 Stepping 0
  Base Frequency                5.08 GHz
  L1 Instruction Cache          32.0 KB x 16
  L1 Data Cache                 32.0 KB x 16
  L2 Cache                      512 KB x 16
  L3 Cache                      32.0 MB x 2

内存信息
  Size                          126 GB

单核测试分数：1756
多核测试分数：15269
详细结果链接：https://browser.geekbench.com/v5/cpu/22222256
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%205950X
```

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 5950X 16-Core Processor
 CPU 核心数        : 1 物理核心, 16 总核心, 32 总线程数
 CPU 频率          : 2200.000 MHz
 CPU 缓存          : L1: 512.00 KB / L2: 8.00 MB / L3: 64.00 MB
 硬盘空间          : 1.22 GiB / 1.93 TiB
 启动盘路径        : /dev/md2
 内存              : 409.67 MiB / 125.70 GiB
 Swap              : 0 KiB / 3.99 GiB
 系统在线时间      : 0 days, 0 hour 39 min
 负载              : 5.14, 4.62, 2.03
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-13-amd64
 TCP加速方式       : cubic
 虚拟化架构        : Dedicated
 NAT类型           : 开放型
 IPV4 ASN          : AS24940 Hetzner Online GmbH
 IPV4 位置         : Gunzenhausen / Bavaria / DE
 IPV6 ASN          : AS24940 Hetzner Online
 IPV6 位置         : Germany
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          5267 Scores
 32 线程测试(多核)得分:                 88915 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          63996.26 MB/s
 单线程写测试:          37495.39 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         265 MB/s (64.69 IOPS, 0.40s))           366 MB/s (89467 IOPS, 0.29s)
 1GB-1M Block           5.7 GB/s (5464 IOPS, 0.18s)             5.2 GB/s (4932 IOPS, 0.20s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 878.15 MB/s (219.5k) | 3.01 GB/s    (47.0k)
Write      | 880.46 MB/s (220.1k) | 3.02 GB/s    (47.3k)
Total      | 1.75 GB/s   (439.6k) | 6.04 GB/s    (94.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 3.84 GB/s     (7.5k) | 4.23 GB/s     (4.1k)
Write      | 4.05 GB/s     (7.9k) | 4.51 GB/s     (4.4k)
Total      | 7.89 GB/s    (15.4k) | 8.75 GB/s     (8.5k)
正在并发测试中，大概2~3分钟无输出，请耐心等待。。。
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: ARN(ARN11S13)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: ARN(ARN09S18)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：芬兰
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：德国
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：芬兰区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：德国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: FI)
 HotStar:                               No
 Disney+:                               No
 Netflix:                               No
 YouTube Premium:                       Yes (Region: FI)
 Amazon Prime Video:                    Yes (Region: FI)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   INTL
 Viu.com:                               No
 YouTube CDN:                           Stockholm 
 Netflix Preferred CDN:                 Stockholm  
 Spotify Registration:                  Yes (Region: FI)
 Steam Currency:                        EUR
 ChatGPT:                               Yes
 Bing Region:                           FI
 Instagram Licensed Audio:              Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               No
 Disney+:                               No
 Netflix:                               No
 YouTube Premium:                       Yes (Region: DE)
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           Stockholm 
 Netflix Preferred CDN:                 Stockholm  
 Spotify Registration:                  Yes (Region: DE)
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           FI
 Instagram Licensed Audio:              Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【FI】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 25②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ 
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
国家: DE 城市: Gunzenhausen 服务商: AS24940 Hetzner Online GmbH
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  测试超时
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
0.37 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
0.40 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
0.50 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
0.77 ms  AS3356  芬兰, 新地区, 赫尔辛基, level3.com
38.85 ms  AS3356  德国, 黑森州, 法兰克福, level3.com
275.44 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
298.73 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
281.35 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
278.91 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
2.59 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
4.01 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
6.64 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
0.86 ms  AS3356  芬兰, 新地区, 赫尔辛基, level3.com
171.14 ms  AS3356  美国, 加利福尼亚州, 洛杉矶, level3.com
261.67 ms  AS3356  美国, 加利福尼亚州, 洛杉矶, level3.com
260.01 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
277.21 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
267.88 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
272.95 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
276.69 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.60 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
0.59 ms  AS24940  芬兰, 新地区, 赫尔辛基, hetzner.com
20.24 ms  AS24940  德国, 黑森州, 法兰克福, hetzner.com
20.67 ms  AS24940  德国, 黑森州, 法兰克福, hetzner.com
27.94 ms  AS58453  德国, 黑森州, 法兰克福, chinamobile.com, 移动
224.03 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
225.38 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
225.86 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
228.63 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
230.05 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
230.30 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    936.08 Mbps     926.96 Mbps     23.26    0.0%
法兰克福         946.39 Mbps     844.15 Mbps     20.68    0.0%
洛杉矶           509.32 Mbps     682.90 Mbps     180.60   NULL
联通郑州5G       873.44 Mbps     1097.24 Mbps    183.54   NULL
联通海南         430.12 Mbps     564.56 Mbps     209.59   NULL
电信合肥5G       4.52 Mbps       525.45 Mbps     266.12   1.0%
电信浙江         1.52 Mbps       495.90 Mbps     263.57   NULL
移动福州         0.00 Mbps       0.00 Mbps       214.72       
------------------------------------------------------------------------
 总共花费      : 5 分 5 秒
 时间          : Tue Feb 13 11:25:05 CET 2024
------------------------------------------------------------------------
```

### byte-unixbench 性能测试

```

AMD Ryzen 9 5950X 16-Core Processor (x86_64)
16 cores @ 5083 MHz  |  125.7 GiB RAM
Number of Processes: 32  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          42835
  Integer Math                     179487 Million Operations/s
  Floating Point Math              99320 Million Operations/s
  Prime Numbers                    213 Million Primes/s
  Sorting                          53338 Thousand Strings/s
  Encryption                       43534 MB/s
  Compression                      593567 KB/s
  CPU Single Threaded              3402 Million Operations/s
  Physics                          1749 Frames/s
  Extended Instructions (SSE)      31280 Million Matrices/s

Memory Mark:                       3219
  Database Operations              10623 Thousand Operations/s
  Memory Read Cached               34726 MB/s
  Memory Read Uncached             26021 MB/s
  Memory Write                     16054 MB/s
  Available RAM                    127683 Megabytes
  Memory Latency                   54 Nanoseconds
  Memory Threaded                  43204 MB/s
--------------------------------------------------------------------------------
```

### network-speed.xyz

```
---------------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 5950X 16-Core Processor
 CPU Cores          : 32 @ 2200.000 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 6.9 TB (1.5 GB Used)
 Total RAM          : 125.7 GB (1.4 GB Used)
 Total Swap         : 4.0 GB (0 Used)
 System uptime      : 0 days, 0 hour 59 min
 Load average       : 2.81, 4.59, 2.75
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-13-amd64
 Virtualization     : NONE
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv6
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : Hetzner
 ASN                : AS24940 Hetzner Online GmbH
 Location           : Nuremberg, Bavaria-BY, Germany
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Hetzner Online 

 Nearest          23.44 ms    0.0%    928.15 Mbps    927.08 Mbps    Netcom Kassel Gesellschaft für Telekommunikation mbH - Kassel 

 Kochi, IN        191.71 ms   0.0%    547.91 Mbps    492.08 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    167.50 ms   0.0%    581.87 Mbps    513.53 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      188.11 ms   N/A     560.14 Mbps    477.01 Mbps    Jio - Chennai 
 Mumbai, IN       130.35 ms   0.0%    791.31 Mbps    416.78 Mbps    i3D.net - Mumbai 
 Delhi, IN        168.29 ms   0.0%    572.98 Mbps    483.09 Mbps    Tata Play Fiber - New Delhi 

 Seattle, US      153.60 ms   N/A     709.51 Mbps    585.27 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  156.45 ms   0.0%    852.10 Mbps    559.62 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       132.95 ms   0.0%    685.85 Mbps    650.69 Mbps    Hivelocity - Dallas, TX 
 Miami, US        131.76 ms   0.0%    630.24 Mbps    626.49 Mbps    AT&T - Miami, FL 
 New York, US     FAILED                                                        
 Toronto, CA      109.64 ms   0.0%    900.18 Mbps    787.93 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  191.85 ms   N/A     634.42 Mbps    488.06 Mbps    INFINITUM - Mexico City 

 London, UK       39.07 ms    0.0%    940.74 Mbps    928.05 Mbps    VeloxServ Communications - London 
 Amsterdam, NL    26.90 ms    0.0%    951.61 Mbps    937.57 Mbps    31173 Services AB - Amsterdam 
 Paris, FR        34.02 ms    N/A     953.21 Mbps    941.58 Mbps    Axione - Paris 
 Frankfurt, DE    20.32 ms    0.0%    929.39 Mbps    928.13 Mbps    Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       16.92 ms    0.0%    931.79 Mbps    928.40 Mbps    Play - Warszawa 
 Bucharest, RO    51.67 ms    0.0%    944.32 Mbps    939.42 Mbps    Vodafone Romania Fixed – Bucharest - Bucharest 
 Moscow, RU       17.09 ms    0.0%    927.72 Mbps    928.46 Mbps    MegaFon - Moscow 

 Jeddah, SA       81.97 ms    0.0%    976.71 Mbps    910.48 Mbps    Saudi Telecom Company 
 Dubai, AE        161.74 ms   0.0%    929.86 Mbps    540.82 Mbps    du - Dubai  
 Fujairah, AE     130.99 ms   0.0%    963.82 Mbps    578.16 Mbps    ETISALAT-UAE - Fujairah 
 Istanbul, TR     60.35 ms    0.0%    939.81 Mbps    934.68 Mbps    Turkcell - Istanbul 
 Tehran, IR       85.06 ms    0.0%    913.54 Mbps    879.19 Mbps    Asiatech - Tehran 

 Tokyo, JP        264.92 ms   N/A     666.22 Mbps    314.44 Mbps    fdcservers.net - Tokyo 
 Shanghai, CU-CN  209.91 ms   0.0%    571.81 Mbps    413.89 Mbps    China Unicom 5G - Shanghai 
 Nanjing, CT-CN   285.11 ms   19.1%   543.32 Mbps    15.21 Mbps     China Telecom JiangSu 5G - Nanjing 
 Hong Kong, CN    217.79 ms   N/A     552.31 Mbps    412.93 Mbps    STC - Hong Kong 
 Singapore, SG    181.76 ms   0.0%    777.60 Mbps    483.36 Mbps    i3D.net - Singapore 
 Jakarta, ID      204.12 ms   0.0%    535.10 Mbps    390.00 Mbps    PT. Telekomunikasi Indonesia - Jakarta 
---------------------------------------------------------------------------
 Avg DL Speed       : 778.11 Mbps
 Avg UL Speed       : 647.08 Mbps

 Total DL Data      : 33.67 GB
 Total UL Data      : 25.12 GB
 Total Data         : 58.79 GB
---------------------------------------------------------------------------
 Duration           : 14 min 44 sec
 System Time        : 13/02/2024 - 11:54:33 CET
 Total Script Runs  : 35775
---------------------------------------------------------------------------
```

### Bench

```
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 5950X 16-Core Processor
 CPU Cores          : 32 @ 2200.000 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 6.9 TB (1.5 GB Used)
 Total Mem          : 125.7 GB (1.4 GB Used)
 Total Swap         : 4.0 GB (0 Used)
 System uptime      : 0 days, 1 hour 21 min
 Load average       : 0.00, 0.06, 0.66
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-13-amd64
 TCP CC             : cubic
 Virtualization     : Dedicated
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS24940 Hetzner Online GmbH
 Location           : Gunzenhausen / DE
 Region             : Bavaria
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.8 GB/s
 I/O Speed(2nd run) : 1.8 GB/s
 I/O Speed(3rd run) : 1.8 GB/s
 I/O Speed(average) : 1843.2 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    928.09 Mbps       929.66 Mbps         23.42 ms    
 Los Angeles, US  537.41 Mbps       621.88 Mbps         163.04 ms   
 Dallas, US       650.21 Mbps       876.77 Mbps         135.22 ms   
 Montreal, CA     735.40 Mbps       938.16 Mbps         120.14 ms   
 Paris, FR        936.14 Mbps       955.12 Mbps         44.28 ms    
 Amsterdam, NL    941.40 Mbps       941.58 Mbps         28.09 ms    
 Shanghai, CN     411.28 Mbps       530.69 Mbps         209.58 ms   
 Chongqing, CN    0.16 Mbps         0.11 Mbps           453.43 ms   
 Hongkong, CN     307.17 Mbps       529.91 Mbps         264.62 ms   
 Mumbai, IN       595.48 Mbps       884.48 Mbps         142.62 ms   
 Singapore, SG    314.38 Mbps       827.92 Mbps         278.34 ms   
 Tokyo, JP        343.09 Mbps       487.86 Mbps         255.88 ms   
----------------------------------------------------------------------
 Finished in        : 6 min 13 sec
 Timestamp          : 2024-02-13 12:07:51 CET
----------------------------------------------------------------------
```
