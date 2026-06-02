# Hugging Face Trending Models Digest 2026-06-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-02 00:31 UTC

---

# Hugging Face Trending Models Digest — June 2, 2026

## 1. Today's Highlights

DeepSeek continues to dominate the ecosystem with [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) amassing 4.5K likes and 5.8M downloads, cementing its position as the leading open-weight LLM family. The Qwen 3.6 family shows remarkable ecosystem breadth, appearing in official releases, NVIDIA-optimized variants, uncensored community fine-tunes, and aggressive quantization formats. Notably, multimodal capabilities have become table stakes—vision-language models now outnumber pure text-generation models in the trending list. The emergence of ternary quantization ([bonsai-image-ternary-4B-gemlite-2bit](https://huggingface.co/prism-ml/bonsai-image-ternary-4B-gemlite-2bit)) signals a push toward extreme edge deployment, while Meituan's [LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5) hints at the next frontier: audio-image-text-to-video generation with zero downloads suggesting imminent release.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,530 | 5,851,826 | Flagship open-weight LLM with conversational capabilities, driving massive adoption as a GPT-4 class alternative. |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,341 | 3,511,636 | MIT-licensed distilled variant offering near-Pro performance with dramatically faster inference. |
| [MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B) | openbmb | 689 | 45,698 | Ultra-compact 1B parameter Llama-architecture model pushing efficiency boundaries for edge deployment. |
| [LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 390 | 37,893 | Liquid Foundation Model with MoE architecture (8B active, 1B total), representing alternative non-transformer architectures. |
| [HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 439 | 149,543 | Specialized 1B parameter model for human resources and workforce analytics, showing vertical domain specialization. |
| [Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 191 | 9,256 | StepFun's vision-language flagship competing in the multimodal reasoning space. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,567 | 5,154,729 | Official Qwen 3.6 vision-language model setting the open standard for multimodal conversation. |
| [Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,490 | 1,656,520 | Rapidly growing text-to-video model with endpoint compatibility, challenging closed platforms like Sora. |
| [MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6) | openbmb | 1,088 | 459,188 | Efficient vision-language model outperforming larger counterparts on visual understanding benchmarks. |
| [LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 792 | 35,783 | NVIDIA's visual grounding model enabling precise object localization from natural language descriptions. |
| [Lance](https://huggingface.co/bytedance-research/Lance) | bytedance-research | 1,002 | 3,041 | Ambitious any-to-any multimodal model from ByteDance supporting image, video, and cross-modal generation. |
| [LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5) | meituan-longcat | 465 | 0 | Novel audio-image-text-to-video avatar generation system, pre-release with diffusers+ONNX dual format. |
| [supertonic-3](https://huggingface.co/Supertone/supertonic-3) | Supertone | 770 | 57,627 | Production-grade Korean TTS with ONNX optimization for real-time speech synthesis applications. |
| [MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5) | OpenMOSS-Team | 94 | 18,564 | Delay-based neural TTS for Chinese with custom architecture, showing continued innovation in non-English speech. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B) / [Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B) | tencent | 1,099 / 444 | 18,131 / 4,458 | Tencent's Hunyuan translation models spanning efficient (1.8B dense) to high-quality (30B-A3B MoE) variants. |
| [PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 156 | 3,190 | ERNIE 4.5-powered document understanding with OCR, extending Baidu's vision-language stack. |
| [pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1) | pyannote | 2,106 | 9,591,005 | Most downloaded model this week; production speaker diarization pipeline critical for meeting transcription and analytics. |
| [privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,578 | 316,092 | OpenAI's PII detection and redaction model, notable as rare open-weight release from otherwise closed provider. |
| [NuExtract3](https://huggingface.co/numind/NuExtract3) | numind | 215 | 59,010 | Structured information extraction from documents, leveraging Qwen 3.5 vision-language backbone. |
| [Keye-VL-2.0-30B-A3B](https://huggingface.co/Kwai-Keye/Keye-VL-2.0-30B-A3B) | Kwai-Keye | 88 | 784 | Kwai's multimodal feature extraction model, low downloads suggesting early release or internal focus. |
| [Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B) | NemoStation | 482 | 17,012 | Compact video-text-to-text model based on Qwen 3.5, enabling video question answering and captioning. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,218 | 2,533,393 | Most downloaded uncensored fine-tune, 2.5M+ downloads reveal strong demand for unaligned model variants. |
| [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 593 | 952,188 | Unsloth-optimized GGUF with Multi-Token Prediction, enabling 2-3x faster inference on consumer hardware. |
| [Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 121 | 171,588 | Official NVIDIA FP4 quantization using ModelOpt, cutting VRAM requirements for 35B MoE models by ~60%. |
| [LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF) | LiquidAI | 143 | 55,212 | Official GGUF release for Liquid's non-transformer architecture, expanding llama.cpp compatibility. |
| [Step-3.7-Flash-GGUF](https://huggingface.co/stepfun-ai/Step-3.7-Flash-GGUF) | stepfun-ai | 84 | 37,533 | Official quantized release with imatrix calibration, making StepFun's VLM runnable on single-GPU setups. |
| [Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF) | Jackrong | 183 | 139,952 | Community fusion of Qwen and Octopus capabilities with MTP, popular for tool-use and agentic workflows. |
| [bonsai-image-ternary-4B-gemlite-2bit](https://huggingface.co/prism-ml/bonsai-image-ternary-4B-gemlite-2bit) | prism-ml | 89 | 0 | Experimental 1.58-bit ternary quantization using GemLite, pushing theoretical limits of model compression. |

---

## 3. Ecosystem Signal

The Qwen family has achieved dominant ecosystem status, appearing in 7 distinct trending variants—official, quantized, fine-tuned, and vendor-optimized—surpassing even Llama's historical ubiquity. This "Qwen-ization" reflects Alibaba's strategic investment in permissive licensing and comprehensive model releases across scales and modalities. DeepSeek's V4 generation demonstrates that open-weight models can achieve proprietary-tier download volumes (9.3M combined for Pro+Flash), challenging the assumption that frontier performance requires closed APIs.

The quantization landscape shows bifurcation: practical community demand concentrates on GGUF/MTP formats (Unsloth, Jackrong) for immediate inference gains, while research pushes toward extreme compression—NVIDIA's FP4 and prism-ml's ternary 1.58-bit represent divergent paths to edge deployment. Notably, vendor-specific optimizations (NVFP4, ModelOpt) are gaining traction, potentially fragmenting the previously standard GGUF ecosystem.

Multimodal convergence is accelerating: vision-language pipelines now dominate trending models, and the emergence of any-to-any architectures (Lance) plus audio-image-text-to-video (LongCat) suggests the field is moving beyond pairwise modality pairs toward true unified perception. The zero-download pre-release models (LongCat, bonsai) indicate manufacturers are using Hugging Face for announcement momentum rather than immediate distribution, a trend that may shift download metrics' meaning.

---

## 4. Worth Exploring

**[DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — The MIT license removes commercial friction, and at 3.5M downloads with proven Pro-tier lineage, this represents the best risk-adjusted choice for production LLM deployment. The Flash variant's efficiency optimizations make it deployable at substantially lower cost than competitors.

**[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — Unsloth's Multi-Token Prediction implementation delivers measurable latency improvements for vision-language applications. With nearly 1M downloads and active maintenance, it's the optimal entry point for running capable multimodal models on consumer GPUs (24GB VRAM).

**[Lance](https://huggingface.co/bytedance-research/Lance)** — Despite modest downloads (3K), ByteDance's any-to-any architecture represents a genuine architectural bet beyond the transformer-Qwen consensus. For researchers tracking next-generation multimodal paradigms, Lance offers early exposure to unified generation across image, video, and text modalities without modality-specific encoders.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*