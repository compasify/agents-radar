# Hugging Face Trending Models Digest 2026-07-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-19 01:27 UTC

---

Here is the structured Hugging Face Trending Models Digest for 2026-07-19.

---

## 1. Today's Highlights

This week’s trending models reveal a clear shift toward ultra-low-bit quantization and multimodal MoE architectures. **zai-org/GLM-5.2** and **google/gemma-4-31B-it** lead in likes, signaling strong interest in both open-weight MoE language models and Google’s latest multimodal flagship. The **prism-ml** family (Bonsai, Ternary-Bonsai) continues to dominate downloads with aggressive 1-bit and 2-bit GGUF quantizations, making high-parameter models deployable on consumer hardware. Meanwhile, **empero-ai/Qwythos-9B** variants and **HauhauCS/Qwen3.6-35B-A3B** demonstrate the community’s appetite for uncensored, reasoning-focused fine-tunes of Qwen-based architectures. Finally, vision-centric models like **baidu/Unlimited-OCR** and **Wan-AI/Wan-Dancer-14B** show that image-text-to-text and video generation remain hot areas of active development.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,126 | 541,662 | A powerful text-generation MoE model with DSA (Dynamic Sparse Attention), leading the chart in likes. It combines high-quality conversational ability with efficient parameter utilization. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,263 | 12,608,008 | Google’s latest multimodal (image-text-to-text) instruction-tuned model with massive download volume. It sets a new bar for open-weight performance and is rapidly adopted for production pipelines. |
| [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 829 | 13,571 | Tencent’s Hy3 text-generation model (Hunyuan lineage) is gaining traction for its strong general reasoning. Its GGUF quantization (Hy3-GGUF) expands accessibility. |
| [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | InternScience | 579 | 35,575 | A Qwen3.5-based MoE model specifically designed for agentic tasks and tool use. It blends image-text-to-text capabilities with a specialized architecture for autonomous agents. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,062 | 12,456 | A conversational image-text-to-text model with MoE architecture, highlighted as "Inkling" – a strong new multimodal contender. Its GGUF variant (#21) further expands its reach. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,315 | 2,112,869 | A quantized GGUF vision model based on Qwen3.5, optimized for reasoning tasks. Its massive download count reflects demand for high-quality multimodal models in small form factors. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,865 | 2,190,398 | An uncensored, vision-capable MoE model (35B total, 3B active) fine-tuned for aggressive reasoning. It is one of the most popular large-scale GGUF vision models this week. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,025 | 2,088,470 | Baidu’s OCR-focused image-text-to-text model, capable of handling unlimited-length document recognition. It leads the OCR category and is widely used for document processing pipelines. |
| [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 114 | 2,328 | A 14B image-to-video generation model, specialized for human motion and dance video synthesis. It pushes the boundary of controllable video generation from a single image. |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 259 | 86,385 | An audio-text-to-text model that transcribes speech with speaker diarization, built on the MOSS architecture. It enables end-to-end meeting transcription and speaker labeling. |
| [OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime) | OpenMOSS-Team | 77 | 529 | A real-time video-text-to-text model for live video understanding and streaming interactions. It is designed for low-latency multimodal agent applications. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 268 | 935 | A JAX-based model optimized for function calling and tool use, built for agentic workflows. It combines efficient inference with a specialized "needle" architecture for structured output. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 941 | 0 | Not a model, but a critical utility: corrected Jinja chat templates for Qwen3.5 models. It is trending for fixing widespread template misconfigurations that break conversational loops. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 736 | 301,893 | A 2-bit ternary quantization of a 27B language model, enabling extremely efficient inference. It demonstrates that 2-bit ternary precision can retain competitive quality for conversational tasks. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 444 | 1,218,815 | A 1-bit GGUF quantization of a 27B model – the most aggressive compression in the top 30. Despite extreme quantization, it is the second most-downloaded model this week, underscoring the hunger for tiny models. |
| [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 132 | 3,869 | An INT4 CPU-optimized quantization of GLM-5.2 using Colibri expert-streaming, making the MoE model accessible on CPU. It targets low-resource inference scenarios. |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | GnLOLot | 277 | 172,409 | A GGUF quantization of a 1B MiniCPM5 model fine-tuned for chain-of-thought reasoning (Claude Opus Fable dataset). Its small size and strong reasoning ability make it popular for edge deployment. |
| [unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF) | unsloth | 96 | 6,461 | Unsloth’s GGUF port of the Inkling multimodal MoE model, optimized for low-memory inference. It brings the Inkling’s cross-modal capabilities to CPU/LLama.cpp environments. |
| [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 187 | 0 | A LoRA for LTX video models focused on identity preservation and reference-to-video generation. It is a fine-tuned adapter for maintaining consistent faces across generated videos. |
| [Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt) | Cseti | 91 | 0 | An IC-LoRA adapter for LTX2.3 video models enabling novel view synthesis (cross-view prompting). It allows 3D-aware video generation from single or multiple viewpoints. |

*(Note: Models without a clear category, such as conradlocke/krea2-identity-edit, have been omitted from the tables because they are specialized but fall outside the defined table categories.)*

## 3. Ecosystem Signal

The current trending landscape reveals several clear signals. **Mixture-of-Experts (MoE)** architectures are now the dominant design pattern for high-parameter models – GLM-5.2, Qwen3.5/3.6 MoE variants, Inkling, and Hy3 all leverage MoE to scale without exploding compute. This suggests the community is prioritizing efficient scaling over dense models. **Ultra-low-bit quantization (1-bit, 2-bit ternary)** is no longer experimental; the Bonsai family’s massive download counts prove that users are willing to trade significant precision for size. The GGUF ecosystem remains the primary bridge between large models and consumer hardware. On the multimodal front, **Qwen-based vision models** (Qwythos, Qwen3.6-35B-A3B, InternScience Agents-A1) are forming a dominant family, challenging earlier architectures. Meanwhile, open-weight models like Gemma-4 receive massive initial adoption, signaling that Google’s release strategy is successfully capturing mindshare against proprietary alternatives like GPT-4 and Claude. The rise of specialized function-calling (needle) and template-fix utilities indicates the ecosystem is maturing beyond raw model releases toward infrastructure and usability.

## 4. Worth Exploring

1. **prism-ml/Bonsai-27B-gguf** – The most-downloaded model this week (1.2M+ downloads) represents the frontier of extreme compression. Studying its 1-bit quantization technique is essential for anyone building consumer-grade on-device LLMs or working with resource-constrained environments.

2. **baidu/Unlimited-OCR** – With 2M+ downloads and 2K likes, this model is redefining document OCR capabilities. Its "unlimited" length processing and clean integration with existing pipelines make it a practical drop-in replacement for legacy OCR systems; it pairs well with the trending template-fix model for Qwen pipelines.

3. **Cactus-Compute/needle** – Although still niche in downloads, its JAX-based function-calling focus combined with a new "needle" architecture is worth monitoring. As tool-use agents become the primary LLM interface, specialized models like needle could outperform general-purpose ones on structured output tasks.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*