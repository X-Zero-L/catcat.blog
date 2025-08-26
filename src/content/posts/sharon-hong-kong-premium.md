---
tags: [hk-server]
title: "Sharon Hong Kong Premium 测试"
published: 2024-06-01
---

今天正值六一，Sharon 在传说中一年的Pre套餐终于迎来的测试。测试期间属于删档，机器持续时间为7天。感谢龙哥送来的六一大礼。线路目前是全网首家的CN2+9929+CMIN2,只能说龙哥还是有实力的，正式价格未知。先图个乐吧，后续正式上线我再买个看看。

> ## 套餐
> 
> **_HKG.PRE.SMALL1.Closed Beta  
> 1 vCPU / 1G RAM  
> 10 GB SSD  
> 300 Mbps Port  
> 300 GB Traffic (Out Only)_**

## 测评

### 回程测试

先来点赛博的

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image.jpg" alt="" loading="lazy">
</picture>

### 多地回程测试

```shell

No:1/9 Traceroute to 中国 深圳 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 80.48ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 59.36.216.1, 30 hops max, 52 bytes payload
1   157.254.53.1    AS396856                  美国 加利福尼亚州 洛杉矶  sharon.io 
                                              3.81 ms
2   9.34.128.76     *                         DOD          
                                              0.47 ms
3   *
4   47.246.61.241   AS24429                   中国 香港   alibabacloud.com 
                                              2.35 ms
5   121.59.101.13   *        [CN2-BB]         中国 香港   电信    
                                              0.58 ms
6   69.194.165.81   *                         中国 香港   电信/CTGNet
                                              1.11 ms
7   *
8   *
9   59.43.16.165    *        [CN2-BackBone]   中国 广东 广州  chinatelecom.cn  电信
                                              13.47 ms
10  202.97.43.81    AS4134   [CHINANET-BB]    中国 广东 广州  www.chinatelecom.com.cn  电信
                                              9.49 ms
11  *
12  119.147.61.26   AS4134   [CHINANET-GD]    中国 广东 深圳  www.chinatelecom.com.cn 
                                              16.61 ms
13  *
14  *
15  *
16  *
17  *
18  *
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

No:2/9 Traceroute to 中国 上海 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 54.79ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 101.226.41.65, 30 hops max, 52 bytes payload
1   157.254.53.1    AS396856                  美国 加利福尼亚州 洛杉矶  sharon.io 
                                              3.75 ms
2   9.34.128.76     *                         DOD          
                                              0.39 ms
3   *
4   47.246.61.241   AS24429                   中国 香港   alibabacloud.com 
                                              1.24 ms
5   121.59.101.105  *        [CN2-BB]         中国 香港   电信    
                                              0.62 ms
6   69.194.165.81   *                         中国 香港   电信/CTGNet
                                              1.09 ms
7   *
8   *
9   59.43.159.97    *        [CN2-BackBone]   中国 上海   chinatelecom.cn  电信
                                              25.94 ms
10  101.95.88.174   AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              26.64 ms
11  *
12  *
13  *
14  *
15  *
16  *
17  *
18  *
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

No:3/9 Traceroute to 中国 北京 电信 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 104.21.40.176 - 45.56ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 220.181.53.1, 30 hops max, 52 bytes payload
1   157.254.53.1    AS396856                  美国 加利福尼亚州 洛杉矶  sharon.io 
                                              5.85 ms
2   9.34.128.76     *                         DOD          
                                              0.45 ms
3   *
4   47.246.61.241   AS24429                   中国 香港   alibabacloud.com 
                                              1.26 ms
5   121.59.101.13   *        [CN2-BB]         中国 香港   电信    
                                              0.56 ms
6   69.194.166.149  AS23764                   中国 香港   chinatelecomglobal.com  电信
                                              1.57 ms
7   203.22.178.98   *        [CTG-CN]         中国 香港  CN2-CTG CTGNet
                                              35.91 ms
8   59.43.182.41    *        [CN2-BackBone]   中国 北京   chinatelecom.cn  电信
                                              37.84 ms
9   59.43.19.97     *        [CN2-BackBone]   中国 北京   chinatelecom.cn  电信
                                              47.72 ms
10  202.97.42.13    AS4134   [CHINANET-BB]    中国 北京   www.chinatelecom.com.cn  电信
                                              39.80 ms
11  *
12  *
13  *
14  *
15  *
16  *
17  *
18  *
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

No:4/9 Traceroute to 中国 广州 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 46.75ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 210.21.4.130, 30 hops max, 52 bytes payload
1   157.254.53.1    AS396856                  美国 加利福尼亚州 洛杉矶  sharon.io 
                                              2.61 ms
2   9.34.128.76     *                         DOD          
                                              0.40 ms
3   *
4   103.214.64.129  AS10099                   中国 香港   chinaunicomglobal.com 
                                              1.29 ms
5   162.245.124.169 AS10099  [CUG-BACKBONE]   中国 香港   chinaunicomglobal.com  联通
                                              7.73 ms
6   202.77.23.157   AS10099  [CUG-BACKBONE]   中国 广东 广州  chinaunicomglobal.com  联通
                                              2.13 ms
7   218.105.7.217   AS9929   [CNC-BACKBONE]   中国 广东 广州  chinaunicom.cn  联通 CUII
                                              11.64 ms
8   218.105.2.157   AS9929   [CNC-BACKBONE]   中国 广东 广州  chinaunicom.cn  联通 CUII
                                              14.19 ms
9   210.14.161.154  *        [APNIC-AP]       中国 广东 广州        
                                              6.91 ms
10  219.158.32.17   AS4837   [CU169-BACKBONE] 中国 广东 广州  chinaunicom.cn  联通
                                              12.29 ms
11  219.158.22.113  AS4837   [CU169-BACKBONE] 中国 北京 北京  chinaunicom.cn 
                                              10.99 ms
12  120.83.0.230    AS17816  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              11.91 ms
13  120.80.79.194   AS17622  [APNIC-AP]       中国 广东 广州  chinaunicom.cn  联通
                                              10.93 ms
14  *
15  *
16  *
17  *
18  *
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

No:5/9 Traceroute to 中国 上海 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 172.67.155.192 - 37.27ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 112.65.95.129, 30 hops max, 52 bytes payload
1   157.254.53.1    AS396856                  美国 加利福尼亚州 洛杉矶  sharon.io 
                                              2.64 ms
2   9.34.128.76     *                         DOD          
                                              0.39 ms
3   *
4   103.214.64.129  AS10099                   中国 香港   chinaunicomglobal.com 
                                              1.34 ms
5   162.245.124.17  AS10099  [CUG-BACKBONE]   中国 香港   chinaunicomglobal.com  联通
                                              4.11 ms
6   202.77.23.157   AS10099  [CUG-BACKBONE]   中国 广东 广州  chinaunicomglobal.com  联通
                                              2.16 ms
7   218.105.11.89   AS9929   [CNC-BACKBONE]   中国 广东 广州  chinaunicom.cn  联通 CUII
                                              8.78 ms
8   218.105.2.161   AS9929   [CNC-BACKBONE]   中国 广东 广州  chinaunicom.cn  联通 CUII
                                              14.60 ms
9   218.105.131.198 AS9929   [CNC-BACKBONE]   中国 上海   chinaunicom.cn  联通 CUII
                                              34.85 ms
10  218.105.2.150   AS9929   [CNC-BACKBONE]   中国 上海   chinaunicom.cn  联通 CUII
                                              40.20 ms
11  219.158.32.1    AS4837   [CU169-BACKBONE] 中国 上海   chinaunicom.cn  联通
                                              40.63 ms
12  *
13  *
14  210.22.66.178   AS17621  [APNIC-AP]       中国 上海   chinaunicom.cn  联通
                                              29.41 ms
15  *
16  *
17  *
18  *
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

No:6/9 Traceroute to 中国 北京 联通 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 104.21.40.176 - 33.58ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 61.49.140.217, 30 hops max, 52 bytes payload
1   157.254.53.1    AS396856                  美国 加利福尼亚州 洛杉矶  sharon.io 
                                              2.97 ms
2   9.34.128.76     *                         DOD          
                                              0.50 ms
3   *
4   103.214.64.129  AS10099                   中国 香港   chinaunicomglobal.com 
                                              1.35 ms
5   43.252.86.185   AS10099                   中国 香港   chinaunicomglobal.com  联通
                                              2.63 ms
6   202.77.23.157   AS10099  [CUG-BACKBONE]   中国 广东 广州  chinaunicomglobal.com  联通
                                              2.02 ms
7   218.105.7.217   AS9929   [CNC-BACKBONE]   中国 广东 广州  chinaunicom.cn  联通 CUII
                                              11.67 ms
8   218.105.2.113   AS9929   [CNC-BACKBONE]   中国 广东 广州  chinaunicom.cn  联通 CUII
                                              11.22 ms
9   218.105.131.121 AS9929   [CNC-BACKBONE]   中国 北京   chinaunicom.cn  联通 CUII
                                              44.28 ms
10  210.78.30.146   *        [CNC-BACKBONE]   中国 北京   chinaunicom.cn  联通 CUII
                                              37.10 ms
11  219.158.32.189  AS4837   [CU169-BACKBONE] 中国 北京   chinaunicom.cn  联通
                                              42.89 ms
12  *
13  202.96.12.206   AS4808   [UNICOM-BJ]      中国 北京   中国联通  联通
                                              41.41 ms
14  *
15  *
16  *
17  61.49.140.217   AS4808                    中国 北京   中国联通  联通
                                              41.37 ms

No:7/9 Traceroute to 中国 深圳 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 104.21.40.176 - 47.42ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 120.233.53.1, 30 hops max, 52 bytes payload
1   157.254.53.1    AS396856                  美国 加利福尼亚州 洛杉矶  sharon.io 
                                              4.56 ms
2   9.34.128.76     *                         DOD          
                                              0.39 ms
3   *
4   223.120.134.37  AS58807  [CMIN2-NET]      中国 香港   cmi.chinamobile.com 
                                              1.13 ms
5   223.120.130.5   AS58807  [CMIN2-NET]      中国 香港   cmi.chinamobile.com  移动
                                              6.05 ms
6   223.120.140.69  AS58807  [CMIN2-NET]      中国 广东 广州  cmi.chinamobile.com  移动
                                              4.50 ms
7   221.183.92.157  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              4.51 ms
8   221.183.89.237  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              5.61 ms
9   221.183.89.218  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              7.89 ms
10  111.24.14.74    AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              9.66 ms
11  *
12  211.136.242.174 AS56040  [CMNET]          中国 广东 广州  chinamobile.com  移动
                                              20.80 ms
13  *
14  *
15  *
16  *
17  *
18  *
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

No:8/9 Traceroute to 中国 上海 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 104.21.40.176 - 52.75ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 183.194.216.129, 30 hops max, 52 bytes payload
1   *
2   9.34.128.76     *                         DOD          
                                              0.63 ms
3   *
4   223.120.134.37  AS58807  [CMIN2-NET]      中国 香港   cmi.chinamobile.com 
                                              1.11 ms
5   223.120.130.5   AS58807  [CMIN2-NET]      中国 香港   cmi.chinamobile.com  移动
                                              4.64 ms
6   223.120.140.65  AS58807  [CMIN2-NET]      中国 广东 广州  cmi.chinamobile.com  移动
                                              4.40 ms
7   221.183.92.153  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              4.62 ms
8   221.183.89.209  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              4.44 ms
9   221.183.89.190  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              9.07 ms
10  *
11  *
12  117.185.10.90   AS9808   [CMNET]          中国 上海   chinamobileltd.com  移动
                                              41.54 ms
13  *
14  *
15  *
16  *
17  *
18  *
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

No:9/9 Traceroute to 中国 北京 移动 (TCP Mode, Max 30 Hop, IPv4)
===================================================================
NextTrace v1.3.1 2024-05-31T02:04:05Z f303397
[NextTrace API] preferred API IP - 104.21.40.176 - 41.55ms - Misaka.HKG
IP Geo Data Provider: LeoMoeAPI
traceroute to 211.136.25.153, 30 hops max, 52 bytes payload
1   157.254.53.1    AS396856                  美国 加利福尼亚州 洛杉矶  sharon.io 
                                              4.99 ms
2   9.34.128.76     *                         DOD          
                                              0.61 ms
3   *
4   223.120.134.37  AS58807  [CMIN2-NET]      中国 香港   cmi.chinamobile.com 
                                              1.74 ms
5   223.120.131.1   AS58807  [CMIN2-NET]      中国 香港   cmi.chinamobile.com  移动
                                              6.51 ms
6   223.120.140.65  AS58807  [CMIN2-NET]      中国 广东 广州  cmi.chinamobile.com  移动
                                              10.71 ms
7   221.183.92.157  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              20.08 ms
8   221.183.89.237  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              4.51 ms
9   221.183.89.214  AS9808   [CMNET]          中国 上海   chinamobileltd.com  移动
                                              8.19 ms
10  111.24.2.145    AS9808   [CMNET]          中国 北京   chinamobileltd.com  移动
                                              39.71 ms
11  *
12  *
13  211.136.63.66   AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              39.98 ms
14  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              45.29 ms
15  211.136.95.226  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              51.54 ms
16  *
17  *
18  211.136.25.153  AS56048  [CMNET]          中国 北京   chinamobile.com  移动
                                              44.53 ms
```

