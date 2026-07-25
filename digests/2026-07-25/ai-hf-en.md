# Hugging Face Trending Models Digest 2026-07-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-25 01:40 UTC

---

# Hugging Face Trending Models Digest – July 25, 2026

## Today's Highlights

This week’s trending landscape is defined by the explosive popularity of multimodal MoE models (Qwen3.6-35B-A3B, GLM-5.2) and Google’s massive Gemma-4-31B-it, which leads downloads by a wide margin. The appetite for extreme quantization continues, with 1-bit (Bonsai-27B) and ternary (Ternary-Bonsai-27B) GGUF versions drawing substantial community interest. The OCR space sees strong traction from both Baidu’s Unlimited-OCR and ATH-MaaS’s OvisOCR2, while pioneering robotics models from openbmb (MiniCPM-RobotManip/Track) signal growing multimodal embodiment research. Fine-tunes of Qwen3.6 and Laguna-S-2.1 dominate the community fine-tuning activity.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 611 | 28,992 | A 2.1B-parameter text-generation model from poolside, optimized for code and general reasoning. Its popularity is driven by high-quality base performance and the surrounding quantization ecosystem. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 541 | 1,106 | A massive 250B-parameter open-weight LLM from Upstage, designed for multilingual and instruction-following tasks. It represents one of the largest open models on the hub. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 372 | 8,169 | A compact 3B LLM from Nanbeige, suited for lightweight deployments and research. Its small size and solid performance make it a go-to choice for resource-constrained applications. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,415 | 667,403 | GLM-5.2 is a state-of-the-art MoE-DSA text-generation model with exceptional reasoning and conversational ability. With over 4.4K weekly likes, it is the most upvoted pure language model this week. |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 185 | 2,108 | A new entrant from Motif Technologies, this beta model focuses on feature extraction and generative tasks. It is gaining attention as an alternative architecture for embedding-heavy workflows. |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 149 | 4,266 | A 1B hybrid dense-MoE model designed for security and safety-critical NLP tasks. Its combination of small size and domain focus makes it notable for enterprise AI. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,011 | 2,500,391 | Baidu’s image-text-to-text model specialized in OCR, capable of handling diverse document layouts and languages. It leads the OCR category with millions of downloads and strong community adoption. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,546 | 27,883 | A conversational multimodal model from Thinking Machines, integrating vision and language for interactive dialogue. Its high like-to-download ratio reflects enthusiastic early feedback. |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 234 | 891 | A diffusion-based text-to-image model from Microsoft, supporting both generation and editing. It is a polished, production-ready image model with strong composability. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 276 | 30,292 | A Qwen3.5-based OCR model optimized for high-accuracy text extraction from images. Its integration with the Qwen family makes it a popular choice for multimodal OCR pipelines. |
| [nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 112 | 30,303 | NVIDIA’s edge-optimized video world model, built with Diffusers and designed for real-time video reasoning. It marks a step toward efficient video understanding on edge devices. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,360 | 12,629,921 | Google’s latest multimodal instruction-tuned model, one of the largest permissive-weight releases. Its staggering 12.6M downloads this week reflect massive enterprise and community interest. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,503 | 6,460,680 | The flagship multimodal MoE model from Qwen, with 35B total parameters and 3B active. It delivers state-of-the-art vision-language performance while maintaining inference efficiency. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 172 | 559 | A vision-language-action (VLA) model for robotic manipulation, built on the MiniCPM architecture. It represents a cutting-edge research direction in embodied AI. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 123 | 396 | A Qwen3.5-MoE based code generation model tailored for developer assistance. Its specialized training on code tasks makes it a niche tool for programming workflows. |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,263 | 756,668 | Moonshot AI’s multimodal code model, capable of understanding both code and images. It uses compressed-tensors for efficient deployment and has gained strong traction in the coding community. |
| [openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 123 | 349 | A companion VLA model to RobotManip, focused on object tracking and scene understanding for robotics. It highlights the growing OpenBMB robotics ecosystem. |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 937 | 797,525 | A streaming automatic speech recognition model from NVIDIA, optimized for low-latency transcription. Its compact 0.6B size and high accuracy make it a leading choice for real-time ASR. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 485 | 407,421 | An extreme uncensored GGUF fine-tune of Qwen3.6-27B, merging multiple LoRA-like components. Its provocative name and high download count reflect the demand for uncensored models. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,006 | 595,415 | A ternary (2-bit) quantization of the Bonsai-27B model, pushing compression to the limit while retaining conversational quality. It is a benchmark for extreme low-bit LLM inference. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 632 | 2,028,115 | A 1-bit GGUF quantization of Bonsai-27B, representing one of the most aggressive compression levels available. Its 2M downloads indicate intense exploration of ultra-low-bit LLMs. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,069 | 2,057,103 | An uncensored fine-tune of Qwen3.6-35B-A3B in GGUF format, optimized for aggressive response styles. With over 3K likes, it is one of the most popular community fine-tunes this week. |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 532 | 0 | A LoRA adapter for Krea-2-Raw enabling identity-preserving image editing. Despite zero downloads (likely a new upload), its high like count suggests strong anticipatory interest. |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 170 | 57,536 | Unsloth’s GGUF quantization of poolside’s Laguna-S-2.1, optimized for fast inference with vLLM. It provides an accessible entry point for running the Laguna model on consumer hardware. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,454 | 1,906,539 | A Qwen3.5-based GGUF fine-tune with 1M-token context, blending Claude and Mythos training data for enhanced reasoning. Its massive context window and high usage make it a standout. |
| [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 133 | 62,092 | Official GGUF quantization from poolside, designed for endpoints and region-specific deployment. It complements third-party quantizations and ensures compatibility across platforms. |
| [poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 129 | 89,186 | NVFP4 (4-bit floating point) quantization of Laguna-S-2.1, optimized for NVIDIA GPUs. It bridges high performance with reduced memory footprint for enterprise applications. |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 541 | 26,092 | A fine-tuned Qwen3.6-27B model with enhanced chain-of-thought reasoning injected via targeted dataset curation. It demonstrates the community’s focus on improving reasoning in multimodal models. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 134 | 36,703 | Another uncensored GGUF fine-tune of Qwen3.6-35B-A3B, this time blending Hermes and Genesis datasets. It adds to the ecosystem of alternative alignment philosophies. |
| [baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 89 | 494 | NVFP4 quantized version of GLM-5.2’s vision variant, optimized for multimodal inference with SGLang. It enables efficient deployment of GLM-5.2 vision capabilities. |

## Ecosystem Signal

The model ecosystem this week is overwhelmingly multimodal: seven of the top ten most-liked models involve image-text-to-text pipelines. The **Qwen3.6** family (both base and community fine-tunes) and **GLM-5.2** are the dominant architectures, each spawning dozens of derivative quantizations and fine-tunes. **Open-weight models** from Google (Gemma-4-31B-it) and NVIDIA (Cosmos3-Edge, Nemotron-ASR) sustain the trend of permissive licensing, though some commercial restrictions still apply. Quantization activity is intense: **1-bit and ternary (2-bit) GGUF** models like Bonsai-27B and Ternary-Bonsai-27B are pushing the boundaries of compression, often trading slight quality for massive memory savings. Uncensored fine-tunes remain a persistent subcurrent, especially for the Qwen3.6-35B-A3B architecture, indicating a community demand for less-restrictive alignment. Specialized models are also emerging in robotics (openbmb MiniCPM-VLA series) and real-time ASR (NVIDIA Nemotron-3.5), signaling a diversification beyond pure text generation.

## Worth Exploring

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – With 4,415 weekly likes, it is the highest-voted pure language model. Its MoE-DSA architecture offers an intriguing alternative to conventional dense models, and the surrounding quantization variants (especially baseTen’s NVFP4 vision version) make it versatile for deployment.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – This uncensored GGUF fine-tune has amassed over 2M downloads and 3K likes in one week, reflecting the strongest community momentum among all fine-tunes. It is the definitive example of the open, uncensored AI trend and a good testbed for alignment research.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – As a 1-bit GGUF quantized model with over 2M downloads, it represents the cutting edge of extreme compression. Studying its quality-compression trade-off is valuable for anyone deploying LLMs on edge devices or low-memory hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*