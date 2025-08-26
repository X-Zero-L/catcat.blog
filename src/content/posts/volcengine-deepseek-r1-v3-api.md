---
tags: [llm, laboratory]
title: "火山引擎 DeepSeek R1 满血 API 白嫖指南"
published: 2025-02-20
coverImage: "image-15.png"
---

**DeepSeek 官方 API 一直提示系统繁忙，原因是限制了每个账户一段时间只能请求一次满血模型。现在市面上类似的产品也多，要么不是满血的模型，要不也存在繁忙的问题。火山背靠字节提供 DeepSeek 每个模型 50W Token 的免费推理额度且支持3万RPM和500万TPM不限速，相比硅基什么的更稳定更好用。同样，字节属于国内平台，实名无可避免。**

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-14.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-14.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-14.jpg" alt="" loading="lazy">
</picture>

### 注册账号完成实名认证

**这里用手机号注册就行，现在注册赠送每个模型50w Token 和15元代金券。**

**我的邀请：**

[https://www.volcengine.com/activity/deepseek?utm\_term=202502dsinvite&ac=DSASUQY5&rc=8X5LJV7Y](https://www.volcengine.com/activity/deepseek?utm_term=202502dsinvite&ac=DSASUQY5&rc=8X5LJV7Y)

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-15.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-15.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-15.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-16.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-16.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-16.jpg" alt="" loading="lazy">
</picture>

### 开通模型

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-17.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-17.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-17.jpg" alt="" loading="lazy">
</picture>

## 创建API Key

需要记下来保存的。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-18.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-18.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-18.jpg" alt="" loading="lazy">
</picture>

## 创建推理点

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-19.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-19.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-19.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-20.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-20.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-20.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-21.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-21.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-21.jpg" alt="" loading="lazy">
</picture>

这样就会得到你的接入点ID,用于调用模型。

## 客户端调用

这里可以使用开源的客户端 Cherry Studio，提供 Windows/Mac/Linux 版本。

项目地址： [Cherry Studio - 全能的AI助手](https://cherry-ai.com/download)

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-22.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-22.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-22.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-23.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-23.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-23.jpg" alt="" loading="lazy">
</picture>

如果需要手机使用，可以考虑 [ChatBox](https://chatboxai.app/zh)。

50W token 还是可以用挺久的,加上赠送的15元.用完了再买 50W 也只需要 1 块钱（目前的价格和官方 API 相同）

## 联网搜索

这里可以使用开源的客户端 Cherry Studio，提供 Windows/Mac/Linux 版本。

首先注册火山，点击创建应用→零代码→单聊，应用名称随意，接入点选择DS-R1（如果没有请新建），选择联网模型插件（如果没有请开通）

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-29.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-29.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-29.jpg" alt="" loading="lazy">
</picture>

第一次使用的话，联网内容插件是需要开通的，去开通即可。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-30.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-30.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-30.jpg" alt="" loading="lazy">
</picture>

创建完毕后点击右上方的api调用指南，点击“选择api并复制”。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-31.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-31.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-31.jpg" alt="" loading="lazy">
</picture>

返回cherry studio，在模型中点击添加，供应商选择openAI，名称随意。然后填入api，api地址写[https://ark.cn-beijing.volces.com/api/v3/bots/](https://ark.cn-beijing.volces.com/api/v3/bots/%E2%80%9D%EF%BC%88%E5%A4%8D%E5%88%B6%E5%BC%95%E5%8F%B7%E5%86%85%E5%AE%B9%E5%8D%B3%E5%8F%AF%EF%BC%9B%E6%B3%A8%E6%84%8F%E7%BB%93%E5%B0%BE/%E8%A6%81%E4%BF%9D%E7%95%99%EF%BC%81%EF%BC%89%EF%BC%8C%E7%84%B6%E5%90%8E%E6%89%8B%E5%8A%A8%E6%B7%BB%E5%8A%A0%E6%A8%A1%E5%9E%8B%E2%80%94%E2%80%94%E7%82%B9%E2%80%9C%E6%B7%BB%E5%8A%A0%E2%80%9D%EF%BC%8C%E6%B3%A8%E6%84%8F%E6%A8%A1%E5%9E%8BID%E5%86%99%E4%BD%A0%E5%88%9B%E7%AB%8B%E7%9A%84bot%E5%BA%94%E7%94%A8%E7%9A%84ID%EF%BC%8C%E6%A0%BC%E5%BC%8F%E6%98%AF%E2%80%9Cbot-xxx%E2%80%9D%EF%BC%8C%E4%BD%8D%E7%BD%AE%E5%9C%A8%E6%88%91%E4%B8%8A%E5%9B%BE%E7%9A%84%E5%B7%A6%E4%B8%8A%E8%A7%92%EF%BC%8C%E5%90%8D%E7%A7%B0%E9%9A%8F%E6%84%8F)

然后手动添加模型——点“添加”，注意模型ID写你创立的bot应用的ID，格式是“bot-xxx”，位置在我上图的左上角，名称随意

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-32.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-32.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-32.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-33.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-33.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-33.jpg" alt="" loading="lazy">
</picture>

模型ID就是Bot的ID

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-35.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-35.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-35.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-36.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-36.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-36.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-37.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-37.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-37.jpg" alt="" loading="lazy">
</picture>

## 接入翻译

同样，由于字节卡多，tpm够高，很适合接入翻译。但这可能带来更多的token消耗

设置里找到豆包大模型

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-24.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-24.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-24.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-25.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-25.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-25.jpg" alt="" loading="lazy">
</picture>

填入API 和接入点，和上方一样，但是这里注意需要填写 **DeepSeek-V3** 的接入点ID,速度最快效果最好。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-26.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-26.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-26.jpg" alt="" loading="lazy">
</picture>

点击测试，验证成功即可调用。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-27.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-27.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-27.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-28.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-28.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-28.jpg" alt="" loading="lazy">
</picture>