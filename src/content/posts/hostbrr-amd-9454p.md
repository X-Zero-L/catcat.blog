---
tags: [eu-server]
title: "Hostbrr 德国 AMD 9454P 测评"
published: 2024-03-09
---

这家是Hetzner的转销商，活跃挺久了，感觉不出服务商清退的意外，能一直做下去。配置和价格都非常诱人，尤其是大盘鸡，单价每T2刀左右。原套餐为5950X，今天说由于销售过于火爆，更换到9454P服务器（两个U性能差不多），价格不变，不过HZ不含IP的成本，机器原件是209欧，价格公开，实际也能粗略估计节点情况。感觉上来说，之前的大内存促销那么多商家里，各有优劣吧。如果是需要大内存的机型来说，值得入手。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/03/image-7.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/03/image-7.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/03/image-7.jpg" alt="" loading="lazy">
</picture>

## 配置：

- **_Provider : Hostbrr_**

- **_Type/Plan : 5950X-20GBrr Flash Deal IPv4+IPv6_**

- **_Processor : AMD EPYC 9454P 48-Core Processor_**

- **_Num of Core : 6 Cores_**

- **_Memory : 20 GB_**

- **_Storage : 200 GB NVMe_**

- **_Bandwidth : 15TB @ 1 Gbps IN | 1 Gbps OUT_**

- **_Location : DE_**

- **_Price : € 10.5/ Month_**

