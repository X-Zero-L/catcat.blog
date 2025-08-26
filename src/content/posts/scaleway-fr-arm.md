---
tags: [eu-server]
title: "Scaleway 巴黎 ARM 实例测试"
published: 2024-01-12
---

昨晚打开邮箱，发现Scaleway发来了他们的ARM促销邮件。Scaleway 引入了采用基于 ARM 的 Ampere® Altra® 处理器的服务器，目前仅仅在Paris:PAR 2可用。目前有50%的折扣优惠码可用，**COPARM50**，有效期至 2024 年 1 月 31 日。从各种角度来说，和其他厂商的ARM没有啥可比性。不推荐。Scaleway还是就用用星尘系列吧。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/01/image-9.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/01/image-9.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/01/image-9.jpg" alt="" loading="lazy">
</picture>

## 套餐

**_Provider : Scaleway  
Type/Plan : AMP2-C1  
Processor : Neoverse-N1 BIOS virt-6.2 CPU @ 2.0GHz  
Num of Core : 1 Cores  
Memory : 1.75 GB DDR4 RAM  
Storage : 10 GB NVMe(PCIe 4.0)  
Bandwidth : 100 Mbps IN | 2.5G Mbps OUT  
Location : FR  
Price : €7.44/M_** 

## 测评

## 测评

### lscpu

```shell
root@catcat:~# lscpu
Architecture:           aarch64
  CPU op-mode(s):       32-bit, 64-bit
  Byte Order:           Little Endian
CPU(s):                 1
  On-line CPU(s) list:  0
Vendor ID:              ARM
  BIOS Vendor ID:       QEMU
  Model name:           Neoverse-N1
    BIOS Model name:    virt-6.2  CPU @ 2.0GHz
    BIOS CPU family:    1
    Model:              1
    Thread(s) per core: 1
    Core(s) per socket: 1
    Socket(s):          1
    Stepping:           r3p1
    BogoMIPS:           50.00
    Flags:              fp asimd evtstrm aes pmull sha1 sha2 crc32 atomics fphp asimdhp cpuid asimdrdm lrcpc dcpop asimddp 
                        ssbs
NUMA:                   
  NUMA node(s):         1
  NUMA node0 CPU(s):    0
Vulnerabilities:        
  Gather data sampling: Not affected
  Itlb multihit:        Not affected
  L1tf:                 Not affected
  Mds:                  Not affected
  Meltdown:             Not affected
  Mmio stale data:      Not affected
  Retbleed:             Not affected
  Spec rstack overflow: Not affected
  Spec store bypass:    Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:           Mitigation; __user pointer sanitization
  Spectre v2:           Mitigation; CSV2, BHB
  Srbds:                Not affected
  Tsx async abort:      Not affected
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 1 minutes
Processor  : Neoverse-N1
BIOS virt-6.2  CPU @ 2.0GHz
CPU cores  : 1 @ ??? MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 1.7 GiB
Swap       : 0.0 KiB
Disk       : 9.1 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-13-cloud-arm64
VM Type    : VM-OTHER
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Online S.A.S.
ASN        : AS12876 SCALEWAY S.A.S.
Host       : Scaleway
Location   : Paris, Île-de-France (IDF)
Country    : France

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 20.73 MB/s    (5.1k) | 40.08 MB/s     (626)
Write      | 20.71 MB/s    (5.1k) | 41.27 MB/s     (644)
Total      | 41.45 MB/s   (10.3k) | 81.36 MB/s    (1.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 38.04 MB/s      (74) | 37.05 MB/s      (36)
Write      | 41.30 MB/s      (80) | 41.33 MB/s      (40)
Total      | 79.35 MB/s     (154) | 78.39 MB/s      (76)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1113                          
Multi Core      | 1113                          
Full Test       | https://browser.geekbench.com/v6/cpu/4355687
```

### Bench

```shell
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : CPU model not detected
 CPU Cores          : 1
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✗ Disabled
 Total Disk         : 9.1 GB (1.3 GB Used)
 Total Mem          : 1.7 GB (209.2 MB Used)
 System uptime      : 0 days, 0 hour 14 min
 Load average       : 0.27, 0.57, 0.40
 OS                 : Debian GNU/Linux 12
 Arch               : aarch64 (64 Bit)
 Kernel             : 6.1.0-13-cloud-arm64
 TCP CC             : cubic
 Virtualization     : Dedicated
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS12876 SCALEWAY S.A.S.
 Location           : Paris / FR
 Region             : Île-de-France
----------------------------------------------------------------------
 I/O Speed(1st run) : 41.9 MB/s
 I/O Speed(2nd run) : 41.9 MB/s
 I/O Speed(3rd run) : 41.9 MB/s
 I/O Speed(average) : 41.9 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    98.68 Mbps        3949.08 Mbps        1.43 ms     
 Los Angeles, US  214.97 Mbps       5581.26 Mbps        136.55 ms   
 Dallas, US       204.59 Mbps       4518.82 Mbps        108.59 ms   
 Montreal, CA     201.06 Mbps       878.89 Mbps         89.70 ms    
 Paris, FR        98.75 Mbps        970.43 Mbps         1.62 ms     
 Amsterdam, NL    99.08 Mbps        3760.80 Mbps        11.77 ms    
 Shanghai, CN     248.72 Mbps       1645.26 Mbps        230.33 ms   
 Hongkong, CN     290.20 Mbps       1636.76 Mbps        257.38 ms   
 Mumbai, IN       283.86 Mbps       5036.84 Mbps        119.75 ms   
 Singapore, SG    256.25 Mbps       3214.41 Mbps        231.21 ms   
 Tokyo, JP        218.03 Mbps       3322.02 Mbps        235.61 ms   
----------------------------------------------------------------------
 Finished in        : 7 min 43 sec
 Timestamp          : 2024-01-12 03:34:23 UTC
----------------------------------------------------------------------
```

