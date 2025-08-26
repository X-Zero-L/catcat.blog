---
tags: [hk-server]
title: "Ucloud 香港 AMD EPYC 测评"
published: 2023-10-12
---

总结：性价比不错，性能尚可，应该是和阿里的轻量香港同款，无法原价续费，年抛机。

## 活动套餐

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/10/image-182.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/10/image-182.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/10/image-182.jpg" alt="" loading="lazy">
</picture>

测试ip:

乌兰察布 117.50.162.54（带宽出口在北京，北京BGP）

北京 106.75.47.147

上海 106.75.252.202

广州 106.75.172.214

香港 103.218.242.25（回国加速线路） 香港轻量也是这个线路

台北 103.98.17.12（联通、移动回国延迟低）

日本 152.32.203.164

韩国 152.32.138.254

洛杉矶 45.43.58.220

孟买 123.58.203.38

曼谷 128.1.79.99

胡志明 152.32.162.124

新加坡 165.154.147.137

## 测评

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/10/415c49ebbaeef0142e9b1e88c80e3368.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/10/415c49ebbaeef0142e9b1e88c80e3368.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/10/415c49ebbaeef0142e9b1e88c80e3368.jpg" alt="" loading="lazy">
</picture>

### Yabs

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/10/20d8b60309742d9e10f5f32c4da6faeb.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/10/20d8b60309742d9e10f5f32c4da6faeb.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/10/20d8b60309742d9e10f5f32c4da6faeb.jpg" alt="" loading="lazy">
</picture>

### 融合怪测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC Processor
 CPU 核心数        : 2
 CPU 频率          : 2894.562 MHz
 CPU 缓存          : L1: 96.00 KB / L2: 512.00 KB / L3: 8.00 MB
 硬盘空间          : 1.24 GiB / 78.58 GiB
 启动盘路径        : /dev/vda1
 内存              : 138.62 MiB / 3.83 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 15 min
 负载              : 0.26, 0.54, 0.33
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-23-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS135377 UCLOUD INFORMATION TECHNOLOGY (HK) LIMITED
 IPV4 位置         : Hong Kong / Central and Western / HK
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		1647 Scores
 2 线程测试(多核)得分: 		3315 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		44594.99 MB/s
 单线程写测试:		19470.72 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		11.6 MB/s (2831 IOPS, 9.04s)		17.1 MB/s (4181 IOPS, 6.12s)
 1GB-1M Block		104 MB/s (99 IOPS, 10.11s)		445 MB/s (424 IOPS, 2.36s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 102.46 MB/s  (25.6k) | 215.07 MB/s   (3.3k)
Write      | 102.73 MB/s  (25.6k) | 216.21 MB/s   (3.3k)
Total      | 205.20 MB/s  (51.2k) | 431.29 MB/s   (6.7k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 205.17 MB/s    (400) | 203.40 MB/s    (198)
Write      | 216.07 MB/s    (422) | 216.95 MB/s    (211)
Total      | 421.24 MB/s    (822) | 420.35 MB/s    (409)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 香港(HK)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：香港
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: HK)
 HotStar:				No
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 iQyi Oversea Region:			HK
 Viu.com:				Yes (Region: HK)
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Hong Kong  
 Spotify Registration:			No
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 63②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes② ⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ 
  VPN(vpn):  No① ② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):  No② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  qq邮箱: Yes
  yandex邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Hong Kong 服务商: AS135377 UCLOUD INFORMATION TECHNOLOGY (HK) LIMITED
北京电信 219.141.136.12  联通4837[普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 联通4837[普通线路]           
上海电信 202.96.209.133  联通4837[普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 联通4837[普通线路]           
广州电信 58.60.188.222   联通4837[普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  联通4837[普通线路]           
成都电信 61.139.2.69     联通4837[普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  联通4837[普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.28 ms 	* RFC1918
0.51 ms 	* RFC1918
0.65 ms 	* RFC1918
4.16 ms 	* RFC1918
0.73 ms 	* RFC1918
5.26 ms 	* [CUG-ASIA] 中国 香港
202.54 ms 	* 中国 香港
2.08 ms 	* 中国 香港
2.20 ms 	* 中国 香港
9.46 ms 	AS10099 中国 广东省 广州市 chinaunicomglobal.com 联通
9.17 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
13.78 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
7.05 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
15.07 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
107.31 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
10.86 ms 	AS134774 [CHINANET-GD] 中国 广东省 深圳市 chinatelecom.cn 电信
10.48 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.30 ms 	* RFC1918
0.74 ms 	* RFC1918
0.71 ms 	* RFC1918
0.97 ms 	* RFC1918
1.52 ms 	AS10099 中国 香港 chinaunicomglobal.com 联通
3.16 ms 	AS10099 [CUG-BACKBONE] 中国 香港 chinaunicomglobal.com 联通
5.79 ms 	* 中国 香港
1.56 ms 	AS10099 [CUG-BACKBONE] 中国 广东省 广州市 chinaunicomglobal.com 联通
13.34 ms 	AS4837 [CU169-BACKBONE] 中国 香港 chinaunicom.cn
10.89 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
6.68 ms 	AS4837 [CU169-BACKBONE] 中国 北京市 chinaunicom.cn 联通
12.31 ms 	AS17816 [UNICOM-GD] 中国 广东省 深圳市 chinaunicom.cn 联通
17.91 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
13.82 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.33 ms 	* RFC1918
0.67 ms 	* RFC1918
0.73 ms 	* RFC1918
1.45 ms 	* RFC1918
1.08 ms 	* RFC1918
1.57 ms 	AS10099 中国 香港 chinaunicomglobal.com 联通
3.95 ms 	AS10099 [CUG-BACKBONE] 中国 香港 chinaunicomglobal.com 联通
1.89 ms 	* 中国 香港
4.36 ms 	* 中国 香港
7.51 ms 	AS10099 [CUG-BACKBONE] 中国 广东省 广州市 chinaunicomglobal.com 联通
10.32 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
13.19 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
7.91 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
10.14 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
11.98 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
109.07 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
9.93 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
12.00 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
12.76 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 28.86 Mbps	 145.27 Mbps	 1.03	  0.0%
中国香港	 28.84 Mbps	 178.19 Mbps	 1.50	  NULL
新加坡		 31.12 Mbps	 73.91 Mbps	 33.30	  0.0%
联通湖南5G	 28.91 Mbps	 73.08 Mbps	 25.20	  NULL
联通海南	 30.95 Mbps	 26.21 Mbps	 23.96	  NULL
电信江苏5G	 5.64 Mbps	 155.12 Mbps	 31.74	  0.0%
电信合肥5G	 29.05 Mbps	 132.54 Mbps	 38.76	  0.3%
移动Chengdu	 29.48 Mbps	 165.00 Mbps	 53.90	  0.0%
------------------------------------------------------------------------
 总共花费      : 7 分 8 秒
 时间          : Fri Oct 13 07:12:30 HKT 2023
------------------------------------------------------------------------
```

### 全国延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/10/image-183.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/10/image-183.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/10/image-183.jpg" alt="" loading="lazy">
</picture>