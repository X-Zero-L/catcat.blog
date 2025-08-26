---
tags: [大陆服务器]
title: "[全网首发]腾讯云 SA9 AMD EPYC Turin 机器测试"
published: 2025-04-23
---

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-7-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-7-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-7-scaled.jpg" alt="第九代云服务器发布，高效计算与创新技术" loading="lazy">
</picture>

从月初就催了好久客户经理，今天终于给我发来了上线通知，等不及开了一台直接跑。

**性能完全符合期待，可以迁移了。**

### 标准型 SA9

标准型 SA9 实例是最新一代的标准型实例，基于全新优化虚拟化平台，提供了平衡、稳定的计算、内存和网络资源，是众多应用程序的最佳选择。

标准型 SA9 实例采用的 AMD EPYC™ Turin-Dense 全新处理器，采用最新 DDR5 内存，默认网络优化，最高内网收发能力达6750万 PPS。

#### 实例特点

新一代腾讯云自研星星海双路服务器，搭配 AMD EPYC™ Turin-Dense 处理器。

提供1∶2和1∶4等多种处理器和内存的配比，全核睿频3.4GHz。

6750万 PPS，超高网络收发包能力，满足超高的内网传输需求。

实例网络性能与规格对应，基准带宽25G以下的规格支持突发带宽，规格越高网络转发性能越强，内网带宽上限越高。

支持关闭或开启超线程配置。

支持突发带宽。

## 套餐

- **16x AMD EPYC 9K65 192-Core Processor（3.1GHz）**

- **32 GB DDR5 RAM**

- **300 GB 增强型SSD**

- **1 IPv4 BGP**

## 测评

### CPU

```shell
root@VM-0-4-debian:~# lscpu
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          52 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   16
  On-line CPU(s) list:    0-15
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         Red Hat
  Model name:             AMD EPYC 9K65 192-Core Processor
    BIOS Model name:      3.0  CPU @ 2.0GHz
    BIOS CPU family:      1
    CPU family:           26
    Model:                0
    Thread(s) per core:   2
    Core(s) per socket:   8
    Socket(s):            1
    Stepping:             0
    BogoMIPS:             4500.09
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdp
                          e1gb rdtscp lm constant_tsc rep_good nopl nonstop_tsc cpuid extd_apicid tsc_known_freq pni pclmulqdq monitor ssse3 fma cx16 pcid ss
                          e4_1 sse4_2 x2apic movbe popcnt aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy cr8_legacy abm sse4a misalignsse 3dnowprefe
                          tch osvw topoext perfctr_core invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase bmi1 avx2 smep bmi2 erms invpcid avx512f avx512d
                          q rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves avx512_bf16 clzero xs
                          aveerptr wbnoinvd arat avx512vbmi umip avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid movdiri m
                          ovdir64b fsrm
Virtualization features:  
  Hypervisor vendor:      KVM
  Virtualization type:    full
Caches (sum of all):      
  L1d:                    384 KiB (8 instances)
  L1i:                    256 KiB (8 instances)
  L2:                     8 MiB (8 instances)
  L3:                     64 MiB (2 instances)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-15
Vulnerabilities:          
  Gather data sampling:   Not affected
  Itlb multihit:          Not affected
  L1tf:                   Not affected
  Mds:                    Not affected
  Meltdown:               Not affected
  Mmio stale data:        Not affected
  Reg file data sampling: Not affected
  Retbleed:               Not affected
  Spec rstack overflow:   Not affected
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; Retpolines; IBPB conditional; IBRS_FW; STIBP always-on; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 6 minutes
Processor  : AMD EPYC 9K65 192-Core Processor
CPU cores  : 16 @ 2250.046 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 30.1 GiB
Swap       : 0.0 KiB
Disk       : 300 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-28-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Shenzhen Tencent Computer Systems Company Limited
ASN        : AS45090 Shenzhen Tencent Computer Systems Company Limited
Host       : Tencent Cloud Computing (Beijing) Co., Ltd
Location   : Nanjing, Jiangsu (JS)
Country    : China

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 167.27 MB/s  (41.8k) | 387.55 MB/s   (6.0k)
Write      | 167.71 MB/s  (41.9k) | 389.59 MB/s   (6.0k)
Total      | 334.98 MB/s  (83.7k) | 777.15 MB/s  (12.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 360.16 MB/s    (703) | 355.06 MB/s    (346)
Write      | 379.30 MB/s    (740) | 378.71 MB/s    (369)
Total      | 739.47 MB/s   (1.4k) | 733.78 MB/s    (715)
```

### GeekBench5

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-5.jpg" alt="Geekbench 5 单核1878，多核13418分数" loading="lazy">
</picture>

9754 16c 同款对比

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-8.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-8.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-8.jpg" alt="Geekbench 5得分，单核1193，多核8930" loading="lazy">
</picture>

### GeekBench6

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/04/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/04/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/04/image-6.jpg" alt="Geekbench 6.2.1 单核2233，多核13552分数" loading="lazy">
</picture>

### UnixBench

