---
title: "HostHatch  东京 AMD 7R13 测评"
published: 2023-12-25
categories: 
  - "jp-server"
  - "vps"
---

HostHatch(hh) 2011年创建, 美国商家, 特色是便宜大碗, 没有优化线路。今年已经是他们的12周年，已经属于老商家了。这次学习bero推出了配置接近的便宜大碗组合，就目前开机的效果而言，还是非常不错的。需要注意的是 他家硬盘/内存测试数据都会小一点, 其他商家是以GiB为单位给, 他家是按GB (60 GB大约55.9 GiB).根据LOC的说法存在丢数据的情况，我没有经历过，不做评价。

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/12/image-24.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/12/image-24.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/12/image-24.jpg" alt="" loading="lazy">
</picture>

## 套餐

**_Provider :_ HostHatch_Type/Plan :_ AMD NVMe Compute offer_  
Processor :_AMD EPYC 7R13 48-Core Processor_Num of Core : 6 Cores（2 dedicated, 4 fair-shared cores）  
Memory : 24 GB DDR4 RAM  
Storage : 300 GB NVMe(PCIe 4.0)  
Bandwidth : 5TB @ 200 Mbps IN | 200 Mbps OUT  
Location : JP  
Price :_ $125 per year**

## 测评

### lscpu

```
root@catcat:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  6
  On-line CPU(s) list:   0-5
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        Red Hat
  Model name:            AMD EPYC 7R13 48-Core Processor
    BIOS Model name:     RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               1
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           6
    Stepping:            1
    BogoMIPS:            5290.05
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr s                         se sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_k                         nown_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline                         _timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a mi                         salignsse 3dnowprefetch osvw perfctr_core invpcid_single ssbd ibrs ibpb stibp vmmcall fsgs                         base tsc_adjust bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xs                         aveopt xsavec xgetbv1 xsaves clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale 
                         vmcb_clean pausefilter pfthreshold v_vmsave_vmload umip pku ospke vaes vpclmulqdq rdpid fs                         rm arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   384 KiB (6 instances)
  L1i:                   384 KiB (6 instances)
  L2:                    3 MiB (6 instances)
  L3:                    96 MiB (6 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0-5
Vulnerabilities:         
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBR                         S Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 5 minutes
Processor  : AMD EPYC 7R13 48-Core Processor
CPU cores  : 6 @ 2645.028 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 23.6 GiB
Swap       : 0.0 KiB
Disk       : 274.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : HostHatch
ASN        : AS63473 HostHatch, LLC
Host       : HostHatch, LLC
Location   : Chiyoda, Tokyo (13)
Country    : Japan

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 282.22 MB/s  (70.5k) | 2.05 GB/s    (32.0k)
Write      | 282.96 MB/s  (70.7k) | 2.06 GB/s    (32.2k)
Total      | 565.19 MB/s (141.2k) | 4.11 GB/s    (64.3k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.92 GB/s     (3.7k) | 1.81 GB/s     (1.7k)
Write      | 2.03 GB/s     (3.9k) | 1.93 GB/s     (1.8k)
Total      | 3.96 GB/s     (7.7k) | 3.74 GB/s     (3.6k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 609 Mbits/sec   | busy            | 229 ms         
Scaleway        | Paris, FR (10G)           | 594 Mbits/sec   | 734 Mbits/sec   | 232 ms         
NovoServe       | North Holland, NL (40G)   | 627 Mbits/sec   | 729 Mbits/sec   | 242 ms         
Uztelecom       | Tashkent, UZ (10G)        | 739 Mbits/sec   | 1.02 Gbits/sec  | 322 ms         
Clouvider       | NYC, NY, US (10G)         | 933 Mbits/sec   | 1.10 Gbits/sec  | 159 ms         
Clouvider       | Dallas, TX, US (10G)      | 1.19 Gbits/sec  | 1.39 Gbits/sec  | 130 ms         
Clouvider       | Los Angeles, CA, US (10G) | 1.64 Gbits/sec  | 1.86 Gbits/sec  | 106 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | busy            | 737 Mbits/sec   | 229 ms         
Scaleway        | Paris, FR (10G)           | 595 Mbits/sec   | busy            | 241 ms         
NovoServe       | North Holland, NL (40G)   | 541 Mbits/sec   | 660 Mbits/sec   | 242 ms         
Uztelecom       | Tashkent, UZ (10G)        | 361 Mbits/sec   | 495 Mbits/sec   | 322 ms         
Clouvider       | NYC, NY, US (10G)         | 938 Mbits/sec   | 1.10 Gbits/sec  | 159 ms         
Clouvider       | Dallas, TX, US (10G)      | 1.19 Gbits/sec  | 1.39 Gbits/sec  | 130 ms         
Clouvider       | Los Angeles, CA, US (10G) | 1.50 Gbits/sec  | 1.70 Gbits/sec  | 108 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1516                          
Multi Core      | 6105                          
Full Test       | https://browser.geekbench.com/v6/cpu/4129518

YABS completed in 12 min 46 sec
```

