---
title: "Faconhost 新加坡 CN2 测评"
published: 2024-04-27
categories: 
  - "sg-server"
  - "vps"
---

- **高严格 TOS，不建议购买！！！避坑！！！**

Faconhost新上新加坡节点，Alpha测试版。综合来讲，还是熟悉的味道，熟悉的配方，还是我们的老朋友Xtom。价格倒是比xtom便宜不少，xtom的入门版本就需要199美元，这边119英镑折算成美元大概149美元的样子，小胜一筹。**此次测试为Alpha，可能和正式上线存在差异**。目前三网都走cn2。

先行版计划已下架。

## 套餐配置（已下架）

- CPU：2核AMD EPYC 7282

- 内存：2GB

- 硬盘：40GB NVMe

- 流量：400GB

- 带宽：1Gbps

价格：119英镑/年，约合人民币1077元

计划内容：

| **名称** | **CPU** | **RAM** | **硬盘** | **网络** | **价格** | **购买** |
| --- | --- | --- | --- | --- | --- | --- |
| Singapore-2G-Alpha version | 2 vCORES EPYC CPU | 2G RAM | 40G NVMe SSD | 400GB/M@1Gbps | £119.00 GBP | [链接](https://client.faconhost.com/order/main/packages/sg-nvme/?group_id=6)(无AFF)(已下架) |

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-10.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-10.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-10.jpg" alt="" loading="lazy">
</picture>

## **新加坡VPS销售计划**

计划内容（**均无AFF**）

| **名称** | **CPU** | **RAM** | **硬盘** | **网络** | **价格** | **购买** |
| --- | --- | --- | --- | --- | --- | --- |
| Singapore-Silver-2G | 2 vCORES EPYC CPU | 2G RAM | 30G NVMe SSD | 300GB/M@500Mbps | £55.90 GBP/季 & £139.90 GBP/年 | [链接](https://client.faconhost.com/order/main/packages/sg-nvme/?group_id=6) |
| Singapore-Gold-4G | 4 vCORES EPYC CPU | 4G RAM | 50G NVMe SSD | 600GB/M@500Mbps | £90.5 GBP/季 & £237.90 GBP/年 | [链接](https://client.faconhost.com/order/main/packages/sg-nvme/?group_id=6) |
| Singapore-Platinum-8G | 8 vCORES EPYC CPU | 8G RAM | 100G NVMe SSD | 1000GB/M@1Gbps | £180.9 GBP/季 & £472.90 GBP/年 | [链接](https://client.faconhost.com/order/main/packages/sg-nvme/?group_id=6) |

我们预计5月1日正式开始销售新加坡VPS产品，同时我们将下架**新加坡VPS先行探索计划**。

IPv6已分配，购买**新加坡VPS先行探索计划**的客户，可以尝试重建实例，系统将自动为您的实例分配/64子网的IPV6。

### 注意事项

**关于客户使用PayPal的注意事项：对于最近PayPal不断抽查我们的企业账户，并通过抽样的方式要求我们上传与客户的所有交易往来信息，包括客户的注册信息、我们向供应商购买信息、我们向客户交付信息等。为了保障双方的利益，对于使用PayPal购买我们产品的客户，请务必预留在我们计费面板的信息与您PayPal预留的信息一致，包括不限于姓名、邮箱、地址等，对于信息不符合的客户，我们有权随时终止合同，退还您的款项，删除已开通的实例，同时客户须支付PayPal网关的手续费。**

## Alpha测试说明

> 目前IPv6还在广播中，需要在新加坡工作日后添加完毕。

> 探索前期，SLA得不到保障，我们可能会根据监控来调节我们节点服务器，这可能会重启节点服务器，甚至重建整个节点服务器，在我们向您致信节点已稳定之前，请勿存放重要数据。

> 我们的IP刚刚广播到新加坡，IP geolocation尚未更新，不会识别为新加坡。

> 我们接入中国电信CN2网络，但是网络及路由尚在调优，可能会有网络波动等情况。

## 测评

### Yabs

```

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 40 minutes
Processor  : AMD EPYC 7282 16-Core Processor
CPU cores  : 2 @ 2794.750 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 0.0 KiB
Disk       : 39.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Xnnet LLC
ASN        : Unknown
Host       : Xnnet LLC
Location   : Osaka, Ōsaka (27)
Country    : Japan

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 164.04 MB/s  (41.0k) | 1.87 GB/s    (29.3k)
Write      | 164.47 MB/s  (41.1k) | 1.88 GB/s    (29.4k)
Total      | 328.52 MB/s  (82.1k) | 3.76 GB/s    (58.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.22 GB/s     (4.3k) | 2.33 GB/s     (2.2k)
Write      | 2.33 GB/s     (4.5k) | 2.49 GB/s     (2.4k)
Total      | 4.55 GB/s     (8.9k) | 4.83 GB/s     (4.7k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1274                          
Multi Core      | 2211                          
Full Test       | https://browser.geekbench.com/v6/cpu/5879625

YABS completed in 8 min 19 sec
```

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7282 16-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 2794.750 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 1.00 MB / L3: 128.00 MB
 硬盘空间          : 2.71 GiB / 39.82 GiB
 启动盘路径        : /dev/sda3
 内存              : 301.50 MiB / 1.89 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 7 hour 49 min
 负载              : 0.07, 0.02, 0.03
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS23858 xTom
 IPV4 位置         : Osaka / Ōsaka / JP
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          1578 Scores
 2 线程测试(多核)得分:          3152 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          42178.95 MB/s
 单线程写测试:          19053.47 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         20.7 MB/s (5055 IOPS, 5.06s)            21.6 MB/s (5278 IOPS, 4.85s)
 1GB-1M Block           1.1 GB/s (1063 IOPS, 0.94s)             1.1 GB/s (1081 IOPS, 0.93s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 146.33 MB/s  (36.5k) | 1.95 GB/s    (30.4k)
Write      | 146.72 MB/s  (36.6k) | 1.96 GB/s    (30.6k)
Total      | 293.06 MB/s  (73.2k) | 3.91 GB/s    (61.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.29 GB/s     (4.4k) | 2.45 GB/s     (2.3k)
Write      | 2.41 GB/s     (4.7k) | 2.62 GB/s     (2.5k)
Total      | 4.70 GB/s     (9.1k) | 5.07 GB/s     (4.9k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
Youtube识别地域: 日本(JP)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：日本
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：日本区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: JP)
 HotStar:                               No
 Disney+:                               No
 Netflix:                               Yes (Region: JP)
 YouTube Premium:                       Yes (Region: JP)
 Amazon Prime Video:                    Yes (Region: JP)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   JP
 Viu.com:                               No
 YouTube CDN:                           Tokyo 
 Netflix Preferred CDN:                 Seattle, WA  
 Spotify Registration:                  Yes (Region: JP)
 Steam Currency:                        SGD
 ChatGPT:                               Yes
 Bing Region:                           JP
 Instagram Licensed Audio:              Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【JP】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  ① | scamalytics数据库 ②  | virustotal数据库  ③ | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库  ⑥ | ipwhois数据库     ⑦  | ipregistry数据库  ⑧ | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
ipapiis数据库 ⑪ | ipapicom数据库    ⑫  | abstractapi数据库 ⑬ | ipqualityscore数据库 ⑭ 
欺诈分数(越低越好): 0⑤  abuse得分(越低越好): 0⑤  0 (Very Low)⑪  威胁等级: low②  
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  business⑪  
  公司类型(company_type):isp①  hosting⑧  business⑪  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  No⑥ ⑨   Yes⑪ 
  移动网络(mobile):  No⑥ ⑪ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ 
  VPN(vpn):  No① ② ⑦ ⑧ ⑪ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ ⑪ ⑫ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ ⑪ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ ⑪ 
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: JP 城市: Osaka 服务商: AS23858 xTom
北京电信 219.141.136.12  电信CN2 [优质线路]           
北京联通 202.106.50.1    电信CN2 [优质线路]           
北京移动 221.179.155.161 电信CN2 [优质线路]           
上海电信 202.96.209.133  电信CN2 [优质线路]           
上海联通 210.22.97.1     电信CN2 [优质线路]           
上海移动 211.136.112.200 电信CN2 [优质线路]           
广州电信 58.60.188.222   电信CN2 [优质线路]           
广州联通 210.21.196.6    电信CN2 [优质线路]           
广州移动 120.196.165.24  电信CN2 [优质线路]           
成都电信 61.139.2.69     电信CN2 [优质线路]           
成都联通 119.6.6.6       电信CN2 [优质线路]           
成都移动 211.137.96.205  电信CN2 [优质线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
15.02 ms  AS4785,AS8888,AS23858  新加坡, xtom.com
16.23 ms  AS23858  新加坡, xtom.com
1.31 ms  AS23764  新加坡, chinatelecom.com.cn, 电信
1.09 ms  AS23764  新加坡, chinatelecom.com.cn, 电信
1.81 ms  *  亚太地区, chinatelecom.com.cn, 电信
38.96 ms  *  新加坡, chinatelecom.com.cn, 电信
45.71 ms  *  中国, 广东, 深圳, chinatelecom.com.cn, 电信
46.16 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
45.01 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
21.66 ms  AS4785,AS8888,AS23858  新加坡, xtom.com
7.68 ms  AS23858  新加坡, xtom.com
0.59 ms  AS23764  新加坡, chinatelecom.com.cn, 电信
1.21 ms  AS23764  新加坡, chinatelecom.com.cn, 电信
0.76 ms  *  新加坡, chinatelecom.com.cn, 电信
37.61 ms  *  新加坡, chinatelecom.com.cn, 电信
42.74 ms  *  中国, 广东, 广州, chinatelecom.com.cn, 电信
43.75 ms  *  中国, 广东, 广州, chinatelecom.com.cn, 电信
87.27 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
95.26 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
96.52 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
90.05 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
15.03 ms  AS4785,AS8888,AS23858  新加坡, xtom.com
4.40 ms  AS23858  新加坡, xtom.com
0.36 ms  AS23764  新加坡, chinatelecom.com.cn, 电信
1.27 ms  AS23764  新加坡, chinatelecom.com.cn, 电信
1.34 ms  *  新加坡, chinatelecom.com.cn, 电信
38.76 ms  *  新加坡, chinatelecom.com.cn, 电信
40.60 ms  *  中国, 广东, 广州, chinatelecom.com.cn, 电信
43.28 ms  *  中国, 广东, 广州, chinatelecom.com.cn, 电信
41.79 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
65.59 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
73.11 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
72.24 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
71.48 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    488.56 Mbps     2174.87 Mbps    69.77    26.7%
中国香港         573.00 Mbps     478.67 Mbps     42.01    NULL
日本东京         1020.54 Mbps    5404.55 Mbps    77.21    0.0%
联通上海5G       23.12 Mbps      1089.00 Mbps    91.27    NULL
联通WuXi         2195.37 Mbps    2247.86 Mbps    98.30    0.0%
电信浙江         1288.82 Mbps    2385.50 Mbps    67.48    NULL
电信Suzhou5G     2414.29 Mbps    2662.16 Mbps    62.45    NULL
移动Beijing      1179.47 Mbps    1544.76 Mbps    85.49    NULL
------------------------------------------------------------------------
 总共花费      : 7 分 22 秒
 时间          : Sat Apr 27 14:53:58 BST 2024
------------------------------------------------------------------------
```

### 多地回程测试

```
No:1/9 Traceroute to 中国 深圳 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 104.21.40.176 - 768.55ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes packets
1   45.135.40.1     AS23858                   日本 大阪府 大阪  xtom.com 
                                              8.47 ms
2   185.248.87.238  AS23858                   新加坡    xtom.com 
                                              10.95 ms
3   *
4   121.59.124.97   AS23764  [CN2-BB]         新加坡    chinatelecomglobal.com  电信
                                              0.77 ms
5   69.194.166.21   AS23764                   新加坡    chinatelecomglobal.com  电信
                                              0.65 ms
6   203.22.180.102  *        [CTG-CN]         新加坡    CTGNet
                                              37.61 ms
7   *
8   59.43.130.161   *        [CN2-BackBone]   中国 广东 广州  chinatelecom.cn  电信
                                              47.58 ms
9   202.97.43.77    AS4134   [CHINANET-BB]    中国 广东 广州  chinatelecom.com.cn  电信
                                              41.36 ms
10  *
11  119.147.61.150  AS4134   [CHINANET-GD]    中国 广东 深圳 福田 chinatelecom.com.cn  电信
                                              46.65 ms
12  59.36.216.1     AS4134                    中国 广东 江门市  chinatelecom.com.cn  电信
                                              46.44 ms

No:2/9 Traceroute to 中国 上海 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 104.21.40.176 - 207.94ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes packets
1   45.135.40.1     AS23858                   日本 大阪府 大阪  xtom.com 
                                              3.41 ms
2   185.248.87.238  AS23858                   新加坡    xtom.com 
                                              6.30 ms
3   *
4   121.59.124.97   AS23764  [CN2-BB]         新加坡    chinatelecomglobal.com  电信
                                              0.96 ms
5   69.194.169.149  *                         新加坡          
                                              1.81 ms
6   203.22.180.98   *        [CTG-CN]         新加坡    CTGNet
                                              38.85 ms
7   *
8   59.43.130.109   *        [CN2-BackBone]   中国 广东 广州  chinatelecom.cn  电信
                                              43.62 ms
9   59.43.46.77     *        [CN2-BackBone]   中国 上海   chinatelecom.cn  电信
                                              66.22 ms
10  61.152.24.190   AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              66.59 ms
11  *
12  *
13  101.226.41.65   AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              65.83 ms

No:3/9 Traceroute to 中国 北京 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 104.21.40.176 - 146.17ms - Misaka.HKG
{"error":"Challenge does not exist or has expired"}

RetToken failed 3 times, please try again after a while, exit

No:4/9 Traceroute to 中国 广州 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 172.67.155.192 - 145.27ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes packets
1   45.135.40.1     AS23858                   日本 大阪府 大阪  xtom.com 
                                              9.70 ms
2   185.248.87.238  AS23858                   新加坡    xtom.com 
                                              6.10 ms
3   *
4   121.59.124.97   AS23764  [CN2-BB]         新加坡    chinatelecomglobal.com  电信
                                              1.21 ms
5   69.194.166.21   AS23764                   新加坡    chinatelecomglobal.com  电信
                                              0.64 ms
6   203.22.180.102  *        [CTG-CN]         新加坡    CTGNet
                                              42.31 ms
7   *
8   59.43.16.181    *        [CN2-BackBone]   中国 广东 广州  chinatelecom.cn  电信
                                              43.78 ms
9   219.158.40.169  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              83.75 ms
10  219.158.125.161 AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn 
                                              81.77 ms
11  120.83.0.58     AS17816  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              85.86 ms
12  120.80.79.194   AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              97.89 ms
13  *
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
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 172.67.155.192 - 140.93ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes packets
1   45.135.40.1     AS23858                   日本 大阪府 大阪  xtom.com 
                                              10.52 ms
2   185.248.87.238  AS23858                   新加坡    xtom.com 
                                              2.49 ms
3   *
4   121.59.124.97   AS23764  [CN2-BB]         新加坡    chinatelecomglobal.com  电信
                                              1.18 ms
5   69.194.169.145  *                         新加坡          
                                              3.83 ms
6   203.22.180.98   *        [CTG-CN]         新加坡    CTGNet
                                              39.06 ms
7   *
8   59.43.130.145   *        [CN2-BackBone]   中国 广东 广州  chinatelecom.cn  电信
                                              41.49 ms
9   59.43.137.226   *        [CN2-BackBone]   中国 上海   chinatelecom.cn  电信
                                              66.22 ms
10  219.158.40.173  AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              85.20 ms
11  *
12  139.226.225.186 AS17621  [UNICOM-SH]      中国 上海   chinaunicom.cn  联通
                                              80.49 ms
13  210.22.66.174   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              84.05 ms
14  112.65.95.129   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              92.67 ms

No:6/9 Traceroute to 中国 北京 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 172.67.155.192 - 143.71ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes packets
1   45.135.40.1     AS23858                   日本 大阪府 大阪  xtom.com 
                                              1.89 ms
2   185.248.87.238  AS23858                   新加坡    xtom.com 
                                              7.74 ms
3   *
4   121.59.124.97   AS23764  [CN2-BB]         新加坡    chinatelecomglobal.com  电信
                                              1.05 ms
5   69.194.166.25   AS23764                   新加坡    chinatelecomglobal.com  电信
                                              0.86 ms
6   203.22.180.98   *        [CTG-CN]         新加坡    CTGNet
                                              39.38 ms
7   *
8   59.43.16.165    *        [CN2-BackBone]   中国 广东 广州  chinatelecom.cn  电信
                                              45.27 ms
9   202.97.43.77    AS4134   [CHINANET-BB]    中国 广东 广州  chinatelecom.com.cn  电信
                                              41.87 ms
10  202.97.55.241   AS4134   [CHINANET-BB]    中国 北京   chinatelecom.com.cn  电信
                                              76.93 ms
11  202.97.18.6     AS4134   [CHINANET-BB]    中国 北京   chinatelecom.com.cn  电信
                                              78.48 ms
12  *
13  219.158.110.57  AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              93.63 ms
14  124.65.194.94   AS4808   [UNICOM-BJ]      中国 北京   chinaunicom.cn  联通
                                              93.77 ms
15  *
16  *
17  *
18  *
19  *
20  61.49.140.217   AS4808                    中国 北京   chinaunicom.cn  联通
                                              100.45 ms

No:7/9 Traceroute to 中国 深圳 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 172.67.155.192 - 75.26ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 120.233.53.1, 30 hops max, 52 bytes packets
1   45.135.40.1     AS23858                   日本 大阪府 大阪  xtom.com 
                                              6.15 ms
2   185.248.87.236  AS23858                   新加坡    xtom.com 
                                              9.22 ms
3   *
4   121.59.124.97   AS23764  [CN2-BB]         新加坡    chinatelecomglobal.com  电信
                                              1.20 ms
5   69.194.166.29   AS23764                   新加坡    chinatelecomglobal.com  电信
                                              0.58 ms
6   203.22.180.102  *        [CTG-CN]         新加坡    CTGNet
                                              37.65 ms
7   *
8   59.43.16.165    *        [CN2-BackBone]   中国 广东 广州  chinatelecom.cn  电信
                                              46.71 ms
9   202.97.43.81    AS4134   [CHINANET-BB]    中国 广东 广州  chinatelecom.com.cn  电信
                                              44.16 ms
10  *
11  *
12  *
13  *
14  211.136.204.78  AS56040  [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              68.59 ms
15  211.136.242.182 AS56040  [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              77.56 ms
16  120.233.53.1    AS56040  [APNIC-AP]       中国 广东 深圳  chinamobile.com  移动
                                              75.70 ms

No:8/9 Traceroute to 中国 上海 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 172.67.155.192 - 72.17ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes packets
1   45.135.40.1     AS23858                   日本 大阪府 大阪  xtom.com 
                                              1.61 ms
2   185.248.87.238  AS23858                   新加坡    xtom.com 
                                              11.07 ms
3   *
4   121.59.124.97   AS23764  [CN2-BB]         新加坡    chinatelecomglobal.com  电信
                                              1.16 ms
5   69.194.166.25   AS23764                   新加坡    chinatelecomglobal.com  电信
                                              0.64 ms
6   203.22.180.102  *        [CTG-CN]         新加坡    CTGNet
                                              37.62 ms
7   *
8   *
9   *
10  *
11  *
12  221.183.68.165  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              68.98 ms
13  221.183.90.237  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              67.42 ms
14  *
15  *
16  183.194.216.129 AS9808   [APNIC-AP]       中国 上海   chinamobile.com  移动
                                              65.44 ms

No:9/9 Traceroute to 中国 北京 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 104.21.40.176 - 84.62ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes packets
1   45.135.40.1     AS23858                   日本 大阪府 大阪  xtom.com 
                                              21.92 ms
2   185.248.87.238  AS23858                   新加坡    xtom.com 
                                              5.62 ms
3   *
4   121.59.124.97   AS23764  [CN2-BB]         新加坡    chinatelecomglobal.com  电信
                                              1.04 ms
5   69.194.169.145  *                         新加坡          
                                              1.71 ms
6   203.22.180.102  *        [CTG-CN]         新加坡    CTGNet
                                              37.77 ms
7   *
8   59.43.16.165    *        [CN2-BackBone]   中国 广东 广州  chinatelecom.cn  电信
                                              41.04 ms
9   202.97.43.77    AS4134   [CHINANET-BB]    中国 广东 广州  chinatelecom.com.cn  电信
                                              41.01 ms
10  202.97.55.241   AS4134   [CHINANET-BB]    中国 北京   chinatelecom.com.cn  电信
                                              75.99 ms
11  202.97.74.226   AS4134   [CHINANET-BB]    中国 北京   chinatelecom.com.cn  电信
                                              74.73 ms
12  *
13  221.183.94.25   AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              87.58 ms
14  221.183.76.102  AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              84.58 ms
15  *
16  *
17  211.136.63.66   AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              81.99 ms
18  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              91.44 ms
19  *
20  211.136.25.153  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              80.27 ms
```

### GeekBench5

```

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.2-debian-1.16.2-1

处理器信息
  Name                          AMD EPYC 7282
  Topology                      2 Processors, 2 Cores
  Identifier                    AuthenticAMD Family 23 Model 49 Stepping 0
  Base Frequency                2.79 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      512 KB
  L3 Cache                      64.0 MB

内存信息
  Size                          1.89 GB

单核测试分数：979
多核测试分数：1876
详细结果链接：https://browser.geekbench.com/v5/cpu/22432949
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%207282
```

### 三网测速

```
------------------------------------------------------------------------
测速节点            下载/Mbps      上传/Mbps      延迟/ms      抖动/ms
最近的测速点        3032.36 Mbps   737.72 Mbps    67.46 ms     0.12 ms      
电信 江苏苏州       2019.33 Mbps   1571.03 Mbps   61.95 ms     0.31 ms      
电信 浙江杭州       2650.21 Mbps   1238.22 Mbps   71.49 ms     0.18 ms      
电信 安徽合肥 5G    988.41 Mbps    184.17 Mbps    73.26 ms     2.13 ms      
电信 浙江宁波 5G    2744.92 Mbps   1247.40 Mbps   72.73 ms     0.06 ms      
电信 江苏镇江 5G    2820.64 Mbps   1174.21 Mbps   64.96 ms     0.09 ms      
电信 江苏南京 5G    2528.39 Mbps   74.79 Mbps     65.12 ms     0.10 ms      
移动 北京           2616.38 Mbps   874.14 Mbps    83.91 ms     0.09 ms      
联通 江苏无锡       2285.59 Mbps   1100.64 Mbps   94.42 ms     1.84 ms      
教育网 上海 1       5.53 Mbps      7.51 Mbps      209.18 ms    1.16 ms      
教育网 上海 2       21.94 Mbps     75.40 Mbps     87.00 ms      失败        
教育网 上海 3       70.59 Mbps     137.33 Mbps    131.27 ms    0.28 ms      
教育网 安徽合肥       失败         535.88 Mbps    64.27 ms     0.22 ms      
教育网 辽宁沈阳       失败         14.15 Mbps     85.09 ms     0.20 ms      
教育网 江苏南京 1   387.64 Mbps    403.32 Mbps    85.36 ms     0.59 ms      
教育网 江苏南京 2   89.67 Mbps     34.76 Mbps     105.73 ms    5.34 ms      
------------------------------------------------------------------------
系统时间：2024-04-27 15:22:08 BST
北京时间: 2024-04-27 22:22:08 CST
------------------------------------------------------------------------
```

### 国内检测

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-9.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-9.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-9.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-11.jpg" alt="" loading="lazy">
</picture>

### 回程测试

```
root@yuri-ly:~# curl https://raw.githubusercontent.com/ludashi2020/backtrace/main/install.sh -sSf | sh
2024/04/27 21:10:12 项目地址：github.com/zhanghanyun/backtrace
2024/04/27 21:10:12 正在测试三网回程路由...
2024/04/27 21:10:13 北京电信 219.141.136.12  电信CN2 [优质线路]
2024/04/27 21:10:13 北京联通 202.106.50.1    电信CN2 [优质线路]
2024/04/27 21:10:13 北京移动 221.179.155.161 电信CN2 [优质线路]
2024/04/27 21:10:13 上海电信 202.96.209.133  电信CN2 [优质线路]
2024/04/27 21:10:13 上海联通 210.22.97.1     电信CN2 [优质线路]
2024/04/27 21:10:13 上海移动 211.136.112.200 电信163 [普通线路]
2024/04/27 21:10:13 广州电信 58.60.188.222   电信CN2 [优质线路]
2024/04/27 21:10:13 广州联通 210.21.196.6    联通4837[普通线路]
2024/04/27 21:10:13 广州移动 120.196.165.24  电信CN2 [优质线路]
2024/04/27 21:10:13 成都电信 61.139.2.69     电信CN2 [优质线路]
2024/04/27 21:10:13 成都联通 119.6.6.6       电信CN2 [优质线路]
2024/04/27 21:10:13 成都移动 211.137.96.205  电信CN2 [优质线路]
2024/04/27 21:10:13 湖南电信 36.111.200.100  电信CN2 [优质线路]
2024/04/27 21:10:13 湖南联通 42.48.16.100    电信CN2 [优质线路]
2024/04/27 21:10:13 湖南移动 39.134.254.6    电信163 [普通线路]
root@yuri-ly:~# 
```
