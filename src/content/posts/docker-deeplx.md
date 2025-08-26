---
tags: [docker]
title: "Docker 搭建DeepLX 翻译API"
published: 2024-02-06
---

## 为什么搭建 DeepLX

现在市面上可选的翻译软件多种多样，传统的翻译软件有网易的有道翻译、字节跳动的火山翻译、谷歌的谷歌翻译、微软的 Bing 翻译等…… 基于 LLM 大模型的翻译可以调用 Gemini、OpenAI 等的 API 进行翻译，那么为什么要选择 DeepL 呢？

### 快速且准确的翻译（对比传统翻译器）

- 在我使用其他翻译器 翻译小语种的时候，最常遇到的问题就是翻译准度不高，且通常存在漏翻问题（如碰到较为口语化的表达时），而 DeepL 作为最先使用 AI 进行翻译模型训练的翻译器，自然相较于通用翻译会更加准确

### 翻译速度较快，且基本不受并发数限制（对比 LLM 大模型翻译）

- 基于 Gemini、OpenAI 的翻译固然准确，可是其受限于 API 调用次数，不能在并发数较高的环境下完成翻译（如使用沉浸式翻译插件自动翻译推特）。相比之下，DeepL 可以在保证一定的翻译准度的前提下，拥有不输传统翻译器的翻译速度。

然而其官方 DeepL 由于自身速度较慢，且有额度限制，不提供 API 等等缺点，容易劝退很多用户，DeepLX 在 GitHub 开源，不限制请求次数（但 DeepL 可能会限制 IP）默认情况下监听本地 1188 端口。提供多种安装方式。

## 搭建 DeepLX

```shell
 docker run -itd -p 1188:1188 missuo/deeplx:latest
```

```shell
root@crunchbits:~# docker run -itd -p 1188:1188 missuo/deeplx:latest
Unable to find image 'missuo/deeplx:latest' locally
latest: Pulling from missuo/deeplx
96526aa774ef: Already exists 
d18c73875d2c: Pull complete 
b0dddc4f4c48: Pull complete 
Digest: sha256:582e56bcd848f47cdcc20b09a43af5b6fd4cbc2176934bbd2a57517d40c7e427
Status: Downloaded newer image for missuo/deeplx:latest
8bcfd5c658dc1cafde5ca26d8969192a7b4c3c56797df2196eca52963c91cb75
```

## 测试

ip:端口

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-2.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-2.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-2.jpg" alt="" loading="lazy">
</picture>

## 在翻译插件里使用（以沉浸式翻译为例）

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-3.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-3.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-3.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-4.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-4.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-4.jpg" alt="" loading="lazy">
</picture>

URL中填入自己搭建的服务URL，也就是\[ip\]:1188/translate

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-5.jpg" alt="" loading="lazy">
</picture>