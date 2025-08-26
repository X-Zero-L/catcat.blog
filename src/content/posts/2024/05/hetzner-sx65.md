---
title: "Hetzner 新大盘杜甫SX65 测评"
published: 2024-05-07
categories: 
  - "strong-server"
  - "vps"
  - "eu-server"
---

Hetzner 前几天推出了三款新型经济型专用存储服务器，性价比还可以。对比经典拍卖款的40T 目前50欧-60欧的售价还是挺有性价比的。 机器配备 AMD Ryzen 7 3700X Matisse 8 核 (Zen2) CPU ，配有 2 x 1 TB NVMe SSD。此外，还包含 **4 个 22 TB SATA HDD（共计88T）**。内存是 64GB DDR4 ECC RAM，可扩展至 128GB，每月 104.00 欧元起，每小时 0.1666 欧元起，不包括 39.00 欧元的一次性安装费。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/image.jpg" alt="" loading="lazy">
</picture>

## 测评

### lscpu

```
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          43 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   16
  On-line CPU(s) list:    0-15
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         Advanced Micro Devices, Inc.
  Model name:             AMD Ryzen 7 3700X 8-Core Processor
    BIOS Model name:      AMD Ryzen 7 3700X 8-Core Processor              Unknown CPU @ 3.6GHz
    BIOS CPU family:      107
    CPU family:           23
    Model:                113
    Thread(s) per core:   2
    Core(s) per socket:   8
    Socket(s):            1
    Stepping:             0
    Frequency boost:      enabled
    CPU(s) scaling MHz:   50%
    CPU max MHz:          4426.1709
    CPU min MHz:          2200.0000
    BogoMIPS:             7187.22
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr 
                          sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl nonst                          op_tsc cpuid extd_apicid aperfmperf rapl pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4                          _2 x2apic movbe popcnt aes xsave avx f16c rdrand lahf_lm cmp_legacy svm extapic cr8_legac                          y abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce topoext perfctr_core perfct                          r_nb bpext perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba ibpb stibp vmmcall fsg                          sbase bmi1 avx2 smep bmi2 cqm rdt_a rdseed adx smap clflushopt clwb sha_ni xsaveopt xsave                          c xgetbv1 cqm_llc cqm_occup_llc cqm_mbm_total cqm_mbm_local clzero irperf xsaveerptr rdpr                          u wbnoinvd arat npt lbrv svm_lock nrip_save tsc_scale vmcb_clean flushbyasid decodeassist                          s pausefilter pfthreshold avic v_vmsave_vmload vgif v_spec_ctrl umip rdpid overflow_recov                           succor smca sev sev_es
Virtualization features:  
  Virtualization:         AMD-V
Caches (sum of all):      
  L1d:                    256 KiB (8 instances)
  L1i:                    256 KiB (8 instances)
  L2:                     4 MiB (8 instances)
  L3:                     32 MiB (2 instances)
NUMA:                     
  NUMA node(s):           1
  NUMA node0 CPU(s):      0-15
Vulnerabilities:          
  Gather data sampling:   Not affected
  Itlb multihit:          Not affected
  L1tf:                   Not affected
  Mds:                    Not affected
  Meltdown:               Not affected
  Mmio stale data:        Not affected
  Reg file data sampling: Not affected
  Retbleed:               Mitigation; untrained return thunk; SMT enabled with STIBP protection
  Spec rstack overflow:   Mitigation; safe RET
  Spec store bypass:      Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:             Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:             Mitigation; Retpolines; IBPB conditional; STIBP always-on; RSB filling; PBRSB-eIBRS Not a                          ffected; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 9 hours, 22 minutes
Processor  : AMD Ryzen 7 3700X 8-Core Processor
CPU cores  : 16 @ 2443.442 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 62.7 GiB
Swap       : 0.0 KiB
Disk       : 81.9 TiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-20-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Hetzner
ASN        : AS24940 Hetzner Online GmbH
Location   : Nuremberg, Bavaria (BY)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/md1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 508.22 MB/s (127.0k) | 3.89 GB/s    (60.8k)
Write      | 509.56 MB/s (127.3k) | 3.91 GB/s    (61.1k)
Total      | 1.01 GB/s   (254.4k) | 7.81 GB/s   (122.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.95 GB/s     (9.6k) | 4.98 GB/s     (4.8k)
Write      | 5.22 GB/s    (10.1k) | 5.31 GB/s     (5.1k)
Total      | 10.18 GB/s   (19.8k) | 10.30 GB/s   (10.0k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1788                          
Multi Core      | 9385                          
Full Test       | https://browser.geekbench.com/v6/cpu/5991815
```

