---
title: "Faconhost 香港 AMD 7900X 测评"
published: 2024-01-25
categories: 
  - "vps"
  - "hk-server"
---

- **高严格 TOS，不建议购买！！！避坑！！！**

最近新开业的一个商家，注册地是英国，AS216001，今天新增了HK机房，接入的是 Cloudie， 最近挺热门的。难得一见的香港高配机型，CPU 采用的是 7900X，IO 目前很优秀。由于是刚开业，这个成绩貌似也是在情理之中。希望能够一直保持，后台控制面板采用的是 VirtFusion，官网首页做的挺好看的，支持支付宝和PayPal。

**注: PUSH 费用 5 英镑, 换IP费用 5英镑. 禁止连续占满CPU超2小时, 禁止安装Windows系统.**

https://catcat.blog/faconhost-nl-amd-7950x.html

## 套餐

**_Provider : Faconhost  
Type/Plan : Hong Kong-Gold-2G  
Processor : AMD Ryzen 9 7900X (4.5 GHz++)  
Num of Core : 2 Cores  
Memory : 2 GB DDR5 RAM  
Storage : 30 GB NVMe(PCIe 4.0)  
Bandwidth : 1000GB/Month@100Mbps  
Location : HK  
Price : £24.50 GBP_**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-32.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-32.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-32.jpg" alt="" loading="lazy">
</picture>

## 测评

### lscpu

```
root@yuri-ly:~# lscpu
Architecture:                    x86_64
CPU op-mode(s):                  32-bit, 64-bit
Byte Order:                      Little Endian
Address sizes:                   48 bits physical, 48 bits virtual
CPU(s):                          2
On-line CPU(s) list:             0,1
Thread(s) per core:              1
Core(s) per socket:              1
Socket(s):                       2
NUMA node(s):                    1
Vendor ID:                       AuthenticAMD
CPU family:                      25
Model:                           97
Model name:                      AMD Ryzen 9 7900X 12-Core Processor
Stepping:                        2
CPU MHz:                         4691.164
BogoMIPS:                        9382.32
Virtualization:                  AMD-V
Hypervisor vendor:               KVM
Virtualization type:             full
L1d cache:                       64 KiB
L1i cache:                       64 KiB
L2 cache:                        2 MiB
L3 cache:                        128 MiB
NUMA node0 CPU(s):               0,1
Vulnerability Itlb multihit:     Not affected
Vulnerability L1tf:              Not affected
Vulnerability Mds:               Not affected
Vulnerability Meltdown:          Not affected
Vulnerability Mmio stale data:   Not affected
Vulnerability Retbleed:          Not affected
Vulnerability Spec store bypass: Mitigation; Speculative Store Bypass disabled via prctl and seccomp
Vulnerability Spectre v1:        Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:        Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRS
                                 B-eIBRS Not affected
Vulnerability Srbds:             Not affected
Vulnerability Tsx async abort:   Not affected
Flags:                           fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx 
                                 fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_
                                 apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt
                                  tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_
                                 legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core ssbd ibrs ibpb stibp vm
                                 mcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512f avx512dq rdseed a
                                 dx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec
                                  xgetbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_s
                                 cale vmcb_clean pausefilter pfthreshold v_vmsave_vmload vgif avx512vbmi umip pku osp
                                 ke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpi
                                 d fsrm arch_capabilities
root@yuri-ly:~# 
```

### Yabs

```
Thu 25 Jan 2024 12:14:03 PM GMT

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 12 minutes
Processor  : AMD Ryzen 9 7900X 12-Core Processor
CPU cores  : 2 @ 4691.164 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 0.0 KiB
Disk       : 30.0 GiB
Distro     : Debian GNU/Linux 11 (bullseye)
Kernel     : 5.10.0-20-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Cloudie Limited
ASN        : AS55933 Cloudie Limited
Host       : Cloudie Limited
Location   : Mong Kok, Yau Tsim Mong (KYT)
Country    : Hong Kong

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 597.37 MB/s (149.3k) | 5.08 GB/s    (79.5k)
Write      | 598.94 MB/s (149.7k) | 5.11 GB/s    (79.9k)
Total      | 1.19 GB/s   (299.0k) | 10.20 GB/s  (159.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 5.03 GB/s     (9.8k) | 4.93 GB/s     (4.8k)
Write      | 5.29 GB/s    (10.3k) | 5.26 GB/s     (5.1k)
Total      | 10.33 GB/s   (20.1k) | 10.20 GB/s    (9.9k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2916                          
Multi Core      | 5249                          
Full Test       | https://browser.geekbench.com/v6/cpu/4558789

YABS completed in 5 min 40 sec
root@yuri-ly:~# 
```

