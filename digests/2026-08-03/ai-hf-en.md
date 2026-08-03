# Hugging Face Trending Models Digest 2026-08-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-03 01:46 UTC

---

# Hugging Face Trending Models Digest — 2026-08-03

## Today's Highlights

Moonshot's **Kimi-K3** leads the week with 9,640 likes, establishing a multimodal image-text-to-text model as the Hub's biggest attention magnet. **DeepSeek-V4-Flash** is the download champion at 2,785,810 downloads, while Z.ai's **GLM-5.2** and Baidu's **Unlimited-OCR** also exceed 2M downloads. The derivative ecosystem is unusually active: Qwen3.6 GGUF fine-tunes, uncensored MoE variants, and NVFP4 quantization of Solar-Open2-250B all made the top 30. Audio also gained ground, with Inflect-Micro-v2, Audio8 TTS, and Microsoft's BitNet ASR signaling wider interest in local speech models.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,733 | 156,173 | The latest iterative checkpoint in DeepSeek-V4-Flash, released on 2026-07-31 and tied to arxiv:2606.19348. It trends as a text-generation workhorse with strong weekly likes and download momentum. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,755 | 2,050,533 | Z.ai's open-weight conversational text-generation model with MoE/DSA architecture. With 2.05M downloads, it is one of the most adopted open LLMs this week. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 627 | 33,042 | A compact 3B LLM positioned for efficient text generation and local deployment. Its steady adoption suggests ongoing demand for small, lightweight language models. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 878 | 80,102 | A text-generation update in poolside's Laguna model line. It attracted 878 likes and 80K downloads in a competitive week. |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 366 | 903 | A Qwen3.5-MoE-based text-generation model with qwen3.6 tags and image-text-to-text metadata. Its mini form factor targets lightweight agentic or multimodal experiments. |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 335 | 1,094 | The larger Aquila variant, also built on Qwen3.5-MoE and tagged for agentic search. It shows early community interest in Qwen3.6-derived search/agent models. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 119 | 2,550 | A community MoE model based on Qwen3.6-35B-A3B, with W2 indicating customized weights or behavior. It is part of a wave of Qwen3.6 MoE variants. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 719 | 14,863 | Upstage's 250B open-weight text-generation model and the source for NVFP4 and other quantized derivatives. It is a major large-model release in the Solar-Open2 family. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,958 | 2,785,810 | The flagship DeepSeek-V4-Flash model is the week's most downloaded model at 2.79M. It anchors a broad ecosystem of GGUF, quantized, and Flash-0731 derivatives. |
| [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 121 | 1,957 | AMD's Instella MoE reasoning model, built with DeepSeek-V3 architecture. It underscores hardware vendors' growing investment in open-weight LLMs. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,640 | 837,202 | Moonshot's multimodal image-text-to-text model is the clear weekly standout with 9,640 likes. Its compressed-tensors and feature-extraction tags point to optimized multimodal representation and inference. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,778 | 2,536,284 | Baidu's image-text-to-text model specialized for OCR, with 2.54M downloads. It reflects strong demand for document and visual understanding tools on the Hub. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 227 | 6,839 | A small multimodal model in the Inkling series designed for image-text-to-text tasks. Its compact size and conversational tags make it easy to experiment with. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 371 | 1,825 | A local-first text-to-speech model optimized for CPU and edge inference. Its micro size and edge-ai focus stand out in a week dominated by LLMs. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 187 | 272,148 | Microsoft's multimodal vision-language model for image-text-to-text. Despite modest weekly likes, it accumulated 272K downloads, indicating sustained usage. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 179 | 4,314 | A 0.6B text-to-speech preview from Audio8 based on ArkTTS. It signals continued energy around small, accessible speech-synthesis models. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 250 | 2,938 | Microsoft's 27B image-text-to-text model with computer-use tags, pointing to GUI and agent automation. It is an interesting early fusion of multimodal understanding and computer control. |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 126 | 0 | A text-to-image LoRA for KREA 2, packaged for ComfyUI workflows. It is an early ecosystem play around new image-generation base models. |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 96 | 1,279 | A community Qwen3.5-based 27B image-text-to-text model. Its multimodal and qwen3.5 tags place it in the expanding Qwen derivative family. |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 150 | 8,468 | Microsoft's BitNet-based automatic speech recognition model released in GGUF/GGML formats. It is remarkable for applying low-bit quantization to speech recognition. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 402 | 13,164 | A developer-oriented code model built on Qwen3.5-MoE architecture and carrying image-text-to-text tags. It targets code generation and possibly multimodal coding assistance. |
| [LiquidAI/LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) | LiquidAI | 89 | 6,957 | Liquid AI's 350M fill-mask encoder, useful for embeddings and representation learning. It demonstrates continued interest in small specialist encoders alongside large LLMs. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,340 | 1,372,285 | DavidAU's Qwen3.6 27B GGUF is an uncensored, fine-tuned creative/local model with MTP support. It has 1.37M downloads, making it one of the most successful Qwen3.6 community builds. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 340 | 48,707 | Unsloth's GGUF conversion of the DeepSeek-V4-Flash-0731 checkpoint. It lets users run the Flash model locally with reduced memory requirements. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 250 | 88,481 | Unsloth's GGUF conversion of Moonshot's Kimi-K3 multimodal model. With 88K downloads, it is a leading quantized option for Kimi-K3 enthusiasts. |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 225 | 1,277 | Unsloth's compressed-tensor re-release of Kimi-K3, optimized for efficient deployment. It has fewer downloads than the GGUF variant but targets the same local-inference audience. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 300 | 259,237 | A Qwen3.6-35B-A3B MoE fine-tune with Hermes/uncensored styling and GGUF packaging. Its 259K downloads illustrate community demand for role-play and unrestricted local models. |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 153 | 68,199 | NVFP4-quantized Solar-Open2-250B optimized for vLLM inference. It shows how third-party labs are making 250B-class open weights practical for deployment. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 209 | 292,511 | A compact uncensored GGUF fine-tune based on Qwen3.5-9B with MTP and Imatrix optimizations. It is a popular choice for local, uncensored creative generation. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,243 | 1,892,654 | A high-profile uncensored Qwen3.6-35B-A3B GGUF with aggressive persona and vision tags. Its 1.89M downloads and 3,243 likes make it a breakout community release. |

## Ecosystem Signal

Open-weight momentum is unmistakable this week: top entries come from Moonshot, DeepSeek, Z.ai, Microsoft, Upstage, AMD, and Baidu, even as fine-tuned community variants outperform on download volume. The Qwen3.6 family appears to be the most active derivative base, with uncensored GGUF and MoE fine-tunes from DavidAU, LuffyTheFox, HauhauCS, and EschaLabs attracting millions of downloads. Kimi-K3 is the strongest individual signal: its official multimodal release plus Unsloth converters and compressed variants suggest that multimodal model efficiency is becoming as important as raw language capability. Quantization is also diversifying beyond GGUF: nota-ai's NVFP4 Solar-Open2-250B targets vLLM serving, while VibeVoice-ASR-BitNet applies BitNet to speech recognition. Meanwhile, small specialist audio models and embedding/encoder releases are carving out niches. Overall, the Hub is being shaped by open-weight model families that combine frontier-quality outputs with aggressive quantization and local-first deployment.

## Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The top-liked model of the week. Its multimodal pipeline, compressed-tensors tags, and 837K downloads make it the best case study for where open multimodal modeling is headed.

2. **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — The most-downloaded model at 2.79M and anchor for Flash-0731 and GGUF derivatives. Studying it helps map the lifecycle from a flagship release to community quantizations.

3. **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)** — A BitNet-based ASR model in GGUF/GGML formats. It highlights the next frontier: applying extreme low-bit quantization to domains beyond text generation, especially edge speech.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*