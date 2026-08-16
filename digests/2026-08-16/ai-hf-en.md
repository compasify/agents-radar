# Hugging Face Trending Models Digest 2026-08-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-15 23:11 UTC

---

# Hugging Face Trending Models Digest — 2026-08-16

## Today's Highlights

This week is defined by two megatrends: **efficient multimodal AI** and **ultra-large sparse MoE text models**. Moonshot AI's Kimi-K3 leads with 10,722 likes and 2.1M downloads, while Qwen's Qwen3.8 family dominates multiple tiers — base 27B, 2.4T MoE, FP8, NVFP4, and GGUF variants. MiniMax-H3 has become the center of the video-generation ecosystem, with Comfy-Org's packaging alone reaching 12.7M downloads and multiple LoRAs/GGUF quantizations following quickly. DeepSeek V4, Meta's Muse-Glimmer, NVIDIA Nemotron, and LiquidAI all show that open-weight release momentum remains extremely strong. The top-30 list also confirms that quantization and community fine-tuning are now first-class citizens in the Hugging Face lifecycle.

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 966 | 6,381 | Qwen's massive sparse MoE text model, with 2.4T total parameters and ~95B active. It is the high-capacity text-only backbone of the Qwen3.8 family, and its FP8 variant makes it more deployable. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 488 | 19,945 | The latest Pro iteration in DeepSeek's V4 text-generation line, dated 0813. It continues DeepSeek's open-weight frontier LLM push, branching performance and reasoning capabilities. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,418 | 1,798,247 | A widely adopted DeepSeek V4 Flash release with 1.8M downloads. Its blend of efficiency and reasoning quality makes it a strong production default. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 256 | 4,832 | A tiny member of the Ling-3.0 series using a hybrid architecture with custom code and MIT licensing. It is an interesting signal for lightweight/regional LLM deployment. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 627 | 135,448 | LiquidAI's 2.6B text-generation model based on liquid/state-space-inspired architecture. Its strong download count reflects growing interest in small, efficient non-transformer LLMs. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 150 | 62,965 | NVIDIA's 30B model with ~3B active parameters in BF16 precision. It is a solid efficient open-weight LLM for accelerated inference, also available in an NVFP4 version. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 9,762 | 91,917 | Qwen's flagship 27B image-text-to-text conversational model. It sits near the top of this week's likes and anchors the larger Qwen3.8 quantization ecosystem. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,574 | 246,454 | Meta's 30B vision-language model for conversational image-text tasks. Multiple GGUF releases and high downloads signal rapid community adoption. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 937 | 378,439 | A versatile generation model supporting image-to-video, text-to-video, and video-to-video. Its diffusion single-file format has driven broad ComfyUI adoption. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 766 | 5,079 | MiniMax's text-to-audio music generation model built on diffusers. It is one of the few music-generation entries in the top 30, showing growing audio model interest. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,971 | 2,212,155 | MiniMax's high-fidelity image-text-to-video generation model. It anchors a major video-generation ecosystem spanning ComfyUI conversions, LoRAs, and GGUF quantizations. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 513 | 211,917 | A community Turbo variant of MiniMax-H3 focused on faster image-to-video generation. It provides an efficient alternative to the full H3 model. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,722 | 2,100,680 | Moonshot AI's compressed multimodal image-text-to-text model with feature-extraction capabilities. It is the week's most-liked entry and a clear sign of demand for efficient multimodal LLMs. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,344 | 12,790,850 | Comfy-Org's single-file diffusion version of MiniMax-H3 for ComfyUI. It is the most-downloaded item in this week's trending list, making H3 easy to run locally. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 188 | 16,829 | A 2.9B text-to-image diffusion model packaged as a single file for ComfyUI. It highlights the continued appetite for small, locally runnable image generation models. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 160 | 240 | A preview model from the dots3 series for image-text-to-text and text generation. It is early-stage but draws curiosity from the dots3 note-taking ecosystem. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 352 | 0 | Kijai's ComfyUI integration package for MiniMax-H3 workflows. Although it has zero downloads, its 352 likes make it a notable community infrastructure tool for video generation. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,210 | 867,963 | Unsloth's GGUF quantization package for Qwen3.8-27B, enabling CPU/GPU local inference. This is the most popular way to run Qwen3.8-27B outside full precision. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 433 | 682,188 | Unsloth's GGUF quantizations of Meta's Muse-Glimmer-30B. The 682K download count shows huge demand for efficient vision-language model inference. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 423 | 123,157 | Official FP8 quantized version of Qwen3.8-27B for reduced memory usage. It gives enterprises a first-party path to deploy the multimodal model on FP8 hardware. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 277 | 321,049 | Meta's own GGUF distribution of Muse-Glimmer-30B. It complements the Unsloth release and provides an official quantized route for Meta's vision-language model. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 270 | 170,554 | NVIDIA's NVFP4-quantized version of Nemotron 3.5 Lightning 30B-A3B. It targets NVIDIA-optimized hardware and shows the growing trend toward ultra-low-precision LLM deployment. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,048 | 2,983,500 | A community GGUF merge/fine-tune of Qwen3.6-27B with "uncensored" and heavily customized modifications. Its 2.98M downloads demonstrate massive demand for creative GGUF variants. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 756 | 0 | A LoRA adapter for MiniMax-H3-Turbo focused on text-to-video generation. It has strong likes with zero downloads yet, indicating a very recent release with high immediate visibility. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 192 | 12,737 | A LoRA from fal for making MiniMax-H3 outputs more realistic in people-focused scenes. It highlights platform-backed fine-tuning for preferred video-generation styles. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 193 | 10,745 | Official FP8 quantization of Qwen's 2.4T-total-parameter MoE text model. It makes the massive model much more practical to serve on FP8-accelerated infrastructure. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 164 | 173,741 | Unsloth's GGUF conversion of MiniMax-H3 for light/local video generation. This is an early milestone in compressed video generation for local execution. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 166 | 90,924 | Unsloth's NVFP4 quantization of Qwen3.8-27B for reduced memory footprint on NVIDIA GPUs. It makes Qwen3.8-27B even more accessible across low-precision formats. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 147 | 0 | A community FP8 "uncensored" variant of Qwen3.8-27B. It has no downloads yet, but is part of the familiar pattern of safety-refined community fine-tunes appearing right after base releases. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 330 | 633 | A community text-to-video adaptation of MiniMax-H3 with Apache-2.0 and endpoint-compatible tags. It is early but signals creative fine-tuning directions in the H3 ecosystem. |

