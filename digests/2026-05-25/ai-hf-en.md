# Hugging Face Trending Models Digest 2026-05-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-25 00:25 UTC

---

# Hugging Face Trending Models Digest — May 25, 2026

---

## 1. Today's Highlights

**DeepSeek-V4-Pro** dominates the trending charts with over 4.2K weekly likes and 4.7M downloads, cementing DeepSeek's position as a leading open-weight contender against Western labs. The Qwen ecosystem continues its explosive growth with multiple variants across the leaderboard, including official releases, community quantizations, and controversial uncensored fine-tunes. Google's **Gemma-4-31B-it** leads in raw adoption with 10.4M downloads, signaling strong enterprise uptake of its latest multimodal iteration. Notably, ByteDance's **Lance** emerges as a rare "any-to-any" architecture, while SulphurAI's **Sulphur-2-base** breaks 1.3M downloads for open video generation. The quantization community remains hyperactive, with Unsloth and independent creators like Jackrong shipping multiple GGUF variants weekly.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**DeepSeek-V4-Pro**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,224 | 4,666,078 | Flagship open-weight LLM with state-of-the-art reasoning and conversational capabilities, rivaling closed API providers. |
| [**google/gemma-4-31B-it**](https://huggingface.co/google/gemma-4-31B-it) | google | 2,762 | 10,398,435 | Google's latest instruction-tuned multimodal Gemma with massive enterprise adoption and broad framework support. |
| [**Qwen/Qwen3.6-27B**](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,422 | 4,242,555 | Official Qwen 3.6 release with native vision-language capabilities, becoming the default open model for many builders. |
| [**sapientinc/HRM-Text-1B**](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 271 | 84,346 | Compact 1B-parameter domain-specific model for HR and workforce analytics, showing vertical specialization trends. |
| [**nvidia/Nemotron-Labs-Diffusion-14B**](https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B) | nvidia | 89 | 4,071 | NVIDIA's research release exploring diffusion architectures for text generation, diverging from standard autoregressive designs. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**SulphurAI/Sulphur-2-base**](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,322 | 1,331,058 | Open text-to-video model with exceptional throughput and endpoint compatibility, democratizing video generation access. |
| [**openbmb/MiniCPM-V-4.6**](https://huggingface.co/openbmb/MiniCPM-V-4.6) | openbmb | 918 | 269,589 | Highly efficient vision-language model delivering strong multimodal performance at reduced compute costs. |
| [**bytedance-research/Lance**](https://huggingface.co/bytedance-research/Lance) | bytedance-research | 760 | 1,474 | Novel any-to-any architecture unifying image, video, and text generation in a single model—early but ambitious. |
| [**TencentARC/Pixal3D**](https://huggingface.co/TencentARC/Pixal3D) | TencentARC | 202 | 0 | MIT-licensed image-to-3D reconstruction model with clean research backing, poised for creative workflow integration. |
| [**stabilityai/stable-audio-3-medium**](https://huggingface.co/stabilityai/stable-audio-3-medium) | stabilityai | 80 | 0 | Latest Stable Audio iteration for music and sound effect generation, though release appears fresh with zero downloads recorded. |
| [**meituan-longcat/LongCat-Video-Avatar-1.5**](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5) | meituan-longcat | 119 | 0 | Audio-driven video avatar generation from Meituan, targeting real-time applications with ONNX optimization. |
| [**Efficient-Large-Model/SANA-WM_bidirectional**](https://huggingface.co/Efficient-Large-Model/SANA-WM_bidirectional) | Efficient-Large-Model | 98 | 0 | Bidirectional video generation with camera control, advancing controllability in open video synthesis. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**tencent/Hy-MT2-1.8B**](https://huggingface.co/tencent/Hy-MT2-1.8B) | tencent | 599 | 4,534 | Efficient 1.8B-parameter translation specialist from Tencent's Hunyuan line, optimized for production deployment. |
| [**tencent/Hy-MT2-30B-A3B**](https://huggingface.co/tencent/Hy-MT2-30B-A3B) | tencent | 308 | 1,243 | Large MoE translation model (30B active, 3B parameters) offering premium quality for high-stakes localization. |
| [**tencent/Hy-MT2-7B**](https://huggingface.co/tencent/Hy-MT2-7B) | tencent | 148 | 2,407 | Mid-size translation workhorse balancing quality and inference cost in Tencent's dense Hunyuan architecture. |
| [**NemoStation/Marlin-2B**](https://huggingface.co/NemoStation/Marlin-2B) | NemoStation | 306 | 6,032 | Compact video-text-to-text model built on Qwen3.5, enabling video understanding for content analysis and captioning. |
| [**numind/NuExtract3**](https://huggingface.co/numind/NuExtract3) | numind | 107 | 10,998 | Structured information extraction from documents and images, leveraging Qwen3.5 vision capabilities for enterprise data processing. |
| [**Supertone/supertonic-3**](https://huggingface.co/Supertone/supertonic-3) | Supertone | 645 | 43,119 | Production-grade Korean TTS with ONNX optimization, showing strong regional voice AI demand. |
| [**ResembleAI/Dramabox**](https://huggingface.co/ResembleAI/Dramabox) | ResembleAI | 243 | 1,450 | Expressive voice cloning and dramatic TTS from ResembleAI, targeting entertainment and gaming applications. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 767 | 1,220,114 | Aggressively uncensored MoE fine-tune with massive download velocity, reflecting sustained demand for unfiltered model variants. |
| [**unsloth/Qwen3.6-27B-MTP-GGUF**](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 455 | 660,321 | Official Unsloth quantization with Multi-Token Prediction support, delivering faster inference for local deployment. |
| [**unsloth/Qwen3.6-35B-A3B-MTP-GGUF**](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF) | unsloth | 358 | 547,827 | MoE variant of Unsloth's Qwen 3.6 quantization, making large sparse models accessible on consumer hardware. |
| [**circlestone-labs/Anima**](https://huggingface.co/circlestone-labs/Anima) | circlestone-labs | 1,531 | 637,329 | Community diffusion model with ComfyUI integration, trending for artistic generation workflows despite ambiguous licensing. |
| [**Jackrong/Qwopus3.5-9B-Coder-GGUF**](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF) | Jackrong | 180 | 38,937 | Community code-specialized Qwen 3.5 quantization with TGI compatibility, filling gaps in local coding assistants. |
| [**Jackrong/Qwopus3.6-27B-v2-GGUF**](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-GGUF) | Jackrong | 113 | 8,300 | Iterated v2 release of Qwen 3.6 27B with image support, showing rapid community iteration cycles. |
| [**Jackrong/Qwopus3.5-9B-Coder-MTP-GGUF**](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-MTP-GGUF) | Jackrong | 87 | 33,197 | MTP-enabled coding variant, trading compatibility for generation speed in local IDE integrations. |
| [**OBLITERATUS/Qwen3.6-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.6-27B-OBLITERATED) | OBLITERATUS | 76 | 5,298 | Dual-format release (safetensors + GGUF) with aggressive fine-tuning, part of the growing "uncensored" model niche. |
| [**CohereLabs/command-a-plus-05-2026-w4a4**](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4) | CohereLabs | 190 | 5,627 | Official 4-bit weight-activation quantized Command A+ with vision, Cohere's push for efficient enterprise deployment. |
| [**CohereLabs/command-a-plus-05-2026-bf16**](https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16) | CohereLabs | 113 | 12,362 | Full precision counterpart to the W4A4 variant, offering quality comparison for Cohere's latest multimodal command model. |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 388 | 0 | Community chat template corrections for MLX Qwen users, addressing ecosystem friction in Apple Silicon deployment. |

---

## 3. Ecosystem Signal

The Qwen family has achieved near-hegemony in open-weight model ecosystems, with **Qwen 3.5/3.6 variants accounting for over half the trending list**—spanning official releases, Unsloth quantizations, and numerous community fine-tunes. This mirrors Llama's dominance in 2024 but with faster iteration cycles and stronger native multimodal integration. The sheer volume of **GGUF quantizations** (Unsloth, Jackrong, HauhauCS) indicates that local/edge deployment remains a primary user concern, even as cloud APIs improve.

**Open-weight vs. proprietary dynamics** are shifting: DeepSeek and Qwen now match or exceed Western open models in raw engagement, while Google's Gemma-4 leads in absolute downloads. However, the proliferation of **"uncensored" fine-tunes** (HauhauCS, OBLITERATUS) suggests persistent tension between safety-aligned base models and user demands for unrestricted outputs—a trend that may invite increased regulatory scrutiny.

Notably, **Tencent's Hy-MT2 series** demonstrates sustained investment in specialized translation models rather than generalist competition, while **ByteDance's Lance** experiments with unified any-to-any architectures that could presage next-generation model design. The quantization community's velocity—multiple releases per week from single creators—highlights both ecosystem maturity and fragmentation risks.

---

## 4. Worth Exploring

**[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — The clear standout for capability-per-dollar in open weights. With 4.7M downloads and the highest like count, it represents the current frontier for self-hosted reasoning and agentic applications. Worth studying for its architecture innovations and as a benchmark for whether open models can sustain competitive pressure against GPT-5-class APIs.

**[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — At 1.3M downloads with endpoint compatibility, this is the most viable open alternative to closed video generators like Sora or Kling. The download-to-like ratio suggests strong production adoption rather than casual experimentation. Critical for anyone building video workflows before the market consolidates.

**[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** — Zero downloads but notable for its clean MIT license, research-backed methodology (arXiv:2605.10922), and timely positioning as 3D asset generation demand grows for gaming, AR, and spatial computing. Early mover advantage in an underexplored modality with clearer commercial paths than text-to-video.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*