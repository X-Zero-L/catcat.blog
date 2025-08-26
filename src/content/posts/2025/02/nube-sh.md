---
title: "Nube.sh 弹性云折扣"
published: 2025-02-25
categories: 
  - "sg-server"
  - "jp-server"
  - "vps"
  - "us-server"
  - "hk-server"
---

牛老板也开启了促销，不过规则还是有些复杂的。

以下是总结的优惠策略：

1. **初始折扣：开始时提供65%的折扣。**

3. **第一步调整：当折扣开始减少时，第一步从65% off调整到55% off。这个调整可能是由于部分客户不再续费，释放出资源。**

5. **第二步调整：当服务器资源接近满负荷时，折扣进一步从55% off调整到45% off。这可能是为了吸引新客户，利用释放出的资源。**

7. **动态优惠：整体策略是动态的，根据服务器的资源使用情况和客户续费情况来调整折扣水平。这种策略旨在优化资源利用率，并在不同阶段吸引新客户。**

不过根据老板说法，他的香港有6TB母鸡，完全不着急。

## LG

**美国，圣何塞（中国优化）  
Test IP：65.75.222.76  
美国，圣何塞  
Test IP：65.75.223.64  
http://sjc-bgp.sjc.lg.kuaichedao.xyz/  
香港  
Test IP：103.138.72.184  
http://hk-bgp.hkg.lg.kuaichedao.xyz/  
日本，东京  
Test IP：38.150.10.238  
http://jp-bgp.tyo.lg.kuaichedao.xyz/  
新加坡  
Test IP：38.150.8.11  
http://sg-bgp.sin.lg.kuaichedao.xyz/**

## 下单

