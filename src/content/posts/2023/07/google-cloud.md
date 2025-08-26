---
title: "Google Cloud 测评"
published: 2023-07-10
categories: 
  - "tw-server"
  - "sg-server"
  - "jp-server"
  - "vps"
  - "hk-server"
---

## GCP 台湾

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU @ 2.20GHz
 CPU 核心数        : 1
 CPU 频率          : 2199.998 MHz
 CPU 缓存          : 56320 KB
 硬盘空间          : 2.74 GiB / 9.62 GiB
 启动盘路径        : /dev/sda1
 内存              : 246.73 MiB / 571.88 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 20 min
 负载              : 0.09, 0.06, 0.02
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-23-cloud-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS396982 Google LLC
 IPV4 位置         : Taipei / Taiwan / TW
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		940 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		19123.04 MB/s
 单线程写测试:		13372.23 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		10.1 MB/s (2462 IOPS, 10.40s)		14.1 MB/s (3439 IOPS, 7.44s)
 1GB-1M Block		37.7 MB/s (36 IOPS, 27.81s)		153 MB/s (145 IOPS, 6.86s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
  ------ | --- ---- | ---- ---- 
Read       | 6.45 MB/s     (1.6k) | 36.89 MB/s     (576)
Write      | 6.45 MB/s     (1.6k) | 37.19 MB/s     (581)
Total      | 12.90 MB/s    (3.2k) | 74.09 MB/s    (1.1k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 38.87 MB/s      (75) | 37.26 MB/s      (36)
Write      | 40.61 MB/s      (79) | 39.93 MB/s      (39)
Total      | 79.49 MB/s     (154) | 77.20 MB/s      (75)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: TSA(TSA01S15)
Youtube识别地域: 台湾(TW)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：台湾
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：台湾区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					No
 HotStar:				No
 Disney+:				Yes (Region: TW)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: TW)
 Amazon Prime Video:			Yes (Region: TW)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			TW
 Viu.com:				No
 YouTube CDN:				Associated with [TSA01S15]
 Netflix Preferred CDN:			Hong Kong  
 Spotify Registration:			No
 Steam Currency:			TWD
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【TW】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
scamalytics数据库:
  欺诈分数(越低越好)：54
  匿名代理: No
  Tor出口节点: No
  服务器IP: Yes
  公共代理: No
  网络代理: No
  搜索引擎机器人: No
黑名单记录统计:(有多少黑名单网站有记录)
  无害记录： 0
  恶意记录： 0
  可疑记录： 0
  未检测到记录： 87
ip234数据库：
  欺诈分数(越低越好)：15
ip-api数据库:
  手机流量: No
  代理服务: No
  数据中心: Yes
abuseipdb数据库-abuse得分：0
IP类型:
  IP2Location数据库: Data Center/Web Hosting/Transit
Google搜索可行性：YES
端口25检测:
  本地: Yes
  163邮箱：No
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
2023/07/10 12:36:23 北京电信 219.141.136.12  电信163 [普通线路]           
2023/07/10 12:36:23 北京联通 202.106.50.1    联通4837[普通线路]           
2023/07/10 12:36:23 北京移动 221.179.155.161 测试超时
2023/07/10 12:36:23 上海电信 202.96.209.133  测试超时
2023/07/10 12:36:23 上海联通 210.22.97.1     联通4837[普通线路]           
2023/07/10 12:36:23 上海移动 211.136.112.200 测试超时
2023/07/10 12:36:23 广州电信 58.60.188.222   电信163 [普通线路]           
2023/07/10 12:36:23 广州联通 210.21.196.6    联通4837[普通线路]           
2023/07/10 12:36:23 广州移动 120.196.165.24  测试超时
2023/07/10 12:36:23 成都电信 61.139.2.69     电信163 [普通线路]           
2023/07/10 12:36:23 成都联通 119.6.6.6       联通4837[普通线路]           
2023/07/10 12:36:23 成都移动 211.137.96.205  测试超时
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信，联通，移动经过的地区及线路，核心程序来由: ipip.net ，请知悉!
广州电信 58.60.188.222
16.40 ms  AS15169  中国, 香港, google.com
17.88 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
23.12 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
24.30 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
26.05 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
28.56 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
28.10 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
275.21 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 979.85 Mbps	 7501.93 Mbps	 3.69	  NULL
中国香港	 980.47 Mbps	 5853.00 Mbps	 14.51	  0.0%
日本东京	 951.94 Mbps	 6887.00 Mbps	 39.19	  0.0%
联通Fuzhou	 981.03 Mbps	 4495.35 Mbps	 37.83	  0.0%
联通WuXi	 891.89 Mbps	 2986.14 Mbps	 42.96	  0.0%
电信合肥5G	 270.56 Mbps	 372.36 Mbps	 88.90	  6.3%
电信天津	 232.59 Mbps	 3932.39 Mbps	 55.29	  NULL
移动杭州5G	 410.02 Mbps	 3942.40 Mbps	 187.47	  0.0%
移动Beijing	 430.30 Mbps	 2117.74 Mbps	 186.76	  NULL
------------------------------------------------------------------------
 总共花费      : 8 分 51 秒
 时间          : Mon Jul 10 12:40:48 UTC 2023
------------------------------------------------------------------------
```

## GCP 香港

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU @ 2.20GHz
 CPU 核心数        : 2
 CPU 频率          : 2200.152 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 256.00 KB / L3: 55.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 280.43 MiB / 973.98 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 2.23 GiB / 9.62 GiB
 启动盘路径        : /dev/sda1
 系统在线时间      : 13 days, 6 hour 16 min
 负载              : 0.37, 0.12, 0.04
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-21-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS396982 Google LLC
 IPV4 位置         : Hong Kong / Hong Kong / HK
 IPV6 ASN          : AS396982 Google Cloud
 IPV6 位置         : Hong Kong / Hong Kong
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          877 Scores
 2 线程测试(多核)得分:          1486 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          7908.96 MB/s
 单线程写测试:          1976.91 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         7.6 MB/s (1862 IOPS, 13.75s)            9.8 MB/s (2383 IOPS, 10.74s)
 1GB-1M Block           103 MB/s (98 IOPS, 10.17s)              153 MB/s (145 IOPS, 6.86s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 6.46 MB/s     (1.6k) | 99.24 MB/s    (1.5k)
Write      | 6.47 MB/s     (1.6k) | 99.76 MB/s    (1.5k)
Total      | 12.93 MB/s    (3.2k) | 199.00 MB/s   (3.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 98.88 MB/s     (193) | 97.62 MB/s      (95)
Write      | 104.13 MB/s    (203) | 104.12 MB/s    (101)
Total      | 203.01 MB/s    (396) | 201.75 MB/s    (196)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：中国香港
[IPV6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：中国香港
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 中国香港(HK)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 中国香港(HK)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：HK 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：HK 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: HK)
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: HK)
 Amazon Prime Video:                    Yes (Region: HK)
 TVBAnywhere+:                          No
 Spotify Registration:                  Yes (Region: HK)
 Instagram Licensed Audio:              Yes
 OneTrust Region:                       HK [Unknown]
 iQyi Oversea Region:                   HK
 Bing Region:                           HK
 YouTube CDN:                           [HKG07S42] in [Hong Kong]
 Netflix Preferred CDN:                 Hong Kong
 ChatGPT:                               No (Only Available with Mobile APP)
 Wikipedia Editability:                 No
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        HKD
 ---Forum---
 Reddit:                                No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  IPv6 Is Not Currently Supported
 Disney+:                               IPv6 Is Not Currently Supported
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: HK)
 Amazon Prime Video:                    IPv6 Is Not Currently Supported
 TVBAnywhere+:                          IPv6 Is Not Currently Supported
 Spotify Registration:                  Yes (Region: HK)
 Instagram Licensed Audio:              Yes
 OneTrust Region:                       HK [Unknown]
 iQyi Oversea Region:                   IPv6 Is Not Currently Supported
 Bing Region:                           HK
 YouTube CDN:                           [HKG07S42] in [Hong Kong]
 Netflix Preferred CDN:                 Hong Kong
 ChatGPT:                               Failed (Network Connection)
 Wikipedia Editability:                 Yes
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:                                IPv6 Is Not Currently Supported
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         Failed
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2]
信任得分(越高越好): 14 [8] 
VPN得分(越低越好): 57 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 65 [E] 31 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0001 (Very Low) [A] 
公司滥用得分(越低越好): 0.0002 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: hosting [0 7 9 A] DataCenter/WebHosting/Transit [3] business [8]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1 5 6 A] No [8]
是否移动设备: No [5 A] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 A B D] Yes [E]
是否VPN: No [0 1 6 7 A C D] Yes [E]
是否Tor: No [0 1 3 6 7 8 A B D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 D E] Yes [A]
是否威胁: No [7 8 D] 
是否中继: No [0 7 8 D] 
是否Bogon: No [7 8 A D] 
是否机器人: No [E]
DNS-黑名单: 338(Total_Check) 0(Clean) 8(Blacklisted) 10(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 4 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0001 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [A]
公司类型: hosting [A] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A B D] 
是否VPN: No [1 A D] 
是否Tor: No [1 3 A B D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A B] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D]
是否中继: No [D] 
是否Bogon: No [A D] 
DNS-黑名单: 338(Total_Check) 0(Clean) 0(Blacklisted) 338(Other) 
Google搜索可行性：YES
----------------三网回程--基于oneclickvirt/backtrace开源----------------
国家: HK 城市: Hong Kong 服务商: AS396982 Google LLC
北京电信 219.141.140.10  移动CMI    [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 检测不到回程路由节点的IP地址
上海电信 202.96.209.133  检测不到回程路由节点的IP地址
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 检测不到回程路由节点的IP地址
广州电信 58.60.188.222   检测不到回程路由节点的IP地址
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  检测不到回程路由节点的IP地址
成都电信 61.139.2.69     检测不到回程路由节点的IP地址
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  检测不到回程路由节点的IP地址
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
12.83 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
193.36 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
173.78 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
168.32 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
201.16 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
170.03 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
34.46 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    305.16 Mbps     443.08 Mbps     2.36     51.0%
中国香港         955.59 Mbps     9379.75 Mbps    3.18     0.0%
新加坡           522.55 Mbps     361.44 Mbps     36.66    0.0%
联通WuXi         931.74 Mbps     2437.21 Mbps    172.71   0.0%
电信浙江         310.90 Mbps     2010.17 Mbps    78.40    NULL
电信合肥5G       22.55 Mbps      345.85 Mbps     78.36    0.0%
移动Beijing      346.18 Mbps     542.02 Mbps     48.16    2.2%
------------------------------------------------------------------------
 总共花费      : 8 分 1 秒
 时间          : Wed Jun 12 06:08:31 UTC 2024
------------------------------------------------------------------------
```

## GCP 新加坡

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU @ 2.20GHz
 CPU 核心数        : 2
 CPU 频率          : 2199.998 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 256.00 KB / L3: 55.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 288.54 MiB / 973.98 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 2.13 GiB / 9.62 GiB
 启动盘路径        : /dev/sda1
 系统在线时间      : 13 days, 6 hour 12 min
 负载              : 0.50, 0.21, 0.07
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-21-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS396982 Google LLC
 IPV4 位置         : Singapore / Singapore / SG
 IPV6 ASN          : AS396982 Google Cloud
 IPV6 位置         : Singapore / Singapore
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          885 Scores
 2 线程测试(多核)得分:          1479 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          12858.36 MB/s
 单线程写测试:          1981.80 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         7.8 MB/s (1914 IOPS, 13.38s)            8.6 MB/s (2094 IOPS, 12.22s)
 1GB-1M Block           103 MB/s (98 IOPS, 10.18s)              151 MB/s (143 IOPS, 6.95s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 6.43 MB/s     (1.6k) | 94.55 MB/s    (1.4k)
Write      | 6.44 MB/s     (1.6k) | 95.04 MB/s    (1.4k)
Total      | 12.88 MB/s    (3.2k) | 189.59 MB/s   (2.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 99.32 MB/s     (193) | 98.29 MB/s      (95)
Write      | 104.60 MB/s    (204) | 104.83 MB/s    (102)
Total      | 203.92 MB/s    (397) | 203.13 MB/s    (197)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：新加坡
[IPV6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：新加坡
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN10S14)
Youtube识别地域: 新加坡(SG)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN10S14)
Youtube识别地域: 新加坡(SG)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：SG 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：SG 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: SG)
 Disney+:                               No (IP Banned By Disney+ 1)
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: SG)
 Amazon Prime Video:                    Yes (Region: SG)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  Yes (Region: SG)
 Instagram Licensed Audio:              Yes
 OneTrust Region:                       SG [Unknown]
 iQyi Oversea Region:                   SG
 Bing Region:                           SG
 YouTube CDN:                           [SIN10S14] in [Singapore]
 Netflix Preferred CDN:                 Singapore
 ChatGPT:                               No (Only Available with Web Browser)
 Wikipedia Editability:                 Yes
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        SGD
 ---Forum---
 Reddit:                                No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  IPv6 Is Not Currently Supported
 Disney+:                               IPv6 Is Not Currently Supported
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: SG)
 Amazon Prime Video:                    IPv6 Is Not Currently Supported
 TVBAnywhere+:                          IPv6 Is Not Currently Supported
 Spotify Registration:                  Yes (Region: SG)
 Instagram Licensed Audio:              Yes
 OneTrust Region:                       SG [Unknown]
 iQyi Oversea Region:                   IPv6 Is Not Currently Supported
 Bing Region:                           SG
 YouTube CDN:                           [SIN10S14] in [Singapore]
 Netflix Preferred CDN:                 Singapore
 ChatGPT:                               Failed (Network Connection)
 Wikipedia Editability:                 Yes
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:                                IPv6 Is Not Currently Supported
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【SG】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 14 [8] 
VPN得分(越低越好): 57 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 31 [1] 93 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0001 (Very Low) [A] 
公司滥用得分(越低越好): 0.0002 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] business [8] hosting [0 7 9 A]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1 5 6 A] No [8]
是否移动设备: Yes [E] No [5 A]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B D]
是否VPN: No [0 1 6 7 A C D] Yes [E]
是否Tor: No [0 1 3 6 7 8 A B D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E]
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: Yes [A E] No [7 8 D]
是否威胁: No [7 8 D] 
是否中继: No [0 7 8 D] 
是否Bogon: No [7 8 A D] 
是否机器人: No [E] 
DNS-黑名单: 338(Total_Check) 0(Clean) 9(Blacklisted) 11(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 4 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0001 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [A]
公司类型: hosting [A] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A B D] 
是否VPN: No [1 A D]
是否TorExit: No [1 D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A B] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D] 
是否中继: No [D] 
是否Bogon: No [A D] 
DNS-黑名单: 338(Total_Check) 0(Clean) 0(Blacklisted) 338(Other) 
Google搜索可行性：YES
----------------三网回程--基于oneclickvirt/backtrace开源----------------
国家: SG 城市: Singapore 服务商: AS396982 Google LLC
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 检测不到回程路由节点的IP地址
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  检测不到回程路由节点的IP地址
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
42.26 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
43.30 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
48.76 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
47.24 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
46.84 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
43.31 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
45.16 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
47.23 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
47.50 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
210.64 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    968.90 Mbps     2689.94 Mbps    1.45     0.0%
新加坡           480.72 Mbps     8162.59 Mbps    1.76     0.0%
中国香港         530.73 Mbps     1509.72 Mbps    38.56    0.0%
联通上海5G       29.98 Mbps      30.08 Mbps      74.09    0.0%
联通WuXi         574.07 Mbps     1642.22 Mbps    69.95    1.1%
电信Suzhou5G     518.72 Mbps     931.32 Mbps     71.80    NULL
电信浙江         234.46 Mbps     1254.69 Mbps    70.77    NULL
移动Beijing      418.15 Mbps     962.12 Mbps     80.67    0.0%
------------------------------------------------------------------------
 总共花费      : 9 分 23 秒
 时间          : Wed Jun 12 06:10:39 UTC 2024
