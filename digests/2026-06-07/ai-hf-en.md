# Hugging Face Trending Models Digest 2026-06-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-07 00:27 UTC

---

# Hugging Face Trending Models Digest — June 7, 2026

---

## 1. Today's Highlights

DeepSeek dominates the leaderboard with **DeepSeek-V4-Pro** (4,681 likes, 5.5M downloads) and **DeepSeek-V4-Flash** (1,421 likes, 3.4M downloads), cementing its position as the most sought-after open-weight model family for production deployment. NVIDIA shows extraordinary ecosystem breadth, placing 9 models across vision, speech, video generation, and massive-scale language models—including the 550B-parameter **Nemotron 3 Ultra**. The Qwen 3.6 MoE architecture has sparked significant community activity, with both official NVIDIA quantized variants and aggressive uncensored fine-tunes gaining traction. Google's Gemma 4 "any-to-any" architecture signals a major push toward unified multimodal-native models rather than bolted-on vision capabilities. Notably, video generation is heating up with **Sulphur-2-base** surpassing 1.7M downloads and ByteDance's **Bernini-R** entering the image-text-to-video space.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,681 | 5,510,611 | Flagship reasoning model with exceptional download velocity, establishing DeepSeek V4 as the default open alternative to proprietary frontier models. |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,421 | 3,436,213 | MIT-licensed distilled variant optimized for latency-sensitive applications without sacrificing conversational quality. |
| **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** | google | 615 | 315,131 | Google's first "any-to-any" native multimodal architecture, enabling seamless text-image-audio interchange in a compact 12B footprint. |
| **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)** | google | 377 | 84,549 | Base pretrained version of Gemma 4 for researchers building custom multimodal pipelines. |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 532 | 95,440 | Liquid Foundation Model 2.5 with 1B active parameters in 8B total—efficient MoE architecture for edge deployment. |
| **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | JetBrains | 239 | 16,395 | IDE-native reasoning model with explicit "thinking" traces, purpose-built for software engineering workflows. |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 774 | 100,575 | Ultra-compact 1B parameter model delivering surprising capability density for on-device and mobile applications. |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** | nvidia | 143 | 47,285 | Massive 550B parameter (55B active) enterprise-grade model with NVIDIA's highest-quality synthetic data training. |
| **[nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4)** | nvidia | 117 | 17,225 | NVFP4-quantized variant of Nemotron 3 Ultra, enabling 4-bit inference of the largest open-weight model available. |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 711 | 161,627 | Specialized 1B model for human resources management tasks—demonstrating vertical domain specialization at small scale. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 1,451 | 111,078 | Precision visual grounding model enabling "locate anything" referential understanding in images—critical for robotics and accessibility. |
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,487 | 2,771,843 | Highly downloaded uncensored vision-language MoE fine-tune, controversial but demonstrating massive demand for unaligned multimodal models. |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun-ai | 342 | 38,716 | StepFun's efficient vision-language model with strong document understanding and visual reasoning benchmarks. |
| **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** | ideogram-ai | 306 | 2,818 | FP8-quantized release of Ideogram 4, offering production-grade text-to-image with superior typography and prompt adherence. |
| **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** | ideogram-ai | 212 | 2,671 | NF4 BitsAndBytes variant for consumer GPU deployment of Ideogram's latest generation. |
| **[nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano)** | nvidia | 183 | 24,820 | Entry-level Cosmos 3 omni-model for text-to-video and world generation, previewing NVIDIA's physical AI simulation stack. |
| **[nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super)** | nvidia | 148 | 20,403 | Full-capability Cosmos 3 model for high-fidelity video generation and physical world simulation. |
| **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** | ByteDance | 149 | 223 | Apache-2.0 licensed image-text-to-video renderer with novel Bernini architecture, fresh from arXiv publication. |
| **[nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image)** | nvidia | 119 | 1,634 | Specialized text-to-image head from the Cosmos 3 Super omni-model, competitive with dedicated diffusion architectures. |
| **[nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video)** | nvidia | 111 | 1,295 | Image animation and video extension pipeline leveraging Cosmos 3's world model understanding. |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,581 | 1,704,964 | Community fine-tune on Lightricks LTX-2.3 achieving extraordinary download velocity—open video generation's breakout hit. |
| **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** | meituan-longcat | 525 | 1,806 | Audio-text-to-video avatar generation from Meituan, targeting real-time virtual human applications. |
| **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** | google | 108 | 9,394 | TFLite-optimized text-to-audio model for real-time music and sound effect generation on edge devices. |
| **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** | bosonai | 153 | 2,184 | Higgs multimodal architecture delivering expressive text-to-speech with only 4B parameters. |
| **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** | MisoLabs | 130 | 0 | Newly released voice synthesis model with emphasis on emotional controllability and speaker consistency. |
| **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** | nvidia | 312 | 972 | Physics-informed diffusion for image super-resolution, applying physical constraints to generative upscaling. |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 258 | 8,365 | ERNIE 4.5-powered OCR and visual language understanding, dominating document intelligence benchmarks. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** | nvidia | 219 | 1,380 | Cache-aware streaming ASR with 0.6B parameters, purpose-built for real-time transcription with minimal latency. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** | unsloth | 421 | 458,174 | Unsloth's optimized GGUF quantization of Gemma 4, outpacing official downloads—proving community tooling demand. |
| **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** | nvidia | 197 | 1,015,381 | Official NVIDIA NVFP4 quantization of Qwen 3.6 MoE, enabling single-GPU inference of 35B-scale models. |

