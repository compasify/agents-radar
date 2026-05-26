# Hugging Face Trending Models Digest 2026-05-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-26 00:24 UTC

---

# Hugging Face Trending Models Digest — May 26, 2026

## 1. Today's Highlights

The Hugging Face ecosystem is dominated by **Qwen 3.6 variants** this week, with multiple community quantizations and official releases capturing significant attention. **DeepSeek-V4-Pro** continues its remarkable run with over 4.8M downloads, cementing its position as the most widely adopted open-weight model in production. **Sulphur-2-base** has emerged as a breakout text-to-video model, amassing 1.35M downloads despite modest like counts—suggesting strong downstream commercial adoption. The translation-focused **Hy-MT2 family** from Tencent shows sustained enterprise interest across multiple parameter scales. Notably, **uncensored and aggressively filtered variants** (HauhauCS's Qwen3.6-35B-A3B-Uncensored) are gaining substantial traction, reflecting ongoing demand for unaligned model weights in the open-source community.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,274 | 4,820,866 | The undisputed workhorse of open-source LLMs, delivering state-of-the-art reasoning at production scale with massive adoption across enterprises. |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,451 | 4,423,521 | Alibaba's official release of the Qwen 3.6 series, offering strong multimodal capabilities in a mid-size parameter footprint. |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 313 | 90,026 | A compact but heavily downloaded domain-specific model for human resources management, demonstrating vertical specialization demand. |
| **[nvidia/Nemotron-Labs-Diffusion-14B](https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B)** | nvidia | 100 | 5,195 | NVIDIA's experimental diffusion-based language model, exploring alternative architectures beyond autoregressive transformers. |
| **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** | openbmb | 143 | 2 | An ultra-efficient 1B parameter model from the MiniCPM lineage, positioning for edge deployment despite minimal current downloads. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,349 | 1,354,786 | A production-ready text-to-video model with extraordinary download volume, suggesting widespread integration into commercial pipelines. |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 817 | 1,679 | ByteDance's ambitious any-to-any multimodal model, generating buzz despite limited downloads due to its novel architecture. |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 943 | 285,414 | A highly capable vision-language model that punches above its weight class, popular for efficient multimodal applications. |
| **[CohereLabs/command-a-plus-05-2026-bf16](https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16)** | CohereLabs | 120 | 12,824 | Cohere's latest vision-enabled conversational model, representing proprietary-to-open-weight release strategies. |
| **[meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5)** | meituan-longcat | 223 | 0 | A specialized audio/image/text-to-video avatar model from Meituan, targeting the digital human/avatar generation space. |
| **[stabilityai/stable-audio-3-medium](https://huggingface.co/stabilityai/stable-audio-3-medium)** | stabilityai | 96 | 0 | Stability AI's next-generation audio generation model for music and sound effects, though downloads are stalled pending release. |
| **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | ResembleAI | 253 | 1,498 | A specialized voice cloning and dramatic TTS model, capitalizing on the growing audiobook and entertainment audio market. |
| **[Efficient-Large-Model/SANA-WM_bidirectional](https://huggingface.co/Efficient-Large-Model/SANA-WM_bidirectional)** | Efficient-Large-Model | 105 | 0 | A bidirectional image-to-video model with camera control capabilities, pushing the boundaries of controllable video generation. |
| **[microsoft/Lens-Turbo](https://huggingface.co/microsoft/Lens-Turbo)** | microsoft | 88 | 695 | Microsoft's lightweight text-to-image model, optimized for speed and efficiency with academic backing (arXiv:2605.21573). |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** | tencent | 806 | 5,552 | Tencent's compact but high-quality neural machine translation model, leading a family of scalable translation specialists. |
| **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** | tencent | 325 | 1,494 | The large-scale variant with MoE architecture, targeting enterprise-grade translation quality across language pairs. |
| **[tencent/Hy-MT2-7B](https://huggingface.co/tencent/Hy-MT2-7B)** | tencent | 158 | 3,060 | Mid-size translation model balancing quality and deployment efficiency in the Hy-MT2 family. |
| **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** | numind | 137 | 17,501 | An information extraction specialist built on Qwen3.5, demonstrating continued demand for structured data extraction from documents. |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 672 | 45,800 | A production-grade Korean TTS model with ONNX optimization, showing strong regional market specialization. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 852 | 1,392,596 | The most downloaded community model this week, an aggressively uncensored MoE variant revealing strong demand for unaligned weights. |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 479 | 695,277 | Unsloth's efficiently quantized MTP (Multi-Token Prediction) variant, enabling faster inference on consumer hardware. |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 370 | 578,580 | The MoE version of Unsloth's quantization, making 35B-parameter-class models accessible to local deployment. |
| **[Jackrong/Qwopus3.6-27B-v2-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF)** | Jackrong | 128 | 12,677 | A community-optimized GGUF with vision support, extending Qwen's multimodal capabilities to quantized deployments. |
| **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** | Jackrong | 92 | 23,762 | The MTP-optimized variant from Jackrong, showing community iteration on efficient inference configurations. |
| **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)** | Jackrong | 188 | 42,644 | A compact coding-specialized quantization, demonstrating sustained interest in local code assistants. |
| **[OBLITERATUS/Qwen3.6-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED)** | OBLITERATUS | 95 | 7,701 | Another uncensored variant with hybrid transformer/GGUF tags, part of the growing "alignment removal" trend. |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,545 | 651,655 | A ComfyUI-optimized diffusion model with substantial downloads, representing the single-file checkpoint ecosystem for Stable Diffusion workflows. |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 406 | 0 | An MLX-optimized chat template fix for Qwen models, addressing ecosystem tooling gaps despite zero direct downloads. |

---

## 3. Ecosystem Signal

**Qwen has achieved near-hegemony** in the open-weight ecosystem, with the 3.6 series spawning dozens of official, quantized, and fine-tuned variants across every parameter scale. This mirrors Llama's dominance in 2024 but with faster community iteration and stronger Asian-language capabilities. The **DeepSeek family** maintains its position as the reliable production backbone, with V4-Pro's 4.8M downloads dwarfing even Qwen's official releases—suggesting enterprises prioritize stability over bleeding-edge features.

The **quantization ecosystem has matured dramatically**: Unsloth and community quantizers (Jackrong, HauhauCS) now release within days of base model launches, with GGUF and MTP variants achieving massive distribution. Notably, **uncensored/unaligned variants are becoming mainstream** rather than fringe, with HauhauCS's aggressive filtering removal achieving 1.39M downloads—nearly matching official Qwen releases. This signals a fundamental tension in open-source AI governance.

**Multimodal is fragmenting into specialized pipelines**: rather than single "do-everything" models, we're seeing dedicated text-to-video (Sulphur-2), avatar generation (LongCat), and audio (Stable Audio 3, Dramabox) tools. The "any-to-any" ambition of Lance remains experimental rather than practical.

Proprietary-to-open release strategies are evolving: CohereLabs and Microsoft are releasing open weights strategically, while ByteDance and Tencent use HF primarily for research dissemination rather than core product distribution.

---

## 4. Worth Exploring

**[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — The 1.35M download volume with minimal marketing buzz suggests this is already embedded in production video pipelines. Worth studying for architecture and commercial adoption patterns, particularly if you're building video generation infrastructure.

**[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Regardless of alignment stance, the technical achievement of distributing a 35B-class MoE model to 1.39M users is remarkable. Essential for understanding community quantization techniques and the economics of unaligned model distribution.

**[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** — The "any-to-any" architecture represents a potential paradigm shift beyond the current modality-specific pipeline approach. Early exploration now could inform multimodal system design as the field converges toward unified architectures.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*