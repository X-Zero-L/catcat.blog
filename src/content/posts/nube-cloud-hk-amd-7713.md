---
tags: [hk-server]
title: "Nube Cloud 香港 AMD 7713 测评"
published: 2024-04-07
---

快车道的品牌，之前的快车道BGP会迁移到新的平台上（听说花100w开发的）。目前仅仅只上线了香港，后面五月会上美国圣何塞，新加坡将在6月上架。流量计费为单向计费，只计算流出流量，不记流入。支持按小时计费，IPv6地址可用，但需在VM操作系统内手动配置。不过快车道之前被攻击频繁，谨慎上车吧。

**官网** : [https://nube.sh](https://www.nodeseek.com/jump?to=https%3A%2F%2Fnube.sh%2F)

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-2.jpg" alt="" loading="lazy">
</picture>

**Looking Glass Server** : [http://hk-bgp.hkg.lg.kuaichedao.xyz/](https://www.nodeseek.com/jump?to=http%3A%2F%2Fhk-bgp.hkg.lg.kuaichedao.xyz%2F)

## 套餐

**_Provider : Nube Cloud  
Type/Plan : a3s.1c1g  
Processor : AMD EPYC 7713 64-Core  
Num of Core : 1 Cores  
Memory : 1 GB  
Storage : 10 GB NVMe  
Location : HK  
Price : **_\$_** 2.82/ Month_**

## 价格  

1c1g 10GB USD 2.82/mo  
流量按量计费 USD 0.0031/GB

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-1.jpg" alt="" loading="lazy">
</picture>

## 测评

### lscpu

```shell
root@debian12:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  1
  On-line CPU(s) list:   0
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        Red Hat
  Model name:            AMD EPYC 7713 64-Core Processor
    BIOS Model name:     RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               1
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           1
    Stepping:            1
    BogoMIPS:            3992.50
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 ht sys                         call nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pclmulqdq s                         sse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand hyperv                         isor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw perfctr_core invpcid_sin                         gle ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 invpcid rdseed adx smap clflush                         opt clwb sha_ni xsaveopt xsavec xgetbv1 xsaves clzero xsaveerptr wbnoinvd arat npt nrip_save umip pku os                         pke vaes vpclmulqdq rdpid arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   64 KiB (1 instance)
  L1i:                   64 KiB (1 instance)
  L2:                    512 KiB (1 instance)
  L3:                    16 MiB (1 instance)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0
Vulnerabilities:         
  Gather data sampling:  Not affected
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec rstack overflow:  Mitigation; safe RET, no microcode
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not affected  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```shell

Basic System Information:
---------------------------------
Uptime     : 0 days, 0 hours, 4 minutes
Processor  : AMD EPYC 7713 64-Core Processor
CPU cores  : 1 @ 1996.251 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 861.1 MiB
Swap       : 0.0 KiB
Disk       : 9.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-18-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ❌ Offline

IPv4 Network Information:
---------------------------------
ISP        : Eons Data Communications Limited
ASN        : AS138997 Eons Data Communications Limited
Host       : AGIS
Location   : Ha Kwai Chung, Kwai Tsing (NKT)
Country    : Hong Kong

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 269.72 MB/s  (67.4k) | 1.73 GB/s    (27.0k)
Write      | 270.43 MB/s  (67.6k) | 1.74 GB/s    (27.1k)
Total      | 540.15 MB/s (135.0k) | 3.47 GB/s    (54.2k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 2.84 GB/s     (5.5k) | 3.43 GB/s     (3.3k)
Write      | 2.99 GB/s     (5.8k) | 3.66 GB/s     (3.5k)
Total      | 5.84 GB/s    (11.4k) | 7.09 GB/s     (6.9k)
```

### Bench

```shell
-------------------- A Bench.sh Script By Teddysun -------------------
 Version            : v2023-10-15
 Usage              : wget -qO- bench.sh | bash
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 7713 64-Core Processor
 CPU Cores          : 1 @ 1996.251 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 9.9 GB (1.9 GB Used)
 Total Mem          : 861.1 MB (233.6 MB Used)
 System uptime      : 0 days, 0 hour 6 min
 Load average       : 0.38, 0.24, 0.10
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-18-amd64
 TCP CC             : bbr
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✗ Offline
 Organization       : AS138997 Eons Data Communications Limited
 Location           : Kwai Chung / HK
 Region             : Kwai Tsing
----------------------------------------------------------------------
 I/O Speed(1st run) : 1.1 GB/s
 I/O Speed(2nd run) : 1.0 GB/s
 I/O Speed(3rd run) : 1.1 GB/s
 I/O Speed(average) : 1092.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    6317.68 Mbps      2321.29 Mbps        1.16 ms     
 Los Angeles, US  565.18 Mbps       6092.65 Mbps        161.65 ms   
 Dallas, US       424.08 Mbps       4611.40 Mbps        213.91 ms   
 Montreal, CA     340.21 Mbps       682.84 Mbps         237.39 ms   
 Amsterdam, NL    396.46 Mbps       720.90 Mbps         204.03 ms   
 Hongkong, CN     4.86 Mbps         4.78 Mbps           1.52 ms     
 Mumbai, IN       2250.12 Mbps      5277.69 Mbps        88.29 ms    
 Singapore, SG    181.93 Mbps       1869.34 Mbps        41.99 ms    
 Tokyo, JP        650.94 Mbps       1261.78 Mbps        43.07 ms    
----------------------------------------------------------------------
```

### 融合怪测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7713 64-Core Processor
 CPU 核心数        : 1
 CPU 频率          : 1996.251 MHz
 CPU 缓存          : L1: 64.00 KB / L2: 512.00 KB / L3: 16.00 MB
 硬盘空间          : 1.91 GiB / 9.94 GiB
 启动盘路径        : /dev/vda1
 内存              : 205.42 MiB / 861.10 MiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 0 days, 0 hour 13 min
 负载              : 0.52, 0.24, 0.12
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-18-amd64
 TCP加速方式       : bbr
 虚拟化架构        : KVM
 NAT类型           : 开放型
 IPV4 ASN          : AS138997 Eons Data Communications Limited
 IPV4 位置         : Kwai Chung / Kwai Tsing / HK
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          3472 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          40682.58 MB/s
 单线程写测试:          25003.27 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         59.8 MB/s (14.61 IOPS, 1.75s))          107 MB/s (26027 IOPS, 0.98s)
 1GB-1M Block           1.4 GB/s (1382 IOPS, 0.72s)             4.4 GB/s (4183 IOPS, 0.24s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 279.40 MB/s  (69.8k) | 1.81 GB/s    (28.3k)
Write      | 280.13 MB/s  (70.0k) | 1.82 GB/s    (28.5k)
Total      | 559.53 MB/s (139.8k) | 3.64 GB/s    (56.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 3.42 GB/s     (6.6k) | 3.82 GB/s     (3.7k)
Write      | 3.60 GB/s     (7.0k) | 4.08 GB/s     (3.9k)
Total      | 7.02 GB/s    (13.7k) | 7.91 GB/s     (7.7k)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG33S01)
Youtube识别地域: 香港(HK)
----------------Netflix----------------
[IPv4]
您的出口IP完整解锁Netflix，支持非自制剧的观看
NF所识别的IP地域信息：香港
[IPv6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
---------------DisneyPlus---------------
[IPv4]
当前IPv4出口解锁DisneyPlus
区域：香港区
解锁Youtube，Netflix，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: HK)
 HotStar:                               No
 Disney+:                               Yes (Region: HK)
 Netflix:                               Yes (Region: HK)
 YouTube Premium:                       Yes (Region: HK)
 Amazon Prime Video:                    Yes (Region: US)
 TVBAnywhere+:                          No
 iQyi Oversea Region:                   HK
 Viu.com:                               Yes (Region: HK)
 YouTube CDN:                           Hong Kong 
 Netflix Preferred CDN:                 Hong Kong  
 Spotify Registration:                  Yes (Region: HK)
 Steam Currency:                        HKD
 ChatGPT:                               Only Available with Mobile APP
 Bing Region:                           HK
 Instagram Licensed Audio:              No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【US】
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  ① | scamalytics数据库 ②  | virustotal数据库  ③ | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库  ⑥ | ipwhois数据库     ⑦  | ipregistry数据库  ⑧ | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
ipapiis数据库 ⑪ | ipapicom数据库    ⑫  | abstractapi数据库 ⑬ | ipqualityscore数据库 ⑭ 
欺诈分数(越低越好): 0⑤  abuse得分(越低越好): 0⑤  0 (Very Low)⑪  威胁等级: low②  
IP类型: 
  使用类型(usage_type):isp①  Data Center/Web Hosting/Transit⑤  isp⑧  business⑨  isp⑪  
  公司类型(company_type):business①  isp⑧  isp⑪  
  云服务提供商(cloud_provider):  No⑧ 
  数据中心(datacenter):  No⑥ ⑨   Yes⑪ 
  移动网络(mobile):  No⑥ ⑪ 
  代理(proxy):  No① ② ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ 
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
  qq邮箱：No
  outlook邮箱: Yes
  yandex邮箱: Yes
----------------三网回程--感谢zhanghanyun/backtrace开源-----------------
国家: HK 城市: Kwai Chung 服务商: AS138997 Eons Data Communications Limited
北京电信 219.141.136.12  电信163 [普通线路]           
北京联通 202.106.50.1    测试超时
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  电信163 [普通线路]           
上海联通 210.22.97.1     测试超时
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   电信163 [普通线路]           
广州联通 210.21.196.6    测试超时
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     电信163 [普通线路]           
成都联通 119.6.6.6       测试超时
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.53 ms  AS138997  中国, 香港, cogentco.com
0.69 ms  AS138997  中国, 香港, eons.cloud
2.75 ms  AS138997  中国, 香港, eons.cloud
0.32 ms  AS138997  中国, 香港, eons.cloud
2.99 ms  AS138997  中国, 香港, eons.cloud
0.31 ms  AS138997  中国, 香港, eons.cloud
0.82 ms  AS3491,AS31713  中国, 香港, pccw.com
172.63 ms  AS4134  美国, 加利福尼亚州, 圣何塞, chinatelecom.com.cn, 电信
329.33 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
346.77 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
327.94 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.48 ms  AS138997  中国, 香港, cogentco.com
0.69 ms  AS138997  中国, 香港, eons.cloud
1.38 ms  AS138997  中国, 香港, eons.cloud
0.41 ms  AS138997  中国, 香港, eons.cloud
1.21 ms  AS138997  中国, 香港, eons.cloud
0.46 ms  AS138997  中国, 香港, eons.cloud
38.32 ms  AS138997  中国, 香港, eons.cloud
0.71 ms  AS7578  中国, 香港, globalsecurelayer.com
0.58 ms  AS7578  COGENTCO.COM 骨干网, cogentco.com
30.60 ms  AS7578  COGENTCO.COM 骨干网, cogentco.com
30.49 ms  AS7578  新加坡, cogentco.com
30.52 ms  AS7578  新加坡, cogentco.com
97.35 ms  AS7578  日本, 东京都, 东京, cogentco.com
97.34 ms  AS7578  日本, 东京都, 东京, cogentco.com
148.23 ms  AS17676  中国, 北京, bbtec.net
147.65 ms  AS4837  中国, 北京, chinaunicom.com, 联通
168.40 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
172.50 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
170.81 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.35 ms  AS138997  中国, 香港, cogentco.com
0.81 ms  AS138997  中国, 香港, eons.cloud
2.97 ms  AS138997  中国, 香港, eons.cloud
0.61 ms  AS138997  中国, 香港, eons.cloud
1.76 ms  AS138997  中国, 香港, eons.cloud
0.31 ms  AS138997  中国, 香港, eons.cloud
0.75 ms  AS3491,AS31713  中国, 香港, pccw.com
33.77 ms  AS58453  新加坡, chinamobile.com, 移动
84.27 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
84.05 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
42.11 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
43.46 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
46.94 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    460.07 Mbps     364.53 Mbps     1.25     48.2%
中国香港         723.83 Mbps     311.65 Mbps     1.67     NULL
新加坡           2360.94 Mbps    1398.59 Mbps    37.89    0.0%
联通上海5G       14.13 Mbps      739.14 Mbps     147.38   NULL
联通天津5G       611.13 Mbps     1307.82 Mbps    150.04   NULL
电信浙江         70.22 Mbps      23.20 Mbps      331.12   NULL
电信Nanjing5G    37.27 Mbps      8.40 Mbps       547.50   4.5%
移动Beijing      1772.93 Mbps    5647.17 Mbps    84.57    NULL
------------------------------------------------------------------------
 总共花费      : 6 分 38 秒
 时间          : Sun Apr  7 15:51:55 HKT 2024
------------------------------------------------------------------------
```

### 流媒体解释测试

```shell
============[ Multination ]============
 Dazn:                  原生解锁        Yes (Region: HK)
 TikTok:                原生解锁        Yes (Region: US)
 HotStar:                               No
 Disney+:               原生解锁        Yes (Region: HK)
 Netflix:               原生解锁        Yes (Region: HK)
 YouTube Premium:       原生解锁        Yes (Region: HK)
 Amazon Prime Video:    原生解锁        Yes (Region: US)
 TVBAnywhere+:                          No
 iQyi Oversea Region:   原生解锁        HK
 Viu.com:                               No
 YouTube CDN:                           Hong Kong 
 Netflix Preferred CDN:                 Hong Kong  
 Spotify Registration:  原生解锁        Yes (Region: HK)
 Steam Currency:                        HKD
 ChatGPT:               原生解锁        APP Only (Region: HK)
 Bing Region:                           HK
 Instagram Licensed Audio:              No
=======================================
=============[ Hong Kong ]=============
 Now E:                                 Yes
 Viu.TV:                                Yes
 MyTVSuper:                             No
 HBO GO Asia:                           Yes (Region: HK)
 BiliBili Hongkong/Macau/Taiwan:        Yes
=======================================
```

### 回程路由

从路由来看，接了cogent，lumen，pccwg，ntt。

回程：移动走lumen直连，电信绕美，联通部分走新加坡部分绕美。

去程：电信绕美，联通走日本ntt，移动走lumen直连。

```shell
No:1/9 Traceroute to 中国 深圳 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.9 2024-03-04T14:32:40Z f96c3e5
[NextTrace API] preferred API IP - 172.67.155.192 - 36.17ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes packets
1   205.198.64.1    AS138997                  中国 台湾   kuaichedao.co 
                                              0.38 ms
2   103.138.72.23   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.69 ms
3   103.138.72.98   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.37 ms
4   103.138.72.90   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.49 ms
5   103.138.72.97   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.82 ms
6   *
7   63.218.72.230   AS3491   [PCCW-BACKBONE]  美国 加利福尼亚州 洛杉矶  pccwglobal.com 
                                              161.15 ms
8   *
9   63.218.72.230   AS3491   [PCCW-BACKBONE]  美国 加利福尼亚州 洛杉矶  pccwglobal.com 
                                              161.22 ms
10  218.30.53.86    AS4134   [CHINANET-US]    美国 加利福尼亚 洛杉矶 PCCW-CT-PoP chinatelecom.com.cn  电信
                                              175.66 ms
11  202.97.64.226   AS4134   [CHINANET-BB]    中国 广东省 广州市  chinatelecom.com.cn 
                                              325.50 ms
12  202.97.93.82    AS4134   [CHINANET-BB]    中国 广东 广州  chinatelecom.com.cn  电信
                                              344.82 ms
13  *
14  119.147.61.70   AS4134   [CHINANET-GD]    中国 广东 深圳 福田 chinatelecom.com.cn 
                                              370.51 ms
15  59.36.216.1     AS4134                    中国 广东 江门市  chinatelecom.com.cn  电信
                                              370.52 ms

No:2/9 Traceroute to 中国 上海 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.9 2024-03-04T14:32:40Z f96c3e5
[NextTrace API] preferred API IP - 104.21.40.176 - 33.02ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes packets
1   205.198.64.1    AS138997                  中国 台湾   kuaichedao.co 
                                              0.38 ms
2   103.138.72.21   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.61 ms
3   103.138.72.20   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.28 ms
4   103.138.72.96   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.36 ms
5   103.138.72.95   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              1.75 ms
6   103.138.72.92   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.44 ms
7   63.222.113.162  AS3491                    美国 伊利诺伊州 芝加哥  pccwglobal.com 
                                              0.79 ms
8   202.97.60.41    AS4134   [CHINANET-BB]    美国 加利福尼亚 弗里蒙特  chinatelecom.com.cn  电信
                                              227.30 ms
9   *
10  202.97.60.41    AS4134   [CHINANET-BB]    美国 加利福尼亚 弗里蒙特  chinatelecom.com.cn  电信
                                              274.79 ms
11  *
12  *
13  *
14  *
15  101.226.41.65   AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              418.60 ms

No:3/9 Traceroute to 中国 北京 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.9 2024-03-04T14:32:40Z f96c3e5
[NextTrace API] preferred API IP - 172.67.155.192 - 27.14ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes packets
1   205.198.64.1    AS138997                  中国 台湾   kuaichedao.co 
                                              0.37 ms
2   103.138.72.23   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.65 ms
3   103.138.72.20   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              3.40 ms
4   103.138.72.96   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.42 ms
5   63.222.113.162  AS3491                    美国 伊利诺伊州 芝加哥  pccwglobal.com 
                                              0.83 ms
6   103.138.72.92   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.51 ms
7   63.218.92.14    AS3491   [PCCW-BACKBONE]  美国 弗吉尼亚州 阿什本  pccwglobal.com 
                                              255.51 ms
8   *
9   63.218.92.14    AS3491   [PCCW-BACKBONE]  美国 弗吉尼亚州 阿什本  pccwglobal.com 
                                              260.62 ms
10  202.97.83.29    AS4134   [CHINANET-BB]    美国 加利福尼亚 旧金山  chinatelecom.com.cn  电信
                                              234.96 ms
11  *
12  *
13  *
14  220.181.53.1    AS23724  [CHINANET-IDC]   中国 北京   bjtelecom.net  电信
                                              413.08 ms

No:4/9 Traceroute to 中国 广州 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.9 2024-03-04T14:32:40Z f96c3e5
[NextTrace API] preferred API IP - 172.67.155.192 - 36.42ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes packets
1   205.198.64.1    AS138997                  中国 台湾   kuaichedao.co 
                                              0.35 ms
2   103.138.72.21   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.78 ms
3   103.138.72.22   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.73 ms
4   103.138.72.92   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.38 ms
5   103.138.72.91   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.03 ms
6   103.138.72.9    AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.42 ms
7   103.138.72.19   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.16 ms
8   31.217.251.226  AS7578                    中国 香港   globalsecurelayer.com 
                                              0.58 ms
9   206.148.24.92   AS7578                    中国 香港   globalsecurelayer.com 
                                              0.59 ms
10  *
11  *
12  *
13  *
14  206.148.24.36   AS7578                    日本 东京都 东京  globalsecurelayer.com 
                                              97.41 ms
15  *
16  *
17  *
18  *
19  221.111.202.70  AS17676  [BBTEC]          中国 北京   softbank.jp 
                                              148.96 ms
20  219.158.3.29    AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              148.40 ms
21  *
22  *
23  157.18.0.30     AS17816  [UNICOM-GD]      中国 广东 广州  chinaunicom.cn  联通
                                              229.08 ms
24  120.80.169.118  AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              181.56 ms
25  *
26  *
27  *
28  *
29  *
30  *

No:5/9 Traceroute to 中国 上海 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.9 2024-03-04T14:32:40Z f96c3e5
[NextTrace API] preferred API IP - 172.67.155.192 - 34.99ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes packets
1   205.198.64.1    AS138997                  中国 台湾   kuaichedao.co 
                                              0.34 ms
2   103.138.72.23   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.68 ms
3   103.138.72.98   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.83 ms
4   103.138.72.92   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.27 ms
5   103.138.72.95   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              4.08 ms
6   103.138.72.9    AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.37 ms
7   103.138.72.19   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              1.91 ms
8   31.217.251.226  AS7578                    中国 香港   globalsecurelayer.com 
                                              0.61 ms
9   206.148.24.92   AS7578                    中国 香港   globalsecurelayer.com 
                                              0.61 ms
10  *
11  *
12  *
13  *
14  206.148.24.36   AS7578                    日本 东京都 东京  globalsecurelayer.com 
                                              97.39 ms
15  *
16  *
17  *
18  *
19  221.111.202.70  AS17676  [BBTEC]          中国 北京   softbank.jp 
                                              157.12 ms
20  219.158.10.45   AS4837   [CU169-BACKBONE] 中国 广东省 广州市  chinaunicom.cn 
                                              152.19 ms
21  *
22  *
23  *
24  210.22.66.174   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              146.19 ms
25  *
26  *
27  112.65.95.129   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              148.14 ms

No:6/9 Traceroute to 中国 北京 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.9 2024-03-04T14:32:40Z f96c3e5
[NextTrace API] preferred API IP - 104.21.40.176 - 31.93ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes packets
1   205.198.64.1    AS138997                  中国 台湾   kuaichedao.co 
                                              0.42 ms
2   103.138.72.21   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.77 ms
3   103.138.72.26   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              3.66 ms
4   103.138.72.94   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.39 ms
5   103.138.72.91   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.90 ms
6   103.138.72.9    AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.72 ms
7   103.138.72.19   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.44 ms
8   31.217.251.226  AS7578                    中国 香港   globalsecurelayer.com 
                                              0.78 ms
9   206.148.24.92   AS7578                    中国 香港   globalsecurelayer.com 
                                              0.57 ms
10  *
11  *
12  *
13  *
14  206.148.24.36   AS7578                    日本 东京都 东京  globalsecurelayer.com 
                                              97.37 ms
15  *
16  *
17  *
18  *
19  221.111.202.70  AS17676  [BBTEC]          中国 北京   softbank.jp 
                                              150.68 ms
20  219.158.3.137   AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              148.22 ms
21  *
22  *
23  *
24  *
25  *
26  *
27  *
28  *
29  *
30  *

No:7/9 Traceroute to 中国 深圳 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.9 2024-03-04T14:32:40Z f96c3e5
[NextTrace API] preferred API IP - 104.21.40.176 - 38.75ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 120.233.53.1, 30 hops max, 52 bytes packets
1   205.198.64.1    AS138997                  中国 台湾   kuaichedao.co 
                                              0.35 ms
2   103.138.72.23   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.60 ms
3   103.138.72.20   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              1.90 ms
4   103.138.72.96   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.28 ms
5   103.138.72.91   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.48 ms
6   103.138.72.9    AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.67 ms
7   103.138.72.58   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.70 ms
8   *
9   4.69.208.58     AS3356                    中国 香港   level3.com 
                                              2.85 ms
10  223.121.3.9     AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.97 ms
11  223.120.2.117   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              3.55 ms
12  223.120.22.202  AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              9.39 ms
13  221.183.92.197  AS9808   [CMNET]          中国 安徽 合肥市  chinamobile.com  移动
                                              15.68 ms
14  221.183.92.213  AS9808   [CMNET]          中国 安徽 合肥市  chinamobile.com  移动
                                              14.58 ms
15  *
16  *
17  183.235.226.181 AS56040  [APNIC-AP]       中国 广东 广州  chinamobile.com  移动
                                              18.37 ms
18  211.136.242.182 AS56040  [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              27.17 ms
19  120.233.53.1    AS56040  [APNIC-AP]       中国 广东 深圳  chinamobile.com  移动
                                              21.83 ms

No:8/9 Traceroute to 中国 上海 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.9 2024-03-04T14:32:40Z f96c3e5
[NextTrace API] preferred API IP - 104.21.40.176 - 30.87ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes packets
1   205.198.64.1    AS138997                  中国 台湾   kuaichedao.co 
                                              0.38 ms
2   103.138.72.21   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.57 ms
3   103.138.72.98   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.54 ms
4   103.138.72.94   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.61 ms
5   103.138.72.91   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              3.58 ms
6   103.138.72.9    AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.64 ms
7   103.138.72.58   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.66 ms
8   *
9   4.69.208.62     AS3356                    中国 香港   level3.com 
                                              1.93 ms
10  223.121.3.9     AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.84 ms
11  223.120.22.65   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              5.03 ms
12  *
13  221.183.89.178  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              52.70 ms
14  221.183.89.33   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              30.39 ms
15  221.183.89.50   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              31.52 ms
16  *
17  *
18  183.194.216.129 AS9808   [APNIC-AP]       中国 上海   chinamobile.com  移动
                                              31.60 ms

No:9/9 Traceroute to 中国 北京 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.2.9 2024-03-04T14:32:40Z f96c3e5
[NextTrace API] preferred API IP - 104.21.40.176 - 181.27ms - Misaka.LAX
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes packets
1   205.198.64.1    AS138997                  中国 台湾   kuaichedao.co 
                                              0.38 ms
2   103.138.72.23   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.57 ms
3   103.138.72.26   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              3.37 ms
4   103.138.72.90   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.28 ms
5   103.138.72.91   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              2.37 ms
6   103.138.72.9    AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.55 ms
7   103.138.72.58   AS138997 [EDCL-HK]        中国 香港   kuaichedao.co 
                                              0.77 ms
8   *
9   4.69.218.150    AS3356                    中国 香港   level3.com 
                                              1.75 ms
10  *
11  223.120.22.65   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              7.04 ms
12  223.120.22.142  AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              83.97 ms
13  221.183.55.110  AS9808   [CMNET]          中国 北京  回国到达层 chinamobile.com  移动
                                              66.04 ms
14  221.183.46.250  AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              83.66 ms
15  221.183.89.98   AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              68.91 ms
16  *
17  *
18  *
19  211.136.67.166  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              85.32 ms
20  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              68.54 ms
21  *
22  211.136.25.153  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              69.79 ms
```

### GeekBench5

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-18-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.13.0-2.el7

处理器信息
  Name                          AMD EPYC 7713 64-Core Processor                
  Topology                      1 Processor, 1 Core
  Identifier                    AuthenticAMD Family 25 Model 1 Stepping 1
  Base Frequency                2.00 GHz
  L1 Instruction Cache          64.0 KB
  L1 Data Cache                 64.0 KB
  L2 Cache                      512 KB
  L3 Cache                      16.0 MB

内存信息
  Size                          861 MB

单核测试分数：1100
多核测试分数：1079
详细结果链接：https://browser.geekbench.com/v5/cpu/22380542
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%207713
```

### IP 流媒体质量检测

```shell
########################################################################
一、基础信息（Maxmind 数据库）
自治系统号：            AS138997
组织：                  Eons Data Communications Limited
坐标：                  114°8′3″E, 22°21′14″N
地图：                  https://check.place/22.3539,114.1342,15,cn
城市：                  Kwai Tsing, 下葵涌
使用地：                [HK]香港, [AS]亚洲
注册地：                [US]美国
时区：                  Asia/Hong_Kong
IP类型：                 广播IP 
二、IP类型属性
数据库：      IPinfo    ipregistry    ipapi     AbuseIPDB  IP2LOCATION 
使用类型：     机房        机房        机房        机房        机房    
公司类型：     商业        机房        机房    
三、风险评分
风险等级：      极低         低       中等       高         极高
SCAMALYTICS：                                 50|高风险
ipapi：    0.04%|极低风险
AbuseIPDB：    0|低风险
IPQS：                        75|可疑IP
DB-IP：         |低风险
四、风险因子
库： IP2LOCATION ipapi ipregistry IPQS SCAMALYTICS ipdata IPinfo IPWHOIS
地区：    [HK]    [HK]    [HK]    [HK]    [HK]    [HK]    [HK]    [HK]
代理：     否      否      否      是      否      否      否      否 
Tor：      否      否      否      否      否      否      否      否 
VPN：      否      否      否      是      否      无      否      否 
服务器：   是      是      是      无      否      否      否      否 
滥用：     否      否      否      否      无      否      无      无 
机器人：   否      否      无      否      否      无      无      无 
五、流媒体及AI服务解锁检测
服务商：  TikTok   Disney+  Netflix Youtube  AmazonPV  Spotify  ChatGPT 
状态：     失败     解锁     解锁     解锁     解锁     解锁     仅APP  
地区：              [HK]     [HK]     [HK]     [HK]     [HK]     [HK]   
方式：              原生     原生     原生     原生     原生     原生   
六、邮局连通性及黑名单检测
本地25端口：阻断
IP地址黑名单数据库：  有效 439   正常 431   已标记 8   黑名单 0
========================================================================
```

### 全球延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-3.jpg" alt="" loading="lazy">
</picture>