# Hugging Face Trending Models Digest 2026-05-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-11 00:21 UTC

---

# Hugging Face Trending Models Digest — May 11, 2026

---

## 1. Today's Highlights

This week's trending models are dominated by **Google's Gemma-4 family** and **Qwen 3.6 variants**, signaling intense competition in open-weight multimodal AI. DeepSeek-V4-Pro continues its remarkable momentum with 1.3M downloads, cementing its position as the most deployed open LLM for production use. The emergence of **"any-to-any" pipeline tags** across Gemma-4 and SenseNova models points to a major architectural shift toward unified multimodal understanding. Community quantization activity remains exceptionally vibrant, with Unsloth and independent creators like DavidAU delivering heavily optimized GGUF variants of Qwen 3.6 within weeks of release. Notably, Sulphur-2-base's text-to-video pipeline and HiDream's O1 image reasoning models suggest open generative media is approaching commercial viability.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,819 | 1,339,144 | The week's most downloaded open LLM, delivering production-grade text generation with strong conversational capabilities at scale. |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,024 | 1,068,871 | Lightweight variant of V4-Pro optimized for speed, attracting massive deployment for latency-sensitive applications. |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | XiaomiMiMo | 505 | 40,104 | Emerging agent-focused LLM with extended context support, representing Chinese ecosystem investment in autonomous AI systems. |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 370 | 44,834 | Compact 8B Apache-2.0 model with published eval results, gaining traction for permissive commercial use cases. |
| **[mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)** | mistralai | 312 | 40,551 | Massive 128B parameter model with vLLM optimization, signaling Mistral's continued push into frontier-scale open weights. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,589 | 8,965,984 | The week's breakout star: nearly 9M downloads for Google's flagship multimodal model with native image-text understanding. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 970 | 5,585,425 | Efficient 4B-parameter "expert" variant achieving massive scale deployment through any-to-any architecture. |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,706 | 3,668,376 | MoE-structured multimodal leader with 3.6B active parameters, delivering exceptional efficiency for vision-language tasks. |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,222 | 2,273,063 | Dense variant of Qwen 3.6 with strong image-text-to-text performance, preferred for simpler deployment topologies. |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 833 | 2,212,436 | Breakthrough multilingual zero-shot TTS with voice cloning, crossing 2M downloads as open speech synthesis matures. |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 533 | 144,251 | Highest-liked text-to-video model with GGUF and endpoint compatibility, indicating surging demand for open video generation. |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 182 | 692 | Novel image-text-to-image pipeline leveraging Qwen3-VL for iterative visual reasoning, early but architecturally significant. |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 216 | 3,666 | Compact any-to-any model with Mixture-of-Transformers architecture, demonstrating efficient multimodal design. |
| **[nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16)** | nvidia | 271 | 126,335 | NVIDIA's reasoning-optimized omni-model, positioning proprietary-adjacent hardware-software integration for enterprise. |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 196 | 58,647 | Community-optimized image-to-video extension of LTX architecture, showing vibrant open video model evolution. |
| **[SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime)** | SeeSee21 | 292 | 8,994 | Specialized anime text-to-image with GGUF quantization, serving niche creative community with efficient inference. |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 61 | 1,476 | Professional Korean TTS with ONNX optimization, representing regional speech synthesis specialization. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,394 | 185,884 | Surprisingly popular ONNX-based PII detection from OpenAI, filling critical enterprise compliance gap in open ecosystem. |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 160 | 17,223 | Extreme 1.25-bit quantization of Hunyuan translation model, pushing boundary of ultra-efficient multilingual deployment. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 986 | 2,657,295 | Definitive community quantization of Qwen's MoE flagship, enabling consumer GPU deployment of frontier multimodal model. |
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 638 | 1,412,778 | Dense-variant GGUF with Unsloth optimizations, preferred for lower VRAM environments requiring vision-language capabilities. |
| **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 120 | 181,147 | Elaborately fine-tuned uncensored variant with IMatrix quantization, representing vibrant (if controversial) community customization. |
| **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)** | Jackrong | 100 | 53,096 | Community GGUF with TGI/Unsloth compatibility, showing distributed innovation beyond official quantization channels. |
| **[havenoammo/Qwen3.6-27B-MTP-UD-GGUF](https://huggingface.co/havenoammo/Qwen3.6-27B-MTP-UD-GGUF)** | havenoammo | 62 | 39,384 | MTP (Multi-Token Prediction) enabled GGUF with Unsloth/UD optimizations, experimenting with next-gen inference acceleration. |
| **[z-lab/gemma-4-31B-it-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash)** | z-lab | 72 | 5,193 | Speculative decoding implementation for Gemma-4, pioneering inference speedups for Google's new architecture. |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 131 | 0 | Zero-download but notable: MLX-optimized Jinja chat templates fixing Qwen formatting issues, solving real developer pain point. |

---

## 3. Ecosystem Signal

**Google's Gemma-4 family** has achieved unprecedented open-weight traction, with the base 31B and E4B variants combining for over 14.5M downloads—suggesting the search giant has finally cracked the code on competitive open model release strategy. This directly challenges **Qwen's established dominance** in open multimodal, though Alibaba's ecosystem retains formidable momentum through the 3.6 series and its prolific GGUF community. **DeepSeek's V4 generation** continues its remarkable production adoption, with Pro and Flash variants both exceeding 1M downloads, proving that Chinese labs can achieve global deployment at scale.

The quantization ecosystem has matured into a **parallel distribution infrastructure**: Unsloth's official GGUFs now routinely attract millions of downloads, while individual creators like DavidAU build substantial followings with specialized variants. The "any-to-any" pipeline proliferation—appearing across Gemma-4, SenseNova, and Nemotron—signals industry convergence on **unified multimodal architectures** rather than bolted-together vision-language systems. Proprietary-open dynamics are shifting too: OpenAI's privacy-filter release and NVIDIA's Nemotron branding suggest incumbents are strategically open-sourcing *infrastructure* models while keeping frontier capabilities closed. The complete absence of Meta/Llama in this week's trending list is striking, potentially indicating positioning ahead of Llama-4 or market share erosion.

---

## 4. Worth Exploring

**[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With nearly 9M downloads in a single week, this is clearly the model to benchmark against. Its "image-text-to-text" pipeline with conversational optimization suggests Google has unified vision and language understanding at a level previously requiring separate systems. Worth studying for architecture decisions and as a production baseline for multimodal applications.

**[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** — The most technically impressive quantization achievement this week: a 35B-parameter MoE with only 3.6B active, compressed to GGUF while retaining image-text-to-text capabilities. At 2.6M downloads, it's become the de facto standard for running capable multimodal AI on consumer hardware. Essential for anyone deploying vision-language applications cost-effectively.

**[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** — Crossing 2.2M downloads with zero major corporate backing, this represents the maturation of open speech synthesis. Zero-shot multilingual voice cloning at this scale of adoption suggests it's crossing from research curiosity to production utility. Particularly valuable for applications requiring voice personalization without proprietary API dependencies or licensing constraints.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*