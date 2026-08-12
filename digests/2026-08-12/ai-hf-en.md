# Hugging Face Trending Models Digest 2026-08-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-12 00:58 UTC

---

# Hugging Face Trending Models Digest — 2026-08-12

## Today's Highlights

Video generation is the strongest signal this week: **MiniMax-H3** has become an ecosystem anchor, with ComfyUI ports, Turbo LoRAs, prompt rewriters, and realism-focused adapter variants dominating the list. In language and multimodal LLMs, **DeepSeek-V4-Flash-0731** reached over 1M downloads, while **moonshotai/Kimi-K3** leads all models with 10,525 likes. **baidu/Unlimited-OCR** also stands out as a practical utility breakout, amassing 2.9M downloads. Community quantization activity remains intense, with unsloth GGUF releases and NVIDIA NVFP4 variants appearing for most major new checkpoints.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,150 | 1,048,685 | DeepSeek's conversational text-generation model in a Flash form. It is trending on sheer scale, with over 1M downloads and an active GGUF quantization ecosystem. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 550 | 93,668 | Efficient 2.6B liquid LLM designed for text generation. Its small footprint and llama.cpp GGUF sibling make it a popular local experimentation model. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 332 | 2,049 | Early mixture-of-experts text-generation preview from deepgrove. The MoE architecture and preview status are drawing early-adopter attention. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 303 | 6,148 | Flash-sized language model using the bailing_hybrid custom architecture. It is a cost/speed-oriented release with moderate initial adoption. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 152 | 0 | Tiny MIT-licensed variant in the Ling-3.0 family with custom code. It appears aimed at edge deployment despite having no downloads yet. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 125 | 19,250 | NVFP4 30B-A3B MoE language model optimized for efficient inference. NVIDIA's quantization plus 19k downloads show strong enterprise and local interest. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,574 | 59,368 | Flagship image-text-to-video generation model from MiniMaxAI. It is the anchor of a huge derivative ecosystem including LoRAs, ComfyUI ports, and Turbo versions. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,093 | 0 | New image-text-to-text conversational model from the meta-models org. Its instant 1,093 likes with zero downloads signal strong anticipation for Meta's multimodal direction. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,525 | 1,565,484 | Kimi-K3 is the highest-liked model in this digest, combining image-text-to-text, feature extraction, and compressed-tensors. Massive 1.5M downloads confirm broad community adoption. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 210 | 39 | Diffusion single-file video model supporting image-to-video, text-to-video, and video-to-video. It is a fresh release with early likes and minimal downloads so far. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 325 | 653 | Voice chat model connecting audio and language capabilities. It reflects NVIDIA's push into multimodal voice assistants and audio-native LLMs. |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 166 | 708 | Multimodal image-text-to-text conversational model built on Qwen3.5 MoE. Although early, it is notable because of the Qwen3.5 MoE lineage and fast experimental uptake. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,018 | 2,892,191 | OCR foundation model with feature-extraction capabilities. It is one of the digest's biggest practical breakouts, with 4k likes and 2.9M downloads. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 228 | 6,769 | Mistral's 3B safety/guard model with vLLM compatibility. It is trending as a specialized moderation layer for LLM input and output filtering. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 651 | 0 | LoRA adapter aimed at Turbo-speed text-to-video generation. It is part of the MiniMax-H3 customization wave despite having no downloads yet. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,212 | 6,798,796 | ComfyUI single-file diffusion checkpoint of MiniMax-H3. Its 6.8M downloads make it the highest-traffic distribution path for the video model. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,896 | 2,521,093 | Community GGUF merge/fine-tune of Qwen3.6 with uncensored/heretic positioning. 2.5M downloads show substantial local LLM demand. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 340 | 20,376 | Turbo image-to-video variant of MiniMax-H3 with t2v, i2v, and r2v modes. It is a popular fast video generation path, with over 20k downloads. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 304 | 0 | Unsloth GGUF quantization of Meta's Muse-Glimmer-30B. It aims to enable local multimodal chat, though downloads have not yet started. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 275 | 0 | ComfyUI-oriented MiniMax-H3 support repo hosted in the US region. It represents the fast tooling layer around H3 video workflows. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 272 | 0 | Pruned LoRA adapter for MiniMax-H3 Turbo packaged for ComfyUI. It targets simplified and efficient video generation pipelines. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 458 | 0 | INT8-quantized Qwen3-VL text-encoder variant with H3 and ComfyUI support. Its "ultra heretic" positioning and INT8 efficiency are driving curiosity. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 264 | 0 | Apache-2.0 community text-to-video model based on MiniMax-H3 with endpoints compatibility. It shows the expanding open ecosystem around H3. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 202 | 0 | Official GGUF release of Muse-Glimmer-30B with arxiv references. It complements the base model for on-premises and local multimodal deployment. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 191 | 0 | Experimental MiniMax-H3 workflow/checkpoint from Kijai. It signals unusually fast iteration in ComfyUI tooling around new video models. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 649 | 207,990 | Unsloth GGUF quantization of DeepSeek-V4-Flash-0731. 207k downloads highlight strong demand for running DeepSeek locally. |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 201 | 111,942 | Official llama.cpp GGUF of Liquid's 2.6B model. It has even more downloads than the base model, underscoring local deployment demand. |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 129 | 353 | PEFT LoRA for rewriting prompts specifically for MiniMax-H3. It is a workflow ingredient that improves video generation prompt quality. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 111 | 0 | LoRA from fal for generating more realistic people in MiniMax-H3 videos. It fills a specific content-quality niche inside the H3 ecosystem. |
| [sakakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakakismile | 160 | 0 | NVFP4 quantization of Qwen3-VL used as a text encoder for H3 ComfyUI pipelines. It is part of the "heretic" quantized H3 variant family. |

## Ecosystem Signal

**MiniMax-H3** is the clear ecosystem center: it accounts for the largest cluster of derivative LoRAs, ComfyUI conversions, Turbo variants, and prompt-rewriting tools. **DeepSeek-V4-Flash** and **Kimi-K3** show that compact and multimodal open-weight releases can generate massive adoption, with 1M+ and 1.5M+ downloads respectively. Open-weight models are dominating the trending board, while proprietary vendors are participating through open releases from NVIDIA, Mistral, Baidu, and inclusionAI. Quantization is a major driver: unsloth GGUF conversions and NVIDIA NVFP4 checkpoints appear for almost every notable release, confirming that local deployment is a core user behavior. Community fine-tuning is also highly active, with uncensored or "heretic" Qwen3 variants and MiniMax-H3 fine-tunes attracting millions of downloads. The overall signal is clear: multimodal video and text models are converging around efficient formats, ComfyUI-first distribution, and rapid community iteration.

## Worth Exploring

1. **moonshotai/Kimi-K3** — The highest-liked model in this digest, with 10,525 likes and 1.5M downloads. Its compressed-tensor approach and image-text-to-text capability make it a must-study example of efficient multimodal architecture.

2. **MiniMaxAI/MiniMax-H3** — Not just a video model, but the anchor of one of the fastest-growing HF ecosystems. Studying its LoRA adapters and ComfyUI integrations reveals how open video models gain real-world traction.

3. **baidu/Unlimited-OCR** — A rare specialized utility breakout with 4,018 likes and 2.9M downloads. It is worth examining for how OCR and feature-extraction models can achieve product-scale adoption beyond the LLM hype cycle.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*