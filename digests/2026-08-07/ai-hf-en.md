# Hugging Face Trending Models Digest 2026-08-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-07 02:02 UTC

---

## 1. Today's Highlights

MiniMax-H3 is the clear thematic hub: the base video model, a ComfyUI single-file distribution, GGUF packs, LoRAs, and quantized NVFP4 derivatives all appear in the top 30. In LLMs, DeepSeek's V4-Flash line and Z.ai's GLM-5.2 are drawing millions of downloads, while Moonshot's Kimi-K3 leads likes with a compressed multimodal architecture. Community fine-tuning is extremely active around Qwen3.6 MoE variants, with "uncensored/Heretic" GGUF models continuing to dominate local deployment. Established image generation (FLUX.1-dev) remains stable, and specialized releases such as Baidu's Unlimited-OCR and Mistral's Shieldstral are expanding the Hub's utility beyond general chat.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,647 | 617,900 | DeepSeek's Flash-tier text-generation checkpoint, built for fast conversational inference. It draws attention for its 617,900 downloads and availability of an Unsloth GGUF version. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 333 | 73,573 | LiquidAI's 2.6B language model, optimized for low-resource deployment. It shows continuing interest in small, efficient LLMs alongside larger MoE releases. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 207 | 419 | Deepgrove's causal mixture-of-experts text-generation preview. It is an early-stage release, but its MoE design makes it worth tracking. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 186 | 1,196 | inclusionAI's flash-size conversational model using a Bailing hybrid architecture. It is a custom-code release with lightweight chat appeal. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,871 | 2,391,730 | Z.ai's GLM-5.2 MoE LLM, shipped with safetensors and conversational tooling. Its high likes and downloads signal strong demand for high-performance open-weight LLMs. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,042 | 2,639,756 | The primary DeepSeek-V4-Flash release, serving as the reference for fast open-weight chat. It has already become one of the most-downloaded text-generation models on this list. |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 424 | 1,570 | A compact text-generation model built on Qwen3.5/3.6 MoE lineage. Its 424 likes against relatively few downloads suggest strong community curiosity. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,754 | 12,102 | MiniMax's image-text-to-video diffusion model, supporting text-to-video and image-to-video generation. It anchors a fast-growing ecosystem of ComfyUI, LoRA, GGUF, and quantized derivatives. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,200 | 1,258,043 | Moonshot's multimodal image-text-to-text model, tagged compressed-tensors and feature-extraction. It leads this week's likes at 10,200, showing unusually strong early adoption. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 322 | 22,223 | Thinking Machines' small multimodal conversational model for image-text-to-text tasks. It packs multimodal abilities into a compact form and has already seen solid adoption. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 177 | 206 | NVIDIA's 11B voice-chat model for spoken dialogue, built on Nemotron/Llama research lineage. It is a specialized audio-language model worth watching despite low download counts. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 293 | 12,211 | Audio8's 0.6B text-to-speech preview based on ArkTTS. It reflects the trend toward compact open TTS systems. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 286 | 440,176 | Microsoft's MAGE-VL multimodal model for image-text-to-text. It has reached 440,176 downloads, indicating strong interest in Microsoft's vision-language work. |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,010 | 523,234 | Black Forest Labs' open FLUX.1-dev text-to-image model. It remains a staple with the highest likes on this digest, showing durability beyond new video releases. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,929 | 2,791,862 | Baidu's OCR model, using image-text-to-text and feature-extraction pipelines. It is the highest-download model on this digest at 2,791,862 downloads, making it a standout specialized release. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 519 | 16,961 | Kwaipilot's code-specialized model built on a Qwen3.5 MoE base with image-text-to-text capabilities. Its code focus and 519 likes make it a notable AI coding tool. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 158 | 1,511 | Mistral's 3B guardrail model for content safety and filtering. It is built with vLLM support and gives developers a lightweight safety layer. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 848 | 2,295,377 | Comfy-Org's single-file diffusion distribution of MiniMax-H3, including finetune references. Its 2,295,377 downloads make it a key bridge between MiniMax's video model and local ComfyUI users. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 545 | 145,105 | Unsloth's GGUF quantization of DeepSeek-V4-Flash-0731. It enables local llama.cpp deployment and has accumulated 145,105 downloads. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,652 | 2,087,189 | A community "uncensored/heretic" fine-tune of Qwen3.6-27B, packaged as GGUF by DavidAU. Its 2,087,189 downloads show a large appetite for de-censored local role-play models. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 337 | 0 | A ComfyUI-oriented INT8 ConvRot adaptation combining Qwen3-VL-32B and MiniMax-H3 components. It is brand new, with 337 likes and 0 downloads, but points to sophisticated multimodal fine-tuning. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 302 | 0 | A LoRA adapter for MiniMax-H3 text-to-video, also tagged text-to-audio/audio-video. It is fresh with 302 likes and no downloads yet, emphasizing the community's hunt for Turbo editions. |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 153 | 65,679 | GGUF quantizations of the Comfy-Org MiniMax-H3 single-file model. With 65,679 downloads, it is a popular option for running the video model in local/ComfyUI workflows. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 407 | 309,149 | A GGUF release of an uncensored Hermes-tuned Qwen3.6 MoE. It has earned 309,149 downloads, underlining strong demand for uncensored MoE chat models. |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 125 | 12,790 | LiquidAI's GGUF version of LFM2.5-2.6B. It brings Liquid's compact LLM to llama.cpp users, with 12,790 downloads. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 119 | 0 | A pruned MiniMax-H3 Turbo LoRA packaged for ComfyUI. It is a companion in the MiniMax-H3 ecosystem, with 119 likes and no downloads yet. |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 109 | 272,963 | A quantized/optimized MiniMax-H3 variant using NVFP4 and INT4/INT8 ConvRot. It already has 272,963 downloads, indicating strong demand for efficient video generation. |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 108 | 0 | A ComfyUI-oriented text-encoder model pairing Qwen3-VL-32B with MiniMax-H3 and NVFP4. It is very new (108 likes, 0 downloads) and shows the fine-tuning ecosystem's rapid iteration. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 222 | 3,394 | An experimental fine-tuned/compressed version of Qwen3.6's 35B-A3B MoE. It has 222 likes and 3,394 downloads, representing community experimentation with efficient MoE variants. |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 205 | 0 | A LoRA for Krea 2 text-to-image generation, with ComfyUI compatibility. It has 205 likes and no downloads yet, but is part of the fast-moving image-LoRA wave. |

