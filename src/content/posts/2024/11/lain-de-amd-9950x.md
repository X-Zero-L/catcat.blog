---
title: "lain DE AMD 9950X 测试"
published: 2024-11-24
categories: 
  - "vps"
  - "eu-server"
---

\[tip type="danger" title="注意注意"\]本文不构成任何购买建议,仅仅是看到买来尝试,目前已出\[/tip\]

前两天反代鸡鸡被商家吊销了，说我占用太多带宽和CPU。可是本来也就没用多少，看了三个小时不到的emby而已。无奈只能另外寻找合适的反代。正好发现了一家表示自己的德国线路不输CN2的，以前也买过他们的日本还可以，那就正好试试。

老板的促销原话：

> > - **AMD RYZEN 9950X 建站用户狂喜，透过稳定性极高的Gcore上游接入多个Tier1 ISP，比所有友商的非购买CN2等Transit的德国到中国（含HK）的线路都要好！**
> > 
> > - **欧洲方向全用一个超贵的CN2拉？你out啦！ 我们的德国三网极致优化，联通晚高峰爆拉1G+，流量比CN2便宜了几个数量级！**

\[tip type="warning" title="注意注意"\] 实测效果非常一般，不推荐\[/tip\]

## 套餐

- **CPU : 1 Core Fair Allocation**

- **RAM : 1G DDR5**

- **Disk : 15G RAID-1 NVMe**

- **Traffic/Speed : 4T (In+Out) @5000Mbps**

## 测试

### CPU

```
root@catcat:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         40 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  1
  On-line CPU(s) list:   0
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD EPYC-Milan Processor
    BIOS Model name:     pc-q35-7.2  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               1
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           1
    Stepping:            1
    BogoMIPS:            8583.86
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm 
                         rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx 
                         f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext perfctr_core ssbd ibrs ibpb stibp vmm                         call fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw 
                         avx512vl xsaveopt xsavec xgetbv1 xsaves avx_vnni avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean flushbyasi                         d pausefilter pfthreshold v_vmsave_vmload vgif avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpo                         pcntdq rdpid movdiri movdir64b fsrm avx512_vp2intersect arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   32 KiB (1 instance)
  L1i:                   32 KiB (1 instance)
  L2:                    512 KiB (1 instance)
  L3:                    32 MiB (1 instance)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0
Vulnerabilities:         
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 12 minutes
Processor  : AMD EPYC-Milan Processor
CPU cores  : 1 @ 4291.932 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 926.2 MiB
Swap       : 0.0 KiB
Disk       : 14.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Yuwan Networks Limited
ASN        : AS215304 YUWAN NETWORKS LIMITED
Host       : Yuwan Networks Limited
Location   : Frankfurt, Hesse (HE)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 6.01 MB/s     (1.5k) | 95.89 MB/s    (1.4k)
Write      | 6.00 MB/s     (1.5k) | 96.39 MB/s    (1.5k)
Total      | 12.01 MB/s    (3.0k) | 192.29 MB/s   (3.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 332.82 MB/s    (650) | 415.38 MB/s    (405)
Write      | 350.50 MB/s    (684) | 443.04 MB/s    (432)
Total      | 683.33 MB/s   (1.3k) | 858.43 MB/s    (837)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 4.80 Gbits/sec  | 1.58 Gbits/sec  | 14.1 ms        
Eranium         | Amsterdam, NL (100G)      | 5.38 Gbits/sec  | 3.38 Gbits/sec  | 7.35 ms        
Uztelecom       | Tashkent, UZ (10G)        | 1.67 Gbits/sec  | 1.55 Gbits/sec  | 95.2 ms        
Leaseweb        | Singapore, SG (10G)       | busy            | 1.16 Gbits/sec  | 154 ms         
Clouvider       | Los Angeles, CA, US (10G) | 1.13 Gbits/sec  | 921 Mbits/sec   | 143 ms         
Leaseweb        | NYC, NY, US (10G)         | 1.88 Gbits/sec  | 2.03 Gbits/sec  | 89.4 ms        
Edgoo           | Sao Paulo, BR (1G)        | 860 Mbits/sec   | 732 Mbits/sec   | 195 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 5.44 Gbits/sec  | 1.51 Gbits/sec  | 14.1 ms        
Eranium         | Amsterdam, NL (100G)      | 5.40 Gbits/sec  | 3.31 Gbits/sec  | 7.32 ms        
Uztelecom       | Tashkent, UZ (10G)        | 1.43 Gbits/sec  | busy            | 95.2 ms        
Leaseweb        | Singapore, SG (10G)       | 1.07 Gbits/sec  | 1.14 Gbits/sec  | 154 ms         
Clouvider       | Los Angeles, CA, US (10G) | 1.02 Gbits/sec  | 723 Mbits/sec   | 143 ms         
Leaseweb        | NYC, NY, US (10G)         | 1.48 Gbits/sec  | 1.97 Gbits/sec  | 89.3 ms        
Edgoo           | Sao Paulo, BR (1G)        | 618 Mbits/sec   | 832 Mbits/sec   | 198 ms         
```