### GeekBench 5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.6.30-x64v3-xanmod1 x86_64
  Model                         ASUS System Product Name
  Motherboard                   ASUSTeK COMPUTER INC. Pro WS 565-ACE
  BIOS                          American Megatrends Inc. 3606

处理器信息
  Name                          AMD Ryzen 7 3700X
  Topology                      1 Processor, 8 Cores, 16 Threads
  Identifier                    AuthenticAMD Family 23 Model 113 Stepping 0
  Base Frequency                4.43 GHz
  L1 Instruction Cache          32.0 KB x 8
  L1 Data Cache                 32.0 KB x 8
  L2 Cache                      512 KB x 8
  L3 Cache                      16.0 MB x 2

内存信息
  Size                          62.7 GB

单核测试分数：1342
多核测试分数：9191
详细结果链接：https://browser.geekbench.com/v5/cpu/22459305
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%207%203700X
```

### 通电测试

```

  CPU 型号              AMD Ryzen 7 3700X 8-Core Processor
  CPU 核心              合计 8 核心，16 线程
  CPU 状态              当前主频 4254.931 MHz
  内存大小              64213 MB (968 MB 已用)

  第 1 块硬盘           通电 114 小时，型号 SAMSUNG MZVL21T0HCLR-00B00
  第 2 块硬盘           通电 114 小时，型号 SAMSUNG MZVL21T0HCLR-00B00
  第 1 块硬盘           通电 159 小时，型号 WDC WUH722222ALE6L0
  第 2 块硬盘           通电 159 小时，型号 WDC WUH722222ALE6L0
  第 3 块硬盘           通电 159 小时，型号 WDC WUH722222ALE6L0
  第 4 块硬盘           通电 159 小时，型号 WDC WUH722222ALE6L0

  硬盘大小              84890.6 GB

  服务器时间            2024-05-07 04:07:27
  运行时间              0 days 0 hour 17 min
  系统负载              1.59, 1.70, 0.77
  虚拟化技术            No Virtualization Detected

  IPv4 地址             37.27.xxx.xxx
  IPv6 地址             2a01:4f9:xxxx:xxxx
  运营商                AS24940 Hetzner Online GmbH
  地理位置              FI, Uusimaa, Helsinki

  操作系统              Debian 12.5 bookworm (x86_64)
  系统内核              6.6.30-x64v3-xanmod1
  TCP 加速              bbr

  当前脚本版本          1.4.1.1

  顺序写入 (1st)        1300 MB/s
  顺序写入 (2nd)        1200 MB/s
  顺序写入 (3rd)        1300 MB/s
  顺序写入 (4th)        1200 MB/s
  顺序写入 (5th)        1200 MB/s
  顺序写入 (avg)        1233.3 MB/s
```

### 机械硬盘 raid0 测试

```
fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/md127):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 4.05 MB/s     (1.0k) | 70.14 MB/s    (1.0k)
Write      | 4.07 MB/s     (1.0k) | 70.50 MB/s    (1.1k)
Total      | 8.13 MB/s     (2.0k) | 140.64 MB/s   (2.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 301.39 MB/s    (588) | 334.63 MB/s    (326)
Write      | 317.41 MB/s    (619) | 356.92 MB/s    (348)
Total      | 618.81 MB/s   (1.2k) | 691.55 MB/s    (674)
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/5beb5bb3e034c4c820a64a8f2112b9df.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/5beb5bb3e034c4c820a64a8f2112b9df.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/5beb5bb3e034c4c820a64a8f2112b9df.jpg" alt="" loading="lazy">
</picture>
