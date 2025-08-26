---
title: "Alice 新年免费机 测试"
published: 2025-01-01
categories: 
  - "vps"
  - "hk-server"
---

起床看见消息，发现自己居然稀里糊涂又中奖了。无敌，来自Alice 的2c4g 永久免费。我对这个商家了解不多，仅作测试。机器自带全球解锁，貌似挺不错的。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-13.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-13.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-13.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image.jpg" alt="" loading="lazy">
</picture>

## 机器规格

- **2c Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)**

- **4 GB RAM**

- **40G SSD**

- **1 IPv4 address**

- **1 IPv6 address**

- _**300 Mbit/s (Shared)**_

- **2 Backup Slots**

- **Price: 0/Lifetime**

## 测试

### CPU Info

```
root@Soyorin:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         40 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  2
  On-line CPU(s) list:   0,1
Vendor ID:               GenuineIntel
  BIOS Vendor ID:        QEMU
  Model name:            Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)
    BIOS Model name:     pc-q35-7.2  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          6
    Model:               58
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           2
    Stepping:            9
    BogoMIPS:            3399.99
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss syscall nx pdpe1gb rdtscp lm c                         onstant_tsc rep_good nopl xtopology cpuid tsc_known_freq pni pclmulqdq vmx ssse3 cx16 pcid sse4_1 sse4_2 x2apic popcnt tsc_deadline                         _timer aes xsave avx f16c rdrand hypervisor lahf_lm cpuid_fault pti ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid fsgs                         base tsc_adjust smep erms xsaveopt arat umip md_clear arch_capabilities
Virtualization features: 
  Virtualization:        VT-x
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   64 KiB (2 instances)
  L1i:                   64 KiB (2 instances)
  L2:                    8 MiB (2 instances)
  L3:                    32 MiB (2 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0,1
Vulnerabilities:         
  Itlb multihit:         Not affected
  L1tf:                  Mitigation; PTE Inversion; VMX flush not necessary, SMT disabled
  Mds:                   Mitigation; Clear CPU buffers; SMT Host state unknown
  Meltdown:              Mitigation; PTI
  Mmio stale data:       Unknown: No mitigations
  Retbleed:              Not affected
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not affected
  Srbds:                 Unknown: Dependent on hypervisor status
  Tsx async abort:       Not affected
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 13 minutes
Processor  : Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)
CPU cores  : 2 @ 1699.999 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 39.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Alice Networks LTD
ASN        : AS215355 ALICE NETWORKS LTD
Host       : Alice Networks LTD
Location   : Tsuen Wan, Tsuen Wan District (NTW)
Country    : Hong Kong

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 52.09 MB/s   (13.0k) | 153.92 MB/s   (2.4k)
Write      | 52.17 MB/s   (13.0k) | 154.73 MB/s   (2.4k)
Total      | 104.26 MB/s  (26.0k) | 308.65 MB/s   (4.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 146.92 MB/s    (286) | 145.09 MB/s    (141)
Write      | 154.73 MB/s    (302) | 154.75 MB/s    (151)
Total      | 301.66 MB/s    (588) | 299.84 MB/s    (292)
```

### 解锁

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-5.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-1.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-2.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-3.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-4.jpg" alt="" loading="lazy">
</picture>

### 融合怪测试

