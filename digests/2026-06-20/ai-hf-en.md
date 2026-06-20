# Hugging Face Trending Models Digest 2026-06-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-20 00:28 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-06-20

## 1. Today's Highlights

This week's Hugging Face ecosystem is dominated by **DeepSeek-V4-Pro**, which tops the charts with nearly 5,000 weekly likes and over 3 million downloads—a clear signal of the community's appetite for frontier open-weight reasoning models. **Google's diffusiongemma-26B-A4B-it** also surges, showcasing the growing convergence of diffusion models with multimodal understanding. The quantization ecosystem remains hyperactive, with Unsloth leading the GGUF conversion charge across multiple model families including GLM-5.2, Kimi-K2.7-Code, and MiniMax-M3. Notably, **uncensored community fine-tunes** continue to proliferate—HauhauCS's Qwen3.6 variant has accumulated over 3.7 million downloads despite sharing only a week ago. Three key trends emerge: the rapid commoditization of 25-40B MoE architectures, the rise of multimodal model families offering "any-to-any" interfaces, and the increasing sophistication of community quantization pipelines that make large models accessible on consumer hardware.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — deepseek-ai |  4,969 likes, 3,015,772 downloads  
  The week's runaway leader: a next-generation conversational MoE model pushing open-weight frontier reasoning, likely the most capable openly available LLM this week.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org |  1,532 likes, 11,871 downloads  
  A new MoE-DSA architecture from ZAI Labs, blending sparse attention with mixture-of-experts for efficient conversational AI.

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — yuxinlu1 |  1,845 likes, 268,102 downloads  
  A heavily fine-tuned Gemma variant optimized for coding and compositional reasoning, achieving outsized popularity through its GGUF distribution.

- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** — WeiboAI |  458 likes, 12,148 downloads  
  A compact 3B model trained with a "chain-of-thought with style" approach, targeting mathematical reasoning at minimal compute footprint.

- **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** — nex-agi |  335 likes, 7,507 downloads  
  A Qwen3.5-MoE derivative optimized for agentic workflows and tool-use, signaling enterprise interest in LLM-powered agents.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS |  2,006 likes, 3,730,978 downloads  
  An uncensored, "aggressive" fine-tune of Qwen3.6 MoE with vision capabilities—massively popular despite its niche positioning.

- **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)** — DavidAU |  406 likes, 588,753 downloads  
  A maximalist community experiment: blends Claude-style personality with Qwen3.6 MoE, uncensored, GGUF-optimized for coding and reasoning.

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** — microsoft |  229 likes, 1,437 downloads  
  Microsoft's Explorer SubAgent model: a compact 4B model designed for efficient long-context retrieval and agentic sub-tasks.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** — MiniMaxAI |  1,133 likes, 67,836 downloads  
  A state-of-the-art multimodal vision-language model balancing strong image-text understanding with MoE efficiency.

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — google |  1,010 likes, 601,208 downloads  
  A breakthrough "diffusion transformer" that natively generates images and text, merging diffusion and autoregressive paradigms into a single instruct-tuned model.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — moonshotai |  909 likes, 274,865 downloads  
  MoonShot's code-specialized multimodal model leveraging compressed-tensors for efficient image-to-code reasoning pipelines.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia |  2,194 likes, 228,669 downloads  
  NVIDIA's lightweight universal object localization model: given an image and text prompt, it precisely locates any described entity.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia |  562 likes, 18,809 downloads  
  A tiny 0.6B streaming ASR model with cache-aware architecture, ideal for real-time speech recognition on edge devices.

- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** — zai-org |  233 likes, 0 downloads (new release)  
  A pose-driven character animation model for image-to-video generation, enabling controlled human motion synthesis.

- **[Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2)** — Zyphra |  116 likes, 719 downloads  
  A new Apache-2.0 licensed text-to-speech model targeting natural prosody control for US English.

