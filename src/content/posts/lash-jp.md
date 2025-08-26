---
tags: [jp-server]
title: "Lash JP 测评"
published: 2024-07-27
---

**他家小鸡一开始卖的蛮贵，当时的JP还是说两个月后会迁移到Epyc上，后来成本问题好像不做了。目前有香港，日本，美国,，后续会有新加坡吧。纯国际线路，到国内没有优化，大陆的话联通直连，移动部分直连。JP的母鸡采用的是采用Xeon E5 2680v4平台。最近应该是在被ddos吧，用的时候多次断联。整体表现一般，中规中矩。美国就不测了，隔壁Nube的下游。**

## 套餐

**CPU : 0.5 Core Fair Allocation  
RAM : 512MB DDR4  
Disk : 5GB NVMe  
Traffic/Speed : 2000G (in + out)@1****G****  
IPs : 1 IPv4 /64 IPv6**

## 测评

### Bench

```shell
---------------------------------------------------------------------- CPU Model          : Intel Core Processor (Broadwell, IBRS) CPU Cores          : 1 @ 2399.996 MHz CPU Cache          : 16384 KB AES-NI             : ✓ Enabled VM-x/AMD-V         : ✓ Enabled Total Disk         : 4.9 GB (2.0 GB Used) Total Mem          : 457.8 MB (135.0 MB Used) System uptime      : 0 days, 18 hour 58 min Load average       : 0.00, 0.00, 0.00 OS                 : Debian GNU/Linux 12 Arch               : x86_64 (64 Bit) Kernel             : 6.1.0-9-amd64 TCP CC             : cubic Virtualization     : KVM IPv4/IPv6          : ✓ Online / ✓ Online Organization       : AS215304 YUWAN NETWORKS LIMITED Location           : Tokyo / JP Region             : Tokyo---------------------------------------------------------------------- I/O Speed(1st run) : 50.0 MB/s I/O Speed(2nd run) : 50.1 MB/s I/O Speed(3rd run) : 50.1 MB/s I/O Speed(average) : 50.1 MB/s---------------------------------------------------------------------- Node Name        Upload Speed      Download Speed      Latency      Speedtest.net    994.46 Mbps       931.22 Mbps         0.37 ms      Los Angeles, US  808.89 Mbps       653.69 Mbps         104.22 ms    Dallas, US       609.85 Mbps       759.08 Mbps         142.17 ms    Montreal, CA     184.91 Mbps       4.84 Mbps           175.96 ms    Amsterdam, NL    277.53 Mbps       7.53 Mbps           223.98 ms    Hongkong, CN     258.97 Mbps       7.32 Mbps           224.10 ms    Mumbai, IN       315.18 Mbps       799.63 Mbps         133.71 ms    Singapore, SG    99.91 Mbps        1.20 Mbps           181.73 ms    Tokyo, JP        999.75 Mbps       917.65 Mbps         1.14 ms     ---------------------------------------------------------------------- Finished in        : 5 min 32 sec Timestamp          : 2024-07-27 09:23:35 CST----------------------------------------------------------------------
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel Core Processor (Broadwell, IBRS)
 CPU 核心数        : 1
 CPU 频率          : 2399.996 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 4.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 171.04 MiB / 457.77 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 2.03 GiB / 4.82 GiB
 启动盘路径        : /dev/vda3
 系统在线时间      : 0 days, 19 hour 5 min
 负载              : 0.33, 0.21, 0.11
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Inconclusive
 IPV4 ASN          : AS215304 YUWAN NETWORKS LIMITED
 IPV4 位置         : Tokyo / Tokyo / JP
 IPV6 ASN          : AS215304 YUWAN NETWORKS LIMITED
 IPV6 位置         : United Kingdom
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		842 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		17847.22 MB/s
 单线程写测试:		13195.69 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		28.7 MB/s (7012 IOPS, 3.65s)		51.8 MB/s (12636 IOPS, 2.03s)
 1GB-1M Block		50.3 MB/s (48 IOPS, 20.86s)		50.3 MB/s (47 IOPS, 20.86s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 48.77 MB/s   (12.1k) | 48.68 MB/s     (760)
Write      | 48.85 MB/s   (12.2k) | 48.98 MB/s     (765)
Total      | 97.63 MB/s   (24.4k) | 97.66 MB/s    (1.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 46.51 MB/s      (90) | 46.69 MB/s      (45)
Write      | 48.98 MB/s      (95) | 49.00 MB/s      (47)
Total      | 95.50 MB/s     (185) | 95.69 MB/s      (92)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：日本
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA16S31)
Youtube识别地域: 日本(JP)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
Youtube识别地域: 日本(JP)
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
 Disney+:				Yes (Region: JP)
 Netflix:				Yes (Region: JP)
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			Yes (Region: JP)
 TVBAnywhere+:				Yes
 Spotify Registration:			Yes (Region: JP)
 Instagram Licensed Audio:		No
 OneTrust Region:			JP [Tokyo]
 iQyi Oversea Region:			JP
 Bing Region:				JP
 YouTube CDN:				Frankfurt
 Netflix Preferred CDN:			[Nearoute] in [Los Angeles, CA]
 ChatGPT:				Yes
 Google Gemini:				Yes (Region: JPN)
 Wikipedia Editability:			Yes
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			JPY
 ---Forum---
 Reddit:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					IPv6 Is Not Currently Supported
 Disney+:				IPv6 Is Not Currently Supported
 Netflix:				Failed (Network Connection)
 YouTube Premium:			Yes (Region: JP)
 Amazon Prime Video:			IPv6 Is Not Currently Supported
 TVBAnywhere+:				IPv6 Is Not Currently Supported
 Spotify Registration:			Failed (Network Connection)
 Instagram Licensed Audio:		No
 OneTrust Region:			GB [Unknown]
 iQyi Oversea Region:			IPv6 Is Not Currently Supported
 Bing Region:				JP
 YouTube CDN:				Tokyo
 Netflix Preferred CDN:			Failed (CDN IP Not Found)
 ChatGPT:				Failed (Network Connection)
 Google Gemini:				Yes (Region: JPN)
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
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 49 [8] 
VPN得分(越低越好): 3 [8] 
代理得分(越低越好): 99 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 53 [8] 
欺诈得分(越低越好): 0 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0007 (Low) [A] 
公司滥用得分(越低越好): 0.0039 (Low) [A] 
威胁级别: low [B]
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: unknown [C] FixedLineISP [3] hosting [0 7] business [8 A]
公司类型: hosting [0] business [7 A]
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 A] No [1 5 6 8 C]
是否移动设备: No [5 A C] Yes [E]
是否代理: Yes [E] No [0 1 4 5 6 7 8 A B C D]
是否VPN: No [0 1 6 7 A C D] Yes [E]
是否Tor: No [0 1 3 6 7 8 A B C D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 310(Total_Check) 0(Clean) 5(Blacklisted) 23(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0007 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: business [A] DataCenter/WebHosting/Transit [3]
公司类型: business [A] 
是否云提供商: Yes [D]
是否数据中心: Yes [1] No [A]
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
DNS-黑名单: 310(Total_Check) 0(Clean) 0(Blacklisted) 310(Other) 
Google搜索可行性：YES
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✘     ✔     ✔     ✘     ✔     ✘    
Sohu      ✘     ✔     ✔     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✘     ✘    
AOL       ✘     ✔     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✘     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  检测不到回程路由节点的IP地址
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 检测不到回程路由节点的IP地址
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  检测不到回程路由节点的IP地址
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       检测不到回程路由节点的IP地址
成都移动 211.137.96.205  检测不到回程路由节点的IP地址
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.93 ms  AS215304  日本, 东京都, 东京, nasstar.com
0.74 ms  AS51847  日本, 东京都, 东京, datis.com.au
0.67 ms  *  局域网
271.94 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
256.13 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.60 ms  AS215304  日本, 东京都, 东京, nasstar.com
4.68 ms  AS51847  日本, 东京都, 东京, datis.com.au
0.59 ms  *  局域网
155.37 ms  AS3356  美国, 加利福尼亚州, 洛杉矶, level3.com
304.75 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
311.99 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
304.67 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
304.66 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
305.71 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
307.03 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.22 ms  AS215304  日本, 东京都, 东京, nasstar.com
3.97 ms  AS51847  日本, 东京都, 东京, datis.com.au
0.53 ms  *  局域网
294.86 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
297.38 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
297.32 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
299.58 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
296.49 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 996.26 Mbps	 942.42 Mbps	 0.34	  NULL
日本东京	 998.87 Mbps	 922.52 Mbps	 0.68	  0.0%
洛杉矶		 703.33 Mbps	 669.38 Mbps	 102.14	  0.0%
联通WuXi	 10.51 Mbps	 1.84 Mbps	 238.19	  0.5%
电信Zhenjiang5G	 1.20 Mbps	 130.82 Mbps	 1393.87	  NULL
------------------------------------------------------------------------
 总共花费      : 8 分 54 秒
 时间          : Sat Jul 27 09:33:34 CST 2024
------------------------------------------------------------------------
```

