# Hugging Face Trending Models Digest 2026-07-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-29 01:26 UTC

---

# Hugging Face Trending Models Digest — 2026-07-29

## Today's Highlights

Multimodal models continue to dominate, with **moonshotai/Kimi-K3** earning 8,000 weekly likes and sparking a wave of community quantizations (GGUF, compressed-tensors). **Qwen/Qwen3.6-35B-A3B** leads raw downloads at 6.2M, while its uncensored fine-tunes (HauhauCS, LuffyTheFox) underscore a vibrant ecosystem of community adaptations. **Baidu/Unlimited-OCR** (2.7M downloads) and **ATH-MaaS/OvisOCR2** demonstrate surging interest in specialized OCR solutions. On the code side, **Kwaipilot/KAT-Coder-V2.5-Dev** and **moonshotai/Kimi-K2.7-Code** highlight a push toward multimodal code assistants. Quantization is the prevailing trend: GGUF, NVFP4, and even 1‑bit/2‑bit ternary models (prism‑ml) make large models accessible on edge hardware.

---

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,605 | 1,267,198 | An MoE‑based conversational LLM with strong reasoning; its vision variant also trended (GLM-5.2-Vision-NVFP4). |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 645 | 4,804 | A 250B parameter open‑weight LLM pushing the frontier of large‑scale text generation. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 528 | 18,933 | A compact 3B model optimized for efficient inference; popular for on‑device deployment. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 801 | 67,286 | A text‑generation model with multiple quantized variants (GGUF, NVFP4) driving real‑world adoption. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 8,000 | 99,214 | Top‑trending multimodal model (image+text) with compressed‑tensor support; sparked a wave of community quantizations. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,625 | 39,052 | A conversational vision‑language model for multimodal dialogue tasks. |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 416 | 2,007 | Text‑to‑image generation with instruction‑based editing; paired with a turbo variant (Mage-Flow-Edit-Turbo). |
| [microsoft/Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo) | microsoft | 109 | 1,260 | Image‑to‑image editing that follows natural language instructions; part of the Mage‑Flow ecosystem. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 265 | 645 | Lightweight text‑to‑speech model designed for CPU and edge devices. |
| [owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 104 | 434 | Even smaller TTS sibling of Inflect‑Micro, targeting ultra‑low‑resource deployment. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,569 | 6,158,876 | Dominant multimodal MoE model (35B total, 3B active); foundation for many community fine‑tunes. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 179 | 1,543 | Vision‑language model specialised for computer‑use agents (acting on screens). |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,332 | 681,111 | Multimodal code assistant – accepts images (e.g., screenshots) alongside code queries. |
| [baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 131 | 2,756 | NVFP4‑quantized vision version of GLM‑5.2; optimised for SGLang inference. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,418 | 2,694,935 | High‑accuracy OCR model with massive downloads; supports image‑to‑text extraction at scale. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 340 | 47,129 | Another strong OCR entry built on Qwen3.5; combines visual and textual understanding. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 287 | 6,275 | Code‑focused model leveraging Qwen3.5 MoE architecture; also supports image inputs. |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 222 | 7,666 | A 1B parameter LLM with a security emphasis, using a Granite‑MoE‑Hybrid design. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 853 | 736,692 | Heavily fine‑tuned GGUF variant of Qwen3.6 for uncensored, creative outputs. |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 232 | 129,601 | Community quantization of Laguna‑S‑2.1, making it deployable via llama.cpp and vLLM. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,084 | 665,427 | Ground‑breaking 2‑bit ternary quantization of a 27B model; remarkable size‑to‑quality tradeoff. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 678 | 2,339,098 | 1‑bit quantized 27B model (llama.cpp); ultra‑compact, proving extreme compression is viable. |
| [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 160 | 90,106 | Offical GGUF release of Laguna‑S‑2.1 for seamless local inference. |
| [poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 153 | 180,545 | NVFP4 quantization variant optimised for NVIDIA hardware. |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 147 | 410 | Fine‑tuned/compressed‑tensor version of Kimi‑K3 by unsloth; lighter than the original. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 89 | 0 | GGUF package of unsloth’s Kimi‑K3 variant for immediate GGML usage. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,159 | 1,855,505 | Highly‑downloaded uncensored GGUF fine‑tune of Qwen3.6‑35B; aggressive creative/roleplay. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 198 | 99,660 | Another popular uncensored Hermes‑style GGUF variant of Qwen3.6‑35B. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,502 | 1,262,662 | 9B reasoning‑focused fine‑tune in GGUF; combines Qwen3.5 with Claude‑style mythology. |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 565 | 0 | LoRA adapter for Krea‑2 (image generation) enabling identity‑preserving edits via ComfyUI. |

---

## Ecosystem Signal

The **Qwen3.6 family** is the dominant lineage: the base multimodal MoE model (35B-A3B) amassed over 6 M downloads, while uncensored fine‑tunes (HauhauCS, LuffyFox, DavidAU) collectively account for millions more. This shows strong demand for both high‑quality foundation models and permissive, role‑play‑ready adaptations. **Moonshot AI’s Kimi‑K3** is the week’s highest‑liked model, confirming that multimodal (image‑text) capabilities are a primary driver.

On the **quantization** front, GGUF remains the standard for local deployment, but NVFP4 (NVIDIA FP4) and ternary (1‑bit/2‑bit) methods are gaining traction. prism‑ml’s 1‑bit Bonsai‑27B (2.3 M downloads) proves extreme compression can work at scale, signaling a shift toward ultra‑low‑bit models for consumer hardware.

**Specialised models** – OCR (Baidu, OvisOCR2), code (KAT‑Coder, Kimi‑K2.7‑Code), and security (antares‑1b) – indicate that the community prizes domain‑specific performance over general‑purpose bloat. Finally, the **open‑weight** trend persists: all top models are openly licensed (many Apache‑2.0 or permissive), while proprietary models are absent from the trending list.

---

## Worth Exploring

1. **prism-ml/Ternary-Bonsai-27B-gguf** — If you want to run a 27B model on a single consumer GPU (even 8 GB VRAM), this 2‑bit quantized model is a game‑changer. Its 1‑bit sibling (Bonsai‑27B) is even more extreme and worth stress‑testing for low‑resource projects.

2. **moonshotai/Kimi-K2.7-Code** — A multimodal code model that accepts images (e.g., UI mocks, error screenshots) alongside code. With 681K downloads and strong likes, it bridges vision and programming in a way few models do.

3. **baidu/Unlimited-OCR** — With 2.7 M downloads and 3.4K likes, this is clearly the go‑to OCR model on the Hub. It integrates into any image‑text pipeline and sets a high bar for accuracy and speed.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*