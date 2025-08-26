---
title: "Advin Servers AMD EPYC™ Genoa 9554 测评"
published: 2023-11-26
categories: 
  - "vps"
  - "eu-server"
---

> ## 套餐

**_Provider : Advin Servers  
Type/Plan : Europe NL/DE - KVM Premium VPS  
Processor : AMD EPYC 9554  
Num of Core : 2 Cores  
Memory : 4 GB  
Storage : 40 GB NVMe  
Bandwidth : 5 TB @ 10 Gbps  
Location : Germany (Nuremberg)  
Price : 4 USD_**

### 测评

### lscpu

```
root@s9662:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         52 bits physical, 57 bits virtual
  Byte Order:            Little Endian
CPU(s):                  2
  On-line CPU(s) list:   0,1
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD EPYC 9554 64-Core Processor
    BIOS Model name:     pc-i440fx-8.0  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               17
    Thread(s) per core:  1
    Core(s) per socket:  2
    Socket(s):           1
    Stepping:            1
    BogoMIPS:            6199.99
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx 
                         fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid ex                         td_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movb                         e popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy 
                         svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core invpcid_single 
                         ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid av                         x512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw a                         vx512vl xsaveopt xsavec xgetbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat n                         pt lbrv nrip_save tsc_scale vmcb_clean flushbyasid pausefilter pfthreshold v_vmsave_                         vmload vgif avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni 
                         avx512_bitalg avx512_vpopcntdq la57 rdpid fsrm arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   128 KiB (2 instances)
  L1i:                   128 KiB (2 instances)
  L2:                    1 MiB (2 instances)
  L3:                    32 MiB (2 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0,1
Vulnerabilities:         
  Gather data sampling:  Not affected
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec rstack overflow:  Mitigation; safe RET
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRS                         B-eIBRS Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 4 days, 2 hours, 7 minutes
Processor  : AMD EPYC 9554 64-Core Processor
CPU cores  : 2 @ 3099.996 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 36.4 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-13-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Advin Services LLC
ASN        : AS206216 Advin Services LLC
Host       : Advin Services LLC
Location   : Amsterdam, North Holland (NH)
Country    : The Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 165.83 MB/s  (41.4k) | 1.49 GB/s    (23.3k)
Write      | 166.27 MB/s  (41.5k) | 1.49 GB/s    (23.4k)
Total      | 332.11 MB/s  (83.0k) | 2.99 GB/s    (46.7k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.50 GB/s     (8.8k) | 4.80 GB/s     (4.6k)
Write      | 4.74 GB/s     (9.2k) | 5.12 GB/s     (5.0k)
Total      | 9.25 GB/s    (18.0k) | 9.93 GB/s     (9.7k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 5.51 Gbits/sec  | 4.04 Gbits/sec  | 20.4 ms        
Scaleway        | Paris, FR (10G)           | 5.36 Gbits/sec  | 6.29 Gbits/sec  | 18.0 ms        
NovoServe       | North Holland, NL (40G)   | 4.20 Gbits/sec  | 8.38 Gbits/sec  | 15.3 ms        
Uztelecom       | Tashkent, UZ (10G)        | 1.54 Gbits/sec  | 1.61 Gbits/sec  | 100 ms         
Clouvider       | NYC, NY, US (10G)         | 565 Mbits/sec   | busy            | 93.6 ms        
Clouvider       | Dallas, TX, US (10G)      | 609 Mbits/sec   | 450 Mbits/sec   | 253 ms         
Clouvider       | Los Angeles, CA, US (10G) | 1.02 Gbits/sec  | 824 Mbits/sec   | 167 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1590                          
Multi Core      | 2802                          
Full Test       | https://browser.geekbench.com/v6/cpu/3725819

YABS completed in 10 min 28 sec
```

