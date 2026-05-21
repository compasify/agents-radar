# Hugging Face Trending Models Digest 2026-05-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-21 00:26 UTC

---

# Hugging Face Trending Models Digest — May 21, 2026

---

## 1. Today's Highlights

DeepSeek continues its dominance with [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) (4,082 likes, 3.8M downloads) and [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) both trending, signaling sustained appetite for efficient, high-performance open-weight language models. Google's [Gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) has crossed 10 million downloads, cementing its position as the most widely adopted open multimodal model this quarter. The Qwen 3.6 family shows remarkable ecosystem depth with multiple variants from both official and community sources, including aggressive quantization work by Unsloth. Notably, ByteDance's [Lance](https://huggingface.co/bytedance-research/Lance) emerges as a rare "any-to-any" architecture, while SulphurAI's [Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) demonstrates that open video generation is gaining serious traction with over 1.1 million downloads.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,082 | 3,817,887 | Flagship reasoning model with exceptional download velocity, positioning as the open alternative to GPT-5-class systems. |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,166 | 2,289,519 | Distilled variant trading marginal capability for 2.4x inference speed, ideal for production deployments. |
| [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,840 | 5,798,579 | Mixture-of-Experts architecture delivering 35B-quality at 3B active parameters, the efficiency frontier for multimodal LLMs. |
| [Gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,712 | 10,170,798 | Google's most successful open model launch to date, with native vision-language integration and enterprise adoption. |
| [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,358 | 3,810,004 | Dense counterpart to the MoE variant, preferred for latency-sensitive applications requiring consistent throughput. |
| [HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 179 | 23,532 | Compact 1B parameter model demonstrating strong emergent capabilities, popular for edge and research use cases. |
| [Ring-2.6-1T](https://huggingface.co/inclusionAI/Ring-2.6-1T) | inclusionAI | 88 | 3,454 | Hybrid architecture trained on 1 trillion tokens, exploring alternative scaling laws with promising early results. |
| [Nandi-Mini-600M-Early-Checkpoint](https://huggingface.co/FrontiersMind/Nandi-Mini-600M-Early-Checkpoint) | FrontiersMind | 105 | 18,626 | Sub-billion parameter research checkpoint gaining attention for efficient pretraining methodologies. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Lance](https://huggingface.co/bytedance-research/Lance) | bytedance-research | 464 | 438 | Novel any-to-any architecture unifying image, video, and text generation in a single model—early but architecturally significant. |
| [Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,203 | 1,157,497 | Highest-downloaded open text-to-video model this period, with GGUF and diffusers compatibility lowering deployment barriers. |
| [MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6) | openbmb | 826 | 166,049 | Efficient vision-language model from OpenBMB, competitive with larger models on visual reasoning benchmarks. |
| [supertonic-3](https://huggingface.co/Supertone/supertonic-3) | Supertone | 499 | 31,940 | Production-grade TTS with ONNX export, gaining traction in creative and accessibility applications. |
| [HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image) | HiDream-ai | 411 | 17,645 | Dual-capability model handling both image understanding and generation, built on Qwen3-VL architecture. |
| [Fara-7B](https://huggingface.co/microsoft/Fara-7B) | microsoft | 588 | 15,167 | Microsoft's compact multimodal entry based on Qwen2.5-VL, optimized for Azure edge deployment scenarios. |
| [Pixal3D](https://huggingface.co/TencentARC/Pixal3D) | TencentARC | 165 | 0 | Research preview for single-image 3D reconstruction, notable for MIT licensing and strong technical paper. |
| [Dramabox](https://huggingface.co/ResembleAI/Dramabox) | ResembleAI | 202 | 1,229 | Expressive voice cloning TTS with dramatic intonation control, targeting entertainment and gaming verticals. |
| [scenema-audio](https://huggingface.co/ScenemaAI/scenema-audio) | ScenemaAI | 113 | 377 | Diffusion-based audio generation with voice cloning, exploring generative audio beyond speech synthesis. |
| [Z-Anime](https://huggingface.co/SeeSee21/Z-Anime) | SeeSee21 | 423 | 16,159 | Specialized anime-style text-to-image model with GGUF quantization support for consumer GPU inference. |
| [SANA-WM_bidirectional](https://huggingface.co/Efficient-Large-Model/SANA-WM_bidirectional) | Efficient-Large-Model | 68 | 0 | Bidirectional image-to-video with camera control, advancing controllable video generation for creative workflows. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B) | NemoStation | 142 | 125 | Video-text-to-text model extending Qwen3.5 for temporal reasoning, early but unique in open video understanding. |
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 105 | 292 | JAX-based function-calling encoder-decoder, addressing tool-use reliability in agentic systems. |
| [VGGT-Omega](https://huggingface.co/facebook/VGGT-Omega) | facebook | 76 | 0 | Meta's vision-geometry foundation model, research preview for 3D scene understanding with strong geometric priors. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 354 | 411,598 | Unsloth's Multi-Token Prediction GGUF enabling 2-3x speedup on consumer hardware without quality degradation. |
| [Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF) | unsloth | 294 | 363,131 | MoE variant with MTP quantization, making 35B-equivalent inference viable on 24GB GPUs. |
| [Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF) | Jackrong | 136 | 17,539 | Community coding specialization of Qwen3.5 with optimized TGI compatibility for local IDE integration. |
| [Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 335 | 0 | Curated MLX-compatible chat templates resolving formatting inconsistencies across Qwen 3.5 variants. |
| [ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B) | Zyphra | 542 | 146,770 | Reasoning-specialized fine-tune with transparent training lineage, popular for reproducible RL research. |
| [Anima](https://huggingface.co/circlestone-labs/Anima) | circlestone-labs | 1,449 | 571,087 | Community diffusion model with ComfyUI-native architecture, highest-liked non-major-lab generative model this period. |
| [command-a-plus-05-2026-w4a4](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4) | CohereLabs | 73 | 0 | Cohere's 4-bit weight-activation quantized vision-language model, previewing efficient enterprise deployment. |

---

## 3. Ecosystem Signal

The Qwen family has achieved unprecedented ecosystem saturation, with official releases, Unsloth quantizations, and community fine-tunes occupying nearly one-third of trending slots—suggesting Alibaba's open strategy has successfully cultivated a developer moat comparable to Meta's Llama ecosystem in 2024. DeepSeek's V4 generation demonstrates that Chinese labs now lead in balancing capability and efficiency, with both Pro and Flash variants driving massive adoption. Google's Gemma-4 crossing 10 million downloads signals that Western tech giants remain competitive, though increasingly through partnership with open ecosystems rather than proprietary APIs alone.

Quantization activity has intensified dramatically: MTP (Multi-Token Prediction) GGUFs, W4A4 formats, and MLX-optimized templates indicate the community is prioritizing inference efficiency over raw scale. The emergence of "any-to-any" architectures like Lance and bidirectional video models suggests the field is moving beyond unimodal pipelines toward unified generative systems. Notably, zero-download research previews (Pixal3D, VGGT-Omega, SANA-WM) still trend on likes alone, indicating that architectural novelty retains signaling power even before practical validation.

---

## 4. Worth Exploring

**[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — With 4,082 likes and nearly 4 million downloads, this is the definitive open-weight model to benchmark against for reasoning tasks. Its efficiency architecture makes it deployable at scales previously requiring API access, and the ecosystem of fine-tunes is already emerging.

**[Lance](https://huggingface.co/bytedance-research/Lance)** — While early-stage with modest downloads, its any-to-any pipeline designation represents a genuine architectural frontier. For researchers tracking the unification of generative modalities, Lance offers the most ambitious single-model approach since Gemini's early prototypes—worth studying for design patterns even before production readiness.

**[Unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — The practical sweet spot for developers: 411K downloads confirm real-world validation, and Multi-Token Prediction GGUF delivers measurable speedups without the complexity of MoE routing. Ideal for teams needing production multimodal capabilities on consumer or small-cloud hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*