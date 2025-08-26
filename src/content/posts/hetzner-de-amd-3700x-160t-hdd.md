---
tags: [strong-server, eu-server]
title: "Hetzner 德国 AMD 3700X 160T 存储测评"
published: 2025-05-20
---

## 机器配置

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/05/image-7.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/05/image-7.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/05/image-7.jpg" alt="服务器配置和价格明细" loading="lazy">
</picture>

## 测评

### 硬件检测

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/05/image-9-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/05/image-9-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/05/image-9-scaled.jpg" alt="硬件概览，CPU和内存详细信息显示" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/05/image-8.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/05/image-8.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/05/image-8.jpg" alt="计算机系统信息和硬盘性能测试结果。" loading="lazy">
</picture>

### CPU

```shell
root@Debian-1208-bookworm-amd64-base ~ # lscpu
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
    BogoMIPS:             7185.97
    Flags:                fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_
                          tsc rep_good nopl nonstop_tsc cpuid extd_apicid aperfmperf rapl pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt aes xsave avx f16c r
                          drand lahf_lm cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce topoext perfctr_core perfctr_nb bpext perfctr_l
                          lc mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba ibpb stibp vmmcall fsgsbase bmi1 avx2 smep bmi2 cqm rdt_a rdseed adx smap clflushopt clwb sha_ni xsaveopt xs
                          avec xgetbv1 cqm_llc cqm_occup_llc cqm_mbm_total cqm_mbm_local clzero irperf xsaveerptr rdpru wbnoinvd arat npt lbrv svm_lock nrip_save tsc_scale vmcb_clea
                          n flushbyasid decodeassists pausefilter pfthreshold avic v_vmsave_vmload vgif v_spec_ctrl umip rdpid overflow_recov succor smca sev sev_es
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
  Spectre v2:             Mitigation; Retpolines; IBPB conditional; STIBP always-on; RSB filling; PBRSB-eIBRS Not affected; BHI Not affected
  Srbds:                  Not affected
  Tsx async abort:        Not affected
```

### Yabs

```shell
Mon May 19 10:03:22 AM CEST 2025

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 4 minutes
Processor  : AMD Ryzen 7 3700X 8-Core Processor
CPU cores  : 16 @ 2207.687 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 125.7 GiB
Swap       : 4.0 GiB
Disk       : 875.1 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-28-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Hetzner Online GmbH
ASN        : AS24940 Hetzner Online GmbH
Host       : Hnielsen Technologies APS
Location   : Falkenstein, Saxony (SN)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/nvme0n1p3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 571.30 MB/s (142.8k) | 741.45 MB/s  (11.5k)
Write      | 572.80 MB/s (143.2k) | 745.35 MB/s  (11.6k)
Total      | 1.14 GB/s   (286.0k) | 1.48 GB/s    (23.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 895.21 MB/s   (1.7k) | 966.46 MB/s    (943)
Write      | 942.78 MB/s   (1.8k) | 1.03 GB/s     (1.0k)
Total      | 1.83 GB/s     (3.5k) | 1.99 GB/s     (1.9k)

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/bcache0):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 73.63 MB/s   (18.4k) | 747.28 MB/s  (11.6k)
Write      | 73.83 MB/s   (18.4k) | 751.21 MB/s  (11.7k)
Total      | 147.47 MB/s  (36.8k) | 1.49 GB/s    (23.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 939.25 MB/s   (1.8k) | 982.84 MB/s    (959)
Write      | 989.16 MB/s   (1.9k) | 1.04 GB/s     (1.0k)
Total      | 1.92 GB/s     (3.7k) | 2.03 GB/s     (1.9k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 928 Mbits/sec   | 925 Mbits/sec   | 19.1 ms        
Eranium         | Amsterdam, NL (100G)      | 937 Mbits/sec   | 937 Mbits/sec   | 10.2 ms        
Uztelecom       | Tashkent, UZ (10G)        | 883 Mbits/sec   | 477 Mbits/sec   | 94.6 ms        
Leaseweb        | Singapore, SG (10G)       | 805 Mbits/sec   | busy            | 162 ms         
Clouvider       | Los Angeles, CA, US (10G) | 810 Mbits/sec   | 421 Mbits/sec   | 159 ms         
Leaseweb        | NYC, NY, US (10G)         | 867 Mbits/sec   | 642 Mbits/sec   | 96.5 ms        
Edgoo           | Sao Paulo, BR (1G)        | 741 Mbits/sec   | 267 Mbits/sec   | 203 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 918 Mbits/sec   | 919 Mbits/sec   | 19.2 ms        
Eranium         | Amsterdam, NL (100G)      | 924 Mbits/sec   | 924 Mbits/sec   | 10.2 ms        
Uztelecom       | Tashkent, UZ (10G)        | 870 Mbits/sec   | 467 Mbits/sec   | 94.3 ms        
Leaseweb        | Singapore, SG (10G)       | 764 Mbits/sec   | 610 Mbits/sec   | 162 ms         
Clouvider       | Los Angeles, CA, US (10G) | 797 Mbits/sec   | 438 Mbits/sec   | 159 ms         
Leaseweb        | NYC, NY, US (10G)         | 854 Mbits/sec   | 657 Mbits/sec   | 96.6 ms        
Edgoo           | Sao Paulo, BR (1G)        | 730 Mbits/sec   | 312 Mbits/sec   | 202 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1760                          
Multi Core      | 8465                          
Full Test       | https://browser.geekbench.com/v6/cpu/12026709

YABS completed in 11 min 45 sec
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-28-amd64 x86_64
  Model                         ASUS System Product Name
  Motherboard                   ASUSTeK COMPUTER INC. Pro WS 565-ACE
  BIOS                          American Megatrends Inc. 3702

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
  Size                          126 GB

单核测试分数：1324
多核测试分数：7977
详细结果链接：https://browser.geekbench.com/v5/cpu/23553305
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%207%203700X
```

## 总结

其他没啥好测的，140欧的售价对于需要存储的来说还是蛮不错的，盘也较新，应该是同一批全部刚换的。不过目前价格还有可能降低，所以不是特别需要，还可以再等等。