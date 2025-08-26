---
tags: [sg-server]
title: "ShockHosting 新加坡 AMD 9354P 测评"
published: 2024-05-26
coverImage: "image-49.png"
---

最近在寻找亚洲的高配服务器（要去亚洲数据中心，三代EPYC or 四代EPYC以上），非常幸运，捡到宝了。根据介绍，商家成立于2013年，目前经营11个地区，主要有新加坡，日本，荷兰，洛杉矶等。机器性能可以说非常优秀。他们的销售也挺耐心的，因为我在网上找了一圈也没找到他们9354P node的测评，最后还怕我不相信，说可以带我实地查看或者是IPML的截图。新加坡数据中心位于 RacksCentral。IP质量一般，很经典的电信，联通绕美走cogentco，移动直连。观察一段时间，考虑是否换掉Hybula的位置。

## 套餐

**_Provider : ShockHosting   
Type/Plan : SSD-KVM-8GB  
Processor : AMD EPYC 9354P 32-Core Processor  
Num of Core : 4 个 vCore  @ 3.3+ GHz  
Memory : 8 GB DDR5 RAM  
Storage : 120 GB NVMe(PCIe 4.0 Raid 10)  
Bandwidth : 8TB @ 1 Gbps IN | 1 Gbps OUT  
Location : SG  
Price : \$19.99 /month_**

