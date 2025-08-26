---
title: "naranjatech 荷兰 AMD EPYC 9554P 测评"
published: 2023-11-25
categories: 
  - "vps"
  - "eu-server"
---

naranjatech（官方宣称从2003年就开始搞这行生意），在Low上的口碑很不错，抗投诉能力也很强，其他我对这家的了解就很少了，有待观察吧。

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/11/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/11/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/11/image-3.jpg" alt="" loading="lazy">
</picture>

> ## 套餐
> 
> **_Provider :_ naranjatech_  
> Processor : AMD EPYC 9554P 64-Core Processor  
> Num of Core : 1 个 vCore  @ 3.3+ GHz  
> Memory : 2 GB DDR5 RAM  
> Storage : 50 GB NVMe RAID-10 SSD Storage  
> Bandwidth : 5TB @ 2.5 Gbps IN | 2.5 Gbps OUT  
> Location : NL  
> Price : 18 €/year_**

## 测评

### lscpu

```
root@naranja:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 57 bits virtual
  Byte Order:            Little Endian
CPU(s):                  1
  On-line CPU(s) list:   0
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        Red Hat
  Model name:            AMD EPYC 9554P 64-Core Processor
    BIOS Model name:     RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               17
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           1
    Stepping:            1
    BogoMIPS:            6199.99
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush m                         mx fxsr sse sse2 syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid                          extd_apicid tsc_known_freq pni pclmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2api                         c movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hypervisor lahf_lm cm                         p_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core inv                         pcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 
                         erms invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd                          sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves avx512_bf16 clzero xsave                         erptr wbnoinvd arat npt lbrv nrip_save tsc_scale vmcb_clean pausefilter pfthresho                         ld v_vmsave_vmload vgif avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulq                         dq avx512_vnni avx512_bitalg avx512_vpopcntdq la57 rdpid fsrm flush_l1d arch_capa                         bilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   32 KiB (1 instance)
  L1i:                   32 KiB (1 instance)
  L2:                    1 MiB (1 instance)
  L3:                    256 MiB (1 instance)
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
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, P                         BRSB-eIBRS Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### yabs

```
Sat Nov 25 04:58:46 AM EST 2023

