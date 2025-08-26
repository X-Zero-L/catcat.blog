---
tags: [eu-server]
title: "Haruka 英国预售 测评"
published: 2024-02-05
---

去年6月开业的商家，目前有 香港 新加坡 英国在售。买的时候上当了，标题有误导，以为是Ryzen ，后续询问才知道活动款居然是e5。配置 如下，可以回订单号翻倍 内存。后台面板 [VirtFusion](https://virtfusion.com/)。机器性能懂的都懂，英区解锁，纯落地。

| GB Standard 预售 | 1vCore | 512MB | 6GB | 1TB@1Gbps | 8.99USD/年 |
| --- | --- | --- | --- | --- | --- |

## 测评

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel Core Processor (Broadwell, IBRS)
 CPU 核心数        : 1
 CPU 频率          : 2397.222 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 2.09 GiB / 5.82 GiB
 启动盘路径        : /dev/vda3
 内存              : 256.52 MiB / 926.16 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 7 min
 负载              : 0.35, 0.23, 0.12
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS197860 Haruka Hosting Ltd
 IPV4 位置         : London / England / GB
 IPV6 ASN          : AS197860 Haruka Hosting
 IPV6 位置         : London / England / United Kingdom
 IPV6 子网掩码     : 112
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          732 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          16625.94 MB/s
 单线程写测试:          12060.32 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         4.2 MB/s (1016 IOPS, 25.19s)            12.8 MB/s (3136 IOPS, 8.16s)
 1GB-1M Block           136 MB/s (130 IOPS, 7.70s)              441 MB/s (420 IOPS, 2.38s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 18.86 MB/s    (4.7k) | 79.27 MB/s    (1.2k)
Write      | 18.86 MB/s    (4.7k) | 79.69 MB/s    (1.2k)
Total      | 37.73 MB/s    (9.4k) | 158.97 MB/s   (2.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 132.14 MB/s    (258) | 151.44 MB/s    (147)
Write      | 139.16 MB/s    (271) | 161.53 MB/s    (157)
Total      | 271.31 MB/s    (529) | 312.98 MB/s    (304)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: LHR(LHR48S34)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: LHR(LHR48S34)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：英国
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：英国
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：英国区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：英国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: GB)
 HotStar:                               Yes (Region: GB)
 Disney+:                               Yes (Region: GB)
 Netflix:                               Yes (Region: GB)
 YouTube Premium:                       Yes (Region: GB)
 Amazon Prime Video:                    Yes (Region: GB)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   GB
 Viu.com:                               No
 YouTube CDN:                           London 
 Netflix Preferred CDN:                 New York, NY  
 Spotify Registration:                  Yes (Region: GB)
 Steam Currency:                        GBP
 ChatGPT:                               Yes
 Bing Region:                           GB
 Instagram Licensed Audio:              No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               Yes (Region: GB)
 Disney+:                               Yes (Region: GB)
 Netflix:                               Yes (Region: GB)
 YouTube Premium:                       Yes (Region: GB)
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           London 
 Netflix Preferred CDN:                 New York, NY  
 Spotify Registration:                  Yes (Region: GB)
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           GB
 Instagram Licensed Audio:              No
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【GB】
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
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ 
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
国家: GB 城市: London 服务商: AS197860 Haruka Hosting Ltd
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
1.78 ms  AS197860  英国, 伦敦, nasstar.com
0.30 ms  AS26863  英国, 伦敦, gameserverkings.com
0.42 ms  *  局域网
0.55 ms  *  局域网
1.01 ms  AS2914  英国, 伦敦, ntt.com
2.09 ms  AS2914  英国, 伦敦, ntt.com
0.93 ms  AS2914  英国, 伦敦, ntt.com
3.29 ms  AS4134  英国, 伦敦, chinatelecom.com.cn, 电信
265.75 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
247.30 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
246.43 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.40 ms  AS197860  英国, 伦敦, nasstar.com
0.32 ms  AS26863  英国, 伦敦, gameserverkings.com
0.37 ms  *  局域网
0.53 ms  *  局域网
12.43 ms  AS3257  德国, 黑森州, 法兰克福, gtt.net
235.49 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
239.53 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
230.71 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
238.91 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.43 ms  AS197860  英国, 伦敦, nasstar.com
0.30 ms  AS26863  英国, 伦敦, gameserverkings.com
0.51 ms  *  局域网
0.57 ms  *  局域网
0.72 ms  AS2914  英国, 伦敦, ntt.com
4.60 ms  AS2914  英国, 伦敦, ntt.com
9.68 ms  AS2914  荷兰, 北荷兰省, 阿姆斯特丹, ntt.com
31.18 ms  AS2914  奥地利, 维也纳州, 维也纳, ntt.com
26.98 ms  AS2914  奥地利, 维也纳州, 维也纳, ntt.com
236.26 ms  AS2914  中国, 香港, ntt.com
243.54 ms  AS2914  中国, 香港, ntt.com
260.78 ms  AS2914  新加坡, ntt.com
267.79 ms  AS2914  新加坡, ntt.com
196.60 ms  AS2914  新加坡, ntt.com
273.80 ms  AS58453  中国, 香港, chinamobile.com, 移动
278.77 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
305.58 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
296.28 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
310.17 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
299.87 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
303.40 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    996.45 Mbps     921.71 Mbps     1.52     NULL
法兰克福         1023.57 Mbps    882.31 Mbps     11.74    0.6%
洛杉矶           461.13 Mbps     638.61 Mbps     145.81   0.0%
联通Fuzhou       219.39 Mbps     365.45 Mbps     233.46   0.7%
联通郑州5G       282.53 Mbps     595.30 Mbps     250.41   NULL
电信Zhenjiang5G  8.39 Mbps       716.83 Mbps     253.53   NULL
移动陕西5G       1.17 Mbps       322.37 Mbps     351.51   8.6%
移动Lanzhou      1.12 Mbps       5.11 Mbps       372.42   NULL
------------------------------------------------------------------------
 总共花费      : 9 分 0 秒
 时间          : Mon Feb  5 11:15:48 CST 2024
------------------------------------------------------------------------
```

### 解锁测试

```shell
============[ Multination ]============
 Dazn:                  原生解锁        Yes (Region: GB)
 TikTok:                原生解锁        Yes (Region: GB)
 HotStar:               原生解锁        Yes (Region: GB)
 Disney+:               原生解锁        Yes (Region: GB)
 Netflix:               原生解锁        Yes (Region: GB)
 YouTube Premium:       原生解锁        Yes (Region: GB)
 Amazon Prime Video:    原生解锁        Yes (Region: GB)
 TVBAnywhere+:          原生解锁        Yes
 iQyi Oversea Region:   原生解锁        GB
 Viu.com:                               No
 YouTube CDN:                           London 
 Netflix Preferred CDN:                 New York, NY  
 Spotify Registration:  原生解锁        Yes (Region: GB)
 Steam Currency:                        GBP
 ChatGPT:               原生解锁        Yes
 Bing Region:                           GB
=======================================
===============[ Europe ]==============
 Rakuten TV:                            Yes
 Funimation:                            Yes (Region: GB)
 SkyShowTime:                           No
 HBO Max:                               No
 Maths Spot:                            Failed
 ---GB---
 Sky Go:                                Yes
 BritBox:                               Yes
 ITV Hub:                               Yes
 Channel 4:                             Yes
 Channel 5:                             Yes
 BBC iPLAYER:                           Yes
 Discovery+ UK:                         Yes
 ---FR---
 Salto:                                 Failed (Network Connection)
 Canal+:                                Yes
 Molotov:                               No
 ---DE---
 Joyn:                                  No
 Sky:                                   No
 ZDF:                                   No
 ---NL---
 NLZIET:                                Failed
 videoland:                             Failed (Network Connection)
 NPO Start Plus:                        Failed (Network Connection)
 ---ES---
 PANTAYA:                               Failed (Network Connection)
 ---IT---
 Rai Play:                              Yes
 ---RU---
 Amediateka:                            Yes
=======================================

 ** 正在测试IPv6解锁情况 
--------------------------------
 ** 您的网络为: Haruka Hosting (2a12:bec0:390:*:*) 

============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 TikTok:                原生解锁        Yes (Region: GB)
 HotStar:               原生解锁        Yes (Region: GB)
 Disney+:               原生解锁        Yes (Region: GB)
 Netflix:               原生解锁        Yes (Region: GB)
 YouTube Premium:       原生解锁        Yes (Region: GB)
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           London 
 Netflix Preferred CDN:                 New York, NY  
 Spotify Registration:  原生解锁        Yes (Region: GB)
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           GB
=======================================
===============[ Europe ]==============
 Rakuten TV:                            Failed (Network Connection)
 Funimation:                            IPv6 Not Support
 SkyShowTime:                           No
 HBO Max:                               Failed (Network Connection)
 Maths Spot:                            IPv6 Not Support
 ---GB---
 Sky Go:                                Failed (Network Connection)
 BritBox:                               Yes
 ITV Hub:                               Failed (Network Connection)
 Channel 4:                             Failed (Network Connection)
 Channel 5:                             IPv6 Not Support
 BBC iPLAYER:                           Failed
 Discovery+ UK:                         IPv6 Not Support
 ---FR---
 Salto:                                 Failed (Network Connection)
 Canal+:                                Failed (Network Connection)
 Molotov:                               No
 ---DE---
 Joyn:                                  Failed (Network Connection)
 Sky:                                   Failed (Network Connection)
 ZDF:                                   Failed (Network Connection)
 ---NL---
 NLZIET:                                Failed
 videoland:                             Failed (Network Connection)
 NPO Start Plus:                        Failed (Network Connection)
 ---ES---
 PANTAYA:                               Failed (Network Connection)
 ---IT---
 Rai Play:                              Failed (Network Connection)
 ---RU---
 Amediateka:                            Failed (Network Connection)
=======================================
```

其他懒得测，有问题再说吧