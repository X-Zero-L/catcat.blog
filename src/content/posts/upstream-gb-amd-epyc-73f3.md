---
tags: [eu-server]
title: "Upstream 英国 AMD EPYC 73F3 测评"
published: 2024-02-11
---

这个机器是回帖抽奖送的免费一年，没有购买。Upstream Network原名ZHNET，之前在nodeseek也有入驻，但是风评不是很好的样子（了解不是很多，听说之前还有预售英国cmin2）。目前商家有三地（日本7950X，英国73F3，美国ARM），反正白嫖的免费一年，用着玩玩（仅图一乐）。

> ## 套餐
> 
> Location: London, UK  
> 1 vCore (50% peak) AMD EPYC 73F3  
> 512M Dedicated DDR4 ECC RAM  
> 10G RAID1 NVME U.2  
> 800G/Month@1Gbps fair-use

## 测评

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 1 days, 9 hours, 51 minutes
Processor  : AMD EPYC-Milan Processor
CPU cores  : 1 @ 3499.998 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 437.5 MiB
Swap       : 2.0 GiB
Disk       : 10.0 GiB
Distro     : Debian GNU/Linux 11 (bullseye)
Kernel     : 5.10.0-20-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Upstream Network LTD
ASN        : AS59538 UPSTREAM NETWORK LTD
Location   : London, England (ENG)
Country    : United Kingdom

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 275.97 MB/s  (68.9k) | 1.97 GB/s    (30.9k)
Write      | 276.70 MB/s  (69.1k) | 1.98 GB/s    (31.0k)
Total      | 552.68 MB/s (138.1k) | 3.96 GB/s    (62.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.40 GB/s     (2.7k) | 563.29 MB/s    (550)
Write      | 1.48 GB/s     (2.8k) | 600.81 MB/s    (586)
Total      | 2.88 GB/s     (5.6k) | 1.16 GB/s     (1.1k)

```

### 融合怪脚本测试

```shell
 CPU 型号          : AMD EPYC-Milan Processor
 CPU 核心数        : 1
 CPU 频率          : 3499.998 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 512.00 KB / L3: 32.00 MB
 硬盘空间          : 3.65 GiB / 9.87 GiB
 启动盘路径        : /dev/vda3
 内存              : 163.55 MiB / 437.51 MiB
 Swap              : 20.95 MiB / 2.00 GiB
 系统在线时间      : 1 days, 10 hour 7 min
 负载              : 0.83, 1.01, 0.70
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-20-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS59538 UPSTREAM NETWORK LTD
 IPV4 位置         : London / England / GB
 IPV6 ASN          : AS59538 Upstream Network
 IPV6 位置         : London / England / United Kingdom
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          4463 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          52527.46 MB/s
 单线程写测试:          26486.35 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         52.9 MB/s (12.91 IOPS, 1.98s))          42.5 MB/s (10371 IOPS, 2.47s)
 1GB-1M Block           990 MB/s (944 IOPS, 1.06s)              1.4 GB/s (1303 IOPS, 0.77s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 306.15 MB/s  (76.5k) | 1.95 GB/s    (30.5k)
Write      | 306.96 MB/s  (76.7k) | 1.96 GB/s    (30.6k)
Total      | 613.11 MB/s (153.2k) | 3.91 GB/s    (61.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.51 GB/s     (2.9k) | 537.77 MB/s    (525)
Write      | 1.59 GB/s     (3.1k) | 573.59 MB/s    (560)
Total      | 3.10 GB/s     (6.0k) | 1.11 GB/s     (1.0k)
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
NF所识别的IP地域信息：美国
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
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
 Dazn:                                  Yes (Region: US)
 HotStar:                               Yes (Region: GB)
 Disney+:                               Yes (Region: US)
 Netflix:                               Yes (Region: GB)
 YouTube Premium:                       Yes (Region: GB)
 Amazon Prime Video:                    Yes (Region: US)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   US
 Viu.com:                               No
 YouTube CDN:                           London 
 Netflix Preferred CDN:                 London  
 Spotify Registration:                  No
 Steam Currency:                        USD
 ChatGPT:                               Yes
 Bing Region:                           US
 Instagram Licensed Audio:              Yes
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
 Netflix Preferred CDN:                 London  
 Spotify Registration:                  No
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           GB
 Instagram Licensed Audio:              No
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【US】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):isp①  Data Center/Web Hosting/Transit⑤  isp⑧  business⑨  
  公司类型(company_type):isp①  isp⑧  
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
国家: GB 城市: London 服务商: AS59538 UPSTREAM NETWORK LTD
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.72 ms  *  局域网
3.41 ms  AS25369  英国, 伦敦, zare.com
1.44 ms  AS174  英国, 伦敦, cogentco.com
1.43 ms  AS174  英国, 伦敦, cogentco.com
199.92 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
207.73 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
205.12 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.51 ms  *  局域网
0.45 ms  AS25369  英国, 伦敦, zare.com
1.50 ms  AS174  英国, 伦敦, cogentco.com
8.34 ms  AS174  荷兰, 北荷兰省, 阿姆斯特丹, cogentco.com
14.82 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
15.01 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
15.53 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
15.61 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
167.39 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
177.52 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
184.18 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
232.71 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
171.16 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.37 ms  *  局域网
0.81 ms  AS25369  英国, 伦敦, zare.com
0.80 ms  AS1299  英国, 伦敦, telia.com
1.74 ms  AS1299  英国, 伦敦, telia.com
0.88 ms  AS1299  英国, 伦敦, telia.com
2.34 ms  AS1299  英国, 伦敦, telia.com
196.74 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
208.44 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
197.91 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
210.64 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
201.53 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
211.72 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    993.06 Mbps     918.13 Mbps     0.66     NULL
法兰克福         1015.74 Mbps    835.19 Mbps     13.68    0.0%
洛杉矶           495.66 Mbps     805.44 Mbps     140.92   NULL
联通海南         422.81 Mbps     721.47 Mbps     181.43   NULL
联通上海5G       9.26 Mbps       6.35 Mbps       188.10   0.0%
电信浙江         17.59 Mbps      26.04 Mbps      215.23   NULL
```

### Geekbench 5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 11 (bullseye)
  Kernel                        Linux 5.10.0-20-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.2-debian-1.16.2-1

处理器信息
  Name                          AMD EPYC-Milan Processor
  Topology                      1 Processor, 1 Core
  Identifier                    AuthenticAMD Family 25 Model 1 Stepping 1
  Base Frequency                3.50 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      512 KB
  L3 Cache                      32.0 MB

内存信息
  Size                          438 MB

单核测试分数：1381
多核测试分数：1240
详细结果链接：https://browser.geekbench.com/v5/cpu/22216517
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC-Milan
```

### 硬盘测试

```shell
root@UPSTREAM-GB:~# dd if=/dev/zero of=256 bs=64K count=4K oflag=dsync
4096+0 records in
4096+0 records out
268435456 bytes (268 MB, 256 MiB) copied, 1.52816 s, 176 MB/s
root@UPSTREAM-GB:~# 
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD EPYC-Milan Processor (x86_64)
1 cores @ 3499 MHz  |  437 MiB RAM
Number of Processes: 1  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          2771
  Integer Math                     6373 Million Operations/s
  Floating Point Math              5130 Million Operations/s
  Prime Numbers                    19.7 Million Primes/s
  Sorting                          3824 Thousand Strings/s
  Encryption                       1376 MB/s
  Compression                      26581 KB/s
  CPU Single Threaded              2726 Million Operations/s
  Physics                          356 Frames/s
  Extended Instructions (SSE)      2152 Million Matrices/s

Memory Mark:                       43.7
  Database Operations              1040 Thousand Operations/s
  Memory Read Cached               28269 MB/s
  Memory Read Uncached             133 MB/s
  Memory Write                     96.7 MB/s
  Available RAM                    287 Megabytes
  Memory Latency                   603 Nanoseconds
  Memory Threaded                  136 MB/s
--------------------------------------------------------------------------
```

### 国内延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-9.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-9.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-9.jpg" alt="" loading="lazy">
</picture>