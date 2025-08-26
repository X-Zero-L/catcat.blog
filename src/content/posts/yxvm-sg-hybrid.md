---
tags: [sg-server]
title: "YXVM SG Hybrid测评 +原生 IP配置解锁"
published: 2024-08-13
---

之前没买到，今天终于补货买到了。老朋友，不再赘述。这款是在优化线路的基础上，加一刀可以附加一个流媒体解锁IP。只要设置中国优化IP入，流媒体解锁IP出，就可以实现高速+流媒体解锁。还是挺有性价比的，有 ip 需求的还是可以的。

## 机器配置

原生 IP 附加费 1 刀

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1723529920767.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1723529920767.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/QQ_1723529920767.jpg" alt="" loading="lazy">
</picture>

### 测评

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 13 minutes
Processor  : Intel(R) Xeon(R) Gold 6133 CPU @ 2.50GHz
CPU cores  : 1 @ 2494.140 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 977.3 MiB
Swap       : 0.0 KiB
Disk       : 9.8 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-18-cloud-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Sakura Link Limited
ASN        : AS49304 SAKURA LINK LIMITED
Host       : Sgp
Location   : Singapore, North West (03)
Country    : Singapore

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 177.34 MB/s  (44.3k) | 2.32 GB/s    (36.3k)
Write      | 177.80 MB/s  (44.4k) | 2.33 GB/s    (36.5k)
Total      | 355.14 MB/s  (88.7k) | 4.66 GB/s    (72.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 5.27 GB/s    (10.3k) | 2.08 GB/s     (2.0k)
Write      | 5.55 GB/s    (10.8k) | 2.22 GB/s     (2.1k)
Total      | 10.83 GB/s   (21.1k) | 4.30 GB/s     (4.2k)

```

### Bench

```shell
----------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) Gold 6133 CPU @ 2.50GHz
 CPU Cores          : 1 @ 2494.140 MHz
 CPU Cache          : 16384 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 9.8 GB (1.2 GB Used)
 Total Mem          : 977.3 MB (189.7 MB Used)
 System uptime      : 0 days, 0 hour 18 min
 Load average       : 0.23, 0.35, 0.23
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-18-cloud-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS48024 NEROCLOUD LTD
 Location           : Singapore / SG
 Region             : Singapore
----------------------------------------------------------------------
 I/O Speed(1st run) : 806 MB/s
 I/O Speed(2nd run) : 938 MB/s
 I/O Speed(3rd run) : 827 MB/s
 I/O Speed(average) : 857.0 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    9226.39 Mbps      8391.89 Mbps        0.99 ms     
 Los Angeles, US  527.94 Mbps       4249.05 Mbps        181.78 ms   
 Dallas, US       377.98 Mbps       3010.58 Mbps        236.25 ms   
 Montreal, CA     126.55 Mbps       938.98 Mbps         254.85 ms   
 Amsterdam, NL    271.32 Mbps       4402.95 Mbps        156.78 ms   
 Hongkong, CN     2031.01 Mbps      5099.65 Mbps        35.58 ms    
 Mumbai, IN       1487.90 Mbps      5481.79 Mbps        57.63 ms    
 Singapore, SG    3602.23 Mbps      9469.43 Mbps        1.54 ms     
 Tokyo, JP        837.66 Mbps       5905.29 Mbps        67.66 ms    
----------------------------------------------------------------------
 Finished in        : 4 min 45 sec
 Timestamp          : 2024-08-13 06:29:02 UTC
----------------------------------------------------------------------