Basic System Information:
---------------------------------
Uptime     : 1 days, 4 hours, 9 minutes
Processor  : AMD EPYC 9554P 64-Core Processor
CPU cores  : 1 @ 3099.998 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 1.9 GiB
Swap       : 0.0 KiB
Disk       : 49.1 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : NextGenWebs, S.L.
ASN        : AS41608 NextGenWebs, S.L.
Host       : NextGenWebs, S.L.
Location   : Amsterdam, North Holland (NH)
Country    : Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 362.66 MB/s  (90.6k) | 3.09 GB/s    (48.3k)
Write      | 363.62 MB/s  (90.9k) | 3.11 GB/s    (48.6k)
Total      | 726.28 MB/s (181.5k) | 6.20 GB/s    (96.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 6.19 GB/s    (12.0k) | 5.02 GB/s     (4.9k)
Write      | 6.51 GB/s    (12.7k) | 5.35 GB/s     (5.2k)
Total      | 12.71 GB/s   (24.8k) | 10.38 GB/s   (10.1k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2058                          
Multi Core      | 2054                          
Full Test       | https://browser.geekbench.com/v6/cpu/3706662

YABS completed in 7 min 31 sec
```

### Bench

```
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 9554P 64-Core Processor
 CPU Cores          : 1 @ 3099.998 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 49.1 GB (1.3 GB Used)
 Total Mem          : 1.9 GB (241.5 MB Used)
 System uptime      : 1 days, 4 hour 40 min
 Load average       : 0.00, 0.00, 0.01
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS41608 NextGenWebs, S.L.
 Location           : Paterna / ES
 Region             : Valencia
----------------------------------------------------------------------
 I/O Speed(1st run) : 2.0 GB/s
 I/O Speed(2nd run) : 2.1 GB/s
 I/O Speed(3rd run) : 2.1 GB/s
 I/O Speed(average) : 2116.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    788.78 Mbps       949.33 Mbps         38.75 ms    
 Los Angeles, US  315.54 Mbps       1368.15 Mbps        138.23 ms   
 Dallas, US       281.12 Mbps       666.84 Mbps         110.16 ms   
 Montreal, CA     148.35 Mbps       938.10 Mbps         82.10 ms    
 Paris, FR        1239.48 Mbps      2043.89 Mbps        15.19 ms    
 Amsterdam, NL    2419.32 Mbps      1732.15 Mbps        2.73 ms     
 Shanghai, CN     291.60 Mbps       1068.63 Mbps        176.19 ms   
 Chongqing, CN    0.38 Mbps         0.41 Mbps           258.00 ms   
 Mumbai, IN       368.50 Mbps       1399.27 Mbps        117.61 ms   
 Singapore, SG    176.34 Mbps       1159.01 Mbps        322.61 ms   
 Tokyo, JP        5.65 Mbps         1124.87 Mbps        221.25 ms   
----------------------------------------------------------------------
 Finished in        : 5 min 18 sec
 Timestamp          : 2023-11-25 05:35:29 EST
----------------------------------------------------------------------
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```
AMD EPYC 9554P 64-Core Processor (x86_64)
1 cores @ 0 MHz  |  1.9 GiB RAM
Number of Processes: 1  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          2736
  Integer Math                     6139 Million Operations/s
  Floating Point Math              5391 Million Operations/s
  Prime Numbers                    19.6 Million Primes/s
  Sorting                          3613 Thousand Strings/s
  Encryption                       1324 MB/s
  Compression                      25799 KB/s
  CPU Single Threaded              2742 Million Operations/s
  Physics                          348 Frames/s
  Extended Instructions (SSE)      2325 Million Matrices/s

Memory Mark:                       1487
  Database Operations              965 Thousand Operations/s
  Memory Read Cached               27823 MB/s
  Memory Read Uncached             25807 MB/s
  Memory Write                     24909 MB/s
  Available RAM                    1513 Megabytes
  Memory Latency                   81 Nanoseconds
  Memory Threaded                  25467 MB/s
--------------------------------------------------------------------------------
```

### 促销65欧

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 9 minutes
Processor  : AMD EPYC 9554P 64-Core Processor
CPU cores  : 4 @ 3099.998 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 7.8 GiB
Swap       : 0.0 KiB
Disk       : 196.8 GiB
Distro     : Ubuntu 22.04.1 LTS
Kernel     : 5.15.0-46-generic
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv4 Network Information:
---------------------------------
ISP        : NextGenWebs, S.L.
ASN        : AS41608 NextGenWebs, S.L.
Host       : NextGenWebs, S.L
Location   : Dronten, Flevoland (FL)
Country    : Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 330.29 MB/s  (82.5k) | 2.97 GB/s    (46.4k)
Write      | 331.16 MB/s  (82.7k) | 2.98 GB/s    (46.6k)
Total      | 661.45 MB/s (165.3k) | 5.95 GB/s    (93.0k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 9.59 GB/s    (18.7k) | 9.22 GB/s     (9.0k)
Write      | 10.10 GB/s   (19.7k) | 9.83 GB/s     (9.6k)
Total      | 19.69 GB/s   (38.4k) | 19.06 GB/s   (18.6k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1990                          
Multi Core      | 6297                          
Full Test       | https://browser.geekbench.com/v6/cpu/3711018

YABS completed in 5 min 43 sec
```

### byte-unixbench 性能测试

```

========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: k8s-master: GNU/Linux
   OS: GNU/Linux -- 5.4.0-29-generic -- #33-Ubuntu SMP Wed Apr 29 14:32:27 UTC 2020
   Machine: x86_64 (x86_64)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9554P 64-Core Processor (6200.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9554P 64-Core Processor (6200.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD EPYC 9554P 64-Core Processor (6200.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD EPYC 9554P 64-Core Processor (6200.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   07:51:19 up 5 days, 23:40,  2 users,  load average: 1.39, 1.15, 1.41; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sun Dec 03 2023 07:51:19 - 08:19:19
4 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       53830422.7 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     8770.2 MWIPS (9.9 s, 7 samples)
Execl Throughput                               5370.4 lps   (29.7 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1145788.8 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          349780.5 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2346282.5 KBps  (30.0 s, 2 samples)
Pipe Throughput                             2505376.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 145425.7 lps   (10.0 s, 7 samples)
Process Creation                              18233.9 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  16100.1 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4522.5 lpm   (60.0 s, 2 samples)
System Call Overhead                        3201919.0 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   53830422.7   4612.7
Double-Precision Whetstone                       55.0       8770.2   1594.6
Execl Throughput                                 43.0       5370.4   1248.9
File Copy 1024 bufsize 2000 maxblocks          3960.0    1145788.8   2893.4
File Copy 256 bufsize 500 maxblocks            1655.0     349780.5   2113.5
File Copy 4096 bufsize 8000 maxblocks          5800.0    2346282.5   4045.3
Pipe Throughput                               12440.0    2505376.8   2014.0
Pipe-based Context Switching                   4000.0     145425.7    363.6
Process Creation                                126.0      18233.9   1447.1
Shell Scripts (1 concurrent)                     42.4      16100.1   3797.2
Shell Scripts (8 concurrent)                      6.0       4522.5   7537.4
System Call Overhead                          15000.0    3201919.0   2134.6
                                                                   ========
System Benchmarks Index Score                                        2224.9

------------------------------------------------------------------------
Benchmark Run: Sun Dec 03 2023 08:19:19 - 08:47:20
4 CPUs in system; running 4 parallel copies of tests

Dhrystone 2 using register variables      211571331.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    35107.8 MWIPS (9.9 s, 7 samples)
Execl Throughput                              25259.5 lps   (29.8 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1216132.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          387114.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3971117.9 KBps  (30.0 s, 2 samples)
Pipe Throughput                             9968032.9 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 675073.0 lps   (10.0 s, 7 samples)
Process Creation                              45589.0 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  35814.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5850.4 lpm   (60.0 s, 2 samples)
System Call Overhead                        9345120.4 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  211571331.9  18129.5
Double-Precision Whetstone                       55.0      35107.8   6383.2
Execl Throughput                                 43.0      25259.5   5874.3
File Copy 1024 bufsize 2000 maxblocks          3960.0    1216132.9   3071.0
File Copy 256 bufsize 500 maxblocks            1655.0     387114.8   2339.1
File Copy 4096 bufsize 8000 maxblocks          5800.0    3971117.9   6846.8
Pipe Throughput                               12440.0    9968032.9   8012.9
Pipe-based Context Switching                   4000.0     675073.0   1687.7
Process Creation                                126.0      45589.0   3618.2
Shell Scripts (1 concurrent)                     42.4      35814.4   8446.8
Shell Scripts (8 concurrent)                      6.0       5850.4   9750.6
System Call Overhead                          15000.0    9345120.4   6230.1
                                                                   ========
System Benchmarks Index Score                                        5542.0

======= Script description and score comparison completed! ======= 
```
