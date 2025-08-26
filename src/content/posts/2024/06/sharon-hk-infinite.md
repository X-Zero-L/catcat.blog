---
title: "Sharon HK Infinite(CN2+9929+CMIN2)测评"
published: 2024-06-08
categories: 
  - "vps"
  - "hk-server"
coverImage: "image-10.png"
---

> **我们仍然所未知道，Sharon的极限在哪里？****伟大无需多言！**
> 
> **找龙哥白嫖了一个月测试，和之前的Pre应该是差不多的。但是Infinite 带宽方面比其他很多商家几十台机器挤在一个共享300M的带宽上好得多，最低也能给到200M的专用优化带宽，最高可以跑满10G口。但无奈由于中国运营商的特殊性，懂的都懂，10G的家宽难求。本身线路方面也是目前香港能做到的顶配（CN2+9929+CMIN2），在三大运营商各自不收对方路由的今天，各自走自己的优化线路无疑是更好的选择。**

## 套餐

- **_Provider :_** **_Sharon_**

- **_Type/Plan : HKG.INF.LARGE4_**

- **_Processor : Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz_**

- **_Num of Core :_** **_4_** **_Cores_**

- **_Memory :_** **_4_** **_GB_**

- **_Storage :_** **_4_****_0 GB NVMe_**

- **_Bandwidth :_** **_800GB @ 10 Gbps IN | 10 Gbps OUT_（只计算出）**

- **_Location : HK_**

- **_Price: \$99.00_**

- **Hongkong Premium 🇭🇰Hongkong Infinite 产品线已全球开售，欢迎新老股东参与体验。**

- **直达链接： https://whmcs.sharon.io/index.php?rp=/store/hong-kong-premium**

- **直达链接： https://whmcs.sharon.io/index.php?rp=/store/hong-kong-infinite**

## 测评

### lscpu

```
root@catcat:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         40 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  4
  On-line CPU(s) list:   0-3
Vendor ID:               GenuineIntel
  BIOS Vendor ID:        QEMU
  Model name:            Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz
    BIOS Model name:     pc-i440fx-5.2  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          6
    Model:               85
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           4
    Stepping:            7
    BogoMIPS:            5187.81
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx f                         xsr sse sse2 ss syscall nx pdpe1gb rdtscp lm constant_tsc arch_perfmon rep_good nopl 
                         xtopology cpuid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pdcm pcid sse4_1 sse4_2 x                         2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm ab                         m 3dnowprefetch cpuid_fault invpcid_single ssbd ibrs ibpb stibp ibrs_enhanced fsgsbas                         e tsc_adjust bmi1 avx2 smep bmi2 erms invpcid mpx avx512f avx512dq rdseed adx smap cl                         flushopt clwb avx512cd avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves arat umip pku                          ospke avx512_vnni md_clear arch_capabilities
Virtualization features: 
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   64 KiB (2 instances)
  L1i:                   64 KiB (2 instances)
  L2:                    2 MiB (2 instances)
  L3:                    35.8 MiB (1 instance)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0-3
Vulnerabilities:         
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Vulnerable: Clear CPU buffers attempted, no microcode; SMT Host state unknown
  Retbleed:              Mitigation; Enhanced IBRS
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Enhanced IBRS, IBPB conditional, RSB filling, PBRSB-eIBRS SW sequence
  Srbds:                 Not affected
  Tsx async abort:       Mitigation; TSX disabled
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 2 hours, 1 minutes
Processor  : Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz
CPU cores  : 4 @ 2593.906 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 39.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Vantiva USA Shared Services Inc.
ASN        : AS396856 Sharon Networks, LLC
Location   : Central, Central and Western District (HCW)
Country    : Hong Kong

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 128.39 MB/s  (32.0k) | 847.50 MB/s  (13.2k)
Write      | 128.73 MB/s  (32.1k) | 851.96 MB/s  (13.3k)
Total      | 257.12 MB/s  (64.2k) | 1.69 GB/s    (26.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 809.38 MB/s   (1.5k) | 801.56 MB/s    (782)
Write      | 852.38 MB/s   (1.6k) | 854.95 MB/s    (834)
Total      | 1.66 GB/s     (3.2k) | 1.65 GB/s     (1.6k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1280                          
Multi Core      | 4011                          
Full Test       | https://browser.geekbench.com/v6/cpu/6433893

YABS completed in 12 min 26 sec
```

