---
tags: [eu-server]
title: "Bero-Host 德国AMD EPYC 7443P 测评"
published: 2023-12-05
---

**挺让人惊喜的商家，本来以为是灵车，没想到完全还可以。本身的性价比就已经足够高了，还多了圣诞节盲盒，打8折续费。这下这个价格真无敌了。提供windows系统有Backup功能，可以创建3个备份。面板可添加任务定时备份，支持自定义ISO安装系统，除了自研的面板还是有些难用之外，其他完全ok。**

> ## 套餐

**_Provider : Bero-Host  
Type/Plan : Special  
Processor : AMD EPYC 7443P  
Num of Core : 8 Cores  
Memory : 24 GB  
Storage : 420 GB NVMe  
Bandwidth : 20 TB @ 1 Gbps  
Location : DE  
Price : € 10 / Month_**

## 测评

### lscpu

```shell
root@catcat ~ # lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  8
  On-line CPU(s) list:   0-7
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD EPYC 7443P 24-Core Processor
    BIOS Model name:     pc-i440fx-8.0  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               1
    Thread(s) per core:  1
    Core(s) per socket:  8
    Socket(s):           1
    Stepping:            1
    BogoMIPS:            5689.31
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 
                         ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni
                          pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx 
                         f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw 
                         perfctr_core invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 e
                         rms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves clzero xsaveerpt
                         r wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean flushbyasid pausefilter pfthreshold v_vmsa
                         ve_vmload vgif umip pku ospke vaes vpclmulqdq rdpid fsrm arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   512 KiB (8 instances)
  L1i:                   512 KiB (8 instances)
  L2:                    4 MiB (8 instances)
  L3:                    128 MiB (8 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0-7
Vulnerabilities:         
  Gather data sampling:  Not affected
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec rstack overflow:  Mitigation; safe RET, no microcode
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not af
                         fected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/12/774d1fb96999d6fb02587d360485e432.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/12/774d1fb96999d6fb02587d360485e432.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/12/774d1fb96999d6fb02587d360485e432.jpg" alt="" loading="lazy">
</picture>

### GeekBench

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.46-x64v3-xanmod1 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS rel-1.16.2-0-gea1b7a073390-prebuilt.qemu.org

处理器信息
  Name                          AMD EPYC 7443P
  Topology                      1 Processor, 8 Cores
  Identifier                    AuthenticAMD Family 25 Model 1 Stepping 1
  Base Frequency                2.84 GHz
  L1 Instruction Cache          64.0 KB x 8
  L1 Data Cache                 64.0 KB x 8
  L2 Cache                      512 KB x 8
  L3 Cache                      16.0 MB

内存信息
  Size                          23.5 GB

单核测试分数：932
多核测试分数：5064
详细结果链接：https://browser.geekbench.com/v5/cpu/22017776
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%207443P
```

### Bench

```shell
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 7443P 24-Core Processor
 CPU Cores          : 8 @ 2844.656 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 412.3 GB (17.9 GB Used)
 Total Mem          : 23.5 GB (3.1 GB Used)
 Total Swap         : 1024.0 MB (0 Used)
 System uptime      : 34 days, 8 hour 57 min
 Load average       : 1.27, 1.70, 1.11
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.46-x64v3-xanmod1
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS44486 Oliver Horscht is trading as "SYNLINQ"
 Location           : Frankfurt am Main / DE
 Region             : Hesse
----------------------------------------------------------------------
 I/O Speed(1st run) : 379 MB/s
 I/O Speed(2nd run) : 391 MB/s
 I/O Speed(3rd run) : 394 MB/s
 I/O Speed(average) : 388.0 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    735.87 Mbps       220.40 Mbps         3.71 ms     
 Los Angeles, US  483.42 Mbps       547.51 Mbps         170.21 ms   
 Dallas, US       587.18 Mbps       494.45 Mbps         142.34 ms   
 Montreal, CA     513.05 Mbps       477.62 Mbps         90.28 ms    
 Paris, FR        770.45 Mbps       830.27 Mbps         10.75 ms    
 Amsterdam, NL    790.32 Mbps       733.03 Mbps         8.42 ms     
 Shanghai, CN     465.98 Mbps       434.08 Mbps         174.69 ms   
 Chongqing, CN    14.65 Mbps        0.32 Mbps           616.29 ms   
 Hongkong, CN     3.36 Mbps         0.20 Mbps           211.63 ms   
 Mumbai, IN       536.34 Mbps       444.90 Mbps         109.06 ms   
 Singapore, SG    218.23 Mbps       680.06 Mbps         337.00 ms   
 Tokyo, JP        353.63 Mbps       387.03 Mbps         225.85 ms   
----------------------------------------------------------------------
 Finished in        : 6 min 14 sec
 Timestamp          : 2023-12-06 00:35:56 CET
----------------------------------------------------------------------
```

### PassMark PerformanceTest Linux

