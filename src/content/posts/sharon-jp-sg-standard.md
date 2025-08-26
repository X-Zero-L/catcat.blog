---
tags: [sg-server, jp-server]
title: "Sharon JP SG Standard 测评"
published: 2024-06-29
---

- 蚌，老板滞销，推出了首月 1 折优惠，买来图一乐，顺便记录一下。

## Japan Standard

### Yabs

```shell
Sun Jun 30 07:40:27 AM BST 2024

Basic System Information:
---------------------------------
Uptime     : 0 days, 21 hours, 31 minutes
Processor  : Intel(R) Xeon(R) Gold 6138 CPU @ 2.00GHz
CPU cores  : 1 @ 1995.311 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 0.0 KiB
Disk       : 19.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Ipxo LLC
ASN        : AS396856 Sharon Networks, LLC
Location   : Tokyo, Tokyo (13)
Country    : Japan

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 12.03 MB/s    (3.0k) | 153.93 MB/s   (2.4k)
Write      | 12.03 MB/s    (3.0k) | 154.74 MB/s   (2.4k)
Total      | 24.07 MB/s    (6.0k) | 308.67 MB/s   (4.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 146.90 MB/s    (286) | 145.09 MB/s    (141)
Write      | 154.71 MB/s    (302) | 154.75 MB/s    (151)
Total      | 301.61 MB/s    (588) | 299.84 MB/s    (292)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 974                           
Multi Core      | 949                           
Full Test       | https://browser.geekbench.com/v6/cpu/6726452

YABS completed in 13 min 13 sec
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Gold 6138 CPU @ 2.00GHz
 CPU 核心数        : 1
 CPU 频率          : 1995.311 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 27.50 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 190.86 MiB / 1.89 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.97 GiB / 19.82 GiB
 启动盘路径        : /dev/vda3
 系统在线时间      : 0 days, 21 hour 51 min
 负载              : 0.96, 0.36, 0.33
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS396856 Sharon Networks, LLC
 IPV4 位置         : Tokyo / Tokyo / JP
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          974 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          19920.27 MB/s
 单线程写测试:          16254.43 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         12.4 MB/s (3022 IOPS, 8.47s)            12.4 MB/s (3034 IOPS, 8.44s)
 1GB-1M Block           160 MB/s (152 IOPS, 6.57s)              160 MB/s (152 IOPS, 6.57s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 12.03 MB/s    (3.0k) | 153.94 MB/s   (2.4k)
Write      | 12.03 MB/s    (3.0k) | 154.75 MB/s   (2.4k)
Total      | 24.06 MB/s    (6.0k) | 308.69 MB/s   (4.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 146.99 MB/s    (287) | 145.18 MB/s    (141)
Write      | 154.80 MB/s    (302) | 154.85 MB/s    (151)
Total      | 301.79 MB/s    (589) | 300.04 MB/s    (292)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：美国
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
Youtube识别地域: 日本(JP)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：JP 区
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: JP)
 Disney+:                               No (IP Banned By Disney+ 1)
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: JP)
 Amazon Prime Video:                    Yes (Region: JP)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  Yes (Region: JP)
 Instagram Licensed Audio:              No
 OneTrust Region:                       JP [Tokyo]
 iQyi Oversea Region:                   JP
 Bing Region:                           JP
 YouTube CDN:                           Tokyo
 Netflix Preferred CDN:                 Tokyo
 ChatGPT:                               Yes
 Wikipedia Editability:                 Yes
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        JPY
 ---Forum---
 Reddit:                                No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【US】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 0 [8] 
VPN得分(越低越好): 100 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 35 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0 (Very Low) [A] 
公司滥用得分(越低越好): 0.0006 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: business [8] hosting [0 A] isp [7] DataCenter/WebHosting/Transit [3] corporate [9]
公司类型: hosting [0] isp [7] business [A]
是否云提供商: No [7 D] 
是否数据中心: No [0 5 6 8] Yes [1 A]
是否移动设备: Yes [E] No [5 A]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B D]
是否VPN: No [0 1 6 7 A C D] Yes [E]
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D]
是否滥用者: No [7 8 A D E] 
是否威胁: No [7 8 D] 
是否中继: No [0 7 8 D] 
是否Bogon: No [7 8 A D] 
是否机器人: No [E] 
DNS-黑名单: 311(Total_Check) 0(Clean) 5(Blacklisted) 9(Other) 
Google搜索可行性：YES
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✔     ✔     ✔     ✘     ✔     ✘    
Sohu      ✔     ✔     ✔     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✔     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✔     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✔     ✘    
AOL       ✔     ✔     ✘     ✘     ✘     ✘    
GMX       ✔     ✘     ✔     ✘     ✔     ✘    
Sina      ✔     ✘     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  联通4837   [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  联通4837   [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   联通4837   [普通线路] 电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     联通4837   [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
1.63 ms  AS396856  日本, 东京都, 东京, vantiva.com
0.58 ms  *  美国, ibm.com
0.63 ms  *  美国, ibm.com
1.43 ms  AS10099  日本, 东京都, 东京, chinaunicom.com, 联通
1.34 ms  AS10099  日本, 东京都, 东京, chinaunicom.com, 联通
36.30 ms  AS4837  中国, 上海, chinaunicom.com, 联通
37.40 ms  AS4837  中国, 上海, chinaunicom.com, 联通
32.46 ms  AS4837  中国, 上海, chinaunicom.com, 联通
67.29 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
57.51 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
58.40 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.46 ms  AS396856  日本, 东京都, 东京, vantiva.com
0.58 ms  *  美国, ibm.com
0.58 ms  *  美国, ibm.com
1.64 ms  AS10099  日本, 东京都, 东京, chinaunicom.com, 联通
1.56 ms  AS10099  日本, 东京都, 东京, chinaunicom.com, 联通
42.38 ms  AS4837  中国, 上海, chinaunicom.com, 联通
30.28 ms  AS4837  中国, 上海, chinaunicom.com, 联通
61.89 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
79.97 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
59.76 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.55 ms  AS396856  日本, 东京都, 东京, vantiva.com
0.75 ms  *  美国, ibm.com
0.60 ms  *  美国, ibm.com
2.91 ms  AS58453  日本, 东京都, 东京, chinamobile.com, 移动
2.90 ms  AS58453  日本, 东京都, 东京, chinamobile.com, 移动
156.90 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
167.16 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
130.30 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
147.98 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
135.56 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
145.68 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
144.40 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    995.67 Mbps     928.85 Mbps     0.36     0.0%
日本东京         998.61 Mbps     918.07 Mbps     1.38     0.0%
中国香港         94.76 Mbps      90.17 Mbps      51.74    0.0%
联通WuXi         952.50 Mbps     742.36 Mbps     45.90    0.0%
电信浙江         1062.61 Mbps    484.16 Mbps     53.41    NULL
电信Zhenjiang5G  431.32 Mbps     469.08 Mbps     54.14    NULL
移动Beijing      748.36 Mbps     832.80 Mbps     72.09    NULL
------------------------------------------------------------------------
 总共花费      : 7 分 5 秒
 时间          : Sun Jun 30 08:07:25 BST 2024
------------------------------------------------------------------------
```

