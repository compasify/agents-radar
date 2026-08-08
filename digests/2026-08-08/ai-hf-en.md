# Hugging Face Trending Models Digest 2026-08-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-08 00:46 UTC

---

# Hugging Face Trending Models Digest — 2026-08-08

## Today's Highlights

This week's trending list is defined by open-weight multimodal generation, especially the MiniMax-H3 video ecosystem: the base model, a ComfyUI single-file conversion, Turbo LoRAs, GGUF packs, and mixed-precision quantizations appear across multiple categories. Frontier open LLMs also remain strong, with DeepSeek-V4-Flash and GLM-5.2 reaching very high download counts, while Kimi-K3 leads new multimodal releases at 10,282 likes. ComfyUI compatibility is a major adoption driver — Comfy-Org/MiniMax-H3 has 3,139,920 downloads, and many H3/Qwen3-VL ComfyUI packs are trending. Community fine-tunes and quantizations, particularly "uncensored"/"Heretic" Qwen3.6 GGUF variants, occupy a substantial share of the list.

## 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,744 | 702,709 | DeepSeek's fast text-generation chat model, optimized for conversational use with safetensors weights. Its 702,709 downloads signal very strong adoption for a Flash-class open-weight LLM. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 379 | 77,973 | A compact 2.6B text-generation model from Liquid AI, positioned for efficient local and edge inference. The high download count shows sustained demand for small, capable LLMs. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 226 | 686 | An early mixture-of-experts causal LM preview from deepgrove. It is trending as a new architecture to watch, though still in early adoption with only 686 downloads. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 203 | 3,065 | A flash-size conversational model from inclusionAI, using custom `bailing_hybrid` code and safetensors. It is trending as a lightweight open-weight chat option, though early in its adoption curve. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,887 | 2,430,330 | A large open-weight conversational LLM from Z.ai with a Mixture-of-Experts/DSA design. With 4,887 likes and 2,430,330 downloads, it is one of the most widely adopted open chat models on this list. |

## 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,953 | 18,112 | MiniMax's flagship image-text-to-video model, supporting both text-to-video and image-to-video via diffusers. It anchors this week's largest ecosystem trend, with many community tools building around it. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 936 | 3,139,920 | A diffusion single-file version of MiniMax-H3 packaged for ComfyUI. Its 3,139,920 downloads make it the most practical distribution point for local ComfyUI video generation. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,282 | 1,308,186 | Moonshot's image-text-to-text multimodal model, with compressed-tensor support and conversational/feature-extraction capabilities. It is the highest-liked new multimodal release this week at 10,282 likes. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 228 | 359 | NVIDIA's 11B voice-chat model for spoken interaction, linked to NemotronLabs research. It is an early but notable open-weight voice assistant release with research-grade arxiv references. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 128 | 0 | A diffusers-based Turbo variant of MiniMax-H3 supporting image-to-video, text-to-video, and video-to-video. It is trending as the community explores faster H3 video inference, though downloads are still 0. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 306 | 12,633 | A 0.6B text-to-speech preview using the ArkTTS architecture. Its 306 likes and 12,633 downloads show growing interest in compact open-weight speech synthesis. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 302 | 456,140 | Microsoft's image-text-to-text vision-language model, released with transformers and safetensors. With 456,140 downloads, it is one of the most-used multimodal models on this week's list. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 336 | 25,340 | A compact image-text-to-text conversational model from thinkingmachines. It is trending as an efficient multimodal assistant, with 25,340 downloads and 336 likes. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 115 | 0 | A ComfyUI-facing distribution of MiniMax-H3 from well-known ComfyUI developer Kijai. It is a reference/tooling repo for local H3 workflows, with 115 likes and 0 downloads. |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,028 | 512,841 | Black Forest Labs' leading open text-to-image diffusion model. FLUX remains a constant powerhouse in open image generation, with 14,028 likes and 512,841 downloads this week. |

## 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,954 | 2,836,694 | Baidu's OCR and document-understanding model with image-text-to-text and feature-extraction capabilities. Its 2,836,694 downloads make it one of the most heavily used specialized releases on the list. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 184 | 2,480 | Mistral's lightweight 3B guardrail/safety model, optimized for vLLM deployments. It is trending because open-weight model deployment increasingly requires built-in moderation. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 531 | 17,399 | A code-specialized MoE model built on a Qwen3.5-MoE base, with text-generation and image-text-to-text support. It is gaining developer traction in open-weight coding assistants. |

