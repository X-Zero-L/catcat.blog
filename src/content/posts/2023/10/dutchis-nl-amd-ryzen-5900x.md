---
title: "DutchIS 荷兰 AMD Ryzen 5900X 测评"
published: 2023-10-10
categories: 
  - "vps"
  - "eu-server"
---

## 套餐

**_Provider : DutchIS  
Type/Plan : Virtual Servers - Peformance II  
Processor : AMD Ryzen 5900X  
Num of Core : 2 Cores  
Memory : 4 GB DDR4 RAM  
Storage : 50 GB NVMe(PCIe 4.0)  
Bandwidth : Unlimited @ 1 Gbps IN | 1 Gbps OUT  
Location : Netherlands (Apeldoorn)  
Price : € 17/月_**

## LG

**Test Information**  
IPv4: 194.107.78.212  
IPv6: 2001:67c:1330::3  
YABS: [https://pastebin.com/DL1pQijY](https://pastebin.com/DL1pQijY)  
Data center's looking glass: [https://lg.serverius.net/](https://lg.serverius.net/)

## 测评

### lscpu

```
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  2
  On-line CPU(s) list:   0,1
Vendor ID:               AuthenticAMD
  Model name:            AMD Ryzen 9 5900X 12-Core Processor
    CPU family:          25
    Model:               33
    Thread(s) per core:  1
    Core(s) per socket:  2
    Socket(s):           1
    Stepping:            2
    BogoMIPS:            7386.12
  arch_capabilities
Virtualization features:
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):
  L1d:                   128 KiB (2 instances)
  L1i:                   128 KiB (2 instances)
  L2:                    1 MiB (2 instances)
  L3:                    32 MiB (2 instances)
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 9 minutes
Processor  : AMD Ryzen 9 5900X 12-Core Processor
CPU cores  : 2 @ 3693.062 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 3.8 GiB
Swap       : 0.0 KiB
Disk       : 48.4 GiB
Distro     : Ubuntu 22.04.3 LTS
Kernel     : 5.15.0-86-generic
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Serverius Holding B.V.
ASN        : AS50673 Serverius
Host       : Serveriuscustomer
Location   : Amsterdam, North Holland (NH)
Country    : Netherlands

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ----
Read       | 363.35 MB/s  (90.8k) | 2.55 GB/s    (39.9k)
Write      | 364.31 MB/s  (91.0k) | 2.57 GB/s    (40.1k)
Total      | 727.67 MB/s (181.9k) | 5.12 GB/s    (80.1k)
           |                      |
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ----
Read       | 2.18 GB/s     (4.2k) | 2.29 GB/s     (2.2k)
Write      | 2.30 GB/s     (4.5k) | 2.44 GB/s     (2.3k)
Total      | 4.49 GB/s     (8.7k) | 4.73 GB/s     (4.6k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping
----- | ----- | ---- | ---- | ----
Clouvider       | London, UK (10G)          | 1.04 Gbits/sec  | 999 Mbits/sec   | 8.39 ms
Scaleway        | Paris, FR (10G)           | 1.04 Gbits/sec  | 998 Mbits/sec   | 15.7 ms
NovoServe       | North Holland, NL (40G)   | 1.04 Gbits/sec  | 1.00 Gbits/sec  | 3.98 ms
Uztelecom       | Tashkent, UZ (10G)        | 846 Mbits/sec   | 924 Mbits/sec   | 94.8 ms
Clouvider       | NYC, NY, US (10G)         | 868 Mbits/sec   | 952 Mbits/sec   | 78.2 ms
Clouvider       | Dallas, TX, US (10G)      | 581 Mbits/sec   | 754 Mbits/sec   | 248 ms
Clouvider       | Los Angeles, CA, US (10G) | 575 Mbits/sec   | 801 Mbits/sec   | 153 ms
```

### Bench

```
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 5900X 12-Core Processor
 CPU Cores          : 2 @ 3693.062 MHz
 CPU Cache          : 512 KB
 AES-NI             : Enabled
 VM-x/AMD-V         : Enabled
 Total Disk         : 48.4 GB (2.9 GB Used)
 Total Mem          : 3.8 GB (191.1 MB Used)
 System uptime      : 0 days, 0 hour 4 min
 Load average       : 0.29, 0.10, 0.02
 OS                 : Ubuntu 22.04.3 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.15.0-86-generic
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : Online / Offline
 Organization       : AS50673 Serverius
 Location           : Dronten / NL
 Region             : Flevoland
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.0 GB/s
 I/O Speed(2nd run) : 1.1 GB/s
 I/O Speed(3rd run) : 944 MB/s
 I/O Speed(average) : 1031.5 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency
 Speedtest.net    1046.31 Mbps      1000.04 Mbps        2.30 ms
 Los Angeles, US  569.50 Mbps       980.35 Mbps         139.91 ms
 Dallas, US       714.21 Mbps       1001.36 Mbps        112.52 ms
 Montreal, CA     569.07 Mbps       850.66 Mbps         83.85 ms
 Paris, FR        1049.72 Mbps      1014.58 Mbps        16.39 ms
 Amsterdam, NL    1018.59 Mbps      996.70 Mbps         4.19 ms
 Shanghai, CN     406.72 Mbps       754.58 Mbps         181.45 ms
 Nanjing, CN      62.98 Mbps        716.35 Mbps         292.96 ms
 Hongkong, CN     304.33 Mbps       532.88 Mbps         269.45 ms
 Singapore, SG    498.90 Mbps       829.40 Mbps         162.08 ms
 Tokyo, JP        51.43 Mbps        828.36 Mbps         227.55 ms
----------------------------------------------------------------------
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```
AMD Ryzen 9 5900X 12-Core Processor (x86_64)
2 cores @ 0 MHz  |  3.8 GiB RAM
Number of Processes: 2  |  Test Iterations: 2  |  Test Duration: Very Long
-
CPU Mark:                          6348
  Integer Math                     14725 Million Operations/s
  Floating Point Math              11882 Million Operations/s
  Prime Numbers                    47.9 Million Primes/s
  Sorting                          8511 Thousand Strings/s
  Encryption                       3133 MB/s
  Compression                      61012 KB/s
  CPU Single Threaded              3306 Million Operations/s
  Physics                          790 Frames/s
  Extended Instructions (SSE)      5540 Million Matrices/s

Memory Mark:                       1906
  Database Operations              2006 Thousand Operations/s
  Memory Read Cached               33384 MB/s
  Memory Read Uncached             15773 MB/s
  Memory Write                     10346 MB/s
  Available RAM                    3471 Megabytes
  Memory Latency                   66 Nanoseconds
  Memory Threaded                  21794 MB/s
```

### byte-unixbench 性能测试

```

2 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       60483881.9 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    10771.9 MWIPS (9.9 s, 7 samples)
Execl Throughput                               6039.6 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1734995.5 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          461571.8 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       5306559.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                             2593456.3 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                  94480.7 lps   (10.0 s, 7 samples)
Process Creation                              15508.1 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  18895.5 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   3780.9 lpm   (60.0 s, 2 samples)
System Call Overhead                        2207231.2 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   60483881.9   5182.9
Double-Precision Whetstone                       55.0      10771.9   1958.5
Execl Throughput                                 43.0       6039.6   1404.6
File Copy 1024 bufsize 2000 maxblocks          3960.0    1734995.5   4381.3
File Copy 256 bufsize 500 maxblocks            1655.0     461571.8   2789.0
File Copy 4096 bufsize 8000 maxblocks          5800.0    5306559.4   9149.2
Pipe Throughput                               12440.0    2593456.3   2084.8
Pipe-based Context Switching                   4000.0      94480.7    236.2
Process Creation                                126.0      15508.1   1230.8
Shell Scripts (1 concurrent)                     42.4      18895.5   4456.5
Shell Scripts (8 concurrent)                      6.0       3780.9   6301.6
System Call Overhead                          15000.0    2207231.2   1471.5
                                                                   ========
System Benchmarks Index Score                                        2417.9

------------------------------------------------------------------------

2 CPUs in system; running 2 parallel copies of tests

Dhrystone 2 using register variables      119114723.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    21432.7 MWIPS (9.9 s, 7 samples)
Execl Throughput                              10240.0 lps   (29.8 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       3490487.3 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          936939.4 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       7993119.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                             5116067.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 631825.6 lps   (10.0 s, 7 samples)
Process Creation                              29950.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  28001.1 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4038.2 lpm   (60.0 s, 2 samples)
System Call Overhead                        4485247.0 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  119114723.4  10206.9
Double-Precision Whetstone                       55.0      21432.7   3896.9
Execl Throughput                                 43.0      10240.0   2381.4
File Copy 1024 bufsize 2000 maxblocks          3960.0    3490487.3   8814.4
File Copy 256 bufsize 500 maxblocks            1655.0     936939.4   5661.3
File Copy 4096 bufsize 8000 maxblocks          5800.0    7993119.4  13781.2
Pipe Throughput                               12440.0    5116067.8   4112.6
Pipe-based Context Switching                   4000.0     631825.6   1579.6
Process Creation                                126.0      29950.7   2377.0
Shell Scripts (1 concurrent)                     42.4      28001.1   6604.0
Shell Scripts (8 concurrent)                      6.0       4038.2   6730.3
System Call Overhead                          15000.0    4485247.0   2990.2
                                                                   ========
System Benchmarks Index Score                                        4755.2
```

### Network-Speed.xyz

```
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 5900X 12-Core Processor
 CPU Cores          : 2 @ 3693.062 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 48.4 GB (2.9 GB Used)
 Total RAM          : 3.8 GB (175.6 MB Used)
 System uptime      : 0 days, 0 hour 16 min
 Load average       : 0.00, 0.05, 0.05
 OS                 : Ubuntu 22.04.3 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.15.0-86-generic
 Virtualization     : KVM
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 IPv6 Access        : ❌ Offline
 IPv4 Access        : ✔ Online
 ISP                : Serverius Holding B.V.
 ASN                : AS50673 Serverius
 Host               : Serveriuscustomer
 Location           : Amsterdam, North Holland-NH, Netherlands
 Location (IPv4)    : Dronten, Flevoland, NL
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server

 ISP: Serverius Holding B.V.

 Nearest          2.31 ms     0.0%    998.48 Mbps    1044.86 Mbps   Serverius Connectivity - Amsterdam

 Kochi, IN        149.54 ms   0.0%    925.50 Mbps    521.36 Mbps    Asianet Broadband - Cochin
 Bangalore, IN    151.83 ms   0.0%    860.35 Mbps    531.21 Mbps    Bharti Airtel Ltd - Bangalore
 Chennai, IN      180.37 ms   N/A     925.04 Mbps    343.03 Mbps    Jio - Chennai
 Mumbai, IN       120.52 ms   0.0%    1010.14 Mbps   642.74 Mbps    i3D.net - Mumbai
 Delhi, IN        137.82 ms   0.0%    982.54 Mbps    571.74 Mbps    Tata Teleservices Ltd - New Delhi

 Seattle, US      151.92 ms   0.0%    962.73 Mbps    543.43 Mbps    Ziply Fiber - Seattle, WA
 Los Angeles, US  141.38 ms   0.0%    1003.41 Mbps   526.89 Mbps    ReliableSite Hosting - Los Angeles, CA
 Dallas, US       119.45 ms   0.0%    779.59 Mbps    608.73 Mbps    Hivelocity - Dallas, TX
 Miami, US        121.04 ms   0.0%    776.63 Mbps    668.99 Mbps    AT&T - Miami, FL
 New York, US     80.41 ms    0.0%    1008.02 Mbps   758.13 Mbps    GSL Networks - New York, NY
 Toronto, CA      99.92 ms    0.0%    1001.45 Mbps   841.14 Mbps    Rogers - Toronto, ON

 London, UK       9.08 ms     0.0%    998.57 Mbps    1047.48 Mbps   VeloxServ Communications - London
 Amsterdam, NL    4.05 ms     0.0%    1001.69 Mbps   1044.90 Mbps   31173 Services AB - Amsterdam
 Paris, FR        16.65 ms    N/A     1006.45 Mbps   1044.98 Mbps   Axione - Paris
 Frankfurt, DE    8.98 ms     0.0%    1001.47 Mbps   1042.14 Mbps   23M GmbH - Frankfurt am Main
 Warsaw, PL       23.94 ms    0.0%    1004.29 Mbps   1040.09 Mbps   UPC Polska - Warszawa
 Bucharest, RO    37.92 ms    0.0%    1005.49 Mbps   988.76 Mbps    Vodafone Romania Fixed – Bucharest - Bucharest

 Jeddah, SA       73.72 ms    0.0%    1016.17 Mbps   789.85 Mbps    Saudi Telecom Company
 Dubai, AE        134.49 ms   0.0%    1009.04 Mbps   578.84 Mbps    du - Dubai
 Fujairah, AE     114.72 ms   0.0%    1013.00 Mbps   651.62 Mbps    ETISALAT-UAE - Fujairah

 Tokyo, JP        257.61 ms   N/A     788.22 Mbps    141.89 Mbps    fdcservers.net - Tokyo
 Shanghai, CU-CN  181.03 ms   0.0%    872.94 Mbps    410.73 Mbps    China Unicom 5G - Shanghai
 Nanjing, CT-CN   283.41 ms   5.4%    670.85 Mbps    63.51 Mbps     China Telecom JiangSu 5G - Nanjing
 Hong Kong, CN    164.12 ms   N/A     1007.91 Mbps   438.78 Mbps    STC - Hong Kong
 Singapore, SG    154.35 ms   0.0%    1001.28 Mbps   527.76 Mbps    i3D.net - Singapore
 Jakarta, ID      184.83 ms   0.0%    931.97 Mbps    194.53 Mbps    PT. Telekomunikasi Indonesia - Jakarta
---------------------------------------------------------------------------
 Avg DL Speed       : 954.77 Mbps
 Avg UL Speed       : 665.34 Mbps

 Total DL Data      : 35.28 GB
 Total UL Data      : 20.68 GB
 Total Data         : 55.96 GB
---------------------------------------------------------------------------
```
