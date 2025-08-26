---
tags: [us-server]
title: "Entrywan 美国 AMD EPYC 9124 测评"
published: 2024-05-16
---

来自美国的商家，机器是白嫖来的。老板的官网和控制面板非常抽象，什么CSS装饰都没有，纯正原生API，满满的灵车味道。目前经营有虚拟机，Kubernetes,对象存储等，IP倒是很干净。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/image-36.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/image-36.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/image-36.jpg" alt="" loading="lazy">
</picture>

## 套餐配置

- CPU：1 核 AMD EPYC

- 内存：2GB

- 硬盘：10GB NVMe

- 带宽：1Gbps

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/image-35.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/image-35.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/image-35.jpg" alt="" loading="lazy">
</picture>

## 测评

### lscpu

```shell
root@Entrywan:~# lscpu
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          48 bits physical, 57 bits virtual
  Byte Order:             Little Endian
CPU(s):                   1
  On-line CPU(s) list:    0
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         Red Hat
  Model name:             AMD EPYC 9124 16-Core Processor
    BIOS Model name:      RHEL-9.2.0 PC (Q35 + ICH9, 2009)  CPU @ 2.0GHz
    BIOS CPU family:      1
    CPU family:           25
    Model:                17
    Thread(s) per core:   1
    Core(s) per socket:   1
    Socket(s):            1
    Stepping:             1
    BogoMIPS:             5999.99
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 sys                          call nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqd                          q ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand 
                          hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core in                          vpcid_single ssbd ibrs ibpb stibp ibrs_enhanced vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms 
                          invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl                           xsaveopt xsavec xgetbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_sc                          ale vmcb_clean pausefilter pfthreshold v_vmsave_vmload vgif avx512vbmi umip pku ospke avx512_vbmi2 gf                          ni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq la57 rdpid fsrm flush_l1d arch_capabili                          ties
Virtualization features:  
  Virtualization:         AMD-V
  Hypervisor vendor:      KVM
  Virtualization type:    full
Caches (sum of all):      
  L1d:                    64 KiB (1 instance)
  L1i:                    64 KiB (1 instance)
  L2:                     512 KiB (1 instance)
  L3:                     16 MiB (1 instance)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0
Vulnerabilities:          
  Gather data sampling:   Not affected
  Itlb multihit:          Not affected
  L1tf:                   Not affected
  Mds:                    Not affected
  Meltdown:               Not affected
  Mmio stale data:        Not affected
  Reg file data sampling: Not affected
  Retbleed:               Not affected
  Spec rstack overflow:   Mitigation; safe RET
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP disabled; RSB filling; PBRSB-eIBRS Not                           affected; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```shell

