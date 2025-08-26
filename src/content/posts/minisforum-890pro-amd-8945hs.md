---
title: "铭凡 890Pro AMD 8945HS 测评"
published: 2025-08-01
---

**最近整了个小主机玩玩，转了一圈发现铭凡这款比较水桶。本来准备买那个AMD AI9 HX 370 的版本的，结果京东没有裸主机的版本，而且架构是大小核设计的，最后还是全大核的8945HS版本。结果刚买完今天就推出了9955HX的版本，我恨啊。**

## 配置

- **CPU ： AMD Ryzen 9 PRO 8945HS w/ Radeon 780M Graphics**

- **MEM ：2 x 16 GB DDR****5****\-5600MT/s Micron Techn**

- **DISK ：2 \* 1 TB **SK Hynix** P41 1TB**

- **Network : Realtek Semiconductor Co., Ltd. RTL8125 2.5GbE Controller**

- **Price: 5439.01/CNY**

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image.jpg" alt="image" loading="lazy">
</picture>

## 测评

### 机器检测

```shell
════════════════════════════════════════════════════════════════════════════════
                       System Hardware Information Report                       
════════════════════════════════════════════════════════════════════════════════

┌─ System Information
├────────────────────
│ Hostname            : pve
│ Operating System    : Debian GNU/Linux 12 (bookworm)
│ Kernel Version      : 6.8.12-9-pve
│ System Uptime       : up 6 minutes
└──────────────────────────────────────────────────
┌─ CPU Information
├─────────────────
│ Model               : AMD Ryzen 9 PRO 8945HS w/ Radeon 780M Graphics
│ Cores               : 8
│ Threads             : 16
│ Frequency           : 5103.685 MHz
│ Cache               : 1024 KB
│ Usage               : 0.0%
└──────────────────────────────────────────────────
┌─ Memory (RAM) Information
├──────────────────────────
│ Total               : 25.22 GB
│ Used                : 1.8Gi
│ Available           : 23.40 GB
│
│ Memory Modules:
├────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Size     │ Type   │ Frequency    │ Manufacturer │ Serial Number   │ Model                │
├────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 16 GB    │ DDR5   │ 5600 MT/s    │ Micron Techn │ EB5D734B        │ CT16G56C46S5.C8D     │
│ 16 GB    │ DDR5   │ 5600 MT/s    │ Micron Techn │ EB5D1D14        │ CT16G56C46S5.C8D     │
└────────────────────────────────────────────────────────────────────────────────────────────────────┘
└──────────────────────────────────────────────────
┌─ Disk Drive Information
├────────────────────────
│ /dev/mapper/pve-root  102G  3.8G   93G   4% /
│ /dev/nvme0n1p2       1022M   12M 1011M   2% /boot/efi
│ /dev/fuse             128M   16K  128M   1% /etc/pve
│
│ Physical Disks Details:
│
│ ═══ /dev/nvme0n1 ═══
│   Basic Info: 931.5G SHPP41-1000GM 
│   SMART Status: PASSED
│   Power On Hours: 18 hours
│   Data Transfer Statistics:
│     Total Reads: 4.99 GB
│     Total Writes: 10.02 GB
│   Temperature: 42°C
│   Percentage Used: 0%
│   Available Spare: 100%
│   Critical Warning: 0x00
│   Health Status: 100%
│
│ ═══ /dev/nvme1n1 ═══
│   Basic Info: 931.5G SHPP41-1000GM 
│   SMART Status: PASSED
│   Power On Hours: 18 hours
│   Data Transfer Statistics:
│     Total Reads: 23.55 MB
│     Total Writes: 0 GB
│   Temperature: 42°C
│   Percentage Used: 0%
│   Available Spare: 100%
│   Critical Warning: 0x00
│   Health Status: 100%
└──────────────────────────────────────────────────
┌─ RAID Controller Information
├─────────────────────────────
│ Status              : Not detected
└──────────────────────────────────────────────────
┌─ Network Interface Information
├───────────────────────────────
│
│ ═══ enp2s0 ═══
│   Model: Realtek Semiconductor Co., Ltd. RTL8125 2.5GbE Controller (rev 05)
│   Status: UP
│   MAC Address: 58:47:ca:XX:XX:XX
│   Speed: 1000 Mbps
│   Duplex: full
│   Link Detected: Yes
│   RX: 0.40 GB
│   TX: 0 GB
│
│ ═══ enp3s0 ═══
│   Model: Realtek Semiconductor Co., Ltd. RTL8125 2.5GbE Controller (rev 05)
│   Status: DOWN
│   MAC Address: 58:47:ca:XX:XX:XX
│   Link Detected: No
│   RX: 0 GB
│   TX: 0 GB
│
│ ═══ wlp4s0 ═══
│   Model: MEDIATEK Corp. MT7922 802.11ax PCI Express Wireless Network Adapter
│   Status: DOWN
│   MAC Address: 28:7b:11:XX:XX:XX
│   Link Detected: No
│   RX: 0 GB
│   TX: 0 GB
└──────────────────────────────────────────────────
┌─ Graphics Card Information
├───────────────────────────
│
│ Graphics Cards (PCI):
│   c6:00.0 VGA compatible controller: Advanced Micro Devices, Inc. [AMD/ATI] Phoenix3 (rev d4)
│
│ Display Hardware Summary:
│   ================================================================
│   /0/100/8.1/0          /dev/fb0        display        Advanced Micro Devices, Inc. [AMD/ATI]
└──────────────────────────────────────────────────
┌─ Motherboard Information
├─────────────────────────
│ Vendor              : Shenzhen Meigao Electronic Equipment Co.,Ltd
│ Model               : HPBSD
│ Version             : 1.0
│ BIOS Vendor         : American Megatrends International, LLC.
│ BIOS Version        : 1.02
└──────────────────────────────────────────────────
```

