---
tags: [server-guide]
title: "Hetzner服务器使用Bcache和nvme加速HDD"
published: 2024-06-07
---

近期进行大容量下载读取的时候，经常由于hdd的写入瓶颈问题，造成写入速度不稳定。经过从100MB/S直接掉到B/S,也就是我们所称的卡IO。

## Bcache简介

```shell
bcache 是一个 Linux 内核块层超速缓存。它允许使用一个或多个高速磁盘驱动器（例如 SSD）作为一个或多个速度低得多的硬盘的超速缓存。bcache 支持直写和写回，不受所用文件系统的约束。

主要功能：
1，可以使用单个超速缓存设备来超速缓存任意数量的后备设备。在运行时可以挂接和分离已装入及使用中的后备设备。
2，在非正常关机后恢复 - 只有在超速缓存与后备设备一致后才完成写入。
3，SSD 拥塞时限制传至 SSD 的流量。
4，高效的写回实施方案。脏数据始终按排序顺序写出。
5，稳定可靠，可在生产环境中使用。

以下教程基于Debian12
```

## 准备条件

14块22T的HDD组成的raid阵列

nvme0n1 作为系统盘 7.68T

nvme1n1 作为缓存盘 7.68T

格式化好HDD 和 缓存所用的NV

下面是已完成的最终情况

```shell
root@Debian ~ # lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
sda           8:0    1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sdb           8:16   1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sdc           8:32   1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sdd           8:48   1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sde           8:64   1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sdf           8:80   1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sdg           8:96   1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sdh           8:112  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sdi           8:128  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sdj           8:144  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sdk           8:160  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sdl           8:176  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sdm           8:192  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
sdn           8:208  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  /hdd
nvme1n1     259:0    0     7T  0 disk  
├─nvme1n1p1 259:2    0     1G  0 part  
├─nvme1n1p2 259:3    0     7T  0 part  
│ └─bcache0 252:0    0 280.1T  0 disk  /hdd
└─nvme1n1p3 259:4    0     1M  0 part  
nvme0n1     259:1    0     7T  0 disk  
├─nvme0n1p1 259:5    0     1G  0 part  /boot
├─nvme0n1p2 259:6    0     7T  0 part  /
└─nvme0n1p3 259:7    0     1M  0 part  
```

## 内核开启Bcache

```shell
modprobe bcachelsmod |grep bcache
```

## **安装bcache-tools**

```shell
apt install bcache-tools
```

## 格式化

```shell
wipefs -a /dev/md127
wipefs -a /dev/nvme1n1p2

```

## 添加数据盘

```shell
make-bcache -B /dev/md127
```

## 添加缓存盘

```shell
make-bcache -C /dev/nvme1n1p2
```

## 查看当前块信息

```shell
root@Debian ~ # lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
sda           8:0    1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sdb           8:16   1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sdc           8:32   1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sdd           8:48   1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sde           8:64   1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sdf           8:80   1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sdg           8:96   1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sdh           8:112  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sdi           8:128  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sdj           8:144  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sdk           8:160  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sdl           8:176  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sdm           8:192  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
sdn           8:208  1    20T  0 disk  
└─md127       9:127  0 280.1T  0 raid0 
  └─bcache0 252:0    0 280.1T  0 disk  
nvme1n1     259:0    0     7T  0 disk  
├─nvme1n1p1 259:2    0     1G  0 part  
├─nvme1n1p2 259:3    0     7T  0 part  
└─nvme1n1p3 259:4    0     1M  0 part  
nvme0n1     259:1    0     7T  0 disk  
├─nvme0n1p1 259:5    0     1G  0 part  /boot
├─nvme0n1p2 259:6    0     7T  0 part  /
└─nvme0n1p3 259:7    0     1M  0 part  
```

## 获取缓存盘UUID