### 本地路由测试

谢谢朋友们的测试，出于隐私问题，隐藏部分路由，谢谢

#### 上海电信测试

```shell
IP Geo Data Provider: LeoMoeAPI
traceroute to 157.254.53.82, 30 hops max, 52 bytes packets
1   *
2   *
3   10.162.66.221   *                         RFC1918          
                                              1.71 ms / * ms / * ms
4   10.200.66.125   *                         RFC1918          
                                              203.42 ms / * ms / * ms
5   101.226.210.66  AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              2.98 ms / 2.95 ms
    101.226.210.70  AS4812   [CHINANET-SH]    中国 上海   chinatelecom.cn  电信
                                              2.88 ms
6   *
7   *
8   *
9   59.43.80.142    *        [CN2-BackBone]   中国 上海   chinatelecom.cn  电信
                                              9.04 ms / 12.83 ms / 8.23 ms
10  *
11  *
12  203.22.178.85   *        [CTG-CN]         中国 香港  CC/CN2-CTG CTGNet
    CTCN2.CN.HKG.CTGNet                       29.34 ms / 29.28 ms / 29.32 ms
13  69.194.165.90   AS23764                   中国 香港   chinatelecomglobal.com  电信
    CN.HKG.CTGNet                             31.40 ms / 30.80 ms / 30.68 ms
14  121.59.101.106  *        [CN2-BB]         中国 香港   电信    
                                              32.63 ms / 32.71 ms / 33.47 ms
15  47.246.61.242   AS24429                   中国 香港   alibabacloud.com 
                                              29.08 ms / 29.27 ms / 29.26 ms
16  *
17  9.34.128.77     *                         DOD          
                                              32.01 ms / 30.29 ms / 30.48 ms
18  *   AS396856                  美国 加利福尼亚州 洛杉矶  sharon.io 
                                              30.66 ms / 30.59 ms / 30.64 ms
```

