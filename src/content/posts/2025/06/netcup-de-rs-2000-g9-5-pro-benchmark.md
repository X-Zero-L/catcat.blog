---
title: "Netcup 德国 RS 2000 G9.5 PRO 测试"
published: 2025-06-25
categories: 
  - "vps"
  - "eu-server"
---

**netcup的六月活动出人意料的返场了之前炙手可热的RS2000系列，而且增量降价。官网未返场前，这款机器目前市场已经炒到溢价300在售，不知道多少人溢价收的看到这个心碎一地。此外美国此次还有抽奖活动，有概率开到G11的9634**。**德国款存在IO不一致的情况，有的机器io非常好，有的io非常差，不排除动态分配到刷子多的邻居node上。**

**注册教程：[](https://catcat.blog/netcup-signup.html)[Netcup 注册免税入坑指南](https://catcat.blog/netcup-signup.html)**

**大多数很关心的G9.5限速问题**，**基本上和之前的一致，但是具体还需要测试。**

```
1. 基础带宽保障
默认带宽：根服务器默认享有 1 Gbps 的最低带宽保障，即使其网卡为 2.5 Gbps（即理论上限为 2.5 Gbps）。

共享原则：在未触发限制条件时，服务器可动态使用超过 1 Gbps 的带宽（最高 2.5 Gbps），但需与其他用户公平共享网络资源。

2. 流量与带宽限制的触发条件
当满足以下 两个条件同时成立 时，服务器带宽会被限制至 200 Mbps：

条件一：月度总流量超标
阈值：当月流量 > 120 TB

计算示例：
若以 1 Gbps 速度持续传输，理论月流量 ≈ 1 Gbps × 30天 ≈ 324 TB。
实际阈值 120 TB 约为理论值的 37%，表明政策允许较高流量，但禁止极端占用。

条件二：持续高带宽占用
阈值：连续 60 分钟 以上平均带宽 > 1 Gbps

监控逻辑：
系统会检测滑动时间窗口（如每分钟采样），若 60 分钟内的平均值持续超过 1 Gbps，则触发限制。

例外情况：
短期突发流量（如 10 分钟跑满 2.5 Gbps）不会触发，因时间窗口未达标。

3. 限制措施
带宽限速：触发后，服务器连接将被限制至 200 Mbps（原保障值的 20%）。

目的：避免单用户长期占用过高带宽，确保其他客户的网络性能不受影响（公平使用原则）。

4. 关键场景分析
合规使用示例：

日均流量 ≤ 4 TB（月 120 TB），且无长时间满带宽占用 → 保持 1 Gbps 保障。

突发 2.5 Gbps 传输 30 分钟 → 不触发限制（因时长不足 60 分钟）。

违规使用示例：

连续 2 小时以 1.2 Gbps 传输（平均带宽超标 + 时长超标）→ 限速至 200 Mbps。

月流量达 150 TB（即使带宽使用平稳）→ 限速（需同时检查是否满足条件二）。
```

## 套餐

- **_Provider : Netcup_**

- **_Type/Plan : RS 2000 G9.5 PRO_**

- **_Processor : AMD EPYC 7702P 64-Core Processor_**

- **_Num of Core : 6_** **_Cores_**

- **_Memory : 1_****_6_** **_GB_**

- **_Storage : 64_****_0_** **_GB NVMe_**

- **_Bandwidth : 120_****_TB @ 2.5 Gbps IN | 2.5 Gbps OUT_**

- **_Location : DE_**

- **_Price : €10.75_**

## 测评

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 7 hours, 42 minutes
Processor  : AMD EPYC 7702P 64-Core Processor
CPU cores  : 6 @ 1996.246 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ❌ Disabled
RAM        : 15.6 GiB
Swap       : 0.0 KiB
Disk       : 629.8 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-37-amd64
VM Type    : KVM
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : netcup GmbH
ASN        : AS197540 netcup GmbH
Host       : NETCUP-GMBH
Location   : Nuremberg, Bavaria (BY)
Country    : Germany

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/vda3):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 142.24 MB/s  (35.5k) | 1.40 GB/s    (21.9k)
Write      | 142.61 MB/s  (35.6k) | 1.40 GB/s    (22.0k)
Total      | 284.86 MB/s  (71.2k) | 2.81 GB/s    (43.9k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 3.44 GB/s     (6.7k) | 3.53 GB/s     (3.4k)
Write      | 3.62 GB/s     (7.0k) | 3.77 GB/s     (3.6k)
Total      | 7.07 GB/s    (13.8k) | 7.30 GB/s     (7.1k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 2.70 Gbits/sec  | 2.30 Gbits/sec  | 22.6 ms        
Eranium         | Amsterdam, NL (100G)      | 2.71 Gbits/sec  | 2.32 Gbits/sec  | 16.8 ms        
Uztelecom       | Tashkent, UZ (10G)        | 2.48 Gbits/sec  | 1.41 Gbits/sec  | -- 
Leaseweb        | Singapore, SG (10G)       | 1.29 Gbits/sec  | 1.55 Gbits/sec  | -- 
Clouvider       | Los Angeles, CA, US (10G) | 1.08 Gbits/sec  | 678 Mbits/sec   | -- 
Leaseweb        | NYC, NY, US (10G)         | 1.30 Gbits/sec  | 1.82 Gbits/sec  | 91.4 ms        
Edgoo           | Sao Paulo, BR (1G)        | 2.00 Gbits/sec  | 57.6 Mbits/sec  | -- 

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 2.56 Gbits/sec  | 2.28 Gbits/sec  | 22.5 ms        
Eranium         | Amsterdam, NL (100G)      | 2.65 Gbits/sec  | 2.29 Gbits/sec  | 16.7 ms        
Uztelecom       | Tashkent, UZ (10G)        | 2.43 Gbits/sec  | 1.70 Gbits/sec  | 90.6 ms        
Leaseweb        | Singapore, SG (10G)       | 2.28 Gbits/sec  | 1.93 Gbits/sec  | 151 ms         
Clouvider       | Los Angeles, CA, US (10G) | 955 Mbits/sec   | 615 Mbits/sec   | 156 ms         
Leaseweb        | NYC, NY, US (10G)         | 2.49 Gbits/sec  | 1.89 Gbits/sec  | 91.6 ms        
Edgoo           | Sao Paulo, BR (1G)        | 1.19 Gbits/sec  | 32.5 Mbits/sec  | 198 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1047                          
Multi Core      | 4386                          
Full Test       | https://browser.geekbench.com/v6/cpu/12586254

YABS completed in 14 min 33 sec
```

### 流媒体测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/d52e162747da77429320dfa3412cb3fc_720.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/d52e162747da77429320dfa3412cb3fc_720.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/d52e162747da77429320dfa3412cb3fc_720.jpg" alt="" loading="lazy">
</picture>
