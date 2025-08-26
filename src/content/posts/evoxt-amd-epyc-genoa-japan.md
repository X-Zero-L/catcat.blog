---
tags: [jp-server]
title: "Evoxt AMD EPYC-Genoa 东京测评"
published: 2025-02-28
---

Evoxt 是一家成立于 2020 年的 VPS 提供商，旨在以竞争力的价格提供高性能虚拟机，专注于改变云虚拟机行业的高价和低性能现状。他们使用 KVM 超管理程序和企业级硬件，确保性能和可靠性。服务包括虚拟机管理（如监控、IP 地址管理、防火墙、克隆、子账户、备份、VNC 和 API）、安全功能（如隔离环境、三层防火墙、DDoS 保护和每周自动异地备份）以及全球可用性，覆盖 14 个地区，包括洛杉矶、蒙特利尔、纽约、伦敦、阿姆斯特丹、法兰克福、苏黎世、吉隆坡、悉尼、香港、大阪和东京。

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

- **_Provider :_ Evoxt**

- **_Type/Plan : **VM-2**_**

- **_Processor : AMD EPYC-Genoa_**

- **_Num of Core : 1 Cores_**

- **_Memory : 2 GB_**

- **_Storage :_** **_20_** **_GB NVMe_**

- **_Bandwidth : 1TB @ 1 Gbps IN | 1 Gbps OUT_**

- **_Location :_ JP**

- _**Price :**_ **_\$_5.99**

## 测评

### CPU

```shell
❯ lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  1
  On-line CPU(s) list:   0
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        Red Hat
  Model name:            AMD EPYC-Genoa Processor
    BIOS Model name:     RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               17
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           1
    Stepping:            0
    BogoMIPS:            7386.03
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
  L1d:                   32 KiB (1 instance)
  L1i:                   32 KiB (1 instance)
  L2:                    1 MiB (1 instance)
  L3:                    32 MiB (1 instance)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0
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

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 21 hours, 1 minutes
Processor  : AMD EPYC-Genoa Processor
CPU cores  : 1 @ 3693.018 MHz
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
Host       : Evoxtv6 10 TYO
Location   : Shibuya, Tokyo (13)
Country    : Japan

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 123.62 MB/s  (30.9k) | 1.23 GB/s    (19.3k)
Write      | 123.95 MB/s  (30.9k) | 1.24 GB/s    (19.4k)
Total      | 247.58 MB/s  (61.8k) | 2.48 GB/s    (38.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.56 GB/s     (3.0k) | 1.50 GB/s     (1.4k)
Write      | 1.64 GB/s     (3.2k) | 1.60 GB/s     (1.5k)
Total      | 3.21 GB/s     (6.2k) | 3.10 GB/s     (3.0k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 631 Mbits/sec   | 581 Mbits/sec   | 234 ms         
Eranium         | Amsterdam, NL (100G)      | 534 Mbits/sec   | 650 Mbits/sec   | 265 ms         
Uztelecom       | Tashkent, UZ (10G)        | busy            | 424 Mbits/sec   | 353 ms         
Leaseweb        | Singapore, SG (10G)       | 1.63 Gbits/sec  | 2.13 Gbits/sec  | -- 
Clouvider       | Los Angeles, CA, US (10G) | 1.35 Gbits/sec  | 1.38 Gbits/sec  | 111 ms         
Leaseweb        | NYC, NY, US (10G)         | 807 Mbits/sec   | 1.04 Gbits/sec  | 170 ms         
Edgoo           | Sao Paulo, BR (1G)        | 452 Mbits/sec   | 524 Mbits/sec   | 278 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | busy            | 6.92 Mbits/sec  | 236 ms         
Eranium         | Amsterdam, NL (100G)      | 592 Mbits/sec   | 614 Mbits/sec   | 265 ms         
Uztelecom       | Tashkent, UZ (10G)        | busy            | 203 Mbits/sec   | 353 ms         
Leaseweb        | Singapore, SG (10G)       | 1.31 Gbits/sec  | 1.73 Gbits/sec  | -- 
Clouvider       | Los Angeles, CA, US (10G) | 1.68 Gbits/sec  | 844 Mbits/sec   | 111 ms         
Leaseweb        | NYC, NY, US (10G)         | 812 Mbits/sec   | 1.03 Gbits/sec  | 170 ms         
Edgoo           | Sao Paulo, BR (1G)        | 590 Mbits/sec   | 501 Mbits/sec   | 278 ms         
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.3-2.el9_5.1

处理器信息
  Name                          AMD EPYC-Genoa Processor
  Topology                      1 Processor, 1 Core
  Identifier                    AuthenticAMD Family 25 Model 17 Stepping 0
  Base Frequency                3.69 GHz
  L1 Instruction Cache          32.0 KB
  L1 Data Cache                 32.0 KB
  L2 Cache                      1.00 MB
  L3 Cache                      32.0 MB

内存信息
  Size                          1.92 GB

单核测试分数：1633
多核测试分数：1677
详细结果链接：https://browser.geekbench.com/v5/cpu/23373403
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC-Genoa
```

