---
title: "ZgoCloud 洛杉矶 AMD 7950X 测试"
published: 2023-12-16
categories: 
  - "vps"
  - "us-server"
---

前半年买过他们家的大阪 软银 4h8g服务器，可惜当时由于攻击太多了，商家也不做了，具体可见下面文章。最近还上车过他们家的荷兰，也是由于攻击，这方面Zgo的表现并不好。这次他们家又重新推出了优化线路+高配置的服务器，也不知道这次能持续多久。

**2023.10.22日更新 ： 商家设备存在故障，目前已修复**

**2023.12.31日更新 ： GB6目前已经跌至2375分**

**2023.1.13日：开始补测**

**商家TOS:**

```
1.一个账号只能退款2次，流量超10g不退，push账号不退，活动鸡不退，超5天不退
2.每月可以更改一次IP，每次收取$10，$5（洛杉矶Xeon® Platinum）或$3（大阪Ryzen 7950X）
3.禁止I/O操作速率超过100 MiB/s，持续时间超过4小时
4.CPU使用率在24小时内不应超过100％，且持续时间不应超过1小时
5.VPS的CPU使用率应保持在30%以下的平均水平
6.禁止连续使用超过4小时的100mbps以上带宽，或频繁突发到端口的最大带宽
7.禁止DD win
8.push5刀
9.如果我们发现您违反了本协议中概述的任何使用限制，我们保留采取以下措施的权利：暂停您的VPS实例以恢复服务器的正常运行。终止您的VPS服务.
```

https://catcat.blog/zgocloud-%e7%b3%bb%e5%88%97%e6%b5%8b%e8%af%84%ef%bc%88%e6%96%b0%e5%95%86%e5%ae%b6%ef%bc%8cxtom%e6%9c%ba%e6%88%bf%ef%bc%8c%e4%bb%8b%e6%84%8f%e6%85%8e%e5%85%a5%ef%bc%89.html

> ## 套餐
> 
> **_Provider : ZgoCloud  
> Type/Plan : Los Angeles Ryzen9 Performance VPS - Specials - Standard  
> Processor : AMD Ryzen 9 7950X (4.5 GHz++)  
> Num of Core : 2 Cores  
> Memory : 2 GB DDR5 RAM  
> Storage : 40 GB NVMe(PCIe 4.0)  
> Bandwidth : 2TB @ 500 Mbps IN | 500 Mbps OUT  
> Location : Los Angeles  
> Price : \$58.9/year_**

