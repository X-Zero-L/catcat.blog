---
tags: [laboratory]
title: "Traefik 智能反向代理，解放双手"
published: 2023-09-14
---

**_Traefik_** 是一款反向代理、负载均衡服务，使用golang 实现的。 和nginx 最大的不同是，它支持自动化更新反向代理和负载均衡配置。

官网：[https://traefik.io/](https://fishpi.cn/forward?goto=https%3A%2F%2Ftraefik.io%2F)

官方文档：[https://doc.traefik.io/traefik/](https://fishpi.cn/forward?goto=https%3A%2F%2Fdoc.traefik.io%2Ftraefik%2F)

# 简单应用

## 反向代理应用

### 工具特点

- docker 服务自动发现

- HTTPS 自动配置

- prometheus 数据接口

- web-ui

- 80-443 强制跳转

- 配置简单
    - 给容器打上对应的 `label` 标签即可自动完成反向代理路由与负载均衡配置

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/QQ_1731912028454.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/QQ_1731912028454.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/QQ_1731912028454.jpg" alt="" loading="lazy">
</picture>

## 创建目录

```shell
mkdir -p data/configurations
touch docker-compose.yml
touch data/traefik.yml
touch data/acme.json
touch data/configurations/dynamic.yml
chmod 600 data/acme.json
```

## Docker-compose

文件路径 `~/docker-compose.yml`

```shell
version: '3.7'

services:
  traefik:
    image: traefik:latest 
    container_name: traefik
    restart: always
    security_opt:
      - no-new-privileges:true
    ports:
      - 80:80
      - 443:443
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./data/traefik.yml:/traefik.yml:ro
      - ./data/acme.json:/acme.json
      # Add folder with dynamic configuration yml
      - ./data/configurations:/configurations
    networks:
      - proxy
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=proxy"
      - "traefik.http.routers.traefik-secure.entrypoints=websecure"
      - "traefik.http.routers.traefik-secure.rule=Host(`traefik.yourdomain`)"
      - "traefik.http.routers.traefik-secure.middlewares=user-auth@file"
      - "traefik.http.routers.traefik-secure.service=api@internal"

networks:
  proxy:
    external: true
```

## 静态配置文件

文件路径 `~/data/traefik.yml`

```shell
api:
  dashboard: true

entryPoints:
  web:
    address: :80
    http:
      redirections:
        entryPoint:
          to: websecure

  websecure:
    address: :443
    http:
      middlewares:
        - secureHeaders@file
        - nofloc@file
      tls:
        certResolver: letsencrypt

pilot:
  dashboard: false

providers:
  docker:
    endpoint: "unix:///var/run/docker.sock"
    exposedByDefault: false
  file:
    filename: /configurations/dynamic.yml

certificatesResolvers:
  letsencrypt:
    acme:
      email: admin@yourdomain
      storage: acme.json
      keyType: EC384
      httpChallenge:
        entryPoint: web

  buypass:
    acme:
      email: admin@yourdomain
      storage: acme.json
      caServer: https://api.buypass.com/acme/directory
      keyType: EC256
      httpChallenge:
        entryPoint: web
```

## 动态配置文件

文件路径 `~/data/configurations/dynamic.yml`

```shell
# Dynamic configuration
http:
  middlewares:
    nofloc:
      headers:
        customResponseHeaders:
          Permissions-Policy: "interest-cohort=()"
    secureHeaders:
      headers:
        sslRedirect: true
        forceSTSHeader: true
        stsIncludeSubdomains: true
        stsPreload: true
        stsSeconds: 31536000

    # UserName : admin
    # Password : qwer1234          
    user-auth:
      basicAuth:
        users:
          - "admin:$apr1$tm53ra6x$FntXd6jcvxYM/YH0P2hcc1"

tls:
  options:
    default:
      cipherSuites:
        - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
        - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
        - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
        - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
        - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305
        - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305
      minVersion: VersionTLS12
```

## 创建网络

```shell
docker network create proxy
```

## 启动

```shell
docker compose up -d
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2023/09/image-89-1024x512.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2023/09/image-89-1024x512.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2023/09/image-89-1024x512.jpg" alt="" loading="lazy">
</picture>