下单地址：[Nube Cloud](https://nube.sh/invite/424692390H4EEM)（含AFF）

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-41.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-41.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-41.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-40.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-40.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-40.jpg" alt="" loading="lazy">
</picture>

**香港 1c1g 10GB 一个月仅需0.8USD,缺点是牛老板都是按流量计费，大户要小心。流量均为0.0009USD/GB。流量计费为单向计费，只计算流出流量，不记流入。支持按小时计费，IPv6地址可用。**

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/c18066d78fbced3c44ada96874700ee3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/c18066d78fbced3c44ada96874700ee3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/c18066d78fbced3c44ada96874700ee3.jpg" alt="" loading="lazy">
</picture>

## 测评

### 香港

```
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC 7713 64-Core Processor @1996.250 MHz
 CPU 数量            : 1 Virtual CPU(s)
 CPU 缓存            : L1: 128 KB / L2: 512 KB / L3: 16 MB
 GPU 型号            : Virtio 1.0 GPU
 GPU 状态            : 0.000000
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 328.22 MB / 861.10 MB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 2.46 GB / 9.94 GB
 启动盘路径          : /dev/vda1
 系统                : debian 12.9 [x86_64] 
 内核                : 6.1.0-21-amd64
 系统在线时间        : 0 days, 00 hours, 26 minutes
 时区                : HKT
 负载                : 0.04 / 0.09 / 0.07
 虚拟化架构          : KVM
 NAT类型             : Full Cone
 TCP加速方式         : bbr
 IPV4 ASN            : AS138997 Eons Data Communications Limited
 IPV4 Location       : Ha Kwai Chung / Kwai Tsing / Hong Kong
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   3355.97
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 22689.28 MB/s(23.79K IOPS, 5s)
单线程顺序读速度: 38001.58 MB/s(39.85K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       146.86 MB/s(36.7k)      147.25 MB/s(36.8k)      294.11 MB/s(73.5k)      
/root         64k      2.01 GB/s(31.5k)        2.02 GB/s(31.6k)        4.04 GB/s(63.1k)        
/root         512k     3.21 GB/s(6273)         3.38 GB/s(6606)         6.59 GB/s(12.9k)        
/root         1m       3.34 GB/s(3265)         3.57 GB/s(3482)         6.91 GB/s(6747)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：中国香港
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 中国香港(HK)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：HK 区
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Dazn                      YES (Region: HK)
Disney+                   YES (Region: HK)
Netflix                   YES (Region: US)
Netflix CDN               HK
YouTube Region            YES (Region: HK)
YouTube CDN               HKG
Amazon Prime Video        YES (Region: HK)
Paramount+                YES
TVBAnywhere+              YES (Region: HK)
IQiYi                     YES (Region: HK)
Viu.com                   YES
Spotify Registration      YES (Region: HK)
Steam Store               YES (Community Available) (Region: HK)
ChatGPT                   YES (Only Available with Mobile APP)
Sora                      Banned (VPN Blocked)
Claude                    YES
Gemini                    NO
MetaAI                    NO (AbraGeoBlocked)
Apple                     YES (Region: HKG)
Wikipedia Editability     NO
Reddit                    YES
TikTok                    NO
BingSearch                YES (Region: HK)
Instagram Licensed Audio  YES
KOCOWA                    NO
SonyLiv                   NO (Proxy Detected) (Region: HK)
OneTrust                  YES (Region: HK KWAI TSING)
GoogleSearch              YES
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 38 [8] 
VPN得分(越低越好): 18 [8] 
代理得分(越低越好): 77 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2]
威胁得分(越低越好): 90 [8] 
欺诈得分(越低越好): 7 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0013 (Low) [A] 
公司滥用得分(越低越好): 0.0017 (Low) [A]
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [0 7 A] corporate [9] business [8] hosting - moderate probability [C]
公司类型: business [0] isp [7 A]
是否云提供商: Yes [7 D] 
是否数据中心: No [0 5 6 8 A C] Yes [1]
是否移动设备: Yes [E] No [5 A C]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B C D]
是否VPN: No [0 1 6 7 A C D] Yes [E]
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
DNS-黑名单: 313(Total_Check) 0(Clean) 6(Blacklisted) 20(Other) 
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
GMX       ✔     ✘     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✘     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   检测不到回程路由节点的IP地址
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     检测不到回程路由节点的IP地址
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 104.26.13.151 - 31.49ms - Misaka.HKG
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.60 ms      AS138997                      中国, 香港, eons.cloud 
0.86 ms      *                             
2.71 ms      *          [Nube-BB]          中国, 香港
0.27 ms      AS138997   [Nube-BB]          中国, 香港, eons.cloud 
3.01 ms      AS138997   [Nube-BB]          中国, 香港, eons.cloud 
3.63 ms      *          [Nube-BB]          中国, 香港
0.79 ms      *          [Nube-BB]          中国, 香港
1.03 ms      *          [Nube-BB]          中国, 香港
1.17 ms      *          [Nube-BB]          中国, 香港
*
208.17 ms    AS3491     [PCCW-BACKBONE]    美国, 加利福尼亚, 圣何塞, pccwglobal.com 
*
154.01 ms    *          [NSFNET-T3]        美国, 加利福尼亚, 圣何塞
318.67 ms    AS701      [UU-152]           美国, 加利福尼亚, 圣何塞, verizon.com 
*
426.27 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
*
*
*
425.26 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.48 ms      AS138997                      中国, 香港, eons.cloud 
0.90 ms      *                             
4.10 ms      *          [Nube-BB]          中国, 香港
0.49 ms      AS138997   [Nube-BB]          中国, 香港, eons.cloud 
0.85 ms      *          [Nube-BB]          中国, 香港
*
*
*
161.99 ms    *          [NSFNET-T3]        美国, 加利福尼亚, 洛杉矶
327.84 ms    AS701      [UUNETCUSTB40]     美国, 加利福尼亚, 洛杉矶, verizon.com 
328.81 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
*
*
332.44 ms    AS17816    [UNICOM-GD]        中国, 广东, 深圳, chinaunicom.cn  联通
337.40 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
330.55 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.48 ms      AS138997                      中国, 香港, eons.cloud 
0.84 ms      *                             
3.48 ms      *          [Nube-BB]          中国, 香港
0.40 ms      AS138997   [Nube-BB]          中国, 香港, eons.cloud 
4.60 ms      AS138997   [Nube-BB]          中国, 香港, eons.cloud 
2.85 ms      *          [Nube-BB]          中国, 香港
0.77 ms      *          [Nube-BB]          中国, 香港
0.92 ms      *          [Nube-BB]          中国, 香港
1.31 ms      AS3356                        中国, 香港, lumen.com 
2.59 ms      AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com  移动
3.02 ms      AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com  移动
58.56 ms     AS58453    [CMI-INT]          中国, 广东, 广州, cmi.chinamobile.com  移动
*
8.84 ms      AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
11.21 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
10.24 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
11.69 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
9.28 ms      AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
新加坡          171.24 Mbps     113.29 Mbps     31.635704ms     N/A             
中国香港        653.86 Mbps     349.23 Mbps     35.084946ms     N/A             
联通上海5G      36.64 Mbps      270.21 Mbps     301.388217ms    N/A             
电信Suzhou5G    15.10 Mbps      202.53 Mbps     392.820137ms    N/A             
电信浙江        17.87 Mbps      64.96 Mbps      403.364743ms    N/A             
移动杭州5G      0.21 Mbps       1677.58 Mbps    34.530372ms     N/A             
移动Chengdu     12.78 Mbps      1294.71 Mbps    81.866019ms     N/A             
----------------------------------------------------------------------------------
花费          : 8 分 37 秒
时间          : Tue Feb 25 19:06:00 HKT 2025
----------------------------------------------------------------------------------
```

### 日本

```
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC 7C13 64-Core Processor @1996.247 MHz
 CPU 数量            : 1 Virtual CPU(s)
 CPU 缓存            : L1: 128 KB / L2: 512 KB / L3: 16 MB
 GPU 型号            : Virtio 1.0 GPU
 GPU 状态            : 0.000000
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 345.52 MB / 861.10 MB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 2.46 GB / 9.94 GB
 启动盘路径          : /dev/vda1
 系统                : debian 12.9 [x86_64] 
 内核                : 6.1.0-21-amd64
 系统在线时间        : 0 days, 00 hours, 26 minutes
 时区                : HKT
 负载                : 0.08 / 0.15 / 0.09
 虚拟化架构          : KVM
 NAT类型             : Full Cone
 TCP加速方式         : bbr
 IPV4 ASN            : AS138997 Eons Data Communications Limited
 IPV4 Location       : Tokyo / Tokyo / Japan
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   3460.79
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 25370.04 MB/s(26.60K IOPS, 5s)
单线程顺序读速度: 44158.14 MB/s(46.30K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       81.64 MB/s(20.4k)       81.85 MB/s(20.5k)       163.49 MB/s(40.9k)      
/root         64k      884.79 MB/s(13.8k)      889.45 MB/s(13.9k)      1.77 GB/s(27.7k)        
/root         512k     1.45 GB/s(2825)         1.52 GB/s(2975)         2.97 GB/s(5800)         
/root         1m       1.88 GB/s(1835)         2.00 GB/s(1957)         3.88 GB/s(3792)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：中国香港
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT12S24)
Youtube识别地域: 日本(JP)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前IPv4出口所在地区即将开通DisneyPlus
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Dazn                      YES (Region: JP)
Disney+                   YES (Region: HK)
Netflix                   YES (Region: US)
Netflix CDN               HK
YouTube Region            YES (Region: JP)
YouTube CDN               NRT
Amazon Prime Video        NO (Region: CN)
Paramount+                YES
TVBAnywhere+              YES (Region: US)
IQiYi                     YES (Region: HK)
Viu.com                   YES
Spotify Registration      YES (Region: JP)
Steam Store               YES (Community Available) (Region: JP)
ChatGPT                   YES (Region: JP)
Sora                      YES (Region: JP)
Claude                    YES
Gemini                    YES (Region: JPN)
MetaAI                    NO (AbraGeoBlocked)
Apple                     YES (Region: CHN)
Wikipedia Editability     NO
Reddit                    YES
TikTok                    YES (Region: US)
BingSearch                YES (Region: JP)
Instagram Licensed Audio  YES
KOCOWA                    NO
SonyLiv                   Banned
OneTrust                  YES (Region: JP TOKYO)
GoogleSearch              YES
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 38 [8] 
VPN得分(越低越好): 18 [8] 
代理得分(越低越好): 77 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 90 [8] 
欺诈得分(越低越好): 7 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0013 (Low) [A] 
公司滥用得分(越低越好): 0.0017 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2] 可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: hosting [0 7 A] DataCenter/WebHosting/Transit [3] business [8] corporate [9] unknown [C]
公司类型: isp [7 A] business [0]
是否云提供商: Yes [7 D] 
是否数据中心: Yes [1] No [0 5 6 8 A C]
是否移动设备: Yes [E] No [5 A C]
是否代理: No [0 1 4 5 6 7 8 9 A B C D] Yes [E]
是否VPN: No [0 1 6 7 A C D] Yes [E]
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
DNS-黑名单: 313(Total_Check) 0(Clean) 6(Blacklisted) 23(Other) 
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
GMX       ✔     ✘     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✘     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京电信 219.141.140.10  电信163    [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  检测不到回程路由节点的IP地址
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 104.26.12.151 - 236.24ms - Misaka.HKG
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.41 ms      AS138997                      中国, 台湾, eons.cloud 
0.59 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
1.94 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
1.53 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
1.13 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
1.00 ms      AS138997   [Nube-BB]          日本, eons.cloud 
1.74 ms      *          [JPNIC-NET]        日本, 东京都, 东京
52.13 ms     AS2497     [IIJ]              日本, 东京都, 东京, iij.ad.jp 
2.07 ms      AS2497     [IIJ]              日本, 东京都, 东京, iij.ad.jp 
2.24 ms      AS2497     [IIJ]              日本, 东京都, 东京, iij.ad.jp 
2.73 ms      AS4134     [CHINANET-FJ]      日本, 东京都, 东京, www.chinatelecom.com.cn  电信
57.06 ms     AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
102.69 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn 
*
161.22 ms    AS134774   [CHINANET-GD]      中国, 广东, 深圳, chinatelecom.cn  电信
*
57.83 ms     AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.85 ms      AS138997                      中国, 台湾, eons.cloud 
0.56 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
1.23 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
2.40 ms      AS3356                        日本, 东京都, 东京, lumen.com 
112.44 ms    AS3356                        美国, 加利福尼亚, 洛杉矶, lumen.com 
300.46 ms    AS3356                        美国, 加利福尼亚, 洛杉矶, lumen.com 
290.44 ms    AS4837     [CU169-BACKBONE]   中国, 北京, 北京, chinaunicom.cn 
287.77 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
*
293.01 ms    AS17816    [UNICOM-GD]        中国, 广东, 深圳, chinaunicom.cn  联通
287.37 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
291.85 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.57 ms      AS138997                      中国, 台湾, eons.cloud 
0.82 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
1.37 ms      AS138997   [Nube-BB]          日本, 东京都, 东京, eons.cloud 
1.49 ms      AS3356                        日本, 东京都, 东京, lumen.com 
2.59 ms      AS3356                        日本, 东京都, 东京, lumen.com 
2.55 ms      AS3356                        日本, 东京都, 东京, lumen.com 
2.66 ms      AS58453    [CMI-INT]          日本, 东京都, 东京, cmi.chinamobile.com  移动
60.55 ms     AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com 
59.25 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
59.49 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
68.31 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
119.57 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
64.68 ms     AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   1418.42 Mbps    4481.06 Mbps    986.527µs       N/A             
日本东京        1611.96 Mbps    5029.80 Mbps    1.284033ms      N/A             
中国香港        166.94 Mbps     216.58 Mbps     51.3004ms       N/A             
联通上海5G      30.73 Mbps      135.85 Mbps     301.515847ms    N/A             
电信Suzhou5G    157.48 Mbps     447.33 Mbps     37.475583ms     N/A             
电信浙江        133.24 Mbps     115.29 Mbps     50.399383ms     N/A             
移动杭州5G      0.73 Mbps       1518.11 Mbps    37.817607ms     N/A             
移动Chengdu     126.77 Mbps     951.36 Mbps     83.318287ms     N/A             
----------------------------------------------------------------------------------
花费          : 8 分 9 秒
时间          : Tue Feb 25 19:05:30 HKT 2025
----------------------------------------------------------------------------------
```

### 新加坡

```
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC 7663 56-Core Processor @1999.958 MHz
 CPU 数量            : 1 Virtual CPU(s)
 CPU 缓存            : L1: 128 KB / L2: 512 KB / L3: 16 MB
 GPU 型号            : Virtio 1.0 GPU
 GPU 状态            : 0.000000
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 342.37 MB / 861.10 MB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 2.46 GB / 9.94 GB
 启动盘路径          : /dev/vda1
 系统                : debian 12.9 [x86_64] 
 内核                : 6.1.0-21-amd64
 系统在线时间        : 0 days, 00 hours, 24 minutes
 时区                : HKT
 负载                : 0.12 / 0.20 / 0.13
 虚拟化架构          : KVM
 NAT类型             : Full Cone
 TCP加速方式         : bbr
 IPV4 ASN            : AS138997 Eons Data Communications Limited
 IPV4 Location       : Queenstown Estate / Tokyo / Singapore
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   3316.71
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 23225.10 MB/s(24.35K IOPS, 5s)
单线程顺序读速度: 37725.22 MB/s(39.56K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       65.45 MB/s(16.4k)       65.58 MB/s(16.4k)       131.02 MB/s(32.8k)      
/root         64k      567.30 MB/s(8864)       570.29 MB/s(8910)       1.14 GB/s(17.8k)        
/root         512k     569.52 MB/s(1112)       599.78 MB/s(1171)       1.17 GB/s(2283)         
/root         1m       678.78 MB/s(662)        723.99 MB/s(707)        1.40 GB/s(1369)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：中国香港
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN11S18)
Youtube识别地域: 新加坡(SG)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前IPv4出口所在地区即将开通DisneyPlus
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Dazn                      YES (Region: SG)
Disney+                   YES (Region: HK)
Netflix                   YES (Region: US)
Netflix CDN               HK
YouTube Region            YES (Region: SG)
YouTube CDN               SIN
Amazon Prime Video        YES (Region: SG)
Paramount+                YES
TVBAnywhere+              YES (Region: SG)
IQiYi                     YES (Region: CN)
Viu.com                   YES
Spotify Registration      YES (Region: SG)
Steam Store               YES (Community Available) (Region: SG)
ChatGPT                   YES (Region: SG)
Sora                      YES (Region: SG)
Claude                    YES
Gemini                    YES (Region: SGP)
MetaAI                    NO (AbraGeoBlocked)
Apple                     YES (Region: CHN)
Wikipedia Editability     NO
Reddit                    YES
TikTok                    YES (Region: SG)
BingSearch                YES (Region: WW)
Instagram Licensed Audio  YES
KOCOWA                    NO
SonyLiv                   Banned
OneTrust                  YES (Region: SG)
GoogleSearch              YES
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 38 [8] 
VPN得分(越低越好): 18 [8] 
代理得分(越低越好): 77 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 90 [8] 
欺诈得分(越低越好): 7 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0013 (Low) [A] 
公司滥用得分(越低越好): 0.0017 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2] 恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: hosting [0 7 A] consumer [9] unknown [C] DataCenter/WebHosting/Transit [3] business [8]
公司类型: business [0] isp [7 A]
是否云提供商: Yes [7 D]
是否数据中心: No [0 5 6 8 A C] Yes [1]
是否移动设备: Yes [E] No [5 A C]
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
DNS-黑名单: 313(Total_Check) 0(Clean) 6(Blacklisted) 19(Other) 
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
GMX       ✔     ✘     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✘     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 172.67.69.163 - 132.92ms - Misaka.HKG
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.49 ms      AS138997                      新加坡, eons.cloud 
0.71 ms      *          [Nube-BB]          新加坡
4.39 ms      *          [Nube-BB]          新加坡
1.34 ms      *          [Nube-BB]          新加坡
4.05 ms      *          [Nube-BB]          新加坡
1.16 ms      *          [Nube-BB]          新加坡
1.33 ms      AS3356                        新加坡, lumen.com 
174.75 ms    AS3356                        美国, 加利福尼亚, 圣何塞, lumen.com 
176.23 ms    AS3356                        美国, 加利福尼亚, 圣何塞, lumen.com 
332.50 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
*
*
336.29 ms    AS4134     [CHINANET-GD]      中国, 广东, 深圳, www.chinatelecom.com.cn  电信
*
324.78 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.64 ms      AS138997                      新加坡, eons.cloud 
0.77 ms      *          [Nube-BB]          新加坡
4.34 ms      *          [Nube-BB]          新加坡
1.48 ms      *          [Nube-BB]          新加坡
5.23 ms      *          [Nube-BB]          新加坡
1.37 ms      *          [Nube-BB]          新加坡
1.43 ms      AS3356                        新加坡, lumen.com 
163.61 ms    AS3356                        美国, 加利福尼亚, 洛杉矶, lumen.com 
449.33 ms    AS3356                        美国, 加利福尼亚, 圣何塞, lumen.com 
459.26 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
460.82 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
*
459.34 ms    AS17816    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
478.91 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
456.60 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.36 ms      AS138997                      新加坡, eons.cloud 
0.57 ms      *          [Nube-BB]          新加坡
3.58 ms      *          [Nube-BB]          新加坡
1.33 ms      *          [Nube-BB]          新加坡
*
1.18 ms      AS7578                        新加坡, globalsecurelayer.com 
1.17 ms      AS7578                        新加坡, globalsecurelayer.com 
1.53 ms      AS3356                        新加坡, lumen.com 
2.30 ms      AS3356                        新加坡, lumen.com 
*
36.94 ms     AS58453    [CMI-INT]          中国, 广东, 广州, cmi.chinamobile.com  移动
36.36 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
37.89 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
40.71 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
39.84 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
42.52 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
41.86 ms     AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   1514.81 Mbps    2756.00 Mbps    1.585554ms      0.00% (Sent: 402/Dup: 0/Max: 401)
新加坡          1289.17 Mbps    2014.84 Mbps    1.987377ms      N/A             
中国香港        239.83 Mbps     268.33 Mbps     31.888967ms     N/A             
联通上海5G      17.68 Mbps      163.09 Mbps     508.059493ms    N/A             
电信Suzhou5G    24.76 Mbps      173.48 Mbps     313.816147ms    N/A             
电信Zhenjiang5G 21.18 Mbps      211.45 Mbps     324.760481ms    N/A             
移动杭州5G      2.89 Mbps       835.19 Mbps     66.289854ms     N/A             
移动Suzhou      20.77 Mbps      1.09 Mbps       95.157292ms     N/A             
----------------------------------------------------------------------------------
花费          : 9 分 4 秒
时间          : Tue Feb 25 19:06:30 HKT 2025
----------------------------------------------------------------------------------
```

### 圣何塞

```
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC 7663 56-Core Processor @1999.999 MHz
 CPU 数量            : 1 Virtual CPU(s)
 CPU 缓存            : L1: 128 KB / L2: 512 KB / L3: 16 MB
 GPU 型号            : Virtio 1.0 GPU
 GPU 状态            : 0.000000
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 313.82 MB / 861.10 MB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 2.01 GB / 9.94 GB
 启动盘路径          : /dev/vda1
 系统                : debian 12.5 [x86_64] 
 内核                : 6.1.0-21-amd64
 系统在线时间        : 0 days, 00 hours, 22 minutes
 时区                : HKT
 负载                : 0.07 / 0.04 / 0.01
 虚拟化架构          : KVM
 NAT类型             : Full Cone
 TCP加速方式         : bbr
 IPV4 ASN            : AS138997 Eons Data Communications Limited
 IPV4 Location       : San Jose / California / United States
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   3729.40
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 26358.84 MB/s(27.64K IOPS, 5s)
单线程顺序读速度: 46077.59 MB/s(48.32K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       72.59 MB/s(18.1k)       72.78 MB/s(18.2k)       145.37 MB/s(36.3k)      
/root         64k      711.69 MB/s(11.1k)      715.43 MB/s(11.2k)      1.43 GB/s(22.3k)        
/root         512k     1.61 GB/s(3146)         1.70 GB/s(3313)         3.31 GB/s(6459)         
/root         1m       1.91 GB/s(1866)         2.04 GB/s(1990)         3.95 GB/s(3856)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：中国香港
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  洛杉机(LAX17S56)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：US 区
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Dazn                      YES (Region: US)
Disney+                   YES (Region: HK)
Netflix                   YES (Region: US)
Netflix CDN               HK
YouTube Region            YES (Region: US)
YouTube CDN               LAX
Amazon Prime Video        YES (Region: US)
Paramount+                YES
TVBAnywhere+              YES (Region: US)
IQiYi                     YES (Region: US)
Viu.com                   YES
Spotify Registration      YES (Region: US)
Steam Store               YES (Community Available) (Region: US)
ChatGPT                   YES (Region: US)
Sora                      YES (Region: US)
Claude                    YES
Gemini                    YES (Region: USA)
MetaAI                    NO (AbraGeoBlocked)
Apple                     YES (Region: USA)
Wikipedia Editability     NO
Reddit                    YES
TikTok                    YES (Region: US)
BingSearch                YES (Region: US)
Instagram Licensed Audio  YES
KOCOWA                    YES
SonyLiv                   NO (Proxy Detected) (Region: US)
OneTrust                  YES (Region: US CALIFORNIA)
GoogleSearch              YES
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 38 [8] 
VPN得分(越低越好): 18 [8] 
代理得分(越低越好): 77 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2]
威胁得分(越低越好): 90 [8] 
欺诈得分(越低越好): 65 [E] 7 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0013 (Low) [A] 
公司滥用得分(越低越好): 0.0017 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: corporate [9] DataCenter/WebHosting/Transit [3] hosting [0 7 A] business [8] unknown [C]
公司类型: isp [7 A] business [0]
是否云提供商: Yes [7 D] 
是否数据中心: No [0 5 6 8 A C] Yes [1]
是否移动设备: Yes [E] No [5 A C]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B C D]
是否VPN: Yes [E] No [0 1 6 7 A C D]
是否Tor: No [0 1 3 6 7 8 A B C D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E]
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 313(Total_Check) 0(Clean) 6(Blacklisted) 20(Other) 
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
GMX       ✔     ✘     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✘     ✘     ✘     ✘    
Apple     ✘     ✘     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✔     ✘     ✔     ✘     ✔     ✘    
Namecrane ✔     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✔     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 172.67.69.163 - 64.37ms - Misaka.LAX
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.51 ms      AS138997                      中国, 台湾, eons.cloud 
0.83 ms      *          [Nube-BB]          美国, 加利福尼亚, 圣何塞
0.35 ms      *          [Nube-BB]          美国, 加利福尼亚, 圣何塞
*
1.43 ms      AS174      [COGENT-BONE]      美国, 加利福尼亚, 圣何塞, cogentco.com 
1.64 ms      AS174      [COGENT-BONE]      美国, 加利福尼亚, 圣何塞, cogentco.com 
11.57 ms     AS174                         美国, 加利福尼亚, 圣克拉拉, cogentco.com 
219.67 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
*
*
260.05 ms    AS4134     [CHINANET-GD]      中国, 广东, 深圳, www.chinatelecom.com.cn  电信
*
175.71 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.61 ms      AS138997                      中国, 台湾, eons.cloud 
0.85 ms      *          [Nube-BB]          美国, 加利福尼亚, 圣何塞
0.28 ms      *          [Nube-BB]          美国, 加利福尼亚, 圣何塞
*
2.10 ms      AS174      [COGENT-BONE]      美国, 加利福尼亚, 圣何塞, cogentco.com 
1.36 ms      AS174      [COGENT-BONE]      美国, 加利福尼亚, 圣何塞, cogentco.com 
2.24 ms      AS174      [COGENT-BONE]      美国, cogentco.com 
12.55 ms     AS174      [COGENT-BONE]      美国, cogentco.com 
13.01 ms     AS174      [COGENT-BONE]      美国, 加利福尼亚, 洛杉矶, cogentco.com 
191.79 ms    AS174                         美国, 加利福尼亚, 洛杉矶, cogentco.com 
169.43 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
*
*
162.35 ms    AS17816    [UNICOM-GD]        中国, 广东省, 广州市, chinaunicom.cn  联通
367.34 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
187.54 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.39 ms      AS138997                      中国, 台湾, eons.cloud 
0.57 ms      *          [Nube-BB]          美国, 加利福尼亚, 圣何塞
0.56 ms      *          [Nube-BB]          美国, 加利福尼亚, 圣何塞
*
1.03 ms      AS174      [COGENT-BONE]      美国, 加利福尼亚, 圣何塞, cogentco.com 
1.50 ms      AS174      [COGENT-BONE]      美国, 加利福尼亚, 圣何塞, cogentco.com 
2.34 ms      AS174      [COGENT-BONE]      美国, cogentco.com 
12.96 ms     AS174      [COGENT-BONE]      美国, cogentco.com 
12.80 ms     AS174      [COGENT-BONE]      美国, 加利福尼亚, 洛杉矶, cogentco.com 
12.59 ms     AS174                         美国, 加利福尼亚, 洛杉矶, cogentco.com 
12.58 ms     AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com 
12.86 ms     AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com 
174.21 ms    AS58453    [CMI-INT]          中国, 广东, 广州, cmi.chinamobile.com  移动
185.33 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
185.45 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
183.60 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
181.79 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
181.53 ms    AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   1882.22 Mbps    3548.39 Mbps    1.046932ms      0.00% (Sent: 403/Dup: 0/Max: 402)
洛杉矶          578.69 Mbps     4264.52 Mbps    13.231185ms     N/A             
日本东京        89.94 Mbps      1140.77 Mbps    107.102571ms    N/A             
联通上海5G      72.41 Mbps      581.70 Mbps     136.574135ms    N/A             
电信Zhenjiang5G 40.50 Mbps      608.32 Mbps     147.413392ms    N/A             
电信浙江        22.77 Mbps      153.51 Mbps     153.404139ms    N/A             
移动Chengdu     44.92 Mbps      360.67 Mbps     220.631034ms    N/A             
移动杭州5G      9.41 Mbps       228.81 Mbps     430.833001ms    N/A             
----------------------------------------------------------------------------------
花费          : 9 分 9 秒
时间          : Tue Feb 25 19:06:34 HKT 2025
----------------------------------------------------------------------------------
```

## 教程

如何在 Nube Cloud 手动配置IPV6 [https://support.nube.sh/docs/service/25]( https://support.nube.sh/docs/service/25)
