---
tags: [大陆服务器]
title: "物语云 浙江 Intel Platinum 双路8259CL 测评"
published: 2024-12-27
---

**这个商家我了解不多，目前来看已在NodeSeek活跃一年之久，有小道消息称是雨云的上游。增值电信业务许可证齐全（B1-20213942、京B2-20220324）。工单响应速度确实可以，前几天还找他们定了一台9950X服务器。这次开启了促销，机器性价比还可以，框框挺多，还有电信500M下50M上的无限流量。CPU应该大概率来自AWS，内存是三星DDR4，硬盘是 PM983 PCIE3.0 ，我是真想买个盘过去换掉，通电2w小时。**

## 机器配置

| 名称 | 值 |
| --- | --- |
| **CPU** | **2 x Intel Xeon Platinum 8259CL @ 3.50GHz** |
| **Memory** | **4 x 32 GB DDR4-2133MT/s Samsung M386A4G40DM0-CPB** |
| **Disk** | **960GB SAMSUNG MZQLB960HAJR-00007** |
| **Traffic/Speed** | **500M（In）/ 50M （out）** |

### 测评

### CPUInfo

```shell
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         46 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  96
  On-line CPU(s) list:   0-95
Vendor ID:               GenuineIntel
  BIOS Vendor ID:        Intel(R) Corporation
  Model name:            Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
    BIOS Model name:     Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz  CPU @ 2.5GHz
    BIOS CPU family:     179
    CPU family:          6
    Model:               85
    Thread(s) per core:  2
    Core(s) per socket:  24
    Socket(s):           2
    Stepping:            7
    CPU(s) scaling MHz:  35%
    CPU max MHz:         3500.0000
    CPU min MHz:         1200.0000
    BogoMIPS:            5000.00
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx                          pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf pni pclmulqdq dtes6                         4 ds_cpl vmx smx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid dca sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx                          f16c rdrand lahf_lm abm 3dnowprefetch cpuid_fault epb cat_l3 cdp_l3 invpcid_single intel_ppin ssbd mba ibrs ibpb stibp ibrs_enhan                         ced tpr_shadow vnmi flexpriority ept vpid ept_ad fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid cqm mpx rdt_a avx512f avx512                         dq rdseed adx smap clflushopt clwb intel_pt avx512cd avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves cqm_llc cqm_occup_llc cqm_mb                         m_total cqm_mbm_local dtherm ida arat pln pts hwp hwp_act_window hwp_epp hwp_pkg_req pku ospke avx512_vnni md_clear flush_l1d arch                         _capabilities
Virtualization features: 
  Virtualization:        VT-x
Caches (sum of all):     
  L1d:                   1.5 MiB (48 instances)
  L1i:                   1.5 MiB (48 instances)
  L2:                    48 MiB (48 instances)
  L3:                    71.5 MiB (2 instances)
NUMA:                    
  NUMA node(s):          2
  NUMA node0 CPU(s):     0-23,48-71
  NUMA node1 CPU(s):     24-47,72-95
Vulnerabilities:         
  Gather data sampling:  Vulnerable: No microcode
  Itlb multihit:         KVM: Mitigation: VMX disabled
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Vulnerable: Clear CPU buffers attempted, no microcode; SMT vulnerable
  Retbleed:              Mitigation; Enhanced IBRS
  Spec rstack overflow:  Not affected
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Enhanced IBRS, IBPB conditional, RSB filling, PBRSB-eIBRS SW sequence
  Srbds:                 Not affected
  Tsx async abort:       Mitigation; TSX disabled
```

