---
tags: [hk-server]
title: "Aeza 香港 AMD 7950X3D 测评"
published: 2024-02-22
---

首月-25%优惠无需优惠码。俄罗斯商家，不支持支付宝等，建议加密货币购买。香港终于要卷配置了吗？

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-18.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-18.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-18.jpg" alt="" loading="lazy">
</picture>

> ## 套餐
> 
> **_Provider : Aeza  
> Type/Plan : HKs-2  
> Processor : AMD Ryzen 9 7950X3D  
> Num of Core : 2 Cores  
> Memory : 4 GB  
> Storage : 60 GB NVMe  
> Bandwidth : Unlimited @ 10 Gbps IN | 10 Gbps OUT  
> Location : HK  
> Price : 12.8€/M_**

[买！](https://aeza.net/?ref=379976)

## 测评

### lscpu

```shell
root@seemly-sheep:~# lscpu
Architecture:                    x86_64
CPU op-mode(s):                  32-bit, 64-bit
Byte Order:                      Little Endian
Address sizes:                   48 bits physical, 48 bits virtual
CPU(s):                          2
On-line CPU(s) list:             0,1
Thread(s) per core:              1
Core(s) per socket:              2
Socket(s):                       1
NUMA node(s):                    1
Vendor ID:                       AuthenticAMD
CPU family:                      25
Model:                           97
Model name:                      AMD Ryzen 9 7950X3D 16-Core Processor
Stepping:                        2
CPU MHz:                         4192.080
BogoMIPS:                        8384.16
Hypervisor vendor:               KVM
Virtualization type:             full
L1d cache:                       128 KiB
L1i cache:                       128 KiB
L2 cache:                        1 MiB
L3 cache:                        16 MiB
NUMA node0 CPU(s):               0,1
Vulnerability Itlb multihit:     Not affected
Vulnerability L1tf:              Not affected
Vulnerability Mds:               Not affected
Vulnerability Meltdown:          Not affected
Vulnerability Mmio stale data:   Not affected
Vulnerability Retbleed:          Not affected
Vulnerability Spec store bypass: Mitigation; Speculative Store Bypass disabled via prctl and seccomp
Vulnerability Spectre v1:        Mitigation; usercopy/swapgs barriers and __user pointer sanitization
Vulnerability Spectre v2:        Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB 
                                 filling, PBRSB-eIBRS Not affected
Vulnerability Srbds:             Not affected
Vulnerability Tsx async abort:   Not affected
Flags:                           fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36                                  clflush mmx fxsr sse sse2 ht syscall nx mmxext fxsr_opt pdpe1gb rdtscp                                  lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq ssse3 
                                 fma cx16 sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave                                  avx f16c rdrand hypervisor lahf_lm cmp_legacy cr8_legacy abm sse4a mis                                 alignsse 3dnowprefetch osvw perfctr_core ssbd ibrs ibpb stibp vmmcall f                                 sgsbase tsc_adjust bmi1 avx2 smep bmi2 erms invpcid rdseed adx smap clf                                 lushopt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves clzero xsaveerptr wb                                 noinvd arat umip pku ospke rdpid fsrm flush_l1d arch_capabilities
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 2 minutes
Processor  : AMD Ryzen 9 7950X3D 16-Core Processor
CPU cores  : 2 @ 4192.080 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 3.8 GiB
Swap       : 1024.0 MiB
Disk       : 59.0 GiB
Distro     : Debian GNU/Linux 11 (bullseye)
Kernel     : 5.10.0-21-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv4 Network Information:
---------------------------------
ISP        : TestForEva
ASN        : Unknown
Host       : TestForEva
Location   : Tallinn, Harjumaa (37)
Country    : Estonia

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 40.02 MB/s   (10.0k) | 657.13 MB/s  (10.2k)
Write      | 40.12 MB/s   (10.0k) | 660.58 MB/s  (10.3k)
Total      | 80.15 MB/s   (20.0k) | 1.31 GB/s    (20.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.03 GB/s     (3.9k) | 2.22 GB/s     (2.1k)
Write      | 2.14 GB/s     (4.1k) | 2.37 GB/s     (2.3k)
Total      | 4.18 GB/s     (8.1k) | 4.59 GB/s     (4.4k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2513                          
Multi Core      | 4374                          
Full Test       | https://browser.geekbench.com/v6/cpu/5015757

YABS completed in 6 min 17 sec
```

### Bench

```shell
----------------------------------------------------------------------
 CPU Model          : AMD Ryzen 9 7950X3D 16-Core Processor
 CPU Cores          : 2 @ 4192.080 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✗ Disabled
 Total Disk         : 60.0 GB (2.7 GB Used)
 Total Mem          : 3.8 GB (85.6 MB Used)
 Total Swap         : 1024.0 MB (0 Used)
 System uptime      : 0 days, 0 hour 9 min
 Load average       : 0.28, 0.45, 0.24
 OS                 : Debian GNU/Linux 11
 Arch               : x86_64 (64 Bit)
 Kernel             : 5.10.0-21-amd64
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Location           : Gaishorn / AT
 Region             : Styria
 Region             : No ISP detected
----------------------------------------------------------------------
 I/O Speed(1st run) : 912 MB/s
 I/O Speed(2nd run) : 2.3 GB/s
 I/O Speed(3rd run) : 2.5 GB/s
 I/O Speed(average) : 1942.4 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    337.36 Mbps       1475.11 Mbps        238.90 ms   
 Los Angeles, US  531.89 Mbps       3263.75 Mbps        159.52 ms   
 Dallas, US       447.38 Mbps       2060.18 Mbps        183.13 ms   
 Montreal, CA     347.37 Mbps       919.75 Mbps         223.63 ms   
 Paris, FR        327.36 Mbps       1223.25 Mbps        244.02 ms   
 Amsterdam, NL    181.46 Mbps       2150.01 Mbps        178.38 ms   
 Shanghai, CN     61.88 Mbps        4102.99 Mbps        106.17 ms   
 Hongkong, CN     9369.40 Mbps      9308.40 Mbps        0.69 ms     
 Mumbai, IN       875.86 Mbps       4101.46 Mbps        93.04 ms    
 Singapore, SG    444.99 Mbps       2070.24 Mbps        185.19 ms   
 Tokyo, JP        1748.88 Mbps      6465.23 Mbps        42.21 ms    
----------------------------------------------------------------------
 Finished in        : 6 min 15 sec
 Timestamp          : 2024-02-22 04:33:13 MSK
----------------------------------------------------------------------
```

### GeekBench5

```shell

系统信息
  Operating System              Debian GNU/Linux 11 (bullseye)
  Kernel                        Linux 5.10.0-21-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.0-4.module_el8.9.0+3659+9c8643f3

处理器信息
  Name                          AMD Ryzen 9 7950X3D 16-Core Processor          
  Topology                      1 Processor, 2 Cores
  Identifier                    AuthenticAMD Family 25 Model 97 Stepping 2
  Base Frequency                4.19 GHz
  L1 Instruction Cache          64.0 KB x 2
  L1 Data Cache                 64.0 KB x 2
  L2 Cache                      512 KB x 2
  L3 Cache                      16.0 MB

内存信息
  Size                          3.84 GB

单核测试分数：1849
多核测试分数：3536
详细结果链接：https://browser.geekbench.com/v5/cpu/22245600
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20Ryzen%209%207950X3D
```

### 融合怪脚本测速

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD Ryzen 9 7950X3D 16-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 4192.080 MHz
 CPU 缓存          : L1: 256.00 KB / L2: 1.00 MB / L3: 16.00 MB
 硬盘空间          : 2.78 GiB / 58.98 GiB
 启动盘路径        : /dev/vda1
 内存              : 173.23 MiB / 3.84 GiB
 Swap              : 0 KiB / 1024.00 MiB
 系统在线时间      : 0 days, 0 hour 27 min
 负载              : 0.40, 0.27, 0.19
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-21-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS12189 Phoenixnap LLC
 IPV4 位置         : Hong Kong Island / CN-HK
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分: 		5636 Scores
 2 线程测试(多核)得分: 		11322 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:		72883.15 MB/s
 单线程写测试:		34040.37 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作		写速度					读速度
 100MB-4K Block		42.6 MB/s (10.40 IOPS, 2.46s)		42.6 MB/s (10400 IOPS, 2.46s)
 1GB-1M Block		3.3 GB/s (3140 IOPS, 0.32s)		1.3 GB/s (1227 IOPS, 0.81s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 40.03 MB/s   (10.0k) | 656.92 MB/s  (10.2k)
Write      | 40.13 MB/s   (10.0k) | 660.38 MB/s  (10.3k)
Total      | 80.16 MB/s   (20.0k) | 1.31 GB/s    (20.5k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.02 GB/s     (3.9k) | 2.20 GB/s     (2.1k)
Write      | 2.13 GB/s     (4.1k) | 2.35 GB/s     (2.2k)
Total      | 4.15 GB/s     (8.1k) | 4.55 GB/s     (4.4k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG07S42)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：奥地利
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：奥地利区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:					Yes (Region: AM)
 HotStar:				No
 Disney+:				Yes (Region: AT)
 Netflix:				Yes (Region: AT)
 YouTube Premium:			No 
 Amazon Prime Video:			Yes (Region: AM)
 TVBAnywhere+:				Yes
 iQyi Oversea Region:			US
 Viu.com:				No
 YouTube CDN:				Hong Kong 
 Netflix Preferred CDN:			Hong Kong  
 Spotify Registration:			Yes (Region: AM)
 Steam Currency:			USD
 ChatGPT:				Yes
 Bing Region:				WW
 Instagram Licensed Audio:		->
 Instagram Licensed Audio:		No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:		【RU】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):isp①  Fixed Line ISP⑤  business⑧  
  公司类型(company_type):isp⑧  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No⑥ ⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑧ 
  TOR(tor):  No① ② ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑90 未检测0 ③
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  qq邮箱：No
  outlook邮箱: Yes
  yandex邮箱: Yes
------以下为IPV6检测------
欺诈分数(越低越好): 0②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: AT 城市: Gaishorn 服务商: 
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    联通4837[普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     联通4837[普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   测试超时
广州联通 210.21.196.6    联通4837[普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       联通4837[普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.28 ms  *  局域网
0.21 ms  AS212238  中国, 香港, cogentco.com
0.49 ms  AS212238  中国, 香港, cogentco.com
0.37 ms  AS60068  中国, 香港, datacamp.co.uk
1.13 ms  AS6453  中国, 香港, tatacommunications.com
149.87 ms  AS6453  美国, 加利福尼亚州, 圣克拉拉, tatacommunications.com
150.48 ms  AS6453  美国, 加利福尼亚州, 圣何塞, tatacommunications.com
156.06 ms  AS6453  美国, 加利福尼亚州, 圣何塞, tatacommunications.com
150.03 ms  AS6453  美国, 加利福尼亚州, 圣何塞, tatacommunications.com
156.56 ms  AS4134  美国, 加利福尼亚州, 圣何塞, chinatelecom.com.cn, 电信
209.59 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
208.97 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
207.75 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.24 ms  *  局域网
0.36 ms  AS212238  中国, 香港, cogentco.com
0.35 ms  AS212238  中国, 香港, cogentco.com
0.89 ms  AS60068  中国, 香港, datacamp.co.uk
6.91 ms  AS2914  中国, 香港, ntt.com
4.60 ms  AS2914  中国, 香港, ntt.com
61.26 ms  AS2914  日本, 东京都, 东京, ntt.com
60.10 ms  AS2914  日本, 东京都, 东京, ntt.com
126.56 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
137.48 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
140.33 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
148.17 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
127.61 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
134.17 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.12 ms  *  局域网
0.40 ms  AS212238  中国, 香港, cogentco.com
0.43 ms  AS212238  中国, 香港, cogentco.com
0.43 ms  AS60068  中国, 香港, datacamp.co.uk
0.92 ms  AS2914  中国, 香港, ntt.com
2.44 ms  AS2914  中国, 香港, ntt.com
1.86 ms  AS2914  中国, 香港, ntt.com
9.35 ms  AS2914  中国, 香港, ntt.com
169.40 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
186.65 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
183.59 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
11.27 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
15.84 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
```

### Monster 测试

```shell
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 11 (64 Bit)
 Virt/Kernel  : KVM / 5.10.0-21-amd64
 CPU Model    : AMD Ryzen 9 7950X3D 16-Core Processor
 CPU Cores    : 2 @ 4192.080 MHz x86_64 512 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Disabled
 Load Average : 0.04, 0.16, 0.16
 Total Space  : 59G (2.9G ~6% used)
 Total RAM    : 3931 MB (88 MB + 246 MB Buff in use)
 Total SWAP   : 1023 MB (0 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 0 days 0:32
---------------------------------------------------------------------------
 Location     : Estonia, Tallinn (Harjumaa)
 ASN & ISP    : , TestForEva / TestForEva
---------------------------------------------------------------------------

 ## Geekbench v6 CPU Benchmark:

  Single Core : 2542  (THE BEAST)
   Multi Core : 4455

 ## IO Test

 CPU Speed:
    bzip2     : 211 MB/s
   sha256     : 437 MB/s
   md5sum     : 776 MB/s

 RAM Speed:
   Avg. write : 4539.7 MB/s
   Avg. read  : 13038.9 MB/s

 Disk Speed:
   1st run    : 2.2 GB/s
   2nd run    : 2.2 GB/s
   3rd run    : 2.2 GB/s
   -----------------------
   Average    : 2252.8 MB/s

 ## Asia Speedtest.net

 Location                         Upload           Download         Ping   
---------------------------------------------------------------------------
 Nearby                           36.86 Mbit/s     4.36 Mbit/s     * 354.32 ms
---------------------------------------------------------------------------
 India, Mumbai (Tatasky)          187.55 Mbit/s    11.32 Mbit/s    91.768 ms
 Sri Lanka, Colombo (Telecom PLC) 100.98 Mbit/s    5.53 Mbit/s     186.342 ms
 Bangladesh, Dhaka (Skytel)       116.52 Mbit/s    20.19 Mbit/s    89.045 ms
 Myanmar, Yangon (5BB Broadband)  230.00 Mbit/s    12.66 Mbit/s    60.557 ms
 Laos, Vientaine (Mangkone)       79.13 Mbit/s     43.38 Mbit/s    65.277 ms
 Thailand, Bangkok (CAT Telecom)  394.10 Mbit/s    7.65 Mbit/s     41.971 ms
 Cambodia, Phnom Penh (Today)     301.10 Mbit/s    18.71 Mbit/s    52.273 ms
 Vietnam, Hanoi (MOBIFONE)        444.48 Mbit/s    72.47 Mbit/s    24.114 ms
 Malaysia, Kuala Lumpur (Extreme) 289.60 Mbit/s    20.78 Mbit/s    40.432 ms
 Singapore (StarHub)              426.56 Mbit/s    43.39 Mbit/s    44.194 ms
 Philippines, Manila (PLDT)       686.14 Mbit/s    57.57 Mbit/s    26.092 ms
 Hong Kong (HGC Global)           2564.62 Mbit/s   323.19 Mbit/s   3.894 ms
 Taiwan, Taipei (TAIFO)           407.86 Mbit/s    38.16 Mbit/s    32.410 ms
 Japan, Tsukuba (SoftEther)       298.59 Mbit/s    16.54 Mbit/s    62.374 ms
---------------------------------------------------------------------------

 Finished in : 11 min 53 sec
 Timestamp   : 2024-02-22 02:02:15 GMT
 Saved in    : /root/speedtest.log

 Share results:
 - https://www.speedtest.net/result/15918664000.png
 - https://browser.geekbench.com/v6/cpu/5015978
 - https://sprunge.us/VTlaUy
```

### 国内延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-19.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-19.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-19.jpg" alt="" loading="lazy">
</picture>

### 国际延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-20.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-20.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-20.jpg" alt="" loading="lazy">
</picture>