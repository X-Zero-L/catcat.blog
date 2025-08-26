---
tags: [laboratory, 教程]
title: "Rclone远程挂载Onedrive商业版备份"
published: 2025-07-06
---

这两天订阅了一下Onedrive的plan2作为备份使用，于是顺便记录一下商业版的连接方式。

## 前言

使用 Rclone 给 OneDrive 传输文件时可能会遇到速度非常慢、断联等一些问题，其根源是触发了 OneDrive API 的限制，而默认的 Rclone 内置 API 由于非常多人在同时在使用所以这些问题也就愈发明显。由于我的规模还是比较大的，预算使用自建的私有 API 连接 OneDrive 进行存储。

## Rclone安装

这里就不过多在赘述这个了

```shell
curl https://rclone.org/install.sh | bash 
```

出现如下就算安装成功。

```shell
rclone v1.70.2 has successfully installed.Now run "rclone config" for setup. Check https://rclone.org/docs/ for more details.
```

## 创建 OneDrive API

官方文档：[https://rclone.org/onedrive/](https://rclone.org/onedrive/)

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-24.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-24.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-24.jpg" alt="image" loading="lazy">
</picture>

### 获取 Client ID

进入 [Microsoft Azure 应用注册](https://p3terx.com/go/aHR0cHM6Ly9wb3J0YWwuYXp1cmUuY29tLyNibGFkZS9NaWNyb3NvZnRfQUFEX1JlZ2lzdGVyZWRBcHBzL0FwcGxpY2F0aW9uc0xpc3RCbGFkZQ)页面。这里一般有商业版的都会有账户的，不再多描述了。

点击新注册

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-17.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-17.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-17.jpg" alt="image" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-18.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-18.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-18.jpg" alt="image" loading="lazy">
</picture>

创建成功后你会看到 Client ID（客户端 ID），复制并保存好。红色的

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-19.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-19.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-19.jpg" alt="image" loading="lazy">
</picture>

### 获取 Client secret

- 点击`证书和密码`

目前似乎已经无法创建永久的key，最大为24个月

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-20-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-20-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-20-scaled.jpg" alt="image" loading="lazy">
</picture>

然后你会看到 Client secret（客户端密码），复制并保存好。

就是那个值

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-21-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-21-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-21-scaled.jpg" alt="image" loading="lazy">
</picture>

### 设置 API 权限

- 点击`API 权限`，按照图示进行操作，添加`Files.Read`、`Files.ReadWrite`、`Files.Read.All`、`Files.ReadWrite.All`、`offline_access`、`User.Read`这些权限。（直接搜就行，很快）

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-22-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-22-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-22-scaled.jpg" alt="image" loading="lazy">
</picture>

## 获取 租户ID

前往[Azure Portal](https://portal.azure.com/#view/Microsoft_AAD_IAM/DirectorySwitchBlade/subtitle/) 获取 `租户ID`（非常重要）

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/07/image-23-scaled.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/07/image-23-scaled.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/07/image-23-scaled.jpg" alt="image" loading="lazy">
</picture>

### 获取远程挂载

这一步和个人版其实很像，但是有不一样的地方。

同样你需要在一个能打开浏览器的地方，最好是登录微软账户的那台电脑上进行操作。

**服务器不推荐只去用本地弄个token，我尝试过，一直验证失败，直接拿本地挂载好的配置去粘贴复制过去最好。**

我喜欢使用scoop管理，和自己去下载执行文件一样的

```shell
scoop install rclone
```

运行命令

```shell
rclone config
```

交互式操作，按实际情况进行选择：

```shell
e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> n

Enter name for new remote.
name> 名称

Option Storage.
Type of storage to configure.
Choose a number from below, or type in your own value.
 1 / 1Fichier
   \ (fichier)
 2 / Akamai NetStorage
   \ (netstorage)
 3 / Alias for an existing remote
   \ (alias)
 4 / Amazon S3 Compliant Storage Providers including AWS, Alibaba, ArvanCloud, Ceph, ChinaMobile, Cloudflare, DigitalOcean, Dreamhost, Exaba, FlashBlade, GCS, HuaweiOBS, IBMCOS, IDrive, IONOS, LyveCloud, Leviia, Liara, Linode, Magalu, Mega, Minio, Netease, Outscale, Petabox, RackCorp, Rclone, Scaleway, SeaweedFS, Selectel, StackPath, Storj, Synology, TencentCOS, Wasabi, Qiniu and others
   \ (s3)
 5 / Backblaze B2
   \ (b2)
 6 / Better checksums for other remotes
   \ (hasher)
 7 / Box
   \ (box)
 8 / Cache a remote
   \ (cache)
 9 / Citrix Sharefile
   \ (sharefile)
10 / Cloudinary
   \ (cloudinary)
11 / Combine several remotes into one
   \ (combine)
12 / Compress a remote
   \ (compress)
13 / DOI datasets
   \ (doi)
14 / Dropbox
   \ (dropbox)
15 / Encrypt/Decrypt a remote
   \ (crypt)
16 / Enterprise File Fabric
   \ (filefabric)
17 / FTP
   \ (ftp)
18 / FileLu Cloud Storage
   \ (filelu)
19 / Files.com
   \ (filescom)
20 / Gofile
   \ (gofile)
21 / Google Cloud Storage (this is not Google Drive)
   \ (google cloud storage)
22 / Google Drive
   \ (drive)
23 / Google Photos
   \ (google photos)
24 / HTTP
   \ (http)
25 / Hadoop distributed file system
   \ (hdfs)
26 / HiDrive
   \ (hidrive)
27 / ImageKit.io
   \ (imagekit)
28 / In memory object storage system.
   \ (memory)
29 / Internet Archive
   \ (internetarchive)
30 / Jottacloud
   \ (jottacloud)
31 / Koofr, Digi Storage and other Koofr-compatible storage providers
   \ (koofr)
32 / Linkbox
   \ (linkbox)
33 / Local Disk
   \ (local)
34 / Mail.ru Cloud
   \ (mailru)
35 / Mega
   \ (mega)
36 / Microsoft Azure Blob Storage
   \ (azureblob)
37 / Microsoft Azure Files
   \ (azurefiles)
38 / Microsoft OneDrive
   \ (onedrive)
39 / OpenDrive
   \ (opendrive)
40 / OpenStack Swift (Rackspace Cloud Files, Blomp Cloud Storage, Memset Memstore, OVH)
   \ (swift)
41 / Oracle Cloud Infrastructure Object Storage
   \ (oracleobjectstorage)
42 / Pcloud
   \ (pcloud)
43 / PikPak
   \ (pikpak)
44 / Pixeldrain Filesystem
   \ (pixeldrain)
45 / Proton Drive
   \ (protondrive)
46 / Put.io
   \ (putio)
47 / QingCloud Object Storage
   \ (qingstor)
48 / Quatrix by Maytech
   \ (quatrix)
49 / SMB / CIFS
   \ (smb)
50 / SSH/SFTP
   \ (sftp)
51 / Sia Decentralized Cloud
   \ (sia)
52 / Storj Decentralized Cloud Storage
   \ (storj)
53 / Sugarsync
   \ (sugarsync)
54 / Transparently chunk/split large files
   \ (chunker)
55 / Uloz.to
   \ (ulozto)
56 / Union merges the contents of several upstream fs
   \ (union)
57 / Uptobox
   \ (uptobox)
58 / WebDAV
   \ (webdav)
59 / Yandex Disk
   \ (yandex)
60 / Zoho
   \ (zoho)
61 / iCloud Drive
   \ (iclouddrive)
62 / premiumize.me
   \ (premiumizeme)
63 / seafile
   \ (seafile)
Storage> 目前OneDrive的位置

Option client_id.
OAuth Client Id.
Leave blank normally.
Enter a value. Press Enter to leave empty.
client_id> ## 你的 ID

Option client_secret.
OAuth Client Secret.
Leave blank normally.
Enter a value. Press Enter to leave empty.
client_secret> ## 你的key

Option region.
Choose national cloud region for OneDrive.
Choose a number from below, or type in your own value of type string.
Press Enter for the default (global).
 1 / Microsoft Cloud Global
   \ (global)
 2 / Microsoft Cloud for US Government
   \ (us)
 3 / Microsoft Cloud Germany (deprecated - try global region first).
   \ (de)
 4 / Azure and Office 365 operated by Vnet Group in China
   \ (cn)
region> 1

Option tenant.
ID of the service principal's tenant. Also called its directory ID.
Set this if using
- Client Credential flow
Enter a value. Press Enter to leave empty.
tenant> ## 你的租户id

Edit advanced config?
y) Yes
n) No (default)
y/n> n

Use web browser to automatically authenticate rclone with remote?
 * Say Y if the machine running rclone has a web browser you can use
 * Say N if running rclone on a (remote) machine without web browser access
If not sure try Y. If Y failed, try N.

y) Yes (default)
n) No
y/n> y
2025/07/06 16:57:15 NOTICE: Make sure your Redirect URL is set to "http://localhost:53682/" in your custom config.
2025/07/06 16:57:15 NOTICE: If your browser doesn't open automatically go to the following link: http://127.0.0.1:53682/auth?state=Ehm83J5uuZG7m3PnnArFrw
2025/07/06 16:57:15 NOTICE: Log in and authorize rclone for access
2025/07/06 16:57:15 NOTICE: Waiting for code...
2025/07/06 16:57:21 NOTICE: Got code
Option config_type.
Type of connection
Choose a number from below, or type in an existing value of type string.
Press Enter for the default (onedrive).
 1 / OneDrive Personal or Business
   \ (onedrive)
 2 / Root Sharepoint site
   \ (sharepoint)
   / Sharepoint site name or URL
 3 | E.g. mysite or https://contoso.sharepoint.com/sites/mysite
   \ (url)
 4 / Search for a Sharepoint site
   \ (search)
 5 / Type in driveID (advanced)
   \ (driveid)
 6 / Type in SiteID (advanced)
   \ (siteid)
   / Sharepoint server-relative path (advanced)
 7 | E.g. /teams/hr
   \ (path)
config_type>1
Option config_driveid.
Select drive you want to use
Choose a number from below, or type in your own value of type string.
Press Enter for the default (XXXXXXXXXXXXXX).
 1 / OneDrive (business)
   \ (XXXXXXXXXXXXXXXXXXXXXXXXXXX)
config_driveid> 1

Drive OK?

Found drive "root" of type "business"
URL: https://XXXXXXX
y) Yes (default)
n) No
y/n> y

Configuration complete.
Options:
- type: onedrive
- client_id: XXXX
- client_secret: XXXX
- tenant: XXXX
- token: {"access_token":"XXXX","expiry":"2025-07-06T17:59:31.582222+08:00","expires_in":3730}
- drive_id: b!7yM_sJu4KkGrfwON0hPruCBSyEOHXtpMhSzzsMAboHLDMFGZ_OxZT7Oya6Ob0Rfv
- drive_type: business
Keep this "onedrive-sa" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
```

基本上根据上面也就操作好了，根据你的安装目录，找到根目录下的rclone.conf文件，把你这个挂载存储的信息复制粘贴到服务器 rclone.conf 里。

```shell
vim ~/.config/rclone/rclone.conf
```

最后用命令测试一下能否读取到数据即可。

```shell
rclone ls OneDrive:/ 
#若前序配置无误，则执行该命令后会列出远程空间ftp用户定义的根目录文件
rclone copy OneDrive:/example.txt /root/ -P 
#若前序配置无误，则执行该命令后会将远程空间ftp用户定义的根目录下的example.txt复制到本地/root文件夹内
rclone copy /root/example.txt OneDrive:/-P
#若前序配置无误，则执行该命令后会将本地/root文件夹内example.txt复制到远程空间ftp用户定义的根目录下
#"-P" 参数能大概看个传输速度
```