### 路由回程测试

```shell
No:1/9 Traceroute to 中国 深圳 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 226.09ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes payload
1   157.254.198.1   AS396856                  日本 东京都 东京  sharon.io 
                                              0.58 ms
2   9.27.128.16     *                         DOD          
                                              0.71 ms
3   9.27.128.0      *                         DOD          
                                              0.85 ms
4   203.160.66.197  AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com 
                                              1.47 ms
5   202.77.22.213   AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com  联通
                                              1.59 ms
6   219.158.16.213  AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              39.08 ms
7   219.158.8.185   AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              36.96 ms
8   *
9   *
10  219.158.9.30    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              71.09 ms
11  *
12  *
13  *
14  119.147.61.170  AS4134   [CHINANET-GD]    中国 广东 深圳  www.chinatelecom.com.cn  电信
                                              58.93 ms
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

No:2/9 Traceroute to 中国 上海 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 213.38ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes payload
1   157.254.198.1   AS396856                  日本 东京都 东京  sharon.io 
                                              0.64 ms
2   9.27.128.16     *                         DOD          
                                              0.57 ms
3   9.27.128.0      *                         DOD          
                                              0.62 ms
4   203.160.66.197  AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com 
                                              1.42 ms
5   202.77.22.225   AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com  联通
                                              11.48 ms
6   219.158.13.249  AS4837   [CU169-BACKBONE] 中国 上海  X-I chinaunicom.cn  联通
                                              43.55 ms
7   219.158.8.181   AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              34.20 ms
8   219.158.7.125   AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              37.95 ms
9   219.158.5.74    AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              44.16 ms
10  *
11  *
12  *
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

No:3/9 Traceroute to 中国 北京 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 238.30ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes payload
1   157.254.198.1   AS396856                  日本 东京都 东京  sharon.io 
                                              0.65 ms
2   9.27.128.16     *                         DOD          
                                              0.74 ms
3   9.27.128.0      *                         DOD          
                                              3.03 ms
4   203.160.66.197  AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com 
                                              1.65 ms
5   202.77.22.213   AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com  联通
                                              1.44 ms
6   219.158.16.213  AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              37.32 ms
7   219.158.19.78   AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              39.06 ms
8   219.158.19.81   AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              37.49 ms
9   *
10  219.158.3.74    AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              70.04 ms
11  *
12  *
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

No:4/9 Traceroute to 中国 广州 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 199.57ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes payload
1   157.254.198.1   AS396856                  日本 东京都 东京  sharon.io 
                                              0.48 ms
2   9.27.128.16     *                         DOD          
                                              0.55 ms
3   9.27.128.0      *                         DOD          
                                              0.80 ms
4   203.160.66.197  AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com 
                                              1.58 ms
5   202.77.22.213   AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com  联通
                                              1.61 ms
6   219.158.16.213  AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              42.46 ms
7   219.158.113.134 AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              30.81 ms
8   219.158.113.105 AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              37.32 ms
9   219.158.6.214   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              61.81 ms
10  157.18.0.30     AS17816  [UNICOM-GD]      中国 广东 广州  chinaunicom.cn  联通
                                              64.54 ms
11  120.80.175.62   AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              57.68 ms
12  *
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
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 233.19ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes payload
1   157.254.198.1   AS396856                  日本 东京都 东京  sharon.io 
                                              0.63 ms
2   9.27.128.16     *                         DOD          
                                              0.67 ms
3   9.27.128.0      *                         DOD          
                                              0.78 ms
4   203.160.66.197  AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com 
                                              1.42 ms
5   202.77.22.213   AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com  联通
                                              1.73 ms
6   219.158.13.249  AS4837   [CU169-BACKBONE] 中国 上海  X-I chinaunicom.cn  联通
                                              44.93 ms
7   219.158.8.173   AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              31.38 ms
8   *
9   *
10  210.22.66.178   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              36.38 ms
11  *
12  *
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

No:6/9 Traceroute to 中国 北京 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 105.41ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes payload
1   157.254.198.1   AS396856                  日本 东京都 东京  sharon.io 
                                              0.59 ms
2   9.27.128.16     *                         DOD          
                                              0.51 ms
3   9.27.128.0      *                         DOD          
                                              0.77 ms
4   203.160.66.197  AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com 
                                              1.64 ms
5   202.77.22.213   AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com  联通
                                              1.61 ms
6   219.158.13.249  AS4837   [CU169-BACKBONE] 中国 上海  X-I chinaunicom.cn  联通
                                              43.81 ms
7   219.158.113.142 AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              44.55 ms
8   219.158.113.101 AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              33.01 ms
9   219.158.6.169   AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              54.70 ms
10  *
11  61.49.140.217   AS4808                    中国 北京   中国联通  联通
                                              49.93 ms

No:7/9 Traceroute to 中国 深圳 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 265.46ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 120.233.53.1, 30 hops max, 52 bytes payload
1   157.254.198.1   AS396856                  日本 东京都 东京  sharon.io 
                                              0.71 ms
2   9.27.128.16     *                         DOD          
                                              0.65 ms
3   9.27.128.0      *                         DOD          
                                              3.45 ms
4   223.119.2.37    AS58453  [CMI-INT]        日本 东京都 东京  cmi.chinamobile.com 
                                              2.06 ms
5   223.120.2.245   AS58453  [CMI-INT]        日本 东京都 东京  cmi.chinamobile.com  移动
                                              1.61 ms
6   223.120.14.234  AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              55.30 ms
7   221.183.92.201  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              55.41 ms
8   221.183.92.213  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              64.04 ms
9   *
10  *
11  *
12  211.136.242.174 AS56040  [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              70.96 ms
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

No:8/9 Traceroute to 中国 上海 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 104.21.40.176 - 386.09ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes payload
1   157.254.198.1   AS396856                  日本 东京都 东京  sharon.io 
                                              0.64 ms
2   9.27.128.16     *                         DOD          
                                              0.56 ms
3   9.27.128.0      *                         DOD          
                                              0.83 ms
4   223.119.2.37    AS58453  [CMI-INT]        日本 东京都 东京  cmi.chinamobile.com 
                                              1.92 ms
5   223.120.2.189   AS58453  [CMI-INT]        日本 东京都 东京  cmi.chinamobile.com  移动
                                              2.00 ms
6   *
7   221.183.89.170  AS9808   [CMNET]          中国 上海  回国到达层 chinamobileltd.com  移动
                                              55.31 ms
8   221.183.89.69   AS9808   [CMNET]          中国 上海   chinamobileltd.com  移动
                                              36.30 ms
9   221.183.89.46   AS9808   [CMNET]          中国 上海   chinamobileltd.com  移动
                                              41.33 ms
10  *
11  *
12  *
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

No:9/9 Traceroute to 中国 北京 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 189.63ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes payload
1   157.254.198.1   AS396856                  日本 东京都 东京  sharon.io 
                                              0.85 ms
2   9.27.128.16     *                         DOD          
                                              0.64 ms
3   9.27.128.0      *                         DOD          
                                              0.53 ms
4   223.119.2.37    AS58453  [CMI-INT]        日本 东京都 东京  cmi.chinamobile.com 
                                              1.84 ms
5   223.120.2.245   AS58453  [CMI-INT]        日本 东京都 东京  cmi.chinamobile.com  移动
                                              2.01 ms
6   223.120.2.198   AS58453  [CMI-INT]        中国 北京  CMI-CM-Peer cmi.chinamobile.com  移动
                                              87.86 ms
7   221.183.55.106  AS9808   [CMNET]          中国 北京  回国到达层 chinamobileltd.com  移动
                                              69.31 ms
8   221.183.25.201  AS9808   [CMNET]          中国 北京   chinamobileltd.com  移动
                                              73.82 ms
9   *
10  *
11  211.136.66.229  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              72.32 ms
12  211.136.67.166  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              74.59 ms
13  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              73.43 ms
14  *
15  *
16  *
17  211.136.25.153  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              76.53 ms
```

