# Hugging Face Trending Models Digest 2026-06-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-21 00:29 UTC

---

Here is the structured Hugging Face Trending Models Digest for 2026-06-21.

---

## Hugging Face Trending Models Digest – 2026-06-21

### 1. Today's Highlights

This week’s trending models showcase a significant shift toward **MoE (Mixture-of-Experts) architectures** and **multimodal unification**, with models like `Qwen3.6-35B-A3B`, `GLM-5.2`, and `google/diffusiongemma` dominating the charts. **DeepSeek-V4-Pro** continues its reign as the overall most-liked model, while community quantization efforts (especially GGUF variants of `gemma-4-12B` and `Qwen3.6-27B`) are attracting massive download numbers—indicating strong demand for locally runnable, high-performance models. A notable emerging trend is the rise of **"any-to-any"** and **image-text-to-text** pipelines, signaling that the boundary between language-only and multimodal models is rapidly dissolving.

### 2. Trending Models by Category

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** – deepseek-ai – 4,984 likes / 2.8M downloads  
  The top-performing conversational LLM on the leaderboard, likely a major update to the DeepSeek line with advanced reasoning and context handling.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – zai-org – 1,686 likes / 19.7K downloads  
  A new MoE conversational model from the GLM family, gaining traction for its efficient architecture and strong dialogue capabilities.

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** – yuxinlu1 – 1,982 likes / 312K downloads  
  A heavily fine-tuned, GGUF-quantized coding variant of Gemma-4-12B, optimized for reasoning and code generation.

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** – WeiboAI – 511 likes / 16.3K downloads  
  A compact 3B parameter model specializing in mathematical reasoning, based on Qwen2 architecture.

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** – microsoft – 244 likes / 2.0K downloads  
  Microsoft's new 4B model optimized for long-context tasks and agent-based exploration patterns.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – HauhauCS – 2,040 likes / 3.8M downloads  
  An uncensored, aggressive-tuned MoE variant of Qwen3.6 with vision capabilities, extremely popular for edge-case roleplay and uncensored generation.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** – google – 1,022 likes / 673K downloads  
  A 26B parameter MoE model that jointly handles image-text-to-text and conversational tasks, representing Google's push toward unified multimodal architectures.

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** – MiniMaxAI – 1,159 likes / 85.8K downloads  
  A new multimodal VL model from MiniMax, likely competitive with GPT-4V-level vision-language understanding.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** – moonshotai – 928 likes / 318K downloads  
  Kimi's code-focused multimodal model with compressed-tensor optimization for efficient image-feature extraction.

- **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)** – prefeitura-rio – 327 likes / 191K downloads  
  A massive 397B-parameter open-weight MoE for image-text-to-text, likely built for high-throughput conversational AI.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – nvidia – 2,216 likes / 236K downloads  
  NVIDIA's new small-model for visual grounding and object localization, trending for its high accuracy at just 3B params.

- **[ostris/ideogram_4_turbotime_lora](https://huggingface.co/ostris/ideogram_4_turbotime_lora)** – ostris – 81 likes / 1.7K downloads  
  A LoRA adapter for Ideogram-4 that accelerates inference via "turbotime" optimization, popular among generative artists.

#### 🔧 Specialized Models (code, math, medical, embeddings)

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** – nvidia – 583 likes / 21.4K downloads  
  A streaming automatic speech recognition model with cache-aware architecture for low-latency applications.

- **[LiquidAI/LFM2.5-Embedding-350M](https://huggingface.co/LiquidAI/LFM2.5-Embedding-350M)** – LiquidAI – 81 likes / 6.1K downloads  
  A compact 350M sentence-embedding model from the Liquid foundation model family, optimized for semantic similarity.

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** – bosonai – 496 likes / 72.2K downloads  
  A 4B parameter TTS model built on the Higgs multimodal Qwen3 backbone, bridging text-generation and speech synthesis.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** – unsloth – 205 likes / 22.6K downloads  
  The official GGUF quantization of GLM-5.2 by Unsloth, enabling efficient local inference on consumer hardware.

- **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** – Jackrong – 269 likes / 169K downloads  
  A GGUF quantized version of the 27B Qwen3.6 MoE code model, popular for its balance of coding ability and VRAM efficiency.

- **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)** – DavidAU – 411 likes / 588K downloads  
  A heavily fine-tuned, uncensored GGUF blend of Qwen3.6 with multiple instruction sets, extremely popular for creative and uncensored tasks.

### 3. Ecosystem Signal

The model ecosystem is undergoing a clear **"MoE-ification"** and **"multimodal-ization"** trend. Over half the top-30 models now use Mixture-of-Experts (e.g., Qwen3.6 MoE, GLM-5.2, DiffusionGemma, Rio-3.5), allowing for massive parameter counts with manageable inference costs on consumer hardware. **Open-weight models are dominant**, with DeepSeek, Google, and Zhipu AI leading the charge, while proprietary providers (MiniMax, Kimi) also release competitive open variants. The **GGUF quantization ecosystem** is booming—quantized community fine-tunes (especially uncensored/agentic variants) are receiving the highest download counts, indicating a strong DIY/self-hosting movement. On the application side, **code generation** (Gemma-4 coder, Kimi-K2.7-Code) and **visual grounding** (LocateAnything) are the hottest verticals, while **any-to-any models** (gemma-4-12B-it) hint at a future where a single model handles text, image, audio, and video seamlessly.

### 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – With 2,216 likes and just 3B parameters, this model achieves state-of-the-art visual grounding performance. It's a prime candidate for studying how NVIDIA is achieving high accuracy with small models, and for practical integration into object detection pipelines.

2. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** – This model represents Google's bet on **unified multimodal MoE**. With 673K downloads and a "conversational" tag combined with image-text-to-text, it's worth studying to understand the future direction of multimodal chat agents.

3. **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)** – Despite its absurdly long name, this model is **seminal** for the community fine-tuning ecosystem: it combines multi-model instruction blending (Claude-4.6 Opus + Qwen3.6), uncensored fine-tuning, and extreme GGUF quantization. With 588K downloads, it shows the massive demand for creative, uncensored, locally-run models.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*