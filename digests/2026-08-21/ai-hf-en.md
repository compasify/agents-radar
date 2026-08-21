# Hugging Face Trending Models Digest 2026-08-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-20 23:15 UTC

---

# Hugging Face Trending Models Digest

## 1. Today's Highlights

Qwen3.8-27B is the clear center of gravity this week: the official multimodal release leads by likes (11,735), while Unsloth's GGUF quantization has already passed 5.1M downloads. Video generation is also surging, with MiniMax-H3 and Lightricks LTX-2.5 leading a wave of text-to-video and image-to-video models. DeepSeek V4 Pro/Flash and Kimi-K3 show intense open-weight competition at the frontier. A substantial share of trending models consists of Qwen3.8 abliterated/uncensored GGUF variants, reflecting strong local-inference and low-refusal demand. MiniMax-Music3 extends the generation race into text-to-music.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 678 | 43,287 | DeepSeek's latest Pro text-generation checkpoint, positioned as a frontier open-weight conversational model. Its release alongside V4-Flash signals DeepSeek's dual-track strategy for quality and efficiency. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,121 | 14,592 | A massive text-only MoE with 2.4T total parameters and 95B active parameters. It is Qwen's flagship ultra-large open-weight text model, drawing attention for MoE efficiency. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,575 | 2,547,549 | The efficient "Flash" variant of DeepSeek V4, optimized for faster and lower-cost deployment. Its 2.5M downloads make it one of the most-used text-generation models in this trending set. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,735 | 1,373,584 | Qwen's flagship dense multimodal model, supporting image-text-to-text and conversational use. It leads the entire board in weekly likes and serves as the base for dozens of quantized and fine-tuned variants. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,103 | 14,471 | A text-to-music generation model built on diffusers. It is the only dedicated music-generation model in the trending set, showing MiniMax expanding beyond video into audio. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,412 | 611,825 | A versatile video generation model covering image-to-video, text-to-video, video-to-video, and image-text-to-video tasks. Over 611k downloads highlight strong adoption in creative and editing workflows. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,238 | 3,308,673 | MiniMax's open video-generation model for text-to-video and image-to-video. Its 3.3M downloads and growing turbo/finetune ecosystem make it a leading open video base model. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,718 | 478,622 | A 30B multimodal image-text-to-text model from the meta-models account. It is one of the strongest non-Qwen alternatives in this list, with 478k downloads. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 242 | 1,373 | A preview multimodal model focused on note-taking and document-style understanding. It suggests growing specialization in image-to-text productivity assistants. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,883 | 2,349,853 | Moonshot's open-weight Kimi-K3 multimodal model, using compressed-tensor techniques. Its 10.9k likes and 2.3M downloads make it a major challenger to Qwen and DeepSeek. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 212 | 1,713 | A 35B-total/3B-active MoE multimodal model in the Qwen3.5-MoE lineage. Its compact active-parameter design makes it interesting for efficient multimodal serving. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 650 | 380,072 | A turbo-accelerated variant of MiniMax-H3 for faster video generation. Its 380k downloads show strong demand for quicker image-to-video pipelines. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,335 | 0 | A utility repository providing fixed chat templates for Qwen3.5 models, mainly in MLX/Jinja format. It has zero downloads but 1.3k likes, indicating strong community pain around chat-template compatibility. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,350 | 5,126,652 | Unsloth's GGUF quantization of Qwen3.8-27B. With 5.1M downloads, it is the most-downloaded model in the entire trending list. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 633 | 1,517,643 | Official FP8 quantized edition of Qwen3.8-27B for reduced memory requirements. Its 1.5M downloads show major demand for serving multimodal models at scale. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 709 | 2,628 | Apple Silicon-friendly MLX quantization of abliterated Qwen3.8-27B. It targets on-device multimodal inference with reduced safety refusals. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 675 | 76,109 | FP8 abliterated version of Qwen3.8-27B for high-end GPU inference. It is the most-used orcarouter variant by downloads. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 510 | 979,768 | Uncensored GGUF build of Qwen3.8-27B with MTP support. Nearly 1M downloads make it one of the most popular uncensored Qwen variants. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 360 | 268,258 | An "Aggressive-MTP" GGUF that combines uncensoring with multi-token prediction quantization. Its 268k downloads show appetite for faster speculative decoding plus safety removal. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 308 | 831,483 | Unsloth's NVFP4 quantization of Qwen3.8-27B for NVIDIA's FP4 path. 831k downloads indicate rapid adoption of next-generation low-bit formats. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 256 | 4,415 | An aggressively named abliterated Qwen3.8-27B release. Its multi-format MLX/safetensors/GGUF package makes it easy to test on different runtimes. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 222 | 55,074 | A community GGUF quantization of Qwen3.8-27B built for llama.cpp. It is competing in a crowded but high-demand quantized-model market. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 237 | 52,382 | GGUF variant of orcarouter's uncensored Qwen3.8-27B. It gives llama.cpp users a low-refusal option alongside the MLX and FP8 releases. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 297 | 0 | A community finetune of MiniMax-H3 for stylized image/text-to-video generation. It currently has zero downloads but notable pre-release likes. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 199 | 187,008 | GGUF quant of huihui-ai's safety-abliterated Qwen3.8-27B. 187k downloads reflect huihui's established audience for uncensored LLM builds. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 187 | 326,638 | Heretic-style abliterated GGUF with an aggressive uncensored focus. 326k downloads indicate strong niche adoption for heavily behavior-modified Qwen variants. |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 183 | 186,470 | A direct abliterated GGUF of Qwen3.8-27B for llama.cpp. Its 186k downloads place it among the most-used uncensored variants this week. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 200 | 10,540 | Safetensors abliterated version of Qwen3.8-27B without GGUF quantization. It is useful for Transformers users who prefer non-quantized uncensored weights. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 159 | 53,691 | GGUF quantization of the MIT-licensed Ornith MoE for local text-generation. Endpoints compatibility makes it easy to deploy in inference servers. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,183 | 3,001,999 | A heavily customized Qwen3.6-27B GGUF combining uncensored, heretic, and MTP-focused modifications. 3M downloads and 2.2k likes show sustained demand for "maxed-out" community fine-tunes. |