### 流媒体测试

```shell
########################################################################                      IP质量体检报告：157.254.*.*                    bash <(curl -sL IP.Check.Place)                   https://github.com/xykt/IPQuality        报告时间：2024-06-30 16:41:35 CST  脚本版本：v2024-06-27########################################################################一、基础信息（Maxmind 数据库）自治系统号：            AS396856组织：                  AS-SHARON坐标：                  139°41′24″E, 35°41′21″N地图：                  https://check.place/35.6893,139.6899,15,cn城市：                  东京都, 东京, 151-0053使用地：                [JP]日本, [AS]亚洲注册地：                [US]美国时区：                  Asia/TokyoIP类型：                 广播IP 二、IP类型属性数据库：      IPinfo    ipregistry    ipapi     AbuseIPDB  IP2LOCATION 使用类型：     机房        家宽        机房        机房        机房    公司类型：     机房        家宽        机房    三、风险评分风险等级：      极低         低       中等       高         极高SCAMALYTICS：                       35|中风险ipapi：     0.06%|低风险AbuseIPDB：    0|低风险IPQS：                        75|可疑IPDB-IP：         |低风险四、风险因子库： IP2LOCATION ipapi ipregistry IPQS SCAMALYTICS ipdata IPinfo IPWHOIS地区：    [JP]    [JP]    [JP]    [US]    [JP]    [JP]    [JP]    [JP]代理：     否      否      否      是      否      否      否      否 Tor：      否      否      否      否      否      否      否      否 VPN：      否      否      否      是      否      无      否      否 服务器：   是      是      否      无      否      否      否      否 滥用：     否      否      否      否      无      否      无      无 机器人：   否      否      无      否      否      无      无      无 五、流媒体及AI服务解锁检测服务商：  TikTok   Disney+  Netflix Youtube  AmazonPV  Spotify  ChatGPT 状态：     解锁     屏蔽    仅自制    解锁     解锁     解锁     解锁   地区：     [US]              [US]     [JP]     [JP]     [JP]     [JP]   方式：     原生              原生     原生     原生     原生     原生   六、邮局连通性及黑名单检测本地25端口：阻断IP地址黑名单数据库：  有效 439   正常 437   已标记 2   黑名单 0========================================================================
```

