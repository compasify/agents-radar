# Hugging Face Trending Models Digest 2026-08-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-17 23:11 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-18

## 1. Today’s Highlights

Today’s board is led by Qwen’s multimodal **Qwen3.8-27B** ecosystem and Moonshot’s **Kimi-K3**, which both crossed 10k weekly likes. The Qwen3.8 family is everywhere: official FP8/NVFP4, GGUF, and uncensored community variants dominate the fine-tune tables. **MiniMax-H3** solidified its position as the open video-generation heavyweight, with Comfy-Org’s single-file package reaching 14M downloads while LoRAs and turbo variants multiply around it. On the text side, **DeepSeek-V4 Flash/Pro** and **NVIDIA Nemotron 3.5 Lightning** show a clear shift toward sparse MoE and low-precision serving. Local inference continues to grow through quantizations and uncensored/abliterated GGUF releases.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,496 | 1,978,298 | DeepSeek’s fast, instruction-tuned V4 chat model for efficient text generation. Trending because 1.98M downloads signal strong demand for a high-quality, low-cost conversational LLM. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,041 | 9,465 | A sparse MoE text-generation model with 2.4T total parameters and 95B active. It is Qwen’s frontier text LLM, combining massive scale with affordable inference. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 653 | 147,270 | A 2.6B open liquid transformer for efficient text generation. It is attracting on-device and edge deployments due to its compact size and 147k downloads. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 573 | 25,006 | The Pro variant of DeepSeek V4 dated 0813. It is drawing attention as the stronger counterpart to Flash for users who prioritize maximum quality. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 306 | 6,266 | A tiny, MIT-licensed hybrid model released with safetensors and custom code. It is an interesting open experiment in low-resource, region-aware language modeling. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 169 | 69,833 | BF16 base weights of NVIDIA’s 30B MoE model with 3B active parameters. It is notable for efficient serving, and its NVFP4 quantized sibling is even more widely used. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,800 | 2,163,953 | Moonshot AI’s image-text-to-text model with compressed-tensor/feature-extraction tags. It leads the board in likes and has 2.16M downloads, pointing to strong demand for compressed multimodal intelligence. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 10,697 | 415,039 | Qwen’s flagship image-text-to-text conversational model. It is the central hub of the Qwen3.8 ecosystem and the base for many quantized and uncensored derivatives. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,086 | 2,403,238 | A powerful image-text-to-video / text-to-video generation model. Its 2.4M downloads and 4k likes make it one of the most prominent open video models in this snapshot. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,660 | 334,099 | A 30B multimodal conversational model for image-text-to-text tasks. It is trending for its high-quality chat/vision capabilities and an available unsloth GGUF conversion. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,402 | 14,015,769 | ComfyUI single-file package of MiniMax-H3 video generation. Its 14M downloads are the highest in this digest, showing enormous appetite for turnkey local video generation. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,104 | 465,529 | An image-to-video and multi-task video generation model from Lightricks. It is gaining traction as a strong alternative in the open video-generation race. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 900 | 10,375 | A text-to-music diffusion model for music generation. It is notable for expanding open media generation beyond video and text, with Comfy-Org already distributing it. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 233 | 23,202 | A compact 2.9B text-to-image diffusion model for ComfyUI. It is drawing interest for lightweight, English-language image generation. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 205 | 633 | A preview image-text-to-text model in the “dots3 note” line. Early community interest is driven by niche note-taking and multimodal study use cases. |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 166 | 256,988 | ComfyUI single-file distribution of MiniMax Music3. It has already accumulated 257k downloads, underscoring the value of packaged music-generation workflows. |
| [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 162 | 6,816 | The 3B vision-language variant of Liquid’s LFM2.5 series. It is a compact image-text-to-text option, attractive for low-latency multimodal applications. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,209 | 0 | A trending developer resource with corrected Jinja chat templates for Qwen3.5/3.8 models, packaged for MLX. It has 1,209 likes despite no downloads, reflecting strong approval of fixes for common chat-template bugs. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,119 | 3,033,928 | A community GGUF fine-tune mixing “fusion”, “uncensored”, and “heretic” edits on a Qwen3.6 base. It leads all downloads in this digest at over 3M, showing the huge appetite for locally runnable, personality-tweaked chat models. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,623 | 2,727,609 | Unsloth’s GGUF quantization pack for Qwen3.8-27B. With 2.73M downloads, it is the default way to run Qwen3.8 on llama.cpp and other GGUF runtimes. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 786 | 0 | A LoRA adapter that steers MiniMax-H3 toward Turbo-style video generation with audio-video support. It has 786 likes despite 0 downloads, indicating high community interest in early/shared weights. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 583 | 264,351 | Turbo variant of MiniMax-H3 for faster image-to-video generation. It is popular with users who need lower-latency video synthesis without leaving the H3 ecosystem. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 527 | 495,646 | Official FP8 quantized version of Qwen3.8-27B. It offers major VRAM savings while retaining multimodal chat capability, with nearly 500k downloads. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 470 | 755,125 | GGUF conversion of meta-models’ Muse-Glimmer-30B multimodal model. It makes the 30B image-text-to-text model accessible to local GGUF/llama.cpp users. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 430 | 15,812 | Abliterated/uncensored FP8 version of Qwen3.8-27B. It attracts users seeking fewer restrictions at a low memory cost. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 307 | 231,271 | NVFP4-quantized version of NVIDIA’s 30B-A3B Lightning model. It is optimized for high-throughput inference on modern NVIDIA GPUs. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 297 | 357,701 | Community GGUF build of an uncensored Qwen3.8-27B. Its 358k downloads show sustained demand for uncensored fine-tunes in local runtimes. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 243 | 18,562 | A LoRA for MiniMax-H3 focused on photorealistic people in video generation. It is a notable example of community controls steering open video models. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 237 | 378,177 | Unsloth’s NVFP4 quantization of Qwen3.8-27B. It provides an even smaller NVIDIA-friendly alternative to the official FP8 release. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 219 | 12,295 | FP8 version of Qwen’s 2.4T-parameter MoE text model. It lowers the memory barrier for running the massive sparse model. |

## 3. Ecosystem Signal

Three signals stand out. First, the Qwen family is the clear momentum leader; **Qwen3.8-27B** acts not only as a flagship multimodal model but as a platform, with unsloth, orcarouter, and independent users shipping GGUF, FP8, NVFP4, and uncensored variants. Second, open video generation has reached ecosystem maturity around **MiniMax-H3**: Comfy-Org single-file workflows, LoRA adapters for realism and Turbo speed, and cross-ecosystem repackaging indicate a community building production tools rather than just demos. Third, MoE and quantization are converging for efficiency: Qwen’s 2.4T-A95B and NVIDIA’s 30B-A3B Lightning ship in FP8/NVFP4/BF16 forms, while Kimi-K3’s compressed-tensor tag hints that model compression is becoming a first-class feature. Open weights still dominate this list—there are no proprietary checkpoints—and the presence of 12 fine-tunes/quantizations out of 30 models confirms that local deployment and customization are the main consumption patterns.

## 4. Worth Exploring

1. **moonshotai/Kimi-K3** — With the highest likes (10,800) and compressed-tensor/feature-extraction tags, it sits at the intersection of multimodal capability and efficient inference. Studying it can reveal how compression affects both generation and representation quality.
2. **Qwen/Qwen3.8-2.4T-A95B** — This 2.4T-parameter sparse MoE with 95B active parameters is a frontier-scale testbed for cost-effective LLM serving. Paired with its FP8 quant, it is a practical example of massive-scale deployment.
3. **Comfy-Org/MiniMax-H3** — The 14M-download single-file video model is the strongest ecosystem signal for local video generation. It is worth exploring both as a creative tool and as a case study in lowering the friction of diffusion model distribution.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*