# Hugging Face Trending Models Digest 2026-08-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-14 23:11 UTC

---

# Hugging Face Trending Models Digest — 2026-08-15

## 1. Today's Highlights

Multimodal is the dominant force this week: **Kimi-K3** leads weekly likes, **Qwen3.8-27B** draws 8,908 likes, and the **MiniMax-H3** ecosystem now spans video models, LoRAs, GGUF conversions, and ComfyUI packages. In pure LLMs, **DeepSeek-V4-Flash** has the strongest download story at 1.6M downloads, while Qwen's 2.4T MoE and NVIDIA's Nemotron Lightning show continued scaling/efficiency momentum. Quantization and fine-tuning releases are nearly as prominent as base models — GGUF, FP8, NVFP4, and LoRA variants appear across Qwen, Meta, DeepSeek, and MiniMax families. Open-weight distribution remains the clear trend, with official and community teams shipping local-first formats immediately at launch.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 911 | 3,832 | Massive MoE language model with 2.4T total parameters and 95B active parameters. It stands out as an ultra-large open-weight text-generation architecture with efficient active-parameter inference. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,380 | 1,606,491 | DeepSeek's fast/light text-generation model, with 1.6M downloads in this wave. Its momentum suggests strong demand for a cheaper, high-throughput open-weights LLM. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 431 | 245 | Newer "Pro" DeepSeek-V4 checkpoint for higher-quality text generation. Downloads are still ramping, but it marks the premium tier of DeepSeek's two-tier V4 launch. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 614 | 124,172 | Small 2.6B-parameter language model from Liquid AI with 124K downloads. It is trending as an efficient, low-latency option for edge/local LLM deployment. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 141 | 34,137 | NVIDIA's 30B-A3B MoE language model in BF16, built around sparse active-parameter efficiency. The 141 likes and 34K downloads reflect interest in high-quality small-MoE chat models. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 234 | 2,283 | Compact hybrid-architecture language checkpoint released under MIT with custom_code tags. Its tiny size and permissive license make it an interesting lightweight baseline for experimentation. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 8,908 | 2 | Qwen's flagship open image-text-to-text model, with 8,908 likes in one week despite negligible downloads. It is already supported by GGUF and FP8 variants. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,509 | 165,300 | Meta's 30B multimodal image-text-to-text model with 165K downloads. It is notable for combining large-scale vision-language reasoning with a rapidly growing quantization ecosystem. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,917 | 1,997,541 | MiniMax's video generation model for image/text-to-video, with nearly 2M downloads and 3,917 weekly likes. It anchors a huge ecosystem of LoRAs, ComfyUI conversions, and GGUF versions. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 851 | 207,830 | Lightricks' image-to-video and video-to-video generation model in single-file diffusion format. 207,830 downloads show strong community adoption for controllable video workflows. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 645 | 63 | MiniMax's text-to-audio/music generation model, with 645 weekly likes but very low downloads. It represents the company's expansion from video into music generation. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 493 | 149,865 | Third-party Turbo variant of MiniMax-H3 for faster image-to-video generation. 149,865 downloads indicate strong demand for speed-optimized video diffusion. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,670 | 1,974,635 | Moonshot AI's image-text-to-text multimodal model with the highest weekly likes in this list. Its ~2M downloads and compressed-tensors tag point to a widely used open multimodal checkpoint. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,317 | 11,768,622 | ComfyUI-packaged single-file distribution of MiniMax-H3. This conversion is the most-downloaded MiniMax-H3 asset with 11,768,622 downloads. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 160 | 10,106 | Community text-to-image diffusion model with ComfyUI single-file support. Its 2.9B size and 10K downloads position it as a lightweight local image generator. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 380 | 1,366 | NVIDIA's 11B voice-chat model, with research-backed speech interaction and safetensors weights. It is trending as a practical open-weights voice assistant. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 136 | 11 | Preview image-text-to-text checkpoint from dots-studio for note-oriented multimodal tasks. Despite low downloads, it is generating interest as a specialized multimodal "note" model. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 339 | 0 | ComfyUI companion repository for MiniMax-H3 integration, rather than a standalone weight release. It trends because the community needs reliable adapters for running H3 video workflows in ComfyUI. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 763 | 0 | Unsloth's GGUF conversion of Qwen3.8-27B, ready for local inference. It has 763 likes but zero downloads so far, reflecting very recent release timing. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 414 | 596,774 | GGUF-quantized version of Meta's Muse-Glimmer-30B for local multimodal inference. 596,774 downloads make it one of the most popular quantized vision-language models in this cohort. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 289 | 0 | Official FP8 quantized release of Qwen3.8-27B, reducing memory and serving cost. It is trending as part of the Qwen3.8 launch bundle. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 184 | 9,334 | Official FP8 variant of Qwen's 2.4T MoE model, easing deployment of a huge checkpoint. 9,334 downloads show early adopters are already testing it. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 269 | 228,364 | Meta's own GGUF checkpoint for Muse-Glimmer-30B, with 228,364 downloads. It offers a reference quantization for lower-cost multimodal inference. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 257 | 119,572 | NVIDIA's NVFP4-quantized Nemotron 3.5 Lightning model, using 4-bit floating-point compression. 119,572 downloads indicate strong interest in NVIDIA's low-precision serving stack. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,015 | 2,891,524 | Community Uncensored/Heretic GGUF fine-tune built on Qwen3.6-27B. With 2.89M downloads and 2,015 likes, it is a major player in the unrestricted/roleplay fine-tune space. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 741 | 0 | LoRA designed to add Turbo-style speed or behavior to MiniMax-H3 video generation. It has 741 likes and no downloads yet, suggesting a brand-new release. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 176 | 9,060 | LoRA from fal for making MiniMax-H3 generate more realistic people. 9,060 downloads indicate practical production-style video generation use. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 318 | 112,975 | ComfyUI-ready LoRA for MiniMax-H3 Turbo video generation, with 112,975 downloads. It is a common component in local H3 turbo workflows. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 155 | 136,774 | GGUF quantized version of MiniMax-H3 for stable-diffusion.cpp and ComfyUI workflows. 136,774 downloads demonstrate continued appetite for compressed video diffusion. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 309 | 473 | Community text-to-video fine-tune of MiniMax-H3 with an Apache-2.0 license. 309 weekly likes and endpoint-compatible tags signal a fast-growing fan fine-tune. |

