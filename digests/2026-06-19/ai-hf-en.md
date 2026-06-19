# Hugging Face Trending Models Digest 2026-06-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-19 00:36 UTC

---

Here is the structured Hugging Face Trending Models Digest for **2026-06-19**.

---

## Hugging Face Trending Models Digest — 2026-06-19

### 1. Today's Highlights

This week's trending models showcase a pronounced shift toward **MoE (Mixture-of-Experts) architectures** and **multi-modal unification**, with Google's DiffusionGemma-26B and DeepSeek-V4-Pro leading in both scale and community engagement. The **Gemma 4** ecosystem continues to expand rapidly, spawning numerous community quantizations and fine-tunes, including uncensored and "obliterated" variants. Simultaneously, **audio generation** is gaining significant traction, with dedicated TTS and streaming ASR models from Boson AI and NVIDIA entering the top ranks. The dominance of **GGUF quantized models** for local inference remains undiminished, with Unsloth and community finetuners like DavidAU driving massive download counts.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **deepseek-ai/DeepSeek-V4-Pro**  
  Author: deepseek-ai | Likes: 4,956 | Downloads: 2,948,726  
  The highest-liked model on the leaderboard; a powerful conversational MoE model pushing open-weight performance to new heights.

- **zai-org/GLM-5.2**  
  Author: zai-org | Likes: 1,339 | Downloads: 4,307  
  A conversational MoE-DSA model from zai-org, gaining rapid community interest for its efficient architecture and instruction-following capability.

- **microsoft/FastContext-1.0-4B-SFT**  
  Author: microsoft | Likes: 203 | Downloads: 957  
  A small, efficient text-generation model optimized for long-context reasoning tasks, leveraging Qwen3 base with Microsoft’s Explorer SubAgent tuning.

- **nex-agi/Nex-N2-Pro**  
  Author: nex-agi | Likes: 327 | Downloads: 6,640  
  A Qwen3.5 MoE-based model designed for conversational and image-text-to-text tasks, positioned as a versatile mid-tier LLM.

- **lordx64/Qwable-v1**  
  Author: lordx64 | Likes: 118 | Downloads: 836  
  A Qwen3.5 MoE fine-tune targeting robust multilingual and multi-modal conversational capabilities.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **google/diffusiongemma-26B-A4B-it**  
  Author: google | Likes: 1,002 | Downloads: 527,080  
  A massive 26B-parameter diffusion transformer (4B active) fine-tuned for instruction-following; one of Google’s most popular open multi-modal models.

- **MiniMaxAI/MiniMax-M3**  
  Author: MiniMaxAI | Likes: 1,098 | Downloads: 56,162  
  A powerful image-text-to-text MoE agent model from MiniMax, trending for its strong multi-modal reasoning and agentic capabilities.

- **moonshotai/Kimi-K2.7-Code**  
  Author: moonshotai | Likes: 883 | Downloads: 229,156  
  A compressed multi-modal model optimized for code understanding, with integrated image feature extraction for visual code contexts.

- **bosonai/higgs-audio-v3-tts-4b**  
  Author: bosonai | Likes: 489 | Downloads: 57,380  
  A 4B-parameter text-to-speech model built on Higgs multimodal Qwen3, delivering high-quality voice synthesis from text.

- **nvidia/nemotron-3.5-asr-streaming-0.6b**  
  Author: nvidia | Likes: 537 | Downloads: 13,033  
  A compact 0.6B streaming automatic speech recognition model, notable for its cache-aware ASR design and low-latency inference.

- **zai-org/SCAIL-2**  
  Author: zai-org | Likes: 228 | Downloads: 0  
  A pose-driven character animation diffusion model for image-to-video generation, representing the frontier of controllable video synthesis.

- **Zyphra/ZONOS2**  
  Author: Zyphra | Likes: 114 | Downloads: 669  
  An Apache-2.0 licensed text-to-speech model, offering an open-weight alternative for speech synthesis in US English.

