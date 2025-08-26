---
tags: [eu-server]
title: "Verasel  一个神秘的商家"
published: 2025-07-07
---

**最近在Low 10G不限量的杜甫的帖子下面遇到的神秘商家，和他聊了聊，提供了我台服务器。至于说为什么神秘，且听我道来。首先根据描述得知主要提供高带宽、高可用性的专用服务器，不提供 VPS，服务定位于稳定运行与客户隐私保护，因此他们完全没用计费面板，一切来源于线下（这非常夸张），发票与账单采用加密文本邮件发送，仅接受加密货币付款。网络方面拥有充足带宽资源和多个 ASN，支持跨 ASN 提供服务，支持更换 IP、无理由、不收费（IP 分配策略这也太灵活了）遇到网络拥塞会主动 reroute（重路由），****算****也是较高级的托管服务商能力表现。**

## 配置

- **CPU ： Intel(R) Xeon(R) CPU E3-1230 V2 @ 3.30GHz**

- **MEM ：4 x 8 GB DDR3-1600MT/s M391B1G73BH0-YK0**

- **DISK ：1\*480GB Verbatim Vi550**

- **Network : 1G Port Broadcom Inc. and subsidiaries NetXtreme II BCM5716 Gigabit Ethernet**

- **Bandwidth** : **unlimited** 

## 测评

### CPU

```shell
Architecture:                x86_64
  CPU op-mode(s):            32-bit, 64-bit
  Address sizes:             36 bits physical, 48 bits virtual
  Byte Order:                Little Endian
CPU(s):                      8
  On-line CPU(s) list:       0-7
Vendor ID:                   GenuineIntel
  BIOS Vendor ID:            Intel(R) Corporation
  Model name:                Intel(R) Xeon(R) CPU E3-1230 V2 @ 3.30GHz
    BIOS Model name:         Intel(R) Xeon(R) CPU E3-1230 V2 @ 3.30GHz FFFF CPU @ 3.3GHz
    BIOS CPU family:         179
    CPU family:              6
    Model:                   58
    Thread(s) per core:      2
    Core(s) per socket:      4
    Socket(s):               1
    Stepping:                9
    CPU(s) scaling MHz:      46%
    CPU max MHz:             3700.0000
    CPU min MHz:             1600.0000
    BogoMIPS:                6584.56
    Flags:                   fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx rdtscp lm constant_                             tsc arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc cpuid aperfmperf pni pclmulqdq dtes64 monitor ds_cpl smx est tm2 ssse3 cx16 xtpr pdcm pc                             id sse4_1 sse4_2 x2apic popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm cpuid_fault epb pti fsgsbase smep erms xsaveopt dtherm ida arat pl                             n pts
Caches (sum of all):         
  L1d:                       128 KiB (4 instances)
  L1i:                       128 KiB (4 instances)
  L2:                        1 MiB (4 instances)
  L3:                        8 MiB (1 instance)
NUMA:                        
  NUMA node(s):              1
  NUMA node0 CPU(s):         0-7
Vulnerabilities:             
  Gather data sampling:      Not affected
  Indirect target selection: Not affected
  Itlb multihit:             KVM: Mitigation: VMX unsupported
  L1tf:                      Mitigation; PTE Inversion
  Mds:                       Vulnerable: Clear CPU buffers attempted, no microcode; SMT vulnerable
  Meltdown:                  Mitigation; PTI
  Mmio stale data:           Unknown: No mitigations
  Reg file data sampling:    Not affected
  Retbleed:                  Not affected
  Spec rstack overflow:      Not affected
  Spec store bypass:         Vulnerable
  Spectre v1:                Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:                Mitigation; Retpolines; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
  Srbds:                     Vulnerable: No microcode
  Tsx async abort:           Not affected
```

### 硬件检测

