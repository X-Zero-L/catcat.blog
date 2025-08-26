---
title: "猫猫 AMD Ryzen 9950X 服务器 测试"
published: 2025-01-04
categories: 
  - "大陆服务器"
  - "vps"
coverImage: "GUeGukGbwAAUDZj.jpg"
---

## 机器配置

| 名称 | 值 |
| --- | --- |
| **CPU** | **AMD Ryzen 9 9950X 16-Core Processor** |
| **Memory** | **4 x 48 GB DDR5-5600MT/s Samsung** |
| **Disk** | **2\*2T Samsung 990Pro** |
| **Traffic/Speed** | **1000M（In）/ 50M （out）杭州BGP机房** |

## 测评

### CPU

```
root@catcat:~/scripts# lscpu
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          48 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   32
  On-line CPU(s) list:    0-31
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         Advanced Micro Devices, Inc.
  Model name:             AMD Ryzen 9 9950X 16-Core Processor
    BIOS Model name:      AMD Ryzen 9 9950X 16-Core Processor   CPU @ 4.3GHz
    BIOS CPU family:      107
    CPU family:           26
    Model:                68
    Thread(s) per core:   2
    Core(s) per socket:   16
    Socket(s):            1
    Stepping:             0
    Frequency boost:      enabled
    CPU(s) scaling MHz:   34%
    CPU max MHz:          8839.3555
    CPU min MHz:          3000.0000
    BogoMIPS:             8584.34
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm const                          ant_tsc rep_good amd_lbr_v2 nopl nonstop_tsc cpuid extd_apicid aperfmperf rapl pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 movbe popcnt aes xsav                          e avx f16c rdrand lahf_lm cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce topoext perfctr_core perfctr_nb                           bpext perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba perfmon_v2 ibrs ibpb stibp ibrs_enhanced vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2                           erms invpcid cqm rdt_a avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves cq                          m_llc cqm_occup_llc cqm_mbm_total cqm_mbm_local avx_vnni avx512_bf16 clzero irperf xsaveerptr rdpru wbnoinvd cppc arat npt lbrv svm_lock nrip_save tsc_                          scale vmcb_clean flushbyasid decodeassists pausefilter pfthreshold avic v_vmsave_vmload vgif x2avic v_spec_ctrl avx512vbmi umip pku ospke avx512_vbmi2 
                          gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid bus_lock_detect movdiri movdir64b overflow_recov succor smca fsrm avx512_vp2inter                          sect flush_l1d amd_lbr_pmc_freeze
Virtualization features:  
  Virtualization:         AMD-V
Caches (sum of all):      
  L1d:                    768 KiB (16 instances)
  L1i:                    512 KiB (16 instances)
  L2:                     16 MiB (16 instances)
  L3:                     64 MiB (2 instances)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-31
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
  Spectre v2:             Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP always-on; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 51 minutes
Processor  : AMD Ryzen 9 9950X 16-Core Processor
CPU cores  : 32 @ 3000.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 186.3 GiB
Swap       : 0.0 KiB
Disk       : 1.8 TiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-27-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : CHINA UNICOM China169 Backbone
ASN        : AS4837 CHINA UNICOM China169 Backbone
Host       : Hangzhou Sulian Information Technology Co., ltd
Location   : Beijing, Beijing (BJ)
Country    : China

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.17 GB/s   (544.8k) | 1.76 GB/s    (27.5k)
Write      | 2.18 GB/s   (546.2k) | 1.76 GB/s    (27.6k)
Total      | 4.36 GB/s   (1091.1k) | 3.53 GB/s    (55.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.96 GB/s     (5.7k) | 3.42 GB/s     (3.3k)
Write      | 3.12 GB/s     (6.0k) | 3.65 GB/s     (3.5k)
Total      | 6.08 GB/s    (11.8k) | 7.08 GB/s     (6.9k)
```

### GeekBench 5

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-6.jpg" alt="" loading="lazy">
</picture>

### GeekBench 6

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-8.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-8.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-8.jpg" alt="" loading="lazy">
</picture>

### 机器查看

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-7.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-7.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-7.jpg" alt="" loading="lazy">
</picture>

### 融合怪测试