- **owensong/Inflect-Nano-v1**  
  Author: owensong | Likes: 83 | Downloads: 0  
  An ultra-small PyTorch TTS model designed for edge deployment and privacy-preserving speech synthesis.

#### 🔧 Specialized Models (code, math, medical, embeddings)

- **yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF**  
  Author: yuxinlu1 | Likes: 1,703 | Downloads: 211,424  
  A GGUF-quantized code-specialized variant of Gemma 4, combining reasoning and composition capabilities for developer workflows.

- **WeiboAI/VibeThinker-3B**  
  Author: WeiboAI | Likes: 405 | Downloads: 6,589  
  A 3B-parameter Qwen2-based model fine-tuned for mathematical reasoning, achieving strong accuracy at a very small scale.

- **CohereLabs/North-Mini-Code-1.0**  
  Author: CohereLabs | Likes: 448 | Downloads: 15,285  
  A compact Cohere MoE model specialized for code generation and conversational coding assistance.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **unsloth/diffusiongemma-26B-A4B-it-GGUF**  
  Author: unsloth | Likes: 307 | Downloads: 164,209  
  The official GGUF quantization of Google's DiffusionGemma, making the 26B model accessible for local GPU inference.

- **DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF**  
  Author: DavidAU | Likes: 394 | Downloads: 529,069  
  An extreme uncensored fine-tune of Qwen3.6 with aggressive thinking and coding optimizations; massive downloads indicate strong demand for unfiltered models.

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
  Author: HauhauCS | Likes: 1,969 | Downloads: 3,420,052  
  The highest-download model on the leaderboard; a heavily quantized, uncensored MoE variant of Qwen3.6 optimized for vision and aggressive creative tasks.

- **OBLITERATUS/Gemma-4-12B-OBLITERATED**  
  Author: OBLITERATUS | Likes: 350 | Downloads: 96,805  
  A community fine-tune of Gemma 4 described as "obliterated" — likely an unfiltered alignment removal, popular for experimental use.

- **unsloth/gemma-4-12b-it-GGUF**  
  Author: unsloth | Likes: 652 | Downloads: 918,431  
  The most downloaded GGUF version of Google's official Gemma 4, enabling broad consumer-grade inference of this state-of-the-art 12B model.

### 3. Ecosystem Signal

- **Model Family Momentum**: The **Qwen 3.6** and **Gemma 4** families dominate the trending chart, with Qwen 3.6 spawning the highest-download model (3.4M). **GLM 5.2** from zai-org also shows strong MoE community interest.

- **MoE is the New Default**: Over half of the top 30 models use Mixture-of-Experts architectures, reflecting the industry’s pivot to parameter-efficient scaling. Models like DeepSeek-V4-Pro and DiffusionGemma-26B prove that MoE enables larger effective capacity at lower inference cost.

- **Open-Weight vs. Proprietary**: The leaderboard is entirely open-weight, but heavily concentrated around a few vendor backbones (Google, DeepSeek, Alibaba/Qwen, Cohere). Proprietary firms like NVIDIA and Microsoft continue to release smaller, targeted models (ASR, long-context) that are not competing on raw scale.

- **Quantization & Fine-Tuning Boom**: Community quantization (especially GGUF via Unsloth) and aggressive fine-tuning (uncensored "obliterated" variants) account for roughly half of the top entries. The appetite for uncensored, locally runnable models is a defining characteristic of this snapshot.

### 4. Worth Exploring

1. **deepseek-ai/DeepSeek-V4-Pro**  
   The highest-liked model on the board. It represents the current state-of-the-art in open-weight MoE LLMs and is essential for anyone benchmarking or deploying high-performance conversational AI.

2. **google/diffusiongemma-26B-A4B-it**  
   The most ambitious open multi-modal model from Google this year. Its diffusion-transformer architecture and high download count make it a prime candidate for studying next-generation generation pipelines.

3. **DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF**  
   While its name is extreme, its 500K+ downloads and 394 likes signal a massive grassroots demand for unfiltered, highly optimized reasoning models. It is worth studying for the "uncensored model" ecosystem and the limits of alignment techniques.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*