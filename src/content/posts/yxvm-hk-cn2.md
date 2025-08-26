---
tags: [hk-server]
title: "YxVM 香港CN2 测评"
published: 2024-01-12
---

玩具车，不构成任何购买建议，首月5刀，续费99刀。不恰AFF,只做玩具展示。**感觉不如Sharon(真)。**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-10.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-10.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-10.jpg" alt="" loading="lazy">
</picture>

## 测评

### 三网路由测试

#### 深圳 电信

```shell
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3031::6815:28b0] - 55.88ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes packets
1   11.45.1.4       *                         DOD          
                                              0.12 ms
2   59.43.249.9     *        [CN2-Global]     中国 香港   chinatelecom.cn  电信
                                              1.90 ms
3   59.43.187.181   *        [CN2-BackBone]   中国 广东 广州 X-I chinatelecom.cn  电信
                                              15.97 ms
4   59.43.244.142   *        [CN2-BackBone]   中国 广东 广州  chinatelecom.cn  电信
                                              7.02 ms
5   *
6   *
7   *
8   *
9   59.36.216.1     AS4134                    中国 广东 江门市  chinatelecom.com.cn  电信
                                              11.35 ms

```

#### 上海 电信

```shell
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 45.13ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes packets
1   11.45.1.4       *                         DOD          
                                              0.13 ms
2   59.43.249.9     *        [CN2-Global]     中国 香港   chinatelecom.cn  电信
                                              1.91 ms
3   59.43.249.26    *        [CN2-Global]     中国 上海  X-I chinatelecom.cn  电信
                                              26.78 ms
4   59.43.244.118   *        [CN2-BackBone]   中国 上海   chinatelecom.cn  电信
                                              25.45 ms
5   *
6   *
7   *
8   *
9   *
10  101.226.41.65   AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              29.18 ms
```

#### 北京 电信

```shell
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP – 172.67.155.192 – 48.75ms – Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes packets
1 11.45.1.4 * DOD
0.13 ms
2 59.43.249.1 * [CN2-Global] 中国 香港 chinatelecom.cn 电信
1.28 ms
3 59.43.250.173 * [CN2-Global] 中国 北京 X-I chinatelecom.cn 电信
34.48 ms
4 59.43.246.158 * [CN2-Global] 中国 北京 chinatelecom.cn 电信
37.98 ms
5 *
6 *
7 *
8 *
9 220.181.53.1 AS23724 [CHINANET-IDC] 中国 北京 bjtelecom.net 电信
38.60 ms
```

#### 广州 联通

```shell
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3031::6815:28b0] - 49.22ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes packets
1   11.45.1.4       *                         DOD          
                                              0.10 ms
2   61.14.201.93    *                         中国 香港         
                                              4.17 ms
3   43.252.86.129   AS10099                   中国 广东 广州  chinaunicomglobal.com  联通
                                              35.48 ms
4   219.158.6.61    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn 
                                              43.75 ms
5   219.158.4.49    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              46.58 ms
6   219.158.3.57    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              39.55 ms
7   157.18.0.30     AS17816  [UNICOM-GD]      中国 广东 广州  chinaunicom.cn  联通
                                              42.63 ms
8   120.80.170.250  AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              36.00 ms
```

#### 上海 联通

```shell
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3031::6815:28b0] - 54.89ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes packets
1   11.45.1.4       *                         DOD          
                                              0.11 ms
2   162.245.124.1   AS10099  [CUG-BACKBONE]   中国 香港   chinaunicomglobal.com  联通
                                              4.07 ms
3   43.252.86.129   AS10099                   中国 广东 广州  chinaunicomglobal.com  联通
                                              35.36 ms
4   219.158.6.105   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn 
                                              48.34 ms
5   219.158.4.1     AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              45.73 ms
6   219.158.3.97    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              36.43 ms
7   *
8   *
9   210.22.66.174   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              70.17 ms
10  112.65.95.129   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              61.59 ms
```

#### 北京 联通

```shell
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 47.93ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes packets
1   11.45.1.4       *                         DOD          
                                              0.10 ms
2   162.245.124.1   AS10099  [CUG-BACKBONE]   中国 香港   chinaunicomglobal.com  联通
                                              3.38 ms
3   43.252.86.129   AS10099                   中国 广东 广州  chinaunicomglobal.com  联通
                                              35.35 ms
4   219.158.6.61    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn 
                                              42.90 ms
5   219.158.24.137  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              44.93 ms
6   219.158.3.13    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              35.91 ms
7   *
8   *
9   *
10  *
11  61.49.140.217   AS4808                    中国 北京   chinaunicom.cn  联通
                                              68.84 ms
```

#### 深圳 移动

```shell
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 172.67.155.192 - 53.09ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes packets
1   11.45.1.4       *                         DOD          
                                              0.10 ms
2   223.120.22.65   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              3.16 ms
3   *
4   221.183.89.178  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              28.53 ms
5   221.183.89.33   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              28.81 ms
6   *
7   *
8   *
9   183.194.216.129 AS9808   [APNIC-AP]       中国 上海   chinamobile.com  移动
                                              31.22 ms
```

#### 上海 移动

```shell
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 172.67.155.192 - 53.09ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes packets
1   11.45.1.4       *                         DOD          
                                              0.10 ms
2   223.120.22.65   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              3.16 ms
3   *
4   221.183.89.178  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              28.53 ms
5   221.183.89.33   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              28.81 ms
6   *
7   *
8   *
9   183.194.216.129 AS9808   [APNIC-AP]       中国 上海   chinamobile.com  移动
                                              31.22 ms
```

