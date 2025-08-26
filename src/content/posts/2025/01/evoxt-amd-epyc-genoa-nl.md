---
title: "Evoxt AMD EPYC-Genoa 荷兰测评"
published: 2025-01-21
categories: 
  - "vps"
  - "eu-server"
---

最近 Evoxt 上新地区真勤快，继上次波兰之后又上了荷兰，加拿大，澳洲地区。这四个机房都是基于 AMD EPYC+NVMe SSD硬盘，接入的是1Gbps带宽。网络不算优质，机器质量可以，附赠备份。看机器后台有了私有网络，也许可以不同地区组内网互联。网络方面都是纯国际线路，还不错。

| 方案 | CPU | 内存 | NVMe | IP地址 | 租用价格 |
| --- | --- | --- | --- | --- | --- |
| VM-0.5 | 1核心 | 512MB | 5GB | IPv4+IPv6 | 2.99美元／月 |
| VM-0.75 | 1核心 | 1GB | 10GB | IPv4+IPv6 | 4.99美元／月 |
| VM-1 | 1核心 | 2GB | 20GB | IPv4+IPv6 | 5.99美元／月 |
| VM-1.5 | 2核心 | 2GB | 20GB | IPv4+IPv6 | 6.95美元／月 |
| VM-2 | 2核心 | 4GB | 30GB | IPv4+IPv6 | 11.99美元／月 |
| VM-3 | 4核心 | 4GB | 30GB | IPv4+IPv6 | 14.99美元／月 |
| VM-4 | 4核心 | 8GB | 60GB | IPv4+IPv6 | 23.99美元／月 |
| VM-6 | 8核心 | 8GB | 60GB | IPv4+IPv6 | 29.99美元／月 |

## 配置：

- **_Provider :_ Evoxt**

- **_Type/Plan : ****VM-2****_**

- **_Processor : AMD EPYC-Genoa_**

- **_Num of Core :_** **_2_** **_Cores_**

- **_Memory : 2 GB_**

- **_Storage :_** **_20_** **_GB NVMe_**

- **_Bandwidth : 1.5TB @ 10 Gbps IN | 10 Gbps OUT_**

- **_Location :_** **NL**

- _**Price :**_ **_$6.95_**

## 测评

### CPU

```
root@catcat:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  2
  On-line CPU(s) list:   0,1
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        Red Hat
  Model name:            AMD EPYC-Genoa Processor
    BIOS Model name:     RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               17
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           2
    Stepping:            0
    BogoMIPS:            7386.05
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl 
                         cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_
                         lm cmp_legacy cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw topoext perfctr_core ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 e
                         rms invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves avx512_bf16 clzero x
                         saveerptr wbnoinvd arat avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid fsrm flush_l1d arch_capa
                         bilities
Virtualization features: 
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   64 KiB (2 instances)
  L1i:                   64 KiB (2 instances)
  L2:                    2 MiB (2 instances)
  L3:                    64 MiB (2 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0,1
Vulnerabilities:         
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 1 hours, 27 minutes
Processor  : AMD EPYC-Genoa Processor
CPU cores  : 2 @ 3693.026 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 1.9 GiB
Swap       : 0.0 KiB
Disk       : 19.6 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Evoxt Enterprise
ASN        : AS149440 Evoxt Enterprise
Host       : Evoxtv6 11 AMS
Location   : Haarlem, North Holland (NH)
Country    : The Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 380.79 MB/s  (95.1k) | 1.79 GB/s    (28.1k)
Write      | 381.80 MB/s  (95.4k) | 1.80 GB/s    (28.2k)
Total      | 762.59 MB/s (190.6k) | 3.60 GB/s    (56.3k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.00 GB/s     (3.9k) | 1.96 GB/s     (1.9k)
Write      | 2.11 GB/s     (4.1k) | 2.09 GB/s     (2.0k)
Total      | 4.12 GB/s     (8.0k) | 4.05 GB/s     (3.9k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 9.18 Gbits/sec  | 5.77 Gbits/sec  | 8.08 ms        
Eranium         | Amsterdam, NL (100G)      | 9.24 Gbits/sec  | 9.38 Gbits/sec  | 0.832 ms       
Uztelecom       | Tashkent, UZ (10G)        | 1.85 Gbits/sec  | 2.05 Gbits/sec  | 97.7 ms        
Leaseweb        | Singapore, SG (10G)       | 935 Mbits/sec   | 1.07 Gbits/sec  | 158 ms         
Clouvider       | Los Angeles, CA, US (10G) | 718 Mbits/sec   | 678 Mbits/sec   | 150 ms         
Leaseweb        | NYC, NY, US (10G)         | 1.66 Gbits/sec  | 1.24 Gbits/sec  | 77.9 ms        
Edgoo           | Sao Paulo, BR (1G)        | 406 Mbits/sec   | 705 Mbits/sec   | 217 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 8.73 Gbits/sec  | 6.87 Gbits/sec  | 8.12 ms        
Eranium         | Amsterdam, NL (100G)      | 9.07 Gbits/sec  | 9.24 Gbits/sec  | 0.810 ms       
Uztelecom       | Tashkent, UZ (10G)        | 1.81 Gbits/sec  | 1.85 Gbits/sec  | 96.2 ms        
Leaseweb        | Singapore, SG (10G)       | 894 Mbits/sec   | 1.03 Gbits/sec  | 158 ms         
Clouvider       | Los Angeles, CA, US (10G) | 1.09 Gbits/sec  | 1.21 Gbits/sec  | 150 ms         
Leaseweb        | NYC, NY, US (10G)         | 1.24 Gbits/sec  | 2.47 Gbits/sec  | 76.2 ms        
```

