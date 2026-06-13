# Hugging Face Trending Models Digest 2026-06-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-13 00:32 UTC

---

# Hugging Face Trending Models Digest — 2026-06-13

## 1. Today's Highlights

This week's trending models are dominated by two major forces: **DeepSeek-V4-Pro** continues its explosive run with nearly 3.4M downloads and 4,796 weekly likes, cementing its position as the most popular model on the Hub. **NVIDIA's LocateAnything-3B** has surged to #2 with 1,925 likes, signaling strong demand for vision-language grounding models. **Google's Gemma-4-12B** family continues to see massive community adoption, with multiple fine-tunes and quantizations (OBLITERATUS, huihui-ai, and unsloth GGUF variants) all ranking highly. The **Ideogram-4** text-to-image model has spawned ecosystem variants (FP8, NF4, community fine-tunes), while **Magenta-RealTime-2** and **Bernini-R** represent notable advances in real-time audio and video generation respectively. Quantization formats (GGUF) remain the dominant deployment format across the board.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — deepseek-ai | 4,796 likes | 3.38M downloads  
  The latest flagship from DeepSeek, showcasing strong conversational ability and massive community adoption as the top trending model this week.

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** — google | 966 likes | 911K downloads  
  Google's unified any-to-any model with instruction tuning, driving significant real-world usage across both inference and fine-tuning workflows.

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** — OBLITERATUS | 254 likes | 43.6K downloads  
  A community fine-tune of Gemma-4-12B removing safety filters, popular for unrestricted conversational use cases.

- **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** — nex-agi | 223 likes | 2.6K downloads  
  A Mixture-of-Experts model based on Qwen3.5, targeting high-performance text generation with efficient parameter usage.

- **[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)** — nex-agi | 180 likes | 2.8K downloads  
  Smaller variant of the Nex-N2 family, offering text generation in a more compact MoE architecture.

- **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)** — XiaomiMiMo | 97 likes | 2.6K downloads  
  Xiaomi's latest agent-capable model, designed for efficient deployment with FP4 quantization and flash attention.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 1,925 likes | 149K downloads  
  A 3B parameter vision-language model for image feature extraction and object localization, trending for its precise grounding capabilities.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — moonshotai | 337 likes | 0 downloads  
  Kimi's code-specialized compressed vision-language model, applying compression techniques to reduce model footprint.

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** — MiniMaxAI | 251 likes | 442 downloads  
  A multimodal vision-language model from MiniMax, handling image-to-text generation with broad visual understanding.

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** — ideogram-ai | 503 likes | 5K downloads  
  FP8 quantized version of Ideogram-4, enabling high-quality text-to-image generation with reduced memory footprint.

- **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)** — ideogram-ai | 327 likes | 2.9K downloads  
  NF4 quantized variant of Ideogram-4, offering further compression for the diffusion-based image generation pipeline.

- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** — zai-org | 134 likes | 0 downloads  
  A pose-driven character animation model for image-to-video generation, enabling controlled video synthesis from static images.

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bydance/Bernini-R)** — ByteDance | 229 likes | 373 downloads  
  ByteDance's image-text-to-video renderer, demonstrating strong video generation from multimodal inputs with Apache-2.0 licensing.

- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** — google | 184 likes | 6.5K downloads  
  Google's real-time text-to-audio model, pushing the frontier of low-latency music and audio generation with TFLite deployment.

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** — bosonai | 386 likes | 29.3K downloads  
  A 4B parameter text-to-speech model built on Qwen3 multimodal architecture, delivering high-quality synthetic voice outputs.

- **[MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)** — MisoLabs | 195 likes | 0 downloads  
  A PyTorch-based text-to-speech synthesis model, focusing on natural voice generation with safetensor weights.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia | 392 likes | 3.6K downloads  
  A lightweight streaming automatic speech recognition model (0.6B) with cache-aware architecture for real-time deployment.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** — CohereLabs | 335 likes | 4.1K downloads  
  A code-specialized Mixture-of-Experts model from Cohere, optimized for programming tasks and conversational coding assistance.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** — unsloth | 214 likes | 17.7K downloads  
  GGUF quantization of Google's DiffusionGemma, enabling efficient local deployment of the 26B parameter diffusion model.

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** — unsloth | 570 likes | 836.5K downloads  
  The most popular GGUF variant of Gemma-4-12B, widely used for local inference with llama.cpp-compatible tools.