## Singapore Standard

### Yabs

```shell

Basic System Information:
---------------------------------
Uptime     : 0 days, 22 hours, 27 minutes
Processor  : AMD EPYC 7B13 64-Core Processor
CPU cores  : 2 @ 2250.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 39.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Sharon Networks, LLC
ASN        : AS396856 Sharon Networks, LLC
Host       : Sharon Networks, LLC
Location   : Singapore, North West (03)
Country    : Singapore

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 20.04 MB/s    (5.0k) | 257.84 MB/s   (4.0k)
Write      | 20.06 MB/s    (5.0k) | 259.20 MB/s   (4.0k)
Total      | 40.10 MB/s   (10.0k) | 517.04 MB/s   (8.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 246.01 MB/s    (480) | 243.00 MB/s    (237)
Write      | 259.08 MB/s    (506) | 259.18 MB/s    (253)
Total      | 505.09 MB/s    (986) | 502.19 MB/s    (490)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1691                          
Multi Core      | 3106                          
Full Test       | https://browser.geekbench.com/v6/cpu/6726431
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7B13 64-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 2250.000 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 1.00 MB / L3: 512.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 342.74 MiB / 3.79 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 2.17 GiB / 39.82 GiB
 启动盘路径        : /dev/sda3
 系统在线时间      : 0 days, 0 hour 16 min
 负载              : 0.06, 0.02, 0.00
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS396856 Sharon Networks, LLC
 IPV4 位置         : Singapore / Singapore / SG
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		3981 Scores
 2 线程测试(多核)得分: 		7885 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		46689.82 MB/s
 单线程写测试:		28380.33 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		20.9 MB/s (5099 IOPS, 5.02s)		20.9 MB/s (5097 IOPS, 5.02s)
 1GB-1M Block		269 MB/s (256 IOPS, 3.90s)		269 MB/s (256 IOPS, 3.90s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 20.04 MB/s    (5.0k) | 257.68 MB/s   (4.0k)
Write      | 20.06 MB/s    (5.0k) | 259.04 MB/s   (4.0k)
Total      | 40.10 MB/s   (10.0k) | 516.73 MB/s   (8.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 246.04 MB/s    (480) | 242.97 MB/s    (237)
Write      | 259.11 MB/s    (506) | 259.15 MB/s    (253)
Total      | 505.15 MB/s    (986) | 502.13 MB/s    (490)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：新加坡
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN11S18)
Youtube识别地域: 新加坡(SG)
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
 Dazn:					Yes (Region: SG)
 Disney+:				No (IP Banned By Disney+ 1)
 Netflix:				Yes (Region: SG)
 YouTube Premium:			Yes (Region: SG)
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				Yes
 Spotify Registration:			Yes (Region: SG)
 Instagram Licensed Audio:		No
 OneTrust Region:			SG [Unknown]
 iQyi Oversea Region:			US
 Bing Region:				SG
 YouTube CDN:				Singapore
 Netflix Preferred CDN:			Singapore
 ChatGPT:				Yes
 Wikipedia Editability:			Yes
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			SGD
 ---Forum---
 Reddit:				No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【US】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 23 [8] 
VPN得分(越低越好): 54 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 78 [8] 
欺诈得分(越低越好): 0 [1 E] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] business [8] isp [7] hosting [0 A] corporate [9]
公司类型: hosting [0 A] isp [7]
是否云提供商: No [7 D] 
是否数据中心: No [5 6 8] Yes [0 1 A]
是否移动设备: No [5 A] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 A B D E] 
是否VPN: No [0 1 6 7 A C D E]
是否Tor: No [0 1 3 6 7 8 A B D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A D E] 
是否威胁: No [7 8 D] 
是否中继: No [0 7 8 D] 
是否Bogon: No [7 8 A D] 
是否机器人: No [E] 
DNS-黑名单: 311(Total_Check) 0(Clean) 6(Blacklisted) 11(Other) 
Google搜索可行性：YES
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✔     ✔     ✔     ✘     ✔     ✘    
Sohu      ✔     ✔     ✔     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✔     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✔     ✔     ✔     ✘     ✔     ✘    
MailRU    ✘     ✘     ✘     ✘     ✔     ✘    
AOL       ✔     ✔     ✘     ✘     ✘     ✘    
GMX       ✔     ✘     ✔     ✘     ✔     ✘    
Sina      ✔     ✘     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  联通4837   [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  联通4837   [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   联通4837   [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     联通4837   [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.38 ms  AS396856  新加坡, d1.si
1.06 ms  *  美国, ibm.com
1.12 ms  *  美国, ibm.com
1.39 ms  *  美国, ibm.com
1.91 ms  AS10099  新加坡, chinaunicom.com, 联通
1.69 ms  *  中国, chinaunicom.com, 联通
35.79 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
34.71 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
39.77 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
38.71 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
44.78 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.55 ms  AS396856  新加坡, d1.si
1.02 ms  *  美国, ibm.com
1.17 ms  *  美国, ibm.com
1.12 ms  *  美国, ibm.com
2.17 ms  AS10099  新加坡, chinaunicom.com, 联通
1.52 ms  *  中国, chinaunicom.com, 联通
40.75 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
44.09 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
44.15 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
41.61 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
39.15 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.43 ms  AS396856  新加坡, d1.si
0.93 ms  *  美国, ibm.com
1.25 ms  *  美国, ibm.com
1.18 ms  *  美国, ibm.com
6.71 ms  AS58453  新加坡, chinamobile.com, 移动
1.37 ms  AS58453  新加坡, chinamobile.com, 移动
42.88 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
42.25 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
42.36 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
44.53 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
45.83 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
45.00 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 997.13 Mbps	 962.22 Mbps	 1.12	  0.0%
新加坡		 997.27 Mbps	 960.88 Mbps	 1.14	  0.0%
中国香港	 93.78 Mbps	 965.24 Mbps	 35.99	  0.0%
联通WuXi	 943.37 Mbps	 914.38 Mbps	 66.95	  0.0%
电信浙江	 26.15 Mbps	 487.10 Mbps	 63.46	  NULL
电信浙江	 624.78 Mbps	 500.49 Mbps	 65.52	  NULL
移动Beijing	 416.38 Mbps	 1012.27 Mbps	 78.08	  NULL
------------------------------------------------------------------------
 总共花费      : 9 分 27 秒
 时间          : Sat Jun 29 16:40:42 +08 2024
------------------------------------------------------------------------
```

