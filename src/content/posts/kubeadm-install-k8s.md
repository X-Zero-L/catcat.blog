---
tags: [kubernetes, laboratory]
title: "kubeadm 方式安装k8s集群"
published: 2023-12-03
---

## 环境准备[](https://learn-k8s-from-scratch.readthedocs.io/en/latest/k8s-install/kubeadm.html#id1)

准备三台Linux机器（本文以Ubuntu20.04LTS系统为例），三台机器之间能相互通信，我这边使用vps，不方便泄露IP见谅。

以下是本文使用的三台Ubuntu 20.04LTS：

| hostname | IP | system | memory |
| --- | --- | --- | --- |
| k8s-master |  | Ubuntu 20.04 LTS | 8GB |
| k8s-worker1 |  | Ubuntu 20.04 LTS | 8GB |
| k8s-worker2 |  | Ubuntu 20.04 LTS | 8GB |

## 安装containerd, kubeadm, kubelet, kubectl[#](https://learn-k8s-from-scratch.readthedocs.io/en/latest/k8s-install/kubeadm.html#containerd-kubeadm-kubelet-kubectl)

把下面的shell脚本保存成一个文件，比如叫master.sh，放到三台机器里。

然后分别在三台机器上执行sudo sh master.sh 运行脚本。

> 如果要修改Kubernetes版本，请修改下面脚本的最后一行，当前我们使用的版本是 `1.28.0`, 可以通过命令 `apt list -a kubeadm` 查看可用版本

```shell
#!/bin/bash

echo "[TASK 1] Disable and turn off SWAP"
sed -i '/swap/d' /etc/fstab
swapoff -a

echo "[TASK 2] Stop and Disable firewall"
systemctl disable --now ufw >/dev/null 2>&1

echo "[TASK 3] Enable and Load Kernel modules"
cat >>/etc/modules-load.d/containerd.conf<<EOF
overlay
br_netfilter
EOF
modprobe overlay
modprobe br_netfilter

echo "[TASK 4] Add Kernel settings"
cat >>/etc/sysctl.d/kubernetes.conf<<EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables  = 1
net.ipv4.ip_forward                 = 1
EOF
sysctl --system >/dev/null 2>&1

echo "[TASK 5] Install containerd runtime"
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt -qq update >/dev/null 2>&1
apt install -qq -y containerd.io >/dev/null 2>&1
containerd config default >/etc/containerd/config.toml
sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml
systemctl restart containerd
systemctl enable containerd >/dev/null 2>&1

echo "[TASK 6] Add apt repo for kubernetes"
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add - >/dev/null 2>&1
apt-add-repository "deb http://apt.kubernetes.io/ kubernetes-xenial main" >/dev/null 2>&1

echo "[TASK 7] Install Kubernetes components (kubeadm, kubelet and kubectl)"
apt install -qq -y kubeadm=1.28.0-00 kubelet=1.28.0-00 kubectl=1.28.0-00 >/dev/null 2>&1
```

脚本结束以后，可以检查下kubeadm，kubelet，kubectl的安装情况,如果都能获取到版本号，说明安装成功。

```shell
kubeadm version
kubelet --version
kubectl version
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/12/image.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/12/image.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/12/image.jpg" alt="" loading="lazy">
</picture>

### 初始化master节点

\[admonition title="Warning" color="blue"\]以下操作都在master节点上进行\[/admonition\]

可以先拉取集群所需要的images（可做可不做）

```shell
sudo kubeadm config images pull
```

如果拉取成功，会看到类似下面的输出：

```shell
[config/images] Pulled registry.k8s.io/kube-apiserver:v1.28.2
[config/images] Pulled registry.k8s.io/kube-controller-manager:v1.28.2
[config/images] Pulled registry.k8s.io/kube-scheduler:v1.28.2
[config/images] Pulled registry.k8s.io/kube-proxy:v1.28.2
[config/images] Pulled registry.k8s.io/pause:3.9
[config/images] Pulled registry.k8s.io/etcd:3.5.6-0
[config/images] Pulled registry.k8s.io/coredns/coredns:v1.9.3
```

初始化Kubeadm

- `--apiserver-advertise-address` 这个地址是本地用于和其他节点通信的IP地址，即**Master 节点IP**

- `--pod-network-cidr` pod network 地址空间

```shell
vagrant@k8s-master:~$ sudo kubeadm init --apiserver-advertise-address=192.168.56.10  --pod-network-cidr=10.244.0.0/16
```

最后一段的输出要保存好, 这一段指出后续需要做什么配置。

1. 准备 .kube

3. 部署pod network方案

5. 添加worker节点

```shell
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