### BGP Connectivity

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-10.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-10.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-10.jpg" alt="" loading="lazy">
</picture>

### 融合怪测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz
 CPU 核心数        : 4
 CPU 频率          : 2593.906 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 2.00 MB / L3: 35.75 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 314.84 MiB / 3.79 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 2.21 GiB / 39.82 GiB
 启动盘路径        : /dev/sda3
 系统在线时间      : 0 days, 0 hour 3 min
 负载              : 0.16, 0.18, 0.09
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS396856 Sharon Networks, LLC
 IPV4 位置         : Central / Central and Western / HK
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		1112 Scores
 4 线程测试(多核)得分: 		4477 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		22433.23 MB/s
 单线程写测试:		18586.59 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		35.6 MB/s (8698 IOPS, 2.94s)		48.4 MB/s (11810 IOPS, 2.17s)
 1GB-1M Block		884 MB/s (843 IOPS, 1.19s)		900 MB/s (858 IOPS, 1.17s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 128.39 MB/s  (32.0k) | 847.50 MB/s  (13.2k)
Write      | 128.73 MB/s  (32.1k) | 851.96 MB/s  (13.3k)
Total      | 257.12 MB/s  (64.2k) | 1.69 GB/s    (26.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 809.06 MB/s   (1.5k) | 799.35 MB/s    (780)
Write      | 852.04 MB/s   (1.6k) | 852.59 MB/s    (832)
Total      | 1.66 GB/s     (3.2k) | 1.65 GB/s     (1.6k)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：美国
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
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: HK)
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 Spotify Registration:			Yes (Region: HK)
 Instagram Licensed Audio:		Yes
 OneTrust Region:			HK [Central and Western District]
 iQyi Oversea Region:			HK
 Bing Region:				HK
 YouTube CDN:				Hong Kong
 Netflix Preferred CDN:			Hong Kong
 ChatGPT:				No (Only Available with Mobile APP)
 Wikipedia Editability:			Yes
 Google Search CAPTCHA Free:		Yes
 Steam Currency:			HKD
 ---Forum---
 Reddit:				No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
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
信任得分(越高越好): 0 [8] 
VPN得分(越低越好): 100 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 65 [E] 0 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0001 (Very Low) [A] 
公司滥用得分(越低越好): 0.0005 (Very Low) [A] 
威胁级别: low [9 B]
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: business [8 A] isp [0 7] corporate [9] DataCenter/WebHosting/Transit [3]
公司类型: business [0 A] isp [7]
是否云提供商: No [7 D] 
是否数据中心: No [0 5 6 8] Yes [1 A]
是否移动设备: No [5 A] Yes [E]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B D]
是否VPN: No [0 1 6 7 A D] Yes [E]
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
DNS-黑名单: 338(Total_Check) 0(Clean) 5(Blacklisted) 83(Other) 
Google搜索可行性：YES
----------------三网回程--基于oneclickvirt/backtrace开源----------------
国家: HK 城市: Central 服务商: AS396856 Sharon Networks, LLC
北京电信 219.141.140.10  联通9929   [优质线路] 电信163    [普通线路] 
北京联通 202.106.195.68  联通9929   [优质线路] 联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMIN2  [精品线路] 
上海电信 202.96.209.133  联通9929   [优质线路] 电信163    [普通线路] 
上海联通 210.22.97.1     联通9929   [优质线路] 联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMIN2  [精品线路] 
广州电信 58.60.188.222   电信CN2GIA [精品线路] 
广州联通 210.21.196.6    联通9929   [优质线路] 联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMIN2  [精品线路] 
成都电信 61.139.2.69     电信CN2GIA [精品线路] 
成都联通 119.6.6.6       联通9929   [优质线路] 联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMIN2  [精品线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
5.98 ms  AS396856  中国, 香港, vantiva.com
0.31 ms  *  美国, ibm.com
0.49 ms  *  中国, 香港, chinatelecom.com.cn, 电信
5.12 ms  *  中国, 香港, chinatelecom.com.cn, 电信
9.32 ms  *  中国, 广东, 广州, chinatelecom.com.cn, 电信
13.26 ms  *  中国, 广东, 深圳, chinatelecom.com.cn, 电信
16.81 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
9.75 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
2.89 ms  AS396856  中国, 香港, vantiva.com
0.37 ms  *  美国, ibm.com
1.90 ms  AS10099  中国, 香港, chinaunicom.com, 联通
1.89 ms  AS10099  中国, 香港, chinaunicom.com, 联通
6.23 ms  AS9929  中国, 广东, 广州, chinaunicom.com, 联通
14.90 ms  AS9929  中国, 广东, 广州, chinaunicom.com, 联通
13.27 ms  *  中国, 广东, 广州, chinaunicom.com, 联通
16.52 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
16.79 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
17.12 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
12.49 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
3.66 ms  AS396856  中国, 香港, vantiva.com
0.36 ms  *  美国, ibm.com
4.47 ms  AS58807  中国, 香港, chinamobile.com, 移动
4.56 ms  AS58807  中国, 香港, chinamobile.com, 移动
4.54 ms  AS9808  中国, 广东, chinamobile.com, 移动
4.42 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
5.56 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
9.31 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
11.19 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
8.79 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 8655.61 Mbps	 8576.95 Mbps	 0.63	  0.0%
中国香港	 2773.60 Mbps	 325.87 Mbps	 3.18	  0.0%
新加坡		 578.55 Mbps	 393.63 Mbps	 33.29	  0.0%
联通海南	 980.95 Mbps	 882.54 Mbps	 27.86	  NULL
联通WuXi	 1685.60 Mbps	 890.68 Mbps	 35.77	  0.0%
电信合肥5G	 42.79 Mbps	 59.15 Mbps	 33.43	  0.0%
电信浙江	 984.97 Mbps	 4469.38 Mbps	 35.63	  NULL
移动杭州5G	 1563.51 Mbps	 100.76 Mbps	 34.10	  0.0%
移动Beijing	 1664.83 Mbps	 93.58 Mbps	 52.30	  NULL
------------------------------------------------------------------------
 总共花费      : 6 分 25 秒
 时间          : Sat Jun  8 14:04:30 CST 2024
------------------------------------------------------------------------
```

### SpeedTest 脚本测速

```
---------------------------------------------------------------------------
 Speedtest.net (Region: CHINA | 中華人民共和國)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: As-sharon 

 Nearest          0.51 ms     0.0%    8552.39 Mbps   8361.15 Mbps   Hutchison HK - Hong Kong 

 CU - Shanghai    36.16 ms    0.0%    899.22 Mbps    1938.41 Mbps   China Unicom 5G - Shanghai 
 CM - Beijing     48.11 ms    N/A     97.56 Mbps     1412.20 Mbps   China Mobile Group Beijing Co.Ltd - 
 CT - Nanjing     51.56 ms    24.0%   2815.11 Mbps   4.03 Mbps      China Telecom JiangSu 5G - 
 CT - Zhenjiang   45.72 ms    N/A     4109.46 Mbps   1452.72 Mbps   China Telecom JiangSu 5G - 
 CT - Suzhou      42.81 ms    N/A     3254.68 Mbps   1164.80 Mbps   China Telecom JiangSu 5G - 
 CM - Hangzhou    34.66 ms    0.0%    97.86 Mbps     1605.17 Mbps   China Mobile Zhejiang 5G - 
 CT - Hangzhou    28.49 ms    N/A     2829.92 Mbps   22.44 Mbps     浙江电信 - HangZhou                                                    
 CT - Changsha    38.43 ms    0.0%    1968.95 Mbps   360.96 Mbps    湖南电信5G - Changsha                                                      
 CU - Wu Xi       34.24 ms    0.0%    875.73 Mbps    808.84 Mbps    China Unicom - Wu Xi 
 CT - Hefei       33.74 ms    0.0%    1906.29 Mbps   707.41 Mbps    China Telecom AnHui 5G - Hefei                                                    
 CT - NingBo      31.96 ms    N/A     4468.35 Mbps   1266.84 Mbps   浙江电信 - NingBo                                                    

 CM - Kwai Chung  0.93 ms     0.0%    8693.47 Mbps   9303.25 Mbps   CMHK Mobile Service - Hong Kong 
 CM - Hong Kong   1.10 ms     0.3%    0.61 Mbps      4.82 Mbps      CMHK Broadband - Hong Kong 
 CU - Hong Kong   1.52 ms     0.0%    891.98 Mbps    4728.38 Mbps   China Unicom Global Ltd - Hong Kong 
 Hong Kong        0.50 ms     N/A     2682.93 Mbps   9387.53 Mbps   fdcservers.net - Hong Kong 
 Hong Kong        0.44 ms     0.0%    8261.37 Mbps   9341.74 Mbps   Misaka Network, Inc. - Hong Kong 
---------------------------------------------------------------------------
 Avg DL Speed       : 3082.71 Mbps
 Avg UL Speed       : 3051.21 Mbps

 Total DL Data      : 53.86 GB
 Total UL Data      : 44.14 GB
 Total Data         : 98.01 GB
---------------------------------------------------------------------------
```

### 多地回程测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-11.jpg" alt="" loading="lazy">
</picture>

#### 广州电信

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-17.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-17.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-17.jpg" alt="" loading="lazy">
</picture>

#### 上海电信

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-12.jpg" alt="" loading="lazy">
</picture>

#### 北京电信

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-13.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-13.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-13.jpg" alt="" loading="lazy">
</picture>

#### 苏州电信

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-18.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-18.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-18.jpg" alt="" loading="lazy">
</picture>

#### 广州联通

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-14.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-14.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-14.jpg" alt="" loading="lazy">
</picture>

#### 上海联通

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-19.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-19.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-19.jpg" alt="" loading="lazy">
</picture>

#### 北京联通

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-20.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-20.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-20.jpg" alt="" loading="lazy">
</picture>

#### 上海移动

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-15.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-15.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-15.jpg" alt="" loading="lazy">
</picture>

#### 北京移动

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-16.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-16.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-16.jpg" alt="" loading="lazy">
</picture>

#### 无锡移动

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-21.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-21.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-21.jpg" alt="" loading="lazy">
</picture>

### 国内电信Ping

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-23.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-23.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-23.jpg" alt="" loading="lazy">
</picture>

### 国内联通Ping

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-22.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-22.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-22.jpg" alt="" loading="lazy">
</picture>

### 国内移动Ping

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-24.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-24.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-24.jpg" alt="" loading="lazy">
</picture>

### 赛博测速

节点搭建模式为：Trojan+TLS

#### SpeedTest

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/b040dd8f87c1791c425dad75c32015ca.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/b040dd8f87c1791c425dad75c32015ca.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/b040dd8f87c1791c425dad75c32015ca.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-27.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-27.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-27.jpg" alt="" loading="lazy">
</picture>

#### 苏州去程测速

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/wtdKp7Bju6emQAAAABJRU5ErkJggg==.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/wtdKp7Bju6emQAAAABJRU5ErkJggg==.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/wtdKp7Bju6emQAAAABJRU5ErkJggg==.jpg" alt="" loading="lazy">
</picture>

#### CloudFlare SpeedTest

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-28.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-28.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-28.jpg" alt="" loading="lazy">
</picture>

#### Youtube 4K@50P视频

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-25.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-25.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-25.jpg" alt="" loading="lazy">
</picture>

### 全球延迟Ping

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-26.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-26.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-26.jpg" alt="" loading="lazy">
</picture>
