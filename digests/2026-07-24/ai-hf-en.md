# Hugging Face Trending Models Digest 2026-07-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-24 01:30 UTC

---

Here is the structured Hugging Face Trending Models Digest for 2026-07-24.

---

### 1. Today's Highlights

This week's trending models highlight a powerful convergence of extreme efficiency and multimodal capability. The **prism-ml Bonsai** series (1-bit and 2-bit quantizations) has exploded in downloads, signaling massive community appetite for running large models on consumer hardware. Meanwhile, **Google's Gemma-4-31B-it** tops the absolute download count at over 12.6 million, cementing its position as the go-to open-weight multimodal workhorse. The **Qwen3.6** family continues to dominate the fine-tuning ecosystem, with multiple uncensored and MoE variants appearing in the top 30. Finally, **speech and audio** are seeing a resurgence, with NVIDIA’s streaming ASR model and Qwen’s new TTS model (with custom voice cloning) both trending strongly.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 514 | 13,285 | A powerful code-generation model from poolside, trending due to its specialized focus on software engineering tasks. It has spawned multiple quantized variants, indicating strong developer interest. |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 449 | 362 | A massive 250B parameter open-weight model from Upstage, designed for high-end reasoning and enterprise use. Its low download count suggests it is aimed at cloud deployment rather than local inference. |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 320 | 4,532 | A compact 3B LLM optimized for efficiency and instruction following. It is trending as a strong candidate for edge and mobile deployment scenarios. |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,370 | 596,442 | A state-of-the-art MoE (Mixture of Experts) model with a dual-scale attention mechanism. It is the highest-liked model on the list, driven by its impressive balance of performance and parameter-efficiency. |
| [Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,438 | 2,126,755 | A 9B model fine-tuned on synthetic reasoning data, boasting over 2 million downloads. Its GGUF format makes it a favorite for local, uncensored reasoning tasks on tools like llama.cpp. |
| [Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 173 | 1,856 | A newer generative model focused on feature extraction and high-quality text generation. It is gaining attention as a potential foundation model for retrieval-augmented generation (RAG) workflows. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,886 | 2,414,259 | Baidu's flagship OCR model, capable of processing unlimited-length documents with high accuracy. It has become the standard benchmark for document digitization pipelines. |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,508 | 24,669 | A new multimodal conversational model designed for real-time image understanding and dialogue. Its strong likes-to-downloads ratio indicates high community engagement and quality. |
| [Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 183 | 411 | Microsoft’s entry into controllable image generation, focusing on flow-based architectures. It is a research release, trending for its novel approach to image editing and generation. |
| [Qwen3-TTS-12Hz-1.7B-CustomVoice](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice) | Qwen | 1,798 | 2,497,020 | A high-fidelity text-to-speech model from Qwen supporting custom voice cloning. Its massive download count reflects the booming demand for personalized audio and voice assistants. |
| [Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,249 | 766,522 | A compressed, code-specialized multimodal model from Moonshot AI. It uses advanced compression techniques to deliver strong code generation performance at a reduced size. |
| [Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 100 | 28,493 | NVIDIA's diffusion-based model for physical world simulation and edge video generation. It is trending for its potential in robotics and autonomous driving simulation. |
| [nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 926 | 750,118 | A 0.6B parameter streaming ASR model optimized for real-time transcription. It is a standout in the speech category, offering enterprise-grade accuracy on a tiny footprint. |
| [MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 320 | 111,598 | An audio-text model that performs both transcription and speaker diarization in a single pass. It is trending for its efficiency in meeting summarization and call center analytics. |

#### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 165 | 408 | A Vision-Language-Action (VLA) model for robotic manipulation tasks. It represents a niche but growing trend of using VLMs to control robot arms directly. |
| [MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 117 | 306 | A companion model for robotic tracking and object following. It is gaining interest from the embodied AI research community. |
| [antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 121 | 2,747 | A 1B parameter model specialized for security and safety tasks. It is built on a hybrid MoE architecture and is designed for vulnerability detection and secure code generation. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 397 | 334,847 | An extremely heavily fine-tuned and uncensored variant of Qwen3.6-27B. Its popularity highlights the strong community demand for highly specific, "no-guardrails" roleplaying and creative writing models. |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 983 | 576,083 | A 2-bit (ternary) quantization of a 27B model, allowing it to run on consumer-grade GPUs and even CPUs. It is a technical marvel in model compression and is highly sought after for local inference. |
| [Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 620 | 1,910,116 | The 1-bit predecessor to the Ternary Bonsai, pushing the limits of quantization further. Its 1.9M downloads prove the massive appetite for running powerful models on limited hardware. |
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,033 | 2,027,080 | An uncensored, aggressive MoE fine-tune of the Qwen3.6-35B-A3B base. This is part of the "uncensored MoE" trend, offering high intelligence with minimal refusal behavior. |
| [ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 528 | 25,231 | A thoughtfully crafted fine-tune of Qwen3.6-27B aimed at improving reasoning and "thinking" tokens. It is trending as a lighter alternative to massive chain-of-thought models. |
| [OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 257 | 26,919 | A vision-language model specialized for OCR, built on top of Qwen3.5. It offers an alternative to Baidu’s Unlimited-OCR, especially for multilingual and layout-heavy documents. |
| [Krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 515 | 0 | A LoRA for the Krea-2 image model, specialized for identity-preserving face edits. It is trending despite zero downloads, likely due to a recent release and strong concept buzz in the community. |
| [Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 149 | 28,542 | An official GGUF quantization of Poolside's Laguna model by Unsloth. It makes the powerful code model accessible via llama.cpp and local runtimes. |
| [Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 117 | 52,235 | An official 4-bit FP4 (NVFP4) quantization of Laguna, optimized for vLLM inference on NVIDIA hardware. It targets cloud deployment where speed and memory efficiency are critical. |
| [Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 112 | 25,360 | The second GGUF variant of Laguna, from the original authors. It provides a standard inference path for developers preferring first-party quantizations. |
| [Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 172 | 34,270 | The MLX (Apple Silicon) version of the 1-bit Bonsai model. It is essential for Mac users wanting to run large models at extreme compression levels. |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 117 | 24,982 | Another uncensored MoE variant of Qwen3.6, this time influenced by the Hermes dataset lineage. It represents the continued "fan fine-tuning" trend where community members remix base models. |

### 3. Ecosystem Signal

Several clear trends define this week’s ecosystem. **First, the “Extreme Quantization” movement has matured.** The prism-ml Bonsai family (1-bit and 2-bit) has collectively surpassed 2.5 million downloads, proving that the community is willing to accept significant quality trade-offs for the ability to run 27B-class models on laptops and mid-range GPUs. **Second, the Qwen3.6 (and 3.5) architecture is the dominant base for fine-tuning.** Over half of the top community models are derived from Qwen’s MoE and dense models, demonstrating a winner-takes-most dynamic in the open-weight model supply chain. **Third, we see a clear bifurcation between “system” models and “user” models.** Enterprise players (Google, NVIDIA, Baidu, Microsoft) release polished, safety-oriented, multimodal foundation models, while the community layer (DavidAU, HauhauCS, LuffyTheFox) pushes hard on uncensored and unfiltered variants for creative and role-playing use cases. Finally, **speech and audio are breaking out** as the next major modality frontier, with NVIDIA and Qwen leading the charge on streaming ASR and custom TTS respectively. This suggests the ecosystem is moving beyond text and images into real-time voice interfaces.

### 4. Worth Exploring

1.  **GLM-5.2 (zai-org):** With the highest likes on the list (4,370), this model represents a potentially significant architectural breakthrough with its MoE-DSA design. It is worth studying for anyone interested in next-generation efficient architectures that rival dense models in quality but at a fraction of the compute cost.

2.  **Ternary-Bonsai-27B-gguf (prism-ml):** This is the poster child for the extreme quantization movement. It is the single most practical model for anyone wanting to test the limits of running a large model locally. Its 576k downloads and high like count confirm it is not just a gimmick, but a usable tool.

3.  **Qwen3-TTS-12Hz-1.7B-CustomVoice (Qwen):** With 2.5 million downloads, this model signals a shift in how the community consumes AI. It is a must-try for developers building voice agents, audiobook creators, or accessibility tools. Its custom voice cloning feature is the key differentiator that sets it apart from existing TTS solutions.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*