### GeekBench 5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-13-cloud-arm64 aarch64
  Model                         Scaleway SCW-AMP2-C1
  Motherboard                   N/A

处理器信息
  Name                          ARM ARMv8
  Topology                      1 Processor, 1 Core
  Identifier                    ARM implementer 65 architecture 8 variant 3 part 3340 revision 1
  Base Frequency                0.00 Hz

内存信息
  Size                          1.69 GB

单核测试分数：829
多核测试分数：833
详细结果链接：https://browser.geekbench.com/v5/cpu/22127952
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=ARM%20ARMv8
```

### byte-unixbench 性能测试

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat: GNU/Linux
   OS: GNU/Linux -- 6.1.0-13-cloud-arm64 -- #1 SMP Debian 6.1.55-1 (2023-09-29)
   Machine: aarch64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   03:51:44 up 39 min,  1 user,  load average: 0.48, 0.32, 0.43; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Fri Jan 12 2024 03:51:44 - 04:19:44
0 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       45951677.5 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     8430.3 MWIPS (9.9 s, 7 samples)
Execl Throughput                               2730.6 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1027961.2 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          313551.9 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       2002257.6 KBps  (30.0 s, 2 samples)
Pipe Throughput                             1641870.5 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 205534.7 lps   (10.0 s, 7 samples)
Process Creation                               6345.5 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                   5925.4 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                    768.6 lpm   (60.0 s, 2 samples)
System Call Overhead                        1130971.7 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   45951677.5   3937.6
Double-Precision Whetstone                       55.0       8430.3   1532.8
Execl Throughput                                 43.0       2730.6    635.0
File Copy 1024 bufsize 2000 maxblocks          3960.0    1027961.2   2595.9
File Copy 256 bufsize 500 maxblocks            1655.0     313551.9   1894.6
File Copy 4096 bufsize 8000 maxblocks          5800.0    2002257.6   3452.2
Pipe Throughput                               12440.0    1641870.5   1319.8
Pipe-based Context Switching                   4000.0     205534.7    513.8
Process Creation                                126.0       6345.5    503.6
Shell Scripts (1 concurrent)                     42.4       5925.4   1397.5
Shell Scripts (8 concurrent)                      6.0        768.6   1281.0
System Call Overhead                          15000.0    1130971.7    754.0
                                                                   ========
System Benchmarks Index Score                                        1327.7

```