```

### 融合怪测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Gold 6133 CPU @ 2.50GHz
 CPU 核心数        : 1
 CPU 频率          : 2494.140 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 4.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 139.91 MiB / 977.29 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.18 GiB / 9.68 GiB
 启动盘路径        : /dev/sda1
 系统在线时间      : 0 days, 0 hour 27 min
 负载              : 0.49, 0.56, 0.41
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-18-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS48024 NEROCLOUD LTD
 IPV4 位置         : Singapore / Singapore / SG
 IPV6 ASN          : AS49304 Sakura Link
 IPV6 位置         : United States
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          916 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          18867.60 MB/s
 单线程写测试:          15397.08 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         23.2 MB/s (5664 IOPS, 4.52s)            37.8 MB/s (9217 IOPS, 2.78s)
 1GB-1M Block           602 MB/s (574 IOPS, 1.74s)              1.7 GB/s (1604 IOPS, 0.62s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 197.04 MB/s  (49.2k) | 2.42 GB/s    (37.9k)
Write      | 197.56 MB/s  (49.3k) | 2.44 GB/s    (38.1k)
Total      | 394.60 MB/s  (98.6k) | 4.87 GB/s    (76.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 5.36 GB/s    (10.4k) | 5.21 GB/s     (5.0k)
Write      | 5.64 GB/s    (11.0k) | 5.56 GB/s     (5.4k)
Total      | 11.00 GB/s   (21.5k) | 10.78 GB/s   (10.5k)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
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
 Disney+:                               Yes (Region: SG)
 Netflix:                               Yes (Region: SG)
 YouTube Premium:                       Yes (Region: SG)
 Amazon Prime Video:                    Yes (Region: SG)
 TVBAnywhere+:                          Yes
 Spotify Registration:                  No
 Instagram Licensed Audio:              No
 OneTrust Region:                       SG [Unknown]
 iQyi Oversea Region:                   SG
 Bing Region:                           SG (Risky)
 YouTube CDN:                           Singapore
 Netflix Preferred CDN:                 Singapore
 ChatGPT:                               Yes
 Google Gemini:                         Yes (Region: SGP)
 Wikipedia Editability:                 No
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        SGD
 ---Forum---
 Reddit:                                Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  IPv6 Is Not Currently Supported
 Disney+:                               IPv6 Is Not Currently Supported
 Netflix:                               Originals Only
 YouTube Premium:                       No
 Amazon Prime Video:                    IPv6 Is Not Currently Supported
 TVBAnywhere+:                          IPv6 Is Not Currently Supported
 Spotify Registration:                  No
 Instagram Licensed Audio:              No
 OneTrust Region:                       US [Unknown]
 iQyi Oversea Region:                   IPv6 Is Not Currently Supported
 Bing Region:                           SG (Risky)
 YouTube CDN:                           Singapore
 Netflix Preferred CDN:                 Singapore
 ChatGPT:                               Failed (Network Connection)
 Google Gemini:                         No
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
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 95 [8] 
VPN得分(越低越好): 0 [8] 
代理得分(越低越好): 13 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 3 [8] 
欺诈得分(越低越好): 65 [E] 0 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0002 (Very Low) [A] 
公司滥用得分(越低越好): 0.002 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2] 无记录数: 93 [2]  
安全信息:
使用类型: hosting [0 7 9 A] business [8] hosting - moderate probability [C] DataCenter/WebHosting/Transit [3]
公司类型: hosting [0 7] business [A]
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1] No [5 6 8 A C]
是否移动设备: No [5 A C] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 A B C D] Yes [E]
是否VPN: Yes [E] No [0 1 6 7 A C D]
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 310(Total_Check) 0(Clean) 6(Blacklisted) 16(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0 (Very Low) [A] 
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
DNS-黑名单: 310(Total_Check) 0(Clean) 0(Blacklisted) 310(Other) 
Google搜索可行性：YES
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✔     ✔     ✔     ✘     ✔     ✘    
Sohu      ✘     ✘     ✔     ✘     ✘     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✔     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✔     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✘     ✘    
AOL       ✔     ✔     ✘     ✘     ✘     ✘    
GMX       ✔     ✘     ✔     ✘     ✔     ✘    
Sina      ✔     ✘     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 检测不到回程路由节点的IP地址
上海电信 202.96.209.133  检测不到回程路由节点的IP地址
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
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
0.40 ms         * DOD
1.37 ms         AS2914 [NTT-BACKBONE] 新加坡 gin.ntt.net
* ms    AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
* ms    AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
142.43 ms       AS4134 中国 广东 深圳 福田区 www.chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.35 ms         * DOD
223.87 ms       AS4837 [CU169-BACKBONE] 德国 黑森 美因河畔法兰克福 chinaunicom.cn 联通
228.55 ms       AS4837 [CU169-BACKBONE] 中国 北京 chinaunicom.cn 联通
230.10 ms       AS4837 [CU169-BACKBONE] 中国 北京 chinaunicom.cn 联通
254.94 ms       AS17816 [UNICOM-GD] 中国 广东省 广州市 chinaunicom.cn 联通
254.43 ms       AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
259.16 ms       AS17623 [APNIC-AP] 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.43 ms         * DOD
50.59 ms        AS4637 [TELSTRAGLOBAL-AP] 新加坡 telstraglobal.com
49.01 ms        AS4637 [TELSTRAGLOBAL-AP] 美国 纽约州 纽约 telstraglobal.com
97.71 ms        AS4637 [TELSTRAGLOBAL-AP] 澳大利亚 新南威尔士州 悉尼 telstraglobal.com
97.00 ms        AS4637 [TELSTRAGLOBAL-AP] 澳大利亚 新南威尔士州 悉尼 telstraglobal.com
96.60 ms        AS4637 [TELSTRAGLOBAL-AP] 澳大利亚 新南威尔士州 悉尼 telstraglobal.com
95.19 ms        AS58453 [CMI-INT] 澳大利亚 新南威尔士州 悉尼 cmi.chinamobile.com
95.08 ms        AS58453 [CMI-INT] 新加坡 cmi.chinamobile.com 移动
284.73 ms       AS58453 [CMI-INT] 中国 广东 广州 cmi.chinamobile.com 移动
279.02 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
278.45 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
135.26 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
141.83 ms       AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
136.14 ms       AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    9219.70 Mbps    7933.59 Mbps    1.06     0.0%
新加坡           9085.24 Mbps    9064.00 Mbps    2.61     NULL
中国香港         713.24 Mbps     715.61 Mbps     38.82    NULL
联通WuXi         1.15 Mbps       2538.61 Mbps    167.77   12.2%
```