### GeekBench5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.0-4.module_el8.9.0+3659+9c8643f3

处理器信息
  Name                          AMD EPYC 7R13 48-Core Processor                
  Topology                      6 Processors, 6 Cores
  Identifier                    AuthenticAMD Family 25 Model 1 Stepping 1
  Base Frequency                2.65 GHz
  L1 Instruction Cache          64.0 KB
  L1 Data Cache                 64.0 KB
  L2 Cache                      512 KB
  L3 Cache                      16.0 MB

内存信息
  Size                          23.7 GB

单核测试分数：1124
多核测试分数：5512
详细结果链接：https://browser.geekbench.com/v5/cpu/22077772
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%207R13
```

### SpeedTest

```
   Speedtest by Ookla

      Server: i3D.net - Tokyo (id: 21569)
         ISP: HostHatch LLC
Idle Latency:     0.31 ms   (jitter: 0.05ms, low: 0.29ms, high: 0.47ms)
    Download:  8596.31 Mbps (data used: 5.1 GB)                                                   
                 10.48 ms   (jitter: 1.99ms, low: 0.52ms, high: 23.29ms)
      Upload:  1514.14 Mbps (data used: 2.7 GB)                                                   
                  0.47 ms   (jitter: 0.09ms, low: 0.32ms, high: 4.48ms)
 Packet Loss:     3.2%
  Result URL: https://www.speedtest.net/result/c/8a6be6f2-f15d-45cc-9df2-a26fb27f2ca6
```

### Bench 测试

```
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 7R13 48-Core Processor
 CPU Cores          : 6 @ 2645.028 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 274.9 GB (1.7 GB Used)
 Total Mem          : 23.7 GB (409.8 MB Used)
 System uptime      : 0 days, 0 hour 34 min
 Load average       : 0.34, 0.51, 0.40
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS63473 HostHatch, LLC
 Location           : Hatsudai / JP
 Region             : Tokyo
----------------------------------------------------------------------
 I/O Speed(1st run) : 617 MB/s
 I/O Speed(2nd run) : 650 MB/s
 I/O Speed(3rd run) : 658 MB/s
 I/O Speed(average) : 641.7 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    1635.93 Mbps      8739.90 Mbps        0.35 ms     
 Los Angeles, US  798.79 Mbps       7764.41 Mbps        98.50 ms    
 Dallas, US       623.39 Mbps       5967.89 Mbps        129.71 ms   
 Montreal, CA     444.61 Mbps       915.06 Mbps         167.17 ms   
 Paris, FR        335.20 Mbps       2825.46 Mbps        242.99 ms   
 Amsterdam, NL    279.83 Mbps       3211.92 Mbps        230.01 ms   
 Shanghai, CN     394.77 Mbps       888.80 Mbps         226.61 ms   
 Chongqing, CN    0.16 Mbps         0.07 Mbps           116.57 ms   
 Hongkong, CN     4.71 Mbps         4.84 Mbps           48.48 ms    
 Mumbai, IN       345.12 Mbps       3415.27 Mbps        241.94 ms   
 Singapore, SG    969.47 Mbps       8011.01 Mbps        88.68 ms    
 Tokyo, JP        660.73 Mbps       7668.73 Mbps        0.33 ms     
