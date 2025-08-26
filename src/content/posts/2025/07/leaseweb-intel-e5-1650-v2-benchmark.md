---
title: "Leaseweb Intel E5-1650 v2 测试"
published: 2025-07-08
categories: 
  - "vps"
  - "eu-server"
---

机器来自阿三的二次转卖，目前已绝版。价格足够便宜和1G不限流量加持，看上去机器的性价比之前40欧的E-2388G高出很多。这应该是市面上最便宜的48TB HDD 35欧了。

## 配置

- CPU : Intel(R) Xeon(R) CPU E5-1650 v2 @ 3.50GHz

- MEM : 16 GB DDR4 RAM

- DISK : 12\*4 SATA HDD

- IP : 1 IPv4 address \* 1 IPv6 address

- Port : 1 Gbit/s Unlimited

## 测评

### 机器硬件

```
════════════════════════════════════════════════════════════════════════════════
                       System Hardware Information Report                       
════════════════════════════════════════════════════════════════════════════════

┌─ System Information
├────────────────────
│ Hostname            : s103079
│ Operating System    : Ubuntu 22.04.5 LTS
│ Kernel Version      : 5.15.0-143-generic
│ System Uptime       : up 9 hours, 14 minutes
└──────────────────────────────────────────────────
┌─ CPU Information
├─────────────────
│ Model               : Intel(R) Xeon(R) CPU E5-1650 v2 @ 3.50GHz
│ Cores               : 6
│ Threads             : 12
│ Frequency           : 2500.000 MHz
│ Cache               : 12288 KB
│ Usage               : 0.0%
└──────────────────────────────────────────────────
┌─ Memory (RAM) Information
├──────────────────────────
│ Total               : 15.58 GB
│ Used                : 314Mi
│ Available           : 14.93 GB
│
│ Memory Modules:
├────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Size     │ Type   │ Frequency    │ Manufacturer │ Serial Number   │ Model                │
├────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ 4 GB     │ DDR3   │ 1333 MT/s    │ Samsung      │ 8364E4B6        │ M391B5273CH0-CH9     │
│ 4 GB     │ DDR3   │ 1333 MT/s    │ Samsung      │ 855E40C2        │ M391B5273CH0-CH9     │
│ 4 GB     │ DDR3   │ 1333 MT/s    │ Samsung      │ 480090B7        │ M391B5273CH0-CH9     │
│ 4 GB     │ DDR3   │ 1333 MT/s    │ Samsung      │ 33D5C52C        │ M391B5273DH0-CH9     │
└────────────────────────────────────────────────────────────────────────────────────────────────────┘
└──────────────────────────────────────────────────
┌─ Disk Drive Information
├────────────────────────
│ /dev/md5         44T  4.0G   42T   1% /
│ /dev/md4        3.9G   80K  3.7G   1% /tmp
│ /dev/md2        990M  262M  662M  29% /boot
│
│ Physical Disks Details:
│
│ ═══ /dev/sda ═══
│   Basic Info: 10.9T TOSHIBA MG07ACA1 ATA     
│   SMART Status: PASSED
│   Power On Hours: 38028 hours
│   Data Transfer Statistics:
│     Total Reads: 4.29 GB (session only)
│     Total Writes: 2.85 GB (session only)
│   Temperature: 32°C
│
│ ═══ /dev/sdb ═══
│   Basic Info: 10.9T TOSHIBA MG07ACA1 ATA     
│   SMART Status: PASSED
│   Power On Hours: 38271 hours
│   Data Transfer Statistics:
│     Total Reads: 211.63 MB (session only)
│     Total Writes: 6.84 GB (session only)
│   Temperature: 29°C
│
│ ═══ /dev/sdc ═══
│   Basic Info: 10.9T TOSHIBA MG07ACA1 ATA     
│   SMART Status: PASSED
│   Power On Hours: 38024 hours
│   Data Transfer Statistics:
│     Total Reads: 203.56 MB (session only)
│     Total Writes: 6.82 GB (session only)
│   Temperature: 30°C
│
│ ═══ /dev/sdd ═══
│   Basic Info: 10.9T TOSHIBA MG07ACA1 ATA     
│   SMART Status: PASSED
│   Power On Hours: 38271 hours
│   Data Transfer Statistics:
│     Total Reads: 204.39 MB (session only)
│     Total Writes: 6.82 GB (session only)
│   Temperature: 33°C
└──────────────────────────────────────────────────
┌─ RAID Controller Information
├─────────────────────────────
│ Software RAID:
│   md3 : active raid1 sdb3[1] sdd3[3] sdc3[2] sda3[0]
│   md4 : active raid0 sdc4[2] sdb4[1] sdd4[3] sda4[0]
│   md5 : active raid0 sdc5[2] sdb5[1] sdd5[3] sda5[0]
│   md2 : active raid1 sdb2[1] sdd2[3] sdc2[2] sda2[0]
└──────────────────────────────────────────────────
┌─ Network Interface Information
├───────────────────────────────
│
│ ═══ eno1 ═══
│   Model: Intel Corporation I350 Gigabit Network Connection (rev 01)
│   Status: UP
│   IPv4: 212.7.XX.XX/26
│   IPv6: fe80::XX:XX::/64
│   MAC Address: 0c:c4:7a:XX:XX:XX
│   Speed: 1000 Mbps
│   Duplex: full
│   Link Detected: Yes
│   RX: 0.21 GB
│   TX: 0.01 GB
│
│ ═══ eno2 ═══
│   Model: Intel Corporation I350 Gigabit Network Connection (rev 01)
│   Status: UP
│   IPv6: fe80::XX:XX::/64
│   MAC Address: 0c:c4:7a:XX:XX:XX
│   Speed: 1000 Mbps
│   Duplex: full
│   Link Detected: Yes
│   RX: 0 GB
│   TX: 0 GB
└──────────────────────────────────────────────────
┌─ Graphics Card Information
├───────────────────────────
│
│ Graphics Cards (PCI):
│   07:04.0 VGA compatible controller: Matrox Electronics Systems Ltd. MGA G200eW WPCM450 (rev 0a)
│
│ Display Hardware Summary:
│   ======================================================
│   /0/100/1e/4      /dev/fb0   display        MGA G200eW WPCM450
└──────────────────────────────────────────────────
┌─ Motherboard Information
├─────────────────────────
│ Vendor              : Supermicro
│ Model               : X9SRE/X9SRE-3F/X9SRi/X9SRi-3F
│ Version             : 0123456789
│ BIOS Vendor         : American Megatrends Inc.
│ BIOS Version        : 3.2
└──────────────────────────────────────────────────
```

