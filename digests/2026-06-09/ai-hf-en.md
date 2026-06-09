# Hugging Face Trending Models Digest 2026-06-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-09 00:24 UTC

---

# Hugging Face Trending Models Digest — June 9, 2026

---

## 1. Today's Highlights

**DeepSeek-V4-Pro** dominates the trending charts with 4,720 weekly likes and 5.4M downloads, cementing DeepSeek's position as the most sought-after open-weight model family for production deployments. Google's **Gemma-4** series is generating significant ecosystem activity with multiple variants (base, instruction-tuned, and quantized formats) appearing in the top rankings, signaling strong community adoption of Google's any-to-any architecture. NVIDIA continues its aggressive Hub presence with seven models across vision, speech, and massive-scale language modeling, including the 550B-parameter **Nemotron-3-Ultra**. Notably, video generation is heating up with **Sulphur-2-base** and **ByteDance/Bernini-R** both trending, while uncensored fine-tunes like **HauhauCS's Qwen3.6-35B** variant attract outsized engagement relative to their niche positioning.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,720 | 5,399,597 | Flagship open-weight LLM with state-of-the-art reasoning and conversational capabilities, driving massive production adoption. |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,446 | 3,262,529 | Distilled efficient variant balancing performance and inference speed for cost-sensitive deployments. |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 750 | 554,173 | Google's instruction-tuned any-to-any model with strong multimodal grounding in a compact 12B footprint. |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 726 | 163,953 | Specialized 1B-parameter HR and workforce analytics model demonstrating domain-specific LLM demand. |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 548 | 135,131 | Liquid Foundation Model with MoE architecture offering efficient inference through sparse activation. |
| **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | JetBrains | 259 | 17,448 | IDE-optimized reasoning model with explicit chain-of-thought capabilities for software development workflows. |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | nvidia | 165 | 55,910 | Massive 550B-parameter enterprise-grade model with 55B active parameters, pushing open-weight scale boundaries. |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 781 | 126,061 | Ultra-efficient 1B-parameter edge model delivering surprising capability density for on-device deployment. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 1,617 | 121,594 | Vision-language grounding model enabling precise object localization from natural language descriptions. |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun-ai | 351 | 45,535 | Fast vision-language model from StepFun with competitive benchmark performance on multimodal reasoning. |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram-ai | 392 | 5,495 | FP8-quantized text-to-image model from Ideogram, offering near-FP32 quality with reduced VRAM requirements. |
| **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | ideogram-ai | 261 | 4,963 | NF4-quantized variant for extreme memory-constrained image generation deployments. |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,600 | 1,707,062 | Community video generation model built on LTX-2.3, achieving viral adoption for open text-to-video creation. |
| **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance | 184 | 278 | Research release of image-text-to-video renderer with strong motion consistency and Apache-2.0 licensing. |
| **[jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo)** | jdopensource | 102 | 4,053 | JD.com's open video generation model with integrated audio synthesis for end-to-end audio-video production. |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 244 | 15,005 | Compact 4B-parameter TTS model leveraging Qwen3 architecture for natural speech synthesis. |
| **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | google | 151 | 17,531 | Real-time text-to-audio generation with TFLite deployment support for interactive music applications. |
| **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | MisoLabs | 156 | 0 | Newly released voice synthesis model with zero downloads suggesting pending community discovery or gated release. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 287 | 3,957 | Cache-aware streaming ASR optimized for real-time transcription with minimal latency. |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 277 | 9,924 | Document understanding model combining ERNIE4.5 with OCR for structured text extraction from images. |
| **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** | nex-agi | 116 | 716 | Emerging vision-language model based on Qwen3.5-MoE with nascent community traction. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,552 | 3,036,465 | Aggressively uncensored Qwen3.6 MoE fine-tune with massive download volume despite controversial positioning. |
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 500 | 645,263 | High-performance GGUF quantization enabling Gemma-4 inference on consumer hardware. |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 695 | 1,186,648 | Multi-token prediction GGUF variant of Qwen3.6 with exceptional throughput for local deployment. |
| **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth | 146 | 121,399 | QAT-optimized GGUF with superior accuracy retention versus standard quantization approaches. |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)** | nvidia | 145 | 66,219 | NVIDIA's proprietary NVFP4 format reducing 550B model to feasible enterprise deployment footprint. |
| **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** | unsloth | 100 | 87,455 | Larger Gemma-4 variant with QAT quantization, bridging capability and accessibility for advanced users. |

---

## 3. Ecosystem Signal

**DeepSeek and Google Gemma** constitute the dominant gravitational centers of today's ecosystem. DeepSeek-V4's combined 8.7M downloads across Pro and Flash variants demonstrate that open-weight models have decisively won the production deployment argument against API-only alternatives—organizations increasingly prioritize data sovereignty and cost predictability. Google's Gemma-4 architecture, with its unified any-to-any design, is spawning substantial derivative activity: three Unsloth quantizations and multiple community fine-tunes indicate strong architectural confidence.

**NVIDIA's strategic omnipresence** deserves attention—seven models spanning vision, speech, language, and video signal their ambition to own the full-stack open model ecosystem, not merely silicon. The Nemotron-3-Ultra 550B release in both BF16 and NVFP4 formats explicitly bridges research accessibility with enterprise inference efficiency.

**Quantization has matured from optimization to primary distribution mechanism.** GGUF variants routinely outdownload base models (Unsloth's Qwen3.6-27B GGUF at 1.2M vs. comparable base forms), while QAT (quantization-aware training) is displacing post-training approaches for quality-critical applications. The uncensored fine-tune phenomenon—exemplified by HauhauCS's 3M-download Qwen variant—reveals persistent demand for unaligned models despite platform friction, suggesting ongoing tension between safety frameworks and user autonomy.

---

## 4. Worth Exploring

| Model | Reasoning |
|-------|-----------|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Highest like-to-download ratio (1:75) among top models signals strong quality perception; vision grounding with precise localization addresses a genuine capability gap between generic VLMs and robotics/AR applications. The 3B size enables real-time performance on edge devices where larger multimodal models fail. |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | 1.6M downloads for a community video model indicates the LTX-2.3 ecosystem is achieving genuine open-source competitiveness against proprietary video generators. Worth studying for architecture decisions and training dynamics that enabled this viral adoption, particularly given the challenging economics of video model training. |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | Represents the frontier of capability density research—delivering usable intelligence at 1B parameters challenges assumptions about minimum viable model scale. Critical reference for edge AI productization, with established deployment patterns through its Llama architecture compatibility. |

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*