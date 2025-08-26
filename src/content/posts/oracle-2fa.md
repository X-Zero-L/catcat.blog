---
tags: [knowledge]
title: "Oracle 二步验证丢失找回办法"
published: 2023-11-29
---

- 2024年2月更新，此方法已经失效

- 新方法请见评论区

## 背景：

更换手机之后，原来是Oracle 验证器需要迁移，但是出现了一直转圈无法登陆的情况。导致Oracle也无法进去。

## 解决方法：

```shell
先进Oracle登录页面，然后在输入邮箱和密码页面中记下以 

https://idcs-********.identity.oraclecloud.com/ 

开头的网址

现在修改该 网址，如下所示

https://idcs-*****.identity.oraclecloud.com/ui/v1/myconsole?root=my-info&my-info=my_profile_security

在此新网址中，获取绕过码，点击右侧生成
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/11/image-5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/11/image-5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/11/image-5.jpg" alt="" loading="lazy">
</picture>

登录之后，可以把已经失效的设备清楚掉，把新手机重新码添加

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/11/image-6.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/11/image-6.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/11/image-6.jpg" alt="" loading="lazy">
</picture>