### 融合怪 测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Neoverse-N1 BIOS virt-6.2 CPU @ 2.0GHz
 CPU 核心数        : 1
 CPU 缓存          : L1: 0.00 KB / L2: 0.00 KB / L3: 0.00 KB
 硬盘空间          : 1.27 GiB / 9.00 GiB
 启动盘路径        : /dev/sda1
 内存              : 176.66 MiB / 1.69 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 28 min
 负载              : 0.60, 0.50, 0.51
 系统              : Debian GNU/Linux 12 (bookworm) (aarch64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : aarch64 (64 Bit)
 内核              : 6.1.0-13-cloud-arm64
 TCP加速方式       : cubic
 虚拟化架构        : Dedicated
 NAT类型           : 独立映射,独立过滤,支持回环
 IPV4 ASN          : AS12876 SCALEWAY S.A.S.
 IPV4 位置         : Paris / Île-de-France / FR
 IPV6 ASN          : AS12876 SCALEWAY S.A.S.
 IPV6 位置         : Paris / FR-IDF
 IPV6 子网掩码     : 64
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          3389 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          29453.33 MB/s
 单线程写测试:          14468.03 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         25.3 MB/s (6173 IOPS, 4.15s)            7.2 MB/s (1757 IOPS, 14.57s)
 1GB-1M Block           42.1 MB/s (40 IOPS, 24.91s)             42.1 MB/s (40 IOPS, 24.91s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/sda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 20.74 MB/s    (5.1k) | 40.07 MB/s     (626)
Write      | 20.73 MB/s    (5.1k) | 41.26 MB/s     (644)
Total      | 41.48 MB/s   (10.3k) | 81.33 MB/s    (1.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 38.04 MB/s      (74) | 37.04 MB/s      (36)
Write      | 41.30 MB/s      (80) | 41.33 MB/s      (40)
Total      | 79.34 MB/s     (154) | 78.37 MB/s      (76)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: PAR(PAR10S47)
Youtube识别地域: 无信息(null)
[IPv6]
连接方式: Youtube Video Server
视频缓存节点地域: PAR(PAR21S25)
Youtube识别地域: 无信息(null)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：法国
[IPv6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：法国
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：法国区
[IPv6]
当前IPv6出口解锁DisneyPlus
区域：法国区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: FR)
 HotStar:                               No
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: FR)
 Amazon Prime Video:                    Yes (Region: FR)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   FR
 Viu.com:                               No
 YouTube CDN:                           Paris 
 Netflix Preferred CDN:                 Paris  
 Spotify Registration:                  No
 Steam Currency:                        EUR
 ChatGPT:                               Yes
 Bing Region:                           FR
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 HotStar:                               No
 Disney+:                               Yes (Region: FR)
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: FR)
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 Viu.com:                               Failed
 YouTube CDN:                           Paris 
 Netflix Preferred CDN:                 Paris  
 Spotify Registration:                  No
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           FR
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【FR】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库 ①  | scamalytics数据库 ②  | virustotal数据库 ③  | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库 ⑥  | ipwhois数据库     ⑦  | ipregistry数据库 ⑧  | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
欺诈分数(越低越好): 11②
abuse得分(越低越好): 0④
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  
  公司类型(company_type):hosting①  hosting⑧  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes⑥   No⑨ 
  移动网络(mobile):  No⑥ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ 
  VPN(vpn):  No① ② ⑦ ⑧ 
  TOR(tor):  No① ② ⑦ ⑧ ⑨ 
  TOR出口(tor_exit):  No⑧ 
  搜索引擎机器人(search_engine_robot):② 
  匿名代理(anonymous):  No⑦ ⑧ ⑨ 
  攻击方(attacker):  No⑧ ⑨ 
  滥用者(abuser):  No⑧ ⑨ 
  威胁(threat):  No⑧ ⑨ 
  iCloud中继(icloud_relay):  No① ⑧ ⑨ 
  未分配IP(bogon):  No⑧ ⑨ 
黑名单记录统计(有多少个黑名单网站有记录): 无害0 恶意0 可疑0 未检测89 ③
Google搜索可行性：YES
------以下为IPV6检测------
欺诈分数(越低越好): 22②
abuse得分(越低越好): 0④
IP类型: Data Center/Web Hosting/Transit⑤
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: FR 城市: Paris 服务商: AS12876 SCALEWAY S.A.S.
北京电信 219.141.136.12  测试超时
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
0.34 ms  *  局域网
0.73 ms  *  局域网
0.80 ms  *  局域网
0.90 ms  *  局域网
0.84 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
1.49 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
15.24 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
14.19 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
206.20 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
206.96 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
209.00 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.34 ms  *  局域网
0.89 ms  *  局域网
0.96 ms  *  局域网
1.01 ms  *  局域网
0.85 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
1.57 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
1.59 ms  AS174  法国, 法兰西岛大区, 巴黎, cogentco.com
3.46 ms  AS174  法国, 法兰西岛大区, 巴黎, cogentco.com
2.71 ms  AS174  法国, 法兰西岛大区, 巴黎, cogentco.com
12.01 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
12.35 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
12.55 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
11.21 ms  AS174  德国, 黑森州, 法兰克福, cogentco.com
178.92 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
181.64 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
180.41 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
191.53 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
169.45 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.57 ms  *  局域网
0.79 ms  *  局域网
1.25 ms  *  局域网
1.14 ms  *  局域网
0.82 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
1.62 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
16.92 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
14.43 ms  AS12876  法国, 法兰西岛大区, 巴黎, scaleway.com
21.08 ms  AS58453  英国, 伦敦, chinamobile.com, 移动
218.41 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
218.51 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
220.52 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
220.98 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
219.21 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    98.30 Mbps      2346.50 Mbps    1.30     0.0%
法兰克福         99.64 Mbps      3493.93 Mbps    13.72    0.0%
洛杉矶           215.45 Mbps     2894.25 Mbps    142.88   0.3%
联通WuXi         191.95 Mbps     10.45 Mbps      202.66   0.0%
联通Fuzhou       327.67 Mbps     605.38 Mbps     207.30   0.0%
电信浙江         8.31 Mbps       14.66 Mbps      184.32   NULL
电信Nanjing5G    92.20 Mbps      1382.52 Mbps    188.72   0.3%
移动Chengdu      288.60 Mbps     1944.41 Mbps    220.87   0.0%
移动陕西5G       249.41 Mbps     951.71 Mbps     267.59   0.3%
------------------------------------------------------------------------
 总共花费      : 9 分 53 秒
 时间          : Fri Jan 12 03:49:36 UTC 2024
------------------------------------------------------------------------
```

### 硬盘

```shell
root@catcat:~# dd if=/dev/zero of=256 bs=64K count=4K oflag=dsync
4096+0 records in
4096+0 records out
268435456 bytes (268 MB, 256 MiB) copied, 29.2429 s, 9.2 MB/s
```