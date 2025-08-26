---
title: "ClawCloud 香港测试"
published: 2024-09-25
categories: 
  - "vps"
  - "hk-server"
---

目前有五个地区，分别是 香港，新加坡，德国-法兰克福, 美国东部-北弗吉尼亚州,美国西部-北加利福尼亚州。本次测试非自费购买，机器为商家提供的。综合来看，带宽给的很足，其他数据较为一般。目前产品处于刚上线阶段，后台交互体验上做的一般，商家表示还在持续优化中。**不构成任何购买建议，自行判断上车风险。**

## 官网

- [https://claw.cloud/](https://claw.cloud/)

## looking glass

- 8.219.195.163 [https://lg.ap-southeast-1.claw.cloud/](https://lg.ap-southeast-1.claw.cloud/) 新加坡

- 47.238.150.244 [https://lg.cn-hongkong.claw.cloud/](https://lg.cn-hongkong.claw.cloud/) 中国-香港

- 8.209.70.255 [https://lg.eu-central-1.claw.cloud/](https://lg.eu-central-1.claw.cloud/) 德国-法兰克福

- 47.253.157.212 [https://lg.us-east-1.claw.cloud/](https://lg.us-east-1.claw.cloud/) 美国东部-北弗吉尼亚州

- 47.251.75.195 [https://lg.us-west-1.claw.cloud/](https://lg.us-west-1.claw.cloud/) 美国西部-北加利福尼亚州

## 套餐

- **_Provider :_ ClawCloud**

- **_Type/Plan : 2C / 8G / 100G / 2T_**

- **_Processor : Intel(R) Xeon(R) Platinum_**

- **_Num of Core :_** **_2_** **_Cores_**

- **_Memory : 8 GB_**

- **_Storage : 100 GB NVMe_**

- **_Bandwidth : 2TB @ 1 Gbps IN | 1 Gbps OUT_**

- **_Location :_ HK**

- **_Price : \$20.00_**

## 测评

### lscpu

```
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          46 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   2
  On-line CPU(s) list:    0,1
Vendor ID:                GenuineIntel
  BIOS Vendor ID:         Alibaba Cloud
  Model name:             Intel(R) Xeon(R) Platinum
    BIOS Model name:      pc-i440fx-2.1  CPU @ 0.0GHz
    BIOS CPU family:      1
    CPU family:           6
    Model:                85
    Thread(s) per core:   2
    Core(s) per socket:   1
    Socket(s):            1
    Stepping:             4
    BogoMIPS:             4999.99
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtsc
                          p lm constant_tsc rep_good nopl xtopology nonstop_tsc cpuid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2api
                          c movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm abm 3dnowprefetch invpcid_single pti fsgsbase tsc
                          _adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx512dq rdseed adx smap clflushopt clwb avx512cd avx512bw avx512vl xsaveopt xs
                          avec xgetbv1 xsaves arat
Virtualization features:  
  Hypervisor vendor:      KVM
  Virtualization type:    full
Caches (sum of all):      
  L1d:                    32 KiB (1 instance)
  L1i:                    32 KiB (1 instance)
  L2:                     1 MiB (1 instance)
  L3:                     33 MiB (1 instance)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0,1
Vulnerabilities:          
  Gather data sampling:   Unknown: Dependent on hypervisor status
  Itlb multihit:          KVM: Mitigation: VMX unsupported
  L1tf:                   Mitigation; PTE Inversion
  Mds:                    Vulnerable: Clear CPU buffers attempted, no microcode; SMT Host state unknown
  Meltdown:               Mitigation; PTI
  Mmio stale data:        Vulnerable: Clear CPU buffers attempted, no microcode; SMT Host state unknown
  Reg file data sampling: Not affected
  Retbleed:               Vulnerable
  Spec rstack overflow:   Not affected
  Spec store bypass:      Vulnerable
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Retpoline
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 1 days, 18 hours, 56 minutes
Processor  : Intel(R) Xeon(R) Platinum
CPU cores  : 2 @ 2499.998 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 7.6 GiB
Swap       : 8.0 GiB
Disk       : 98.4 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-25-cloud-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Alibaba (US) Technology Co., Ltd.
ASN        : AS45102 Alibaba (US) Technology Co., Ltd.
Host       : Alibaba.com LLC
Location   : Hong Kong, Kowloon ()
Country    : Hong Kong

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 14.08 MB/s    (3.5k) | 66.00 MB/s    (1.0k)
Write      | 14.09 MB/s    (3.5k) | 66.40 MB/s    (1.0k)
Total      | 28.17 MB/s    (7.0k) | 132.41 MB/s   (2.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 63.73 MB/s     (124) | 62.81 MB/s      (61)
Write      | 66.70 MB/s     (130) | 67.41 MB/s      (65)
Total      | 130.44 MB/s    (254) | 130.23 MB/s    (126)
```

### GeekBench5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-25-cloud-amd64 x86_64
  Model                         Alibaba Cloud Alibaba Cloud ECS
  Motherboard                   N/A
  BIOS                          SeaBIOS 449e491

处理器信息
  Name                          Intel(R) Xeon(R) Platinum
  Topology                      1 Processor, 1 Core, 2 Threads
  Identifier                    GenuineIntel Family 6 Model 85 Stepping 4
  Base Frequency                2.50 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      33.0 MB

内存信息
  Size                          7.63 GB

单核测试分数：904
多核测试分数：1096
详细结果链接：https://browser.geekbench.com/v5/cpu/22900513
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=Intel%20Xeon%20Platinum
```

### 融合怪测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum
 CPU 核心数        : 2
 CPU 频率          : 2499.998 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 33.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 180.13 MiB / 7.63 GiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 910.56 MiB / 100621.62 MiB
 启动盘路径        : /dev/vda1
 系统在线时间      : 0 days, 0 hour 11 min
 负载              : 0.15, 0.06, 0.01
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-25-cloud-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS45102 Alibaba (US) Technology Co., Ltd.
 IPV4 位置         : Hong Kong / Hong Kong / HK
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          1055 Scores
 2 线程测试(多核)得分:          1770 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          21322.37 MB/s
 单线程写测试:          17716.40 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         32.7 MB/s (7992 IOPS, 3.20s)            26.6 MB/s (6495 IOPS, 3.94s)
 1GB-1M Block           151 MB/s (144 IOPS, 6.97s)              140 MB/s (133 IOPS, 7.48s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 14.08 MB/s    (3.5k) | 65.98 MB/s    (1.0k)
Write      | 14.10 MB/s    (3.5k) | 66.39 MB/s    (1.0k)
Total      | 28.18 MB/s    (7.0k) | 132.38 MB/s   (2.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 63.72 MB/s     (124) | 62.80 MB/s      (61)
Write      | 66.69 MB/s     (130) | 67.40 MB/s      (65)
Total      | 130.41 MB/s    (254) | 130.20 MB/s    (126)
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
Youtube在您的出口IP所在的国家不提供服务
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
 Dazn:                                  Yes (Region: HK)
 Disney+:                               No (IP Banned By Disney+ 1)
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: HK)
 Amazon Prime Video:                    Yes (Region: HK)
 TVBAnywhere+:                          No
 Spotify Registration:                  Yes (Region: HK)
 Instagram Licensed Audio:              Yes
 OneTrust Region:                       HK [Unknown]
 iQyi Oversea Region:                   HK
 Bing Region:                           US
 YouTube CDN:                           Failed (Network Connection)
 Netflix Preferred CDN:                 Hong Kong
 ChatGPT:                               No (Only Available with Mobile APP)
 Google Gemini:                         No
 Wikipedia Editability:                 No
 Google Search CAPTCHA Free:            Yes
 Steam Currency:                        HKD
 ---Forum---
 Reddit:                                No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【US】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
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
欺诈得分(越低越好): 15 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0011 (Low) [A] 
公司滥用得分(越低越好): 0.0057 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: business [8] DataCenter/WebHosting/Transit [3] hosting [0 7 9 A] hosting - high probability [C]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1 5 6 A C] No [8]
是否移动设备: No [5 A C] Yes [E]
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
DNS-黑名单: 313(Total_Check) 0(Clean) 5(Blacklisted) 6(Other) 
Google搜索可行性：YES
-------------邮件端口检测--基于oneclickvirt/portchecker开源-------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✘     ✔     ✔     ✘     ✔     ✘    
163       ✘     ✔     ✔     ✘     ✔     ✘    
Sohu      ✘     ✔     ✘     ✘     ✔     ✘    
Yandex    ✘     ✔     ✔     ✘     ✔     ✘    
Gmail     ✘     ✔     ✘     ✘     ✘     ✘    
Outlook   ✘     ✘     ✔     ✘     ✔     ✘    
Office365 ✘     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✔     ✔     ✘     ✔     ✘    
MailRU    ✘     ✔     ✘     ✘     ✔     ✘    
AOL       ✘     ✔     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✘     ✔     ✘     ✔     ✘    
----------------三网回程--基于oneclickvirt/backtrace开源----------------
北京电信 219.141.140.10  联通4837   [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  联通4837   [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   联通4837   [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     联通4837   [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
4.19 ms         * DOD
1.53 ms         * DOD
2.22 ms         * 中国 香港
2.70 ms         * [CUG-ASIA] 中国 香港
9.42 ms         AS10099 中国 香港 chinaunicomglobal.com 联通
10.49 ms        AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
12.09 ms        AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
8.59 ms         AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
12.64 ms        AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
36.97 ms        AS134774 [CHINANET-GD] 中国 广东 深圳 chinatelecom.cn 电信
30.65 ms        AS4134 中国 广东 深圳 福田区 www.chinatelecom.com.cn 电信
广州联通 210.21.196.6
1.27 ms         * DOD
1.33 ms         * 中国 香港
2.34 ms         * DOD
1.82 ms         * 中国 香港
2.72 ms         * [CUG-ASIA] 中国 香港
8.90 ms         * 中国 香港
2.64 ms         AS10099 [CUG-BACKBONE] 中国 香港 CUG-HKG-Core chinaunicomglobal.com 联通
12.04 ms        AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
14.54 ms        AS4837 [CU169-BACKBONE] 中国 广东 广州 chinaunicom.cn 联通
16.79 ms        AS17816 [UNICOM-GD] 中国 广东 深圳 chinaunicom.cn 联通
18.81 ms        AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
13.11 ms        AS17623 [APNIC-AP] 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
114.24 ms       * DOD
1.01 ms         * DOD
51.68 ms        * RFC1918
2.27 ms         * DOD
2.79 ms         AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
3.61 ms         AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com 移动
9.05 ms         AS58453 [CMI-INT] 中国 广东 广州 cmi.chinamobile.com 移动
9.73 ms         AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
9.18 ms         AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
11.50 ms        AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
13.01 ms        AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
12.83 ms        AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    1051.79 Mbps    1020.02 Mbps    2.19     0.0%
中国香港         1051.72 Mbps    1020.15 Mbps    2.97     0.0%
新加坡           1051.91 Mbps    1026.37 Mbps    32.10    0.0%
联通上海5G       1050.42 Mbps    58.67 Mbps      36.69    0.0%
联通WuXi         1051.65 Mbps    996.52 Mbps     35.70    0.0%
电信浙江         528.06 Mbps     1028.39 Mbps    33.55    NULL
电信浙江         1051.86 Mbps    1019.02 Mbps    31.68    NULL
移动杭州         55.26 Mbps      589.53 Mbps     35.29
------------------------------------------------------------------------
 总共花费      : 9 分 54 秒
 时间          : Mon Sep 23 06:26:17 UTC 2024
------------------------------------------------------------------------
```

### 多网回程

#### 深圳电信

```
NextTrace v1.3.4 2024-09-10T13:25:26Z 6a3ea6a
[NextTrace API] preferred API IP - 104.21.40.176 - 53.13ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes payload
1   *
2   *
3   26.25.157.106   *                         DOD          
                                              1.40 ms
4   10.54.154.186   *                         RFC1918          
                                              1.52 ms
5   47.246.115.110  *                         中国 香港         
                                              1.20 ms
6   47.246.113.237  *                         中国 香港         
                                              1.98 ms
7   61.14.203.169   *        [CUG-ASIA]       中国 香港         
                                              3.05 ms
8   *
9   43.252.86.141   AS10099                   中国 香港   chinaunicomglobal.com  联通
                                              10.23 ms
10  219.158.6.65    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              8.52 ms
11  219.158.103.25  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              19.34 ms
12  *
13  219.158.9.30    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              18.11 ms
```

#### 上海电信

```
NextTrace v1.3.4 2024-09-10T13:25:26Z 6a3ea6a
[NextTrace API] preferred API IP - 172.67.155.192 - 46.56ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes payload
1   *
2   *
3   26.25.157.114   *                         DOD          
                                              2.77 ms
4   10.54.154.178   *                         RFC1918          
                                              1.39 ms
5   11.94.177.134   *                         DOD          
                                              2.67 ms
6   47.246.113.249  *                         中国 香港         
                                              2.54 ms
7   61.14.203.169   *        [CUG-ASIA]       中国 香港         
                                              3.14 ms
8   *
9   43.252.86.141   AS10099                   中国 香港   chinaunicomglobal.com  联通
                                              6.20 ms
10  219.158.20.93   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              6.66 ms
11  219.158.4.105   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              15.16 ms
12  *
13  *
14  219.158.6.226   AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              41.20 ms
```

#### 北京电信

```
NextTrace v1.3.4 2024-09-10T13:25:26Z 6a3ea6a
[NextTrace API] preferred API IP - 104.21.40.176 - 48.55ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes payload
1   *
2   *
3   *
4   *
5   11.94.177.146   *                         DOD          
                                              1.73 ms
6   47.246.113.237  *                         中国 香港         
                                              1.99 ms
7   61.14.203.165   *        [CUG-ASIA]       中国 香港         
                                              7.19 ms
8   *
9   202.77.23.29    AS10099  [CUG-BACKBONE]   中国 香港   chinaunicomglobal.com  联通
                                              6.62 ms
10  219.158.20.93   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              13.09 ms
11  219.158.4.101   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              10.46 ms
12  219.158.3.13    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              8.49 ms
13  *
14  219.158.4.158   AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              45.62 ms
```

#### 广州联通

```
NextTrace v1.3.4 2024-09-10T13:25:26Z 6a3ea6a
[NextTrace API] preferred API IP - 172.67.155.192 - 48.29ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes payload
1   *
2   *
3   26.25.157.2     *                         DOD          
                                              1.83 ms
4   *
5   11.94.177.126   *                         DOD          
                                              1.67 ms
6   47.246.113.233  *                         中国 香港         
                                              1.55 ms
7   61.14.203.165   *        [CUG-ASIA]       中国 香港         
                                              2.86 ms
8   202.77.18.194   AS10099  [CUG-BACKBONE]   中国 香港   chinaunicomglobal.com  联通
                                              8.09 ms
9   *
10  219.158.6.61    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn 
                                              14.29 ms
11  219.158.96.206  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              12.85 ms
12  219.158.103.217 AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              11.50 ms
13  157.18.0.158    AS17816  [UNICOM-GD]      中国 广东 广州  chinaunicom.cn  联通
                                              14.21 ms
14  120.80.170.250  AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              12.05 ms
```

#### 上海联通

```
NextTrace v1.3.4 2024-09-10T13:25:26Z 6a3ea6a
[NextTrace API] preferred API IP - 172.67.155.192 - 42.51ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes payload
1   *
2   *
3   26.25.157.82    *                         DOD          
                                              1.21 ms
4   *
5   47.246.115.102  *                         美国 加利福尼亚 旧金山        
                                              2.04 ms
6   47.246.113.249  *                         中国 香港         
                                              2.40 ms
7   61.14.203.13    *        [CUG-ASIA]       中国 香港         
                                              1.96 ms
8   61.14.201.102   *                         中国 香港         
                                              3.51 ms
9   *
10  219.158.20.97   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              8.57 ms
11  219.158.103.25  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              16.68 ms
12  *
13  *
14  139.226.231.98  AS17621  [UNICOM-SH]      中国 上海   chinaunicom.cn  联通
                                              37.20 ms
15  210.22.66.174   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              34.11 ms
16  *
```

#### 北京联通

```
NextTrace v1.3.4 2024-09-10T13:25:26Z 6a3ea6a
[NextTrace API] preferred API IP - 104.21.40.176 - 47.73ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes payload
1   *
2   *
3   26.25.157.74    *                         DOD          
                                              1.26 ms
4   10.54.154.186   *                         RFC1918          
                                              1.56 ms
5   47.246.115.102  *                         美国 加利福尼亚 旧金山        
                                              2.19 ms
6   47.246.114.1    *                         中国 香港         
                                              1.94 ms
7   61.14.203.169   *        [CUG-ASIA]       中国 香港         
                                              2.50 ms
8   202.77.18.194   AS10099  [CUG-BACKBONE]   中国 香港   chinaunicomglobal.com  联通
                                              9.40 ms
9   43.252.86.129   AS10099                   中国 香港   chinaunicomglobal.com  联通
                                              3.05 ms
10  219.158.6.105   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn 
                                              8.49 ms
11  219.158.4.129   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              13.38 ms
12  219.158.3.17    AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              7.82 ms
13  *
14  *
15  61.49.140.217   AS4808                    中国 北京   中国联通  联通
                                              40.12 ms
```

#### 深圳移动

```
NextTrace v1.3.4 2024-09-10T13:25:26Z 6a3ea6a
[NextTrace API] preferred API IP - 172.67.155.192 - 46.85ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 120.233.53.1, 30 hops max, 52 bytes payload
1   *
2   *
3   26.25.157.122   *                         DOD          
                                              0.96 ms
4   *
5   11.94.177.122   *                         DOD          
                                              2.20 ms
6   223.119.19.45   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              5.38 ms
7   223.120.2.117   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.77 ms
8   223.120.22.182  AS58453  [CMI-INT]        中国 广东 广州  cmi.chinamobile.com 
                                              8.37 ms
9   *
10  221.183.92.205  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              15.72 ms
11  *
12  221.183.39.174  AS9808   [CMNET]          中国 广东 深圳  chinamobileltd.com  移动
                                              19.47 ms
13  211.136.204.114 AS56040  [CMNET]          中国 广东 广州  gd.10086.cn  移动
                                              19.25 ms
14  211.136.242.174 AS56040  [CMNET]          中国 广东 广州  gd.10086.cn  移动
                                              21.41 ms
```

#### 上海移动

```
NextTrace v1.3.4 2024-09-10T13:25:26Z 6a3ea6a
[NextTrace API] preferred API IP - 172.67.155.192 - 39.12ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes payload
1   *
2   *
3   *
4   *
5   11.94.177.130   *                         DOD          
                                              1.52 ms
6   223.119.19.45   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.77 ms
7   223.120.22.65   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.87 ms
8   *
9   *
10  *
11  *
12  221.183.49.178  AS9808   [CMNET]          中国 上海   chinamobileltd.com  移动
                                              32.39 ms
```

#### 北京移动

```
NextTrace v1.3.4 2024-09-10T13:25:26Z 6a3ea6a
[NextTrace API] preferred API IP - 104.21.40.176 - 44.20ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes payload
1   *
2   *
3   26.25.157.122   *                         DOD          
                                              1.15 ms
4   *
5   116.251.86.198  AS45102  [Taobao]         中国 香港   alibabagroup.com 
                                              1.95 ms
6   223.119.19.45   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.80 ms
7   223.120.2.117   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.46 ms
8   223.120.22.142  AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              47.58 ms
9   221.183.55.114  AS9808   [CMNET]          中国 北京   chinamobileltd.com  移动
                                              40.38 ms
10  221.183.25.201  AS9808   [CMNET]          中国 北京   chinamobileltd.com  移动
                                              46.61 ms
11  *
12  *
13  *
14  211.136.67.166  AS56048  [CMNET]          中国 北京   bj.10086.cn  移动
                                              48.86 ms
15  211.136.95.226  AS56048  [CMNET]          中国 北京   bj.10086.cn  移动
                                              48.03 ms
16  211.136.95.226  AS56048  [CMNET]          中国 北京   bj.10086.cn  移动
                                              48.96 ms
17  *
18  *
19  211.136.25.153  AS56048  [CMNET]          中国 北京   bj.10086.cn  移动
                                              50.29 ms
```

### 网速测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1727227655196.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1727227655196.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/QQ_1727227655196.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1727228724308.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1727228724308.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/QQ_1727228724308.jpg" alt="" loading="lazy">
</picture>

### IP check

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1727227736263.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/09/QQ_1727227736263.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/09/QQ_1727227736263.jpg" alt="" loading="lazy">
</picture>
