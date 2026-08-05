# Hugging Face Trending Models Digest 2026-08-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-05 01:26 UTC

---

## Today's Highlights

DeepSeek's V4-Flash family is the week's biggest story: the updated **0731** build pulled in 2,302 likes and 433k downloads, while the original **DeepSeek-V4-Flash** has surpassed 2.7M downloads. Moonshot's **Kimi-K3** is the most-liked model in the digest (10,012 likes) and is already being quantized by Unsloth, signaling rapid multimodal adoption. **MiniMax-H3** created immediate buzz for image-to-video generation, with ComfyUI and GGUF packages appearing even before the main repo registered tracked downloads. Demand is also broad outside LLMs — Baidu's **Unlimited-OCR** hit 2.7M downloads, and uncensored Qwen3.6 community GGUF variants, especially HauhauCS and DavidAU releases, dominate the fine-tune charts.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,820 | 2,234,662 | A large text-generation model using a sparse MoE design (`glm_moe_dsa`). Its 4,820 likes and 2.23M downloads show strong adoption for general chat and instruction tasks. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,302 | 433,284 | An updated Flash variant of DeepSeek V4 for efficient text generation and conversation. It is one of the fastest-rising new LLM releases this week, with 2,302 likes and strong download momentum. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,011 | 2,737,621 | The original DeepSeek-V4-Flash release, optimized for lightweight deployment while retaining strong reasoning and dialogue quality. With 2.7M downloads, it anchors the DeepSeek family in open-weight LLM popularity. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 920 | 82,912 | A text-generation model aimed at production-grade assistant and enterprise workloads. Its 920 likes and 82k downloads indicate solid developer interest in controllable, high-quality LLMs. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 664 | 37,256 | A compact 3B-class LLM from Nanbeige for efficient conversational text generation. It is trending as a small, deployable open-weight model with practical local-use appeal. |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 404 | 1,317 | A Qwen3.5-MoE-based language model from XYZAILab in a mini parameter range. It is one of two Aquila variants trending this week, reflecting interest in compact MoE derivatives. |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 358 | 1,388 | The larger "pro" sibling of Aquila, tagged for agentic-search scenarios. It shows how builders are creating task-specific LLM variants atop the Qwen3.5/3.6 MoE stack. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 153 | 47,393 | A compact 2.6B parameter liquid model focusing on efficient text generation. Its small footprint makes it attractive for edge, low-latency, and resource-constrained applications. |
| [LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 117 | 325 | A massive 750B-parameter MoE with 37B active parameters from LG AI. It is an early signal for very large open-weight MoE releases with strong multilingual ambitions. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,012 | 1,125,935 | A multimodal image-text-to-text model with compressed-tensors support and 10,012 likes — the most-liked model in this digest. Its 1.1M downloads show rapid adoption for vision-language reasoning and feature extraction. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,021 | 0 | MiniMax H3 is a powerful image-text-to-video generation model. Despite zero tracked downloads in this window, its 2,021 likes indicate strong anticipation or access-gated availability. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 602 | 2 | A ComfyUI packaging of MiniMax-H3 that lowers the barrier for local video generation. Its 602 likes despite near-zero downloads show eager tracking of ComfyUI integration. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 410 | 2,072 | A lightweight, CPU-friendly local text-to-speech model. Its popularity in the edge-AI niche points to strong demand for on-device speech synthesis. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 286 | 15,500 | A compact multimodal conversational model for image-plus-text inputs. It is trending as a smaller alternative to flagship VLMs, with 15.5k downloads in a short window. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 256 | 435,784 | Microsoft's open vision-language model for image-text-to-text tasks. With 435k downloads, it is one of the fastest-moving research releases from a major lab this week. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 247 | 11,276 | An early-preview 0.6B text-to-speech model based on the ArkTTS architecture. It is gaining momentum as an efficient, locally runnable speech synthesis option. |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 176 | 0 | Kroma is a LoRA-style adapter for Krea/ComfyUI image generation. Its zero downloads but 176 likes suggest a very new or gated release that is already catching creative-community attention. |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 134 | 2,243 | A 27B-class image-text-to-text chat model based on Qwen3.5 architecture. It is trending as a mid-sized option combining vision-language input with generative chat. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,881 | 2,703,366 | Baidu's OCR model handles image-text-to-text extraction at scale and dominates the specialized category with 2.7M downloads. Its 3,881 likes highlight OCR as a core enterprise use case for multimodal transformers. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 474 | 15,381 | A developer-focused code model built on the Qwen3.5 MoE architecture, designed for programming and image-code reasoning. With 474 likes and 15k downloads, it reflects the continued pull of coding-specialized open models. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,296 | 1,930,898 | One of the top trending community models this week, with 3,296 likes and 1.93M downloads. This GGUF vision-MoE fine-tune captures explosive interest in uncensored, aggressive-style Qwen3.6 variants. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,512 | 1,633,405 | A heavily fine-tuned, uncensored Qwen3.6 27B GGUF with MTP/imatrix optimizations by community creator DavidAU. It accumulates 1.63M downloads, showing the appetite for high-throughput local roleplay and uncensored models. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 470 | 111,678 | Unsloth's GGUF quants of DeepSeek-V4-Flash-0731 enable local CPU/GPU inference. This fast-follow release extends DeepSeek's reach into consumer hardware with 111k downloads. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 364 | 308,857 | A GGUF quantization of an uncensored Hermes-style fine-tune of Qwen3.6 35B A3B MoE. With 308k downloads, it demonstrates strong demand for consumer-friendly uncensored MoE models. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 304 | 170,055 | Unsloth's quantization of Kimi-K3 for local use, preserving multimodal capabilities. It brings the 10k-like Moonshot model into GGUF format with 170k downloads already. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 265 | 323,116 | A smaller 9B GGUF from DavidAU with uncensored fine-tuning and NEO imatrix/MTP enhancements. It is popular among local users wanting a compact but creative uncensored Qwen3.5 variant. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 192 | 2,987 | EschaLabs' MoE fine-tune of Qwen3.6 35B-A3B, aimed at optimized text generation. Its sparse active-parameter design is attractive for efficiency-focused deployments. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 188 | 0 | A ComfyUI-oriented INT8 conversion blending Qwen3-VL-32B with MiniMax-H3/HERETIC traits. This experimental community build targets multimodal generation inside ComfyUI workflows. |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 174 | 69,253 | An NVFP4-quantized version of Solar Open2 250B for efficient serving with vLLM. This release highlights the growing focus on 4-bit data formats for very large open-weight models. |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 103 | 40,010 | GGUF conversions of MiniMax-H3 for text-to-video on consumer hardware. This early quantization work is key to making the viral video model usable outside cloud APIs. |

## Ecosystem Signal

The ecosystem signal is clear: open-weight MoE architectures are the center of gravity. DeepSeek, GLM, Kimi, Qwen3.6, EXAONE, and Solar all ship MoE or sparse designs, with active-parameter counts increasingly highlighted. The community responds with a dense layer of GGUF, INT8, and NVFP4 quantizations almost immediately after any major release — Unsloth's DeepSeek and Kimi packs and nota-ai's Solar NVFP4 are representative. Fine-tuning culture is split between general-purpose assistants and explicitly "uncensored" or roleplay-oriented variants; Qwen3.6-based uncensored GGUF models repeatedly attracted over 1M downloads. Multimodal is also mainstreaming: OCR, vision-language chat, text-to-video, and local TTS all appear prominently. Zero-download but high-like entries, such as MiniMax-H3 and Kroma, suggest hype/access-gated launches are becoming a recurring pattern. Overall, open-weight releases from strong labs are quickly absorbed into local- and edge-friendly formats, making Hugging Face the primary distribution point for both frontier research and community adaptation.

## Worth Exploring

1. **moonshotai/Kimi-K3** — With 10,012 likes and 1.12M downloads, it is the most-liked model in this digest. Its compressed-tensors tag plus multimodal input make it a great sandbox for studying the next generation of vision-language models.
2. **zai-org/GLM-5.2** — A MoE flagship with 4,820 likes and 2.23M downloads, it provides a balanced, widely adopted open-weight base for chat and instruction tasks.
3. **baidu/Unlimited-OCR** — A specialized image-text-to-text OCR model that demonstrates clear real-world value; 2.7M downloads prove that domain-specific transformers can outpace general-purpose LLMs for document workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*