### 流媒体解锁测试

```shell
============[ Multination ]============
 Dazn:                  原生解锁        Yes (Region: JP)
 TikTok:                原生解锁        Yes (Region: JP)
 Disney+:               DNS 解锁        Yes (Region: JP)
 Netflix:               DNS 解锁        Yes (Region: JP)
 YouTube Premium:       原生解锁        Yes (Region: JP)
 Amazon Prime Video:    原生解锁        Yes (Region: JP)
 TVBAnywhere+:          原生解锁        Yes
 iQyi Oversea Region:   原生解锁        JP
 YouTube CDN:                           Frankfurt 
 Netflix Preferred CDN:                 Associated with [Nearoute] in [Los Angeles, CA ]
 Spotify Registration:  DNS 解锁        Yes (Region: JP)
 Steam Currency:                        JPY
 ChatGPT:               原生解锁        Yes (Region: GB)
 Google Gemini:         原生解锁        Yes (Region: JPN)
 Bing Region:                           JP
 Wikipedia Editability:                 Yes
 Instagram Licensed Audio:              Failed
 ---Forum---
 Reddit:                                Yes
=======================================
===============[ Japan ]===============
 DMM:                                   Yes
 DMM TV:                                Yes
 Abema.TV:                              Yes
 Niconico:                              Yes
 Telasa:                                Yes
 U-NEXT:                                Yes
 Hulu Japan:                            No
 TVer:                                  Failed (Network Connection)
 Lemino:                                No
 WOWOW:                                 Failed
 VideoMarket:                           Yes
 D Anime Store:                         No
 FOD(Fuji TV):                          No
 Radiko:                                No
 Karaoke@DAM:                           No
 J:com On Demand:                       Failed (Unexpected Result: 404)
 ---Game---
 Kancolle Japan:                        No
 Pretty Derby Japan:                    Yes
 Konosuba Fantastic Days:               Yes
 Princess Connect Re:Dive Japan:        Yes
 Project Sekai: Colorful Stage:         Yes
 ---Music---
 Mora:                                  Yes
 music.jp:                              No
 ---Forum---
 EroGameSpace:                          Yes
=======================================
```

