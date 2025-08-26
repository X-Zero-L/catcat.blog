---
tags: [server-guide]
title: "Hetzner 独立服务器入坑指南"
published: 2024-02-13
---

最近闲逛看到Hetzner终于是把AMD Ryzen 5000系列放入了拍卖鸡的行列。不到60欧的价格买到顶配的5950X机器简直血赚。简单介绍一下Hetzner的独立服务器以及一些坑点。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/c73ce45c131fafff1cb473b41cbdab2e.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/c73ce45c131fafff1cb473b41cbdab2e.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/c73ce45c131fafff1cb473b41cbdab2e.jpg" alt="" loading="lazy">
</picture>

## 教程

默认两块硬盘的话，Hz 会自动给你装 raid1，即只有一块硬盘的容量，另一块硬盘相当于是备份用的，如果不是特别重要的数据的话，一般会考虑不组 raid，这样我们硬盘空间就能完整利用起来了。（除非你是刷 PT，不然不建议组 raid0）

#### 进入 Rescue 模式

如果你购买的是 HZ 的拍卖机，那么你的机器一般都是在 Rescue 模式下交付的，Rescue 简单来说就像 Windows PE 一样的东西，你可以在里面使用官方给你准备好的工具来安装系统。

**如何进入 Rescue 模式？**  
在 [这个页面上](https://robot.your-server.de/server) 找到你的服务器，点击它，然后看我图示操作就好。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/83320660351d45fafc842ef8bbe020fe.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/83320660351d45fafc842ef8bbe020fe.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/83320660351d45fafc842ef8bbe020fe.jpg" alt="" loading="lazy">
</picture>

`在点击**Activate rescue system**之后，千万不要急着刷新页面！网页上出现的一串随机数字将会是你 SSH 到服务器的密码！一定要记下来它！`  
也就是这个东西

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/91e95502fb169779b5a1fa1f08a55a10.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/91e95502fb169779b5a1fa1f08a55a10.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/91e95502fb169779b5a1fa1f08a55a10.jpg" alt="" loading="lazy">
</picture>

**我直接刷新了页面该怎么办？**  
........重新激活 Rescue 模式就行了。

**重启服务器**  
看图操作就好了

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-17.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-17.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-17.jpg" alt="" loading="lazy">
</picture>

#### 无硬 RAID 卡的服务器安装

在成功的通过 SSH 连接到服务器以后，屏幕上会列出说明信息以及你当前的 CPU、硬盘、RAID 卡、网络等信息，如下所示

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/856a1ac1a8b5fbe0782ff5413f166e96.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/856a1ac1a8b5fbe0782ff5413f166e96.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/856a1ac1a8b5fbe0782ff5413f166e96.jpg" alt="" loading="lazy">
</picture>

到这里又得分情况讨论了，如果你的服务器是含有硬件 RAID 卡的，**对不起，我不知道。  
**假设你的服务器不含有硬 RAID 卡，那么直接在键盘上敲 `installimage` 并回车即可。  
当然，如果你是个懒狗的话，直接敲 **`installimage -p /boot:ext3:1G,/:ext4:all -l 0 -r yes -t yes`**  然后回车选择系统，配置文件不需要更改，一路回车就可以了。下面是手动的方式

然后你就进入到了 HZ 官方的脚本当中，使用键盘上下选择你要安装的操作系统。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/3c126e8d6e4b4fc2a95651b0632a8c79.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/3c126e8d6e4b4fc2a95651b0632a8c79.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/3c126e8d6e4b4fc2a95651b0632a8c79.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/47f98590044079872480a80630d7630f.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/47f98590044079872480a80630d7630f.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/47f98590044079872480a80630d7630f.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/227d07d6e1cb696c6dd526d46ef22209.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/227d07d6e1cb696c6dd526d46ef22209.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/227d07d6e1cb696c6dd526d46ef22209.jpg" alt="" loading="lazy">
</picture>

下面的配置文件的修改，重点，取消raid1

RAID 设置区分

> NO RIAD：一般情况建议不设置 RAID，这样既保证空间大小，也保证了安全性.；  
> RIAD 0：好处：速度快，合并容量，缺点：两个硬盘只要挂一个，那么文件全都挂了；  
> RIAD 1：好处：同时把文件写入到两个硬盘，坏一个也没事，缺点：浪费空间，读写速度稍微有降低；

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/7567e0cd441a96d9a5b366cfe0aa679e.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/7567e0cd441a96d9a5b366cfe0aa679e.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/7567e0cd441a96d9a5b366cfe0aa679e.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/7a12f1c023c3d616dcd51f7aeb944751.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/7a12f1c023c3d616dcd51f7aeb944751.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/7a12f1c023c3d616dcd51f7aeb944751.jpg" alt="" loading="lazy">
</picture>

编辑完成后按 `F10` 保存配置文件；

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/aae1471578303055856d4bc9124f751d.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/aae1471578303055856d4bc9124f751d.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/aae1471578303055856d4bc9124f751d.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/a810729e176cbeff1e53c6d5f78ac2aa.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/a810729e176cbeff1e53c6d5f78ac2aa.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/a810729e176cbeff1e53c6d5f78ac2aa.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/dd1d3fa1ff006c3191bbeee57f479b11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/dd1d3fa1ff006c3191bbeee57f479b11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/dd1d3fa1ff006c3191bbeee57f479b11.jpg" alt="" loading="lazy">
</picture>

在完成上述两步操作以后，你就可以愉快的双击 ESC 键，然后选择 YES，并跳过接下来的一系列警告，无脑敲回车即可。（警告的意思是告诉你要格式化硬盘了，你确定吗？）  
然后你就可以看到一个进度页面，如下图所示，等待它完成并在键盘上输入 `reboot` 然后回车即可。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/cab26e3a2a853aa1d90d48b50c6a9c51.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/cab26e3a2a853aa1d90d48b50c6a9c51.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/cab26e3a2a853aa1d90d48b50c6a9c51.jpg" alt="" loading="lazy">
</picture>

结束之后 会提示你reboot重启，这样一个新的独立服务器系统就安装好了

## 监测通电时间

```shell
wget https://github.com/Aniverse/A/raw/i/a && bash a

```

```shell

  CPU 型号              AMD Ryzen 9 5950X 16-Core Processor
  CPU 核心              合计 16 核心，32 线程
  CPU 状态              当前主频 4043.007 MHz
  内存大小              128719 MB (3180 MB 已用)
  交换分区              4089 MB (0 MB 已用)

  第 1 块硬盘           通电 7831 小时，型号 SAMSUNG MZQL23T8HCLS-00A07
  第 2 块硬盘           通电 7831 小时，型号 SAMSUNG MZQL23T8HCLS-00A07

  硬盘大小              7169.0 GB

  服务器时间            2024-02-13 10:49:36
  运行时间              0 days 0 hour 9 min
  系统负载              2.59, 0.69, 0.24
  虚拟化技术            No Virtualization Detected

  IPv4 地址             65.108.xxx.xxx
  IPv6 地址             2a01:4f9:xxxx:xxxx
  运营商                AS24940 Hetzner Online GmbH
  地理位置              DE, Bavaria, Gunzenhausen

  操作系统              Debian 12.2 bookworm (x86_64)
  系统内核              6.1.0-13-amd64
  TCP 加速              cubic

  当前脚本版本          1.4.1.1

  顺序写入 (1st)        2000 MB/s
  顺序写入 (2nd)        1100 MB/s
  顺序写入 (3rd)        1100 MB/s
  顺序写入 (4th)        1800 MB/s
  顺序写入 (5th)        1900 MB/s
  顺序写入 (avg)        1600.0 MB/s
```

### installimage 命令详细

上面的方法是图形化一步一步来搞的，其实你也可以直接用一条命令直接自动安装。

还是利用官方的 installimage 命令。

一般你想要知道一个命令支持哪些参数，都可以用`命令 -h` 或者`命令 --help` 来查看。

比如

`installimage -h` 或者 `installimage --help`

以下是 installimage 命令的参数：

这是 `installimage` 的使用说明，该脚本支持多种参数，以下是每个参数的简要描述：

1. `-h`: 显示帮助信息。

3. `-a`: 自动模式 / 批处理模式 - 结合下面的选项使用可以无需进一步交互地进行安装。

5. `-c <configfile>`: 使用指定的配置文件进行自动设置。

7. `-x <post-install>`: 使用此文件作为安装后脚本，安装完成后在 chroot 环境中执行。

9. `-n <hostname>`: 设置指定的主机名。

11. `-r <yes|no>`: 是否激活软件 RAID。

13. `-l <0|1|5|6|10>`: 设置指定的 RAID 级别。

15. `-i <imagepath>`: 使用指定的 IMAGE 进行安装。

17. `-g`: 强制验证带有分离的 GPG 签名的图像文件。如果图像无效，安装将中止。

19. `-p <partitions>`: 定义要创建的分区。

21. `-v <logical volumes>`: 定义要创建的逻辑卷。

23. `-d <drives>`: 要使用的驱动器的 /dev 名称。

25. `-f <yes|no>`: 是否格式化第二块驱动器（如果不用于 RAID）。

27. `-s <de|en>`: 用于不同事务的语言（例如 PLESK）。

29. `-z PLESK_<Version>`: 安装像 PLESK 这样的可选软件。

31. `-K <path/url>`: 从文件 / URL 安装 SSH 密钥。

33. `-t <yes|no>`: 接管救援系统的 SSH 公钥。

35. `-u <yes|no>`: 是否允许 USB 驱动器。

37. `-G <yes|no>`: 是否生成新的 SSH 主机密钥（默认为 yes）。

这些选项允许用户在不进入交互式模式的情况下，通过指定适当的参数来自动化服务器的安装过程。在实际使用中，您需要根据具体需求选择和组合这些参数。

## Hetzner 计费模式

这里面还是蛮坑的，千万注意。不要随意取消机器，可能导致删号。（注册不易，多多小心）

Hetzner默认是后付费的，也就是你在订购机器后使用一段时间才会跟你要钱。

需要你付款时[https://accounts.hetzner.com/invoice](https://accounts.hetzner.com/invoice)在这个账单页面会显示一个未付账单。而且给你一封邮件，注意查看。

| Hetzner杜甫的计费周期是30天，账单日则是固定的每个月几号。   假设账单日是每月3号的话，8月1号订购，到了3号其实就要付08/01-08/31的费用，相当于预付费了28天。   但是14天试用期没到，所以8月3号不会出账单，到了9月3号会要求一次付08/01-09/31两个月的费用。   如果7月11号订购，到了8月3号已经过14天试用，则会出07/11-08/10的账单，预付费了7天。 |
| --- |