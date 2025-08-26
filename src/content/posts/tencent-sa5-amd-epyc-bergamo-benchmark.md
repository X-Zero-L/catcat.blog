---
tags: [大陆服务器]
title: "腾讯云内测SA5 AMD EPYC Bergamo 机器测试"
published: 2025-01-20
---

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-12.jpg" alt="" loading="lazy">
</picture>

## 套餐

- **4x AMD EPYC Bergamo Cores（3.1GHz）**

- **8 GB DDR5 RAM**

- **50 GB 增强型SSD**

- **1 IPv4 BGP**

## 测评

### CPU Info

```shell
root@catcat:~# lscpu
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          52 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   4
  On-line CPU(s) list:    0-3
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         Smdbmds
  Model name:             AMD EPYC 9754 128-Core Processor
    BIOS Model name:      3.0  CPU @ 2.0GHz
    BIOS CPU family:      1
    CPU family:           25
    Model:                160
    Thread(s) per core:   2
    Core(s) per socket:   2
    Socket(s):            1
    Stepping:             2
    BogoMIPS:             4500.04
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_goo                          d nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand 
                          hypervisor lahf_lm cmp_legacy cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext perfctr_core invpcid_single ibpb vmmcall fsgsbase tsc_adjust bm                          i1 avx2 smep bmi2 erms invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 avx5                          12_bf16 clzero xsaveerptr wbnoinvd arat avx512vbmi umip avx512_vbmi2 vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid fsrm
Virtualization features:  
  Hypervisor vendor:      KVM
  Virtualization type:    full
Caches (sum of all):      
  L1d:                    64 KiB (2 instances)
  L1i:                    64 KiB (2 instances)
  L2:                     2 MiB (2 instances)
  L3:                     16 MiB (1 instance)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-3
Vulnerabilities:          
  Gather data sampling:   Not affected
  Itlb multihit:          Not affected
  L1tf:                   Not affected
  Mds:                    Not affected
  Meltdown:               Not affected
  Mmio stale data:        Not affected
  Reg file data sampling: Not affected
  Retbleed:               Not affected
  Spec rstack overflow:   Mitigation; safe RET, no microcode
  Spec store bypass:      Vulnerable
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; Retpolines; IBPB conditional; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 2 minutes
Processor  : AMD EPYC 9754 128-Core Processor
CPU cores  : 4 @ 2250.022 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 7.4 GiB
Swap       : 0.0 KiB
Disk       : 49.1 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-28-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Tencent Cloud Computing (Beijing) Co
ASN        : AS45090 Shenzhen Tencent Computer Systems Company Limited
Location   : Nanjing, Jiangsu (JS)
Country    : China

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 74.27 MB/s   (18.5k) | 382.03 MB/s   (5.9k)
Write      | 74.47 MB/s   (18.6k) | 384.04 MB/s   (6.0k)
Total      | 148.74 MB/s  (37.1k) | 766.08 MB/s  (11.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 356.71 MB/s    (696) | 350.77 MB/s    (342)
Write      | 375.66 MB/s    (733) | 374.13 MB/s    (365)
Total      | 732.37 MB/s   (1.4k) | 724.90 MB/s    (707)
```

### GeekBench5

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-10.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-10.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-10.jpg" alt="" loading="lazy">
</picture>

### GeekBench6

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-11.jpg" alt="" loading="lazy">
</picture>