## Ecosystem Signal

Qwen3.8 is the clearest ecosystem superfamily this week: base multimodal, MoE text, FP8, NVFP4, GGUF, and even an "uncensored" variant all chart. This shows not only strong first-party releases but an unusually fast community quantization pipeline, led by Unsloth. MiniMax-H3 is the video-generation center of gravity, with Comfy-Org's single-file conversion reaching 12.7M downloads and multiple LoRAs/GGUFs extending it. Open-weight releases remain dominant — Qwen, DeepSeek V4, Kimi-K3, Meta Muse-Glimmer, NVIDIA Nemotron, and LiquidAI all appear without any proprietary-only model in the top 30. Kimi-K3's compressed multimodal architecture and top like count point to rising demand for efficient, high-quality vision-language models. Meanwhile, low-bit precision (FP8, NVFP4) and sparse MoE designs are becoming expected defaults rather than exotic options. Community fine-tunes, especially "uncensored" chat GGUFs and video LoRAs, continue to drive massive download numbers.

## Worth Exploring

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — The week's most-liked model, with 2.1M downloads. Its compressed multimodal design makes it a key reference for efficient vision-language architectures.
- [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) — A frontier-scale sparse MoE with ~95B active parameters. It, along with its FP8 variant, represents the state of the art in accessible large-model serving.
- [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) — The most-downloaded artifact in the trending list at 12.7M. It is a perfect case study in how packaging and workflow compatibility can drive adoption beyond raw model quality.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*