#### 北京 移动

```shell
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 46.79ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes packets
1   11.45.1.4       *                         DOD          
                                              0.09 ms
2   223.120.22.65   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.64 ms
3   223.120.22.142  AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              40.47 ms
4   221.183.55.106  AS9808   [CMNET]          中国 北京  回国到达层 chinamobile.com  移动
                                              41.74 ms
5   221.183.46.250  AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              55.69 ms
6   221.183.89.118  AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              47.99 ms
7   *
8   *
9   *
10  211.136.63.66   AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              54.23 ms
11  *
12  *
13  *
14  211.136.25.153  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              49.92 ms
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Common KVM processor
 CPU 核心数        : 1
 CPU 频率          : 2399.996 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 4.00 MB / L3: 16.00 MB
 硬盘空间          : 830.18 MiB / 9912.89 MiB
 启动盘路径        : /dev/sda1
 内存              : 93.87 MiB / 978.99 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 20 min
 负载              : 0.35, 0.09, 0.03
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ❌ Disabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-27-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS131640 ShunYing Internet Co.,Ltd.
 IPV4 位置         : Hong Kong / Central and Western / HK
 IPV6 ASN          : AS49304 SAKURA LINK LIMITED
 IPV6 位置         : Hong Kong Island / CN-HK
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          935 Scores
 2 线程测试(多核)得分:          935 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          19592.11 MB/s
 单线程写测试:          13822.30 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         36.6 MB/s (8927 IOPS, 2.87s)            49.7 MB/s (12126 IOPS, 2.11s)
 1GB-1M Block           964 MB/s (919 IOPS, 1.09s)              1.1 GB/s (1010 IOPS, 0.99s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 112.72 MB/s  (28.1k) | 493.42 MB/s   (7.7k)
Write      | 113.02 MB/s  (28.2k) | 496.02 MB/s   (7.7k)
Total      | 225.75 MB/s  (56.4k) | 989.45 MB/s  (15.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 428.09 MB/s    (836) | 446.94 MB/s    (436)
Write      | 450.84 MB/s    (880) | 476.70 MB/s    (465)
Total      | 878.94 MB/s   (1.7k) | 923.65 MB/s    (901)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 日本(JP)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 香港(HK)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：香港
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：香港
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：香港区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：香港区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: HK)
 HotStar:                               No
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: JP)
 Amazon Prime Video:                    Yes (Region: HK)
 TVBAnywhere+:                          No
 iQyi Oversea Region:                   AU
 Viu.com:                               Yes (Region: HK)
 YouTube CDN:                           Hong Kong 
 Netflix Preferred CDN:                 Hong Kong  
 Spotify Registration:                  No
 Steam Currency:                        HKD
 ChatGPT:                               Only Available with Mobile APP
 Bing Region:                           HK
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               No
 Disney+:                               Yes (Region: US)
 Netflix:                               Yes (Region: HK)
 YouTube Premium:                       Yes (Region: HK)
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           Hong Kong 
 Netflix Preferred CDN:                 Hong Kong  
 Spotify Registration:                  No
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           US
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【AU】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):isp①  Data Center/Web Hosting/Transit⑤  isp⑧  business⑨  
  公司类型(company_type):business①  isp⑧  
  云服务提供商(cloud_provider):  No⑧ 
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
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测89 ③
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  yandex邮箱: Yes
  qq邮箱: Yes
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Hong Kong 服务商: AS131640 ShunYing Internet Co.,Ltd.
北京电信 219.141.136.12  电信CN2 [优质线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信CN2 [优质线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信CN2 [优质线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信CN2 [优质线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.42 ms  AS749  美国, defense.gov
1.93 ms  *  中国, 香港, chinatelecom.com.cn, 电信
5.39 ms  *  中国, 广东, 广州, chinatelecom.com.cn, 电信
5.96 ms  *  中国, 广东, 广州, chinatelecom.com.cn, 电信
12.87 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.17 ms  AS749  美国, defense.gov
2.01 ms  AS10099  中国, 香港, chinaunicom.com, 联通
34.60 ms  AS10099  中国, 香港, chinaunicom.com, 联通
38.62 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
40.34 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
44.33 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
41.37 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
38.99 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.23 ms  AS749  美国, defense.gov
2.79 ms  AS58453  中国, 香港, chinamobile.com, 移动
9.19 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
8.97 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
8.93 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
9.79 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
10.71 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
15.08 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    9399.72 Mbps    9281.82 Mbps    0.27     NULL
中国香港         412.68 Mbps     622.57 Mbps     2.95     NULL
新加坡           948.97 Mbps     938.90 Mbps     35.50    NULL
联通海南         150.85 Mbps     150.16 Mbps     49.75    NULL
联通Fuzhou       182.04 Mbps     5141.55 Mbps    52.83    0.0%
电信Suzhou5G     51.93 Mbps      4195.19 Mbps    44.63    NULL
移动Chengdu      13.00 Mbps      1975.84 Mbps    412.22   2.3%
移动陕西5G       132.20 Mbps     1380.63 Mbps    56.50    0.0%
------------------------------------------------------------------------
 总共花费      : 6 分 40 秒
 时间          : Fri Jan 12 10:50:46 UTC 2024
------------------------------------------------------------------------
```

### 全国延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-11.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-12.jpg" alt="" loading="lazy">
</picture>