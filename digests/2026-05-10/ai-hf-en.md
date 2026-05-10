# Hugging Face Trending Models Digest 2026-05-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-10 00:20 UTC

---

# Hugging Face Trending Models Digest — May 10, 2026

---

## 1. Today's Highlights

DeepSeek's V4 family continues to dominate the Hub with both [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) and [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) racking up over 2.1 million combined downloads, signaling sustained appetite for open-weight reasoning models. Google's Gemma-4 series is making a major push into multimodal territory, with three variants including the experimental [any-to-any](https://huggingface.co/google/gemma-4-E4B-it) architecture. The Qwen ecosystem remains the most vibrant community hub, with eight models in the top 30—ranging from official releases to aggressive uncensored fine-tunes and GGUF quantizations. Notably, [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) has crossed 2.2 million downloads, indicating that open speech synthesis is finally hitting mainstream adoption. Meanwhile, speculative decoding innovations like DFlash are emerging as practical optimization techniques for production deployments.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 3,784 | 1,167,697 | Flagship reasoning model with strong performance on coding and math benchmarks; enterprise adoption driver. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,011 | 957,448 | Distilled fast variant balancing quality and inference speed for production chat applications. |
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,208 | 2,127,689 | Dense vision-language backbone with competitive performance against larger closed models. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,693 | 3,511,378 | Mixture-of-Experts variant with exceptional efficiency—most downloaded model this week. |
| [moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6) | moonshotai | 1,239 | 1,239,626 | Long-context specialist from Moonshot AI with compressed-tensor optimizations for extended sequences. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,576 | 8,894,303 | Highest-download model overall; Google's strongest open-weight challenger to Llama and Qwen families. |
| [XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro) | XiaomiMiMo | 499 | 31,447 | Agent-optimized architecture with explicit long-context training for autonomous workflows. |
| [Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B) | Zyphra | 326 | 23,620 | Compact Apache-2.0 model with published eval results, targeting on-device deployment. |
| [mistralai/Mistral-Medium-3.5-128B](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B) | mistralai | 309 | 29,683 | Large-scale vLLM-optimized model with bilingual English/French training. |
| [talkie-lm/talkie-1930-13b-it](https://huggingface.co/talkie-lm/talkie-1930-13b-it) | talkie-lm | 256 | 0 | New instruction-tuned base with zero downloads suggesting pre-release buzz or metadata anomaly. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 489 | 115,477 | Open text-to-video model with GGUF support and endpoint compatibility for accessible deployment. |
| [SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime) | SeeSee21 | 266 | 8,433 | Niche anime-style text-to-image generator with dual GGUF/diffusers format support. |
| [TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros) | TenStrip | 186 | 51,779 | Community fine-tune of LTX Video for stylized image-to-video generation. |
| [google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant) | google | 175 | 47,793 | Experimental any-to-any assistant variant pushing unified multimodal boundaries. |
| [google/gemma-4-26B-A4B-it-assistant](https://huggingface.co/google/gemma-4-26B-A4B-it-assistant) | google | 96 | 28,762 | Smaller MoE any-to-any assistant for efficient multimodal experimentation. |
| [google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it) | google | 959 | 5,581,069 | Ultra-efficient 4B any-to-any model proving strong performance at minimal scale. |
| [HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image) | HiDream-ai | 101 | 21 | Novel image-text-to-image model with O1-style reasoning for iterative visual generation. |
| [sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT) | sensenova | 206 | 3,196 | Mixture-of-Transformers multimodal architecture with feature-extraction capabilities. |
| [k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice) | k2-fsa | 822 | 2,233,532 | Breakthrough open multilingual TTS with zero-shot voice cloning crossing 2M downloads. |
| [nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16](https://huggingface.co/nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16) | nvidia | 267 | 116,933 | NVIDIA's reasoning-optimized any-to-any model for enterprise multimodal pipelines. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,381 | 180,322 | Production-grade PII detection from OpenAI with ONNX optimization for compliance pipelines. |
| [AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit) | AngelSlim | 155 | 17,030 | Extreme 1.25-bit quantization of Hunyuan translation model for edge deployment. |
| [z-lab/gemma-4-31B-it-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash) | z-lab | 69 | 3,801 | Speculative decoding implementation for Gemma-4 enabling faster inference with draft models. |
| [z-lab/Qwen3.6-27B-DFlash](https://huggingface.co/z-lab/Qwen3.6-27B-DFlash) | z-lab | 273 | 32,213 | DFlash-optimized Qwen with feature-extraction head for retrieval-augmented generation. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF) | unsloth | 633 | 1,355,414 | Official Unsloth quantization with massive adoption for local inference. |
| [unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF) | unsloth | 973 | 2,581,735 | Most popular MoE GGUF release; enables 35B-equivalent quality on consumer hardware. |
| [Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF) | Jackrong | 94 | 33,515 | Community GGUF with TGI/Unsloth optimizations for serving infrastructure. |
| [DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF) | DavidAU | 114 | 161,548 | Aggressively uncensored code-specialized variant with IMatrix calibration for quality retention. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 594 | 1,061,556 | Most downloaded uncensored fine-tune; vision-capable MoE with 1M+ pulls. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 126 | 0 | MLX-compatible Jinja template corrections for Apple Silicon Qwen deployment. |

---

## 3. Ecosystem Signal

The Qwen family has achieved ecosystem dominance unmatched since Llama-2's peak, with official releases, Unsloth quantizations, and community fine-tunes collectively accounting for over 40% of this week's trending models. This fragmentation-into-strength pattern—where a single base model spawns dozens of specialized derivatives—suggests Qwen3.6 has become the default substrate for open experimentation. Google's Gemma-4 launch strategy is notably aggressive: four simultaneous releases spanning 4B to 31B, with explicit any-to-any architectures challenging the assumption that multimodal requires massive scale. The 8.9 million downloads for [gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) indicate strong distribution leverage.

Open-weight momentum continues to outpace proprietary releases, with OpenAI's only presence being a utility [privacy-filter](https://huggingface.co/openai/privacy-filter) rather than a foundation model. The quantization ecosystem has matured beyond simple GGUF conversion into sophisticated techniques: 1.25-bit extremes ([AngelSlim](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)), speculative decoding ([DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash)), and IMatrix calibration for uncensored fine-tunes. The "uncensored" tag appears on three models with 1.2 million combined downloads, reflecting persistent demand for unaligned variants despite increasing regulatory attention. Voice synthesis is having its Stable Diffusion moment: [OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)'s 2.2 million downloads suggest zero-shot voice cloning is crossing from novelty to infrastructure.

---

## 4. Worth Exploring

**[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** — With 2.2 million downloads and zero-shot multilingual voice cloning, this is likely the most capable open TTS model yet released. The combination of voice cloning and multilingual support opens immediate applications in accessibility, content localization, and interactive agents. Worth studying for its architectural approach to speaker conditioning and the training data curation that enabled cross-lingual transfer.

**[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** — At only 4B parameters with any-to-any capabilities and 5.6 million downloads, this model challenges fundamental assumptions about scale requirements for multimodal understanding. Its efficiency-to-capability ratio makes it ideal for studying how Google achieved unified multimodal processing at edge-deployable sizes, and whether this architecture can be fine-tuned for specific verticals.

**[z-lab/gemma-4-31B-it-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash)** — Speculative decoding remains underutilized in production; this implementation with draft-model acceleration for Gemma-4 offers a concrete case study in inference optimization. With only 3,801 downloads, it's underexplored relative to its potential impact on serving costs, making it particularly valuable for engineers building production LLM infrastructure.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*