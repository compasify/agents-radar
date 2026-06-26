# Hugging Face Trending Models Digest 2026-06-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-26 00:29 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-06-26

## 1. Today's Highlights

This week's trending list is dominated by **MoE (Mixture-of-Experts) architectures**, with **DeepSeek-V4-Pro** claiming the top spot by likes (5,061) and **nvidia/Qwen3.6-35B-A3B-NVFP4** leading downloads (4.6M+). **Gemma 4** continues its explosive ecosystem growth, spawning numerous fine-tunes, quantizations, and abliterated variants. A wave of **uncensored and agentic fine-tunes**—particularly around Gemma 4 and Qwen 3.6—signals strong community demand for unconstrained reasoning models. **NVIDIA's LocateAnything-3B** and **baidu/Unlimited-OCR** highlight a resurgence of specialized vision models, while **krea/Krea-2-Turbo** marks a notable text-to-image release from an emerging startup.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** – deepseek-ai · 5,061 likes · 1.88M downloads  
  The leading open-weight MoE model this week, powering conversational AI with strong reasoning and large-scale deployment appeal.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – zai-org · 2,475 likes · 67K downloads  
  A flagship MoE-DSA model by Zhipu AI, trending for its efficient gating architecture and strong conversational performance.

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** – Qwen · 239 likes · 3.4K downloads  
  Qwen's latest agent-focused MoE model, optimized for tool use and multi-step reasoning in agentic workflows.

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** – microsoft · 344 likes · 5.3K downloads  
  A compact 4B model designed for efficient long-context processing, leveraging Qwen3 backbone with fast inference.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** – deepreinforce-ai · 78 likes · 0 downloads  
  A new 35B GGUF-quantized model in MIT license, aiming at accessible open-weight deployment.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – baidu · 890 likes · 70.7K downloads  
  A versatile OCR model handling unlimited-length documents with image-to-text capabilities, trending for its practicality.

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** – MiniMaxAI · 1,241 likes · 154K downloads  
  A multimodal VL model excelling in vision-language tasks, gaining traction for its strong generative performance.

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** – google · 1,176 likes · 2.19M downloads  
  Google's any-to-any multimodal flagship, supporting image-text-to-text and text-to-image, driving the Gemma 4 ecosystem.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** – krea · 243 likes · 3K downloads  
  A turbo-optimized text-to-image diffusion model built on Krea-2-Raw, targeting fast, high-quality generation.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** – nvidia · 695 likes · 50.6K downloads  
  A lightweight streaming ASR model with cache-aware architecture, ideal for real-time speech recognition.

- **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** – owensong · 201 likes · 0 downloads  
  An ultra-small TTS model (Nano-scale) for on-device speech synthesis, pushing efficiency boundaries.

- **[Boogu/Boogu-Image-0.1-Edit](https://huggingface.co/Boogu/Boogu-Image-0.1-Edit)** – Boogu · 123 likes · 824 downloads  
  A bilingual (EN/ZH) image editing diffusion model, Apache 2.0 licensed.

- **[datalab-to/lift](https://huggingface.co/datalab-to/lift)** – datalab-to · 152 likes · 5.2K downloads  
  A PDF-focused image-text-to-text model built on Qwen3.5, trended for document understanding tasks.

### 🔧 Specialized Models (code, math, reasoning, embeddings, agents)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – nvidia · 2,363 likes · 408K downloads  
  A 3B image-feature-extraction model for precise object localization, trending for its zero-shot spatial reasoning.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** – moonshotai · 992 likes · 502K downloads  
  A code-optimized multimodal model from Moonshot AI, supporting compressed tensors for efficient deployment.

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** – WeiboAI · 715 likes · 51.7K downloads  
  A compact 3B math reasoning model built on Qwen2, gaining attention for strong mathematical performance.

- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** – Chunjiang-Intelligence · 90 likes · 646 downloads  
  A cybersecurity-focused DeepSeek-v4 variant, specialized for threat detection and security analysis.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** – yuxinlu1 · 2,362 likes · 496K downloads  
  Top Gemma 4 GGUF coding fine-tune, blending Fable-5 and Composer 2.5 for advanced code reasoning.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – HauhauCS · 2,234 likes · 3.52M downloads  
  A massively downloaded uncensored Qwen3.6 MoE variant, highly sought after for unrestricted use cases.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** – yuxinlu1 · 613 likes · 165K downloads  
  An agentic Gemma 4 GGUF fine-tune optimized for terminal/agent tasks with multi-epoch training.

- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** – nvidia · 340 likes · 4.6M downloads  
  NVIDIA's ModelOpt-quantized Qwen3.6 MoE in NVFP4 precision, setting new download records for efficient inference.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – empero-ai · 474 likes · 134K downloads  
  A llama.cpp-quantized reasoning model blending Claude-Mythos with Qwen3.5, popular among local inference users.

- **[huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)** – huihui-ai · 127 likes · 4.9K downloads  
  An "abliterated" (safety-filter-removed) Gemma 4 coding variant, catering to advanced fine-tuning experimentation.

- **[HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced)** – HauhauCS · 83 likes · 15.1K downloads  
  A QAT-quantized, uncensored Gemma 4 variant with balanced behavior, part of the uncensored model wave.

- **[Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF)** – Jackrong · 90 likes · 19.4K downloads  
  A vision-language coding GGUF model compatible with llama.cpp, GPQA/MTP-benchmark tuned.

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** – unsloth · 384 likes · 88.9K downloads  
  Unsloth's optimized GGUF variant of GLM-5.2, making MoE inference more accessible on consumer hardware.

## 3. Ecosystem Signal

**MoE is the dominant paradigm.** DeepSeek-V4-Pro, GLM-5.2, Qwen3.6-35B-A3B, and MiniMax-M3 all leverage MoE, and community quantizations of these models (NVFP4, GGUF) are seeing massive adoption. The **Gemma 4 ecosystem is exploding**—Google's base model has spawned dozens of fine-tunes (coder, agentic, abliterated) and GGUF variants, indicating strong developer appetite for a 12B parameter multimodal model that runs locally.

**Uncensored/abliterated models** are a growing sub-trend, with HauhauCS variants alone accumulating over 3.5M downloads. This signals a market segment prioritizing unrestricted reasoning capability, particularly for coding and agentic use cases.

**Quantization formats are maturing.** NVIDIA's NVFP4 precision (ModelOpt) is competing with traditional GGUF for MoE models, while unsloth continues to democratize GLM-5.2. The download numbers (4.6M for NVFP4) suggest quantized MoE models are enabling broad deployment on consumer GPUs.

**Specialized vision models** (LocateAnything-3B, Unlimited-OCR) and lightweight ASR (Nemotron-3.5) show that the ecosystem is not just about general LLMs—there's strong demand for focused, task-specific models with small footprints.

## 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – A remarkably compact (3B) object localization model with 408K downloads and 2.3K likes. Its zero-shot spatial reasoning capability makes it ideal for robotics, document layout analysis, and visual grounding tasks. The high community engagement suggests it punches well above its weight class.

2. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** – The most-liked Gemma 4 fine-tune (2,362 likes) and a top downloader (496K). Its blend of Fable-5 and Composer 2.5 signal an emerging recipe for high-performance coding models. Worth studying for anyone building local coding assistants.

3. **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** – With 4.6M downloads in one week, this is the most-downloaded model on the list. It validates NVIDIA's NVFP4 quantization as a practical path for deploying 35B MoE models. Anyone evaluating efficient MoE inference should examine its performance/quality trade-offs.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*