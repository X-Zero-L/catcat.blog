---
title: "Nube Cloud 美国 AMD 7663 测评"
published: 2024-07-12
categories: 
  - "vps"
  - "us-server"
---

Nube cloud的第二个节点，上游为Cogent，三网Cogent，然后骨干网直连。和香港计费规则一样，流量只计算出。

- 折后每 1TB 流出流量 0.9 USD

- 按照实际流出量计费

- 单向计费只计流出

## 配置：

- **_Provider : Nube Clou_****_d_**

- **_Type/Plan :_** **_**a3s.4c8g**_**

- **_Processor : AMD EPYC 7663 56-Core Processor_**

- **_Num of Core : 4_** **_Cores_**

- **_Memory :_** **_8_** **_GB_**

- **_Storage : 12_****_0_** **_GB NVMe_**

- **_Bandwidth : 10 Gbps IN | 10 Gbps OUT_**

- **_Location : US_**

## 测评

### Yabs

```
Fri Jul 12 04:08:51 PM HKT 2024

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 1 minutes
Processor  : AMD EPYC 7663 56-Core Processor
CPU cores  : 4 @ 1999.999 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 7.7 GiB
Swap       : 0.0 KiB
Disk       : 119.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-21-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Eons Data Communications Limited
ASN        : AS138997 Eons Data Communications Limited
Location   : San Jose, California (CA)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 116.91 MB/s  (29.2k) | 949.45 MB/s  (14.8k)
Write      | 117.22 MB/s  (29.3k) | 954.45 MB/s  (14.9k)
Total      | 234.13 MB/s  (58.5k) | 1.90 GB/s    (29.7k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.82 GB/s     (3.5k) | 2.10 GB/s     (2.0k)
Write      | 1.92 GB/s     (3.7k) | 2.24 GB/s     (2.1k)
Total      | 3.75 GB/s     (7.3k) | 4.35 GB/s     (4.2k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 1.30 Gbits/sec  | 1.67 Gbits/sec  | 134 ms         
Eranium         | Amsterdam, NL (100G)      | 2.72 Gbits/sec  | 3.23 Gbits/sec  | 145 ms         
Uztelecom       | Tashkent, UZ (10G)        | busy            | 1.47 Gbits/sec  | 224 ms         
Leaseweb        | Singapore, SG (10G)       | busy            | 7.34 Mbits/sec  | 186 ms         
Clouvider       | Los Angeles, CA, US (10G) | 4.82 Gbits/sec  | 5.49 Gbits/sec  | 10.7 ms        
Leaseweb        | NYC, NY, US (10G)         | 3.93 Gbits/sec  | 4.11 Gbits/sec  | 61.1 ms        
Edgoo           | Sao Paulo, BR (1G)        | 1.74 Gbits/sec  | 1.40 Gbits/sec  | 175 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1596                          
Multi Core      | 4433                          
Full Test       | https://browser.geekbench.com/v6/cpu/6881701

YABS completed in 11 min 34 sec
```

### Bench

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 7663 56-Core Processor
 CPU Cores          : 4 @ 1999.999 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 119.9 GB (3.1 GB Used)
 Total Mem          : 7.7 GB (443.5 MB Used)
 System uptime      : 0 days, 0 hour 19 min
 Load average       : 0.00, 0.26, 0.30
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-21-amd64
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS138997 Eons Data Communications Limited
 Location           : San Jose / US
 Region             : California
----------------------------------------------------------------------
 I/O Speed(1st run) : 255 MB/s
 I/O Speed(2nd run) : 1.1 GB/s
 I/O Speed(3rd run) : 1.1 GB/s
 I/O Speed(average) : 835.9 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    8933.48 Mbps      7698.09 Mbps        0.72 ms     
 Los Angeles, US  7755.66 Mbps      7072.65 Mbps        11.38 ms    
 Dallas, US       2279.63 Mbps      7028.53 Mbps        39.34 ms    
 Montreal, CA     645.98 Mbps       907.62 Mbps         66.39 ms    
 Amsterdam, NL    636.91 Mbps       4545.27 Mbps        145.14 ms   
 Chongqing, CN    7.95 Mbps         0.40 Mbps           217.46 ms   
 Mumbai, IN       595.46 Mbps       4142.05 Mbps        261.76 ms   
 Singapore, SG    95.39 Mbps        31.50 Mbps          190.75 ms   
 Tokyo, JP        595.23 Mbps       4506.61 Mbps        128.93 ms   