### UnixBench

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat: GNU/Linux
   OS: GNU/Linux -- 6.1.0-28-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.119-1 (2024-11-22)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9754 128-Core Processor (4500.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9754 128-Core Processor (4500.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 2: AMD EPYC 9754 128-Core Processor (4500.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 3: AMD EPYC 9754 128-Core Processor (4500.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   19:49:45 up 15 min,  3 users,  load average: 0.06, 0.60, 0.49; runlevel 2025-01-20

------------------------------------------------------------------------
Benchmark Run: Mon Jan 20 2025 19:49:45 - 20:17:44
4 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       47480938.2 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     7733.9 MWIPS (10.0 s, 7 samples)
Execl Throughput                               2515.7 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        589995.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          152035.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1910580.6 KBps  (30.0 s, 2 samples)
Pipe Throughput                              809454.0 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  45470.6 lps   (10.0 s, 7 samples)
Process Creation                               6478.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  10363.6 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   2922.7 lpm   (60.0 s, 2 samples)
System Call Overhead                         656248.8 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   47480938.2   4068.6
Double-Precision Whetstone                       55.0       7733.9   1406.2
Execl Throughput                                 43.0       2515.7    585.0
File Copy 1024 bufsize 2000 maxblocks          3960.0     589995.2   1489.9
File Copy 256 bufsize 500 maxblocks            1655.0     152035.9    918.6
File Copy 4096 bufsize 8000 maxblocks          5800.0    1910580.6   3294.1
Pipe Throughput                               12440.0     809454.0    650.7
Pipe-based Context Switching                   4000.0      45470.6    113.7
Process Creation                                126.0       6478.3    514.2
Shell Scripts (1 concurrent)                     42.4      10363.6   2444.2
Shell Scripts (8 concurrent)                      6.0       2922.7   4871.1
System Call Overhead                          15000.0     656248.8    437.5
                                                                   ========
System Benchmarks Index Score                                        1095.6

------------------------------------------------------------------------
Benchmark Run: Mon Jan 20 2025 20:17:44 - 20:45:44
4 CPUs in system; running 4 parallel copies of tests

Dhrystone 2 using register variables      149907300.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    26056.5 MWIPS (9.9 s, 7 samples)
Execl Throughput                               7819.7 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1919542.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          496069.2 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       6141034.6 KBps  (30.0 s, 2 samples)
Pipe Throughput                             2695678.4 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 344096.9 lps   (10.0 s, 7 samples)
Process Creation                              21912.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  22972.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   3069.1 lpm   (60.0 s, 2 samples)
System Call Overhead                        2257445.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  149907300.9  12845.5
Double-Precision Whetstone                       55.0      26056.5   4737.6
Execl Throughput                                 43.0       7819.7   1818.5
File Copy 1024 bufsize 2000 maxblocks          3960.0    1919542.5   4847.3
File Copy 256 bufsize 500 maxblocks            1655.0     496069.2   2997.4
File Copy 4096 bufsize 8000 maxblocks          5800.0    6141034.6  10588.0
Pipe Throughput                               12440.0    2695678.4   2166.9
Pipe-based Context Switching                   4000.0     344096.9    860.2
Process Creation                                126.0      21912.7   1739.1
Shell Scripts (1 concurrent)                     42.4      22972.9   5418.1
Shell Scripts (8 concurrent)                      6.0       3069.1   5115.1
System Call Overhead                          15000.0    2257445.7   1505.0
                                                                   ========
System Benchmarks Index Score                                        3389.8
```

### 融合怪Go测试

```shell
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC 9754 128-Core Processor @ 2250.022 MHz
 CPU 数量            : 4 Virtual CPU(s)
 CPU 缓存            : 512 KB
 GPU 型号            : GD 5446
 GPU 状态            : 0.000000
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 501.29 MB / 7.38 GB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 3.73 GB / 49.10 GB
 启动盘路径          : /dev/vda1
 系统                : debian 12.9 [x86_64] 
 内核                : 6.1.0-28-amd64
 系统在线时间        : 0 days, 01 hours, 16 minutes
 时区                : CST
 负载                : 0.34 / 8.79 / 8.18
 虚拟化架构          : KVM
 NAT类型             : Port Restricted Cone
 TCP加速方式         : cubic
 IPV4 ASN            : AS45090 Shenzhen Tencent Computer Systems Company Limited
 IPV4 Location       : Nanjing / Jiangsu Sheng / China
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   3513.61
4 线程测试(多核)得分:   7931.45
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 25558.32 MB/s(26.80K IOPS, 5s)
单线程顺序读速度: 42896.41 MB/s(44.98K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       75.13 MB/s(18.8k)       75.33 MB/s(18.8k)       150.47 MB/s(37.6k)      
/root         64k      384.21 MB/s(6003)       386.23 MB/s(6034)       770.44 MB/s(12.0k)      
/root         512k     357.08 MB/s(697)        376.06 MB/s(734)        733.14 MB/s(1431)       
/root         1m       352.42 MB/s(344)        375.89 MB/s(367)        728.30 MB/s(711)        
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 0 [8] 
VPN得分(越低越好): 100 [8]
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 65 [E] 13 [1]
滥用得分(越低越好): 0 [3] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting - high probability [C] business [8] hosting [0 7 9]
公司类型: hosting [0 7] 
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1 C] No [6 8]
是否移动设备: No [C] Yes [E]
是否代理: No [0 1 4 6 7 8 9 B C D] Yes [E]
是否VPN: Yes [E] No [0 1 6 7 C D]
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 C D] 
是否机器人: No [E] 
DNS-黑名单: 314(Total_Check) 0(Clean) 7(Blacklisted) 12(Other) 
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
Apple     ✘     ✘     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✘     ✘     ✔     ✘     ✔     ✘    
Namecrane ✘     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✘     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
----------------------------------三网ICMP的PING值检测----------------------------------
联通上海           8 | 联通天津          17 | 联通福州          27 | 
联通太原市        28 | 联通大连          32 | 联通南充          35 | 
电信上海           8 | 电信扬州          10 | 电信南京          11 | 
电信苏州          11 | 电信武汉          12 | 电信杭州          17 | 
电信宁波          17 | 电信长沙          24 | 移动杭州          12 | 
杭州5G            16 | 移动福州          24 | Beijing           27 | 
```