# Hugging Face Trending Models Digest 2026-07-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-21 01:27 UTC

---

# Hugging Face Trending Models Digest — 2026-07-21

## Today's Highlights

This week's trending models reveal a powerful shift toward multimodal vision-language models, with **Qwen3.6** variants and **Gemma-4** dominating both original releases and community fine-tunes. The **Bonsai** family from prism-ml continues its remarkable run, now offering 1-bit and ternary MLX quantizations for edge deployment. A standout is **zai-org/GLM-5.2**, a MoE model with 4,226 weekly likes, signaling strong interest in efficient expert-mixture architectures. Meanwhile, **Wan-AI** and **openbmb** are pushing into video generation and robotics respectively, showing the ecosystem expanding beyond text-only paradigms.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,226 | 531,947 | A Mixture-of-Experts dense-sparse architecture (DSAMoE) for efficient text generation. It is the highest-liked model this week, indicating strong community appetite for MoE designs. |
| [Hy3](https://huggingface.co/tencent/Hy3) | tencent | 847 | 13,698 | Tencent's Hunyuan V3 text-generation model, built for conversational and general-purpose use. Its strong likes-to-downloads ratio suggests high-quality interest from the research community. |
| [MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking) | GnLOLot | 159 | 5,494 | A 1B-parameter thinking model fused with Claude Opus Fable5 capabilities. It pushes small-model reasoning via creative synthetic data distillation. |
| [MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF) | GnLOLot | 134 | 28,012 | GGUF quantized variant of the Fable5-Thinking model, enabling local inference on consumer hardware. Its download count significantly exceeds likes, indicating practical deployment interest. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,269 | 13,462 | A new image-text-to-text conversational model from thinkingmachines, possibly a successor to earlier multimodal architectures. Its rapid climb suggests strong early adoption despite being newly released. |
| [Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,937 | 2,007,025 | An uncensored MoE vision-language model based on Qwen3.6 with aggressive fine-tuning. Its 2M+ downloads and aggressive training recipe make it a go-to for unfiltered multimodal generation. |
| [Gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,296 | 11,987,240 | Google's latest 31B instruction-tuned multimodal model with image-text-to-text capabilities. It is the most-downloaded model this week at nearly 12M, reflecting massive interest in the Gemma-4 family. |
| [Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,174 | 713,992 | A compressed-tensor image-text-to-text model optimized for code generation with vision context. Its compressed architecture enables efficient deployment while maintaining multimodal reasoning. |
| [Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 145 | 2,408 | A 14B image-to-video diffusion model specialized for dance and motion generation. It represents Wan-AI's push into controllable video synthesis. |
| [MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 290 | 87,533 | An audio-text-to-text model that combines transcription with speaker diarization. It addresses the growing need for production-grade speech-to-text pipelines. |
| [MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime) | OpenMOSS-Team | 89 | 544 | A video-text-to-text model for real-time video understanding and Q&A. It pushes the frontier of streaming multimodal interaction. |
| [LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 213 | 0 | A LoRA-based identity-preservation model for text-to-video generation with face consistency. It targets creators needing consistent character appearance across generated videos. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,438 | 2,122,848 | Baidu's universal OCR model for image-to-text extraction with broad language support. Its 2.1M downloads and high likes indicate strong adoption for document digitization workflows. |
| [OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 217 | 14,587 | A Qwen3.5-based OCR model focusing on accurate document text extraction. It competes with Unlimited-OCR for the OCR niche with a different model backbone. |
| [Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16) | nvidia | 86 | 61,708 | NVIDIA's 1B embedding model for sentence-similarity and feature extraction. It provides a compact alternative for retrieval-augmented generation pipelines. |
| [needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 292 | 950 | A Jax-based model optimized for function calling and tool use. Its specialized architecture targets agentic workflows and structured output generation. |
| [MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 134 | 0 | A vision-language-action model for robotic manipulation tasks. It represents OpenBMB's entry into embodied AI with a transformer-based policy. |
| [MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 100 | 0 | A vision-language-action model for robotic object tracking. It complements RobotManip for full-stack robotic perception and control. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 854 | 338,945 | A 2-bit ternary quantized 27B model using state-of-the-art compression techniques. It offers extreme quantization (2-bit) while maintaining conversational quality. |
| [Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 542 | 1,262,894 | A 1-bit quantized 27B model using llama.cpp’s most aggressive compression. With 1.26M downloads, it is the most popular extreme quantization model this week. |
| [Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,369 | 2,117,323 | A GGUF quantized 9B reasoning model fused with Mythos-style Claude training. Its 2.1M downloads reflect massive demand for distilled reasoning in quantized form. |
| [Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 154 | 21,690 | Apple MLX-format 1-bit quantization of Bonsai-27B for efficient Apple Silicon inference. It brings extreme model compression to the MLX ecosystem. |
| [Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit) | prism-ml | 130 | 17,869 | MLX-format 2-bit ternary quantization of the Bonsai family. It offers a balance between compression ratio and quality retention on Apple hardware. |
| [inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF) | unsloth | 111 | 6,771 | Unsloth's GGUF conversion of the Inkling multimodal model with MoE support. It enables efficient local inference of the trending Inkling architecture. |
| [Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | empero-ai | 197 | 105,749 | An updated GGUF quantized version of Qwythos-9B with enhanced reasoning capabilities. It shows empero-ai iterating rapidly on their popular Qwen3.5-based series. |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 156 | 16,719 | An extensively fine-tuned uncensored Qwen3.6 variant with multiple fusion techniques. Its extremely long name reflects numerous ablations and experimental merges. |
| [Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF) | LuffyTheFox | 85 | 15,148 | A GGUF version of the Qwen3.6 MoE model with Hermes V3-style uncensored training. It extends the uncensored MoE trend to the GGUF format. |
| [Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF) | AngelSlim | 149 | 109,749 | Community GGUF quantization of Tencent's Hy3 Hunyuan V3 model. Its high download count indicates strong demand for quantized alternatives to Tencent's original. |
| [ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 482 | 10,647 | A transformers-format fine-tune of Qwen3.6-27B optimized for chain-of-thought reasoning. It targets quality-conscious users who prefer Safetensors over quantized formats. |
| [krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 458 | 0 | A LoRA for Krea-2-Raw enabling identity-preserving image editing. Despite zero downloads, it has high likes, suggesting significant aspirational interest in character-consistent editing. |

---

## Ecosystem Signal

The Hugging Face ecosystem in mid-2026 is dominated by **Qwen3.6** as the most popular base model for community fine-tuning, with at least 6 entries in the trending list spanning uncensored, reasoning, and MoE variants. **prism-ml's Bonsai** family demonstrates a clear trend toward extreme quantization (1-bit and ternary), accumulating over 1.6M downloads collectively — a signal that edge deployment at massive scale is a key community priority.

**MoE architectures** are gaining clear momentum: GLM-5.2, Qwen3.6-MoE variants, and the Inkling model all leverage mixture-of-experts for efficiency. The **Gemma-4** family (12M downloads) shows that open-weight models from major labs still command the largest absolute user base, but community fine-tunes on Qwen/GLM backbones generate more trending buzz.

Notably, **robotics** (MiniCPM-RobotManip/Track), **function-calling** (needle), and **real-time video** (MOSS-VL-Realtime) are emerging as frontier verticals, suggesting the ecosystem is maturing beyond conversational text. The **audio-to-text** space (MOSS-Transcribe-Diarize) and **OCR** (Unlimited-OCR, OvisOCR2) remain high-volume niches with clear production use cases.

On the quantization frontier, GGUF formats dominate (>70% of quantization entries), but **MLX-format** quantized models from prism-ml signal growing Apple Silicon deployment interest. **Unsloth's inkling-GGUF** conversion shows the rapid adoption cycle — the base model appeared this week and already has quantization support.

---

## Worth Exploring

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — As the highest-liked model this week, GLM-5.2's DSAMoE architecture represents a novel optimization approach for inference-efficient LLMs. It is worth studying for anyone interested in the next wave of MoE design beyond standard top-k routing, especially given its 4,200+ likes in a single week.

2. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With nearly 12 million downloads and 3,296 likes, Gemma-4 is the clear leader in absolute adoption. Its multimodal instruction-tuned 31B parameter design makes it a strong candidate for production pipelines requiring both vision-language understanding and textual reasoning.

3. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** — This image-to-video diffusion model for dance generation is worth exploring for the video generation community. It represents a rare specialization (dance/motion) that could unlock creative applications, and its lower competition environment (only 145 likes) suggests early-mover advantage for developers integrating video synthesis.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*