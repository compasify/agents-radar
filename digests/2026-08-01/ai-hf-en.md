# Hugging Face Trending Models Digest 2026-08-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-01 01:47 UTC

---

## 1. Today’s Highlights

MoonshotAI’s **Kimi-K3** is the clear standout this week, leading all models with 9,281 likes as a compressed multimodal image-text-to-text release. **DeepSeek-V4-Flash** remains the most-downloaded trending model with 2,923,499 downloads, and the new `0731` checkpoint is already being converted to GGUF by Unsloth. Z.ai’s **GLM-5.2** and Baidu’s **Unlimited-OCR** also show strong open-weight traction with over 1.6M and 2.5M downloads, respectively. Community Qwen3.6 fine-tunes and GGUF quantizations — especially “uncensored” variants — dominate the fine-tuning category, along with extreme compression formats like 2-bit ternary and NVFP4. Edge-oriented TTS models from owensong and BitNet-based ASR from Microsoft signal growing demand for local, low-resource inference.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,012 | 0 | Latest dated checkpoint in the DeepSeek-V4-Flash series. It is brand new, so the trend is driven by announcement/paper attention rather than adoption yet. |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,708 | 1,651,533 | Z.ai’s flagship conversational MoE model. It is one of the most-liked and most-downloaded open-weight LLMs this week. |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 863 | 76,212 | A text-generation LLM in Poolside’s Laguna series. It is attracting steady developer interest for general and enterprise language workloads. |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 595 | 26,928 | A compact 3B LLM built for efficient text generation. Its steady likes reflect demand for smaller deployable models. |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 714 | 12,911 | Upstage’s 250B open-weight LLM. It is trending as a frontier open-source alternative, though its download volume is still growing. |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 352 | 579 | A text-generation variant built on Qwen3.5-MoE foundations. It is drawing early attention as a lightweight Aquila-family model. |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 326 | 869 | A larger Aquila variant focused on agentic-search use cases. It points to increasing specialization of open-weight LLMs for agent workflows. |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,923 | 2,923,499 | The main DeepSeek-V4-Flash release, with massive download momentum. Its conversational quality and speed make it one of the most widely tried models this week. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,281 | 493,481 | Moonshot’s flagship multimodal image-text-to-text model with compressed-tensor support. It is the highest-liked release this week by a wide margin. |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 348 | 1,449 | A local text-to-speech model optimized for CPU and edge AI. It is part of a growing wave of on-device speech synthesis models. |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 196 | 2,971 | Smaller variant of the Inkling multimodal conversational model. It offers a lower-cost entry point for image-text-to-text tasks. |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 150 | 5,650 | Microsoft’s vision-language model, complementing the Mage generation ecosystem. It is gaining traction for multimodal understanding and visual reasoning. |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 151 | 2,481 | A 0.6B text-to-speech preview built on ArkTTS. It represents a new compact generative-audio entry point. |
| [Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 121 | 802 | Smaller sibling of Inflect-Micro for ultra-light TTS. It reinforces the trend toward edge-optimized speech models. |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,664 | 57,259 | Thinking Machines’ full-size multimodal conversational model. It has strong weekly likes and a healthy download count. |
| [Mage-Flow](https://huggingface.co/Comfy-Org/Mage-Flow) | Comfy-Org | 106 | 60,162 | A ComfyUI single-file diffusion workflow based on Microsoft/Mage-Flow. Its download volume shows strong interest in easy image/video generation pipelines. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,663 | 2,513,603 | Baidu’s open OCR model with massive production adoption. It is one of the most-downloaded specialized models this week. |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 371 | 10,241 | A code-focused model built on Qwen3.5-MoE with multimodal capabilities. Its “Dev” tag signals a development checkpoint for coding tasks. |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 234 | 2,726 | Microsoft’s computer-use model based on a Qwen3.5 backbone. It is gaining attention as a foundation for GUI automation and agentic tasks. |
| [VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 134 | 5,464 | Microsoft’s BitNet-based automatic speech recognition model, distributed in GGML/GGUF formats. It pushes efficient ASR toward local and edge deployment. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,147 | 1,119,057 | A heavily fine-tuned, uncensored Qwen3.6 GGUF with MTP support. It has become one of the most-used community GGUF repackages this week. |
| [Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 228 | 36,180 | Unsloth’s GGUF conversion of Kimi-K3. It makes the trending multimodal model accessible for local inference. |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 183 | 0 | Day-one GGUF release for the DeepSeek-V4-Flash-0731 checkpoint. It is positioned for local users waiting to run the latest Flash model. |
| [Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 215 | 1,044 | Unsloth’s optimized release of Kimi-K3 for faster training and inference. It extends the Kimi-K3 wave into the unsloth community ecosystem. |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 270 | 212,426 | Community “uncensored” MoE GGUF based on Qwen3.6-35B-A3B. It has strong download momentum for chat and roleplay use cases. |
| [Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 18,531 | NVFP4-quantized version of Solar-Open2-250B optimized for vLLM. It demonstrates enterprise-grade 4-bit floating-point quantization. |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,125 | 712,835 | A 27B ternary/2-bit GGUF built with llama.cpp. It is one of the most striking examples of extreme quantization, with very high download volume. |
| [Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 107 | 599 | An experimental weight variant of Qwen3.6-35B-A3B MoE. It shows the community exploring specialized weight recipes beyond standard fine-tunes. |
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,205 | 1,835,931 | A highly popular uncensored GGUF of Qwen3.6 MoE with vision support. Its 3.2K likes and 1.8M downloads make it a top community release. |
| [Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 174 | 261,856 | Another DavidAU GGUF based on Qwen3.5-9B with MTP and Imatrix. It provides a highly tuned, uncensored 9B option for local inference. |

## 3. Ecosystem Signal

Open-weight labs — Moonshot, DeepSeek, Z.ai, Baidu, Microsoft, and Upstage — are releasing frontier-capable models, and the Hugging Face community is responding with immediate quantization and fine-tune activity. DeepSeek V4 and Kimi K3 are the clear momentum leaders, while GLM-5.2 and Solar-Open2-250B reinforce the shift toward larger MoE architectures. Qwen3.6 is becoming the default base for community fine-tunes, with many “uncensored” and character-tuned GGUF variants accumulating millions of downloads. Quantization is moving beyond standard 4-bit: Ternary-Bonsai’s 2-bit ternary weights and Nota’s NVFP4 conversion of Solar-Open2-250B signal a push toward extreme compression for local deployment. Unsloth is acting as the ecosystem’s “publish layer” for GGUF and optimized versions of major releases. Finally, edge speech models from owensong and Microsoft show that TTS and ASR are being optimized for CPU and BitNet-style efficient inference. The overall signal is a maturing open-weight ecosystem where frontier labs release quickly and the community rapidly productizes via fine-tunes, GGUF, and specialized formats.

## 4. Worth Exploring

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The highest-liked model of the week and a compressed multimodal release. It is worth studying for its compressed-tensor approach and what it signals about efficient vision-language deployment.
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — A 27B ternary/2-bit GGUF with over 700K downloads. It is an excellent case study for understanding the trade-offs of extreme quantization.
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — With 2.5M downloads and widespread production use, it is a de facto open OCR benchmark and a strong candidate for document-processing pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*