```
-------------------------------------VPS融合怪测试-------------------------------------
版本：v0.1.4
测评频道: https://t.me/vps_reviews
Go项目地址：https://github.com/oneclickvirt/ecs
Shell项目地址：https://github.com/spiritLHLS/ecs
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD Ryzen 9 9950X 16-Core Processor @ 3000.000 MHz
 CPU 数量            : 32 Physical CPU(s)
 CPU 缓存            : 1024 KB
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ❌ Disabled
 内存                : 2.00 GB / 186.34 GB
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 2.33 GB / 1831.27 GB
 启动盘路径          : /dev/nvme0n1p2
 系统                : debian 12.8 [x86_64] 
 内核                : 6.1.0-27-amd64
 系统在线时间        : 0 days, 01 hours, 14 minutes
 时区                : CST
 负载                : 0.03 / 0.45 / 0.87
 虚拟化架构          : Dedicated (No visible signage)
 NAT类型             : Full Cone
 TCP加速方式         : cubic
 IPV4 ASN            : AS56041 China Mobile communications corporation
 IPV4 Location       : Hangzhou / Zhejiang Sheng / China
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   7040.41
32 线程测试(多核)得分:  113371.76
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 40091.63 MB/s(42.04K IOPS, 5s)
单线程顺序读速度: 108150.97 MB/s(113.40K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       2.26 GB/s(564.8k)       2.27 GB/s(566.3k)       4.52 GB/s(1131.1k)      
/root         64k      1.75 GB/s(27.4k)        1.76 GB/s(27.6k)        3.52 GB/s(55.0k)        
/root         512k     2.98 GB/s(5824)         3.14 GB/s(6134)         6.12 GB/s(12.0k)        
/root         1m       3.43 GB/s(3353)         3.66 GB/s(3576)         7.10 GB/s(6929)         
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 0 [8] 
VPN得分(越低越好): 99 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8]
欺诈得分(越低越好): 0 [1 E] 
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0001 (Very Low) [A] 
公司滥用得分(越低越好): 0.0049 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 61 [2]  恶意记录数: 2 [2]  可疑记录数: 0 [2]  无记录数: 31 [2]  
安全信息:
使用类型: business [8] corporate [9] hosting - moderate probability [C] hosting [0 7] DataCenter/WebHosting/Transit [3] isp [A]
公司类型: isp [7] business [A] hosting [0]
是否云提供商: Yes [7 D] 
是否数据中心: No [1 5 6 8 C] Yes [0 A]
是否移动设备: No [A C] Yes [5 E]
是否代理: No [0 1 4 5 6 7 8 9 A B C D E] 
是否VPN: No [0 1 6 7 A C D E] 
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
DNS-黑名单: 314(Total_Check) 0(Clean) 6(Blacklisted) 15(Other) 
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
联通上海          13 | 联通福州          17 | 联通天津          24 | 
联通太原市        34 | 联通大连          38 | 联通南充          40 | 
电信杭州          12 | 电信上海          14 | 电信扬州          15 | 
电信宁波          15 | 电信武汉          21 | 电信长沙          25 | 
电信兰州          41 | 移动杭州           4 | 移动福州          19 | 
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
中国香港        144.96 Mbps     55.64 Mbps      34.953398ms     N/A             
日本东京        92.02 Mbps      236.56 Mbps     46.547997ms     N/A             
联通上海5G      38.52 Mbps      874.14 Mbps     9.625681ms      N/A             
联通成都        109.33 Mbps     22.03 Mbps      95.311331ms     N/A             
电信浙江        41.00 Mbps      747.51 Mbps     15.569093ms     N/A             
电信浙江        142.65 Mbps     899.49 Mbps     69.925078ms     N/A             
移动杭州5G      0.07 Mbps       886.84 Mbps     4.675182ms      N/A             
移动Fujian      86.86 Mbps      233.33 Mbps     49.994393ms     N/A             
----------------------------------------------------------------------------------
花费          : 9 分 5 秒
时间          : Sat Jan 4 15:49:09 CST 2025
----------------------------------------------------------------------------------
```

### UnixBench

