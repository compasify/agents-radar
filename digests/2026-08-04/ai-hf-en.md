# Hugging Face Trending Models Digest 2026-08-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-04 01:22 UTC

---

## 1. Today's Highlights

Today's Hugging Face digest is led by Moonshot AI's **Kimi-K3**, a multimodal image-text-to-text model that topped 9.8K likes and nearly one million downloads. DeepSeek and Zhipu AI continue to dominate raw usage: **DeepSeek-V4-Flash** and **GLM-5.2** collectively account for over 4.9M downloads, confirming open-weight LLMs as the center of gravity. Multimodal generation is also surging with **MiniMax-H3** for video and its ComfyUI integration, while Microsoft's **Mage-VL** and **Fara1.5** push vision-language and computer-use capabilities. Community activity is heavily weighted toward Qwen3.5/3.6 GGUF fine-tunes and uncensored MoE variants, which occupy many of the top spots and account for millions of combined downloads. On the niche side, OCR (**Baidu**), TTS (**Audio8**), and edge-oriented speech models show that specialized, utility-driven models are gaining strong audience traction.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,058 | 236,076 | DeepSeek's latest Flash-series instruction-tuned LLM for efficient conversational generation. The 0731 refresh is trending alongside the main V4-Flash release and has picked up 236K downloads within the listing period. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,990 | 2,746,291 | The flagship Flash text-generation model from DeepSeek, optimized for conversational use. It is the most-downloaded model on today's list at 2.7M downloads, showing sustained demand for open-weight DeepSeek releases. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,797 | 2,180,509 | Zhipu AI's GLM-5.2 large language model, tagged with a mixture-of-experts/DSA architecture. Its 2.18M downloads and 4.8K likes make it one of the strongest non-community releases in the digest. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 155 | 2,682 | A Qwen3.6-based 35B-A3B mixture-of-experts LLM, providing strong performance at a small active-parameter footprint. It appeals to users seeking efficient, community-tuned Qwen variants. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 652 | 34,705 | A compact 3B text-generation LLM from Nanbeige. Its 34K downloads and 652 likes signal steady interest in small, lightweight models for local or constrained deployments. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 909 | 81,584 | poolside's Laguna-S-2.1 conversational LLM for general text generation. The 909 likes and 81K downloads indicate solid traction for an enterprise-oriented open model. |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 391 | 1,063 | A compact Qwen3.5-MoE-derived model tagged as image-text-to-text, designed for efficient multimodal-capable chat. It is gaining attention as part of the XYZ Aquila family. |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 351 | 1,214 | A more capable Qwen3.5-MoE-derived model with agentic-search tags, targeting tool-augmented generation. Its lower download count but rising likes point to early-stage adoption. |
| [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 148 | 2,078 | AMD's Instella MoE reasoning model with a 16B-total/3B-active architecture and "Think" behavior. It reflects growing AMD presence in open-weight LLMs. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,850 | 967,622 | Moonshot AI's image-text-to-text model with compressed-tensor support for efficient multimodal inference. It leads the leaderboard in likes (9,850), making it the most socially validated release today. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 1,464 | 0 | MiniMax's image-text-to-video model using the diffusers framework. It has 1,464 likes but zero downloads so far, suggesting a very fresh release or gated access that is already generating buzz. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 446 | 2 | ComfyUI-Org's integration package for running MiniMax-H3 in ComfyUI workflows. The 446 likes and negligible downloads indicate that users are favoriting the tool but have not yet adopted it at scale. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 264 | 8,504 | A small image-text-to-text model from Thinking Machines designed for multimodal conversations. It is an interesting entrant in the low-parameter vision-language space. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 231 | 431,487 | Microsoft's vision-language model with a 431K download count despite 231 likes. It appears to be a practical multimodal model that is quietly accumulating usage. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 212 | 4,609 | An early preview text-to-speech model from Audio8 using the ArkTTS framework. It is notable as a 0.6B-parameter TTS entry in a list otherwise focused on language and vision. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 398 | 1,944 | A TTS model optimized for local, CPU, and edge-AI deployment. Its 398 likes and 1.9K downloads show enthusiasm for lightweight speech synthesis. |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 159 | 0 | A text-to-image LoRA for Krea2-style image generation, with no downloads yet. Its 159 likes suggest a niche but eager audience waiting for release or compatibility. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 268 | 2,988 | Microsoft's 27B image-text-to-text model specialized for computer-use scenarios. It blends multimodal understanding with GUI/agentic action, a fast-moving area for open models. |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 118 | 1,736 | A Qwen3.5-based multimodal model supporting image-text-to-text tasks. It is an early community example of applying Qwen3.5-style architectures beyond pure text. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,846 | 2,601,062 | Baidu's OCR model with 2.6M downloads, one of the highest usage counts on the leaderboard. It brings scalable text extraction from images and is attracting practical enterprise/integration use. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 445 | 14,339 | A Qwen3.5-MoE-derived coding model for developer-facing code generation. Its 14K downloads and 445 likes demonstrate strong demand for specialized code LLMs. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,431 | 1,550,034 | A heavily modified Qwen3.6 27B GGUF fine-tune with uncensored/creative personas in the "Heretic" line. It has 1.55M downloads, making it the most downloaded community GGUF on the list. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 429 | 69,656 | Unsloth's GGUF quantization of DeepSeek-V4-Flash-0731 for efficient local inference. It gives DeepSeek users an optimized path to run the model on consumer hardware. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 282 | 128,215 | GGUF version of Moonshot's Kimi-K3 multimodal model produced by Unsloth. Its 128K downloads show early appetite for locally runnable Kimi variants. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 342 | 287,745 | A Qwen3.6 MoE GGUF fine-tune with Hermes-style instruction tuning and uncensored behavior. The 287K downloads indicate strong community interest in flexible, uncensored MoE models. |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 168 | 68,778 | A 250B Solar Open2 model quantized to NVFP4 format for vLLM. It is notable for bringing a huge open model into a practical, low-precision inference regime. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 237 | 304,420 | A compact Qwen3.5 9B GGUF fine-tune in the same "Defiant/Fable/Heretic" series. It has accumulated 304K downloads, showing the series' strong community pull. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,269 | 1,895,741 | A Qwen3.6 35B MoE GGUF with uncensored and aggressive-tuning tags plus vision support. At 3,269 likes and 1.9M downloads, it is one of the most successful community models in this digest. |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 242 | 1,324 | Unsloth's optimized/compressed-tensor release of Kimi-K3, separate from the GGUF version. It provides an alternative route to efficient multimodal deployment while retaining the original's feature-extraction capabilities. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 93 | 0 | An experimental INT8 ComfyUI-oriented variant combining Qwen3-VL 32B with MiniMax-H3-related features. With zero downloads, it is likely a novelty/proof-of-concept, but its 93 likes signal curiosity. |

## 3. Ecosystem Signal

Three dynamics stand out. First, Chinese open-weight labs—DeepSeek, Moonshot, Zhipu/ZAI, Baidu, and Nanbeige—are setting the pace; DeepSeek-V4-Flash and GLM-5.2 alone total millions of downloads. Second, multimodal is becoming mainstream: Kimi-K3, MiniMax-H3, Mage-VL, and Fara1.5 are pushing image-text-to-text, video, and computer-use models into the open-weight ecosystem, while TTS entries show growing edge-AI speech demand. Third, community infrastructure around Qwen3.5/3.6 and DeepSeek bases is extremely active. GGUF quantizations, uncensored fine-tunes, and MoE variants dominate the fine-tunes table; Unsloth, DavidAU, and individual users are converting flagship models into locally runnable artifacts. Low-bit formats such as NVFP4 and compressed-tensors are becoming important adoption levers. Open-weight momentum is clearly strong, but the highest download counts are associated with practical applications—chat, OCR, vision, video, and speech—rather than benchmark-only releases.

## 4. Worth Exploring

- **moonshotai/Kimi-K3** — Highest likes in the digest and compressed-tensor support; worth studying as an efficient multimodal foundation model that already has ~1M downloads and strong community endorsement.
- **deepseek-ai/DeepSeek-V4-Flash** — The most-downloaded model today at 2.7M; represents the current DeepSeek conversational flagship and is a benchmark for open-weight LLM adoption.
- **baidu/Unlimited-OCR** — 2.6M downloads show that OCR is a high-demand practical use case; useful for building real-world document-intelligence pipelines and understanding multimodal utility outside chat.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*