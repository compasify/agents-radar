# Hugging Face Trending Models Digest 2026-08-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-06 01:24 UTC

---

# Hugging Face Trending Models Digest — 2026-08-06

## 1. Today's Highlights

This week's chart is dominated by Chinese labs: Moonshot AI's **Kimi-K3** is the most-liked model (10,125 likes, 1.1M downloads), while DeepSeek's **V4-Flash** line and GLM-5.2 collectively pull millions of downloads. The biggest category surprise is **Baidu's Unlimited-OCR**, which turned OCR into a top-tier multimodal hit with 2.7M downloads. Video generation is also breaking through via **MiniMax-H3**, which quickly spawned ComfyUI ports and GGUF quantizations. Meanwhile, a wave of "uncensored" Qwen3.5/3.6 GGUF fine-tunes (DavidAU, LuffyTheFox) shows the community quantization ecosystem is as active as ever. Mixture-of-experts is now the default architecture across most new flagship releases, including LG's 750B **K-EXAONE-2.0**.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,125 | 1,125,935 | Moonshot AI's flagship multimodal conversational LLM with compressed-tensor support. The week's most-liked release, signaling very strong developer appetite for efficient, long-context assistants. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,849 | 2,234,662 | ZAI's MoE conversational model built on the glm_moe_dsa architecture. One of the most actively adopted open-weight LLMs this week, with 2.2M downloads. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,497 | 433,284 | Latest iteration of DeepSeek's flash-tier text-generation model. Pairs V4 performance with a faster inference profile and has already drawn 433K downloads. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,031 | 2,737,621 | The base DeepSeek-V4-Flash release and the most-downloaded model on the chart. Demand is driven by its strong open-weight reasoning performance and ecosystem support. |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 416 | 1,317 | A mini MoE model based on the Qwen3.5/3.6 architecture with image-text-to-text input support. Attracting attention as a lightweight entry point into the Aquila agentic line. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 285 | 47,393 | A compact 2.6B liquid foundation model for text generation. Trending as a small-but-capable option for resource-constrained and on-device deployments. |
| [LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 129 | 325 | Massive 750B MoE with 37B active parameters for text generation. Notable as one of the largest open-weight releases to trend this week, with a Korean-language focus. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 157 | 0 | A preview Mixture-of-Experts causal LM. Just published, with 0 downloads but immediate likes, indicating an early-access research release. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 156 | 25 | InclusionAI's hybrid-architecture (bailing_hybrid) flash model for fast conversational inference. Freshly published with custom code, still in the very early adoption phase. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,497 | 10,841 | MiniMax's image-text-to-video model distributed as a diffusers pipeline. Trending as a full text/image-to-video workflow, already spawning ComfyUI and GGUF ports. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 417 | 2,072 | A CPU-friendly, local text-to-speech model focused on edge-AI speech synthesis. One of the most-liked TTS releases this week, appealing to on-device audio use cases. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 308 | 15,500 | A small multimodal conversational model (inkling_mm_model) supporting image-text-to-text. Gains traction as a compact alternative with full transformers support. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 276 | 435,784 | Microsoft's visual-language multimodal model. Its 435K downloads show steady adoption for vision-language workloads despite modest weekly likes. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 274 | 11,276 | A lightweight 0.6B preview TTS model built on the arktts approach. Notable for feature-extraction-style audio support and low-resource deployment. |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 191 | 0 | A text-to-image LoRA for Krea 2 models with ComfyUI integration. Freshly released with 0 downloads but 191 likes, hinting at strong design-community demand. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 755 | 2 | Official ComfyUI port of MiniMax-H3 video generation. Nearly zero downloads yet, but 755 likes show immediate interest in node-based video workflows. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 124 | 80 | NVIDIA's 11B voice chat model for spoken dialogue, referencing multiple speech/audio papers. Early release targeting voice-agent applications. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,908 | 2,703,366 | Baidu's OCR model released as an image-text-to-text transformer. The biggest specialized hit this week — 3,908 likes and 2.7M downloads make OCR a standout category. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 496 | 15,381 | A code-focused MoE model (qwen3_5_moe) with image-text-to-text support. Trending for combining coding capability with vision-language input. |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 366 | 1,388 | Pro variant of the Aquila line with agentic-search capabilities. Positions agentic retrieval as a differentiator on top of the Qwen3.5/3.6 MoE base. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 131 | 166 | Mistral's lightweight 3B safety guardrail for vLLM deployments. Notable as the only dedicated safety model in the top 30. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,588 | 1,633,405 | Heavily fine-tuned Qwen3.6 27B GGUF from the "uncensored Heretic" line with MTP support. With 1.6M downloads, it is the most popular community fine-tune this week. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 385 | 308,857 | Uncensored Hermes-style GGUF of the Qwen3.6-35B-A3B MoE. 308K downloads show strong demand for role-play and uncensored MoE quantizations. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 282 | 323,116 | Compact 9B "Defiant" uncensored GGUF with MTP and imatrix variants. 323K downloads confirm the mid-size tier remains highly active. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 316 | 170,055 | Unsloth's GGUF quantization of Kimi-K3, making the flagship multimodal model locally runnable. 170K downloads in a short window. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 502 | 111,678 | Official unsloth GGUF quantization of DeepSeek-V4-Flash-0731. 111K downloads from users wanting local inference of the flash model. |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 137 | 40,010 | GGUF quantizations of the Comfy-Org MiniMax-H3 video model. Extends the H3 video pipeline to more accessible CPU-friendly formats. |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 145 | 2,243 | Qwen3.5-based 27B multimodal fine-tune with a permissive, uncensored positioning. Attracting attention for combining vision-language input with open behavior. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 210 | 2,987 | A Qwen3.6 35B-A3B MoE fine-tune with W2 compression and safetensors. Targeted at efficient local use of the active-parameter MoE class. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 284 | 0 | A Qwen3-VL-32B ComfyUI INT8 quantization with "H3" heritage. Zero downloads but 284 likes, riding both the ComfyUI and H3 naming waves. |

## 3. Ecosystem Signal

Several clear trends emerge from this week's top 30. **Chinese labs are setting the pace**: Moonshot (Kimi-K3), DeepSeek (V4-Flash), ZAI (GLM-5.2), Baidu (Unlimited-OCR), MiniMax (H3), and LG (K-EXAONE-2.0) account for most of the highest-liked and most-downloaded releases. **Mixture-of-experts is now the default architecture** for new flagships — GLM-5.2, K-EXAONE-2.0-750B-A37B, and the Qwen3.6-35B-A3B family all use MoE to balance capability and inference cost. The **quantization ecosystem is thriving**: unsloth's official GGUFs of DeepSeek and Kimi models complement a long tail of community "uncensored" fine-tunes (DavidAU, LuffyTheFox, empero-ai) that collectively pull millions of downloads. Multimodal convergence continues — LLMs increasingly ship as image-text-to-text models, while video generation (MiniMax-H3) is being rapidly absorbed into ComfyUI and GGUF workflows. Notably, no closed proprietary model appears in the top 30; the open-weight wave is accelerating. Small, efficient models (Inkling-Small, LFM2.5-2.6B, Inflect-Micro-v2) also signal growing interest in on-device and edge deployments.

## 4. Worth Exploring

1. **moonshotai/Kimi-K3** — The week's breakout model by likes (10,125). Its compressed-tensor support and 1.1M downloads make it the clearest signal of where efficient multimodal LLMs are heading; the unsloth GGUF port makes it immediately testable locally.

2. **baidu/Unlimited-OCR** — A reminder that OCR is a serious multimodal workload, not a sideshow. With 2.7M downloads and 3,908 likes, it's the most-downloaded specialized model on the chart and worth studying for document-understanding pipelines.

3. **MiniMaxAI/MiniMax-H3** — The fastest-rising video generation model this week, with an official ComfyUI port and community GGUFs already available. Worth exploring to understand how a single video model can quickly generate an entire tooling ecosystem.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*