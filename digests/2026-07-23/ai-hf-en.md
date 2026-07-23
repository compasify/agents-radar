# Hugging Face Trending Models Digest 2026-07-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-23 01:45 UTC

---

Here is the structured Hugging Face Trending Models Digest for July 23, 2026.

---

### 1. Today’s Highlights

This week’s trending models showcase a dual focus on extreme efficiency and massive scale. **GLM-5.2** from zai-org leads with 4,337 weekly likes, indicating strong community interest in the MoE-DSA architecture. Meanwhile, **Google’s Gemma-4-31B-it** continues its explosive download run (over 12 million), solidifying its position as a top-tier open-weight multimodal model. Quantization is the dominant theme, with extreme 1-bit and 2-bit models like **Bonsai-27B** and **Ternary-Bonsai-27B** gaining significant traction, signaling a strong push toward local, low-resource inference. On the vision side, **Baidu’s Unlimited-OCR** stands out with 2.2 million downloads, reflecting a massive demand for production-ready OCR.

### 2. Trending Models

#### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,337 | 545,109 | A 52B MoE-DSA model pushing the frontier of mixture-of-experts language modeling. It is trending due to its novel architecture and high community engagement, making it the most liked model on the leaderboard this week. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 255 | 0 | An open-weight 250B parameter text-generation model from Upstage. Its release marks a significant entry in the large-scale open model space, though it is still accruing its initial download base. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 234 | 0 | A compact 3B LLM designed for efficient text generation. It is trending as a strong contender for edge or resource-constrained deployments. |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 161 | 125 | A new foundational language model focused on feature extraction. It is early in its release cycle but gathering interest for its architectural approach. |

#### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,714 | 2,237,351 | A high-performance OCR model from Baidu with a staggering 2.2M downloads. It is trending due to its exceptional accuracy and scalability for production document digitization. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,328 | 12,113,203 | Google’s latest instruction-tuned multimodal model, featuring 31B parameters and support for image-to-text tasks. The massive download count underscores its status as a top-tier open-weight foundation model. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,452 | 16,441 | A versatile multimodal model supporting image, text, and audio inputs. It is trending for its "inkling_mm" architecture and strong conversational capabilities. |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,224 | 722,058 | A specialized code generation model from Moonshot AI, boasting 722K downloads. It leverages compressed-tensor techniques for efficient token generation. |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 124 | 0 | Microsoft’s new text-to-image diffusion model for image generation and editing. It is a fresh release using the Diffusers framework. |
| [nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 90 | 6,623 | An edge-optimized vision model from NVIDIA’s Cosmos3 family. It is designed for efficient deployment on devices with limited compute. |
| [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 235 | 0 | A text-to-video LoRA focused on identity preservation and reference-to-video generation. It targets users needing consistent character generation in video outputs. |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 308 | 92,265 | An audio-text-to-text model capable of transcription and speaker diarization. Its versatility makes it a strong tool for audio processing pipelines. |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 914 | 590,230 | A compact 0.6B streaming ASR model from NVIDIA, optimized for real-time speech recognition. It is trending for its high accuracy in a low-latency package. |

#### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 154 | 58 | A vision-language-action (VLA) model designed for robotic manipulation tasks. It represents a specialized application of MiniCPM to real-world robotics. |
| [openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 114 | 72 | A companion model to RobotManip, focused on robotic object tracking. It is part of a growing trend of deploying VLAs in industrial settings. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 249 | 17,162 | A specialized OCR model built on the Qwen3.5 architecture. It targets high-accuracy text extraction from images. |

#### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 945 | 432,196 | A 2-bit ternary quantization of a 27B model, enabling massive LLMs to run on consumer hardware. It is highly downloaded for its extreme compression/performance ratio. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 321 | 62,842 | A heavily fine-tuned and uncensored variant of Qwen3.6, quantized to GGUF. It is trending for its large number of specialized tags and adventurous fine-tuning approach. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 596 | 1,404,962 | A 1-bit quantization of the Bonsai-27B model, achieving over 1.4M downloads. It is the most popular quantized model in this list, allowing near-perfect inference on low-memory devices. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,001 | 1,997,690 | An uncensored, aggressive MoE variant of Qwen3.6 with vision support, boasting nearly 2M downloads. It is highly liked for its expressive and unfiltered outputs. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,417 | 2,133,420 | A reasoning-focused GGUF quantized model based on Qwen3.5, with over 2.1M downloads. It is widely used for logic and chain-of-thought tasks. |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 514 | 12,002 | A fine-tune of Qwen3.6 designed to enhance reasoning and "chain-of-thought" capabilities. It is popular among users seeking smarter conversational agents. |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 108 | 0 | A GGUF conversion of the Laguna-S-2.1 model, optimized for efficient local inference via the Unsloth ecosystem. |
| [poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 93 | 1,953 | An NVFP4 quantized version of the Laguna-S-2.1 model, designed for NVIDIA’s latest hardware capabilities. |
| [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 93 | 289 | The official GGUF release of the Laguna-S-2.1 model, making it accessible for CPU and low-memory GPU inference. |
| [prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 165 | 25,273 | A 1-bit MLX port of Bonsai-27B, enabling high-performance inference on Apple Silicon. It is a key model for Mac-based LLM users. |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF) | GnLOLot | 153 | 51,746 | A tiny 1B thinking model quantized to GGUF, combining Claude-style training data with MiniCPM5 architecture. It is trending for its extreme capability-per-parameter ratio. |
| [unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF) | unsloth | 120 | 7,377 | The GGUF quantization of the Inkling multimodal model, enabling fast local inference for vision, text, and audio. |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 495 | 0 | A LoRA for Krea-2 focused on identity-preserving image editing. It enables users to edit images while maintaining consistent character faces. |

### 3. Ecosystem Signal

The ecosystem is clearly polarizing between two extremes: **extreme efficiency** and **raw scale**. The success of **prism-ml’s Bonsai (1-bit)** and **Ternary-Bonsai (2-bit)** indicates that the community is eagerly adopting sub-2-bit quantization to run large models locally. This is reinforced by the strong performance of **GGUF** variants across the board, from multi-billion param models to smaller 1B thinkers. On the open-weight frontier, **Google’s Gemma-4** and **Upstage’s Solar-Open2-250B** show that large organizations are continuing to release high-capability models, yet the **download disparity** (12M vs 0) suggests that ease of use and ecosystem integration (particularly GGUF support) drive adoption more than parameter count alone. Fine-tuning remains highly active, with uncensored and roleplay-focused variants (e.g., **DavidAU**, **HauhauCS**) maintaining a strong niche, while specialized robotics models from **OpenBMB** signal a nascent but growing interest in vision-language-action (VLA) pipelines for real-world deployment.

### 4. Worth Exploring

1.  **Google/gemma-4-31B-it**: With over 12 million downloads, this is the definitive open multimodal model of the month. Its combination of size, instruction tuning, and Google backing makes it a must-study for anyone evaluating state-of-the-art open-weight vision-language models.

2.  **prism-ml/Bonsai-27B-gguf (1-bit)**: The poster child for extreme quantization. With 1.4M downloads, it proves that 1-bit LLMs are practical for real-world use. It is worth studying for anyone interested in running large models on consumer hardware or analyzing the quantization frontier.

3.  **ATH-MaaS/OvisOCR2**: A specialized OCR model built on Qwen3.5 that directly competes with the massive **Baidu Unlimited-OCR**. It is a leaner alternative worth exploring for developers who need high-quality OCR without the overhead of a 2M-download giant.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*