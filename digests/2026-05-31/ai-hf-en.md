# Hugging Face Trending Models Digest 2026-05-31

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-31 00:26 UTC

---

# Hugging Face Trending Models Digest — 2026-05-31

---

## 1. Today's Highlights

DeepSeek-V4-Pro dominates this week's leaderboard with 4.6M weekly downloads, cementing its position as the go-to open-weight reasoning model. The Qwen 3.6 family shows remarkable ecosystem breadth, with official releases, community fine-tunes, and multiple quantization formats all trending simultaneously. Notably, multimodal capabilities have become table stakes—nearly every major language model now ships with vision support, while dedicated video generation models like Sulphur-2-base are gaining serious traction. The emergence of "any-to-any" architectures like ByteDance's Lance signals a shift toward unified foundation models. Meanwhile, the quantization community remains highly active, with Unsloth and Jackrong delivering optimized GGUF variants hours after base model releases.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,463 | 5,918,111 | Flagship reasoning model with massive adoption; MIT license and strong eval results driving enterprise and research interest. |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,303 | 3,427,926 | Distilled efficient variant balancing performance and inference cost for production deployments. |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,954 | 5,728,121 | MoE architecture delivering 35B-quality at 3B active parameters; vision-language native. |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,537 | 4,971,730 | Dense counterpart to the MoE variant; strong conversational and multimodal performance. |
| **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** | tencent | 433 | 3,833 | Specialized translation-optimized MoE with competitive quality for multilingual workflows. |
| **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** | tencent | 1,091 | 16,805 | Compact translation model enabling edge deployment without quality sacrifice. |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 606 | 28,793 | Ultra-efficient 1B parameter model pushing performance boundaries for resource-constrained environments. |
| **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** | LiquidAI | 275 | 17,084 | Liquid foundation model with MoE architecture; novel attention mechanisms gaining researcher attention. |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 418 | 138,118 | Domain-specific model for human resources and talent management applications. |
| **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** | stepfun-ai | 134 | 3,400 | StepFun's efficient vision-language model with competitive benchmark performance. |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 460 | 0 | Community utility fixing chat template inconsistencies across Qwen 3.5/3.6 variants for MLX deployment. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 981 | 2,856 | Ambitious any-to-any architecture unifying image generation, video generation, and multimodal understanding in one model. |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,454 | 1,557,858 | High-quality text-to-video generation with endpoint compatibility; massive download volume indicates production use. |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,602 | 736,443 | ComfyUI-compatible diffusion model with strong community adoption for creative workflows. |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 1,074 | 433,156 | Leading-edge small vision-language model; exceptional performance-to-size ratio for on-device multimodal apps. |
| **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** | nvidia | 494 | 18,327 | Visual grounding model enabling precise object localization from natural language; strong NVIDIA ecosystem integration. |
| **[nvidia/PiD](https://huggingface.co/nvidia/PiD)** | nvidia | 192 | 437 | Diffusion-based super-resolution for image enhancement; research-grade quality with practical applications. |
| **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** | meituan-longcat | 411 | 0 | Audio/image/text-to-video avatar generation; Meituan's entry into generative video for virtual presence. |
| **[microsoft/Lens](https://huggingface.co/microsoft/Lens)** | microsoft | 145 | 1,517 | Text-to-image model with academic backing (arXiv:2605.21573); novel architectural contributions. |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 744 | 55,382 | Production-grade Korean/English TTS with ONNX optimization for real-time speech synthesis. |
| **[NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B)** | NemoStation | 454 | 15,780 | Video-text-to-text model built on Qwen 3.5; specialized for long-form video understanding. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)** | pyannote | 2,073 | 9,771,170 | Industry-standard speaker diarization with massive production deployment; near 10M downloads signals ubiquity. |
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,570 | 304,691 | OpenAI's first Hugging Face release in years; token-classification for PII detection with Transformers.js edge support. |
| **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** | numind | 203 | 53,338 | Structured information extraction from images and documents; vision-language architecture for enterprise data processing. |
| **[PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6)** | PaddlePaddle | 107 | 2,294 | OCR-optimized vision-language model leveraging ERNIE 4.5; strong Chinese document understanding. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,102 | 2,227,885 | Aggressively uncensored MoE fine-tune with enormous download volume; controversial but clearly in high demand. |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 567 | 877,938 | Unsloth's optimized GGUF with Multi-Token Prediction; exceptional inference speed for local deployment. |
| **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** | Jackrong | 172 | 105,264 | Community GGUF with MTP support; llama.cpp compatibility for consumer hardware. |
| **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** | Jackrong | 186 | 33,167 | Standard GGUF variant of the Qwopus fine-tune; broader compatibility without MTP. |
| **[LiquidAI/LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF)** | LiquidAI | 123 | 23,685 | Official GGUF release from LiquidAI; edge-optimized with llama.cpp integration. |

---

## 3. Ecosystem Signal

The Qwen 3.6 family has achieved dominant ecosystem momentum, with Alibaba's official releases, community fine-tunes, and third-party quantizations forming a self-reinforcing adoption cycle. This mirrors the Qwen 2.5 phenomenon but at greater scale—five distinct variants appear in this week's top 30 alone. DeepSeek V4 represents the other major gravity well, with Pro and Flash variants capturing nearly 9.5M combined downloads, suggesting enterprises are standardizing on this stack for reasoning workloads.

Open-weight models continue closing the gap with proprietary alternatives, though OpenAI's privacy-filter release is a notable hedge—offering a sanctioned path for sensitive deployments. The quantization ecosystem has matured dramatically: Unsloth and individual contributors like Jackrong now ship optimized GGUFs within 24-48 hours of base model releases, with Multi-Token Prediction becoming a standard optimization. The "uncensored" fine-tune category remains commercially significant despite policy tensions, with HauhauCS's aggressive variant outperforming many official releases in raw downloads.

Most striking is the normalization of native multimodality—vision-language is no longer a separate category but a default capability. ByteDance's Lance pushes further toward true any-to-any architectures, potentially rendering today's pipeline-specific models obsolete.

---

## 4. Worth Exploring

**[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** — Lance merits close study as a potential architectural inflection point. Its any-to-any design unifies generation and understanding across modalities in a single weights package, contrasting with the current paradigm of separate models stitched via API. Early adoption here prepares practitioners for where the field is heading rather than where it is.

**[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — For practitioners needing local deployment, this represents the current state-of-the-art in efficiency engineering. The Multi-Token Prediction implementation achieves ~2x throughput improvement over standard inference, making a 27B-parameter model viable on consumer GPUs. The 877K downloads suggest the community has already validated its reliability.

**[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** — Worth studying less for raw capability than for strategic signaling. OpenAI's first HF release with Transformers.js support indicates a genuine pivot toward edge deployment and privacy-preserving architectures. The ONNX export path and permissive licensing suggest this may preview a broader pattern for future OpenAI model distribution.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*