# Hugging Face Trending Models Digest 2026-08-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-19 23:12 UTC

---

# Hugging Face Trending Models Digest — 2026-08-20

## 1. Today's Highlights

Qwen’s Qwen3.8 family dominates the chart: the base 27B multimodal model earned 11.5K weekly likes, while GGUF, FP8, NVFP4, and abliterated variants account for roughly half the top 30. MiniMax is the second major force, with H3 video generating 4.2K likes and a ComfyUI port reaching 15.2M downloads, plus Music3 expanding into text-to-audio. DeepSeek’s V4 Flash/Pro models and Moonshot’s Kimi-K3 are the strongest non-Qwen LLM contenders, with Kimi-K3 at 10.9K likes and 2.3M downloads. The biggest community behavior is uncensoring/abliteration: many Qwen3.8 fine-tunes and GGUF quants are explicitly labeled uncensored or “heretic.” GGUF remains the dominant local deployment format, while MLX trails with low download counts.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,467 | 1,006,235 | The week’s most-liked release is Qwen’s 27B dense multimodal chat model. It combines conversational text generation with image understanding and has become the base for a wave of GGUF, FP8, and abliterated derivatives. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,852 | 2,289,863 | Kimi-K3 is a new image-text-to-text model from Moonshot with compressed-tensors and feature-extraction capabilities. Its near-11K likes and 2.3M downloads make it one of the strongest non-Qwen challengers this week. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,547 | 2,330,940 | A fast, efficient entry in DeepSeek’s V4 family focused on text generation and chat. It has already accumulated 2.3M downloads, showing strong demand for balanced inference-speed variants. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,702 | 430,313 | A 30B image-text-to-text conversational model from the meta-models org. It is trending with 430K downloads, standing out as a large multimodal alternative in the 30B class. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,099 | 12,699 | A massive sparse MoE model from Qwen: 2.4T total parameters with 95B active. It pushes the frontier of efficient large-scale text generation, though downloads are still early. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 631 | 37,583 | The Pro-tier text-generation model in DeepSeek’s V4 lineup, designed for higher-quality responses. It complements the Flash variant and is gaining traction among serious LLM users. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 230 | 1,239 | A preview text-generation model from dots-studio oriented around “dots3” note workflows. It is a smaller-scale release with modest downloads but enough community enthusiasm to trend. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,176 | 3,055,205 | A powerful image-text-to-video model and one of the week’s most popular generation releases. It already drives a large ecosystem of ComfyUI ports and video fine-tunes. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,441 | 15,213,225 | ComfyUI single-file port of MiniMax-H3. With 15.2M downloads, it is the highest-download model in this digest. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,317 | 555,993 | An image/video-to-video generation model supporting multiple video tasks. It continues to trend for its flexible single-file diffusion workflow. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,032 | 13,138 | A text-to-audio/music generation model built on a diffusers pipeline. It shows MiniMax expanding beyond video into music generation. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 624 | 340,984 | A turbo variant of MiniMax-H3 optimized for image-to-video generation with t2v/i2v/r2v support. It brings faster video generation to the MiniMax ecosystem. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 268 | 26,566 | A compact 2.9B text-to-image model packaged for ComfyUI. Its diffusion single-file format and small size make it easy to try. |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 193 | 325,083 | ComfyUI release of MiniMax-Music3, packaged as a single diffusion file. It extends the ComfyUI ecosystem to music generation. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,288 | 0 | A developer utility that patches Qwen chat templates for MLX and Jinja environments. It is not a model but has earned 1,288 likes by solving Qwen3.5 integration issues. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,165 | 3,033,363 | An extreme community merge/quantization of Qwen3.6-27B with uncensored and MTP optimizations. It has amassed 3.0M downloads, making it a viral GGUF release despite the unofficial naming. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,058 | 4,318,134 | Unsloth’s GGUF quantization of Qwen3.8-27B. With 4.3M downloads, it is the most downloaded Qwen-based quantization this week. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 611 | 60,078 | FP8 abliterated version of Qwen3.8-27B for lower-memory deployment. It combines uncensored behavior with efficient FP8 quantization. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 598 | 1,063,646 | Official FP8 quantization of Qwen3.8-27B from Qwen. It retains the full multimodal chat experience while reducing memory footprint, with 1.06M downloads. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 589 | 27 | MLX conversion of the uncensored/abliterated Qwen3.8-27B. It targets Apple-silicon users, though downloads are still minimal. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 467 | 766,812 | Community GGUF of an uncensored Qwen3.8-27B tuned for llama.cpp. It has 766K downloads, indicating high demand for locally runnable uncensored chat. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 285 | 131,113 | Specialized GGUF with aggressive MTP settings and uncensored behavior. It targets users who want maximum creative freedom from multimodal Qwen. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 284 | 653,042 | Unsloth’s NVFP4 quantized build of Qwen3.8-27B. It provides an NVIDIA-focused low-precision format for large multimodal inference. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 283 | 0 | A community fine-tune of MiniMax-H3 for image-text-to-video generation. It shows the video model’s fine-tuning ecosystem expanding rapidly. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 197 | 32,454 | A GGUF variant of Qwen3.8-27B with “Ridge” tuning. It attracts users experimenting with alternative llama.cpp quantizations. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 184 | 26,472 | GGUF edition of orcarouter’s uncensored Qwen3.8-27B. It offers an easy llama.cpp deployment path for the abliterated multimodal model. |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 170 | 164,263 | An abliterated (“uncensored”) GGUF of Qwen3.8-27B. It has 164K downloads and is one of several abliterated builds in the top 30. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 170 | 94,234 | Huihui’s abliterated GGUF version of Qwen3.8-27B. It is a popular choice in the abliteration ecosystem alongside huihui’s safetensors release. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 165 | 7,207 | Safetensors abliterated version of Qwen3.8-27B, suitable for transformers workflows. It complements the GGUF build with direct model loading. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 160 | 245,266 | Another “heretic”-style abliterated Qwen3.8-27B GGUF. Its 245K downloads show sustained appetite for uncensored local chat models. |

## 3. Ecosystem Signal

The top-30 list is overwhelmingly Qwen-centric. The Qwen3.8 line spans dense, MoE, FP8, GGUF, NVFP4, MLX, and abliterated variants; almost half the entries are Qwen3.8 derivatives. This indicates an open-weight ecosystem where a base release quickly becomes a platform for community optimization.

DeepSeek V4 and Moonshot Kimi-K3 provide healthy competition, though their representation is smaller. MiniMax is the clear leader outside text, with H3 video, Music3 audio, and multiple distribution formats including ComfyUI single files in the charts. Comfy-Org/MiniMax-H3’s 15.2M downloads show how important GUI-first distribution is for generation models.

The biggest community pattern is “uncensoring”: abliterated/heretic/uncensored variants of Qwen3.8 dominate the fine-tune section. GGUF remains the most-used local format, while MLX trails in downloads. No code, math, or medical specialist broke into the top 30 this week.

## 4. Worth Exploring

- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — A rare 2.4T-parameter sparse MoE with only 95B active parameters. It is worth studying for scale, efficiency, and the direction of future open-weight LLMs.
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — Kimi-K3’s compressed-tensors and feature-extraction tags make it an interesting case for efficient multimodal/LLM compression. Its 10.9K likes indicate unusually strong early traction.
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The center of a fast-growing open video ecosystem. Pairing it with the Comfy-Org port gives a practical end-to-end stack for image-to-video and text-to-video generation.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*