----------------------------------------------------------------------
 Finished in        : 6 min 5 sec
 Timestamp          : 2023-12-25 07:40:35 UTC
----------------------------------------------------------------------
```

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7R13 48-Core Processor
 CPU 核心数        : 6
 CPU 频率          : 2645.028 MHz
 CPU 缓存          : L1: 384.00 KB / L2: 3.00 MB / L3: 96.00 MB
 硬盘空间          : 1.65 GiB / 274.79 GiB
 启动盘路径        : /dev/vda1
 内存              : 243.00 MiB / 23.65 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 23 min
 负载              : 0.27, 0.49, 0.34
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS63473 HostHatch, LLC
 IPV4 位置         : Hatsudai / Tokyo / JP
 IPV6 ASN          : AS63473 Hosthatch, LLC
 IPV6 位置         : Tokyo / JP-13
 IPV6 子网掩码     : 64
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		3918 Scores
 6 线程测试(多核)得分: 		22126 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		46518.52 MB/s
 单线程写测试:		26452.85 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		82.6 MB/s (20.16 IOPS, 1.27s)		35.1 MB/s (8567 IOPS, 2.99s)
 1GB-1M Block		1.1 GB/s (1042 IOPS, 0.96s)		2.9 GB/s (2777 IOPS, 0.36s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 299.45 MB/s  (74.8k) | 1.92 GB/s    (30.0k)
Write      | 300.24 MB/s  (75.0k) | 1.93 GB/s    (30.1k)
Total      | 599.69 MB/s (149.9k) | 3.85 GB/s    (60.1k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.85 GB/s     (3.6k) | 1.93 GB/s     (1.8k)
Write      | 1.95 GB/s     (3.8k) | 2.06 GB/s     (2.0k)
Total      | 3.81 GB/s     (7.4k) | 4.00 GB/s     (3.9k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: PITTIX
视频缓存节点地域: 美国  匹兹堡(PIT1)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: PITTIX
视频缓存节点地域: 美国  匹兹堡(PIT1)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：日本
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：日本
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：日本区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：日本区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: JP)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			MY
 Viu.com:				No
 YouTube CDN:				PITTIX in Pittsburgh, PA 
 Netflix Preferred CDN:			Tokyo  
 Spotify Registration:			No
 Steam Currency:			JPY
 ChatGPT:				Yes
 Bing Region:				JP
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: US)
 Netflix:				Originals Only
 YouTube Premium:			Yes
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				PITTIX in Pittsburgh, PA 
 Netflix Preferred CDN:			Tokyo  
 Spotify Registration:			No
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Failed
 Bing Region:				JP
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【US】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 26②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  
  公司类型(company_type):hosting①  business⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ②   Yes⑥ ⑦ ⑧ ⑨ 
  VPN(vpn):  No① ② ⑦   Yes⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  Yes⑦ ⑧   No⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
------以下为IPV6检测------
欺诈分数(越低越好): 26②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: JP 城市: Hatsudai 服务商: AS63473 HostHatch, LLC
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
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
9.79 ms  AS63473  日本, 东京都, 东京, webrapidhost.com
0.41 ms  AS969  日本, 东京都, 东京, misaka.io
0.36 ms  AS969  MISAKA.IO 骨干网, misaka.io
0.44 ms  AS969  MISAKA.IO 骨干网, misaka.io
4.16 ms  AS3258  日本, 东京都, 东京, xtom.com
3.54 ms  AS3258  日本, 东京都, 东京, xtom.com
3.34 ms  AS17676  日本, 东京都, 东京, bbtec.net
3.73 ms  AS17676  日本, 东京都, 东京, bbtec.net
76.57 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
22.57 ms  AS63473  日本, 东京都, 东京, webrapidhost.com
0.29 ms  AS969  日本, 东京都, 东京, misaka.io
0.36 ms  AS969  MISAKA.IO 骨干网, misaka.io
0.58 ms  AS969  MISAKA.IO 骨干网, misaka.io
3.92 ms  AS3258  日本, 东京都, 东京, xtom.com
4.16 ms  AS3258  日本, 东京都, 东京, xtom.com
3.45 ms  AS17676  日本, 东京都, 东京, bbtec.net
3.74 ms  AS17676  日本, 东京都, 东京, bbtec.net
153.19 ms  AS17676  中国, 北京, bbtec.net
196.10 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
194.25 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
210.35 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
190.28 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
189.20 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
24.95 ms  AS63473  日本, 东京都, 东京, webrapidhost.com
0.25 ms  AS969  日本, 东京都, 东京, misaka.io
0.31 ms  AS969  MISAKA.IO 骨干网, misaka.io
0.53 ms  AS969  MISAKA.IO 骨干网, misaka.io
58.54 ms  AS3258  日本, 东京都, 东京, xtom.com
3.49 ms  AS3258  日本, 东京都, 东京, xtom.com
3.32 ms  AS17676  日本, 东京都, 东京, bbtec.net
3.81 ms  AS17676  日本, 东京都, 东京, bbtec.net
3.60 ms  AS17676  日本, 东京都, 东京, bbtec.net
1.52 ms  AS58453  日本, 东京都, 东京, chinamobile.com, 移动
164.05 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
163.42 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
164.33 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
61.79 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
63.05 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
66.40 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 898.73 Mbps	 7240.15 Mbps	 0.33	  44.4%
日本东京	 2021.69 Mbps	 8811.23 Mbps	 0.31	  11.3%
中国香港	 4824.71 Mbps	 6313.78 Mbps	 50.91	  NULL
联通郑州5G	 784.07 Mbps	 1020.56 Mbps	 181.35	  NULL
联通WuXi	 1053.51 Mbps	 1365.02 Mbps	 220.72	  1.0%
电信Suzhou5G	 2543.04 Mbps	 679.67 Mbps	 223.83	  NULL
电信Nanjing5G	 731.66 Mbps	 483.23 Mbps	 255.93	  0.0%
移动杭州5G	 369.89 Mbps	 3800.71 Mbps	 167.37	  0.0%
------------------------------------------------------------------------
 总共花费      : 6 分 54 秒
 时间          : Mon Dec 25 07:29:39 UTC 2023
------------------------------------------------------------------------
```