```
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS) @ 1699.999 MHz
 CPU 数量            : 2 Virtual CPU(s)
 CPU 缓存            : 16384 KB
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 462.13 MB / 3.79 GB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 2.33 GB / 39.82 GB
 启动盘路径          : /dev/vda3
 系统                : debian 12.8 [x86_64] 
 内核                : 6.1.0-9-amd64
 系统在线时间        : 0 days, 00 hours, 20 minutes
 时区                : GMT
 负载                : 0.78 / 1.21 / 0.72
 虚拟化架构          : KVM
 NAT类型             : Full Cone
 TCP加速方式         : cubic
 IPV4 ASN            : AS215355 Alice Networks Ltd
 IPV4 Location       : Kai Yi Wan / Hong Kong
 IPV6 ASN            : AS215355 Alice Networks Ltd
 IPV6 Location       : Kai Yi Wan / Hong Kong
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:    519.99
2 线程测试(多核)得分:   1032.74
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 9321.65 MB/s(9.77K IOPS, 5s)
单线程顺序读速度: 11172.70 MB/s(11.72K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       52.10 MB/s(13.0k)       52.17 MB/s(13.0k)       104.27 MB/s(26.1k)      
/root         64k      153.89 MB/s(2404)       154.70 MB/s(2417)       308.59 MB/s(4821)       
/root         512k     146.86 MB/s(286)        154.67 MB/s(302)        301.53 MB/s(588)        
/root         1m       145.02 MB/s(141)        154.68 MB/s(151)        299.70 MB/s(292)        
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
视频缓存节点地域: 中国香港(HKG33S01)
Youtube识别地域: 中国香港(HK)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：SG 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：SG 区
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Dazn                      YES (Region: SG) [Via DNS]
Disney+                   YES (Region: SG) [Via DNS]
Netflix                   YES (Region: US) [Via DNS]
Netflix CDN               HK
YouTube Region            YES (Region: HK) [Native]
YouTube CDN               HKG
Amazon Prime Video        YES (Region: HK) [Via DNS]
Paramount+                YES [Native]
TVBAnywhere+              NO
IQiYi                     YES (Region: HK) [Native]
Viu.com                   YES [Native]
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: HK)
ChatGPT                   YES (Region: SG) [Via DNS]
Sora                      YES (Region: SG)
Gemini                    YES (Region: SGP) [Via DNS]
MetaAI                    NO (AbraGeoBlocked)
Wikipedia Editability     NO
Reddit                    NO
TikTok                    YES (Region: SG) [Via DNS]
Bing Region               YES (Risky) (Region: HK)
Instagram Licensed Audio  YES [Native]
KOCOWA                    YES [Via DNS]
SonyLiv                   YES (Region: HK) [Via DNS]
OneTrust                  YES (Region: HK) [Via DNS]
GoogleSearch              YES
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 5 [8] 
VPN得分(越低越好): 86 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 99 [8] 
欺诈得分(越低越好): 0 [1 E] 
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0021 (Low) [A] 
公司滥用得分(越低越好): 0.0098 (Elevated) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] corporate [9] business [8 A] hosting [0 7] hosting - moderate probability [C]
公司类型: hosting [0 7] business [A]
是否云提供商: No [D] Yes [7]
是否数据中心: Yes [0 1 A] No [5 6 8 C]
是否移动设备: Yes [E] No [5 A C]
是否代理: No [0 1 4 5 6 7 8 9 A B C D E] 
是否VPN: No [0 1 6 7 A C D E] 
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
DNS-黑名单: 314(Total_Check) 0(Clean) 5(Blacklisted) 21(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0021 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] business [A]
公司类型: business [A] 
是否云提供商: No [D] 
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
DNS-黑名单: 314(Total_Check) 0(Clean) 0(Blacklisted) 314(Other) 
--------------------------------------邮件端口检测--------------------------------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✘     ✘     ✔     ✘     ✔     ✘    
163       ✘     ✘     ✔     ✘     ✔     ✘    
Sohu      ✘     ✘     ✘     ✘     ✘     ✘    
Yandex    ✘     ✘     ✔     ✘     ✔     ✘    
Gmail     ✘     ✘     ✘     ✘     ✘     ✘    
Outlook   ✘     ✘     ✔     ✘     ✔     ✘    
Office365 ✘     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✘     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✘     ✔     ✘     ✔     ✘    
MailRU    ✘     ✘     ✘     ✘     ✔     ✘    
AOL       ✘     ✘     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✘     ✔     ✘     ✔     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  检测不到回程路由节点的IP地址
北京移动 221.179.155.161 检测不到回程路由节点的IP地址
上海电信 202.96.209.133  检测不到回程路由节点的IP地址
上海联通 210.22.97.1     检测不到回程路由节点的IP地址
上海移动 211.136.112.200 检测不到回程路由节点的IP地址
广州电信 58.60.188.222   检测不到回程路由节点的IP地址
广州联通 210.21.196.6    检测不到回程路由节点的IP地址
广州移动 120.196.165.24  检测不到回程路由节点的IP地址
成都电信 61.139.2.69     检测不到回程路由节点的IP地址
成都联通 119.6.6.6       检测不到回程路由节点的IP地址
成都移动 211.137.96.205  检测不到回程路由节点的IP地址
-------------------------------------三网回程路由检测-------------------------------------
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
1.19 ms      AS215355                      中国, 香港, alicenetworks.net 
0.98 ms      *                             
*
*
*
*
*
*
*
*
*
*
*
*
*
147.27 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.51 ms      AS215355                      中国, 香港, alicenetworks.net 
0.98 ms      *                             
*
*
*
*
*
*
*
*
*
337.01 ms    AS17816    [UNICOM-GD]        中国, 广东, 深圳, chinaunicom.cn  联通
389.65 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
337.74 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.71 ms      AS215355                      中国, 香港, alicenetworks.net 
0.86 ms      *                             
*
*
*
*
*
*
*
*
*
*
33.44 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
37.56 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
36.13 ms     AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   7.21 Mbps       289.72 Mbps     841.533µs       N/A             
中国香港        300.65 Mbps     289.68 Mbps     2.258128ms      N/A             
日本东京        196.54 Mbps     248.12 Mbps     77.541505ms     N/A             
联通成都        0.68 Mbps       0.57 Mbps       335.80269ms     N/A             
联通Wu Xi       0.98 Mbps       195.37 Mbps     405.927944ms    N/A             
电信Suzhou5G    0.12 Mbps       5.27 Mbps       410.567521ms    N/A             
电信浙江        0.13 Mbps       0.24 Mbps       1.081206506s    N/A             
移动杭州5G      0.30 Mbps       273.01 Mbps     33.65497ms      N/A             
移动Chengdu     87.87 Mbps      261.64 Mbps     58.749617ms     N/A             
----------------------------------------------------------------------------------
花费          : 11 分 50 秒
时间          : Wed Jan 1 08:57:14 GMT 2025
----------------------------------------------------------------------------------
```