## 测评

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 3 minutes
Processor  : AMD Ryzen 9 7950X 16-Core Processor
CPU cores  : 2 @ 4491.540 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 0.0 KiB
Disk       : 39.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Kurun Cloud Inc
ASN        : Unknown
Host       : Kurun Cloud Inc
Location   : Rancho Cucamonga, California (CA)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 584.86 MB/s (146.2k) | 3.74 GB/s    (58.5k)
Write      | 586.40 MB/s (146.6k) | 3.76 GB/s    (58.8k)
Total      | 1.17 GB/s   (292.8k) | 7.51 GB/s   (117.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.63 GB/s     (9.0k) | 4.47 GB/s     (4.3k)
Write      | 4.87 GB/s     (9.5k) | 4.76 GB/s     (4.6k)
Total      | 9.51 GB/s    (18.5k) | 9.23 GB/s     (9.0k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2862                          
Multi Core      | 5063                          
Full Test       | https://browser.geekbench.com/v6/cpu/4008237

YABS completed in 8 min 45 sec
```

### 流媒体测试

```
============[ Multination ]============
 Dazn:                                  Yes (Region: US)
 HotStar:                               Yes (Region: US)
 Disney+:                               Yes (Region: US)
 Netflix:                               Yes (Region: US)
 YouTube Premium:                       Yes
 Amazon Prime Video:                    Yes (Region: US)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   US
 Viu.com:                               No
 YouTube CDN:                           Los Angeles, CA 
 Netflix Preferred CDN:                 Los Angeles, CA  
 Spotify Registration:                  Yes (Region: US)
 Steam Currency:                        USD
 ChatGPT:                               Yes
 Bing Region:                           US
=======================================
===========[ North America ]===========
 FOX:                                   Yes
 Hulu:                                  Failed
 NFL+:                                  Yes
 ESPN+:[Sponsored by Jam]               Yes
 Epix:                                  Yes
 Starz:                                 Yes
 Philo:                                 Yes
 FXNOW:                                 No
 TLC GO:                                Yes
 HBO Max:                               Yes
 Shudder:                               Yes
 BritBox:                               Yes
 Crackle:                               Yes
 CW TV:                                 Yes
 A&E TV:                                Yes
 NBA TV:                                Yes
 NBC TV:                                Yes
 Fubo TV:                               No
 Tubi TV:                               Yes
 Sling TV:                              Yes
 Pluto TV:                              Yes
 Acorn TV:                              Yes
 SHOWTIME:                              Yes
 encoreTVB:                             Yes
 Funimation:                            Yes (Region: US)
 Discovery+:                            Yes
 Paramount+:                            Yes
 Peacock TV:                            Yes
 Popcornflix:                           Yes
 Crunchyroll:                           Yes
 KBS American:                          Failed (Network Connection)
 KOCOWA:                                Yes
 Maths Spot:                            Failed
 ---CA---
 CBC Gem:                               No
 Crave:                                 Yes
=======================================

 ** 正在测试IPv6解锁情况 
--------------------------------
 ** 您的网络为:  (2602:fce1:45a:*:*) 

============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               Yes (Region: US)
 Disney+:                               Yes (Region: US)
 Netflix:                               Yes (Region: US)
 YouTube Premium:                       Yes
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           Los Angeles, CA 
 Netflix Preferred CDN:                 Los Angeles, CA  
 Spotify Registration:                  Yes (Region: US)
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           US
=======================================
===========[ North America ]===========
 FOX:                                   Yes
 Hulu:                                  Failed
 NFL+:                                  IPv6 Not Support
 ESPN+:[Sponsored by Jam]               Yes
 Epix:                                  Failed (Network Connection)
 Epix:                                  Failed
 Starz:                                 Failed (Network Connection)
 Philo:                                 IPv6 Not Support
 FXNOW:                                 IPv6 Not Support
 TLC GO:                                IPv6 Not Support
 HBO Max:                               Failed (Network Connection)
 Shudder:                               Yes
 BritBox:                               Yes
 Crackle:                               Yes
 CW TV:                                 Yes
 A&E TV:                                IPv6 Not Support
 NBA TV:                                Yes
 NBC TV:                                Yes
 Fubo TV:                               IPv6 Not Support
 Tubi TV:                               Yes
 Sling TV:                              Yes
 Pluto TV:                              Yes
 Acorn TV:                              Failed (Network Connection)
 SHOWTIME:                              Failed (Network Connection)
 encoreTVB:                             Failed (Network Connection)
 Funimation:                            IPv6 Not Support
 Discovery+:                            IPv6 Not Support
 Paramount+:                            Yes
 Peacock TV:                            Yes
 Popcornflix:                           IPv6 Not Support
 Crunchyroll:                           IPv6 Not Support
 KBS American:                          IPv6 Not Support
 KOCOWA:                                IPv6 Not Support
 Maths Spot:                            IPv6 Not Support
 ---CA---
 CBC Gem:                               Failed (Network Connection)
 Crave:                                 Failed (Network Connection)
=======================================
```

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 7950X 16-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 4491.540 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 2.00 MB / L3: 128.00 MB
 硬盘空间          : 2.09 GiB / 39.82 GiB
 启动盘路径        : /dev/sda3
 内存              : 248.17 MiB / 1.89 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 15 min
 负载              : 0.09, 0.26, 0.16
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV6 子网掩码     : 128
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		6510 Scores
 2 线程测试(多核)得分: 		12904 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		76404.40 MB/s
 单线程写测试:		43128.60 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		138 MB/s (33.65 IOPS, 0.76s)		172 MB/s (41925 IOPS, 0.61s)
 1GB-1M Block		1.9 GB/s (1778 IOPS, 0.56s)		3.7 GB/s (3499 IOPS, 0.29s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 575.22 MB/s (143.8k) | 4.66 GB/s    (72.9k)
Write      | 576.74 MB/s (144.1k) | 4.69 GB/s    (73.3k)
Total      | 1.15 GB/s   (287.9k) | 9.36 GB/s   (146.2k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.32 GB/s     (8.4k) | 4.05 GB/s     (3.9k)
Write      | 4.55 GB/s     (8.9k) | 4.32 GB/s     (4.2k)
Total      | 8.88 GB/s    (17.3k) | 8.37 GB/s     (8.1k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  洛杉机(LAX17S56)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  洛杉机(LAX17S56)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
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
 HotStar:				Yes (Region: US)
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: US)
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				Los Angeles, CA 
 Netflix Preferred CDN:			Los Angeles, CA  
 Spotify Registration:			Yes (Region: US)
 Steam Currency:			USD
 ChatGPT:				Yes
 Bing Region:				US
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				Yes (Region: US)
 Disney+:				Yes (Region: US)
 Netflix:				Yes (Region: US)
 YouTube Premium:			Yes
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Los Angeles, CA 
 Netflix Preferred CDN:			Los Angeles, CA  
 Spotify Registration:			Yes (Region: US)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Failed
 Bing Region:				
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):isp①  Commercial⑤  
  公司类型(company_type):business⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
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
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测89 ③
Google搜索可行性：YES
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: US 城市: Frankfort 服务商: 
北京电信 219.141.136.12  联通9929[优质线路]           
北京联通 202.106.50.1    联通9929[优质线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  联通9929[优质线路]           
上海联通 210.22.97.1     联通9929[优质线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   联通9929[优质线路]           
广州联通 210.21.196.6    联通9929[优质线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     联通9929[优质线路]           
成都联通 119.6.6.6       联通9929[优质线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------

--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 482.75 Mbps	 422.83 Mbps	 39.80	  0.0%
洛杉矶		 501.14 Mbps	 69.09 Mbps	 2.60	  NULL
日本东京	 496.34 Mbps	 500.12 Mbps	 98.25	  18.3%
联通上海5G	 317.21 Mbps	 96.11 Mbps	 151.17	  0.0%
联通郑州5G	 509.66 Mbps	 339.40 Mbps	 162.39	  NULL
电信江苏5G	 1.34 Mbps	 75.29 Mbps	 282.46	  0.0%
电信Nanjing5G	 200.14 Mbps	 60.74 Mbps	 179.22	  0.0%
移动杭州5G	 341.83 Mbps	 481.37 Mbps	 165.27	  0.0%
移动Beijing	 0.19 Mbps	 235.54 Mbps	 254.06	  NULL
------------------------------------------------------------------------
 总共花费      : 7 分 10 秒
 时间          : Sat Dec 16 15:45:57 CST 2023
------------------------------------------------------------------------
```

### Bench

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 7950X 16-Core Processor
 CPU Cores          : 2 @ 4491.540 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 39.9 GB (2.1 GB Used)
 Total Mem          : 1.9 GB (306.4 MB Used)
 System uptime      : 0 days, 0 hour 23 min
 Load average       : 0.00, 0.12, 0.15
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Location           : Frankfort / US
 Region             : Kentucky
 Region             : No ISP detected
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.2 GB/s
 I/O Speed(2nd run) : 1.3 GB/s
 I/O Speed(3rd run) : 1.1 GB/s
 I/O Speed(average) : 1228.8 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    473.63 Mbps       337.80 Mbps         39.70 ms    
 Los Angeles, US  429.59 Mbps       444.27 Mbps         0.81 ms     
```

### GeekBench

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.2-debian-1.16.2-1

处理器信息
  Name                          AMD Ryzen 9 7950X
  Topology                      2 Processors, 2 Cores
  Identifier                    AuthenticAMD Family 25 Model 97 Stepping 2
  Base Frequency                4.49 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      64.0 MB

内存信息
  Size                          1.89 GB

单核测试分数：2064
多核测试分数：3762
详细结果链接：https://browser.geekbench.com/v5/cpu/22049627
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%207950X
```

## 2023年12月31日测试

### yabs

```
Sun 31 Dec 2023 12:06:08 AM CST

Basic System Information:
---------------------------------
Uptime     : 8 days, 14 hours, 48 minutes
Processor  : AMD Ryzen 9 7950X 16-Core Processor
CPU cores  : 2 @ 4491.536 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 2.0 GiB
Disk       : 40.0 GiB
Distro     : Debian GNU/Linux 11 (bullseye)
Kernel     : 6.1.46-x64v4-xanmod1
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Kurun Cloud Inc
ASN        : Unknown
Host       : Kurun Cloud Inc
Location   : Rancho Cucamonga, California (CA)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 494.19 MB/s (123.5k) | 1.81 GB/s    (28.3k)
Write      | 495.49 MB/s (123.8k) | 1.82 GB/s    (28.4k)
Total      | 989.68 MB/s (247.4k) | 3.63 GB/s    (56.7k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.85 GB/s     (3.6k) | 2.16 GB/s     (2.1k)
Write      | 1.94 GB/s     (3.8k) | 2.30 GB/s     (2.2k)
Total      | 3.79 GB/s     (7.4k) | 4.46 GB/s     (4.3k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2375                          
Multi Core      | 3991                          
Full Test       | https://browser.geekbench.com/v6/cpu/4198713

YABS completed in 6 min 23 sec
```

### GeekBench5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 11 (bullseye)
  Kernel                        Linux 6.1.46-x64v4-xanmod1 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.2-debian-1.16.2-1

处理器信息
  Name                          AMD Ryzen 9 7950X
  Topology                      2 Processors, 2 Cores
  Identifier                    AuthenticAMD Family 25 Model 97 Stepping 2
  Base Frequency                4.49 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      64.0 MB

内存信息
  Size                          1.89 GB

单核测试分数：1736
多核测试分数：2915
详细结果链接：https://browser.geekbench.com/v5/cpu/22093114
```

## 2024年1月3日测试

#### Yabs

```
Sat 13 Jan 2024 12:45:34 PM CST

Basic System Information:
---------------------------------
Uptime     : 8 days, 1 hours, 50 minutes
Processor  : AMD Ryzen 9 7950X 16-Core Processor
CPU cores  : 2 @ 4491.540 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 2.0 GiB
Disk       : 40.0 GiB
Distro     : Debian GNU/Linux 11 (bullseye)
Kernel     : 6.1.46-x64v4-xanmod1
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Kurun Cloud Inc
ASN        : AS8796 FASTNET DATA INC
Host       : Kurun Cloud Inc
Location   : Rancho Cucamonga, California (CA)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 474.81 MB/s (118.7k) | 2.14 GB/s    (33.5k)
Write      | 476.06 MB/s (119.0k) | 2.15 GB/s    (33.6k)
Total      | 950.87 MB/s (237.7k) | 4.30 GB/s    (67.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.06 GB/s     (4.0k) | 2.17 GB/s     (2.1k)
Write      | 2.17 GB/s     (4.2k) | 2.31 GB/s     (2.2k)
Total      | 4.24 GB/s     (8.2k) | 4.49 GB/s     (4.3k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2367                          
Multi Core      | 4144                          
Full Test       | https://browser.geekbench.com/v6/cpu/4370469
```

#### 回程路由测试

```
No:1/9 Traceroute to 中国 深圳 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3031::6815:28b0] - 55.09ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes packets
1   23.165.248.1    AS8796                    美国 州 法兰克福  rhinocloud.uk 
                                              13.53 ms
2   *
3   192.168.236.22  *                         RFC1918          
                                              35.19 ms
4   192.168.220.226 *                         RFC1918          
                                              17.20 ms
5   162.219.85.85   AS10099  [CUG-BACKBONE]   美国 加利福尼亚 洛杉矶  chinaunicomglobal.com  联通
                                              152.06 ms
6   203.160.75.218  AS10099  [CUG-BACKBONE]   中国 上海   chinaunicomglobal.com  联通
                                              235.90 ms
7   218.105.2.201   AS9929   [CNC-BACKBONE]   中国 上海   chinaunicom.cn  联通 CUII
                                              230.82 ms
8   218.105.131.197 AS9929   [CNC-BACKBONE]   中国 广东 广州  chinaunicom.cn  联通 CUII
                                              247.89 ms
9   *
10  202.97.55.57    AS4134   [CHINANET-BB]    中国 上海   chinatelecom.com.cn  电信
                                              152.16 ms
11  *
12  *
13  *
14  59.36.216.1     AS4134                    中国 广东 江门市  chinatelecom.com.cn  电信
                                              163.48 ms

No:2/9 Traceroute to 中国 上海 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3031::6815:28b0] - 26.56ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes packets
1   23.165.248.1    AS8796                    美国 州 法兰克福  rhinocloud.uk 
                                              6.04 ms
2   *
3   192.168.236.22  *                         RFC1918          
                                              0.54 ms
4   192.168.220.226 *                         RFC1918          
                                              2.05 ms
5   162.219.85.85   AS10099  [CUG-BACKBONE]   美国 加利福尼亚 洛杉矶  chinaunicomglobal.com  联通
                                              151.89 ms
6   218.105.2.201   AS9929   [CNC-BACKBONE]   中国 上海   chinaunicom.cn  联通 CUII
                                              232.15 ms
7   218.105.2.205   AS9929   [CNC-BACKBONE]   中国 上海   chinaunicom.cn  联通 CUII
                                              236.58 ms
8   202.97.16.65    AS4134   [CHINANET-BB]    中国 上海   chinatelecom.com.cn  电信
                                              172.03 ms
9   202.97.16.65    AS4134   [CHINANET-BB]    中国 上海   chinatelecom.com.cn  电信
                                              172.39 ms
10  202.97.87.125   AS4134   [CHINANET-BB]    中国 上海   chinatelecom.com.cn  电信
                                              174.58 ms
11  *
12  *
13  *
14  101.226.41.65   AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              170.48 ms

No:3/9 Traceroute to 中国 北京 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 35.07ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes packets
1   *
2   *
3   192.168.236.20  *                         RFC1918          
                                              0.67 ms
4   162.219.85.85   AS10099  [CUG-BACKBONE]   美国 加利福尼亚 洛杉矶  chinaunicomglobal.com  联通
                                              151.94 ms
5   162.219.85.5    AS10099  [CUG-BACKBONE]   中国 上海   chinaunicomglobal.com  联通
                                              234.85 ms
6   218.105.2.93    AS9929   [CNC-BACKBONE]   中国 上海   chinaunicom.cn  联通 CUII
                                              232.48 ms
7   218.105.131.101 AS9929   [CNC-BACKBONE]   中国 北京   chinaunicom.cn  联通 CUII
                                              229.49 ms
8   218.105.131.125 AS9929   [CNC-BACKBONE]   中国 北京   chinaunicom.cn  联通 CUII
                                              232.95 ms
9   *
10  202.97.74.225   AS4134   [CHINANET-BB]    中国 北京   chinatelecom.com.cn  电信
                                              167.00 ms
11  *
12  *
13  36.110.246.217  AS23724                   中国 北京   bjtelecom.net  电信
                                              169.42 ms
14  *
15  220.181.53.1    AS23724  [CHINANET-IDC]   中国 北京   bjtelecom.net  电信
                                              167.91 ms

No:4/9 Traceroute to 中国 广州 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 26.53ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes packets
1   23.165.248.1    AS8796                    美国 州 法兰克福  rhinocloud.uk 
                                              4.95 ms
2   *
3   192.168.236.22  *                         RFC1918          
                                              0.92 ms
4   192.168.220.226 *                         RFC1918          
                                              0.62 ms
5   162.219.85.1    AS10099  [CUG-BACKBONE]   中国 上海   chinaunicomglobal.com  联通
                                              236.28 ms
6   218.105.2.201   AS9929   [CNC-BACKBONE]   中国 上海   chinaunicom.cn  联通 CUII
                                              230.99 ms
7   218.105.2.205   AS9929   [CNC-BACKBONE]   中国 上海   chinaunicom.cn  联通 CUII
                                              236.59 ms
8   218.105.131.197 AS9929   [CNC-BACKBONE]   中国 广东 广州  chinaunicom.cn  联通 CUII
                                              248.00 ms
9   219.158.32.17   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              166.15 ms
10  219.158.103.173 AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              159.43 ms
11  219.158.103.173 AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              158.88 ms
12  120.83.0.62     AS17816  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              155.19 ms
13  120.80.169.118  AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              169.09 ms
14  *
15  *
16  *
17  *
18  *
19  *
20  *
21  *
22  *
23  *
24  *
25  *
26  *
27  *
28  *
29  *
30  *

No:5/9 Traceroute to 中国 上海 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3031::6815:28b0] - 32.60ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes packets
1   23.165.248.1    AS8796                    美国 州 法兰克福  rhinocloud.uk 
                                              6.83 ms
2   *
3   192.168.236.20  *                         RFC1918          
                                              1.09 ms
4   162.219.85.85   AS10099  [CUG-BACKBONE]   美国 加利福尼亚 洛杉矶  chinaunicomglobal.com  联通
                                              152.13 ms
5   162.219.85.1    AS10099  [CUG-BACKBONE]   中国 上海   chinaunicomglobal.com  联通
                                              236.00 ms
6   218.105.2.93    AS9929   [CNC-BACKBONE]   中国 上海   chinaunicom.cn  联通 CUII
                                              232.71 ms
7   218.105.2.174   AS9929   [CNC-BACKBONE]   中国 上海   chinaunicom.cn  联通 CUII
                                              234.32 ms
8   218.105.2.150   AS9929   [CNC-BACKBONE]   中国 上海   chinaunicom.cn  联通 CUII
                                              236.20 ms
9   *
10  *
11  *
12  210.22.66.178   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              156.55 ms
13  112.65.95.129   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              160.11 ms

No:6/9 Traceroute to 中国 北京 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 34.79ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes packets
1   *
2   *
3   192.168.236.20  *                         RFC1918          
                                              13.23 ms
4   162.219.85.85   AS10099  [CUG-BACKBONE]   美国 加利福尼亚 洛杉矶  chinaunicomglobal.com  联通
                                              151.87 ms
5   162.219.85.5    AS10099  [CUG-BACKBONE]   中国 上海   chinaunicomglobal.com  联通
                                              234.69 ms
6   203.160.75.218  AS10099  [CUG-BACKBONE]   中国 上海   chinaunicomglobal.com  联通
                                              235.92 ms
7   218.105.2.89    AS9929   [CNC-BACKBONE]   中国 上海   chinaunicom.cn  联通 CUII
                                              229.50 ms
8   218.105.131.125 AS9929   [CNC-BACKBONE]   中国 北京   chinaunicom.cn  联通 CUII
                                              233.02 ms
9   210.78.30.142   *        [CNC-BACKBONE]   中国 北京   chinaunicom.cn  联通 CUII
                                              233.00 ms
10  *
11  *
12  *
13  *
14  61.49.140.217   AS4808                    中国 北京   chinaunicom.cn  联通
                                              172.60 ms

No:7/9 Traceroute to 中国 深圳 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 36.99ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 120.233.53.1, 30 hops max, 52 bytes packets
1   *
2   *
3   192.168.236.20  *                         RFC1918          
                                              0.67 ms
4   223.120.201.48  AS58807  [CMIN2-NET]      美国 加利福尼亚 洛杉矶  cmi.chinamobile.com  移动
                                              0.73 ms
5   223.120.201.48  AS58807  [CMIN2-NET]      美国 加利福尼亚 洛杉矶  cmi.chinamobile.com  移动
                                              0.84 ms
6   223.120.197.5   AS58807  [CMIN2-NET]      美国 加利福尼亚 洛杉矶  cmi.chinamobile.com  移动
                                              127.12 ms
7   221.183.92.117  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              127.68 ms
8   221.183.87.245  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              126.29 ms
9   221.183.87.226  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              128.05 ms
10  221.183.87.222  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              128.16 ms
11  111.24.5.22     AS9808   [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              169.40 ms
12  *
13  183.235.226.189 AS56040  [APNIC-AP]       中国 广东 广州  chinamobile.com  移动
                                              159.71 ms
14  120.233.53.1    AS56040  [APNIC-AP]       中国 广东 深圳  chinamobile.com  移动
                                              164.97 ms

No:8/9 Traceroute to 中国 上海 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 29.27ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes packets
1   23.165.248.1    AS8796                    美国 州 法兰克福  rhinocloud.uk 
                                              4.85 ms
2   *
3   192.168.236.22  *                         RFC1918          
                                              1.87 ms
4   192.168.235.226 *                         RFC1918          
                                              0.86 ms
5   223.120.201.48  AS58807  [CMIN2-NET]      美国 加利福尼亚 洛杉矶  cmi.chinamobile.com  移动
                                              8.50 ms
6   223.120.161.5   AS58807  [CMIN2-NET]      中国 上海   cmi.chinamobile.com  移动
                                              126.49 ms
7   223.120.161.5   AS58807  [CMIN2-NET]      中国 上海   cmi.chinamobile.com  移动
                                              126.26 ms
8   221.183.87.217  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              127.66 ms
9   221.183.87.217  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              127.81 ms
10  *
11  111.24.4.102    AS9808   [CMNET]          中国 广东 广州  chinamobile.com 
                                              128.69 ms
12  117.185.10.94   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              129.75 ms
13  183.194.216.129 AS9808   [APNIC-AP]       中国 上海   chinamobile.com  移动
                                              129.29 ms

No:9/9 Traceroute to 中国 北京 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 27.92ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes packets
1   *
2   *
3   192.168.236.22  *                         RFC1918          
                                              0.90 ms
4   223.120.201.48  AS58807  [CMIN2-NET]      美国 加利福尼亚 洛杉矶  cmi.chinamobile.com  移动
                                              0.70 ms
5   223.120.197.5   AS58807  [CMIN2-NET]      美国 加利福尼亚 洛杉矶  cmi.chinamobile.com  移动
                                              126.79 ms
6   223.120.161.5   AS58807  [CMIN2-NET]      中国 上海   cmi.chinamobile.com  移动
                                              126.42 ms
7   221.183.92.121  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              126.31 ms
8   221.183.87.245  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              126.45 ms
9   221.183.87.222  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              128.39 ms
10  221.183.87.226  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              127.96 ms
11  111.24.2.141    AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              152.85 ms
12  *
13  *
14  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              153.06 ms
15  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              152.96 ms
16  *
17  *
18  211.136.25.153  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              152.72 ms
```

### byte-unixbench 性能测试

```
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat.blog: GNU/Linux
   OS: GNU/Linux -- 6.1.46-x64v4-xanmod1 -- #0~20230816.g11dcd23 SMP PREEMPT_DYNAMIC Thu Aug 17 03:15:33 UTC
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD Ryzen 9 7950X 16-Core Processor (8983.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD Ryzen 9 7950X 16-Core Processor (8983.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   13:02:20 up 8 days,  2:07,  1 user,  load average: 0.09, 0.14, 0.19; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sat Jan 13 2024 13:02:20 - 13:30:14
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       75162471.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    12193.2 MWIPS (9.9 s, 7 samples)
Execl Throughput                               4548.0 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        912540.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          239411.7 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2456868.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1631103.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 220061.3 lps   (10.0 s, 7 samples)
Process Creation                              11304.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  14498.2 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   2630.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        1460688.3 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   75162471.5   6440.7
Double-Precision Whetstone                       55.0      12193.2   2216.9
Execl Throughput                                 43.0       4548.0   1057.7
File Copy 1024 bufsize 2000 maxblocks          3960.0     912540.8   2304.4
File Copy 256 bufsize 500 maxblocks            1655.0     239411.7   1446.6
File Copy 4096 bufsize 8000 maxblocks          5800.0    2456868.8   4236.0
Pipe Throughput                               12440.0    1631103.2   1311.2
Pipe-based Context Switching                   4000.0     220061.3    550.2
Process Creation                                126.0      11304.7    897.2
Shell Scripts (1 concurrent)                     42.4      14498.2   3419.4
Shell Scripts (8 concurrent)                      6.0       2630.7   4384.5
System Call Overhead                          15000.0    1460688.3    973.8
                                                                   ========
System Benchmarks Index Score                                        1885.2

------------------------------------------------------------------------
Benchmark Run: Sat Jan 13 2024 13:30:14 - 13:58:11
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      143405916.2 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    24240.2 MWIPS (9.9 s, 7 samples)
Execl Throughput                               8094.2 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1761132.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          413998.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3873995.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3214107.5 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 494032.3 lps   (10.0 s, 7 samples)
Process Creation                              22394.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  20219.0 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   2587.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        2879556.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  143405916.2  12288.4
Double-Precision Whetstone                       55.0      24240.2   4407.3
Execl Throughput                                 43.0       8094.2   1882.4
File Copy 1024 bufsize 2000 maxblocks          3960.0    1761132.2   4447.3
File Copy 256 bufsize 500 maxblocks            1655.0     413998.8   2501.5
File Copy 4096 bufsize 8000 maxblocks          5800.0    3873995.1   6679.3
Pipe Throughput                               12440.0    3214107.5   2583.7
Pipe-based Context Switching                   4000.0     494032.3   1235.1
Process Creation                                126.0      22394.2   1777.3
Shell Scripts (1 concurrent)                     42.4      20219.0   4768.6
Shell Scripts (8 concurrent)                      6.0       2587.2   4312.0
System Call Overhead                          15000.0    2879556.7   1919.7
                                                                   ========
System Benchmarks Index Score                                        3304.6

======= Script description and score comparison completed! =======

 
```

### 硬盘读写测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/12/image-13.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/12/image-13.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/12/image-13.jpg" alt="" loading="lazy">
</picture>