购买地址：[shockhosting.net](https://shockhosting.net/portal/aff.php?aff=1163) (含AFF)

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/image-49.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/image-49.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/image-49.jpg" alt="" loading="lazy">
</picture>

## 测评

### lscpu

```shell
root@catcat:~# lscpu
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 57 bits virtual
  Byte Order:            Little Endian
CPU(s):                  4
  On-line CPU(s) list:   0-3
Vendor ID:               AuthenticAMD
  BIOS Vendor ID:        Red Hat
  Model name:            AMD EPYC 9354P 32-Core Processor
    BIOS Model name:     RHEL 7.6.0 PC (i440FX + PIIX, 1996)  CPU @ 2.0GHz
    BIOS CPU family:     1
    CPU family:          25
    Model:               17
    Thread(s) per core:  1
    Core(s) per socket:  1
    Socket(s):           4
    Stepping:            1
    BogoMIPS:            6500.00
    Flags:               fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush mmx fxsr sse sse2 
                         syscall nx mmxext fxsr_opt pdpe1gb rdtscp lm rep_good nopl cpuid extd_apicid tsc_known_freq pni pc                         lmulqdq ssse3 fma cx16 pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16                         c rdrand hypervisor lahf_lm cmp_legacy svm cr8_legacy abm sse4a misalignsse 3dnowprefetch osvw per                         fctr_core invpcid_single ssbd ibrs ibpb stibp vmmcall fsgsbase tsc_adjust bmi1 avx2 smep bmi2 erms                          invpcid avx512f avx512dq rdseed adx smap avx512ifma clflushopt clwb avx512cd sha_ni avx512bw avx5                         12vl xsaveopt xsavec xgetbv1 xsaves avx512_bf16 clzero xsaveerptr wbnoinvd arat npt lbrv nrip_save                          tsc_scale vmcb_clean v_vmsave_vmload avx512vbmi umip pku ospke avx512_vbmi2 gfni vaes vpclmulqdq 
                         avx512_vnni avx512_bitalg avx512_vpopcntdq la57 rdpid fsrm arch_capabilities
Virtualization features: 
  Virtualization:        AMD-V
  Hypervisor vendor:     KVM
  Virtualization type:   full
Caches (sum of all):     
  L1d:                   256 KiB (4 instances)
  L1i:                   256 KiB (4 instances)
  L2:                    2 MiB (4 instances)
  L3:                    64 MiB (4 instances)
NUMA:                    
  NUMA node(s):          1
  NUMA node0 CPU(s):     0-3
Vulnerabilities:         
  Itlb multihit:         Not affected
  L1tf:                  Not affected
  Mds:                   Not affected
  Meltdown:              Not affected
  Mmio stale data:       Not affected
  Retbleed:              Not affected
  Spec store bypass:     Mitigation; Speculative Store Bypass disabled via prctl
  Spectre v1:            Mitigation; usercopy/swapgs barriers and __user pointer sanitization
  Spectre v2:            Mitigation; Retpolines, IBPB conditional, IBRS_FW, STIBP disabled, RSB filling, PBRSB-eIBRS Not af                         fected
  Srbds:                 Not affected
  Tsx async abort:       Not affected
```

### Yabs

```shell
Basic System Information:
---------------------------------
Uptime     : 0 days, 1 hours, 33 minutes
Processor  : AMD EPYC 9354P 32-Core Processor
CPU cores  : 4 @ 3250.000 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 7.8 GiB
Swap       : 512.0 MiB
Disk       : 117.6 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-9-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Shock Hosting LLC
ASN        : AS395092 Shock Hosting LLC
Host       : Shock Hosting LLC
Location   : Singapore, North West (03)
Country    : Singapore

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda1):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 450.21 MB/s (112.5k) | 5.95 GB/s    (93.1k)
Write      | 451.40 MB/s (112.8k) | 5.99 GB/s    (93.6k)
Total      | 901.61 MB/s (225.4k) | 11.94 GB/s  (186.7k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 22.20 GB/s   (43.3k) | 10.85 GB/s   (10.5k)
Write      | 23.38 GB/s   (45.6k) | 11.57 GB/s   (11.3k)
Total      | 45.59 GB/s   (89.0k) | 22.42 GB/s   (21.9k)

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 2169                          
Multi Core      | 7001                          
Full Test       | https://browser.geekbench.com/v6/cpu/6266892

YABS completed in 5 min 40 sec
```

### Bench

```shell
----------------------------------------------------------------------
 CPU Model          : AMD EPYC 9354P 32-Core Processor
 CPU Cores          : 4 @ 3250.000 MHz
 CPU Cache          : 512 KB
 AES-NI             : ✓ Enabled
 VM-x/AMD-V         : ✓ Enabled
 Total Disk         : 118.1 GB (1.2 GB Used)
 Total Mem          : 7.8 GB (309.7 MB Used)
 Total Swap         : 512.0 MB (0 Used)
 System uptime      : 0 days, 1 hour 50 min
 Load average       : 0.00, 0.06, 0.10
 OS                 : Debian GNU/Linux 12
 Arch               : x86_64 (64 Bit)
 Kernel             : 6.1.0-9-amd64
 TCP CC             : cubic
 Virtualization     : KVM
 IPv4/IPv6          : ✓ Online / ✓ Online
 Organization       : AS395092 Shock Hosting LLC
 Location           : Singapore / SG
 Region             : Singapore
----------------------------------------------------------------------
 I/O Speed(1st run) : 896 MB/s
 I/O Speed(2nd run) : 785 MB/s
 I/O Speed(3rd run) : 792 MB/s
 I/O Speed(average) : 824.3 MB/s
----------------------------------------------------------------------
 Node Name        Upload Speed      Download Speed      Latency     
 Speedtest.net    928.63 Mbps       937.14 Mbps         0.23 ms     
 Los Angeles, US  443.57 Mbps       686.51 Mbps         187.93 ms   
 Dallas, US       272.85 Mbps       529.66 Mbps         225.52 ms   
 Montreal, CA     54.94 Mbps        17.15 Mbps          344.62 ms   
 Amsterdam, NL    351.65 Mbps       533.83 Mbps         258.08 ms   
 Shanghai, CN     3.23 Mbps         4.05 Mbps           467.17 ms   
 Chongqing, CN    0.45 Mbps         0.47 Mbps           99.55 ms    
 Hongkong, CN     899.07 Mbps       935.44 Mbps         37.39 ms    
 Mumbai, IN       353.80 Mbps       580.85 Mbps         248.69 ms   
 Singapore, SG    932.81 Mbps       937.18 Mbps         1.16 ms     
 Tokyo, JP        320.80 Mbps       913.74 Mbps         66.84 ms    
----------------------------------------------------------------------
```

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 9354P 32-Core Processor
 CPU 核心数        : 4
 CPU 频率          : 3250.000 MHz
 CPU 缓存          : L1: 256.00 KB / L2: 2.00 MB / L3: 64.00 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ✔ Enabled
 内存              : 158.95 MiB / 7.75 GiB
 Swap              : 0 KiB / 512.00 MiB
 硬盘空间          : 1.22 GiB / 117.56 GiB
 启动盘路径        : /dev/vda1
 系统在线时间      : 0 days, 1 hour 56 min
 负载              : 0.07, 0.05, 0.08
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 IPV4 ASN          : AS395092 Shock Hosting LLC
 IPV4 位置         : Singapore / Singapore / SG
 IPV6 ASN          : AS395092 Shock Hosting LLC
 IPV6 位置         : United States
 IPV6 子网掩码     : 128
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          4653 Scores
 4 线程测试(多核)得分:          18640 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          51604.07 MB/s
 单线程写测试:          31588.68 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         115 MB/s (27.96 IOPS, 0.92s))           147 MB/s (35865 IOPS, 0.71s)
 1GB-1M Block           1.4 GB/s (1368 IOPS, 0.73s)             4.7 GB/s (4495 IOPS, 0.22s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 437.88 MB/s (109.4k) | 5.44 GB/s    (85.1k)
Write      | 439.03 MB/s (109.7k) | 5.47 GB/s    (85.5k)
Total      | 876.91 MB/s (219.2k) | 10.92 GB/s  (170.6k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 23.48 GB/s   (45.8k) | 30.29 GB/s   (29.5k)
Write      | 24.72 GB/s   (48.2k) | 32.30 GB/s   (31.5k)
Total      | 48.21 GB/s   (94.1k) | 62.60 GB/s   (61.1k)
正在并发测试中，大概2~3分钟无输出，请耐心等待。。。
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：新加坡
[IPV6]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：美国
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN11S18)
[IPV6]
连接方式: Youtube Video Server
视频缓存节点地域: 新加坡 新加坡/樟宜  (SIN11S18)
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：SG 区
[IPV6]
当前出口所在地区解锁DisneyPlus
区域：SG 区
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: SG)
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes
 Amazon Prime Video:                    Yes (Region: SG)
 TVBAnywhere+:                          Yes
 iQyi Oversea Region:                   SG
 YouTube CDN:                           Singapore 
 Netflix Preferred CDN:                 Singapore  
 Spotify Registration:                  Yes (Region: SG)
 Steam Currency:                        SGD
 ChatGPT:                               Yes
 Bing Region:                           SG
 Wikipedia Editability:                 Yes
 Instagram Licensed Audio:              Yes
 ---Forum---
 Reddit:                                No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
