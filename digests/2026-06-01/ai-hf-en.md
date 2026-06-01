# Hugging Face Trending Models Digest 2026-06-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-01 00:26 UTC

---

# Hugging Face Trending Models Digest — June 1, 2026

---

## 1. Today's Highlights

DeepSeek continues to dominate the ecosystem with **DeepSeek-V4-Pro** ([deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)) amassing nearly 5.9M downloads, cementing its position as the most deployed open-weight model family. The Qwen 3.6 ecosystem shows remarkable vitality, with both official releases and community quantizations like **Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)) driving massive download volumes. Notably, multimodal capabilities have become table stakes—vision-language models now comprise the majority of trending releases, while specialized modalities like video generation (**Sulphur-2-base**) and speech synthesis (**supertonic-3**) are maturing rapidly. The community quantization scene remains highly active through Unsloth and independent creators, with GGUF variants consistently outpacing base models in raw download numbers.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,497 | 5,886,599 | Flagship MoE architecture setting benchmarks for open-weight reasoning and conversational quality at scale. |
| **[DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,319 | 3,483,641 | Distilled variant delivering Pro-level performance with dramatically reduced inference costs; MIT-licensed. |
| **[MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 658 | 36,730 | Ultra-efficient 1B parameter model pushing edge-deployment boundaries with Llama-architecture compatibility. |
| **[LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 321 | 27,677 | Liquid Foundation Model with MoE routing, representing alternative architectures to standard transformers. |
| **[HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 427 | 143,904 | Specialized HR and workforce analytics model demonstrating vertical-specific LLM demand. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,552 | 5,064,096 | Official vision-language flagship; unified image-text-to-text with strong benchmark performance. |
| **[MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 1,082 | 444,679 | Compact yet capable VLM rivaling larger models on document understanding and visual reasoning. |
| **[Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,469 | 1,590,236 | Open text-to-video generation model with endpoint compatibility, filling a critical gap in accessible video AI. |
| **[Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 992 | 2,948 | Ambitious any-to-any modality converter from ByteDance, handling image and video generation in unified framework. |
| **[supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 754 | 56,472 | Production-grade ONNX-based TTS with expressive speech synthesis, popular for voice applications. |
| **[Lens](https://huggingface.co/microsoft/Lens)** | microsoft | 149 | 1,959 | Microsoft's text-to-image diffusion model, notable for academic transparency with arXiv preprint reference. |
| **[LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** | meituan-longcat | 439 | 0 | Meituan's audio/image/text-to-video avatar system; zero downloads suggest gated or early release status. |
| **[PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 117 | 2,731 | ERNIE 4.5-powered document intelligence, extending PaddleOCR into full visual language understanding. |
| **[NuExtract3](https://huggingface.co/numind/NuExtract3)** | numind | 208 | 57,248 | Structured information extraction from images and documents, built on Qwen 3.5 vision backbone. |

### 🔧 Specialized Models (code, math, medical, embeddings, OCR, privacy)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 595 | 24,586 | NVIDIA's visual grounding model for precise object localization with natural language queries. |
| **[PiD](https://huggingface.co/nvidia/PiD)** | nvidia | 217 | 498 | Perceptual image diffusion for super-resolution, leveraging NVIDIA's diffusion expertise. |
| **[Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** | tencent | 440 | 4,226 | Hunyuan MT2 massive multilingual translation model, 30B parameters with MoE efficiency. |
| **[Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** | tencent | 1,094 | 17,471 | Dense 1.8B translation specialist outperforming larger generalist models on translation benchmarks. |
| **[privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,573 | 306,344 | OpenAI's token-classification model for PII detection and redaction, deployable via Transformers.js. |
| **[Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | NemoStation | 468 | 16,277 | Video-text-to-text model based on Qwen 3.5, targeting temporal reasoning in video understanding. |
| **[MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5)** | OpenMOSS-Team | 83 | 14,272 | Chinese-focused TTS with novel delay-based acoustic modeling, from Fudan's OpenMOSS team. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, ONNX)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,156 | 2,439,402 | Most-downloaded community model: aggressively uncensored GGUF of Qwen 3.6 MoE, 2.4M downloads. |
| **[Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 578 | 926,440 | Unsloth's Multi-Token Prediction GGUF quantization, enabling 2-3x faster inference on consumer hardware. |
| **[LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)** | LiquidAI | 133 | 41,828 | Official GGUF release from LiquidAI, optimized for llama.cpp edge deployment. |
| **[Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** | Jackrong | 178 | 124,807 | Community MTP-quantized variant with vision support, popular for local multimodal applications. |
| **[Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** | Jackrong | 190 | 37,241 | Standard GGUF version of the Qwopus vision-language fine-tune, balancing quality and accessibility. |
| **[Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia | 91 | 105,608 | NVIDIA's official NVFP4 quantized MoE, demonstrating production-grade model optimization for Blackwell GPUs. |
| **[Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 467 | 0 | MLX-format chat template corrections for Apple Silicon deployment; zero downloads indicate metadata utility. |
| **[Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,610 | 756,861 | ComfyUI-native diffusion model in single-file format, strong community traction for workflow integration. |

---

## 3. Ecosystem Signal

The Qwen and DeepSeek families have achieved clear dominance in the open-weight ecosystem, with Qwen 3.6 variants accounting for over half of all trending models and DeepSeek-V4 driving the highest absolute download volumes. This bifurcation—Alibaba's Qwen as the most forked and fine-tuned foundation, DeepSeek as the most deployed for production inference—suggests a maturing market where different models serve distinct ecosystem roles. Chinese labs (Alibaba, DeepSeek, Tencent, ByteDance, OpenBMB) now contribute the majority of foundational research releases, while Western organizations focus increasingly on tooling, optimization, and vertical applications.

Quantization has evolved from community workaround to first-class release strategy. Official GGUF and NVFP4 releases from model authors themselves, alongside Unsloth's systematic MTP quantization pipeline, indicate that efficient inference is now co-designed with model architecture rather than retrofitted. The uncensored fine-tune phenomenon—exemplified by HauhauCS's 2.4M-download release—remains a persistent and high-traffic segment, though its commercial implications remain contested.

Multimodal convergence is accelerating: pure text-generation models are now outnumbered by vision-language and any-to-any architectures in trending rankings. Even specialized models (translation, OCR, TTS) increasingly incorporate visual understanding, suggesting that modality boundaries are dissolving in favor of unified perceptual systems.

---

## 4. Worth Exploring

**[DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — The MIT-licensed distilled variant offers an exceptional quality-to-cost ratio at 3.5M+ downloads, making it the pragmatic choice for production deployment where Pro-scale resources are unavailable. Its permissive licensing and proven architecture reduce both legal and technical risk for commercial applications.

**[Lance](https://huggingface.co/bytedance-research/Lance)** — ByteDance's any-to-any model represents the most ambitious modality-unification attempt in this cohort. With under 3K downloads, it's underexplored relative to its architectural significance; researchers and builders working on multimodal pipelines should study its approach to unified image/video generation.

**[privacy-filter](https://huggingface.co/openai/privacy-filter)** — Surprisingly practical and well-trafficked at 306K downloads, this OpenAI release demonstrates that specialized safety tooling can achieve broad adoption. Its Transformers.js compatibility enables browser-based PII detection, making it immediately deployable for compliance-sensitive applications without backend infrastructure.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*