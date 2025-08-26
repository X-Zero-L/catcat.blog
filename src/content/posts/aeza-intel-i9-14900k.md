---
tags: [ru-server]
title: "Aeza 莫斯科 Intel i9-14900k 测评"
published: 2024-02-12
---

## 套餐

**_Provider : Aeza  
Type/Plan : IC14-2  
Processor : Intel Core i9-14900k  
Num of Core : 2 Cores  
Memory : 4 GB  
Storage : 60 GB NVMe  
Bandwidth : Unlimited @ 10 Gbps IN | 10 Gbps OUT  
Location : Moscow  
Price : € 17.4 / Month_**

## 测评

### lscpu

```shell
root@husky-cattle:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         46 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  2
  On-line CPU(s) list:   0,1
Vendor ID:               GenuineIntel
  BIOS Vendor ID:        Red Hat
  Model name:            Intel(R) Core(TM) i9-14900K
    BIOS Model name:     RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          6
    Model:               183
    Thread(s) per core:  1
    Core(s) per socket:  2
    Socket(s):           1
    Stepping:            1
    BogoMIPS:            6374.40
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush 
                         mmx fxsr sse sse2 ss ht syscall nx pdpe1gb rdtscp lm constant_tsc rep_good nopl 
                         xtopology cpuid tsc_known_freq pni pclmulqdq vmx ssse3 fma cx16 sse4_1 sse4_2 x2
                         apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_l
                         m abm 3dnowprefetch cpuid_fault ssbd ibrs ibpb stibp ibrs_enhanced tpr_shadow vn
                         mi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms inv
                         pcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves avx_v
                         nni arat umip pku ospke waitpkg gfni vaes vpclmulqdq rdpid movdiri movdir64b fsr
                         m md_clear serialize flush_l1d arch_capabilities
Virtualization features: 
  Virtualization:        VT-x
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   64 KiB (2 instances)
  L1i:                   64 KiB (2 instances)
  L2:                    8 MiB (2 instances)
  L3:                    16 MiB (1 instance)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0,1
Vulnerabilities:         
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Unknown: No mitigations
  Retbleed:              Not affected
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Enhanced IBRS, IBPB conditional, RSB filling, PBRSB-eIBRS SW sequenc
                         e
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 2 minutes
Processor  : Intel(R) Core(TM) i9-14900K
CPU cores  : 2 @ 3187.200 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 1024.0 MiB
Disk       : 59.0 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-10-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Aeza International LTD
ASN        : AS210644 AEZA INTERNATIONAL LTD
Host       : Aeza Network MSK
Location   : Amsterdam, North Holland (NH)
Country    : The Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 120.38 MB/s  (30.0k) | 2.10 GB/s    (32.8k)
Write      | 120.69 MB/s  (30.1k) | 2.11 GB/s    (32.9k)
Total      | 241.07 MB/s  (60.2k) | 4.21 GB/s    (65.7k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 5.72 GB/s    (11.1k) | 6.54 GB/s     (6.3k)
Write      | 6.02 GB/s    (11.7k) | 6.98 GB/s     (6.8k)
Total      | 11.74 GB/s   (22.9k) | 13.53 GB/s   (13.2k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1930                          
Multi Core      | 3812                          
Full Test       | https://browser.geekbench.com/v6/cpu/4885961
```

### Bench