#### 无锡移动测试

```shell
6   111.24.6.97     AS9808   [CMNET]          中国 江苏 南京市  chinamobileltd.com  移动
                                              7.86 ms / 6.85 ms / 7.30 ms
7   111.24.5.57     AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com  移动
                                              34.69 ms / 34.35 ms / 34.84 ms
8   221.183.89.189  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com
                                              34.16 ms / 33.55 ms / 33.50 ms
9   221.183.89.210  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com
                                              33.53 ms / 33.03 ms / 33.13 ms
10  221.183.92.154  AS9808   [CMNET]          中国 广东 广州  chinamobileltd.com
                                              36.40 ms / 36.93 ms / 35.53 ms
11  223.120.140.70  AS58807  [CMIN2-NET]      中国 香港   cmi.chinamobile.com  移动
                                              42.10 ms / 40.21 ms / 39.42 ms
12  223.120.130.6   AS58807  [CMIN2-NET]      中国 香港   cmi.chinamobile.com  移动
                                              39.57 ms / 38.85 ms / 39.63 ms
13  223.120.134.38  AS58807  [CMIN2-NET]      中国 香港   cmi.chinamobile.com
                                              36.02 ms / 36.63 ms / 35.94 ms
14  *
15  9.34.128.77     *                         DOD
                                              43.24 ms / 40.26 ms / 40.26 ms
16  157.254.53.82   AS396856                  中国 香港   sharon.io
                                              37.52 ms / 37.85 ms / 37.44 ms
```

