---
title: "Docker 部署 Vertex 进行刷流"
published: 2025-03-08
categories: 
  - "pt"
  - "laboratory"
---

其实我已经不刷了，把方案和配置留存记录一下。一些脚本在上一篇文章里。

首先我建议你需要买个盒子，大陆家宽刷流的省省还有付费买商人盒子之类的，一点意义没有。

具体可见：[PT盒子教程&如何种子竞速刷流](https://catcat.blog/seedbox-race.html)

### 项目介绍

Vertex 是一个专为 PT（私有种子网络）玩家设计的追剧刷流一体化综合管理工具。它集成了多种功能，帮助用户高效地管理和追踪剧集，特别适合喜欢使用 PT 的用户群体。项目基于 JavaScript、Vue.js 和 Less 开发，使用 Node.js 作为后端技术栈，并支持 Docker 容器化部署，简化了环境配置和依赖管理。

### 主要功能

1. **追剧管理**：帮助用户追踪和管理剧集进度。

3. **刷流支持**：优化 PT 网络中的刷流任务，提升效率。

5. **自动化任务**：通过 Webhook 实现任务触发和通知。

7. **媒体库集成**：支持与 Emby 等媒体库工具集成，方便播放和管理

## 部署

其实官网已经有完善的部署

```
apt update -y && 
apt upgrade -y && 
apt install curl -y && 
curl -fsSL https://get.docker.com -o get-docker.sh && 
sh get-docker.sh && 
timedatectl set-timezone Asia/Shanghai && 
mkdir -p /root/vertex && 
chmod 777 /root/vertex && 
docker run -d --name vertex --restart unless-stopped --network host -v /root/vertex:/vertex -e TZ=Asia/Shanghai lswl/vertex:stable
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-13.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-13.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-13.jpg" alt="" loading="lazy">
</picture>

### 访问Vertex

访问vertex存储路径/root/vertex/data/ 鼠标双击password查看初始密码。

```
 cat /root/vertex/data/password
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-14.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-14.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-14.jpg" alt="" loading="lazy">
</picture>

如果和上面一眼，默认vertex服务监听的3000端口

访问 ip:3000

默认用户admin，密码是上面获取的

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-15.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-15.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-15.jpg" alt="" loading="lazy">
</picture>

## 配置

我这里就不在赘述一些qb的连接配置，TG的通知什么的。

Vertex的基础安装参照：[https://wiki.vertex.icu](https://wiki.vertex.icu/)（感谢栗佬）

**下面部分配置来自互联网备份。有的原作者已经删帖，无法引用。**

还有部分规则来自 Nodeseek-[vertex刷流工具的规则](https://www.nodeseek.com/post-273783-1)

```
根据自身盒子io情况，硬盘大小和刷的站点，勾选删种和修改里面的参数，不要直接套用。
```

#### 黑车1

```
(maindata, torrent) => {
  const categoryList = ["keep"];
  let ruleData = [
    { down: 10, up: 2 },
    { down: 5, up: 1 },
  ];
  const { state, category, uploadSpeed, downloadSpeed } = torrent;
  if (categoryList.indexOf(category) !== -1) {
    return false;
  }
  for (const rule of ruleData) {
    if (
      state == "downloading" &&
      downloadSpeed >= util.calSize(rule.down, "MiB") &&
      uploadSpeed <= util.calSize(rule.up, "MiB")
    ) {
      return true;
    }
  }

  return false;
};
```

#### 黑车2

```
(maindata, torrent) => {
  const categoryList = ["keep"];
  const { state, category, uploadSpeed, downloadSpeed } = torrent;
  if (categoryList.indexOf(category) !== -1) {
    return false;
  }
  if (
    state == "downloading" &&
    downloadSpeed >= util.calSize(10, "MiB") &&
    downloadSpeed / uploadSpeed >= 1.8
  ) {
    return true;
  }

  return false;
};
```

> > 第一版的黑车是通过写死的key和value然后for循环去取里面的数值，简单粗暴，但是在2.5g管以及10g管的情况下，判断就用不上了，维护成本过高。第二版的黑车主要思路是，下载速度除上传速度当大于1.8这区间的时候进行删种。分成写两个的原因是黑车1是针对刚开始发车追车时候判断的，避免一开始下载10上传5这种被误删。

#### 无效做种

```
(maindata, torrent) => {
  const categoryList = ["keep"];
  const stateList = ["uploading", "stalledUP"];
  const { state, uploadSpeed, category, completedTime } = torrent;
  if (categoryList.indexOf(category) !== -1) {
    return false;
  }
  if (
    stateList.indexOf(state) !== -1 &&
    uploadSpeed <= util.calSize(512, "KiB") &&
    moment().unix() - completedTime >= 5400
  ) {
    return true;
  }

  return false;
};
```

> ```
> 无效做种是针对做种超过一个半小时的时候，并且上传小于512kb的种子。如果下载或者做种的种子本身过多，可以进行修改。
> ```

#### 分享率

```
(maindata, torrent) => {
  const categoryList = [
    "keep",
    "chdbits",
    "ourbits",
    "hdhome",
    "lemonhd",
    "pter",
    "audiences",
    "hdchina",
    "hdsky",
    "hddolby",
  ];
  const { uploaded, size, category } = torrent;
  if (categoryList.indexOf(category) !== -1) {
    return false;
  }
  if (uploaded / size >= 3) {
    return true;
  }

  return false;
};
```

> ```
> 分享率就是3倍跳车，具体要改什么站点，就按格式改categoryList里的参数即可，每个人根据站点以及vip情况自行修改。
> ```

#### 最长下载时间

```
(maindata, torrent) => {
  const categoryList = ["keep"];
  const stateList = ["downloading", "stalledDL"];
  const { state, addedTime, category, uploadSpeed } = torrent;
  if (categoryList.indexOf(category) !== -1) {
    return false;
  }
  if (
    stateList.indexOf(state) !== -1 &&
    moment().unix() - addedTime >= 57600 &&
    uploadSpeed <= util.calSize(5, "MiB")
  ) {
    return true;
  }

  return false;
};
```

> ```
> 针对那些16个小时内没有下完的龟速种子，大部分情况下都是发种人盒子崩了什么的。上传速度如果大于5m的，不删除。
> ```

#### 慢车 持续40s

```
(maindata, torrent) => {
  const categoryList = ["keep"];
  const stateList = ["downloading", "stalledDL"];
  const { state, uploadSpeed, progress, category, leecher } = torrent;
  if (categoryList.indexOf(category) !== -1) {
    return false;
  }
  if (
    (moment().hour() >= 0 && moment().hour() <= 8) ||
    maindata.leechingCount <= 10 ||
    leecher >= 100
  ) {
    return false;
  }
  if (
    stateList.indexOf(state) !== -1 &&
    uploadSpeed <= util.calSize(250, "KiB") &&
    progress >= 0.1
  ) {
    return true;
  }

  return false;
};
```

> ```
> 1.在0点-8点这个时间段，种子数量小于10个时跳过，下载人数大于100时跳过，保证夜间不误删，能有足够的种子。2.进度大于10%，上传速度小于250kb持续40的跳车。
> ```

#### 长时间未开始

```
(maindata, torrent) => {
  const categoryList = ["keep"];
  const { state, category, progress, addedTime } = torrent;
  if (categoryList.indexOf(category) !== -1) {
    return false;
  }
  if (
    moment().hour() >= 0 &&
    moment().hour() <= 8 &&
    state == "stalledDL" &&
    progress <= 0.05 &&
    moment().unix() - addedTime >= 18000
  ) {
    return true;
  }
  if (
    state == "stalledDL" &&
    progress <= 0.05 &&
    moment().unix() - addedTime >= 14400
  ) {
    return true;
  }

  return false;
};
```

> ```
> 删除0-8点这个时间段，超过五小时并且进度小于5%的种子。删除常规时间段，超过四小时并且进度小于5%的种子
> ```

#### 下载人数少

```
(maindata, torrent) => {
  const categoryList = ["keep"];
  const stateList = ["downloading", "stalledDL"];
  const { state, category, leecher, uploadSpeed, addedTime } = torrent;
  if (categoryList.indexOf(category) !== -1) {
    return false;
  }
  if (
    stateList.indexOf(state) !== -1 &&
    leecher <= 10 &&
    uploadSpeed <= util.calSize(500, "KiB") &&
    moment().unix() - addedTime >= 900
  ) {
    return true;
  }

  return false;
};
```

> ```
> 删除下载人数小于10，上传速度低于500kb，添加超过20分钟的非潜力种。
> ```

#### 空1小时跳车

```
持续时间10-15s
```

```
(maindata, torrent) => {
  const categoryList = ["keep"];
  const { state, category, progress } = torrent;
  const { eta } = torrent.originProp;
  if (categoryList.indexOf(category) !== -1) {
    return false;
  }
  if (state == "downloading" && category == 'hdsky' && progress >= 0.05 && progress <= 0.2 && (eta / 60) <= 70) {
    return true;
  }

  return false;
};
```

#### 瓷器非免跳车

```
qb的分类必须和下方的判断一致。默认使用hdchina
```

```
(maindata, torrent) => {
  const categoryList = ["keep"];
  const { state, category, addedTime } = torrent;
  const { num_incomplete } = torrent.originProp;
  if (categoryList.indexOf(category) !== -1) {
    return false;
  }
  if (state == 'downloading' && category == 'hdchina' && moment().unix() - addedTime >= 180 && num_incomplete <= 12) {
    return true;
  }

  return false;
};
```

#### 岛非免跳车

```
qb的分类必须和下方的判断一致。默认使用chdbits
```

```
(maindata, torrent) => {
  const categoryList = ["keep"];
  const { state, category, addedTime } = torrent;
  const { num_incomplete } = torrent.originProp;
  if (categoryList.indexOf(category) !== -1) {
    return false;
  }
  if (state == 'downloading' && category == 'chdbits' && moment().unix() - addedTime >= 180 && num_incomplete <= 40) {
    return true;
  }

  return false;
};
```

#### 剩余空间删种

我这里是10g，你需要根据你的盒子自己改

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-16.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-16.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-16.jpg" alt="" loading="lazy">
</picture>

#### 根据种子的流行程度动态删除种子

超过七天才可能删除符合规则的种子，删种按分享率删除，每在3的基础上多0.1分享率就多留一天。

```
(maindata, torrent) => {
const config = {
  deleteHours: 7 * 24 *3600,    // 超时才删种的时间
  ratioThreshold: 3,          // 基础分享率一阈值（上传量 / 种子大小）
  enableLogging: false,        // 是否启用日志记录
};
    const moment = require('moment'); // 确保 moment 模块可用
    const now = moment().unix();

  // 辅助函数：向 /vertex/log22/log.txt 中追加日志信息
function logFailure(message) {
  if (!config.enableLogging) return; // 如果未启用日志记录，直接返回
  const fs = require('fs');
  const path = require('path');
  const logFilePath = '/vertex/log22/log.txt';
  const logDir = path.dirname(logFilePath);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  const logMessage = `${new Date().toISOString()} - ${message}\n`;
  fs.appendFileSync(logFilePath, logMessage);
}
  
  // 计算下载时间和分享率
 const downloadTime = now - torrent.addedTime;
 const downloadTime2 = downloadTime - config.deleteHours;
 const extraDays = Math.max(0, Math.floor(downloadTime2 / 86400)); // 每天86400秒
  // 动态调整分享率上限
 const ratioLimit = config.ratioThreshold + extraDays * 0.1;
  
    // 检查种子是否完成下载
    if (now - torrent.completedTime < config.deleteHours ) {
		return false; // 不删除种子
		}
    if (torrent.completedTime > 0 && torrent.ratio < ratioLimit && torrent.uploadSpeed < 10* 1024) {
            return true; // 删除种子
    }
    return false; // 不删除种子
};
```

#### 适用于Hz Cloud 馒头盒子

效果：适应馒头标盒机制，对于小流量的机器不当冤大头额外上传不计入上传流量的部分。同时又不暂停，可以获取魔力。规则：不实际删除种子，超过分享率后设置限速100k，两天后解除限速（适用于馒头盒子机制：新种标盒，两天盒子规则消失，盒子规则限制时间内只计算3倍种子大小上传量，标盒过期后取消限制）

```
// 参数：
//   maindata：qBittorrent 的全局数据
//   torrent：当前种子的信息
(maindata, torrent) => {
	// 统一配置对象（所有时间单位均为小时）
const config = {
  pauseThresholdHours: 72,    // 当种子添加时间小于72小时（3天）且分享率大于阈值时触发暂停
  resumeThresholdHours: 72,   // 当种子添加时间大于72小时时用于恢复（这里与暂停阈值相同）
  ratioThreshold: 3,          // 分享率一阈值（上传量 / 种子大小 > 3时触发操作）
  enableLogging: false,        // 是否启用日志记录
  downloaderId: 'e88e88dd',     // 下载器ID，指定适用的下载器ID
  speedLimit: 100 * 1024,            // 限速值（单位：KB/s）  
};

// 辅助函数：向 /vertex/log22/log.txt 中追加日志信息
function logFailure(message) {
  if (!config.enableLogging) return; // 如果未启用日志记录，直接返回
  const fs = require('fs');
  const path = require('path');
  const logFilePath = '/vertex/log22/log.txt';
  const logDir = path.dirname(logFilePath);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  const logMessage = `${new Date().toISOString()} - ${message}\n`;
  fs.appendFileSync(logFilePath, logMessage);
}

// 获取下载器ID和下载器对象
  const downloaderId = config.downloaderId;
  const client = global.runningClient[downloaderId];
if (!client) {
  logFailure(`未找到下载器 ${downloaderId}`);
  return false;
}

  const moment = require('moment'); // 确保 moment 模块可用
  const now = moment().unix();
  // 计算种子添加后的持续时间（单位：秒）
  const ageSeconds = now - torrent.addedTime;
  // 根据配置中的小时数转换为秒数
  const thresholdSeconds = config.pauseThresholdHours * 3600;
  const thresholdSeconds2 = config.resumeThresholdHours * 3600;
  // 计算“分享率一”：上传量 / 种子大小
  const shareRatio1 = torrent.size > 0 ? torrent.uploaded / torrent.size : 0;
  
 // 如果种子添加时间小于阈值（72小时）且分享率大于阈值，则限速种子
  if (ageSeconds < thresholdSeconds && shareRatio1 > config.ratioThreshold) {
    client.setSpeedLimit(torrent.hash, 'upload', config.speedLimit)
      .then(() => {
        logFailure(`限速种子成功: ${torrent.name}`);
      })
      .catch(err => {
        logFailure(`限速种子 ${torrent.name} 失败: ${err}`);
      });
  }
  
  // 如果种子当前已限速且添加时间大于阈值，则取消限速
  if (ageSeconds > thresholdSeconds2) {
    client.setSpeedLimit(torrent.hash, 'upload', 0)  // 设置为0表示取消限速
      .then(() => {
        logFailure(`取消限速成功: ${torrent.name}`);
      })
      .catch(err => {
        logFailure(`取消限速 ${torrent.name} 失败: ${err}`);
      });
  }
  
  // 始终返回 false，不会执行删种操作

  return false;
};
```

#### RSS规则

可以根据更多规则选择要刷的种子，对于小盘鸡友好，完全不会超过设置的保种体积，同时计算体积带矫正，和性能缓解，2分钟前算过体积就不重新计算了，不会每个种子都算一遍全盘种子大小。可以限制下载数量，种子大小，文件名等，可以自定义开启关闭功能进行组合。15G小盘鸡也能刷了，添加种子前计算下载器中种子的大小，这个不是vertex自带的剩余空间大小，那个实际因为没下完种子可能会超过空间导致占满空间，当然可用提前分配缓解，但是还是不符合需求，这个可以直接实现完全不会超过设置空间。可以说是非常人性化了。注意要设置相应下载器的id。

```
(torrent) => {
  // 配置部分：这些部分可以自定义
  const config = {
    downloaderId: 'e88e88dd',             // 下载器ID，指定适用的下载器ID
    enableLogging: false,                  // 是否启用日志记录
    enableSeedingVolumeLimit: true,        // 是否启用保种体积限制
    seedingVolumeLimit: 50 * 1024 * 1024 * 1024, // 保种体积限制（单位：字节），例如14GB
    enableTaskCountLimit: true,            // 是否启用下载器任务数量限制
    taskCountLimit: 200,                    // 下载器任务数量限制，设置最大任务数
    enableSizeLimit: true,                 // 是否启用种子大小限制
    sizeLimitRange: [1 * 1024 * 1024 * 1024, 10 * 1024 * 1024 * 1024],  // 种子大小范围（单位：字节）
    enableFileNameMatchLimit: false,        // 是否启用文件名匹配限制
    fileNameRegex: /sample|test/i          // 文件名正则匹配，支持正则表达式
  };

  const fs = require('fs');
  const path = require('path');

  // 获取本地时间字符串
  function getLocalTimeString() {
    return new Date().toLocaleString('zh-CN', { hour12: false });
  }

  // 辅助函数：向 /vertex/log22/log.txt 中追加日志信息
  function logFailure(message) {
    if (!config.enableLogging) return; // 如果未启用日志记录，直接返回
    const logFilePath = '/vertex/log22/log.txt';
    const logDir = path.dirname(logFilePath);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    const now = getLocalTimeString();
    fs.appendFileSync(logFilePath, `[${now}] ${message}\n`);
  }

  // 获取下载器ID和下载器对象
  const downloaderId = config.downloaderId; // 当前下载器ID
  const client = global.runningClient[downloaderId];
  if (!client) {
    logFailure(`未找到下载器 ${downloaderId}`);
    return false;
  }

  // 2. 保种体积限制：先检查 /vertex/${downloaderId}/size.txt 中存储的时间和累计体积
  if (config.enableSeedingVolumeLimit) {
    const sizeFilePath = `/vertex/${downloaderId}/size.txt`;
    const sizeDir = path.dirname(sizeFilePath);
    if (!fs.existsSync(sizeDir)) {
      fs.mkdirSync(sizeDir, { recursive: true });
    }
    let currentCumulative = 0;  // 当前累计体积（字节）
    let fileTimestamp = 0;      // 文件中记录的时间（秒）
    const now = Math.floor(Date.now() / 1000); // 当前时间，单位：秒

    // 尝试读取文件，如果存在则解析内容（格式：timestamp,cumulativeSize）
    if (fs.existsSync(sizeFilePath)) {
      try {
        const data = fs.readFileSync(sizeFilePath, 'utf8').trim();
        if (data) {
          const parts = data.split(',');
          if (parts.length === 2) {
            fileTimestamp = Number(parts[0]);
            currentCumulative = Number(parts[1]);
          }
        }
      } catch (err) {
        logFailure(`读取 size.txt 失败: ${err}`);
      }
    } else {
      // 如果文件不存在，则计算累计体积并创建文件
      client.maindata.torrents.forEach(t => {
        currentCumulative += Number(t.size || 0);
      });
      fileTimestamp = now;
      try {
        fs.writeFileSync(sizeFilePath, `${fileTimestamp},${currentCumulative}`);
      } catch (err) {
        logFailure(`写入 size.txt 失败: ${err}`);
      }
    }

    // 如果下载器中没有任务，则重置累计体积为 0
    if (!client.maindata.torrents || client.maindata.torrents.length === 0) {
      currentCumulative = 0;
      fileTimestamp = now;
      try {
        fs.writeFileSync(sizeFilePath, `${fileTimestamp},${currentCumulative}`);
      } catch (err) {
        logFailure(`重置 size.txt 失败: ${err}`);
      }
    }
    // 如果文件中的时间超过2分钟，则重新计算累计体积
    else if (now - fileTimestamp > 120) {
      currentCumulative = 0;
      client.maindata.torrents.forEach(t => {
        currentCumulative += Number(t.size || 0);
      });
      fileTimestamp = now;
      try {
        fs.writeFileSync(sizeFilePath, `${fileTimestamp},${currentCumulative}`);
      } catch (err) {
        logFailure(`更新 size.txt 失败: ${err}`);
      }
    }

    // 确保 torrent.size 为数值
    const torrentSize = Number(torrent.size);

    // 将累计体积加上当前种子的大小，与保种体积限制比较
    if ((currentCumulative + torrentSize) >= config.seedingVolumeLimit) {
      logFailure(`保种体积限制不通过：累计体积 ${currentCumulative} + 当前种子 ${torrentSize} 超过限制 ${config.seedingVolumeLimit}`);
      return false;
    }
  }

  // 3. 下载器任务数量限制：检查下载器当前任务数量
  if (config.enableTaskCountLimit) {
    if (client.maindata.torrents.length >= config.taskCountLimit) {
      logFailure(`任务数量限制不通过：当前任务数量 ${client.maindata.torrents.length} 超过限制 ${config.taskCountLimit}`);
      return false;
    }
  }

  // 4. 种子大小限制：检查种子的大小是否在规定范围内
  if (config.enableSizeLimit) {
    const size = Number(torrent.size);
    if (size < config.sizeLimitRange[0] || size > config.sizeLimitRange[1]) {
      logFailure(`种子大小限制不通过：种子大小 ${size} 不在范围 ${config.sizeLimitRange[0]} - ${config.sizeLimitRange[1]}`);
      return false;
    }
  }

  // 5. 文件名匹配限制：检查文件名是否符合正则匹配
  if (config.enableFileNameMatchLimit) {
    const fileName = torrent.name;
    if (!fileName.match(config.fileNameRegex)) {
      logFailure(`文件名匹配限制不通过：种子名称 "${fileName}" 未匹配正则 ${config.fileNameRegex}`);
      return false;
    }
  }

  // 如果所有条件都满足，则表示添加该种子。
  // 在返回 true 前，如果启用了保种体积限制，则更新 /vertex/${downloaderId}/size.txt
  if (config.enableSeedingVolumeLimit) {
    const sizeFilePath = `/vertex/${downloaderId}/size.txt`;
    let cumulative = 0;
    let fileTimestamp = 0;
    if (fs.existsSync(sizeFilePath)) {
      try {
        const data = fs.readFileSync(sizeFilePath, 'utf8').trim();
        if (data) {
          const parts = data.split(',');
          if (parts.length === 2) {
            fileTimestamp = Number(parts[0]);
            cumulative = Number(parts[1]);
          }
        }
      } catch (err) {
        logFailure(`读取 size.txt 更新部分失败: ${err}`);
      }
    }
    cumulative += Number(torrent.size);
    try {
      fs.writeFileSync(sizeFilePath, `${fileTimestamp},${cumulative}`);
    } catch (err) {
      logFailure(`更新 size.txt 失败: ${err}`);
    }
  }

  return true;
};
```

## Hetzner Cloud 自动检测流量并删除开机脚本

实时监测Hetzner流量状况，超过预设值时自动删除并用制定快照创建新机器。

属于滥用，我就不公开了，想写的自己写吧。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/03/image-17.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/03/image-17.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/03/image-17.jpg" alt="" loading="lazy">
</picture>