## 3. Ecosystem Signal

The trending list is overwhelmingly Qwen-centric: most fine-tunes and quantizations build on Qwen3.8-27B, spanning GGUF, FP8, NVFP4, MLX, and abliterated/uncensored variants. Qwen's own releases also include a massive text-only MoE, so the family now covers dense multimodal and ultra-large text-only deployments. DeepSeek V4 Pro/Flash and Kimi-K3 bring frontier-scale open-weight competition, while MiniMax is using open weights to push video and music generation forward. Open-weight release is clearly the default for broad adoption: the top models are all downloadable and many are quantized for local use. Quantization activity is unusually deep, with Unsloth's GGUF dominating downloads and NVFP4 already reaching 831k downloads. Fine-tuning effort is less about task specialization and more about safety removal: "abliterated," "uncensored," "heretic," and "OBLITERATED" variants make up a major slice of the trending set, reflecting sustained user demand for low-refusal local models.

## 4. Worth Exploring

- **Qwen/Qwen3.8-27B** — The center of gravity for this entire trending cycle. Studying it helps explain why it has spawned so many quantized, uncensored, and multimodal fine-tunes.
- **MiniMaxAI/MiniMax-H3** — A rare open video-generation model with a fast-growing ecosystem of turbo and fine-tuned variants. It is worth studying for both quality and community adoption dynamics.
- **deepseek-ai/DeepSeek-V4-Flash-0731** — A pragmatic high-download LLM choice for serving and local deployment. Its efficiency-oriented "Flash" variant offers a useful counterpoint to the heavy Qwen3.8 ecosystem.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*