============[ Multination ]============
 Dazn:                                  Failed (Network Connection)
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       No  (Region: CN) 
 Amazon Prime Video:                    Unsupported
 TVBAnywhere+:                          Failed (Network Connection)
 iQyi Oversea Region:                   Failed
 YouTube CDN:                           Singapore 
 Netflix Preferred CDN:                 Singapore  
 Spotify Registration:                  Yes (Region: US)
 Steam Currency:                        Failed (Network Connection)
 ChatGPT:                               Failed
 Bing Region:                           US
 Wikipedia Editability:                 Yes
 Instagram Licensed Audio:              No
 ---Forum---
 Reddit:                                Failed (Network Connection)
=======================================
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【SG】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2] 
信任得分(越高越好): 39 [8] 
VPN得分(越低越好): 13 [8] 
代理得分(越低越好): 81 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 89 [8] 
欺诈得分(越低越好): 33 [1] 65 [E]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0.0008 (Low) [A] 
公司滥用得分(越低越好): 0.0039 (Low) [A] 
威胁级别: low [9 B] 
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2] 
安全信息:
使用类型: hosting [0 7 9 A] DataCenter/WebHosting/Transit [3]
公司类型: hosting [0 7] business [A]
是否云提供商: Yes [7 D] 
是否数据中心: No [8] Yes [0 1 5 6 A]
是否移动设备: Yes [E] No [5 A]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B D]
是否VPN: No [0 1 6 7 A C D] Yes [E]
是否TorExit: No [1 7 D] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A D E] 
是否威胁: No [7 8 D] 
是否中继: No [0 7 8 D] 
是否Bogon: No [7 8 A D] 
是否机器人: No [E] 
DNS-黑名单: 338(Total_Check) 0(Clean) 8(Blacklisted) 84(Other) 
IPV6:
安全得分:
欺诈得分(越低越好): 0 [1] 
滥用得分(越低越好): 0 [3]
ASN滥用得分(越低越好): 0.0008 (Low) [A] 
公司滥用得分(越低越好): 0 (Very Low) [A] 
威胁级别: low [B] 
安全信息:
使用类型: hosting [A] DataCenter/WebHosting/Transit [3]
公司类型: hosting [A] 
是否云提供商: Yes [D] 
是否数据中心: Yes [1 A] 
是否移动设备: No [A]
是否代理: No [1 A B D] 
是否VPN: No [1 A D] 
是否Tor: No [1 3 A B D] 
是否Tor出口: No [1 D] 
是否网络爬虫: No [A B] 
是否匿名: No [1 D] 
是否攻击者: No [D] 
是否滥用者: No [A D] 
是否威胁: No [D] 
是否中继: No [D] 
是否Bogon: No [A D] 
DNS-黑名单: 338(Total_Check) 0(Clean) 0(Blacklisted) 338(Other) 
Google搜索可行性：YES
端口25检测:
  本地: No
  163邮箱: Yes
  gmail邮箱: Yes
  outlook邮箱: Yes
  qq邮箱: Yes
  yandex邮箱: Yes
