---
title: "Sharon JP Lite 玩具鸡"
published: 2024-02-09
categories: 
  - "jp-server"
  - "vps"
---

最近两个月以来最热闹的商家，老板太会整活了，把MJJ耍的团团转（没有路由保证，把用户当斐济杯来玩）。从HK目前扩张到JP,SG。之前HK的时候有过大量攻击，老板居然还做到了全额退款，还不停的戏耍没下车的，吃瓜吃的贼乐呵。拖更了整个一月的HK-PRE之前没上，等的mjj心痒痒。终于在除夕今天，老板放出了JP-lite玩具鸡（终于不用老板手动开机，用上[VirtFusion](https://virtfusion.com/)面板了），一个月后会删鸡，部分路由还没调好。图一乐,据说还能支持HK,JP,SG内网互联。(**不要溢价收，不要溢价收，不要溢价收**)

## 套餐

**_Provider : Sharon  
Type/Plan : Japan - Lite - TYO-Beta-Gift  
Processor : 未知  
Num of Core : 1 Cores  
Memory : 1 GB DDR5 RAM  
Storage : 20 GB SSD  
Bandwidth : 1TB @ 1G Mbps IN | 1G Mbps OUT(计最大)  
Location : JP  
Price : \$1_**

## 测评

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel Xeon Processor (Skylake, IBRS)
 CPU 核心数        : 1
 CPU 频率          : 1995.312 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 1.94 GiB / 19.82 GiB
 启动盘路径        : /dev/vda3
 内存              : 225.71 MiB / 926.16 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 9 min
 负载              : 0.51, 0.22, 0.14
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS396856 As-sharon
 IPV4 位置         : Tokyo / Tokyo / Japan
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          882 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          17938.57 MB/s
 单线程写测试:          14944.87 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         12.4 MB/s (3035 IOPS, 8.44s)            12.4 MB/s (3035 IOPS, 8.43s)
 1GB-1M Block           160 MB/s (152 IOPS, 6.56s)              160 MB/s (152 IOPS, 6.56s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 12.03 MB/s    (3.0k) | 154.00 MB/s   (2.4k)
Write      | 12.03 MB/s    (3.0k) | 154.81 MB/s   (2.4k)
Total      | 24.06 MB/s    (6.0k) | 308.81 MB/s   (4.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 147.00 MB/s    (287) | 145.13 MB/s    (141)
Write      | 154.81 MB/s    (302) | 154.80 MB/s    (151)
Total      | 301.81 MB/s    (589) | 299.93 MB/s    (292)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 日本(JP)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
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
 Netflix:                               Yes (Region: US)
 YouTube Premium:                       Yes (Region: JP)
 Amazon Prime Video:                    Yes (Region: JP)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   INTL
 Viu.com:                               No
 YouTube CDN:                           Hong Kong 
 Netflix Preferred CDN:                 Tokyo  
 Steam Currency:                        JPY
 ChatGPT:                               Only Available with Mobile APP
 Bing Region:                           WW
 Instagram Licensed Audio:              Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):Data Center/Web Hosting/Transit⑤  isp⑧  
  公司类型(company_type):isp⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No② ⑥ ⑦ ⑧   Yes⑨ 
  VPN(vpn):②   No⑦ ⑧ 
  TOR(tor):②   No⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑦ ⑧   Yes⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: JP 城市: Tokyo 服务商: AS396856 Sharon Networks, LLC
北京电信 219.141.136.12  测试超时
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
1.09 ms  AS54252  日本, 东京都, 东京, cyber.ir
0.36 ms  *  美国, ibm.com
0.61 ms  *  美国, ibm.com
0.86 ms  *  中国, 香港, chinatelecom.com.cn, 电信
1.00 ms  *  中国, 香港, chinatelecom.com.cn, 电信
1.21 ms  *  日本, 东京都, 东京, chinatelecom.com.cn, 电信
49.17 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
50.67 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
138.46 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
142.32 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.37 ms  AS54252  日本, 东京都, 东京, cyber.ir
0.36 ms  *  美国, ibm.com
0.55 ms  *  美国, ibm.com
130.23 ms  AS10099  日本, 东京都, 东京, chinaunicom.com, 联通
51.77 ms  AS10099  中国, 香港, chinaunicom.com, 联通
71.83 ms  AS4837  中国, 上海, chinaunicom.com, 联通
60.05 ms  AS4837  中国, 上海, chinaunicom.com, 联通
55.04 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
63.21 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
63.31 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
61.07 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.37 ms  AS54252  日本, 东京都, 东京, cyber.ir
0.57 ms  *  美国, ibm.com
0.42 ms  *  美国, ibm.com
2.69 ms  AS58453  日本, 东京都, 东京, chinamobile.com, 移动
1.58 ms  AS58453  日本, 东京都, 东京, chinamobile.com, 移动
147.83 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
169.18 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
132.54 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
151.49 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
184.30 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
144.25 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    603.08 Mbps     946.41 Mbps     0.47     89.0%
中国香港         738.20 Mbps     43.52 Mbps      55.64    NULL
日本东京         998.21 Mbps     933.14 Mbps     0.77     0.0%
联通上海5G       0.67 Mbps       38.99 Mbps      51.62    0.0%
电信浙江         47.72 Mbps      37.97 Mbps      34.26    NULL
电信Zhenjiang5G  51.84 Mbps      42.51 Mbps      35.79    NULL
移动杭州         4.88 Mbps       4.37 Mbps       36.93        
------------------------------------------------------------------------
 总共花费      : 7 分 17 秒
 时间          : Fri Feb  9 15:23:42 CST 2024
------------------------------------------------------------------------
```

### 三地回程测试

#### 深圳电信

```
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 275.41ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes packets
1   91.186.200.1    *                         美国 堪萨斯州 迪灵        
                                              0.50 ms
2   9.27.128.100    *                         DOD          
                                              0.40 ms
3   9.27.128.0      *                         DOD          
                                              0.45 ms
4   203.128.225.13  *                         中国 香港   中国电信（香港）
                                              0.87 ms
5   69.194.166.73   AS23764                   日本 东京都 东京  chinatelecomglobal.com  电信
                                              0.97 ms
6   203.22.182.110  *        [CTG-CN]         日本 东京都 东京  中国电信（香港）
                                              1.41 ms
7   202.97.43.5     AS4134   [CHINANET-BB]    中国 广东 广州  chinatelecom.com.cn  电信
                                              52.16 ms
8   *
9   *
10  *
11  119.147.61.222  AS4134   [CHINANET-GD]    中国 广东 深圳 福田 chinatelecom.com.cn 
                                              56.33 ms
12  59.36.216.1     AS4134                    中国 广东 江门市  chinatelecom.com.cn  电信
                                              55.19 ms
```

#### 上海电信

```
[NextTrace API] preferred API IP - 104.21.40.176 - 311.47ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes packets
1   91.186.200.1    *                         美国 堪萨斯州 迪灵        
                                              0.51 ms
2   9.27.128.100    *                         DOD          
                                              0.39 ms
3   9.27.128.0      *                         DOD          
                                              1.50 ms
4   203.128.225.13  *                         中国 香港   中国电信（香港）
                                              0.93 ms
5   203.22.177.53   *        [CTG-CN]         中国 香港    电信   
                                              0.66 ms
6   203.22.182.14   *        [CTG-CN]         日本 东京    电信   
                                              1.20 ms
7   202.97.88.249   AS4134   [CHINANET-BB]    中国 上海   chinatelecom.com.cn 
                                              27.01 ms
8   202.97.50.194   AS4134   [CHINANET-BB]    中国 上海   chinatelecom.com.cn  电信
                                              30.65 ms
9   *
10  *
11  *
12  *
13  101.226.41.65   AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              32.86 ms
```

#### 北京电信

```
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 310.18ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes packets
1   91.186.200.1    *                         美国 堪萨斯州 迪灵        
                                              0.48 ms
2   9.27.128.100    *                         DOD          
                                              0.48 ms
3   9.27.128.0      *                         DOD          
                                              0.44 ms
4   203.128.225.13  *                         中国 香港   中国电信（香港）
                                              0.63 ms
5   203.22.177.57   *        [CTG-CN]         日本 东京都 东京   电信   
                                              0.71 ms
6   203.22.182.98   *        [CTG-CN]         日本 东京         
                                              1.39 ms
7   *
8   *
9   *
10  *
11  *
12  *
13  *
14  220.181.53.1    AS23724  [CHINANET-IDC]   中国 北京   bjtelecom.net  电信
                                              69.96 ms
```

#### 广州联通

```
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 172.67.155.192 - 259.39ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes packets
1   91.186.200.1    *                         美国 堪萨斯州 迪灵        
                                              0.51 ms
2   9.27.128.100    *                         DOD          
                                              0.40 ms
3   9.27.128.0      *                         DOD          
                                              0.50 ms
4   203.160.66.197  AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com 
                                              130.33 ms
5   202.77.22.213   AS10099  [CUG-BACKBONE]   中国 香港   chinaunicomglobal.com  联通
                                              51.22 ms
6   219.158.13.249  AS4837   [CU169-BACKBONE] 中国 上海  X-I chinaunicom.cn  联通
                                              61.89 ms
7   219.158.8.181   AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              63.91 ms
8   219.158.7.129   AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              51.69 ms
9   219.158.6.246   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              60.00 ms
10  120.83.0.234    AS17816  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              60.10 ms
11  120.80.79.194   AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              59.99 ms
```

#### 上海联通

```
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 172.67.155.192 - 154.51ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes packets
1   91.186.200.1    *                         美国 堪萨斯州 迪灵        
                                              0.59 ms
2   9.27.128.100    *                         DOD          
                                              0.38 ms
3   9.27.128.0      *                         DOD          
                                              0.51 ms
4   203.160.66.197  AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com 
                                              130.72 ms
5   202.77.22.225   AS10099  [CUG-BACKBONE]   中国 香港   chinaunicomglobal.com  联通
                                              51.77 ms
6   219.158.16.213  AS4837   [CU169-BACKBONE] 中国 四川 成都  chinaunicom.cn  联通
                                              69.12 ms
7   219.158.19.90   AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              51.82 ms
8   *
9   *
10  210.22.66.178   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              53.53 ms
11  112.65.95.129   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              51.86 ms
```

#### 北京联通

```

[NextTrace API] preferred API IP - 104.21.40.176 - 279.10ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes packets
1   91.186.200.1    *                         美国 堪萨斯州 迪灵        
                                              0.53 ms
2   9.27.128.100    *                         DOD          
                                              0.36 ms
3   9.27.128.0      *                         DOD          
                                              0.51 ms
4   203.160.66.197  AS10099  [CUG-BACKBONE]   日本 东京都 东京  chinaunicomglobal.com 
                                              130.32 ms
5   202.77.22.213   AS10099  [CUG-BACKBONE]   中国 香港   chinaunicomglobal.com  联通
                                              51.28 ms
6   219.158.13.249  AS4837   [CU169-BACKBONE] 中国 上海  X-I chinaunicom.cn  联通
                                              57.86 ms
7   219.158.113.138 AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              53.95 ms
8   219.158.113.105 AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              51.46 ms
9   *
10  *
11  *
12  61.49.140.217   AS4808                    中国 北京   chinaunicom.cn  联通
                                              52.28 ms
```

#### 深圳移动

```
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 152.68ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 120.233.53.1, 30 hops max, 52 bytes packets
1   91.186.200.1    *                         美国 堪萨斯州 迪灵        
                                              0.45 ms
2   9.27.128.100    *                         DOD          
                                              0.36 ms
3   9.27.128.0      *                         DOD          
                                              0.48 ms
4   223.119.2.37    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              1.43 ms
5   223.120.2.189   AS58453  [CMI-INT]        日本 东京都 东京  cmi.chinamobile.com  移动
                                              4.39 ms
6   223.120.2.178   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              154.66 ms
7   221.183.68.125  AS9808   [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              169.17 ms
8   221.183.92.21   AS9808   [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              156.50 ms
9   *
10  *
11  211.136.204.26  AS56040  [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              170.52 ms
12  211.136.242.170 AS56040  [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              172.47 ms
13  120.233.53.1    AS56040  [APNIC-AP]       中国 广东 深圳  chinamobile.com  移动
                                              154.24 ms
```

#### 上海移动

```
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 160.46ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes packets
1   91.186.200.1    *                         美国 堪萨斯州 迪灵        
                                              0.43 ms
2   9.27.128.100    *                         DOD          
                                              0.36 ms
3   9.27.128.0      *                         DOD          
                                              0.52 ms
4   223.119.2.37    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              2.08 ms
5   223.120.2.189   AS58453  [CMI-INT]        日本 东京都 东京  cmi.chinamobile.com  移动
                                              1.86 ms
6   *
7   221.183.89.170  AS9808   [CMNET]          中国 上海  回国到达层 chinamobile.com  移动
                                              33.66 ms
8   221.183.89.69   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              32.78 ms
9   221.183.89.46   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              34.84 ms
10  *
11  *
12  183.194.216.129 AS9808   [APNIC-AP]       中国 上海   chinamobile.com  移动
                                              36.32 ms
```

#### 北京移动

```
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 160.46ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes packets
1   91.186.200.1    *                         美国 堪萨斯州 迪灵        
                                              0.43 ms
2   9.27.128.100    *                         DOD          
                                              0.36 ms
3   9.27.128.0      *                         DOD          
                                              0.52 ms
4   223.119.2.37    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              2.08 ms
5   223.120.2.189   AS58453  [CMI-INT]        日本 东京都 东京  cmi.chinamobile.com  移动
                                              1.86 ms
6   *
7   221.183.89.170  AS9808   [CMNET]          中国 上海  回国到达层 chinamobile.com  移动
                                              33.66 ms
8   221.183.89.69   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              32.78 ms
9   221.183.89.46   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              34.84 ms
10  *
11  *
12  183.194.216.129 AS9808   [APNIC-AP]       中国 上海   chinamobile.com  移动
                                              36.32 ms
```

### 国内TCP测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-7.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-7.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-7.jpg" alt="" loading="lazy">
</picture>

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 22 minutes
Processor  : Intel Xeon Processor (Skylake, IBRS)
CPU cores  : 1 @ 1995.312 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 926.2 MiB
Swap       : 0.0 KiB
Disk       : 19.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : DETUK
ASN        : AS396856 Sharon Networks, LLC
Host       : Detuk
Location   : Tokyo, Tokyo (13)
Country    : Japan

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 12.03 MB/s    (3.0k) | 153.87 MB/s   (2.4k)
Write      | 12.03 MB/s    (3.0k) | 154.68 MB/s   (2.4k)
Total      | 24.06 MB/s    (6.0k) | 308.56 MB/s   (4.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 146.99 MB/s    (287) | 145.28 MB/s    (141)
Write      | 154.80 MB/s    (302) | 154.95 MB/s    (151)
Total      | 301.79 MB/s    (589) | 300.23 MB/s    (292)
```
