# Hugging Face Trending Models Digest 2026-06-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-29 00:27 UTC

---

Here is the **Hugging Face Trending Models Digest** for **2026-06-29**.

---

### 1. Today's Highlights

This week’s trending landscape is defined by a massive surge in **MoE (Mixture-of-Experts) architectures** and **uncensored fine-tunes**, with models like GLM-5.2 and Qwen3.6 variants dominating the charts. **NVIDIA** has emerged as a key infrastructure player, releasing both specialized vision tools (LocateAnything-3B) and NVFP4-quantized versions of top MoE models, signaling a push toward enterprise-ready deployment. Meanwhile, **community fine-tuning** is at an all-time high, with **HauhauCS** capturing massive download volumes for their uncensored, aggressive-tuned variants, and **deepreinforce-ai** establishing a full family of Ornith models from 9B to 397B. The trend toward **multimodal + reasoning** convergence continues, with nearly half of today’s top 30 models supporting image-text-to-text inputs.

---

### 2. Trending Models by Category

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 2,815 likes, 118.6k downloads  
  A 5.2-parameter MoE conversational model from Zhipu AI, trending as the highest-liked LLM this week due to its strong reasoning and dialogue capabilities.

- **[Qwen/Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)** — Qwen | 397 likes, 23.7k downloads  
  A 35B MoE model (3B active) optimized for agentic workflows and world modeling, part of Qwen’s push toward embodied AI.

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** — WeiboAI | 743 likes, 59.3k downloads  
  A compact 3B Qwen2-based model specialized in mathematical reasoning, gaining traction for its surprising performance-to-size ratio.

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** — microsoft | 369 likes, 6.8k downloads  
  Microsoft’s entry into fast-context retrieval, a 4B instruction-tuned model designed for sub-agent exploration in long-context tasks.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 1,229 likes, 295k downloads  
  Baidu’s state-of-the-art OCR model supporting unlimited-length document recognition; trending due to its practicality in enterprise document processing.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — krea | 353 likes, 27.6k downloads  
  The fast distilled variant of Krea-2 for text-to-image generation, optimized for speed while retaining quality.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 2,434 likes, 646.5k downloads  
  A 3B vision-language model for zero-shot object localization; extremely high downloads reflect demand for vision-based grounding tools.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia | 734 likes, 67.4k downloads  
  A lightweight streaming ASR model (0.6B) built on NeMo, trending for real-time speech recognition applications.

- **[fal/LTX-2.3-3DREAL-LoRA](https://huggingface.co/fal/LTX-2.3-3DREAL-LoRA)** — fal | 93 likes, 0 downloads  
  A LoRA for LTX video models enabling 3D real-to-video generation; notable for its niche use case despite low download count.

#### 🔧 Specialized Models (code, math, medical, embeddings, agentic)

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — yuxinlu1 | 2,471 likes, 549.9k downloads  
  Top code-specialized GGUF quant of Gemma-4-12B with a reasoning-focused fine-tune; one of the most popular coding models this week.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 | 792 likes, 225.8k downloads  
  A variant tuned for autonomous agent workflows, including terminal and coding tasks, demonstrating the growing demand for agentic LLMs.

- **[Chunjiang-Intelligence/DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)** — Chunjiang-Intelligence | 124 likes, 1.4k downloads  
  A cybersecurity-focused fine-tune of DeepSeek-V4, representing a niche specialization trend in safety and red-teaming.

- **[LiquidAI/LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)** — LiquidAI | 141 likes, 12.4k downloads  
  Liquid AI’s Liquid Foundation Model, a tiny 230M-parameter generative model pushing efficiency frontiers for edge deployment.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 793 likes, 831.5k downloads  
  A GGUF quantized reasoning model blending Qwen3.5 with Claude-style mythos training data; highest downloads among GGUF entries.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,301 likes, 3.2M downloads  
  The most downloaded model this week—a massively popular uncensored, aggressive-tuned variant of Qwen3.6 MoE, reflecting a strong appetite for unrestricted models.

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** — unsloth | 442 likes, 146k downloads  
  Unsloth’s optimized GGUF quantization of GLM-5.2, making MoE accessible to consumer hardware.

- **[nvidia/GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)** — nvidia | 154 likes, 45.8k downloads  
  NVIDIA’s hardware-native FP4 quantization of GLM-5.2, a sign of hardware-software co-optimization for next-gen GPUs.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai | 407 likes, 79.6k downloads  
  GGUF of the 35B Ornith model, part of a growing family covering 9B, 35B, and 397B scales.

- **[HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced)** — HauhauCS | 100 likes, 40.8k downloads  
  A balanced uncensored variant of Gemma-4, building on the community appetite for high-quality uncensored multimodal models.

---

### 3. Ecosystem Signal

**MoE is the new standard.** This week’s top models—GLM-5.2, Qwen-AgentWorld, Qwen3.6-35B, Ornith-397B—are all Mixture-of-Experts, reinforcing that parameter efficiency via sparse activation is now the dominant paradigm for frontier models. **Uncensored fine-tunes are a growth vector.** HauhauCS’s aggressive-tuned Qwen3.6 variant alone accumulated over 3.2 million downloads, indicating that the demand for unrestricted, uncensored reasoning models is not a fringe trend but a mainstream force. **NVIDIA is becoming a top-tier model publisher**, not just an infrastructure provider—releasing LocateAnything, Nemotron ASR, and NVFP4 quantizations of GLM and Qwen suggests a deliberate strategy to control the enterprise deployment stack. **The quantization ecosystem is maturing**, with both community (Unsloth, empero-ai) and corporate (NVIDIA) actors providing optimized formats ranging from GGUF (CPU-friendly) to NVFP4 (hardware-native). **Small models are holding their own** — VibeThinker-3B, LFM2.5-230M, and Nemotron-3.5-0.6B prove that specialized small models continue to attract attention for edge and low-latency use cases.

---

### 4. Worth Exploring

1. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — If you work with document processing or RAG pipelines requiring vision input, this is the most practical multimodal model this week. Its massive download count (295k) and high likes (1,229) suggest real-world reliability.

2. **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — For coding agents and local reasoning, this GGUF variant of Gemma-4 is a must-try. Its 2,471 likes and half-million downloads make it the most community-validated coding-focused model on the list.

3. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — A standout for multimodal AI practitioners. With 2,434 likes and 646k downloads, it demonstrates NVIDIA’s ability to deliver zero-shot vision grounding that competes with much larger models, and is well-suited for robotics, autonomous driving, and image search pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*