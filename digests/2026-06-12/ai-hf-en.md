# Hugging Face Trending Models Digest 2026-06-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-12 00:32 UTC

---

Here is the structured Hugging Face Trending Models Digest for 2026-06-12.

---

## Hugging Face Trending Models Digest — 2026-06-12

### 1. Today's Highlights

This week’s trending models are dominated by two major themes: **massive, multi-modal MoE architectures** and an explosion of **community-driven fine-tuning and quantization**. **DeepSeek-V4-Pro** (#25) leads all models with a staggering 4,061,006 downloads and 4,781 weekly likes, cementing its status as the community's current darling for high-performance text generation. The **Gemma-4** family (Google) continues to see extraordinary activity, with at least 10 variants in the top 30—from the base 12B instruction model (#2) to numerous GGUF quantizations (#8, #12, #13, #17) and abliterated fine-tunes (#11, #26). **NVIDIA** is also making a significant push across modalities, with their 3B *LocateAnything-3B* (#1) topping the vision charts and massive 550B *Nemotron-3 Ultra* (#22, #28) models targeting enterprise text generation. Notably, specialized speech models from **NVIDIA** (#6) and **Boson AI** (#4) are gaining traction, signaling a maturation of real-time audio AI.

### 2. Trending Models by Category

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — *deepseek-ai* (4,781 likes / 4.06M downloads): The highest-performing and most downloaded open-weight LLM this week, offering state-of-the-art reasoning and conversational capabilities.
- **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** — *nex-agi* (206 likes / 1.2K downloads): A new Qwen3.5-based MoE model that supports both text and vision inputs, trending for its efficient 14B-parameter dense architecture.
- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** — *CohereLabs* (307 likes / 1.9K downloads): Cohere’s latest code-specialized MoE model, gaining attention for competitive coding benchmarks in a compact form factor.
- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** — *LiquidAI* (594 likes / 142K downloads): A Liquid Foundation model combining 8B total parameters with 1B active parameters; trending for its extremely efficient MoE design for edge deployment.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — *nvidia* (1,869 likes / 132K downloads): NVIDIA’s new image-text-to-text model for zero-shot object localization and segmentation; topping the multimodal chart due to its powerful "segment anything" capability.
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** — *google* (939 likes / 676K downloads): Google’s flagship 12B instruction-tuned any-to-any model, trending for its versatility across text, image, and audio input.
- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** — *ideogram-ai* (484 likes / 7.2K downloads): The latest state-of-the-art text-to-image model from Ideogram, compressed to FP8 for efficient inference; leading the image generation category.
- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** — *ByteDance* (222 likes / 305 downloads): A new image-text-to-video model that generates high-fidelity character animations from a single reference image; trending for its impressive creative motion output.
- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** — *google* (178 likes / 19.8K downloads): Google’s next-generation real-time text-to-audio model, enabling low-latency music and sound generation directly from prompts.

#### 🔧 Specialized Models (code, math, medical, embeddings)

- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** — *sapientinc* (748 likes / 135K downloads): A 1B-parameter text generation model specialized for Human Resource Management tasks; highly rated for its domain-specific utility in recruiting and HR workflows.
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — *nvidia* (372 likes / 5.0K downloads): NVIDIA's compact 600M streaming ASR model with cache-aware architecture, trending for enabling on-device, real-time speech recognition.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** — *unsloth* (561 likes / 711K downloads): The most popular GGUF quantization of Google's Gemma-4-12B-it, enabling broad access for consumer hardware via llama.cpp.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *HauhauCS* (1,675 likes / 3.06M downloads): A community fine-tune of Qwen3.6 with an "uncensored" and aggressive personality; trending for its massive download volume and controversial use case.
- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** — *OBLITERATUS* (234 likes / 14.8K downloads): An "abliterated" version of Gemma-4-12B that removes safety guardrails, popular among users seeking unrestricted model behavior.
- **[huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)** — *huihui-ai* (143 likes / 6.4K downloads): Another popular abliterated variant of the Gemma-4-12B, reflecting strong community demand for unfiltered model outputs.

### 3. Ecosystem Signal

The current ecosystem is being shaped by three clear trends. First, **Mixture-of-Experts (MoE) is now the default architecture** for frontier models: nearly every top 10 model uses an MoE design (Gemma-4, Nemotron-3 Ultra, Qwen3.6, North-Mini-Code), with sparse activation ratios as low as 1:8 (e.g., LiquidAI LFM2.5-8B-A1B). Second, **Google’s Gemma-4 family has become the primary canvas for community experimentation**, with over a dozen variants in the top 30 including official Google releases, Unsloth GGUF quantizations, QAT quantized versions, and censored/uncensored fine-tunes. This signals a maturation of the open-weight ecosystem, where a single base model spawns an entire ecosystem of specialized derivatives. Third, **speech and audio are entering a new phase of practical deployment**: NVIDIA’s streaming ASR and BosonAI’s 4B TTS model, combined with Google’s Magenta Realtime 2, point toward a wave of real-time, on-device audio AI applications. Notably, the deep integration of vision with language (any-to-any models) is no longer experimental but a core capability of the most downloaded models.

### 4. Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — This model is a must-study for anyone working on visual grounding or zero-shot segmentation. Its combination of high accuracy and relatively small 3B parameter count makes it an ideal candidate for integration into interactive applications and robotics pipelines.

2. **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** — For practitioners interested in efficiency frontiers, this 8B MoE model with only 1B active parameters offers an excellent test case for balancing performance with compute budget. It is particularly worth testing for on-device or low-latency deployment scenarios.

3. **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** — As video generation continues to evolve, Bernini-R’s focus on high-fidelity character animation from a single image is a standout for creative tools and virtual character pipelines. It represents a significant step forward in controllable, short-form video generation.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*