#### 无锡联通测试

```shell
14  59.43.139.133   *        [CN2-BackBone]   中国 上海   chinatelecom.cn  电信
                                              14.20 ms / 15.94 ms / 18.90 ms
15  59.43.138.46    *        [CN2-BackBone]   中国 上海  C-I chinatelecom.cn  电信
                                              * ms / 10.33 ms / 111.23 ms
16  *
17  203.22.178.85   *        [CTG-CN]         中国 香港  CC/CN2-CTG CTGNet
    ctcn2.cn.hkg.ctgnet                       37.55 ms / 36.88 ms / 46.94 ms
18  69.194.166.150  AS23764                   日本 东京都 东京  chinatelecomglobal.com  电信
    jp.tyo.ctgnet                             37.24 ms / 36.24 ms / 36.69 ms
19  121.59.101.106  *        [CN2-BB]         中国 香港   电信
                                              39.20 ms / 41.00 ms / 39.70 ms
20  47.246.61.242   AS24429                   中国 香港   alibabacloud.com
                                              40.21 ms / 38.96 ms / 38.87 ms
21  *
22  9.34.128.77     *                         DOD
                                              41.13 ms / 39.27 ms / 39.41 ms
23 *    AS396856                  美国 加利福尼亚州 洛杉矶  sharon.io
                                              39.64 ms / 39.08 ms / 39.27 ms
```

