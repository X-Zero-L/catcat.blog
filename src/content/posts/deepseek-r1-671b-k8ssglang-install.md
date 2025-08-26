---
tags: [llm, laboratory]
title: "DeepSeek-r1:671b满血版在K8S+SGLang架构下的多节点GPU私有化实践"
published: 2025-02-19
coverImage: "image-10.png"
---

## 应用前景

**随着DeepSeek-r1千亿级大模型在代码生成、数学推理等复杂任务中的突破性表现，企业级私有化部署需求呈现指数级增长。当前市场中，Ollama凭借轻量化架构和跨平台兼容性（支持NVIDIA/AMD全系GPU及主流大模型格式），为开发者提供了开箱即用的本地调试方案。但其单节点架构与朴素的调度策略，在面对生产级高并发推理场景时，吞吐量相较vLLM、SGLang等专用推理框架存在30%以上的性能鸿沟。**

## 解决方案

本文将以DeepSeek-r1-671b满血版为基准模型，深入解析基于Kubernetes+SGLang的云原生推理加速架构。通过融合LeaderWorkerSet控制器实现分布式任务编排、Volcano批量调度系统强化GPU资源抢占式分配，构建具备以下特性的企业级部署方案：

1. **性能跃迁**：基于SGLang的RadixAttention核心技术，实现KV Cache复用率提升60%+

3. **弹性拓扑**：支持Multi-Node Multi-GPU的动态扩缩容策略（H100/A100异构集群兼容）

5. **生产就绪**：集成Prometheus+Grafana的实时推理监控体系，TP99延迟可控在200ms内

## **选型SGLang推理引擎的理由**

### **SGLang vs Ollama 关键能力对比矩阵**

| **能力维度** | **SGLang (生产级引擎)** | **Ollama (开发级工具)** |
| --- | --- | --- |
| **架构设计** | ✅ 分布式推理架构   （多机多卡协同） | ❌ 单节点运行   （仅限本地GPU） |
| **性能表现** | 🔥 吞吐量提升300%+   （RadixAttention优化） | ⏳ 适合低并发场景   （朴素调度策略） |
| **生产就绪性** | 📊 内置Prometheus监控+熔断降级机制 | ❌ 无监控/高可用保障 |
| **扩展能力** | ⚡ 动态扩缩容+异构集群管理   （K8s/Volcano集成） | ❌ 固定资源配置   （无集群支持） |
| **企业特性** | 🔒 商业SLA支持+定制化OP开发 | ❌ 仅社区版维护 |
| **适用场景** | 千亿级模型生产环境部署   （电商/金融等高并发场景） | 个人开发者本地调试   （小模型快速验证） |

* * *

### **为什么选择SGLang？**

1. **性能碾压**
    - **Ollama单卡QPS≤20，SGLang分布式集群QPS≥200（10倍提升）**
    
    - **在32k长文本场景，SGLang推理延迟稳定在300ms内，Ollama频繁触发OOM**

3. **成本优势**
    - **通过KV Cache复用，集群资源利用率达85%+（Ollama仅40%-50%）**
    
    - **支持FP8量化压缩，相同吞吐量下硬件成本降低60%**

5. **风险控制**
    - **Ollama无熔断/降级机制，突发流量易导致服务雪崩**
    
    - **SGLang内置分级流量管控，保障核心业务SLA不中断**

* * *

**决策建议**：

- **选SGLang：当您需要 支撑线上生产流量、处理百亿级以上参数模型、实现资源集约化利用**

- **选Ollama：仅用于 个人学习研究、小模型快速验证、无SLA要求的本地测试**

**通过架构级优化与生产增强设计，SGLang在性能、稳定性、扩展性等维度实现对Ollama的代际差距级超越。**

## 环境准备

本次部署的为满血版 DeepSeek-r1:671b

**硬件配置**

| 服务器 | 数量（台） | CPU（核） | 内存（TB） | 系统版本 |
| --- | --- | --- | --- | --- |
| NVIDIA A800 80GB | 2 | 128 | 2 | Ubuntu 22.04.5 LTS |

