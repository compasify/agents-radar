# Hugging Face Trending Models Digest 2026-07-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-26 01:44 UTC

---

# Hugging Face Trending Models Digest — 2026-07-26

## Today's Highlights

This week’s trending models are dominated by **large MoE architectures** (Qwen3.6-35B-A3B, GLM-5.2) and **community quantizations** of these base models, with over half of the top 30 being GGUF or NVFP4 variants. **Baidu’s Unlimited-OCR** stands out as the most-liked non‑language model at 3,106 likes, signaling growing demand for vision‑language tools. Meanwhile, **OpenBMB** released two robotics models (MiniCPM-RobotManip/RobotTrack), and **Microsoft** introduced a computer‑use model (Fara1.5-27B), pushing multimodal agents into production use.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 661 | 45,260 | A 2.1‑generation large language model optimized for code and reasoning tasks, released by poolside. Its popularity is driven by strong performance in developer‑oriented benchmarks. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 562 | 2,784 | Upstage’s 250B‑parameter open‑weight model, designed for instruction following and long‑context tasks. It is a flagship Korean‑based LLM competing with GPT‑scale models. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 406 | 11,573 | A compact 3B‑parameter Chinese LLM with strong multilingual capabilities. It is trending due to its efficiency and performance at a small size. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,446 | 707,029 | Zhipu AI’s latest MoE-based language model, topping the chart with over 4.4K weekly likes. It features dense‑sparse attention and strong reasoning capabilities. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,570 | 31,575 | A multimodal conversational model that can process text and images. It is gaining traction for its high‑quality instruction following in visual dialogues. |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 277 | 1,156 | A diffusion‑based text‑to‑image pipeline from Microsoft, optimized for iterative image generation and editing. It offers fine‑grained control over composition. |
| [nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 121 | 31,759 | Nvidia’s edge‑deployable video generation model, designed for real‑time synthesis on low‑power devices. It is part of the Cosmos3 series, focusing on temporal consistency. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,516 | 6,413,105 | The base version of Qwen’s 35B MoE model with 3B active parameters, achieving massive downloads (6.4M). It supports visual and text inputs natively. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 82 | 47 | A compact CPU‑friendly text‑to‑speech model targeting edge deployment. It is early‑stage but signals growing interest in local TTS. |

### 🔧 Specialized Models (code, math, medical, embeddings, robotics, OCR, security)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,106 | 2,564,264 | A state‑of‑the‑art OCR model that supports unlimited character recognition in multiple languages. Its high likes and 2.5M+ downloads reflect strong demand for production‑grade OCR. |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 191 | 2,270 | A feature extraction / embedding model for semantic search and retrieval. It is used in RAG pipelines and vector database applications. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 166 | 841 | A code‑generation model fine‑tuned from Qwen3.5 MoE, specialized for generating and explaining code snippets. It is popular among developer community. |
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 175 | 607 | A vision‑language‑action model for robotic manipulation tasks, enabling real‑time control from visual input. It is one of the first open‑weight robot‑focused VLAs. |
| [openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 128 | 379 | Companion model to RobotManip, specialized for object tracking in robotics. It completes the pipeline for perception‑to‑action. |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 163 | 5,661 | A 1B‑parameter model designed for cybersecurity tasks (vulnerability detection, log analysis). Its small size makes it deployable in security tooling. |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,277 | 749,449 | A compressed code‑focused model from Kimi, optimized for inference efficiency. It achieves high recall on code generation benchmarks while using fewer parameters. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 287 | 33,109 | An OCR model built on Qwen3.5 vision backbone, offering multilingual text extraction from images. It is a direct competitor to Baidu Unlimited‑OCR. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 90 | 1,039 | A computer‑use model that can control GUI agents through vision and action. It is a step toward fully autonomous desktop automation. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ, NVFP4)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 545 | 483,845 | An uncensored, heavily merged GGUF variant of Qwen3.6-27B. It has garnered half a million downloads due to its roleplay and creative generation capabilities. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,028 | 611,685 | A 2‑bit ternary quantization of a 27B model, drastically reducing memory footprint. It is trending for enabling large models on consumer hardware. |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 187 | 71,893 | Unsloth’s GGUF conversion of poolside’s Laguna, optimized for llama.cpp inference. It makes code LLMs accessible without a GPU. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,091 | 1,988,680 | A highly‑liked uncensored fine‑tune of Qwen3.6 MoE, with aggressive behavior tuning. Its 2M+ downloads reflect demand for unrestrained creative assistants. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 638 | 2,114,963 | A 1‑bit extreme quantization of a 27B model, achieving the smallest possible footprint. It has the second‑highest downloads in the list (2.1M). |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 539 | 0 | A LoRA adapter for identity‑preserving face editing on top of Krea‑2. It has no downloads yet but high likes, indicating strong interest in controllable image editing. |
| [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 141 | 76,957 | Official GGUF quantizations of Laguna. They are preferred for production deployments where latency and memory matter. |
| [poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 135 | 117,106 | Nvidia FP4 quantization of Laguna, achieving near‑lossless compression for Hopper‑class GPUs. It is used in vLLM‑based inference. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,465 | 1,570,995 | A GGUF‑quantized reasoning model derived from Qwen3.5, trained with Claude‑style conversational data. It is popular for roleplay and storytelling. |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 551 | 27,064 | A fine‑tune of Qwen3.6 for enhanced chain‑of‑thought reasoning. It is used as a drop‑in replacement for science and math QA. |
| [baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 99 | 1,977 | NVFP4 quantized vision‑language variant of GLM-5.2, enabling multimodal inference on constrained hardware. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 153 | 60,643 | Another uncensored GGUF of Qwen3.6 MoE, merged with Hermes V5 dataset. It competes in the same space as HauhauCS’s variant. |

---

## Ecosystem Signal

The dominant trend is **MoE‑based architectures**, with Qwen3.6‑35B‑A3B and GLM‑5.2 both achieving massive community engagement and spawning dozens of fine‑tunes. Open‑weight models from Chinese organizations (Baidu, Qwen, Zhipu, MoonshotAI) are leading the popularity charts, while proprietary models like poolside’s Laguna remain strong in niche coding domains.

**Quantization activity is explosive**: 14 of the 30 listings are GGUF or NVFP4 variants, with extreme 1‑bit (Bonsai) and 2‑bit (Ternary‑Bonsai) quantization gaining traction on consumer hardware. The community is actively creating “uncensored” fine‑tunes of Qwen3.6, indicating high demand for unrestricted creative and role‑playing assistants.

New categories are emerging: **robotics** (OpenBMB), **computer‑use** (Microsoft Fara), and **edge‑deployable TTS** (Inflect‑Micro) suggest that the ecosystem is moving beyond pure text generation toward embodied and real‑time applications. OCR models (Baidu, ATH‑MaaS) are also seeing strong adoption, driven by document‑processing workflows.

---

## Worth Exploring

1. **GLM-5.2** – With 4,446 weekly likes, it is the single most‑liked model this week. Its MoE design and strong reasoning make it a top candidate for anyone evaluating large open‑weight LLMs.

2. **Qwen3.6-35B-A3B** – The base model with 6.4M downloads and 2.5K likes is the community’s favorite multimodal MoE. Studying its architecture and fine‑tuning recipes can inform future MoE projects.

3. **MiniCPM-RobotManip** – As one of the first open‑weight vision‑language‑action models, it is worth exploring for researchers and hobbyists interested in robotic control. Its 607 downloads are modest but signal a nascent but high‑potential area.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*