### 流媒体测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-26.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-26.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-26.jpg" alt="" loading="lazy">
</picture>

### 延迟测试

**去Hetzner DE 平均5.3ms, Hetzner FI 平均 26.7ms , BuyVM Lu 平均 20.9ms**

国内延迟确实老板没说谎，北方确实延迟非常低。好评。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-27.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-27.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-27.jpg" alt="" loading="lazy">
</picture>

### 融合怪测试

```
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC-Milan Processor @ 4291.932 MHz
 CPU 数量            : 1 Virtual CPU(s)
 CPU 缓存            : 512 KB
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 336.17 MB / 926.16 MB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 2.10 GB / 14.82 GB
 启动盘路径          : /dev/vda3
 系统                : debian 12.8 [x86_64] 
 内核                : 6.1.0-9-amd64
 系统在线时间        : 0 days, 00 hours, 43 minutes
 时区                : CST
 负载                : 0.04 / 0.01 / 0.00
 虚拟化架构          : KVM
 NAT类型             : Full Cone
 TCP加速方式         : cubic
 IPV4 ASN            : AS215304 YUWAN NETWORKS LIMITED
 IPV4 Location       : Frankfurt / Hessen / Germany
 IPV6 ASN            : AS215304 YUWAN NETWORKS LIMITED
 IPV6 Location       : Frankfurt / Hessen / Germany
 IPv6 子网掩码       : /64
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   5180.92
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 30669.24 MB/s(32.16K IOPS, 5s)
单线程顺序读速度: 76120.61 MB/s(79.82K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       5.99 MB/s(1498)         5.98 MB/s(1495)         11.97 MB/s(2993)        
/root         64k      93.43 MB/s(1459)        93.92 MB/s(1467)        187.35 MB/s(2926)       
/root         512k     294.02 MB/s(574)        309.65 MB/s(604)        603.67 MB/s(1178)       
/root         1m       343.94 MB/s(335)        366.84 MB/s(358)        710.78 MB/s(693)        
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：德国
[IPV6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：德国
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA15S37)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA16S31)
---------------DisneyPlus---------------
无法获取DisneyPlus权验接口信息，当前测试可能会不准确
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：DE 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：DE 区
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Dazn                      YES (Region: DE) [Via DNS]
Disney+                   YES (Region: DE) [Via DNS]
Netflix                   YES (Region: US) [Via DNS]
Netflix CDN               NL
YouTube Region            YES (Region: DE) [Via DNS]
YouTube CDN               FRA
Amazon Prime Video        YES (Region: DE) [Via DNS]
Paramount+                YES [Via DNS]
TVBAnywhere+              YES (Region: DE) [Native]
IQiYi                     YES (Region: GB) [Native]
Viu.com                   YES [Via DNS]
Spotify Registration      YES (Region: DE) [Via DNS]
Steam Store               YES (Community Available) (Region: DE)
ChatGPT                   YES (Region: DE) [Via DNS]
Gemini                    NO
MetaAI                    NO (AbraGeoBlocked)
Wikipedia Editability     YES
Reddit                    YES
TikTok                    YES (Region: DE) [Native]
Bing Region               YES (Risky) (Region: DE)
Instagram Licensed Audio  YES [Via DNS]
KOCOWA                    YES [Native]
SonyLiv                   YES (Region: DE) [Via DNS]
OneTrust                  YES (Region: DE HESSE) [Via DNS]
GoogleSearch              YES
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 30 [8] 
VPN得分(越低越好): 9 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0017 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2] 恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] business [8 A] unknown [C] corporate [9] hosting [0 7]
公司类型: business [7] isp [0] hosting [A]
是否云提供商: Yes [7 D] 
是否数据中心: No [5 6 8 C] Yes [0 1 A]
是否移动设备: No [5 A C] 
是否代理: No [0 1 4 5 6 7 8 9 A B C D]
是否VPN: No [0 1 6 7 A C D] 
是否Tor: No [0 1 3 6 7 8 A B C D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
DNS-黑名单: 314(Total_Check) 0(Clean) 5(Blacklisted) 91(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0017 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] business [A]
公司类型: isp [A] 
是否云提供商: Yes [D] 
是否数据中心: No [A] Yes [1]
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
Sina      ✔     ✘     ✔     ✘     ✔     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京电信 219.141.140.10  电信163    [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 移动CMIN2  [精品线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 移动CMIN2  [精品线路] 
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - [2a06:98c1:3121::3] - 189.30ms - Misaka.BER
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.19 ms      AS215304                      伊朗, 礼萨呼罗珊省, lain.sh 
18.21 ms     AS58212                       西班牙, 加泰罗尼亚自治区, 巴塞罗那, dataforest.net 
2.75 ms      AS58212                       德国, 黑森, 美因河畔法兰克福, dataforest.net 
0.71 ms      AS199524   [LU-GCORELABS]     美国, 弗吉尼亚州, 阿什本, gcore.com 
1.14 ms      AS1299     [ARELION-NET]      德国, 黑森州, 美因河畔法兰克福, arelion.com 
1.03 ms      AS1299     [ARELION-NET]      德国, 黑森州, 美因河畔法兰克福, arelion.com 
8.30 ms      AS1299     [ARELION-NET]      荷兰, 北荷兰省, 阿姆斯特丹, arelion.com 
*
21.95 ms     AS1299     [ARELION-NET]      瑞典, 斯德哥尔摩省, 斯德哥尔摩, arelion.com 
204.28 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
205.73 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
206.96 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
296.93 ms    AS134774   [CHINANET-GD]      中国, 广东, 深圳, chinatelecom.cn  电信
*
207.96 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.21 ms      AS215304                      伊朗, 礼萨呼罗珊省, lain.sh 
0.30 ms      AS58212                       西班牙, 加泰罗尼亚自治区, 巴塞罗那, dataforest.net 
0.39 ms      AS58212                       德国, 黑森, 美因河畔法兰克福, dataforest.net 
*
10.06 ms     AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
1.33 ms      AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
1.82 ms      AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
102.40 ms    AS174      [COGENT-149]       德国, 黑森, 美因河畔法兰克福, cogentco.com 
166.55 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
179.34 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
154.41 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
162.29 ms    AS17816    [UNICOM-GD]        中国, 广东, 深圳, chinaunicom.cn  联通
164.92 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
158.17 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.19 ms      AS215304                      伊朗, 礼萨呼罗珊省, lain.sh 
0.30 ms      AS58212                       西班牙, 加泰罗尼亚自治区, 巴塞罗那, dataforest.net 
0.49 ms      AS58212                       德国, 黑森, 美因河畔法兰克福, dataforest.net 
0.72 ms      AS199524   [LU-GCORELABS]     美国, 弗吉尼亚州, 阿什本, gcore.com 
0.80 ms      AS1299     [ARELION-NET]      德国, 黑森州, 美因河畔法兰克福, arelion.com 
14.00 ms     AS1299     [ARELION-NET]      德国, 黑森, 美因河畔法兰克福, arelion.com 
14.60 ms     AS58453    [CMI-INT]          德国, 黑森, 美茵河畔法兰克福, cmi.chinamobile.com  移动
234.31 ms    AS58453    [CMI-INT]          德国, 黑森, 美因河畔法兰克福, cmi.chinamobile.com  移动
206.69 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
206.60 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
221.36 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
223.54 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
220.38 ms    AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   5446.25 Mbps    2650.26 Mbps    0.73 ms         Not available.  
法兰克福        5525.60 Mbps    2647.05 Mbps    0.73 ms         Not available.  
洛杉矶          611.78 Mbps     697.57 Mbps     142.80 ms       0.0%            
联通Wu Xi       649.55 Mbps     614.68 Mbps     180.27 ms       0.0%            
联通上海5G      571.13 Mbps     858.57 Mbps     166.38 ms       0.0%            
电信Suzhou5G    229.81 Mbps     1568.78 Mbps    224.97 ms       Not available.  
电信浙江        1.66 Mbps       773.82 Mbps     211.63 ms       Not available.  
移动Beijing     470.36 Mbps     714.44 Mbps     198.18 ms       0.0%            
移动Fujian      353.42 Mbps     848.98 Mbps     237.82 ms       Not available.  
----------------------------------------------------------------------------------
花费          : 9 分 51 秒
时间          : Sun Nov 24 18:32:37 CST 2024
----------------------------------------------------------------------------------
```

