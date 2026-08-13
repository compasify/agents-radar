# Hugging Face Trending Models Digest 2026-08-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-13 01:00 UTC

---

## 1. Today's Highlights

MiniMax-H3 is the dominant story: the base video-generation model, Turbo variants, LoRAs, ComfyUI wrappers, and GGUF quantizations together make up a large share of this trending list. DeepSeek-V4-Flash-0731 continues to see massive adoption with over 1.04M downloads, while Moonshot AI's Kimi-K3 earns the highest likes count (10,583) as an efficient multimodal model. Qwen's 2.4T-parameter MoE and NVIDIA's 30B-A3B Nemotron lineups signal a decisive shift toward sparse, inference-friendly architectures. Meta's Muse-Glimmer-30B also debuts as a new official multimodal backbone and is already generating GGUF follow-ups.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,238 | 1,048,685 | DeepSeek's open-weight V4 Flash text-generation LLM. It is trending toward major adoption, backed by more than 1 million downloads and strong community interest. |
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 498 | 978 | Qwen's massive 2.4T-parameter MoE text model with 95B active parameters. It is a frontier-scale open-weight architecture that aims to balance capability and serving cost. |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 582 | 93,668 | Liquid AI's 2.6B liquid foundation model for text generation. It attracts attention for efficient, non-transformer architecture at a compact scale. |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 189 | 0 | Tiny variant of inclusionAI's Ling 3.0 hybrid-architecture model. Its MIT license and custom-code design make it notable for efficient, permissive experimentation. |
| [maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 346 | 2,049 | DeepGrove's preview MoE text-generation model. It is gaining attention as a new exploratory causal language model with mixture-of-experts routing. |
| [Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 318 | 6,148 | Flash-tier Ling 3.0 conversational text-generation model. It pairs hybrid bailing architecture with higher-throughput serving for chat use cases. |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 116 | 15,740 | NVIDIA's 30B-class Nemotron model with 3B active parameters in BF16. It is trending because of its efficient A3B design and strong general-purpose text-generation performance. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,295 | 0 | Meta's 30B image-text-to-text conversational model. Despite zero downloads, it has high likes due to its official release and broad multimodal conversation capability. |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,716 | 83,484 | MiniMax's H3 image-text-to-video generation model. It anchors this trending board and sets a high bar for open text/image-to-video output quality. |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 568 | 39 | Lightricks' LTX-2.5 image-to-video generator. It is a single-file diffusion model supporting text-to-video, image-to-video, and video-to-video workflows. |
| [Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 411 | 20,376 | Lightx2v's Turbo variant of MiniMax-H3 for image-to-video and related video tasks. It is trending as a fast, community-friendly diffusers pipeline. |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,583 | 1,565,484 | Moonshot AI's Kimi-K3 image-text-to-text model. It has the highest likes on this list and uses compressed-tensors and feature-extraction tags, signaling strong interest in efficient multimodal deployment. |
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 352 | 653 | NVIDIA's compact 11B voice-chat model for spoken interaction. It is notable for bringing speech conversation capabilities into an open-weight model. |
| [BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 182 | 708 | A community image-text-to-text model based on qwen3_5_moe. It extends a frontier MoE backbone to vision-language tasks and is gaining traction as a new exploratory release. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 701 | 0 | LoRA adapter for making MiniMax-H3 a Turbo text-to-video model. It also supports text-to-audio and audio-video, adding a lightweight customization path. |
| [MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,258 | 6,798,796 | Single-file ComfyUI release of MiniMax-H3. It is the most-downloaded model on this trending list and is essential for ComfyUI video workflows. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 359 | 0 | Unsloth's GGUF quantization of Meta's Muse-Glimmer-30B. It provides a key CPU-friendly, on-device entry point for the new multimodal model. |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,955 | 2,521,093 | Community GGUF merge/fine-tune of Qwen3.6-27B with uncensored/heretic characteristics. Its 2.5M downloads show very strong demand for niche, high-throughput roleplay and uncensored models. |
| [MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 301 | 0 | ComfyUI-ready pruned LoRA for MiniMax-H3 Turbo. It simplifies lightweight video-generation customization inside ComfyUI. |
| [MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 294 | 0 | Kijai's ComfyUI integration and workflow wrapper for MiniMax-H3. It is trending as one of the community's standard node implementations for H3. |
| [PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 287 | 0 | Apache-2.0 MiniMax-H3 text-to-video fine-tune with an endpoint-compatible tag. It demonstrates stylized community video generation on the H3 base. |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 240 | 0 | Official GGUF release of Muse-Glimmer-30B from Meta's models org. It includes arxiv references and is the native quantization of the base multimodal model. |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 204 | 19,250 | NVFP4-quantized 30B-A3B Nemotron model from NVIDIA. It targets lower memory use and efficient serving while retaining the A3B sparse architecture. |
| [Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 477 | 0 | INT8 ComfyUI-oriented fine-tune of Qwen3-VL-32B with H3/heretic tweaks. It is a notable community attempt to fuse vision-language and video-friendly workflows. |
| [MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 214 | 0 | Experimental MiniMax-H3 workflow package from Kijai. It serves as a testbed for new H3 features and ComfyUI integrations. |
| [DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 666 | 207,990 | Unsloth's GGUF versions of DeepSeek-V4-Flash. The high download count shows heavy demand for running the flagship LLM locally. |
| [MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 146 | 0 | LoRA focused on realistic people for MiniMax-H3 video generation. It is an easy install for improving human realism in generated videos. |
| [MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 141 | 353 | PEFT LoRA for rewriting prompts for MiniMax-H3. It is a small utility adapter that improves prompt quality for video generation. |
| [MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 137 | 781 | GGUF quantization of MiniMax-H3 for video generation via stable-diffusion.cpp. It expands H3 access to local and edge inference workflows. |
| [Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 114 | 3,851 | FP8-quantized version of Qwen3.8-2.4T-A95B. It offers a reduced footprint and faster serving for the 2.4T-parameter MoE model. |

## 3. Ecosystem Signal

Open-weight releases from Chinese labs dominate the platform: DeepSeek, Qwen, Moonshot, MiniMax, inclusionAI, and Lightricks all contributed trending models, with no proprietary-only entries in this slice. MiniMax-H3 has clearly become a platform rather than just a model—Comfy-Org's single-file conversion alone has 6.8M downloads, and community LoRAs for realism, prompt rewriting, and Turbo speed are rapidly proliferating. On the LLM side, the strongest signal is efficiency: massive MoEs such as Qwen3.8-2.4T-A95B and Nemotron 30B-A3B are paired with NVFP4, FP8, and GGUF quantizations to reduce deployment cost. Unsloth appears repeatedly as a standard quantization provider, while niche fine-tunes—including uncensored, ComfyUI-ready, and INT8 variants—show active demand for tailored local use. The overall trend points to a maturing open ecosystem where base models matter less than their serving stack, workflow integrations, and quantization ecosystem.

## 4. Worth Exploring

- **DeepSeek-V4-Flash-0731** — With more than 1M downloads, it is the clearest real-world benchmark for open text generation. Its GGUF release also makes it easy to test locally.
- **MiniMax-H3** — The center of the open video-generation ecosystem. Studying the base model alongside Comfy-Org's single-file release and unsloth's GGUF variant reveals how an open video model becomes a deployable platform.
- **Kimi-K3** — The highest-liked model on the list. Its compressed-tensors and feature-extraction tags make it a strong candidate for studying efficient multimodal design.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*