### 磁盘测试

```
root@catcat:~# dd if=/dev/zero of=256 bs=64K count=4K oflag=dsync
4096+0 records in
4096+0 records out
268435456 bytes (268 MB, 256 MiB) copied, 1.97063 s, 136 MB/s
```

### PassMark PerformanceTest Linux 测试

```
AMD EPYC 7R13 48-Core Processor (x86_64)
6 cores @ 0 MHz  |  23.7 GiB RAM
Number of Processes: 6  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          13577
  Integer Math                     33901 Million Operations/s
  Floating Point Math              27109 Million Operations/s
  Prime Numbers                    96.5 Million Primes/s
  Sorting                          19832 Thousand Strings/s
  Encryption                       7331 MB/s
  Compression                      135125 KB/s
  CPU Single Threaded              2460 Million Operations/s
  Physics                          1693 Frames/s
  Extended Instructions (SSE)      11658 Million Matrices/s

Memory Mark:                       1906
  Database Operations              4253 Thousand Operations/s
  Memory Read Cached               25262 MB/s
  Memory Read Uncached             13056 MB/s
  Memory Write                     11433 MB/s
  Available RAM                    23566 Megabytes
  Memory Latency                   99 Nanoseconds
  Memory Threaded                  47249 MB/s
--------------------------------------------------------------------------------
```

### 多地回程测试

### byte-unixbench 性能测试

