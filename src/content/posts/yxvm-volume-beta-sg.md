---
tags: [sg-server]
title: "YxVM Volume Beta SG 测试"
published: 2024-06-02
---

这家我是严重怀疑和Sharon有什么关系的，虽然我没有证据。YxVM今天大量补货，似乎和之前的3刀款路由不一样。IP目测是刚购的，地区啥的还在RU。三网直，电联4837，移动cmi，不知道线路是否固定。如果能一直这样下去，在aws lightsail 全面涨价的现在，有可能会是个不错的选择。

> ## 套餐
> 
> **_CPU:1 VCPU  
> RAM:768MB RAM  
> DISK:5GB DISK  
> TRAFFIC:1TB whith 500Mbps PORT_**

## 测评

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 4 hours, 12 minutes
Processor  : Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz
CPU cores  : 1 @ 2399.996 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 725.3 MiB
Swap       : 0.0 KiB
Disk       : 4.9 GiB
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
Read       | 108.94 MB/s  (27.2k) | 644.17 MB/s  (10.0k)
Write      | 109.22 MB/s  (27.3k) | 647.56 MB/s  (10.1k)
Total      | 218.16 MB/s  (54.5k) | 1.29 GB/s    (20.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 580.19 MB/s   (1.1k) | 575.27 MB/s    (561)
Write      | 611.02 MB/s   (1.1k) | 613.58 MB/s    (599)
Total      | 1.19 GB/s     (2.3k) | 1.18 GB/s     (1.1k)
```

### 赛博路由测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-5.jpg" alt="" loading="lazy">
</picture>

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz
 CPU 核心数        : 1
 CPU 频率          : 2399.996 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 4.00 MB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 137.41 MiB / 725.29 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.16 GiB / 4.76 GiB
 启动盘路径        : /dev/sda1
 系统在线时间      : 0 days, 15 hour 20 min
 负载              : 0.05, 0.09, 0.08
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-18-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS18464 ALVIDI TECHNOLOGY Inc
 IPV4 位置         : Moscow / Moscow / RU
 IPV6 ASN          : AS49304 Sakura Link
 IPV6 位置         : United States
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		924 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		19473.48 MB/s
 单线程写测试:		15008.35 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		42.3 MB/s (10.33 IOPS, 2.48s)		52.3 MB/s (12760 IOPS, 2.01s)
 1GB-1M Block		854 MB/s (814 IOPS, 1.23s)		1.2 GB/s (1099 IOPS, 0.91s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 118.06 MB/s  (29.5k) | 645.57 MB/s  (10.0k)
Write      | 118.37 MB/s  (29.5k) | 648.96 MB/s  (10.1k)
Total      | 236.43 MB/s  (59.1k) | 1.29 GB/s    (20.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 580.03 MB/s   (1.1k) | 572.51 MB/s    (559)
Write      | 610.85 MB/s   (1.1k) | 610.64 MB/s    (596)
Total      | 1.19 GB/s     (2.3k) | 1.18 GB/s     (1.1k)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：美国
[IPV6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：新加坡
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 俄罗斯联邦(RU)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  洛杉机(LAX17S56)
Youtube识别地域: 中国香港(HK)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：US 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：SG 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: HK)
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			No 
 Amazon Prime Video:			Yes (Region: US)
 TVBAnywhere+:				No
 iQyi Oversea Region:			US
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Singapore  
 Spotify Registration:			Yes (Region: HK)
 Steam Currency:			HKD
 ChatGPT:				Only Available with Mobile APP
 Bing Region:				RU
 Wikipedia Editability:			Yes
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		Yes
 ---Forum---
 Reddit:				No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 YouTube CDN:				Los Angeles, CA 
 Netflix Preferred CDN:			Singapore  
 Spotify Registration:			Yes (Region: US)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Failed
 Bing Region:				SG
 Wikipedia Editability:			Yes
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		No
 ---Forum---
 Reddit:				Failed (Network Connection)
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2]
信任得分(越高越好): 99 [8] 
VPN得分(越低越好): 0 [8] 
代理得分(越低越好): 1 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 3 [8] 
欺诈得分(越低越好): 0 [1 E] 
滥用得分(越低越好): 0 [3] 
公司滥用得分(越低越好): 0.0016 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: corporate [9] business [7] DataCenter/WebHosting/Transit [3] isp [0]
公司类型: isp [0] hosting [7] business [A]
是否云提供商: Yes [7 D] 
是否数据中心: No [0 5 6 8 A] Yes [1]
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
DNS-黑名单: 338(Total_Check) 0(Clean) 6(Blacklisted) 14(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: business [A] DataCenter/WebHosting/Transit [3]
公司类型: business [A] 
是否云提供商: No [D]
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
国家: RU 城市: Moscow 服务商: AS18464 ALVIDI TECHNOLOGY Inc
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
0.80 ms  AS749  美国, defense.gov
33.29 ms  AS10099  中国, 香港, chinaunicom.com, 联通
34.99 ms  AS10099  中国, 香港, chinaunicom.com, 联通
43.35 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
42.30 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
47.00 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
44.80 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.16 ms  AS749  美国, defense.gov
40.96 ms  AS10099  中国, 香港, chinaunicom.com, 联通
38.42 ms  AS10099  中国, 香港, chinaunicom.com, 联通
39.92 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
46.86 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
44.25 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
124.56 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
39.42 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.14 ms  AS749  美国, defense.gov
37.66 ms  AS58453  中国, 香港, chinamobile.com, 移动
41.38 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
41.19 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
38.76 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
39.89 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
42.11 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
51.08 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
44.86 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 1530.13 Mbps	 2120.94 Mbps	 31.49	  0.0%
新加坡		 5592.33 Mbps	 4434.11 Mbps	 0.89	  0.0%
中国香港	 309.36 Mbps	 3955.01 Mbps	 32.29	  0.0%
联通海南	 178.05 Mbps	 3102.73 Mbps	 86.57	  NULL
联通WuXi	 224.14 Mbps	 1849.41 Mbps	 65.95	  0.0%
电信浙江	 599.33 Mbps	 94.88 Mbps	 64.24	  NULL
电信浙江	 12.27 Mbps	 54.44 Mbps	 109.09	  NULL
移动杭州5G	 841.49 Mbps	 97.64 Mbps	 64.98	  0.0%
------------------------------------------------------------------------
 总共花费      : 7 分 4 秒
 时间          : Sun Jun  2 02:17:48 UTC 2024
------------------------------------------------------------------------
```

IP质量就不管了，还没拉回来。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-6.jpg" alt="" loading="lazy">
</picture>