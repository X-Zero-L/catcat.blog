---
tags: [hk-server]
title: "腾讯云香港 推出 优选流量包 提供中国大陆与中国香港、新加坡高质量的网络互通"
published: 2024-04-29
---

今天早上收到了腾讯云给我发来的新品内测，终于能解决腾讯云HK的仰卧起坐问题。目前价格来说非常贵，512G 6个月需要接近1k人民币。

和腾讯那边产品沟通了一下，512G 是六个月的使用量，流量是只计算流出。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-12.jpg" alt="" loading="lazy">
</picture>

## 产品介绍：

轻量优选流量包（Lighthouse Quality Traffic Package）是一种预付费公网流量套餐，客户可独立购买，并灵活选择抵扣轻量应用服务器的流量消耗。相比轻量套餐内流量包，轻量优选流量包提供中国香港、新加坡回中国大陆更低时延、更高质量的网络互通。

## 产品优势

轻量优选流量包采用精品 BGP IP 专属线路，避免绕行国际运营商出口网络；延时更低，可有效提升境外业务对中国大陆用户覆盖质量。

## 应用场景

轻量优选流量包可提供中国大陆与中国香港、新加坡高质量的网络互通。

## 产品价格

目前价格是非常昂贵的。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-13.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-13.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-13.jpg" alt="" loading="lazy">
</picture>

## 开启方式

