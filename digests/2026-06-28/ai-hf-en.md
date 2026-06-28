# Hugging Face Trending Models Digest 2026-06-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-28 00:25 UTC

---

# Hugging Face Trending Models Digest — 2026-06-28

## Today's Highlights

A massive wave of **MoE (Mixture-of-Experts) LLMs** dominates this week, headlined by the **GLM-5.2** series from Zhipu AI and Baidu's vision-centric models. NVIDIA is aggressively pushing **NVFP4-quantized MoE variants** of both GLM-5.2 and Qwen3.6, signaling a shift toward enterprise-grade compressed inference. The **Gemma 4** ecosystem continues to explode with coding-focused fine-tunes and abliterated variants, while **DeepSeek V4** makes its debut with a Pro DSpark configuration and a specialized cybersecurity fine-tune. Multimodal models are surging, with **Unlimited-OCR**, **Krea-2 Turbo**, and **MiniMax-M3** all seeing strong adoption across vision and generation tasks.

---

## Trending Models by Category

### 🧠 Language Models

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  *zai-org* | ⭐ 2,676 | ⬇️ 98,994  
  Zhipu's latest MoE flagship with dynamic sparse attention, trending for its strong reasoning-to-parameter ratio and conversational performance.

- **[Gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
  *yuxinlu1* | ⭐ 729 | ⬇️ 206,828  
  An optimized GGUF variant of Gemma 4 for agentic and terminal use cases, popular for its coding and tool-use capabilities.

- **[Qwen-AgentWorld-35B-A3B](https://huggingface.co/Qwen/Qwen-AgentWorld-35B-A3B)**  
  *Qwen* | ⭐ 357 | ⬇️ 18,872  
  Qwen's MoE agent model with 35B total / 3B active parameters, trending as a lightweight but capable autonomous agent backbone.

- **[Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**  
  *deepreinforce-ai* | ⭐ 321 | ⬇️ 20,266  
  MIT-licensed GGUF quantization of the Ornith 35B MoE, gaining traction for permissive licensing and endpoint compatibility.

- **[DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**  
  *deepseek-ai* | ⭐ 123 | ⬇️ 0  
  DeepSeek's fourth-generation Pro model with DSpark inference acceleration, with an accompanying arXiv paper (2606.19348) driving research interest.

- **[FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)**  
  *microsoft* | ⭐ 365 | ⬇️ 6,447  
  Microsoft's 4B parameter SFT model optimized for long-context (256K+) processing using Explorer SubAgent architecture.

- **[MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**  
  *MiniMaxAI* | ⭐ 1,253 | ⬇️ 182,714  
  MiniMax's third-generation multimodal language model, trending for strong vision-language alignment and high download velocity.

- **[VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)**  
  *WeiboAI* | ⭐ 742 | ⬇️ 57,521  
  A compact 3B model tuned for mathematical reasoning using Qwen2 architecture, impressive for its size-to-performance ratio.

- **[LFM2.5-230M](https://huggingface.co/LiquidAI/LFM2.5-230M)**  
  *LiquidAI* | ⭐ 129 | ⬇️ 9,791  
  A 230M Liquid Foundation Model, noteworthy as an ultra-efficient small language model for edge deployment.

- **[DeepSeek-v4-Fable](https://huggingface.co/Chunjiang-Intelligence/DeepSeek-v4-Fable)**  
  *Chunjiang-Intelligence* | ⭐ 112 | ⬇️ 1,328  
  A specialized DeepSeek V4 fine-tune for cybersecurity and fable-like narrative reasoning, carving a niche in security NLP.

### 🎨 Multimodal & Generation

- **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  *baidu* | ⭐ 1,136 | ⬇️ 212,760  
  Baidu's general-purpose OCR model handling scene text, documents, and handwritten input with no image resolution limits.

- **[Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  *empero-ai* | ⭐ 670 | ⬇️ 712,627  
  A GGUF-quantized multimodal model fusing Qwen 3.5 reasoning with Mythos-style creativity, extremely high download rate.

- **[LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
  *nvidia* | ⭐ 2,406 | ⬇️ 570,466  
  NVIDIA's 3B vision-language model for zero-shot object localization and referring expression comprehension.

- **[Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**  
  *krea* | ⭐ 309 | ⬇️ 17,445  
  A turbo-charged version of the Krea-2 text-to-image diffusion model, optimized for faster inference.

- **[Krea-2-Raw](https://huggingface.co/krea/Krea-2-Raw)**  
  *krea* | ⭐ 214 | ⬇️ 17,748  
  The base raw version of Krea-2, serving as foundation for the Turbo variant and community fine-tunes.

- **[Comfy-Org/Krea-2](https://huggingface.co/Comfy-Org/Krea-2)**  
  *Comfy-Org* | ⭐ 158 | ⬇️ 10  
  ComfyUI node integration package for Krea-2, enabling visual workflow-based image generation.

- **[Nemotron-3.5-ASR-Streaming-0.6B](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**  
  *nvidia* | ⭐ 718 | ⬇️ 61,857  
  NVIDIA's 600M parameter streaming speech recognition model using NeMo, trending for real-time ASR deployment.

### 🔧 Specialized Models

- **[Gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)**  
  *yuxinlu1* | ⭐ 2,426 | ⬇️ 536,130  
  A Gemma 4 fine-tune specialized for code generation with composer architecture, highly downloaded for development workflows.

- **[Ornith-1.0-397B](https://huggingface.co/deepreinforce-ai/Ornith-1.0-397B)**  
  *deepreinforce-ai* | ⭐ 120 | ⬇️ 463  
  The largest Ornith model at 397B, a Qwen 3.5 MoE variant pushing the frontier of open-weight model scale.

- **[FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** *(also listed under Language Models)*  
  Specialized for long-context reasoning tasks with efficient attention mechanisms.

### 📦 Fine-tunes & Quantizations

- **[Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-coder-fable5-composer2.5-v1-abliterated)**  
  *huihui-ai* | ⭐ 137 | ⬇️ 6,250  
  An "abliterated" (safety-filter-removed) Gemma 4 coding variant, popular for unfiltered code generation.

- **[Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  *HauhauCS* | ⭐ 2,277 | ⬇️ 3,331,475  
  The most downloaded model this week — an uncensored, aggressive-tuned Qwen 3.6 MoE with vision capabilities.

- **[Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced](https://huggingface.co/HauhauCS/Gemma4-12B-QAT-Uncensored-HauhauCS-Balanced)**  
  *HauhauCS* | ⭐ 96 | ⬇️ 32,222  
  A QAT-quantized, uncensored Gemma 4 variant with balanced behavior tuning, bridging quality and efficiency.

- **[GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)**  
  *unsloth* | ⭐ 426 | ⬇️ 125,230  
  Unsloth's optimized GGUF quantization of GLM-5.2, enabling efficient MoE inference on consumer hardware.

- **[GLM-5.2-NVFP4](https://huggingface.co/nvidia/GLM-5.2-NVFP4)**  
  *nvidia* | ⭐ 125 | ⬇️ 6,464  
  NVIDIA's FP4 quantized variant using Model Optimizer, pushing the envelope on compression for GLM-5.2 MoE.

- **[Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)**  
  *nvidia* | ⭐ 366 | ⬇️ 5,022,254  
  Massive download count — NVIDIA's FP4 quantization of Qwen 3.6 MoE, enabling high-throughput inference on limited hardware.

- **[Ornith-1.0-9B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-9B-GGUF)**  
  *deepreinforce-ai* | ⭐ 219 | ⬇️ 11,034  
  MIT-licensed GGUF quantization of the 9B Ornith model, popular for accessible permissive-use inference.

- **[Qwopus3.6-27B-Coder-Compat-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-Compat-MTP-GGUF)**  
  *Jackrong* | ⭐ 97 | ⬇️ 49,935  
  A Qwen 3.6-derived 27B coder with Multi-Token Prediction (MTP) compatibility in GGUF format.

---

## Ecosystem Signal

The week's trends reveal **three clear macro-movements**. First, **Mixture-of-Experts (MoE) has become the dominant architecture** for new releases — GLM-5.2, Qwen 3.5/3.6, Ornith, and DeepSeek V4 all employ MoE routing, reflecting the industry's bet on sparse activations for scaling without proportional compute costs. Second, **NVIDIA is aggressively moving upstream** — their NVFP4 quantizations of GLM-5.2 and Qwen3.6 (5M+ downloads) alongside LocateAnything-3B and Nemotron ASR signal a platform play to capture the enterprise inference stack.

Third, the **uncensored/abliterated ecosystem continues to thrive** despite (or because of) tightened governance on official models. HauhauCS's aggressive Qwen 3.6 variant leads all downloads at 3.3M, while huihui-ai's abliterated Gemma 4 coding model gains strong traction. Open-weight momentum remains strong — the Ornith family is MIT-licensed, and Microsoft's FastContext is fully open, contrasting with proprietary giants who haven't matched this weeks's open releases. Quantization fragmentation is real: GGUF dominates consumer use, while NVIDIA pushes FP4 via Model Optimizer, creating a bifurcated deployment landscape.

---

## Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — At 2,406 likes and 570K downloads, this 3B vision-language model for zero-shot localization is a standout. It's small enough to run on edge devices but powerful enough for production object detection workflows. Try it for any referring expression task — the quality-to-size ratio is exceptional.

2. **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** — With long-context models becoming critical for agentic and RAG pipelines, this 4B SFT model offers 256K+ context window at a fraction of the compute of larger alternatives. The Explorer SubAgent architecture is innovative and worth studying for anyone building retrieval-augmented or document-intensive applications.

3. **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** — As the third generation of MiniMax's multimodal model, M3 shows strong vision-language performance with 182K downloads in its debut week. It's a compelling alternative to proprietary multimodal APIs for developers needing local or private image-text reasoning.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*