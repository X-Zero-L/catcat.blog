---
title: "Ikoula 法国 Intel 9700K 杜甫测试"
published: 2025-06-16
categories: 
  - "vps"
  - "eu-server"
---

**Ikoula是法国主机商,成立于1998年,数据中心位于法国兰斯。ikoula主要提供服务器租用和云服务器业务,是欧洲少数对国人非常友好的商家了,后台支持中文。ikoula服务器性价比可以，但是后台管理是真的烂，重装有一个月20次的限制，各种意义不明的功能。这台促销用的是家用机箱的服务器，配置和ovh的ks-a挺接近的，性能挺不错的。不出意外的话又是一款pt好鸡了。**

## 配置

- **CPU ： Intel(R) Core(TM) i7-9700K CPU @ 3.60GHz**

- **MEM ：4 x 16 GB DDR4-2400MT/s GOODRAM**

- **DISK ：1TB Samsung SSD 970 EVO 1TB**

- **Network : 1G Port network RTL8111/8168/8411 PCI Express Gigabit Ethernet Controller**

- **Price: 25欧/month**

## 测评

### Yabs

```
Basic System Information:
---------------------------------
Uptime     : 0 days, 23 hours, 49 minutes
Processor  : Intel(R) Core(TM) i7-9700K CPU @ 3.60GHz
CPU cores  : 8 @ 3630.458 MHz
AES-NI     : ✔ Enabled
VM-x/AMD-V : ✔ Enabled
RAM        : 62.7 GiB
Swap       : 976.0 MiB
Disk       : 914.9 GiB
Distro     : Debian GNU/Linux 12 (bookworm)
Kernel     : 6.1.0-37-amd64
VM Type    : NONE
IPv4/IPv6  : ✔ Online / ✔ Online

IPv6 Network Information:
---------------------------------
ISP        : Ikoula Net SAS
ASN        : AS21409 Ikoula Net SAS
Host       : Ikoula 6 Reims DC
Location   : Paris, Île-de-France (IDF)
Country    : France

fio Disk Speed Tests (Mixed R/W 50/50) (Partition /dev/mapper/debian--vg-root):
---------------------------------
Block Size | 4k            (IOPS) | 64k           (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 263.18 MB/s  (65.7k) | 692.14 MB/s  (10.8k)
Write      | 263.87 MB/s  (65.9k) | 695.78 MB/s  (10.8k)
Total      | 527.05 MB/s (131.7k) | 1.38 GB/s    (21.6k)
           |                      |                     
Block Size | 512k          (IOPS) | 1m            (IOPS)
  ------ | --- ---- | ---- ---- 
Read       | 1.07 GB/s     (2.0k) | 1.11 GB/s     (1.0k)
Write      | 1.12 GB/s     (2.2k) | 1.19 GB/s     (1.1k)
Total      | 2.20 GB/s     (4.3k) | 2.30 GB/s     (2.2k)

iperf3 Network Speed Tests (IPv4):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 937 Mbits/sec   | 938 Mbits/sec   | 19.1 ms        
Eranium         | Amsterdam, NL (100G)      | 936 Mbits/sec   | 936 Mbits/sec   | 13.6 ms        
Uztelecom       | Tashkent, UZ (10G)        | 779 Mbits/sec   | 419 Mbits/sec   | 101 ms         
Leaseweb        | Singapore, SG (10G)       | 797 Mbits/sec   | 643 Mbits/sec   | 160 ms         
Clouvider       | Los Angeles, CA, US (10G) | 835 Mbits/sec   | 310 Mbits/sec   | 130 ms         
Leaseweb        | NYC, NY, US (10G)         | 884 Mbits/sec   | 702 Mbits/sec   | 76.8 ms        
Edgoo           | Sao Paulo, BR (1G)        | 742 Mbits/sec   | 369 Mbits/sec   | 183 ms         

iperf3 Network Speed Tests (IPv6):
---------------------------------
Provider        | Location (Link)           | Send Speed      | Recv Speed      | Ping           
----- | ----- | ---- | ---- | ---- 
Clouvider       | London, UK (10G)          | 919 Mbits/sec   | 922 Mbits/sec   | 19.1 ms        
Eranium         | Amsterdam, NL (100G)      | 923 Mbits/sec   | 923 Mbits/sec   | 13.6 ms        
Uztelecom       | Tashkent, UZ (10G)        | 865 Mbits/sec   | 550 Mbits/sec   | 101 ms         
Leaseweb        | Singapore, SG (10G)       | 792 Mbits/sec   | 590 Mbits/sec   | 160 ms         
Clouvider       | Los Angeles, CA, US (10G) | 825 Mbits/sec   | 410 Mbits/sec   | 130 ms         
Leaseweb        | NYC, NY, US (10G)         | 870 Mbits/sec   | 723 Mbits/sec   | 76.8 ms        
Edgoo           | Sao Paulo, BR (1G)        | 767 Mbits/sec   | 282 Mbits/sec   | 183 ms         

Geekbench 6 Benchmark Test:
---------------------------------
Test            | Value                         
                |                               
Single Core     | 1820                          
Multi Core      | 7202                          
Full Test       | https://browser.geekbench.com/v6/cpu/12463012

YABS completed in 11 min 37 sec
```

### 网络测试

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-17.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-17.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-17.jpg" alt="网络性能测试结果，全球各地速度比较" loading="lazy">
</picture>

### IP质量

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-18.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-18.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-18.jpg" alt="IP地址质量检测，多项风险评估与评分" loading="lazy">
</picture>

### 回程

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/06/image-19-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/06/image-19-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/06/image-19-scaled.jpg" alt="网络追踪路由信息图，含中国和国际站点" loading="lazy">
</picture>

其他懒得测了，25欧要什么东西，能用就行（）