----------------------------------------------------------------------
 Finished in        : 4 min 19 sec
 Timestamp          : 2024-07-12 16:30:40 HKT
----------------------------------------------------------------------
```

### GeekBench 5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-21-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.13.0-2.el7

处理器信息
  Name                          AMD EPYC 7663 56-Core Processor                
  Topology                      1 Processor, 4 Cores
  Identifier                    AuthenticAMD Family 25 Model 1 Stepping 1
  Base Frequency                2.00 GHz
  L1 Instruction Cache          64.0 KB x 4
  L1 Data Cache                 64.0 KB x 4
  L2 Cache                      512 KB x 4
  L3 Cache                      16.0 MB

内存信息
  Size                          7.72 GB

单核测试分数：1193
多核测试分数：4422
详细结果链接：https://browser.geekbench.com/v5/cpu/22675798
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%207663
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```

AMD EPYC 7663 56-Core Processor (x86_64)
4 cores @ 0 MHz  |  7.7 GiB RAM
Number of Processes: 4  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          9282
  Integer Math                     21854 Million Operations/s
  Floating Point Math              17725 Million Operations/s
  Prime Numbers                    70.3 Million Primes/s
  Sorting                          12645 Thousand Strings/s
  Encryption                       4727 MB/s
  Compression                      93782 KB/s
  CPU Single Threaded              2529 Million Operations/s
  Physics                          1235 Frames/s
  Extended Instructions (SSE)      8091 Million Matrices/s

Memory Mark:                       2354
  Database Operations              3377 Thousand Operations/s
  Memory Read Cached               25760 MB/s
  Memory Read Uncached             17634 MB/s
  Memory Write                     10930 MB/s
  Available RAM                    7505 Megabytes
  Memory Latency                   60 Nanoseconds
  Memory Threaded                  46389 MB/s