```shell
════════════════════════════════════════════════════════════════════════════════
                                    系统硬件信息报告                                    
════════════════════════════════════════════════════════════════════════════════

┌─ 系统信息
├──────
│ 主机名              : A19S28
│ 操作系统            : Debian GNU/Linux 12 (bookworm)
│ 内核版本            : 6.1.0-37-amd64
│ 运行时间            : up 1 hour, 39 minutes
└──────────────────────────────────────────────────
┌─ 处理器信息
├───────
│ 型号                : Intel(R) Xeon(R) CPU E3-1230 V2 @ 3.30GHz
│ 核心数              : 4
│ 线程数              : 8
│ 频率                : 3243.404 MHz
│ 缓存                : 8192 KB
│ 使用率              : 25.0%
└──────────────────────────────────────────────────
┌─ 内存信息
├──────
│ 总计                : 31.31 GB
│ 已用                : 552Mi
│ 可用                : 30.77 GB
│
│ Memory Modules:
├────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 大小     │ 类型   │ 频率         │ 制造商       │ 序列号          │ 型号                 │
├────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 8 GB     │ DDR3   │ 1600 MT/s    │ 80CE000080CE │ 35C07BC8        │ M391B1G73BH0-YK0     │
│ 8 GB     │ DDR3   │ 1600 MT/s    │ 80CE000080CE │ 35C07AD2        │ M391B1G73BH0-YK0     │
│ 8 GB     │ DDR3   │ 1600 MT/s    │ 80CE000080CE │ 35C07BC9        │ M391B1G73BH0-YK0     │
│ 8 GB     │ DDR3   │ 1600 MT/s    │ 80CE000080CE │ 35C07B87        │ M391B1G73BH0-YK0     │
└────────────────────────────────────────────────────────────────────────────────────────────────────┘
└──────────────────────────────────────────────────
┌─ 硬盘信息
├──────
│ /dev/mapper/A19S28--vg-root  464G  1.6G  439G   1% /
│ /dev/sda1                    943M   92M  787M  11% /boot
│
│ Physical Disks Details:
│
│ ═══ /dev/sda ═══
│   Basic Info: 476.9G Verbatim Vi550 S3 ATA     
│   SMART状态: PASSED
│   通电时间: 2 hours
│   Data Transfer Statistics:
│     总读取量: 8.0 KB (SMART硬件累计)
│     总写入量: 18.5 KB (SMART硬件累计)
│   温度: 28°C
└──────────────────────────────────────────────────
┌─ RAID控制器信息
├───────────
│ 状态                : 未检测到
└──────────────────────────────────────────────────
┌─ 网卡信息
├──────
│
│ ═══ eno1 ═══
│   型号: Broadcom Inc. and subsidiaries NetXtreme II BCM5716 Gigabit Ethernet (rev 20)
│   状态: DOWN
│   MAC地址: d4:ae:52:XX:XX:XX
│   链接检测: No
│   RX: 0 GB
│   TX: 0 GB
│
│ ═══ eno2 ═══
│   型号: Broadcom Inc. and subsidiaries NetXtreme II BCM5716 Gigabit Ethernet (rev 20)
│   状态: UP
│   IPv4: 194.113.XX.XX/25
│   IPv6: fe80::XX:XX::/64
│   MAC地址: d4:ae:52:XX:XX:XX
│   速度: 1000 Mbps
│   双工模式: full
│   链接检测: Yes
│   RX: 48.35 GB
│   TX: 45.97 GB
└──────────────────────────────────────────────────
┌─ 显卡信息
├──────
│
│ Graphics Cards (PCI):
│   02:03.0 VGA compatible controller: Matrox Electronics Systems Ltd. MGA G200eW WPCM450 (rev 0a)
│
│ Display Hardware Summary:
│   ============================================================
│   /0/100/1e/3            /dev/fb0   display        MGA G200eW WPCM450
└──────────────────────────────────────────────────
┌─ 主板信息
├──────
│ 厂商                : Dell Inc.
│ 型号                : 03X6X0
│ Version             : A06
│ BIOS Vendor         : Dell Inc.
│ BIOS Version        : 2.5.1
└──────────────────────────────────────────────────
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 11 minutes
Processor  : Intel(R) Xeon(R) CPU E3-1230 V2 @ 3.30GHz
CPU cores  : 8 @ 1600.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 31.3 GiB
Swap       : 3.8 GiB
Disk       : 464.6 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-37-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Verasel, Inc.
ASN        : AS200195 Verasel, Inc.
Host       : Host Telecom LTD
Location   : Shibuya, Tokyo (13)
Country    : Japan

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/mapper/A19S28--vg-root):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 90.65 MB/s   (22.6k) | 125.05 MB/s   (1.9k)
Write      | 90.89 MB/s   (22.7k) | 125.71 MB/s   (1.9k)
Total      | 181.54 MB/s  (45.3k) | 250.76 MB/s   (3.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 130.65 MB/s    (255) | 129.81 MB/s    (126)
Write      | 137.59 MB/s    (268) | 138.46 MB/s    (135)
Total      | 268.24 MB/s    (523) | 268.28 MB/s    (261)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 939 Mbits/sec   | 940 Mbits/sec   | 6.99 ms        
Eranium         | Amsterdam, NL (100G)      | 941 Mbits/sec   | 941 Mbits/sec   | 0.547 ms       
Uztelecom       | Tashkent, UZ (10G)        | 888 Mbits/sec   | 503 Mbits/sec   | 87.6 ms        
Leaseweb        | Singapore, SG (10G)       | 809 Mbits/sec   | 563 Mbits/sec   | -- 
Clouvider       | Los Angeles, CA, US (10G) | 835 Mbits/sec   | 502 Mbits/sec   | 136 ms         
Leaseweb        | NYC, NY, US (10G)         | 884 Mbits/sec   | 686 Mbits/sec   | 75.0 ms        
Edgoo           | Sao Paulo, BR (1G)        | 740 Mbits/sec   | 391 Mbits/sec   | 193 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 752                           
Multi Core      | 2653                          
Full Test       | https://browser.geekbench.com/v6/cpu/12712018

YABS completed in 14 min 5 sec
```