```shell
----------------------------------------------------------------------
 CPU Model          : Intel(R) Core(TM) i9-14900K
 CPU Cores          : 2 @ 3187.200 MHz
 CPU Cache          : 16384 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 60.0 GB (2.6 GB Used)
 Total Mem          : 3.8 GB (343.7 MB Used)
 Total Swap         : 1024.0 MB (0 Used)
 System uptime      : 0 days, 0 hour 9 min
 Load average       : 0.36, 0.54, 0.30
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-10-amd64
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS210644 AEZA INTERNATIONAL LTD
 Location           : Moscow / RU
 Region             : Moscow
----------------------------------------------------------------------
 I/O Speed(1st run) : 2.3 GB/s
 I/O Speed(2nd run) : 2.7 GB/s
 I/O Speed(3rd run) : 2.6 GB/s
 I/O Speed(average) : 2594.1 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    2044.34 Mbps      3919.64 Mbps        40.30 ms    
 Dallas, US       545.43 Mbps       4605.54 Mbps        152.18 ms   
 Montreal, CA     537.07 Mbps       926.26 Mbps         120.65 ms   
 Paris, FR        1298.88 Mbps      6769.32 Mbps        57.99 ms    
 Hongkong, CN     357.99 Mbps       3526.65 Mbps        218.35 ms   
 Mumbai, IN       467.14 Mbps       4697.63 Mbps        164.09 ms   
 Singapore, SG    270.18 Mbps       2659.35 Mbps        302.88 ms   
 Tokyo, JP        285.23 Mbps       2311.78 Mbps        260.28 ms   
----------------------------------------------------------------------
 Finished in        : 4 min 22 sec
 Timestamp          : 2024-02-13 00:24:39 MSK
```

### GeekBench5 测试

