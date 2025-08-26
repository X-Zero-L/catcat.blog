---
tags: [eu-server]
title: "Faconhost 荷兰 AMD 7950X 测评"
published: 2023-12-19
---

- **高严格 TOS，不建议购买！！！避坑！！！**

最近新开业的一个商家，目前只有荷兰的数据中心，接入的是Xtom， 和小秘书家的荷兰7950X一样的线路接入，CPU采用的是7950X,IO目前很优秀。由于是刚开业，这个成绩貌似也是在情理之中。希望能够一直保持，后台控制面板采用的是VirtFusion，官网首页做的挺好看的。稳定性因为刚开业，目前未知。

### 官网

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/12/image-18.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/12/image-18.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/12/image-18.jpg" alt="" loading="lazy">
</picture>

**网址：_[https://faconhost.com/](https://faconhost.com/)_**（**无AFF）**

**优惠码：10%OFF**

如果你觉得测试有帮助，想支持一下，含AFF的地址是：**[地址](https://client.faconhost.com/order/forms/a/MzE=)**

注意：

**这家退款政策严格：账号只能退 1 次，流量没超 20G 等。PUSH费用是5英镑。IP更换费用也是5英镑**

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/12/image-16.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/12/image-16.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/12/image-16.jpg" alt="" loading="lazy">
</picture>

## 套餐

**_Provider : Faconhost  
Type/Plan : Netherlands-Gold-2G  
Processor : AMD Ryzen 9 7950X (4.5 GHz++)  
Num of Core : 2 Cores  
Memory : 2 GB DDR5 RAM  
Storage : 30 GB NVMe(PCIe 4.0)  
Bandwidth : 1TB @ 200 Mbps IN | 200 Mbps OUT  
Location : NL  
Price : £21.50 GBP_**

## 测评

### lscpu

```shell
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
Model name:                      AMD Ryzen 9 7950X 16-Core Processor
Stepping:                        2
CPU MHz:                         4491.488
BogoMIPS:                        8982.97
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
Vulnerability Spectre v2:        Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not a                                 ffected
Vulnerability Srbds:             Not affected
Vulnerability Tsx async abort:   Not affected
Flags:                           fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2                                  syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni 
                                 pclmulqdq ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c 
                                 rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perf                                 ctr_core ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid avx512                                 f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt 
                                 xsavec xgetbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vm                                 cb_clean pausefilter pfthreshold v_vmsave_vmload vgif avx512vbmi umip pku ospke avx512_vbmi2 gfni                                  vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid fsrm arch_capabilities
```

### Yabs

**因为是大陆优化，因此就不错外国的网络测试了。**

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 2 hours, 9 minutes
Processor  : AMD Ryzen 9 7950X 16-Core Processor
CPU cores  : 2 @ 4491.488 MHz
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
ISP        : xTom GmbH
ASN        : AS3214 xTom GmbH
Location   : Amsterdam, North Holland (NH)
Country    : Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 581.45 MB/s (145.3k) | 4.96 GB/s    (77.6k)
Write      | 582.98 MB/s (145.7k) | 4.99 GB/s    (78.0k)
Total      | 1.16 GB/s   (291.1k) | 9.96 GB/s   (155.6k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 5.23 GB/s    (10.2k) | 5.16 GB/s     (5.0k)
Write      | 5.51 GB/s    (10.7k) | 5.50 GB/s     (5.3k)
Total      | 10.75 GB/s   (21.0k) | 10.67 GB/s   (10.4k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 3007                          
Multi Core      | 5368                          
Full Test       | https://browser.geekbench.com/v6/cpu/4048745

YABS completed in 5 min 19 sec
```

### Bench

```shell
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 7950X 16-Core Processor
 CPU Cores          : 2 @ 4491.488 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 30.0 GB (1.7 GB Used)
 Total Mem          : 1.9 GB (160.6 MB Used)
 System uptime      : 0 days, 0 hour 18 min
 Load average       : 0.02, 0.20, 0.14
 OS                 : Debian GNU/Linux 11
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.10.0-20-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS3214 xTom GmbH
 Location           : Amsterdam / NL
 Region             : North Holland
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.1 GB/s
 I/O Speed(2nd run) : 1.5 GB/s
 I/O Speed(3rd run) : 1.4 GB/s
 I/O Speed(average) : 1365.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    201.16 Mbps       193.18 Mbps         0.70 ms     
 Los Angeles, US  204.82 Mbps       196.13 Mbps         137.41 ms   
 Dallas, US       205.94 Mbps       195.17 Mbps         108.12 ms   
 Montreal, CA     86.94 Mbps        185.52 Mbps         79.61 ms    
 Paris, FR        203.67 Mbps       194.73 Mbps         16.23 ms    
 Amsterdam, NL    202.60 Mbps       195.85 Mbps         1.46 ms     
 Shanghai, CN     207.71 Mbps       199.38 Mbps         181.71 ms   
 Hongkong, CN     216.04 Mbps       196.09 Mbps         204.11 ms   
 Mumbai, IN       209.64 Mbps       199.10 Mbps         132.83 ms   
 Singapore, SG    224.55 Mbps       226.76 Mbps         229.29 ms   
 Tokyo, JP        228.41 Mbps       196.33 Mbps         218.92 ms   
----------------------------------------------------------------------
 Finished in        : 5 min 12 sec
 Timestamp          : 2023-12-19 07:30:16 GMT
----------------------------------------------------------------------
```

### GeekBench5 测试

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 11 (bullseye)
  Kernel                        Linux 5.10.0-20-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.2-debian-1.16.2-1

处理器信息
  Name                          AMD Ryzen 9 7950X
  Topology                      2 Processors, 2 Cores
  Identifier                    AuthenticAMD Family 25 Model 97 Stepping 2
  Base Frequency                4.49 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      64.0 MB

内存信息
  Size                          1.90 GB

单核测试分数：2113
多核测试分数：4122
详细结果链接：https://browser.geekbench.com/v5/cpu/22058931
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%207950X
```

### byte-unixbench 性能测试

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: yuri-ly: GNU/Linux
   OS: GNU/Linux -- 5.10.0-20-amd64 -- #1 SMP Debian 5.10.158-2 (2022-12-13)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD Ryzen 9 7950X 16-Core Processor (8983.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD Ryzen 9 7950X 16-Core Processor (8983.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   07:58:53 up 51 min,  2 users,  load average: 0.20, 0.38, 0.32; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Tue Dec 19 2023 07:58:53 - 08:27:13
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       79260016.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    13062.0 MWIPS (10.0 s, 7 samples)
Execl Throughput                              12739.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2712288.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          731017.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       8711635.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                             4652226.6 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 185167.2 lps   (10.0 s, 7 samples)
Process Creation                              15243.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  25223.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4103.5 lpm   (60.0 s, 2 samples)
System Call Overhead                        5626858.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   79260016.7   6791.8
Double-Precision Whetstone                       55.0      13062.0   2374.9
Execl Throughput                                 43.0      12739.1   2962.6
File Copy 1024 bufsize 2000 maxblocks          3960.0    2712288.0   6849.2
File Copy 256 bufsize 500 maxblocks            1655.0     731017.9   4417.0
File Copy 4096 bufsize 8000 maxblocks          5800.0    8711635.4  15020.1
Pipe Throughput                               12440.0    4652226.6   3739.7
Pipe-based Context Switching                   4000.0     185167.2    462.9
Process Creation                                126.0      15243.5   1209.8
Shell Scripts (1 concurrent)                     42.4      25223.7   5949.0
Shell Scripts (8 concurrent)                      6.0       4103.5   6839.2
System Call Overhead                          15000.0    5626858.6   3751.2
                                                                   ========
System Benchmarks Index Score                                        3716.4

------------------------------------------------------------------------
Benchmark Run: Tue Dec 19 2023 08:27:13 - 08:55:33
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      161170985.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    26011.9 MWIPS (10.0 s, 7 samples)
Execl Throughput                              13894.6 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1559281.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          429919.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3450134.7 KBps  (30.0 s, 2 samples)
Pipe Throughput                             9302439.0 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 974564.0 lps   (10.0 s, 7 samples)
Process Creation                              35677.9 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  30496.2 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4282.3 lpm   (60.0 s, 2 samples)
System Call Overhead                        3630498.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  161170985.7  13810.7
Double-Precision Whetstone                       55.0      26011.9   4729.4
Execl Throughput                                 43.0      13894.6   3231.3
File Copy 1024 bufsize 2000 maxblocks          3960.0    1559281.5   3937.6
File Copy 256 bufsize 500 maxblocks            1655.0     429919.5   2597.7
File Copy 4096 bufsize 8000 maxblocks          5800.0    3450134.7   5948.5
Pipe Throughput                               12440.0    9302439.0   7477.8
Pipe-based Context Switching                   4000.0     974564.0   2436.4
Process Creation                                126.0      35677.9   2831.6
Shell Scripts (1 concurrent)                     42.4      30496.2   7192.5
Shell Scripts (8 concurrent)                      6.0       4282.3   7137.1
System Call Overhead                          15000.0    3630498.7   2420.3
                                                                   ========
System Benchmarks Index Score                                        4566.9

======= Script description and score comparison completed! ======= 
```

### Monster 测试

```shell
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 11 (64 Bit)
 Virt/Kernel  : KVM / 5.10.0-20-amd64
 CPU Model    : AMD Ryzen 9 7950X 16-Core Processor
 CPU Cores    : 2 @ 4491.488 MHz x86_64 1024 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 0.31, 0.37, 1.39
 Total Space  : 30G (2.5G ~9% used)
 Total RAM    : 1947 MB (376 MB + 604 MB Buff in use)
 Total SWAP   : 0 MB (0 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 0 days 2:7
---------------------------------------------------------------------------
 Location     : The Netherlands, Amsterdam (North Holland)
 ASN & ISP    : AS3214, xTom GmbH / xTom GmbH
---------------------------------------------------------------------------

 ## Geekbench v5 CPU Benchmark:

  Single Core : 2058  (MONSTER)
   Multi Core : 3951

 ## IO Test

 CPU Speed:
    bzip2     : 238 MB/s
   sha256     : 484 MB/s
   md5sum     : 901 MB/s

 RAM Speed:
   Avg. write : 6348.8 MB/s
   Avg. read  : 14404.3 MB/s

 Disk Speed:
   1st run    : 1.5 GB/s
   2nd run    : 1.5 GB/s
   3rd run    : 1.5 GB/s
   -----------------------
   Average    : 1536.0 MB/s
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 7950X 16-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 4491.488 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 2.00 MB / L3: 128.00 MB
 硬盘空间          : 1.73 GiB / 29.87 GiB
 启动盘路径        : /dev/sda3
 内存              : 208.12 MiB / 1.90 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 24 min
 负载              : 0.12, 0.10, 0.10
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-20-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS3214 xTom GmbH
 IPV4 位置         : Amsterdam / North Holland / NL
 IPV6 ASN          : AS3214 xTom
 IPV6 位置         : Amsterdam / North Holland
 IPV6 子网掩码     : 64
---------------------CPU测试--感谢lemonbench开源------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(1核)得分:           6565 Scores
 2 线程测试(多核)得分:          13047 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          79610.99 MB/s
 单线程写测试:          38540.87 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         132 MB/s (32.28 IOPS, 0.79s))           179 MB/s (43701 IOPS, 0.59s)
 1GB-1M Block           1.7 GB/s (1578 IOPS, 0.63s)             6.7 GB/s (6434 IOPS, 0.16s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 612.57 MB/s (153.1k) | 4.58 GB/s    (71.6k)
Write      | 614.19 MB/s (153.5k) | 4.61 GB/s    (72.0k)
Total      | 1.22 GB/s   (306.6k) | 9.19 GB/s   (143.7k)           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 5.33 GB/s    (10.4k) | 4.05 GB/s     (3.9k)
Write      | 5.61 GB/s    (10.9k) | 4.32 GB/s     (4.2k)
Total      | 10.95 GB/s   (21.3k) | 8.38 GB/s     (8.1k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS17S06)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 荷兰阿姆斯特丹(AMS15S45)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：荷兰
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：荷兰
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：荷兰区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：荷兰区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: NL)
 HotStar:                               No
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: DE)
 Amazon Prime Video:                    Yes (Region: NL)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   US
 Viu.com:                               No
 YouTube CDN:                           Amsterdam 
 Netflix Preferred CDN:                 Amsterdam  
 Spotify Registration:                  No
 Steam Currency:                        EUR
 ChatGPT:                               Yes
 Bing Region:                           NL
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               No
 Disney+:                               Yes (Region: NL)
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: DE)
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           Amsterdam 
 Netflix Preferred CDN:                 Dusseldorf  
 Spotify Registration:                  No
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           NL
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【DE】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 43②
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
  yandex邮箱: Yes
  qq邮箱：No
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: NL 城市: Amsterdam 服务商: AS3214 xTom GmbH
北京电信 219.141.136.12  电信CN2 [优质线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 联通4837[普通线路]           
上海电信 202.96.209.133  电信CN2 [优质线路]           
上海联通 210.22.97.1     联通9929[优质线路]           
上海移动 211.136.112.200 联通9929[优质线路]           
广州电信 58.60.188.222   电信CN2 [优质线路]           
广州联通 210.21.196.6    联通9929[优质线路]           
广州移动 120.196.165.24  联通9929[优质线路]           
成都电信 61.139.2.69     电信CN2 [优质线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  联通4837[普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
1.08 ms  AS3214  荷兰, 北荷兰省, 阿姆斯特丹, xtom.com
0.31 ms  *  荷兰, 北荷兰省, 阿姆斯特丹, xtom.com
6.56 ms  *  德国, 黑森州, 法兰克福, xtom.com
6.79 ms  AS4809  德国, 黑森州, 法兰克福, cteurope.net
6.61 ms  *  德国, 黑森州, 法兰克福, cteurope.net
130.86 ms  *  德国, 黑森州, 法兰克福, cteurope.net
131.37 ms  *  中国, 北京, chinatelecom.com.cn, 电信
172.82 ms  *  中国, 北京, chinatelecom.com.cn, 电信
183.56 ms  *  中国, 广东, 广州, chinatelecom.com.cn, 电信
180.24 ms  *  中国, 广东, 深圳, chinatelecom.com.cn, 电信
181.33 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
185.26 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
12.97 ms  AS3214  荷兰, 北荷兰省, 阿姆斯特丹, xtom.com
0.34 ms  *  荷兰, 北荷兰省, 阿姆斯特丹, xtom.com
8.04 ms  *  英国, 伦敦, xtom.com
9.11 ms  AS10099  英国, 伦敦, chinaunicom.com, 联通
21.58 ms  AS10099  英国, 伦敦, chinaunicom.com, 联通
177.68 ms  AS10099  英国, 伦敦, chinaunicom.com, 联通
152.11 ms  *  中国, 北京, chinaunicom.com, 联通
191.04 ms  AS9929  中国, 广东, 广州, chinaunicom.com, 联通
191.27 ms  *  中国, 广东, 广州, chinaunicom.com, 联通
198.98 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
198.17 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
189.60 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
187.98 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
79.61 ms  AS3214  荷兰, 北荷兰省, 阿姆斯特丹, xtom.com
0.30 ms  *  荷兰, 北荷兰省, 阿姆斯特丹, xtom.com
8.13 ms  *  英国, 伦敦, xtom.com
8.67 ms  AS10099  英国, 伦敦, chinaunicom.com, 联通
24.40 ms  AS10099  英国, 伦敦, chinaunicom.com, 联通
178.22 ms  AS10099  英国, 伦敦, chinaunicom.com, 联通
161.09 ms  *  中国, 北京, chinaunicom.com, 联通
193.87 ms  AS9929  中国, 广东, 广州, chinaunicom.com, 联通
187.02 ms  *  中国, 广东, 广州, chinaunicom.com, 联通
195.65 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
208.05 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
207.31 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
227.51 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
209.14 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    201.68 Mbps     194.54 Mbps     0.72     0.0%
法兰克福         204.65 Mbps     197.38 Mbps     14.28    0.0%
联通上海5G       222.01 Mbps     198.51 Mbps     169.93   0.0%
联通郑州5G       207.22 Mbps     215.24 Mbps     164.25   NULL
```

### PassMark PerformanceTest Linux 测试

```shell
AMD Ryzen 9 7950X 16-Core Processor (x86_64)
2 cores @ 4491 MHz  |  1.9 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          8018
  Integer Math                     17710 Million Operations/s
  Floating Point Math              15907 Million Operations/s
  Prime Numbers                    64.6 Million Primes/s
  Sorting                          11223 Thousand Strings/s
  Encryption                       3924 MB/s
  Compression                      75930 KB/s
  CPU Single Threaded              4276 Million Operations/s
  Physics                          1054 Frames/s
  Extended Instructions (SSE)      6806 Million Matrices/s

Memory Mark:                       1932
  Database Operations              2878 Thousand Operations/s
  Memory Read Cached               41282 MB/s
  Memory Read Uncached             40108 MB/s
  Memory Write                     22508 MB/s
  Available RAM                    1509 Megabytes
  Memory Latency                   59 Nanoseconds
  Memory Threaded                  47487 MB/s
--------------------------------------------------------------------------------
```

### 硬盘读写测试

```shell
root@yuri-ly:~# dd if=/dev/zero of=256 bs=64K count=4K oflag=dsync
4096+0 records in
4096+0 records out
268435456 bytes (268 MB, 256 MiB) copied, 2.15977 s, 124 MB/s
```

### HyperSpeed 三网测试

```shell
——————————————————————————— HyperSpeed —————————————————————————————
         bash <(wget -qO- https://bench.im/hyperspeed)
         项目修改自: https://github.com/zq/superspeed/
   脚本更新: 2023/4/13 | 组件更新: 2023/11/1 | 组件版本: 0.17.0
————————————————————————————————————————————————————————————————————
  测速类型:    1. 三网测速    2. 取消测速    0. 港澳台日韩
               3. 电信节点    4. 联通节点    5. 移动节点
               6. 教育网IPv4  7. 教育网IPv6  8. 三网IPv6
  请选择测速类型(默认: 1): 1
  启用八线程测速[y/N](默认: N): 
————————————————————————————————————————————————————————————————————
测速服务器信息   ↑     上传/Mbps ↓     下载/Mbps ↕ 延迟/ms ϟ 抖动/ms
————————————————————————————————————————————————————————————————————
电信|江苏镇江5G  ↑    142.3 正常 ↓     58.9 正常 ↕   166.0 ϟ     8.6
电信|江苏南京5G  ↑     15.9 正常 ↓     65.6 正常 ↕   162.4 ϟ     6.1
电信|安徽合肥5G  ↑     86.4 正常 ↓     53.5 正常 ↕   165.6 ϟ     5.7

电信|天津        ↑     52.5 正常 ↓     64.2 正常 ↕   166.5 ϟ     6.0
电信|四川成都    ↑      3.1 正常 ↓     11.6 正常 ↕   184.3 ϟ    10.1
联通|福建福州    ↑     57.7 正常 ↓     43.5 正常 ↕   184.8 ϟ    14.2
移动|浙江杭州5G  ↑     79.4 正常 ↓     87.7 正常 ↕   213.9 ϟ    16.7
移动|四川成都    ↑    102.6 正常 ↓    104.8 正常 ↕   219.4 ϟ    13.6
移动|甘肃兰州    ↑     99.8 正常 ↓     31.4 正常 ↕   228.8 ϟ     3.2
--------------------------------------------------------------------
电信|上海        ↑     95.5 正常 ↓      0.0 断流 ↕   162.7 ϟ     2.7
电信|天津5G      ↑      0.0 取消 ↓      0.0 取消 ↕     0.0 ϟ     0.0
电信|甘肃兰州    ↑      0.0 取消 ↓      0.0 取消 ↕     0.0 ϟ     0.0
联通|上海5G      ↑      0.0 取消 ↓      0.0 取消 ↕     0.0 ϟ     0.0
联通|江苏无锡    ↑      0.0 断流 ↓      0.0 断流 ↕   177.0 ϟ     5.7
联通|江西南昌    ↑      0.0 失败 ↓      0.0 失败 ↕     0.0 ϟ     0.0
联通|河南郑州5G  ↑      4.8 断流 ↓     30.2 正常 ↕   162.2 ϟ     6.2
联通|湖南长沙5G  ↑      0.0 取消 ↓      0.0 取消 ↕     0.0 ϟ     0.0
联通|辽宁沈阳    ↑      1.3 断流 ↓      0.0 断流 ↕   172.0 ϟ    13.2
移动|北京        ↑      0.0 取消 ↓      0.0 取消 ↕     0.0 ϟ     0.0
移动|陕西西安5G  ↑      0.0 断流 ↓     69.0 正常 ↕   287.2 ϟ    26.4
————————————————————————————————————————————————————————————————————
```

### 多地回城测试

```shell
----------------------------------------------------------------------
北京电信
traceroute to 219.141.147.210 (219.141.147.210), 30 hops max, 32 byte packets
 1  zgocloud.xtom.de (194.36.27.1)  2.10 ms  AS3214  Netherlands, North Holland, Amsterdam, xtom.com
 2  a1.cr01.ams01.xtom.nl (91.200.241.196)  1.16 ms  *  Netherlands, North Holland, Amsterdam, xtom.com
 3  a1.waves.cr01.fra01.xtom.de (91.200.241.188)  6.55 ms  *  Germany, Hesse, Frankfurt, xtom.com
 4  145.14.73.5  6.82 ms  AS4809  Germany, Hesse, Frankfurt, cteurope.net
 5  5.154.154.74  7.29 ms  *  Germany, Hesse, Frankfurt, ctclouds.com
 6  5.154.156.38  130.88 ms  *  Germany, Hesse, Frankfurt, ctclouds.com
 7  59.43.181.241  139.92 ms  *  China, Beijing, ChinaTelecom
 8  59.43.19.93  163.54 ms  *  China, Beijing, ChinaTelecom
 9  *
10  *
11  2.254.120.106.static.bjtelecom.net (106.120.254.2)  171.24 ms  AS4847  China, Beijing, ChinaTelecom
12  bj141-147-210.bjtelecom.net (219.141.147.210)  164.80 ms  AS4847  China, Beijing, ChinaTelecom

----------------------------------------------------------------------
上海电信
traceroute to 202.96.209.133 (202.96.209.133), 30 hops max, 32 byte packets
 1  zgocloud.xtom.de (194.36.27.1)  2.63 ms  AS3214  Netherlands, North Holland, Amsterdam, xtom.com
 2  a1.cr01.ams01.xtom.nl (91.200.241.196)  0.36 ms  *  Netherlands, North Holland, Amsterdam, xtom.com
 3  a1.waves.cr01.fra01.xtom.de (91.200.241.188)  6.55 ms  *  Germany, Hesse, Frankfurt, xtom.com
 4  145.14.73.5  7.08 ms  AS4809  Germany, Hesse, Frankfurt, cteurope.net
 5  5.154.154.74  7.32 ms  *  Germany, Hesse, Frankfurt, ctclouds.com
 6  5.154.156.38  131.11 ms  *  Germany, Hesse, Frankfurt, ctclouds.com
 7  59.43.181.221  139.58 ms  *  China, Beijing, ChinaTelecom
 8  59.43.19.93  168.29 ms  *  China, Beijing, ChinaTelecom
 9  59.43.46.82  174.91 ms  *  China, Shanghai, ChinaTelecom
10  101.95.88.210  169.15 ms  AS4812  China, Shanghai, ChinaTelecom
11  61.152.1.162  165.44 ms  AS4812  China, Shanghai, ChinaTelecom
12  ns-pd.online.sh.cn (202.96.209.133)  167.26 ms  AS4812  China, Shanghai, ChinaTelecom

----------------------------------------------------------------------
深圳电信
traceroute to 58.60.188.222 (58.60.188.222), 30 hops max, 32 byte packets
 1  zgocloud.xtom.de (194.36.27.1)  52.98 ms  AS3214  Netherlands, North Holland, Amsterdam, xtom.com
 2  a1.cr01.ams01.xtom.nl (91.200.241.196)  0.49 ms  *  Netherlands, North Holland, Amsterdam, xtom.com
 3  a1.waves.cr01.fra01.xtom.de (91.200.241.188)  9.75 ms  *  Germany, Hesse, Frankfurt, xtom.com
 4  145.14.73.5  6.81 ms  AS4809  Germany, Hesse, Frankfurt, cteurope.net
 5  5.154.154.81  6.73 ms  *  Germany, Hesse, Frankfurt, ctclouds.com
 6  5.154.156.38  131.02 ms  *  Germany, Hesse, Frankfurt, ctclouds.com
 7  59.43.182.189  131.17 ms  *  China, Beijing, ChinaTelecom
 8  59.43.19.97  167.79 ms  *  China, Beijing, ChinaTelecom
 9  59.43.145.62  185.57 ms  *  China, Guangdong, Guangzhou, ChinaTelecom
10  59.43.132.122  180.69 ms  *  China, Guangdong, Shenzhen, ChinaTelecom
11  114.104.38.59.broad.fs.gd.dynamic.163data.com.cn (59.38.104.114)  181.25 ms  AS4134  China, Guangdong, Shenzhen, ChinaTelecom
12  *
13  58.60.188.222  185.17 ms  AS4134  China, Guangdong, Shenzhen, ChinaTelecom

----------------------------------------------------------------------
北京联通
traceroute to 202.106.50.1 (202.106.50.1), 30 hops max, 32 byte packets
 1  zgocloud.xtom.de (194.36.27.1)  1.88 ms  AS3214  Netherlands, North Holland, Amsterdam, xtom.com
 2  a1.cr01.ams01.xtom.nl (91.200.241.196)  0.34 ms  *  Netherlands, North Holland, Amsterdam, xtom.com
 3  a5.waves.cr01.lon08.xtom.uk (91.200.241.73)  6.99 ms  *  United Kingdom, London, xtom.com
 4  162.255.48.9  9.80 ms  AS10099  United Kingdom, London, ChinaUnicom
 5  162.255.48.202  20.98 ms  AS10099  United Kingdom, London, ChinaUnicom
 6  162.255.48.229  177.43 ms  AS10099  United Kingdom, London, ChinaUnicom
 7  210.78.28.157  152.83 ms  *  China, Beijing, ChinaUnicom
 8  210.78.30.146  151.75 ms  *  China, Beijing, ChinaUnicom
 9  219.158.32.189  157.76 ms  AS4837  China, Beijing, ChinaUnicom
10  219.158.5.117  165.16 ms  AS4837  China, Beijing, ChinaUnicom
11  *
12  202.106.50.1  154.02 ms  AS4808  China, Beijing, ChinaUnicom

----------------------------------------------------------------------
上海联通
traceroute to 210.22.97.1 (210.22.97.1), 30 hops max, 32 byte packets
 1  zgocloud.xtom.de (194.36.27.1)  2.96 ms  AS3214  Netherlands, North Holland, Amsterdam, xtom.com
 2  a1.cr01.ams01.xtom.nl (91.200.241.196)  1.73 ms  *  Netherlands, North Holland, Amsterdam, xtom.com
 3  a5.waves.cr01.lon08.xtom.uk (91.200.241.73)  7.16 ms  *  United Kingdom, London, xtom.com
 4  162.255.48.9  10.41 ms  AS10099  United Kingdom, London, ChinaUnicom
 5  162.255.48.202  24.32 ms  AS10099  United Kingdom, London, ChinaUnicom
 6  162.255.48.229  177.26 ms  AS10099  United Kingdom, London, ChinaUnicom
 7  210.78.28.153  152.81 ms  *  China, Beijing, ChinaUnicom
 8  218.105.131.126  183.87 ms  AS9929  China, Shanghai, ChinaUnicom
 9  218.105.2.174  181.75 ms  AS9929  China, Shanghai, ChinaUnicom
10  219.158.32.1  175.91 ms  AS4837  China, Shanghai, ChinaUnicom
11  *
12  139.226.210.94  182.45 ms  AS17621  China, Shanghai, ChinaUnicom
13  112.64.250.202  171.24 ms  AS17621  China, Shanghai, ChinaUnicom
14  210.22.97.1  175.28 ms  AS17621  China, Shanghai, ChinaUnicom

----------------------------------------------------------------------
深圳联通
traceroute to 210.21.196.6 (210.21.196.6), 30 hops max, 32 byte packets
 1  zgocloud.xtom.de (194.36.27.1)  41.37 ms  AS3214  Netherlands, North Holland, Amsterdam, xtom.com
 2  a1.cr01.ams01.xtom.nl (91.200.241.196)  0.29 ms  *  Netherlands, North Holland, Amsterdam, xtom.com
 3  a5.waves.cr01.lon08.xtom.uk (91.200.241.73)  8.36 ms  *  United Kingdom, London, xtom.com
 4  162.255.48.9  9.99 ms  AS10099  United Kingdom, London, ChinaUnicom
 5  162.255.48.202  21.69 ms  AS10099  United Kingdom, London, ChinaUnicom
 6  162.255.48.201  178.28 ms  AS10099  United Kingdom, London, ChinaUnicom
 7  210.78.28.153  152.04 ms  *  China, Beijing, ChinaUnicom
 8  218.105.131.146  190.93 ms  AS9929  China, Guangdong, Guangzhou, ChinaUnicom
 9  210.14.161.66  195.49 ms  *  China, Guangdong, Guangzhou, ChinaUnicom
10  219.158.32.21  195.12 ms  AS4837  China, Guangdong, Guangzhou, ChinaUnicom
11  *
12  157.148.0.58  197.40 ms  AS17816  China, Guangdong, Guangzhou, ChinaUnicom
13  120.80.144.34  210.56 ms  AS17623  China, Guangdong, Shenzhen, ChinaUnicom
14  dns2-ftcg.gdsz.cncnet.net (210.21.196.6)  187.93 ms  AS17623  China, Guangdong, Shenzhen, ChinaUnicom

----------------------------------------------------------------------
北京移动
traceroute to 221.179.155.161 (221.179.155.161), 30 hops max, 32 byte packets
 1  zgocloud.xtom.de (194.36.27.1)  52.74 ms  AS3214  Netherlands, North Holland, Amsterdam, xtom.com
 2  a1.cr01.ams01.xtom.nl (91.200.241.196)  0.33 ms  *  Netherlands, North Holland, Amsterdam, xtom.com
 3  a5.waves.cr01.lon08.xtom.uk (91.200.241.73)  7.36 ms  *  United Kingdom, London, xtom.com
 4  162.255.48.9  7.63 ms  AS10099  United Kingdom, London, ChinaUnicom
 5  162.255.48.202  19.25 ms  AS10099  United Kingdom, London, ChinaUnicom
 6  162.255.48.201  176.46 ms  AS10099  United Kingdom, London, ChinaUnicom
 7  210.78.28.153  151.04 ms  *  China, Beijing, ChinaUnicom
 8  210.78.30.166  159.35 ms  *  China, Beijing, ChinaUnicom
 9  219.158.32.45  162.30 ms  AS4837  China, Beijing, ChinaUnicom
10  *
11  *
12  221.183.46.174  209.07 ms  AS9808  China, Beijing, ChinaMobile
13  221.183.130.134  208.68 ms  AS9808  China, Beijing, ChinaMobile
14  cachedns03.bj.chinamobile.com (221.179.155.161)  209.59 ms  AS56048  China, Beijing, ChinaMobile

----------------------------------------------------------------------
上海移动
traceroute to 211.136.112.200 (211.136.112.200), 30 hops max, 32 byte packets
 1  zgocloud.xtom.de (194.36.27.1)  6.72 ms  AS3214  Netherlands, North Holland, Amsterdam, xtom.com
 2  a1.cr01.ams01.xtom.nl (91.200.241.196)  0.46 ms  *  Netherlands, North Holland, Amsterdam, xtom.com
 3  a5.waves.cr01.lon08.xtom.uk (91.200.241.73)  8.10 ms  *  United Kingdom, London, xtom.com
 4  162.255.48.9  8.70 ms  AS10099  United Kingdom, London, ChinaUnicom
 5  162.255.48.230  21.26 ms  AS10099  United Kingdom, London, ChinaUnicom
 6  162.255.48.229  178.54 ms  AS10099  United Kingdom, London, ChinaUnicom
 7  210.78.28.153  153.86 ms  *  China, Beijing, ChinaUnicom
 8  218.105.131.126  184.59 ms  AS9929  China, Shanghai, ChinaUnicom
 9  218.105.2.174  182.98 ms  AS9929  China, Shanghai, ChinaUnicom
10  219.158.32.1  180.52 ms  AS4837  China, Shanghai, ChinaUnicom
11  219.158.46.142  217.53 ms  AS4837  China, Shanghai, ChinaUnicom
12  *
13  221.183.39.138  227.58 ms  AS9808  China, Shanghai, ChinaMobile
14  221.181.125.178  223.79 ms  AS24400  China, Shanghai, ChinaMobile
15  211.136.112.252  227.46 ms  AS24400  China, Shanghai, ChinaMobile
16  211.136.112.200  218.01 ms  AS24400  China, Shanghai, ChinaMobile

----------------------------------------------------------------------
深圳移动
traceroute to 120.196.165.24 (120.196.165.24), 30 hops max, 32 byte packets
 1  zgocloud.xtom.de (194.36.27.1)  3.44 ms  AS3214  Netherlands, North Holland, Amsterdam, xtom.com
 2  a1.cr01.ams01.xtom.nl (91.200.241.196)  0.36 ms  *  Netherlands, North Holland, Amsterdam, xtom.com
 3  a5.waves.cr01.lon08.xtom.uk (91.200.241.73)  8.32 ms  *  United Kingdom, London, xtom.com
 4  162.255.48.9  8.55 ms  AS10099  United Kingdom, London, ChinaUnicom
 5  162.255.48.230  21.69 ms  AS10099  United Kingdom, London, ChinaUnicom
 6  162.255.48.229  178.24 ms  AS10099  United Kingdom, London, ChinaUnicom
 7  210.78.28.145  160.97 ms  *  China, Beijing, ChinaUnicom
 8  218.105.131.122  193.75 ms  AS9929  China, Guangdong, Guangzhou, ChinaUnicom
 9  210.14.161.150  187.25 ms  *  China, Guangdong, Guangzhou, ChinaUnicom
10  219.158.32.17  201.46 ms  AS4837  China, Guangdong, Guangzhou, ChinaUnicom
11  *
12  *
13  221.183.71.82  207.70 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
14  221.183.110.170  227.58 ms  AS9808  China, Guangdong, Guangzhou, ChinaMobile
15  ns6.gd.cnmobile.net (120.196.165.24)  209.13 ms  AS56040  China, Guangdong, Shenzhen, ChinaMobile

----------------------------------------------------------------------
成都教育网
traceroute to 202.112.14.151 (202.112.14.151), 30 hops max, 32 byte packets
 1  zgocloud.xtom.de (194.36.27.1)  64.41 ms  AS3214  Netherlands, North Holland, Amsterdam, xtom.com
 2  a1.cr01.ams01.xtom.nl (91.200.241.196)  0.31 ms  *  Netherlands, North Holland, Amsterdam, xtom.com
 3  a5.waves.cr01.lon08.xtom.uk (91.200.241.73)  11.72 ms  *  United Kingdom, London, xtom.com
 4  162.255.48.9  7.34 ms  AS10099  United Kingdom, London, ChinaUnicom
 5  162.255.48.230  21.41 ms  AS10099  United Kingdom, London, ChinaUnicom
 6  162.255.48.201  177.10 ms  AS10099  United Kingdom, London, ChinaUnicom
 7  210.78.28.153  151.10 ms  *  China, Beijing, ChinaUnicom
 8  210.78.30.146  150.36 ms  *  China, Beijing, ChinaUnicom
 9  219.158.32.189  153.87 ms  AS4837  China, Beijing, ChinaUnicom
10  *
11  219.158.5.130  160.99 ms  AS4837  China, Beijing, ChinaUnicom
12  219.158.39.54  154.67 ms  AS4837  China, Beijing, ChinaUnicom
13  101.4.118.29  160.60 ms  AS4538  China, Beijing, CHINAEDU
14  101.4.112.14  167.82 ms  AS4538  China, Shaanxi, Xi'an, CHINAEDU
15  101.4.112.18  179.59 ms  AS4538  China, Sichuan, Chengdu, CHINAEDU
16  101.4.116.242  180.16 ms  AS4538  China, Sichuan, Chengdu, CHINAEDU
17  *
18  *
19  *
20  202.112.14.151  188.32 ms  AS24355  China, Sichuan, Chengdu, CHINAEDU

----------------------------------------------------------------------
```

### 国内网络监测

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/12/a75fb015f5366a83f29aa7f08bc517b3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/12/a75fb015f5366a83f29aa7f08bc517b3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/12/a75fb015f5366a83f29aa7f08bc517b3.jpg" alt="" loading="lazy">
</picture>

### Ping.ie

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/12/image-17.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/12/image-17.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/12/image-17.jpg" alt="" loading="lazy">
</picture>