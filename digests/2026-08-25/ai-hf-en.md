# Hugging Face Trending Models Digest 2026-08-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-24 23:13 UTC

---

# Hugging Face Trending Models Digest — 2026-08-25

## 1. Today's Highlights

The Hub is currently dominated by Qwen3.8-27B: the official release leads in likes (12,508) while Unsloth's GGUF build leads in downloads (7,009,063), and dozens of abliterated/uncensored variants fill out the trending list. Video generation is also heating up, with MiniMax-H3 reaching 4.4M downloads and Lightricks LTX-2.5 offering a single-file image/video-to-video diffusion model. DeepSeek-V4-Flash-0731 remains a standout open-weight LLM with 3.2M downloads, while Ornith's MoE models show growing interest in efficient sparse architectures. The strongest community trend is quantization and refusal-removal: GGUF, MLX, and FP8 builds for local and low-latency use dominate the rankings. Music and TTS models from MiniMax and Audio8 add cross-modal breadth beyond text and video.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 394 | 60,294 | Sparse Mixture-of-Experts text-generation model with 35B total parameters and 3B active, built on the Qwen3.5 MoE backbone. It is gaining attention for balancing strong capacity with efficient inference in an open-weight package. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 200 | 83,192 | Compact Ornith 1.5 variant for text generation sharing Qwen3.5 lineage and image-text-to-text tags. Its small size makes it an accessible entry point for deploying or fine-tuning Ornith-style models on modest hardware. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,681 | 3,274,129 | Official DeepSeek V4 Flash release optimized for high-throughput conversational text generation. High like and download velocity signals continued demand for efficient open DeepSeek models. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,508 | 2,645,226 | Official Qwen 3.8 flagship multimodal model combining image understanding with conversational text generation. It anchors this trending list and serves as the base for most community fine-tunes and quantizations. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,721 | 790,378 | Single-file diffusion model from Lightricks for image-to-video, text-to-video, and video-to-video tasks. Its multi-purpose video interface and near-800k downloads make it a key open video-generation release. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,228 | 18,065 | Text-to-music generator from MiniMax using a diffusers-style pipeline. It stands out as a rare major-lab open music generation model in the current trending set. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,417 | 4,465,161 | Image/text-to-video model that is one of the most-downloaded video releases on the Hub. Its 4.4M downloads indicate strong real-world adoption for open video generation workflows. |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 145 | 2,775 | Early preview text-to-speech model with ArkTTS tags and feature-extraction pipeline. At only 0.1b scale, it is an interesting compact TTS experiment from a new author. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,446 | 0 | Not a model, but a corrected Jinja chat-template collection for Qwen3.5 deployments, optimized for MLX. It earned 1.4k likes without any downloads, showing the demand for reliable template compatibility. |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 226 | 0 | Another Qwen chat-template utility focused on MLX and Jinja formatting. It is useful for developers who need consistent chat templates across Qwen3.5/3.8 variants. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 229 | 2,976 | Compact Qwen3-based model tagged for automatic speech recognition. It signals a trend toward task-specialized speech models built on strong open LLM bases. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 214 | 50,763 | Qwen3.8-27B variant incorporating DFlash2 speculative decoding for faster generation. It targets low-latency serving and local inference use cases for the Qwen3.8 family. |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 173 | 85,034 | Independent DFlash2-optimized Qwen3.8-27B release with the same speculative-decoding goal. It gives deployers another option to reduce text-generation latency. |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 181 | 0 | Latent upscaler utility designed for MiniMax-H3 video outputs. It has no listed pipeline yet, but is a useful companion for improving H3-generated video quality. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,831 | 7,009,063 | Unsloth's GGUF quantization of Qwen3.8-27B, the most downloaded model on this list. It is the default llama.cpp-friendly choice for local and server-side Qwen3.8 inference. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,026 | 57,947 | Abliterated Qwen3.8 in MLX format for Apple Silicon. It is popular among users who want uncensored multimodal chat with efficient local Mac performance. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 693 | 312,627 | Multi-format "obliterated" Qwen3.8 with MLX, safetensors, and GGUF weights. Its 312k downloads reflect demand for refusal-free text-generation across different runtimes. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,097 | 224,114 | FP8-precision abliterated Qwen3.8 for lower memory and faster GPU inference. It attracted over 1k likes from users seeking high-quality uncensored multimodal serving. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 576 | 761,975 | Community GGUF that combines uncensored weights with "Aggressive MTP" and multimodal tags. Over 760k downloads show a strong audience for feature-packed Qwen3.8 quantizations. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 688 | 1,456,700 | Llama.cpp GGUF with MTP support and uncensored Qwen3.8 weights. Its 1.46M downloads make it one of the most popular community GGUF builds in this cohort. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 421 | 143,108 | GGUF version of orcarouter's uncensored Qwen3.8 for llama.cpp users. It complements their MLX and FP8 releases, giving a common quantized path for CPU/GPU local use. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 274 | 988,170 | GGUF quantization of Ornith-1.5-35B-A3B for local CPU/GPU inference. Nearly 1M downloads indicate strong interest in efficient MoE models in GGUF form. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 333 | 1,140,375 | huihui-ai's standard GGUF of abliterated Qwen3.8-27B. With 1.14M downloads, it is a widely used uncensored GGUF derivative. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 185 | 971,104 | GGUF of Ornith-1.5-9B for lightweight text generation deployments. About 970k downloads show broad adoption of small Ornith variants in local environments. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 225 | 209,017 | Heavily customized GGUF with GAIN training, cold-fusion remixing, and MTP. It is a niche but creative community attempt to squeeze extra quality and speed from Qwen3.8. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 276 | 27,316 | Non-GGUF safetensors abliterated model from huihui-ai. It is the source for their GGUF and a good starting point for further adaptations. |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 169 | 10,482 | Safetensors abliterated base version from orcarouter. It underlies their MLX, FP8, and GGUF variants, making it a primary uncensored Qwen3.8 release. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 680 | 3,004,940 | Official Qwen FP8 quantized release for production-grade multimodal inference. With 3.0M downloads, it is a strong signal of FP8 adoption for serving Qwen3.8 at scale. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 260 | 162,580 | Llama.cpp GGUF variant labeled "Ridge" for Qwen3.8-27B. It adds another quantization flavor for users looking for alternatives to standard GGUF mixes. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 257 | 654,805 | Aggressively abliterated "Heretic" GGUF for Qwen3.8-27B. Its 654k downloads confirm a durable niche for strongly uncensored local models. |