### Bench

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 9554 64-Core Processor
 CPU Cores          : 2 @ 3099.996 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 36.4 GB (2.0 GB Used)
 Total Mem          : 3.8 GB (349.7 MB Used)
 System uptime      : 4 days, 2 hour 23 min
 Load average       : 0.00, 0.21, 0.23
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-13-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS206216 Advin Services LLC
 Location           : Nürnberg / DE
 Region             : Bavaria
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.3 GB/s
 I/O Speed(2nd run) : 1.3 GB/s
 I/O Speed(3rd run) : 1.4 GB/s
 I/O Speed(average) : 1365.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    4444.37 Mbps      6799.71 Mbps        15.44 ms    
 Los Angeles, US  577.39 Mbps       3006.67 Mbps        160.11 ms   
 Dallas, US       678.81 Mbps       5769.06 Mbps        129.31 ms   
 Montreal, CA     211.30 Mbps       937.82 Mbps         94.83 ms    
 Paris, FR        4333.50 Mbps      6023.43 Mbps        17.45 ms    
 Amsterdam, NL    5076.69 Mbps      4073.09 Mbps        15.45 ms    
 Shanghai, CN     88.24 Mbps        0.58 Mbps           348.36 ms   
 Mumbai, IN       727.05 Mbps       3353.02 Mbps        135.30 ms   
 Singapore, SG    247.50 Mbps       2271.42 Mbps        320.64 ms   
 Tokyo, JP        1.19 Mbps         3306.82 Mbps        229.06 ms   
----------------------------------------------------------------------
 Finished in        : 5 min 39 sec
 Timestamp          : 2023-11-26 11:23:28 UTC
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```
AMD EPYC 9554 64-Core Processor (x86_64)
2 cores @ 0 MHz  |  3.8 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          4726
  Integer Math                     11720 Million Operations/s
  Floating Point Math              9119 Million Operations/s
  Prime Numbers                    27.9 Million Primes/s
  Sorting                          6666 Thousand Strings/s
  Encryption                       2489 MB/s
  Compression                      44555 KB/s
  CPU Single Threaded              2486 Million Operations/s
  Physics                          464 Frames/s
  Extended Instructions (SSE)      3677 Million Matrices/s

Memory Mark:                       1591
  Database Operations              1428 Thousand Operations/s
  Memory Read Cached               18705 MB/s
  Memory Read Uncached             18219 MB/s
  Memory Write                     18311 MB/s
  Available RAM                    3439 Megabytes
  Memory Latency                   99 Nanoseconds
  Memory Threaded                  37599 MB/s
--------------------------------------------------------------------------------
```

