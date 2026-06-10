# Hugging Face Trending Models Digest 2026-06-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-10 00:30 UTC

---

# Hugging Face Trending Models Digest — June 10, 2026

---

## 1. Today's Highlights

This week's trending leaderboard is dominated by **DeepSeek-V4-Pro**, which has amassed an extraordinary **4.74M weekly likes and 4.3M downloads**, cementing its position as the most impactful open-weight release. **Google's Gemma 4 family** is generating significant ecosystem activity with multiple variants spanning base, instruction-tuned, quantized, and GGUF formats. **NVIDIA continues its aggressive open-science push** with models across vision localization, streaming ASR, and massive Nemotron 3 Ultra variants. Notably, **multimodal and agentic capabilities are expanding rapidly**, with strong showings in text-to-video, text-to-audio, and any-to-any architectures. Community quantization efforts from **Unsloth** and uncensored fine-tunes from **HauhauCS** demonstrate sustained downstream innovation.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,740 | 4,302,553 | The breakout leader of the week — a highly capable general-purpose LLM with massive community adoption. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,592 | 2,983,909 | A popular uncensored MoE fine-tune of Qwen 3.6 with exceptionally high download volume. |
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 810 | 581,354 | Google's instruction-tuned Gemma 4 mid-size model, driving strong ecosystem interest. |
| [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 733 | 133,351 | A compact 1B-parameter text-generation model finding traction for efficiency-focused use cases. |
| [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 572 | 137,138 | Liquid AI's latest 8B-A1B MoE architecture, drawing attention for its novel non-transformer design. |
| [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) | JetBrains | 272 | 17,571 | JetBrains' reasoning-focused code-native LLM, purpose-built for software engineering workflows. |
| [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) | nvidia | 174 | 56,864 | NVIDIA's 550B-A55B MoE flagship in BF16, targeting frontier-scale research and enterprise deployment. |
| [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4) | nvidia | 152 | 71,818 | The NVFP4-quantized variant of Nemotron 3 Ultra, offering improved inference efficiency at extreme scale. |
| [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 155 | 1,784 | Cohere's compact code-specialized MoE model, positioned for low-latency programming assistants. |
| [nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro) | nex-agi | 160 | 783 | A Qwen 3.5 MoE-based generalist model with vision support, aimed at agentic applications. |
| [nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini) | nex-agi | 110 | 748 | The smaller sibling of Nex-N2, offering multimodal capabilities in a lightweight package. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 1,729 | 123,922 | A vision-language localization model that identifies and describes anything in an image with impressive precision. |
| [google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B) | google | 479 | 122,464 | The base any-to-any Gemma 4 model, supporting flexible multimodal input and output combinations. |
| [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | 440 | 5,915 | Ideogram's FP8 text-to-image model, noted for high-fidelity typography and visual coherence. |
| [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 358 | 46,729 | StepFun's fast vision-language model, balancing speed and multimodal reasoning quality. |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 317 | 4,181 | A cache-aware streaming ASR model designed for real-time speech recognition pipelines. |
| [ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4) | ideogram-ai | 287 | 5,250 | The NF4-quantized Ideogram 4, making high-quality image generation more accessible. |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 282 | 16,207 | BosonAI's Higgs-based text-to-speech model, part of a growing multimodal audio family. |
| [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 280 | 10,139 | Baidu's ERNIE 4.5-powered OCR vision-language model, advancing document understanding. |
| [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R) | ByteDance | 193 | 281 | An Apache-2.0 image-text-to-video renderer from ByteDance, drawing interest for open video generation. |
| [google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2) | google | 164 | 18,216 | Google's lightweight text-to-audio model, optimized for real-time music and sound synthesis. |
| [jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo) | jdopensource | 114 | 4,502 | JD's open text-to-video model with audio-video generation capabilities. |
| [nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano) | nvidia | 214 | 36,739 | NVIDIA's compact Cosmos 3 omni model for multimodal world understanding and generation. |
| [MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS) | MisoLabs | 173 | 0 | A new text-to-speech entry from MisoLabs, generating early community curiosity despite zero downloads. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) | JetBrains | 272 | 17,571 | Also listed in LLMs — stands out as a purpose-built coding assistant with extended reasoning. |
| [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0) | CohereLabs | 155 | 1,784 | Also listed in LLMs — a code-specialized mini MoE for efficient software tasks. |
| [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 280 | 10,139 | Also listed in Multimodal — a specialized document and OCR vision-language system. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 531 | 660,140 | The most-downloaded Gemma 4 quantization, making Google's new multimodal model widely runnable. |
| [unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF) | unsloth | 171 | 127,332 | A QAT-optimized GGUF variant of Gemma 4 12B IT, offering improved accuracy at low bitrates. |
| [OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED) | OBLITERATUS | 134 | 8,106 | An uncensored community fine-tune of Gemma 4 12B, reflecting sustained interest in unrestricted variants. |
| [google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf) | google | 114 | 63,049 | Google's official Q4_0 QAT GGUF release, validating quantization as a first-class distribution format. |
| [unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF) | unsloth | 114 | 96,059 | Unsloth's QAT GGUF of the larger 26B-A4B Gemma 4, extending efficient deployment to bigger variants. |
| [Comfy-Org/Ideogram-4](https://huggingface.co/Comfy-Org/Ideogram-4) | Comfy-Org | 111 | 0 | A ComfyUI-native packaging of Ideogram 4, signaling growing workflow integration around image generation. |

---

## 3. Ecosystem Signal

The June 2026 trending landscape reveals several converging forces. **DeepSeek** has established itself as the dominant open-weight player of the moment, with V4-Pro's download numbers dwarfing every other model on the list — a clear signal that Chinese labs are now setting the pace for community adoption. **Google's Gemma 4** launch has sparked immediate ecosystem replication: Unsloth has produced four distinct quantized or GGUF variants within days, and uncensored fine-tunes like OBLITERATED have already appeared. This mirrors the pattern seen with Gemma 2 and Gemma 3, but accelerated.

**NVIDIA is making one of the broadest bets**, releasing models across ASR, vision localization, world models (Cosmos), and massive 550B-parameter language models in both BF16 and NVFP4. Their dual-precision Nemotron 3 Ultra release reflects a strategic emphasis on **efficient inference at frontier scale**. Meanwhile, **quantization is no longer aftermarket** — Google's official QAT GGUF release and Unsloth's rapid QAT pipeline show it becoming a primary distribution mechanism. The continued popularity of uncensored fine-tunes (HauhauCS, OBLITERATUS) underscores persistent demand for unaligned variants, even as base models grow more capable.

---

## 4. Worth Exploring

**[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — The obvious must-try: 4.7M likes and 4.3M downloads suggest this is the current open-weight SOTA for general reasoning and conversation. If you're benchmarking chat models or building production assistants, this belongs in your evaluation suite.

**[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With the second-highest like count on the list, this vision-language localization model addresses a genuinely hard problem with a remarkably small parameter count. Worth studying for efficient multimodal architecture design and any application requiring visual grounding.

**[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** — The practical pick: it makes Google's newest any-to-any/multimodal Gemma 4 runnable on consumer hardware. With 660K downloads, it's already a proven deployment target for local multimodal applications.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*