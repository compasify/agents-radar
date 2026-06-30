# Hugging Face Trending Models Digest 2026-06-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-30 00:27 UTC

---

# 🤗 Hugging Face Trending Models Digest — June 30, 2026

## 1. Today's Highlights
A huge week for the **Qwen 3.5/3.6 ecosystem** — at least half a dozen Qwen-derived models dominate the trending page, from the MoE-powered *Qwen-AgentWorld-35B-A3B* to several uncensored community fine-tunes. **NVIDIA** is increasingly active across multiple fronts: new ASR streaming models, FP4-quantized variants of Qwen and GLM, and the vision foundation model *LocateAnything-3B*, which skyrocketed to 728k downloads. **Gemma 4** coder fine-tunes continue to gain traction, while **deepreinforce-ai** dropped a full trilogy of *Ornith-1.0* models (9B, 35B, 397B) from the same Qwen-MoE lineage. The GGUF format remains dominant for deployment, with several unsloth-optimized quantized variants breaking into the top 20.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org · 2,934 likes · 133k downloads  
  The flagship MoE-DSA language model from the GLM lineage; trending for its strong conversational performance and active fine-tuning ecosystem.

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — deepseek-ai · 211 likes · 5.5k downloads  
  DeepSeek's latest generation V4 model with DSpark optimization; highlighting continued progress in open-weight scaling.

- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** — LiquidAI · 151 likes · 15k downloads  
  A compact 230M Liquid Foundation Model; notable for pushing state-space-model architectures into the 2025/2026 wave.

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** — WeiboAI · 749 likes · 63k downloads  
  A 3B model fine-tuned for math reasoning on Qwen2 base; rising fast for educational and STEM use cases.

- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** — Chunjiang-Intelligence · 130 likes · 1.5k downloads  
  Cybersecurity-focused DeepSeek-V4 fine-tune; a niche but growing category for LLM security applications.

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu · 1,368 likes · 363k downloads  
  A powerful general-purpose OCR model using image-text-to-text architecture; trending for its diverse language and script support.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — krea · 392 likes · 38k downloads  
  Fast text-to-image diffusion model built on Krea-2-Raw; gaining traction in creative and design communities.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia · 2,481 likes · 728k downloads  
  NVIDIA's multimodal vision model for object localization and spatial understanding; major momentum in the image-feature-extraction category.

- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** — fal · 115 likes · 0 downloads  
  A 3D-realist LoRA for LTX-2.3 video generation; niche but signaling growing interest in video generation fine-tunes.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia · 742 likes · 76k downloads  
  A 0.6B streaming automatic speech recognition model; strong showing for efficient, real-time ASR.

---

### 🔧 Specialized Models (code, math, vision, embeddings)

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — yuxinlu1 · 2,501 likes · 562k downloads  
  Gemma 4 fine-tune for coding with Fable5 and Composer2.5 hybrid architecture; most popular code model this week.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 · 843 likes · 241k downloads  
  Upgraded Gemma 4 variant for agentic coding and terminal use; demonstrates the rapid iteration on code-specific models.

- **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** — nvidia · 169 likes · 82k downloads  
  NVIDIA ModelOpt-quantized GLM-5.2 using FP4 precision; represents industry push for hardware-optimized inference.

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** — nvidia · 378 likes · 5.4M downloads  
  Extremely high download count — FP4 quantized Qwen 3.6 MoE optimized for NVIDIA hardware; the clear infrastructure favorite.

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai · 942 likes · 908k downloads  
  High-download GGUF quant of a Qwen 3.5 reasoning model with 1M context; built for long-context RAG and chat.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai · 482 likes · 124k downloads  
  Mid-sized Ornith variant in GGUF; part of a trio (9B, 35B, 397B) offering full-spectrum MoE deployments.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS · 2,332 likes · 3.1M downloads  
  Massive download volume for an uncensored Qwen 3.6 MoE fine-tune; signals continued demand for unrestricted models.

- **[HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced)** — HauhauCS · 107 likes · 46k downloads  
  Unfiltered Gemma 4 multimodal variant; combines vision capabilities with an uncensored chat experience.

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** — unsloth · 464 likes · 164k downloads  
  Industry-standard unsloth-optimized GGUF for GLM-5.2; the go-to quantization for local deployment.

- **[unsloth/Qwen-AgentWorld-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen-AgentWorld-35B-A3B-GGUF)** — unsloth · 113 likes · 117k downloads  
  Optimized GGUF of the Qwen agent world model; built for interactive, tool-using AI agents.

---

## 3. Ecosystem Signal

The **Qwen family** (3.5, 3.6, AgentWorld, Ornith variants) is this week's clear winner — nearly 40% of trending models derive from Qwen architectures, reflecting the ecosystem's vote for high-quality open-weight MoE backbones. **NVIDIA** is visibly doubling down on hardware-software co-optimization, releasing both foundation models (LocateAnything, Nemotron ASR) and ModelOpt-quantized variants (FP4 Qwen, FP4 GLM) — the latter with download counts in the millions, suggesting strong enterprise + cloud deployment demand. **GGUF** remains the format of choice for community quantizations, with unsloth and direct GGUF releases covering almost every trending model. The **uncensored fine-tune** niche is remarkably active (HauhauCS has 3.1M downloads on a single Qwen 3.6 variant), pointing to an enduring sub-market for unrestricted model capabilities. **Gemma 4** is gaining fast as Google's competitive response to Qwen, especially in code/agentic fine-tunes. **Open-weight** models dominate the list — no proprietary-only submissions appear. MoE architectures at 35B total / 3B active are emerging as a "sweet spot" for capability-to-cost ratio.

---

## 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** (2,481 likes, 728k downloads) — A rare gem at the intersection of vision and spatial reasoning; 3B is small enough to fine-tune but large enough for real-world object grounding tasks. Ideal for robotics or visual QA pipelines.

2. **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** (749 likes, 63k downloads) — Math reasoning on a 3B Qwen2 base is unusual and promising; it suggests significant advances in knowledge distillation for STEM education, and could be a useful base for further math fine-tunes.

3. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** (742 likes, 76k downloads) — At 0.6B parameters, this ASR model runs on edge devices while offering streaming capability. Worth studying as a benchmark for efficient audio models and for real-time speech applications.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*