Alternatively, if you are the root user, you can run:

  export KUBECONFIG=/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join ip:6443 --token 75tjpr.mekbas8r3yvimqen \
        --discovery-token-ca-cert-hash sha256:3366cd93860eaac418ce9b35dda601c88676fe6ba99388672aba4e76cc7369e4
```

### 配置 .kube

```shell
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

### 检查状态

```shell
$ kubectl get nodes
$ kubectl get pods -A
```

### shell 自动补全(Bash)

```shell
source <(kubectl completion bash)
echo "source <(kubectl completion bash)" >> ~/.bashrc
```

### 部署pod network方案

去https://kubernetes.io/docs/concepts/cluster-administration/addons/ 选择一个network方案， 根据提供的具体链接去部署。

这里我们选择overlay的方案，名字叫 `flannel` 部署方法如下：

下载文件 [https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml](https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml) ，并进行如下修改：

```shell
curl -LO https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml
```

确保network是我们配置的 –pod-network-cidr 10.244.0.0/16

```shell
net-conf.json: |
  {
    "Network": "10.244.0.0/16",
    "Backend": {
      "Type": "vxlan"
    }
  }
```

在 kube-flannel的容器args里，确保有iface=网卡名 是我们的–apiserver-advertise-address=ip 接口名

```shell
ip a 
```

```shell
- name: kube-flannel
 #image: flannelcni/flannel:v0.18.0 for ppc64le and mips64le (dockerhub limitations may apply)
  image: rancher/mirrored-flannelcni-flannel:v0.18.0
  command:
  - /opt/bin/flanneld
  args:
  - --ip-masq
  - --kube-subnet-mgr
  - --iface=网卡名
```

举例：

```shell
vagrant@k8s-master:~$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
      valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
      valid_lft forever preferred_lft forever
2: enp0s3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 02:9a:67:51:1e:b6 brd ff:ff:ff:ff:ff:ff
    inet 10.0.2.15/24 brd 10.0.2.255 scope global dynamic enp0s3
      valid_lft 85351sec preferred_lft 85351sec
    inet6 fe80::9a:67ff:fe51:1eb6/64 scope link
      valid_lft forever preferred_lft forever
3: enp0s8: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 08:00:27:59:c5:26 brd ff:ff:ff:ff:ff:ff
    inet 192.168.56.10/24 brd 192.168.56.255 scope global enp0s8
      valid_lft forever preferred_lft forever
    inet6 fe80::a00:27ff:fe59:c526/64 scope link
      valid_lft forever preferred_lft forever
```

检查结果， 如果显示下面的结果，pod都是running的状态，说明我们的network方案部署成功（特别是coredns和flannel)。

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/12/image-1.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/12/image-1.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/12/image-1.jpg" alt="" loading="lazy">
</picture>

## 添加worker节点[](https://learn-k8s-from-scratch.readthedocs.io/en/latest/k8s-install/kubeadm-cn.html#worker)

添加worker节点非常简单，直接在worker节点上运行join即可，注意–token

```shell
sudo kubeadm join 192.168.56.10:6443 --token 0pdoeh.wrqchegv3xm3k1ow \
  --discovery-token-ca-cert-hash sha256:f4e693bde148f5c0ff03b66fb24c51f948e295775763e8c5c4e60d24ff57fe82
```

最后在master节点查看node和pod结果。(比如我们有两个worker节点)

```shell
kubectl get nodes
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/12/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/12/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/12/image-2.jpg" alt="" loading="lazy">
</picture>