# Hugging Face Trending Models Digest 2026-06-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-23 00:28 UTC

---

# Hugging Face Trending Models Digest — 2026-06-23

## Today's Highlights

This week's trendboard is dominated by major releases from **DeepSeek**, **NVIDIA**, and **Google**, with **DeepSeek-V4-Pro** (5,012 likes, 2.4M downloads) commanding the highest community engagement. The **GLM-5.2** family continues its strong run with multiple quantized variants from both zai-org and unsloth. A significant theme this week is the rise of **MoE (Mixture-of-Experts) architectures** across both language and vision models, with several Qwen3.5/3.6-based MoE fine-tunes appearing. The **Gemma-4** ecosystem is also expanding rapidly, particularly in coding and agentic variants, while **LiquidAI** introduces a new generation of embedding models.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — deepseek-ai | 5,012 likes, 2.4M downloads  
  The latest flagship from DeepSeek, a conversational MoE model built on the v4 architecture, trending as the most-liked model this week.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 2,030 likes, 33,589 downloads  
  A conversational MoE model using the GLM architecture with DSA attention, gaining traction as a strong open-weight alternative.

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** — google | 1,139 likes, 1.9M downloads  
  Google's latest any-to-any unified model supporting image-text-to-text, driving significant community adoption.

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** — CohereLabs | 481 likes, 21,078 downloads  
  A compact MoE code model from Cohere, optimized for code generation and instruction following.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,113 likes, 4M downloads  
  An uncensored, aggressive variant of Qwen3.6 with MoE architecture and vision capabilities — the most downloaded model this week.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 2,291 likes, 247K downloads  
  A 3B image-feature-extraction model for object localization, trending for its precise spatial understanding capabilities.

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** — MiniMaxAI | 1,208 likes, 119K downloads  
  A multimodal VL model from MiniMax, supporting image-text-to-text with strong visual reasoning.

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — google | 1,049 likes, 874K downloads  
  A massive diffusion-based multimodal model with 26B parameters (4B active), combining generation with conversational abilities.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia | 629 likes, 34K downloads  
  A streaming ASR model with cache-aware architecture, optimized for low-latency speech recognition.

- **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** — owensong | 166 likes, 0 downloads  
  An ultra-small text-to-speech model, notable for its minimal footprint despite minimal downloads so far.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — yuxinlu1 | 2,168 likes, 414K downloads  
  A heavily fine-tuned Gemma-4 coding variant using the Fable5 + Composer2.5 recipe, extremely popular for code generation.

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** — WeiboAI | 609 likes, 32K downloads  
  A compact math-focused reasoning model based on Qwen2, trending for efficient mathematical problem-solving.

- **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** — LiquidAI | 100 likes, 8.8K downloads  
  A 350M parameter embedding model from LiquidAI, built on the LFM2.5 architecture for sentence similarity.

- **[LiquidAI/LFM2.5-ColBERT-350M](https://huggingface.co/LiquidAI/LFM2.5-ColBERT-350M)** — LiquidAI | 78 likes, 2.2K downloads  
  A ColBERT variant of LiquidAI's embedding model, optimized for efficient retrieval with late interaction.

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** — microsoft | 288 likes, 3.4K downloads  
  A 4B model focused on efficient long-context processing, using the Explorer SubAgent approach.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** — unsloth | 253 likes, 41K downloads  
  Unsloth's optimized GGUF quantization of GLM-5.2, enabling efficient local inference.

- **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** — zai-org | 133 likes, 334K downloads  
  FP8 quantized variant of GLM-5.2, offering reduced memory footprint while maintaining quality.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 133 likes, 6.6K downloads  
  A GGUF-quantized reasoning model blending Qwen3.5 with Claude-style mythos-tuning.

- **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** — Jackrong | 281 likes, 214K downloads  
  A heavily downloaded Qwen3.6-based 27B coder with MTP (Multi-Turn Prediction) and vision capabilities.

- **[bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)** — bytkim | 106 likes, 52K downloads  
  A GGUF variant of Qwen3.6 with MTP and pi-tuning, optimized for local deployment.

## Ecosystem Signal

**MoE architectures are becoming the default** — both major new releases (DeepSeek-V4-Pro, GLM-5.2, DiffusionGemma) and community fine-tunes increasingly leverage Mixture-of-Experts designs, offering better efficiency at scale. **Qwen3.6 has emerged as the dominant base for community fine-tunes**, with at least 5 independently authored variants appearing this week alone, suggesting strong community tooling and model compatibility. **Gemma-4 adoption is accelerating**, particularly for coding and agentic use cases, with yuxinlu1's fine-tunes achieving 2K+ likes and 400K+ downloads, rivaling first-party popularity. **Uncensored and "aggressive" tuning** continues to be a significant driver of download numbers, as evidenced by HauhauCS's 4M downloads. **Quantization formats are diversifying** — GGUF remains dominant for local inference, but FP8 quantizations (as seen with GLM-5.2-FP8) are gaining ground, and we're seeing more attention to specialized variants like MTP-tuned and pi-tuned models. **Embeddings are getting dedicated attention** with LiquidAI's LFM2.5 family, signaling growing interest in retrieval-augmented generation infrastructure. Finally, **NVIDIA continues to push specialized domain models** (ASR, localization) alongside general-purpose LLMs, indicating a platform play across modalities.

## Worth Exploring

1. **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — The highest-liked model with 5K+ likes and 2.4M downloads. This is likely the strongest open-weight MoE conversational model currently available, and its architecture will set benchmarks for the rest of the year. Essential for anyone tracking frontier model progress.

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — A niche but powerful model at only 3B parameters, excelling at spatial understanding tasks. Its combination of efficiency and precision makes it ideal for robotics, UI navigation, or any application needing grounded object localization.

3. **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** — With retrieval-augmented generation becoming standard, a new generation of efficient embedding models is significant. At 350M parameters, this offers a compelling balance of quality and speed for RAG pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*