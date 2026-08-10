# Hugging Face Trending Models Digest 2026-08-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-10 00:52 UTC

---

## 1. Today's Highlights

Today’s HF trends are led by a perfect storm around **MiniMax-H3**: the official video model has 3.2k likes, its Comfy-Org single-file port has accumulated 4.9M downloads, and a wave of LoRA, GGUF, INT4, and NVFP4 variants is already forming. On the LLM side, **DeepSeek-V4-Flash-0731** and **GLM-5.2** are the two official open-weight releases with the strongest pull, while **Kimi-K3**’s 10.4k likes shows that Moonshot’s compressed multimodal model has captured wide researcher attention. **Baidu’s Unlimited-OCR** stands out as a practical vision-language utility with 2.9M downloads, and **FLUX.1-dev** remains the most-liked image model on the hub. Overall, the trending signal is shifting toward video, multimodal MoE, and local quantization.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,945 | 868,576 | DeepSeek’s open-weight Flash-tier conversational LLM. It is one of the most downloaded models this cycle and is already being broadly quantized by the community. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 452 | 85,651 | A compact 2.6B liquid-model LLM from Liquid AI. It offers an efficient text-generation alternative and is also available in GGUF format for local use. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 289 | 1,089 | A mixture-of-experts causal LM preview from an emerging lab. Its low download count and “preview” status suggest an early but promising open-weight release. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 245 | 4,747 | A conversational text-generation model with custom code and hybrid architecture. It targets efficient “flash” serving and is gaining early community traction. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,914 | 2,488,397 | A major open-weight GLM release with MoE architecture and chat capabilities. It is one of the highest-liked and most-downloaded LLMs in this trend set. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,245 | 35,295 | Official MiniMax image-text-to-video diffusion model. It supports text-to-video, image-to-video, and combined image-text-to-video generation, and anchors a rapidly growing video ecosystem. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,072 | 4,947,943 | ComfyUI single-file packaging of the MiniMax-H3 model. With 4.9M downloads, it is the dominant distribution point for using H3 inside ComfyUI workflows. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,398 | 1,456,459 | Moonshot AI’s image-text-to-text model using compressed tensors and feature extraction. It is one of the most-liked multimodal releases on the hub, reflecting huge interest in Kimi’s frontier capabilities. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 260 | 543 | NVIDIA’s voice-chat model for interactive speech and dialogue. It is an early open-weight voice-focused entry backed by multiple NVIDIA research papers. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 233 | 0 | Kijai’s ComfyUI implementation for MiniMax-H3. It is a companion repo designed to enable H3 workflows in ComfyUI. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 233 | 6,117 | A diffusers-based image-to-video variant of MiniMax-H3 Turbo. It supports t2v, i2v, and r2v generation and is a popular community-modified H3 release. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 169 | 0 | An experimental ComfyUI build for MiniMax-H3. It serves as a testbed for upcoming H3 workflows and features. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 333 | 13,132 | A preview text-to-speech model built on the ArkTTS architecture. It is a compact open-weight TTS option with growing interest in the audio space. |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 121 | 482 | A Qwen3.5-MoE-based image-text-to-text conversational model. It represents a new wave of multimodal MoE releases from emerging labs. |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,059 | 487,171 | Black Forest Labs’ flagship text-to-image diffusion model. It remains the most-liked model in this trend set and the default open image-generation reference point. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 323 | 461,150 | Microsoft’s image-text-to-text multimodal model. It has strong download momentum and signals continued enterprise interest in general-purpose vision-language assistants. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 211 | 5,651 | Mistral’s compact 3B safety guardrail model. It is specialized for content moderation and integrates cleanly with vLLM serving. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,986 | 2,889,062 | Baidu’s OCR-centric image-text-to-text model. It is one of the most adopted specialized vision-language models this cycle, with nearly 2.9M downloads. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 552 | 18,574 | A Qwen3.5-MoE-based code generation model from Kwaipilot. It targets developer workloads and is gaining traction among coding-focused users. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 544 | 0 | A community LoRA adapter for MiniMax-H3 Turbo. It targets text-to-video and audio-video workflows, showing the rapid fine-tuning ecosystem forming around H3. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,808 | 2,390,692 | A community GGUF fine-tune of Qwen3.6 with uncensored and roleplay-oriented tuning. Its 2.4M downloads signal strong demand for open-format “de-constrained” conversational models. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 418 | 0 | An INT8 Qwen3-VL derivative for ComfyUI with H3-inspired naming. It has generated significant hype despite no downloads yet. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 627 | 188,761 | Unsloth’s GGUF quantization of DeepSeek-V4-Flash. It makes the LLM practical for local llama.cpp inference and is one of the fastest-adopted quantized LLM releases. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 231 | 0 | A pruned LoRA adapter for MiniMax-H3 Turbo packaged for ComfyUI. It reflects the rapid proliferation of H3-specific adapters. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 231 | 0 | A community text-to-video fine-tune of MiniMax-H3. It is endpoints-compatible and represents the creative/NSFW fine-tuning niche already growing around H3. |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 188 | 160,747 | GGUF quantizations of MiniMax-H3 based on the Comfy-Org single-file format. The 160k downloads reflect strong demand for lightweight H3 video model runtimes. |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 174 | 68,468 | Official GGUF version of LiquidAI’s 2.6B model. It brings the Liquid LFM2.5 family to local CPU and llama.cpp users. |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 155 | 511,473 | A quantized MiniMax-H3 variant using NVIDIA NVFP4 and INT4/INT8 precision. It has become the leading memory-reduced H3 option with over 500k downloads. |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 143 | 0 | An NVFP4 quantized Qwen3-VL-32B text-encoder paired with MiniMax-H3. It exemplifies the cross-model hybrid integrations popular in the H3 ecosystem. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 454 | 396,282 | A Qwen3.6-MoE GGUF with Hermes and uncensored tuning. Its 396k downloads show broad appetite for high-parameter MoE quantizations. |