```shell
        报告时间：2024-07-27 09:38:06 CST  脚本版本：v2024-07-24
########################################################################
一、基础信息（Maxmind 数据库）
自治系统号：            AS215304
组织：                  Yuwan Networks Limited
坐标：                  139°41′24″E, 35°41′21″N
地图：                  https://check.place/35.6893,139.6899,15,cn
城市：                  东京都, 东京, 151-0053
使用地：                [JP]日本, [AS]亚洲
注册地：                [GB]英国
时区：                  Asia/Tokyo
IP类型：                 广播IP 
二、IP类型属性
数据库：      IPinfo    ipregistry    ipapi     AbuseIPDB  IP2LOCATION 
使用类型：     机房        机房        商业        家宽        家宽    
公司类型：     机房        机房        商业    
三、风险评分
风险等级：      极低         低       中等       高         极高
SCAMALYTICS：  0|低风险
ipapi：           0.39%|低风险
AbuseIPDB：    0|低风险
IPQS：                        75|可疑IP
四、风险因子
库： IP2LOCATION ipapi ipregistry IPQS SCAMALYTICS ipdata IPinfo IPWHOIS
地区：    [JP]    [JP]    [JP]    [JP]    [JP]    [JP]    [JP]    [JP]
代理：     否      否      否      是      否      否      否      否 
Tor：      否      否      否      否      否      否      否      否 
VPN：      否      否      否      是      否      无      否      否 
服务器：   否      是      是      无      否      否      是      否 
滥用：     否      否      否      否      无      否      无      无 
机器人：   否      否      无      否      否      无      无      无 
五、流媒体及AI服务解锁检测
服务商：  TikTok   Disney+  Netflix Youtube  AmazonPV  Spotify  ChatGPT 
状态：     解锁     解锁     解锁     解锁     解锁     解锁     解锁   
地区：     [JP]     [JP]     [JP]     [JP]     [JP]     [JP]     [GB]   
方式：     原生      DNS      DNS     原生     原生      DNS     原生   
六、邮局连通性及黑名单检测
本地25端口：阻断
IP地址黑名单数据库：  有效 439   正常 429   已标记 10   黑名单 0
========================================================================
```

### 节点实测

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/07/image-17.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/07/image-17.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/07/image-17.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/07/image-18.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/07/image-18.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/07/image-18.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/07/image-19.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/07/image-19.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/07/image-19.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/07/image-20.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/07/image-20.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/07/image-20.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/07/image-21.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/07/image-21.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/07/image-21.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/07/image-22.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/07/image-22.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/07/image-22.jpg" alt="" loading="lazy">
</picture>