- **_Order : [Order now!](https://my.hostbrr.com/order/main/packages/nyeflash/?group_id=57&currency=EUR&a=MzQw)_**（含AFF）

个人感觉还是不错的，推荐一次。

## 测评

### Lscpu

```shell
root@HostBrr:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         52 bits physical, 57 bits virtual
  Byte Order:            Little Endian
CPU(s):                  6
  On-line CPU(s) list:   0-5
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD EPYC 9454P 48-Core Processor
    BIOS Model name:     pc-i440fx-7.2  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               17
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           6
    Stepping:            1
    BogoMIPS:            5499.99
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 sysc                         all nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq 
                         ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hyp                         ervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core invpci                         d_single ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx                         512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xge                         tbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean pausef                         ilter pfthreshold v_vmsave_vmload vgif avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx                         512_vnni avx512_bitalg avx512_vpopcntdq la57 rdpid fsrm arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   192 KiB (6 instances)
  L1i:                   192 KiB (6 instances)
  L2:                    6 MiB (6 instances)
  L3:                    1.5 GiB (6 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0-5
Vulnerabilities:         
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not affect                         ed
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```shell

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 1 minutes
Processor  : AMD EPYC 9454P 48-Core Processor
CPU cores  : 6 @ 2749.998 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 19.5 GiB
Swap       : 1024.0 MiB
Disk       : 199.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Hetzner Online GmbH
ASN        : AS24940 Hetzner Online GmbH
Location   : Falkenstein, Saxony (SN)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 341.94 MB/s  (85.4k) | 4.17 GB/s    (65.2k)
Write      | 342.84 MB/s  (85.7k) | 4.19 GB/s    (65.5k)
Total      | 684.78 MB/s (171.1k) | 8.37 GB/s   (130.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 6.26 GB/s    (12.2k) | 7.02 GB/s     (6.8k)
Write      | 6.59 GB/s    (12.8k) | 7.49 GB/s     (7.3k)
Total      | 12.86 GB/s   (25.1k) | 14.51 GB/s   (14.1k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 928 Mbits/sec   | 904 Mbits/sec   | 23.8 ms        
Eranium         | Amsterdam, NL (10G)       | 937 Mbits/sec   | 936 Mbits/sec   | 10.6 ms        
HOSTKEY         | Helsinki, FI (10G)        | 922 Mbits/sec   | 929 Mbits/sec   | 30.6 ms        
Uztelecom       | Tashkent, UZ (10G)        | 849 Mbits/sec   | 476 Mbits/sec   | 96.4 ms        
Leaseweb        | Singapore, SG (10G)       | 519 Mbits/sec   | 605 Mbits/sec   | 232 ms         
Clouvider       | Los Angeles, CA, US (10G) | 769 Mbits/sec   | 365 Mbits/sec   | 157 ms         
Leaseweb        | NYC, NY, US (10G)         | 853 Mbits/sec   | 652 Mbits/sec   | 99.7 ms        
Edgoo           | Sao Paulo, BR (1G)        | 783 Mbits/sec   | 213 Mbits/sec   | 157 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2177                          
Multi Core      | 9196                          
Full Test       | https://browser.geekbench.com/v6/cpu/5237661

YABS completed in 8 min 53 sec
```

### Bench

```shell
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 9454P 48-Core Processor
 CPU Cores          : 6 @ 2749.998 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 200.9 GB (4.2 GB Used)
 Total Mem          : 19.5 GB (566.4 MB Used)
 Total Swap         : 1024.0 MB (0 Used)
 System uptime      : 0 days, 0 hour 25 min
 Load average       : 0.00, 0.02, 0.08
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS24940 Hetzner Online GmbH
 Location           : Falkenstein / DE
 Region             : Saxony
----------------------------------------------------------------------
 I/O Speed(1st run) : 867 MB/s
 I/O Speed(2nd run) : 1.4 GB/s
 I/O Speed(3rd run) : 1.3 GB/s
 I/O Speed(average) : 1210.6 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    936.57 Mbps       929.73 Mbps         3.77 ms     
 Los Angeles, US  598.66 Mbps       828.83 Mbps         149.68 ms   
 Dallas, US       708.71 Mbps       812.42 Mbps         122.25 ms   
 Montreal, CA     847.55 Mbps       935.86 Mbps         102.78 ms   
 Paris, FR        944.56 Mbps       951.37 Mbps         15.11 ms    
 Amsterdam, NL    935.26 Mbps       941.42 Mbps         11.25 ms    
 Shanghai, CN     333.10 Mbps       630.76 Mbps         265.86 ms   
 Hongkong, CN     43.36 Mbps        679.33 Mbps         186.10 ms   
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.2-debian-1.16.2-1

处理器信息
  Name                          AMD EPYC 9454P 48-Core Processor               
  Topology                      6 Processors, 6 Cores
  Identifier                    AuthenticAMD Family 25 Model 17 Stepping 1
  Base Frequency                2.75 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      256 MB

内存信息
  Size                          19.5 GB

单核测试分数：1531
多核测试分数：8319
详细结果链接：https://browser.geekbench.com/v5/cpu/22302075
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%209454P
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 9454P 48-Core Processor
 CPU 核心数        : 6
 CPU 频率          : 2749.998 MHz
 CPU 缓存          : L1: 192.00 KB / L2: 6.00 MB / L3: 1536.00 MB
 硬盘空间          : 4.23 GiB / 199.82 GiB
 启动盘路径        : /dev/vda3
 内存              : 346.25 MiB / 19.50 GiB
 Swap              : 0 KiB / 1024.00 MiB
 系统在线时间      : 0 days, 0 hour 35 min
 负载              : 0.43, 0.52, 0.28
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS24940 Hetzner Online GmbH
 IPV4 位置         : Falkenstein / Saxony / DE
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          4680 Scores
 6 线程测试(多核)得分:          27929 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          52157.04 MB/s
 单线程写测试:          31605.94 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         60.4 MB/s (14.76 IOPS, 1.74s))          84.4 MB/s (20593 IOPS, 1.24s)
 1GB-1M Block           714 MB/s (681 IOPS, 1.47s)              3.2 GB/s (3017 IOPS, 0.33s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 354.32 MB/s  (88.5k) | 4.14 GB/s    (64.7k)
Write      | 355.25 MB/s  (88.8k) | 4.16 GB/s    (65.0k)
Total      | 709.57 MB/s (177.3k) | 8.30 GB/s   (129.7k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 5.34 GB/s    (10.4k) | 5.34 GB/s     (5.2k)
Write      | 5.63 GB/s    (11.0k) | 5.69 GB/s     (5.5k)
Total      | 10.97 GB/s   (21.4k) | 11.03 GB/s   (10.7k)
正在并发测试中，大概2~3分钟无输出，请耐心等待。。。
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 德国法兰克福(FRA16S31)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：德国
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：德国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: DE)
 HotStar:                               No
 Disney+:                               No
 Netflix:                               No
 YouTube Premium:                       Yes (Region: DE)
 Amazon Prime Video:                    Yes (Region: DE)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   DE
 Viu.com:                               No
 YouTube CDN:                           Frankfurt 
 Netflix Preferred CDN:                 Frankfurt  
 Spotify Registration:                  Yes (Region: DE)
 Steam Currency:                        EUR
 ChatGPT:                               Yes
 Bing Region:                           DE
 Instagram Licensed Audio:              Yes
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 25②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  hosting⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
Google搜索可行性：YES
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: DE 城市: Falkenstein 服务商: AS24940 Hetzner Online GmbH
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  测试超时
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.09 ms  AS24940  德国, 萨克森自由州, 法尔肯施泰因, hetzner.com
1.26 ms  *  共享地址
1.63 ms  AS24940  德国, 巴伐利亚州, 纽伦堡, hetzner.com
3.90 ms  AS24940  德国, 巴伐利亚州, 纽伦堡, hetzner.com
4.18 ms  AS174  德国, 巴伐利亚州, 纽伦堡, cogentco.com
5.67 ms  AS174  德国, 巴伐利亚州, 慕尼黑, cogentco.com
11.11 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
10.94 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
322.40 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
327.07 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
325.53 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.11 ms  AS24940  德国, 萨克森自由州, 法尔肯施泰因, hetzner.com
0.52 ms  *  共享地址
0.48 ms  AS24940  德国, 巴伐利亚州, 纽伦堡, hetzner.com
2.96 ms  AS24940  德国, 巴伐利亚州, 纽伦堡, hetzner.com
3.11 ms  AS1299  德国, 巴伐利亚州, 纽伦堡, telia.com
7.95 ms  AS1299  德国, 黑森州, 法兰克福, telia.com
157.37 ms  AS4837  中国, 北京, chinaunicom.com, 联通
160.86 ms  AS4837  中国, 北京, chinaunicom.com, 联通
171.40 ms  AS4837  中国, 北京, chinaunicom.com, 联通
158.78 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
158.28 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
176.69 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.12 ms  AS24940  德国, 萨克森自由州, 法尔肯施泰因, hetzner.com
0.68 ms  *  共享地址
0.48 ms  AS24940  德国, 萨克森自由州, 法尔肯施泰因, hetzner.com
5.12 ms  AS24940  德国, 萨克森自由州, 法尔肯施泰因, hetzner.com
6.28 ms  *  德国, 黑森州, 法兰克福, de-cix.net
6.66 ms  AS58453  德国, 黑森州, 法兰克福, chinamobile.com, 移动
208.90 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
210.93 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
211.35 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
212.92 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
215.37 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
215.74 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    940.72 Mbps     944.97 Mbps     3.82     0.0%
法兰克福         946.24 Mbps     948.83 Mbps     10.85    NULL
洛杉矶           171.33 Mbps     731.04 Mbps     145.45   0.4%
联通海南         494.57 Mbps     41.88 Mbps      170.33   NULL
联通上海5G       142.70 Mbps     6.28 Mbps       263.79   0.0%
电信西宁         4.53 Mbps       534.25 Mbps     263.12   3.7%
电信Suzhou5G     0.99 Mbps       485.36 Mbps     273.23   NULL
移动Lanzhou      5.28 Mbps       482.64 Mbps     218.46   NULL
------------------------------------------------------------------------
 总共花费      : 4 分 18 秒
 时间          : Sat Mar  9 14:58:01 CST 2024
------------------------------------------------------------------------
```

### PassMark PerformanceTest Linux 测试

```shell
AMD EPYC 9454P 48-Core Processor (x86_64)
6 cores @ 0 MHz  |  19.5 GiB RAM
Number of Processes: 6  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          16083
  Integer Math                     37487 Million Operations/s
  Floating Point Math              33046 Million Operations/s
  Prime Numbers                    123 Million Primes/s
  Sorting                          23458 Thousand Strings/s
  Encryption                       8111 MB/s
  Compression                      163127 KB/s
  CPU Single Threaded              2989 Million Operations/s
  Physics                          2189 Frames/s
  Extended Instructions (SSE)      15156 Million Matrices/s

Memory Mark:                       2764
  Database Operations              6378 Thousand Operations/s
  Memory Read Cached               28737 MB/s
  Memory Read Uncached             27794 MB/s
  Memory Write                     25072 MB/s
  Available RAM                    19542 Megabytes
  Memory Latency                   73 Nanoseconds
  Memory Threaded                  154286 MB/s
--------------------------------------------------------------------------------
```

### byte-unixbench 性能测试

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: HostBrr: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9454P 48-Core Processor (5500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9454P 48-Core Processor (5500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD EPYC 9454P 48-Core Processor (5500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD EPYC 9454P 48-Core Processor (5500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 4: AMD EPYC 9454P 48-Core Processor (5500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 5: AMD EPYC 9454P 48-Core Processor (5500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   15:04:11 up 45 min,  1 user,  load average: 0.77, 1.06, 0.63; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sat Mar 09 2024 15:04:11 - 15:32:08
6 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       57801178.1 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     9088.2 MWIPS (9.9 s, 7 samples)
Execl Throughput                               5229.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1509223.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          395704.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       5106611.2 KBps  (30.0 s, 2 samples)
Pipe Throughput                             2789633.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 190246.1 lps   (10.0 s, 7 samples)
Process Creation                               9600.6 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   8969.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5482.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        2947872.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   57801178.1   4953.0
Double-Precision Whetstone                       55.0       9088.2   1652.4
Execl Throughput                                 43.0       5229.1   1216.1
File Copy 1024 bufsize 2000 maxblocks          3960.0    1509223.9   3811.2
File Copy 256 bufsize 500 maxblocks            1655.0     395704.8   2391.0
File Copy 4096 bufsize 8000 maxblocks          5800.0    5106611.2   8804.5
Pipe Throughput                               12440.0    2789633.2   2242.5
Pipe-based Context Switching                   4000.0     190246.1    475.6
Process Creation                                126.0       9600.6    762.0
Shell Scripts (1 concurrent)                     42.4       8969.7   2115.5
Shell Scripts (8 concurrent)                      6.0       5482.7   9137.9
System Call Overhead                          15000.0    2947872.6   1965.2
                                                                   ========
System Benchmarks Index Score                                        2322.7

------------------------------------------------------------------------
Benchmark Run: Sat Mar 09 2024 15:32:08 - 16:00:06
6 CPUs in system; running 6 parallel copies of tests

Dhrystone 2 using register variables      347926571.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    54549.4 MWIPS (9.9 s, 7 samples)
Execl Throughput                              16208.3 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        977016.7 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          255331.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3000946.6 KBps  (30.0 s, 2 samples)
Pipe Throughput                            16637287.0 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                1033554.9 lps   (10.0 s, 7 samples)
Process Creation                              48833.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  50040.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   6945.6 lpm   (60.0 s, 2 samples)
System Call Overhead                        4057446.4 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  347926571.9  29813.8
Double-Precision Whetstone                       55.0      54549.4   9918.1
Execl Throughput                                 43.0      16208.3   3769.4
File Copy 1024 bufsize 2000 maxblocks          3960.0     977016.7   2467.2
File Copy 256 bufsize 500 maxblocks            1655.0     255331.0   1542.8
File Copy 4096 bufsize 8000 maxblocks          5800.0    3000946.6   5174.0
Pipe Throughput                               12440.0   16637287.0  13374.0
Pipe-based Context Switching                   4000.0    1033554.9   2583.9
Process Creation                                126.0      48833.2   3875.6
Shell Scripts (1 concurrent)                     42.4      50040.4  11802.0
Shell Scripts (8 concurrent)                      6.0       6945.6  11575.9
System Call Overhead                          15000.0    4057446.4   2705.0
                                                                   ========
System Benchmarks Index Score                                        5662.4

======= Script description and score comparison completed! ======= 
```