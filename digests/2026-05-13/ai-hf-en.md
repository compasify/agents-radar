# Hugging Face Trending Models Digest 2026-05-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-13 00:24 UTC

---

# Hugging Face Trending Models Digest — May 13, 2026

---

## 1. Today's Highlights

The Qwen 3.6 family continues its dominance with multiple variants occupying the top download spots, including the MoE architecture [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) surpassing 3.8M downloads. Google's Gemma 4 series is making a strong push into multimodal territory with its "it-assistant" variants claiming any-to-any capabilities. DeepSeek-V4 maintains exceptional commercial traction with both Pro and Flash variants combining for over 3.1M downloads. The community quantization ecosystem remains extraordinarily active, with Unsloth's GGUF releases and numerous uncensored fine-tunes driving significant engagement. Notably, video generation is gaining momentum with [Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) leading text-to-video weekly likes despite SulphurAI being a lesser-known entity.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 3,890 | 2,017,835 | Flagship reasoning model with massive commercial adoption for enterprise text-generation workloads. |
| **[DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,057 | 1,162,290 | Lightweight variant maintaining V4 capabilities with 42% faster inference for production deployments. |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,609 | 9,119,339 | Google's most-downloaded open-weight model this period, showing strong community preference for the 31B parameter scale. |
| **[XiaomiMiMo/MiMo-V2.5-Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro)** | XiaomiMiMo | 511 | 41,654 | Emerging agent-focused architecture with extended context windows for autonomous task execution. |
| **[Zyphra/ZAYA1-8B](https://huggingface.co/Zyphra/ZAYA1-8B)** | Zyphra | 449 | 66,119 | Compact reasoning-specialized model with published arxiv paper (2605.05365) gaining academic traction. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,257 | 2,446,478 | Dense multimodal workhorse combining competitive vision-language performance with efficient deployment. |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,735 | 3,858,503 | MoE architecture achieving SOTA efficiency with only 3.6B active parameters; highest downloads this period. |
| **[moonshotai/Kimi-K2.6](https://huggingface.co/moonshotai/Kimi-K2.6)** | moonshotai | 1,272 | 1,423,653 | Long-context specialist with compressed-tensors optimization for document and video understanding. |
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 392 | 0 | Fresh release of efficient edge-device vision-language model; downloads pending as release propagates. |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 270 | 3,418 | Image-text-to-image generation leveraging Qwen3-VL backbone for enhanced prompt adherence. |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 730 | 157,648 | Leading text-to-video model by weekly engagement; GGUF compatibility enables broad hardware support. |
| **[TenStrip/LTX2.3-10Eros](https://huggingface.co/TenStrip/LTX2.3-10Eros)** | TenStrip | 234 | 64,008 | Specialized image-to-video fine-tune building on LTX Video architecture for cinematic outputs. |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 855 | 2,224,595 | Zero-shot multilingual voice cloning with Safetensors efficiency; dominant TTS download leader. |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 123 | 1,837 | Professional-grade ONNX-based TTS with expressive speech synthesis for content creation. |
| **[google/gemma-4-31B-it-assistant](https://huggingface.co/google/gemma-4-31B-it-assistant)** | google | 217 | 66,561 | Experimental any-to-any assistant variant suggesting Google's multimodal roadmap expansion. |
| **[sensenova/SenseNova-U1-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1-8B-MoT)** | sensenova | 239 | 4,528 | Mixture-of-Transformers architecture for unified multimodal feature extraction. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[openai/privacy-filter](https://huggingface.co/openai/privacy-filter)** | openai | 1,421 | 190,993 | Surprising proprietary release: ONNX-optimized PII detection with enterprise compliance applications. |
| **[AngelSlim/Hy-MT1.5-1.8B-1.25bit](https://huggingface.co/AngelSlim/Hy-MT1.5-1.8B-1.25bit)** | AngelSlim | 167 | 17,260 | Extreme 1.25-bit quantization of Hunyuan translation model pushing efficiency boundaries. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[unsloth/Qwen3.6-35B-A3B-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-GGUF)** | unsloth | 1,009 | 2,733,708 | Official Unsloth quantization of the MoE flagship; 71% of base model's downloads show GGUF dominance. |
| **[unsloth/Qwen3.6-27B-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-GGUF)** | unsloth | 662 | 1,468,142 | Proven quantization pipeline for dense variant; consistent quality across consumer hardware. |
| **[Jackrong/Qwopus3.6-35B-A3B-v1-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-35B-A3B-v1-GGUF)** | Jackrong | 116 | 67,205 | Community alternative with TGI compatibility for production serving infrastructure. |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 559 | 287,827 | Popular uncensored Gemma 4 variant; "fast" and llama.cpp tags indicate local deployment optimization. |
| **[DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)** | DavidAU | 136 | 197,110 | Maximalist naming reflects complex pipeline: IMatrix quantization with code-specialized uncensored fine-tuning. |
| **[havenoammo/Qwen3.6-27B-MTP-UD-GGUF](https://huggingface.co/havenoammo/Qwen3.6-27B-MTP-UD-GGUF)** | havenoammo | 86 | 43,428 | Multi-Token Prediction variant with Unsloth/DeepSeek optimizations for speculative decoding. |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 160 | 0 | MLX-formatted corrected Jinja templates addressing Qwen 3.5/3.6 chat format inconsistencies. |
| **[z-lab/gemma-4-31B-it-DFlash](https://huggingface.co/z-lab/gemma-4-31B-it-DFlash)** | z-lab | 81 | 6,423 | Experimental speculative decoding layer ("DFlash") atop Gemma 4 for latency reduction. |
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 67 | 0 | Fresh Unsloth release of MTP variant; zero downloads indicate just-published status worth monitoring. |

---

## 3. Ecosystem Signal

**Qwen hegemony deepens.** The Qwen 3.6 family accounts for six of thirty trending slots and an extraordinary ~10.5M combined downloads—roughly 40% of all tracked downloads. Its dominance spans dense, MoE, and MTP architectures with official and community quantization ecosystems maturing in parallel. The 35B-A3B MoE's 3.8M downloads versus 27B's 2.4M suggests users increasingly prefer parameter efficiency over raw scale.

**Gemma 4 as emerging challenger.** Google's strategic pivot to "any-to-any" assistant variants and the 9.1M-download [gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) demonstrates serious open-weight commitment. However, the 26B-A4B MoE variant's weaker showing (119 likes, 47K downloads) indicates Gemma's MoE story hasn't yet resonated like Qwen's.

**Quantization as primary distribution mechanism.** Unsloth's official GGUFs now capture 70%+ of base model download volume, while community quantizations add substantial incremental reach. The proliferation of uncensored fine-tunes ([Jiunsong](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2), [DavidAU](https://huggingface.co/DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF)) with six-figure downloads reveals persistent demand for unaligned model variants despite safety discourse.

**Open-weight vs. proprietary inflection.** OpenAI's [privacy-filter](https://huggingface.co/openai/privacy-filter) release is notable as a rare proprietary model in trending, yet its 190K downloads pale against open alternatives. DeepSeek's fully open approach with 3.1M+ combined downloads suggests the balance continues shifting toward open-weight.

**Video generation maturation.** [Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)'s 730 weekly likes with GGUF support indicates text-to-video is transitioning from research novelty to deployable infrastructure.

---

## 4. Worth Exploring

**[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — The highest-download model this period for good reason. Its MoE architecture delivers competitive performance with only 3.6B active parameters, enabling cost-efficient deployment at scale. The ratio of downloads to likes (2,223:1) suggests production rather than experimental usage—validation of real-world utility.

**[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** — With 2.2M downloads and zero-shot multilingual voice cloning, this represents the most mature open TTS infrastructure available. The k2-fsa team's speech processing pedigree (Kaldi, icefall) ensures production reliability uncommon in generative audio.

**[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — Highest likes-per-download ratio (1:216) among top models signals genuine enthusiasm rather than passive consumption. GGUF compatibility with endpoints_compatible tagging suggests this text-to-video model is designed for immediate deployment, potentially lowering the barrier for video generation applications significantly.

---

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*