### 路由回程测试

```shell
No:1/9 Traceroute to 中国 深圳 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 104.21.40.176 - 132.64ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes payload
1   188.64.108.1    AS396856                  新加坡    sharon.io 
                                              0.56 ms
2   9.28.128.11     *                         DOD          
                                              0.92 ms
3   9.28.128.10     *                         DOD          
                                              0.91 ms
4   9.28.128.0      *                         DOD          
                                              1.28 ms
5   162.219.80.129  AS10099  [CUG-BACKBONE]   新加坡    chinaunicomglobal.com 
                                              2.01 ms
6   118.26.159.13   *        [CUG-BACKBONE]   新加坡          
                                              1.41 ms
7   219.158.20.45   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              42.25 ms
8   219.158.4.53    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              46.17 ms
9   219.158.3.17    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              43.43 ms
10  219.158.9.30    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              43.33 ms
11  *
12  *
13  *
14  119.147.61.106  AS4134   [CHINANET-GD]    中国 广东 深圳  www.chinatelecom.com.cn  电信
                                              51.14 ms
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

No:2/9 Traceroute to 中国 上海 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 104.21.40.176 - 129.27ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes payload
1   188.64.108.1    AS396856                  新加坡    sharon.io 
                                              0.41 ms
2   9.28.128.11     *                         DOD          
                                              0.92 ms
3   9.28.128.10     *                         DOD          
                                              2.36 ms
4   9.28.128.0      *                         DOD          
                                              1.11 ms
5   162.219.80.129  AS10099  [CUG-BACKBONE]   新加坡    chinaunicomglobal.com 
                                              1.86 ms
6   118.26.159.13   *        [CUG-BACKBONE]   新加坡          
                                              1.37 ms
7   219.158.100.29  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              36.14 ms
8   219.158.4.109   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              36.88 ms
9   *
10  *
11  219.158.6.222   AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              70.26 ms
12  *
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

No:3/9 Traceroute to 中国 北京 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 104.21.40.176 - 126.60ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes payload
1   188.64.108.1    AS396856                  新加坡    sharon.io 
                                              0.44 ms
2   9.28.128.11     *                         DOD          
                                              0.95 ms
3   9.28.128.10     *                         DOD          
                                              0.96 ms
4   9.28.128.0      *                         DOD          
                                              1.02 ms
5   162.219.80.129  AS10099  [CUG-BACKBONE]   新加坡    chinaunicomglobal.com 
                                              2.30 ms
6   118.26.159.9    *        [CUG-BACKBONE]   新加坡          
                                              1.40 ms
7   219.158.21.17   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              40.76 ms
8   219.158.4.129   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              36.10 ms
9   *
10  *
11  *
12  *
13  202.97.18.9     AS4134   [CHINANET-BB]    中国 北京   www.chinatelecom.com.cn  电信
                                              79.84 ms
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

No:4/9 Traceroute to 中国 广州 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 130.72ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes payload
1   188.64.108.1    AS396856                  新加坡    sharon.io 
                                              0.40 ms
2   9.28.128.11     *                         DOD          
                                              0.98 ms
3   9.28.128.10     *                         DOD          
                                              0.97 ms
4   9.28.128.0      *                         DOD          
                                              1.09 ms
5   162.219.80.129  AS10099  [CUG-BACKBONE]   新加坡    chinaunicomglobal.com 
                                              2.40 ms
6   118.26.159.13   *        [CUG-BACKBONE]   新加坡          
                                              1.46 ms
7   219.158.12.221  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              38.97 ms
8   219.158.4.37    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              42.87 ms
9   219.158.3.57    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              45.07 ms
10  112.91.0.246    AS17816  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              40.21 ms
11  120.80.170.254  AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              44.84 ms
12  *
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
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 130.96ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes payload
1   188.64.108.1    AS396856                  新加坡    sharon.io 
                                              0.44 ms
2   9.28.128.11     *                         DOD          
                                              0.93 ms
3   9.28.128.10     *                         DOD          
                                              1.01 ms
4   9.28.128.0      *                         DOD          
                                              1.11 ms
5   162.219.80.129  AS10099  [CUG-BACKBONE]   新加坡    chinaunicomglobal.com 
                                              2.04 ms
6   *
7   219.158.102.137 AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              43.23 ms
8   219.158.4.29    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              45.35 ms
9   219.158.3.125   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              38.05 ms
10  *
11  *
12  210.22.66.178   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              66.91 ms
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

No:6/9 Traceroute to 中国 北京 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 63.53ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes payload
1   188.64.108.1    AS396856                  新加坡    sharon.io 
                                              0.64 ms
2   9.28.128.11     *                         DOD          
                                              0.98 ms
3   9.28.128.10     *                         DOD          
                                              1.17 ms
4   9.28.128.0      *                         DOD          
                                              1.11 ms
5   162.219.80.129  AS10099  [CUG-BACKBONE]   新加坡    chinaunicomglobal.com 
                                              1.99 ms
6   118.26.159.9    *        [CUG-BACKBONE]   新加坡          
                                              1.38 ms
7   219.158.20.13   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              35.99 ms
8   219.158.4.41    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              42.97 ms
9   219.158.3.13    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              46.64 ms
10  *
11  *
12  *
13  61.49.140.217   AS4808                    中国 北京   中国联通  联通
                                              73.57 ms

No:7/9 Traceroute to 中国 深圳 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 134.27ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 120.233.53.1, 30 hops max, 52 bytes payload
1   188.64.108.1    AS396856                  新加坡    sharon.io 
                                              0.47 ms
2   9.28.128.11     *                         DOD          
                                              0.91 ms
3   9.28.128.10     *                         DOD          
                                              1.04 ms
4   9.28.128.0      *                         DOD          
                                              1.27 ms
5   223.119.7.149   AS58453  [CMI-INT]        新加坡    cmi.chinamobile.com 
                                              4.18 ms
6   223.118.3.106   AS58453  [CMI-INT]        新加坡    cmi.chinamobile.com  移动
                                              1.65 ms
7   *
8   221.183.92.201  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              45.20 ms
9   221.183.92.205  AS9808   [CMNET]          中国 安徽 合肥市  chinamobileltd.com  移动
                                              48.31 ms
10  221.183.166.209 AS9808   [CMNET]          中国 湖北 武汉市  chinamobileltd.com 
                                              48.64 ms
11  *
12  211.136.242.170 AS56040  [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              56.74 ms
13  211.136.242.170 AS56040  [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              58.16 ms
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

No:8/9 Traceroute to 中国 上海 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 104.21.40.176 - 137.21ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes payload
1   188.64.108.1    AS396856                  新加坡    sharon.io 
                                              0.56 ms
2   9.28.128.11     *                         DOD          
                                              1.03 ms
3   9.28.128.10     *                         DOD          
                                              1.04 ms
4   9.28.128.0      *                         DOD          
                                              1.14 ms
5   223.119.7.149   AS58453  [CMI-INT]        新加坡    cmi.chinamobile.com 
                                              21.77 ms
6   223.118.3.10    AS58453  [CMI-INT]        新加坡    cmi.chinamobile.com  移动
                                              1.44 ms
7   *
8   221.183.89.178  AS9808   [CMNET]          中国 上海   chinamobileltd.com  移动
                                              64.22 ms
9   221.183.89.33   AS9808   [CMNET]          中国 上海   chinamobileltd.com  移动
                                              63.58 ms
10  221.183.89.50   AS9808   [CMNET]          中国 上海   chinamobileltd.com  移动
                                              65.59 ms
11  *
12  *
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

No:9/9 Traceroute to 中国 北京 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 130.68ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes payload
1   188.64.108.1    AS396856                  新加坡    sharon.io 
                                              0.51 ms
2   9.28.128.11     *                         DOD          
                                              0.99 ms
3   9.28.128.10     *                         DOD          
                                              0.98 ms
4   9.28.128.0      *                         DOD          
                                              1.04 ms
5   223.119.7.149   AS58453  [CMI-INT]        新加坡    cmi.chinamobile.com 
                                              4.97 ms
6   223.118.3.106   AS58453  [CMI-INT]        新加坡    cmi.chinamobile.com  移动
                                              1.71 ms
7   *
8   221.183.55.102  AS9808   [CMNET]          中国 北京  X-I chinamobileltd.com  移动
                                              78.08 ms
9   221.183.46.250  AS9808   [CMNET]          中国 北京   chinamobileltd.com  移动
                                              75.57 ms
10  *
11  *
12  *
13  *
14  211.136.67.166  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              79.26 ms
15  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              84.56 ms
16  *
17  211.136.25.153  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              83.61 ms
```

