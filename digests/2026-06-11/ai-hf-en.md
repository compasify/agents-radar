# Hugging Face Trending Models Digest 2026-06-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-11 00:36 UTC

---

Here is your **Hugging Face Trending Models Digest** for June 11, 2026.

---

### 1. Today's Highlights

The ecosystem is dominated by **multimodal unification**, with Google’s **Gemma-4** family (including the first-party `any-to-any` models) leading the charge across language, vision, and audio pipelines. **NVIDIA** continues to scale, releasing both a massive **550B Ultra** model and a niche **streaming ASR** model, signaling a push toward both frontier intelligence and edge efficiency. **DeepSeek-V4-Pro** remains the undisputed king of raw popularity, topping both likes (4,758) and downloads (4M+). Meanwhile, the community is heavily active in **abliteration** and **quantization**, with GGUF variants of Gemma-4 and Qwen3.6 seeing explosive download numbers, indicating a strong demand for local, uncensored, and efficient inference.

### 2. Trending Models

#### 🧠 Language Models (LLMs & Chat)
- **[DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — deepseek-ai | 4,758 likes | 4M downloads. The top trending model overall; a massive, conversational powerhouse likely representing DeepSeek’s latest frontier in reasoning and scale.
- **[NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)** — nvidia | 189 likes | 59k downloads. NVIDIA’s flagship MoE model with 550B total parameters (55B active), targeting enterprise-grade text generation.
- **[LiquidAI/LFM2.5-8B-A1B](https://huggingface.co/LiquidAI/LFM2.5-8B-A1B)** — LiquidAI | 581 likes | 142k downloads. A highly efficient MoE model (8B total, 1B active) trending as a strong performer for its size; ideal for resource-constrained deployment.
- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** — CohereLabs | 255 likes | 1.8k downloads. A specialized code-generation MoE model from Cohere, indicating their entry into the competitive code-LLM space.
- **[JetBrains/Mellum2-12B-A2.5B-Thinking](https://huggingface.co/JetBrains/Mellum2-12B-A2.5B-Thinking)** — JetBrains | 281 likes | 18k downloads. A thinking/reasoning-tuned MoE model from JetBrains, pointing to a future of integrated AI-assisted coding tools.
- **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)** — nex-agi | 180 likes | 1.2k downloads. A vision-language MoE model based on Qwen3.5 architecture, blending text and image understanding.
- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** — sapientinc | 739 likes | 135k downloads. A specialized 1B-parameter model for Human Resource Management (HRM) text tasks, trending for its niche enterprise applicability.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 1,630 likes | 3M downloads. An aggressively uncensored fine-tune of Qwen3.6 with massive download numbers, showing strong community demand for unrestricted models.

#### 🎨 Multimodal & Generation
- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)** — google | 885 likes | 676k downloads. Google’s flagship `any-to-any` model (text, image, audio input/output); the most versatile model in the current trend cycle.
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 1,803 likes | 132k downloads. An image-text-to-text model trained for visual grounding and localization tasks; the highest-rated non-LLM model today.
- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)** — ideogram-ai | 472 likes | 7k downloads. A high-quality text-to-image diffusion model in FP8 precision, optimized for efficiency.
- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)** — bosonai | 320 likes | 20k downloads. A 4B-parameter text-to-speech transformer model, likely offering high-quality voice synthesis.
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia | 341 likes | 5k downloads. A tiny (0.6B) streaming ASR model from NVIDIA, optimized for low-latency, cache-aware speech recognition.
- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — *also listed above* | 4,758 likes | 4M downloads. The most downloaded model overall; a giant language model that also supports conversational and generation tasks.
- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — google | 213 likes | 0 downloads. A brand-new early-release model combining diffusion and language modeling in a 26B MoE architecture.
- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)** — ByteDance | 210 likes | 305 downloads. A novel image-text-to-video renderer from ByteDance, pointing to the next wave of generative video.
- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)** — google | 173 likes | 20k downloads. A real-time text-to-audio model (TFLite) from Google’s Magenta team, enabling instant audio generation.
- **[jdopensource/JoyAI-Echo](https://huggingface.co/jdopensource/JoyAI-Echo)** — jdopensource | 126 likes | 5.5k downloads. A text-to-video model with audio generation support (LTX-Video based), trending for full audiovisual generation.

#### 🔧 Specialized Models
- **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** — *also listed above* | 739 likes | 135k downloads. A domain-specialized model for HR text applications, highlighting the push for vertical AI.
- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)** — *also listed above* | 255 likes | 1.8k downloads. Purpose-built for code generation and conversation.
- **[stepfun-ai/Step-3.7-Flash](https://huggingface.co/stepfun-ai/Step-3.7-Flash)** — stepfun-ai | 363 likes | 50k downloads. A vision-language model optimized for speed, trending as a fast multimodal assistant.

#### 📦 Fine-tunes & Quantizations
- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** — unsloth | 548 likes | 712k downloads. The most downloaded GGUF variant of Gemma-4, enabling local inference with reduced memory footprint.
- **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)** — unsloth | 187 likes | 148k downloads. A quantized-aware trained (QAT) GGUF version of the same model, optimized for even better quality at low bit-widths.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *also listed above* | 1,630 likes | 3M downloads. An uncensored community fine-tune with massive organic traction, likely due to its aggressive jailbreak capabilities.
- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)** — OBLITERATUS | 212 likes | 15k downloads. An abliterated (safety-filter removed) version of Gemma-4, in the same uncensored fine-tune vein.
- **[huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)** — huihui-ai | 135 likes | 6k downloads. Another abliterated Gemma-4 variant, proving the strong community drive for unrestricted models.
- **[google/gemma-4-12B-it-qat-q4_0-gguf](https://huggingface.co/google/gemma-4-12B-it-qat-q4_0-gguf)** — google | 123 likes | 97k downloads. Google’s own official 4-bit QAT GGUF quantization of Gemma-4, validating the community shift toward efficient local inference.

### 3. Ecosystem Signal

The landscape is defined by **three convergent trends**:

1. **MoE (Mixture of Experts) is the new standard.** Nearly every new flagship—Gemma-4, Nemotron-3 Ultra, Qwen3.6, North-Mini-Code, LFM2.5, Mellum2—uses MoE architecture. The industry has decisively moved from dense models to sparse, parameter-efficient designs that offer more capability per active parameter.

2. **Multimodal “any-to-any” is the battleground.** Google’s Gemma-4 `any-to-any` pipeline signals a paradigm shift: models are no longer just text or image, but natively handle text, image, audio, and video simultaneously. NVIDIA’s LocateAnything-3B (vision grounding) and ByteDance’s Bernini-R (video from text+image) reinforce this trend. The clear divide is no longer between modalities but between **unified** vs. **specialized** models.

3. **Quantization and abliteration drive community adoption.** The massive download count for GGUF variants (712k for unsloth’s Gemma-4-12b-GGUF) and the 3M+ downloads for the uncensored Qwen3.6 fine-tune show that the community prioritizes **local runnability** and **freedom from safety restrictions** over raw benchmark scores. Open-weight models from Google and DeepSeek are being rapidly adapted for offline, unconstrained use.

### 4. Worth Exploring

- **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — This is a brand-new, early-release model with zero downloads on the chart, suggesting it was just published. It merges diffusion processes with a language transformer (26B/4B active). If it lives up to its name, this could be a breakthrough for **text-guided image and video generation from a unified architecture**. Worth watching or testing immediately.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 1,803 likes (the highest among non-LLM models), this model is clearly addressing a real pain point in visual AI. Its ability to precisely locate objects in images using natural language makes it ideal for robotics, autonomous driving, or any computer vision pipeline needing grounding. It has the best signal-to-noise ratio for a specialized vision tool on the chart.

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)** — If you want to run a state-of-the-art multimodal model locally on a consumer GPU, this is the one. With 712k downloads and the Unsloth optimizations, it represents the best balance of size, quality, and community support for local deployment. Perfect for developers building offline AI assistants or researchers needing a flexible baseline.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*