### 硬件信息

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/12/image-4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/12/image-4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/12/image-4.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/12/70faec188b7d98652edcd7f27d9f92be.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/12/70faec188b7d98652edcd7f27d9f92be.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/12/70faec188b7d98652edcd7f27d9f92be.jpg" alt="" loading="lazy">
</picture>

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 10 hours, 0 minutes
Processor  : Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
CPU cores  : 96 @ 1200.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 125.5 GiB
Swap       : 7.6 GiB
Disk       : 871.3 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-15-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : China Telecom
ASN        : AS136188 NINGBO, ZHEJIANG Province, P.R.China.
Host       : Ningbo Zhuo Zhi Innovation Network Technology Co., Ltd
Location   : Ningbo, Zhejiang (ZJ)
Country    : China

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 646.81 MB/s (161.7k) | 711.68 MB/s  (11.1k)
Write      | 648.52 MB/s (162.1k) | 715.43 MB/s  (11.1k)
Total      | 1.29 GB/s   (323.8k) | 1.42 GB/s    (22.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 785.11 MB/s   (1.5k) | 826.03 MB/s    (806)
Write      | 826.83 MB/s   (1.6k) | 881.04 MB/s    (860)
Total      | 1.61 GB/s     (3.1k) | 1.70 GB/s     (1.6k)
```

### GeekBench5

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/12/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/12/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/12/image-3.jpg" alt="" loading="lazy">
</picture>

### GeekBench6

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/12/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/12/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/12/image-2.jpg" alt="" loading="lazy">
</picture>

### 硬盘信息

```shell
=== START OF INFORMATION SECTION ===
Model Number:                       SAMSUNG MZQLB960HAJR-00007
Serial Number:                      S437NA0MB06174
Firmware Version:                   EDA5702Q
PCI Vendor/Subsystem ID:            0x144d
IEEE OUI Identifier:                0x002538
Total NVM Capacity:                 960,197,124,096 [960 GB]
Unallocated NVM Capacity:           0
Controller ID:                      4
Number of Namespaces:               1
Namespace 1 Size/Capacity:          960,197,124,096 [960 GB]
Namespace 1 Utilization:            40,240,889,856 [40.2 GB]
Namespace 1 Formatted LBA Size:     512
Local Time is:                      Fri Dec 27 14:25:24 2024 CST
Firmware Updates (0x17):            3 Slots, Slot 1 R/O, no Reset required
Optional Admin Commands (0x000f):   Security Format Frmw_DL NS_Mngmt
Optional NVM Commands (0x001f):     Comp Wr_Unc DS_Mngmt Wr_Zero Sav/Sel_Feat
Maximum Data Transfer Size:         512 Pages
Warning  Comp. Temp. Threshold:     87 Celsius
Critical Comp. Temp. Threshold:     88 Celsius
Namespace 1 Features (0x02):        NA_Fields

Supported Power States
St Op     Max   Active     Idle   RL RT WL WT  Ent_Lat  Ex_Lat
 0 +    10.60W       - - 0  0  0  0        0       0

Supported LBA Sizes (NSID 0x1)
Id Fmt  Data  Metadt  Rel_Perf
 0 +     512       0         0
 1 - 4096       0         0

=== START OF SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

SMART/Health Information (NVMe Log 0x02)
Critical Warning:                   0x00
Temperature:                        33 Celsius
Available Spare:                    100%
Available Spare Threshold:          10%
Percentage Used:                    0%
Data Units Read:                    69,034,213 [35.3 TB]
Data Units Written:                 35,303,102 [18.0 TB]
Host Read Commands:                 863,209,085
Host Write Commands:                863,883,598
Controller Busy Time:               663
Power Cycles:                       1,696
Power On Hours:                     19,226
Unsafe Shutdowns:                   1,684
Media and Data Integrity Errors:    0
Error Information Log Entries:      3,790
Warning  Comp. Temperature Time:    0
Critical Comp. Temperature Time:    0
Temperature Sensor 1:               33 Celsius
Temperature Sensor 2:               37 Celsius
Temperature Sensor 3:               40 Celsius

Error Information (NVMe Log 0x01, max 64 entries)
Num   ErrCount  SQId   CmdId  Status  PELoc          LBA  NSID    VS
  0       3790     0  0x0008  0x4004      - 0     0     -
```

### PerformanceTest Linux 测试

```shell
Intel Xeon Platinum 8259CL CPU @ 2.50GHz (x86_64)
48 cores @ 3500 MHz  |  125.5 GiB RAM
Number of Processes: 96  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          46043
  Integer Math                     274771 Million Operations/s
  Floating Point Math              147880 Million Operations/s
  Prime Numbers                    167 Million Primes/s
  Sorting                          89322 Thousand Strings/s
  Encryption                       35139 MB/s
  Compression                      1160018 KB/s
  CPU Single Threaded              1848 Million Operations/s
  Physics                          1475 Frames/s
  Extended Instructions (SSE)      69211 Million Matrices/s

Memory Mark:                       2723
  Database Operations              17684 Thousand Operations/s
  Memory Read Cached               22478 MB/s
  Memory Read Uncached             12868 MB/s
  Memory Write                     9556 MB/s
  Available RAM                    123364 Megabytes
  Memory Latency                   49 Nanoseconds
  Memory Threaded                  69097 MB/s
--------------------------------------------------------------------------
```

### 融合怪脚本测试

```shell
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : Intel(R) Xeon(R) Platinum 8259CL CPU @ 2.50GHz
 CPU 数量            : 96 Physical CPU(s)
 CPU 缓存            : 36608 KB
 GPU 型号            : ASPEED Graphics Family
 GPU 状态            : 0.000000
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 2.25 GB / 125.53 GB
 虚拟内存 Swap       : 0.00 MB / 7.63 GB
 硬盘空间            : 3.84 GB / 871.31 GB
 启动盘路径          : /dev/nvme0n1p2
 系统                : debian 12.8 [x86_64] 
 内核                : 6.1.0-15-amd64
 系统在线时间        : 0 days, 22 hours, 44 minutes
 时区                : CST
 负载                : 7.23 / 123.86 / 114.40
 虚拟化架构          : Dedicated (No visible signage)
 NAT类型             : Full Cone
 TCP加速方式         : cubic
 IPV4 ASN            : AS136188 NINGBO, ZHEJIANG Province, P.R.China.
 IPV4 Location       : Hong Kong / China
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   1025.62
96 线程测试(多核)得分:  80475.99
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 16222.41 MB/s(17.01K IOPS, 5s)
单线程顺序读速度: 20647.44 MB/s(21.65K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       649.22 MB/s(162.3k)     650.93 MB/s(162.7k)     1.30 GB/s(325.0k)       
/root         64k      712.41 MB/s(11.1k)      716.16 MB/s(11.2k)      1.43 GB/s(22.3k)        
/root         512k     781.81 MB/s(1526)       823.35 MB/s(1608)       1.61 GB/s(3134)         
/root         1m       826.03 MB/s(806)        881.05 MB/s(860)        1.71 GB/s(1666)         
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 1 [8]
VPN得分(越低越好): 100 [8] 
代理得分(越低越好): 99 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0004 (Very Low) [A] 
公司滥用得分(越低越好): 0.002 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: hosting [0 7] isp [A] DataCenter/WebHosting/Transit [3] corporate [9] unknown [C] business [8]
公司类型: business [0 A] hosting [7]
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1 6] No [5 8 A C]
是否移动设备: No [5 A C] 
是否代理: No [0 1 4 5 6 7 8 9 A B C D] 
是否VPN: No [0 1 6 7 A C D] 
是否Tor: No [0 1 3 6 7 8 A B C D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
DNS-黑名单: 314(Total_Check) 0(Clean) 7(Blacklisted) 13(Other) 
--------------------------------------邮件端口检测--------------------------------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✔     ✔     ✔     ✘     ✔     ✘    
163       ✔     ✔     ✔     ✘     ✔     ✘    
Sohu      ✔     ✔     ✔     ✘     ✔     ✘    
Yandex    ✔     ✔     ✔     ✘     ✔     ✘    
Gmail     ✔     ✔     ✘     ✘     ✘     ✘    
Outlook   ✔     ✘     ✔     ✘     ✔     ✘    
Office365 ✔     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✔     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✔     ✔     ✔     ✘     ✔     ✘    
MailRU    ✔     ✔     ✘     ✘     ✔     ✘    
AOL       ✔     ✔     ✘     ✘     ✘     ✘    
GMX       ✔     ✘     ✔     ✘     ✔     ✘    
Sina      ✔     ✔     ✔     ✘     ✔     ✘    
----------------------------------三网ICMP的PING值检测----------------------------------
联通上海          12 | 联通天津          21 | 联通福州          25 | 
联通太原市        28 | 联通大连          39 | 联通南充          46 | 
电信杭州           5 | 电信上海          14 | 电信扬州          14 | 
电信武汉          20 | 电信长沙          21 | 电信兰州          36 | 
移动杭州          12 | 移动福州          17 | Beijing           36 | 
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   47.42 Mbps      474.46 Mbps     5.21 ms         Not available.  
新加坡          45.76 Mbps      473.69 Mbps     99.61 ms        0.0%            
中国香港        2.77 Mbps       1.68 Mbps       40.08 ms        0.0%            
联通上海5G      47.02 Mbps      447.70 Mbps     10.31 ms        0.0%            
联通成都        47.03 Mbps      2.38 Mbps       42.76 ms        Not available.  
电信浙江        47.38 Mbps      475.02 Mbps     3.27 ms         Not available.  
移动杭州5G      47.44 Mbps      445.39 Mbps     10.99 ms        0.0%            
----------------------------------------------------------------------------------
花费          : 10 分 36 秒
时间          : Fri Dec 27 11:52:20 CST 2024
----------------------------------------------------------------------------------
```

### byte-unixbench 性能测试

```shell
------------------------------------------------------------------------
Benchmark Run: Fri Dec 27 2024 10:41:21 - 11:09:23
96 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       40897244.8 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     6749.2 MWIPS (9.9 s, 7 samples)
Execl Throughput                               4032.8 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1247444.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          336515.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3672124.1 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1972764.6 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 134576.7 lps   (10.0 s, 7 samples)
Process Creation                               3060.8 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   4666.8 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   3622.4 lpm   (60.0 s, 2 samples)
System Call Overhead                        2055616.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   40897244.8   3504.5
Double-Precision Whetstone                       55.0       6749.2   1227.1
Execl Throughput                                 43.0       4032.8    937.9
File Copy 1024 bufsize 2000 maxblocks          3960.0    1247444.5   3150.1
File Copy 256 bufsize 500 maxblocks            1655.0     336515.5   2033.3
File Copy 4096 bufsize 8000 maxblocks          5800.0    3672124.1   6331.2
Pipe Throughput                               12440.0    1972764.6   1585.8
Pipe-based Context Switching                   4000.0     134576.7    336.4
Process Creation                                126.0       3060.8    242.9
Shell Scripts (1 concurrent)                     42.4       4666.8   1100.7
Shell Scripts (8 concurrent)                      6.0       3622.4   6037.3
System Call Overhead                          15000.0    2055616.6   1370.4
                                                                   ========
System Benchmarks Index Score                                        1550.5

------------------------------------------------------------------------
Benchmark Run: Fri Dec 27 2024 11:09:23 - 11:37:38
96 CPUs in system; running 96 parallel copies of tests

Dhrystone 2 using register variables     2169956173.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   556601.7 MWIPS (10.0 s, 7 samples)
Execl Throughput                              23277.2 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      23386505.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks        16775195.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      23707101.2 KBps  (30.0 s, 2 samples)
Pipe Throughput                           109700846.9 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                2987465.2 lps   (10.0 s, 7 samples)
Process Creation                             107146.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                 119530.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  16134.8 lpm   (60.1 s, 2 samples)
System Call Overhead                      128487839.4 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0 2169956173.4 185943.1
Double-Precision Whetstone                       55.0     556601.7 101200.3
Execl Throughput                                 43.0      23277.2   5413.3
File Copy 1024 bufsize 2000 maxblocks          3960.0   23386505.2  59056.8
File Copy 256 bufsize 500 maxblocks            1655.0   16775195.3 101360.7
File Copy 4096 bufsize 8000 maxblocks          5800.0   23707101.2  40874.3
Pipe Throughput                               12440.0  109700846.9  88184.0
Pipe-based Context Switching                   4000.0    2987465.2   7468.7
Process Creation                                126.0     107146.2   8503.7
Shell Scripts (1 concurrent)                     42.4     119530.7  28191.2
Shell Scripts (8 concurrent)                      6.0      16134.8  26891.3
System Call Overhead                          15000.0  128487839.4  85658.6
                                                                   ========
System Benchmarks Index Score                                       37999.6
```

### X265 BenchMark

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/12/198db5cbc1bbf83aebb2557961534336.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/12/198db5cbc1bbf83aebb2557961534336.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/12/198db5cbc1bbf83aebb2557961534336.jpg" alt="" loading="lazy">
</picture>

### Linux 内核编译测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/12/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/12/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/12/image-5.jpg" alt="" loading="lazy">
</picture>

### 压缩测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/12/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/12/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/12/image-6.jpg" alt="" loading="lazy">
</picture>