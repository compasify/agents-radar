# Hugging Face Trending Models Digest 2026-08-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-18 23:11 UTC

---

# Hugging Face Trending Models Digest — 2026-08-19

## 1. Today's Highlights

Qwen's Qwen3.8 family dominates this week's trending list: the 27B multimodal flagship leads in likes, while GGUF, FP8, NVFP4, and uncensored community variants drive millions of downloads. MiniMax is the second major story, with H3 video and Music3 audio models seeing strong adoption and Comfy-Org's H3 packaging becoming the most-downloaded item at 14.6M. DeepSeek also ships V4 Pro and Flash variants, and Moonshot's Kimi-K3 earns 10.8k likes with a compressed-tensor architecture. The list confirms a mature derivative ecosystem: Unsloth, orcarouter, DavidAU, and others are rapidly turning flagship models into local-first and deployment-ready formats.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,111 | 665,513 | Multimodal chat flagship of Qwen3.8, handling image+text inputs with strong conversational quality. It anchors the week's largest ecosystem, with many community quantizations and uncensored builds. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,064 | 11,212 | Sparse Mixture-of-Experts text-generation model with 2.4T total parameters and 95B active. It offers frontier-scale capability at lower inference cost for high-end deployments. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 602 | 30,985 | Latest "Pro" text-generation model from DeepSeek's V4 line. It is trending with the release cycle, though Flash has much higher community adoption. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 561 | 741,011 | Official FP8 quantized version of Qwen3.8-27B for efficient serving. It gives enterprises an 8-bit deployment path with minimal quality loss. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,681 | 384,097 | A 30B multimodal chat model from meta-models, supporting image-text-to-text tasks. It quickly gained a GGUF variant by Unsloth, indicating fast quantization support. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,524 | 2,123,462 | Faster "Flash" version of DeepSeek V4 for high-throughput chat and reasoning. It has 3.5k likes and 2.1M downloads, making it one of the most widely used LLMs in this trend. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,827 | 2,226,898 | Moonshot's K3 model combines multimodal input with compressed-tensor efficiency and feature-extraction support. Its high like and download counts signal strong community excitement around the architecture. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 225 | 13,344 | Official FP8 quant of Qwen's 2.4T-param MoE. It lowers the barrier for running massive sparse models on memory-limited inference servers. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 219 | 1,120 | A "note-oriented" multimodal chat model preview from dots-studio. It is early-stage but interesting for productivity and note-taking use cases. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 321 | 269,372 | NVIDIA's efficient 30B model with 3B active parameters, pre-quantized to NVFP4. It targets low-latency inference on modern GPUs while maintaining strong language performance. |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 173 | 9,101 | A compact 3B vision-language model from Liquid AI. It is trending as a small, efficient alternative to larger multimodal LLMs for edge deployment. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 319 | 9,990 | Tiny hybrid text-generation model from inclusionAI using custom code. It shows growing interest in ultra-small, deployable LLMs. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 958 | 11,745 | Text-to-audio model for music generation, packaged with Diffusers. It is trending as MiniMax expands from video into high-quality music generation. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,220 | 503,632 | Lightricks' image-to-video and text-to-video model with single-file diffusion support. Its 500k+ downloads show sustained demand for controllable video generation. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,143 | 2,855,539 | MiniMax's H3 image-text-to-video model. It is a major open-weight video generator, with 2.8M downloads and a large ComfyUI ecosystem around it. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 608 | 300,279 | A Turbo variant of MiniMax-H3 focused on faster image-to-video generation. It serves users who need lower latency without leaving the H3 ecosystem. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 246 | 24,893 | Small 2.9B text-to-image diffusion model in single-file, ComfyUI-friendly format. It is gaining traction for lightweight local image generation. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,424 | 14,641,908 | ComfyUI-ready single-file packaging of MiniMax-H3. It is the most-downloaded item in this list, showing how node-based tools dominate video model distribution. |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 177 | 285,444 | ComfyUI single-file version of MiniMax Music3. It brings text-to-music generation into ComfyUI workflows and has already accumulated 285k downloads. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 263 | 0 | Community image-text-to-video fine-tune of MiniMax-H3 for stylized creative content. It is still early with zero downloads, but enough likes to appear in trending. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,251 | 0 | A developer utility, not a model: it supplies corrected chat templates in Jinja for Qwen and Qwen3.5 MLX deployments. It is trending because chat-template mismatches are a common practical pain point for local Qwen users. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,812 | 3,561,466 | Unsloth's optimized GGUF quantization of Qwen3.8-27B for llama.cpp and local inference. With 3.56M downloads, it is the most popular derivative of the Qwen3.8 flagship. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 526 | 45,465 | Abliterated FP8 build of Qwen3.8-27B that removes typical refusals while keeping multimodal input. It serves users seeking uncensored conversational behavior in a deployable 8-bit format. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 407 | 558,767 | GGUF uncensored Qwen3.8-27B with multi-token prediction support for llama.cpp. It is one of the most downloaded uncensored variants, with 558k pulls. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 261 | 523,919 | Unsloth's NVFP4 quant of Qwen3.8-27B for NVIDIA GPUs. It provides an efficient memory-quality tradeoff, especially for next-gen hardware with FP4 acceleration. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 245 | 0 | MLX port of the uncensored Qwen3.8-27B for Apple Silicon. It is brand-new with zero downloads, but addresses demand for uncensored local models on macOS. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,140 | 3,020,528 | A heavily named GGUF fine-tune of Qwen3.6-27B with uncensored, creative "Fable-Fusion" tuning and MTP. It has 3M downloads, showing how niche personalities can gain massive local-use traction. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 195 | 27,745 | Aggressively uncensored GGUF of Qwen3.8-27B for users who want fewer constraints. It includes MTP and multimodal/vision support. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 171 | 12,854 | llama.cpp GGUF quant of Qwen3.8-27B under the "Ridge" tag. It offers another local-inference option for the Qwen3.8 base model. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 481 | 787,276 | Unsloth's GGUF pack of Muse-Glimmer-30B. It translates the 30B multimodal model into an efficient format, reaching 787k downloads. |

## 3. Ecosystem Signal

Qwen3.8 has clearly become the center of gravity: the 27B multimodal model is the most-liked base, and many of the quantized or fine-tuned entries derive from it. Unsloth, orcarouter, and DavidAU are turning that model into GGUF, FP8, NVFP4, and MLX variants, with millions of downloads funneled through local-inference channels. The "uncensored" sub-ecosystem remains persistent, with multiple abliterated and aggressive builds. MiniMax is the second major force: H3 video and Music3 audio show that open-weight media generation is moving from research demos to ComfyUI-driven production workflows — Comfy-Org/MiniMax-H3 alone has 14.6M downloads. Meanwhile, DeepSeek V4, Kimi-K3, Muse-Glimmer, and Nemotron suggest escalating open-weight competition across frontier-scale, efficient inference, and multimodal formats. Official FP8 and NVFP4 releases from Qwen and NVIDIA also indicate a broader shift toward deployment-ready, quantized-first releases rather than raw weights alone.

## 4. Worth Exploring

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The anchor of this trend cycle and the base for most derivatives. Studying it helps understand how a single multimodal LLM spawns an ecosystem of uncensored, quantized, and local-format variants.
- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — With 14.6M downloads, it is the distribution phenomenon of the week. It is worth studying as an example of how ComfyUI single-file packaging massively expands the reach of open video models.
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — A compressed-tensor multimodal model with 10.8k likes and 2.2M downloads. It is worth exploring for its efficiency-focused architecture and strong community signal.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*