```
------------------------------------------------------------------------
Benchmark Run:  1月 04 2025 15:51:44 - 16:20:03
32 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables      107449143.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    13702.0 MWIPS (10.0 s, 7 samples)
Execl Throughput                              11160.8 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       3547814.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          901644.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      11819829.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                             5124388.2 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 647563.6 lps   (10.0 s, 7 samples)
Process Creation                              16742.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  25986.8 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  19704.3 lpm   (60.0 s, 2 samples)
System Call Overhead                        4814257.2 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  107449143.4   9207.3
Double-Precision Whetstone                       55.0      13702.0   2491.3
Execl Throughput                                 43.0      11160.8   2595.5
File Copy 1024 bufsize 2000 maxblocks          3960.0    3547814.5   8959.1
File Copy 256 bufsize 500 maxblocks            1655.0     901644.3   5448.0
File Copy 4096 bufsize 8000 maxblocks          5800.0   11819829.0  20379.0
Pipe Throughput                               12440.0    5124388.2   4119.3
Pipe-based Context Switching                   4000.0     647563.6   1618.9
Process Creation                                126.0      16742.3   1328.8
Shell Scripts (1 concurrent)                     42.4      25986.8   6129.0
Shell Scripts (8 concurrent)                      6.0      19704.3  32840.5
System Call Overhead                          15000.0    4814257.2   3209.5
                                                                   ========
System Benchmarks Index Score                                        5138.7

------------------------------------------------------------------------
Benchmark Run:  1月 04 2025 16:20:03 - 16:48:05
32 CPUs in system; running 32 parallel copies of tests

Dhrystone 2 using register variables     1911881653.1 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   383152.5 MWIPS (10.1 s, 7 samples)
Execl Throughput                              61223.5 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      33094901.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks        17478729.7 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      14365242.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                           107363465.4 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                7709229.3 lps   (10.0 s, 7 samples)
Process Creation                             246516.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                 237700.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  29145.1 lpm   (60.0 s, 2 samples)
System Call Overhead                      113136421.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0 1911881653.1 163828.8
Double-Precision Whetstone                       55.0     383152.5  69664.1
Execl Throughput                                 43.0      61223.5  14238.0
File Copy 1024 bufsize 2000 maxblocks          3960.0   33094901.9  83573.0
File Copy 256 bufsize 500 maxblocks            1655.0   17478729.7 105611.7
File Copy 4096 bufsize 8000 maxblocks          5800.0   14365242.9  24767.7
Pipe Throughput                               12440.0  107363465.4  86305.0
Pipe-based Context Switching                   4000.0    7709229.3  19273.1
Process Creation                                126.0     246516.5  19564.8
Shell Scripts (1 concurrent)                     42.4     237700.9  56061.5
Shell Scripts (8 concurrent)                      6.0      29145.1  48575.2
System Call Overhead                          15000.0  113136421.9  75424.3
                                                                   ========
System Benchmarks Index Score                                       49884.3
```

### 硬盘 Smart

#### nvme1n1

```
root@catcat:~/scripts# smartctl -a /dev/nvme1n1
smartctl 7.2 2020-07-07 r5074 [x86_64-linux-6.1.0-27-amd64] (CircleCI)
Copyright (C) 2002-20, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Number:                       Samsung SSD 990 PRO 2TB
Serial Number:                      S7PJNJ0XA00170A
Firmware Version:                   4B2QJXD7
PCI Vendor/Subsystem ID:            0x144d
IEEE OUI Identifier:                0x002538
Total NVM Capacity:                 2,000,398,934,016 [2.00 TB]
Unallocated NVM Capacity:           0
Controller ID:                      1
Number of Namespaces:               1
Namespace 1 Size/Capacity:          2,000,398,934,016 [2.00 TB]
Namespace 1 Utilization:            0
Namespace 1 Formatted LBA Size:     512
Namespace 1 IEEE EUI-64:            002538 4a414008b3
Local Time is:                      Sat Jan  4 16:38:04 2025 CST
Firmware Updates (0x16):            3 Slots, no Reset required
Optional Admin Commands (0x0017):   Security Format Frmw_DL Self_Test
Optional NVM Commands (0x0055):     Comp DS_Mngmt Sav/Sel_Feat Timestmp
Maximum Data Transfer Size:         512 Pages
Warning  Comp. Temp. Threshold:     82 Celsius
Critical Comp. Temp. Threshold:     85 Celsius

Supported Power States
St Op     Max   Active     Idle   RL RT WL WT  Ent_Lat  Ex_Lat
 0 +     9.39W       - - 0  0  0  0        0       0
 1 +     9.39W       - - 1  1  1  1        0       0
 2 +     9.39W       - - 2  2  2  2        0       0
 3 - 0.0400W       - - 3  3  3  3     4200    6800
 4 - 0.0050W       - - 4  4  4  4     2700   21800

Supported LBA Sizes (NSID 0x1)
Id Fmt  Data  Metadt  Rel_Perf
 0 +     512       0         0

=== START OF SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

SMART/Health Information (NVMe Log 0x02)
Critical Warning:                   0x00
Temperature:                        28 Celsius
Available Spare:                    100%
Available Spare Threshold:          10%
Percentage Used:                    0%
Data Units Read:                    64 [32.7 MB]
Data Units Written:                 0
Host Read Commands:                 1,210
Host Write Commands:                0
Controller Busy Time:               0
Power Cycles:                       4
Power On Hours:                     0
Unsafe Shutdowns:                   1
Media and Data Integrity Errors:    0
Error Information Log Entries:      0
Warning  Comp. Temperature Time:    0
Critical Comp. Temperature Time:    0
Temperature Sensor 1:               28 Celsius
Temperature Sensor 2:               31 Celsius

Error Information (NVMe Log 0x01, max 64 entries)
No Errors Logged
```