----------------三网回程--基于oneclickvirt/backtrace开源----------------
国家: SG 城市: Singapore 服务商: AS395092 Shock Hosting LLC
北京电信 219.141.140.10  检测不到回程路由节点的IP地址
北京联通 202.106.195.68  联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信163    [普通线路] 
上海联通 210.22.97.1     联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信163    [普通线路] 
广州联通 210.21.196.6    联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信163    [普通线路] 
成都联通 119.6.6.6       联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
0.19 ms  AS136557  新加坡, hostuniversal.com.au
1.41 ms  AS174  新加坡, cogentco.com
1.87 ms  AS174  新加坡, cogentco.com
1.43 ms  AS174  新加坡, cogentco.com
166.78 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
166.75 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
204.25 ms  AS174  美国, 加利福尼亚州, 圣何塞, cogentco.com
202.81 ms  AS174  美国, 加利福尼亚州, 圣何塞, cogentco.com
203.93 ms  AS174  美国, 加利福尼亚州, 圣何塞, cogentco.com
350.77 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
353.98 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
0.18 ms  AS136557  新加坡, hostuniversal.com.au
1.42 ms  AS174  新加坡, cogentco.com
1.69 ms  AS174  新加坡, cogentco.com
1.39 ms  AS174  新加坡, cogentco.com
170.77 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
170.91 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
449.11 ms  AS174  美国, 加利福尼亚州, 洛杉矶, cogentco.com
413.75 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
448.69 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
454.64 ms  AS17816  中国, 广东, 广州, chinaunicom.com, 联通
444.58 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
435.50 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
0.24 ms  AS136557  新加坡, hostuniversal.com.au
0.99 ms  AS136557  新加坡, hostuniversal.com.au
1.03 ms  AS60068  新加坡, datacamp.co.uk
1.04 ms  AS60068  新加坡, datacamp.co.uk
38.49 ms  AS60068  新加坡, datacamp.co.uk
33.89 ms  AS58453  中国, 香港, chinamobile.com, 移动
39.56 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
40.08 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
39.84 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
49.12 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
54.09 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
47.23 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    935.22 Mbps     944.24 Mbps     0.24     0.0%
新加坡           932.90 Mbps     944.57 Mbps     1.15     0.0%
中国香港         95.35 Mbps      95.21 Mbps      41.47    0.0%
联通海南         76.85 Mbps      5.41 Mbps       303.91   NULL
联通WuXi         14.29 Mbps      5.20 Mbps       317.27   8.8%
电信合肥5G       3.43 Mbps       0.56 Mbps       631.08   0.3%
------------------------------------------------------------------------
 总共花费      : 3 分 56 秒
 时间          : Sun May 26 01:00:10 EDT 2024
------------------------------------------------------------------------
```

### GeekBench5 测试

```shell
Geekbench 5 测试结果

系统信息
  Operating System              Debian GNU/Linux 12 (bookworm)
  Kernel                        Linux 6.1.0-9-amd64 x86_64
  Model                         Red Hat KVM
  Motherboard                   N/A
  BIOS                          SeaBIOS 1.16.0-4.module_el8.8.0+3612+f18d2b89

处理器信息
  Name                          AMD EPYC 9354P 32-Core Processor               
  Topology                      4 Processors, 4 Cores
  Identifier                    AuthenticAMD Family 25 Model 17 Stepping 1
  Base Frequency                3.25 GHz
  L1 Instruction Cache          64.0 KB
  L1 Data Cache                 64.0 KB
  L2 Cache                      512 KB
  L3 Cache                      16.0 MB

