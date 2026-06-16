# Hugging Face Trending Models Digest 2026-06-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-16 00:36 UTC

---

Here is the **Hugging Face Trending Models Digest** for **2026-06-16**.

---

## 1. Today’s Highlights

This week’s trending chart is defined by a massive surge in **uncensored and community-merged vision-language models**, led by the explosive adoption of HauhauCS’s Qwen3.6-based fine-tune. DeepSeek-V4-Pro continues its dominant run as the most-liked model on the platform, signaling sustained demand for high-performance open-weight conversational LLMs. The ecosystem is also seeing a strong push toward **MoE (Mixture-of-Experts) architectures** across both language and multimodal pipelines, with Google’s DiffusionGemma and Gemma-4 series driving significant quantization activity from Unsloth. Meanwhile, specialized models for coding (Kimi-K2.7, Cohere’s North-Mini-Code) and real-time ASR (Nvidia’s Nemotron-3.5) highlight deepening vertical use-cases.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — deepseek-ai | 4,862 likes, 2.9M downloads  
  The top trending model overall; a powerful conversational MoE LLM that has become the de facto open-weight alternative for high-end reasoning and chat.

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** — CohereLabs | 388 likes, 11k downloads  
  A compact, MoE-based code generation model from Cohere, trending for its strong performance in resource-constrained coding workflows.

- **[silx-ai/Quasar-Preview](https://huggingface.co/silx-ai/Quasar-Preview)** — silx-ai | 81 likes, 363 downloads  
  A new long-context text-generation model from silx-ai, gaining attention for pushing inference efficiency in extended conversation tasks.

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** — unsloth | 613 likes, 980k downloads  
  Unsloth’s GGUF quant of Google’s Gemma-4 instruct model, the most downloaded variant of the Gemma-4 series for local deployment.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 2,054 likes, 86k downloads  
  A 3B image-text-to-text model capable of zero-shot visual grounding and object localization, trending for its nifty interactive demos.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 1,844 likes, 2.7M downloads  
  An uncensored MoE vision-language model fine-tuned from Qwen3.6, the second most-downloaded model this week, driven by demand for unrestricted multimodal generation.

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** — bosonai | 445 likes, 38k downloads  
  A 4B text-to-speech model built on Qwen3’s multimodal backbone, trending for its natural prosody and low-latency inference.

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** — ideogram-ai | 546 likes, 10k downloads  
  The FP8 quant of Ideogram 4, a diffusion-based text-to-image model, trending as the leading choice for high-quality, low-memory image generation.

- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)** — zai-org | 188 likes, 0 downloads (new)  
  A pose-driven character animation diffusion model (image-to-video), signaling growing interest in controllable video generation from static inputs.

- **[Zyphra/ZONOS2](https://huggingface.co/Zyphra/ZONOS2)** — Zyphra | 87 likes, 414 downloads  
  An Apache-2.0 licensed text-to-speech model, well-received for its open license and natural voice quality.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — moonshotai | 740 likes, 56k downloads  
  A compressed image-feature-extraction model optimized for code understanding and repository-level tasks, a key tool for AI-assisted software engineering.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia | 422 likes, 5k downloads  
  A tiny 0.6B streaming automatic speech recognition model, designed for real-time transcription on edge devices.

- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** — yuxinlu1 | 573 likes, 20k downloads  
  A community GGUF fine-tune of Gemma-4-12B specifically for coding and reasoning, popular among local developers.

- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** — microsoft | 101 likes, 13 downloads (low)  
  A 4B instruction-tuned model for ultra-long context windows, a new research direction from Microsoft attracting early adoption.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** — unsloth | 241 likes, 288k downloads  
  Unsloth’s quantized-aware training GGUF of Gemma-4-12B-it, favored for minimizing quality loss at ultra-low bit widths.

- **[DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF](https://huggingface.co/DavidAU/Qwen3.6-40B-Claude-4.6-Opus-Deckard-Heretic-Uncensored-Thinking-NEO-CODE-Di-IMatrix-MAX-GGUF)** — DavidAU | 354 likes, 369k downloads  
  An extremely specialized uncensored MoE fine-tune of Qwen3.6 with deep coding enhancements; a hit among power users and “uncensored” model enthusiasts.

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** — OBLITERATUS | 324 likes, 70k downloads  
  A heavy uncensored merge of Gemma-4-12B, representing a broader trend of “obliterated” fine-tunes that remove safety filters for research use.

- **[Jackrong/Qwopus3.6-27B-v2-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-v2-MTP-GGUF)** — Jackrong | 310 likes, 184k downloads  
  A MoE vision-language GGUF quant with multi-token prediction, showing strong community adoption for efficient local VLM deployment.

## 3. Ecosystem Signal

The **Mixture-of-Experts (MoE)** paradigm is now the dominant architectural choice for new flagship models on Hugging Face, especially in compact parameter counts (e.g., 35B-A3B, 26B-A4B). This is enabling larger effective model sizes in smaller memory footprints. **Uncensored fine-tunes** have entered a new phase of popularity—models like HauhauCS’s Qwen3.6 variant and DavidAU’s merged GGUF are accumulating millions of downloads, suggesting strong demand from researchers and hobbyists for unrestricted model behavior.  

In terms of **open-weight vs. proprietary**, nearly every top-10 model is fully open-weight, though several are licensed restrictively for research only. **Quantization giants like Unsloth** are driving the highest download counts for base models (e.g., Gemma-4 series, MiniMax-M3, Kimi-K2.7), becoming an essential layer of the ecosystem. Finally, **multimodal is now the norm**—over 70% of trending models handle at least image-text-to-text, and audio generation is also rising quickly with TTS models from Boson AI and Zyphra.

## 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — A must-try for anyone building interactive visual search or robotic perception; its 3B size and zero-shot grounding capabilities set a new bar for small VLMs.

2. **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** — The best open-weight TTS model in this list, combining high naturalness with a multimodal architecture that could enable future voice-driven agent pipelines.

3. **[unsloth/gemma-4-12b-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-qat-GGUF)** — For developers looking to deploy Gemma-4 on consumer hardware, this QAT-optimized quant offers the best quality-to-compression ratio available today.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*