### 通电检测

```
  CPU 型号              Intel(R) Xeon(R) CPU E5-1650 v2 @ 3.50GHz
  CPU 核心              合计 6 核心，12 线程
  CPU 状态              当前主频 1200.000 MHz
  内存大小              15952 MB (303 MB 已用)
  交换分区              4090 MB (0 MB 已用)

  第 1 块硬盘           通电 38271 小时，型号 TOSHIBA MG07ACA12TE
  第 2 块硬盘           通电 38024 小时，型号 TOSHIBA MG07ACA12TE
  第 3 块硬盘           通电 38271 小时，型号 TOSHIBA MG07ACA12TE
  第 4 块硬盘           通电 38028 小时，型号 TOSHIBA MG07ACA12TE

  硬盘大小              45060.9 GB

  服务器时间            2025-07-08 00:45:38
  运行时间              0 days 9 hour 11 min
  系统负载              0.19, 0.05, 0.01
  虚拟化技术            No Virtualization Detected

  IPv4 地址             212.7.xxx.xxx
  运营商                AS60781 LeaseWeb Netherlands B.V.
  地理位置              NL, North Holland, Amsterdam

  操作系统              Ubuntu 22.04.5 jammy (x86_64)
  系统内核              5.15.0-143-generic
  TCP 加速              cubic

  当前脚本版本          1.4.1.1

  顺序写入 (1st)        497 MB/s
  顺序写入 (2nd)        530 MB/s
  顺序写入 (3rd)        511 MB/s
  顺序写入 (4th)        521 MB/s
  顺序写入 (5th)        513 MB/s
  顺序写入 (avg)        515.0 MB/s
```

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 9 hours, 18 minutes
Processor  : Intel(R) Xeon(R) CPU E5-1650 v2 @ 3.50GHz
CPU cores  : 12 @ 1200.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 15.6 GiB
Swap       : 4.0 GiB
Disk       : 43.5 TiB
Distro     : Ubuntu 22.04.5 LTS
Kernel     : 5.15.0-143-generic
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : LeaseWeb Netherlands B.V.
ASN        : AS60781 LeaseWeb Netherlands B.V.
Host       : LeaseWeb Netherlands B.V
Location   : Amsterdam, North Holland (NH)
Country    : The Netherlands

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/md5):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.78 MB/s      (697) | 36.84 MB/s     (575)
Write      | 2.80 MB/s      (701) | 37.09 MB/s     (579)
Total      | 5.59 MB/s     (1.3k) | 73.93 MB/s    (1.1k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 153.36 MB/s    (299) | 172.08 MB/s    (168)
Write      | 161.51 MB/s    (315) | 183.54 MB/s    (179)
Total      | 314.88 MB/s    (614) | 355.62 MB/s    (347)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 938 Mbits/sec   | 937 Mbits/sec   | 7.63 ms        
Eranium         | Amsterdam, NL (100G)      | 941 Mbits/sec   | 942 Mbits/sec   | 1.85 ms        
Uztelecom       | Tashkent, UZ (10G)        | 888 Mbits/sec   | 415 Mbits/sec   | 90.3 ms        
Leaseweb        | Singapore, SG (10G)       | 806 Mbits/sec   | 559 Mbits/sec   | 156 ms         
Clouvider       | Los Angeles, CA, US (10G) | 825 Mbits/sec   | 182 Mbits/sec   | 131 ms         
Leaseweb        | NYC, NY, US (10G)         | 885 Mbits/sec   | 625 Mbits/sec   | 76.2 ms        
Edgoo           | Sao Paulo, BR (1G)        | 786 Mbits/sec   | 185 Mbits/sec   | 231 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 925 Mbits/sec   | 927 Mbits/sec   | 7.56 ms        
Eranium         | Amsterdam, NL (100G)      | 928 Mbits/sec   | 928 Mbits/sec   | 1.40 ms        
Uztelecom       | Tashkent, UZ (10G)        | 876 Mbits/sec   | 398 Mbits/sec   | 90.3 ms        
Leaseweb        | Singapore, SG (10G)       | 795 Mbits/sec   | 573 Mbits/sec   | 156 ms         
Clouvider       | Los Angeles, CA, US (10G) | 825 Mbits/sec   | 135 Mbits/sec   | 131 ms         
Leaseweb        | NYC, NY, US (10G)         | 871 Mbits/sec   | 613 Mbits/sec   | 76.1 ms        
Edgoo           | Sao Paulo, BR (1G)        | 639 Mbits/sec   | 80.1 Mbits/sec  | 230 ms 
Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 741                           
Multi Core      | 3555                          
Full Test       | https://browser.geekbench.com/v6/cpu/12765028
```

### NWS

```
---------------------------------------------------------------------------
 Basic System Info
---------------------------------------------------------------------------
 CPU Model          : Intel(R) Xeon(R) CPU E5-1650 v2 @ 3.50GHz
 CPU Cores          : 12 @ 3700.000 MHz
 CPU Cache          : 12288 KB
 AES-NI             : ✔ Enabled
 VM-x/AMD-V         : ✔ Enabled
 Total Disk         : 43.5 TB (4.2 GB Used)
 Total RAM          : 15.6 GB (301.0 MB Used)
 Total Swap         : 4.0 GB (0 Used)
 System uptime      : 0 days, 9 hour 46 min
 Load average       : 0.00, 0.21, 0.51
 OS                 : Ubuntu 22.04.5 LTS
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.15.0-143-generic
 Virtualization     : NONE
 TCP Control        : cubic
---------------------------------------------------------------------------
 Basic Network Info
---------------------------------------------------------------------------
 Primary Network    : IPv6
 IPv6 Access        : ✔ Online
 IPv4 Access        : ✔ Online
 ISP                : LeaseWeb Netherlands B.V.
 ASN                : AS60781 LeaseWeb Netherlands B.V.
 Host               : LeaseWeb Netherlands B.V
 Location           : Amsterdam, North Holland-NH, The Netherlands
---------------------------------------------------------------------------
 Speedtest.net (Region: GLOBAL)
---------------------------------------------------------------------------
 Location         Latency     Loss    DL Speed       UP Speed       Server      

 ISP: LeaseWeb Netherlands B.V. 

 Nearest          0.94 ms     0.0%    941.04 Mbps    941.24 Mbps    31173 Services AB - Amsterdam 

 Kochi, IN        183.69 ms   0.0%    504.83 Mbps    465.71 Mbps    Asianet Broadband - Cochin 
 Bangalore, IN    170.98 ms   0.0%    589.61 Mbps    513.03 Mbps    Bharti Airtel Ltd - Bangalore 
 Chennai, IN      157.54 ms   0.0%    553.90 Mbps    572.23 Mbps    Jio - Chennai 
 Mumbai, IN       127.62 ms   0.0%    955.20 Mbps    682.26 Mbps    Melbicom - Mumbai 
 Delhi, IN        259.97 ms   0.0%    497.67 Mbps    339.59 Mbps    Tata Play Fiber - New Delhi 

 Seattle, US      145.81 ms   N/A     613.37 Mbps    598.65 Mbps    Comcast - Seattle, WA 
 Los Angeles, US  141.63 ms   0.0%    696.14 Mbps    628.07 Mbps    ReliableSite Hosting - Los Angeles, CA 
 Dallas, US       106.45 ms   0.0%    688.74 Mbps    800.75 Mbps    Hivelocity - Dallas, TX 
 Miami, US        123.24 ms   0.0%    437.37 Mbps    705.64 Mbps    Telxius - Miami, FL 
 New York, US     73.07 ms    0.0%    956.41 Mbps    919.24 Mbps    GSL Networks - New York, NY 
 Toronto, CA      88.08 ms    0.0%    911.07 Mbps    875.58 Mbps    Rogers - Toronto, ON 
 Mexico City, MX  187.28 ms   N/A     662.12 Mbps    277.45 Mbps    INFINITUM - Ciudad de México 

 London, UK       5.88 ms     0.0%    948.95 Mbps    926.49 Mbps    VeloxServ Communications - London 
 Amsterdam, NL    1.23 ms     0.0%    946.16 Mbps    941.30 Mbps    31173 Services AB - Amsterdam 
 Paris, FR        10.73 ms    N/A     944.49 Mbps    941.34 Mbps    Axione - Paris 
 Frankfurt, DE    7.30 ms     0.0%    921.04 Mbps    927.34 Mbps    Clouvider Ltd - Frankfurt am Main 
 Warsaw, PL       21.28 ms    0.0%    933.37 Mbps    928.40 Mbps    Play - Warszawa 
 Bucharest, RO    34.33 ms    0.0%    949.41 Mbps    941.45 Mbps    Vodafone Romania Mobile - Bucharest - Bucharest 
 Moscow, RU       42.97 ms    0.0%    121.31 Mbps    919.17 Mbps    t2 Russia - Moscow 

 Jeddah, SA       74.51 ms    0.0%    955.06 Mbps    918.88 Mbps    Saudi Telecom Company 
 Dubai, AE        118.78 ms   N/A     968.31 Mbps    182.62 Mbps    e& UAE - Dubai 
 Istanbul, TR     53.37 ms    0.0%    932.96 Mbps    936.22 Mbps    Turkcell - Istanbul 
 Tehran, IR       FAILED                                                        
 Cairo, EG        FAILED                                                        

 Tokyo, JP        209.62 ms   1.7%    924.67 Mbps    441.68 Mbps    GSL Networks - Tokyo 
 Shanghai, CU-CN  FAILED                                                        
 Suzhou, CT-CN    FAILED                                                        
 Hong Kong, CN    242.51 ms   N/A     637.16 Mbps    371.64 Mbps    Misaka Network, Inc. - Hong Kong 
 Singapore, SG    FAILED                                                        
 Jakarta, ID      FAILED - IP has been rate limited. Try again after 1 hour.                                                  
---------------------------------------------------------------------------
 Avg DL Speed       : 767.62 Mbps
 Avg UL Speed       : 707.84 Mbps

 Total DL Data      : 24.63 GB
 Total UL Data      : 20.48 GB
 Total Data         : 45.11 GB
---------------------------------------------------------------------------
```