### 流媒体解锁测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1723711138454.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/08/QQ_1723711138454.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/08/QQ_1723711138454.jpg" alt="" loading="lazy">
</picture>

```shell
########################################################################
一、基础信息（Maxmind 数据库）
自治系统号：            AS48024
组织：                  Nerocloud Ltd
坐标：                  103°48′5″E, 1°22′2″N
地图：                  https://check.place/1.3673,103.8014,15,cn
城市：                  N/A
使用地：                [SG]新加坡, [AS]亚洲
注册地：                [SG]新加坡
时区：                  Asia/Singapore
IP类型：                 原生IP 
二、IP类型属性
数据库：      IPinfo    ipregistry    ipapi     AbuseIPDB  IP2LOCATION 
使用类型：     机房        机房        机房        机房        机房    
公司类型：     机房        机房        机房    
三、风险评分
风险等级：      极低         低       中等       高         极高
SCAMALYTICS：  0|低风险
ipapi：       0.20%|低风险
AbuseIPDB：    0|低风险
IPQS：                        75|可疑IP
DB-IP：         |低风险
四、风险因子
库： IP2LOCATION ipapi ipregistry IPQS SCAMALYTICS ipdata IPinfo IPWHOIS
地区：    [SG]    [SG]    [SG]    [SG]    [SG]    [SG]    [SG]    [SG]
代理：     否      否      否      是      否      否      否      否 
Tor：      否      否      否      否      否      否      否      否 
VPN：      否      否      否      是      否      无      否      否 
服务器：   是      否      是      无      否      否      是      否 
滥用：     否      否      否      否      无      否      无      无 
机器人：   否      否      无      否      否      无      无      无 
五、流媒体及AI服务解锁检测
服务商：  TikTok   Disney+  Netflix Youtube  AmazonPV  Spotify  ChatGPT 
状态：     解锁     解锁     解锁     解锁     解锁     解锁     解锁   
地区：     [SG]     [SG]     [SG]     [SG]     [SG]     [SG]     [SG]   
方式：     原生     原生     原生     原生     原生     原生     原生   
六、邮局连通性及黑名单检测
本地25端口：阻断
IP地址黑名单数据库：  有效 439   正常 437   已标记 2   黑名单 0
========================================================================
```

```shell
[ Multination ] =============
Dazn                      YES (Region: SG)
Disney+                   YES (Region: SG)
Netflix                   YES (Region: SG)
Netflix CDN               SG
Youtube Premium           YES (Region: SG)
Youtube CDN               SIN
Amazon Prime Video        YES (Region: SG)
TVBAnywhere+              YES (Region: SG)
iQiYi                     YES (Region: SG)
Viu.com                   YES (Region: SG)
Spotify                   YES (Region: SG)
Steam                     YES (Region: SG)
ChatGPT                   YES (Region: SG)
Wikipedia                 NO
Reddit                    YES
TikTok                    YES (Region: SG)
Bing                      YES (Region: SG)
Instagram Audio           YES
```

## 食用教程

### 禁用 ipv6

```shell
编辑 /etc/sysctl.conf，添加或者编辑以下变量：
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
net.ipv6.conf.lo.disable_ipv6 = 1
net.ipv6.conf.eth0.disable_ipv6 = 1
```

### 检查 ip 配置

```shell
vim /etc/netplan/50-cloud-init.yaml
检查是否原生 ip 103 在前，优化 ip 178 在后
```

```shell
network:
    version: 2
    ethernets:
        eth0:
            addresses:
            - 103.*/32
            - 178.*/32
            dhcp6: true
            gateway4: 100.100.0.0
            match:
                macaddress: bc:24:11:65:3f:64
            nameservers:
                addresses:
                - 1.1.1.1
                search: []
            set-name: eth0
```

如果不是以上配置，修改 ip 顺序，实现103原生IP出站。

验证一下出口IP是否更改为原生 ip

```shell
curl ip.sb
```

如果返回的是 103 段的，就没问题。