### GeekBench5

```
系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.3-2.el9

处理器信息
  Name                          AMD EPYC-Genoa Processor
  Topology                      2 Processors, 2 Cores
  Identifier                    AuthenticAMD Family 25 Model 17 Stepping 0
  Base Frequency                3.69 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      32.0 MB

内存信息
  Size                          1.92 GB

单核测试分数：1848
多核测试分数：3222
详细结果链接：https://browser.geekbench.com/v5/cpu/23280323
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC-Genoa
```

### GeekBench6

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-14.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-14.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-14.jpg" alt="" loading="lazy">
</picture>

### **UnixBench**

```
root@catcat:~/byte-unixbench/UnixBench/results# ls
catcat.evoxt-2025-01-20-01  catcat.evoxt-2025-01-20-01.html  catcat.evoxt-2025-01-20-01.log
root@catcat:~/byte-unixbench/UnixBench/results# cat catcat.evoxt-2025-01-20-01
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat.evoxt: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC-Genoa Processor (7386.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   CPU 1: AMD EPYC-Genoa Processor (7386.1 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   21:23:34 up 30 min,  3 users,  load average: 0.17, 0.32, 0.26; runlevel 2025-01-20

------------------------------------------------------------------------
Benchmark Run: Mon Jan 20 2025 21:23:34 - 21:51:37
2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       73400346.2 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    12439.2 MWIPS (10.0 s, 7 samples)
Execl Throughput                               6135.2 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2285110.1 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          601135.3 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       5170713.3 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3438424.6 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 166364.2 lps   (10.0 s, 7 samples)
Process Creation                              16638.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  19553.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4175.3 lpm   (60.0 s, 2 samples)
System Call Overhead                        3462441.0 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   73400346.2   6289.7
Double-Precision Whetstone                       55.0      12439.2   2261.7
Execl Throughput                                 43.0       6135.2   1426.8
File Copy 1024 bufsize 2000 maxblocks          3960.0    2285110.1   5770.5
File Copy 256 bufsize 500 maxblocks            1655.0     601135.3   3632.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    5170713.3   8915.0
Pipe Throughput                               12440.0    3438424.6   2764.0
Pipe-based Context Switching                   4000.0     166364.2    415.9
Process Creation                                126.0      16638.7   1320.5
Shell Scripts (1 concurrent)                     42.4      19553.9   4611.8
Shell Scripts (8 concurrent)                      6.0       4175.3   6958.8
System Call Overhead                          15000.0    3462441.0   2308.3
                                                                   ========
System Benchmarks Index Score                                        2945.5

------------------------------------------------------------------------
Benchmark Run: Mon Jan 20 2025 21:51:37 - 22:19:34
2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      146899052.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    24841.9 MWIPS (9.7 s, 7 samples)
Execl Throughput                              10004.8 lps   (29.5 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       4418145.1 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         1172108.1 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       9760992.8 KBps  (30.0 s, 2 samples)
Pipe Throughput                             6697046.0 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 692164.0 lps   (10.0 s, 7 samples)
Process Creation                              42645.2 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  32087.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   3812.0 lpm   (60.0 s, 2 samples)
System Call Overhead                        7229037.1 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  146899052.4  12587.8
Double-Precision Whetstone                       55.0      24841.9   4516.7
Execl Throughput                                 43.0      10004.8   2326.7
File Copy 1024 bufsize 2000 maxblocks          3960.0    4418145.1  11156.9
File Copy 256 bufsize 500 maxblocks            1655.0    1172108.1   7082.2
File Copy 4096 bufsize 8000 maxblocks          5800.0    9760992.8  16829.3
Pipe Throughput                               12440.0    6697046.0   5383.5
Pipe-based Context Switching                   4000.0     692164.0   1730.4
Process Creation                                126.0      42645.2   3384.5
Shell Scripts (1 concurrent)                     42.4      32087.4   7567.8
Shell Scripts (8 concurrent)                      6.0       3812.0   6353.4
System Call Overhead                          15000.0    7229037.1   4819.4
                                                                   ========
System Benchmarks Index Score                                        5742.2
```

