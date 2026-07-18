# Hugging Face Trending Models Digest 2026-07-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-18 01:21 UTC

---

# Hugging Face Trending Models Digest — 2026-07-18

## Today's Highlights

This week's trending models showcase a strong shift toward **ultra-low-bit quantization and multimodal reasoning**. The **GLM-5.2** from zai-org leads with 4,071 likes, signaling major interest in Mixture-of-Experts architectures at scale. Meanwhile, the **prism-ml** family (Ternary-Bonsai-27B and Bonsai-27B) demonstrates that 1-bit and 2-bit ternary quantization is gaining real traction, with Bonsai-27B-gguf surpassing 1 million downloads. On the multimodal front, **HauhauCS/Qwen3.6-35B-A3B-Uncensored** and **baidu/Unlimited-OCR** are generating massive download volumes, reflecting demand for uncensored vision-language models and enterprise OCR solutions. A notable newcomer is **Cactus-Compute/needle**, a JAX-based model focused on function-calling and tool-use, hinting at growing interest in agentic capabilities.

---

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,071 | 534,698 | A large MoE-DSA language model by GLM team, trending for its conversational quality and state-of-the-art reasoning capabilities. It's the highest-liked model this week, indicating strong community validation. |
| [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 820 | 12,719 | Tencent's Hunyuan-v3 text-generation model, gaining traction as a strong open-weight contender in the Chinese LLM ecosystem. Its safetensors format enables easy integration. |
| [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | InternScience | 572 | 34,066 | A Qwen3.5-MoE-based model optimized for agentic tasks, showing rising interest in models designed for tool-use and multi-step reasoning. It combines vision capabilities with MoE efficiency. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 956 | 7,870 | A multimodal conversational model built on the inkling_mm_model architecture, trending for its polished image-text-to-text interactions. Its high like-to-download ratio suggests strong early adopter enthusiasm. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,827 | 2,295,313 | An uncensored, vision-capable MoE model with 35B total parameters (3B active), trending due to its aggressive fine-tuning and massive download count. It's the most downloaded multimodal model this week. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,019 | 1,992,355 | Baidu's next-generation OCR model, trending for its unlimited-scope text recognition and feature extraction capabilities. Near 2 million downloads reflects enterprise demand for production-ready OCR. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,274 | 2,096,147 | A GGUF-quantized reasoning model combining Qwen3.5 and Claude-style training, trending for its high performance at 9B scale. Over 2 million downloads make it one of the most popular quantized models. |
| [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 108 | 2,185 | A 14B image-to-video generation model using diffusers, gaining attention for dance video synthesis. Its specialized i2v pipeline highlights growing demand for controllable video generation. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 257 | 874 | A JAX-based model optimized for function-calling and tool-use, trending as a novel approach to agentic AI. Its low download count but high like ratio suggests early excitement within the JAX community. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 153 | 10,795 | A Qwen3.5-based OCR model built for image-text-to-text tasks, trending as an alternative to Baidu's offering. Its transformer architecture supports multilingual recognition. |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 249 | 83,160 | An audio-text-to-text model combining transcription and speaker diarization, trending for production speech processing. Its integrated pipeline simplifies multi-speaker transcription workflows. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 679 | 200,774 | A 27B model quantized to 2-bit ternary weights using GGUF, trending for extreme compression with surprising quality retention. It's a benchmark for ultra-low-bit inference. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 394 | 1,045,182 | The 1-bit predecessor to Ternary-Bonsai, trending for achieving the holy grail of extreme quantization. Over 1 million downloads confirms broad community interest in running large models on consumer hardware. |
| [unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4) | unsloth | 224 | 1,924,495 | Unsloth's NVFP4 quantization of Qwen3.6-27B, optimized for NVIDIA hardware with 4-bit floating-point precision. Nearly 2 million downloads reflects the community's appetite for efficient vision-language models. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 934 | 0 | A niche but highly-liked utility model providing corrected chat templates for Qwen3.5, trending for solving a common pain point in MLX deployments. Zero downloads suggests it's used as a reference rather than a runtime model. |
| [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 127 | 3,447 | An INT4 quantized version of GLM-5.2 using expert-streaming for CPU inference, trending for making large MoE models accessible without GPUs. It's a key enabler for edge deployment. |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | GnLOLot | 273 | 154,762 | A 1B parameter thinking model combining MiniCPM5 with Claude-style reasoning, GGUF-quantized for efficiency. Trending as a lightweight alternative for chain-of-thought tasks on limited hardware. |

---

## Ecosystem Signal

The current landscape reveals **three converging trends**. First, **quantization is maturing rapidly** — the prism-ml Bonsai family and its 1-bit/ternary variants represent a paradigm shift where 27B models run on CPUs with reasonable quality. This, combined with unsloth's NVFP4 and jlnsrk's colibri-int4, suggests 2026 is the year ultra-low-bit inference goes mainstream. Second, **open-weight vision-language models are dominating downloads**, with HauhauCS/Qwen3.6-35B and baidu/Unlimited-OCR collectively exceeding 4 million downloads — indicating enterprises are rapidly adopting open-source multimodal models over proprietary APIs. Third, **Mixture-of-Experts is now table stakes** — GLM-5.2, HauhauCS, and InternScience/Agents-A1 all leverage MoE architectures, enabling larger effective model sizes without proportional compute costs. Notably, the Cactus-Compute/needle model signals that functional-calling and tool-use are emerging as a distinct model category, separate from general-purpose chat. The ecosystem appears to be bifurcating: mass-market models focus on multimodal capabilities and extreme compression, while specialized models carve niches in agentic reasoning and domain-specific tasks like OCR and diarization.

---

## Worth Exploring

1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — This model represents a breakthrough in extreme quantization. With only 2-bit ternary weights, it demonstrates that large language models can run on resource-constrained devices while maintaining useful capability. Anyone interested in edge deployment or mobile inference should study this approach.

2. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — As one of the few JAX-native models focused specifically on function-calling, needle signals where agentic AI is heading. Its low download count but high engagement suggests an early-stage innovation worth monitoring for researchers building tool-use agents.

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — With nearly 2 million downloads and strong enterprise backing, this model sets a new bar for production OCR. Its "unlimited" scope claim warrants evaluation for document processing pipelines, and its popularity indicates a mass migration from commercial OCR APIs to open-source alternatives.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*