## 3. Ecosystem Signal

Several model families are building clear momentum. **Qwen** spans both a vision-language flagship (Qwen3.8-27B) and an enormous MoE text model (2.4T-A95B), with official FP8 and community GGUF variants released in lockstep. **DeepSeek's** two-tier V4 launch gives practitioners a fast Flash option and a quality-focused Pro option; Flash's download count shows that efficiency, not just raw capability, drives adoption. **MiniMax-H3** has become the most active video-generation ecosystem: Comfy-Org's single-file pack alone has 11.7M downloads, while Turbo LoRAs, GGUF releases, realism LoRAs, and uncensored fine-tunes fill out the ecosystem. **Meta's Muse-Glimmer** is also consolidating around GGUF releases, and **NVIDIA's Nemotron 3.5** family is pushing low-precision serving with NVFP4. The open-weight vs. proprietary split remains decisively open, and official quantizations are becoming part of launch strategy rather than community afterthoughts.

## 4. Worth Exploring

- **moonshotai/Kimi-K3** — Highest weekly likes and ~2M downloads; a great study of a compressed multimodal checkpoint already widely adopted.
- **MiniMaxAI/MiniMax-H3** — The center of the most active video ecosystem; exploring its ComfyUI, GGUF, and LoRA stack shows how open-weights video models go viral.
- **Qwen/Qwen3.8-27B** — A fresh flagship multimodal model with 8.9K likes in its first week and immediate GGUF/FP8 support; worth comparing against Kimi-K3 as a vision-language baseline.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*