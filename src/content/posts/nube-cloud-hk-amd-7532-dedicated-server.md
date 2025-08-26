---
tags: [hk-server]
title: "Nube Cloud 香港 AMD  7532 独立服务器 测评"
published: 2024-10-01
---

### 服务器套餐

- AMD Epyc 7532 处理器 / 32 核心 64 线程

- 8x SK 32GB 2R4 2666 RECC (总 256GB)

- 2x Intel P4510 1TB U.2 NVME

- 1x Mellanox ConnectX-3 dual 40GbE NIC

- 免费提供 IP4/29 + IP6/64

- 送100M带宽

- 香港 BGP：PCCWG + Lumen + Cogent + NTT + GSL + Google 私有互联 + SG.GS 私有互联 + EIE 香港 + HKIX + 通过港新海缆骨干通达的新加坡 IXP + 通过港日海缆骨干通达的日本 IXP

- 测速点 [http://hk-bgp.hkg.lg.kuaichedao.xyz/](http://hk-bgp.hkg.lg.kuaichedao.xyz/)

- 月租总价 258 美元 一次性设定费 = 68 USD 联系销售：[https://t.me/BeefyAsian](https://t.me/BeefyAsian) 频道地址：[https://t.me/KuaiCheDao\_Info](https://t.me/KuaiCheDao_Info)

- 官网：[https://nube.sh](https://nube.sh/)

## 测评

### lscpu

```shell
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          43 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   64
  On-line CPU(s) list:    0-63
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         Advanced Micro Devices, Inc.
  Model name:             AMD EPYC 7532 32-Core Processor
    BIOS Model name:      AMD EPYC 7532 32-Core Processor                 Unknown CPU @ 2.4GHz
    BIOS CPU family:      107
    CPU family:           23
    Model:                49
    Thread(s) per core:   2
    Core(s) per socket:   32
    Socket(s):            1
    Stepping:             0
    Frequency boost:      enabled
    CPU(s) scaling MHz:   99%
    CPU max MHz:          2400.0000
    CPU min MHz:          1500.0000
    BogoMIPS:             4791.22
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx 
                          mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl nonstop_tsc cpuid extd_apicid aperfmperf rapl pni p                          clmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand lahf_lm cmp_legacy svm exta                          pic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce topoext perfctr_core perfctr_nb bpext                           perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba ibrs ibpb stibp vmmcall fsgsbase bmi1 avx2 smep bmi2 cq                          m rdt_a rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves cqm_llc cqm_occup_llc cqm_mbm_tota                          l cqm_mbm_local clzero irperf xsaveerptr rdpru wbnoinvd amd_ppin arat npt lbrv svm_lock nrip_save tsc_scale vmcb                          _clean flushbyasid decodeassists pausefilter pfthreshold avic v_vmsave_vmload vgif v_spec_ctrl umip rdpid overfl                          ow_recov succor smca sev sev_es
Virtualization features:  
  Virtualization:         AMD-V
Caches (sum of all):      
  L1d:                    1 MiB (32 instances)
  L1i:                    1 MiB (32 instances)
  L2:                     16 MiB (32 instances)
  L3:                     256 MiB (16 instances)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-63
Vulnerabilities:          
  Gather data sampling:   Not affected
  Itlb multihit:          Not affected
  L1tf:                   Not affected
  Mds:                    Not affected
  Meltdown:               Not affected
  Mmio stale data:        Not affected
  Reg file data sampling: Not affected
  Retbleed:               Mitigation; untrained return thunk; SMT enabled with STIBP protection
  Spec rstack overflow:   Mitigation; Safe RET
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; Retpolines; IBPB conditional; STIBP always-on; RSB filling; PBRSB-eIBRS Not affected; BHI Not affect                          ed
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 4 hours, 40 minutes
Processor  : AMD EPYC 7532 32-Core Processor
CPU cores  : 64 @ 1796.030 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 251.6 GiB
Swap       : 7.4 GiB
Disk       : 119.6 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.8.12-2-pve
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Eons Data Communications Limited
ASN        : AS138997 Eons Data Communications Limited
Location   : Ha Kwai Chung, Kwai Tsing (NKT)
Country    : Hong Kong

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/mapper/pve-root):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 233.04 MB/s  (58.2k) | 743.30 MB/s  (11.6k)
Write      | 233.66 MB/s  (58.4k) | 747.21 MB/s  (11.6k)
Total      | 466.70 MB/s (116.6k) | 1.49 GB/s    (23.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 800.50 MB/s   (1.5k) | 815.74 MB/s    (796)
Write      | 843.03 MB/s   (1.6k) | 870.07 MB/s    (849)
Total      | 1.64 GB/s     (3.2k) | 1.68 GB/s     (1.6k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 657 Mbits/sec   | 874 Mbits/sec   | 240 ms         
Eranium         | Amsterdam, NL (100G)      | 7.44 Gbits/sec  | 5.18 Gbits/sec  | 189 ms         
Uztelecom       | Tashkent, UZ (10G)        | 2.91 Gbits/sec  | 4.32 Gbits/sec  | 151 ms         
Leaseweb        | Singapore, SG (10G)       | 8.09 Gbits/sec  | 3.92 Gbits/sec  | 31.1 ms        
Clouvider       | Los Angeles, CA, US (10G) | 1.06 Gbits/sec  | 1.36 Gbits/sec  | 163 ms         
Leaseweb        | NYC, NY, US (10G)         | 3.78 Gbits/sec  | 5.33 Gbits/sec  | 215 ms         
Edgoo           | Sao Paulo, BR (1G)        | busy            | 221 Mbits/sec   | 327 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1350                          
Multi Core      | 14188                         
Full Test       | https://browser.geekbench.com/v6/cpu/8055226

YABS completed in 10 min 4 sec
```

### Bench

```shell
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 7532 32-Core Processor
 CPU Cores          : 64 @ 2400.000 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 127.1 GB (4.5 GB Used)
 Total Mem          : 251.6 GB (5.3 GB Used)
 Total Swap         : 7.4 GB (0 Used)
 System uptime      : 1 days, 4 hour 54 min
 Load average       : 0.00, 0.03, 0.01
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.8.12-2-pve
 TCP CC             : bbr
 Virtualization     : Dedicated
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS138997 Eons Data Communications Limited
 Location           : Kwai Chung / HK
 Region             : Kwai Tsing
----------------------------------------------------------------------
 I/O Speed(1st run) : 812 MB/s
 I/O Speed(2nd run) : 827 MB/s
 I/O Speed(3rd run) : 795 MB/s
 I/O Speed(average) : 811.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    8992.25 Mbps      6783.19 Mbps        0.56 ms     
 Los Angeles, US  558.63 Mbps       5417.82 Mbps        155.39 ms   
 Dallas, US       433.62 Mbps       4233.01 Mbps        204.18 ms   
 Amsterdam, NL    497.45 Mbps       2420.17 Mbps        175.36 ms   
 Hongkong, CN     7947.60 Mbps      9171.11 Mbps        0.48 ms     
 Mumbai, IN       2085.00 Mbps      7194.09 Mbps        95.27 ms    
 Singapore, SG    744.63 Mbps       3645.57 Mbps        36.80 ms    
----------------------------------------------------------------------
 Finished in        : 4 min 5 sec
 Timestamp          : 2024-10-01 16:09:37 HKT
----------------------------------------------------------------------
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.8.12-2-pve x86_64
  Model                         ASUSTeK COMPUTER INC. RS500A-E10-RS12U
  Motherboard                   ASUSTeK COMPUTER INC. KRPA-U16 Series
  BIOS                          American Megatrends Inc. 0703

处理器信息
  Name                          AMD EPYC 7532 32-Core Processor                
  Topology                      1 Processor, 32 Cores, 64 Threads
  Identifier                    AuthenticAMD Family 23 Model 49 Stepping 0
  Base Frequency                2.40 GHz
  L1 Instruction Cache          32.0 KB x 32
  L1 Data Cache                 32.0 KB x 32
  L2 Cache                      512 KB x 32
  L3 Cache                      16.0 MB x 16

内存信息
  Size                          252 GB

单核测试分数：1047
多核测试分数：28573
详细结果链接：https://browser.geekbench.com/v5/cpu/22919733
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%207532
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD EPYC 7532 32-Core Processor (x86_64)
32 cores @ 2400 MHz  |  251.6 GiB RAM
Number of Processes: 64  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          55632
  Integer Math                     217571 Million Operations/s
  Floating Point Math              130109 Million Operations/s
  Prime Numbers                    527 Million Primes/s
  Sorting                          117820 Thousand Strings/s
  Encryption                       64585 MB/s
  Compression                      870778 KB/s
  CPU Single Threaded              2172 Million Operations/s
  Physics                          7659 Frames/s
  Extended Instructions (SSE)      46953 Million Matrices/s

Memory Mark:                       2850
  Database Operations              20431 Thousand Operations/s
  Memory Read Cached               24662 MB/s
  Memory Read Uncached             12232 MB/s
  Memory Write                     12385 MB/s
  Available RAM                    249898 Megabytes
  Memory Latency                   52 Nanoseconds
  Memory Threaded                  125333 MB/s
--------------------------------------------------------------------------
```

### byte-unixbench 性能测试

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: pve: GNU/Linux
   OS: GNU/Linux -- 6.8.12-2-pve -- #1 SMP PREEMPT_DYNAMIC PMX 6.8.12-2 (2024-09-05T10:03Z)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="ANSI_X3.4-1968", collate="ANSI_X3.4-1968")
   CPU 0: AMD EPYC 7532 32-Core Processor (4791.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   -------此处省略------
   CPU 63: AMD EPYC 7532 32-Core Processor (4791.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   16:27:54 up  5:16,  3 users,  load average: 0.04, 0.03, 0.08; runlevel Sep

------------------------------------------------------------------------
Benchmark Run: Mon Sep 30 2024 16:27:54 - 16:55:53
64 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       40931407.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     7253.8 MWIPS (9.9 s, 7 samples)
Execl Throughput                               2148.9 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks        397557.0 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          101647.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       1400822.3 KBps  (30.0 s, 2 samples)
Pipe Throughput                              888346.6 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 117095.1 lps   (10.0 s, 7 samples)
Process Creation                               3784.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   8297.6 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   6567.6 lpm   (60.0 s, 2 samples)
System Call Overhead                         903085.0 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   40931407.9   3507.4
Double-Precision Whetstone                       55.0       7253.8   1318.9
Execl Throughput                                 43.0       2148.9    499.8
File Copy 1024 bufsize 2000 maxblocks          3960.0     397557.0   1003.9
File Copy 256 bufsize 500 maxblocks            1655.0     101647.5    614.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    1400822.3   2415.2
Pipe Throughput                               12440.0     888346.6    714.1
Pipe-based Context Switching                   4000.0     117095.1    292.7
Process Creation                                126.0       3784.7    300.4
Shell Scripts (1 concurrent)                     42.4       8297.6   1957.0
Shell Scripts (8 concurrent)                      6.0       6567.6  10946.0
System Call Overhead                          15000.0     903085.0    602.1
                                                                   ========
System Benchmarks Index Score                                        1089.2

------------------------------------------------------------------------
Benchmark Run: Mon Sep 30 2024 16:55:53 - 17:24:00
64 CPUs in system; running 64 parallel copies of tests

Dhrystone 2 using register variables     1661375039.2 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   384663.4 MWIPS (10.1 s, 7 samples)
Execl Throughput                              19708.2 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      19452666.7 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         5027351.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      38716902.7 KBps  (30.0 s, 2 samples)
Pipe Throughput                            44571552.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                4906541.1 lps   (10.0 s, 7 samples)
Process Creation                              79314.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  96497.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  11778.0 lpm   (60.1 s, 2 samples)
System Call Overhead                       46105721.5 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0 1661375039.2 142362.9
Double-Precision Whetstone                       55.0     384663.4  69938.8
Execl Throughput                                 43.0      19708.2   4583.3
File Copy 1024 bufsize 2000 maxblocks          3960.0   19452666.7  49122.9
File Copy 256 bufsize 500 maxblocks            1655.0    5027351.8  30376.7
File Copy 4096 bufsize 8000 maxblocks          5800.0   38716902.7  66753.3
Pipe Throughput                               12440.0   44571552.8  35829.2
Pipe-based Context Switching                   4000.0    4906541.1  12266.4
Process Creation                                126.0      79314.5   6294.8
Shell Scripts (1 concurrent)                     42.4      96497.9  22758.9
Shell Scripts (8 concurrent)                      6.0      11778.0  19629.9
System Call Overhead                          15000.0   46105721.5  30737.1
                                                                   ========
System Benchmarks Index Score                                       27317.3
```

### SysBench 测试

```shell
root@pve:~/byte-unixbench/UnixBench# sysbench cpu --cpu-max-prime=100000 --time=60 --threads=64 run
sysbench 1.0.20 (using system LuaJIT 2.1.0-beta3)

Running the test with following options:
Number of threads: 64
Initializing random number generator from current time

Prime numbers limit: 100000

Initializing worker threads...

Threads started!

CPU speed:
    events per second:  2132.14（越高越好）

General statistics:
    total time:                          60.0269s
    total number of events:              127988

Latency (ms):
         min:                                   15.33
         avg:                                   30.01
         max:                                   65.50
         95th percentile:                       30.26
         sum:                              3840599.85

Threads fairness:
    events (avg/stddev):           1999.8125/2.21
    execution time (avg/stddev):   60.0094/0.01
```

### 融合怪脚本测试

```shell
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC 7532 32-Core Processor @ 2400.000 MHz
 CPU 数量            : 64 Physical CPU(s)
 CPU 缓存            : 512 KB
 GPU 型号            : ASPEED Graphics Family
 GPU 状态            : 0.000000
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ❌ Disabled
 内存                : 5.74 GB / 251.55 GB
 虚拟内存 Swap       : 0.00 MB / 7.45 GB
 硬盘空间            : 4.67 GB / 119.14 GB
 启动盘路径          : /dev/mapper/pve-root
 系统                : debian 12.7 [x86_64] 
 内核                : 6.8.12-2-pve
 系统在线时间        : 1 days, 05 hours, 10 minutes
 时区                : HKT
 负载                : 1.31 / 8.83 / 6.09
 虚拟化架构          : Dedicated (No visible signage)
 NAT类型             : Full Cone
 TCP加速方式         : bbr
 IPV4 ASN            : AS138997 Eons Data Communications Limited
 IPV4 Location       : Ha Kwai Chung / Kwai Tsing / Hong Kong
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   1638.45
64 线程测试(多核)得分:  54851.79
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 20144.07 MB/s(21.12K IOPS, 5s)
单线程顺序读速度: 43861.13 MB/s(45.99K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       232.32 MB/s(58.1k)      232.94 MB/s(58.2k)      465.26 MB/s(116.3k)     
/root         64k      753.48 MB/s(11.8k)      757.44 MB/s(11.8k)      1.51 GB/s(23.6k)        
/root         512k     794.59 MB/s(1551)       836.80 MB/s(1634)       1.63 GB/s(3185)         
/root         1m       830.43 MB/s(810)        885.73 MB/s(864)        1.72 GB/s(1674)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：中国香港
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG33S01)
Youtube识别地域: 中国香港(HK)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：HK 区
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Dazn                      YES (Region: HK)
Disney+                   YES (Region: HK)
Netflix                   YES (Region: US)
Netflix CDN               HK
YouTube Region            YES (Region: HK)
YouTube CDN               HKG
Amazon Prime Video        YES (Region: HK)
Paramount+                YES
TVBAnywhere+              NO
IQiYi                     YES (Region: HK)
Viu.com                   YES
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: HK)
ChatGPT                   YES (Only Available with Mobile APP)
Gemini                    NO
MetaAI                    NO (AbraGeoBlocked)
Wikipedia Editability     NO
Reddit                    YES
TikTok                    NO
Bing Region               YES (Risky) (Region: HK)
Instagram Licensed Audio  YES
KOCOWA                    NO
SonyLiv                   YES (Region: HK)
OneTrust                  YES (Region: HK KWAI TSING)
GoogleSearch              YES
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 38 [8] 
VPN得分(越低越好): 0 [8] 
代理得分(越低越好): 99 [8]
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 86 [8] 
欺诈得分(越低越好): 65 [E] 30 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0018 (Low) [A] 
公司滥用得分(越低越好): 0.0024 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: hosting - moderate probability [C] hosting [0 7 A] DataCenter/WebHosting/Transit [3] business [8] corporate [9]
公司类型: isp [7] business [0] hosting [A]
是否云提供商: Yes [7 D] 
是否数据中心: Yes [1 A] No [0 5 6 8 C]
是否移动设备: Yes [E] No [5 A C]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B C D]
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
DNS-黑名单: 313(Total_Check) 0(Clean) 10(Blacklisted) 303(Other) 
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
Sina      ✔     ✘     ✔     ✘     ✔     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  检测不到回程路由节点的IP地址
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     检测不到回程路由节点的IP地址
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    检测不到回程路由节点的IP地址
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       检测不到回程路由节点的IP地址
成都移动 211.137.96.205  移动CMI    [普通线路] 
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 172.67.155.192 - 38.24ms - Misaka.HKG
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.57 ms      AS138997                      中国, 香港, eons.cloud 
0.94 ms      *          [Nube-BB]          中国, 香港
2.42 ms      *          [Nube-BB]          中国, 香港
0.36 ms      *          [Nube-BB]          中国, 香港
51.01 ms     *          [Nube-BB]          日本, 东京都, 东京
47.07 ms     AS3356                        美国, lumen.com 
*
*
326.95 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
330.25 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
*
*
*
333.88 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.62 ms      AS138997                      中国, 香港, eons.cloud 
0.84 ms      *          [Nube-BB]          中国, 香港
3.42 ms      *          [Nube-BB]          中国, 香港
3.58 ms      *          [Nube-BB]          中国, 香港
0.58 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
2.81 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
4.14 ms      *          [Nube-BB]          中国, 香港
0.64 ms      *          [Nube-BB]          中国, 香港
47.16 ms     AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
47.26 ms     AS7578                        中国, 香港, globalsecurelayer.com 
47.11 ms     AS7578                        中国, 香港, globalsecurelayer.com 
47.41 ms     AS7578                        中国, 台湾, 台北, globalsecurelayer.com 
47.44 ms     AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
47.26 ms     AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
47.18 ms     AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
*
*
*
*
189.10 ms    AS17676    [BBTEC]            中国, 北京, softbank.jp 
190.82 ms    AS4837     [CU169-BACKBONE]   中国, 北京, chinaunicom.cn  联通
183.90 ms    AS4837     [CU169-BACKBONE]   中国, 北京, chinaunicom.cn  联通
*
228.21 ms    AS17816    [UNICOM-GD]        中国, 广东, 深圳, chinaunicom.cn  联通
230.28 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
227.81 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.57 ms      AS138997                      中国, 香港, eons.cloud 
1.03 ms      *          [Nube-BB]          中国, 香港
3.71 ms      *          [Nube-BB]          中国, 香港
2.91 ms      *          [Nube-BB]          中国, 香港
0.39 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
4.05 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
3.16 ms      *          [Nube-BB]          中国, 香港
0.67 ms      *          [Nube-BB]          中国, 香港
0.77 ms      *          [Nube-BB]          中国, 香港
3.53 ms      AS3356                        中国, 香港, lumen.com 
3.00 ms      AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com  移动
104.61 ms    AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com  移动
53.77 ms     AS58453    [CMI-INT]          中国, 广东, 广州, cmi.chinamobile.com  移动
9.28 ms      AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
53.49 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
158.58 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
10.25 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
11.90 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
11.68 ms     AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   9131.46 Mbps    6586.19 Mbps    2.56 ms         0.0%            
中国香港        5324.11 Mbps    4766.23 Mbps    3.21 ms         0.0%            
新加坡          906.09 Mbps     720.50 Mbps     35.93 ms        Not available.  
联通Wu Xi       597.06 Mbps     5302.63 Mbps    214.11 ms       0.0%            
电信Suzhou5G    672.64 Mbps     4454.92 Mbps    311.22 ms       Not available.  
电信Zhenjiang5G 232.63 Mbps     382.65 Mbps     304.53 ms       Not available.  
移动Beijing     4186.88 Mbps    9508.98 Mbps    68.00 ms        Not available.  
----------------------------------------------------------------------------------
花费          : 7 分 3 秒
时间          : Tue Oct 1 16:29:20 HKT 2024
----------------------------------------------------------------------------------
```

### 解锁测试

```shell
########################################################################
一、基础信息（Maxmind 数据库）
自治系统号：            AS138997
组织：                  Eons Data Communications Limited
坐标：                  114°8′3″E, 22°21′14″N
地图：                  https://check.place/22.3539,114.1342,15,cn
城市：                  Kwai Tsing, 下葵涌
使用地：                [HK]香港, [AS]亚洲
注册地：                [US]美国
时区：                  Asia/Hong_Kong
IP类型：                 广播IP 
二、IP类型属性
数据库：      IPinfo    ipregistry    ipapi     AbuseIPDB  IP2LOCATION 
使用类型：     机房        机房        机房        机房        机房    
公司类型：     商业        机房        机房    
三、风险评分
风险等级：      极低         低       中等       高         极高
SCAMALYTICS：                    30|中风险
ipapi：        0.24%|低风险
AbuseIPDB：    0|低风险
IPQS：                        75|可疑IP
DB-IP：         |低风险
四、风险因子
库： IP2LOCATION ipapi ipregistry IPQS SCAMALYTICS ipdata IPinfo IPWHOIS
地区：    [HK]    [HK]    [HK]    [HK]    [HK]    [HK]    [HK]    [HK]
代理：     否      否      否      是      否      否      否      否 
Tor：      否      否      否      否      否      否      否      否 
VPN：      否      否      否      是      否      无      否      否 
服务器：   是      是      是      无      否      否      否      否 
滥用：     否      否      否      否      无      否      无      无 
机器人：   否      否      无      否      否      无      无      无 
五、流媒体及AI服务解锁检测
服务商：  TikTok   Disney+  Netflix Youtube  AmazonPV  Spotify  ChatGPT 
状态：     失败     解锁     解锁     解锁     解锁     屏蔽     仅APP  
地区：              [HK]     [HK]     [HK]     [HK]              [HK]   
方式：              原生     原生     原生     原生              原生   
六、邮局连通性及黑名单检测
本地25端口：阻断
IP地址黑名单数据库：  有效 439   正常 433   已标记 3   黑名单 3
========================================================================
```

### 通电测试

```shell

  CPU 型号              AMD EPYC 7532 32-Core Processor
  CPU 核心              合计 32 核心，64 线程
  CPU 状态              当前主频 2400.000 MHz
  内存大小              257591 MB (5750 MB 已用)
  交换分区              7627 MB (0 MB 已用)

  第 1 块硬盘           通电 35206 小时，型号 INTEL SSDPE2KX010T8
  第 2 块硬盘           通电 36033 小时，型号 INTEL SSDPE2KX010T8

  硬盘大小              120.6 GB

  服务器时间            2024-10-01 16:37:08
  运行时间              1 days 5 hour 25 min
  系统负载              7.90, 9.45, 6.38
  虚拟化技术            No Virtualization Detected

  IPv4 地址             38.181.xxx.xxx
  运营商                AS138997 Eons Data Communications Limited
  地理位置              HK, Kwai Tsing, Kwai Chung

  操作系统              Debian 12.7 bookworm (x86_64)
  系统内核              6.8.12-2-pve
  TCP 加速              bbr

  当前脚本版本          1.4.1.1

  顺序写入 (1st)        925 MB/s
  顺序写入 (2nd)        916 MB/s
  顺序写入 (3rd)        911 MB/s
  顺序写入 (4th)        920 MB/s
  顺序写入 (5th)        876 MB/s
  顺序写入 (avg)        915.7 MB/s
```

### CheckHost

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/10/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/10/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/10/image.jpg" alt="" loading="lazy">
</picture>