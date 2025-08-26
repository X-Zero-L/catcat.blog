---
tags: [hk-server]
title: "Nube Cloud 香港 AMD 7950X 独立服务器 测评"
published: 2024-04-21
---

来自牛肉佬的免费测试玩具,原价268美元。机器很不错，奈何囊肿羞涩。

### 服务器套餐

- 超微刀片服务器。

- AMD Ryzen 9 7950X处理器 / 16核心32线程 / 4.5GHz主频 / 64MB片上缓存。

- 128GB DDR5 4800MT/s ECC内存

- 2片Intel 1.92TB SSD PCIe 4.0x4 NVMe U.2企业盘

- 2x 10G上连接口

- 每月流量16TB。超出按3.88 USD/TB补差价

- 免费提供 IP4/29 + IP6/64

- 香港BGP：PCCWG + Lumen + Cogent + NTT + GSL + Google 私有互联 + EIE 香港 + HKIX + 通过港新、港日海缆骨干通达的新加坡、日本IXP

- 测速点 [http://hk-bgp.hkg.lg.kuaichedao.xyz/](http://hk-bgp.hkg.lg.kuaichedao.xyz/)

- 月租总价278美元 联系销售：[https://t.me/BeefyAsian](https://t.me/BeefyAsian) 频道地址：[https://t.me/KuaiCheDao\_Info](https://t.me/KuaiCheDao_Info)

- 官网：[https://nube.sh](https://nube.sh/)

## 测评

### lscpu

```shell
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  32
  On-line CPU(s) list:   0-31
Vendor ID:               AuthenticAMD
  Model name:            AMD Ryzen 9 7950X 16-Core Processor
    CPU family:          25
    Model:               97
    Thread(s) per core:  2
    Core(s) per socket:  16
    Socket(s):           1
    Stepping:            2
    Frequency boost:     enabled
    CPU max MHz:         5879.8818
    CPU min MHz:         3000.0000
    BogoMIPS:            8983.25
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht syscall                          nx mmxext fxsr_opt pdpe1gb rdtscp lm constant_tsc rep_good nopl nonstop_tsc cpuid extd_apicid aperfmperf ra                         pl pni pclmulqdq monitor ssse3 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt aes xsave avx f16c rdrand lahf_lm 
                         cmp_legacy svm extapic cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw ibs skinit wdt tce topoext perfct                         r_core perfctr_nb bpext perfctr_llc mwaitx cpb cat_l3 cdp_l3 hw_pstate ssbd mba ibrs ibpb stibp vmmcall fsgs                         base bmi1 avx2 smep bmi2 erms invpcid cqm rdt_a avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb 
                         avx512cd sha_ni avx512bw avx512vl xsaveopt xsavec xgetbv1 xsaves cqm_llc cqm_occup_llc cqm_mbm_total cqm_mbm                         _local avx512_bf16 clzero irperf xsaveerptr rdpru wbnoinvd cppc arat npt lbrv svm_lock nrip_save tsc_scale v                         mcb_clean flushbyasid decodeassists pausefilter pfthreshold avic v_vmsave_vmload vgif v_spec_ctrl avx512vbmi                          umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq avx512_vnni avx512_bitalg avx512_vpopcntdq rdpid overflow_                         recov succor smca fsrm flush_l1d
Virtualization features: 
  Virtualization:        AMD-V
Caches (sum of all):     
  L1d:                   512 KiB (16 instances)
  L1i:                   512 KiB (16 instances)
  L2:                    16 MiB (16 instances)
  L3:                    64 MiB (2 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0-31
Vulnerabilities:         
  Gather data sampling:  Not affected
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec rstack overflow:  Mitigation; safe RET, no microcode
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl and seccomp
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP always-on, RSB filling, PBRSB-eIBRS Not affected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```shell
Sun Apr 21 09:57:50 AM HKT 2024

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 56 minutes
Processor  : AMD Ryzen 9 7950X 16-Core Processor
CPU cores  : 32 @ 4500.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 124.9 GiB
Swap       : 8.0 GiB
Disk       : 1.7 TiB
Distro     : Ubuntu 22.04.4 LTS
Kernel     : 5.15.0-105-generic
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Eons Data Communications Limited
ASN        : AS138997 Eons Data Communications Limited
Host       : Eons Data Communications Limited
Location   : Ha Kwai Chung, Kwai Tsing (NKT)
Country    : Hong Kong

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/md0):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 814.93 MB/s (203.7k) | 1.10 GB/s    (17.1k)
Write      | 817.08 MB/s (204.2k) | 1.10 GB/s    (17.2k)
Total      | 1.63 GB/s   (408.0k) | 2.20 GB/s    (34.4k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.30 GB/s     (2.5k) | 1.42 GB/s     (1.3k)
Write      | 1.36 GB/s     (2.6k) | 1.51 GB/s     (1.4k)
Total      | 2.66 GB/s     (5.2k) | 2.93 GB/s     (2.8k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | busy            | 536 Mbits/sec   | 319 ms         
Eranium         | Amsterdam, NL (10G)       | busy            | 2.60 Gbits/sec  | -- 
Telia           | Helsinki, FI (10G)        | busy            | busy            | 323 ms         
Uztelecom       | Tashkent, UZ (10G)        | 2.07 Gbits/sec  | 315 Mbits/sec   | 302 ms         
Leaseweb        | Singapore, SG (10G)       | 7.30 Gbits/sec  | 1.86 Gbits/sec  | 37.6 ms        
Clouvider       | Los Angeles, CA, US (10G) | 1.10 Gbits/sec  | 1.28 Gbits/sec  | 174 ms         
Leaseweb        | NYC, NY, US (10G)         | 3.66 Gbits/sec  | 954 Mbits/sec   | 226 ms         
Edgoo           | Sao Paulo, BR (1G)        | busy            | 3.75 Gbits/sec  | 384 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | busy            | busy            | 342 ms         
Eranium         | Amsterdam, NL (10G)       | busy            | busy            | -- 
Uztelecom       | Tashkent, UZ (10G)        | busy            | busy            | 302 ms         
Leaseweb        | Singapore, SG (10G)       | busy            | 5.59 Gbits/sec  | 37.1 ms        
Clouvider       | Los Angeles, CA, US (10G) | 991 Mbits/sec   | 1.27 Gbits/sec  | 174 ms         
Leaseweb        | NYC, NY, US (10G)         | 3.13 Gbits/sec  | 3.02 Gbits/sec  | 226 ms         
Edgoo           | Sao Paulo, BR (1G)        | busy            | 765 Kbits/sec   | 383 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2972                          
Multi Core      | 17845                         
Full Test       | https://browser.geekbench.com/v6/cpu/5800286

YABS completed in 16 min 38 sec
```

### Bench

```shell
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 7950X 16-Core Processor
 CPU Cores          : 32 @ 4500.000 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 1.8 TB (24.0 GB Used)
 Total Mem          : 124.9 GB (625.8 MB Used)
 Total Swap         : 8.0 GB (0 Used)
 System uptime      : 0 days, 1 hour 13 min
 Load average       : 1.26, 0.86, 0.35
 OS                 : Ubuntu 22.04.4 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.15.0-105-generic
 TCP CC             : bbr
 Virtualization     : Dedicated
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS138997 Eons Data Communications Limited
 Location           : Kwai Chung / HK
 Region             : Kwai Tsing
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.5 GB/s
 I/O Speed(2nd run) : 1.5 GB/s
 I/O Speed(3rd run) : 1.4 GB/s
 I/O Speed(average) : 1501.9 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Los Angeles, US  523.33 Mbps       3908.91 Mbps        163.73 ms   
 Dallas, US       457.91 Mbps       2297.02 Mbps        228.15 ms   
 Montreal, CA     355.06 Mbps       872.31 Mbps         252.45 ms   
 Amsterdam, NL    273.77 Mbps       991.71 Mbps         296.42 ms   
 Hongkong, CN     7136.79 Mbps      9378.75 Mbps        2.11 ms     
 Mumbai, IN       384.01 Mbps       0.57 Mbps           330.20 ms   
 Singapore, SG    431.66 Mbps       1787.20 Mbps        38.46 ms    
 Tokyo, JP        876.98 Mbps       6491.66 Mbps        57.07 ms    
----------------------------------------------------------------------
 Finished in        : 4 min 48 sec
 Timestamp          : 2024-04-21 10:20:01 HKT
----------------------------------------------------------------------
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Ubuntu 22.04.4 LTS
  Kernel                        Linux 5.15.0-105-generic x86_64
  Model                         Supermicro AS -3015MR-H8TNR
  Motherboard                   Supermicro H13SRD-F
  BIOS                          American Megatrends International, LLC. 1.1

处理器信息
  Name                          AMD Ryzen 9 7950X
  Topology                      1 Processor, 16 Cores, 32 Threads
  Identifier                    AuthenticAMD Family 25 Model 97 Stepping 2
  Base Frequency                5.88 GHz
  L1 Instruction Cache          32.0 KB x 16
  L1 Data Cache                 32.0 KB x 16
  L2 Cache                      1.00 MB x 16
  L3 Cache                      32.0 MB x 2

内存信息
  Size                          125 GB

单核测试分数：2213
多核测试分数：22001
详细结果链接：https://browser.geekbench.com/v5/cpu/22415037
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%207950X
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD Ryzen 9 7950X 16-Core Processor (x86_64)
16 cores @ 5879 MHz  |  124.9 GiB RAM
Number of Processes: 32  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          59348
  Integer Math                     219555 Million Operations/s
  Floating Point Math              120837 Million Operations/s
  Prime Numbers                    282 Million Primes/s
  Sorting                          90508 Thousand Strings/s
  Encryption                       53636 MB/s
  Compression                      813426 KB/s
  CPU Single Threaded              4223 Million Operations/s
  Physics                          2704 Frames/s
  Extended Instructions (SSE)      55860 Million Matrices/s

Memory Mark:                       3351
  Database Operations              13099 Thousand Operations/s
  Memory Read Cached               39840 MB/s
  Memory Read Uncached             38331 MB/s
  Memory Write                     22946 MB/s
  Available RAM                    126997 Megabytes
  Memory Latency                   61 Nanoseconds
  Memory Threaded                  50919 MB/s
--------------------------------------------------------------------------------
```

### byte-unixbench 性能测试

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: eons-supero-ryzen-2: GNU/Linux
   OS: GNU/Linux -- 5.15.0-105-generic -- #115-Ubuntu SMP Mon Apr 15 09:52:04 UTC 2024
   Machine: x86_64 (x86_64)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 4: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 5: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 6: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 7: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 8: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 9: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 10: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 11: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 12: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 13: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 14: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 15: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 16: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 17: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 18: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 19: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 20: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 21: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 22: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 23: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 24: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 25: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 26: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 27: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 28: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 29: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 30: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 31: AMD Ryzen 9 7950X 16-Core Processor (8983.2 bogomips)
          Hyper-Threading, x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   10:35:15 up  1:33,  1 user,  load average: 3.96, 6.42, 3.89; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sun Apr 21 2024 10:35:15 - 11:03:35
32 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       80967723.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    13071.1 MWIPS (10.0 s, 7 samples)
Execl Throughput                              10713.4 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       2020031.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          521229.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       6935750.2 KBps  (30.0 s, 2 samples)
Pipe Throughput                             3640060.0 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 545275.7 lps   (10.0 s, 7 samples)
Process Creation                              14893.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  21776.0 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  11026.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        3135299.6 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   80967723.4   6938.1
Double-Precision Whetstone                       55.0      13071.1   2376.6
Execl Throughput                                 43.0      10713.4   2491.5
File Copy 1024 bufsize 2000 maxblocks          3960.0    2020031.9   5101.1
File Copy 256 bufsize 500 maxblocks            1655.0     521229.9   3149.4
File Copy 4096 bufsize 8000 maxblocks          5800.0    6935750.2  11958.2
Pipe Throughput                               12440.0    3640060.0   2926.1
Pipe-based Context Switching                   4000.0     545275.7   1363.2
Process Creation                                126.0      14893.3   1182.0
Shell Scripts (1 concurrent)                     42.4      21776.0   5135.8
Shell Scripts (8 concurrent)                      6.0      11026.2  18377.1
System Call Overhead                          15000.0    3135299.6   2090.2
                                                                   ========
System Benchmarks Index Score                                        3733.8

------------------------------------------------------------------------
Benchmark Run: Sun Apr 21 2024 11:03:35 - 11:03:35
32 CPUs in system; running 32 parallel copies of tests
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 7950X 16-Core Processor
 CPU 核心数        : 1 物理核心, 16 总核心, 32 总线程数
 CPU 频率          : 4500.000 MHz
 CPU 缓存          : L1: 512.00 KB / L2: 16.00 MB / L3: 64.00 MB
 硬盘空间          : 24.08 GiB / 1.74 TiB
 启动盘路径        : /dev/md0
 内存              : 843.93 MiB / 124.95 GiB
 Swap              : 0 KiB / 8.00 GiB
 系统在线时间      : 0 days, 2 hour 15 min
 负载              : 0.15, 0.75, 1.56
 系统              : Ubuntu 22.04.4 LTS (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 5.15.0-105-generic
 TCP加速方式       : bbr
 虚拟化架构        : Dedicated
 NAT类型           : Full Cone
 IPV4 ASN          : AS138997 Eons Data Communications Limited
 IPV4 位置         : Kwai Chung / Kwai Tsing / HK
 IPV6 ASN          : AS138997 Eons Data Communications
 IPV6 位置         : Ha Kwai Chung / Kwai Tsing / Hong Kong
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		6746 Scores
 32 线程测试(多核)得分: 		108971 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		80263.75 MB/s
 单线程写测试:		44062.72 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		274 MB/s (66.98 IOPS, 0.38s)		260 MB/s (63579 IOPS, 0.40s)
 1GB-1M Block		2.0 GB/s (1943 IOPS, 0.51s)		1.2 GB/s (1167 IOPS, 0.86s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 807.08 MB/s (201.7k) | 1.08 GB/s    (16.8k)
Write      | 809.21 MB/s (202.3k) | 1.08 GB/s    (16.9k)
Total      | 1.61 GB/s   (404.0k) | 2.16 GB/s    (33.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.26 GB/s     (2.4k) | 1.38 GB/s     (1.3k)
Write      | 1.32 GB/s     (2.5k) | 1.47 GB/s     (1.4k)
Total      | 2.58 GB/s     (5.0k) | 2.85 GB/s     (2.7k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG12S20)
Youtube识别地域: 香港(HK)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG12S20)
Youtube识别地域: 香港(HK)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：台湾
[IPv6]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：香港
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：香港区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：香港区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: HK)
 HotStar:				No
 Disney+:				Yes (Region: TW)
 Netflix:				Yes (Region: HK)
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Yes (Region: HK)
 TVBAnywhere+:				No
 iQyi Oversea Region:			HK
 Viu.com:				Yes (Region: HK)
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Hong Kong  
 Spotify Registration:			Yes (Region: HK)
 Steam Currency:			HKD
 ChatGPT:				Only Available with Mobile APP
 Bing Region:				HK
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:					Failed (Network Connection)
 HotStar:				No
 Disney+:				Yes (Region: HK)
 Netflix:				Yes (Region: HK)
 YouTube Premium:			Yes (Region: HK)
 Amazon Prime Video:			Unsupported
 TVBAnywhere+:				Failed (Network Connection)
 iQyi Oversea Region:			Failed
 Viu.com:				Failed
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Hong Kong  
 Spotify Registration:			Yes (Region: HK)
 Steam Currency:			Failed (Network Connection)
 ChatGPT:				Failed
 Bing Region:				HK
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		No
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  ① | scamalytics数据库 ②  | virustotal数据库  ③ | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库  ⑥ | ipwhois数据库     ⑦  | ipregistry数据库  ⑧ | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
ipapiis数据库 ⑪ | ipapicom数据库    ⑫  | abstractapi数据库 ⑬ | ipqualityscore数据库 ⑭ 
欺诈分数(越低越好): 0⑤  abuse得分(越低越好): 0⑤  0.0039 (Low)⑪  威胁等级: low②  
IP类型: 
  使用类型(usage_type):isp①  Data Center/Web Hosting/Transit⑤  isp⑧  business⑨  isp⑪  
  公司类型(company_type):business①  isp⑧  business⑪  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No⑥ ⑨   Yes⑪ 
  移动网络(mobile):  No⑥ ⑪ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑪ ⑫ 
  VPN(vpn):  No① ② ⑦ ⑧ ⑪ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ ⑪ ⑫ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ ⑪ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ ⑪ 
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  yandex邮箱: Yes
  qq邮箱: Yes
------以下为IPV6检测------
欺诈分数(越低越好): 33②  abuse得分(越低越好): 0⑤  0.002 (Low)⑪  威胁等级: low②  
IP类型: Data Center/Web Hosting/Transit⑤  isp⑪
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Kwai Chung 服务商: AS138997 Eons Data Communications Limited
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    测试超时
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     测试超时
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    测试超时
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       测试超时
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.85 ms  AS138997  中国, 香港, joyso.app
1.05 ms  AS138997  中国, 香港, eons.cloud
3.15 ms  AS138997  中国, 香港, eons.cloud
0.70 ms  AS138997  中国, 香港, eons.cloud
2.95 ms  AS138997  中国, 香港, eons.cloud
1.50 ms  AS138997  中国, 香港, eons.cloud
4.00 ms  AS138997  中国, 香港, eons.cloud
3.45 ms  AS138997  中国, 香港, eons.cloud
4.11 ms  AS138997  中国, 香港, eons.cloud
1.79 ms  AS3491,AS31713  中国, 香港, pccw.com
208.36 ms  AS4134  美国, 加利福尼亚州, 圣何塞, chinatelecom.com.cn, 电信
350.81 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
354.81 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.44 ms  AS138997  中国, 香港, joyso.app
1.35 ms  AS138997  中国, 香港, eons.cloud
1.93 ms  AS138997  中国, 香港, eons.cloud
0.29 ms  AS138997  中国, 香港, eons.cloud
5.84 ms  AS138997  中国, 香港, eons.cloud
4.62 ms  AS138997  中国, 香港, eons.cloud
8.07 ms  AS138997  中国, 香港, eons.cloud
4.79 ms  AS138997  中国, 香港, eons.cloud
7.96 ms  AS138997  中国, 香港, eons.cloud
8.14 ms  AS138997  中国, 香港, eons.cloud
7.53 ms  AS138997  中国, 香港, eons.cloud
7.46 ms  AS138997  中国, 香港, eons.cloud
7.36 ms  AS7578  中国, 香港, globalsecurelayer.com
4.84 ms  AS7578  COGENTCO.COM 骨干网, cogentco.com
34.72 ms  AS7578  COGENTCO.COM 骨干网, cogentco.com
37.79 ms  AS7578  新加坡, cogentco.com
35.05 ms  AS7578  新加坡, cogentco.com
101.44 ms  AS7578  日本, 东京都, 东京, cogentco.com
104.22 ms  AS7578  日本, 东京都, 东京, cogentco.com
94.94 ms  *  日本, 东京都, 东京, bbix.net
155.00 ms  AS17676  中国, 北京, bbtec.net
156.58 ms  AS4837  中国, 北京, chinaunicom.com, 联通
170.98 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
175.98 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
171.09 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.57 ms  AS138997  中国, 香港, joyso.app
0.84 ms  AS138997  中国, 香港, eons.cloud
4.33 ms  AS138997  中国, 香港, eons.cloud
0.77 ms  AS138997  中国, 香港, eons.cloud
3.65 ms  AS138997  中国, 香港, eons.cloud
1.42 ms  AS138997  中国, 香港, eons.cloud
4.15 ms  AS138997  中国, 香港, eons.cloud
4.07 ms  AS138997  中国, 香港, eons.cloud
4.24 ms  AS138997  中国, 香港, eons.cloud
1.80 ms  AS3491,AS31713  中国, 香港, pccw.com
34.94 ms  AS58453  新加坡, chinamobile.com, 移动
40.70 ms  AS58453  中国, 香港, chinamobile.com, 移动
98.89 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
92.93 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
47.13 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
44.93 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
46.17 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
45.02 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动

 总共花费      : 3 分 25 秒
 时间          : Sun Apr 21 11:19:57 HKT 2024
------------------------------------------------------------------------
```

### 回程测试

```shell
No:1/9 Traceroute to 中国 深圳 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 104.21.40.176 - 36.22ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes packets
1   103.152.220.233 AS138997 [IDT-NET]        中国 香港   kuaichedao.co 
                                              0.51 ms
2   103.138.72.81   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.84 ms
3   103.138.72.76   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              1.41 ms
4   103.138.72.73   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.28 ms
5   103.138.72.72   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              3.44 ms
6   103.138.72.68   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              1.30 ms
7   103.138.72.57   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              3.93 ms
8   103.138.72.8    AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.66 ms
9   103.138.72.90   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.06 ms
10  63.222.113.162  AS3491                    美国 伊利诺伊州 芝加哥  pccwglobal.com 
                                              1.86 ms
11  *
12  63.223.43.98    AS3491   [PCCW-BACKBONE]  美国 加利福尼亚州 洛杉矶  pccwglobal.com 
                                              164.65 ms
13  63.223.43.98    AS3491   [PCCW-BACKBONE]  美国 加利福尼亚州 洛杉矶  pccwglobal.com 
                                              164.31 ms
14  202.97.43.85    AS4134   [CHINANET-BB]    中国 江苏 南京市  chinatelecom.com.cn  电信
                                              352.00 ms
15  *
16  *
17  *
18  *
19  119.147.61.110  AS4134   [CHINANET-GD]    中国 广东 深圳  chinatelecom.com.cn  电信
                                              333.15 ms
20  59.36.216.1     AS4134                    中国 广东 江门市  chinatelecom.com.cn  电信
                                              365.63 ms

No:2/9 Traceroute to 中国 上海 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 172.67.155.192 - 32.36ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes packets
1   103.152.220.233 AS138997 [IDT-NET]        中国 香港   kuaichedao.co 
                                              0.50 ms
2   103.138.72.81   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.76 ms
3   103.138.72.76   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.95 ms
4   103.138.72.73   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.36 ms
5   103.138.72.72   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.05 ms
6   103.138.72.68   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              1.36 ms
7   103.138.72.57   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              3.95 ms
8   103.138.72.8    AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.23 ms
9   103.138.72.90   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              3.84 ms
10  63.222.113.162  AS3491                    美国 伊利诺伊州 芝加哥  pccwglobal.com 
                                              2.16 ms
11  *
12  *
13  202.97.49.166   AS4134   [CHINANET-BB]    美国 加利福尼亚 洛杉矶  chinatelecom.com.cn  电信
                                              266.57 ms
14  *
15  *
16  *
17  *
18  *
19  *
20  101.226.41.65   AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              353.92 ms

No:3/9 Traceroute to 中国 北京 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 28.01ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes packets
1   103.152.220.233 AS138997 [IDT-NET]        中国 香港   kuaichedao.co 
                                              0.46 ms
2   103.138.72.81   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.81 ms
3   103.138.72.76   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              3.58 ms
4   103.138.72.73   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.29 ms
5   103.138.72.72   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              3.25 ms
6   103.138.72.68   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              1.35 ms
7   103.138.72.57   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.22 ms
8   103.138.72.8    AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.69 ms
9   103.138.72.90   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              3.92 ms
10  63.222.113.162  AS3491                    美国 伊利诺伊州 芝加哥  pccwglobal.com 
                                              1.71 ms
11  *
12  63.223.46.26    AS3491   [PCCW-BACKBONE]  美国 佛罗里达州 迈阿密  pccwglobal.com 
                                              250.02 ms
13  63.223.46.42    AS3491   [PCCW-BACKBONE]  美国 佛罗里达州 迈阿密  pccwglobal.com 
                                              242.43 ms
14  218.30.54.96    AS4134   [CHINANET-US]    美国 佛罗里达州 迈阿密  chinatelecom.com.cn  电信
                                              313.76 ms
15  202.97.93.137   AS4134   [CHINANET-BB]    中国 北京   chinatelecom.com.cn  电信
                                              385.80 ms
16  *
17  202.97.12.49    AS4134   [CHINANET-BB]    中国 北京   chinatelecom.com.cn  电信
                                              387.60 ms
18  *
19  *
20  *
21  220.181.53.1    AS23724  [CHINANET-IDC]   中国 北京   bjtelecom.net  电信
                                              378.38 ms

No:4/9 Traceroute to 中国 广州 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 32.58ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes packets
1   103.152.220.233 AS138997 [IDT-NET]        中国 香港   kuaichedao.co 
                                              0.46 ms
2   103.138.72.81   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.95 ms
3   103.138.72.80   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.05 ms
4   103.138.72.73   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.38 ms
5   103.138.72.72   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              6.04 ms
6   103.138.72.68   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              5.97 ms
7   103.138.72.51   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              7.75 ms
8   103.138.72.52   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.82 ms
9   103.138.72.54   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              9.19 ms
10  103.138.72.88   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              6.71 ms
11  103.138.72.9    AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              7.35 ms
12  103.138.72.19   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              7.58 ms
13  31.217.251.226  AS7578                    中国 香港   globalsecurelayer.com 
                                              7.28 ms
14  206.148.24.92   AS7578                    中国 香港   globalsecurelayer.com 
                                              4.46 ms
15  *
16  *
17  *
18  *
19  206.148.24.36   AS7578                    日本 东京都 东京  globalsecurelayer.com 
                                              103.93 ms
20  101.203.70.233  *        [BBIXINTLNET]    日本 东京都 东京        
                                              95.08 ms
21  *
22  *
23  *
24  221.111.202.70  AS17676  [BBTEC]          中国 北京   softbank.jp 
                                              157.47 ms
25  219.158.16.69   AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              156.65 ms
26  *
27  *
28  112.96.0.2      AS17816  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              175.09 ms
29  120.80.170.250  AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              168.91 ms
30  *

No:5/9 Traceroute to 中国 上海 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - [2606:4700:3037::ac43:9bc0] - 34.07ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes packets
1   103.152.220.233 AS138997 [IDT-NET]        中国 香港   kuaichedao.co 
                                              0.57 ms
2   103.138.72.77   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.76 ms
3   103.138.72.80   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.71 ms
4   103.138.72.73   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.77 ms
5   103.138.72.72   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              8.21 ms
6   103.138.72.68   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.62 ms
7   103.138.72.51   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              7.66 ms
8   103.138.72.52   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.57 ms
9   103.138.72.54   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              9.74 ms
10  103.138.72.88   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              6.16 ms
11  103.138.72.9    AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              7.35 ms
12  103.138.72.19   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              7.18 ms
13  31.217.251.226  AS7578                    中国 香港   globalsecurelayer.com 
                                              7.27 ms
14  206.148.24.92   AS7578                    中国 香港   globalsecurelayer.com 
                                              4.57 ms
15  *
16  *
17  *
18  *
19  206.148.24.36   AS7578                    日本 东京都 东京  globalsecurelayer.com 
                                              104.05 ms
20  101.203.70.233  *        [BBIXINTLNET]    日本 东京都 东京        
                                              95.04 ms
21  *
22  *
23  *
24  221.111.202.70  AS17676  [BBTEC]          中国 北京   softbank.jp 
                                              151.42 ms
25  219.158.9.226   AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              157.86 ms
26  *
27  *
28  *
29  210.22.66.178   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              150.48 ms
30  *

No:6/9 Traceroute to 中国 北京 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 172.67.155.192 - 36.79ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes packets
1   103.152.220.233 AS138997 [IDT-NET]        中国 香港   kuaichedao.co 
                                              0.39 ms
2   103.138.72.81   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.86 ms
3   103.138.72.76   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.50 ms
4   103.138.72.73   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.74 ms
5   103.138.72.72   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              6.32 ms
6   103.138.72.68   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.94 ms
7   103.138.72.51   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              7.61 ms
8   103.138.72.52   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.97 ms
9   103.138.72.54   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              9.70 ms
10  103.138.72.88   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              6.10 ms
11  103.138.72.9    AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              7.15 ms
12  103.138.72.19   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              7.28 ms
13  31.217.251.226  AS7578                    中国 香港   globalsecurelayer.com 
                                              7.25 ms
14  206.148.24.92   AS7578                    中国 香港   globalsecurelayer.com 
                                              4.50 ms
15  *
16  *
17  *
18  *
19  206.148.24.36   AS7578                    日本 东京都 东京  globalsecurelayer.com 
                                              103.93 ms
20  101.203.70.233  *        [BBIXINTLNET]    日本 东京都 东京        
                                              95.31 ms
21  *
22  *
23  *
24  221.111.202.70  AS17676  [BBTEC]          中国 北京   softbank.jp 
                                              152.26 ms
25  219.158.3.49    AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              156.37 ms
26  *
27  *
28  *
29  *
30  *

No:7/9 Traceroute to 中国 深圳 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 104.21.40.176 - 30.06ms - Misaka.HKG
{"error":"Challenge does not exist or has expired"}

RetToken failed 3 times, please try again after a while, exit

No:8/9 Traceroute to 中国 上海 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 104.21.40.176 - 29.01ms - Misaka.HKG
2024/04/21 11:27:33 dial: websocket: bad handshake
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes packets
2024/04/21 11:27:33 dial: websocket: bad handshake
1   103.152.220.233 ASAPI Server Error                  网络故障          
                                              0.63 ms
2024/04/21 11:27:34 dial: websocket: bad handshake
2024/04/21 11:27:34 dial: websocket: bad handshake
2   103.138.72.77   ASAPI Server Error                  网络故障          
                                              1.13 ms
2024/04/21 11:27:34 dial: websocket: bad handshake
2024/04/21 11:27:34 dial: websocket: bad handshake
3   103.138.72.80   ASAPI Server Error                  网络故障          
                                              2.25 ms
4   103.138.72.73   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              16.99 ms
5   103.138.72.72   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              3.04 ms
6   103.138.72.68   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              1.31 ms
7   103.138.72.57   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.01 ms
8   103.138.72.58   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.01 ms
9   *
10  4.69.208.62     AS3356                    中国 香港   level3.com 
                                              4.51 ms
11  223.121.3.9     AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              3.41 ms
12  223.120.2.117   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              10.76 ms
13  223.120.22.114  AS58453  [CMI-INT]        中国 上海   cmi.chinamobile.com  移动
                                              32.40 ms
14  *
15  *
16  221.183.89.46   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              32.39 ms
17  *
18  *
19  183.194.216.129 AS9808   [APNIC-AP]       中国 上海   chinamobile.com  移动
                                              63.94 ms

No:9/9 Traceroute to 中国 北京 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - [2606:4700:3031::6815:28b0] - 30.62ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes packets
1   103.152.220.233 AS138997 [IDT-NET]        中国 香港   kuaichedao.co 
                                              0.56 ms
2   103.138.72.81   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.79 ms
3   103.138.72.76   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.05 ms
4   103.138.72.73   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.49 ms
5   103.138.72.72   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.82 ms
6   103.138.72.68   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              1.23 ms
7   103.138.72.57   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.26 ms
8   103.138.72.58   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.05 ms
9   *
10  4.69.218.150    AS3356                    中国 香港   level3.com 
                                              5.65 ms
11  *
12  *
13  223.120.22.142  AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              93.81 ms
14  221.183.55.110  AS9808   [CMNET]          中国 北京  回国到达层 chinamobile.com  移动
                                              92.72 ms
15  221.183.46.250  AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              75.97 ms
16  221.183.89.122  AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              93.44 ms
17  *
18  *
19  211.136.63.66   AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              97.18 ms
20  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              98.11 ms
21  *
22  *
23  211.136.25.153  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              94.49 ms
```

### 国内延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-5.jpg" alt="" loading="lazy">
</picture>

### 通电检测

```shell

  CPU 型号              AMD Ryzen 9 7950X 16-Core Processor
  CPU 核心              合计 16 核心，32 线程
  CPU 状态              当前主频 4500.000 MHz
  内存大小              127944 MB (773 MB 已用)
  交换分区              8191 MB (0 MB 已用)

  第 1 块硬盘           通电 18 小时，型号 INTEL SSDPF2KX019T1M
  第 2 块硬盘           通电 18 小时，型号 INTEL SSDPF2KX019T1M

  硬盘大小              1844.3 GB

  服务器时间            2024-04-21 11:32:22
  运行时间              0 days 2 hour 30 min
  系统负载              0.00, 0.25, 0.78
  虚拟化技术            No Virtualization Detected

  IPv4 地址             103.152.xxx.xxx
  IPv6 地址             2404:c140:xxxx:xxxx
  运营商                AS138997 Eons Data Communications Limited
  地理位置              HK, Kwai Tsing, Kwai Chung

  操作系统              Ubuntu 22.04.4 jammy (x86_64)
  系统内核              5.15.0-105-generic
  TCP 加速              bbr

  当前脚本版本          1.4.1.1

  顺序写入 (1st)        1500 MB/s
  顺序写入 (2nd)        1400 MB/s
  顺序写入 (3rd)        1400 MB/s
  顺序写入 (4th)        1400 MB/s
  顺序写入 (5th)        1400 MB/s
  顺序写入 (avg)        1400.0 MB/s
```

### 流媒体解锁测试

```shell
============[ Multination ]============ Dazn:                                  Yes (Region: HK) HotStar:                               No Disney+:                               Yes (Region: TW) Netflix:                               Yes (Region: HK) YouTube Premium:                       Yes (Region: HK) Amazon Prime Video:                    Yes (Region: HK) TVBAnywhere+:                          No iQyi Oversea Region:                   HK Viu.com:                               Yes (Region: HK) YouTube CDN:                           Hong Kong  Netflix Preferred CDN:                 Hong Kong   Spotify Registration:                  Yes (Region: HK) Steam Currency:                        HKD ChatGPT:                               Only Available with Mobile APP Bing Region:                           HK Instagram Licensed Audio:              No====================================================[ Hong Kong ]============= Now E:                                 No Viu.TV:                                Yes MyTVSuper:                             Yes HBO GO Asia:                           Yes (Region: HK) BiliBili Hongkong/Macau/Taiwan:        Yes======================================= ** 正在测试IPv6解锁情况 -------------------------------- ** 您的网络为: Eons Data Communications (2404:c140:1f00:*:*) ============[ Multination ]============ Dazn:                                  Failed (Network Connection) HotStar:                               No Disney+:                               Yes (Region: HK) Netflix:                               Yes (Region: HK) YouTube Premium:                       Yes (Region: HK) Amazon Prime Video:                    Unsupported TVBAnywhere+:                          Failed (Network Connection) iQyi Oversea Region:                   Failed Viu.com:                               Failed YouTube CDN:                           Hong Kong  Netflix Preferred CDN:                 Hong Kong   Spotify Registration:                  Yes (Region: HK) Steam Currency:                        Failed (Network Connection) ChatGPT:                               Failed Bing Region:                           HK Instagram Licensed Audio:              No====================================================[ Hong Kong ]============= Now E:                                 Failed Viu.TV:                                Failed (Network Connection) MyTVSuper:                             No HBO GO Asia:                           Failed (Network Connection) BiliBili Hongkong/Macau/Taiwan:        Failed (Network Connection)=======================================
```

### 三网单线程

```shell
------------------------ 多功能 自更新 测速脚本 ------------------------
 Version               : v2024-04-07
 Usage                 : bash <(curl -sL bash.icu/speedtest)
 GitHub                : https://github.com/i-abc/speedtest
------------------------------------------------------------------------
大陆三网+教育网 IPv4 单线程测速，v2024-03-15
------------------------------------------------------------------------
测速节点            下载/Mbps      上传/Mbps      延迟/ms      抖动/ms
电信 四川成都         失败         112.70 Mbps    188.00 ms    5.20 ms      
电信 江苏苏州       13.80 Mbps     38.70 Mbps     328.50 ms    29.00 ms     
电信 浙江杭州       2.90 Mbps      22.50 Mbps     308.50 ms    51.90 ms     
电信 安徽合肥 5G    1.20 Mbps      0.30 Mbps      308.70 ms    36.90 ms     
电信 浙江宁波 5G    7.30 Mbps      16.80 Mbps     299.80 ms    22.10 ms     
电信 江苏镇江 5G    16.10 Mbps     39.30 Mbps     308.90 ms    24.20 ms     
电信 江苏南京 5G    2.50 Mbps      11.20 Mbps     359.90 ms    14.40 ms     
移动 北京           922.50 Mbps    524.60 Mbps    91.40 ms     5.10 ms      
移动 河南郑州 5G    20.10 Mbps     216.90 Mbps    104.70 ms    2.70 ms      
移动 浙江杭州 5G    275.60 Mbps    449.80 Mbps    37.40 ms     37.20 ms     
广电 重庆             失败         0.40 Mbps      392.70 ms    1.20 ms      
------------------------------------------------------------------------
系统时间：2024-04-21 11:48:46 HKT
北京时间: 2024-04-21 11:48:46 CST
------------------------------------------------------------------------
```

### Network-Speed.xyz

```shell
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 7950X 16-Core Processor
 CPU Cores          : 32 @ 4500.000 MHz
 CPU Cache          : 1024 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 1.7 TB (24.1 GB Used)
 Total RAM          : 124.9 GB (683.1 MB Used)
 Total Swap         : 8.0 GB (0 Used)
 System uptime      : 0 days, 6 hour 25 min
 Load average       : 0.00, 0.02, 0.00
 OS                 : Ubuntu 22.04.4 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.15.0-105-generic
 Virtualization     : NONE
 TCP Control        : bbr
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv6
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : Eons Data Communications Limited
 ASN                : AS138997 Eons Data Communications Limited
 Host               : Eons Data Communications Limited
 Location           : Ha Kwai Chung, Kwai Tsing-NKT, Hong Kong
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: Eons Data Communications 

 Nearest          5.37 ms     0.0%    9351.60 Mbps   5968.99 Mbps   CMHK Broadband - Hong Kong 

 Kochi, IN        92.79 ms    0.0%    2697.62 Mbps   984.09 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    344.54 ms   0.0%    0.31 Mbps      171.05 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      69.36 ms    N/A     2361.62 Mbps   1998.97 Mbps   Jio - Chennai 
 Mumbai, IN       97.25 ms    0.0%    4535.06 Mbps   876.06 Mbps    i3D.net - Mumbai 
 Delhi, IN        114.62 ms   0.0%    8679.30 Mbps   764.65 Mbps    Tata Play Fiber - New Delhi 

 Seattle, US      165.77 ms   N/A     4239.89 Mbps   553.35 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  201.70 ms   0.0%    0.81 Mbps      434.60 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       188.18 ms   0.0%    5040.66 Mbps   1617.82 Mbps   Hivelocity - Dallas, TX 
 Miami, US        248.39 ms   N/A     2234.48 Mbps   362.97 Mbps    Dish Wireless - Miami, FL 
 New York, US     249.94 ms   0.0%    6542.56 Mbps   1841.72 Mbps   GSL Networks - New York, NY 
 Toronto, CA      243.06 ms   0.0%    869.02 Mbps    363.79 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  198.95 ms   N/A     4143.59 Mbps   450.81 Mbps    INFINITUM - Mexico City 

 London, UK       369.09 ms   0.0%    1.01 Mbps      974.66 Mbps    VeloxServ Communications - London 
 Amsterdam, NL    298.39 ms   0.0%    3155.70 Mbps   632.77 Mbps    31173 Services AB - Amsterdam 
 Paris, FR        297.84 ms   N/A     3589.54 Mbps   659.15 Mbps    Axione - Paris 
 Frankfurt, DE    384.74 ms   0.0%    0.39 Mbps      180.45 Mbps    Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       385.02 ms   0.0%    33.31 Mbps     928.61 Mbps    Play - Warszawa 
 Bucharest, RO    257.70 ms   0.0%    2362.44 Mbps   328.19 Mbps    Vodafone Romania Fixed – Bucharest - Bucharest 
 Moscow, RU       681.42 ms   0.0%    0.28 Mbps      160.98 Mbps    MegaFon - Moscow 

 Jeddah, SA       350.51 ms   0.0%    4727.14 Mbps   1411.29 Mbps   Saudi Telecom Company 
 Dubai, AE        266.53 ms   0.0%    5256.13 Mbps   584.74 Mbps    du - Dubai  
 Fujairah, AE     104.27 ms   0.0%    9269.10 Mbps   3324.65 Mbps   ETISALAT-UAE - Fujairah 
 Istanbul, TR     318.51 ms   0.0%    4547.72 Mbps   542.35 Mbps    Turkcell - Istanbul 
 Tehran, IR       380.01 ms   0.0%    1575.23 Mbps   275.03 Mbps    Asiatech - Tehran 

 Tokyo, JP        56.07 ms    N/A     3671.18 Mbps   4801.65 Mbps   fdcservers.net - Tokyo 
 Shanghai, CU-CN  FAILED                                                        
 Nanjing, CT-CN   FAILED                                                        
 Hong Kong, CN    6.51 ms     N/A     3940.36 Mbps   6245.81 Mbps   STC - Hong Kong 
 Singapore, SG    40.45 ms    0.0%    4615.43 Mbps   2266.22 Mbps   i3D.net - Singapore 
 Jakarta, ID      48.74 ms    0.0%    8372.60 Mbps   1284.60 Mbps   PT Solnet Indonesia - Jakarta 
---------------------------------------------------------------------------
 Avg DL Speed       : 3648.76 Mbps
 Avg UL Speed       : 1413.45 Mbps

 Total DL Data      : 140.46 GB
 Total UL Data      : 50.60 GB
 Total Data         : 191.06 GB
---------------------------------------------------------------------------
 Duration           : 16 min 1 sec
 System Time        : 21/04/2024 - 15:43:40 HKT
 Total Script Runs  : 41186
---------------------------------------------------------------------------
 Result             : https://result.network-speed.xyz/r/1713684950_J0SGXE_GLOBAL.txt
---------------------------------------------------------------------------
```

### 延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-6.jpg" alt="" loading="lazy">
</picture>

### 硬盘读写测试

```shell
root@eons-supero-ryzen-2:~#  dd bs=64k count=4k if=/dev/zero of=test oflag=dsync && rm test
4096+0 records in
4096+0 records out
268435456 bytes (268 MB, 256 MiB) copied, 0.281059 s, 955 MB/s
root@eons-supero-ryzen-2:~# dd if=/dev/zero of=test bs=8M count=256 oflag=dsync
256+0 records in
256+0 records out
2147483648 bytes (2.1 GB, 2.0 GiB) copied, 1.11748 s, 1.9 GB/s
root@eons-supero-ryzen-2:~# dd if=/dev/zero of=test bs=8M count=256 oflag=dsync
256+0 records in
256+0 records out
2147483648 bytes (2.1 GB, 2.0 GiB) copied, 1.14386 s, 1.9 GB/s
root@eons-supero-ryzen-2:~# 
```

```shell
root@eons-supero-ryzen-2:~# ioping -R /

--- / (xfs /dev/md0 1.74 TiB) ioping statistics ---
26.7 k requests completed in 2.99 s, 104.2 MiB read, 8.94 k iops, 34.9 MiB/s
generated 26.7 k requests in 3.00 s, 104.2 MiB, 8.89 k iops, 34.7 MiB/s
min/avg/max/mdev = 22.4 us / 111.9 us / 352.1 us / 22.6 us
```