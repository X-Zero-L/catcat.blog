---
tags: [jp-server]
title: "Nube.sh 万兆 日本 AMD 9950X 杜甫测试"
published: 2025-07-22
---

**牛老板最近也在他们的日本地区新上了9950X系列，搭载 AMD Ryzen 9 9950X（16 核 32 线程，4.5GHz 基频/5.7GHz Boost）与 10Gbps 网络直连，配备高达 192GB DDR5 ECC 内存和双 10Gb uplink，加上 Nube.sh 自建 BGP 网络骨干——涵盖 PCCWG、Lumen、Cogent、NTT，连通香港、新加坡、日本多个 IXP。牛肉家的杜甫基本上都是采用的 Supermicro 系列，和 [Fiberstate](https://catcat.blog/fiberstate-10g-amd-9950x-benchmark-la.html?swcfpc=1) 同款的高密度方案，但是散热表现明显优于[Fiberstate](https://catcat.blog/fiberstate-10g-amd-9950x-benchmark-la.html?swcfpc=1)，难道说 [Fiberstate](https://catcat.blog/fiberstate-10g-amd-9950x-benchmark-la.html?swcfpc=1) 真不开空调？？？？**

## 配置

- **CPU ： AMD Ryzen 9 9950X**

- **MEM ：4 x 48 GB DDR5-3600MT/s** **Micron** **CP48G56C46U5.M16B1**

- **DISK ：2 \* 3.84 T** **KCD6XLUL3T84**

- **Network : 2 \* 10G Intel Ethernet 10G 2P X520 Adapter**

- **MOTHERBOARD : Supermicro H13SRD-F 1.00 Supermicro AS -3015MR-H8TNR**

- **BIOS: American Megatrends International, LLC. 1.3 (09/18/2024)**

- **PRICE：$288 + $68 One-time setup**

- **ORDER：Telegram [@BeefyAsian](http://@BeefyAsian)**

- **IP : 赠送 IP4/32 + IP6/64 + 国际优化轻量版带宽 1000M**

## 测评

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 13 hours, 30 minutes
Processor  : AMD Ryzen 9 9950X 16-Core Processor
CPU cores  : 32 @ 3200.944 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 186.3 GiB
Swap       : 977.0 MiB
Disk       : 3.4 TiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-37-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Eons Data Communications Limited
ASN        : AS138997 Eons Data Communications Limited
Host       : Eons Data Communications Limited
Location   : Tokyo, Tokyo (13)
Country    : Japan

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/nvme0n1p2):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.19 GB/s   (297.6k) | 1.28 GB/s    (20.0k)
Write      | 1.19 GB/s   (298.4k) | 1.29 GB/s    (20.1k)
Total      | 2.38 GB/s   (596.1k) | 2.57 GB/s    (40.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.27 GB/s     (2.4k) | 1.35 GB/s     (1.3k)
Write      | 1.33 GB/s     (2.6k) | 1.44 GB/s     (1.4k)
Total      | 2.61 GB/s     (5.0k) | 2.80 GB/s     (2.7k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 662 Mbits/sec   | busy            | 227 ms         
Eranium         | Amsterdam, NL (100G)      | 4.68 Gbits/sec  | 5.05 Gbits/sec  | 234 ms         
Uztelecom       | Tashkent, UZ (10G)        | busy            | busy            | 235 ms         
Leaseweb        | Singapore, SG (10G)       | 6.25 Gbits/sec  | 2.30 Gbits/sec  | -- 
Clouvider       | Los Angeles, CA, US (10G) | 1.26 Gbits/sec  | 10.7 Mbits/sec  | 108 ms         
Leaseweb        | NYC, NY, US (10G)         | 4.40 Gbits/sec  | 3.65 Gbits/sec  | -- 
Edgoo           | Sao Paulo, BR (1G)        | 3.25 Gbits/sec  | 3.07 Gbits/sec  | 274 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 715 Mbits/sec   | 947 Mbits/sec   | 227 ms         
Eranium         | Amsterdam, NL (100G)      | 5.73 Gbits/sec  | 4.05 Gbits/sec  | 234 ms         
Uztelecom       | Tashkent, UZ (10G)        | 1.05 Gbits/sec  | 2.19 Gbits/sec  | 236 ms         
Leaseweb        | Singapore, SG (10G)       | busy            | busy            | -- 
Clouvider       | Los Angeles, CA, US (10G) | 1.68 Gbits/sec  | 2.08 Gbits/sec  | 108 ms         
Leaseweb        | NYC, NY, US (10G)         | 5.06 Gbits/sec  | 4.83 Gbits/sec  | -- 
Edgoo           | Sao Paulo, BR (1G)        | 3.04 Gbits/sec  | 3.17 Gbits/sec  | 274 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 3454                          
Multi Core      | 18146                         
Full Test       | https://browser.geekbench.com/v6/cpu/12350615

YABS completed in 14 min 0 sec
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-37-amd64 x86_64
  Model                         Supermicro AS -3015MR-H8TNR
  Motherboard                   Supermicro H13SRD-F
  BIOS                          American Megatrends International, LLC. 1.3

处理器信息
  Name                          AMD Ryzen 9 9950X 16-Core Processor            
  Topology                      1 Processor, 16 Cores, 32 Threads
  Identifier                    AuthenticAMD Family 26 Model 68 Stepping 0
  Base Frequency                4.30 GHz
  L1 Instruction Cache          32.0 KB x 16
  L1 Data Cache                 48.0 KB x 16
  L2 Cache                      1.00 MB x 16
  L3 Cache                      32.0 MB x 2

内存信息
  Size                          186 GB

单核测试分数：2561
多核测试分数：22423
详细结果链接：https://browser.geekbench.com/v5/cpu/23596465
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%209950X
```

### IP 解锁

#### IPv4

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-12.jpg" alt="IP地址风险分析和地理信息概览图" loading="lazy">
</picture>

#### IPv6

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-13.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-13.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-13.jpg" alt="IP检查汇总，显示风险和地区信息" loading="lazy">
</picture>

### 网络质量

### 通电测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-14.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-14.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-14.jpg" alt="系统信息显示CPU和存储性能" loading="lazy">
</picture>

### 读写测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-15.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-15.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-15.jpg" alt="NVMe设备健康状态与温度报告" loading="lazy">
</picture>

### 融合怪Go

```shell
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD Ryzen 9 9950X 16-Core Processor @ 4300.000 MHz
 CPU 数量            : 32 Physical CPU(s)
 CPU 缓存            : L1: 1 MB / L2: 16 MB / L3: 64 MB
 GPU 型号            : ASPEED Graphics Family
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ❌ Disabled
 内存                : 2.11 GB / 186.33 GB
 气球驱动            : ❌ Undetected
 内核页合并          : ❌ Undetected
 虚拟内存 Swap       : 0.00 MB / 977.00 MB
 硬盘空间            : 2.85 GB / 3518.32 GB
 启动盘路径          : /dev/nvme0n1p2
 系统                : debian 12.11 [x86_64] 
 内核                : 6.1.0-37-amd64
 系统在线时间        : 0 days, 14 hours, 03 minutes
 时区                : HKT
 负载                : 0.05 / 0.31 / 0.62
 虚拟化架构          : Dedicated (No visible signage)
 NAT类型             : Full Cone
 TCP加速方式         : bbr
 IPV4 ASN            : AS138997 Eons Data Communications Limited
 IPV4 Location       : Tokyo / Tokyo / Japan
 IPV4 Active IPs     : 28/256 (subnet /24) 149/1024 (prefix /22)
 IPV6 ASN            : AS138997 Eons Data Communications Limited
 IPV6 Location       : Tokyo / Tokyo / Japan
 IPv6 子网掩码       : /64
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   6683.00
32 线程测试(多核)得分:  110046.53
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 38947.56 MB/s(40.84K IOPS, 5s)
单线程顺序读速度: 106524.24 MB/s(111.70K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       1.19 GB/s(297.0k)       1.19 GB/s(297.8k)       2.38 GB/s(594.8k)       
/root         64k      1.27 GB/s(19.8k)        1.27 GB/s(19.9k)        2.54 GB/s(39.6k)        
/root         512k     1.27 GB/s(2475)         1.33 GB/s(2606)         2.60 GB/s(5081)         
/root         1m       1.35 GB/s(1317)         1.44 GB/s(1405)         2.79 GB/s(2722)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：中国香港
[IPV6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：中国香港
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT12S41)
Youtube识别地域: 日本(JP)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
Youtube识别地域: 日本(JP)
---------------DisneyPlus---------------
[IPV4]
当前IPv4出口所在地区即将开通DisneyPlus
[IPV6]
当前IPv4出口所在地区即将开通DisneyPlus
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Apple                     YES (Region: JPN)
BingSearch                YES (Region: JP)
Claude                    YES
Dazn                      YES (Region: JP)
Disney+                   YES (Region: HK)
Gemini                    YES (Region: JPN)
GoogleSearch              YES
Google Play Store         YES (Region: JP)
IQiYi                     YES (Region: JP)
Instagram Licensed Audio  YES
KOCOWA                    NO
MetaAI                    Unknown: get www.meta.ai failed with code: 200
Netflix                   YES (Region: US)
Netflix CDN               HK
OneTrust                  YES (Region: JP TOKYO)
ChatGPT                   YES (Region: JP)
Paramount+                YES
Amazon Prime Video        YES (Region: JP)
Reddit                    NO
SonyLiv                   Banned
Sora                      YES (Region: JP)
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: JP)
TVBAnywhere+              YES (Region: JP)
TikTok                    YES (Region: JP)
Viu.com                   YES
Wikipedia Editability     NO
YouTube Region            YES (Region: JP)
YouTube CDN               NRT
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 1 [8] 
VPN得分(越低越好): 98 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 0 [1] 65 [E]
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0027 (Low) [A] 
公司滥用得分(越低越好): 0.0001 (Very Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: hosting [0 7 A] corporate [9] unknown [C] business [8] DataCenter/WebHosting/Transit [3]
公司类型: business [0] isp [7 A]
是否云提供商: Yes [7 D] 
是否数据中心: No [0 5 6 8 A C] Yes [1]
是否移动设备: No [5 A C] Yes [E]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A C D]
是否VPN: No [0 1 6 7 A C D] Yes [E]
是否Tor: No [0 1 3 6 7 8 A C D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E]
DNS-黑名单: 315(Total_Check) 0(Clean) 10(Blacklisted) 23(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0027 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [A]
公司类型: hosting [A] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A D] 
是否VPN: No [1 A D] 
是否Tor: No [1 3 A D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A] 
是否匿名: No [1 D] 
是否攻击者: No [D]
是否滥用者: No [A D] 
是否威胁: No [D] 
是否中继: No [D] 
是否Bogon: No [A D] 
DNS-黑名单: 315(Total_Check) 0(Clean) 0(Blacklisted) 315(Other) 
--------------------------------------邮件端口检测--------------------------------------
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
GMX       ✔     ✔     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✔     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京电信v4 219.141.140.10  检测不到回程路由节点的IPV4地址
北京联通v4 202.106.195.68           联通4837   [普通线路] 
北京移动v4 221.179.155.161          移动CMI    [普通线路] 
上海电信v4 202.96.209.133           电信163    [普通线路] 
上海联通v4 210.22.97.1              联通4837   [普通线路] 
上海移动v4 211.136.112.200          移动CMI    [普通线路] 
广州电信v4 58.60.188.222            电信163    [普通线路] 
广州联通v4 210.21.196.6             联通4837   [普通线路] 
广州移动v4 120.196.165.24           移动CMI    [普通线路] 
成都电信v4 61.139.2.69              电信163    [普通线路] 
成都联通v4 119.6.6.6                联通4837   [普通线路] 
成都移动v4 211.137.96.205           移动CMI    [普通线路] 
北京电信v6 2400:89c0:1053:3::69     电信163    [普通线路] 
北京联通v6 2400:89c0:1013:3::54     联通4837   [普通线路] 
北京移动v6 2409:8c00:8421:1303::55  移动CMI    [普通线路] 
上海电信v6 240e:e1:aa00:4000::24    电信163    [普通线路] 
上海联通v6 2408:80f1:21:5003::a     联通4837   [普通线路] 
上海移动v6 2409:8c1e:75b0:3003::26  移动CMIN2  [精品线路] 移动CMI    [普通线路] 
广州电信v6 240e:97c:2f:3000::44     电信163    [普通线路] 
广州联通v6 2408:8756:f50:1001::c    联通4837   [普通线路] 
广州移动v6 2409:8c54:871:1001::12   移动CMI    [普通线路] 
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 103.62.49.83 - 207.46ms - 🐠 (Relay) → Misaka.HKG
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.42 ms      AS138997                      日本, 东京都, 东京, eons.cloud 
1.92 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
2.95 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
2.51 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
1.59 ms      AS138997   [Nube-BB]          日本, eons.cloud 
3.01 ms      *          [JPNIC-NET]        日本, 东京都, 东京
*
3.33 ms      AS2497     [IIJ]              日本, 东京都, 东京, iij.ad.jp 
3.32 ms      AS2497     [IIJ]              日本, 东京都, 东京, iij.ad.jp 
3.26 ms      AS4134     [CHINANET-FJ]      日本, 东京都, 东京, www.chinatelecom.com.cn  电信
52.28 ms     AS4134     [CHINANET-BB]      中国, 香港, www.chinatelecom.com.cn 
52.99 ms     AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn 
158.11 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
59.62 ms     AS134774   [CHINANET-GD]      中国, 广东, 深圳, chinatelecom.cn  电信
*
58.02 ms     AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.53 ms      AS138997                      日本, 东京都, 东京, eons.cloud 
1.55 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
3.02 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
1.44 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
1.75 ms      *                             
1.57 ms      AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
2.42 ms      AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
1.68 ms      AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
2.46 ms      AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
69.26 ms     AS7578                        新加坡, globalsecurelayer.com 
69.12 ms     AS7578                        新加坡, globalsecurelayer.com 
102.45 ms    AS3356                        新加坡, lumen.com 
169.53 ms    AS3356                        美国, 加利福尼亚, 洛杉矶, lumen.com 
344.74 ms    AS3356                        美国, 加利福尼亚, 洛杉矶, lumen.com 
351.32 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
*
*
312.70 ms    AS17816    [UNICOM-GD]        中国, 广东, 深圳, chinaunicom.cn  联通
347.37 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
345.94 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.61 ms      AS138997                      日本, 东京都, 东京, eons.cloud 
1.61 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
3.41 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
1.69 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
1.51 ms      *                             
1.55 ms      AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
2.50 ms      AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
1.73 ms      AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
2.57 ms      AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
2.33 ms      AS136510                      日本, 东京都, 东京, Streamline Servers Pty Ltd
2.16 ms      AS3356                        日本, 东京都, 东京, lumen.com 
3.42 ms      AS3356                        日本, 东京都, 东京, lumen.com 
3.23 ms      AS58453    [CMI-INT]          日本, 东京都, 东京, cmi.chinamobile.com  移动
80.37 ms     AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com 
81.99 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
88.53 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
58.84 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
60.85 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
68.60 ms     AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   4263.40 Mbps    9211.41 Mbps    1.49 ms         1.3%            
日本东京        6857.02 Mbps    2325.24 Mbps    2.82 ms         1.0%            
中国香港        2563.99 Mbps    6777.35 Mbps    61.81 ms        0.0%            
联通上海5G      3565.19 Mbps    3889.89 Mbps    55.19 ms        1.1%            
电信Zhenjiang5G 531.32 Mbps     4219.57 Mbps    54.41 ms        Not available.  
电信浙江        386.28 Mbps     2708.06 Mbps    76.70 ms        Not available.  
移动Suzhou      152.50 Mbps     0.40 Mbps       102.13 ms       11.4%           
----------------------------------------------------------------------------------
花费          : 8 分 0 秒
时间          : Mon Jun 9 14:47:35 HKT 2025
----------------------------------------------------------------------------------
```

### 空载温度

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-34.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-34.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-34.jpg" alt="image" loading="lazy">
</picture>