```
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="ANSI_X3.4-1968", collate="ANSI_X3.4-1968")
   CPU 0: AMD EPYC 7R13 48-Core Processor (5290.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 7R13 48-Core Processor (5290.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD EPYC 7R13 48-Core Processor (5290.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD EPYC 7R13 48-Core Processor (5290.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 4: AMD EPYC 7R13 48-Core Processor (5290.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 5: AMD EPYC 7R13 48-Core Processor (5290.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   08:05:21 up  1:05,  1 user,  load average: 0.15, 0.07, 0.23; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Mon Dec 25 2023 08:05:21 - 08:33:17
6 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       47758585.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     8345.8 MWIPS (9.8 s, 7 samples)
Execl Throughput                               3488.9 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1370785.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          375291.2 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3429033.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                             2137919.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 204898.2 lps   (10.0 s, 7 samples)
Process Creation                               7090.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  12023.2 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4345.3 lpm   (60.0 s, 2 samples)
System Call Overhead                        2445825.0 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   47758585.6   4092.4
Double-Precision Whetstone                       55.0       8345.8   1517.4
Execl Throughput                                 43.0       3488.9    811.4
File Copy 1024 bufsize 2000 maxblocks          3960.0    1370785.9   3461.6
File Copy 256 bufsize 500 maxblocks            1655.0     375291.2   2267.6
File Copy 4096 bufsize 8000 maxblocks          5800.0    3429033.8   5912.1
Pipe Throughput                               12440.0    2137919.3   1718.6
Pipe-based Context Switching                   4000.0     204898.2    512.2
Process Creation                                126.0       7090.2    562.7
Shell Scripts (1 concurrent)                     42.4      12023.2   2835.7
Shell Scripts (8 concurrent)                      6.0       4345.3   7242.2
System Call Overhead                          15000.0    2445825.0   1630.6
                                                                   ========
System Benchmarks Index Score                                        1990.9

------------------------------------------------------------------------
Benchmark Run: Mon Dec 25 2023 08:33:17 - 09:01:19
6 CPUs in system; running 6 parallel copies of tests

Dhrystone 2 using register variables      283929194.1 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    49978.6 MWIPS (9.8 s, 7 samples)
Execl Throughput                              13431.6 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        995474.3 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          311042.6 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2532099.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                            12553877.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                1219994.6 lps   (10.0 s, 7 samples)
Process Creation                              42750.9 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  43691.8 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5776.5 lpm   (60.0 s, 2 samples)
System Call Overhead                        4985527.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  283929194.1  24329.8
Double-Precision Whetstone                       55.0      49978.6   9087.0
Execl Throughput                                 43.0      13431.6   3123.6
File Copy 1024 bufsize 2000 maxblocks          3960.0     995474.3   2513.8
File Copy 256 bufsize 500 maxblocks            1655.0     311042.6   1879.4
File Copy 4096 bufsize 8000 maxblocks          5800.0    2532099.1   4365.7
Pipe Throughput                               12440.0   12553877.7  10091.5
Pipe-based Context Switching                   4000.0    1219994.6   3050.0
Process Creation                                126.0      42750.9   3392.9
Shell Scripts (1 concurrent)                     42.4      43691.8  10304.7
Shell Scripts (8 concurrent)                      6.0       5776.5   9627.4
System Call Overhead                          15000.0    4985527.6   3323.7
                                                                   ========
System Benchmarks Index Score                                        5299.3

======= Script description and score comparison completed! ======= 
```

### monster 测试

```
root@catcat:~# curl -sL bench.monster | bash -s -- -asia
---------------------------------------------------------------------------
 Region: Asia  https://bench.monster v1.7.4 2023-12-15 
 Usage : curl -sL bench.monster | bash -s -- -Asia
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 12 (64 Bit)
 Virt/Kernel  : KVM / 6.1.0-9-amd64
 CPU Model    : AMD EPYC 7R13 48-Core Processor
 CPU Cores    : 6 @ 2645.028 MHz x86_64 512 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 0.00, 0.91, 4.06
 Total Space  : 275G (2.4G ~1% used)
 Total RAM    : 24220 MB (600 MB + 1324 MB Buff in use)
 Total SWAP   : 0 MB (0 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 0 days 2:17
---------------------------------------------------------------------------
 Location     : Japan, Tokyo (Tokyo)
 ASN & ISP    : AS63473, HostHatch / HostHatch, LLC
---------------------------------------------------------------------------

 ## Geekbench v6 CPU Benchmark:

  Single Core : 1560  (EXCELLENT)
   Multi Core : 6571

 ## IO Test

 CPU Speed:
    bzip2     : 140 MB/s
   sha256     : 268 MB/s
   md5sum     : 618 MB/s

 RAM Speed:
   Avg. write : 3993.6 MB/s
   Avg. read  : 7953.1 MB/s

 Disk Speed:
   1st run    : 660 MB/s
   2nd run    : 676 MB/s
   3rd run    : 736 MB/s
   -----------------------
   Average    : 690.7 MB/s
```