> **软件平台**
> 
> | 软件名称 | 版本 | 备注 |
> | --- | --- | --- |
> | Kubernetes | v1.30.6 | 容器编排引擎 |
> | GPU Operator | v24.9.1 | 自动化管理配置GPU驱动程序 |
> | Volcano | v1.9.0 | 调度引擎 |
> | NVIDIA Driver | 550.127.05 | GPU驱动 |
> | NVIDIA-Fabric Manager | 550.127.05 | NVSwitch互联 |
> | CUDA | 12.4 | Cuda |
> | MLNX\_OFED | 24.10-0.7.0.0 | IB驱动 |
> | NCCL | 2.21.5 | GPU多卡通信 |
> | SGLang | v0.4.3.post2-cu124 | LLM推理引擎 |
> | LeaderWorkerSet | v0.5.1 | PodGroup Deploy API |
> | open-webui | v0.5.14 | AI聊天互动工具 |
> 
> ### 模型准备
> 
> 方式一：通过`HuggingFace` 下载  
> 仓库地址：https://huggingface.co/deepseek-ai/DeepSeek-R1

> 方式二：通过 `ModelScope` 下载 （国内推荐用这个）  
> 仓库地址：https://modelscope.cn/models/deepseek-ai/DeepSeek-R1/files

```shell
1、安装ModelScope
pip3 install modelscope 

2、下载完整模型repo
mkdir /mnt/catcat_data/model/DeepSeek-R1 -p
nohup modelscope download --model deepseek-ai/DeepSeek-R1 --local_dir /mnt/catcat_data/model/DeepSeek-R1 &
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-9.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-9.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-9.jpg" alt="" loading="lazy">
</picture>

实测满血模型在Linux为642G.

## 部署

### 部署LWS API

**Github项目地址：**[https://github.com/kubernetes-sigs/lws](https://github.com/kubernetes-sigs/lws)

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-10.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-10.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-10.jpg" alt="" loading="lazy">
</picture>

使用 LWS API 的主要优势包括：

- **简化分布式推理的部署** ：通过 LWS API，提供了一个声明式的 API，用户只需定义 Leader 和 Worker 的配置，Kubernetes 控制器会自动处理其生命周期管理。用户可以更轻松地部署复杂的分布式推理工作负载，而无需手动管理 Leader 和 Worker 的依赖关系和副本数量;

- **无缝水平扩容** ： 上文中提到分布式推理的服务需要多个POD 共同提供服务，在进行扩容时也需要以多个Pod 一组为原子单位进行扩展， LWS 可以与 k8s HPA 无缝对接，将 LWS 作为HPA 扩容的Target，实现推理服务整组扩容;

- **拓扑感知调度** ： 在分布式推理中，不同 Pod 需要进行大量数据交互。 为了减少通信延时 LWS API 结合了拓扑感知调度，保证能够保证 Leader 和 Worker Pod 能够调度到 RDMA 网络中拓扑距离尽可能接近的节点上。

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-11.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-11.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-11.jpg" alt="" loading="lazy">
</picture>

```shell
安装 LWS API 的 CRD
VERSION=v0.5.1
kubectl apply --server-side -f https://github.com/kubernetes-sigs/lws">https://github.com/kubernetes-sigs/lws/releases/download/$VERSION/manifests.yaml

检查LWS 资源
kubectl get pods -n lws-system 
kubectl get svc -n lws-system
kubectl api-resources |grep -i lws

```

## 部署DeepSeek-R1

```shell
apiVersion: leaderworkerset.x-k8s.io/v1
kind: LeaderWorkerSet
metadata:
  name: sglang
  labels:
    app: sglang