## 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,707 | 2,217,339 | A heavily merged, community-tuned GGUF variant of Qwen3.6 27B with an uncensored/Heretic-style personality. Its 2,217,339 downloads show one of the largest local fine-tune followings this week. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 415 | 0 | A LoRA adapter intended to enable MiniMax-H3 Turbo behavior, with additional text-to-audio and audio-video tags. It has 415 likes but 0 downloads, so it is trending mainly as a newly discovered community release. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 586 | 161,253 | Unsloth's GGUF conversion of DeepSeek-V4-Flash for llama.cpp and local inference. Its 161,253 downloads make it the main quantized gateway to the DeepSeek V4 Flash model. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 378 | 0 | An INT8 ComfyUI-oriented quantization/merge of Qwen3-VL-32B with H3 and Heretic modifications. It illustrates the community's push for low-precision multimodal/ComfyUI pipelines, with 378 likes and 0 downloads. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 177 | 0 | A pruned, ComfyUI-ready LoRA for MiniMax-H3 Turbo. It is part of the rapidly expanding MiniMax-H3 fine-tuning wave, with 177 likes and 0 downloads. |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 168 | 87,870 | GGUF quantizations of the Comfy-Org MiniMax-H3 video model for alternate runtimes or lower-memory use. The 87,870 downloads demonstrate significant demand for quantized video-generation weights. |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 144 | 31,489 | Official llama.cpp GGUF version of Liquid AI's LFM2.5-2.6B. It lowers the barrier to running the compact model on CPU/edge hardware, gathering 31,489 downloads. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 425 | 332,992 | A Qwen3.6 35B-A3B MoE GGUF with Hermes/uncensored tuning. Its 332,992 downloads make it a major community release among local Qwen3.6 merges. |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 127 | 452,420 | Mixed-precision quantizations of MiniMax-H3 using NVFP4, INT4, and INT8 formats. With 452,420 downloads, it shows strong demand for running H3 video generation in constrained VRAM. |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 221 | 0 | A text-to-image LoRA for the Krea2/Krea ecosystem, with ComfyUI compatibility. It has 221 likes but 0 downloads, indicating an early-stage release gaining visibility among image-generation users. |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 121 | 0 | An NVFP4 text-encoder/component release pairing Qwen3-VL with MiniMax-H3 in ComfyUI workflows. It reflects the push toward high-efficiency multimodal video generation; 121 likes, 0 downloads. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 112 | 0 | A community fine-tune of MiniMax-H3 for text-to-video, licensed Apache-2.0 and endpoints-compatible. It stands out as an open alternative in the H3 video ecosystem, with 112 likes and 0 downloads. |

## Ecosystem Signal

Open-weight models dominate this week's list, with almost every entry shipping safetensors, GGUF weights, or diffusers files. The MiniMax-H3 family is the clearest momentum story: the base video model, ComfyUI single-file conversion, Turbo LoRAs, GGUF packs, and NVFP4/INT4 quantizations all appear in this digest — and Comfy-Org alone has 3,139,920 downloads. On the LLM side, DeepSeek-V4-Flash and GLM-5.2 highlight strong demand for open Mixture-of-Experts chat models, with millions of combined downloads. Multimodal releases are broadening from image-text-to-text models like Kimi-K3 and Mage-VL to audio/voice systems like NVIDIA VoiceChat and Audio8 TTS. Quantization and fine-tuning activity is intense: Qwen3.6 "Heretic"/"uncensored" GGUF merges and multiple H3 precision packs show that local deployment and ComfyUI compatibility are major adoption drivers. The list also shows a persistent niche for uncensored/community fine-tunes alongside official releases from Microsoft, NVIDIA, Baidu, and Mistral.

## Worth Exploring

1. **Comfy-Org/MiniMax-H3** — The highest-download model on the list at 3,139,920. It is the clearest example of how a ComfyUI packaging layer can turn a base video model into a practical local ecosystem.

2. **deepseek-ai/DeepSeek-V4-Flash-0731** — The base model behind 702,709 downloads and an expanding GGUF ecosystem. It is a strong benchmark for fast, open-weight conversational LLM adoption.

3. **moonshotai/Kimi-K3** — With 10,282 weekly likes, it is the most-liked new multimodal release outside FLUX.1-dev. It is worth studying for compressed-tensor serving, image-text conversation, and open multimodal LLM design.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*