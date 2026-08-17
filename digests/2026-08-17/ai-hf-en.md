# Hugging Face Trending Models Digest 2026-08-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-16 23:09 UTC

---

# Hugging Face Trending Models Digest — 2026-08-17

## 1. Today's Highlights

The week is led by Qwen's Qwen3.8 family, spanning a flagship multimodal 27B model, a 2.4T-parameter MoE text model, and multiple official/community quantizations. Moonshot AI's Kimi-K3 is the standout new multimodal release with 10.7K likes, while MiniMax-H3 continues to power a large open video-generation ecosystem, including ComfyUI conversions and LoRAs. DeepSeek-V4 Flash/Pro and NVIDIA Nemotron Lightning anchor the text-only LLM tier. Quantization and fine-tuning activity is extremely heavy: GGUF, FP8, NVFP4, uncensored fine-tunes, and LoRAs make up nearly half of the trending list. Music generation also appears as a growing niche with MiniMax-Music3.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,455 | 1,872,232 | DeepSeek's latest V4 text-generation model, positioned as a fast and efficient LLM release. It is one of the strongest text-only signals this week, with high like and download velocity. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,005 | 7,932 | A massive MoE text-generation model with 2.4T total parameters and ~95B active parameters. It brings Qwen3.8 architecture advances to text-only workloads and also has a trending FP8 quantization. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 643 | 141,009 | A small 2.6B text-generation model from Liquid AI with an lfm2 tag. Its compact size and solid download count point to sustained interest in efficient local LLMs. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 530 | 21,873 | The Pro-tier counterpart to DeepSeek-V4-Flash, focused on higher-end conversational generation. It has fewer downloads than Flash but remains a notable V4 family release. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 280 | 5,727 | A tiny experimental model with a custom "bailing_hybrid" architecture and MIT license. Its pipeline is unlisted, making it a niche but notable open-weights release. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 156 | 66,253 | NVIDIA's BF16 MoE language model with a 30B total / 3B active parameter profile. It is the precision base for the platform's trending NVFP4 quantized version. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,762 | 2,136,775 | Moonshot AI's flagship image-text-to-text model, tagged with feature-extraction and compressed-tensors. It is the most-liked model in this digest and a breakout open multimodal release. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 10,251 | 267,725 | Qwen's flagship 27B image-text-to-text model using the qwen3_5 architecture. It anchors a large ecosystem of GGUF, FP8, NVFP4, and uncensored community derivatives. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,023 | 2,307,541 | A text/image-to-video model with 4K likes and 2.3M downloads. It supports an active ecosystem of Turbo variants, LoRAs, GGUF files, and ComfyUI single-file conversions. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,624 | 292,973 | A 30B image-text-to-text model with the muse_glimmer tag. Strong demand for local multimodal inference is visible through its official and unsloth GGUF conversions. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,381 | 13,406,892 | ComfyUI-ready single-file conversion of MiniMax-H3. It is the most downloaded model in this entire digest at 13.4M downloads, showing ComfyUI's central role in video generation. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,019 | 424,099 | Lightricks' image-to-video generation model, with support for text-to-video and video-to-video conversion. It remains a leading open video generation alternative. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 832 | 8,639 | A text-to-music diffusion model from MiniMax. It is the week's most prominent music-generation entry and already has a Comfy-Org wrapper. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 552 | 239,206 | A community "Turbo" variant of MiniMax-H3 optimized for faster image-to-video generation. Its 239K downloads show strong appetite for accelerated video-generation checkpoints. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 218 | 20,860 | A 2.9B text-to-image diffusion model with ComfyUI single-file support. It is a lightweight generation model with concentrated community interest. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 182 | 393 | An image-text-to-text preview model tagged dots3_note and text-generation. It is an early-stage note-oriented multimodal model with modest but interesting initial attention. |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 147 | 0 | ComfyUI packaging of MiniMax Music 3 under Apache-2.0. It currently has zero recorded downloads, but the underlying music model's popularity makes this wrapper worth watching. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,090 | 3,020,070 | A heavily modified, uncensored GGUF fine-tune of a Qwen 27B-lineage model with MTP support. It is the most-liked quantified derivative in this digest with 3M downloads. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,441 | 1,945,635 | Unsloth's GGUF quantization of Qwen3.8-27B, the default local-inference entry point for the flagship multimodal model. Its 1.95M downloads make it one of the week's most-used community formats. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 772 | 0 | A LoRA for MiniMax-H3 Turbo focused on text-to-video and audio-video generation. It has 772 likes with zero recorded downloads, indicating strong early interest or delayed usage tracking. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 477 | 352,971 | Official FP8 quantization of Qwen3.8-27B for lower-precision serving and inference. Its 353K downloads show enterprise adoption of FP8 for multimodal LLM workloads. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 453 | 718,178 | Unsloth's GGUF release of Muse-Glimmer-30B, giving local users a memory-efficient option for the image-text-to-text model. It is the most downloaded Muse-Glimmer variant this week. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 338 | 4,285 | An abliterated/uncensored FP8 variant of Qwen3.8-27B from orcarouter. It is a niche but fast-growing community option with 338 likes. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 293 | 357,877 | Official GGUF release of Muse-Glimmer-30B, competing directly with unsloth's conversion. Its 358K downloads confirm strong local interest in this 30B multimodal model. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 286 | 196,326 | NVIDIA's NVFP4 quantized MoE LLM for high-efficiency deployment on modern NVIDIA GPUs. It pairs with the BF16 base release and maintains strong early adoption. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 225 | 16,103 | A style/character LoRA by fal that steers MiniMax-H3 toward realistic human subjects. It is a companion asset for the fast-growing H3 video ecosystem. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 206 | 183,988 | Community GGUF of an uncensored Qwen3.8-27B, optimized for llama.cpp and including MTP support. It gives local users another alignment-removed option with significant download traction. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 204 | 11,311 | Official FP8 version of Qwen's 2.4T-parameter MoE text-generation model. This makes the massive 95B-active-parameter model more practical for high-end inference. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 197 | 276,269 | Unsloth's NVFP4 quantization of Qwen3.8-27B for NVIDIA GPUs. With 276K downloads, it shows rapid adoption of next-generation 4-bit formats for multimodal LLMs. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 172 | 204,344 | A GGUF quantization of MiniMax-H3 designed for stable-diffusion.cpp video generation. It extends the local deployment ecosystem around the popular H3 video model. |