## 3. Ecosystem Signal

Model ecosystems are consolidating around a few strong bases. MiniMax-H3 is becoming a standard for open video generation, as evidenced by ComfyUI, GGUF, LoRA, and NVFP4 spin-offs. DeepSeek V4-Flash is the leading efficient LLM family, with Unsloth quantizations driving local adoption. Qwen3.5/3.6 MoE is the preferred substrate for community fine-tunes, especially uncensored and role-play variants, while GLM-5.2 shows MoE remains a default architecture for frontier open-weight LLMs. Chinese labs (DeepSeek, Moonshot, Z.ai, Baidu, MiniMax) dominate high-download open-weight releases; Western labs contribute specialized and safety models from Mistral, NVIDIA, and Microsoft. Quantization is no longer an afterthought: GGUF, NVFP4, INT4/INT8, and "W2" variants appear within days. ComfyUI integration is a key success factor for video and image models. Overall, the Hub is shifting from "one big model" toward an ecosystem of base weights, optimized runtimes, and community adapters.

## 4. Worth Exploring

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — Worth studying not just as a video model but as the center of a full derivative stack: ComfyUI, GGUF, LoRA, and NVFP4 variants. It shows how a single release can generate an ecosystem within days.

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The week's highest-liked new multimodal model and a compressed image-text-to-text release. It is a strong candidate for evaluating optimized multimodal inference.

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — A fast text-generation checkpoint with huge downloads and Unsloth GGUF support. It is ideal for practical local LLM use and for understanding the "Flash" tier trend.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*