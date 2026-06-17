# Hugging Face Trending Models Digest 2026-06-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-17 00:32 UTC

---

# Hugging Face Trending Models Digest — June 17, 2026

## Today's Highlights

This week's trending models are dominated by **multi-modal MoE architectures** and **code-specialized LLMs**, with DeepSeek V4 Pro (4,895 likes) and Qwen3.6-35B-A3B (2,135 likes) leading the pack. Google's DiffusionGemma marks a significant step in diffusion-based multi-modal LLMs, while NVIDIA's LocateAnything-3B highlights growing demand for visual grounding models. The quantization ecosystem remains hyperactive, with unsloth GGUF variants of nearly every major release attracting massive downloads. Notably, the "uncensored fine-tune" trend continues through community efforts like DavidAU and HauhauCS, indicating strong appetite for unfiltered model variants.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — deepseek-ai | 4,895 likes | 2,829,747 downloads
  Flagship MoE reasoning model from DeepSeek, trending as the most-liked model this week, likely due to strong reasoning benchmarks and open-weight availability.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — Qwen | 2,135 likes | 3,360,615 downloads
  Qwen's latest MoE vision-language model at 35B total / 3B active parameters, the most-downloaded model this week reflecting community trust in the Qwen lineage.

- **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)** — prefeitura-rio | 316 likes | 189,744 downloads
  Massive 397B MoE model trained on Rio de Janeiro municipal data, unusual as a government-developed large model, signaling institutional AI adoption.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 289 likes | 0 downloads
  New GLM-MoE-DSA architecture from zai-org, yet to see downloads but showing early community interest in its sparse attention design.

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** — WeiboAI | 172 likes | 0 downloads
  3B math-specialized model built on Qwen2, targeting reasoning tasks with a compact footprint.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — google | 944 likes | 375,974 downloads
  Google's first diffusion-based multi-modal LLM combining Gemma with diffusion heads for image generation, a novel architecture generating significant buzz.

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** — MiniMaxAI | 1,010 likes | 25,064 downloads
  Multi-modal MoE agent model with vision-language capabilities, popular for its agentic architecture design.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 2,101 likes | 98,698 downloads
  NVIDIA's visual grounding model for object localization, trending due to practical applications in robotics and computer vision pipelines.

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** — google | 1,053 likes | 1,223,383 downloads
  Gemma 4's "any-to-any" unified model capable of handling text, image, and audio inputs/outputs, driving strong adoption.

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** — ideogram-ai | 559 likes | 12,466 downloads
  FP8 quantized version of Ideogram's text-to-image diffusion model, balancing quality and efficiency for image generation.

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** — bosonai | 464 likes | 43,361 downloads
  Multi-modal TTS model integrating text-to-speech with Qwen3 architecture, notable for its hybrid generation approach.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia | 467 likes | 5,777 downloads
  Streaming ASR model with cache-aware architecture, optimized for real-time speech recognition applications.

- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** — zai-org | 205 likes | 0 downloads
  Pose-driven character animation diffusion model for video generation, an emerging category in the video generation space.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — yuxinlu1 | 1,160 likes | 60,921 downloads
  Code-specialized Gemma 4 fine-tune using the Fable5 and Composer 2.5 recipe, one of the most popular coding models this week.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — moonshotai | 800 likes | 102,206 downloads
  Moonshot AI's code-focused model with compressed tensor techniques, gaining traction for coding efficiency.

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** — CohereLabs | 412 likes | 12,129 downloads
  Cohere's small MoE code model, competing in the compact-code-assistant space with strong architecture design.

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** — microsoft | 159 likes | 192 downloads
  Microsoft's 4B model optimized for long-context efficiency, part of the Explorer SubAgent family for tool-use applications.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 1,887 likes | 2,716,651 downloads
  Uncensored GGUF variant of Qwen3.6-35B-A3B with aggressive fine-tuning, extremely popular for unrestricted use cases.

- **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)** — DavidAU | 370 likes | 366,279 downloads
  Heavily modified Qwen3.6 fine-tune combining multiple model influences, reflecting community hybridization trends.

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** — unsloth | 633 likes | 1,009,602 downloads
  Unsloth's optimized GGUF quantization of Gemma 4, the go-to format for local inference.

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** — OBLITERATUS | 335 likes | 76,044 downloads
  Aggressive fine-tune of Gemma 4 with "obliterated" safety and alignment filters, part of the uncensored model trend.

- **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** — unsloth | 287 likes | 120,435 downloads
  GGUF version of DiffusionGemma, enabling local deployment of Google's diffusion-based multi-modal model.

---

## Ecosystem Signal

**MoE dominates across every category.** Virtually every major release this week — DeepSeek V4 Pro, Qwen3.6-35B-A3B, Rio-3.5-Open, GLM-5.2, North-Mini-Code — uses Mixture-of-Experts architectures, confirming MoE as the default scaling strategy for both training efficiency and inference cost reduction.

**The "uncensored fine-tune" movement is accelerating.** Models with names containing "Uncensored," "Heretic," or "OBLITERATED" are among the most downloaded, indicating strong community demand for models without alignment guardrails — despite (or because of) potential safety concerns. This trend raises questions about model governance as these variants proliferate.

**Quantization as a service.** Unsloth has become the de facto standard for GGUF quantization in the ecosystem, producing variants for nearly every major model. Their 1M+ download counts suggest that local LLM deployment continues to grow, with users preferring optimized inference formats over raw checkpoints.

**Diffusion meets LLMs.** Google's DiffusionGemma represents a architectural shift — merging autoregressive LLMs with diffusion-based generation. If this approach gains traction, it could redefine how multi-modal models handle generation tasks.

**Government AI is emerging.** Brazilian municipality "prefeitura-rio" releasing a 397B model is unprecedented, signaling that government entities are becoming AI model developers rather than just consumers.

---

## Worth Exploring

1. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — The most architecturally novel model this week, merging autoregressive language modeling with diffusion heads. Worth studying as a potential template for future multi-modal architectures.

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Sits at the intersection of vision-language models and practical grounding tasks. With 2,101 likes from a 3B model, it's punching above its weight class and signals demand for compact yet capable vision models.

3. **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — The most downloaded model, and the base for many of the week's fine-tunes. Understanding its MoE architecture and vision-language integration is essential for anyone tracking the Qwen family's evolution.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*