### 流媒体测试

```shell
########################################################################
                       IP质量体检报告：188.64.*.*
                    bash <(curl -sL IP.Check.Place)
                   https://github.com/xykt/IPQuality
        报告时间：2024-06-30 17:07:55 CST  脚本版本：v2024-06-27
########################################################################
一、基础信息（Maxmind 数据库）
自治系统号：            AS396856
组织：                  AS-SHARON
坐标：                  103°51′1″E, 1°17′12″N
地图：                  https://check.place/1.2868,103.8503,15,cn
城市：                  N/A, 新加坡, 17
使用地：                [SG]新加坡, [AS]亚洲
注册地：                [SI]斯洛文尼亚
时区：                  Asia/Singapore
IP类型：                 广播IP 
二、IP类型属性
数据库：      IPinfo    ipregistry    ipapi     AbuseIPDB  IP2LOCATION 
使用类型：     机房        家宽        机房        机房        机房    
公司类型：     机房        家宽        机房    
三、风险评分
风险等级：      极低         低       中等       高         极高
SCAMALYTICS：  0|低风险
ipapi：    0.00%|极低风险
AbuseIPDB：    0|低风险
IPQS：         0|低风险
DB-IP：         |低风险
四、风险因子
库： IP2LOCATION ipapi ipregistry IPQS SCAMALYTICS ipdata IPinfo IPWHOIS
地区：    [SG]    [SG]    [SG]    [SG]    [SG]    [SG]    [SG]    [SG]
代理：     否      否      否      否      否      否      否      否 
Tor：      否      否      否      否      否      否      否      否 
VPN：      否      否      否      否      否      无      否      否 
服务器：   是      是      否      无      否      否      是      否 
滥用：     否      否      否      否      无      否      无      无 
机器人：   否      否      无      否      否      无      无      无 
五、流媒体及AI服务解锁检测
服务商：  TikTok   Disney+  Netflix Youtube  AmazonPV  Spotify  ChatGPT 
状态：     解锁     屏蔽     解锁     解锁     解锁     解锁     解锁   
地区：     [US]              [SG]     [SG]     [US]     [SG]     [SG]   
方式：     原生              原生     原生     原生     原生     原生   
六、邮局连通性及黑名单检测
本地25端口：阻断
IP地址黑名单数据库：  有效 439   正常 437   已标记 2   黑名单 0
========================================================================
```