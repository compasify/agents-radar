# Hugging Face Trending Models Digest 2026-07-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-30 01:19 UTC

---

# Hugging Face Trending Models Digest – July 30, 2026

## 1. Today's Highlights

This week's trending list is dominated by two powerful families: **Kimi-K3** (from moonshotai) and **Qwen3.6** (from Qwen), both multimodal vision-language models that have sparked a wave of community fine-tunes and quantizations. The **GLM-5.2** series also shows strong traction, with over 1.2M downloads and multiple quantized variants. A notable newcomer is **Owensong’s Inflect** TTS models (Micro and Nano v2), designed for low-latency edge deployment, signaling growing interest in on-device speech synthesis. Meanwhile, the **prism-ml** team's extreme 1‑bit and 2‑bit GGUF quants (Bonsai, Ternary-Bonsai) continue to push the boundaries of compression, achieving massive download counts.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 827 | 67,286 | A 2.1‑generation text‑only LLM from poolside, optimized for conversational tasks. It stands out for its high‑quality generation and strong community adoption with multiple GGUF quants already available. |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 694 | 4,804 | Upstage’s massive 250B open‑weight model, positioning itself as a competitive alternative to proprietary systems. The release has also spawned quantization variants (NVFP4) for efficient deployment. |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 555 | 18,933 | A compact 3B parameter LLM from Nanbeige, ideal for resource‑constrained environments. Its balanced performance‑to‑size ratio makes it a popular choice for fine‑tuning and on‑device use. |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,642 | 1,267,198 | Zhipu AI’s latest conversational model with MoE‑DSA architecture, boasting over 1.2M downloads. It excels in multi‑turn dialogue and has been quickly adapted into vision‑language (GLM-5.2-Vision) and quantized variants. |
| [antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 232 | 7,666 | A 1B parameter model fine‑tuned for security‑focused text generation, using a hybrid GraniteMoE architecture. Its small size and security orientation fill a niche for safe, auditable AI. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 8,648 | 99,214 | The week’s top‑liked model, a powerful vision‑language model from moonshotai. Its compressed‑tensor format and strong multimodal understanding have driven massive community interest and multiple quantization spinoffs. |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,640 | 39,052 | A multimodal conversational model designed for interactive image‑text tasks. Its high like‑to‑download ratio suggests strong appreciation among early adopters. |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 200 | 1,543 | Microsoft’s 27B vision‑language model specialized for computer‑use scenarios (GUI navigation). It represents a push toward agentic multimodal AI. |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 98 | 702 | Another Microsoft multimodal model, focusing on general vision‑language understanding. Early‑stage adoption, but backed by significant research resources. |
| [Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,586 | 6,158,876 | The base MoE vision‑language model from Qwen, with 35B total parameters (3B active). It has become the foundation for dozens of community fine‑tunes, accumulating over 6 million downloads. |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 290 | 645 | A lightweight text‑to‑speech model optimized for CPU and edge devices. Its low latency and natural output make it a leading choice for local TTS applications. |
| [Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 111 | 434 | An even smaller sibling of Inflect-Micro, targeting extreme edge scenarios. Both models signal a trend toward local, privacy‑preserving speech synthesis. |
| [krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 577 | 0 | A LoRA adapter for Krea‑2 that enables identity‑consistent image editing. Despite zero downloads (possibly just released), its high likes hint at strong demand for controllable image generation. |

### 🔧 Specialized Models (code, math, medical, embeddings, OCR, ASR)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,516 | 2,694,935 | Baidu’s high‑performance OCR model, handling text extraction from images with near‑human accuracy. It has become the go‑to solution for document digitization, surpassing 2.6M downloads. |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 316 | 6,275 | A code‑generation model based on Qwen3.5‑MoE, fine‑tuned for software development tasks. Its MoE architecture delivers strong coding ability with efficient inference. |
| [Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,333 | 681,111 | MoonshotAI’s code‑specialized vision‑language model, combining code generation with image understanding. Its 681k downloads reflect high demand for multimodal programming assistants. |
| [VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 100 | 1,754 | Microsoft’s speech recognition model using BitNet quantization for extreme compression. It supports efficient on‑device ASR with low accuracy loss. |
| [OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 346 | 47,129 | An OCR model built on the Qwen3.5 backbone, optimized for high‑accuracy text recognition in documents. Its strong performance and open license have driven steady adoption. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [Qwen3.6-27B-Fable-Fusion-711…](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 942 | 736,692 | An extensive fine‑tune of Qwen3.6 with uncensored and experimental “heretic” training. Its rapid adoption (736k downloads) illustrates the community’s appetite for unfiltered, role‑playing variants. |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 168 | 410 | Unsloth’s compressed‑tensor version of Kimi‑K3, enabling faster inference and lower memory usage. A companion to the original, targeting performance‑sensitive deployments. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 160 | 0 | A GGUF quantized variant of Kimi‑K3, designed for llama.cpp compatibility. Zero downloads likely due to very recent upload, but expected to gain traction. |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,095 | 665,427 | A pioneering 2‑bit ternary quantization of a 27B model, pushing the limits of extreme compression. Despite the aggressive quantization, it retains conversational coherence and has seen widespread use. |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 246 | 129,601 | The GGUF version of Laguna‑S‑2.1, optimized for llama.cpp and vLLM. Its high download count confirms the demand for accessible, high‑quality GGUF models. |
| [Qwen3.6-35B-A3B-Uncensored…](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,171 | 1,855,505 | An uncensored, “aggressive” fine‑tune of Qwen3.6‑MoE, with over 1.8M downloads. It is one of the most popular alternatives for users seeking unrestricted creative generation. |
| [Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 139 | 6,189 | A 4‑bit NVFP4 quantization of the 250B Solar model, balancing size and quality for high‑end hardware. Niche but valuable for datacenter deployments. |
| [GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 136 | 2,756 | A quantized (NVFP4) version of GLM‑5.2‑Vision, making the large multimodal model more deployable. Brought to the platform by Baseten for efficient inference. |
| [Qwen3.6-35B-A3B-Uncensored-Genesis…](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 215 | 99,660 | Another uncensored Qwen3.6 fine‑tune, this time incorporating “Hermes” style prompts in GGUF format. Nearing 100k downloads, it shows the diversity of community taste. |
| [Qwen3.5-9B-The-Defiant-Fable…](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 132 | 112,086 | A role‑playing oriented fine‑tune of Qwen3.5‑9B, featuring uncensored “heretic” capabilities and multiple GGUF formats. 112k downloads attest to the popularity of narrative‑focused models. |
| [Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 688 | 2,339,098 | A 1‑bit quantized 27B model, one of the most extreme compression efforts on the Hub. With over 2.3M downloads, it proves that even 1‑bit models can be useful for lightweight conversational tasks. |
| [Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,516 | 1,262,662 | A popular fine‑tune of Qwen3.5 combining “Claude” and “Mythos” training datasets for improved reasoning. Its 1M+ downloads make it a benchmark for community fine‑tunes. |

## 3. Ecosystem Signal

This week’s trending models reveal several clear ecosystem shifts. **MoonshotAI’s Kimi family** and **Qwen3.6** have become the dominant base models for community innovation, together spawning nearly half of the top fine‑tunes and quantizations. The appetite for **uncensored and “heretic” fine‑tunes** is stronger than ever—models like HauhauCS’s Qwen3.6 variant rack up millions of downloads despite (or because of) their unrestricted nature. On the quantization front, **prism‑ml’s sub‑2‑bit experiments** (Bonsai and Ternary‑Bonsai) are setting new records for compression, while Unsloth continues to provide reliable, well‑tested GGUF conversions for major releases. Meanwhile, **Microsoft** is quietly building a formidable multimodal portfolio with Fara1.5 and Mage‑VL, but its open‑weight models are less viral than community projects. The rise of **specialized OCR models** (Baidu’s Unlimited‑OCR, OvisOCR2) and **edge‑friendly TTS** (Owensong’s Inflect series) signals that the ecosystem is maturing beyond general‑purpose chatbots into practical, domain‑specific tools.

## 4. Worth Exploring

**Qwen3.6-35B-A3B** (by Qwen) – The base MoE vision‑language model that underlies dozens of community spinoffs. Studying its architecture and fine‑tuning it for a specific multimodal task will teach you the state of the art in efficient MoE design.

**Bonsai-27B-gguf** (by prism‑ml) – A 1‑bit quantized model with over 2.3M downloads. It is an extreme case study for understanding how far compression can go without destroying conversational ability—valuable for anyone working on low‑resource or edge deployments.

**Inflect-Micro-v2** (by owensong) – A small but high‑quality TTS model optimized for CPU inference. It represents a growing trend toward local, privacy‑preserving generative AI, and its minimal hardware requirements make it an excellent starting point for building voice interfaces.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*