```shell

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-10-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.0-4.module_el8.9.0+3659+9c8643f3

处理器信息
  Name                          Intel(R) Core(TM) i9-14900K
  Topology                      1 Processor, 2 Cores
  Identifier                    GenuineIntel Family 6 Model 183 Stepping 1
  Base Frequency                3.19 GHz
  L1 Instruction Cache          32.0 KB x 2
  L1 Data Cache                 32.0 KB x 2
  L2 Cache                      4.00 MB x 2
  L3 Cache                      16.0 MB

内存信息
  Size                          3.82 GB

单核测试分数：2012
多核测试分数：3727
详细结果链接：https://browser.geekbench.com/v5/cpu/22221015
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=Intel%20Core%20i9-14900K
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Core(TM) i9-14900K
 CPU 核心数        : 2
 CPU 频率          : 3187.200 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 8.00 MB / L3: 16.00 MB
 硬盘空间          : 2.64 GiB / 58.98 GiB
 启动盘路径        : /dev/vda1
 内存              : 195.33 MiB / 3.82 GiB
 Swap              : 0 KiB / 1024.00 MiB
 系统在线时间      : 0 days, 0 hour 17 min
 负载              : 0.43, 0.37, 0.28
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-10-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS210644 AEZA INTERNATIONAL LTD
 IPV4 位置         : Moscow / Moscow / RU
 IPV6 ASN          : AS210644 Aeza International
 IPV6 位置         : Amsterdam / North Holland / The Netherlands
 IPV6 子网掩码     : 48
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          4727 Scores
 2 线程测试(多核)得分:          9522 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          67417.14 MB/s
 单线程写测试:          42804.21 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         88.5 MB/s (21.61 IOPS, 1.18s))          66.0 MB/s (16116 IOPS, 1.59s)
 1GB-1M Block           3.1 GB/s (2924 IOPS, 0.34s)             4.1 GB/s (3898 IOPS, 0.26s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 120.38 MB/s  (30.0k) | 2.09 GB/s    (32.7k)
Write      | 120.70 MB/s  (30.1k) | 2.10 GB/s    (32.9k)
Total      | 241.09 MB/s  (60.2k) | 4.20 GB/s    (65.7k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 5.39 GB/s    (10.5k) | 7.07 GB/s     (6.9k)
Write      | 5.67 GB/s    (11.0k) | 7.54 GB/s     (7.3k)
Total      | 11.06 GB/s   (21.6k) | 14.61 GB/s   (14.2k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 俄罗斯 圣彼得堡(列宁格勒)(LED03S01)
Youtube识别地域: 俄罗斯联邦(RU)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: SVO(SVO04S27)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
Netflix在您的出口IP所在的国家不提供服务
[IPv6]
Netflix在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口所在地区即将开通DisneyPlus，尽请期待哦！
[IPv6]
当前IPv6出口所在地区即将开通DisneyPlus，尽请期待哦！
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  No
 HotStar:                               No
 Disney+:                               Failed
 Netflix:                               No
 YouTube Premium:                       No 
 Amazon Prime Video:                    Yes (Region: RU)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   INTL
 Viu.com:                               No
 YouTube CDN:                           St. Petersburg 
 Netflix Preferred CDN:                 Failed (CDN IP Not Found)
 Spotify Registration:                  No
 Steam Currency:                        RUB
 ChatGPT:                               Yes
 Bing Region:                           RU
 Instagram Licensed Audio:              Failed
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               No
 Disney+:                               Available For [Disney+ RU] Soon
 Netflix:                               No
 YouTube Premium:                       Yes (Region: GB)
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           Moscow 
 Netflix Preferred CDN:                 Failed (CDN IP Not Found)
 Spotify Registration:                  Yes (Region: NL)
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           RU
 Instagram Licensed Audio:              No
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【RU】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 25②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Fixed Line ISP⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  isp⑧  
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
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  yandex邮箱: Yes
  qq邮箱: Yes
  outlook邮箱: Yes
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: RU 城市: Moscow 服务商: AS210644 AEZA INTERNATIONAL LTD
北京电信 219.141.136.12  测试超时
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
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
0.14 ms  *  局域网
2.43 ms  *  局域网
0.56 ms  *  局域网
1.36 ms  *  共享地址
22.89 ms  AS35598  俄罗斯, 莫斯科, inetcom.ru
49.06 ms  AS6939  英国, 伦敦, he.net
49.91 ms  AS4134  英国, 伦敦, chinatelecom.com.cn, 电信
237.84 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
243.15 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.09 ms  *  局域网
4.53 ms  *  局域网
0.84 ms  *  局域网
0.84 ms  *  共享地址
0.84 ms  AS35598  俄罗斯, 莫斯科, inetcom.ru
40.85 ms  AS6939  德国, 黑森州, 法兰克福, he.net
204.50 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
205.11 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
201.83 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
204.75 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
206.94 ms  http: 502  中国, 广东, 深圳, chinaunicom.com, 联通
205.37 ms  http: 502  http: 502
广州移动 120.196.165.24
0.11 ms  *  局域网
5.19 ms  *  局域网
0.60 ms  *  局域网
0.67 ms  *  共享地址
22.71 ms  AS35598  俄罗斯, 莫斯科, inetcom.ru
42.22 ms  AS6939  荷兰, 北荷兰省, 阿姆斯特丹, he.net
54.86 ms  *  法国, 法兰西岛大区, 巴黎, equinix.com
52.30 ms  AS58453  德国, 黑森州, 法兰克福, chinamobile.com, 移动
296.94 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
251.22 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
296.22 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
297.70 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
257.36 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
255.53 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    4936.13 Mbps    5741.24 Mbps    40.49    0.0%
洛杉矶           452.30 Mbps     2226.06 Mbps    193.89   NULL
联通郑州5G       1055.59 Mbps    754.47 Mbps     189.71   NULL
移动郑州         0.00 Mbps       0.00 Mbps       236.46       
------------------------------------------------------------------------
 总共花费      : 5 分 27 秒
 时间          : Tue Feb 13 00:32:54 MSK 2024
------------------------------------------------------------------------
```

### PassMark PerformanceTest Linux 测试

```shell
Intel Core i9-14900K (x86_64)
2 cores @ 0 MHz  |  3.8 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          8232
  Integer Math                     17306 Million Operations/s
  Floating Point Math              20403 Million Operations/s
  Prime Numbers                    65.0 Million Primes/s
  Sorting                          10757 Thousand Strings/s
  Encryption                       4312 MB/s
  Compression                      76672 KB/s
  CPU Single Threaded              4632 Million Operations/s
  Physics                          1113 Frames/s
  Extended Instructions (SSE)      6141 Million Matrices/s

Memory Mark:                       2013
  Database Operations              3171 Thousand Operations/s
  Memory Read Cached               42238 MB/s
  Memory Read Uncached             13113 MB/s
  Memory Write                     11825 MB/s
  Available RAM                    3593 Megabytes
  Memory Latency                   65 Nanoseconds
  Memory Threaded                  24432 MB/s
--------------------------------------------------------------------------
```