### Bench

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 7900X 12-Core Processor
 CPU Cores          : 2 @ 4691.164 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 30.0 GB (1.7 GB Used)
 Total Mem          : 1.9 GB (163.2 MB Used)
 System uptime      : 0 days, 0 hour 20 min
 Load average       : 0.03, 0.24, 0.16
 OS                 : Debian GNU/Linux 11
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.10.0-20-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS55933 Cloudie Limited
 Location           : Hong Kong / HK
 Region             : Central and Western
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.4 GB/s
 I/O Speed(2nd run) : 1.9 GB/s
 I/O Speed(3rd run) : 1.8 GB/s
 I/O Speed(average) : 1740.8 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    95.52 Mbps        98.78 Mbps          38.09 ms    
 Los Angeles, US  5.64 Mbps         99.76 Mbps          140.02 ms   
 Dallas, US       55.57 Mbps        99.67 Mbps          170.30 ms   
 Montreal, CA     84.68 Mbps        98.78 Mbps          214.81 ms   
 Paris, FR        5.10 Mbps         102.07 Mbps         190.17 ms   
 Amsterdam, NL    91.61 Mbps        100.63 Mbps         189.02 ms   
 Shanghai, CN     95.86 Mbps        94.16 Mbps          30.42 ms    
 Chongqing, CN    0.30 Mbps         0.18 Mbps           259.41 ms   
 Hongkong, CN     95.14 Mbps        96.40 Mbps          2.33 ms     
 Mumbai, IN       87.77 Mbps        104.94 Mbps         191.57 ms   
 Singapore, SG    97.67 Mbps        99.68 Mbps          37.99 ms    
 Tokyo, JP        93.46 Mbps        97.06 Mbps          44.96 ms    
----------------------------------------------------------------------
 Finished in        : 5 min 39 sec
 Timestamp          : 2024-01-25 12:27:52 GMT
---------------------------------------------------------------------
```

### GeekBench5 测试

```

Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 11 (bullseye)
  Kernel                        Linux 5.10.0-20-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.2-debian-1.16.2-1

处理器信息
  Name                          AMD Ryzen 9 7900X
  Topology                      2 Processors, 2 Cores
  Identifier                    AuthenticAMD Family 25 Model 97 Stepping 2
  Base Frequency                4.69 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      64.0 MB

内存信息
  Size                          1.90 GB

单核测试分数：2040
多核测试分数：3996
详细结果链接：https://browser.geekbench.com/v5/cpu/22169605
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%207900X
```

### byte-unixbench 性能测试

```
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: yuri-ly: GNU/Linux
   OS: GNU/Linux -- 5.10.0-20-amd64 -- #1 SMP Debian 5.10.158-2 (2022-12-13)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD Ryzen 9 7900X 12-Core Processor (9382.3 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD Ryzen 9 7900X 12-Core Processor (9382.3 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   13:30:51 up  1:29,  1 user,  load average: 0.13, 0.50, 0.41; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Thu Jan 25 2024 13:30:51 - 13:59:10
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       77136553.8 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    12733.1 MWIPS (10.0 s, 7 samples)
Execl Throughput                              12613.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2703610.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          712107.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       8301817.7 KBps  (30.0 s, 2 samples)
Pipe Throughput                             4484783.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 127320.7 lps   (10.0 s, 7 samples)
Process Creation                              14739.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  23813.2 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4021.6 lpm   (60.0 s, 2 samples)
System Call Overhead                        5364240.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   77136553.8   6609.8
Double-Precision Whetstone                       55.0      12733.1   2315.1
Execl Throughput                                 43.0      12613.1   2933.3
File Copy 1024 bufsize 2000 maxblocks          3960.0    2703610.0   6827.3
File Copy 256 bufsize 500 maxblocks            1655.0     712107.5   4302.8
File Copy 4096 bufsize 8000 maxblocks          5800.0    8301817.7  14313.5
Pipe Throughput                               12440.0    4484783.2   3605.1
Pipe-based Context Switching                   4000.0     127320.7    318.3
Process Creation                                126.0      14739.3   1169.8
Shell Scripts (1 concurrent)                     42.4      23813.2   5616.3
Shell Scripts (8 concurrent)                      6.0       4021.6   6702.6
System Call Overhead                          15000.0    5364240.9   3576.2
                                                                   ========