- **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** — unsloth | 206 likes | 208.9K downloads  
  Quantization-Aware Training GGUF variant of Gemma-4-12B, maintaining higher fidelity after compression.

- **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)** — unsloth | 148 likes | 221.2K downloads  
  Large-scale QAT GGUF variant of the 26B parameter Gemma-4 model, balancing quality and compression.

- **[huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)** — huihui-ai | 147 likes | 8K downloads  
  An "abliterated" variant of Gemma-4-12B, modified to remove content restrictions for unrestricted generation.

- **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** — Jackrong | 116 likes | 0 downloads  
  A 27B code-specialized model quantized to GGUF, combining Qwen3.6 architecture with multi-task prompting for coding.

- **[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)** — google | 133 likes | 175.6K downloads  
  Google's official QAT-quantized GGUF release for Gemma-4-12B, establishing a first-party quantization benchmark.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 1,722 likes | 2.39M downloads  
  A heavily modified, uncensored 35B MoE vision-language model with GGUF support, extremely popular for unrestricted multimodal use.

- **[Comfy-Org/Ideogram-4](https://huggingface.co/Comfy-Org/Ideogram-4)** — Comfy-Org | 142 likes | 0 downloads  
  ComfyUI-compatible distribution of Ideogram-4, enabling workflow integration for the diffusion image generation model.

- **[RazzzHF/Realism_Engine_Ideogram_4](https://huggingface.co/RazzzHF/Realism_Engine_Ideogram_4)** — RazzzHF | 83 likes | 0 downloads  
  A realism-focused fine-tune of Ideogram-4, specializing in photorealistic image generation outputs.

## 3. Ecosystem Signal

The current ecosystem reveals **convergence around large multimodal models** as the dominant paradigm. Google's **Gemma-4** family has become the most active fine-tuning substrate, with at least 9 variants in the top 30 spanning GGUF quantizations (unsloth, Google official), abliterated versions (huihui-ai, OBLITERATUS), and both 12B and 26B sizes. **DeepSeek-V4-Pro** remains the pure-play LLM leader, but the landscape is shifting toward unified vision-language architectures.

**Quantization formats are now table stakes** — GGUF variants consistently appear alongside their source models, and official first-party GGUF releases (Google's QAT-quantized Gemma-4) signal that compression is being integrated into the core model release process. The **MoE architecture** trend continues: 7 of the top 30 models use Mixture-of-Experts layers (Gemma-4, Qwen3.6 variants, DiffusionGemma, North-Mini-Code), reflecting the industry's push toward efficient scaling.

**Open-weight momentum is strong** — the presence of Chinese AI labs (DeepSeek, Moonshot, MiniMax, Xiaomi, ByteDance) alongside Western players (Google, NVIDIA, Cohere, Ideogram) indicates a truly global and increasingly open model ecosystem. The popularity of "uncensored" and "abliterated" fine-tunes (HauhauCS, OBLITERATUS, huihui-ai) highlights ongoing community demand for models without use restrictions, even as major labs adopt more cautious release policies.

**Video and audio generation** is showing new momentum: Bernini-R (ByteDance) and SCAIL-2 (zai-org) for video, and MisoTTS, Higgs-Audio-v3, and Magenta-RealTime-2 for audio, all suggest a maturing multimodal generation landscape beyond static images.

## 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — A compact yet powerful vision grounding model (3B parameters) with 1,925 weekly likes. Its ability to localize objects in images with high precision makes it ideal for robotics, document understanding, and visual QA pipelines. The relatively small size enables deployment on edge devices.

2. **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** — Google's real-time text-to-audio model represents a significant step forward in low-latency generative audio. Its TFLite format suggests production-ready deployment, and the accompanying arXiv papers (2508.04651, 2508.05207) provide important technical context for researchers exploring real-time multimodal generation.

3. **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** — Apache-2.0 licensed image-text-to-video generation is still rare, and Bernini-R's 229 likes with few downloads suggests immense potential. As video generation becomes more accessible, this model is worth studying for its architectural approach to multimodal temporal synthesis.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*