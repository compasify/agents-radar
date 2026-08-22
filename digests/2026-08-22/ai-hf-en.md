# Hugging Face Trending Models Digest 2026-08-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-21 23:13 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-22

## 1. Today's Highlights

This week's leaderboard is defined by the **Qwen3.8-27B ecosystem**: the official multimodal release leads with 11,952 likes, while a wave of community quantizations (GGUF, FP8, NVFP4, MLX) collectively accounts for millions of downloads. **Moonshot's Kimi-K3** (10,913 likes) is the second standout, pairing image-text-to-text capabilities with compressed-tensor efficiency. On the generation side, video and audio are surging — **MiniMax-H3** (3.6M downloads), **Lightricks LTX-2.5**, and **MiniMax-Music3** all trended strongly. The clearest community pattern is **abliteration/uncensored fine-tuning**, with over a dozen Qwen3.8 refusal-removed variants in the top 30. DeepSeek's open-weight V4 family also continues to grow, led by **DeepSeek-V4-Flash** at 2.8M downloads.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,609 | 2,833,064 | Fast, lightweight DeepSeek V4 variant optimized for low-latency conversational inference. Trending with 2.8M downloads, making it one of the most-adopted open-weight LLMs this week. |
| [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 707 | 49,601 | DeepSeek's flagship V4 Pro text-generation model with conversational capabilities. It rounds out the V4 family alongside Flash and is gaining traction as a high-end open-weight option. |
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,139 | 15,702 | Massive MoE text model with 2.4T total parameters and 95B active, built on the qwen3_5_moe architecture. Trending as the largest Qwen3.8 variant, offering frontier-class text generation at sparse-inference cost. |
| [Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 285 | 9,165 | MoE model with 35B total and 3B active parameters, based on qwen3_5_moe. Trending for highly efficient text generation, though its tags also indicate multimodal input support. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,952 | 1,726,651 | The week's most-liked model: a 27B image-text-to-text conversational flagship from the qwen3_5 family. It anchors a massive ecosystem of quantizations, fine-tunes, and abliterated variants. |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,913 | 2,448,810 | Moonshot's open-weight multimodal model using compressed-tensors for efficient feature extraction and image-text-to-text inference. Trending at ~10.9K likes with 2.4M downloads, signaling strong demand for Moonshot's open release. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,294 | 3,614,443 | Image-text-to-video generation model with 3.6M downloads — the most-downloaded video model this week. It is also the base for community fine-tunes such as 10Eros-Max. |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,737 | 505,113 | 30B image-text-to-text conversational model with 505K downloads. Trending for strong multimodal chat performance from the meta-models series. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,486 | 654,175 | Single-file diffusion model supporting image-to-video, text-to-video, and video-to-video. Trending as a versatile, all-in-one video editing/generation package with 654K downloads. |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,162 | 15,678 | Text-to-music diffusion model in the MiniMax Music3 series, generating music from textual prompts. Trending as a notable new frontier entrant in generative audio. |
| [10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 310 | 0 | Community fine-tune of MiniMax-H3 for image-text-to-video generation. Trending as an early sign of a video-model fine-tuning ecosystem, though it is newly listed with zero downloads so far. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,370 | 0 | Utility repository providing corrected jinja chat templates for Qwen3.5, particularly for MLX users. Trending at 1,370 likes with zero downloads, highlighting widespread community pain around broken chat templates. |
| [s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 190 | 1,136 | Compact Qwen3-based text-generation model with ASR capabilities. Trending as a small, dual-purpose model for speech-recognition-adjacent text tasks. |
| [Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 173 | 21,092 | Speculative-decoding variant of Qwen3.8-27B using the dflash2 technique. Trending for its potential to speed up 27B inference via draft-model decoding. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,501 | 5,804,917 | The week's most-downloaded model at 5.8M downloads: unsloth's GGUF quantization of Qwen3.8-27B. It makes the flagship multimodal model runnable on llama.cpp and local CPU/small-GPU setups. |
| [Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 660 | 1,939,895 | Official FP8 quantization of Qwen3.8-27B from Qwen, with 1.9M downloads. Trending for production GPU inference with reduced memory footprint while retaining multimodal chat quality. |
| [Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 327 | 1,013,917 | Unsloth's NVFP4 quantization of Qwen3.8-27B for NVIDIA GPUs, surpassing 1M downloads. Trending as an efficient format for Blackwell-class hardware with strong quality-per-bit. |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 566 | 1,126,222 | Uncensored GGUF of Qwen3.8-27B with MTP support, at 1.1M downloads. The most popular uncensored Qwen3.8 variant this week for llama.cpp users. |
| [Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 210 | 421,918 | "Heretic" abliterated uncensored GGUF with 422K downloads. Trending as an aggressive refusal-removal option in the Qwen3.8 wave. |
| [Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 420 | 357,225 | Aggressive uncensored MTP GGUF retaining image-text-to-text vision capabilities. Trending with 357K downloads as a multimodal + uncensored combination. |
| [Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 231 | 338,221 | huihui-ai's trusted abliterated GGUF with 338K downloads. A go-to choice for users wanting a reliable uncensored Qwen3.8 on llama.cpp. |
| [Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 438 | 123,956 | Multi-format (MLX, safetensors, GGUF) heavily abliterated release. Trending for maximal refusal removal across Apple Silicon and standard Python stacks. |
| [Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 201 | 197,667 | Dense 27B abliterated GGUF with 198K downloads. Another strong entrant in the uncensored Qwen3.8 quantization space. |
| [Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 792 | 107,520 | Abliterated, uncensored FP8 variant of Qwen3.8-27B. Trending as a high-performance FP8 option for censored-free inference on modern GPUs. |
| [Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 818 | 18,193 | MLX abliterated version of Qwen3.8-27B. Trending for Apple Silicon users seeking an uncensored multimodal model. |
| [Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 203 | 123,237 | GGUF quantization of the efficient 35B-A3B MoE, MIT-licensed and endpoints-compatible. Trending with 123K downloads for lightweight local serving. |
| [Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 168 | 155,208 | Experimental GGUF combining GAIN Training, Cold-Fusion merging, and MTP at 155K downloads. Trending for pushing quantization/merge-soup experimentation on Qwen3.8. |
| [Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 236 | 74,038 | Community llama.cpp GGUF quantization of Qwen3.8-27B. Trending as another solid option in the already dense Qwen3.8 quantization field. |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 289 | 68,275 | GGUF abliterated variant in the orcarouter uncensored family. Trending alongside the MLX and FP8 versions for cross-hardware uncensored deployment. |
| [Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 229 | 17,521 | Non-quantized safetensors abliterated model for Transformers-based pipelines. Trending as the canonical uncensored version for Python inference without GGUF/llama.cpp. |

## 3. Ecosystem Signal

**Qwen3.8 is the clear center of gravity this week.** The base 27B model supports an unusually deep ecosystem: official FP8, unsloth GGUF and NVFP4, plus a dozen abliterated/uncensored variants from huihui-ai, orcarouter, JonathanColetti, and others. A single strong open-weight backbone is now sustaining an entire "model economy" of formats and fine-tunes. Meanwhile, open-weight releases from DeepSeek (V4 Pro/Flash), MiniMax (H3 video, Music3 audio), and Moonshot (Kimi-K3) all gained traction — indicating the frontier is becoming more open and increasingly multimodal. Abliteration has clearly moved from fringe practice to mainstream mainstream community workflow. Quantization formats are also diversifying beyond GGUF: FP8, NVFP4, and MLX all trended simultaneously, reflecting fragmentation across NVIDIA, Apple, and general GPU targets. Finally, video and music generation models (MiniMax-H3, LTX-2.5, MiniMax-Music3) signal that generative media, not just text, is the next competitive battleground.

## 4. Worth Exploring

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The 11,952-like flagship that explains nearly every other trend on this list. Studying it helps you understand the surrounding quantization formats (GGUF, FP8, NVFP4) and the abliteration wave built on top of it.
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — At 10,913 likes, this compressed-tensors multimodal model shows how Moonshot is translating proprietary Kimi capabilities into open weights. Its efficiency-oriented approach is worth comparing directly with Qwen3.8-27B.
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — With 3.6M downloads and the example of [10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max), this is the best model for understanding how video generation is being fine-tuned and commercialized in the open-weight ecosystem right now.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*