---

## 3. Ecosystem Signal

The dominant ecosystem signal this cycle is **video generation + ComfyUI**. MiniMax-H3 is no longer just an official model: it is a platform with a single-file ComfyUI distribution, experimental builds, LoRA adapters, GGUF quantizations, and NVIDIA-precision variants all appearing simultaneously. This is a sign that diffusion-video workflows are becoming as modular and community-driven as LLMs.

On the text side, open-weight labs are releasing large models at a rapid pace: DeepSeek-V4-Flash, GLM-5.2, Kimi-K3, and several Qwen3.5/3.6 derivatives are all trending. Proprietary models are largely absent from the top of HF, confirming that the open-weight ecosystem remains the primary source of community experimentation.

Quantization and fine-tuning activity is intense. Unsloth’s DeepSeek-V4 GGUF is already widely downloaded, Qwen “uncensored” GGUF fine-tunes continue to attract millions of downloads, and MiniMax-H3 quantizations are multiplying. The overall pattern: frontier capabilities are quickly converted into locally runnable, ComfyUI-friendly, and often highly specialized community artifacts.

---

## 4. Worth Exploring

For immediate hands-on use, **MiniMaxAI/MiniMax-H3** plus the **Comfy-Org/MiniMax-H3** port is the most valuable thing to study right now — the combination of official video-generation quality, a 4.9M-download ComfyUI path, and a fast-growing quantization ecosystem makes it the clearest multimodal trend to follow.

For LLM practitioners, **deepseek-ai/DeepSeek-V4-Flash-0731** is a must-try: it combines strong open-weight performance, a “Flash” efficiency profile, and immediate local deployment options through **unsloth/DeepSeek-V4-Flash-0731-GGUF**.

For a practical specialized model, **baidu/Unlimited-OCR** stands out — nearly 2.9M downloads and a unique OCR-plus-vision-language capability make it an immediate utility for document and image workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*