- **[owensong/Inflect-Nano-v1](https://huggingface.co/owensong/Inflect-Nano-v1)** — owensong |  122 likes, 0 downloads  
  An ultra-small TTS model optimized for embedded and low-latency speech synthesis applications.

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** — bosonai |  492 likes, 69,143 downloads  
  A 4B multimodal transformer that can generate both text and speech, built on Higgs' Qwen3-based architecture.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** — CohereLabs |  458 likes, 17,693 downloads  
  Cohere's compact code-specialized MoE model (2.1B active parameters) designed for high-quality code generation and comprehension at low cost.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** — unsloth |  178 likes, 8,392 downloads  
  Unsloth's 2-5 bit quantization of GLM-5.2, enabling SOTA conversational MoE to run on consumer hardware.

- **[unsloth/Kimi-K2.7-Code-GGUF](https://huggingface.co/unsloth/Kimi-K2.7-Code-GGUF)** — unsloth |  141 likes, 33,667 downloads  
  GGUF conversion of Kimi's code multimodal model, optimized for local code-image reasoning.

- **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)** — unsloth |  318 likes, 202,867 downloads  
  The first GGUF quantization of Google's diffusiongemma, making image-text generation accessible on mid-range GPUs.

- **[unsloth/MiniMax-M3-GGUF](https://huggingface.co/unsloth/MiniMax-M3-GGUF)** — unsloth |  107 likes, 24,354 downloads  
  GGUF conversion of MiniMax-M3, bringing fast multimodal inference to llama.cpp users.

- **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)** — Jackrong |  261 likes, 148,525 downloads  
  A Qwen3.6-based coding MoE with Multi-Token Prediction heads, GGUF-quantized for local deployment.

- **[lordx64/Qwable-v1](https://huggingface.co/lordx64/Qwable-v1)** — lordx64 |  130 likes, 1,865 downloads  
  A Qwen3.5-MoE fine-tune optimized for Qwen's "agentic" vocabulary, targeting better instruction following.

- **[Mia-AiLab/Qwable-3.6-27b](https://huggingface.co/Mia-AiLab/Qwable-3.6-27b)** — Mia-AiLab |  104 likes, 16,105 downloads  
  Qwen3.6 GGUF quantizations, part of the growing "Qwable" series making recent Qwen releases accessible.

- **[bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF](https://huggingface.co/bytkim/Qwen3.6-27B-MTP-pi-tune-GGUF)** — bytkim |  86 likes, 8,138 downloads  
  A position-interpolation fine-tune combined with MTP, enabling extended context lengths on Qwen3.6 MoE.

- **[zai-org/GLM-5.2-FP8](https://huggingface.co/zai-org/GLM-5.2-FP8)** — zai-org |  105 likes, 93,927 downloads  
  Official FP8 quantization of GLM-5.2, enabling high-throughput inference on hardware with FP8 tensor cores.

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** — google |  1,096 likes, 1,590,882 downloads  
  Google's multimodal "any-to-any" Gemma model—can process and generate text, images, and other modalities in a single unified architecture.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 |  98 likes, 0 downloads  
  Latest in the yuxinlu1 series: a 3.5x scaled Gemma fine-tune targeting terminal-based agentic coding workflows.

- **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)** — prefeitura-rio |  325 likes, 190,639 downloads  
  A massive 397B MoE model (Qwen3.5 architecture) released by the city of Rio de Janeiro—an unusual but powerful open-weight release from a government entity.

## 3. Ecosystem Signal

**MoE architectures are now the default.** Nearly every major new model this week—DeepSeek-V4-Pro, GLM-5.2, MiniMax-M3, diffusiongemma, North-Mini-Code—uses mixture-of-experts. The era of dense 70B+ models dominating HuggingFace may be waning in favor of MoE models with 25-40B total parameters and 3-5B active parameters, which offer GPT-4-class intelligence at a fraction of inference cost.

**Qwen derivatives dominate community fine-tuning.** The Qwen3.6 and Qwen3.5-MoE families underpin roughly a third of this week's trending models, suggesting these base models have become the preferred bedrock for community customization—especially for uncensored, aggressive, or "personality" fine-tunes. This mirrors the earlier Llama-era pattern where one base model family achieved critical mass.

**The GGUF ecosystem has become indispensable.** Unsloth alone appears five times in the top 30, and GGUF variants now regularly out-download their original safetensors counterparts. The availability of high-quality quantization (from FP8 down to 2-bit) is democratizing access to models that would otherwise require enterprise GPU clusters. The diffusiongemma GGUF reaching 200K+ downloads in its first week signals that multimodal models are now firmly part of the local deployment ecosystem.

**Government and enterprise open-weight releases.** Rio-3.5-Open-397B from a city government and FastContext from Microsoft point to a maturing trend: institutional actors are releasing serious models openly, albeit often with caveats like restricted commercial use or geographical limitations.

## 4. Worth Exploring

1. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — This is arguably the most architecturally innovative model this week, merging diffusion and autoregressive generation in a single instruct-tuned MoE. Researchers and practitioners interested in the future of multimodal foundation models should study this release closely—it represents a potential paradigm shift away from separate diffusion and language models.

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 2,194 likes and immediate community adoption, this 3B model punches far above its weight. It enables precise visual grounding without requiring bounding box annotations, making it a powerful building block for vision-based agents, robotics, and retrieval-augmented multimodal pipelines. Its small footprint means it can run on device alongside other models.

3. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — The DSA (Dual Sparse Attention) architecture in GLM-5.2 deserves attention for its potential to extend context windows without quadratic compute scaling. Combined with the FP8 quantization variant available, this release provides a ready-to-use testbed for exploring sparse attention mechanisms in production conversational AI systems.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*