1\. 登录 [轻量服务器控制台](https://console.cloud.tencent.com/lighthouse/instance/index)。

2\. 在卡片视图页面，找到对应实例，单击实例 ID 旁边加速**图标**，可单击**开启/关闭**轻量优选流量包抵扣。

3\. 在列表视图页面，批量选中实例 ID，单击开启**加速操作**，可批量开启/关闭轻量优选流量包抵扣。

4\. 也可进入某个实例详情页，找到**网络**模块，单击**优选流量包**按钮，可开启/关闭轻量优选流量包抵扣。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-14.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-14.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-14.jpg" alt="" loading="lazy">
</picture>

## 测评

### 三网去程测试

因为涉及到IP,这边不过多展示。只总结一下

苏州移动去程走 AS58453

无锡电信 走 58.215 再经202.97

上海联通 走 AS AS10099

### 三网路由测试

#### 深圳电信

```shell
No:1/9 Traceroute to 中国 深圳 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 104.21.40.176 - 38.51ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes packets
1   *
2   *
3   30.1.148.13     *                         DOD          
                                              1.18 ms
4   10.196.90.81    *                         RFC1918          
                                              1.59 ms
5   11.50.201.58    *                         DOD          
                                              2.14 ms
6   11.48.233.53    *                         DOD          
                                              1.26 ms
7   223.121.3.29    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              80.96 ms
8   223.120.22.69   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.75 ms
9   *
10  *
11  *
12  221.183.89.14   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              31.74 ms
13  *
14  *
15  *
16  *
17  *
18  119.147.61.166  AS4134   [CHINANET-GD]    中国 广东 深圳 福田 chinatelecom.com.cn 
                                              40.09 ms
19  59.36.216.1     AS4134                    中国 广东 江门市  chinatelecom.com.cn  电信
                                              40.59 ms
```

#### 上海电信

```shell
No:2/9 Traceroute to 中国 上海 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 172.67.155.192 - 32.02ms - Misaka.HKG
2024/04/29 10:26:29 dial: websocket: bad handshake
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes packets
2024/04/29 10:26:29 dial: websocket: bad handshake
2024/04/29 10:26:29 dial: websocket: bad handshake
1   *
2   *
3   *
4   10.196.90.89    *                         RFC1918          
                                              1.68 ms
5   11.48.233.61    *                         DOD          
                                              1.31 ms
6   11.50.201.54    *                         DOD          
                                              1.31 ms
7   223.121.3.29    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              2.22 ms
8   223.120.22.69   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              3.30 ms
9   *
10  221.183.89.178  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              30.28 ms
11  *
12  *
13  *
14  *
15  202.97.87.121   AS4134   [CHINANET-BB]    中国 上海   chinatelecom.com.cn  电信
                                              32.00 ms
16  *
17  *
18  *
19  101.226.41.65   AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              30.95 ms
```

#### 北京电信

```shell
No:3/9 Traceroute to 中国 北京 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 172.67.155.192 - 37.88ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes packets
1   *
2   *
3   *
4   10.196.90.85    *                         RFC1918          
                                              1.42 ms
5   11.50.201.60    *                         DOD          
                                              1.89 ms
6   11.50.201.51    *                         DOD          
                                              1.28 ms
7   *
8   223.120.2.125   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              2.94 ms
9   223.120.3.90    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              3.80 ms
10  223.118.2.97    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.91 ms
11  203.215.232.201 AS4134   [CHINANET-FJ]    中国 香港   chinatelecom.com.cn  电信
                                              44.89 ms
12  202.97.39.105   AS4134   [CHINANET-BB]    中国 北京   chinatelecom.com.cn  电信
                                              39.34 ms
13  *
14  *
15  *
16  *
17  *
18  220.181.53.1    AS23724  [CHINANET-IDC]   中国 北京   bjtelecom.net  电信
                                              46.06 ms
```

#### 广州联通

```shell
No:4/9 Traceroute to 中国 广州 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 104.21.40.176 - 41.45ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes packets
1   *
2   *
3   *
4   10.196.90.85    *                         RFC1918          
                                              1.86 ms
5   11.50.201.60    *                         DOD          
                                              2.06 ms
6   11.48.233.51    *                         DOD          
                                              1.76 ms
7   223.121.2.89    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              1.98 ms
8   223.120.2.125   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              2.96 ms
9   *
10  221.183.89.174  AS9808   [CMNET]          中国 上海  回国到达层 chinamobile.com  移动
                                              30.69 ms
11  *
12  221.183.89.50   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              32.32 ms
13  *
14  *
15  219.158.46.149  AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              44.19 ms
16  219.158.125.161 AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn 
                                              38.10 ms
17  120.83.0.166    AS17816  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              39.37 ms
18  120.80.170.254  AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              33.78 ms
19  *
20  *
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
```

#### 上海联通

```shell
No:5/9 Traceroute to 中国 上海 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 104.21.40.176 - 32.42ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes packets
1   *
2   *
3   30.1.148.33     *                         DOD          
                                              1.40 ms
4   10.196.90.85    *                         RFC1918          
                                              1.50 ms
5   11.48.233.55    *                         DOD          
                                              1.88 ms
6   11.48.233.51    *                         DOD          
                                              1.44 ms
7   223.121.2.89    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              2.71 ms
8   223.120.2.125   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              3.03 ms
9   *
10  221.183.89.182  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              30.47 ms
11  221.183.89.33   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              29.70 ms
12  221.183.89.46   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              32.85 ms
13  221.183.90.254  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              31.49 ms
14  219.158.46.141  AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              43.14 ms
15  *
16  *
17  210.22.66.178   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              34.02 ms
18  112.65.95.129   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              34.48 ms
```

#### 北京联通

```shell
No:6/9 Traceroute to 中国 北京 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 172.67.155.192 - 33.08ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes packets
1   *
2   *
3   *
4   10.196.90.85    *                         RFC1918          
                                              1.82 ms
5   11.50.201.53    *                         DOD          
                                              1.70 ms
6   11.50.201.62    *                         DOD          
                                              1.37 ms
7   223.121.2.89    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              1.96 ms
8   223.120.2.125   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              2.87 ms
9   *
10  221.183.89.178  AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              29.86 ms
11  221.183.89.69   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              30.62 ms
12  *
13  *
14  *
15  221.183.128.118 AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              51.12 ms
16  *
17  *
18  61.49.140.217   AS4808                    中国 北京   chinaunicom.cn  联通
                                              48.20 ms
```

#### 深圳移动

```shell
No:7/9 Traceroute to 中国 深圳 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 104.21.40.176 - 39.54ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 120.233.53.1, 30 hops max, 52 bytes packets
1   *
2   *
3   *
4   10.196.90.69    *                         RFC1918          
                                              1.92 ms
5   11.48.233.52    *                         DOD          
                                              3.31 ms
6   11.50.201.51    *                         DOD          
                                              1.23 ms
7   223.121.2.89    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              1.94 ms
8   223.120.22.69   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.58 ms
9   223.120.22.202  AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              10.36 ms
10  221.183.92.189  AS9808   [CMNET]          中国 安徽 合肥市  chinamobile.com  移动
                                              9.10 ms
11  221.183.92.213  AS9808   [CMNET]          中国 安徽 合肥市  chinamobile.com  移动
                                              14.71 ms
12  221.183.166.213 AS9808   [CMNET]          中国 湖北 武汉市  chinamobile.com 
                                              14.70 ms
13  *
14  *
15  *
16  120.233.53.1    AS56040  [APNIC-AP]       中国 广东 深圳  chinamobile.com  移动
                                              22.19 ms
```

#### 上海移动

```shell
No:8/9 Traceroute to 中国 上海 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 172.67.155.192 - 38.31ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes packets
1   *
2   *
3   *
4   10.196.90.61    *                         RFC1918          
                                              1.67 ms
5   11.50.201.58    *                         DOD          
                                              1.71 ms
6   11.50.201.61    *                         DOD          
                                              1.15 ms
7   223.121.2.89    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              2.32 ms
8   223.120.22.65   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              2.63 ms
9   223.120.3.202   AS58453  [CMI-INT]        中国 上海   cmi.chinamobile.com  移动
                                              29.39 ms
10  221.183.89.174  AS9808   [CMNET]          中国 上海  回国到达层 chinamobile.com  移动
                                              31.17 ms
11  221.183.89.33   AS9808   [CMNET]          中国 上海   chinamobile.com  移动
                                              29.91 ms
12  *
13  *
14  *
15  183.194.216.129 AS9808   [APNIC-AP]       中国 上海   chinamobile.com  移动
                                              32.23 ms
```

#### 北京移动

```shell
No:9/9 Traceroute to 中国 北京 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.0 2024-04-18T06:38:21Z 2cb13be
[NextTrace API] preferred API IP - 172.67.155.192 - 41.36ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes packets
1   *
2   *
3   30.1.147.233    *                         DOD          
                                              1.13 ms
4   10.196.90.77    *                         RFC1918          
                                              1.46 ms
5   11.50.201.54    *                         DOD          
                                              1.89 ms
6   11.48.233.51    *                         DOD          
                                              0.87 ms
7   223.121.3.29    AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              2.18 ms
8   223.120.2.125   AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com 
                                              3.08 ms
9   223.120.22.142  AS58453  [CMI-INT]        中国 香港   cmi.chinamobile.com  移动
                                              39.51 ms
10  221.183.55.110  AS9808   [CMNET]          中国 北京  回国到达层 chinamobile.com  移动
                                              39.61 ms
11  221.183.46.250  AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              48.38 ms
12  221.183.89.102  AS9808   [CMNET]          中国 北京   chinamobile.com  移动
                                              48.02 ms
13  *
14  *
15  *
16  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              49.64 ms
17  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              50.48 ms
18  *
19  *
20  211.136.25.153  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              49.60 ms
```

### 国内延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-15.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-15.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-15.jpg" alt="" loading="lazy">
</picture>

### 探针未接入加速前

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-16.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-16.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-16.jpg" alt="" loading="lazy">
</picture>

### 探针接入加速后

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/04/image-17.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/04/image-17.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/04/image-17.jpg" alt="" loading="lazy">
</picture>

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : AMD EPYC 7K62 48-Core Processor
 CPU 核心数        : 2
 CPU 频率          : 2595.124 MHz
 CPU 缓存          : L1: 128.00 KB / L2: 8.00 MB / L3: 16.00 MB
 硬盘空间          : 3.86 GiB / 39.26 GiB
 启动盘路径        : /dev/vda1
 内存              : 426.43 MiB / 1.92 GiB
 Swap              : [ no swap partition or swap file detected ]
 系统在线时间      : 17 days, 22 hour 20 min
 负载              : 0.07, 0.02, 0.00
 系统              : Debian GNU/Linux 11 (bullseye) (x86_64)
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 架构              : x86_64 (64 Bit)
 内核              : 5.10.0-26-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Restric NAT
 IPV4 ASN          : AS132203 Tencent Building, Kejizhongyi Avenue
 IPV4 位置         : Hong Kong / Hong Kong / HK
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          1606 Scores
 2 线程测试(多核)得分:          1717 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          42385.97 MB/s
 单线程写测试:          18986.77 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         12.0 MB/s (2940 IOPS, 8.71s)            19.2 MB/s (4681 IOPS, 5.47s)
 1GB-1M Block           213 MB/s (203 IOPS, 4.92s)              301 MB/s (286 IOPS, 3.49s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 87.96 MB/s   (21.9k) | 282.31 MB/s   (4.4k)
Write      | 88.19 MB/s   (22.0k) | 283.79 MB/s   (4.4k)
Total      | 176.16 MB/s  (44.0k) | 566.10 MB/s   (8.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 261.97 MB/s    (511) | 256.93 MB/s    (250)
Write      | 275.89 MB/s    (538) | 274.05 MB/s    (267)
Total      | 537.86 MB/s   (1.0k) | 530.99 MB/s    (517)
---------------------流媒体解锁--感谢sjlleo开源-------------------------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Youtube----------------
[IPv4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG12S20)
Youtube识别地域: 香港(HK)
----------------Netflix----------------
[IPv4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
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
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: HK)
 Amazon Prime Video:                    Yes (Region: HK)
 TVBAnywhere+:                          No
 iQyi Oversea Region:                   HK
 Viu.com:                               Yes (Region: HK)
 YouTube CDN:                           Hong Kong 
 Netflix Preferred CDN:                 Hong Kong  
 Spotify Registration:                  No
 Steam Currency:                        HKD
 ChatGPT:                               Only Available with Mobile APP
 Bing Region:                           HK
 Instagram Licensed Audio:              No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         Failed
-------------------欺诈分数以及IP质量检测--本脚本原创-------------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  ① | scamalytics数据库 ②  | virustotal数据库  ③ | abuseipdb数据库 ④  | ip2location数据库   ⑤
ip-api数据库  ⑥ | ipwhois数据库     ⑦  | ipregistry数据库  ⑧ | ipdata数据库    ⑨  | ipgeolocation数据库 ⑩
ipapiis数据库 ⑪ | ipapicom数据库    ⑫  | abstractapi数据库 ⑬ | ipqualityscore数据库 ⑭ 
欺诈分数(越低越好): 0⑤  abuse得分(越低越好): 0⑤  0.0076 (Low)⑪  威胁等级: low②  
IP类型: 
  使用类型(usage_type):hosting①  Data Center/Web Hosting/Transit⑤  hosting⑧  business⑨  isp⑪  
  公司类型(company_type):hosting①  hosting⑧  business⑪  
  云服务提供商(cloud_provider):  Yes⑧ 
  数据中心(datacenter):  Yes⑥   No⑨ ⑪ 
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
国家: HK 城市: Hong Kong 服务商: AS132203 Tencent Building, Kejizhongyi Avenue
北京电信 219.141.136.12  移动CMI [普通线路]           
北京联通 202.106.50.1    移动CMI [普通线路]           
北京移动 221.179.155.161 移动CMI [普通线路]           
上海电信 202.96.209.133  移动CMI [普通线路]           
上海联通 210.22.97.1     移动CMI [普通线路]           
上海移动 211.136.112.200 移动CMI [普通线路]           
广州电信 58.60.188.222   移动CMI [普通线路]           
广州联通 210.21.196.6    移动CMI [普通线路]           
广州移动 120.196.165.24  移动CMI [普通线路]           
成都电信 61.139.2.69     移动CMI [普通线路]           
成都联通 119.6.6.6       移动CMI [普通线路]           
成都移动 211.137.96.205  移动CMI [普通线路]           
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
1.39 ms  AS749  美国, defense.gov
1.34 ms  *  局域网
2.02 ms  AS749  美国, defense.gov
1.58 ms  AS749  美国, defense.gov
2.72 ms  AS58453  中国, 香港, chinamobile.com, 移动
3.71 ms  AS58453  中国, 香港, chinamobile.com, 移动
29.13 ms  AS58453  中国, 上海, chinamobile.com, 移动
30.20 ms  AS9808  中国, 上海, chinamobile.com, 移动
29.27 ms  AS9808  中国, 上海, chinamobile.com, 移动
31.38 ms  AS9808  中国, 上海, chinamobile.com, 移动
32.68 ms  AS4134  中国, 广东, 广州, chinatelecom.com.cn, 电信
35.49 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
34.96 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
1.95 ms  *  局域网
1.71 ms  AS749  美国, defense.gov
1.23 ms  AS749  美国, defense.gov
2.93 ms  AS58453  中国, 香港, chinamobile.com, 移动
30.44 ms  AS9808  中国, 上海, chinamobile.com, 移动
34.91 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
37.44 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
38.14 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
40.90 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
40.52 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
1.25 ms  AS749  美国, defense.gov
1.32 ms  *  局域网
1.34 ms  AS749  美国, defense.gov
0.89 ms  AS749  美国, defense.gov
6.24 ms  AS58453  中国, 香港, chinamobile.com, 移动
2.69 ms  AS58453  中国, 香港, chinamobile.com, 移动
7.89 ms  AS58453  中国, 广东, 广州, chinamobile.com, 移动
7.56 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
8.55 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
11.52 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
12.74 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
11.89 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    19.30 Mbps      190.05 Mbps     2.12     NULL
中国香港         19.20 Mbps      259.87 Mbps     2.15     0.0%
新加坡           19.31 Mbps      347.84 Mbps     31.59    9.3%
联通上海5G       19.36 Mbps      34.01 Mbps      34.16    0.0%
联通WuXi         19.39 Mbps      304.85 Mbps     51.60    0.3%
```