---
tags: [eu-server]
title: "FameSystems 德国 AMD 9654 测评"
published: 2024-12-02
---

从去年Bero 发布大内存机器以来，不少商家发现很受买家青睐。目前经常出现的有[Bero](https://catcat.blog/bero-host-%e5%be%b7%e5%9b%bdamd-epyc-7443p-%e6%b5%8b%e8%af%84.html),[HostHatch](https://catcat.blog/hosthatch-jp-amd-7r13.html),[Hostbrr](https://catcat.blog/hostbrr-amd-9454p.htm)。虽然商家对于流量比较抠搜，总体来说通过 cf 缓存的话还是够用。之前一直三代米兰([7763](https://www.nodeseek.com/post-143116-1))促销的时候就想买个试试了，一直忍到了黑五。商家果然推出了两款新型号 AMD EPYC 9654 和 AMD 9900X ，从机器整体来看性价比非常不错，机器也据说是老板全新采购的，机房和 bero 在同一个。购买时可以选择 Linux 和 Windows，这是两个不同架构，Linux 分配 KVM，Windows 分配 HyperV。

\[tip type="danger" title="注意注意"\]目前只支持余额交易，年付请谨慎\[/tip\]

我购买的配置：

- 6x AMD EPYC 9654 Cores

- 24 GB DDR5 RAM

- 300 GB PCIe 5.0 NVME storage space

- 1 IPv4 address

- /64-IPv6 subnet

- 2 Gbit/s (Shared)

- 3 Backup Slots

- Price: €8.00/month **(€ 80.00/yr)**

## 测评

### CPU

```shell
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          52 bits physical, 57 bits virtual
  Byte Order:             Little Endian
CPU(s):                   6
  On-line CPU(s) list:    0-5
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         QEMU
  Model name:             AMD EPYC 9654 96-Core Processor
    BIOS Model name:      pc-i440fx-9.0  CPU @ 2.0GHz
    BIOS CPU family:      1
    CPU family:           25
    Model:                17
    Thread(s) per core:   1
    Core(s) per socket:   6
    Socket(s):            1
    Stepping:             1
    BogoMIPS:             4800.00
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_op                          t pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movb                          e popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnow                          prefetch osvw perfctr_core invpcid_single ssbd ibrs ibpb stibp ibrs_enhanced vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 e                          rms invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xget                          bv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean flushbyasid pausefilter pfthres                          hold v_vmsave_vmload vgif avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcnt                          dq la57 rdpid fsrm flush_l1d arch_capabilities
Virtualization features:  
  Virtualization:         AMD-V
  Hypervisor vendor:      KVM
  Virtualization type:    full
Caches (sum of all):      
  L1d:                    384 KiB (6 instances)
  L1i:                    384 KiB (6 instances)
  L2:                     3 MiB (6 instances)
  L3:                     96 MiB (6 instances)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-5
Vulnerabilities:          
  Gather data sampling:   Not affected
  Itlb multihit:          Not affected
  L1tf:                   Not affected
  Mds:                    Not affected
  Meltdown:               Not affected
  Mmio stale data:        Not affected
  Reg file data sampling: Not affected
  Retbleed:               Not affected
  Spec rstack overflow:   Mitigation; safe RET
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affect                          ed
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```shell
Mon Dec  2 06:55:39 AM CET 2024

Basic System Information:
---------------------------------
Uptime     : 2 days, 19 hours, 5 minutes
Processor  : AMD EPYC 9654 96-Core Processor
CPU cores  : 6 @ 2400.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 23.5 GiB
Swap       : 1024.0 MiB
Disk       : 293.2 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-28-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Oliver Horscht is trading as \"SYNLINQ\"
ASN        : AS44486 Oliver Horscht is trading as \"SYNLINQ\"
Host       : FameSystems GmbH \u0026 Co. KG
Location   : Frankfurt am Main, Hesse (HE)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 429.61 MB/s (107.4k) | 4.45 GB/s    (69.5k)
Write      | 430.75 MB/s (107.6k) | 4.47 GB/s    (69.9k)
Total      | 860.37 MB/s (215.0k) | 8.92 GB/s   (139.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 5.56 GB/s    (10.8k) | 8.02 GB/s     (7.8k)
Write      | 5.86 GB/s    (11.4k) | 8.55 GB/s     (8.3k)
Total      | 11.42 GB/s   (22.3k) | 16.57 GB/s   (16.1k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 933 Mbits/sec   | 103 Mbits/sec   | 11.7 ms        
Eranium         | Amsterdam, NL (100G)      | 934 Mbits/sec   | 1.87 Gbits/sec  | 8.80 ms        
Uztelecom       | Tashkent, UZ (10G)        | 889 Mbits/sec   | 395 Mbits/sec   | 80.4 ms        
Leaseweb        | Singapore, SG (10G)       | 620 Mbits/sec   | 534 Mbits/sec   | 157 ms         
Clouvider       | Los Angeles, CA, US (10G) | 734 Mbits/sec   | 229 Mbits/sec   | 145 ms         
Leaseweb        | NYC, NY, US (10G)         | 871 Mbits/sec   | 633 Mbits/sec   | -- 
Edgoo           | Sao Paulo, BR (1G)        | 584 Mbits/sec   | 218 Mbits/sec   | 195 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 918 Mbits/sec   | 138 Mbits/sec   | 12.7 ms        
Eranium         | Amsterdam, NL (100G)      | 922 Mbits/sec   | 1.84 Gbits/sec  | 7.27 ms        
Uztelecom       | Tashkent, UZ (10G)        | 879 Mbits/sec   | 266 Mbits/sec   | 80.4 ms        
Leaseweb        | Singapore, SG (10G)       | 543 Mbits/sec   | 929 Mbits/sec   | 157 ms         
Clouvider       | Los Angeles, CA, US (10G) | busy            | 355 Mbits/sec   | 144 ms         
Leaseweb        | NYC, NY, US (10G)         | busy            | 836 Mbits/sec   | 81.8 ms        
Edgoo           | Sao Paulo, BR (1G)        | 539 Mbits/sec   | 296 Mbits/sec   | 195 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1931                          
Multi Core      | 8392                          
Full Test       | https://browser.geekbench.com/v6/cpu/9194603

YABS completed in 11 min 28 sec
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-28-amd64 x86_64
  Model                         QEMU Standard PC (i440FX + PIIX, 1996)
  Motherboard                   N/A
  BIOS                          SeaBIOS rel-1.16.3-0-ga6ed6b701f0a-prebuilt.qemu.org

处理器信息
  Name                          AMD EPYC 9654 96-Core Processor                
  Topology                      1 Processor, 6 Cores
  Identifier                    AuthenticAMD Family 25 Model 17 Stepping 1
  Base Frequency                2.40 GHz
  L1 Instruction Cache          64.0 KB x 6
  L1 Data Cache                 64.0 KB x 6
  L2 Cache                      512 KB x 6
  L3 Cache                      16.0 MB

内存信息
  Size                          23.5 GB

单核测试分数：1421
多核测试分数：7014
详细结果链接：https://browser.geekbench.com/v5/cpu/23117111
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%209654
```

### UnixBench

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat.blog: GNU/Linux
   OS: GNU/Linux -- 6.1.0-28-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.119-1 (2024-11-22)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9654 96-Core Processor (4800.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9654 96-Core Processor (4800.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD EPYC 9654 96-Core Processor (4800.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD EPYC 9654 96-Core Processor (4800.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 4: AMD EPYC 9654 96-Core Processor (4800.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 5: AMD EPYC 9654 96-Core Processor (4800.0 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   05:52:21 up 2 days, 18:02,  1 user,  load average: 0.18, 0.06, 0.01; runlevel 2024-11-29

------------------------------------------------------------------------
Benchmark Run: Mon Dec 02 2024 05:52:21 - 06:20:18
6 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       55514782.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     9138.4 MWIPS (10.0 s, 7 samples)
Execl Throughput                               2680.6 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        706997.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          180782.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2302523.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                              965830.6 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  40954.0 lps   (10.0 s, 7 samples)
Process Creation                               6600.4 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  11038.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4932.5 lpm   (60.0 s, 2 samples)
System Call Overhead                         774143.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   55514782.9   4757.1
Double-Precision Whetstone                       55.0       9138.4   1661.5
Execl Throughput                                 43.0       2680.6    623.4
File Copy 1024 bufsize 2000 maxblocks          3960.0     706997.8   1785.3
File Copy 256 bufsize 500 maxblocks            1655.0     180782.9   1092.3
File Copy 4096 bufsize 8000 maxblocks          5800.0    2302523.8   3969.9
Pipe Throughput                               12440.0     965830.6    776.4
Pipe-based Context Switching                   4000.0      40954.0    102.4
Process Creation                                126.0       6600.4    523.8
Shell Scripts (1 concurrent)                     42.4      11038.9   2603.5
Shell Scripts (8 concurrent)                      6.0       4932.5   8220.9
System Call Overhead                          15000.0     774143.9    516.1
                                                                   ========
System Benchmarks Index Score                                        1269.6

------------------------------------------------------------------------
Benchmark Run: Mon Dec 02 2024 06:20:18 - 06:48:17
6 CPUs in system; running 6 parallel copies of tests

Dhrystone 2 using register variables      332861033.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    54633.6 MWIPS (9.9 s, 7 samples)
Execl Throughput                              12569.5 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       4165336.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         1081751.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      13816273.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                             5772462.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 779782.6 lps   (10.0 s, 7 samples)
Process Creation                              36042.0 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  41075.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5581.3 lpm   (60.0 s, 2 samples)
System Call Overhead                        4634829.9 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  332861033.6  28522.8
Double-Precision Whetstone                       55.0      54633.6   9933.4
Execl Throughput                                 43.0      12569.5   2923.1
File Copy 1024 bufsize 2000 maxblocks          3960.0    4165336.5  10518.5
File Copy 256 bufsize 500 maxblocks            1655.0    1081751.0   6536.3
File Copy 4096 bufsize 8000 maxblocks          5800.0   13816273.4  23821.2
Pipe Throughput                               12440.0    5772462.8   4640.2
Pipe-based Context Switching                   4000.0     779782.6   1949.5
Process Creation                                126.0      36042.0   2860.5
Shell Scripts (1 concurrent)                     42.4      41075.4   9687.6
Shell Scripts (8 concurrent)                      6.0       5581.3   9302.1
System Call Overhead                          15000.0    4634829.9   3089.9
                                                                   ========
System Benchmarks Index Score                                        6799.9
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD EPYC 9654 96-Core Processor (x86_64)
6 cores @ 0 MHz  |  23.5 GiB RAM
Number of Processes: 6  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          15280
  Integer Math                     36039 Million Operations/s
  Floating Point Math              30933 Million Operations/s
  Prime Numbers                    116 Million Primes/s
  Sorting                          22148 Thousand Strings/s
  Encryption                       7803 MB/s
  Compression                      154428 KB/s
  CPU Single Threaded              2835 Million Operations/s
  Physics                          2023 Frames/s
  Extended Instructions (SSE)      14453 Million Matrices/s

Memory Mark:                       2037
  Database Operations              5173 Thousand Operations/s
  Memory Read Cached               27312 MB/s
  Memory Read Uncached             24448 MB/s
  Memory Write                     22846 MB/s
  Available RAM                    18724 Megabytes
  Memory Latency                   112 Nanoseconds
  Memory Threaded                  137417 MB/s
--------------------------------------------------------------------------------
```

### 融合怪脚本测试

```shell
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC 9654 96-Core Processor @ 2400.000 MHz
 CPU 数量            : 6 Virtual CPU(s)
 CPU 缓存            : 512 KB
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 1.00 GB / 23.47 GB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : 0.00 MB / 1024.00 MB
 硬盘空间            : 5.08 GB / 293.18 GB
 启动盘路径          : /dev/sda3
 系统                : debian 12.8 [x86_64] 
 内核                : 6.1.0-28-amd64
 系统在线时间        : 2 days, 19 hours, 23 minutes
 时区                : CET
 负载                : 0.86 / 1.48 / 3.85
 虚拟化架构          : KVM
 NAT类型             : Full Cone
 TCP加速方式         : cubic
 IPV4 ASN            : AS44486 Oliver Horscht Is Trading AS Synlinq
 IPV4 Location       : Frankfurt am Main / Hessen / Germany
 IPV6 ASN            : AS44486 Oliver Horscht Is Trading AS Synlinq
 IPV6 Location       : Frankfurt am Main / Hessen / Germany
 IPv6 子网掩码       : /64
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   4510.98
6 线程测试(多核)得分:  26921.84
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 29842.62 MB/s(31.29K IOPS, 5s)
单线程顺序读速度: 48397.30 MB/s(50.75K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       426.47 MB/s(106.6k)     427.59 MB/s(106.9k)     854.06 MB/s(213.5k)     
/root         64k      4.61 GB/s(72.0k)        4.63 GB/s(72.4k)        9.24 GB/s(144.4k)       
/root         512k     6.38 GB/s(12.5k)        6.72 GB/s(13.1k)        13.11 GB/s(25.6k)       
/root         1m       6.74 GB/s(6584)         7.19 GB/s(7023)         13.93 GB/s(13.6k)       
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：德国
[IPV6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：德国
----------------Youtube-----------------
[IPV4]
连接方式: Google Global CacheCDN (ISP Cooperation)
ISP运营商: SUPERNETWORK
视频缓存节点地域: 捷克 布拉格(PRG5)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: IAD(IAD30S49)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：DE 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：DE 区
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Dazn                      YES (Region: DE)
Disney+                   YES (Region: DE)
Netflix                   YES (Region: US)
Netflix CDN               DE
YouTube Region            YES (Region: DE)
YouTube CDN               supernetwork - PRG
Amazon Prime Video        YES (Region: DE)
Paramount+                YES
TVBAnywhere+              YES (Region: DE)
IQiYi                     YES (Region: DE)
Viu.com                   YES
Spotify Registration      YES (Region: DE)
Steam Store               YES (Community Available) (Region: DE)
ChatGPT                   YES (Region: DE)
Gemini                    NO
MetaAI                    NO (AbraGeoBlocked)
Wikipedia Editability     YES
Reddit                    YES
TikTok                    YES (Region: DE)
Bing Region               YES (Risky) (Region: DE)
Instagram Licensed Audio  YES
KOCOWA                    YES
SonyLiv                   YES (Region: DE)
OneTrust                  YES (Region: DE)
GoogleSearch              YES
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 2 [8] 
VPN得分(越低越好): 98 [8] 
代理得分(越低越好): 98 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 98 [8] 
欺诈得分(越低越好): 0 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0069 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: corporate [9] business [8 A] DataCenter/WebHosting/Transit [3] hosting ASN [C] hosting [0 7]
公司类型: hosting [0 7] business [A]
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1 A C] No [5 6 8]
是否移动设备: Yes [E] No [5 A C]
是否代理: No [0 1 4 5 6 7 8 9 A B C D] Yes [E]
是否VPN: No [0 1 6 7 A C D] Yes [E]
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A C D E] 
是否威胁: No [7 8 C D] 
是否中继: No [0 7 8 C D] 
是否Bogon: No [7 8 A C D] 
是否机器人: No [E] 
DNS-黑名单: 314(Total_Check) 0(Clean) 5(Blacklisted) 85(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0069 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] business [A]
公司类型: business [A] 
是否云提供商: Yes [D]
是否数据中心: No [A] Yes [1]
是否移动设备: No [A] 
是否代理: No [1 A B D] 
是否VPN: No [1 A D] 
是否TorExit: No [1 D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A B] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D] 
是否中继: No [D] 
是否Bogon: No [A D] 
DNS-黑名单: 314(Total_Check) 0(Clean) 0(Blacklisted) 314(Other) 
--------------------------------------邮件端口检测--------------------------------------
Platform  SMTP  SMTPS POP3  POP3S IMAP  IMAPS
LocalPort ✘     ✔     ✔     ✔     ✔     ✔    
QQ        ✘     ✘     ✔     ✘     ✔     ✘    
163       ✘     ✘     ✔     ✘     ✔     ✘    
Sohu      ✘     ✘     ✔     ✘     ✔     ✘    
Yandex    ✘     ✘     ✔     ✘     ✔     ✘    
Gmail     ✘     ✘     ✘     ✘     ✘     ✘    
Outlook   ✘     ✘     ✔     ✘     ✔     ✘    
Office365 ✘     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✘     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✘     ✔     ✘     ✔     ✘    
MailRU    ✘     ✘     ✘     ✘     ✔     ✘    
AOL       ✘     ✘     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✘     ✔     ✘     ✔     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 移动CMIN2  [精品线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 移动CMIN2  [精品线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 移动CMIN2  [精品线路] 
-------------------------------------三网回程路由检测-------------------------------------
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.43 ms      AS44486                       德国, 黑森州, 法兰克福, synlinq.de 
0.63 ms      AS44486                       德国, 黑森, 美因河畔法兰克福, synlinq.de 
*
1.59 ms      AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
1.16 ms      AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
1.15 ms      AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
2.75 ms      AS174      [COGENT-149]       欧洲, cogentco.com 
187.00 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn 
185.55 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
*
246.77 ms    AS134774   [CHINANET-GD]      中国, 广东, 深圳, chinatelecom.cn  电信
*
195.63 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.38 ms      AS44486                       德国, 黑森州, 法兰克福, synlinq.de 
0.44 ms      AS44486                       德国, 黑森, 美因河畔法兰克福, synlinq.de 
*
1.34 ms      AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
1.03 ms      AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
1.38 ms      AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
2.16 ms      AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
1.28 ms      AS174      [COGENT-149]       德国, 黑森, 美因河畔法兰克福, cogentco.com 
147.50 ms    AS4837     [CU169-BACKBONE]   中国, 香港, chinaunicom.cn  联通
166.16 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
*
150.47 ms    AS17816    [UNICOM-GD]        中国, 广东, 深圳, chinaunicom.cn  联通
148.80 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
152.45 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.42 ms      AS44486                       德国, 黑森州, 法兰克福, synlinq.de 
0.48 ms      AS44486                       德国, 黑森, 美因河畔法兰克福, synlinq.de 
*
1.62 ms      AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
1.30 ms      AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
1.66 ms      AS174      [COGENT-BONE]      德国, 黑森, 美因河畔法兰克福, cogentco.com 
1.92 ms      AS174      [COGENT-149]       德国, 黑森, 美因河畔法兰克福, cogentco.com 
1.41 ms      AS58453    [CMI-INT]          德国, 黑森, 美茵河畔法兰克福, cmi.chinamobile.com  移动
259.90 ms    AS58453    [CMI-INT]          德国, 黑森, 美因河畔法兰克福, cmi.chinamobile.com  移动
258.73 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
259.44 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
260.88 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
263.96 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
265.90 ms    AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   923.79 Mbps     1855.35 Mbps    0.27 ms         Not available.  
法兰克福        924.65 Mbps     1853.31 Mbps    0.63 ms         0.0%            
洛杉矶          310.51 Mbps     1413.94 Mbps    145.18 ms       0.0%            
联通Wu Xi       250.45 Mbps     1392.64 Mbps    155.27 ms       0.0%            
联通成都        256.49 Mbps     4.40 Mbps       198.25 ms       Not available.  
电信Suzhou5G    218.45 Mbps     513.96 Mbps     161.72 ms       Not available.  
电信Zhenjiang5G 197.99 Mbps     498.08 Mbps     186.95 ms       Not available.  
移动Beijing     299.62 Mbps     1545.01 Mbps    183.25 ms       0.0%            
----------------------------------------------------------------------------------
花费          : 7 分 52 秒
时间          : Mon Dec 2 07:20:53 CET 2024
----------------------------------------------------------------------------------
```

### IP 检测

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/12/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/12/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/12/image-1.jpg" alt="" loading="lazy">
</picture>

### Check Host

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/12/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/12/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/12/image.jpg" alt="" loading="lazy">
</picture>