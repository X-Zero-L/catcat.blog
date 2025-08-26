---
tags: [sg-server]
title: "Sharon SG Pre (CN2+9929+CMIN2) 测评"
published: 2025-07-04
---

**侥幸和Sharon联动得到的一款，质量相当的nice。目前及之后很长一段时间，Sharon的VPS产品都会完全停止销售，整合后的新产品也只能在群内抽奖和竞捐才能获取。获取渠道只有去群里参加各种活动可以获得，捐款达到一定数额后可以绑定账户，每月领域10刀账户余额可以供机器续费。目前亚洲的优化除了DMIT和Sharon也没其他更好的了，庞大的Y系 YXVM ,ISIF等几乎都是接入的Sharon的线路。**

## 套餐

- **_Provider :_** **_Sharon_**

- **_Type/Plan : Singapore - Premium - SGP-PRE-2230_**

- **_Processor : AMD EPYC 7K62 48-Core Processor_**

- **_Num of Core :_** **_2_** **_Cores_**

- **_Memory :_** **_2_** **_GB_**

- **_Storage :_** **_3_****_0 GB NVMe_**

- **_Bandwidth : 5_****_00GB @ 1 Gbps IN | 11 Gbps OUT_（只计算出）**

- **_Location :_ SG**

## 测评

### CPU

```shell
root@sharon-sg-pre:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  2
  On-line CPU(s) list:   0,1
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        QEMU
  Model name:            AMD EPYC 7K62 48-Core Processor
    BIOS Model name:     pc-i440fx-7.2  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          23
    Model:               49
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           2
    Stepping:            0
    BogoMIPS:            5190.24
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good no                         pl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor                          lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep b                         mi2 rdseed adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean pausefilter pft                         hreshold v_vmsave_vmload vgif umip rdpid arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   64 KiB (2 instances)
  L1i:                   64 KiB (2 instances)
  L2:                    1 MiB (2 instances)
  L3:                    384 MiB (2 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0,1
Vulnerabilities:         
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Mitigation; untrained return thunk; SMT disabled
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, STIBP disabled, RSB filling, PBRSB-eIBRS Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
root@sharon-sg-pre:~# 
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 4 days, 11 hours, 23 minutes
Processor  : AMD EPYC 7K62 48-Core Processor
CPU cores  : 2 @ 2595.122 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 0.0 KiB
Disk       : 31.0 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : STANDARD PC (I440FX + PIIX, 1996)
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Sharon Networks
ASN        : AS396856 Sharon Networks, LLC
Host       : Sharon Networks, LLC
Location   : Singapore, North West (03)
Country    : Singapore

fio Disk Speed Tests (Mixed R/W 50/50) (Partition -):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 11.99 MB/s    (2.9k) | 153.91 MB/s   (2.4k)
Write      | 11.99 MB/s    (2.9k) | 154.72 MB/s   (2.4k)
Total      | 23.99 MB/s    (5.9k) | 308.63 MB/s   (4.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 146.05 MB/s    (285) | 145.12 MB/s    (141)
Write      | 153.81 MB/s    (300) | 154.78 MB/s    (151)
Total      | 299.87 MB/s    (585) | 299.91 MB/s    (292)

Geekbench 5 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1026                          
Multi Core      | 1951                          
Full Test       | https://browser.geekbench.com/v5/cpu/23649473
```

### BGP Connectivity

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-1.jpg" alt="image" loading="lazy">
</picture>

### 线路检测

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/59de534bb924fefda4b8324e4aa7c208.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/59de534bb924fefda4b8324e4aa7c208.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/59de534bb924fefda4b8324e4aa7c208.jpg" alt="59de534bb924fefda4b8324e4aa7c208" loading="lazy">
</picture>

### IP质量检测

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-2.jpg" alt="image" loading="lazy">
</picture>

### 三网回程路由

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-3.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-4.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-5.jpg" alt="image" loading="lazy">
</picture>

### 延迟监控

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-6-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-6-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-6-scaled.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-7-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-7-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-7-scaled.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-8-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-8-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-8-scaled.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-9-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-9-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-9-scaled.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-10-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-10-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-10-scaled.jpg" alt="image" loading="lazy">
</picture>