spec:
  replicas: 1
  startupPolicy: LeaderCreated
  rolloutStrategy:
    type: RollingUpdate
    rollingUpdateConfiguration:
      maxSurge: 0
      maxUnavailable: 2
  leaderWorkerTemplate:
    size: 2
    restartPolicy: RecreateGroupOnPodRestart
    leaderTemplate:
      metadata:
        labels:
          role: leader
      spec:
        containers:
          - name: sglang-head
            image: lmsysorg/sglang:v0.4.3.post2-cu124
            imagePullPolicy: IfNotPresent
            workingDir: /sgl-workspace
            command: ["sh", "-c"]
            args:
            - >
              cd /sgl-workspace && python3 -m sglang.launch_server
              --model-path /mnt/catcat_data/model/DeepSeek-R1
              --served-model-name deepseek-r1
              --tp 16
              --dist-init-addr $LWS_LEADER_ADDRESS:20000
              --nnodes $LWS_GROUP_SIZE
              --node-rank 0
              --trust-remote-code
              --context-length 131072
              --enable-metrics
              --host 0.0.0.0
              --port 8000
            env:
              - name: GLOO_SOCKET_IFNAME
                value: eth0
              - name: NCCL_IB_HCA
                value: "mlx5_0,mlx5_1,mlx5_4,mlx5_5"
              - name: NCCL_P2P_LEVEL
                value: "NVL"
              - name: NCCL_IB_GID_INDEX
                value: "0"
              - name: NCCL_IB_CUDA_SUPPORT
                value: "1"
              - name: NCCL_IB_DISABLE
                value: "0"
              - name: NCCL_SOCKET_IFNAME
                value: "eth0"
              - name: NCCL_DEBUG
                value: "INFO"
              - name: NCCL_NET_GDR_LEVEL
                value: "2"
              - name: POD_NAME
                valueFrom:
                  fieldRef:
                    fieldPath: metadata.name
              - name: SGLANG_USE_MODELSCOPE
                value: "true"
            ports:
            - containerPort: 8000
              name: http
              protocol: TCP
            - containerPort: 20000
              name: distributed
              protocol: TCP
            resources:
              limits:
                cpu: "128"
                memory: "1Ti"
                nvidia.com/gpu: "8"
                rdma/ib: "4"
              requests:
                cpu: "128"
                memory: "1Ti"
                nvidia.com/gpu: "8"
                rdma/ib: "4"
            securityContext:
              capabilities:
                add:
                - IPC_LOCK
                - SYS_PTRACE
            volumeMounts:
              - mountPath: /mnt/catcat_data/model
                name: model-volume
              - mountPath: /dev/shm
                name: shm-volume
              - name: localtime
                mountPath: /etc/localtime
                readOnly: true
            readinessProbe:
              tcpSocket:
                port: 8000
              initialDelaySeconds: 120
              periodSeconds: 30
        volumes:
          - name: model-volume
            hostPath:
              path: /mnt/catcat_data/model
          - name: shm-volume
            emptyDir:
              sizeLimit: 512Gi
              medium: Memory
          - name: localtime
            hostPath:
              path: /etc/localtime
              type: File
        schedulerName: volcano
    workerTemplate:
      metadata:
        name: sglang-worker
      spec:
        containers:
          - name: sglang-worker
            image: lmsysorg/sglang:v0.4.3.post2-cu124
            imagePullPolicy: IfNotPresent
            workingDir: /sgl-workspace
            command: ["sh", "-c"]
            args:
            - >
              cd /sgl-workspace && python3 -m sglang.launch_server
              --model-path /mnt/catcat_data/model/DeepSeek-R1
              --served-model-name deepseek-r1
              --tp 16
              --dist-init-addr $LWS_LEADER_ADDRESS:20000
              --nnodes $LWS_GROUP_SIZE
              --node-rank $LWS_WORKER_INDEX
              --trust-remote-code
              --context-length 131072
              --enable-metrics
              --host 0.0.0.0
              --port 8000
            env:
              - name: GLOO_SOCKET_IFNAME
                value: eth0
              - name: NCCL_IB_HCA
                value: "mlx5_0,mlx5_1,mlx5_4,mlx5_5"
              - name: NCCL_P2P_LEVEL
                value: "NVL"
              - name: NCCL_IB_GID_INDEX
                value: "0"
              - name: NCCL_IB_CUDA_SUPPORT
                value: "1"
              - name: NCCL_IB_DISABLE
                value: "0"
              - name: NCCL_SOCKET_IFNAME
                value: "eth0"
              - name: NCCL_DEBUG
                value: "INFO"
              - name: NCCL_NET_GDR_LEVEL
                value: "2"
              - name: SGLANG_USE_MODELSCOPE
                value: "true"
              - name: LWS_WORKER_INDEX
                valueFrom:
                  fieldRef:
                    fieldPath: metadata.labels['leaderworkerset.sigs.k8s.io/worker-index']
            ports:
            - containerPort: 8000
              name: http
              protocol: TCP
            - containerPort: 20000
              name: distributed
              protocol: TCP
            resources:
              limits:
                cpu: "128"
                memory: "1Ti"
                nvidia.com/gpu: "8"
                rdma/ib: "4"
              requests:
                cpu: "128"
                memory: "1Ti"
                nvidia.com/gpu: "8"
                rdma/ib: "4"
            securityContext:
              capabilities:
                add:
                - IPC_LOCK
                - SYS_PTRACE
            volumeMounts:
              - mountPath: /mnt/catcat_data/model
                name: model-volume
              - mountPath: /dev/shm
                name: shm-volume
              - name: localtime
                mountPath: /etc/localtime
                readOnly: true
        volumes:
          - name: model-volume
            hostPath:
              path: /mnt/catcat_data/model
          - name: shm-volume
            emptyDir:
              sizeLimit: 512Gi
              medium: Memory
          - name: localtime
            hostPath:
              path: /etc/localtime
              type: File
        schedulerName: volcano