```shell
AMD EPYC 7443P 24-Core Processor (x86_64)
8 cores @ 0 MHz  |  23.5 GiB RAM
Number of Processes: 8  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          14136
  Integer Math                     42438 Million Operations/s
  Floating Point Math              28042 Million Operations/s
  Prime Numbers                    77.3 Million Primes/s
  Sorting                          20391 Thousand Strings/s
  Encryption                       9239 MB/s
  Compression                      149869 KB/s
  CPU Single Threaded              2217 Million Operations/s
  Physics                          1440 Frames/s
  Extended Instructions (SSE)      8963 Million Matrices/s

Memory Mark:                       1536
  Database Operations              4622 Thousand Operations/s
  Memory Read Cached               17608 MB/s
  Memory Read Uncached             10663 MB/s
  Memory Write                     9911 MB/s
  Available RAM                    4265 Megabytes
  Memory Latency                   103 Nanoseconds
  Memory Threaded                  41693 MB/s
--------------------------------------------------------------------------
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7443P 24-Core Processor
 CPU 核心数        : 8
 CPU 频率          : 2844.656 MHz
 CPU 缓存          : L1: 512.00 KB / L2: 4.00 MB / L3: 128.00 MB
 硬盘空间          : 15.46 GiB / 411.29 GiB
 启动盘路径        : /dev/sda3
 内存              : 4.30 GiB / 23.47 GiB
 Swap              : 0 KiB / 1024.00 MiB
 系统在线时间      : 34 days, 9 hour 9 min
 负载              : 2.21, 2.45, 1.63
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.46-x64v3-xanmod1
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS44486 Oliver Horscht is trading as \033[0m
 IPV4 位置         : Frankfurt am Main / Hesse / DE
 IPV6 ASN          : AS44486 Oliver Horscht Is Trading AS Synlinq
 IPV6 位置         : Munich / DE-BY
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		4025 Scores
 8 线程测试(多核)得分: 		27670 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		44709.52 MB/s
 单线程写测试:		23562.97 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		23.4 MB/s (5718 IOPS, 4.48s)		31.3 MB/s (7648 IOPS, 3.35s)
 1GB-1M Block		664 MB/s (633 IOPS, 1.58s)		1.3 GB/s (1269 IOPS, 0.79s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 126.32 MB/s  (31.5k) | 1.09 GB/s    (17.1k)
Write      | 126.65 MB/s  (31.6k) | 1.10 GB/s    (17.2k)
Total      | 252.97 MB/s  (63.2k) | 2.19 GB/s    (34.3k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.65 GB/s     (3.2k) | 1.49 GB/s     (1.4k)
Write      | 1.74 GB/s     (3.4k) | 1.59 GB/s     (1.5k)
Total      | 3.40 GB/s     (6.6k) | 3.08 GB/s     (3.0k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 捷克 布拉格(PRG03S08)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 匈牙利布达佩斯(BUD02S30)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：德国
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：德国
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：德国区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：德国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: DE)
 HotStar:				No
 Disney+:				Yes (Region: DE)
 Netflix:				Yes (Region: DE)
 YouTube Premium:			Yes (Region: DE)
 Amazon Prime Video:			Yes (Region: DE)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			DE
 Viu.com:				No
 YouTube CDN:				Prague 
 Netflix Preferred CDN:			Frankfurt  
 Spotify Registration:			No
 Steam Currency:			EUR
 ChatGPT:				Yes
 Bing Region:				DE
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: DE)
 Netflix:				Yes (Region: DE)
 YouTube Premium:			Yes (Region: DE)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Budapest 
 Netflix Preferred CDN:			Frankfurt  
 Spotify Registration:			No
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Failed
 Bing Region:				CN
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【DE】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
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
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: DE 城市: Frankfurt am Main 服务商: AS44486 Oliver Horscht is trading as "SYNLINQ"
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  测试超时
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.50 ms  AS44486  德国, 黑森州, 法兰克福, develapp.me
0.72 ms  AS44486  德国, 黑森州, 法兰克福, living-bots.net
1.15 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
55.29 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
广州联通 210.21.196.6
7.44 ms  AS44486  德国, 黑森州, 法兰克福, develapp.me
2.36 ms  AS44486  德国, 黑森州, 法兰克福, living-bots.net
1.40 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
1.24 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
10.52 ms  AS174  法国, 法兰西岛大区, 巴黎, cogentco.com
86.35 ms  AS174  美国, 弗吉尼亚州, 阿灵顿, cogentco.com
102.59 ms  AS174  美国, 乔治亚州, 亚特兰大, cogentco.com
116.68 ms  AS174  美国, 德克萨斯州, 休斯顿, cogentco.com
132.98 ms  AS174  美国, 德克萨斯州, 埃尔帕索, cogentco.com
141.39 ms  AS174  美国, 亚利桑那州, 凤凰城, cogentco.com
152.65 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
153.40 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
219.60 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
251.32 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
255.06 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
232.66 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
249.34 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
231.33 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.70 ms  AS44486  德国, 黑森州, 法兰克福, develapp.me
0.48 ms  AS44486  德国, 黑森州, 法兰克福, living-bots.net
1.35 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
2.45 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
1.61 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
14.39 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
13.95 ms  AS58453  德国, 黑森州, 法兰克福, chinamobile.com, 移动
257.40 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
282.51 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
285.54 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
284.20 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
287.00 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
287.15 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 760.42 Mbps	 257.19 Mbps	 3.68	  0.0%
```