--------------------------------------------------------------------------
```

### 流媒体检测

```
[ Multination ] =============
Dazn                      YES (Region: US)
Disney+                   YES (Region: HK)
Netflix                   YES (Region: HK)
Netflix CDN               US
Youtube Premium           NO
Youtube CDN               LAX
Amazon Prime Video        YES (Region: CN)
TVBAnywhere+              YES (Region: US)
iQiYi                     YES (Region: HK)
Viu.com                   NO
Spotify                   YES (Region: US)
Steam                     YES (Region: US)
ChatGPT                   YES (Region: US)
Wikipedia                 NO
Reddit                    YES
TikTok                    YES (Region: US)
Bing                      YES (Region: US)
Instagram Audio           YES
[ North America ] ===========
Shudder                   YES
BritBox                   YES
SonyLiv                   NO  (Info: Proxy)
Hotstar                   YES (Region: US)
[ US ] ======================
FOX                       YES
Hulu                      NO
NFL+                      YES
ESPN+                     NO
Epix                      NO  (Info: Proxy Detected)
Starz                     NO
Philo                     NO
FXNOW                     YES
TLC GO                    YES
HBO Max                   YES
CW TV                     YES
NBA TV                    YES
Fubo TV                   NO
Tubi TV                   YES
Sling TV                  YES
Pluto TV                  YES
Acorn TV                  YES
SHOWTIME                  YES
encoreTVB                 NO
Discovery+                NO
Paramount+                NO
Peacock TV                YES
Popcornflix               YES
Crunchyroll               YES
DirecTV Stream            YES
[ CA ] ======================
CBC Gem                   NO
Crave                     YES
```

```
########################################################################
一、基础信息（Maxmind 数据库）
自治系统号：            AS138997
组织：                  Eons Data Communications Limited
坐标：                  121°47′41″W, 37°14′16″N
地图：                  https://check.place/37.2379,-121.7946,15,cn
城市：                  加州, San Jose, 95119
使用地：                [US]美国, [NA]北美洲
注册地：                [US]美国
时区：                  America/Los_Angeles
IP类型：                 原生IP 
二、IP类型属性
数据库：      IPinfo    ipregistry    ipapi     AbuseIPDB  IP2LOCATION 
使用类型：     机房        机房        机房        机房        机房    
公司类型：     商业        机房        机房    
三、风险评分
风险等级：      极低         低       中等       高         极高
SCAMALYTICS：               22|低风险
ipapi：    0.02%|极低风险
AbuseIPDB：    0|低风险
IPQS：                        75|可疑IP
DB-IP：         |低风险
四、风险因子
库： IP2LOCATION ipapi ipregistry IPQS SCAMALYTICS ipdata IPinfo IPWHOIS
地区：    [US]    [US]    [US]    [US]    [US]    [US]    [US]    [US]
代理：     否      否      否      是      否      否      否      否 
Tor：      否      否      否      否      否      否      否      否 
VPN：      否      否      否      是      否      无      否      否 
服务器：   是      是      是      无      否      否      否      否 
滥用：     否      否      否      否      无      否      无      无 
机器人：   否      否      无      否      否      无      无      无 
五、流媒体及AI服务解锁检测
服务商：  TikTok   Disney+  Netflix Youtube  AmazonPV  Spotify  ChatGPT 
状态：     解锁     解锁     解锁     中国     解锁     解锁     解锁   
地区：     [US]     [HK]     [HK]     [CN]     [CN]     [US]     [US]   
方式：     原生     原生     原生              原生     原生     原生   
六、邮局连通性及黑名单检测
本地25端口：阻断
IP地址黑名单数据库：  有效 439   正常 435   已标记 4   黑名单 0
========================================================================
```

### 融合怪脚本

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7663 56-Core Processor
 CPU 核心数        : 4
 CPU 频率          : 1999.999 MHz
 CPU 缓存          : L1: 256.00 KB / L2: 2.00 MB / L3: 64.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 260.66 MiB / 7.72 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 3.15 GiB / 119.94 GiB
 启动盘路径        : /dev/vda1
 系统在线时间      : 0 days, 0 hour 29 min
 负载              : 0.24, 0.42, 0.39
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-21-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS138997 Eons Data Communications Limited
 IPV4 位置         : San Jose / California / US
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          3822 Scores
 4 线程测试(多核)得分:          14898 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          46228.61 MB/s
 单线程写测试:          27926.57 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         5.3 MB/s (1297 IOPS, 19.74s)            12.4 MB/s (3028 IOPS, 8.45s)
 1GB-1M Block           148 MB/s (141 IOPS, 7.09s)              370 MB/s (353 IOPS, 2.83s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 131.70 MB/s  (32.9k) | 1.27 GB/s    (19.9k)
Write      | 132.05 MB/s  (33.0k) | 1.28 GB/s    (20.0k)
Total      | 263.75 MB/s  (65.9k) | 2.55 GB/s    (39.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.72 GB/s     (5.3k) | 2.82 GB/s     (2.7k)
Write      | 2.86 GB/s     (5.6k) | 3.01 GB/s     (2.9k)
Total      | 5.59 GB/s    (10.9k) | 5.84 GB/s     (5.7k)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：中国香港
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  洛杉机(LAX17S56)
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
 Disney+:                               Yes (Region: HK)
 Netflix:                               Yes (Region: HK)
 YouTube Premium:                       No
 Amazon Prime Video:                    No (Service Not Available)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  Yes (Region: US)
 Instagram Licensed Audio:              No
 OneTrust Region:                       US [California]
 iQyi Oversea Region:                   HK
 Bing Region:                           US
 YouTube CDN:                           Los Angeles, CA
 Netflix Preferred CDN:                 Seattle, WA
 ChatGPT:                               Yes
 Wikipedia Editability:                 No
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        USD
 ---Forum---
 Reddit:                                Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【US】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 47 [8] 
VPN得分(越低越好): 20 [8] 
代理得分(越低越好): 79 [8]
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 62 [8] 
欺诈得分(越低越好): 0 [E] 22 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0008 (Low) [A] 
公司滥用得分(越低越好): 0.0002 (Very Low) [A] 
威胁级别: low [9 B]
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 92 [2]  
安全信息:
使用类型: unknown [C] hosting [0 7 A] DataCenter/WebHosting/Transit [3] business [8] corporate [9]
公司类型: business [0] isp [7 A]
是否云提供商: Yes [7 D] 
是否数据中心: No [0 5 6 8 C] Yes [1 A]
是否移动设备: Yes [E] No [5 A C]
是否代理: No [0 1 4 5 6 7 8 9 A B C D E] 
是否VPN: No [0 1 6 7 A C D E] 
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
DNS-黑名单: 311(Total_Check) 0(Clean) 6(Blacklisted) 13(Other) 
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
MailRU    ✘     ✘     ✘     ✘     ✔     ✘    
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
广州电信 58.60.188.222   检测不到回程路由节点的IP地址
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
1.67 ms  AS138997  美国, 加利福尼亚州, 圣克拉拉, cogentco.com
0.74 ms  AS138997  美国, 加利福尼亚州, 圣克拉拉, eons.cloud
0.40 ms  AS138997  美国, 加利福尼亚州, 圣克拉拉, eons.cloud
0.86 ms  AS174  美国, 加利福尼亚州, 圣何塞, cogentco.com
1.28 ms  AS174  美国, 加利福尼亚州, 圣何塞, cogentco.com
169.04 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
163.44 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.46 ms  AS138997  美国, 加利福尼亚州, 圣克拉拉, cogentco.com
1.05 ms  AS138997  美国, 加利福尼亚州, 圣克拉拉, eons.cloud
0.65 ms  AS138997  美国, 加利福尼亚州, 圣克拉拉, eons.cloud
0.93 ms  AS174  美国, 加利福尼亚州, 圣何塞, cogentco.com
12.96 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
13.27 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
204.23 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
194.25 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
219.01 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
214.68 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
212.07 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
195.33 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.37 ms  AS138997  美国, 加利福尼亚州, 圣克拉拉, cogentco.com
1.08 ms  AS138997  美国, 加利福尼亚州, 圣克拉拉, eons.cloud
0.42 ms  AS138997  美国, 加利福尼亚州, 圣克拉拉, eons.cloud
1.26 ms  AS174  美国, 加利福尼亚州, 圣何塞, cogentco.com
30.62 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
13.20 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
15.84 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
11.30 ms  AS58453  美国, 加利福尼亚州, 洛杉矶, chinamobile.com, 移动
170.77 ms  AS58453  中国, 香港, chinamobile.com, 移动
164.31 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
166.20 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
173.57 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
169.48 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
167.91 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
166.24 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    8532.49 Mbps    7687.56 Mbps    0.79     0.0%
洛杉矶           4356.80 Mbps    6089.27 Mbps    11.70    0.0%
日本东京         677.99 Mbps     4324.79 Mbps    128.84   0.0%
联通WuXi         1476.45 Mbps    3178.52 Mbps    200.95   1.3%
电信浙江         328.54 Mbps     642.78 Mbps     153.27   NULL
电信合肥5G       8.38 Mbps       12.72 Mbps      154.85   1.0%
------------------------------------------------------------------------
 总共花费      : 6 分 26 秒
 时间          : Fri Jul 12 16:42:57 HKT 2024
------------------------------------------------------------------------
 -----------------------------------------------------------------------
```

### BGP

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/07/image-14.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/07/image-14.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/07/image-14.jpg" alt="" loading="lazy">
</picture>
