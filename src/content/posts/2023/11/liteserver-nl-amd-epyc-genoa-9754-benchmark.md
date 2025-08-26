---
title: "LiteServer 荷兰  AMD EPYC™ Genoa 9754 测评"
published: 2023-11-24
categories: 
  - "vps"
  - "eu-server"
---

题外话：最近忙着公司事情，很久没测了，买了很多都在吃灰，闲下来慢慢补上吧

LiteServer 其实不用过多介绍了，去年他们家2.4欧的512G的HDD一度让MJJ们趋之若鹜，很可惜，他们家今年取消了存储的活动。这次是将nvme款的性能做了全面的升级，如果需要老商家且性能足够的话，他们家挺值得上车的。性能的话估计是因为黑五，目前看下来和老板之前的对比掉了很多，我会之后隔段时间追测看看。

优惠码：**BF2023**

**AFF-Link : [https://clients.liteserver.nl/aff.php?aff=621](https://clients.liteserver.nl/aff.php?aff=621)**

**NVME-2G**  
2 CPU Cores  
2 GB RAM  
40 GB NVMe RAID-10 Storage  
15 TB Transfer Data  
1Gbps Port Speed  
€2.40 /month（需使用优惠码：**BF2023** ）  
[**点击购买（不含AFF）**](https://clients.liteserver.nl/index.php?rp=/store/nvme-ssd-vps/nvme-2g-2)

  
**NVME-4G**  
4 CPU Cores  
4 GB RAM  
80 GB NVMe RAID-10 SSD Storage  
20 TB Transfer Data  
1Gbps Port Speed  
€7.50 /month（需使用优惠码：**BF2023** ）  
[**点击购买（不含AFF）**](https://clients.liteserver.nl/index.php?rp=/store/nvme-ssd-vps/nvme-4g-2)

> ## 套餐
> 
> **_Provider : LiteServer  
> Type/Plan : NVMe SSD VPS - NVME-8G  
> Processor : AMD EPYC 9754 128-Core Processor  
> Num of Core : 4 个 vCore  @ 3.3+ GHz  
> Memory : 8 GB DDR5 RAM  
> Storage : 160 GB NVMe RAID-10 SSD Storage  
> Bandwidth : 25TB @ 3 Gbps IN | 3 Gbps OUT  
> Location : NL  
> Price : € 9,60 / month_**

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/11/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/11/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/11/image.jpg" alt="" loading="lazy">
</picture>

## 测评

### lscpu

```
root@liteserver:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 57 bits virtual
  Byte Order:            Little Endian
CPU(s):                  4
  On-line CPU(s) list:   0-3
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        Red Hat
  Model name:            AMD EPYC 9754 128-Core Processor
    BIOS Model name:     RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               160
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           4
    Stepping:            2
    BogoMIPS:            4499.99
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 s
                         yscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclm
                         ulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c r
                         drand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr
                         _core invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invp
                         cid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl x
                         saveopt xsavec xgetbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_sc
                         ale vmcb_clean pausefilter pfthreshold v_vmsave_vmload vgif avx512vbmi umip pku ospke avx512_vbmi2 
                         gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq la57 rdpid fsrm flush_l1d arch_capa
                         bilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   128 KiB (4 instances)
  L1i:                   128 KiB (4 instances)
  L2:                    4 MiB (4 instances)
  L3:                    1 GiB (4 instances)
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
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not aff
                         ected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 5 minutes
Processor  : AMD EPYC 9754 128-Core Processor
CPU cores  : 4 @ 2249.998 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 7.8 GiB
Swap       : 255.0 MiB
Disk       : 157.1 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : The Infrastructure Group B.V.
ASN        : AS60404 Liteserver
Host       : TIG
Location   : Amsterdam, North Holland (NH)
Country    : Netherlands

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 284.60 MB/s  (71.1k) | 2.97 GB/s    (46.4k)
Write      | 285.35 MB/s  (71.3k) | 2.98 GB/s    (46.6k)
Total      | 569.95 MB/s (142.4k) | 5.95 GB/s    (93.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.74 GB/s     (5.3k) | 3.66 GB/s     (3.5k)
Write      | 2.88 GB/s     (5.6k) | 3.90 GB/s     (3.8k)
Total      | 5.62 GB/s    (10.9k) | 7.57 GB/s     (7.3k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 993 Mbits/sec   | 950 Mbits/sec   | 6.91 ms        
Scaleway        | Paris, FR (10G)           | 990 Mbits/sec   | busy            | 13.9 ms        
NovoServe       | North Holland, NL (40G)   | busy            | 952 Mbits/sec   | 1.83 ms        
Uztelecom       | Tashkent, UZ (10G)        | busy            | busy            | 96.6 ms        
Clouvider       | NYC, NY, US (10G)         | busy            | busy            | 76.3 ms        
Clouvider       | Dallas, TX, US (10G)      | busy            | busy            | 235 ms         
Clouvider       | Los Angeles, CA, US (10G) | busy            | 263 Mbits/sec   | 149 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1765                          
Multi Core      | 5824                          
Full Test       | https://browser.geekbench.com/v6/cpu/3686462
```

### Bench

```
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 9754 128-Core Processor
 CPU Cores          : 4 @ 2249.998 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 157.4 GB (1.2 GB Used)
 Total Mem          : 7.8 GB (340.6 MB Used)
 Total Swap         : 255.0 MB (0 Used)
 System uptime      : 0 days, 7 hour 13 min
 Load average       : 0.00, 0.00, 0.00
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS60404 Liteserver
 Location           : Alkmaar / NL
 Region             : North Holland
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.6 GB/s
 I/O Speed(2nd run) : 1.7 GB/s
 I/O Speed(3rd run) : 1.7 GB/s
 I/O Speed(average) : 1706.7 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    988.48 Mbps       954.50 Mbps         1.57 ms     
 Los Angeles, US  594.56 Mbps       943.41 Mbps         137.97 ms   
 Dallas, US       744.18 Mbps       930.70 Mbps         110.20 ms   
 Montreal, CA     575.12 Mbps       925.85 Mbps         82.08 ms    
 Paris, FR        998.11 Mbps       961.62 Mbps         15.15 ms    
 Amsterdam, NL    997.88 Mbps       952.63 Mbps         2.67 ms     
 Shanghai, CN     421.94 Mbps       689.80 Mbps         204.39 ms   
 Mumbai, IN       633.41 Mbps       962.55 Mbps         125.14 ms   
 Singapore, SG    64.04 Mbps        914.13 Mbps         322.95 ms   
 Tokyo, JP        242.02 Mbps       949.18 Mbps         222.85 ms   
----------------------------------------------------------------------
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```
AMD EPYC 9754 128-Core Processor (x86_64)
4 cores @ 0 MHz  |  7.8 GiB RAM
Number of Processes: 4  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          8877
  Integer Math                     20311 Million Operations/s
  Floating Point Math              17879 Million Operations/s
  Prime Numbers                    66.7 Million Primes/s
  Sorting                          12428 Thousand Strings/s
  Encryption                       4403 MB/s
  Compression                      87650 KB/s
  CPU Single Threaded              2426 Million Operations/s
  Physics                          1175 Frames/s
  Extended Instructions (SSE)      8066 Million Matrices/s

Memory Mark:                       2335
  Database Operations              3522 Thousand Operations/s
  Memory Read Cached               23197 MB/s
  Memory Read Uncached             22585 MB/s
  Memory Write                     22159 MB/s
  Available RAM                    7417 Megabytes
  Memory Latency                   74 Nanoseconds
  Memory Threaded                  92148 MB/s
--------------------------------------------------------------------------------
```

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 9754 128-Core Processor
 CPU 核心数        : 4
 CPU 频率          : 2249.998 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 4.00 MB / L3: 1024.00 MB
 硬盘空间          : 1.24 GiB / 157.14 GiB
 启动盘路径        : /dev/vda1
 内存              : 174.30 MiB / 7.75 GiB
 Swap              : 0 KiB / 254.98 MiB
 系统在线时间      : 0 days, 11 hour 54 min
 负载              : 0.77, 1.03, 0.54
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS60404 Liteserver
 IPV4 位置         : Alkmaar / North Holland / NL
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分:           3631 Scores
 4 线程测试(多核)得分:          14875 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          39346.55 MB/s
 单线程写测试:          25724.66 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         43.1 MB/s (10.52 IOPS, 2.43s))          49.6 MB/s (12117 IOPS, 2.11s)
 1GB-1M Block           2.1 GB/s (2013 IOPS, 0.50s)             2.3 GB/s (2152 IOPS, 0.46s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 211.89 MB/s  (52.9k) | 1.41 GB/s    (22.1k)
Write      | 212.45 MB/s  (53.1k) | 1.42 GB/s    (22.2k)
Total      | 424.35 MB/s (106.0k) | 2.84 GB/s    (44.4k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.72 GB/s     (5.3k) | 2.56 GB/s     (2.5k)
Write      | 2.87 GB/s     (5.6k) | 2.73 GB/s     (2.6k)
Total      | 5.59 GB/s    (10.9k) | 5.29 GB/s     (5.1k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS15S45)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：荷兰
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：荷兰区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: NL)
 HotStar:                               No
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Failed
 Amazon Prime Video:                    Yes (Region: NL)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   INTL
 Viu.com:                               No
 YouTube CDN:                           Amsterdam 
 Netflix Preferred CDN:                 Associated with [RU VDS] in [Warsaw ]
 Spotify Registration:                  Yes (Region: NL)
 Steam Currency:                        EUR
 ChatGPT:                               Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【NL】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 50②
IP类型: 
  使用类型(usage_type):hosting①  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes⑥   No⑨ 
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
黑名单记录统计(有多少个黑名单网站有记录): 无害62 恶意2 可疑2 未检测22 ③
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  yandex邮箱: Yes
  qq邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: NL 城市: Alkmaar 服务商: AS60404 Liteserver
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  测试超时
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     测试超时
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.27 ms         AS60404 荷兰 北荷兰省 阿姆斯特丹 liteserver.nl
1.86 ms         AS50673 荷兰 弗莱福兰省 德龙滕 serverius.net
1.05 ms         AS50673 [NL-SERVERIUS] 荷兰 德伦特省 梅珀尔 serverius.net
4.17 ms         AS174 [COGENT-BONE] 荷兰 北荷兰省 阿姆斯特丹 cogentco.com
9.73 ms         AS174 [COGENT-BONE] 德国 黑森州 美因河畔法兰克福 cogentco.com
10.20 ms        AS174 [COGENT-BONE] 德国 黑森州 美因河畔法兰克福 cogentco.com
10.86 ms        AS174 [COGENT-149] 德国 黑森州 美因河畔法兰克福 Cogent-CT-Peer cogentco.com
308.51 ms       AS4134 [CHINANET-BB] 中国 广州市 广州市 chinatelecom.com.cn 电信
207.07 ms       AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
256.22 ms       AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
460.12 ms       AS134774 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.cn 电信
253.51 ms       AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
2.09 ms         AS60404 荷兰 北荷兰省 阿姆斯特丹 liteserver.nl
0.58 ms         AS50673 荷兰 弗莱福兰省 德龙滕 serverius.net
1.40 ms         AS50673 [NL-SERVERIUS] 荷兰 德伦特省 梅珀尔 serverius.net
2.58 ms         AS6453 荷兰 北荷兰省 阿姆斯特丹 tatacommunications.com
9.05 ms         AS6453 荷兰 北荷兰省 阿姆斯特丹 tatacommunications.com
9.02 ms         AS6453 [AMSTDM-AV2] 德国 黑森州 美因河畔法兰克福 tatacommunications.com
172.48 ms       AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
359.17 ms       AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
181.83 ms       AS17816 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
180.10 ms       AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
189.59 ms       AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.29 ms         AS60404 荷兰 北荷兰省 阿姆斯特丹 liteserver.nl
0.58 ms         AS50673 荷兰 弗莱福兰省 德龙滕 serverius.net
1.86 ms         AS50673 [NL-SERVERIUS] 荷兰 德伦特省 梅珀尔 serverius.net
4.20 ms         AS174 [COGENT-BONE] 荷兰 北荷兰省 阿姆斯特丹 cogentco.com
9.64 ms         AS174 [COGENT-BONE] 德国 黑森州 美因河畔法兰克福 cogentco.com
9.23 ms         AS174 [COGENT-BONE] 德国 黑森州 美因河畔法兰克福 cogentco.com
9.52 ms         AS174 [COGENT-149] 德国 黑森州 美因河畔法兰克福 cogentco.com
8.68 ms         AS58453 [CMI-INT] 德国 黑森州 美茵河畔法兰克福 cmi.chinamobile.com 移动
204.95 ms       AS58453 [CMI-INT] 德国 黑森州 美因河畔法兰克福 cmi.chinamobile.com 移动
208.46 ms       AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
207.32 ms       AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
208.57 ms       AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
212.99 ms       AS9808 [CMNET] 中国 海南省 海口市 chinamobile.com 移动
212.32 ms       AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
```

### byte-unixbench 性能测试

```
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: k8s-worker1: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9754 128-Core Processor (4500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9754 128-Core Processor (4500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD EPYC 9754 128-Core Processor (4500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD EPYC 9754 128-Core Processor (4500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   09:03:28 up 34 min,  1 user,  load average: 0.56, 0.27, 0.16; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sun Dec 03 2023 09:03:28 - 09:31:30
4 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       46515663.2 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     7354.0 MWIPS (10.0 s, 7 samples)
Execl Throughput                               4029.7 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1402940.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          381561.4 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3165897.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                             2226782.5 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 136264.4 lps   (10.0 s, 7 samples)
Process Creation                              10530.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  13272.2 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   3885.4 lpm   (60.0 s, 2 samples)
System Call Overhead                        2352540.8 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   46515663.2   3985.9
Double-Precision Whetstone                       55.0       7354.0   1337.1
Execl Throughput                                 43.0       4029.7    937.1
File Copy 1024 bufsize 2000 maxblocks          3960.0    1402940.5   3542.8
File Copy 256 bufsize 500 maxblocks            1655.0     381561.4   2305.5
File Copy 4096 bufsize 8000 maxblocks          5800.0    3165897.4   5458.4
Pipe Throughput                               12440.0    2226782.5   1790.0
Pipe-based Context Switching                   4000.0     136264.4    340.7
Process Creation                                126.0      10530.3    835.7
Shell Scripts (1 concurrent)                     42.4      13272.2   3130.2
Shell Scripts (8 concurrent)                      6.0       3885.4   6475.7
System Call Overhead                          15000.0    2352540.8   1568.4
                                                                   ========
System Benchmarks Index Score                                        1979.0

------------------------------------------------------------------------
Benchmark Run: Sun Dec 03 2023 09:31:30 - 09:59:32
4 CPUs in system; running 4 parallel copies of tests

Dhrystone 2 using register variables      185014625.2 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    29337.2 MWIPS (10.0 s, 7 samples)
Execl Throughput                              11619.5 lps   (29.8 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1111627.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          316049.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3891577.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                             8807218.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 624534.7 lps   (10.0 s, 7 samples)
Process Creation                              35193.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  30337.1 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4126.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        4887214.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  185014625.2  15853.9
Double-Precision Whetstone                       55.0      29337.2   5334.0
Execl Throughput                                 43.0      11619.5   2702.2
File Copy 1024 bufsize 2000 maxblocks          3960.0    1111627.9   2807.1
File Copy 256 bufsize 500 maxblocks            1655.0     316049.3   1909.7
File Copy 4096 bufsize 8000 maxblocks          5800.0    3891577.9   6709.6
Pipe Throughput                               12440.0    8807218.7   7079.8
Pipe-based Context Switching                   4000.0     624534.7   1561.3
Process Creation                                126.0      35193.7   2793.1
Shell Scripts (1 concurrent)                     42.4      30337.1   7155.0
Shell Scripts (8 concurrent)                      6.0       4126.7   6877.8
System Call Overhead                          15000.0    4887214.7   3258.1
                                                                   ========
System Benchmarks Index Score                                        4306.5

======= Script description and score comparison completed! ======= 
```

### IO 测试

```

Processor:    AMD EPYC 9754 128-Core Processor
CPU cores:    4
Frequency:    2249.998 MHz
RAM:          7.8Gi
Swap:         254Mi
Kernel:       Linux 6.1.0-9-amd64 x86_64

Disks:
vda    160G  HDD

CPU: SHA256-hashing 500 MB
    1.843 seconds
CPU: bzip2-compressing 500 MB
    3.757 seconds
CPU: AES-encrypting 500 MB
    0.920 seconds

ioping: seek rate
    min/avg/max/mdev = 47.6 us / 183.4 us / 37.7 ms / 1.07 ms
ioping: sequential read speed
    generated 11.4 k requests in 5.00 s, 2.79 GiB, 2.29 k iops, 571.8 MiB/s

dd: sequential write speed
    1st run:    1716.61 MiB/s
    2nd run:    1430.51 MiB/s
    3rd run:    1335.14 MiB/s
    average:    1494.09 MiB/s

IPv4 speedtests
    your IPv4:    5.255.106.xxxx

    Cachefly CDN:         52.28 MiB/s
    Leaseweb (NL):        2.05 MiB/s
    Softlayer DAL (US):   0.00 MiB/s
    Online.net (FR):      78.85 MiB/s
    OVH BHS (CA):         26.47 MiB/s

IPv6 speedtests
    your IPv6:    2a04:52c0:111:xxxx

    Leaseweb (NL):        1.56 MiB/s
    Softlayer DAL (US):   0.00 MiB/s
    Online.net (FR):      96.91 MiB/s
    OVH BHS (CA):         25.44 MiB/s
-------------------------------------------------

-------------------------------------------------
 nench.sh v2019.07.20 -- https://git.io/nench.sh
 benchmark timestamp:    2023-12-03 13:14:39 UTC
-------------------------------------------------

Processor:    AMD EPYC 9754 128-Core Processor
CPU cores:    4
Frequency:    2249.998 MHz
RAM:          7.8Gi
Swap:         254Mi
Kernel:       Linux 6.1.0-9-amd64 x86_64

Disks:
vda    160G  HDD

CPU: SHA256-hashing 500 MB
    1.957 seconds
CPU: bzip2-compressing 500 MB
    3.720 seconds
CPU: AES-encrypting 500 MB
    0.922 seconds

ioping: seek rate
    min/avg/max/mdev = 45.5 us / 216.6 us / 22.7 ms / 1.14 ms
ioping: sequential read speed
    generated 10.6 k requests in 5.00 s, 2.59 GiB, 2.12 k iops, 530.3 MiB/s

dd: sequential write speed
    1st run:    1430.51 MiB/s
    2nd run:    1335.14 MiB/s
    3rd run:    1239.78 MiB/s
    average:    1335.14 MiB/s

IPv4 speedtests
    your IPv4:    5.255.106.xxxx

    Cachefly CDN:         50.67 MiB/s
    Leaseweb (NL):        1.50 MiB/s
    Softlayer DAL (US):   0.00 MiB/s
    Online.net (FR):      51.69 MiB/s
    OVH BHS (CA):         27.00 MiB/s

IPv6 speedtests
    your IPv6:    2a04:52c0:111:xxxx

    Leaseweb (NL):        1.55 MiB/s
    Softlayer DAL (US):   0.00 MiB/s
    Online.net (FR):      99.94 MiB/s
    OVH BHS (CA):         26.21 MiB/s
-------------------------------------------------
```