```shell
bcache-super-show /dev/nvme1n1p2
如下图所示，就是cset.uuid
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-7.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-7.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-7.jpg" alt="" loading="lazy">
</picture>

## 绑定缓存盘

```shell
echo "0c07a77e-3735-410b-adae-60ea5d708009" >/sys/block/bcache0/bcache/attach
```

## 查看当前块信息

```shell
root@Debian ~ # lsblkNAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTSsda           8:0    1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sdb           8:16   1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sdc           8:32   1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sdd           8:48   1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sde           8:64   1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sdf           8:80   1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sdg           8:96   1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sdh           8:112  1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sdi           8:128  1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sdj           8:144  1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sdk           8:160  1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sdl           8:176  1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sdm           8:192  1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  sdn           8:208  1    20T  0 disk  └─md127       9:127  0 280.1T  0 raid0   └─bcache0 252:0    0 280.1T  0 disk  nvme1n1     259:0    0     7T  0 disk  ├─nvme1n1p1 259:2    0     1G  0 part  ├─nvme1n1p2 259:3    0     7T  0 part  │ └─bcache0 252:0    0 280.1T  0 disk  └─nvme1n1p3 259:4    0     1M  0 part  nvme0n1     259:1    0     7T  0 disk  ├─nvme0n1p1 259:5    0     1G  0 part  /boot├─nvme0n1p2 259:6    0     7T  0 part  /└─nvme0n1p3 259:7    0     1M  0 part  
```

## 查看缓存状态

- no cache：该backing device没有attach任何caching device

- 一切正常，缓存是干净的

- 一切正常，已启用回写，缓存是脏的

- 遇到问题，后台设备与缓存设备不同步

```shell
cat /sys/block/bcache0/bcache/state
```

## 更改缓存策略

```shell
Bcache有三种缓存策略
```

- writeback回写策略：数据先写入到缓存磁盘，再等待系统将缓存磁盘数据刷到后端磁盘

- writethrough写通策略：数据会同时写入缓存磁盘和数据磁盘（默认是该模式）

- writearound直达策略：数据直接写入后端磁盘。

为了性能，这里改为 writeback回写策略

```shell
查看缓存模式
cat /sys/block/bcache0/bcache/cache_mode
修改缓存策略
 echo writeback > /sys/block/bcache0/bcache/cache_mode
允许缓存顺序I/O（非常重要）
echo 0 > /sys/block/bcache0/bcache/sequential_cutoff
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-8.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-8.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-8.jpg" alt="" loading="lazy">
</picture>

## 格式化数据盘

```shell
mkfs.xfs /dev/bcache0
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/06/image-9.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/06/image-9.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/06/image-9.jpg" alt="" loading="lazy">
</picture>

## 设置开机自动挂载

```shell
查看设备UUIDblkid /dev/bcache0添加到/etc/fstabvim /etc/fstab添加上面UUIDUUID=f9c51924-f6d5-4466-84ee-14fcfbb1bb14 /hdd                   xfs     defaults        0 0
```

## 测试缓存性能

### Yabs Fio测试

#### 有缓

| Block Size | 4k (IOPS) | 64k (IOPS) |
| --- | --- | --- |
| Read | 240.07 MB/s (60.0k) | 1.53 GB/s (24.0k) |
| Write | 240.70 MB/s (60.1k) | 1.54 GB/s (24.1k) |
| Total | 480.77 MB/s (120.1k) | 3.08 GB/s (48.2k) |
|  |  |  |
| Block Size | 512k (IOPS) | 1m (IOPS) |
| \------ | \--- ---- | \---- ---- |
| Read | 2.94 GB/s (5.7k) | 3.09 GB/s (3.0k) |
| Write | 3.10 GB/s (6.0k) | 3.29 GB/s (3.2k) |
| Total | 6.04 GB/s (11.8k) | 6.39 GB/s (6.2k) |

#### 无缓

| Block Size | 4k (IOPS) | 64k (IOPS) |
| --- | --- | --- |
| Read | 24.43 MB/s (6.1k) | 306.10 MB/s (4.7k) |
| Write | 24.44 MB/s (6.1k) | 307.72 MB/s (4.8k) |
| Total | 48.88 MB/s (12.2k) | 613.82 MB/s (9.5k) |
|  |  |  |
| Block Size | 512k (IOPS) | 1m (IOPS) |
| \------ | \--- ---- | \---- ---- |
| Read | 772.93 MB/s (1.5k) | 1.88 GB/s (1.8k) |
| Write | 814.00 MB/s (1.5k) | 2.01 GB/s (1.9k) |
| Total | 1.58 GB/s (3.0k) | 3.90 GB/s (3.8k) |