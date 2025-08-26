---
tags: [llm]
title: "Ubuntu 22.04+8*A800 Ollama 运行deepseek-r1"
published: 2025-01-21
---

发现 deepseek-r1 的 617B 我的机器刚好满足条件，本着闲着也是闲着，测试一下。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-21.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-21.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-21.jpg" alt="" loading="lazy">
</picture>

## **系统硬件介绍**

- **_Processor : 2\*Intel(R) Xeon(R) Platinum 8362 CPU @ 2.80GHz_**

- **_Num of Core : 128 Cor_e**

- **_Memory : 1024 GB_**

- **_Storage : 1.5T NVMe_**

- **_GPU : 8\*A800_**

- **_NVIDIA-SMI 550.127.05_**

- **_Driver Version: 550.127.05_**

- **_CUDA Version: 12.4_**

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-20.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-20.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-20.jpg" alt="" loading="lazy">
</picture>

## **下载 Ollama**

访问下载： [https://ollama.com/](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Follama.com%2F&objectId=2418563&objectType=1&isNewArticle=undefined)

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-18.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-18.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-18.jpg" alt="" loading="lazy">
</picture>

## **安装Ollama**

直接借用官方脚本

```shell
curl -fsSL https://ollama.com/install.sh | sh
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-19.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-19.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-19.jpg" alt="" loading="lazy">
</picture>

### 配置模型下载路径

```shell
mkdir -p /root/ollama/ollama_models
```

并且添加到 ollama 中

如果开始没配置OLLAMA\_MODELS ，默认路径是/usr/share/ollama/.ollama/models

```shell
vim .bashrc
export OLLAMA_MODELS=/root/ollama/ollama_models
```

### **启动ollama服务**

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-22.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-22.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-22.jpg" alt="" loading="lazy">
</picture>

### 运行 Ollama

ollama server

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-23.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-23.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-23.jpg" alt="" loading="lazy">
</picture>

### **修改ollama** 配置

默认情况下，Ollama只会关注localhost的11434端口，因此只能从localhost访问。

```shell
vim /etc/systemd/system/ollama.service
在 [Service] 下添加  Environment="OLLAMA_HOST=0.0.0.0"
​
cat /etc/systemd/system/ollama.service
[Unit]
Description=Ollama Service
After=network-online.target
​
[Service]
ExecStart=/usr/local/bin/ollama serve
User=ollama
Group=ollama
Restart=always
RestartSec=3
Environment="PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin"
Environment="OLLAMA_HOST=0.0.0.0"
​
[Install]
WantedBy=default.target
```

### 重启 ollama

```shell
systemctl daemon-reload
​
systemctl restart ollama
​
关闭服务
systemctl stop ollama
启动服务
systemctl start ollama
```

## 运行模型

```shell
ollama run deepseek-r1:671b 
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-26.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-26.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-26.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-27.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-27.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-27.jpg" alt="" loading="lazy">
</picture>

## 配置 Docker + Nvidia-docker2

### 安装 Docker

```shell
export DOWNLOAD_URL="https://mirrors.tuna.tsinghua.edu.cn/docker-ce"
curl -fsSL https://raw.githubusercontent.com/docker/docker-install/master/install.sh | sh
```

### 安装 GPU-Docker 组件

```shell
 安装 gpu-docekr 
 
apt-get install -y nvidia-docker2
nvidia-ctk runtime configure --runtime=docker
 
这个会修改 daemon.json  文件，增加容器运行时
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-28.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-28.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-28.jpg" alt="" loading="lazy">
</picture>

### 配置 Docker 参数

```shell
root@catcat:~# cat /etc/docker/daemon.json
{
    "data-root": "/root/docker_data",
    "experimental": true,
    "log-driver": "json-file",
    "log-opts": {
        "max-file": "3",
        "max-size": "20m"
    },
    "registry-mirrors": [
        "https://docker.1ms.run"
    ],
    "runtimes": {
        "nvidia": {
            "args": [],
            "path": "nvidia-container-runtime"
        }
    }
}
```

### 测试

```shell
docker run --rm -it --gpus all ubuntu:22.04 /bin/bash
```

```shell
root@catcat:~# docker run --rm -it --gpus all ubuntu:22.04 /bin/bash
Unable to find image 'ubuntu:22.04' locally
22.04: Pulling from library/ubuntu
6414378b6477: Pull complete 
Digest: sha256:0e5e4a57c2499249aafc3b40fcd541e9a456aab7296681a3994d631587203f97
Status: Downloaded newer image for ubuntu:22.04
root@e36b1bb454b6:/# nvidia-smi
Wed Jan 22 02:03:29 2025       
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 550.127.05             Driver Version: 550.127.05     CUDA Version: 12.4     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  NVIDIA A800-SXM4-80GB          Off |   00000000:23:00.0 Off |                    0 |
| N/A   29C    P0             56W /  400W |       4MiB /  81920MiB |      0%      Default |
|                                         |                        |             Disabled |
+-----------------------------------------+------------------------+----------------------+
|   1  NVIDIA A800-SXM4-80GB          Off |   00000000:24:00.0 Off |                    0 |
| N/A   29C    P0             56W /  400W |       4MiB /  81920MiB |      0%      Default |
|                                         |                        |             Disabled |
+-----------------------------------------+------------------------+----------------------+
|   2  NVIDIA A800-SXM4-80GB          Off |   00000000:43:00.0 Off |                    0 |
| N/A   28C    P0             57W /  400W |       4MiB /  81920MiB |      0%      Default |
|                                         |                        |             Disabled |
+-----------------------------------------+------------------------+----------------------+
|   3  NVIDIA A800-SXM4-80GB          Off |   00000000:44:00.0 Off |                    0 |
| N/A   28C    P0             58W /  400W |       4MiB /  81920MiB |      0%      Default |
|                                         |                        |             Disabled |
+-----------------------------------------+------------------------+----------------------+
|   4  NVIDIA A800-SXM4-80GB          Off |   00000000:83:00.0 Off |                    0 |
| N/A   28C    P0             57W /  400W |       4MiB /  81920MiB |      0%      Default |
|                                         |                        |             Disabled |
+-----------------------------------------+------------------------+----------------------+
|   5  NVIDIA A800-SXM4-80GB          Off |   00000000:84:00.0 Off |                    0 |
| N/A   29C    P0             60W /  400W |       4MiB /  81920MiB |      0%      Default |
|                                         |                        |             Disabled |
+-----------------------------------------+------------------------+----------------------+
|   6  NVIDIA A800-SXM4-80GB          Off |   00000000:C3:00.0 Off |                    0 |
| N/A   29C    P0             59W /  400W |       4MiB /  81920MiB |      0%      Default |
|                                         |                        |             Disabled |
+-----------------------------------------+------------------------+----------------------+
|   7  NVIDIA A800-SXM4-80GB          Off |   00000000:C4:00.0 Off |                    0 |
| N/A   29C    P0             60W /  400W |       4MiB /  81920MiB |      0%      Default |
|                                         |                        |             Disabled |
+-----------------------------------------+------------------------+----------------------+
                                                                                         
+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI        PID   Type   Process name                              GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|  No running processes found                                                             |
+-----------------------------------------------------------------------------------------+
```

## 部署 [Open WebUI](https://openwebui.com/)

```shell
version: '3.8'

services:
  open-webui:
    image: ghcr.sakiko.de/open-webui/open-webui:main
    container_name: open-webui
    restart: always
    ports:
      - "3000:8080"
    volumes:
      - open-webui:/app/backend/data
    extra_hosts:
      - "host.docker.internal:host-gateway"

volumes:
  open-webui:
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/01/image-29.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/01/image-29.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/01/image-29.jpg" alt="" loading="lazy">
</picture>