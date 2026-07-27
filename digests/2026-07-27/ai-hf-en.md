# Hugging Face Trending Models Digest 2026-07-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-27 01:51 UTC

---

# Hugging Face Trending Models Digest — 2026-07-27

## Today’s Highlights

The week’s top gainer is **zai-org/GLM-5.2** with 4,477 likes, signaling strong interest in the next-generation MoE language model family. **Qwen3.6-based vision-language fine-tunes** dominate the “uncensored” and GGUF space, with several 27B and 35B variants racking up millions of downloads. In robotics, **OpenBMB’s MiniCPM-RobotManip and RobotTrack** introduce vision-language-action models, a niche that is rapidly attracting attention. Meanwhile, **baidu/Unlimited-OCR** leads downloads at 2.6M, while **Microsoft’s Mage-Flow** series pushes instruction-based image editing. The quantization ecosystem continues to thrive, with 1-bit and 2-bit GGUF releases (Bonsai, Ternary-Bonsai) breaking new ground in model compression.

---

## Trending Models by Category

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,477 | 827,191 | A 5.2-generation MoE language model with strong conversational abilities. Its massive like count reflects the community’s excitement around the GLM family’s continued evolution. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 701 | 56,445 | A base text-generation model from poolside, likely focused on code or domain-specific tasks. It has spawned multiple quantization variants (GGUF, NVFP4) indicating strong downstream interest. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 595 | 3,305 | A 250B-parameter open-weight language model from Upstage. Despite lower download numbers, its large scale and open license position it as a contender for enterprise deployments. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 447 | 14,049 | A compact 3B LLM optimized for efficiency. It is trending as a lightweight alternative for on-device or resource-constrained scenarios. |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 193 | 2,400 | A beta release of Motif-3, a general-purpose text-generation model. Its feature-extraction tag hints at embedding capabilities, and it is gaining traction as a foundation model. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,207 | 2,593,460 | A state-of-the-art OCR model built for unlimited text extraction from images. Its massive download count underscores the universal demand for reliable, scalable OCR. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,579 | 34,511 | A multimodal conversational model that processes both images and text. It is popular for interactive vision-language tasks and has strong like-to-download ratio. |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 334 | 1,375 | A text-to-image diffusion model with image-editing capabilities. It is the first in Microsoft’s Mage-Flow family, designed for flexible generation and instruction-based editing. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 178 | 298 | A tiny text-to-speech model optimized for CPU and edge AI. It enables local speech synthesis, appealing to privacy-conscious and offline use cases. |
| [nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 125 | 32,700 | An NVIDIA diffusion model for edge deployment, likely for image/video generation. Its Cosmos lineage suggests high-quality visual outputs. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 309 | 35,562 | A vision-language model specialized in OCR, built on Qwen3.5. It competes with baidu’s Unlimited-OCR by combining multimodal understanding with text extraction. |
| [baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 113 | 2,033 | A quantized (NVFP4) version of GLM-5.2 with vision capabilities. It brings multimodal power to lower-precision deployments. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 110 | 1,225 | A 27B vision-language model designed for computer-use tasks. It represents Microsoft’s push into agents that interact with graphical interfaces. |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 554 | 27,823 | A Qwen3.6-based vision-language model with enhanced reasoning (ThinkingCap). It stands out for combining large context windows with strong multimodal performance. |
| [microsoft/Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo) | microsoft | 88 | 946 | A turbo version of Mage-Flow focused on instruction-based image-to-image editing. It offers faster iteration for creative workflows. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,298 | 730,129 | A code-specialized vision-language model using compressed tensors. It is trending for its ability to process screenshots and generate code, with strong download momentum. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 198 | 3,764 | A developer preview of a coder model based on Qwen3.5 MoE. It targets advanced code generation and multimodal reasoning (code + images). |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 186 | 5,978 | A 1B parameter security-focused model. It is notable for applying a Granite MoE hybrid architecture to code safety and vulnerability detection. |
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 177 | 643 | A vision-language-action model for robot manipulation tasks. It represents a new frontier for embodied AI on Hugging Face, though still early in adoption. |
| [openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 130 | 398 | A companion model to MiniCPM-RobotManip, focused on object tracking for robotics. Both models use the same VLA (Vision-Language-Action) architecture. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 638 | 552,026 | A heavily fine-tuned and uncensored GGUF variant of Qwen3.6 with a long name reflecting its many customizations. Its high download count indicates a niche audience for uncensored vision-language models. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,050 | 631,970 | A 2-bit ternary quantization of Bonsai-27B, achieving extreme compression. It is trending as one of the first practical ternary-weight LLMs. |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 203 | 102,684 | A GGUF quantization of poolside’s Laguna-S-2.1. It makes the model accessible to llama.cpp users, driving adoption in local inference. |
| [poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 143 | 138,671 | An NVFP4 quantized version of Laguna-S-2.1 designed for vLLM inference. It balances quality and performance for high-throughput serving. |
| [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 143 | 82,187 | Another GGUF variant of Laguna-S-2.1, hosted by poolside themselves. It provides an official reference for local quantization. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 651 | 2,187,304 | A 1-bit quantized version of Bonsai-27B, pushing the limits of model compression. Its 2.1M downloads show massive interest in ultra-low-bit LLMs. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,112 | 1,927,138 | A GGUF fine-tune of Qwen3.6 MoE (35B total, 3B active) with uncensored and aggressive personality. It is the second most-liked model this week, indicating a thriving uncensored fine-tune ecosystem. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,480 | 1,410,054 | A GGUF quantized model based on Qwen3.5 with a “Claude Mythos” style. It combines reasoning capabilities with a unique persona, appealing to creative and role-play communities. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 172 | 73,642 | Another uncensored GGUF of Qwen3.6 MoE, this time merged with Hermes V5. It is part of a wave of community fine-tunes that apply popular “Hermes” style alignments. |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 544 | 0 | A LoRA for Krea-2 that enables identity-consistent image editing. Despite zero downloads, its high likes suggest strong interest and possibly a pending release or documentation. |

---

## Ecosystem Signal

The dominant theme this week is **Qwen3.6 (and Qwen3.5) MoE models** — they underpin the most popular fine-tunes and quantizations, from massive uncensored GGUF releases (HauhauCS, LuffyTheFox) to vision-language ThinkingCap. The **Qwen family** is clearly replacing earlier base models as the favorite fine-tuning substrate.

**GLM-5.2** emerges as a major new contender with 4,477 likes, rivaling Qwen in popularity. Its MoE architecture and strong conversational performance are driving both a standard release and a vision quantized variant (GLM-5.2-Vision-NVFP4).

The **quantization frontier** is expanding rapidly: 1-bit and 2-bit models (Bonsai, Ternary-Bonsai) are no longer experimental, with millions of downloads. **NVFP4** (NVIDIA FP4) is also gaining traction for vLLM deployments, pointing to a future where ultra-low precision becomes standard.

**Robotics models** from OpenBMB (MiniCPM-RobotManip/Track) signal a new ecosystem for vision-language-action (VLA) models. Though early in downloads, the likes and novelty value are high.

Open-weight models continue to dominate the chart; no proprietary-only models appear. The **“uncensored”** subgenre remains a significant niche, with multiple Qwen3.6 fine-tunes explicitly advertising lack of content restrictions.

---

## Worth Exploring

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — With the highest likes this week, it is the model to watch for understanding the next generation of MoE language models. Its vision variant (baseten/GLM-5.2-Vision-NVFP4) also makes it a strong multimodal candidate.

2. **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** — As one of the first VLA models on Hugging Face, it represents a paradigm shift toward embodied AI. Even at low download counts, it is a must-study for those interested in robotics and agentic systems.

3. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — The highest-download model this week (2.1M) is a 1-bit quantized LLM. It demonstrates that extreme compression (1-bit) can be practical and widely adopted — worth experimenting with for edge or memory-constrained deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*