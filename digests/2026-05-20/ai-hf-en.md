# Hugging Face Trending Models Digest 2026-05-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-20 00:27 UTC

---

# Hugging Face Trending Models Digest — May 20, 2026

---

## 1. Today's Highlights

DeepSeek-V4-Pro has surged to the top of the trending list with over 4,000 likes and 3.6M downloads, cementing DeepSeek's position as a leading open-weight contender against proprietary labs. Google's [gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) continues its remarkable commercial traction with 10M+ downloads, while the Qwen 3.6 family dominates with multiple variants including official releases and community GGUF quantizations from Unsloth. The ecosystem shows strong diversification beyond text: SulphurAI's [Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) leads text-to-video with exceptional download velocity, and 3D generation emerges with TencentARC's [Pixal3D](https://huggingface.co/TencentARC/Pixal3D). Community quantization and fine-tuning activity remains extraordinarily active, with uncensored and specialized variants proliferating rapidly.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,067 | 3,622,763 | Flagship open-weight LLM with exceptional reasoning and conversational capabilities, rivaling top proprietary models. |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,159 | 1,998,112 | Distilled fast variant maintaining strong performance with 2M+ downloads, ideal for latency-sensitive deployments. |
| [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 1,826 | 5,711,500 | Efficient MoE architecture delivering massive parameter-scale performance at 3B active parameters; highest downloads on the list. |
| [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,344 | 3,681,887 | Dense flagship of the Qwen 3.6 series, balancing capability and deployment efficiency for multimodal applications. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 2,693 | 10,045,599 | Google's most downloaded open model, demonstrating strong enterprise and researcher adoption of the Gemma ecosystem. |
| [inclusionAI/Ring-2.6-1T](https://huggingface.co/inclusionAI/Ring-2.6-1T) | inclusionAI | 81 | 3,038 | Novel 1T parameter hybrid architecture exploring extreme-scale sparse models with conversational capabilities. |
| [FrontiersMind/Nandi-Mini-600M-Early-Checkpoint](https://huggingface.co/FrontiersMind/Nandi-Mini-600M-Early-Checkpoint) | FrontiersMind | 99 | 18,458 | Compact 600M parameter research checkpoint gaining attention for efficient pretraining approaches. |
| [Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B) | Zyphra | 536 | 146,253 | Emerging reasoning-specialized base model with strong academic backing (arXiv:2605.05365) and active fine-tuning ecosystem. |
| [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 118 | 884 | Specialized 1B parameter model for human resources and workforce text applications, niche but targeted. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,172 | 1,114,657 | Leading open text-to-video model with remarkable download velocity, GGUF support, and endpoint compatibility. |
| [openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6) | openbmb | 804 | 144,826 | Efficient vision-language model delivering strong image-text-to-text performance at manageable scale. |
| [HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image) | HiDream-ai | 400 | 15,822 | Innovative dual-mode model supporting both image understanding and image generation with Qwen3 VL architecture. |
| [TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D) | TencentARC | 155 | 0 | Fresh release for single-image-to-3D generation, representing growing open 3D asset creation capabilities. |
| [SeeSee21/Z-Anime](https://huggingface.co/SeeSee21/Z-Anime) | SeeSee21 | 418 | 15,794 | Specialized anime-style text-to-image model with diffusers and GGUF support for accessible local generation. |
| [RuneXX/LTX-2.3-Workflows](https://huggingface.co/RuneXX/LTX-2.3-Workflows) | RuneXX | 589 | 0 | Community ComfyUI workflow collection for LTX video generation, enabling sophisticated no-code video pipelines. |
| [Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3) | Supertone | 466 | 28,681 | Professional-grade ONNX-based TTS from leading Korean audio AI company, emphasizing voice quality and control. |
| [ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox) | ResembleAI | 181 | 1,118 | Emotion-rich voice cloning and dramatic TTS, targeting entertainment and media production use cases. |
| [ScenemaAI/scenema-audio](https://huggingface.co/ScenemaAI/scenema-audio) | ScenemaAI | 108 | 297 | Diffusion-based text-to-audio with voice cloning, exploring generative audio beyond speech synthesis. |
| [Aratako/Irodori-TTS-500M-v3](https://huggingface.co/Aratako/Irodori-TTS-500M-v3) | Aratako | 71 | 0 | Compact 500M Japanese TTS model, representing regional language accessibility in open speech synthesis. |
| [bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance) | bytedance-research | 304 | 171 | Ambitious any-to-any multimodal foundation from ByteDance, supporting image, video, and cross-modal generation. |
| [circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima) | circlestone-labs | 1,425 | 558,113 | High-engagement ComfyUI-focused diffusion model with exceptional like-to-download ratio, strong community interest. |
| [microsoft/Fara-7B](https://huggingface.co/microsoft/Fara-7B) | microsoft | 581 | 14,464 | Microsoft's compact multimodal model leveraging Qwen2.5-VL architecture for efficient vision-language tasks. |
| [internlm/Intern-S2-Preview](https://huggingface.co/internlm/Intern-S2-Preview) | internlm | 80 | 1,842 | Preview of InternLM's next-generation multimodal series, signaling continued investment in open vision-language research. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 91 | 268 | JAX-based encoder-decoder with advanced function-calling and tool-use capabilities, targeting agentic AI systems. |
| [facebook/VGGT-Omega](https://huggingface.co/facebook/VGGT-Omega) | facebook | 59 | 0 | Meta's visual geometry and tracking research model, advancing 3D vision capabilities with academic licensing. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 329 | 337,076 | Unsloth's optimized GGUF quantization with Multi-Token Prediction, enabling fast local inference of Qwen's dense flagship. |
| [unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF) | unsloth | 270 | 296,380 | MoE variant GGUF with MTP, proving efficient large model deployment is increasingly accessible to consumers. |
| [Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2) | Jiunsong | 630 | 268,561 | Highly popular uncensored Gemma 4 fine-tune with exceptional download numbers, reflecting sustained demand for unrestricted models. |
| [Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF) | Jackrong | 119 | 12,117 | Community code-specialized Qwen quantization, filling gaps in officially supported smaller coding models. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 311 | 0 | MLX-optimized chat template fixes for Qwen 3.5, addressing Apple Silicon deployment pain points with zero downloads reflecting utility nature. |

---

## 3. Ecosystem Signal

The Qwen family has achieved dominant ecosystem presence, with Alibaba's official releases and Unsloth's quantizations capturing multiple top positions—suggesting Qwen has become the de facto open foundation for both research and production deployment. DeepSeek's V4 series demonstrates that Chinese labs can drive global engagement comparable to Western counterparts, with V4-Pro's 4K+ likes representing genuine community enthusiasm rather than mere scale. Google's Gemma-4, despite lower likes, achieves extraordinary download numbers (10M+), indicating strong enterprise integration and platform default status.

The quantization ecosystem has matured significantly: Unsloth's MTP-GGUF variants achieve hundreds of thousands of downloads, while community creators like Jiunsong build substantial audiences for specialized variants. The "uncensored" category remains commercially significant, with supergemma4-26b attracting 268K downloads. Notably, multimodal convergence is accelerating—models increasingly default to image-text-to-text rather than pure text, with even "language models" now routinely vision-capable. The pipeline diversity (text-to-video, image-to-3D, text-to-audio) suggests the open ecosystem is successfully expanding beyond LLM-centricity, though download concentrations remain heavily in language and multimodal text models.

---

## 4. Worth Exploring

**[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — With the highest like count and 3.6M downloads, this represents the current frontier of openly available reasoning and conversational capability. Worth studying for its apparent ability to compete with closed models, and for deployment benchmarking given its strong traction.

**[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — The only text-to-video model with over 1M downloads, demonstrating that open video generation has crossed into production viability. Its GGUF and endpoints_compatible tags suggest deliberate accessibility engineering; early experimentation could reveal workflow integration potential before the field saturates.

**[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** — An emerging reasoning model with academic rigor (arXiv preprint) and an active fine-tuning ecosystem already forming. At 8B parameters, it offers research accessibility while the base/reasoning split suggests sophisticated training methodology worth investigating for reasoning model development practices.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*