System Benchmarks Index Score                                        3502.7

------------------------------------------------------------------------
Benchmark Run: Thu Jan 25 2024 13:59:10 - 14:27:31
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      154822688.2 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    25400.2 MWIPS (10.0 s, 7 samples)
Execl Throughput                              13339.0 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1536464.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          416197.7 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3411288.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                             8764015.1 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 939970.5 lps   (10.0 s, 7 samples)
Process Creation                              33807.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  30023.0 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4181.3 lpm   (60.0 s, 2 samples)
System Call Overhead                        3921485.4 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  154822688.2  13266.7
Double-Precision Whetstone                       55.0      25400.2   4618.2
Execl Throughput                                 43.0      13339.0   3102.1
File Copy 1024 bufsize 2000 maxblocks          3960.0    1536464.9   3880.0
File Copy 256 bufsize 500 maxblocks            1655.0     416197.7   2514.8
File Copy 4096 bufsize 8000 maxblocks          5800.0    3411288.8   5881.5
Pipe Throughput                               12440.0    8764015.1   7045.0
Pipe-based Context Switching                   4000.0     939970.5   2349.9
Process Creation                                126.0      33807.7   2683.1
Shell Scripts (1 concurrent)                     42.4      30023.0   7080.9
Shell Scripts (8 concurrent)                      6.0       4181.3   6968.9
System Call Overhead                          15000.0    3921485.4   2614.3
                                                                   ========
System Benchmarks Index Score                                        4463.3

