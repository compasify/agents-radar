# Hugging Face Trending Models Digest 2026-07-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-28 01:25 UTC

---

# Hugging Face Trending Models Digest — 2026-07-28

---

## Today's Highlights

This week’s trending models showcase an explosion of **multimodal LLMs** led by **moonshotai/Kimi‑K3** (6,212 likes) and **Qwen/Qwen3.6‑35B‑A3B** (2,546 likes, 6M+ downloads). The rise of **extreme quantization** is unmistakable — models like **prism‑ml/Bonsai‑27B‑gguf** (1‑bit) and **Ternary‑Bonsai‑27B‑gguf** (2‑bit) have garnered massive traction, indicating strong community demand for ultra‑efficient local inference. Chinese AI labs continue to dominate the open‑weight landscape with **GLM‑5.2**, **Kimi** variants, and **Qwen3.6**, while fine‑tuning activity (especially “uncensored” versions) drives high download counts. Finally, **Baidu’s Unlimited‑OCR** highlights the growing specialization of vision‑language models for document processing.

---

## Trending Models

### 🧠 Language Models
LLMs for chat, instruction, and general‑purpose text generation.

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [poolside/Laguna‑S‑2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 758 | 63,605 | A 2.1‑generation large language model fine‑tuned for conversational tasks. Its balanced size and strong performance make it a popular base for further quantization. |
| [upstage/Solar‑Open2‑250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 629 | 3,761 | A massive 250B‑parameter open‑weight LLM, one of the largest publicly available. It pushes the frontier of open‑source scale, though downloads remain moderate due to resource requirements. |
| [Nanbeige/Nanbeige4.2‑3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 493 | 16,518 | A compact 3B‑parameter Chinese‑focused LLM optimized for efficiency. It gains traction for on‑device and edge deployments where low latency is critical. |
| [zai‑org/GLM‑5.2](https://huggingface.co/zai-org/GLM-5.2) | zai‑org | 4,549 | 1,003,547 | A new generation of the GLM family with mixture‑of‑experts (MoE) architecture, delivering strong performance in Chinese and English. Its 1M+ downloads reflect broad community interest in MoE LLMs. |
| [Motif‑Technologies/Motif‑3‑Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif‑Technologies | 199 | 2,532 | An experimental LLM focused on feature extraction and representation learning. It explores novel architectures beyond standard transformer designs. |

### 🎨 Multimodal & Generation
Image‑text‑to‑text, text‑to‑image, audio, and editing models.

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi‑K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 6,212 | 2,850 | The latest generation of Kimi’s multimodal LLM, supporting image+text inputs. Its 6.2K weekly likes mark it as the most‑liked release this week. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,603 | 36,196 | A conversational vision‑language model built for rich image‑based dialogue. It combines strong multimodal understanding with a chat‑optimized interface. |
| [microsoft/Mage‑Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 388 | 1,691 | A text‑to‑image diffusion model that also supports image editing via instruction‑based flows. It showcases Microsoft’s continued investment in controllable generation. |
| [microsoft/Mage‑Flow‑Edit‑Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo) | microsoft | 102 | 1,115 | A faster variant of Mage‑Flow optimized specifically for instruction‑based image editing. It reduces inference steps while preserving edit quality. |
| [microsoft/Fara1.5‑27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 149 | 1,406 | A 27B multimodal model designed for computer‑use tasks, such as GUI automation and visual reasoning. It represents Microsoft’s push into agent‑focused vision models. |
| [owensong/Inflect‑Micro‑v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 223 | 483 | A lightweight text‑to‑speech model optimized for CPU and edge AI deployment. It democratizes local speech synthesis with minimal resource footprint. |
| [nvidia/Cosmos3‑Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 133 | 33,127 | A diffusion‑based model from NVIDIA’s Cosmos series, likely focused on video or 3D generation. Its 33K downloads indicate strong interest in NVIDIA’s open generative media efforts. |
| [conradlocke/krea2‑identity‑edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 555 | 0 | A LoRA adapter for Krea‑2 that performs identity‑preserving image editing. Despite zero downloads yet, its high likes signal anticipation for personalized editing workflows. |
| [Qwen/Qwen3.6‑35B‑A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,546 | 6,187,853 | The flagship MoE multimodal model with 35B total parameters (3B active). Its 6M+ downloads make it the most downloaded model this week, demonstrating massive adoption for vision‑language tasks. |

### 🔧 Specialized Models
Models fine‑tuned for code, OCR, security, or domain‑specific tasks.

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited‑OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,331 | 2,645,773 | A state‑of‑the‑art OCR model capable of handling unlimited lengths and complex layouts. Its 2.6M downloads reflect massive industrial demand for robust document digitization. |
| [Kwaipilot/KAT‑Coder‑V2.5‑Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 241 | 5,312 | A code‑focused LLM built on Qwen3.5 MoE, optimized for programming tasks. It brings specialized code understanding to the popular Qwen family. |
| [moonshotai/Kimi‑K2.7‑Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,323 | 695,744 | A compressed, code‑specialized version of the Kimi multimodal model. It leverages compressed‑tensor techniques to deliver code assistance with lower memory footprint. |
| [fdtn‑ai/antares‑1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn‑ai | 207 | 6,421 | A compact 1B model with a security‑oriented training focus, using a Granite MoE hybrid architecture. It targets safe deployment in high‑stakes environments. |
| [ATH‑MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH‑MaaS | 327 | 42,152 | A Qwen3.5‑based vision‑language model fine‑tuned specifically for OCR tasks. It combines strong general vision capabilities with dedicated text‑recognition fine‑tuning. |

### 📦 Fine‑tunes & Quantizations
Community fine‑tunes, GGUF quantizations, compressed variants, and uncensored derivatives.

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6‑27B‑Fable‑Fusion‑711‑Uncensored‑Heretic‑NM‑DAU‑NEO‑MAX‑MTP‑GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 753 | 634,146 | An extensively fine‑tuned and quantized GGUF version of Qwen3.6, merging multiple “uncensored” and stylized datasets. Its high download count shows strong appetite for alternative safety alignments. |
| [unsloth/Laguna‑S‑2.1‑GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 218 | 117,456 | A GGUF quantization of the Laguna‑S‑2.1 LLM by unsloth, optimized for vLLM and local inference. This turnkey quantized version makes the model accessible to consumer hardware. |
| [prism‑ml/Ternary‑Bonsai‑27B‑gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism‑ml | 1,069 | 648,938 | An extreme 2‑bit ternary quantization of a 27B model, pushing the limits of memory efficiency. It enables near‑full capability running on devices with only 8–10 GB VRAM. |
| [prism‑ml/Bonsai‑27B‑gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism‑ml | 659 | 2,257,928 | An even more aggressive 1‑bit quantization of the same 27B base, achieving unprecedented compression. Its 2.2M downloads indicate huge community interest as the lightest high‑quality LLM available. |
| [poolside/Laguna‑S‑2.1‑GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 154 | 85,554 | An official GGUF quantized version of Laguna‑S‑2.1 from the original authors, ensuring compatibility with llama.cpp and endpoints. |
| [poolside/Laguna‑S‑2.1‑NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 148 | 158,308 | A 4‑bit floating‑point quantization of Laguna‑S‑2.1 optimized for NVIDIA GPUs via vLLM. It balances quality and inference speed for production deployments. |
| [HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,133 | 1,894,395 | A heavily fine‑tuned and quantized GGUF version of Qwen3.6‑35B‑A3B with an “aggressive” uncensored style. Its 3.1K likes and 1.9M downloads highlight the massive demand for unrestricted MoE models. |
| [baseten/GLM‑5.2‑Vision‑NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 124 | 2,276 | A 4‑bit quantized version of GLM‑5.2 enhanced with vision capabilities, optimized for SGLang inference. It brings efficient multimodal reasoning to production. |
| [LuffyTheFox/Qwen3.6‑35B‑A3B‑Uncensored‑Genesis‑Hermes‑V5‑GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 187 | 83,658 | Another uncensored GGUF fine‑tune of Qwen3.6‑35B‑A3B, incorporating Hermes‑style training. It represents the vibrant ecosystem of community‑aligned model variants. |
| [unsloth/Kimi‑K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 97 | 0 | A compressed‑tensor variant of Kimi‑K3 provided by unsloth, likely using advanced quantization techniques. It aims to bring the popular multimodal model to lower‑resource hardware. |
| [empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero‑ai | 2,490 | 1,336,263 | A GGUF quantized version of a Qwen3.5‑based reasoning model fine‑tuned on synthetic Claude‑style data. Its 2.5K likes and 1.3M downloads underscore the popularity of “mythological” reasoning fine‑tunes. |

---

## Ecosystem Signal

The model ecosystem is rapidly converging on **multimodal MoE architectures** as the new standard — Qwen3.6‑35B‑A3B, GLM‑5.2, and Kimi‑K3 all adopt mixture‑of‑experts designs that balance capability with inference cost. **Chinese AI labs** (Qwen, Kimi, GLM, Baidu) continue to lead open‑weight releases, often offering permissive licenses that fuel community adaptation. Quantization has become a dominant activity: models like **Bonsai‑27B (1‑bit)** and **Ternary‑Bonsai (2‑bit)** set new records in compression, proving that extreme quantization can retain sufficient quality for many tasks. The proliferation of “uncensored” fine‑tunes (DavidAU, HauhauCS, LuffyTheFox) reveals a sustained demand for unaligned variants, while specialized models (OCR, code, security) demonstrate maturing tooling for niche applications. Notably, the base Qwen3.6‑35B‑A3B has been downloaded over 6 million times, indicating that the community treats it as a foundational component for further customization. Overall, the trend points toward **smaller, more efficient, and more specialized models** that can run on consumer hardware while delivering frontier‑adjacent performance.

---

## Worth Exploring

1. **[prism‑ml/Ternary‑Bonsai‑27B‑gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — With 2‑bit ternary quantization, this model achieves remarkable compression while retaining coherent text generation. It is a must‑study for anyone interested in efficient inference on limited hardware (8–10 GB VRAM), and its 648K downloads confirm practical usability.

2. **[moonshotai/Kimi‑K3](https://huggingface.co/moonshotai/Kimi-K3)** — The most‑liked model this week (6,212 likes) signals strong interest in Kimi’s next‑generation multimodal LLM. Exploring its architecture and compressed‑tensor support can reveal the state of the art in multimodal compression.

3. **[ATH‑MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — As document AI matures, this fine‑tuned Qwen3.5 model for OCR offers a practical blend of general vision and specialized text extraction. Its 42K downloads and active development make it a strong candidate for production OCR pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*