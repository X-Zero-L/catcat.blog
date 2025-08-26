---
title: "Hetzner SX295 存储机测评"
published: 2024-06-03
categories: 
  - "strong-server"
  - "vps"
  - "eu-server"
coverImage: "image.png"
---

继上次SX65之后，新增了SX295。售价每月384欧元+一次性安装费79欧元。包括 2 个 7.68 TB NVMe U2 NVME SSD （三星的PM9A3）和 14 个 22 TB 全新SATA HDD（西部数据 HC570），配备 256GB DDR4 ECC RAM，平均每T价格为1.3T，价格还算可以。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image.jpg" alt="" loading="lazy">
</picture>

## 测评

### lscpu

```
Architecture:             x86_64
  CPU op-mode(s):         32-bit, 64-bit
  Address sizes:          43 bits physical, 48 bits virtual
  Byte Order:             Little Endian
CPU(s):                   64
  On-line CPU(s) list:    0-63
Vendor ID:                AuthenticAMD
  BIOS Vendor ID:         Advanced Micro Devices, Inc.
  Model name:             AMD EPYC 7502P 32-Core Processor
    BIOS Model name:      AMD EPYC 7502P 32-Core Processor                Unknown CPU @ 2.5GHz
    BIOS CPU family:      107
    CPU family:           23
    Model:                49
    Thread(s) per core:   2
    Core(s) per socket:   32
    Socket(s):            1
    Stepping:             0
    Frequency boost:      enabled
    CPU(s) scaling MHz:   98%
    CPU max MHz:          2500.0000
    CPU min MHz:          1500.0000
    BogoMIPS:             4990.39
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mm                          x fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_g                          ood nopl nonstop_tsc cpuid extd_apicid aperfmperf rapl pni pclmulqdq monitor ssse3                           fma cx16 sse4_1 sse4_2 movbe popcnt aes xsave avx f16c rdrand lahf_lm cmp_legacy 
                          svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce                           topoext perfctr_core perfctr_nb bpext perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pst                          ate ssbd mba ibrs ibpb stibp vmmcall fsgsbase bmi1 avx2 smep bmi2 cqm rdt_a rdseed                           adx smap clflushopt clwb sha_ni xsaveopt xsavec xgetbv1 cqm_llc cqm_occup_llc cqm                          _mbm_total cqm_mbm_local clzero irperf xsaveerptr rdpru wbnoinvd amd_ppin arat npt                           lbrv svm_lock nrip_save tsc_scale vmcb_clean flushbyasid decodeassists pausefilte                          r pfthreshold avic v_vmsave_vmload vgif v_spec_ctrl umip rdpid overflow_recov succ                          or smca sev sev_es
Virtualization features:  
  Virtualization:         AMD-V
Caches (sum of all):      
  L1d:                    1 MiB (32 instances)
  L1i:                    1 MiB (32 instances)
  L2:                     16 MiB (32 instances)
  L3:                     128 MiB (8 instances)
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
  Spectre v2:             Mitigation; Retpolines; IBPB conditional; STIBP always-on; RSB filling; PBRSB-eIBR                          S Not affected; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```
Mon Jun  3 02:04:16 PM CEST 2024

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 0 minutes
Processor  : AMD EPYC 7502P 32-Core Processor
CPU cores  : 64 @ 2500.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 251.6 GiB
Swap       : 0.0 KiB
Disk       : 13.9 TiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.6.32-x64v3-xanmod1
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
Read       | 422.34 MB/s (105.5k) | 2.96 GB/s    (46.2k)
Write      | 423.45 MB/s (105.8k) | 2.97 GB/s    (46.5k)
Total      | 845.79 MB/s (211.4k) | 5.94 GB/s    (92.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 3.76 GB/s     (7.3k) | 4.16 GB/s     (4.0k)
Write      | 3.96 GB/s     (7.7k) | 4.44 GB/s     (4.3k)
Total      | 7.72 GB/s    (15.0k) | 8.61 GB/s     (8.4k)

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/md127):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 24.43 MB/s    (6.1k) | 306.10 MB/s   (4.7k)
Write      | 24.44 MB/s    (6.1k) | 307.72 MB/s   (4.8k)
Total      | 48.88 MB/s   (12.2k) | 613.82 MB/s   (9.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 772.93 MB/s   (1.5k) | 1.88 GB/s     (1.8k)
Write      | 814.00 MB/s   (1.5k) | 2.01 GB/s     (1.9k)
Total      | 1.58 GB/s     (3.0k) | 3.90 GB/s     (3.8k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1376                          
Multi Core      | 14334                         
Full Test       | https://browser.geekbench.com/v6/cpu/6371143

YABS completed in 6 min 1 sec
```

### 通电时间测试

```

  CPU 型号              AMD EPYC 7502P 32-Core Processor
  CPU 核心              合计 32 核心，64 线程
  CPU 状态              当前主频 1934.729 MHz
  内存大小              257609 MB (2585 MB 已用)

  第 1 块硬盘           通电 5 小时，型号 SAMSUNG MZQL27T6HBLA-00A07
  第 2 块硬盘           通电 5 小时，型号 SAMSUNG MZQL27T6HBLA-00A07
  第 1 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 2 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 3 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 4 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 5 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 6 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 7 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 8 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 9 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 10 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 11 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 12 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 13 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0
  第 14 块硬盘           通电 5 小时，型号 WDC WUH722222ALE6L0

  硬盘大小              0 GB

  服务器时间            2024-06-03 12:55:48
  运行时间              0 days 0 hour 9 min
  系统负载              0.00, 0.03, 0.00
  虚拟化技术            No Virtualization Detected

  IPv4 地址             37.27.xxx.xxx
  IPv6 地址             2a01:4f9:xxxx:xxxx
  运营商                AS24940 Hetzner Online GmbH
  地理位置              FI, Uusimaa, Helsinki

  操作系统              Debian 12.5 bookworm (x86_64)
  系统内核              6.7.4
  TCP 加速              cubic

  当前脚本版本          1.4.1.1

  顺序写入 (1st)        1300 MB/s
  顺序写入 (2nd)        1300 MB/s
  顺序写入 (3rd)        1400 MB/s
  顺序写入 (4th)        1400 MB/s
  顺序写入 (5th)        1400 MB/s
  顺序写入 (avg)        1366.7 MB/s

```

### GeekBench5

```
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.6.32-x64v3-xanmod1 x86_64
  Model                         ASUSTeK COMPUTER INC. KRPA-U16 Series
  Motherboard                   ASUSTeK COMPUTER INC. KRPA-U16 Series
  BIOS                          American Megatrends Inc. 4102-HET0004-24020702

处理器信息
  Name                          AMD EPYC 7502P 32-Core Processor               
  Topology                      1 Processor, 32 Cores, 64 Threads
  Identifier                    AuthenticAMD Family 23 Model 49 Stepping 0
  Base Frequency                2.50 GHz
  L1 Instruction Cache          32.0 KB x 32
  L1 Data Cache                 32.0 KB x 32
  L2 Cache                      512 KB x 32
  L3 Cache                      16.0 MB x 8

内存信息
  Size                          252 GB

单核测试分数：1057
多核测试分数：26777
详细结果链接：https://browser.geekbench.com/v5/cpu/22544336
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%207502P
```

其他没啥好测的，网络什么的见怪不怪吧。
