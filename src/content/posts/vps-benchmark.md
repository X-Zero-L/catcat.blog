---
tags: [server-guide]
title: "VPS 常用测试脚本"
published: 2023-02-28
---

## 1.体检脚本

### Yabs 脚本

```shell
GB6 跑分脚本，附带宽测试：
curl -sL yabs.sh | bash

GB6 剔除带宽测试，因为都是国外节点测试，国内跑没多大意义：
curl -sL yabs.sh | bash -s -- -i

GB5 跑分脚本，附带宽测试：
curl -sL yabs.sh | bash -5

GB5 剔除带宽测试：
curl -sL yabs.sh | bash -s -- -i -5

GB5 单向测试脚本
bash <(wget -qO- https://raw.githubusercontent.com/i-abc/GB5/main/gb5-test.sh)

Benchy Yabs 分支测试脚本
curl -Ls benchy.pw | sh

上古老脚本
curl -sL bench.monster | bash -s -- -asia
```

### 融合怪Go脚本

```shell
国际用户无加速：

export noninteractive=true && curl -L https://raw.githubusercontent.com/oneclickvirt/ecs/master/goecs.sh -o goecs.sh && chmod +x goecs.sh && bash goecs.sh env && bash goecs.sh install && goecs

国际/国内使用 CDN 加速：

export noninteractive=true && curl -L https://cdn.spiritlhl.net/https://raw.githubusercontent.com/oneclickvirt/ecs/master/goecs.sh -o goecs.sh && chmod +x goecs.sh && bash goecs.sh env && bash goecs.sh install && goecs

国内用户使用 CNB 加速：

export noninteractive=true && curl -L https://cnb.cool/oneclickvirt/ecs/-/git/raw/main/goecs.sh -o goecs.sh && chmod +x goecs.sh && bash goecs.sh env && bash goecs.sh install && goecs

短链接：

export noninteractive=true && curl -L https://bash.spiritlhl.net/goecs -o goecs.sh && chmod +x goecs.sh && bash goecs.sh env && bash goecs.sh install && goecs
```

## 2.回程脚本

```shell
curl https://raw.githubusercontent.com/ludashi2020/backtrace/main/install.sh -sSf | sh
```

## 3.一键安装脚本

### Docker

```shell
curl -fsSL https://raw.githubusercontent.com/Yuri-NagaSaki/Shell/refs/heads/main/install-docker.sh | bash
```

### Zsh

```shell
curl -fsSL https://raw.githubusercontent.com/Yuri-NagaSaki/Shell/refs/heads/main/install-zsh.sh | bash
```

### qbittorrent

```shell
curl -fsSL https://raw.githubusercontent.com/Yuri-NagaSaki/Shell/refs/heads/main/install_qbt.sh | bash
```

### TCP内核一键调整

```shell
wget https://raw.githubusercontent.com/Yuri-NagaSaki/Shell/refs/heads/main/network.sh | bash
```

### 代理一键设置脚本

```shell
wget https://raw.githubusercontent.com/Yuri-NagaSaki/Shell/refs/heads/main/proxy-manager.sh | bash
```

### Snell 脚本

```shell
bash <(curl -fsSL snell-ten.vercel.app)
```

### 代理一键安装

```shell
wget -P /root -N --no-check-certificate "https://raw.githubusercontent.com/mack-a/v2ray-agent/master/install.sh" && chmod 700 /root/install.sh && /root/install.sh
```

## 4.NodeJS NVM脚本

```shell
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"
# Download and install Node.js:
nvm install 22
# Verify the Node.js version:
node -v # Should print "v22.17.1".
nvm current # Should print "v22.17.1".
# Verify npm version:
npm -v # Should print "10.9.2".
```

## 5.解锁测试

```shell
bash <(curl -Ls unlock.icmp.ing/test.sh)
bash <(curl -sL IP.Check.Place)
bash <(curl -Ls Net.Check.Place)
```

## 6.综合工具箱

```shell
wget -O box.sh https://raw.githubusercontent.com/BlueSkyXN/SKY-BOX/main/box.sh && chmod +x box.sh && clear && ./box.sh
```

## 7.流媒体测试

```shell
bash <(curl -Ls unlock.icmp.ing/test.sh) -m 4
bash <(curl -Ls unlock.icmp.ing/test.sh)
bash <(curl -sL IP.Check.Place)
```

