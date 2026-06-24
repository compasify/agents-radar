# Hugging Face Trending Models Digest 2026-06-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-24 00:23 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-06-24

## 1. Today's Highlights

This week's top spot belongs to **DeepSeek-V4-Pro** (5,030 likes), signaling continued dominance of the DeepSeek family in the open-weight LLM space. The **gemma-4** ecosystem is exploding with activity, particularly around coding and agentic fine-tunes — four separate Gemma-4 variants appear on the list, including GGUF quantizations and abliterated versions. Multimodal models are surging: **nvidia/LocateAnything-3B** (2,315 likes) and **google/diffusiongemma-26B-A4B-it** (1,055 likes) highlight a shift toward vision-language and any-to-any generation. The **GLM-5.2** family (zai-org) maintains strong momentum with its MoE-DSA architecture, while community quantizations like **HauhauCS/Qwen3.6-35B-A3B-Uncensored** (2,156 likes) show massive download counts (3.95M), proving the appetite for uncensored, vision-capable MoE models.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — deepseek-ai | 5,030 likes | 2.2M downloads
  *The latest flagship from DeepSeek, dominating the leaderboard with strong conversational performance and open-weight availability.*

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 2,195 likes | 40K downloads
  *Zhiyuan's MoE-DSA architecture model, trending for its efficient mixture-of-experts design and conversational capabilities.*

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** — google | 1,154 likes | 1.99M downloads
  *Google's any-to-any model with 12B parameters, widely adopted for its unified multimodal architecture and strong instruction following.*

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** — MiniMaxAI | 1,220 likes | 131K downloads
  *A multimodal vision-language model from MiniMax, gaining traction for its M3-VL architecture and strong image-text understanding.*

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** — microsoft | 321 likes | 4.4K downloads
  *Microsoft's 4B parameter model optimized for efficient long-context reasoning using an Explorer SubAgent approach.*

- **[Mia-AiLab/Qwable-3.6-27b](https://huggingface.co/Mia-AiLab/Qwable-3.6-27b)** — Mia-AiLab | 128 likes | 24.9K downloads
  *A community fine-tune on Qwen 3.6 architecture, offering both transformers and GGUF formats for flexible deployment.*

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 2,315 likes | 274K downloads
  *NVIDIA's 3B parameter visual grounding model for object localization, trending for its practical vision-language capabilities.*

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — google | 1,055 likes | 949K downloads
  *Google's diffusion-based any-to-any model with 26B total / 4B active parameters, bridging text and image generation.*

- **[baidu/Unlimited-OCR](https://gated/baidu/Unlimited-OCR)** — baidu | 471 likes | 8.4K downloads
  *Baidu's unlimited OCR model for image-text-to-text tasks, notable for its production-ready document understanding.*

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia | 656 likes | 41K downloads
  *NVIDIA's streaming ASR model with cache-aware architecture, gaining interest for real-time speech recognition.*

- **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** — owensong | 177 likes | 0 downloads
  *An ultra-small text-to-speech model designed for edge deployment, despite zero downloads it's notable for its compact design.*

- **[ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora)** — ostris | 111 likes | 3.7K downloads
  *A LoRA adapter for Ideogram 4, enabling efficient fine-tuning of the image generation model.*

- **[Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)** — Boogu | 112 likes | 592 downloads
  *An image editing model using diffusers, supporting both English and Chinese with Apache-2.0 license.*

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — yuxinlu1 | 2,237 likes | 456K downloads
  *A GGUF-quantized Gemma-4 coding model with enhanced reasoning, one of the most downloaded coding models this week.*

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 | 445 likes | 96K downloads
  *An agentic version of Gemma-4 optimized for terminal and tool-use tasks, showing the demand for autonomous coding assistants.*

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** — WeiboAI | 664 likes | 41K downloads
  *A 3B math reasoning model based on Qwen2, punching above its weight class for mathematical problem-solving.*

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — moonshotai | 975 likes | 448K downloads
  *Moonshot AI's compressed code model with image-feature-extraction, trending for efficient code generation with vision support.*

- **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** — LiquidAI | 114 likes | 10.1K downloads
  *Liquid AI's 350M sentence embedding model for semantic similarity, part of their LFM2.5 series.*

- **[LiquidAI/LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)** — LiquidAI | 87 likes | 2.5K downloads
  *A ColBERT variant of LiquidAI's embedding model, optimized for efficient retrieval with PyLate integration.*

- **[poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)** — poolside | 93 likes | 2.8K downloads
  *A vLLM-compatible language model from poolside, designed for production deployment with SGLang support.*

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,156 likes | 3.96M downloads
  *An uncensored, aggressive-quantized MoE vision model based on Qwen 3.6, commanding massive downloads for its uncensored capabilities.*

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** — unsloth | 300 likes | 55.8K downloads
  *Unsloth's GGUF quantization of GLM-5.2, enabling efficient local deployment of the MoE model.*

- **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** — zai-org | 149 likes | 395K downloads
  *The official FP8 quantization of GLM-5.2, showing strong adoption for memory-efficient inference.*

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 185 likes | 27.2K downloads
  *A GGUF-quantized reasoning model combining Qwen 3.5 with Claude-style training data for enhanced reasoning.*

- **[bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)** — bytkim | 111 likes | 65.8K downloads
  *A fine-tuned and quantized Qwen 3.6 with MTP (Multi-Turn Processing) optimization, popular for chat applications.*

- **[huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)** — huihui-ai | 112 likes | 3.3K downloads
  *An abliterated (uncensored) version of Gemma-4 coder, reflecting community interest in removing safety guardrails.*

## 3. Ecosystem Signal

The **Gemma-4 family** is the most active ecosystem this week, with multiple fine-tunes and quantizations covering coding, agentic use, and abliterated variants — indicating Google's open-weight strategy is paying off in community adoption. **MoE architectures** continue to dominate: GLM-5.2 (MoE-DSA), Qwen 3.6 (various MoE sizes), and DiffusionGemma (A4B) all leverage mixture-of-experts for efficiency. **Vision-language models** are no longer niche — 7 of the top 30 models support image-text inputs, including full any-to-any pipelines. **Quantization is now expected**, not optional: the top download counts (3.96M for Qwen3.6 uncensored GGUF, 949K for DiffusionGemma) show users prioritize deployable formats. **Uncensored/abliterated models** remain a consistent sub-trend, with multiple entries explicitly removing content filters. NVIDIA is making a strong push across modalities (ASR, visual grounding), while China-based labs (DeepSeek, Zhiyuan, Baidu, Moonshot) continue releasing competitive open-weight models. The **MiniMax-M3** entry suggests Chinese AI labs are competing aggressively on multimodal capabilities.

## 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — At just 3B parameters, this visual grounding model offers practical object localization capabilities that could serve as a foundation for robotics and image understanding pipelines, with NVIDIA's backing suggesting production-quality engineering.

2. **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** — A compelling demonstration of what's possible at small scale: 3B parameters for math reasoning. Worth studying for anyone interested in efficient reasoning models or deploying capable LLMs on consumer hardware.

3. **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — With 448K downloads and compressed-tensors architecture, this model represents the convergence of coding ability, vision support, and efficient deployment — a promising direction for multimodal code assistants.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*