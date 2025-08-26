---
title: "Vebble 新加坡 AMD  测评"
published: 2024-02-12
categories: 
  - "sg-server"
  - "vps"
---

之前论坛送的一款机器，现在应该活动已经没了。WebHorizon的下游应该是，由于免费一个月，体验估计目前很烂。联通黑户，一律连不上。现在商家的官网做的是真好看，比起千篇一律的whmcs舒服多了。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-10.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-10.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-10.jpg" alt="" loading="lazy">
</picture>

## 测评

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 1 minutes
Processor  : AMD EPYC-Milan Processor
CPU cores  : 4 @ 2245.780 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 7.7 GiB
Swap       : 0.0 KiB
Disk       : 119.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : WebHorizon Internet Services
ASN        : AS149020 WebHorizon Internet Services
Host       : WebHorizon IT Broadband Limited
Location   : Singapore, North West (03)
Country    : Singapore

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 69.77 MB/s   (17.4k) | 475.59 MB/s   (7.4k)
Write      | 69.95 MB/s   (17.4k) | 478.09 MB/s   (7.4k)
Total      | 139.72 MB/s  (34.9k) | 953.68 MB/s  (14.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 716.04 MB/s   (1.3k) | 1.21 GB/s     (1.1k)
Write      | 754.09 MB/s   (1.4k) | 1.29 GB/s     (1.2k)
Total      | 1.47 GB/s     (2.8k) | 2.51 GB/s     (2.4k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 465 Mbits/sec   | 509 Mbits/sec   | 299 ms         
Scaleway        | Paris, FR (10G)           | busy            | busy            | 310 ms         
NovoServe       | North Holland, NL (40G)   | 459 Mbits/sec   | 464 Mbits/sec   | 305 ms         
Uztelecom       | Tashkent, UZ (10G)        | 558 Mbits/sec   | 894 Mbits/sec   | 306 ms         
Clouvider       | NYC, NY, US (10G)         | 604 Mbits/sec   | 695 Mbits/sec   | 233 ms         
Clouvider       | Dallas, TX, US (10G)      | 698 Mbits/sec   | 457 Mbits/sec   | 226 ms         
Clouvider       | Los Angeles, CA, US (10G) | 955 Mbits/sec   | 739 Mbits/sec   | 203 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | busy            | 531 Mbits/sec   | 300 ms         
Scaleway        | Paris, FR (10G)           | 310 Mbits/sec   | busy            | 303 ms         
NovoServe       | North Holland, NL (40G)   | 353 Mbits/sec   | 498 Mbits/sec   | 305 ms         
Uztelecom       | Tashkent, UZ (10G)        | busy            | 505 Mbits/sec   | 305 ms         
Clouvider       | NYC, NY, US (10G)         | busy            | 707 Mbits/sec   | 233 ms         
Clouvider       | Dallas, TX, US (10G)      | 680 Mbits/sec   | 740 Mbits/sec   | 226 ms         
Clouvider       | Los Angeles, CA, US (10G) | 784 Mbits/sec   | 849 Mbits/sec   | 202 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1529                          
Multi Core      | 4893                          
Full Test       | https://browser.geekbench.com/v6/cpu/4858304
```

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC-Milan Processor
 CPU 核心数        : 4
 CPU 频率          : 2245.780 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 2.00 MB / L3: 128.00 MB
 硬盘空间          : 2.67 GiB / 119.82 GiB
 启动盘路径        : /dev/sda3
 内存              : 304.52 MiB / 7.72 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 1 days, 0 hour 32 min
 负载              : 0.11, 0.14, 0.07
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS149020 WebHorizon Internet Services
 IPV4 位置         : Singapore / Singapore / SG
 IPV6 ASN          : AS149020 WebHorizon Internet Services
 IPV6 位置         : United States
 IPV6 子网掩码     : 56
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          3620 Scores
 4 线程测试(多核)得分:          14463 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          43418.46 MB/s
 单线程写测试:          25610.95 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         26.1 MB/s (6374 IOPS, 4.02s)            100 MB/s (24509 IOPS, 1.04s)
 1GB-1M Block           143 MB/s (137 IOPS, 7.32s)              4.3 GB/s (4114 IOPS, 0.24s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 73.75 MB/s   (18.4k) | 328.87 MB/s   (5.1k)
Write      | 73.95 MB/s   (18.4k) | 330.60 MB/s   (5.1k)
Total      | 147.70 MB/s  (36.9k) | 659.48 MB/s  (10.3k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 514.83 MB/s   (1.0k) | 1.26 GB/s     (1.2k)
Write      | 542.19 MB/s   (1.0k) | 1.35 GB/s     (1.3k)
Total      | 1.05 GB/s     (2.0k) | 2.62 GB/s     (2.5k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN11S18)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  洛杉机(LAX31S13)
Youtube识别地域: 新加坡(SG)
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
区域：新加坡区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：新加坡区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: DE)
 HotStar:                               Yes (Region: SG)
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes
 Amazon Prime Video:                    Yes (Region: SG)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   SG
 Viu.com:                               No
 YouTube CDN:                           Singapore 
 Netflix Preferred CDN:                 Singapore  
 Spotify Registration:                  Yes (Region: DE)
 Steam Currency:                        EUR
 ChatGPT:                               Yes
 Bing Region:                           DE
 Instagram Licensed Audio:              No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               Yes (Region: SG)
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: SG)
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           Los Angeles, CA 
 Netflix Preferred CDN:                 Singapore  
 Spotify Registration:                  Yes (Region: US)
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           SG
 Instagram Licensed Audio:              Yes
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【DE】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):isp①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
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
Google搜索可行性：YES
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: SG 城市: Singapore 服务商: AS149020 WebHorizon Internet Services
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    电信163 [普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     电信163 [普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    电信163 [普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       电信163 [普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.16 ms  AS149020  新加坡, zappiehost.com
0.40 ms  AS140627  澳大利亚, cloudinnovation.org
68.88 ms  AS140627  中国, 香港, oneqode.com.au
70.29 ms  *  中国, chinatelecom.com.cn, 电信
70.16 ms  *  中国, 香港, chinatelecom.com.cn, 电信
184.35 ms  *  中国, 香港, chinatelecom.com.cn, 电信
184.98 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
200.66 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
188.89 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.19 ms  AS149020  新加坡, zappiehost.com
0.30 ms  AS140627  澳大利亚, cloudinnovation.org
64.98 ms  AS140627  关岛, oneqode.com.au
107.23 ms  AS140627  中国, 香港, oneqode.com.au
108.39 ms  *  中国, chinatelecom.com.cn, 电信
108.67 ms  *  中国, 香港, chinatelecom.com.cn, 电信
217.48 ms  *  中国, 香港, chinatelecom.com.cn, 电信
226.12 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
226.00 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
广州移动 120.196.165.24
0.23 ms  AS149020  新加坡, zappiehost.com
0.32 ms  AS140627  澳大利亚, cloudinnovation.org
68.86 ms  AS140627  中国, 香港, oneqode.com.au
69.84 ms  AS58453  中国, 香港, chinamobile.com, 移动
69.34 ms  AS58453  中国, 香港, chinamobile.com, 移动
75.43 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
77.39 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
77.39 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
43.71 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
45.66 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
44.65 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    372.90 Mbps     2528.18 Mbps    236.87   0.0%
中国香港         45.40 Mbps      3.90 Mbps       70.34    NULL
日本东京         535.23 Mbps     3314.68 Mbps    176.50   NULL
联通北京         367.54 Mbps     205.21 Mbps     337.53   NULL
电信合肥5G       6.30 Mbps       7.09 Mbps       190.32   0.0%
电信浙江         35.47 Mbps      1403.36 Mbps    193.10   NULL
移动杭州         0.00 Mbps       0.00 Mbps       101.64       
------------------------------------------------------------------------
```

### Geekbench 5 专测

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         QEMU Standard PC (Q35 + ICH9, 2009)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.2-debian-1.16.2-1

处理器信息
  Name                          AMD EPYC-Milan Processor
  Topology                      4 Processors, 4 Cores
  Identifier                    AuthenticAMD Family 25 Model 1 Stepping 1
  Base Frequency                2.25 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      512 KB
  L3 Cache                      32.0 MB

内存信息
  Size                          7.72 GB

单核测试分数：1110
多核测试分数：3871
详细结果链接：https://browser.geekbench.com/v5/cpu/22218929
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC-Milan
```

### Bench

```
----------------------------------------------------------------------
 CPU Model          : AMD EPYC-Milan Processor
 CPU Cores          : 4 @ 2245.780 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✗ Disabled
 Total Disk         : 119.9 GB (2.7 GB Used)
 Total Mem          : 7.7 GB (381.4 MB Used)
 System uptime      : 1 days, 0 hour 45 min
 Load average       : 0.36, 0.30, 0.17
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS149020 WebHorizon Internet Services
 Location           : Singapore / SG
 Region             : Singapore
----------------------------------------------------------------------
 I/O Speed(1st run) : 114 MB/s
 I/O Speed(2nd run) : 331 MB/s
 I/O Speed(3rd run) : 354 MB/s
 I/O Speed(average) : 266.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    417.75 Mbps       3693.39 Mbps        213.97 ms   
 Los Angeles, US  433.57 Mbps       4517.36 Mbps        174.44 ms   
 Dallas, US       442.91 Mbps       3920.75 Mbps        201.88 ms   
 Montreal, CA     126.63 Mbps       920.13 Mbps         242.53 ms   
 Paris, FR        248.47 Mbps       2159.53 Mbps        306.54 ms   
 Amsterdam, NL    294.15 Mbps       1081.20 Mbps        225.67 ms   
 Hongkong, CN     493.38 Mbps       5312.13 Mbps        71.11 ms    
 Mumbai, IN       246.76 Mbps       1626.56 Mbps        413.88 ms   
 Singapore, SG    9289.35 Mbps      4447.06 Mbps        1.04 ms     
 Tokyo, JP        361.90 Mbps       3677.13 Mbps        215.17 ms   
----------------------------------------------------------------------
```