### 多地回程测试

#### 深圳电信

```
No:1/9 Traceroute to 中国 深圳 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 206.80ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes packets
1   103.173.178.1   AS63473  [HostHatchTOK]   日本 东京都 东京  hosthatch.com 
                                              6.82 ms
2   199.119.64.131  AS969                     日本 东京都 东京  misaka.io 
                                              0.38 ms
3   199.119.64.117  AS969                     日本 东京都 东京  misaka.io 
                                              0.41 ms
4   199.119.64.118  AS969                     日本 东京都 东京  misaka.io 
                                              0.62 ms
5   91.200.240.53   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              4.13 ms
6   91.200.240.80   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              3.68 ms
7   211.15.32.122   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              30.74 ms
8   211.15.32.121   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.68 ms
9   *
10  *
11  *
12  *
13  *
14  *
15  202.97.12.189   AS4134   [CHINANET-BB]    中国 上海   chinatelecom.com.cn  电信
                                              54.67 ms
16  202.97.24.145   AS4134   [CHINANET-BB]    中国 上海   chinatelecom.com.cn  电信
                                              46.17 ms
17  *
18  *
19  119.147.61.98   AS4134   [CHINANET-GD]    中国 广东 深圳 福田 chinatelecom.com.cn  电信
                                              67.96 ms
20  59.36.216.1     AS4134                    中国 广东 江门市  chinatelecom.com.cn  电信
                                              59.18 ms
```

#### 上海电信

```
No:2/9 Traceroute to 中国 上海 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3031::6815:28b0] - 101.14ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes packets
1   103.173.178.1   AS63473  [HostHatchTOK]   日本 东京都 东京  hosthatch.com 
                                              8.17 ms
2   199.119.64.131  AS969                     日本 东京都 东京  misaka.io 
                                              0.45 ms
3   199.119.64.117  AS969                     日本 东京都 东京  misaka.io 
                                              0.45 ms
4   199.119.64.118  AS969                     日本 东京都 东京  misaka.io 
                                              5.10 ms
5   91.200.240.53   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              45.83 ms
6   91.200.240.80   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              3.75 ms
7   211.15.32.122   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              4.20 ms
8   211.15.32.121   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.67 ms
9   *
10  *
11  *
12  *
13  *
14  202.97.34.157   AS4134   [CHINANET-BB]    中国 北京   chinatelecom.com.cn  电信
                                              55.63 ms
15  *
16  *
17  *
18  *
19  101.226.41.65   AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              87.37 ms
```

#### 北京电信

```
No:3/9 Traceroute to 中国 北京 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 92.59ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes packets
1   103.173.178.1   AS63473  [HostHatchTOK]   日本 东京都 东京  hosthatch.com 
                                              3.00 ms
2   199.119.64.131  AS969                     日本 东京都 东京  misaka.io 
                                              0.38 ms
3   199.119.64.117  AS969                     日本 东京都 东京  misaka.io 
                                              0.39 ms
4   199.119.64.118  AS969                     日本 东京都 东京  misaka.io 
                                              0.38 ms
5   91.200.240.55   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              3.80 ms
6   *
7   211.15.32.122   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.62 ms
8   211.15.32.121   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.71 ms
9   *
10  *
11  *
12  *
13  202.97.12.89    AS4134   [CHINANET-BB]    中国 北京   chinatelecom.com.cn  电信
                                              69.06 ms
14  202.97.53.29    AS4134   [CHINANET-BB]    中国 北京   chinatelecom.com.cn  电信
                                              67.79 ms
15  *
16  *
17  *
18  220.181.53.1    AS23724  [CHINANET-IDC]   中国 北京   bjtelecom.net  电信
                                              69.84 ms
```

