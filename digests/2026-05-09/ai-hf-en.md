# Hugging Face Trending Models Digest 2026-05-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-09 00:21 UTC

---

# Hugging Face Trending Models Digest — May 9, 2026

---

## 1. Today's Highlights

Google's **Gemma 4** family dominates this week's leaderboard with multiple variants, including the breakout [gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) amassing 2,569 likes and 8.7M downloads, signaling strong open-weight competition against established players. **Qwen 3.6** continues its ecosystem expansion with massive download numbers across official and community variants, particularly the MoE architecture [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) at 3.4M downloads. DeepSeek's V4 generation maintains premium positioning with both [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) and [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) showing sustained enterprise adoption. The community quantization scene remains vibrant with **unsloth** and **Jackrong** delivering high-traffic GGUF conversions, while "uncensored" fine-tunes of major families continue to attract significant engagement despite ethical debates.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,758 | 1,061,344 | Flagship reasoning model with strong enterprise traction and conversational capabilities. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,004 | 848,696 | Distilled fast-inference variant balancing performance and deployment efficiency. |
| [XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | XiaomiMiMo | 487 | 26,600 | Emerging agent-focused LLM with extended context window for autonomous workflows. |
| [mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B) | mistralai | 303 | 21,300 | Massive 128B parameter model with vLLM optimization for European multilingual use. |
| [poolside/Laguna-XS.2](https://huggingface.co/poolside/Laguna-XS.2) | poolside | 233 | 18,863 | Specialized code-generation model from the AI-native development tools company. |
| [z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) | z-lab | 268 | 30,478 | Experimental feature-extraction variant exploring alternative activation patterns. |
| [z-lab/gemma-4-31B-it-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash) | z-lab | 66 | 2,155 | Speculative decoding research build on Gemma 4 for latency-sensitive applications. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,569 | 8,731,301 | Dominant open multimodal workhorse combining vision-language understanding at scale. |
| [google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant) | google | 162 | 33,314 | Assistant-tuned any-to-any variant for interactive multimodal agents. |
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,191 | 1,958,217 | Mature image-text-to-text platform with proven production deployment track record. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,677 | 3,363,621 | MoE architecture delivering efficient multimodal inference with massive adoption. |
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 448 | 92,968 | Emerging text-to-video foundation model with GGUF endpoint compatibility. |
| [SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime) | SeeSee21 | 239 | 5,077 | Niche anime-style text-to-image generator with diffusers and GGUF support. |
| [TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros) | TenStrip | 166 | 42,529 | Image-to-video evolution of the LTX lineage with regional compute optimization. |
| [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 812 | 2,242,587 | Breakthrough multilingual zero-shot voice cloning and text-to-speech system. |
| [nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) | nvidia | 263 | 89,837 | NVIDIA's compact any-to-any reasoning model with feature extraction capabilities. |
| [sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT) | sensenova | 202 | 2,947 | Novel Mixture-of-Transformers architecture for efficient multimodal processing. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,369 | 173,110 | Production-grade PII detection and redaction from OpenAI with ONNX optimization. |
| [AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit) | AngelSlim | 137 | 16,778 | Extreme 1.25-bit quantized translation model based on Hunyuan architecture. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 963 | 2,500,343 | Definitive community quantization of Qwen's MoE flagship for local inference. |
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 626 | 1,312,422 | High-quality GGUF conversion enabling desktop deployment of multimodal LLM. |
| [dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK) | dealignai | 1,489 | 156,146 | Highly popular "abliterated" uncensored Gemma 4 with MLX compatibility. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 585 | 996,892 | Aggressively uncensored MoE variant nearing 1M downloads despite content risks. |
| [Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF) | Jackrong | 85 | 18,981 | Unsloth-optimized GGUF merge of Qwen architectures for TGI deployment. |
| [DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF) | DavidAU | 102 | 143,853 | Maximalist uncensored coding-specialized quantization with IMatrix calibration. |
| [Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF](https://huggingface.co/Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF) | Jackrong | 108 | 128,635 | Novel cross-architecture merge combining Qwen and DeepSeek for hybrid inference. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 109 | 0 | Community fix for Qwen chat template inconsistencies using MLX and Jinja. |
| [Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B) | Zyphra | 282 | 6,810 | Research-pretrained 8B with published evals and Apache 2.0 licensing. |
| [talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it) | talkie-lm | 250 | 0 | Mysterious zero-download instruction-tuned model with recursive base references. |

---

## 3. Ecosystem Signal

**Model family concentration** has intensified dramatically: **Qwen 3.6** and **Gemma 4** account for over half of all tracked models, with Qwen's MoE architecture ([Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)) becoming the de facto community fine-tuning substrate. Google's strategic release of multiple Gemma 4 variants—standard, assistant-tuned, and MoE—demonstrates maturation of the "model family" approach to capture diverse use cases without fragmentation.

The **open-weight vs. proprietary dynamic** reveals nuanced stratification: OpenAI's [privacy-filter](https://huggingface.co/openai/privacy-filter) represents proprietary-to-open release of narrow utilities, while DeepSeek maintains premium positioning with V4-Pro. Meanwhile, Chinese labs (Qwen, DeepSeek, Xiaomi) increasingly set the pace for base model innovation, with Western contributions concentrated in application layers and quantization tooling.

**Quantization activity** has reached industrial scale—[unsloth](https://huggingface.co/unsloth)'s Qwen conversions alone exceed 3.8M combined downloads, indicating massive demand for local/edge deployment. The proliferation of "uncensored" fine-tunes ([dealignai](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK), [HauhauCS](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive), [DavidAU](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)) represents both technical democratization and growing governance challenges, with these variants collectively approaching 1.3M downloads. Notably, **MLX** (Apple Silicon) and **GGUF** have become standard tags, reflecting hardware diversification beyond CUDA.

---

## 4. Worth Exploring

| Model | Reasoning |
|-------|-----------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | The download velocity (8.7M) and like ratio suggest this is becoming the open-weight default for multimodal applications. Its any-to-any architecture with proven transformers/safetensors stack offers the safest production bet for teams building vision-language products. |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | At 2.2M downloads with 812 likes, this represents genuine breakthrough traction in voice AI—zero-shot multilingual cloning without the licensing friction of proprietary alternatives. Worth studying for audio ML practitioners and product builders in accessibility/media. |
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | The definitive artifact for understanding how MoE architectures translate to consumer hardware—2.5M downloads validate unsloth's quantization quality. Essential for researchers studying efficient inference and practitioners needing local multimodal capabilities. |

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*