Basic System Information:
---------------------------------
Uptime     : 0 days, 18 hours, 33 minutes
Processor  : AMD EPYC 9124 16-Core Processor
CPU cores  : 1 @ 2999.998 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 975.0 MiB
Disk       : 8.8 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-21-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Entrywan LLC
ASN        : AS14219 ENTRYWAN LLC
Host       : Cogent communications - IPENG
Location   : Franklin, Tennessee (TN)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 185.32 MB/s  (46.3k) | 2.56 GB/s    (40.0k)
Write      | 185.81 MB/s  (46.4k) | 2.57 GB/s    (40.2k)
Total      | 371.14 MB/s  (92.7k) | 5.14 GB/s    (80.3k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.53 GB/s     (8.8k) | 4.59 GB/s     (4.4k)
Write      | 4.78 GB/s     (9.3k) | 4.89 GB/s     (4.7k)
Total      | 9.32 GB/s    (18.2k) | 9.48 GB/s     (9.2k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 652 Mbits/sec   | 869 Mbits/sec   | 98.4 ms        
Eranium         | Amsterdam, NL (100G)      | 566 Mbits/sec   | 733 Mbits/sec   | 115 ms         
Telia           | Helsinki, FI (10G)        | busy            | busy            | 129 ms         
Uztelecom       | Tashkent, UZ (10G)        | 422 Mbits/sec   | 799 Mbits/sec   | 208 ms         
Leaseweb        | Singapore, SG (10G)       | 306 Mbits/sec   | 744 Mbits/sec   | 234 ms         
Clouvider       | Los Angeles, CA, US (10G) | 889 Mbits/sec   | 913 Mbits/sec   | 56.4 ms        
Leaseweb        | NYC, NY, US (10G)         | 904 Mbits/sec   | 926 Mbits/sec   | 34.9 ms        
Edgoo           | Sao Paulo, BR (1G)        | 583 Mbits/sec   | 864 Mbits/sec   | 128 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2053                          
Multi Core      | 2057                          
Full Test       | https://browser.geekbench.com/v6/cpu/6123311

YABS completed in 12 min 22 sec
```

### Bench

```shell
---------------------------------------------------------------------
 CPU Model          : AMD EPYC 9124 16-Core Processor
 CPU Cores          : 1 @ 2999.998 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 9.8 GB (1.7 GB Used)
 Total Mem          : 1.9 GB (229.9 MB Used)
 Total Swap         : 975.0 MB (2.1 MB Used)
 System uptime      : 0 days, 18 hour 51 min
 Load average       : 0.00, 0.13, 0.17
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-21-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS174 Cogent Communications
 Location           : Franklin / US
 Region             : Tennessee
----------------------------------------------------------------------
 I/O Speed(1st run) : 552 MB/s
 I/O Speed(2nd run) : 573 MB/s
 I/O Speed(3rd run) : 554 MB/s
 I/O Speed(average) : 559.7 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    934.69 Mbps       940.81 Mbps         1.34 ms     
 Los Angeles, US  572.94 Mbps       943.98 Mbps         57.43 ms    
 Dallas, US       936.19 Mbps       940.51 Mbps         21.71 ms    
 Montreal, CA     390.03 Mbps       728.10 Mbps         40.10 ms    
 Amsterdam, NL    374.38 Mbps       951.98 Mbps         119.34 ms   
 Shanghai, CN     78.89 Mbps        929.09 Mbps         225.07 ms   
 Hongkong, CN     4.69 Mbps         1.68 Mbps           207.53 ms   
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-21-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   Red Hat RHEL
  BIOS                          SeaBIOS 1.16.1-1.el9

处理器信息
  Name                          AMD EPYC 9124 16-Core Processor                
  Topology                      1 Processor, 1 Core
  Identifier                    AuthenticAMD Family 25 Model 17 Stepping 1
  Base Frequency                3.00 GHz
  L1 Instruction Cache          64.0 KB
  L1 Data Cache                 64.0 KB
  L2 Cache                      512 KB
  L3 Cache                      16.0 MB

内存信息
  Size                          1.92 GB

单核测试分数：1522
多核测试分数：1518
详细结果链接：https://browser.geekbench.com/v5/cpu/22489361
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%209124
```

### Unix

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: Entrywan: GNU/Linux
   OS: GNU/Linux -- 6.1.0-21-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.90-1 (2024-05-03)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9124 16-Core Processor (6000.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   02:02:12 up 19:23,  2 users,  load average: 0.25, 0.37, 0.30; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Thu May 16 2024 02:02:12 - 02:30:09
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       56823720.3 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     8815.9 MWIPS (9.9 s, 7 samples)
Execl Throughput                               2878.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        706129.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          180618.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2208228.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1002352.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 143780.6 lps   (10.0 s, 7 samples)
Process Creation                               8298.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   8113.5 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1086.4 lpm   (60.0 s, 2 samples)
System Call Overhead                         786218.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   56823720.3   4869.2
Double-Precision Whetstone                       55.0       8815.9   1602.9
Execl Throughput                                 43.0       2878.1    669.3
File Copy 1024 bufsize 2000 maxblocks          3960.0     706129.5   1783.2
File Copy 256 bufsize 500 maxblocks            1655.0     180618.0   1091.3
File Copy 4096 bufsize 8000 maxblocks          5800.0    2208228.0   3807.3
Pipe Throughput                               12440.0    1002352.8    805.7
Pipe-based Context Switching                   4000.0     143780.6    359.5
Process Creation                                126.0       8298.8    658.6
Shell Scripts (1 concurrent)                     42.4       8113.5   1913.6
Shell Scripts (8 concurrent)                      6.0       1086.4   1810.7
System Call Overhead                          15000.0     786218.6    524.1
                                                                   ========
System Benchmarks Index Score                                        1241.5

======= Script description and score comparison completed! ======= 
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 9124 16-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 2999.998 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 512.00 KB / L3: 16.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 154.04 MiB / 1.92 GiB
 Swap              : 2.07 MiB / 975.00 MiB
 硬盘空间          : 1.66 GiB / 8.81 GiB
 启动盘路径        : /dev/vda1
 系统在线时间      : 0 days, 19 hour 5 min
 负载              : 0.29, 0.21, 0.18
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-21-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS174 Cogent Communications
 IPV4 位置         : Franklin / Tennessee / US
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          4480 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          48630.52 MB/s
 单线程写测试:          30395.88 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         70.8 MB/s (17.29 IOPS, 1.48s))          86.0 MB/s (20988 IOPS, 1.22s)
 1GB-1M Block           1.6 GB/s (1509 IOPS, 0.66s)             5.1 GB/s (4892 IOPS, 0.20s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 186.44 MB/s  (46.6k) | 2.66 GB/s    (41.6k)
Write      | 186.94 MB/s  (46.7k) | 2.67 GB/s    (41.8k)
Total      | 373.39 MB/s  (93.3k) | 5.34 GB/s    (83.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.50 GB/s     (8.8k) | 4.65 GB/s     (4.5k)
Write      | 4.74 GB/s     (9.2k) | 4.96 GB/s     (4.8k)
Total      | 9.25 GB/s    (18.0k) | 9.61 GB/s     (9.3k)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：美国
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: IAD(IAD23S03)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：US 区
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: US)
 Disney+:                               Yes (Region: US)
 Netflix:                               Yes (Region: US)
 YouTube Premium:                       Yes
 Amazon Prime Video:                    Yes (Region: US)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   US
 YouTube CDN:                           Washington DC 
 Netflix Preferred CDN:                 Atlanta, GA  
 Spotify Registration:                  Yes (Region: US)
 Steam Currency:                        USD
 ChatGPT:                               Yes
 Bing Region:                           US
 Wikipedia Editability:                 Yes
 Instagram Licensed Audio:              Yes
 ---Forum---
 Reddit:                                Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【US】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2]
信任得分(越高越好): 5 [8] 
VPN得分(越低越好): 99 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 85 [8] 
欺诈得分(越低越好): 0 [1 E] 
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0 (Very Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 92 [2]  
安全信息:
使用类型: hosting [A] business [7 8] DataCenter/WebHosting/Transit [3] corporate [9] isp [0]
公司类型: hosting [A] business [0] isp [7]
是否云提供商: No [7 D] 
是否数据中心: No [0 5 6 8] Yes [1 A]
是否移动设备: Yes [E] No [5 A]
是否代理: No [0 1 4 5 6 7 8 9 A B D E] 
是否VPN: No [0 1 6 7 A C D E]
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
DNS-黑名单: 338(Total_Check) 0(Clean) 9(Blacklisted) 15(Other) 
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  qq邮箱：No
  yandex邮箱: Yes
----------------三网回程--基于oneclickvirt/backtrace开源----------------
国家: US 城市: Franklin 服务商: AS174 Cogent Communications
北京电信 219.141.136.12  检测不到回程路由节点的IP地址
北京联通 202.106.50.1    联通4837   [普通线路] 
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
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.34 ms  AS14219  美国, 田纳西州, 富兰克林, cogentco.com
1.72 ms  AS174  美国, 田纳西州, 富兰克林, cogentco.com
1.06 ms  AS174  美国, 田纳西州, 纳什维尔, cogentco.com
1.71 ms  AS174  美国, 田纳西州, 纳什维尔, cogentco.com
7.87 ms  AS174  美国, 乔治亚州, 亚特兰大, cogentco.com
21.42 ms  AS174  美国, 德克萨斯州, 休斯顿, cogentco.com
37.69 ms  AS174  美国, 德克萨斯州, 埃尔帕索, cogentco.com
45.70 ms  AS174  美国, 亚利桑那州, 凤凰城, cogentco.com
57.19 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
70.59 ms  AS174  美国, 加利福尼亚州, 圣何塞, cogentco.com
69.82 ms  AS174  美国, 加利福尼亚州, 圣何塞, cogentco.com
243.29 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
227.35 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
261.71 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.12 ms  AS14219  美国, 田纳西州, 富兰克林, cogentco.com
1.57 ms  AS174  美国, 田纳西州, 富兰克林, cogentco.com
1.16 ms  AS174  美国, 田纳西州, 纳什维尔, cogentco.com
1.77 ms  AS174  美国, 田纳西州, 纳什维尔, cogentco.com
7.89 ms  AS174  美国, 乔治亚州, 亚特兰大, cogentco.com
21.17 ms  AS174  美国, 德克萨斯州, 休斯顿, cogentco.com
37.19 ms  AS174  美国, 德克萨斯州, 埃尔帕索, cogentco.com
45.69 ms  AS174  美国, 亚利桑那州, 凤凰城, cogentco.com
57.32 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
57.81 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
59.82 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
230.51 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
217.79 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
215.64 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
228.25 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
217.41 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.11 ms  AS14219  美国, 田纳西州, 富兰克林, cogentco.com
1.65 ms  AS174  美国, 田纳西州, 富兰克林, cogentco.com
1.40 ms  AS174  美国, 田纳西州, 纳什维尔, cogentco.com
1.61 ms  AS174  美国, 田纳西州, 纳什维尔, cogentco.com
7.73 ms  AS174  美国, 乔治亚州, 亚特兰大, cogentco.com
21.28 ms  AS174  美国, 德克萨斯州, 休斯顿, cogentco.com
37.06 ms  AS174  美国, 德克萨斯州, 埃尔帕索, cogentco.com
46.19 ms  AS174  美国, 亚利桑那州, 凤凰城, cogentco.com
57.36 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
57.50 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
66.57 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
63.31 ms  AS58453  美国, 加利福尼亚州, 洛杉矶, chinamobile.com, 移动
230.97 ms  AS58453  中国, 香港, chinamobile.com, 移动
224.29 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
226.78 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
226.74 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
227.76 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
227.59 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    949.11 Mbps     950.52 Mbps     1.24     0.0%
洛杉矶           528.79 Mbps     959.52 Mbps     57.66    0.0%
法兰克福         348.53 Mbps     894.30 Mbps     120.35   0.0%
联通上海5G       7.54 Mbps       9.47 Mbps       223.43   0.4%
联通WuXi         248.08 Mbps     862.55 Mbps     228.60   0.0%
电信浙江         159.54 Mbps     753.28 Mbps     227.32   NULL
电信Zhenjiang5G  206.39 Mbps     801.26 Mbps     212.06   NULL
------------------------------------------------------------------------
 总共花费      : 5 分 49 秒
 时间          : Thu May 16 01:49:49 CDT 2024
------------------------------------------------------------------------
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD EPYC 9124 16-Core Processor (x86_64)
1 cores @ 0 MHz  |  1.9 GiB RAM
Number of Processes: 1  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          2696
  Integer Math                     6023 Million Operations/s
  Floating Point Math              5282 Million Operations/s
  Prime Numbers                    19.4 Million Primes/s
  Sorting                          3699 Thousand Strings/s
  Encryption                       1301 MB/s
  Compression                      25054 KB/s
  CPU Single Threaded              2675 Million Operations/s
  Physics                          346 Frames/s
  Extended Instructions (SSE)      2282 Million Matrices/s

Memory Mark:                       1641
  Database Operations              1067 Thousand Operations/s
  Memory Read Cached               27541 MB/s
  Memory Read Uncached             26513 MB/s
  Memory Write                     25964 MB/s
  Available RAM                    1654 Megabytes
  Memory Latency                   68 Nanoseconds
  Memory Threaded                  26571 MB/s
--------------------------------------------------------------------------------
```

### 流媒体解锁测试

```shell
============[ Multination ]============
 Dazn:                                  Yes (Region: US)
 Disney+:                               Yes (Region: US)
 Netflix:                               Yes (Region: US)
 YouTube Premium:                       Yes
 Amazon Prime Video:                    Yes (Region: US)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   US
 YouTube CDN:                           Mountain View
 Netflix Preferred CDN:                 Atlanta, GA  
 Spotify Registration:                  Yes (Region: US)
 Steam Currency:                        USD
 ChatGPT:                               Yes
 Bing Region:                           US
 Wikipedia Editability:                 Yes
 Instagram Licensed Audio:              Yes
 ---Forum---
 Reddit:                                Yes
=======================================
===========[ North America ]===========
 FOX:                                   Yes
 Hulu:                                  Yes
 NFL+:                                  Yes
 ESPN+:[Sponsored by Jam]               Yes
 MGM+:                                  Yes
 Starz:                                 Yes
 Philo:                                 Yes
 FXNOW:                                 Yes
 TLC GO:                                Yes
 HBO Max:                               Yes
 Shudder:                               Yes
 BritBox:                               Yes
 Crackle:                               Yes
 CW TV:                                 Yes
 A&E TV:                                No
 NBA TV:                                Yes
 NBC TV:                                Yes
 Fubo TV:                               Yes
 Tubi TV:                               Yes
 Sling TV:                              Yes
 Pluto TV:                              Yes
 Acorn TV:                              Yes
 SHOWTIME:                              Yes
 encoreTVB:                             Yes
 Discovery+:                            Yes
 Paramount+:                            Yes
 Peacock TV:                            Yes
 Popcornflix:                           Yes
 Crunchyroll:                           Yes
 KOCOWA:                                Yes
 SonyLiv:                               Yes (Region: US)
 ---CA---
 HotStar:                               Yes (Region: US)
 CBC Gem:                               No
 Crave:                                 Yes
=======================================
===========[ South America ]===========
 Star+:                                 CDN Relay Available
 HBO Max:                               Yes
 DirecTV Go:                            Yes (Region: CO)
=======================================
```

### network-speed.xyz

```shell
---------------------------------------------------------------------------
 CPU Model          : AMD EPYC 9124 16-Core Processor
 CPU Cores          : 1 @ 2999.998 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 8.8 GB (1.7 GB Used)
 Total RAM          : 1.9 GB (249.8 MB Used)
 Total Swap         : 975.0 MB (840.0 KB Used)
 System uptime      : 0 days, 19 hour 18 min
 Load average       : 0.27, 0.34, 0.25
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-21-amd64
 Virtualization     : KVM
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv4
 IPv6 Access        : ❌ Offline
 IPv4 Access        : ✔ Online
 ISP                : Entrywan LLC
 ASN                : AS14219 ENTRYWAN LLC
 ASN (IPv4)         : AS174 Cogent Communications
 Host               : Cogent communications - IPENG
 Location           : Franklin, Tennessee-TN, United States
---------------------------------------------------------------------------
 Speedtest.net (Region: NORTH AMERICA)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: ENTRYWAN 

 Nearest          1.17 ms     0.0%    939.67 Mbps    935.63 Mbps    iRis Networks - Nashville, TN 

 Vancouver, BC    70.91 ms    N/A     947.41 Mbps    495.62 Mbps    TELUS - Vancouver, BC 
 Calgary, AB      48.34 ms    N/A     946.85 Mbps    790.89 Mbps    Shaw Communications - Calgary, AB 
 Winnipeg, MB     41.85 ms    0.0%    941.76 Mbps    742.94 Mbps    Voyageur Internet - Winnipeg, MB 
 Toronto, ON      30.77 ms    0.0%    948.85 Mbps    773.05 Mbps    Bell Canada - Toronto, ON 
 Montreal, QC     36.81 ms    0.0%    951.05 Mbps    837.69 Mbps    Rogers Wireless - Montréal, QC 

 New York, NY     33.99 ms    0.0%    940.53 Mbps    810.08 Mbps    Surfshark Ltd - New York, NY 
 Ashburn, VA      39.07 ms    0.0%    942.46 Mbps    804.99 Mbps    Rackdog - Ashburn, VA 
 Charlotte, NC    17.45 ms    0.0%    945.55 Mbps    908.09 Mbps    Windstream - Charlotte, NC 
```

### 延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/image-37.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/image-37.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/image-37.jpg" alt="" loading="lazy">
</picture>