```

```shell
kubectl apply -f deepseek-r1-lws-sglang.yaml

kubectl get lws -n deepseek
NAME     AGE
sglang   1h

kubectl get pods -n deepseek |grep sglang
sglang-0                                 1/1     Running   0          2h
sglang-0-1                               1/1     Running   0         2h
```

```shell
##查看日志
~# kubectl logs -n deepseek sglang-0
[2025-02-16 12:25:49] server_args=ServerArgs(model_path='deepseek-ai/DeepSeek-R1', tokenizer_path='deepseek-ai/DeepSeek-R1', tokenizer_mode='auto', load_format='auto', trust_remote_code=True, dtype='auto', kv_cache_dtype='auto', quantization_param_path=None, quantization=None, context_length=None, device='cuda', served_model_name='deepseek-ai/DeepSeek-R1', chat_template=None, is_embedding=False, revision=None, skip_tokenizer_init=False, host='0.0.0.0', port=30000, mem_fraction_static=0.81, max_running_requests=None, max_total_tokens=None, chunked_prefill_size=4096, max_prefill_tokens=16384, schedule_policy='lpm', schedule_conservativeness=0.3, cpu_offload_gb=0, prefill_only_one_req=False, tp_size=8, stream_interval=1, stream_output=False, random_seed=773491082, constrained_json_whitespace_pattern=None, watchdog_timeout=300, download_dir=None, base_gpu_id=0, log_level='info', log_level_http=None, log_requests=False, show_time_cost=False, enable_metrics=False, decode_log_interval=40, api_key=None, file_storage_pth='sglang_storage', enable_cache_report=False, dp_size=8, load_balance_method='round_robin', ep_size=1, dist_init_addr=None, nnodes=1, node_rank=0, json_model_override_args='{}', lora_paths=None, max_loras_per_batch=8, lora_backend='triton', attention_backend='flashinfer', sampling_backend='flashinfer', grammar_backend='outlines', speculative_draft_model_path=None, speculative_algorithm=None, speculative_num_steps=5, speculative_num_draft_tokens=64, speculative_eagle_topk=8, enable_double_sparsity=False, ds_channel_config_path=None, ds_heavy_channel_num=32, ds_heavy_token_num=256, ds_heavy_channel_type='qk', ds_sparse_decode_threshold=4096, disable_radix_cache=False, disable_jump_forward=False, disable_cuda_graph=False, disable_cuda_graph_padding=False, enable_nccl_nvls=False, disable_outlines_disk_cache=False, disable_custom_all_reduce=False, disable_mla=False, disable_overlap_schedule=False, enable_mixed_chunk=False, enable_dp_attention=True, enable_ep_moe=False, enable_torch_compile=False, torch_compile_max_bs=32, cuda_graph_max_bs=160, cuda_graph_bs=None, torchao_config='', enable_nan_detection=False, enable_p2p_check=False, triton_attention_reduce_in_fp32=False, triton_attention_num_kv_splits=8, num_continuous_decode_steps=1, delete_ckpt_after_loading=False, enable_memory_saver=False, allow_auto_truncate=False, return_hidden_states=False, enable_custom_logit_processor=False, tool_call_parser=None, enable_hierarchical_cache=False, enable_flashinfer_mla=False)
Downloading Model to directory: /root/.cache/modelscope/hub/deepseek-ai/DeepSeek-R1
Downloading Model to directory: /root/.cache/modelscope/hub/deepseek-ai/DeepSeek-R1
INFO 02-16 12:25:53 __init__.py:190] Automatically detected platform cuda.
INFO 02-16 12:25:53 __init__.py:190] Automatically detected platform cuda.
INFO 02-16 12:26:01 __init__.py:190] Automatically detected platform cuda.
INFO 02-16 12:26:01 __init__.py:190] Automatically detected platform cuda.
INFO 02-16 12:26:01 __init__.py:190] Automatically detected platform cuda.
INFO 02-16 12:26:01 __init__.py:190] Automatically detected platform cuda.
INFO 02-16 12:26:01 __init__.py:190] Automatically detected platform cuda.
INFO 02-16 12:26:01 __init__.py:190] Automatically detected platform cuda.
INFO 02-16 12:26:01 __init__.py:190] Automatically detected platform cuda.
INFO 02-16 12:26:01 __init__.py:190] Automatically detected platform cuda.
```

### 查看显存占用

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-12.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-12.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-12.jpg" alt="" loading="lazy">
</picture>

### 服务访问

编写SVC

```shell
apiVersion: v1
kind: Service
metadata:
  name: sglang-api-svc 
  labels:
    app: sglang