### Bench

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2024-11-11
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC-Genoa Processor
 CPU Cores          : 2 @ 3693.026 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✗ Disabled
 Total Disk         : 19.6 GB (2.1 GB Used)
 Total Mem          : 1.9 GB (296.7 MB Used)
 System uptime      : 0 days, 1 hour 34 min
 Load average       : 0.25, 2.65, 3.84
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS149440 Evoxt Enterprise
 Location           : Haarlem / NL
 Region             : North Holland
----------------------------------------------------------------------
 I/O Speed(1st run) : 2.2 GB/s
 I/O Speed(2nd run) : 2.1 GB/s
 I/O Speed(3rd run) : 2.1 GB/s
 I/O Speed(average) : 2184.5 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    9130.00 Mbps      7435.91 Mbps        1.07 ms     
 Los Angeles, US  644.43 Mbps       3416.23 Mbps        140.73 ms   
 Dallas, US       768.71 Mbps       4579.99 Mbps        112.81 ms   
 Montreal, CA     208.57 Mbps       930.53 Mbps         84.49 ms    
 Paris, FR        8537.36 Mbps      4392.03 Mbps        9.86 ms     
 Shanghai, CN     526.97 Mbps       1704.59 Mbps        195.17 ms   
 Hong Kong, CN    3.68 Mbps         0.88 Mbps           215.85 ms   
 Singapore, SG    54.10 Mbps        340.73 Mbps         360.37 ms   
 Tokyo, JP        334.02 Mbps       3374.77 Mbps        249.28 ms   
----------------------------------------------------------------------
 Finished in        : 4 min 38 sec
 Timestamp          : 2025-01-20 22:32:27 EST
