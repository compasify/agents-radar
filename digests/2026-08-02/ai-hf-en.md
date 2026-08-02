# Hugging Face Trending Models Digest 2026-08-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-02 01:43 UTC

---

## 1. Today's Highlights

Moonshot AI's **Kimi-K3** is the breakout release of the week, earning 9,489 likes and pushing multimodal image-text-to-text modeling to the top of the Hub. DeepSeek's **V4-Flash** family also dominates real-world usage: the main release has 2.8M downloads, while the newer **0731 refresh** shows continued momentum. Zhipu's **GLM-5.2** is another major open-weight LLM, with 4,737 likes and 1.68M downloads. The rest of the chart is crowded with community Qwen3.6 MoE fine-tunes, especially uncensored GGUF variants, plus strong niche entries in OCR, TTS, ASR, and text-to-image LoRAs. Low-bit quantization is also accelerating, highlighted by a ternary 2-bit 27B GGUF from prism-ml.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,429 | 15,366 | Refresh of DeepSeek's V4 Flash line with substantial weekly likes. Represents the latest state of DeepSeek's fast-inference text-generation series. |
| [GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,737 | 1,683,442 | Large open-weight conversational LLM from Zhipu AI, built on a MoE architecture. Its strong like count and download volume signal broad enterprise and community adoption. |
| [Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 611 | 27,892 | A compact 3B text-generation LLM from Nanbeige. It appeals to developers looking for lightweight, efficient open-weight models. |
| [Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 868 | 77,021 | Poolside's latest open-weight LLM in the Laguna series. Strong weekly likes point to growing interest in non-Chinese open LLM alternatives. |
| [Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 717 | 13,426 | Upstage's 250B-scale open-weight text generation model. It is notable for pushing training efficiency and open-source scale simultaneously. |
| [DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,948 | 2,814,414 | The main DeepSeek V4 Flash release and the most-downloaded LLM in this list. Its enormous download count confirms it as a default open-weight choice for many applications. |
| [XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 357 | 650 | A mini MoE model built on the Qwen3.5 MoE architecture. Its small active-parameter design is aimed at efficient inference and edge-friendly deployment. |
| [XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 330 | 923 | The pro variant from XYZAILab, tagged for agentic-search workflows. It reflects the industry shift toward open models designed for tool-use and agent pipelines. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,489 | 559,924 | Moonshot AI's flagship multimodal image-text-to-text model and the week's most-liked release. Its compressed-tensors support and feature-extraction pipeline make it highly adaptable for multimodal serving. |
| [Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 361 | 1,565 | A local-first, CPU-friendly text-to-speech model. It is trending because it targets edge-AI and on-device speech synthesis without major hardware requirements. |
| [Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 213 | 3,998 | A smaller variant of Thinking Machines' Inkling multimodal model. It offers a lighter entry point for teams experimenting with multimodal reasoning. |
| [Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 172 | 10,525 | Microsoft's vision-language model for multimodal understanding. It brings enterprise credibility to the growing field of open-weight VLMs. |
| [Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 166 | 3,254 | A 0.6B preview TTS model based on ArkTTS. It is gaining traction as another high-quality open text-to-speech alternative. |
| [Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 242 | 2,775 | Microsoft's computer-use vision-language model built on a Qwen3.5 base. Its interaction focus points to a future where multimodal models operate GUIs and agents. |
| [Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 95 | 0 | A Krea 2-based LoRA for text-to-image generation in ComfyUI. It is brand-new and untested by downloads, but shows the continued growth of image-generation LoRA culture. |
| [Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,672 | 59,076 | The main Inkling multimodal model from Thinking Machines. It combines strong likes with meaningful download volume, making it one of the most interesting non-frontier VLMs this week. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,714 | 2,457,387 | Baidu's OCR model is one of the most downloaded models overall this week. Its feature-extraction pipeline and huge adoption point to strong demand for robust document understanding. |
| [KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 391 | 10,771 | A code-focused model built on the Qwen3.5 MoE architecture. Developer-oriented downloads and coding tags make it a notable open-weight alternative for code generation. |
| [VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 141 | 5,835 | Microsoft's BitNet-based automatic speech recognition model. Its GGML/GGUF support suggests a specialized ASR model designed for efficient local deployment. |
| [LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) | LiquidAI | 87 | 6,190 | LiquidAI's compact 350M fill-mask encoder. It is relevant for representation learning and embedding workloads in resource-constrained environments. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,236 | 1,173,001 | A heavily fine-tuned, uncensored Qwen3.6 GGUF with MTP support. Its 1.17M downloads show the community's appetite for creative, uncensored, locally runnable models. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 289 | 4,048 | Unsloth's fast GGUF conversion of the latest DeepSeek V4 Flash refresh. It gives local-first users an immediate path to run the new checkpoint. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 243 | 41,337 | The GGUF version of Moonshot's Kimi-K3. Its download count shows strong demand for running the week's hottest multimodal model in local runtimes. |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 221 | 1,072 | A compressed-tensors variant of Kimi-K3, likely optimized for efficient serving. It reflects the quantization race around top open multimodal models. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 288 | 228,610 | An uncensored Qwen3.6 MoE GGUF with Hermes-style fine-tuning. Its 228k downloads demonstrate strong community growth around 35B-A3B MoE variants. |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 22,396 | An NVFP4-quantized version of Upstage's Solar 250B model. It is designed for vLLM inference, making a 250B open-weight model far more practical to serve. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 112 | 875 | A Qwen3.6 MoE variant with aggressive W2-style quantization. It targets users who want extreme parameter compression with retained MoE performance. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 186 | 267,572 | A smaller 9B uncensored GGUF from DavidAU, with MTP and imatrix support. It brings the "uncensored" roleplay/chat style to lower-resource setups. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,226 | 1,823,436 | A top community fine-tune of the Qwen3.6 35B-A3B MoE, with 3.2k likes and 1.8M downloads. It is one of the clearest signals that open MoE chat models are central to current HF activity. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,134 | 716,341 | A 27B model pushed into a ternary 2-bit GGUF. This is a strong example of the ultra-low-bit quantization frontier expanding into practical llama.cpp usage. |

## 3. Ecosystem Signal

Open-weight model families are clearly dominating Hugging Face this week: DeepSeek V4, Kimi K3, GLM-5.2, Solar Open2, and Qwen-derived community variants all appear with significant likes and downloads. Moonshot AI's **Kimi-K3** stands out as the hottest new release, while **DeepSeek-V4-Flash** proves that smaller/faster model variants can achieve massive production traction. Quantization is arguably the strongest undercurrent of the week: Unsloth GGUF conversions, NVFP4 for vLLM, compressed-tensors Kimi, and a ternary 2-bit Bonsai GGUF all point to rising demand for local and cost-efficient inference. Fine-tuning activity is concentrated heavily around **Qwen3.6-35B-A3B uncensored MoE variants**, with HauhauCS and DavidAU leading adoption. Meanwhile, audio and specialized models are quietly expanding the ecosystem: TTS, ASR, OCR, and computer-use multimodal models show that the Hub is no longer just a chatbot repository. The overall pattern rewards open, runnable, and highly specialized models over monolithic releases.

## 4. Worth Exploring

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The week's most-liked release. Its multimodal, feature-extraction, and compressed-tensors design makes it the most important model to study for understanding where open multimodal model development is heading.
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — A 27B ternary 2-bit GGUF with 716k downloads. It is a great case study in extreme low-bit quantization and the growing practicality of running large-scale LLMs on consumer hardware.
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — With 2.45M downloads and 3.7k likes, this OCR model is one of the most broadly deployed specialist models on the Hub. It is worth exploring for any production workflow involving document understanding, as well as for studying how specialists can outperform general VLMs at specific tasks.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*