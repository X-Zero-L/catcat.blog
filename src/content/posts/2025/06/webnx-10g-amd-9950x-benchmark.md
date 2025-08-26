---
title: "WebNX 万兆 AMD 9950X 杜甫测试"
published: 2025-06-08
categories: 
  - "vps"
  - "us-server"
---

**WebNX是我一直在购买的商家，目前运营了犹他州奥格登和洛杉矶还有****纽约****三个地区，WebNX是 Equinix LA3 最大的客户之一，目前拥有超过 200 个机架和 5 个机柜。值得一提的是他们对外的[SLA](https://webnx.com/service-level-agreement)号称是100%，每15分钟的停机计算为1天。同时商家具有自助安装系统的功能，非常完善，省下了很多工单安装系统撕逼的时间。**

**正好最近9950X做促销的杜甫商家越来越多，可以做个横向的各个角度的对比。他是很多oneman和小服务商的上游，常见的有gorillaservers,geencloud等。相比[Fiberstate](https://catcat.blog/fiberstate-10g-amd-9950x-benchmark-la.html?swcfpc=1)的8人大铁盒，独享的还是温度更加合适，企业级的硬件提供的稳定性更高。价格方面来看，还是[Fiberstate](https://catcat.blog/fiberstate-10g-amd-9950x-benchmark-la.html?swcfpc=1) 更有优势,取决于使用者更看重哪个方面，但是使用 [Fiberstate](https://catcat.blog/fiberstate-10g-amd-9950x-benchmark-la.html?swcfpc=1) 当oneman开小鸡的我觉得需要格外注意，高负载下的高温极有可能造成死机，对稳定性有要求的谨慎购买下游的机器。**

## Looking Glass

- Los Angeles Looking Glass: [https://lax-lg.webnx.com/](https://lax-lg.webnx.com/)

## 配置

- **CPU ： AMD Ryzen 9 9950X**

- **MEM ：4 x 48 GB DDR5-3600MT/s** **Micron** **CP48G56C46U5.M16B1**

- **DISK ：2 \* 3.84 T** **KCD6XLUL3T84**

- **Network : 10G** **Broadcom BCM57416**

- **MOTHERBOARD : ASRockRack B650D4U-2L2T/BCM 4.01**

- **BIOS: American Megatrends International, LLC. 20.07 (10/17/2024)**

- **IP ： /29 IPv4 and /64 IPv6**

## 测评

### CPU

```
root@catcat:~/scripts/btop# lscpu
Architecture:                x86_64
  CPU op-mode(s):            32-bit, 64-bit
  Address sizes:             48 bits physical, 48 bits virtual
  Byte Order:                Little Endian
CPU(s):                      32
  On-line CPU(s) list:       0-31
Vendor ID:                   AuthenticAMD
  BIOS Vendor ID:            Advanced Micro Devices, Inc.
  Model name:                AMD Ryzen 9 9950X 16-Core Processor
    BIOS Model name:         AMD Ryzen 9 9950X 16-Core Processor             Unknown CPU @ 4.3GHz
    BIOS CPU family:         107
    CPU family:              26
    Model:                   68
    Thread(s) per core:      2
    Core(s) per socket:      16
    Socket(s):               1
    Stepping:                0
    Frequency boost:         enabled
    CPU(s) scaling MHz:      70%
    CPU max MHz:             4300.0000
    CPU min MHz:             3000.0000
    BogoMIPS:                8583.31
    Flags:                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm 
                             constant_tsc rep_good amd_lbr_v2 nopl nonstop_tsc cpuid extd_apicid aperfmperf rapl pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 movbe popcn                             t aes xsave avx f16c rdrand lahf_lm cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce topoext perfctr_                             core perfctr_nb bpext perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba perfmon_v2 ibrs ibpb stibp ibrs_enhanced vmmcall fsgsbase tsc_adjust                              bmi1 avx2 smep bmi2 erms invpcid cqm rdt_a avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt                              xsavec xgetbv1 xsaves cqm_llc cqm_occup_llc cqm_mbm_total cqm_mbm_local avx_vnni avx512_bf16 clzero irperf xsaveerptr rdpru wbnoinvd cppc arat np                             t lbrv svm_lock nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold v_vmsave_vmload vgif v_spec_ctrl avx512vbmi umip 
                             pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid bus_lock_detect movdiri movdir64b overflow_recov succ                             or smca fsrm avx512_vp2intersect flush_l1d amd_lbr_pmc_freeze
Virtualization features:     
  Virtualization:            AMD-V
Caches (sum of all):         
  L1d:                       768 KiB (16 instances)
  L1i:                       512 KiB (16 instances)
  L2:                        16 MiB (16 instances)
  L3:                        64 MiB (2 instances)
NUMA:                        
  NUMA node(s):              1
  NUMA node0 CPU(s):         0-31
Vulnerabilities:             
  Gather data sampling:      Not affected
  Indirect target selection: Not affected
  Itlb multihit:             Not affected
  L1tf:                      Not affected
  Mds:                       Not affected
  Meltdown:                  Not affected
  Mmio stale data:           Not affected
  Reg file data sampling:    Not affected
  Retbleed:                  Not affected
  Spec rstack overflow:      Not affected
  Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:                Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP always-on; PBRSB-eIBRS Not affected; BHI Not affected
  Srbds:                     Not affected
  Tsx async abort:           Not affected
root@catcat:~/scripts/btop# 
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 32 minutes
Processor  : AMD Ryzen 9 9950X 16-Core Processor
CPU cores  : 32 @ 3000.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 186.3 GiB
Swap       : 3.8 GiB
Disk       : 6.9 TiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-37-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : WebNX, Inc.
ASN        : AS18450 WebNX, Inc.
Host       : WebNX, Inc
Location   : Salt Lake City, Utah (UT)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/mapper/catcat--vg-root):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.32 GB/s   (330.3k) | 2.50 GB/s    (39.1k)
Write      | 1.32 GB/s   (331.2k) | 2.52 GB/s    (39.3k)
Total      | 2.64 GB/s   (661.5k) | 5.02 GB/s    (78.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.53 GB/s     (4.9k) | 2.68 GB/s     (2.6k)
Write      | 2.66 GB/s     (5.2k) | 2.86 GB/s     (2.7k)
Total      | 5.19 GB/s    (10.1k) | 5.54 GB/s     (5.4k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 3556                          
Multi Core      | 16614                         
Full Test       | https://browser.geekbench.com/v6/cpu/12332259

YABS completed in 4 min 35 sec
```

### GeekBench5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-37-amd64 x86_64
  Model                         AsrockRack B650D4U-2L2T/BCM
  Motherboard                   ASRockRack B650D4U-2L2T/BCM
  BIOS                          American Megatrends International, LLC. 20.07

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

单核测试分数：2594
多核测试分数：22024
详细结果链接：https://browser.geekbench.com/v5/cpu/23594412
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%209950X
```

### IP 解锁

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image.jpg" alt="IP地址风险分析和地理位置报告图表" loading="lazy">
</picture>

### 通电检测

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-1.jpg" alt="计算机系统信息，包括CPU、内存和服务器状态" loading="lazy">
</picture>

### 读写测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-2.jpg" alt="NVME设备状态报告，显示温度和读写信息" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-3.jpg" alt="NVME设备smart-log数据摘要" loading="lazy">
</picture>

### 融合怪Go

```
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD Ryzen 9 9950X 16-Core Processor @ 3000.000 MHz
 CPU 数量            : 32 Physical CPU(s)
 CPU 缓存            : L1: 1 MB / L2: 16 MB / L3: 64 MB
 GPU 型号            : ASPEED Graphics Family
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ❌ Disabled
 内存                : 2.01 GB / 186.34 GB
 气球驱动            : ❌ Undetected
 内核页合并          : ❌ Undetected
 虚拟内存 Swap       : 0.00 MB / 3.81 GB
 硬盘空间            : 2.58 GB / 7090.54 GB
 启动盘路径          : /dev/mapper/catcat--vg-root
 系统                : debian 12.11 [x86_64] 
 内核                : 6.1.0-37-amd64
 系统在线时间        : 0 days, 01 hours, 24 minutes
 时区                : UTC
 负载                : 0.00 / 0.11 / 0.42
 虚拟化架构          : Dedicated (No visible signage)
 NAT类型             : Full Cone
 TCP加速方式         : cubic
 IPV4 ASN            : AS18450 Webnx, Inc.
 IPV4 Location       : Ogden / Utah / United States
 IPV4 Active IPs     : 85/256 (subnet /24) 523520/16777216 (prefix /8)
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   7022.24
32 线程测试(多核)得分:  112182.98
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 39902.31 MB/s(41.84K IOPS, 5s)
单线程顺序读速度: 107277.85 MB/s(112.49K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       1.35 GB/s(337.2k)       1.35 GB/s(338.0k)       2.70 GB/s(675.2k)       
/root         64k      2.49 GB/s(39.0k)        2.51 GB/s(39.2k)        5.00 GB/s(78.1k)        
/root         512k     2.53 GB/s(4932)         2.66 GB/s(5194)         5.18 GB/s(10.1k)        
/root         1m       2.67 GB/s(2607)         2.85 GB/s(2781)         5.52 GB/s(5388)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 美国  洛杉机(LAX31S13)
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
Apple                     YES (Region: USA)
BingSearch                YES (Region: US)
Claude                    YES
Dazn                      Banned
Disney+                   NO (forbidden-location)
Gemini                    YES (Region: USA)
GoogleSearch              YES
Google Play Store         YES (Region: US)
IQiYi                     YES (Region: US)
Instagram Licensed Audio  YES
KOCOWA                    YES
MetaAI                    Unknown: get www.meta.ai failed with code: 200
Netflix                   YES (Region: US)
Netflix CDN               US
OneTrust                  YES (Region: US CALIFORNIA)
ChatGPT                   YES (Region: US)
Paramount+                YES
Amazon Prime Video        YES (Region: US)
Reddit                    NO
SonyLiv                   YES (Region: US)
Sora                      YES (Region: US)
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: US)
TVBAnywhere+              YES (Region: US)
TikTok                    YES (Region: US)
Viu.com                   YES
Wikipedia Editability     YES
YouTube Region            YES (Region: US)
YouTube CDN               LAX
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2]
信任得分(越高越好): 0 [8] 
VPN得分(越低越好): 100 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 65 [E] 0 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0006 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: hosting [0 7 9] business [8] DataCenter/WebHosting/Transit [3] unknown [C]
公司类型: hosting [0 7] business [A]
是否云提供商: Yes [7 D] 
是否数据中心: No [8 A C] Yes [0 1 5 6]
是否移动设备: No [5 A C] Yes [E]
是否代理: No [0 1 4 5 6 7 8 9 A C D] Yes [E]
是否VPN: No [0 1 6 7 C D] Yes [A E]
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
DNS-黑名单: 315(Total_Check) 0(Clean) 6(Blacklisted) 84(Other) 
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
Sina      ✔     ✘     ✔     ✘     ✔     ✘    
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
北京电信v4 219.141.140.10           电信163    [普通线路] 
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
北京电信v6 2400:89c0:1053:3::69     检测不到回程路由节点的IP地址
北京联通v6 2400:89c0:1013:3::54     检测不到回程路由节点的IP地址
北京移动v6 2409:8c00:8421:1303::55  检测不到回程路由节点的IP地址
上海电信v6 240e:e1:aa00:4000::24    检测不到回程路由节点的IP地址
上海联通v6 2408:80f1:21:5003::a     检测不到回程路由节点的IP地址
上海移动v6 2409:8c1e:75b0:3003::26  检测不到回程路由节点的IP地址
广州电信v6 240e:97c:2f:3000::44     检测不到回程路由节点的IP地址
广州联通v6 2408:8756:f50:1001::c    检测不到回程路由节点的IP地址
广州移动v6 2409:8c54:871:1001::12   检测不到回程路由节点的IP地址
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 203.10.96.163 - 6.70ms - 🐠 (Relay) → Misaka.LAX
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.36 ms      AS18450                       美国, 加利福尼亚州, 洛杉矶, WebNX.com 
0.66 ms      AS18450    [WEBNX-BLK]        美国, 加利福尼亚州, 洛杉矶, WebNX.com 
1.55 ms      AS7015                        美国, 加利福尼亚州, 洛杉矶, comcast.com 
5.19 ms      AS7922                        美国, 加利福尼亚, corporate.comcast.com 
257.62 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn 
*
*
*
*
156.02 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.83 ms      AS18450                       美国, 加利福尼亚州, 洛杉矶, WebNX.com 
0.82 ms      AS18450    [WEBNX-BLK]        美国, 加利福尼亚州, 洛杉矶, WebNX.com 
1.64 ms      AS7015                        美国, 加利福尼亚州, 洛杉矶, comcast.com 
2.57 ms      AS7922                        美国, 伊利诺伊州, 芝加哥, corporate.comcast.com 
156.80 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
142.94 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
*
156.39 ms    AS17816    [APNIC-AP]         中国, 广东省, 广州市, chinaunicom.cn 
150.23 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
145.45 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.49 ms      AS18450                       美国, 加利福尼亚州, 洛杉矶, WebNX.com 
0.86 ms      AS18450    [WEBNX-BLK]        美国, 加利福尼亚州, 洛杉矶, WebNX.com 
0.69 ms      AS18450    [WEBNX-BLK]        美国, 加利福尼亚州, 洛杉矶, WebNX.com 
1.06 ms      AS3356                        美国, 加利福尼亚州, 洛杉矶, lumen.com 
1.88 ms      AS3356                        美国, 加利福尼亚, 洛杉矶, lumen.com 
1.61 ms      AS3356                        美国, 加利福尼亚, 洛杉矶, lumen.com 
1.63 ms      AS58453    [CMI-INT]          美国, 加利福尼亚, 洛杉矶, cmi.chinamobile.com  移动
167.79 ms    AS58453    [CMI-INT]          中国, 广东, 广州, cmi.chinamobile.com  移动
171.25 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
171.29 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
173.10 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
176.85 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
180.37 ms    AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
```

### UnixBench

```
------------------------------------------------------------------------
Benchmark Run: Sun Jun 08 2025 10:08:57 - 10:37:14
32 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables      108770446.3 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    13857.3 MWIPS (10.0 s, 7 samples)
Execl Throughput                              11303.6 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       3551329.4 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          931882.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      11710313.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                             5177427.9 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 402031.9 lps   (10.0 s, 7 samples)
Process Creation                               9665.0 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  21359.1 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  15878.6 lpm   (60.0 s, 2 samples)
System Call Overhead                        4761892.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  108770446.3   9320.5
Double-Precision Whetstone                       55.0      13857.3   2519.5
Execl Throughput                                 43.0      11303.6   2628.7
File Copy 1024 bufsize 2000 maxblocks          3960.0    3551329.4   8968.0
File Copy 256 bufsize 500 maxblocks            1655.0     931882.8   5630.7
File Copy 4096 bufsize 8000 maxblocks          5800.0   11710313.9  20190.2
Pipe Throughput                               12440.0    5177427.9   4161.9
Pipe-based Context Switching                   4000.0     402031.9   1005.1
Process Creation                                126.0       9665.0    767.1
Shell Scripts (1 concurrent)                     42.4      21359.1   5037.5
Shell Scripts (8 concurrent)                      6.0      15878.6  26464.4
System Call Overhead                          15000.0    4761892.9   3174.6
                                                                   ========
System Benchmarks Index Score                                        4581.2

------------------------------------------------------------------------
Benchmark Run: Sun Jun 08 2025 10:37:14 - 11:05:11
32 CPUs in system; running 32 parallel copies of tests

Dhrystone 2 using register variables     1912344068.2 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   377354.4 MWIPS (10.1 s, 7 samples)
Execl Throughput                              56131.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      32443107.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks        17761934.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      15347583.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                           107488340.5 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                8214672.5 lps   (10.0 s, 7 samples)
Process Creation                             204496.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                 217218.6 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  26890.0 lpm   (60.0 s, 2 samples)
System Call Overhead                      113879309.5 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0 1912344068.2 163868.4
Double-Precision Whetstone                       55.0     377354.4  68609.9
Execl Throughput                                 43.0      56131.1  13053.8
File Copy 1024 bufsize 2000 maxblocks          3960.0   32443107.0  81927.0
File Copy 256 bufsize 500 maxblocks            1655.0   17761934.0 107322.9
File Copy 4096 bufsize 8000 maxblocks          5800.0   15347583.0  26461.3
Pipe Throughput                               12440.0  107488340.5  86405.4
Pipe-based Context Switching                   4000.0    8214672.5  20536.7
Process Creation                                126.0     204496.8  16229.9
Shell Scripts (1 concurrent)                     42.4     217218.6  51230.8
Shell Scripts (8 concurrent)                      6.0      26890.0  44816.6
System Call Overhead                          15000.0  113879309.5  75919.5
                                                                   ========
System Benchmarks Index Score                                       48548.0
```

### PassMark PerformanceTest Linux

```
AMD Ryzen 9 9950X 16-Core Processor (x86_64)
16 cores @ 4300 MHz  |  186.3 GiB RAM
Number of Processes: 32  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          61367
  Integer Math                     256547 Million Operations/s
  Floating Point Math              151667 Million Operations/s
  Prime Numbers                    279 Million Primes/s
  Sorting                          71816 Thousand Strings/s
  Encryption                       48682 MB/s
  Compression                      861949 KB/s
  CPU Single Threaded              4533 Million Operations/s
  Physics                          2588 Frames/s
  Extended Instructions (SSE)      63763 Million Matrices/s

Memory Mark:                       3282
  Database Operations              13944 Thousand Operations/s
  Memory Read Cached               42598 MB/s
  Memory Read Uncached             42319 MB/s
  Memory Write                     20823 MB/s
  Available RAM                    187199 Megabytes
  Memory Latency                   64 Nanoseconds
  Memory Threaded                  49313 MB/s
--------------------------------------------------------------------------
```

### NetQuality

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-4.jpg" alt="BGP信息显示网络连接和延迟数据" loading="lazy">
</picture>

### 网络测试

```
---------------------------------- nws.sh ---------------------------------
      A simple script to bench network performance using speedtest-cli     
---------------------------------------------------------------------------
 Version            : v2025.05.01
 Global Speedtest   : wget -qO- nws.sh | bash
 Region Speedtest   : wget -qO- nws.sh | bash -s -- -r <region>
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 9950X 16-Core Processor
 CPU Cores          : 32 @ 3000.000 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 6.9 TB (1.7 GB Used)
 Total RAM          : 186.3 GB (1.9 GB Used)
 Total Swap         : 3.8 GB (0 Used)
 System uptime      : 0 days, 0 hour 2 min
 Load average       : 0.09, 0.02, 0.01
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-37-amd64
 Virtualization     : NONE
 TCP Control        : bbr
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv4
 IPv6 Access        : ❌ Offline
 IPv4 Access        : ✔ Online
 ISP                : WebNX, Inc.
 ASN                : AS18450 WebNX, Inc.
 Host               : WebNX, Inc
 Location           : Salt Lake City, Utah-UT, United States
 Location (IPv4)    : Los Angeles, California, US
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: WebNX Inc 

 Nearest          72.04 ms    0.0%    732.31 Mbps    785.28 Mbps    Chisholm Broadband - Enid, OK 

 Kochi, IN        208.05 ms   0.0%    2298.85 Mbps   368.91 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    253.07 ms   0.0%    3279.20 Mbps   339.22 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      235.43 ms   0.0%    3645.88 Mbps   359.20 Mbps    Jio - Chennai 
 Mumbai, IN       236.69 ms   0.0%    3491.15 Mbps   344.39 Mbps    Melbicom - Mumbai 
 Delhi, IN        247.03 ms   0.0%    3317.60 Mbps   319.94 Mbps    Tata Play Fiber - New Delhi 

 Seattle, US      25.88 ms    N/A     9323.37 Mbps   3295.77 Mbps   Comcast - Seattle, WA 
 Los Angeles, US  1.08 ms     0.0%    8296.08 Mbps   8947.76 Mbps   ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       31.48 ms    0.0%    9262.26 Mbps   2677.93 Mbps   Hivelocity - Dallas, TX 
 Miami, US        64.43 ms    0.0%    2190.54 Mbps   1270.65 Mbps   Telxius - Miami, FL 
 New York, US     55.10 ms    0.0%    7851.90 Mbps   1528.52 Mbps   GSL Networks - New York, NY 
 Toronto, CA      61.81 ms    0.0%    9423.28 Mbps   1341.81 Mbps   Rogers - Toronto, ON 
 Mexico City, MX  41.04 ms    N/A     7294.76 Mbps   1603.81 Mbps   INFINITUM - Ciudad de México 

 London, UK       126.75 ms   0.0%    6137.16 Mbps   632.95 Mbps    VeloxServ Communications - London 
 Amsterdam, NL    132.67 ms   0.0%    6005.97 Mbps   621.18 Mbps    31173 Services AB - Amsterdam 
 Paris, FR        143.02 ms   N/A     5544.29 Mbps   576.05 Mbps    Axione - Paris 
 Frankfurt, DE    150.69 ms   0.0%    4920.00 Mbps   498.10 Mbps    Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       156.03 ms   0.0%    5090.91 Mbps   525.58 Mbps    Play - Warszawa 
 Bucharest, RO    176.57 ms   0.0%    12.02 Mbps     473.11 Mbps    Vodafone Romania Mobile - Bucharest - Bucharest 
 Moscow, RU       168.85 ms   0.0%    3809.84 Mbps   488.29 Mbps    t2 Russia - Moscow 

 Jeddah, SA       193.36 ms   0.0%    3802.51 Mbps   394.94 Mbps    Saudi Telecom Company 
 Dubai, AE        250.46 ms   N/A     3217.03 Mbps   81.48 Mbps     e& UAE - Dubai 
 Istanbul, TR     177.83 ms   0.0%    4004.47 Mbps   453.51 Mbps    Turkcell - Istanbul 
 Tehran, IR       221.86 ms   0.0%    3563.11 Mbps   199.70 Mbps    MCI         
 Cairo, EG        192.88 ms   N/A     2690.51 Mbps   411.81 Mbps    Orange Egypt - Cairo 

 Tokyo, JP        98.57 ms    N/A     8046.88 Mbps   841.30 Mbps    GSL Networks - Tokyo 
 Shanghai, CU-CN  FAILED                                                        
 Suzhou, CT-CN    172.28 ms   N/A     1194.03 Mbps   466.56 Mbps    China Telecom JiangSu 5G - Suzhou 
 Hong Kong, CN    FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Singapore, SG    FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Jakarta, ID      FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 4757.30 Mbps
 Avg UL Speed       : 1105.48 Mbps

 Total DL Data      : 182.41 GB
 Total UL Data      : 31.92 GB
 Total Data         : 214.33 GB
---------------------------------------------------------------------------
 Duration           : 13 min 18 sec
 System Time        : 08/06/2025 - 13:16:54 UTC
 Total Script Runs  : 114591
---------------------------------------------------------------------------
 curl is not installed, Unable to share result online
 Result stored locally in /root/scripts/network-speed.txt
---------------------------------------------------------------------------
```

### BGP

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-5.jpg" alt="网络运营商架构图" loading="lazy">
</picture>

### 压力测试

空载时webnx 温度通过ipmi查询仅为33°，Fiberstate 相信懂得都懂啊，空载就是69°。

使用stress-ng 全核心压测 600s

全程稳定在4.8Ghz，此时CPU温度在91°

对比**[Fiberstate](https://catcat.blog/fiberstate-10g-amd-9950x-benchmark-la.html?swcfpc=1)** 此时CPU已经降频率到4.1Ghz，居然能超越CPU的极限，真是哈哈了

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-6.jpg" alt="显示CPU频率信息的终端输出截图" loading="lazy">
</picture>

<figure>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-8.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-8.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-8.jpg" alt="CPU性能监控屏幕，显示Ryzen 9 9950X" loading="lazy">
</picture>

<figcaption>

此为Webnx 压测的结果

</figcaption>

</figure>

<figure>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-7.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-7.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-7.jpg" alt="监控CPU使用率面板，显示性能数据" loading="lazy">
</picture>

<figcaption>

此为**[Fiberstate](https://catcat.blog/fiberstate-10g-amd-9950x-benchmark-la.html?swcfpc=1)** 压测的结果

</figcaption>

</figure>

差距高判立下。

### 空载温度测试

#### 我自组托管的液冷9950X空载温度（也不算完全空载，有些游戏服务器）

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-9.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-9.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-9.jpg" alt="Ryzen 9 9950X CPU 使用情况监控" loading="lazy">
</picture>

#### webnx 空载温度

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-10.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-10.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-10.jpg" alt="Ryzen 9 9950X CPU 使用率和温度显示。" loading="lazy">
</picture>

#### Fiberstate 空载温度

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-11.jpg" alt="AMD Ryzen 9 9950X CPU使用情况监控图表。" loading="lazy">
</picture>
