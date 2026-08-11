# Hugging Face Trending Models Digest 2026-08-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-11 00:52 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-11

## 1. Today's Highlights

MiniMax-H3 is the clear center of gravity this week: the original video generation model is surrounded by a ComfyUI single-file release with 6M downloads, multiple LoRAs, GGUF/NVFP4 quantizations, and even a prompt-rewriter adapter. DeepSeek-V4-Flash is the leading pure LLM, with the official checkpoint at 954K downloads and Unsloth's GGUF adding another 199K. Moonshot's Kimi-K3, with 10,470 likes and 1.51M downloads, shows the pull of compressed multimodal open weights, while Baidu's Unlimited-OCR proves continued demand for powerful specialist vision models. A wave of "Heretic" Qwen3-VL and MiniMax-H3 merges and quantized variants also signals strong community appetite for uncensored, locally deployable formats.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,059 | 954,441 | Fast conversational flagship from DeepSeek, optimized for text generation. Already one of the most-downloaded new LLMs this week. |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 490 | 89,680 | LiquidAI's compact 2.6B text-generation model. Its small footprint and first-party GGUF make it appealing for local inference. |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 311 | 1,344 | Preview release of a Mixture-of-Experts causal LM from deepgrove. The MoE design points to a parameter-efficient sparse model in early evaluation. |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 287 | 5,261 | Flash-sized conversational model using a hybrid `bailing_hybrid` architecture. Trending as inclusionAI's lightweight option for chat and agent workloads. |
| [Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) | SyzygyResearch | 115 | 2,129 | Experimental 35B MoE model based on Qwen3.5 with ternary/additive weights. Notable for exploring extreme low-bit model design. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,429 | 47,468 | A new image-text-to-video model supporting text-to-video, image-to-video, and image-text-to-video pipelines. It has sparked an entire ecosystem of LoRAs, ComfyUI ports, and quantized formats. |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 711 | 0 | A 30B image-text-to-text conversational model from meta-models. Zero downloads but 711 likes indicate strong early interest before broad deployment. |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,470 | 1,510,032 | Moonshot's flagship image-text-to-text model with compressed-tensors support. One of the most-liked and most-downloaded open multimodal releases this week. |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 297 | 597 | NVIDIA's voice chat model for spoken dialogue interactions. The 11B model is trending as a research-focused speech-language release. |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 259 | 15,087 | A diffusers-based adaptation of MiniMax-H3 for image-to-video and related video tasks. Positioned as a faster/lighter Turbo-style variant. |
| [BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 152 | 617 | A Qwen3.5-MoE-based image-text-to-text model from endless-frontier. Notable for combining MoE scaling with conversational multimodal capability. |
| [FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,076 | 480,762 | Black Forest Labs' widely adopted text-to-image diffusion model. It is the most-liked model on this week's list and remains a standard open-weights image generation baseline. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 221 | 6,343 | A lightweight 3B safety/guardrail model from Mistral, built for English-language moderation. Its small size and vLLM compatibility make it easy to deploy as a filter. |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,002 | 2,921,751 | Baidu's OCR model for document understanding and feature extraction. With 4K likes and 2.92M downloads, it is this week's clear specialist leader. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,146 | 6,009,639 | ComfyUI single-file distribution of MiniMax-H3, ready for local video generation workflows. With 6M downloads, it is the most-used MiniMax-H3 format on the Hub. |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 599 | 0 | A text-to-video LoRA tuned from MiniMax-H3 Turbo. Early-release visibility and ComfyUI compatibility are driving interest despite zero current downloads. |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,861 | 2,439,083 | A heavily merged, uncensored Qwen3.6-27B GGUF with strong local-inference appeal. 2.44M downloads reflect major demand for community "Heretic-style" chat models. |
| [Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 440 | 0 | An INT8/ConvRot-quantized Qwen3-VL 32B merge for ComfyUI and H3 workflows. Trending in the "Heretic" niche for high-end local multimodal experimentation. |
| [MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 256 | 0 | A ComfyUI node/integration repo for MiniMax-H3 by Kijai. Not a standalone model, but essential infrastructure for running H3 inside ComfyUI. |
| [MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 250 | 0 | A pruned, ComfyUI-ready LoRA adapter for MiniMax-H3 Turbo. Zero downloads but 250 likes show strong early interest in drop-in local video adapters. |
| [PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 250 | 0 | A community fine-tune of MiniMax-H3 for text-to-video with a "PinkCherry" aesthetic. Tagged as Apache-2.0 and endpoints-compatible, it targets niche video-generation users. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 207 | 0 | Unsloth's GGUF conversion of meta-models' Muse-Glimmer-30B. It gives llama.cpp users immediate local access to the 30B multimodal model. |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 637 | 199,167 | Unsloth's GGUF quantization of DeepSeek-V4-Flash. 199K downloads show strong demand for low-footprint local deployment of this week's major DeepSeek release. |
| [MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 184 | 0 | Experimental ComfyUI build for MiniMax-H3 by Kijai. Trending as a testbed for new H3 features before they stabilize. |
| [LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 184 | 89,611 | Official GGUF of LiquidAI's 2.6B LFM2.5 model. Makes the compact LLM immediately runnable in llama.cpp; downloads nearly match the base model's. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 148 | 0 | Meta-models' own GGUF release of Muse-Glimmer-30B. Bundles arXiv references and base-model tags as an alternative to Unsloth's conversion. |
| [Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 152 | 0 | An NVFP4-quantized text-encoder merge combining Qwen3-VL-32B and MiniMax-H3 for ComfyUI. Part of the Heretic/H3 ecosystem for high-efficiency NVIDIA inference. |
| [MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 116 | 268 | A PEFT LoRA for rewriting and improving prompts for MiniMax-H3. Small but useful adapter for getting better video-generation results. |
| [MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 192 | 174,862 | Community GGUF quantizations of the Comfy-Org/MiniMax-H3 single-file model. 174K downloads position it as a go-to GGUF source for H3. |
| [Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 162 | 530,052 | Quantized MiniMax-H3 variant using NVFP4, INT4/INT8, and ConvRot for image-text-to-video. 530K downloads show very high interest in compressed, VRAM-friendly H3 versions. |

## 3. Ecosystem Signal

MiniMax-H3 and DeepSeek-V4-Flash are the two dominant model families this week. MiniMax-H3 has the broadest ecosystem: original diffusers weights, a ComfyUI single-file package, Kijai nodes, Turbo LoRAs, a prompt-rewriter LoRA, GGUF outputs, and NVFP4/INT4/INT8 quantizations. DeepSeek-V4-Flash shows similar momentum in the LLM category, with official plus Unsloth GGUF checkpoints totaling more than 1.1M downloads. Open-weight releases clearly dominate over proprietary offerings; even frontier multimodal models such as Kimi-K3 and FLUX.1-dev are openly distributed. The "Heretic"/uncensored fine-tune cluster signals persistent community demand for less-restricted variants, especially in ComfyUI workflows. Quantization is now table stakes: Unsloth, NVFP4, INT4/INT8/ConvRot, and GGUF formats appear within days of each base-model release. Ultimately, format compatibility and local deployment — not just raw model quality — are driving many of this week's download numbers.

## 4. Worth Exploring

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The center of this week's ecosystem. Pair it with the Comfy-Org single-file format or Abiray's quantized version to see how a new video model rapidly spawns tools, adapters, and optimized runtimes.

2. **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — The most-downloaded new LLM this week. Use the official checkpoint for quality and Unsloth's GGUF for local testing; it is a strong conversational baseline.

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — A specialist that quietly amassed 2.92M downloads and 4K likes. Worth studying for OCR pipelines, document understanding, and multimodal feature extraction.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*