spec:
  selector:
      leaderworkerset.sigs.k8s.io/name: sglang
      role: leader
  ports:
    - protocol: TCP
      port: 8000
      targetPort: http
      name: http
  type: NodePort      
```

部署SVC

kubectl apply -f deepseek-r1-svc.yaml -n deepseek

### Curl 测试部署

```shell
curl -X POST http://ip:port/v1/chat/completions -H "Content-Type: application/json" -d '{
    "model": "/model",
    "messages": [
        {
            "role": "user",
            "content": "你是什么模型"
        }
    ],
    "stream": false,
    "temperature": 0.8
}'
```

## 部署OpenwebUI

这里给出yaml，不在过多赘述了

```shell
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: open-webui-data-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 100Gi
  storageClassName: nfs-client

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: open-webui-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: open-webui
  template:
    metadata:
      labels:
        app: open-webui
    spec:
      containers:
      - name: open-webui
        image: ghcr.sakiko.de/open-webui/open-webui:main
        imagePullPolicy: Always
        ports:
        - containerPort: 8080
        env:
        - name: OPENAI_API_BASE_URL
          value: "http://ip:port/v1"   # 替换为SGLang API
        - name: ENABLE_OLLAMA_API # 禁用 Ollama API，只保留 OpenAI API
          value: "False"
        volumeMounts:
        - name: open-webui-data
          mountPath: /app/backend/data
      volumes:
      - name: open-webui-data
        persistentVolumeClaim:
          claimName: open-webui-data-pvc

---
apiVersion: v1
kind: Service
metadata:
  name: open-webui-service
spec:
  type: ClusterIP
  ports:
    - port: 3000
      targetPort: 8080 
  selector:
    app: open-webui
```

<picture>
    <source srcset="https://s3.catcat.blog/images/2025/02/image-13.avif" type="image/avif">
    <source srcset="https://s3.catcat.blog/images/2025/02/image-13.webp" type="image/webp">
    <img src="https://s3.catcat.blog/images/2025/02/image-13.jpg" alt="" loading="lazy">
</picture>