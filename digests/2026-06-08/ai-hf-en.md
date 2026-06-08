# Hugging Face Trending Models Digest 2026-06-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-08 00:29 UTC

---

# Hugging Face Trending Models Digest — June 8, 2026

---

## 1. Today's Highlights

DeepSeek's V4 series continues to dominate engagement with **DeepSeek-V4-Pro** amassing 4,696 likes and 5.5M downloads, cementing its position as the most impactful release this week. NVIDIA's ecosystem expansion is remarkable, with seven models spanning vision, speech, video generation, and optimized inference formats—most notably the **LocateAnything-3B** vision grounding model topping weekly likes. Google's **Gemma-4** family shows strong ecosystem adoption through official releases and community quantizations. The emergence of uncensored fine-tunes like **Qwen3.6-35B-A3B-Uncensored** signals persistent demand for unfiltered model variants, while video generation gains traction with **Sulphur-2-base** and ByteDance's **Bernini-R** renderer.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,696 | 5,515,325 | Flagship reasoning model with massive adoption; MIT license and strong eval results drive enterprise and research interest. |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,434 | 3,347,429 | Distilled fast variant balancing performance and efficiency for production deployments. |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 686 | 434,969 | Google's latest any-to-any architecture with unified multimodal training, showing strong ecosystem uptake. |
| **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | google | 410 | 99,655 | Base pretrained variant of Gemma-4 for researchers building custom fine-tunes. |
| **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | JetBrains | 249 | 16,924 | Code-focused reasoning model with explicit thinking tokens from the IDE tooling leader. |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 540 | 118,326 | Liquid Foundation Model with MoE architecture, representing alternative transformer architectures gaining traction. |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 779 | 114,329 | Highly efficient 1B parameter model competitive with larger counterparts, ideal for edge deployment. |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 718 | 162,822 | Specialized HR and workforce analytics language model targeting enterprise HR tech vertical. |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | nvidia | 156 | 49,784 | Massive 550B parameter (55B active) Nemotron variant for highest-quality synthetic data generation. |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)** | nvidia | 131 | 39,864 | NVFP4-quantized variant of the Ultra model enabling feasible inference at extreme scale. |
| **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia | 200 | 1,185,362 | NVIDIA-optimized Qwen MoE with ModelOpt quantization, showing massive download volume for production inference. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 1,522 | 115,556 | Open-set visual grounding model enabling precise object localization from natural language; tops weekly engagement. |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun-ai | 348 | 43,196 | Fast vision-language model from StepFun with competitive multimodal reasoning benchmarks. |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 266 | 9,084 | Document understanding and OCR-optimized VLM built on ERNIE4.5, popular for enterprise document processing. |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram-ai | 345 | 4,377 | FP8-quantized release of Ideogram's latest text-to-image model with superior typography and design fidelity. |
| **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | ideogram-ai | 235 | 3,844 | NF4-quantized variant for accessible consumer GPU inference of high-quality image generation. |
| **[nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image)** | nvidia | 123 | 5,075 | Part of NVIDIA's Cosmos3 omni-media suite, offering production-grade text-to-image generation. |
| **[nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video)** | nvidia | 114 | 4,515 | Image-to-video synthesis within the Cosmos3 ecosystem, enabling controllable video generation pipelines. |
| **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)** | nvidia | 193 | 29,697 | Efficient entry point into Cosmos3 omni-media capabilities with broad download adoption. |
| **[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)** | nvidia | 152 | 24,002 | Full-capability Cosmos3 model for researchers exploring NVIDIA's unified media generation framework. |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,585 | 1,715,710 | Community fine-tune on LTX-2.3 for text-to-video, achieving massive popularity through accessible open weights. |
| **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance | 167 | 246 | Novel image-text-to-video renderer with Apache 2.0 license, representing ByteDance's open research push. |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 193 | 7,557 | Higgs multimodal audio model delivering high-quality text-to-speech from a unified Qwen3-based architecture. |
| **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | MisoLabs | 142 | 0 | New voice synthesis model with zero downloads suggesting very recent release or access restrictions; worth monitoring. |
| **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | google | 130 | 13,338 | Real-time text-to-audio generation with TFLite deployment, continuing Google's music/audio AI research lineage. |
| **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** | nvidia | 317 | 1,082 | Image-to-image super-resolution diffusion model for enhancing visual content quality. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 256 | 3,439 | Cache-aware streaming ASR enabling real-time speech recognition with low latency for production voice applications. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 449 | 568,158 | Leading GGUF quantization of Gemma-4-12B-it with highest download volume, enabling local CPU/GPU inference. |
| **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** | unsloth | 120 | 85,842 | QAT-optimized GGUF with superior accuracy-per-bit for quality-conscious local deployment. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,520 | 2,923,564 | Aggressively uncensored MoE fine-tune with extraordinary download volume, reflecting sustained demand for unaligned variants. |

---

## 3. Ecosystem Signal

**Model family momentum** clearly favors DeepSeek and NVIDIA as the dual engines of open-weight innovation. DeepSeek's V4 architecture has achieved what V3 accomplished in late 2024—massive community adoption through permissive licensing and verifiable capabilities. NVIDIA's strategy has evolved beyond hardware to full-stack dominance: releasing base models (Nemotron, LocateAnything, Cosmos), optimization tools (ModelOpt, NVFP4), and quantized variants that drive GPU utilization. Google's Gemma-4 represents a credible "open" counterweight, though its any-to-any architecture's practical advantages remain to be proven against specialized models.

The **open-weight vs. proprietary** dynamic shows interesting tension: while frontier capabilities remain API-gated, the *quality* of openly available models now satisfies most production needs. The 5.5M downloads for DeepSeek-V4-Pro and 2.9M for an uncensored Qwen fine-tune demonstrate that accessibility trumps absolute capability for many use cases.

**Quantization activity** is exceptionally active, with Unsloth's GGUF variants, NVIDIA's NVFP4 formats, and community FP8/NF4 releases creating a multi-format ecosystem. Notably, quantized models are no longer second-class citizens—NVIDIA's NVFP4 variants achieve download volumes comparable to base models, suggesting production readiness. The "uncensored" fine-tune phenomenon persists as a distinct market segment with its own distribution dynamics, though ethical and safety implications continue to generate debate.

---

## 4. Worth Exploring

**[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — This vision grounding model addresses a genuine capability gap: precise spatial understanding from open-vocabulary descriptions. Unlike generic VLMs, its specialized architecture for localization tasks (1,522 likes despite being only 3B parameters) suggests efficient, production-ready performance. Particularly valuable for robotics, AR/VR, and autonomous systems requiring actionable spatial outputs.

**[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — The engagement metrics speak decisively: 4,696 likes and 5.5M downloads indicate this is the current default choice for open-weight reasoning tasks. The MIT license removes commercial friction, and the established V3→V4 progression provides upgrade confidence. Worth studying for its Mixture-of-Experts efficiency at 671B total/37B active parameters.

**[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — With 1.7M downloads, this community fine-tune demonstrates that accessible video generation resonates more than frontier-but-restricted alternatives. Built on Lightricks' LTX-2.3 with GGUF quantization support, it enables local video generation workflows that were impractical months ago. The "base" designation suggests further fine-tuning potential for specific aesthetic or domain requirements.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*