## 3. Ecosystem Signal

This week is defined by a Qwen3.8/3.6 ecosystem: the flagship 27B model anchors a dense constellation of GGUF, FP8, NVFP4, and uncensored community variants, while the 2.4T-A95B MoE pushes the upper end of open-weight scale. In generation, MiniMax-H3 is the clear video winner, with official and community momentum via ComfyUI single-file conversions, Turbo/LoRA fine-tunes, and GGUF quantizations. Open-weight releases from DeepSeek, Moonshot, NVIDIA, Liquid AI, meta-models, and inclusionAI continue to close the gap with proprietary systems, and none of the top-30 entries are closed API-only checkpoints. Quantization is no longer an afterthought: FP8/NVFP4 and GGUF variants account for nearly half of the list, and community abliterated/uncensored fine-tunes remain highly viral. Music generation is a smaller but emerging signal with MiniMax-Music3 and its Comfy-Org wrapper, while no specialized code/math/medical model cracked the top 30 this week.

## 4. Worth Exploring

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — The core model behind the week's largest family of derivatives. Studying it helps understand why multimodal 27B-scale models have become the default anchor for local and cloud deployment.

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — The most important open video-generation model this week, with 2.3M downloads and a massive ComfyUI ecosystem. It is the best case study for open-weights video model adoption.

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — A high-velocity open LLM release with 3.4K likes and 1.87M downloads. It is worth watching as a sign of how DeepSeek continues to deliver competitive open-weight text-generation models.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*