---
title: "甲骨文云 Ocale Cloud 二步验证丢失解决办法 2024 年 2月测试可行_甲骨文两步验证绕过码"
published: 2024-02-12
categories: 
  - "knowledge"
---

## 仅作记录，以便后续遇到同样丢失二步验证的人参考

目前以下方法已失效。

https://catcat.blog/oracle-2fa.html

#### 甲骨文云二步验证丢失解决办法 2024 年 1 月测试可行

- [起因：甲骨文云突然上不去了，死活要 FIDO 验证或者绕过码，被强制开启了二步验证](#FIDO_2)

- [试到一个办法，解决了，分享给大家](#_6)

## 起因：甲骨文云突然上不去了，死活要 FIDO 验证或者绕过码，被强制开启了二步验证

查了很多贴子，也打电话给客服，还找到在线客服，都是打太极推来推去，特别是龟壳论坛 [https://ccc.ociforums.com/](https://ccc.ociforums.com/)，来来去去都是那几句，如果免费用户没保存好 MFA，丢了就没办法登录了。

## 试到一个办法，解决了，分享给大家

1. **登录这个网站** ，[https://support.oracle.com](https://support.oracle.com)； 用原来的账号登，如果它显示没注册就注册一个 Oracle 账号，用原来那个龟壳云的邮箱即可。

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/a0e049c4673144dbb930e82146f042dd.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/a0e049c4673144dbb930e82146f042dd.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/a0e049c4673144dbb930e82146f042dd.jpg" alt="" loading="lazy">
</picture>  
<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/0cbcd7b3288a4ffd962b6c6ddaea06e0.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/0cbcd7b3288a4ffd962b6c6ddaea06e0.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/0cbcd7b3288a4ffd962b6c6ddaea06e0.jpg" alt="" loading="lazy">
</picture>  
注册遇到问题可以查官网帮助  
[https://docs.oracle.com/cd/E26122\_01/doc.60/e58521/registration.htm#MOSHP1515](https://docs.oracle.com/cd/E26122_01/doc.60/e58521/registration.htm#MOSHP1515)  
收不到验证重发链接  
[https://profile.oracle.com/myprofile/account/request-verification.jspx](https://profile.oracle.com/myprofile/account/request-verification.jspx)

**登录成功页面**  
<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/0e1eb59eb9984b4ea2004a762b88ab12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/0e1eb59eb9984b4ea2004a762b88ab12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/0e1eb59eb9984b4ea2004a762b88ab12.jpg" alt="" loading="lazy">
</picture>

> _题外话_：我是从论坛 [https://ccc.ociforums.com/](https://ccc.ociforums.com/) 注册的 [Oracle 账号](https://so.csdn.net/so/search?q=Oracle%E8%B4%A6%E5%8F%B7&spm=1001.2101.3001.7020)，用之前的云账号注册死活不成功，忘记弹出什么了，一个月前的事了。后来是看论坛别人的贴子说用新的邮箱注册，我就用 QQ 邮箱注册了一个 Oracle 账号，成功了，可以进论坛发贴了。过段时间发现 [https://support.oracle.com](https://support.oracle.com) 的时候，就用 QQ 邮箱登录直接成功登录，我想我的问题是另一个老账号，就用老账号试登一下吧，一登就上去了，就有了第一步的登录提交操作。我现在回头帮朋友搞他的老账号，情况也和我一样突然被开启二步验证登不上了。我就注册一下吧，目前还是收不到[邮箱验证](https://so.csdn.net/so/search?q=%E9%82%AE%E7%AE%B1%E9%AA%8C%E8%AF%81&spm=1001.2101.3001.7020)。真是迷之龟壳。。
> 
> 2024.1.8 更新：朋友的账号在 Gmail 找到验证邮件了，登了很多次都登不上这个技术支持网站 [https://support.oracle.com](https://support.oracle.com)，又重置了密码，去论坛 [https://ccc.ociforums.com/](https://ccc.ociforums.com/) 登又可以，试了一天，就登进了 [https://support.oracle.com](https://support.oracle.com)，至于原因，我也不清楚，乱试一通

2. 点击**服务请求**，**创建非技术 SR**，我本来是选**创建技术 SR** 的，进去后选问题，但是它一直说我没有购买这个服务 ，所以我就退出填了**创建非技术 SR**, 提交成功了，后来客服回复说我这个是技术问题转到技术部门去了，很快就给我重置了 MFA，我登录时可以重新设置 MFA；你们可以试试选**创建技术 SR**。  
    <picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/30bdc5f550e84f86b5e456e99835327c.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/30bdc5f550e84f86b5e456e99835327c.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/30bdc5f550e84f86b5e456e99835327c.jpg" alt="" loading="lazy">
</picture>

下面是我帮朋友找回的时候截图的，和我自己的账号第一次登的后台有点不同（上图），这次只有**创建技术 SR**

> 2024.1.9 更新：两个页面有所不同，是因为一个是 **My Oracle Support**, 一个是 **MCloud Support**，在页面右上角的地方可以切换

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/2cb5ba5356f7496b8e2e97edb37ae43f.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/2cb5ba5356f7496b8e2e97edb37ae43f.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/2cb5ba5356f7496b8e2e97edb37ae43f.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/7e202fe711ae4926b61ff9fcdb9ebc94.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/7e202fe711ae4926b61ff9fcdb9ebc94.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/7e202fe711ae4926b61ff9fcdb9ebc94.jpg" alt="" loading="lazy">
</picture>

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/80e577ccc0ee492dbe3b1dd3acb5d7b0.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/80e577ccc0ee492dbe3b1dd3acb5d7b0.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/80e577ccc0ee492dbe3b1dd3acb5d7b0.jpg" alt="" loading="lazy">
</picture>

**解决方案**没有东西，继续点**下一步**  
<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/ff86c78b6d6c4446a0c23c91611d2049.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/ff86c78b6d6c4446a0c23c91611d2049.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/ff86c78b6d6c4446a0c23c91611d2049.jpg" alt="" loading="lazy">
</picture>  
<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/0cc3dae9cb8046cea375d8971373b6ae.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/0cc3dae9cb8046cea375d8971373b6ae.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/0cc3dae9cb8046cea375d8971373b6ae.jpg" alt="" loading="lazy">
</picture>  
**提交**成功后跳转回首页，就会有一个 SR 编号的问题了，有 SR 号的问题客服很快就通过邮件回复，同时这个页面点问题进去也可以看到回复  
<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/5ad3ef56bd7a471d8bd57e49bf79717f.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/5ad3ef56bd7a471d8bd57e49bf79717f.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/5ad3ef56bd7a471d8bd57e49bf79717f.jpg" alt="" loading="lazy">
</picture>

> 2024.1.8: 提交不到一小时就回复啦

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/bc026e2e1b8e4041aa94cb39839cbf3b.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/bc026e2e1b8e4041aa94cb39839cbf3b.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/bc026e2e1b8e4041aa94cb39839cbf3b.jpg" alt="" loading="lazy">
</picture>

这是我第一次提交的问题：  
<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/85f3b5f638a7408284b0674fdd74a727.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/85f3b5f638a7408284b0674fdd74a727.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/85f3b5f638a7408284b0674fdd74a727.jpg" alt="" loading="lazy">
</picture>

这是客服回复的：  
<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/668a515cb90a4de2b260d75d883e3386.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/668a515cb90a4de2b260d75d883e3386.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/668a515cb90a4de2b260d75d883e3386.jpg" alt="" loading="lazy">
</picture>

3. 客服重置 MFA 后，就可以登录龟壳云了  
    <picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/0314abef54684b46a2e7cfbeede3ad9d.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/0314abef54684b46a2e7cfbeede3ad9d.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/0314abef54684b46a2e7cfbeede3ad9d.jpg" alt="" loading="lazy">
</picture>

登录上去重新开启 MFA 验证，再设多几个绕过码，下面两个贴子不错，我也是跟着它设置的

甲骨文 oracle 开启两步验证图文教程：  
[https://chenyu.me/1770.html](https://chenyu.me/1770.html)

甲骨文云 MFA 两步验证 “绕过码” 关闭二次验证：  
[https://www.xgiu.com/oracle\_mfa](https://www.xgiu.com/oracle_mfa)

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/94f79501ae9d483482f2f66d1cd3d4f5.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/94f79501ae9d483482f2f66d1cd3d4f5.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/94f79501ae9d483482f2f66d1cd3d4f5.jpg" alt="" loading="lazy">
</picture>  
我用的是微软验证器，逛论坛听说有别的也不错，不过我暂时先用这个弄着先，以后有更好的验证器再搞吧

4. 最后一步，问题解决后记得**把 SR 问题关了**，做个好用户，不给客服带来任何麻烦～

> _后记_：在这期间我又注册了一个新的账号（上面说的那个 QQ 邮箱注册的），没想到一下子就通过了，我发现新账号和旧账号的管理后台会有一些区别，例如旧的会有 “联盟”，新的没有。设置二步验证的地方也都不同。有机会再截图吧。

原文地址 [blog.csdn.net](https://blog.csdn.net/joey214/article/details/135413213) （感谢大佬）

<picture>
    <source srcset="https://s3.catcat.blog/images/2024/02/image-14.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2024/02/image-14.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2024/02/image-14.jpg" alt="" loading="lazy">
</picture>
