# Hugging Face Trending Models Digest 2026-05-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-30 00:25 UTC

---

# Hugging Face Trending Models Digest — May 30, 2026

---

## 1. Today's Highlights

The Qwen 3.6 family continues its ecosystem dominance with multiple variants trending simultaneously, including official releases, community fine-tunes, and aggressive quantization efforts by Unsloth. DeepSeek-V4 Pro and Flash solidify their position as the most downloaded open-weight models, collectively approaching 9.2 million downloads. Notably, multimodal capabilities are expanding beyond vision-language into video understanding and generation, with models like [Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) and [LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5) pushing boundaries in video generation. The emergence of "any-to-any" architectures like ByteDance's [Lance](https://huggingface.co/bytedance-research/Lance) signals a shift toward unified multimodal foundations. Community-driven quantization remains extraordinarily active, with GGUF variants consistently capturing significant download volumes despite lower like counts.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,433 | 5,836,444 | Flagship open-weight MoE model with exceptional adoption for production deployments. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,292 | 3,382,438 | Distilled efficient variant balancing performance and inference cost. |
| [Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,522 | 4,858,365 | Official dense vision-language foundation with strong multilingual capabilities. |
| [tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B) | tencent | 425 | 3,084 | Specialized translation-optimized MoE with 30B total/3B active parameters. |
| [tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B) | tencent | 1,088 | 15,753 | Compact yet high-performing dense translation model gaining unexpected traction. |
| [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 212 | 8,854 | Novel liquid neural architecture exploring beyond transformer paradigms. |
| [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 405 | 131,828 | Domain-specific 1B parameter model for human resources and talent management. |
| [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B) | openbmb | 551 | 23,629 | Ultra-efficient edge-optimized model continuing the MiniCPM legacy of small-model excellence. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance) | bytedance-research | 974 | 2,738 | Ambitious any-to-any multimodal foundation supporting image and video generation. |
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,440 | 1,528,838 | High-engagement text-to-video model with massive download volume for creative workflows. |
| [circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima) | circlestone-labs | 1,592 | 723,317 | ComfyUI-compatible diffusion model with strong community adoption for image generation. |
| [openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6) | openbmb | 1,056 | 428,949 | Advanced vision-language model with competitive performance at efficient scale. |
| [meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5) | meituan-longcat | 393 | 0 | Novel audio/image/text-to-video avatar generation with zero downloads suggesting gated or early release. |
| [NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B) | NemoStation | 444 | 14,727 | Specialized video-text-to-text model for video captioning and understanding. |
| [nvidia/PiD](https://huggingface.co/nvidia/PiD) | nvidia | 176 | 389 | Precision image diffusion for super-resolution applications from NVIDIA research. |
| [microsoft/Lens](https://huggingface.co/microsoft/Lens) | microsoft | 144 | 1,255 | Research text-to-image model with associated arXiv paper (2605.21573). |
| [microsoft/Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo) | microsoft | 128 | 1,685 | Accelerated variant of the Lens generation architecture. |
| [Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3) | Supertone | 738 | 53,824 | Production-quality ONNX-based TTS with strong audio synthesis performance. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 383 | 7,861 | Visual grounding and localization model for open-vocabulary spatial understanding. |
| [numind/NuExtract3](https://huggingface.co/numind/NuExtract3) | numind | 196 | 49,014 | Structured information extraction from images and documents leveraging Qwen3.5 vision. |
| [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 100 | 1,171 | Document understanding combining OCR with ERNIE 4.5 vision-language capabilities. |
| [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 115 | 1,421 | Efficient vision-language model from StepFun with competitive benchmark positioning. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,049 | 2,114,938 | Most-downloaded community fine-tune with explicit uncensored focus on Qwen3.6 MoE. |
| [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 549 | 841,068 | Expertly quantized MTP variant with massive adoption for local inference. |
| [unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF) | unsloth | 414 | 726,514 | MoE-optimized quantization enabling 35B-quality inference at 3B active parameter cost. |
| [Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF) | Jackrong | 161 | 85,680 | Community MTP quantization with significant traction despite lower visibility. |
| [Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF) | Jackrong | 183 | 29,306 | Standard GGUF variant of the Qwopus community fine-tune. |
| [OBLITERATUS/Qwen3.6-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED) | OBLITERATUS | 118 | 16,849 | Aggressive weight modification approach for specialized use cases. |
| [LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF) | LiquidAI | 105 | 5,293 | Edge-optimized liquid architecture quantization for llama.cpp deployment. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 452 | 0 | Utility-focused MLX chat template corrections with high engagement but no downloads. |

---

## 3. Ecosystem Signal

The Qwen family has achieved near-hegemonic status in the open-weight ecosystem, with Qwen 3.6 variants occupying 10 of 30 trending slots across official, fine-tuned, and quantized forms. This concentration exceeds even Llama's historical dominance, suggesting Alibaba's strategic investment in permissive licensing and comprehensive model coverage is paying ecosystem dividends. DeepSeek maintains its position as the download volume leader with V4 Pro and Flash, though its narrower model count indicates focused flagship strategy versus Qwen's portfolio approach.

The quantization ecosystem has matured into a primary distribution channel rather than secondary optimization. Unsloth's official GGUF variants routinely achieve 700K–800K downloads, rivaling base model adoption. Notably, "uncensored" and aggressively modified community fine-tunes ([HauhauCS](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive), [OBLITERATUS](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED)) attract substantial engagement, reflecting persistent demand for unaligned model behavior. Multimodal expansion is accelerating beyond vision-language into video generation and understanding, with specialized architectures ([Lance](https://huggingface.co/bytedance-research/Lance)'s any-to-any, [Marlin](https://huggingface.co/NemoStation/Marlin-2B)'s video-text) indicating the field's next frontier. The near-absence of proprietary API-only models in trending suggests open weights have won developer mindshare for foundation model access.

---

## 4. Worth Exploring

**[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** — The "any-to-any" pipeline tag represents a genuine architectural ambition: unified encoding and generation across modalities without separate encoders/decoders. At only 2,738 downloads but 974 likes, this is early-stage research with high potential impact. Worth studying for multimodal architecture design and as a potential foundation for next-generation unified systems.

**[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — With 2.1M downloads, this is the most widely adopted community modification on the list. Regardless of stance on alignment, its technical approach to modifying MoE routing and safety fine-tuning represents significant distributed research. Essential for understanding how open-weight models evolve post-release through community iteration.

**[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — NVIDIA's focused 3B parameter model for visual grounding demonstrates efficient task-specific design over scale maximization. The image-text-to-text pipeline with explicit localization capabilities fills a critical gap between general VLM capabilities and precise spatial reasoning. Particularly relevant for robotics, AR/VR, and accessibility applications requiring referential understanding.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*