# Hugging Face Trending Models Digest 2026-07-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-16 01:26 UTC

---

Here is the structured Hugging Face Trending Models Digest for July 16, 2026.

---

### 1. Today's Highlights

This week's trending models are dominated by aggressive quantization and the rapid iteration of the Qwen family, now at version 3.6, alongside the explosive growth of the GLM-5.2 MoE and Hy3 architectures. Community fine-tunes and GGUF quantizations are the primary drivers of popularity, with several models exceeding 2 million downloads. Notably, the landscape is shifting towards smaller, highly efficient "thinking" models and specialized multimodal pipelines, while NVIDIA and Tencent continue to push large-scale open-weight releases. The standout trend is the massive community adoption of ternary and 1-bit quantization techniques for deploying powerful models on consumer hardware.

---

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 3,998 | 489,611 | A massive MoE model (likely 1T+ total parameters) using a novel GLM architecture. It is trending due to its proprietary "DSA" training technique and high performance, gaining nearly 4,000 likes. |
| [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 800 | 10,406 | Tencent's third-generation Hunyuan language model, a dense transformer focused on general text generation. Its strong corporate backing and solid performance are driving early adoption. |
| [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | InternScience | 555 | 30,539 | A Qwen3.5-based MoE model specialized for agentic tasks, integrating image-text-to-text capabilities. It is gaining traction for its efficient mixture-of-experts architecture designed for complex tool-use. |
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 236 | 571 | A specialized JAX-based model fine-tuned for function-calling and tool-use, optimized for agentic workflows. It stands out for its unique JAX framework, attracting developers prioritizing inference speed. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 343 | 0 | A new, untested multimodal model capable of processing both images and audio alongside text. Its high like-to-download ratio suggests strong interest in its novel "inkling_mm_model" architecture. |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 307 | 0 | A LoRA for the Krea-2 platform focused on identity-preserving image editing, enabling photorealistic edits of faces and characters. It is trending due to demand for controllable, high-fidelity image editing. |
| [open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1) | open-gigaai | 134 | 0 | A new foundational text-to-image model built with Diffusers, promising high-resolution output. It is listed under region-specific tags, indicating a potential focus on US regulatory compliance. |
| [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 154 | 0 | A fine-tuned LoRA for the LTX video model that enables identity-preserved text-to-video generation. It is gaining buzz for solving a key pain point in AI video generation: consistent character faces. |
| [robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast) | robbyant | 99 | 0 | A fast, causal "World Model" for image-to-video generation, distinct from traditional diffusion models. It is trending for its potential to create more coherent and physics-aware video generation. |
| [robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b) | robbyant | 111 | 700 | A MoE video generation model (30B total, 3B active) using a custom Diffusers pipeline. It is notable for its efficiency, drastically reducing compute requirements for high-quality video generation. |
| [mgwr/M87](https://huggingface.co/mgwr/M87) | mgwr | 127 | 2,408 | A community LoRA for the Krea-2 Turbo model, focused on high-quality text-to-image generation. Its popularity reflects the vibrant ecosystem of fine-tunes built on top of the Krea-2 platform. |

#### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 917 | 0 | A critical resource providing corrected Jinja chat templates for Qwen models, compatible with the MLX framework. It has zero downloads but is widely appreciated for fixing a major usability issue in the Qwen ecosystem. |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 215 | 65,109 | An audio-specific model combining speech transcription with speaker diarization in a single pipeline. Its high download count indicates strong demand for end-to-end audio processing solutions. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,002 | 1,715,301 | Baidu's comprehensive OCR model built on a Qwen backbone, capable of handling complex documents and scenes. Its massive download volume shows a clear market need for robust, open-source OCR tools. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 117 | 745 | A specialized OCR model fine-tuned from Qwen3.5, focusing on improved accuracy for visual document understanding. It represents the niche specialization trend within the broader OCR domain. |
| [nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B) | nvidia | 156 | 1,332 | NVIDIA's latest entry in the Nemotron family, a 30B MoE model with only 3B active parameters for efficient inference. It signals continued corporate investment in highly sparse, efficient enterprise models. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 467 | 23 | A cutting-edge 2-bit ternary quantization of a 27B model, drastically reducing its size for local inference with llama.cpp. It is trending for pioneering extreme compression without catastrophic quality loss. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,214 | 2,006,265 | A highly popular Qwen3.5 GGUF fine-tune, likely distilled from a large proprietary model. Its massive download count makes it a flagship for accessible, high-performance reasoning models. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 267 | 513 | An extreme 1-bit quantization of a 27B model, pushing the boundaries of model compression for llama.cpp. It is a must-watch for developers seeking to run LLMs on extremely constrained hardware. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,760 | 2,443,871 | The most downloaded model on the list, this is an uncensored Qwen3.6 MoE GGUF (35B total, 3B active). It is trending due to its "uncensored" nature, efficiency, and the broad appeal of the Qwen3.6 base. |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | GnLOLot | 250 | 89,892 | A tiny 1B parameter GGUF model fine-tuned for "thinking" (chain-of-thought) capabilities. Its high popularity proves that even small models can be powerful when fine-tuned with sophisticated techniques. |
| [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 1,198 | 468,629 | A highly specialized GGUF fine-tune of Gemma-4 for coding, agentic tasks, and terminal use. It is trending as a powerful, locally-runnable alternative to commercial coding assistants. |
| [AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 108 | 0 | A community quantization of Tencent's Hy3 model to GGUF format. Though new, it signals the community's intent to make the Hy3 model accessible for local inference. |
| [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 110 | 2,188 | An INT4 quantization of the massive GLM-5.2 model, optimized for CPU inference via "expert-streaming." It makes a flagship MoE model accessible without a top-tier GPU. |
| [unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4) | unsloth | 208 | 1,599,150 | A cutting-edge NVFP4 (4-bit floating point) quantization of Qwen3.6, optimized by the team at Unsloth. It combines state-of-the-art quantization with a popular base model, leading to massive downloads. |
| [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 894 | 1,533,354 | A GGUF version of the Ornith-1.0 model, a 35B parameter transformer. Its strong performance and MIT license make it a favorite for open-source commercial projects. |
| [empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | empero-ai | 143 | 70,260 | A second-generation GGUF quantization of the Qwythos fine-tune on Qwen3.5. It shows the team's commitment to iterating on their popular recipe for the community. |

---

### 3. Ecosystem Signal

The current ecosystem is defined by a **race to the bottom for model size**. The success of models like `Qwen3.6-35B-A3B` (2.4M downloads) and `Qwythos-9B` (2M downloads) proves that the market now prioritizes inference efficiency (MoE, ternary/1-bit quantization) over raw parameter count. The **Qwen family (3.5 and 3.6)** has clearly become the dominant base model for the global community, rivaling Llama and Mistral. Chinese AI labs like Tencent (Hy3), Zhipu AI (GLM-5.2), and Baidu (OCR) are aggressively releasing open-weight models, creating a **multi-polar open-weight ecosystem** that is highly competitive. The "uncensored" and "thinking" fine-tune recipes remain incredibly popular, driving the highest download numbers. Finally, the emergence of specialized audio/text/image pipelines (e.g., MOSS-Transcribe-Diarize, Unlimited-OCR) indicates that the community is moving beyond single-task models towards complex, multi-stage pipelines for specific, high-value use cases.

---

### 4. Worth Exploring

- **prism-ml/Ternary-Bonsai-27B-gguf**: This is the most technically innovative model on the list. Exploring a 2-bit "ternary" model is crucial for understanding the future of on-device AI. Testing its quality and inference speed will reveal how far compression can go before hitting a quality wall.

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**: With the highest downloads on the leaderboard, this model represents the "beating heart" of the open-source community's current desires: efficiency, uncensored output, and a powerful base. It is the definitive benchmark for understanding what the average user wants from a local AI.

- **Cactus-Compute/needle**: While new and untested, this model's choice of JAX over PyTorch for a function-calling model is a fascinating architectural bet. For developers building agentic systems, this is a cutting-edge alternative to standard transformer models that could offer performance advantages.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*