#### 广州联通

```
No:4/9 Traceroute to 中国 广州 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 204.67ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes packets
1   103.173.178.1   AS63473  [HostHatchTOK]   日本 东京都 东京  hosthatch.com 
                                              4.28 ms
2   199.119.64.131  AS969                     日本 东京都 东京  misaka.io 
                                              0.29 ms
3   199.119.64.117  AS969                     日本 东京都 东京  misaka.io 
                                              0.34 ms
4   199.119.64.118  AS969                     日本 东京都 东京  misaka.io 
                                              0.61 ms
5   91.200.240.55   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              3.70 ms
6   *
7   211.15.32.122   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.59 ms
8   211.15.32.121   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.79 ms
9   *
10  *
11  *
12  221.111.202.70  AS17676  [BBTEC]          中国 北京   softbank.jp 
                                              149.51 ms
13  219.158.111.214 AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              183.49 ms
14  219.158.96.210  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              188.12 ms
15  219.158.8.117   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              189.58 ms
16  112.96.0.146    AS17816  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              187.25 ms
17  120.80.170.254  AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              186.79 ms
```

#### 上海联通

```
No:5/9 Traceroute to 中国 上海 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 208.08ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes packets
1   103.173.178.1   AS63473  [HostHatchTOK]   日本 东京都 东京  hosthatch.com 
                                              82.64 ms
2   199.119.64.131  AS969                     日本 东京都 东京  misaka.io 
                                              0.43 ms
3   199.119.64.117  AS969                     日本 东京都 东京  misaka.io 
                                              0.42 ms
4   199.119.64.118  AS969                     日本 东京都 东京  misaka.io 
                                              0.57 ms
5   91.200.240.53   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              38.90 ms
6   91.200.240.80   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              3.74 ms
7   211.15.32.122   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.52 ms
8   211.15.32.121   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              4.11 ms
9   *
10  *
11  *
12  221.111.202.70  AS17676  [BBTEC]          中国 北京   softbank.jp 
                                              153.38 ms
13  219.158.22.142  AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              175.53 ms
14  219.158.113.122 AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              196.55 ms
15  *
16  *
17  210.22.66.174   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              189.31 ms
18  112.65.95.129   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              167.08 ms
```

#### 北京联通

```
No:6/9 Traceroute to 中国 北京 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 206.56ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes packets
1   103.173.178.1   AS63473  [HostHatchTOK]   日本 东京都 东京  hosthatch.com 
                                              5.16 ms
2   199.119.64.131  AS969                     日本 东京都 东京  misaka.io 
                                              0.28 ms
3   199.119.64.117  AS969                     日本 东京都 东京  misaka.io 
                                              0.27 ms
4   199.119.64.118  AS969                     日本 东京都 东京  misaka.io 
                                              0.33 ms
5   91.200.240.53   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              10.81 ms
6   91.200.240.80   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              3.70 ms
7   211.15.32.122   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.47 ms
8   211.15.32.121   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.65 ms
9   *
10  *
11  *
12  221.111.202.70  AS17676  [BBTEC]          中国 北京   softbank.jp 
                                              148.82 ms
13  219.158.16.65   AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              174.92 ms
14  *
15  *
16  61.49.140.217   AS4808                    中国 北京   chinaunicom.cn  联通
                                              147.41 ms

No:7/9 Traceroute to 中国 深圳 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3031::6815:28b0] - 102.71ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 120.233.53.1, 30 hops max, 52 bytes packets
1   103.173.178.1   AS63473  [HostHatchTOK]   日本 东京都 东京  hosthatch.com 
                                              7.48 ms
2   199.119.64.131  AS969                     日本 东京都 东京  misaka.io 
                                              0.37 ms
3   199.119.64.117  AS969                     日本 东京都 东京  misaka.io 
                                              0.30 ms
4   199.119.64.118  AS969                     日本 东京都 东京  misaka.io 
                                              0.35 ms
5   91.200.240.55   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              11.74 ms
6   *
7   211.15.32.122   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              4.62 ms
8   211.15.32.121   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.50 ms
9   *
10  *
11  *
12  221.110.131.134 AS17676  [BBTEC]          日本 东京都 东京  softbank.jp 
                                              80.92 ms
13  223.120.3.85    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              81.06 ms
14  223.120.2.86    AS58453  [CMI-INT]        中国 广东 广州  cmi.chinamobile.com  移动
                                              87.02 ms
15  221.183.55.82   AS9808   [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              238.19 ms
16  221.183.92.21   AS9808   [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              164.69 ms
17  *
18  *
19  183.235.226.225 AS56040  [APNIC-AP]       中国 广东 广州  chinamobile.com  移动
                                              170.57 ms
20  120.233.53.1    AS56040  [APNIC-AP]       中国 广东 深圳  chinamobile.com  移动
                                              243.25 ms
```