======= Script description and score comparison completed! ======= 
```

### Monster 测试

```
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 11 (64 Bit)
 Virt/Kernel  : KVM / 5.10.0-20-amd64
 CPU Model    : AMD Ryzen 9 7900X 12-Core Processor
 CPU Cores    : 2 @ 4691.164 MHz x86_64 1024 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 2.98, 5.75, 3.82
 Total Space  : 30G (2.1G ~7% used)
 Total RAM    : 1947 MB (199 MB + 808 MB Buff in use)
 Total SWAP   : 0 MB (0 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 0 days 2:27
---------------------------------------------------------------------------
 Location     : China, Handan (Hebei)
 ASN & ISP    : AS55933, Cloudie Limited / Hebei Jiateng Electronics and Technology Co., Ltd
---------------------------------------------------------------------------

 ## Geekbench v5 CPU Benchmark:

  Single Core : 2077  (MONSTER)
   Multi Core : 4050

 ## IO Test

 CPU Speed:
    bzip2     : 252 MB/s
   sha256     : 495 MB/s
   md5sum     : 943 MB/s

 RAM Speed:
   Avg. write : 6382.9 MB/s
   Avg. read  : 14438.4 MB/s

 Disk Speed:
   1st run    : 1.5 GB/s
   2nd run    : 1.8 GB/s
   3rd run    : 1.7 GB/s
   -----------------------
   Average    : 1706.7 MB/s
```

### 融合怪脚本测试

```
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 7900X 12-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 4691.164 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 2.00 MB / L3: 128.00 MB
 硬盘空间          : 1.73 GiB / 29.87 GiB
 启动盘路径        : /dev/sda3
 内存              : 204.71 MiB / 1.90 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 37 min
 负载              : 0.01, 0.04, 0.07
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-20-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS55933 Cloudie Limited
 IPV4 位置         : Hong Kong / Central and Western / HK
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          6519 Scores
 2 线程测试(多核)得分:          12679 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          72398.47 MB/s
 单线程写测试:          36792.13 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         145 MB/s (35.47 IOPS, 0.72s))           194 MB/s (47262 IOPS, 0.54s)
 1GB-1M Block           2.0 GB/s (1869 IOPS, 0.54s)             5.1 GB/s (4869 IOPS, 0.21s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 596.69 MB/s (149.1k) | 5.11 GB/s    (79.9k)
Write      | 598.26 MB/s (149.5k) | 5.14 GB/s    (80.3k)
Total      | 1.19 GB/s   (298.7k) | 10.25 GB/s  (160.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 5.10 GB/s     (9.9k) | 4.98 GB/s     (4.8k)
Write      | 5.37 GB/s    (10.5k) | 5.31 GB/s     (5.1k)
Total      | 10.48 GB/s   (20.4k) | 10.30 GB/s   (10.0k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG33S01)
Youtube识别地域: 香港(HK)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
Netflix在您的出口IP所在的国家不提供服务
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：香港
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口所在地区即将开通DisneyPlus，尽请期待哦！
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：香港区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  No
 HotStar:                               No
 Disney+:                               No
 Netflix:                               No
 YouTube Premium:                       Yes (Region: HK)
 Amazon Prime Video:                    Yes (Region: CN)
 TVBAnywhere+:                          No
 iQyi Oversea Region:                   HK
 Viu.com:                               No
 YouTube CDN:                           Hong Kong 
 Netflix Preferred CDN:                 Failed (CDN IP Not Found)
 Spotify Registration:                  No
 Steam Currency:                        CNY
 ChatGPT:                               Only Available with Mobile APP
 Bing Region:                           HK
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               No
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       No  (Region: CN) 
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           Hong Kong 
 Netflix Preferred CDN:                 Hong Kong  
 Spotify Registration:                  No
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           HK
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         Failed
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
  数据中心(datacenter):  Yes⑥   No⑨ 
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
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测89 ③
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  qq邮箱: Yes
  yandex邮箱: Yes
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Hong Kong 服务商: AS55933 Cloudie Limited
北京电信 219.141.136.12  联通4837[普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  联通4837[普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   联通4837[普通线路]           
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     联通4837[普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
29.74 ms  *  局域网
5.92 ms  AS10099  中国, 香港, chinaunicom.com, 联通
7.72 ms  AS10099  中国, 香港, chinaunicom.com, 联通
8.89 ms  AS10099  中国, 香港, chinaunicom.com, 联通
7.25 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
18.11 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
14.56 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
11.18 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.38 ms  *  局域网
6.26 ms  AS10099  中国, 香港, chinaunicom.com, 联通
2.53 ms  AS10099  中国, 香港, chinaunicom.com, 联通
10.31 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
13.30 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
7.30 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
12.30 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
114.25 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
10.38 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
5.83 ms  *  局域网
8.58 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
9.68 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
9.62 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
13.12 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
15.51 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
18.85 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    49.28 Mbps      19.01 Mbps      31.62    0.0%
中国香港         95.93 Mbps      95.70 Mbps      1.63     NULL
新加坡           97.65 Mbps      90.57 Mbps      38.01    NULL
联通海南         96.68 Mbps      95.65 Mbps      26.88    NULL
联通Fuzhou       98.57 Mbps      39.39 Mbps      29.65    0.4%
电信合肥5G       16.11 Mbps      94.75 Mbps      30.81    0.0%
移动陕西5G       92.22 Mbps      99.16 Mbps      56.96    0.0%
------------------------------------------------------------------------
 总共花费      : 6 分 26 秒
 时间          : Thu Jan 25 12:43:21 GMT 2024
------------------------------------------------------------------------
```

### PassMark PerformanceTest Linux 测试

```
AMD Ryzen 9 7900X 12-Core Processor (x86_64)
2 cores @ 4691 MHz  |  1.9 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          7799
  Integer Math                     17351 Million Operations/s
  Floating Point Math              15482 Million Operations/s
  Prime Numbers                    62.3 Million Primes/s
  Sorting                          10857 Thousand Strings/s
  Encryption                       3803 MB/s
  Compression                      73944 KB/s
  CPU Single Threaded              4180 Million Operations/s
  Physics                          1016 Frames/s
  Extended Instructions (SSE)      6607 Million Matrices/s

Memory Mark:                       1698
  Database Operations              2817 Thousand Operations/s
  Memory Read Cached               40212 MB/s
  Memory Read Uncached             38540 MB/s
  Memory Write                     22591 MB/s
  Available RAM                    1176 Megabytes
  Memory Latency                   61 Nanoseconds
  Memory Threaded                  47249 MB/s
--------------------------------------------------------------------------------
```

### DD 硬盘测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-33.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-33.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-33.jpg" alt="" loading="lazy">
</picture>

### 多地回程测试

```
traceroute to 59.36.216.1, 30 hops max, 52 bytes packets
1   *
2   10.82.3.254     *                         RFC1918          
                                              1.34 ms
3   *
4   *
5   162.245.124.254 AS10099  [CUG-BACKBONE]   中国 香港   chinaunicomglobal.com  联通
                                              6.25 ms
6   43.252.86.66    AS10099                   中国 香港   chinaunicomglobal.com  联通
                                              6.41 ms
7   43.252.86.141   AS10099                   中国 广东 广州  chinaunicomglobal.com  联通
                                              3.72 ms
8   219.158.20.93   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              9.30 ms
9   219.158.4.133   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              9.79 ms
10  *
11  219.158.109.70  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              9.80 ms
12  *
13  *
14  *
15  119.147.61.194  AS4134   [CHINANET-GD]    中国 广东 深圳  chinatelecom.com.cn  电信
                                              13.00 ms
16  59.36.216.1     AS4134                    中国 广东 江门市  chinatelecom.com.cn  电信
                                              12.78 ms

No:2/9 Traceroute to 中国 上海 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 47.05ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes packets
1   *
2   10.82.3.254     *                         RFC1918          
                                              17.93 ms
3   *
4   *
5   *
6   223.120.22.118  AS58453  [CMI-INT]        中国 上海   cmi.chinamobile.com  移动
                                              27.75 ms
7   221.183.89.178  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              31.01 ms
8   221.183.89.69   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              31.61 ms
9   *
10  221.183.90.242  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              31.80 ms
11  *
12  *
13  *
14  *
15  *
16  101.226.41.65   AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              33.48 ms

No:3/9 Traceroute to 中国 北京 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 45.21ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes packets
1   *
2   10.82.3.254     *                         RFC1918          
                                              0.39 ms
3   *
4   *
5   162.245.124.254 AS10099  [CUG-BACKBONE]   中国 香港   chinaunicomglobal.com  联通
                                              8.29 ms
6   43.252.86.66    AS10099                   中国 香港   chinaunicomglobal.com  联通
                                              10.49 ms
7   202.77.23.29    AS10099  [CUG-BACKBONE]   中国 广东 广州  chinaunicomglobal.com  联通
                                              4.41 ms
8   219.158.10.29   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              7.62 ms
9   219.158.103.29  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              15.45 ms
10  219.158.103.217 AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              14.03 ms
11  *
12  219.158.103.170 AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              50.83 ms
13  *
14  *
15  *
16  *
17  36.110.247.130  AS23724                   中国 北京   bjtelecom.net 
                                              67.94 ms
18  220.181.53.1    AS23724  [CHINANET-IDC]   中国 北京   bjtelecom.net  电信
                                              47.64 ms

No:4/9 Traceroute to 中国 广州 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 46.85ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes packets
1   *
2   10.82.3.254     *                         RFC1918          
                                              0.74 ms
3   *
4   *
5   *
6   *
7   221.183.89.178  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              30.12 ms
8   221.183.89.69   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              31.50 ms
9   *
10  *
11  221.183.94.174  AS9808   [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              33.75 ms
12  219.158.33.185  AS4837   [CU169-BACKBONE] 中国 香港   chinaunicom.cn  联通
                                              35.74 ms
13  219.158.125.165 AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn 
                                              43.53 ms
14  112.91.0.254    AS17816  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              35.72 ms
15  120.80.91.62    AS17816  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              39.12 ms
16  *
17  *
18  *
19  *
20  *
21  *
22  *
23  *
24  *
25  *
26  *
27  *
28  *
29  *
30  *

No:5/9 Traceroute to 中国 上海 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 48.99ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes packets
1   *
2   10.82.3.254     *                         RFC1918          
                                              1.33 ms
3   *
4   *
5   *
6   *
7   221.183.89.182  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              30.22 ms
8   221.183.89.69   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              29.92 ms
9   *
10  *
11  221.183.123.106 AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              37.52 ms
12  *
13  *
14  210.22.66.178   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              38.08 ms
15  112.65.95.129   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              34.44 ms

No:6/9 Traceroute to 中国 北京 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 39.02ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes packets
1   *
2   10.82.3.254     *                         RFC1918          
                                              0.58 ms
3   *
4   *
5   223.120.3.89    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.65 ms
6   *
7   221.183.89.178  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              30.18 ms
8   221.183.89.33   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              29.88 ms
9   *
10  *
11  *
12  221.183.95.62   AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              53.49 ms
13  219.158.10.201  AS4837   [CU169-BACKBONE] 中国 江苏省 南京市  chinaunicom.cn 
                                              52.07 ms
14  125.33.186.22   AS4808   [UNICOM-BJ]      中国 北京   chinaunicom.cn  联通
                                              49.10 ms
15  *
16  61.49.140.217   AS4808                    中国 北京   chinaunicom.cn  联通
                                              48.61 ms

No:7/9 Traceroute to 中国 深圳 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 41.32ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 120.233.53.1, 30 hops max, 52 bytes packets
1   *
2   10.82.3.254     *                         RFC1918          
                                              1.82 ms
3   *
4   *
5   223.120.3.89    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.34 ms
6   223.120.2.86    AS58453  [CMI-INT]        中国 广东 广州  cmi.chinamobile.com  移动
                                              8.57 ms
7   221.183.55.82   AS9808   [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              9.69 ms
8   221.183.92.21   AS9808   [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              9.97 ms
9   *
10  *
11  183.235.226.173 AS56040  [APNIC-AP]       中国 广东 广州  chinamobile.com  移动
                                              11.81 ms
12  *
13  120.233.53.1    AS56040  [APNIC-AP]       中国 广东 深圳  chinamobile.com  移动
                                              16.63 ms

No:8/9 Traceroute to 中国 上海 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - 104.21.40.176 - 59.17ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes packets
1   *
2   10.82.3.254     *                         RFC1918          
                                              1.30 ms
3   *
4   *
5   *
6   *
7   221.183.89.182  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              30.55 ms
8   221.183.89.69   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              30.43 ms
9   221.183.89.50   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              31.83 ms
10  *
11  *
12  183.194.216.129 AS9808   [APNIC-AP]       中国 上海   chinamobile.com  移动
                                              31.95 ms

No:9/9 Traceroute to 中国 北京 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.8 2023-12-23T13:30:40Z f76c940
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 45.03ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes packets
1   *
2   10.82.3.254     *                         RFC1918          
                                              0.99 ms
3   *
4   *
5   *
6   223.120.22.142  AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              38.47 ms
7   221.183.55.110  AS9808   [CMNET]          中国 北京  回国到达层 chinamobile.com  移动
                                              38.90 ms
8   221.183.46.250  AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              48.66 ms
9   221.183.89.102  AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              46.65 ms
10  *
11  *
12  *
13  211.136.67.166  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              48.54 ms
14  *
15  *
16  211.136.25.153  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              48.63 ms
```

### 国内延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-34.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-34.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-34.jpg" alt="" loading="lazy">
</picture>