------------------------------------------------------------------------
```

## GCP 日本

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU @ 2.20GHz
 CPU 核心数        : 2
 CPU 频率          : 2199.998 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 256.00 KB / L3: 55.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 276.80 MiB / 973.98 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 2.20 GiB / 9.62 GiB
 启动盘路径        : /dev/sda1
 系统在线时间      : 13 days, 6 hour 4 min
 负载              : 1.00, 0.35, 0.12
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-21-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS396982 Google LLC
 IPV4 位置         : Tokyo / Tokyo / JP
 IPV6 ASN          : AS396982 Google Cloud
 IPV6 位置         : Tokyo / Tokyo / Japan
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		621 Scores
 2 线程测试(多核)得分: 		234 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		2564.87 MB/s
 单线程写测试:		2065.70 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		6.8 MB/s (1653 IOPS, 15.48s)		9.6 MB/s (2352 IOPS, 10.88s)
 1GB-1M Block		103 MB/s (98 IOPS, 10.17s)		153 MB/s (145 IOPS, 6.87s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 6.44 MB/s     (1.6k) | 83.62 MB/s    (1.3k)
Write      | 6.44 MB/s     (1.6k) | 84.06 MB/s    (1.3k)
Total      | 12.88 MB/s    (3.2k) | 167.68 MB/s   (2.6k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 95.13 MB/s     (185) | 96.87 MB/s      (94)
Write      | 100.18 MB/s    (195) | 103.32 MB/s    (100)
Total      | 195.31 MB/s    (380) | 200.20 MB/s    (194)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：日本
[IPV6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：日本
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT12S24)
Youtube识别地域: 日本(JP)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT12S24)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：JP 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：JP 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: JP)
 Disney+:				No (IP Banned By Disney+ 1)
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			Yes (Region: JP)
 TVBAnywhere+:				Yes
 Spotify Registration:			Yes (Region: JP)
 Instagram Licensed Audio:		Yes
 OneTrust Region:			JP [Tokyo]
 iQyi Oversea Region:			JP
 Bing Region:				JP
 YouTube CDN:				[NRT12S24] in [Tokyo]
 Netflix Preferred CDN:			Tokyo
 ChatGPT:				No (Only Available with Web Browser)
 Wikipedia Editability:			Yes
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			JPY
 ---Forum---
 Reddit:				No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					IPv6 Is Not Currently Supported
 Disney+:				IPv6 Is Not Currently Supported
 Netflix:				Originals Only
 YouTube Premium:			No
 Amazon Prime Video:			IPv6 Is Not Currently Supported
 TVBAnywhere+:				IPv6 Is Not Currently Supported
 Spotify Registration:			Yes (Region: JP)
 Instagram Licensed Audio:		Yes
 OneTrust Region:			JP [Tokyo]
 iQyi Oversea Region:			IPv6 Is Not Currently Supported
 Bing Region:				JP
 YouTube CDN:				[NRT12S24] in [Tokyo]
 Netflix Preferred CDN:			Tokyo
 ChatGPT:				Failed (Network Connection)
 Wikipedia Editability:			Yes
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			IPv6 Is Not Currently Supported
 ---Forum---
 Reddit:				IPv6 Is Not Currently Supported
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【JP】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 15 [8] 
VPN得分(越低越好): 57 [8] 
代理得分(越低越好): 98 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 99 [8] 
欺诈得分(越低越好): 65 [E] 31 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0001 (Very Low) [A] 
公司滥用得分(越低越好): 0.0002 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] business [8] hosting [0 7 9 A]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7 D] 
是否数据中心: No [8] Yes [0 1 5 6 A]
是否移动设备: No [5 A] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 A B D] Yes [E]
是否VPN: No [0 1 6 7 A C D] Yes [E]
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
DNS-黑名单: 338(Total_Check) 0(Clean) 7(Blacklisted) 9(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 4 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0001 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: hosting [A] DataCenter/WebHosting/Transit [3]
公司类型: hosting [A] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A B D] 
是否VPN: No [1 A D] 
是否TorExit: No [1 D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A B] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D]
是否中继: No [D] 
是否Bogon: No [A D] 
DNS-黑名单: 338(Total_Check) 0(Clean) 0(Blacklisted) 338(Other) 
Google搜索可行性：YES
----------------三网回程--基于oneclickvirt/backtrace开源----------------
国家: JP 城市: Tokyo 服务商: AS396982 Google LLC
北京电信 219.141.140.10  电信163    [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 检测不到回程路由节点的IP地址
广州电信 58.60.188.222   检测不到回程路由节点的IP地址
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     检测不到回程路由节点的IP地址
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
1.71 ms  AS15169  日本, 东京都, 东京, google.com
84.06 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
89.37 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
58.41 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
48.91 ms  AS15169  中国, 香港, google.com
54.34 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
55.00 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
60.19 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
60.40 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
58.26 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
57.18 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
81.50 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
82.76 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
87.61 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
86.71 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 953.07 Mbps	 9658.51 Mbps	 2.31	  0.0%
中国香港	 517.24 Mbps	 1990.16 Mbps	 51.98	  0.0%
新加坡		 269.33 Mbps	 69.94 Mbps	 74.57	  0.0%
联通海南	 432.63 Mbps	 1289.18 Mbps	 69.95	  NULL
联通WuXi	 537.46 Mbps	 758.63 Mbps	 86.56	  0.0%
电信Suzhou5G	 325.19 Mbps	 503.83 Mbps	 57.21	  NULL
电信浙江	 150.07 Mbps	 1166.35 Mbps	 89.93	  NULL
移动Beijing	 454.48 Mbps	 607.92 Mbps	 96.57	  0.0%
------------------------------------------------------------------------
 总共花费      : 9 分 47 秒
 时间          : Wed Jun 12 06:11:06 UTC 2024
------------------------------------------------------------------------
```
