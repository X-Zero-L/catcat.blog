---
title: "Nube.SH 香港 AMD 9950X 裸金属服务器测评"
published: 2024-11-03
categories: 
  - "vps"
  - "hk-server"
---

更新了一些测试的指标和内容。

## 套餐详情

| 位置 | Cpu | 内存 | 硬盘 | 带宽 | 流量 | IP | 价格 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HK / SG | 9950X | 128 GB DDR5 | 2x1.92TB | 1Gbps | 32TB | IP4/29 + IP6/64 | 388$/mo |

**联系销售**: [https://t.me/BeefyAsian](https://www.nodeseek.com/jump?to=https%3A%2F%2Ft.me%2FBeefyAsian)  
**TG频道**:[https://t.me/KuaiCheDao\_Co](https://www.nodeseek.com/jump?to=https%3A%2F%2Ft.me%2FKuaiCheDao_Co)

### 整体价格

- 月租总价 388 美元：包含硬件租用、服务器电力、网络带宽、IP 地址。

- 网络端口限速 1G。付押金后可提升到 2x10G。(联系销售定制网络端口速率)

- 每月流量 32TB。超出按 4USD/TB 补差价。(联系销售定制网络资源)

- 免费提供 IP4/29 + IP6/64 。(联系销售定制 IP 资源)

### 服务器配置

- 超微 SuperMicro 刀片服务器。不是无机箱，无风道散热设计，无 IPMI 的廉价硬件。

- AMD Ryzen 9 9950X 处理器 / Zen5 架构 / 16 核心 32 线程 / 4.3GHz 突发 5.7GHz 主频 / 64MB 片上 L3 缓存。

- 128GB DDR5 4800MT/s ECC 内存

- 2 片 Intel 1.92TB SSD PCIe 4.0x4 NVMe U.2 企业盘 (联系销售定制系统存储资源)

- 2x 10G 上连接口

### 香港网络

- 香港 BGP：PCCWG + Lumen + Cogent + NTT + GSL + Google 私有互联 + [SG.GS](https://www.nodeseek.com/jump?to=http%3A%2F%2FSG.GS) 私有互联 + EIE 香港 + HKIX + 通过港新海缆骨干通达的新加坡 IXP + 通过港日海缆骨干通达的日本 IXP。

- 测速点 [http://hk-bgp.hkg.lg.kuaichedao.xyz/](https://www.nodeseek.com/jump?to=http%3A%2F%2Fhk-bgp.hkg.lg.kuaichedao.xyz%2F)

- IP 地址定位在香港

### 新加坡

- 新加坡 BGP：PCCWG + Lumen + NTT + GSL + EIE 新加坡 + 通过港新海缆骨干通达的香港 IXP + 通过新港日海缆骨干通达的日本 IXP。

- 测速点 [http://sg-bgp.sin.lg.kuaichedao.xyz/](https://www.nodeseek.com/jump?to=http%3A%2F%2Fsg-bgp.sin.lg.kuaichedao.xyz%2F)

- IP 地址定位在新加坡

## 测评

### CPU

```
root@eons-hkg5-ryzen-2:~# lscpu
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          48 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   32
  On-line CPU(s) list:    0-31
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         Advanced Micro Devices, Inc.
  Model name:             AMD Ryzen 9 9950X 16-Core Processor
    BIOS Model name:      AMD Ryzen 9 9950X 16-Core Processor             Unknown CPU @ 4.3GHz
    BIOS CPU family:      107
    CPU family:           26
    Model:                68
    Thread(s) per core:   2
    Core(s) per socket:   16
    Socket(s):            1
    Stepping:             0
    CPU(s) scaling MHz:   11%
    CPU max MHz:          8180.0000
    CPU min MHz:          600.0000
    BogoMIPS:             8584.03
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext                           fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good amd_lbr_v2 nopl nonstop_tsc cpuid extd_apicid aperfmperf rapl pni pc                          lmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand lahf_lm cmp_legacy svm extapic cr8                          _legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce topoext perfctr_core perfctr_nb bpext perfctr_llc 
                          mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba perfmon_v2 ibrs ibpb stibp ibrs_enhanced vmmcall fsgsbase tsc_adjust bmi1 
                          avx2 smep bmi2 erms invpcid cqm rdt_a avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx5                          12bw avx512vl xsaveopt xsavec xgetbv1 xsaves cqm_llc cqm_occup_llc cqm_mbm_total cqm_mbm_local user_shstk avx_vnni avx                          512_bf16 clzero irperf xsaveerptr rdpru wbnoinvd cppc arat npt lbrv svm_lock nrip_save tsc_scale vmcb_clean flushbyasi                          d decodeassists pausefilter pfthreshold v_vmsave_vmload vgif v_spec_ctrl vnmi avx512vbmi umip pku ospke avx512_vbmi2 g                          fni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid bus_lock_detect movdiri movdir64b overflow_recov 
                          succor smca fsrm avx512_vp2intersect flush_l1d
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
  Spectre v2:             Mitigation; Enhanced / Automatic IBRS; IBPB conditional; STIBP always-on; RSB filling; PBRSB-eIBRS Not affected; BHI N                          ot affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```
Sun Nov  3 11:22:42 AM HKT 2024

Basic System Information:
---------------------------------
Uptime     : 1 days, 12 hours, 22 minutes
Processor  : AMD Ryzen 9 9950X 16-Core Processor
CPU cores  : 32 @ 600.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 123.4 GiB
Swap       : 8.0 GiB
Disk       : 1.7 TiB
Distro     : Ubuntu 24.04.1 LTS
Kernel     : 6.8.0-48-generic
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Eons Data Communications Limited
ASN        : AS138997 Eons Data Communications Limited
Host       : Proxy AS41378
Location   : Ha Kwai Chung, Kwai Tsing (NKT)
Country    : Hong Kong

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/md0p1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 849.65 MB/s (212.4k) | 1.23 GB/s    (19.2k)
Write      | 851.89 MB/s (212.9k) | 1.23 GB/s    (19.3k)
Total      | 1.70 GB/s   (425.3k) | 2.46 GB/s    (38.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.19 GB/s     (2.3k) | 1.28 GB/s     (1.2k)
Write      | 1.26 GB/s     (2.4k) | 1.36 GB/s     (1.3k)
Total      | 2.46 GB/s     (4.8k) | 2.65 GB/s     (2.5k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 698 Mbits/sec   | 901 Mbits/sec   | 241 ms         
Eranium         | Amsterdam, NL (100G)      | 9.10 Gbits/sec  | 6.81 Gbits/sec  | 189 ms         
Uztelecom       | Tashkent, UZ (10G)        | 1.84 Gbits/sec  | 2.69 Gbits/sec  | 236 ms         
Leaseweb        | Singapore, SG (10G)       | busy            | 1.03 Gbits/sec  | 33.6 ms        
Clouvider       | Los Angeles, CA, US (10G) | 1.09 Gbits/sec  | 1.11 Gbits/sec  | 158 ms         
Leaseweb        | NYC, NY, US (10G)         | 2.06 Gbits/sec  | 60.0 Mbits/sec  | 213 ms         
Edgoo           | Sao Paulo, BR (1G)        | 2.19 Gbits/sec  | 3.03 Gbits/sec  | 328 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 3242                          
Multi Core      | 18418                         
Full Test       | https://browser.geekbench.com/v6/cpu/8628163

YABS completed in 8 min 20 sec
```

### GeekBench 5

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-16.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-16.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-16.jpg" alt="" loading="lazy">
</picture>

### Bench

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 9950X 16-Core Processor
 CPU Cores          : 32 @ 600.000 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 1.8 TB (67.5 GB Used)
 Total Mem          : 123.4 GB (1.9 GB Used)
 Total Swap         : 8.0 GB (0 Used)
 System uptime      : 1 days, 12 hour 31 min
 Load average       : 0.91, 0.98, 0.97
 OS                 : Ubuntu 24.04.1 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.8.0-48-generic
 TCP CC             : bbr
 Virtualization     : Dedicated
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS138997 Eons Data Communications Limited
 Location           : Kwai Chung / HK
 Region             : Kwai Tsing
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.8 GB/s
 I/O Speed(2nd run) : 1.8 GB/s
 I/O Speed(3rd run) : 1.8 GB/s
 I/O Speed(average) : 1843.2 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    748.89 Mbps       653.96 Mbps         1.07 ms     
 Los Angeles, US  537.86 Mbps       3667.36 Mbps        178.01 ms   
 Dallas, US       419.42 Mbps       2778.57 Mbps        207.38 ms   
 Montreal, CA     345.35 Mbps       918.45 Mbps         231.17 ms   
 Amsterdam, NL    485.97 Mbps       3012.87 Mbps        189.84 ms   
 Shanghai, CN     66.79 Mbps        6225.86 Mbps        204.60 ms   
 Chongqing, CN    53.09 Mbps        0.46 Mbps           328.97 ms   
 Hongkong, CN     5914.00 Mbps      9264.17 Mbps        0.54 ms     
 Mumbai, IN       2246.91 Mbps      8254.87 Mbps        90.54 ms    
 Singapore, SG    890.85 Mbps       3905.23 Mbps        36.14 ms    
----------------------------------------------------------------------
 Finished in        : 4 min 54 sec
 Timestamp          : 2024-11-03 11:36:39 HKT
----------------------------------------------------------------------
```

### X265 Benchmark

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/ea38e426d53eeac97960577f913da924.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/ea38e426d53eeac97960577f913da924.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/ea38e426d53eeac97960577f913da924.jpg" alt="" loading="lazy">
</picture>

### X264 Benchmark

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/ffc1b9274f681b815959f2455c350dad.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/ffc1b9274f681b815959f2455c350dad.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/ffc1b9274f681b815959f2455c350dad.jpg" alt="" loading="lazy">
</picture>

### AV1 编码测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-6.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-1.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-2.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-3.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-4.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-5.jpg" alt="" loading="lazy">
</picture>

### HEVC 测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-12.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-13.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-13.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-13.jpg" alt="" loading="lazy">
</picture>

### 7ZIP 测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-7.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-7.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-7.jpg" alt="" loading="lazy">
</picture>

### Linux 内核编译

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-14.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-14.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-14.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-15.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-15.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-15.jpg" alt="" loading="lazy">
</picture>

### Redis 压测

#### Get

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-8.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-8.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-8.jpg" alt="" loading="lazy">
</picture>

#### Set

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-9.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-9.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-9.jpg" alt="" loading="lazy">
</picture>

#### LPOP

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-10.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-10.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-10.jpg" alt="" loading="lazy">
</picture>

#### SADD

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/11/image-11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/11/image-11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/11/image-11.jpg" alt="" loading="lazy">
</picture>

### 融合怪 GO 版测试

```
--------------------------------------系统基础信息--------------------------------------
 CPU 型号            : AMD Ryzen 9 9950X 16-Core Processor @ 600.000 MHz
 CPU 数量            : 32 Physical CPU(s)
 CPU 缓存            : 1024 KB
 GPU 型号            : ASPEED Graphics Family
 GPU 状态            : 0.000000
 AES-NI              : ✔️ Enabled
 VM-x/AMD-V/Hyper-V  : ❌ Disabled
 内存                : 2.01 GB / 123.42 GB
 虚拟内存 Swap       : 0.00 MB / 8.00 GB
 硬盘空间            : 72.14 GB / 1786.44 GB
 启动盘路径          : /dev/md0p1
 系统                : ubuntu 24.04 [x86_64] 
 内核                : 6.8.0-48-generic
 系统在线时间        : 1 days, 12 hours, 51 minutes
 时区                : HKT
 负载                : 0.10 / 0.05 / 0.25
 虚拟化架构          : Dedicated (No visible signage)
 NAT类型             : Full Cone
 TCP加速方式         : bbr
 IPV4 ASN            : AS138997 Eons Data Communications Limited
 IPV4 Location       : Ha Kwai Chung / Kwai Tsing / Hong Kong
--------------------------------CPU测试-通过sysbench测试--------------------------------
1 线程测试(单核)得分:   6989.70
32 线程测试(多核)得分:  109764.27
--------------------------------内存测试-通过sysbench测试---------------------------------
单线程顺序写速度: 38991.16 MB/s(40.89K IOPS, 5s)
单线程顺序读速度: 95245.53 MB/s(99.87K IOPS, 5s)
-----------------------------------硬盘测试-通过fio测试-----------------------------------
测试路径      块大小   读测试(IOPS)            写测试(IOPS)            总和(IOPS)
/root         4k       928.36 MB/s(232.1k)     930.81 MB/s(232.7k)     1.86 GB/s(464.8k)       
/root         64k      1.24 GB/s(19.3k)        1.24 GB/s(19.5k)        2.48 GB/s(38.8k)        
/root         512k     1.18 GB/s(2303)         1.24 GB/s(2426)         2.42 GB/s(4729)         
/root         1m       1.27 GB/s(1236)         1.35 GB/s(1318)         2.62 GB/s(2554)         
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
Dazn                      YES (Region: HK) [Native]
Disney+                   YES (Region: HK) [Native]
Netflix                   YES (Region: US) [Native]
Netflix CDN               HK
YouTube Region            YES (Region: HK) [Native]
YouTube CDN               HKG
Amazon Prime Video        YES (Region: HK) [Native]
Paramount+                YES [Native]
TVBAnywhere+              NO
IQiYi                     YES (Region: HK) [Via DNS]
Viu.com                   YES [Native]
Spotify Registration      YES (Region: HK) [Native]
Steam Store               YES (Community Available) (Region: HK)
ChatGPT                   YES (Only Available with Mobile APP) [Via DNS]
Gemini                    NO
MetaAI                    NO (AbraGeoBlocked)
Wikipedia Editability     NO
Reddit                    YES
TikTok                    NO
Bing Region               YES (Region: HK)
Instagram Licensed Audio  YES [Native]
KOCOWA                    NO
SonyLiv                   YES (Region: HK) [Via DNS]
OneTrust                  YES (Region: HK KWAI TSING) [Via DNS]
GoogleSearch              YES
--------------------------------------IP质量检测--------------------------------------
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库   [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库   [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | bigdatacloud数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 42 [8] 
VPN得分(越低越好): 0 [8] 
代理得分(越低越好): 83 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 92 [8] 
欺诈得分(越低越好): 0 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0016 (Low) [A] 
公司滥用得分(越低越好): 0.0117 (Elevated) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 61 [2]  恶意记录数: 1 [2] 可疑记录数: 0 [2]  无记录数: 32 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] business [8] corporate [9] hosting [0 7 A] hosting - high probability [C]
公司类型: hosting [0 7 A] 
是否云提供商: Yes [7 D] 
是否数据中心: No [5 6 8 C] Yes [0 1 A]
是否移动设备: Yes [E] No [5 A C]
是否代理: No [0 1 4 5 6 7 8 9 A B C D] Yes [E]
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
DNS-黑名单: 313(Total_Check) 0(Clean) 6(Blacklisted) 12(Other) 
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
广州电信 58.60.188.222   检测不到回程路由节点的IP地址
广州联通 210.21.196.6    检测不到回程路由节点的IP地址
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     检测不到回程路由节点的IP地址
成都联通 119.6.6.6       检测不到回程路由节点的IP地址
成都移动 211.137.96.205  移动CMI    [普通线路] 
-------------------------------------三网回程路由检测-------------------------------------
[NextTrace API] preferred API IP - 172.67.155.192 - 27.54ms - Misaka.HKG
广州电信 - ICMP v4 - traceroute to 58.60.188.222, 30 hops max, 52 byte packets
0.33 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
0.92 ms      *          [Nube-BB]          中国, 香港
2.02 ms      *          [Nube-BB]          中国, 香港
1.80 ms      *          [Nube-BB]          中国, 香港
0.30 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
3.05 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
2.40 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
3.13 ms      *          [Nube-BB]          中国, 香港
3.96 ms      *          [Nube-BB]          中国, 香港
0.59 ms      *          [Nube-BB]          中国, 香港
0.75 ms      *          [Nube-BB]          中国, 香港
1.28 ms      *          [Nube-BB]          中国, 香港
*
*
*
153.91 ms    *          [NSFNET-T3]        美国, 加利福尼亚, 圣何塞
262.86 ms    AS701      [UU-152]           美国, 加利福尼亚, 山景城, verizon.com 
430.04 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn 
424.54 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn 
439.06 ms    AS4134     [CHINANET-BB]      中国, 广东, 广州, www.chinatelecom.com.cn 
393.80 ms    AS134774   [CHINANET-GD]      中国, 广东, 深圳, chinatelecom.cn  电信
*
406.63 ms    AS4134                        中国, 广东, 深圳, www.chinatelecom.com.cn  电信
广州联通 - ICMP v4 - traceroute to 210.21.196.6, 30 hops max, 52 byte packets
0.46 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
0.78 ms      *          [Nube-BB]          中国, 香港
2.28 ms      *          [Nube-BB]          中国, 香港
2.83 ms      *          [Nube-BB]          中国, 香港
0.38 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
4.02 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
1.59 ms      *          [Nube-BB]          中国, 香港
0.45 ms      *          [Nube-BB]          中国, 香港
46.99 ms     AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
47.05 ms     AS7578                        中国, 香港, globalsecurelayer.com 
46.93 ms     AS7578                        中国, 香港, globalsecurelayer.com 
47.22 ms     AS7578                        中国, 台湾, 台北, globalsecurelayer.com 
47.22 ms     AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
47.12 ms     AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
47.09 ms     AS7578                        日本, 东京都, 东京, globalsecurelayer.com 
61.05 ms     *          [BBIXINTLNET]      日本, 东京都, 东京
*
*
*
296.15 ms    AS17676    [BBTEC]            美国, 加利福尼亚, 圣何塞, softbank.jp 
319.09 ms    AS4837     [CU169-BACKBONE]   中国, 上海, chinaunicom.cn  联通
342.45 ms    AS4837     [CU169-BACKBONE]   中国, 上海, chinaunicom.cn  联通
*
458.53 ms    AS4837     [CU169-BACKBONE]   中国, 广东, 广州, chinaunicom.cn  联通
342.18 ms    AS17816    [UNICOM-GD]        中国, 广东, 深圳, chinaunicom.cn  联通
355.43 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
349.43 ms    AS17623    [APNIC-AP]         中国, 广东, 深圳, chinaunicom.cn  联通
广州移动 - ICMP v4 - traceroute to 120.196.165.24, 30 hops max, 52 byte packets
0.40 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
0.75 ms      *          [Nube-BB]          中国, 香港
2.48 ms      *          [Nube-BB]          中国, 香港
3.70 ms      *          [Nube-BB]          中国, 香港
0.42 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
2.91 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
4.12 ms      AS138997   [EDCL-HK]          中国, 香港, eons.cloud 
2.86 ms      *          [Nube-BB]          中国, 香港
4.24 ms      *          [Nube-BB]          中国, 香港
0.71 ms      *          [Nube-BB]          中国, 香港
0.95 ms      *          [Nube-BB]          中国, 香港
2.39 ms      AS3356                        中国, 香港, lumen.com 
3.28 ms      AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com  移动
7.45 ms      AS58453    [CMI-INT]          中国, 香港, cmi.chinamobile.com  移动
54.66 ms     AS58453    [CMI-INT]          中国, 广东, 广州, cmi.chinamobile.com  移动
9.11 ms      AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
52.53 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
*
9.14 ms      AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
11.73 ms     AS9808     [CMNET]            中国, 广东, 广州, chinamobileltd.com  移动
11.92 ms     AS56040    [APNIC-AP]         中国, 广东, 深圳, gd.10086.cn  移动
--------------------------------------就近节点测速--------------------------------------
位置            上传速度        下载速度        延迟            丢包率          
Speedtest.net   9384.84 Mbps    6519.07 Mbps    1.99 ms         0.0%            
中国香港        5295.15 Mbps    18825.19 Mbps   1.07 ms         0.0%            
新加坡          7941.80 Mbps    3372.12 Mbps    30.76 ms        0.0%            
联通上海5G      71.59 Mbps      5907.53 Mbps    205.00 ms       4.3%            
电信浙江        35.95 Mbps      41.06 Mbps      394.21 ms       Not available.  
```