### 融合怪脚本测速

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 9554 64-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 3099.996 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 1.00 MB / L3: 32.00 MB
 硬盘空间          : 1.99 GiB / 36.39 GiB
 启动盘路径        : /dev/sda1
 内存              : 126.48 MiB / 3.82 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 4 days, 2 hour 39 min
 负载              : 0.59, 0.55, 0.36
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-13-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS206216 Advin Services LLC
 IPV4 位置         : Nürnberg / Bavaria / DE
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分: 		4113 Scores
 2 线程测试(多核)得分: 		8215 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		45788.64 MB/s
 单线程写测试:		24092.47 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		36.3 MB/s (8869 IOPS, 2.89s)		77.8 MB/s (18982 IOPS, 1.35s)
 1GB-1M Block		4.2 GB/s (4027 IOPS, 0.25s)		8.7 GB/s (8249 IOPS, 0.12s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 167.52 MB/s  (41.8k) | 1.58 GB/s    (24.7k)
Write      | 167.96 MB/s  (41.9k) | 1.59 GB/s    (24.8k)
Total      | 335.49 MB/s  (83.8k) | 3.17 GB/s    (49.6k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.07 GB/s     (7.9k) | 4.57 GB/s     (4.4k)
Write      | 4.29 GB/s     (8.3k) | 4.87 GB/s     (4.7k)
Total      | 8.37 GB/s    (16.3k) | 9.44 GB/s     (9.2k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS17S06)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：荷兰
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：荷兰区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: NL)
 HotStar:				No
 Disney+:				No
 Netflix:				Originals Only
 YouTube Premium:			Yes
 Amazon Prime Video:			Yes (Region: NL)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			INTL
 Viu.com:				No
 YouTube CDN:				Amsterdam 
 Netflix Preferred CDN:			New York, NY  
 Spotify Registration:			No
 Steam Currency:			EUR
 ChatGPT:				Yes
 Bing Region:				NL
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【NL】
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
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ 
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
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测88 ③
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: DE 城市: Nürnberg 服务商: AS206216 Advin Services LLC
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  测试超时
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     测试超时
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.46 ms 	AS206216 德国 巴伐利亚州 纽伦堡 advinservers.com
0.90 ms 	AS174 [COGENT-BONE] 德国 巴伐利亚州 纽伦堡 cogentco.com
2.87 ms 	AS174 [COGENT-BONE] 德国 巴伐利亚州 慕尼黑 cogentco.com
9.87 ms 	AS174 [COGENT-BONE] 德国 黑森州 美因河畔法兰克福 cogentco.com
8.47 ms 	AS174 [COGENT-BONE] 德国 黑森州 美因河畔法兰克福 cogentco.com
753.25 ms 	AS174 [COGENT-149] 德国 黑森州 美因河畔法兰克福 Cogent-CT-Peer cogentco.com
999.69 ms 	AS4134 [CHINANET-BB] 中国 广州市 广州市 chinatelecom.com.cn 电信
954.41 ms 	AS4134 [CHINANET-BB] 中国 广东省 广州市 chinatelecom.com.cn 电信
743.19 ms 	AS4134 中国 广东省 深圳市 福田区 chinatelecom.com.cn 电信
广州联通 210.21.196.6
0.43 ms 	AS206216 德国 巴伐利亚州 纽伦堡 advinservers.com
1.23 ms 	AS174 [COGENT-BONE] 德国 巴伐利亚州 纽伦堡 cogentco.com
4.19 ms 	AS174 [COGENT-BONE] 德国 巴伐利亚州 慕尼黑 cogentco.com
8.23 ms 	AS174 [COGENT-BONE] 德国 黑森州 美因河畔法兰克福 cogentco.com
18.27 ms 	AS174 [COGENT-BONE] 法国 法兰西岛大区 巴黎 cogentco.com
93.60 ms 	AS174 [COGENT-BONE] 美国 华盛顿哥伦比亚特区 华盛顿 cogentco.com
109.96 ms 	AS174 [COGENT-BONE] 美国 佐治亚州 亚历山大 cogentco.com
123.88 ms 	AS174 [COGENT-BONE] 美国 德克萨斯州 休斯顿 cogentco.com
140.13 ms 	AS174 [COGENT-BONE] 美国 得克萨斯州 埃尔帕索 cogentco.com
148.32 ms 	AS174 [COGENT-BONE] 美国 亚利桑那州 凤凰城 cogentco.com
159.90 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 洛杉矶 cogentco.com
160.54 ms 	AS174 [COGENT-BONE] 美国 加利福尼亚州 洛杉矶 cogentco.com
516.53 ms 	AS174 美国 加利福尼亚州 洛杉矶 cogentco.com
* ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
589.74 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
500.16 ms 	AS4837 [CU169-BACKBONE] 中国 广东省 广州市 chinaunicom.cn 联通
508.85 ms 	AS17816 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
481.96 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 chinaunicom.cn 联通
507.58 ms 	AS17623 [APNIC-AP] 中国 广东省 深圳市 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
0.69 ms 	AS206216 德国 巴伐利亚州 纽伦堡 advinservers.com
0.96 ms 	AS174 [COGENT-BONE] 德国 巴伐利亚州 纽伦堡 cogentco.com
2.95 ms 	AS174 [COGENT-BONE] 德国 巴伐利亚州 慕尼黑 cogentco.com
8.24 ms 	AS174 [COGENT-BONE] 德国 黑森州 美因河畔法兰克福 cogentco.com
9.14 ms 	AS174 [COGENT-BONE] 德国 黑森州 美因河畔法兰克福 cogentco.com
23.07 ms 	AS174 [COGENT-149] 德国 黑森州 美因河畔法兰克福 cogentco.com
22.26 ms 	AS58453 [CMI-INT] 德国 黑森州 美茵河畔法兰克福 cmi.chinamobile.com 移动
227.74 ms 	AS58453 [CMI-INT] 德国 黑森州 美因河畔法兰克福 cmi.chinamobile.com 移动
229.51 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
213.30 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
330.20 ms 	AS9808 [CMNET] 中国 上海市 chinamobile.com 移动
216.23 ms 	AS9808 [CMNET] 中国 广东省 广州市 chinamobile.com 移动
237.32 ms 	AS9808 [CMNET] 中国 北京市 chinamobile.com 移动
232.71 ms 	AS56040 [APNIC-AP] 中国 广东省 深圳市 chinamobile.com 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置		 上传速度	 下载速度	 延迟	  丢包率
Speedtest.net	 4097.96 Mbps	 6957.79 Mbps	 14.88	  0.0%
法兰克福	 2615.10 Mbps	 6125.69 Mbps	 33.73	  0.0%
洛杉矶		 571.86 Mbps	 3000.82 Mbps	 160.56	  0.0%
联通郑州5G	 590.16 Mbps	 32.26 Mbps	 373.16	  NULL
联通湖南5G	 304.92 Mbps	 615.54 Mbps	 272.73	  NULL
移动硬核通信	 0.25 Mbps	 6.95 Mbps	 918.55	  NULL
------------------------------------------------------------------------
 总共花费      : 5 分 15 秒
 时间          : Sun Nov 26 11:38:52 UTC 2023
------------------------------------------------------------------------
```

### byte-unixbench 性能测试

```
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: s9662: GNU/Linux
   OS: GNU/Linux -- 6.1.0-13-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.55-1 (2023-09-29)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9554 64-Core Processor (6200.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9554 64-Core Processor (6200.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   11:40:14 up 4 days,  2:46,  1 user,  load average: 0.40, 0.36, 0.34; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sun Nov 26 2023 11:40:14 - 12:08:12
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       49734458.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     8403.9 MWIPS (9.9 s, 7 samples)
Execl Throughput                               2796.9 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        724635.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          196643.7 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1863622.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1029155.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  38982.0 lps   (10.0 s, 7 samples)
Process Creation                               5889.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   8316.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1517.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        1033873.5 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   49734458.7   4261.7
Double-Precision Whetstone                       55.0       8403.9   1528.0
Execl Throughput                                 43.0       2796.9    650.4
File Copy 1024 bufsize 2000 maxblocks          3960.0     724635.2   1829.9
File Copy 256 bufsize 500 maxblocks            1655.0     196643.7   1188.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    1863622.1   3213.1
Pipe Throughput                               12440.0    1029155.2    827.3
Pipe-based Context Switching                   4000.0      38982.0     97.5
Process Creation                                126.0       5889.5    467.4
Shell Scripts (1 concurrent)                     42.4       8316.9   1961.5
Shell Scripts (8 concurrent)                      6.0       1517.2   2528.6
System Call Overhead                          15000.0    1033873.5    689.2
                                                                   ========
System Benchmarks Index Score                                        1118.0

------------------------------------------------------------------------
Benchmark Run: Sun Nov 26 2023 12:08:12 - 12:36:13
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables       91990818.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    15649.8 MWIPS (9.8 s, 7 samples)
Execl Throughput                               4486.8 lps   (29.6 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1128780.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          311024.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3045380.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1785810.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 305711.9 lps   (10.0 s, 7 samples)
Process Creation                              14170.1 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  13430.3 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   1665.5 lpm   (60.0 s, 2 samples)
System Call Overhead                        1944451.8 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   91990818.6   7882.7
Double-Precision Whetstone                       55.0      15649.8   2845.4
Execl Throughput                                 43.0       4486.8   1043.5
File Copy 1024 bufsize 2000 maxblocks          3960.0    1128780.8   2850.5
File Copy 256 bufsize 500 maxblocks            1655.0     311024.3   1879.3
File Copy 4096 bufsize 8000 maxblocks          5800.0    3045380.4   5250.7
Pipe Throughput                               12440.0    1785810.8   1435.5
Pipe-based Context Switching                   4000.0     305711.9    764.3
Process Creation                                126.0      14170.1   1124.6
Shell Scripts (1 concurrent)                     42.4      13430.3   3167.5
Shell Scripts (8 concurrent)                      6.0       1665.5   2775.8
System Call Overhead                          15000.0    1944451.8   1296.3
                                                                   ========
System Benchmarks Index Score                                        2140.6

======= Script description and score comparison completed! ======= 
```