### 延迟测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-1.jpg" alt="" loading="lazy">
</picture>

### 融合怪脚本测试

```shell
---------------------基础信息查询--感谢所有开源项目---------------------
 CPU 型号          : Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz
 CPU 核心数        : 1
 CPU 频率          : 2593.906 MHz
 CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 35.75 MB
 AES-NI指令集      : ✔ Enabled
 VM-x/AMD-V支持    : ❌ Disabled
 内存              : 242.96 MiB / 926.16 MiB
 Swap              : [ no swap partition or swap file detected ]
 硬盘空间          : 1.88 GiB / 9.82 GiB
 启动盘路径        : /dev/sda3
 系统在线时间      : 0 days, 0 hour 28 min
 负载              : 2.50, 2.54, 1.09
 系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
 架构              : x86_64 (64 Bit)
 内核              : 6.1.0-9-amd64
 TCP加速方式       : cubic
 虚拟化架构        : KVM
 NAT类型           : Full Cone
 IPV4 ASN          : AS396856 Sharon Networks, LLC
 IPV4 位置         : Central / Central and Western / HK
----------------------CPU测试--通过sysbench测试-------------------------
 -> CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
 1 线程测试(单核)得分:          1094 Scores
---------------------内存测试--感谢lemonbench开源-----------------------
 -> 内存测试 Test (Fast Mode, 1-Pass @ 5sec)
 单线程读测试:          21681.33 MB/s
 单线程写测试:          17979.37 MB/s
------------------磁盘dd读写测试--感谢lemonbench开源--------------------
 -> 磁盘IO测试中 (4K Block/1M Block, Direct Mode)
 测试操作               写速度                                  读速度
 100MB-4K Block         12.4 MB/s (3035 IOPS, 8.44s)            12.4 MB/s (3035 IOPS, 8.43s)
 1GB-1M Block           160 MB/s (152 IOPS, 6.57s)              160 MB/s (152 IOPS, 6.57s)
---------------------磁盘fio读写测试--感谢yabs开源----------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 12.03 MB/s    (3.0k) | 153.91 MB/s   (2.4k)
Write      | 12.03 MB/s    (3.0k) | 154.72 MB/s   (2.4k)
Total      | 24.07 MB/s    (6.0k) | 308.63 MB/s   (4.8k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 146.86 MB/s    (286) | 145.19 MB/s    (141)
Write      | 154.66 MB/s    (302) | 154.86 MB/s    (151)
Total      | 301.53 MB/s    (588) | 300.06 MB/s    (292)
------------流媒体解锁--基于oneclickvirt/CommonMediaTests开源-----------
以下测试的解锁地区是准确的，但是不是完整解锁的判断可能有误，这方面仅作参考使用
----------------Netflix-----------------
[IPV4]
您的出口IP可以使用Netflix，但仅可看Netflix自制剧
NF所识别的IP地域信息：美国
[IPV6]
您的网络可能没有正常配置IPv6，或者没有IPv6网络接入
----------------Youtube-----------------
[IPV4]
连接方式: Youtube Video Server
视频缓存节点地域: 中国香港(HKG33S01)
Youtube识别地域: 中国香港(HK)
[IPV6]
Youtube在您的出口IP所在的国家不提供服务
---------------DisneyPlus---------------
[IPV4]
当前出口所在地区解锁DisneyPlus
区域：HK 区
[IPV6]
DisneyPlus在您的出口IP所在的国家不提供服务
解锁Netflix，Youtube，DisneyPlus上面和下面进行比较，不同之处自行判断
----------------流媒体解锁--感谢RegionRestrictionCheck开源--------------
 以下为IPV4网络测试，若无IPV4网络则无输出
============[ Multination ]============
 Dazn:                                  Yes (Region: HK)
 Disney+:                               No
 Netflix:                               Originals Only
 YouTube Premium:                       Yes (Region: HK)
 Amazon Prime Video:                    Yes (Region: HK)
 TVBAnywhere+:                          No
 iQyi Oversea Region:                   HK
 YouTube CDN:                           Hong Kong 
 Netflix Preferred CDN:                 Hong Kong  
 Spotify Registration:                  Yes (Region: HK)
 Steam Currency:                        HKD
 ChatGPT:                               Only Available with Mobile APP
 Bing Region:                           HK
 Wikipedia Editability:                 Yes
 Instagram Licensed Audio:              Yes
 ---Forum---
 Reddit:                                No
=======================================
 以下为IPV6网络测试，若无IPV6网络则无输出
---------------TikTok解锁--感谢lmc999的源脚本及fscarmen PR--------------
 Tiktok Region:         【US】
-------------IP质量检测--基于oneclickvirt/securityCheck使用-------------
数据仅作参考，不代表100%准确，如果和实际情况不一致请手动查询多个数据库比对
以下为各数据库编号，输出结果后将自带数据库来源对应的编号
ipinfo数据库  [0] | scamalytics数据库 [1] | virustotal数据库  [2] | abuseipdb数据库   [3] | ip2location数据库    [4]
ip-api数据库  [5] | ipwhois数据库     [6] | ipregistry数据库  [7] | ipdata数据库      [8] | db-ip数据库          [9]
ipapiis数据库 [A] | ipapicom数据库    [B] | abstractapi数据库 [C] | cheervision数据库 [D] | ipqualityscore数据库 [E]
IPV4:
安全得分:
声誉(越高越好): 0 [2]
信任得分(越高越好): 0 [8] 
VPN得分(越低越好): 100 [8] 
代理得分(越低越好): 100 [8] 
社区投票-无害: 0 [2] 
社区投票-恶意: 0 [2] 
威胁得分(越低越好): 100 [8] 
欺诈得分(越低越好): 65 [E] 0 [1]
滥用得分(越低越好): 0 [3] 
ASN滥用得分(越低越好): 0 (Very Low) [A] 
公司滥用得分(越低越好): 0.0005 (Very Low) [A] 
威胁级别: low [9 B]
黑名单记录统计:(有多少黑名单网站有记录):
无害记录数: 0 [2]  恶意记录数: 0 [2]  可疑记录数: 0 [2]  无记录数: 93 [2]  
安全信息:
使用类型: DataCenter/WebHosting/Transit [3] business [8 A] isp [0 7] corporate [9]
公司类型: business [0 A] isp [7]
是否云提供商: No [7 D] 
是否数据中心: Yes [0 1 A] No [5 6 8]
是否移动设备: No [5 A] Yes [E]
是否代理: Yes [E] No [0 1 4 5 6 7 8 9 A B D]
是否VPN: No [0 1 6 7 A C D] Yes [E]
是否Tor: No [0 1 3 6 7 8 A B D E] 
是否Tor出口: No [1 7 D] 
是否网络爬虫: No [9 A B E] 
是否匿名: No [1 6 7 8 D] 
是否攻击者: No [7 8 D] 
是否滥用者: No [7 8 A D E] 
是否威胁: No [7 8 D] 
是否中继: No [0 7 8 D] 
是否Bogon: No [7 8 A D] 
是否机器人: No [E] 
DNS-黑名单: 338(Total_Check) 0(Clean) 5(Blacklisted) 7(Other) 
Google搜索可行性：YES
----------------三网回程--基于oneclickvirt/backtrace开源----------------
国家: HK 城市: Central 服务商: AS396856 Sharon Networks, LLC
北京电信 219.141.140.10  电信CN2GIA [精品线路] 
北京联通 202.106.195.68  联通9929   [优质线路] 联通4837   [普通线路] 
北京移动 221.179.155.161 移动CMI    [普通线路] 
上海电信 202.96.209.133  电信CN2GIA [精品线路] 
上海联通 210.22.97.1     联通9929   [优质线路] 联通4837   [普通线路] 
上海移动 211.136.112.200 移动CMI    [普通线路] 
广州电信 58.60.188.222   电信CN2GIA [精品线路] 
广州联通 210.21.196.6    联通9929   [优质线路] 联通4837   [普通线路] 
广州移动 120.196.165.24  移动CMI    [普通线路] 
成都电信 61.139.2.69     电信CN2GIA [精品线路] 
成都联通 119.6.6.6       联通9929   [优质线路] 联通4837   [普通线路] 
成都移动 211.137.96.205  移动CMI    [普通线路] 
准确线路自行查看详细路由，本测试结果仅作参考
同一目标地址多个线路时，可能检测已越过汇聚层，除了第一个线路外，后续信息可能无效
---------------------回程路由--感谢fscarmen开源及PR---------------------
依次测试电信/联通/移动经过的地区及线路，核心程序来自ipip.net或nexttrace，请知悉!
广州电信 58.60.188.222
532.72 ms  AS396856  中国, 香港, vantiva.com
0.71 ms  *  美国, ibm.com
0.47 ms  *  中国, 香港, chinatelecom.com.cn, 电信
1.07 ms  *  中国, 香港, chinatelecom.com.cn, 电信
6.75 ms  *  中国, 广东, 广州, chinatelecom.com.cn, 电信
9.33 ms  *  中国, 广东, 广州, chinatelecom.com.cn, 电信
13.79 ms  *  中国, 广东, 深圳, chinatelecom.com.cn, 电信
10.50 ms  AS4134  中国, 广东, 深圳, chinatelecom.com.cn, 电信
广州联通 210.21.196.6
3.55 ms  AS396856  中国, 香港, vantiva.com
0.38 ms  *  美国, ibm.com
1.84 ms  AS10099  中国, 香港, chinaunicom.com, 联通
2.11 ms  AS10099  中国, 香港, chinaunicom.com, 联通
4.46 ms  AS9929  中国, 广东, 广州, chinaunicom.com, 联通
8.35 ms  AS9929  中国, 广东, 广州, chinaunicom.com, 联通
9.43 ms  *  中国, 广东, 广州, chinaunicom.com, 联通
5.12 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
6.13 ms  AS4837  中国, 广东, 广州, chinaunicom.com, 联通
10.66 ms  AS17816  中国, 广东, 深圳, chinaunicom.com, 联通
24.95 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
9.23 ms  AS17623  中国, 广东, 深圳, chinaunicom.com, 联通
广州移动 120.196.165.24
2.44 ms  AS396856  中国, 香港, vantiva.com
0.71 ms  *  美国, ibm.com
6.30 ms  AS58807  中国, 香港, chinamobile.com, 移动
5.35 ms  AS58807  中国, 香港, chinamobile.com, 移动
5.50 ms  AS9808  中国, 广东, chinamobile.com, 移动
5.64 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
8.19 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
12.04 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
13.82 ms  AS9808  中国, 广东, 广州, chinamobile.com, 移动
10.38 ms  AS56040  中国, 广东, 深圳, chinamobile.com, 移动
--------------------自动更新测速节点列表--本脚本原创--------------------
位置             上传速度        下载速度        延迟     丢包率
Speedtest.net    350.56 Mbps     215.81 Mbps     0.66     12.6%
中国香港         298.79 Mbps     282.59 Mbps     3.22     0.0%
新加坡           305.35 Mbps     285.54 Mbps     33.51    0.0%
联通海南         320.23 Mbps     289.20 Mbps     23.56    NULL
联通上海5G       55.76 Mbps      53.68 Mbps      36.31    0.0%
电信浙江         331.25 Mbps     293.85 Mbps     39.30    NULL
电信浙江         299.05 Mbps     289.59 Mbps     32.11    NULL
移动杭州5G       303.17 Mbps     98.06 Mbps      31.45    0.0%
------------------------------------------------------------------------
 总共花费      : 6 分 56 秒
 时间          : Sat Jun  1 18:39:46 CST 2024
------------------------------------------------------------------------
```

### 晚高峰移动测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-2.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-3.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-4.jpg" alt="" loading="lazy">
</picture>