### UnixBench

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: zero.evoxt: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC-Genoa Processor (7386.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, SYSCALL/SYSRET
   20:48:25 up 21:24,  5 users,  load average: 0.26, 0.77, 0.69; runlevel 2025-02-26

------------------------------------------------------------------------
Benchmark Run: Thu Feb 27 2025 20:48:25 - 21:16:28
1 CPU in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       66822795.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    11342.6 MWIPS (10.4 s, 7 samples)
Execl Throughput                               5138.8 lps   (29.9 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1846454.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          536316.6 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks        787941.5 KBps  (30.1 s, 2 samples)
Pipe Throughput                              569040.6 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  61113.1 lps   (10.0 s, 7 samples)
Process Creation                               2167.5 lps   (30.1 s, 2 samples)
Shell Scripts (1 concurrent)                   1680.2 lpm   (60.1 s, 2 samples)
Shell Scripts (8 concurrent)                    451.2 lpm   (60.1 s, 2 samples)
System Call Overhead                         828588.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   66822795.7   5726.0
Double-Precision Whetstone                       55.0      11342.6   2062.3
Execl Throughput                                 43.0       5138.8   1195.1
File Copy 1024 bufsize 2000 maxblocks          3960.0    1846454.2   4662.8
File Copy 256 bufsize 500 maxblocks            1655.0     536316.6   3240.6
File Copy 4096 bufsize 8000 maxblocks          5800.0     787941.5   1358.5
Pipe Throughput                               12440.0     569040.6    457.4
Pipe-based Context Switching                   4000.0      61113.1    152.8
Process Creation                                126.0       2167.5    172.0
Shell Scripts (1 concurrent)                     42.4       1680.2    396.3
Shell Scripts (8 concurrent)                      6.0        451.2    752.0
System Call Overhead                          15000.0     828588.6    552.4
                                                                   ========
System Benchmarks Index Score                                         954.7
```

### Bench

```shell
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2024-11-11
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC-Genoa Processor
 CPU Cores          : 1 @ 3693.018 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✗ Disabled
 Total Disk         : 21.6 GB (8.0 GB Used)
 Total Mem          : 1.9 GB (1003.9 MB Used)
 Total Swap         : 2.0 GB (373.0 MB Used)
 System uptime      : 0 days, 22 hour 5 min
 Load average       : 0.16, 1.21, 2.22
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS149440 Evoxt Enterprise
 Location           : Tokyo / JP
 Region             : Tokyo
----------------------------------------------------------------------
 I/O Speed(1st run) : 622 MB/s
 I/O Speed(2nd run) : 488 MB/s
 I/O Speed(3rd run) : 547 MB/s
 I/O Speed(average) : 552.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    2853.31 Mbps      2673.89 Mbps        0.71 ms     
 Paris, FR        379.82 Mbps       435.41 Mbps         239.58 ms   
 Amsterdam, NL    106.18 Mbps       608.77 Mbps         330.15 ms   
 Shanghai, CN     149.72 Mbps       402.40 Mbps         299.98 ms   
 Hong Kong, CN    2.81 Mbps         0.42 Mbps           190.32 ms   
 Singapore, SG    265.03 Mbps       400.94 Mbps         99.97 ms    
 Tokyo, JP        2586.55 Mbps      2509.79 Mbps        1.57 ms     
----------------------------------------------------------------------
 Finished in        : 3 min 51 sec
 Timestamp          : 2025-02-27 21:32:37 EST
```

### 流媒体测试

### IPv4

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-48.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-48.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-48.jpg" alt="" loading="lazy">
</picture>

### IPv6

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-49.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-49.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-49.jpg" alt="" loading="lazy">
</picture>

### 融合怪测试

```shell
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC-Genoa Processor @3693.018 MHz
 CPU 数量            : 1 Virtual CPU(s)
 CPU 缓存            : L1: 64 KB / L2: 1 MB / L3: 32 MB
 GPU 型号            : GD 5446
 GPU 状态            : 0.000000
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 1.04 GB / 1.92 GB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : 366.25 MB / 2.00 GB
 硬盘空间            : 7.86 GB / 19.58 GB
 启动盘路径          : /dev/vda1
 系统                : debian 12.9 [x86_64] 
 内核                : 6.1.0-9-amd64
 系统在线时间        : 0 days, 22 hours, 17 minutes
 时区                : EST
 负载                : 0.82 / 1.14 / 1.75
 虚拟化架构          : KVM
 NAT类型             : Full Cone
 TCP加速方式         : cubic
 IPV4 ASN            : AS149440 Evoxt Enterprise
 IPV4 Location       : Tokyo / Tokyo / Japan
 IPV6 ASN            : AS149440 Evoxt Enterprise
 IPV6 Location       : Shibuya City / Tokyo / Malaysia
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:    813.91
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 5333.87 MB/s(5.59K IOPS, 5s)
单线程顺序读速度: 10132.98 MB/s(10.63K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       34.13 MB/s(8532)        34.23 MB/s(8557)        68.36 MB/s(17.1k)       
/root         64k      308.09 MB/s(4813)       309.71 MB/s(4839)       617.81 MB/s(9652)       
/root         512k     681.64 MB/s(1331)       717.86 MB/s(1402)       1.40 GB/s(2733)         
/root         1m       1.13 GB/s(1102)         1.20 GB/s(1175)         2.33 GB/s(2277)         
-------------------------------------御三家流媒体解锁-------------------------------------
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：英国
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 日本 东京(NRT20S05)
Youtube识别地域: 日本(JP)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：KEeZW2EJDg7A9UXzAxwJA 区
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Dazn                      Banned
Disney+                   NO (forbidden-location)
Netflix                   Restricted (Originals Only)
Netflix CDN               HK
YouTube Region            YES (Region: JP) [Native]
YouTube CDN               NRT
Amazon Prime Video        YES (Region: JP) [Native]
Paramount+                YES [Native]
TVBAnywhere+              YES (Region: JP) [Native]
IQiYi                     YES (Region: US) [Native]
Viu.com                   YES [Native]
Spotify Registration      YES (Region: JP) [Native]
Steam Store               YES (Community Available) (Region: JP)
ChatGPT                   YES (Region: JP) [Native]
Sora                      YES (Region: JP)
Claude                    YES [Native]
Gemini                    YES (Region: JPN) [Native]
MetaAI                    YES (Region: US) [Native]
Apple                     YES (Region: JPN) [Native]
Wikipedia Editability     YES
Reddit                    NO
TikTok                    YES (Region: JP) [Native]
BingSearch                YES (Region: JP)
Instagram Licensed Audio  YES [Native]
KOCOWA                    NO
SonyLiv                   Banned
OneTrust                  YES (Region: JP TOKYO) [Via DNS]
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
欺诈得分(越低越好): 25 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0016 (Low) [A] 
公司滥用得分(越低越好): 0.0038 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 94 [2]  
安全信息:
使用类型: hosting - high probability [C] hosting [0 7 9 A] DataCenter/WebHosting/Transit [3]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7 D] 
是否数据中心: Yes [0 1 A C] No [5 6 8]
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
DNS-黑名单: 313(Total_Check) 0(Clean) 6(Blacklisted) 17(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0016 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] hosting [A]
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
DNS-黑名单: 313(Total_Check) 0(Clean) 0(Blacklisted) 313(Other) 
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
北京电信 219.141.140.10  电信163    [普通线路] 
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  检测不到回程路由节点的IP地址
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     检测不到回程路由节点的IP地址
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 移动CMIN2  [精品线路] 
-------------------------------------三网回程路由检测-------------------------------------
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.42 ms      AS149440                      美国, 俄克拉荷马州, 克林顿, evoxt.com 
0.70 ms      AS58325                       加拿大, 安大略省, 多伦多, bandwidth.co.uk 
0.75 ms      AS3491                        日本, 东京都, 东京, pccwglobal.com 
*
*
100.67 ms    AS3491     [PCCWG]            美国, 加利福尼亚, 圣何塞, pccwglobal.com 
101.02 ms    *          [NSFNET-T3]        美国, 加利福尼亚, 圣何塞
105.06 ms    AS701      [UU-152]           美国, 加利福尼亚, 圣何塞, verizon.com 
500.12 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn  电信
*
300.06 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn 
*
*
272.92 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.31 ms      AS149440                      美国, 俄克拉荷马州, 克林顿, evoxt.com 
0.51 ms      AS58325                       加拿大, 安大略省, 多伦多, bandwidth.co.uk 
0.55 ms      AS3491                        日本, 东京都, 东京, pccwglobal.com 
*
100.81 ms    AS3491     [PCCW-BACKBONE]    美国, 加利福尼亚, 圣何塞, pccwglobal.com 
*
108.72 ms    *          [NSFNET-T3]        美国, 加利福尼亚, 洛杉矶
298.14 ms    AS701      [UUNETCUSTB40]     美国, 加利福尼亚, 洛杉矶, verizon.com 
276.77 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
293.71 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
*
302.45 ms    AS17816    [UNICOM-GD]        中国, 广东, 深圳, chinaunicom.cn  联通
303.52 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
301.01 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.29 ms      AS149440                      美国, 俄克拉荷马州, 克林顿, evoxt.com 
0.37 ms      AS58325                       加拿大, 安大略省, 多伦多, bandwidth.co.uk 
0.53 ms      AS3491                        日本, 东京都, 东京, pccwglobal.com 
*
65.51 ms     AS58453    [CMI-INT]          新加坡, cmi.chinamobile.com  移动
74.79 ms     AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com  移动
179.38 ms    AS58453    [CMI-INT]          中国, 广东, 广州, cmi.chinamobile.com  移动
179.02 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
178.97 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
79.79 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
87.09 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
85.75 ms     AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
----------------------------------------------------------------------------------
Cost    Time          : 3 min 58 sec
Current Time          : Thu Feb 27 21:44:37 EST 2025
----------------------------------------------------------------------------------
```