```shell
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: VM-0-4-debian: GNU/Linux
   OS: GNU/Linux -- 6.1.0-28-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.119-1 (2024-11-22)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 2: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 3: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 4: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 5: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 6: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 7: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 8: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 9: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 10: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 11: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 12: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 13: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 14: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 15: AMD EPYC 9K65 192-Core Processor (4500.1 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   16:48:35 up 28 min,  3 users,  load average: 0.07, 0.29, 0.41; runlevel 2025-04-23

------------------------------------------------------------------------
Benchmark Run: Wed Apr 23 2025 16:48:35 - 17:16:31
16 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       73344241.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     9195.8 MWIPS (10.0 s, 7 samples)
Execl Throughput                               6080.5 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2074196.6 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          524838.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       6968505.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3236546.7 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 347309.8 lps   (10.0 s, 7 samples)
Process Creation                              21229.4 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  21967.6 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  14023.4 lpm   (60.0 s, 2 samples)
System Call Overhead                        3218339.2 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   73344241.6   6284.9
Double-Precision Whetstone                       55.0       9195.8   1672.0
Execl Throughput                                 43.0       6080.5   1414.1
File Copy 1024 bufsize 2000 maxblocks          3960.0    2074196.6   5237.9
File Copy 256 bufsize 500 maxblocks            1655.0     524838.9   3171.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    6968505.9  12014.7
Pipe Throughput                               12440.0    3236546.7   2601.7
Pipe-based Context Switching                   4000.0     347309.8    868.3
Process Creation                                126.0      21229.4   1684.9
Shell Scripts (1 concurrent)                     42.4      21967.6   5181.0
Shell Scripts (8 concurrent)                      6.0      14023.4  23372.4
System Call Overhead                          15000.0    3218339.2   2145.6
                                                                   ========
System Benchmarks Index Score                                        3458.9

------------------------------------------------------------------------
Benchmark Run: Wed Apr 23 2025 17:16:31 - 17:44:32
16 CPUs in system; running 16 parallel copies of tests

Dhrystone 2 using register variables      791604941.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   136753.8 MWIPS (10.0 s, 7 samples)
Execl Throughput                              55427.1 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      20168482.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         5938721.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      24978542.6 KBps  (30.0 s, 2 samples)
Pipe Throughput                            38016699.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                3761241.1 lps   (10.0 s, 7 samples)
Process Creation                             198490.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                 161233.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  21065.6 lpm   (60.0 s, 2 samples)
System Call Overhead                       42985767.0 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  791604941.5  67832.5
Double-Precision Whetstone                       55.0     136753.8  24864.3
Execl Throughput                                 43.0      55427.1  12890.0
File Copy 1024 bufsize 2000 maxblocks          3960.0   20168482.5  50930.5
File Copy 256 bufsize 500 maxblocks            1655.0    5938721.0  35883.5
File Copy 4096 bufsize 8000 maxblocks          5800.0   24978542.6  43066.5
Pipe Throughput                               12440.0   38016699.3  30560.0
Pipe-based Context Switching                   4000.0    3761241.1   9403.1
Process Creation                                126.0     198490.7  15753.2
Shell Scripts (1 concurrent)                     42.4     161233.9  38026.9
Shell Scripts (8 concurrent)                      6.0      21065.6  35109.3
System Call Overhead                          15000.0   42985767.0  28657.2
                                                                   ========
System Benchmarks Index Score                                       28574.9
```

### PassMark PerformanceTest Linux

```shell
AMD EPYC 9K65 192-Core Processor (x86_64)
8 cores @ 0 MHz  |  30.1 GiB RAM
Number of Processes: 16  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          29424
  Integer Math                     89490 Million Operations/s
  Floating Point Math              54521 Million Operations/s
  Prime Numbers                    139 Million Primes/s
  Sorting                          41618 Thousand Strings/s
  Encryption                       17939 MB/s
  Compression                      342168 KB/s
  CPU Single Threaded              3219 Million Operations/s
  Physics                          3082 Frames/s
  Extended Instructions (SSE)      27514 Million Matrices/s

Memory Mark:                       2601
  Database Operations              9633 Thousand Operations/s
  Memory Read Cached               28558 MB/s
  Memory Read Uncached             27286 MB/s
  Memory Write                     27462 MB/s
  Available RAM                    27606 Megabytes
  Memory Latency                   79 Nanoseconds
  Memory Threaded                  54123 MB/s
--------------------------------------------------------------------------
```

### 融合怪Go 测试

