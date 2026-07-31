# Hugging Face Trending Models Digest 2026-07-31

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-31 01:46 UTC

---

## Today's Highlights

Kimi-K3 from moonshotai is the standout release, earning 9,000+ likes with a compressed-tensors multimodal architecture. Qwen/Qwen3.6-35B-A3B remains the download champion at 6.1M, and its open MoE design is the foundation for many GGUF and uncensored community variants, including HauhauCS's 1.8M-download flavor. zai-org's GLM-5.2 also shows frontier open-weight momentum at 4.7k likes, while Baidu's Unlimited-OCR and Microsoft's VibeVoice-ASR-BitNet highlight specialization in OCR and efficient speech recognition. The quantization ecosystem is expanding rapidly — NVFP4, ternary 2-bit, and GGUF conversions are appearing within days of base-model releases.

---

## 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 847 | 73,246 | Open-weight text-generation model with a distinctive "Laguna" architecture. Its 2.1 release is gaining pick-up in enterprise/agentic workloads, and Unsloth's GGUF pack points to strong local-inference interest. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 582 | 24,542 | A compact 3B LLM optimized for efficient deployment. Trending for offering strong quality in a small, practical package for edge/budget inference. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,682 | 1,527,760 | Flagship conversational LLM from the GLM lineage, using a sparse MoE design. Its 4.7k likes and 1.5M downloads make it one of the week's most adopted open-weight chat models. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 702 | 12,411 | Large open-weight LLM from Upstage at the 250B scale. Trending as a frontier-scale open release, with NVFP4 quantization already available from nota-ai. |
| [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 94 | 1,315 | AMD's 16B-parameter MoE model with 3B active parameters tuned for reasoning. Based on a DeepSeek-V3-style architecture, it draws attention for efficient compute-to-quality ratios. |

---

## 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,012 | 387,822 | Moonshot's image-text-to-text model with compressed-tensors support and feature-extraction capabilities. It leads weekly likes and signals strong demand for efficient multimodal models from non-Qwen providers. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 321 | 1,100 | Compact text-to-speech model designed for local CPU and edge-AI inference. Trending as part of a growing wave of small, practical TTS models optimized for on-device deployment. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,654 | 45,658 | Multimodal conversational model built on the `inkling_mm_model` architecture. Its high likes-to-downloads ratio indicates developer excitement about a capable open chat assistant with image input. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 126 | 225 | Preview text-to-speech model from Audio8 based on ArkTTS. At 0.6B parameters, it offers a lightweight path to high-quality speech synthesis. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 121 | 2,951 | Microsoft's vision-language model for multimodal understanding. Its inclusion shows continued enterprise investment in open multimodal foundations. |
| [owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 119 | 654 | Smaller sibling in the Inflect TTS family, also targeting CPU/edge inference. It gives developers a range of local speech-synthesis footprints alongside Micro-v2. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 117 | 840 | A smaller variant of Inkling for multimodal conversational AI. It complements the main release by offering a more resource-efficient option for the same task. |
| [Comfy-Org/Mage-Flow](https://huggingface.co/Comfy-Org/Mage-Flow) | Comfy-Org | 97 | 44,714 | Diffusion single-file model integrated with ComfyUI, released under MIT license. Trending for giving ComfyUI users a streamlined image-generation workflow. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,595 | 6,119,519 | Flagship open image-text-to-text MoE from Qwen with 35B total and 3B active parameters. At 6.1M downloads, it's the week's most downloaded model and the base for many community derivatives. |

---

## 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,583 | 2,598,659 | OCR model from Baidu for general-purpose text extraction from images. With 2.6M downloads, it is among the most-downloaded specialized tools on the platform this week. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 351 | 9,225 | Code-focused model built on a Qwen3.5 MoE base, designed for software development tasks. Its tags reflect mixed multimodal/code capabilities and a "Dev" workflow orientation. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 223 | 2,316 | Microsoft's 27B computer-use model based on Qwen3.5, aimed at GUI and agentic control. Trending as a notable open attempt at vision-driven computer automation. |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 120 | 3,864 | Automatic speech recognition model using BitNet precision, available in GGML/GGUF formats. Its bit-level quantization stands out for efficient ASR in local runtimes. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 351 | 57,439 | OCR-oriented image-text-to-text model based on Qwen3.5. Trending alongside Baidu's Unlimited-OCR as document understanding becomes a major adoption category. |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 240 | 9,820 | Small 1B security-focused text-generation model using a Granite MoE hybrid. Trending for catering to security workflows that need lightweight, auditable language models. |

---

## 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,035 | 955,767 | Community GGUF merge/fine-tune of a Qwen3.6-27B base with uncensored and "heretic" stylings. At 955k downloads, it is one of the most popular bespoke GGUF releases this week. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 209 | 12,178 | Unsloth's GGUF conversion of Kimi-K3 for convenient local execution. It rides the popularity of Moonshot's top-liked multimodal model while expanding its reach to llama.cpp users. |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 176 | 766 | Compressed-tensors version of Kimi-K3 from Unsloth, offering an alternative to GGUF for efficient inference. It mirrors the base model's feature-extraction and multimodal capabilities in a compressed format. |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 147 | 7,755 | NVFP4-quantized release of Solar-Open2-250B optimized for vLLM. Trending as an early example of 4-bit floating-point quantization applied to a 250B open-weight model. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 241 | 162,394 | Uncensored GGUF fine-tune of Qwen3.6-35B-A3B with Hermes-style chat training. It shows how quickly the community builds custom roleplay/local variants on a top open MoE base. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,190 | 1,803,090 | Vision-capable "aggressive" uncensored GGUF variant of Qwen3.6-35B-A3B. Its 1.8M downloads make it the most widely adopted community Qwen3.6 derivative this week. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,116 | 697,666 | 27B model quantized to ternary 2-bit precision for llama.cpp. The high like/download counts make a strong case that extreme low-bit quantization is moving from experiment to mainstream. |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 259 | 159,331 | Unsloth's GGUF pack for poolside's Laguna-S-2.1. Its 159k downloads reflect demand for quickly available quantized versions of newly released open LLMs. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 159 | 248,173 | Another DavidAU community GGUF merge, this time on a Qwen3.5-9B base with "Defiant" and "NEO Imatrix" customization. Its 248k downloads show sustained appetite for persona-style uncensored local models. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 94 | 201 | Escha-labelled safetensors MoE variant of Qwen3.6-35B-A3B. Although downloads are still low, it represents the long tail of specialized community training experiments on the Qwen3.6 base. |

---

## Ecosystem Signal

The trending list shows an open-weight inflection point. Qwen/Qwen3.6-35B-A3B is the download leader at 6.1M, while moonshotai/Kimi-K3 captures the most likes and zai-org/GLM-5.2 sustains multi-million-download momentum. The Qwen3.5/3.6 family has become the center of gravity for community derivatives, with uncensored and aggressive GGUF variants among the most downloaded models. Quantization is broadening: NVFP4 on Solar Open2-250B, ternary 2-bit on a 27B model, compressed-tensors from Unsloth, and BitNet ASR all indicate an efficiency-first ecosystem. Specialist models are maturing too — OCR, edge TTS, computer-use, and security-focused LLMs are carving out dedicated niches. Open-weight releases from Moonshot, Zhipu, Qwen, Upstage, AMD, and Microsoft dominate the top 30, while proprietary models are largely absent. Community fine-tuning and GGUF/quantized formats remain the strongest signal of real-world deployment and local adoption.

---

## Worth Exploring

- **moonshotai/Kimi-K3** — The week's most-liked release, and its compressed-tensors packaging makes it a useful case study in efficient multimodal serving and feature extraction.
- **Qwen/Qwen3.6-35B-A3B** — The base behind the week's biggest derivative wave; exploring it reveals why a 35B-total/3B-active MoE has become a sweet spot for local-first open multimodal models.
- **prism-ml/Ternary-Bonsai-27B-gguf** — A 27B model at ternary 2-bit precision with 697k downloads; it is the clearest signal that extreme quantization is becoming practical.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*