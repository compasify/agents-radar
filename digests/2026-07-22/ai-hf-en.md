# Hugging Face Trending Models Digest 2026-07-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-22 01:26 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-22

## 1. Today's Highlights

This week's trending leaderboard is dominated by a surge in **multimodal vision-language models** and **extreme quantization** (1-bit/ternary) techniques. Google's **Gemma-4-31B-it** leads downloads with 12M+, while **zai-org/GLM-5.2** tops weekly likes at 4,278 — signaling strong community interest in large Mixture-of-Experts architectures. Notably, **baidu/Unlimited-OCR** has amassed over 2.2M downloads as the dominant OCR model, and an entire cluster of 27B-parameter "Bonsai" quantized variants from **prism-ml** continues to push the boundaries of sub-2-bit inference. Robotics models from **openbmb** and a new audio transcription pipeline from **nvidia** round out a diverse set of specialized releases.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,278 | 545,109 | A large Mixture-of-Experts language model (GLM architecture with DSA routing) driving top weekly likes; strong conversational performance and MoE efficiency are its key draws. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 186 | 3,056 | A small-yet-capable text-generation model from the Laguna series, designed for efficient on-device inference. |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 125 | 125 | A new feature-extraction transformer model in beta release from Motif Technologies, still early in adoption. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,605 | 2,237,351 | A high-performance image-text-to-text OCR model from Baidu, dominating downloads with 2.2M+; designed for unlimited-scale text extraction from images. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,970 | 1,997,690 | An uncensored, vision-capable MoE model (35B total, 3B active) based on Qwen3.6, trending strongly with aggressive fine-tuning for creative tasks. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,387 | 2,133,420 | A GGUF-quantized 9B reasoning model built on Qwen3.5, blending Claude and Mythos training data with 1M sample fine-tuning for enhanced logic. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,314 | 12,113,203 | Google's latest 31B instruction-tuned multimodal model (image-text-to-text), by far the highest-downloaded model this week at 12M+. |
| [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 151 | 2,497 | An image-to-video diffusion model specialized in generating dance motion videos from a single reference image. |
| [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 222 | 0 | A LoRA model for identity-preserving text-to-video generation with LTX-Video, enabling reference-based face transfer. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 237 | 17,162 | An image-text-to-text OCR model built on Qwen3.5, providing strong multilingual text recognition capabilities. |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 491 | 12,002 | A thinking-optimized 27B vision-language model based on Qwen3.6, designed for chain-of-thought reasoning over images. |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 299 | 92,265 | An audio-text-to-text model combining speech transcription with speaker diarization, trending for meeting and call analysis. |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 902 | 590,230 | NVIDIA's 0.6B streaming ASR model for real-time speech recognition, achieving high accuracy with low latency. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,199 | 722,058 | A compressed code-specialized model from Moonshot AI's Kimi K2.7 family, using compressed-tensors for efficient code generation. |
| [nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16) | nvidia | 96 | 93,021 | A 1B parameter sentence-embedding model from NVIDIA, built on Ministral3, optimized for semantic similarity tasks. |
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 298 | 1,068 | A JAX-based model focused on function-calling and tool-use, using the "needle" architecture for precise agentic workflows. |
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 147 | 58 | A vision-language-action model for robotic manipulation tasks, part of openbmb's MiniCPM robotics line. |
| [openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 107 | 72 | A companion model to MiniCPM-RobotManip, specialized for object tracking in robotic vision pipelines. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,364 | 16,441 | A multimodal MoE model (image-text-to-text + audio-text-to-text) that kicked off a wave of GGUF quantizations; strong conversational reasoning across modalities. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 899 | 432,196 | A 27B model quantized to 2-bit ternary precision, enabling massive model inference on consumer hardware with llama.cpp. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 570 | 1,404,962 | An ultra-aggressive 1-bit quantization of a 27B model, achieving the highest compression ratio in the Bonsai family. |
| [prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 161 | 25,273 | MLX-native 1-bit quantization of the 27B Bonsai model for Apple Silicon, enabling local inference on Mac hardware. |
| [prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit) | prism-ml | 135 | 20,445 | Ternary 2-bit MLX quantization variant of the Bonsai 27B, balancing compression with output quality for Apple devices. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 245 | 62,842 | An uncensored, heavily fine-tuned Qwen3.6 GGUF variant blending fable storytelling, heretic roleplay, and multi-turn processing. |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF) | GnLOLot | 147 | 51,746 | A 1B MiniCPM5 GGUF fine-tuned with Claude-Opus and Fable5 data for chain-of-thought reasoning. |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 166 | 6,165 | The non-quantized sibling of the MiniCPM5 thinking model, using full safetensors format for refinement and further fine-tuning. |
| [AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 156 | 145,102 | A GGUF quantization of Tencent's Hy3 model, Apache-2.0 licensed and popular for general text generation. |
| [unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF) | unsloth | 116 | 7,377 | Unsloth's GGUF quantization of the Inkling multimodal MoE model, enabling fast local inference across image, text, and audio. |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 476 | 0 | A LoRA for identity-preserving image editing using Krea-2, enabling face-consistent edits in ComfyUI workflows. |

## 3. Ecosystem Signal

**Three dominant trends** emerge this week. First, **extreme quantization continues accelerating** — the prism-ml Bonsai family (1-bit and 2-bit ternary) has crossed 1.8M total downloads, proving that sub-2-bit LLMs are viable for deployment on consumer hardware. This signals a shift from "can we quantize" to "what can we afford to lose" as users balance model size against capability. Second, **multimodal MoE models are the new frontier**: thinkingmachines/Inkling, HauhauCS's Qwen3.6 MoE, and Google's Gemma-4-31B-it all combine vision, text, and audio with sparse activation — reducing inference cost while expanding capability. Third, **"uncensored" fine-tunes remain a consistent trend**, with 4 of the top 30 models explicitly uncensored. Open-weight models from Google (Gemma-4) and Baidu (Unlimited-OCR) demonstrate that major players are increasingly releasing their most capable models openly, while community fine-tuning around Qwen3.6 and MiniCPM5 creates a vibrant downstream ecosystem.

## 4. Worth Exploring

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — With the highest like count (4,278) and MoE architecture (GLM with DSA routing), this model represents the cutting edge of Chinese-origin LLMs. Its strong community reception warrants testing for multilingual reasoning tasks.

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — As the leading 2-bit ternary quantization of a 27B model, this is essential for anyone exploring extreme model compression. At 432K+ downloads, it's the most-tested binary-weight LLM on the hub and a benchmark for "run large models on a laptop" viability.

3. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — NVIDIA's 0.6B streaming ASR model combines high accuracy with real-time capability, and its 590K downloads indicate strong demand for lightweight speech recognition. It's an ideal candidate for edge deployment and real-time transcription pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*