----------------------------------------------------------------------
```

### IP Check

#### IPv4

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-15.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-15.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-15.jpg" alt="" loading="lazy">
</picture>

#### IPv6

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-16.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-16.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-16.jpg" alt="" loading="lazy">
</picture>

### 融合怪测试

```
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC-Genoa Processor @ 3693.026 MHz
 CPU 数量            : 2 Virtual CPU(s)
 CPU 缓存            : 1024 KB
 GPU 型号            : GD 5446
 GPU 状态            : 0.000000
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 352.65 MB / 1.92 GB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 2.33 GB / 19.58 GB
 启动盘路径          : /dev/vda1
 系统                : debian 12.9 [x86_64] 
 内核                : 6.1.0-9-amd64
 系统在线时间        : 0 days, 01 hours, 43 minutes
 时区                : EST
 负载                : 0.33 / 0.63 / 2.23
 虚拟化架构          : KVM
 NAT类型             : Full Cone
 TCP加速方式         : cubic
 IPV4 ASN            : AS149440 Evoxt Enterprise
 IPV4 Location       : Haarlem / Noord-Holland / Netherlands
 IPV6 ASN            : AS149440 Evoxt Enterprise
 IPV6 Location       : Haarlem / Noord-Holland / Netherlands
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   5660.84
2 线程测试(多核)得分:  11407.66
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 39120.18 MB/s(41.02K IOPS, 5s)
单线程顺序读速度: 66131.91 MB/s(69.34K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       403.70 MB/s(100.9k)     404.76 MB/s(101.2k)     808.46 MB/s(202.1k)     
/root         64k      2.09 GB/s(32.6k)        2.10 GB/s(32.8k)        4.19 GB/s(65.4k)        
/root         512k     2.34 GB/s(4570)         2.46 GB/s(4813)         4.80 GB/s(9383)         
/root         1m       2.37 GB/s(2312)         2.53 GB/s(2466)         4.89 GB/s(4778)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：荷兰
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: ARN(ARN11S13)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：NL 区
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Dazn                      Banned
Disney+                   NO (forbidden-location)
Netflix                   Restricted (Originals Only)
Netflix CDN               SE
YouTube Region            YES (Region: NL)
YouTube CDN               ARN
Amazon Prime Video        YES (Region: NL)
Paramount+                YES
TVBAnywhere+              YES (Region: NL)
IQiYi                     YES (Region: NL)
Viu.com                   YES
Spotify Registration      YES (Region: NL)
Steam Store               YES (Community Available) (Region: NL)
ChatGPT                   YES (Region: NL)
Claude                    YES
Sora                      YES (Region: NL)
Gemini                    NO
MetaAI                    NO (AbraGeoBlocked)
Wikipedia Editability     YES
Reddit                    NO
TikTok                    YES (Region: US)
Bing Region               YES (Risky) (Region: NL)
Instagram Licensed Audio  YES
KOCOWA                    YES
SonyLiv                   YES (Region: NL)
OneTrust                  YES (Region: NL NORTH HOLLAND)
GoogleSearch              YES
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
欺诈得分(越低越好): 38 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0011 (Low) [A] 
公司滥用得分(越低越好): 0.0037 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [0 7 9 A] hosting - high probability [C]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7 D] 
是否数据中心: No [5 6 8] Yes [0 1 A C]
是否移动设备: Yes [E] No [5 A C]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B C D]
是否VPN: No [0 1 6 7 A C D] Yes [E]
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
DNS-黑名单: 314(Total_Check) 0(Clean) 4(Blacklisted) 17(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0011 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: hosting [A] DataCenter/WebHosting/Transit [3]
公司类型: hosting [A] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A] 
是否代理: No [1 A B D] 
是否VPN: No [1 A D] 
是否Tor: No [1 3 A B D] 
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
LocalPort ✔     ✔     ✔     ✔     ✔     ✔    
QQ        ✘     ✔     ✔     ✘     ✔     ✘    
163       ✘     ✔     ✔     ✘     ✔     ✘    
Sohu      ✘     ✔     ✔     ✘     ✔     ✘    
Yandex    ✘     ✔     ✔     ✘     ✔     ✘    
Gmail     ✘     ✔     ✘     ✘     ✘     ✘    
Outlook   ✘     ✘     ✔     ✘     ✔     ✘    
Office365 ✘     ✘     ✔     ✘     ✔     ✘    
Yahoo     ✘     ✔     ✘     ✘     ✘     ✘    
MailCOM   ✘     ✔     ✔     ✘     ✔     ✘    
MailRU    ✘     ✔     ✘     ✘     ✔     ✘    
AOL       ✘     ✔     ✘     ✘     ✘     ✘    
GMX       ✘     ✘     ✔     ✘     ✔     ✘    
Sina      ✘     ✘     ✔     ✘     ✔     ✘    
Apple     ✘     ✘     ✘     ✘     ✘     ✘    
FastMail  ✘     ✔     ✘     ✘     ✘     ✘    
ProtonMail✘     ✘     ✘     ✘     ✘     ✘    
MXRoute   ✘     ✘     ✔     ✘     ✔     ✘    
Namecrane ✘     ✔     ✔     ✘     ✔     ✘    
XYAMail   ✘     ✘     ✘     ✘     ✘     ✘    
ZohoMail  ✘     ✔     ✘     ✘     ✘     ✘    
Inbox_eu  ✘     ✔     ✔     ✘     ✘     ✘    
Free_fr   ✘     ✔     ✔     ✘     ✔     ✘    
-------------------------------------三网回程线路检测-------------------------------------
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 104.21.32.1 - 68.66ms - Misaka.BER
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.31 ms      AS149440                      美国, 加利福尼亚州, 圣克拉拉, evoxt.com 
0.51 ms      *                             
*
2.73 ms      AS1299     [ARELION-NET]      瑞典, 斯德哥尔摩省, 斯德哥尔摩, arelion.com 
196.23 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
197.72 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
207.62 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
269.49 ms    AS4134     [CHINANET-GD]      中国, 广东, 深圳, www.chinatelecom.com.cn  电信
*
209.22 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.31 ms      AS149440                      美国, 加利福尼亚州, 圣克拉拉, evoxt.com 
0.43 ms      *                             
*
1.47 ms      AS1299     [ARELION-NET]      荷兰, 北荷兰省, 阿姆斯特丹, arelion.com 
7.97 ms      AS1299     [ARELION-NET]      德国, 黑森州, 美因河畔法兰克福, arelion.com 
10.64 ms     AS1299     [ARELION-NET]      德国, 黑森州, 美因河畔法兰克福, arelion.com 
108.62 ms    AS4837     [CU169-BACKBONE]   德国, 黑森, 美因河畔法兰克福, chinaunicom.cn 
157.89 ms    AS4837     [CU169-BACKBONE]   中国, 北京, chinaunicom.cn  联通
150.38 ms    AS4837     [CU169-BACKBONE]   中国, 北京, chinaunicom.cn  联通
*
*
155.59 ms    AS17816    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
174.78 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
160.57 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.52 ms      AS149440                      美国, 加利福尼亚州, 圣克拉拉, evoxt.com 
5.91 ms      *                             
*
1.23 ms      AS1299     [ARELION-NET]      荷兰, 北荷兰省, 阿姆斯特丹, arelion.com 
106.62 ms    AS1299     [ARELION-NET]      英国, 英格兰, 伦敦, arelion.com 
7.53 ms      AS1299     [ARELION-NET]      英国, 英格兰, 伦敦, arelion.com 
8.52 ms      AS1299     [ARELION-NET]      英国, 英格兰, 伦敦, arelion.com 
8.68 ms      AS58453    [CMI-INT]          英国, 英格兰, 伦敦, cmi.chinamobile.com 
207.19 ms    AS58453    [CMI-INT]          中国, 广东, 广州, cmi.chinamobile.com  移动
208.27 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
213.09 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
204.86 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
205.14 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
208.77 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
209.07 ms    AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   941.36 Mbps     942.82 Mbps     0.55 ms         0.0%            
法兰克福        828.08 Mbps     379.74 Mbps     7.70 ms         0.0%            
洛杉矶          577.99 Mbps     3509.87 Mbps    152.05 ms       0.0%            
联通Wu Xi       562.64 Mbps     4311.81 Mbps    170.16 ms       0.0%            
联通上海5G      458.63 Mbps     4425.14 Mbps    182.58 ms       0.0%            
电信浙江        246.18 Mbps     1033.23 Mbps    199.37 ms       Not available.  
电信Suzhou5G    251.48 Mbps     1753.45 Mbps    190.07 ms       Not available.  
移动Fujian      69.67 Mbps      1617.05 Mbps    239.10 ms       Not available.  
----------------------------------------------------------------------------------
花费          : 9 分 25 秒
时间          : Mon Jan 20 22:46:14 EST 2025
----------------------------------------------------------------------------------
```

### PassMark PerformanceTest Linux

```
AMD EPYC-Genoa Processor (x86_64)
2 cores @ 0 MHz  |  1.9 GiB RAM
Number of Processes: 2  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------
CPU Mark:                          6820
  Integer Math                     16344 Million Operations/s
  Floating Point Math              13190 Million Operations/s
  Prime Numbers                    48.5 Million Primes/s
  Sorting                          9504 Thousand Strings/s
  Encryption                       3407 MB/s
  Compression                      63254 KB/s
  CPU Single Threaded              3573 Million Operations/s
  Physics                          838 Frames/s
  Extended Instructions (SSE)      5529 Million Matrices/s

Memory Mark:                       1627
  Database Operations              2199 Thousand Operations/s
  Memory Read Cached               34713 MB/s
  Memory Read Uncached             29479 MB/s
  Memory Write                     18770 MB/s
  Available RAM                    1294 Megabytes
  Memory Latency                   68 Nanoseconds
  Memory Threaded                  37906 MB/s
--------------------------------------------------------------------------
```

### BGP

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-17.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-17.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-17.jpg" alt="" loading="lazy">
</picture>
