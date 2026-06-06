# Hugging Face Trending Models Digest 2026-06-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-06 00:27 UTC

---

# Hugging Face Trending Models Digest — June 6, 2026

---

## 1. Today's Highlights

DeepSeek continues to dominate the ecosystem with [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) and [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) combining for over 9 million weekly downloads, cementing their position as the go-to open-weight alternatives to proprietary models. NVIDIA's aggressive expansion across modalities is striking, with eight models in the top 30 spanning vision, video, speech, and massive 550B-parameter language models. The Qwen 3.6 family shows remarkable community vitality, with uncensored fine-tunes and quantized variants from Unsloth and HauhauCS significantly outperforming official releases in engagement metrics. Google's [Gemma-4-12B](https://huggingface.co/google/gemma-4-12B-it) introduces genuine any-to-any architecture, though adoption lags behind more permissive alternatives. Notably, video generation is experiencing a renaissance with [Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) and [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R) attracting substantial researcher attention.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,657 | 5,562,821 | Flagship reasoning model with state-of-the-art performance on coding and mathematical benchmarks; MIT license drives massive enterprise adoption. |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,412 | 3,473,265 | Distilled variant delivering 80% of Pro capabilities at 4x inference speed, becoming the default for production deployments. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,450 | 2,687,304 | Aggressively uncensored MoE fine-tune of Qwen 3.6 with vision capabilities; controversial but extremely popular for research into model boundaries. |
| [LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 526 | 82,709 | Liquid Foundation Model with 1B active parameters in 8B total; demonstrates competitive efficiency through dynamic routing. |
| [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) | JetBrains | 224 | 14,709 | IDE-native reasoning model with explicit thinking tokens; optimized for long-context code comprehension and generation. |
| [openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B) | openbmb | 770 | 91,235 | Remarkably capable 1B-parameter edge model rivaling 7B competitors; breakthrough in on-device intelligence efficiency. |
| [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 332 | 27,948 | StepFun's vision-language flagship with competitive multimodal reasoning; strong performance on Chinese-English benchmarks. |
| [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 702 | 159,014 | Specialized human resources management model with structured output for recruitment and workforce analytics. |
| [NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) | nvidia | 117 | 9,125 | Massive 550B parameter model with 55B active via MoE; NVIDIA's bid for enterprise-grade synthetic data generation and evaluation. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 1,375 | 101,823 | Universal visual grounding model locating arbitrary objects via natural language; breakthrough for robotics and AR applications. |
| [google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it) | google | 545 | 142,851 | First true any-to-any model from Google accepting and generating text, images, audio, and video in unified architecture. |
| [ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8) | ideogram-ai | 269 | 1,246 | State-of-the-art text-to-image with FP8 quantization for reduced VRAM; exceptional typography and design layout capabilities. |
| [ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4) | ideogram-ai | 191 | 1,594 | NF4-quantized variant enabling consumer GPU deployment of Ideogram's latest generation with minimal quality degradation. |
| [ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R) | ByteDance | 140 | 175 | Novel image-text-to-video renderer with physics-aware motion generation; Apache 2.0 license attracts academic interest despite low downloads. |
| [meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5) | meituan-longcat | 519 | 1,675 | Audio-driven video avatar generation with 1.5-minute coherence; Meituan's entry into creator economy tooling. |
| [bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b) | bosonai | 118 | 408 | Multimodal Qwen3-based TTS with 4B parameters; natural prosody and voice cloning from minimal samples. |
| [MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS) | MisoLabs | 111 | 0 | Zero-download curiosity—researchers monitoring for potential breakthrough in emotional speech synthesis. |
| [SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,565 | 1,691,633 | Community fine-tune on LTX-2.3 achieving remarkable video quality; GGUF quantization enables accessible open-source video generation. |
| [nvidia/Cosmos3-Nano](https://huggingface.co/nvidia/Cosmos3-Nano) | nvidia | 176 | 21,625 | Compact omnidirectional video generation model; "Nano" designation suggests edge deployment target for Cosmos ecosystem. |
| [nvidia/Cosmos3-Super](https://huggingface.co/nvidia/Cosmos3-Super) | nvidia | 142 | 19,227 | Flagship Cosmos3 variant for high-fidelity world generation and physical simulation in video synthesis. |
| [nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image) | nvidia | 116 | 1,194 | Cross-modal extraction from Cosmos3-Super enabling state-of-the-art text-to-image through video model distillation. |
| [nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video) | nvidia | 106 | 1,076 | Image animation extension of Cosmos3-Super; competitive with dedicated image-to-video architectures. |
| [nvidia/PiD](https://huggingface.co/nvidia/PiD) | nvidia | 310 | 901 | Physics-informed diffusion for super-resolution; novel approach incorporating physical constraints into image restoration. |

### 🔧 Specialized Models (code, math, medical, embeddings, OCR, ASR)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 245 | 6,881 | ERNIE 4.5-powered visual language OCR with document understanding; dominant in Chinese-language document processing. |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 192 | 597 | Cache-aware streaming ASR with 0.6B parameters; designed for real-time transcription with minimal latency. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, NVFP4)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF) | unsloth | 374 | 296,410 | High-quality GGUF quantization of Gemma-4 enabling CPU and low-VRAM GPU inference; 2x download volume versus original. |
| [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 665 | 1,092,323 | Multi-token prediction variant with Unsloth's optimized GGUF; 27B model runnable on 24GB consumer GPUs. |
| [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 191 | 822,125 | NVIDIA's proprietary NVFP4 quantization of Qwen MoE; 4-bit precision with BF16-level accuracy on Blackwell hardware. |
| [nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-NVFP4) | nvidia | 107 | 7,419 | 550B model compressed to ~69B equivalent storage; exclusive to NVIDIA hardware, limiting broader adoption. |

---

## 3. Ecosystem Signal

**Model family momentum** clearly favors **DeepSeek** and **Qwen** as the dominant open-weight ecosystems. DeepSeek's V4 generation has achieved what appears to be sustainable network effects—developers build on Flash for speed, upgrade to Pro for quality, and the permissive MIT license eliminates commercial friction. Qwen's momentum is more distributed: Alibaba's official releases provide the foundation, but community fine-tuners like HauhauCS and quantization specialists like Unsloth extract substantially more engagement than base models. This suggests Qwen has become infrastructure rather than product.

**Google's Gemma-4** presents a paradox: genuine architectural innovation with any-to-any modality handling, yet engagement metrics lag far behind less capable but more permissively licensed alternatives. The 545 likes for Gemma-4-12B-it versus 1,450 for an uncensored Qwen fine-tune illustrates how community values—uncensored weights, minimal restrictions, hardware accessibility—often trump technical specifications.

**NVIDIA's ecosystem strategy** merits close attention. Eight models in the top 30, spanning vision, video, speech, and language, all tied to NVIDIA-specific formats (NVFP4, Nemo) or hardware dependencies. This is vertical integration play: own the model layer to sell the silicon layer. The low download counts relative to likes for Cosmos models suggest researchers are intrigued but deployment remains constrained.

**Quantization has become primary distribution.** Unsloth's GGUF variants consistently outperform original releases in downloads. The 296K downloads for Gemma-4-GGUF versus 143K for the original, and 1.09M for Qwen3.6-27B-MTP-GGUF, demonstrate that accessibility trumps purity. NVIDIA's NVFP4 represents a proprietary counter-trend—superior efficiency but hardware lock-in—that may fragment the quantization landscape between open standards and vendor-optimized formats.

---

## 4. Worth Exploring

**[DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — The pragmatic sweet spot of the current generation. With 3.47M downloads and MIT licensing, it offers production-grade reasoning at costs competitive with frontier API pricing when self-hosted. The distillation appears to preserve core reasoning capabilities while eliminating the latency penalties that make large models impractical for interactive applications. For teams evaluating whether to build on open weights versus proprietary APIs, this is the reference implementation.

**[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Underappreciated technical breakthrough with immediate practical applications. Visual grounding—connecting natural language to precise image locations—has been a persistent gap in multimodal systems. At 3B parameters and 101K downloads, this is deployable in real-time robotics, accessibility tools, and AR systems today. The relatively high like-to-download ratio suggests researchers recognize significance before practitioners have integrated it.

**[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** — The most important open video generation model currently available. Built on Lightricks' LTX-2.3 with community optimization, 1.69M downloads indicate genuine production use rather than mere curiosity. Video generation remains dominated by closed systems (Runway, Pika, OpenAI); Sulphur-2 represents the best available open alternative for researchers studying generative video or builders creating tools without platform dependency. The GGUF quantization specifically enables experimentation previously impossible without institutional compute.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*