### 欧洲测试

```
---------------------------------- nws.sh ---------------------------------
      A simple script to bench network performance using speedtest-cli     
---------------------------------------------------------------------------
 Version            : v2024.11.03
 Global Speedtest   : wget -qO- nws.sh | bash
 Region Speedtest   : wget -qO- nws.sh | bash -s -- -r <region>
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : AMD EPYC-Milan Processor
 CPU Cores          : 1 @ 4291.932 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 14.9 GB (2.1 GB Used)
 Total RAM          : 926.2 MB (315.5 MB Used)
 System uptime      : 0 days, 1 hour 14 min
 Load average       : 0.00, 0.00, 0.00
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 Virtualization     : KVM
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv6
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : Yuwan Networks Limited
 ASN                : AS215304 YUWAN NETWORKS LIMITED
 Host               : Yuwan Networks Limited
 Location           : Frankfurt, Hesse-HE, Germany
---------------------------------------------------------------------------
 Speedtest.net (Region: EUROPE)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Yuwan Networks 

 Nearest          0.78 ms     N/A     2641.69 Mbps   5471.36 Mbps   PVDataNet - Frankfurt 

 London, UK       10.87 ms    0.0%    2705.06 Mbps   3676.53 Mbps   RETN - London 
 Manchester, UK   21.87 ms    N/A     2173.63 Mbps   2668.19 Mbps   Vodafone UK - Manchester 
 Dublin, IE       24.59 ms    0.0%    1923.44 Mbps   3253.12 Mbps   Three Ireland - Dublin 
 Amsterdam, NL    7.31 ms     0.0%    2442.52 Mbps   4333.35 Mbps   Melbicom - Amsterdam 
 Paris, FR        12.57 ms    0.0%    1862.12 Mbps   5545.52 Mbps   Scaleway - Paris 
 Marseille, FR    14.12 ms    N/A     1081.93 Mbps   5282.49 Mbps   ORANGE FRANCE - Marseille 
 Madrid, ES       28.64 ms    0.0%    1713.90 Mbps   3097.14 Mbps   Orange - Madrid 
 Barcelona, ES    25.50 ms    0.0%    1626.79 Mbps   2408.72 Mbps   Adamo - Barcelona 
 Lisbon, PT       36.51 ms    0.0%    1214.62 Mbps   2125.78 Mbps   Edgoo Networks - Lisbon 
 Rome, IT         21.19 ms    0.0%    2547.47 Mbps   3099.05 Mbps   TIM SpA - Rome 
 Milan, IT        22.46 ms    0.0%    2219.70 Mbps   3960.40 Mbps   Fastweb SpA - Milan 
 Zurich, CH       6.83 ms     0.0%    1935.23 Mbps   5427.80 Mbps   Sunrise Communication AG - Zurich 
 Frankfurt, DE    47.47 ms    0.0%    1311.78 Mbps   1312.16 Mbps   31173 Services AB - Frankfurt 
 Berlin, DE       8.63 ms     N/A     2183.48 Mbps   1276.75 Mbps   Misaka Network, Inc. - Berlin 
 Vienna, AT       11.99 ms    0.0%    1208.70 Mbps   5389.41 Mbps   DataPacket - Vienna 
 Budapest, HU     27.47 ms    0.0%    2073.49 Mbps   1848.93 Mbps   ATW Internet Kft. - Budapest 
 Krakow, PL       26.19 ms    0.0%    1580.36 Mbps   3486.25 Mbps   T-Mobile Polska S.A. - Kraków 
 Warsaw, PL       24.52 ms    0.0%    910.15 Mbps    1772.24 Mbps   Orange Polska S.A. - Warsaw 
 Lviv, UA         24.30 ms    0.0%    2109.46 Mbps   2432.79 Mbps   Kyivstar - Lviv 
 Kyiv, UA         27.98 ms    0.0%    1052.19 Mbps   1090.08 Mbps   O3 - Kyiv   
 Bucharest, RO    28.81 ms    0.0%    1790.49 Mbps   2787.38 Mbps   Orange Romania SA - Bucuresti 
 Timisoara, RO    18.56 ms    0.0%    2331.33 Mbps   1471.79 Mbps   Digi        
 Helsinki, FI     FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Stockholm, SE    FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Oslo, NO         FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Moscow, RU       FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Petersburg, RU   FAILED - IP has been rate limited. Try again after 1 hour.                                                  
 Istanbul, TR     FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 1853.90 Mbps
 Avg UL Speed       : 3183.35 Mbps

 Total DL Data      : 50.80 GB
 Total UL Data      : 86.00 GB
 Total Data         : 136.80 GB
---------------------------------------------------------------------------
 Duration           : 8 min 56 sec
 System Time        : 24/11/2024 - 19:03:26 CST
 Total Script Runs  : 89121
---------------------------------------------------------------------------
```
