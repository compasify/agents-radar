# Hugging Face Trending Models Digest 2026-06-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-03 00:36 UTC

---

# Hugging Face Trending Models Digest — June 3, 2026

---

## 1. Today's Highlights

DeepSeek continues to dominate the ecosystem with [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) amassing 4,571 likes and 5.8M downloads, cementing its position as the leading open-weight LLM family. NVIDIA's aggressive expansion into multimodal infrastructure is evident through four concurrent releases spanning video generation, image understanding, and model optimization—including the novel [LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) for visual grounding. The Qwen 3.6 family shows remarkable ecosystem depth with official, quantized, and fine-tuned variants proliferating across community and corporate channels. Notably, OpenAI's rare Hugging Face presence with [privacy-filter](https://huggingface.co/openai/privacy-filter) signals growing proprietary interest in on-device privacy tools. The emergence of ternary quantization ([prism-ml/bonsai-image-ternary-4B-gemlite-2bit](https://huggingface.co/prism-ml/bonsai-image-ternary-4B-gemlite-2bit)) at 1.58-bit precision hints at the next frontier of extreme model compression.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) | deepseek-ai | 4,571 | 5,829,042 | Flagship open-weight LLM with exceptional adoption; MIT-licensed and conversation-optimized, representing the current benchmark for accessible high-performance text generation. |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,364 | 3,525,218 | Distilled efficient variant of V4-Pro with published eval results, capturing demand for speed-optimized reasoning without capability sacrifice. |
| [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) | Qwen | 1,577 | 5,243,648 | Alibaba's official vision-language release with strong conversational abilities, driving massive downstream quantization and fine-tuning activity. |
| [MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B) | openbmb | 734 | 57,683 | Ultra-compact Llama-architecture model from Tsinghua's OpenBMB, trending for edge deployment and efficiency research. |
| [LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B) | LiquidAI | 440 | 47,742 | Liquid Foundation Model with mixture-of-experts activation, representing alternative architectures to standard transformers. |
| [JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking) | JetBrains | 127 | 799 | IDE-optimized reasoning model with explicit thinking capabilities, signaling vertical specialization for developer tools. |
| [sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B) | sapientinc | 469 | 153,029 | Domain-specific 1B-parameter model for human resources management, demonstrating enterprise verticalization trends. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base) | SulphurAI | 1,512 | 1,663,826 | Community text-to-video model built on Lightricks LTX-2.3, achieving massive adoption as an accessible open alternative to closed video generation. |
| [bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance) | bytedance-research | 1,011 | 3,192 | Ambitious any-to-any multimodal system supporting image and video generation from arbitrary modalities, representing ByteDance's open research push. |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | 962 | 61,604 | Visual grounding model enabling precise object localization from natural language, filling a critical gap in vision-language interfaces. |
| [stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash) | stepfun-ai | 216 | 12,932 | StepFun's efficient vision-language model competing in the multimodal space with native image-text-to-text capabilities. |
| [meituan-longcat/LongCat-Video-Avatar-1.5](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.5) | meituan-longcat | 485 | 174 | Audio-driven video avatar generation from Meituan, targeting real-time applications despite low download velocity. |
| [nvidia/Cosmos3-Super-Image2Video](https://huggingface.co/nvidia/Cosmos3-Super-Image2Video) | nvidia | 80 | 536 | Part of NVIDIA's Cosmos3 omnidirectional generation suite, converting static images to dynamic video with diffusion architecture. |
| [nvidia/Cosmos3-Super-Text2Image](https://huggingface.co/nvidia/Cosmos3-Super-Text2Image) | nvidia | 77 | 517 | Complementary text-to-image foundation in the Cosmos3 ecosystem, showing NVIDIA's systematic coverage of generative modalities. |
| [Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3) | Supertone | 780 | 59,026 | Production-grade Korean text-to-speech with ONNX optimization, achieving strong community traction for voice synthesis applications. |
| [OpenMOSS-Team/MOSS-TTS-v1.5](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-v1.5) | OpenMOSS-Team | 116 | 20,615 | Delay-based neural TTS from Fudan's MOSS team, focusing on Chinese speech synthesis with custom architecture innovations. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [openai/privacy-filter](https://huggingface.co/openai/privacy-filter) | openai | 1,593 | 300,247 | Rare OpenAI Hugging Face release for PII detection and redaction, deployable via transformers.js for browser-based privacy protection. |
| [PaddlePaddle/PaddleOCR-VL-1.6](https://huggingface.co/PaddlePaddle/PaddleOCR-VL-1.6) | PaddlePaddle | 184 | 4,003 | Baidu's ERNIE4.5-powered document understanding system, extending OCR to visual language reasoning for enterprise document processing. |
| [NemoStation/Marlin-2B](https://huggingface.co/NemoStation/Marlin-2B) | NemoStation | 494 | 17,616 | Compact video-text-to-text model based on Qwen3.5 architecture, optimized for video understanding with efficient 2B parameter scaling. |
| [Kwai-Keye/Keye-VL-2.0-30B-A3B](https://huggingface.co/Kwai-Keye/Keye-VL-2.0-30B-A3B) | Kwai-Keye | 99 | 964 | Kwai's multimodal feature extraction system with MoE efficiency (30B total, 3B active), targeting content understanding at scale. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-----------------|
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 1,275 | 2,573,320 | Most-downloaded uncensored GGUF variant with 2.5M+ downloads, revealing substantial demand for unaligned model behavior despite ethical concerns. |
| [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 609 | 982,631 | Unsloth's Multi-Token Prediction quantized release, nearly 1M downloads demonstrating community appetite for inference-optimized implementations. |
| [nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4) | nvidia | 137 | 313,480 | NVIDIA's proprietary 4-bit floating point quantization using ModelOpt, enabling 35B-parameter deployment on consumer hardware. |
| [LFM2.5-8B-A1B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B-GGUF) | LiquidAI | 160 | 70,865 | Official GGUF release of Liquid's alternative architecture, supporting llama.cpp inference for edge experimentation. |
| [stepfun-ai/Step-3.7-Flash-GGUF](https://huggingface.co/stepfun-ai/Step-3.7-Flash-GGUF) | stepfun-ai | 95 | 39,258 | Official quantized vision-language model with imatrix optimization, extending multimodal capabilities to CPU inference contexts. |
| [Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF) | Jackrong | 196 | 155,959 | Community vision-language quantization with llama.cpp compatibility, showing robust ecosystem replication around Qwen architectures. |
| [prism-ml/bonsai-image-ternary-4B-gemlite-2bit](https://huggingface.co/prism-ml/bonsai-image-ternary-4B-gemlite-2bit) | prism-ml | 100 | 41 | Experimental ternary/1.58-bit text-to-image model using GemLite, pushing quantization boundaries despite minimal current adoption. |

---

## 3. Ecosystem Signal

The Qwen family has achieved ecosystem dominance rivaling Llama's 2024 position, with official releases, corporate derivatives (NVIDIA, Kwai), and vibrant community fine-tuning forming a self-reinforcing adoption spiral. DeepSeek's MIT-licensed V4 series demonstrates that permissive licensing and published benchmarks can drive proprietary-scale download numbers—5.8M for V4-Pro suggests production deployment at scale. The quantization landscape shows bifurcation: practical GGUF variants (Unsloth, HauhauCS) serve immediate community needs while experimental formats (NVFP4, ternary) probe future efficiency frontiers. NVIDIA's strategic positioning across the stack—foundation models, optimization tools, and modality-specific implementations—reflects hardware-software integration ambitions. Notably, the "uncensored" variant's 2.5M downloads versus official Qwen's 5.2M reveals significant demand for unfiltered models, a tension the ecosystem has not resolved. Proprietary presence remains limited but meaningful: OpenAI's privacy-filter and JetBrains' Mellum indicate selective open-weight strategies for specific verticals rather than broad model releases.

---

## 4. Worth Exploring

**[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** — The "any-to-any" modality specification is architecturally ambitious and underexplored; with only 3,192 downloads, this represents early access to potentially foundational multimodal research before broader community attention arrives. The unified generation capabilities across image and video modalities could inform next-generation multimodal system design.

**[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Visual grounding remains a critical unsolved problem for robotics, AR, and accessible interfaces; this 3B-parameter specialized model offers production-viable precision without the inference costs of larger vision-language systems. The 61K downloads suggest emerging practical adoption worth monitoring.

**[prism-ml/bonsai-image-ternary-4B-gemlite-2bit](https://huggingface.co/prism-ml/bonsai-image-ternary-4B-gemlite-2bit)** — While currently niche (41 downloads), ternary quantization at 1.58-bit precision represents a potential paradigm shift for on-device generative AI. Researchers and efficiency-focused engineers should track whether this extreme compression preserves usable quality, as success here could redefine mobile and edge deployment economics.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*