### Yabs

```shell

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 10 minutes
Processor  : AMD Ryzen 9 PRO 8945HS w/ Radeon 780M Graphics
CPU cores  : 16 @ 400.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 25.2 GiB
Swap       : 0.0 KiB
Disk       : 102.8 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.8.12-9-pve
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ❌ Offline

fio Disk Speed Tests (Mixed R/W 50/50):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 710.68 MB/s (177.6k) | 2.19 GB/s    (34.3k)
Write      | 712.56 MB/s (178.1k) | 2.21 GB/s    (34.5k)
Total      | 1.42 GB/s   (355.8k) | 4.41 GB/s    (68.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.22 GB/s     (4.3k) | 2.48 GB/s     (2.4k)
Write      | 2.34 GB/s     (4.5k) | 2.64 GB/s     (2.5k)
Total      | 4.57 GB/s     (8.9k) | 5.12 GB/s     (5.0k)
```

### GeekBench5

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-1.jpg" alt="image" loading="lazy">
</picture>

### GeekBench6

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/08/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/08/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/08/image-2.jpg" alt="image" loading="lazy">
</picture>

### PassMark PerformanceTest Linux

```shell
AMD Ryzen 9 PRO 8945HS w/ Radeon 780M Graphics (x86_64)
8 cores @ 5263 MHz  |  25.2 GiB RAM
Number of Processes: 16  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          32714
  Integer Math                     105288 Million Operations/s
  Floating Point Math              58293 Million Operations/s
  Prime Numbers                    96.8 Million Primes/s
  Sorting                          52454 Thousand Strings/s
  Encryption                       25793 MB/s
  Compression                      402151 KB/s
  CPU Single Threaded              4067 Million Operations/s
  Physics                          1959 Frames/s
  Extended Instructions (SSE)      26684 Million Matrices/s

Memory Mark:                       3215
  Database Operations              9327 Thousand Operations/s
  Memory Read Cached               39087 MB/s
  Memory Read Uncached             37868 MB/s
  Memory Write                     27619 MB/s
  Available RAM                    18003 Megabytes
  Memory Latency                   61 Nanoseconds
  Memory Threaded                  56768 MB/s
--------------------------------------------------------------------------------
```

### byte-unixbench 性能测试

```shell
------------------------------------------------------------------------
Benchmark Run: Fri Aug 01 2025 15:51:29 - 16:19:51
16 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       79452358.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    13053.3 MWIPS (10.0 s, 7 samples)
Execl Throughput                               4753.6 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1143421.1 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          291906.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3270715.2 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1796930.0 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 181261.3 lps   (10.0 s, 7 samples)
Process Creation                              10266.3 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  15686.9 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  13344.1 lpm   (60.0 s, 2 samples)
System Call Overhead                        1729726.8 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   79452358.6   6808.3
Double-Precision Whetstone                       55.0      13053.3   2373.3
Execl Throughput                                 43.0       4753.6   1105.5
File Copy 1024 bufsize 2000 maxblocks          3960.0    1143421.1   2887.4
File Copy 256 bufsize 500 maxblocks            1655.0     291906.9   1763.8
File Copy 4096 bufsize 8000 maxblocks          5800.0    3270715.2   5639.2
Pipe Throughput                               12440.0    1796930.0   1444.5
Pipe-based Context Switching                   4000.0     181261.3    453.2
Process Creation                                126.0      10266.3    814.8
Shell Scripts (1 concurrent)                     42.4      15686.9   3699.7
Shell Scripts (8 concurrent)                      6.0      13344.1  22240.1
System Call Overhead                          15000.0    1729726.8   1153.2
                                                                   ========
System Benchmarks Index Score                                        2332.7

------------------------------------------------------------------------
Benchmark Run: Fri Aug 01 2025 16:19:51 - 16:47:50
16 CPUs in system; running 16 parallel copies of tests

Dhrystone 2 using register variables      863607160.4 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                   165555.6 MWIPS (10.0 s, 7 samples)
Execl Throughput                              50815.4 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks      12107761.3 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks         3433507.1 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks      16888012.4 KBps  (30.0 s, 2 samples)
Pipe Throughput                            21553072.8 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                2212119.4 lps   (10.0 s, 7 samples)
Process Creation                             106325.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                 141846.2 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                  18441.2 lpm   (60.0 s, 2 samples)
System Call Overhead                       21024722.8 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  863607160.4  74002.3
Double-Precision Whetstone                       55.0     165555.6  30101.0
Execl Throughput                                 43.0      50815.4  11817.5
File Copy 1024 bufsize 2000 maxblocks          3960.0   12107761.3  30575.2
File Copy 256 bufsize 500 maxblocks            1655.0    3433507.1  20746.3
File Copy 4096 bufsize 8000 maxblocks          5800.0   16888012.4  29117.3
Pipe Throughput                               12440.0   21553072.8  17325.6
Pipe-based Context Switching                   4000.0    2212119.4   5530.3
Process Creation                                126.0     106325.5   8438.5
Shell Scripts (1 concurrent)                     42.4     141846.2  33454.3
Shell Scripts (8 concurrent)                      6.0      18441.2  30735.3
System Call Overhead                          15000.0   21024722.8  14016.5
                                                                   ========
System Benchmarks Index Score                                       20548.0
```