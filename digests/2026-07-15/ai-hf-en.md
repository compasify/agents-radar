# Hugging Face Trending Models Digest 2026-07-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-15 01:16 UTC

---

Here is the structured Hugging Face Trending Models Digest for July 15, 2026.

---

## Hugging Face Trending Models Digest – 2026-07-15

### 1. Today's Highlights

This week’s trending models are dominated by a massive surge in **GGUF quantizations**, particularly around the **Qwen 3.5/3.6** and **DeepSeek V4** families, suggesting the community is prioritizing local, lightweight deployment of state-of-the-art reasoning and MoE architectures. Notably, **GLM-5.2** from Zhipu AI continues to see strong adoption with nearly 4k likes, while **Baidu’s Unlimited-OCR** and **DeepSeek V4** quantizations see massive download counts, indicating a shift toward practical, enterprise-ready tools. The rise of **ternary (2-bit)** and **1-bit** models from prism-ml also signals an experimental push toward extreme compression for on-device inference.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — by HauhauCS, 2,729 likes, 2.44M downloads. A heavily downloaded uncensored GGUF of the Qwen 3.6 MoE variant, trending due to aggressive performance tuning and vision capabilities.
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — by zai-org, 3,948 likes, 490k downloads. The flagship conversational MoE model from the GLM family, trending for its strong reasoning and DSA architecture.
- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — by bottlecapai, 341 likes, 6.2k downloads. A reasoning-fine-tuned Qwen 3.6 model, building on the ThinkingCap lineage for chain-of-thought tasks.
- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** — by robbyant, 104 likes, 700 downloads. A video-centric MoE model with 30B total parameters (3B active), representing a new frontier in lightweight video understanding.
- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — by nvidia, 149 likes, 1.3k downloads. Nvidia’s new efficient MoE model for agentic tasks, trending as part of the Nemotron Labs series.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — by baidu, 1,983 likes, 1.72M downloads. A powerful image-text-to-text OCR model, trending due to Baidu’s brand trust and high-quality multilingual document recognition.
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — by Alissonerdx, 141 likes, 0 downloads. A text-to-video LoRA for identity-preserving video generation, gaining attention for its novel reference-to-video pipeline.
- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** — by robbyant, 96 likes, 0 downloads. An image-to-video world model based on causal diffusion, notable for its attempt at building lightweight world simulators.
- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** — by open-gigaai, 132 likes, 0 downloads. A diffusers-based world model, trending as a foundation for physics-aware generation.
- **[mgwr/M87](https://huggingface.co/mgwr/M87)** — by mgwr, 106 likes, 2.4k downloads. A LoRA for Krea-2-Turbo, enabling stylized text-to-image generation with community-driven aesthetics.

#### 🔧 Specialized Models (code, math, medical, embeddings)

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — by yuxinlu1, 1,189 likes, 469k downloads. A GGUF quant of a highly agentic and coding-focused Gemma 4 fine-tune, trending for its terminal and composer capabilities.
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — by OpenMOSS-Team, 189 likes, 65.1k downloads. An audio-text-to-text model for transcription and speaker diarization, filling a niche in real-time speech processing.
- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)** — by nineninesix, 101 likes, 5.9k downloads. A text-to-speech model based on Qwen 3.5, trending as a lightweight TTS alternative for edge deployment.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — by empero-ai, 2,156 likes, 2.01M downloads. An extremely popular GGUF version of a Qwen 3.5 fine-tune, trending for its distilled Claude-style reasoning.
- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — by unsloth, 172 likes, 55.2k downloads. A GGUF quantization of DeepSeek V4 Flash, trending for its efficient deployment on consumer hardware.
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — by unsloth, 1,091 likes, 2.9M downloads. The most downloaded Qwen 3.6 GGUF, optimized for multi-token prediction (MTP) and local use.
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — by prism-ml, 142 likes, 23 downloads. An experimental 2-bit ternary quantization of a 27B model, gaining traction for its extreme memory efficiency.
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — by deepreinforce-ai, 880 likes, 1.53M downloads. A GGUF of the 35B Ornith model, trending for its MIT license and endpoints compatibility.

### 3. Ecosystem Signal

The ecosystem is currently defined by **two competing forces**: the rapid maturation of **MoE (Mixture-of-Experts) architectures** (GLM-5.2, Qwen 3.6, Nemotron) alongside an aggressive push toward **extreme quantization** (ternary, 1-bit, NVFP4) for local deployment. Qwen 3.5/3.6 has emerged as the dominant base model family for community fine-tunes, outpacing Llama derivatives in sheer download volume. The trend toward **uncensored** and **high-context** variants suggests a growing demand for unrestricted local AI assistants. Notably, **world models** (Giga-World, LingBot) are appearing in trending lists for the first time as research-based tooling. On the proprietary vs. open-weight front, NVIDIA’s Nemotron series and Baidu’s OCR model show that major labs continue to release high-quality open-weight models, while community quantizers (unsloth, empero-ai) bridge the gap between research and production-ready tooling.

### 4. Worth Exploring

- **[Unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — With nearly 3 million downloads, this is the standout quantization of the week. Worth studying as a benchmark for how to efficiently deploy next-generation MoE models with multi-token prediction on consumer hardware.
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — An experimental 2-bit ternary model that pushes the boundaries of quantization. Worth exploring for researchers interested in the trade-offs between compression rate and output quality.
- **[Baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — With 1.7M downloads, this is the most practical multimodal model of the week. Ideal for anyone building document processing pipelines; its performance on multilingual OCR makes it a strong candidate for production use.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*