---
title: "Nube.sh AMD EPYC 7663 圣何塞优化线路 测评"
published: 2025-03-03
---

促销不再赘述了，详情可见 [Nube.sh 弹性云折扣](https://catcat.blog/nube-sh.html)

## LG

**美国，圣何塞（中国优化）  
Test IP：65.75.222.76**

## 套餐

**_Provider : Nube Cloud  
Type/Plan : a3s.1c1g  
Processor : AMD EPYC 7763 64-Core  
Num of Core : 1 Cores  
Memory : 1 GB  
Storage : 10 GB NVMe  
Location : US  
Price : **_\$_** 0.9733/ Month_** **__\$__0.0187/ GB** （流量计费，只计实际发出流量，不计流入流量）

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image.jpg" alt="" loading="lazy">
</picture>

## 测评

### CPU

```shell
root@VM-SJC1-EWSTB56ZRX:~# lscpu
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          48 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   1
  On-line CPU(s) list:    0
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         Red Hat
  Model name:             AMD EPYC 7663 56-Core Processor
    BIOS Model name:      RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
    BIOS CPU family:      1
    CPU family:           25
    Model:                1
    Thread(s) per core:   1
    Core(s) per socket:   1
    Socket(s):            1
    Stepping:             1
    BogoMIPS:             4000.00
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good 
                          nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hype                          rvisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adj                          ust bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves clzero xsaveerptr wbnoinvd arat npt nrip_save um                          ip pku ospke vaes vpclmulqdq rdpid fsrm arch_capabilities
Virtualization features:  
  Virtualization:         AMD-V
  Hypervisor vendor:      KVM
  Virtualization type:    full
Caches (sum of all):      
  L1d:                    64 KiB (1 instance)
  L1i:                    64 KiB (1 instance)
  L2:                     512 KiB (1 instance)
  L3:                     16 MiB (1 instance)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0
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
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; Retpolines; IBPB conditional; IBRS_FW; STIBP disabled; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 2 days, 18 hours, 11 minutes
Processor  : AMD EPYC 7663 56-Core Processor
CPU cores  : 1 @ 2000.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 861.1 MiB
Swap       : 0.0 KiB
Disk       : 9.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-21-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Eons Data Communications Limited
ASN        : AS138997 Eons Data Communications Limited
Host       : metropolis networks inc
Location   : San Jose, California (CA)
Country    : United States

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 68.84 MB/s   (17.2k) | 748.08 MB/s  (11.6k)
Write      | 69.03 MB/s   (17.2k) | 752.02 MB/s  (11.7k)
Total      | 137.88 MB/s  (34.4k) | 1.50 GB/s    (23.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.41 GB/s     (2.7k) | 1.53 GB/s     (1.4k)
Write      | 1.48 GB/s     (2.9k) | 1.63 GB/s     (1.5k)
Total      | 2.90 GB/s     (5.6k) | 3.17 GB/s     (3.0k)
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-21-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.13.0-2.el7

处理器信息
  Name                          AMD EPYC 7663 56-Core Processor                
  Topology                      1 Processor, 1 Core
  Identifier                    AuthenticAMD Family 25 Model 1 Stepping 1
  Base Frequency                2.00 GHz
  L1 Instruction Cache          64.0 KB
  L1 Data Cache                 64.0 KB
  L2 Cache                      512 KB
  L3 Cache                      16.0 MB

内存信息
  Size                          861 MB

单核测试分数：1138
多核测试分数：1045
详细结果链接：https://browser.geekbench.com/v5/cpu/23378220
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%207663
```

### IP/流媒体检测

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-1.jpg" alt="" loading="lazy">
</picture>

### Speedtest

```shell
---------------------------------------------------------------------------
 CPU Model          : AMD EPYC 7663 56-Core Processor
 CPU Cores          : 1 @ 2000.000 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 9.9 GB (3.0 GB Used)
 Total RAM          : 861.1 MB (272.0 MB Used)
 System uptime      : 0 days, 1 hour 23 min
 Load average       : 1.11, 1.57, 0.88
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-21-amd64
 Virtualization     : KVM
 TCP Control        : bbr
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv4
 IPv6 Access        : ❌ Offline
 IPv4 Access        : ✔ Online
 ISP                : Eons Data Communications Limited
 ASN                : AS138997 Eons Data Communications Limited
 Host               : metropolis networks inc
 Location           : San Jose, California-CA, United States
---------------------------------------------------------------------------
 Speedtest.net (Region: CHINA | 中華人民共和國)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Eons Data Communications 

 Nearest          0.43 ms     0.0%    4913.58 Mbps   8659.38 Mbps   EGI Hosting - Santa Clara, CA 

 CU - Shanghai    133.55 ms   0.3%    5866.22 Mbps   744.55 Mbps    China Unicom 5G - Shanghai 
 CM - Beijing     FAILED                                                        
 CU - Beijing     191.69 ms   1.3%    3323.05 Mbps   567.24 Mbps    BJ Unicom - Beijing 
 CT - Nanjing     FAILED                                                        
 CT - Shenzen     FAILED                                                        
 CT - Zhenjiang   164.75 ms   N/A     5465.26 Mbps   138.46 Mbps    China Telecom JiangSu 5G - Zhenjiang 
 CU - Shenyang    FAILED                                                        
 CT - Suzhou      FAILED                                                        
```

### 融合怪Go测试

```shell
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD EPYC 7663 56-Core Processor @2000.000 MHz
 CPU 数量            : 1 Virtual CPU(s)
 CPU 缓存            : L1: 128 KB / L2: 512 KB / L3: 16 MB
 GPU 型号            : Virtio 1.0 GPU
 GPU 状态            : 0.000000
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ✔️ Enabled
 内存                : 331.84 MB / 861.10 MB
 气球驱动            : ✔️ Enabled
 虚拟内存 Swap       : [ no swap partition or swap file detected ]
 硬盘空间            : 3.05 GB / 9.94 GB
 启动盘路径          : /dev/vda1
 系统                : debian 12.9 [x86_64] 
 内核                : 6.1.0-21-amd64
 系统在线时间        : 0 days, 02 hours, 06 minutes
 时区                : HKT
 负载                : 0.05 / 0.02 / 0.05
 虚拟化架构          : KVM
 NAT类型             : Full Cone
 TCP加速方式         : bbr
 IPV4 ASN            : AS138997 Eons Data Communications Limited
 IPV4 Location       : Costa Mesa / California / United States
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   3741.73
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 27451.83 MB/s(28.79K IOPS, 5s)
单线程顺序读速度: 44849.92 MB/s(47.03K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       75.29 MB/s(18.8k)       75.48 MB/s(18.9k)       150.77 MB/s(37.7k)      
/root         64k      836.99 MB/s(13.1k)      841.40 MB/s(13.1k)      1.68 GB/s(26.2k)        
/root         512k     1.96 GB/s(3832)         2.07 GB/s(4036)         4.03 GB/s(7868)         
/root         1m       1.67 GB/s(1633)         1.78 GB/s(1742)         3.46 GB/s(3375)         
-------------------------------------跨国流媒体解锁--------------------------------------
IPV4:
============[ 跨国平台 ]============
Apple                     YES (Region: USA)
BingSearch                YES (Region: US)
Claude                    YES
Dazn                      YES (Region: US)
Disney+                   YES (Region: US)
Gemini                    YES (Region: USA)
GoogleSearch              YES
Google Play Store         YES (Region: US)
IQiYi                     YES (Region: US)
Instagram Licensed Audio  YES
KOCOWA                    YES
MetaAI                    NO (AbraGeoBlocked)
Netflix                   YES (Region: US)
Netflix CDN               US
OneTrust                  YES (Region: US CALIFORNIA)
ChatGPT                   YES (Region: US)
Paramount+                YES
Amazon Prime Video        YES (Region: US)
Reddit                    YES
SonyLiv                   YES (Region: US)
Sora                      YES (Region: US)
Spotify Registration      NO
Steam Store               YES (Community Available) (Region: US)
TVBAnywhere+              YES (Region: US)
TikTok                    YES (Region: US)
Viu.com                   YES
Wikipedia Editability     NO
YouTube Region            YES (Region: US)
YouTube CDN               fcixus - SJC
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 172.67.69.163 - 69.21ms - Misaka.LAX
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.39 ms      AS138997                      美国, 加利福尼亚, 圣何塞, eons.cloud 
0.82 ms      *          [Nube-BB]          美国, 加利福尼亚, 圣何塞
0.42 ms      *          [Nube-BB]          美国, 加利福尼亚, 圣何塞
12.94 ms     AS138997   [Nube-BB]          美国, 加利福尼亚, 圣何塞, eons.cloud 
*
139.76 ms    AS58807    [CMIN2-NET]        美国, 加利福尼亚, 洛杉矶, cmi.chinamobile.com  移动
138.40 ms    AS58807    [CMIN2-NET]        中国, 上海, cmi.chinamobile.com  移动
138.57 ms    AS9808     [CMNET]            中国, 上海, chinamobileltd.com  移动
138.86 ms    AS9808     [CMNET]            中国, 上海, chinamobileltd.com  移动
139.62 ms    AS9808     [CMNET]            中国, 上海, chinamobileltd.com 
169.72 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
186.43 ms    AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
*
263.09 ms    AS134774   [CHINANET-GD]      中国, 广东, 深圳, chinatelecom.cn  电信
*
213.39 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.45 ms      AS138997                      美国, 加利福尼亚, 圣何塞, eons.cloud 
0.82 ms      *          [Nube-BB]          美国, 加利福尼亚, 圣何塞
0.40 ms      *          [Nube-BB]          美国, 加利福尼亚, 圣何塞
0.88 ms      *                             
2.55 ms      AS4837     [CU169-BACKBONE]   美国, 加利福尼亚, 圣何塞, chinaunicom.cn  联通
158.72 ms    AS4837     [CU169-BACKBONE]   中国, 上海, chinaunicom.cn  联通
162.29 ms    AS4837     [CU169-BACKBONE]   中国, 上海, chinaunicom.cn  联通
*
*
177.12 ms    AS17816    [UNICOM-GD]        中国, 广东, 广州, chinaunicom.cn 
189.22 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
170.22 ms    AS17623                       中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.43 ms      AS138997                      美国, 加利福尼亚, 圣何塞, eons.cloud 
0.68 ms      *          [Nube-BB]          美国, 加利福尼亚, 圣何塞
17.82 ms     *          [Nube-BB]          美国, 加利福尼亚, 圣何塞
44.44 ms     AS138997   [Nube-BB]          美国, 加利福尼亚, 圣何塞, eons.cloud 
*
138.87 ms    AS58807    [CMIN2-NET]        美国, 加利福尼亚, 洛杉矶, cmi.chinamobile.com  移动
138.71 ms    AS58807    [CMIN2-NET]        中国, 上海, cmi.chinamobile.com  移动
140.22 ms    AS9808     [CMNET]            中国, 上海, chinamobileltd.com  移动
139.35 ms    AS9808     [CMNET]            中国, 上海, chinamobileltd.com  移动
139.50 ms    AS9808     [CMNET]            中国, 上海, chinamobileltd.com 
164.15 ms    AS9808     [CMNET]            中国, 北京, chinamobileltd.com  移动
165.53 ms    AS9808     [CMNET]            中国, 北京, chinamobileltd.com  移动
*
166.25 ms    AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
洛杉矶          771.86 Mbps     6258.83 Mbps    12.520779ms     N/A             
法兰克福        53.39 Mbps      803.58 Mbps     152.209752ms    N/A             
中国香港        65.47 Mbps      356.86 Mbps     153.60552ms     N/A             
新加坡          44.09 Mbps      411.00 Mbps     178.529106ms    N/A             
----------------------------------------------------------------------------------
花费          : 4 分 1 秒
时间          : Mon Mar 3 20:18:03 HKT 2025
----------------------------------------------------------------------------------
```

### 回城测试

#### 广州电信

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-2.jpg" alt="" loading="lazy">
</picture>

#### 上海电信

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-3.jpg" alt="" loading="lazy">
</picture>

#### 北京电信

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-4.jpg" alt="" loading="lazy">
</picture>

#### 广州联通

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-5.jpg" alt="" loading="lazy">
</picture>

#### 上海联通

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-6.jpg" alt="" loading="lazy">
</picture>

#### 北京联通

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-7.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-7.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-7.jpg" alt="" loading="lazy">
</picture>

#### 广州移动

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-8.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-8.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-8.jpg" alt="" loading="lazy">
</picture>

#### 上海移动

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-9.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-9.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-9.jpg" alt="" loading="lazy">
</picture>

#### 北京移动

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-10.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-10.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-10.jpg" alt="" loading="lazy">
</picture>

### 延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-11.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-12.jpg" alt="" loading="lazy">
</picture>