```shell
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC 9K65 192-Core Processor @2250.046 MHz
 CPU 数量            : 16 Virtual CPU(s)
 CPU 缓存            : L1: 640 KB / L2: 8 MB / L3: 64 MB
 GPU 型号            : GD 5446
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 845.20 MB / 30.10 GB
 气球驱动            : ✔️ Enabled
 内核页合并          : ❌ Undetected
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 3.19 GB / 49.10 GB
 启动盘路径          : /dev/vda1
 系统                : debian 12.8 [x86_64] 
 内核                : 6.1.0-28-amd64
 系统在线时间        : 0 days, 00 hours, 22 minutes
 时区                : CST
 负载                : 0.01 / 0.42 / 0.46
 虚拟化架构          : KVM
 NAT类型             : Port Restricted Cone
 TCP加速方式         : cubic
 IPV4 ASN            : AS213750 KUXUEYUN LTD
 IPV4 Location       : Draper / Utah / United States
 IPV4 Active IPs     : 128/256 (subnet /24)
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   4637.12
16 线程测试(多核)得分:  38987.73
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 27576.99 MB/s(28.92K IOPS, 5s)
单线程顺序读速度: 71508.31 MB/s(74.98K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       153.02 MB/s(38.3k)      153.42 MB/s(38.4k)      306.44 MB/s(76.6k)      
/root         64k      386.27 MB/s(6035)       388.30 MB/s(6067)       774.57 MB/s(12.1k)      
/root         512k     359.09 MB/s(701)        378.17 MB/s(738)        737.26 MB/s(1439)       
/root         1m       355.25 MB/s(346)        378.91 MB/s(370)        734.17 MB/s(716)        
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 89 [8] 
VPN得分(越低越好): 22 [8] 
代理得分(越低越好): 8 [8]
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 4 [8] 
欺诈得分(越低越好): 0 [1 E] 
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.002 (Low) [A] 
公司滥用得分(越低越好): 0.0039 (Low) [A] 
威胁级别: low [9] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: unknown [C] hosting [7] business [8 A] corporate [9] DataCenter/WebHosting/Transit [3]
公司类型: business [A] hosting [7]
是否云提供商: Yes [7 D] 
是否数据中心: No [5 6 8 A C] Yes [1]
是否移动设备: Yes [E] No [5 A C]
是否代理: No [1 4 5 6 7 8 9 A C D E] 
是否VPN: No [1 6 7 A C D E] 
是否Tor: No [1 3 6 7 8 A C D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [7 8 C D]
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 313(Total_Check) 0(Clean) 3(Blacklisted) 12(Other) 
--------------------------------------邮件端口检测--------------------------------------
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
Sina      ✘     ✔     ✔     ✘     ✔     ✘    
Apple     ✘     ✔     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✘     ✘     ✔     ✘     ✔     ✘    
Namecrane ✘     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✘     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
----------------------------------三网ICMP的PING值检测----------------------------------
电信Suzhou5G       8 | 电信苏州           8 | 电信南京           9 | 
电信江苏          10 | 电信扬州          12 | 电信武汉          12 | 
电信安徽          12 | 电信杭州          12 | 电信上海          13 | 
电信长沙          17 | 电信河南          19 | 电信山东          19 | 
电信湖北          19 | 电信浙江          20 | 电信天津          23 | 
电信湖南          23 | 电信陕西          23 | 电信福建          24 | 
电信河北          25 | 电信山西          26 | 电信广西壮族      28 | 
电信甘肃          28 | 电信四川          28 | 电信北京          29 | 
电信广东          30 | 电信江西          30 | 电信内蒙古        31 | 
电信贵州          33 | 电信重庆          35 | 电信海南          36 | 
电信宁夏          36 | 电信辽宁          39 | 电信云南          41 | 
电信吉林          41 | 电信黑龙江        43 | 电信青海          44 | 
电信西藏          52 | 电信新疆          70 | 
移动江苏           4 | 移动安徽           7 | 移动浙江          12 | 
移动上海          12 | 移动杭州          13 | 移动山东          13 | 
移动江西          15 | 移动杭州5G        16 | 移动湖北          20 | 
移动湖南          22 | 移动天津          22 | 移动Fujian        23 | 
移动福州          23 | 移动陕西          24 | 移动福建          25 | 
移动山西          28 | 移动内蒙古        28 | 移动北京          30 | 
移动河北          30 | 移动宁夏          32 | 移动重庆          33 | 
移动甘肃          34 | 移动四川          35 | 移动吉林          37 | 
移动广西壮族      38 | 移动黑龙江        39 | 移动辽宁          39 | 
移动贵州          40 | 移动成都          42 | 移动海南          44 | 
移动青海          47 | 移动云南          48 | 移动新疆          56 | 
移动西藏          67 | 
联通江西           9 | 联通上海5G        10 | 联通上海          11 | 
联通安徽          12 | 联通浙江          14 | 联通山东          15 | 
联通江苏          15 | 联通河南          17 | 联通湖北          17 | 
联通湖南          22 | 联通天津          23 | 联通福建          24 | 
联通福州          24 | 联通河北          25 | 联通内蒙古        25 | 
联通陕西          27 | 联通山西          29 | 联通北京          30 | 
联通太原市        30 | 联通甘肃          30 | 联通宁夏          30 | 
联通重庆          31 | 联通黑龙江        31 | 联通辽宁          33 | 
联通贵州          34 | 联通广东          35 | 联通吉林          35 | 
联通海南          39 | 联通四川          40 | 联通云南          42 | 
联通广西壮族      44 | 联通青海          46 | 联通西藏          55 | 
联通新疆          61 | 
```