#### nvme0n1

```
root@catcat:~/scripts# smartctl -a /dev/nvme0n1
smartctl 7.2 2020-07-07 r5074 [x86_64-linux-6.1.0-27-amd64] (CircleCI)
Copyright (C) 2002-20, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Number:                       Samsung SSD 990 PRO 2TB
Serial Number:                      S6Z2NU0XB02470K
Firmware Version:                   4B2QJXD7
PCI Vendor/Subsystem ID:            0x144d
IEEE OUI Identifier:                0x002538
Total NVM Capacity:                 2,000,398,934,016 [2.00 TB]
Unallocated NVM Capacity:           0
Controller ID:                      1
Number of Namespaces:               1
Namespace 1 Size/Capacity:          2,000,398,934,016 [2.00 TB]
Namespace 1 Utilization:            42,741,243,904 [42.7 GB]
Namespace 1 Formatted LBA Size:     512
Namespace 1 IEEE EUI-64:            002538 4b41a059ae
Local Time is:                      Sat Jan  4 16:38:57 2025 CST
Firmware Updates (0x16):            3 Slots, no Reset required
Optional Admin Commands (0x0017):   Security Format Frmw_DL Self_Test
Optional NVM Commands (0x0055):     Comp DS_Mngmt Sav/Sel_Feat Timestmp
Maximum Data Transfer Size:         512 Pages
Warning  Comp. Temp. Threshold:     82 Celsius
Critical Comp. Temp. Threshold:     85 Celsius

Supported Power States
St Op     Max   Active     Idle   RL RT WL WT  Ent_Lat  Ex_Lat
 0 +     9.39W       - - 0  0  0  0        0       0
 1 +     9.39W       - - 1  1  1  1        0       0
 2 +     9.39W       - - 2  2  2  2        0       0
 3 - 0.0400W       - - 3  3  3  3     4200    6800
 4 - 0.0050W       - - 4  4  4  4     2700   21800

Supported LBA Sizes (NSID 0x1)
Id Fmt  Data  Metadt  Rel_Perf
 0 +     512       0         0

=== START OF SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

SMART/Health Information (NVMe Log 0x02)
Critical Warning:                   0x00
Temperature:                        29 Celsius
Available Spare:                    100%
Available Spare Threshold:          10%
Percentage Used:                    0%
Data Units Read:                    52,430 [26.8 GB]
Data Units Written:                 138,132 [70.7 GB]
Host Read Commands:                 1,302,476
Host Write Commands:                1,401,088
Controller Busy Time:               1
Power Cycles:                       5
Power On Hours:                     2
Unsafe Shutdowns:                   1
Media and Data Integrity Errors:    0
Error Information Log Entries:      0
Warning  Comp. Temperature Time:    0
Critical Comp. Temperature Time:    0
Temperature Sensor 1:               29 Celsius
Temperature Sensor 2:               31 Celsius

Error Information (NVMe Log 0x01, max 64 entries)
No Errors Logged
```

### Ping

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-9.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-9.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-9.jpg" alt="" loading="lazy">
</picture>
