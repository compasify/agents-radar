# Hugging Face Trending Models Digest 2026-08-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-14 00:59 UTC

---

# Hugging Face Trending Models Digest — 2026-08-14

## 1. Today's Highlights

Today's Hugging Face trending chart is dominated by open-weight model releases and their community ecosystems. Moonshot's Kimi-K3 leads with 10.6k weekly likes, while DeepSeek's V4 Flash and Qwen's 3.8 MoE underline the shift toward efficient large-scale language models. MiniMax-H3 is the most active multimedia family: its official image-to-video model, Comfy-Org port (10.3M downloads), Turbo variants, LoRAs, and GGUF files together form the week's largest cluster. Quantization and fine-tuning are widespread, with GGUF, FP8, NVFP4, INT8, and LoRA entries making up 12 of the 30 trending models. Community "uncensored/heretic" fine-tunes continue to attract outsized attention, showing demand for less restricted creative models.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 783 | 1,012 | Sparse mixture-of-experts text-generation model with 2.4T total parameters and 95B active. It is trending as Qwen's next-generation large MoE, promising strong quality for inference cost. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,319 | 1,431,587 | DeepSeek's efficient Flash variant for text generation and chat. High adoption reflects its strong quality-to-cost ratio for conversational AI. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 285 | 0 | Newly released Pro variant of DeepSeek V4, dated 0813. With zero downloads yet, it shows early-stage buzz for a likely stronger/larger model. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 602 | 116,640 | Liquid transformer language model with 2.6B parameters. Popular for efficient inference and edge deployment due to its small size. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 216 | 1,292 | Tiny variant of the Ling-3.0 line using the bailing_hybrid architecture with custom code. It is interesting for lightweight, MIT-licensed experimentation. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 353 | 3,868 | Mixture-of-experts causal language model released as a preview. It is drawing attention as a new open-weight text-generation option. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 130 | 22,279 | NVIDIA's 30B-total, 3B-active MoE language model in BF16. It is notable for efficient open-weight inference and enterprise deployment. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 323 | 10,052 | Flash version of Ling-3.0 tuned for conversational text generation. Its custom-code hybrid architecture is gaining community interest. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,418 | 121,042 | 30B image-text-to-text conversational model for multimodal dialogue. The large download count and GGUF variant indicate strong local-use demand. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,823 | 1,605,940 | MiniMax's flagship text/image-to-video generation model. It anchors this week's biggest ecosystem, with many LoRAs, GGUFs, and ComfyUI ports. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 718 | 57,287 | Diffusion model for image-to-video, text-to-video, and video-to-video generation. It stands out as a flexible single-file creative video tool. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 462 | 91,455 | Turbo variant of MiniMax-H3 optimized for faster image-to-video generation. Its strong download count points to demand for speed in video pipelines. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,289 | 10,365,210 | ComfyUI single-file distribution of MiniMax-H3. With over 10M downloads, it is the most-used entry point for running H3 video generation locally. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,621 | 1,871,575 | Latest open multimodal model from Moonshot AI, supporting image+text input. It has the highest likes in this digest and uses compressed-tensors for efficient serving. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 306 | 25 | Text-to-audio model for music generation from MiniMax. Very early release with a high like-to-download ratio, showing strong community anticipation. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 304 | 0 | ComfyUI integration for MiniMax-H3 from Kijai. Although it has no direct downloads, it is a key tooling repo for the H3 video ecosystem. |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 188 | 3,184 | Image-text-to-text conversational model built on Qwen3.5 MoE architecture. It is an interesting new entrant in open multimodal reasoning. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 371 | 1,164 | NVIDIA's voice-chat model combining speech and text modalities. It reflects open-weight progress in audio interactive AI. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 726 | 0 | LoRA adapter for MiniMax-H3 Turbo text-to-video. Despite zero downloads, its high likes signal strong community interest in customizing Turbo video generation. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 390 | 352,023 | Unsloth's GGUF quantization of Muse-Glimmer-30B. 352k downloads show huge demand for running the vision-language model locally. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,987 | 2,793,115 | Community fine-tune of Qwen3.6 27B with an uncensored/creative "heretic" style, packaged as GGUF. 2.8M downloads make it one of the most-used community LLM variants this week. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 257 | 136,783 | GGUF version of Muse-Glimmer-30B published by meta-models. It complements the full-precision release and expands access to quantized multimodal chat. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 229 | 44,859 | NVFP4-quantized version of NVIDIA's 30B-A3B Lightning MoE. It offers lower-memory deployment while retaining the efficiency of the active-parameter design. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 297 | 324 | Community fine-tune of MiniMax-H3 for text-to-video. It demonstrates how quickly creators can produce stylized variants of the H3 video base. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 314 | 0 | ComfyUI-ready LoRA adapter for MiniMax-H3 Turbo. It is a practical add-on for users who want a node-based video-generation workflow. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 159 | 4,692 | LoRA designed to improve realism of people in MiniMax-H3 video generation. It comes from fal, pointing to production/API-oriented fine-tuning. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 157 | 4,000 | FP8 quantization of the Qwen3.8-2.4T-A95B MoE model. It allows large-model inference with reduced memory and is likely paired with the base release. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 149 | 111,222 | GGUF format of MiniMax-H3 for text/image-to-video generation. It makes video generation more accessible through stable-diffusion.cpp and local runtimes. |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 149 | 652 | LoRA that rewrites prompts for MiniMax-H3 video generation. It is a useful quality-of-life component for improving video outputs. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 483 | 0 | Community INT8 quantized Qwen3-VL-32B with ComfyUI and "H3" customization. No downloads yet, but it captures the niche appetite for uncensored multimodal models. |

## 3. Ecosystem Signal

MiniMax-H3 is the clearest example of a model-family flywheel: one strong open-weight video base, plus ComfyUI distribution (10M+ downloads), official Turbo variants, LoRAs for realism/prompt rewriting, and GGUF quantizations. Qwen is also broadening from language into vision/video-style fine-tunes, while DeepSeek's V4 Flash/Pro pair shows a release strategy of offering both efficient and premium tiers. Moonshot's Kimi-K3 demonstrates that high-quality open multimodal models can generate enormous interest (10.6k likes) through compressed-tensor serving. Open-weight releases dominate the top 30; no closed/proprietary model appears. The fine-tuning and quantization layer is especially active: GGUF, FP8, NVFP4, INT8, and LoRA formats account for 12 of 30 entries. Community “uncensored/heretic” fine-tunes remain a persistent niche, often gaining outsized download counts. Overall, the ecosystem is shifting toward open video generation, efficient MoE architectures, and highly accessible quantized variants.

## 4. Worth Exploring

- **Kimi-K3** — Highest likes (10.6k) and 1.87M downloads. It is a strong open multimodal model with compressed tensors, making it a great study case for efficient vision-language serving and open-weight quality.
- **MiniMax-H3** — This week's center of gravity. Try the official text/image-to-video model or the Comfy-Org single-file port to see why video generation has become a major open-weight battleground; the many LoRAs show how quickly users can customize it.
- **DeepSeek-V4-Flash-0731** — With 1.43M downloads and 3.3k likes, it is a production-oriented open LLM with an attractive efficiency/quality balance. It is also useful to compare with the newly released Pro variant for understanding model-tiering strategies.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*