### IP质量测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-11.jpg" alt="image" loading="lazy">
</picture>

### 线路测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-12.jpg" alt="image" loading="lazy">
</picture>

### BGP

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-13.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-13.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-13.jpg" alt="image" loading="lazy">
</picture>

### 网络测试

```shell
---------------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E3-1230 V2 @ 3.30GHz
 CPU Cores          : 8 @ 2158.382 MHz
 CPU Cache          : 8192 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ❌ Disabled
 Total Disk         : 464.6 GB (1.6 GB Used)
 Total RAM          : 31.3 GB (536.7 MB Used)
 Total Swap         : 3.8 GB (0 Used)
 System uptime      : 0 days, 0 hour 29 min
 Load average       : 0.21, 0.98, 0.88
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-37-amd64
 Virtualization     : NONE
 TCP Control        : bbr
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv4
 IPv6 Access        : ❌ Offline
 IPv4 Access        : ✔ Online
 ISP                : Verasel, Inc.
 ASN                : AS200195 Verasel, Inc.
 Host               : Host Telecom LTD
 Location           : Shibuya, Tokyo-13, Japan
 Location (IPv4)    : Amsterdam, North Holland, NL
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Verasel 

 Nearest          29.82 ms    0.5%    947.82 Mbps    935.39 Mbps    SKYNET BG - Sofia 

 Kochi, IN        225.27 ms   0.0%    684.89 Mbps    497.02 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    134.83 ms   0.0%    881.74 Mbps    655.31 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      254.01 ms   0.0%    769.68 Mbps    349.57 Mbps    Jio - Chennai 
 Mumbai, IN       119.91 ms   0.0%    1016.86 Mbps   913.20 Mbps    Melbicom - Mumbai 
 Delhi, IN        160.38 ms   0.0%    926.91 Mbps    559.07 Mbps    Tata Play Fiber - New Delhi 

 Seattle, US      137.26 ms   N/A     937.99 Mbps    640.01 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  131.14 ms   0.0%    824.81 Mbps    686.22 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       112.01 ms   0.0%    719.22 Mbps    881.56 Mbps    Hivelocity - Dallas, TX 
 Miami, US        121.20 ms   0.0%    946.84 Mbps    937.47 Mbps    Telxius - Miami, FL 
 New York, US     73.71 ms    0.0%    978.06 Mbps    913.76 Mbps    GSL Networks - New York, NY 
 Toronto, CA      91.38 ms    0.0%    947.03 Mbps    886.17 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  179.65 ms   N/A     924.14 Mbps    503.21 Mbps    INFINITUM - Ciudad de México 

 London, UK       6.24 ms     0.0%    951.48 Mbps    948.02 Mbps    VeloxServ Communications - London 
 Amsterdam, NL    42.31 ms    0.0%    966.62 Mbps    926.00 Mbps    31173 Services AB - Amsterdam 
 Paris, FR        10.95 ms    N/A     950.06 Mbps    939.74 Mbps    Axione - Paris 
 Frankfurt, DE    6.36 ms     0.0%    948.62 Mbps    948.79 Mbps    Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       17.90 ms    0.0%    955.91 Mbps    942.49 Mbps    Play - Warszawa 
 Bucharest, RO    32.82 ms    0.0%    959.00 Mbps    924.29 Mbps    Vodafone Romania Mobile - Bucharest - Bucharest 
 Moscow, RU       41.80 ms    0.0%    348.25 Mbps    935.04 Mbps    t2 Russia - Moscow 

 Jeddah, SA       75.58 ms    0.0%    991.32 Mbps    908.90 Mbps    Saudi Telecom Company 
 Dubai, AE        118.40 ms   N/A     995.65 Mbps    198.42 Mbps    e& UAE - Dubai 
 Istanbul, TR     43.16 ms    0.0%    951.79 Mbps    919.17 Mbps    Turkcell - Istanbul 
 Tehran, IR       FAILED                                                        
 Cairo, EG        72.76 ms    N/A     953.39 Mbps    898.52 Mbps    Orange Egypt - Cairo 

 Tokyo, JP        209.98 ms   N/A     1078.04 Mbps   815.31 Mbps    GSL Networks - Tokyo 
 Shanghai, CU-CN  FAILED                                                        
 Suzhou, CT-CN    FAILED                                                        
 Hong Kong, CN    166.08 ms   N/A     546.46 Mbps    117.90 Mbps    Misaka Network, Inc. - Hong Kong 
 Singapore, SG    FAILED                                                        
 Jakarta, ID      FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 888.57 Mbps
 Avg UL Speed       : 760.79 Mbps

 Total DL Data      : 31.79 GB
 Total UL Data      : 24.17 GB
 Total Data         : 55.95 GB
---------------------------------------------------------------------------
 Duration           : 16 min 1 sec
 System Time        : 04/07/2025 - 06:21:34 UTC
 Total Script Runs  : 117392
---------------------------------------------------------------------------
```