内存信息
  Size                          7.75 GB

单核测试分数：1582
多核测试分数：6132
详细结果链接：https://browser.geekbench.com/v5/cpu/22518965
可供参考链接：https://browser.geekbench.com/search?k=v5_cpu&q=AMD%20EPYC%209354P
```

### byte-unixbench 性能测试

```shell
========================================================================
   BYTE UNIX Benchmarks (Version 5.1.3)

   System: catcat.blog: GNU/Linux
   OS: GNU/Linux -- 6.1.0-9-amd64 -- #1 SMP PREEMPT_DYNAMIC Debian 6.1.27-1 (2023-05-08)
   Machine: x86_64 (unknown)
   Language: en_US.utf8 (charmap="UTF-8", collate="UTF-8")
   CPU 0: AMD EPYC 9354P 32-Core Processor (6500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 1: AMD EPYC 9354P 32-Core Processor (6500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 2: AMD EPYC 9354P 32-Core Processor (6500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   CPU 3: AMD EPYC 9354P 32-Core Processor (6500.0 bogomips)
          x86-64, MMX, AMD MMX, Physical Address Ext, SYSENTER/SYSEXIT, AMD virtualization, SYSCALL/SYSRET
   01:06:39 up  2:06,  2 users,  load average: 0.40, 0.29, 0.18; runlevel 5

------------------------------------------------------------------------
Benchmark Run: Sun May 26 2024 01:06:39 - 01:34:35
4 CPUs in system; running 1 parallel copy of tests

Dhrystone 2 using register variables       58037665.6 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                     9066.2 MWIPS (9.9 s, 7 samples)
Execl Throughput                               4945.8 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1825389.6 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          494654.0 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       6141574.6 KBps  (30.0 s, 2 samples)
Pipe Throughput                             2777501.9 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 215914.9 lps   (10.0 s, 7 samples)
Process Creation                               9430.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  15253.0 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   4455.1 lpm   (60.0 s, 2 samples)
System Call Overhead                        2945436.8 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0   58037665.6   4973.2
Double-Precision Whetstone                       55.0       9066.2   1648.4
Execl Throughput                                 43.0       4945.8   1150.2
File Copy 1024 bufsize 2000 maxblocks          3960.0    1825389.6   4609.6
File Copy 256 bufsize 500 maxblocks            1655.0     494654.0   2988.8
File Copy 4096 bufsize 8000 maxblocks          5800.0    6141574.6  10588.9
Pipe Throughput                               12440.0    2777501.9   2232.7
Pipe-based Context Switching                   4000.0     215914.9    539.8
Process Creation                                126.0       9430.7    748.5
Shell Scripts (1 concurrent)                     42.4      15253.0   3597.4
Shell Scripts (8 concurrent)                      6.0       4455.1   7425.2
System Call Overhead                          15000.0    2945436.8   1963.6
                                                                   ========
System Benchmarks Index Score                                        2518.4

------------------------------------------------------------------------
Benchmark Run: Sun May 26 2024 01:34:35 - 02:02:32
4 CPUs in system; running 4 parallel copies of tests

Dhrystone 2 using register variables      233438082.2 lps   (10.0 s, 7 samples)
Double-Precision Whetstone                    36269.2 MWIPS (9.9 s, 7 samples)
Execl Throughput                              13626.2 lps   (30.0 s, 2 samples)
File Copy 1024 bufsize 2000 maxblocks       1363114.9 KBps  (30.0 s, 2 samples)
File Copy 256 bufsize 500 maxblocks          354438.1 KBps  (30.0 s, 2 samples)
File Copy 4096 bufsize 8000 maxblocks       3951830.0 KBps  (30.0 s, 2 samples)
Pipe Throughput                            11054727.9 lps   (10.0 s, 7 samples)
Pipe-based Context Switching                 949058.0 lps   (10.0 s, 7 samples)
Process Creation                              42866.7 lps   (30.0 s, 2 samples)
Shell Scripts (1 concurrent)                  36976.7 lpm   (60.0 s, 2 samples)
Shell Scripts (8 concurrent)                   5073.7 lpm   (60.0 s, 2 samples)
System Call Overhead                        3740961.0 lps   (10.0 s, 7 samples)

System Benchmarks Index Values               BASELINE       RESULT    INDEX
Dhrystone 2 using register variables         116700.0  233438082.2  20003.3
Double-Precision Whetstone                       55.0      36269.2   6594.4
Execl Throughput                                 43.0      13626.2   3168.9
File Copy 1024 bufsize 2000 maxblocks          3960.0    1363114.9   3442.2
File Copy 256 bufsize 500 maxblocks            1655.0     354438.1   2141.6
File Copy 4096 bufsize 8000 maxblocks          5800.0    3951830.0   6813.5
Pipe Throughput                               12440.0   11054727.9   8886.4
Pipe-based Context Switching                   4000.0     949058.0   2372.6
Process Creation                                126.0      42866.7   3402.1
Shell Scripts (1 concurrent)                     42.4      36976.7   8720.9
Shell Scripts (8 concurrent)                      6.0       5073.7   8456.2
System Call Overhead                          15000.0    3740961.0   2494.0
                                                                   ========
System Benchmarks Index Score                                        5052.9

======= Script description and score comparison completed! ======= 
```

### [PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
AMD EPYC 9354P 32-Core Processor (x86_64)
4 cores @ 0 MHz  |  7.8 GiB RAM
Number of Processes: 4  |  Test Iterations: 1  |  Test Duration: Medium
--------------------------------------------------------------------------------
CPU Mark:                          10944
  Integer Math                     24895 Million Operations/s
  Floating Point Math              21875 Million Operations/s
  Prime Numbers                    82.1 Million Primes/s
  Sorting                          15630 Thousand Strings/s
  Encryption                       5402 MB/s
  Compression                      108404 KB/s
  CPU Single Threaded              2961 Million Operations/s
  Physics                          1448 Frames/s
  Extended Instructions (SSE)      9984 Million Matrices/s

Memory Mark:                       2651
  Database Operations              4450 Thousand Operations/s
  Memory Read Cached               28678 MB/s
  Memory Read Uncached             27588 MB/s
  Memory Write                     27090 MB/s
  Available RAM                    6744 Megabytes
  Memory Latency                   66 Nanoseconds
  Memory Threaded                  111582 MB/s
--------------------------------------------------------------------------------
```

### IP质量体检报告

#### IPv4

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/image-44.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/image-44.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/image-44.jpg" alt="" loading="lazy">
</picture>

#### IPv6

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/image-45.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/image-45.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/image-45.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/image-46.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/image-46.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/image-46.jpg" alt="" loading="lazy">
</picture>

### 流媒体测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/image-47.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/image-47.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/image-47.jpg" alt="" loading="lazy">
</picture>

### monster 测试

```shell
---------------------------------------------------------------------------
 OS           : Debian GNU/Linux 12 (64 Bit)
 Virt/Kernel  : KVM / 6.1.0-9-amd64
 CPU Model    : AMD EPYC 9354P 32-Core Processor
 CPU Cores    : 4 @ 3250.000 MHz x86_64 512 KB Cache
 CPU Flags    : AES-NI Enabled & VM-x/AMD-V Enabled
 Load Average : 0.00, 0.00, 0.09
 Total Space  : 118G (1.6G ~2% used)
 Total RAM    : 7939 MB (451 MB + 1090 MB Buff in use)
 Total SWAP   : 511 MB (0 MB in use)
 IPv4/IPv6    : ✔ Online / ✔ Online
 Uptime       : 0 days 4:17
---------------------------------------------------------------------------
 Location     : Singapore, Singapore (North West)
 ASN & ISP    : AS395092, Shock Hosting LLC / Shock
---------------------------------------------------------------------------

 ## Geekbench v6 CPU Benchmark:

  Single Core : 2181  (THE BEAST)
   Multi Core : 7004

 ## IO Test

 CPU Speed:
    bzip2     : 177 MB/s
   sha256     : 360 MB/s
   md5sum     : 626 MB/s

 RAM Speed:
   Avg. write : 5734.4 MB/s
   Avg. read  : 11264.0 MB/s

 Disk Speed:
   1st run    : 785 MB/s
   2nd run    : 755 MB/s
   3rd run    : 774 MB/s
   -----------------------
   Average    : 771.3 MB/s
```

### **Bunny.net**

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/05/image-48.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/05/image-48.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/05/image-48.jpg" alt="" loading="lazy">
</picture>