#### 上海移动

```
No:8/9 Traceroute to 中国 上海 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 172.67.155.192 - 88.78ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes packets
1   103.173.178.1   AS63473  [HostHatchTOK]   日本 东京都 东京  hosthatch.com 
                                              6.26 ms
2   199.119.64.131  AS969                     日本 东京都 东京  misaka.io 
                                              0.28 ms
3   199.119.64.117  AS969                     日本 东京都 东京  misaka.io 
                                              0.34 ms
4   199.119.64.118  AS969                     日本 东京都 东京  misaka.io 
                                              0.51 ms
5   91.200.240.53   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              4.16 ms
6   91.200.240.80   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              3.62 ms
7   211.15.32.122   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.52 ms
8   211.15.32.121   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.69 ms
9   *
10  *
11  221.111.202.138 AS17676  [BBTEC]          日本 东京都 东京  softbank.jp 
                                              2.12 ms
12  *
13  221.183.89.174  AS9808   [CMNET]          中国 上海  回国到达层 chinamobile.com  移动
                                              250.82 ms
14  221.183.89.33   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              243.82 ms
15  *
16  *
17  117.185.127.90  AS9808   [CMNET]          中国 上海  浦东新区 chinamobile.com  移动
                                              171.01 ms
18  183.194.216.129 AS9808   [APNIC-AP]       中国 上海   chinamobile.com  移动
                                              166.65 ms
```

#### 北京移动

```
No:9/9 Traceroute to 中国 北京 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3031::6815:28b0] - 85.34ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes packets
1   103.173.178.1   AS63473  [HostHatchTOK]   日本 东京都 东京  hosthatch.com 
                                              9.83 ms
2   199.119.64.131  AS969                     日本 东京都 东京  misaka.io 
                                              0.27 ms
3   199.119.64.117  AS969                     日本 东京都 东京  misaka.io 
                                              0.35 ms
4   199.119.64.118  AS969                     日本 东京都 东京  misaka.io 
                                              0.50 ms
5   91.200.240.55   AS3258   [OWL-JP]         日本 东京都 东京  IDC   
                                              3.69 ms
6   *
7   211.15.32.122   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.31 ms
8   211.15.32.121   AS17676  [JPNIC-NET]      日本 东京都 东京  softbank.jp 
                                              3.77 ms
9   *
10  *
11  221.111.202.238 AS17676  [BBTEC]          日本 东京都 东京  softbank.jp 
                                              3.96 ms
12  223.120.2.206   AS58453  [CMI-INT]        中国 北京   cmi.chinamobile.com  移动
                                              224.34 ms
13  221.183.55.110  AS9808   [CMNET]          中国 北京  回国到达层 chinamobile.com  移动
                                              190.61 ms
14  221.183.25.201  AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              188.55 ms
15  221.183.89.102  AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              191.58 ms
16  *
17  *
18  *
19  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              279.70 ms
20  *
21  *
22  211.136.25.153  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              190.68 ms
```

### 全球延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/12/image-25.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/12/image-25.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/12/image-25.jpg" alt="" loading="lazy">
</picture>