### byte-unixbench 性能测试

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: husky-cattle.aeza.network: GNU/Linux
   OS: GNU/Linux -- 6.1.0-10-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.38-2 (2023-07-27)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: Intel(R) Core(TM) i9-14900K (6374.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   CPU 1: Intel(R) Core(TM) i9-14900K (6374.4 bogomips)
          Hyper-Threading, x86-64, MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET, Intel virtualization
   00:37:22 up 26 min,  1 user,  load average: 0.85, 0.66, 0.43; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Tue Feb 13 2024 00:37:22 - 01:05:43
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       87325907.0 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    12796.7 MWIPS (10.0 s, 7 samples)
Execl Throughput                               6716.7 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2665024.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          720396.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       4279244.6 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3864163.0 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 144463.8 lps   (10.0 s, 7 samples)
Process Creation                              12462.9 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  14563.1 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   3034.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        3299329.4 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   87325907.0   7482.9
Double-Precision Whetstone                       55.0      12796.7   2326.7
Execl Throughput                                 43.0       6716.7   1562.0
File Copy 1024 bufsize 2000 maxblocks          3960.0    2665024.8   6729.9
File Copy 256 bufsize 500 maxblocks            1655.0     720396.0   4352.8
File Copy 4096 bufsize 8000 maxblocks          5800.0    4279244.6   7378.0
Pipe Throughput                               12440.0    3864163.0   3106.2
Pipe-based Context Switching                   4000.0     144463.8    361.2
Process Creation                                126.0      12462.9    989.1
Shell Scripts (1 concurrent)                     42.4      14563.1   3434.7
Shell Scripts (8 concurrent)                      6.0       3034.7   5057.9
System Call Overhead                          15000.0    3299329.4   2199.6
                                                                   ========
System Benchmarks Index Score                                        2816.5

------------------------------------------------------------------------
Benchmark Run: Tue Feb 13 2024 01:05:43 - 01:33:59
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      168585066.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    25450.2 MWIPS (9.5 s, 7 samples)
Execl Throughput                              10544.4 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       4283774.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         1140166.7 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       7231845.7 KBps  (30.0 s, 2 samples)
Pipe Throughput                             7607541.5 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 833215.6 lps   (10.0 s, 7 samples)
Process Creation                              31432.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  26936.2 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   3639.3 lpm   (60.0 s, 2 samples)
System Call Overhead                        5494523.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  168585066.4  14446.0
Double-Precision Whetstone                       55.0      25450.2   4627.3
Execl Throughput                                 43.0      10544.4   2452.2
File Copy 1024 bufsize 2000 maxblocks          3960.0    4283774.2  10817.6
File Copy 256 bufsize 500 maxblocks            1655.0    1140166.7   6889.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    7231845.7  12468.7
Pipe Throughput                               12440.0    7607541.5   6115.4
Pipe-based Context Switching                   4000.0     833215.6   2083.0
Process Creation                                126.0      31432.3   2494.6
Shell Scripts (1 concurrent)                     42.4      26936.2   6352.9
Shell Scripts (8 concurrent)                      6.0       3639.3   6065.6
System Call Overhead                          15000.0    5494523.6   3663.0
                                                                   ========
System Benchmarks Index Score                                        5447.7

======= Script description and score comparison completed! ======= 
```

### 硬盘测试

```shell
root@husky-cattle:~# dd if=/dev/zero of=256 bs=64K count=4K oflag=dsync
4096+0 records in
4096+0 records out
268435456 bytes (268 MB, 256 MiB) copied, 33.2073 s, 8.1 MB/s
```

### SpeedTest

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-15.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-15.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-15.jpg" alt="" loading="lazy">
</picture>