## 3. Ecosystem Signal

Qwen3.8 is the clear ecosystem center: nearly two-thirds of the trending list are Qwen3.8-27B derivatives, and the official FP8 plus Unsloth GGUF releases make it widely deployable across GPU, CPU, and Apple Silicon environments. Ornith's MoE models add a second Qwen-based family, suggesting Qwen's architecture is becoming a default substrate for both dense and sparse open-weight models.

Open-weight releases completely dominate the top 30, with no proprietary model present. DeepSeek-V4-Flash reinforces the viability of open frontiers, while MiniMax and Lightricks show open models expanding strongly into video, music, and TTS. Quantization is the main community activity: GGUF is the standard for llama.cpp, MLX serves Apple users, and FP8 targets production GPU inference. Abliteration and "uncensored" fine-tunes are a notable sub-trend, generating hundreds of thousands of downloads. Specialized utilities like chat-template fixes, speculative decoding, and latent upscalers also show the ecosystem maturing beyond base weights toward serving efficiency and workflow integration.

## 4. Worth Exploring

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The official base model behind the entire trend. Studying this release is the best way to understand the architecture, multimodal capabilities, and prompt behavior that all the fine-tunes and quantizations inherit.

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — A major open-weights LLM with 3.2M downloads and strong conversational performance. Worth comparing with Qwen3.8 to assess where top open-weight dense models currently stand.

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — One of the most adopted open video-generation models on the Hub. Its 4.4M downloads make it a practical benchmark for image-to-video and text-to-video workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*