## 8.Oracle 修改root脚本

```shell
#!/bin/bash
echo root:11235879 |sudo chpasswd root
sudo sed -i 's/^#\?PermitRootLogin.*/PermitRootLogin yes/g' /etc/ssh/sshd_config;
sudo sed -i 's/^#\?PasswordAuthentication.*/PasswordAuthentication yes/g' /etc/ssh/sshd_config;
sudo service sshd restart
```

默认密码是: 11235879  
登录后一定要修改密码！命令：`passwd`

## 9.Swap脚本

```shell
wget https://www.moerats.com/usr/shell/swap.sh && bash swap.sh
```

## 10.Oracle dd Debian11 脚本

```shell
bash <(wget --no-check-certificate -qO- 'https://moeclub.org/attachment/LinuxShell/InstallNET.sh') -d 11 -v 64 -a  -p 自定义密码
```

## 11.byte-unixbench 性能测试

```shell
wget --no-check-certificate https://raw.githubusercontent.com/Yuri-NagaSaki/Shell/refs/heads/main/unixbench.sh && chmod +x unixbench.sh && ./unixbench.sh
```

## 12.[PerformanceTest Linux](https://www.passmark.com/products/pt_linux/download.php) 测试

```shell
wget -O pt_linux_x64 https://catcat.cloud/d/ftp/pt_linux_x64?sign=OQ3rTU9W2qrxBYlbOh774O0zB8r28t2Yk2xjg6jFQmA=:0 && chmod +x pt_linux_x64 && apt update && apt install -y libncurses5 && ln -sf /usr/lib/libncurses.so.6 /usr/lib/libncurses.so.5 && ldconfig && ./pt_linux_x64
```

## 13.杜甫通用检测脚本

```shell
# English
curl -sL https://sick.onl | bash

# Chinese
curl -sL https://sick.onl | bash -s -- -cn
```

## 14.独立服务器检测硬盘通电时间

```shell
wget https://github.com/Aniverse/A/raw/i/a && bash a
```

## 15.网络测试脚本

```shell
region_name = na, sa, eu, asia, africa, au, middle-east, india, china, iran, indonesia
curl -sL nws.sh | bash -s -- -r region_name

wget -qO- bench.sh | bash
```

## 16.Warp 脚本

```shell
https://gitlab.com/fscarmen/warp.git

warp 一键脚本
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/menu.sh && bash menu.sh
warp-go 一键脚本
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/warp-go.sh && bash warp-go.sh
```

## 17.SpeedTest 安装

```shell
sudo apt-get install curl
curl -s https://packagecloud.io/install/repositories/ookla/speedtest-cli/script.deb.sh | sudo bash
sudo apt-get install speedtest
```

## 18.国内常用脚本

```shell
更换镜像源
bash <(curl -sSL https://linuxmirrors.cn/main.sh) 
Docker 安装
export DOWNLOAD_URL="https://mirrors.tuna.tsinghua.edu.cn/docker-ce"# 如您使用 curl
curl -fsSL https://raw.githubusercontent.com/docker/docker-install/master/install.sh | sh
# 如您使用 wget
wget -O- https://raw.githubusercontent.com/docker/docker-install/master/install.sh | sh
```

## 19.ServerStatus 部署

```shell
curl -sS -O https://raw.githubusercontent.com/Yuri-NagaSaki/Shell/refs/heads/main/setup_serverstatus.sh && chmod +x setup_serverstatus.sh && ./setup_serverstatus.sh
```

## 20.PVE 脚本

```shell
更换PVE主题脚本
git clone https://github.com/Happyrobot33/PVEThemes && cd PVEThemes && chmod +x install.sh && ./install.sh
```

## 21.Clash 一键设置

```shell
git clone --branch master --depth 1 https://github.com/nelvko/clash-for-linux-install.git \
  && cd clash-for-linux-install \
  && sudo bash install.sh
```

## 22.DD 一键重装脚本

具体参考 [https://github.com/bin456789/reinstall](https://github.com/bin456789/reinstall)

```shell
curl -O https://raw.githubusercontent.com/bin456789/reinstall/main/reinstall.sh || wget -O reinstall.sh $_
bash reinstall.sh debian --ssh-key ""
```