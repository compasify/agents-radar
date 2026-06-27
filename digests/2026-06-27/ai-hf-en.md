# Hugging Face Trending Models Digest 2026-06-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-27 00:27 UTC

---

Here is the structured Hugging Face Trending Models Digest for 2026-06-27.

---

### 1. Today's Highlights

This week’s trending models reveal a strong shift toward **multimodal MoE (Mixture of Experts) architectures** and **ultra-efficient quantized deployments**, driven by both community finetuners and major labs like NVIDIA and Qwen. The standout release is **nvidia/Qwen3.6-35B-A3B-NVFP4**, which, despite being a quantization, has amassed over 4.8 million downloads, underscoring massive demand for high-quality, compact reasoning models. Concurrently, **GLM-5.2** emerged as a major new open-weight contender, achieving high engagement across base, quantized, and fine-tuned variants. On the vision side, **nvidia/LocateAnything-3B** and **baidu/Unlimited-OCR** signal a growing focus on specialized, lightweight image-to-text tools for enterprise use cases.

### 2. Trending Models

#### 🧠 Language Models (LLMs, Chat, Instruction-Tuned)
- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** by zai-org (2,589 likes, 83k downloads) – A powerful new MoE-based LLM from Zhipu AI, trending due to strong performance and rapid community quantizations (see unsloth & NVIDIA variants).
- **[MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)** by MiniMaxAI (1,246 likes, 170k downloads) – A flagship multimodal MoE model gaining traction for combining vision and language in a single dense-activation architecture.
- **[VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** by WeiboAI (731 likes, 55k downloads) – A small, efficient Qwen-2 based model that excels at math reasoning, popular for educational and mobile use cases.

#### 🎨 Multimodal & Generation (Image, Video, Audio, Text-to-X)
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** by baidu (1,040 likes, 134k downloads) – A state-of-the-art OCR model fine-tuned for unlimited-length text extraction from images, trending due to its enterprise-grade robustness.
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** by nvidia (2,383 likes, 495k downloads) – A 3B parameter grounding model that excels at spatial localization in images, bridging the gap between vision and language.
- **[Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** by krea (285 likes, 9k downloads) – The latest iteration of Krea’s text-to-image model, optimized for speed and quality via distillation.

#### 🔧 Specialized Models (Code, Math, Medical, Embeddings, Audio)
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** by nvidia (707 likes, 56k downloads) – A small, streaming-capable ASR model for real-time speech recognition, popular for latency-sensitive applications.
- **[WeiboAI/VibeThinker-3B](https://huggingface.co/WeiboAI/VibeThinker-3B)** by WeiboAI (731 likes, 55k downloads) – Listed again for its strong specialized math reasoning performance on a 3B parameter footprint.
- **[microsoft/FastContext-1.0-4B-SFT](https://huggingface.co/microsoft/FastContext-1.0-4B-SFT)** by microsoft (355 likes, 6k downloads) – A Qwen-3 based model fine-tuned for long-context tasks, signaling Microsoft’s push into retrieval-based AI.

#### 📦 Fine-tunes & Quantizations (Community Fine-Tunes, GGUF, AWQ)
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** by HauhauCS (2,263 likes, 3.45M downloads) – A highly downloaded uncensored MoE fine-tune of Qwen3.6, optimized via aggressive QAT quantization.
- **[yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-coder-fable5-composer2.5-v1-GGUF)** by yuxinlu1 (2,398 likes, 516k downloads) – The top-rated GGUF quantization of a Gemma-4 coder fine-tune, highly popular for local coding assistants.
- **[unsloth/GLM-5.2-GGUF](https://huggingface.co/unsloth/GLM-5.2-GGUF)** by unsloth (410 likes, 108k downloads) – Unsloth’s optimized GGUF pack of GLM-5.2, making the large MoE model accessible on consumer hardware.
- **[nvidia/Qwen3.6-35B-A3B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-35B-A3B-NVFP4)** by nvidia (361 likes, 4.81M downloads) – NVIDIA’s FP4 quantization of the Qwen3.6 MoE, setting download records due to its unprecedented efficiency/quality trade-off.

### 3. Ecosystem Signal

**MoE is the dominant paradigm.** Eight of the top 30 models use Mixture-of-Experts architectures (Qwen3.5/3.6 MoE, GLM-5.2, LFM2.5), signaling that the community is fully embracing sparse activation for both performance and cost. **Quantization is no longer an afterthought—it’s a primary release.** NVIDIA’s NVFP4 format and community GGUF packs are driving the highest download counts, with quantized models often outperforming base model downloads by 10-100x, particularly for code and agentic workloads.

**Open-weight momentum continues.** Major labs (Zhipu, NVIDIA, MiniMax, Microsoft) are releasing weights freely, while the fine-tuning ecosystem (HauhauCS, yuxinlu1, empero-ai) is rapidly abliterating, quantizing, and adapting these bases. The trend toward **uncensored fine-tunes** (Qwen3.6-Aggressive, Gemma4-QAT-Uncensored) suggests a persistent demand for unrestricted creative and roleplaying capabilities. Finally, **vision-language models are maturing**—OCR, grounding, and multimodal MoE models are no longer niche but core to the daily trending list.

### 4. Worth Exploring

1.  **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – Most worth studying for its efficient vision grounding approach; it demonstrates how to build a capable spatial reasoning model at a 3B size, ideal for robotics and document AI pipelines.
2.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – Worth exploring as a case study in aggressive quantization (QAT) and uncensored fine-tuning of MoE models. Its massive download count reflects a real community need.
3.  **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** – A must-try for voice applications. This 0.6B streaming model achieves competitive accuracy while running on low-power edge devices, representing the future of local speech AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*