---

## 3. Ecosystem Signal

**DeepSeek and NVIDIA define the poles of today's ecosystem.** DeepSeek's V4 family demonstrates that Chinese labs now set the global standard for open-weight generalist models, with download figures (8.9M combined) that dwarf competitors and an MIT license on Flash that maximizes commercial adoption. NVIDIA, conversely, is executing a platform strategy—releasing across every modality, scale, and precision format to cement CUDA and TensorRT as the inevitable inference infrastructure. The 9 NVIDIA models here span 0.6B to 550B parameters, vision-language, speech, video, and world models.

**The MoE architecture has crossed the chasm.** Qwen 3.6's 35B-A3B configuration appears in three distinct forms (uncensored fine-tune, official NVFP4, base inference), suggesting sparse activation is now the default for efficient scale. Google's Gemma 4 "any-to-any" pipeline tag represents a architectural philosophy shift—away from multimodal adapters toward native multimodal pretraining—that may render "image-text-to-text" models legacy within 18 months.

**Quantization is no longer aftermarket—it's launch strategy.** NVFP4, FP8, NF4, and GGUF variants release simultaneously with base models, with community quantizations (Unsloth's Gemma 4 GGUF) often outperforming official downloads. This compression-first ecosystem enables 550B-parameter models on consumer hardware, collapsing the accessibility gap between research and production.

**Video generation is the new frontier.** Sulphur-2's 1.7M downloads on a community fine-tune, Cosmos 3's omni-release strategy, and Bernini-R's open academic release indicate text-to-video is where image generation was in 2022—approaching the inflection point of quality, speed, and accessibility that enables mass adoption.

---

## 4. Worth Exploring

| Model | Reasoning |
|-------|-----------|
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | Visual grounding remains the critical bottleneck for robotics, AR, and accessibility applications. This 3B model achieves precise referential understanding at a deployable scale, and its 111K downloads with 1,451 likes suggest strong early validation. Worth studying for architecture patterns in efficient vision-language alignment. |
| **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** | The only model explicitly architected for IDE integration with visible reasoning traces. JetBrains' domain expertise in developer tooling suggests this represents a genuine vertical optimization rather than generic instruction tuning—potentially previewing how all professional software will be written. |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | 1.7M downloads for a community fine-tune on LTX-2.3 indicates video generation has found product-market fit. The GGUF quantization and aggressive pricing (free) suggests this is becoming the "SD 1.5 moment" for video—worth exploring to understand open video generation's current capability ceiling and community dynamics. |

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*