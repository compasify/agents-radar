# Hugging Face Trending Models Digest 2026-08-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-23 23:10 UTC

---

# Hugging Face Trending Models Digest — 2026-08-24

## Today's Highlights

Qwen3.8-27B is the clear center of gravity this week, capturing 12,307 likes and spawning one of the largest quantization waves on Hugging Face — unsloth's GGUF alone has 6.67M downloads. DeepSeek-V4-Flash and MiniMax-H3 are also scaling fast, with 3.09M and 4.04M downloads, while Moonshot's Kimi-K3 follows closely at 2.73M downloads. Open video/audio generation is a major secondary trend: MiniMax-H3, MiniMax-Music3, and Lightricks LTX-2.5 all charted. Abliterated/uncensored Qwen3.8 variants from orcarouter, huihui-ai, JonathanColetti, OBLITERATUS, and others show strong demand for locally runnable, uncensored multimodal models. Finally, zero-download chat-template fix repositories like Qwen-Fixed-Chat-Templates received 1,420 likes, indicating friction in the Qwen ecosystem tooling.

---

## 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,652 | 3,089,709 | Latest open-weight "Flash" generation from DeepSeek for fast conversational inference. It is one of the most downloaded LLMs this week with over 3 million downloads. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 733 | 57,928 | Higher-capability Pro sibling of DeepSeek-V4-Flash. It is trending as the flagship precision model, with fewer downloads but strong community interest. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 361 | 23,516 | Open-weights MoE model with 35B total parameters and 3B active, built on Qwen3.5. Trending because it packs strong performance into a small active-parameter footprint. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 180 | 31,496 | Dense 9B counterpart to Ornith-1.5-A3B, with text-generation and image-text-to-text tags. It offers a lighter option for developers evaluating the Ornith family. |

---

## 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,307 | 2,358,347 | Flagship open multimodal LLM supporting image-text-to-text and conversational use. Its 12.3k likes and 2.36M downloads make it the anchor model for this week's Qwen3.8 ecosystem. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,949 | 2,727,920 | Moonshot's open multimodal model with feature-extraction and compressed-tensors capabilities. It is one of the highest-liked releases on the digest, signaling a strong open-weight entry from the Kimi team. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,377 | 4,039,236 | Image-text-to-video and text-to-video generation model. With 4.04M downloads, it is the most-downloaded video model in this week's trending list. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,637 | 738,345 | Multi-purpose video generation model supporting image-to-video, text-to-video, video-to-video, and image-text-to-video. Its 1.6k likes and 738k downloads highlight strong community adoption for open video creation. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,205 | 17,421 | Text-to-music generation model from MiniMax using a diffusers pipeline. It is trending as one of the few dedicated open music-generation releases in this batch. |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 166 | 0 | Community latent upscaler built for MiniMax-H3 video outputs. It has zero downloads but appears on the trending list via likes, showing ecosystem demand for video post-processing tools. |

---

## 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,420 | 0 | Chat-template fix repository for Qwen models using MLX/Jinja. It has 1,420 likes despite zero downloads, reflecting widespread pain with Qwen3.8 chat-template formatting. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 214 | 2,280 | Small ASR model built on Qwen3 with text-generation and speech-recognition tags. It is trending as a lightweight open speech-to-text option. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 202 | 36,234 | Speculative-decoding variant of Qwen3.8-27B designed for faster generation. It is one of two similarly named DFlash2 releases, indicating a community race around low-latency Qwen3.8 deployment. |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 199 | 0 | Another Qwen chat-template utility, focused on sharper/cleaner Jinja templates. Its likes without downloads suggest it is valued as a reference rather than a downloadable model artifact. |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 162 | 69,783 | Alternative DFlash2 speculative-decoding build for Qwen3.8-27B. It has more downloads than z-lab's version despite fewer likes, showing fragmented community adoption. |

---

## 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,737 | 6,674,515 | The most-downloaded model on this digest, from unsloth's well-known GGUF conversion pipeline. Its 6.67M downloads make it the default local-inference entry point for Qwen3.8-27B. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,044 | 190,062 | FP8 abliterated/uncensored version of Qwen3.8-27B. It combines transformer-compatible FP8 efficiency with safety-filter removal, attracting 1,044 likes. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 952 | 47,098 | MLX-quantized uncensored Qwen3.8-27B for Apple Silicon. It is the go-to pick for macOS users who want a locally runnable abliterated multimodal model. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 672 | 2,653,678 | Official FP8 quantization from Qwen. Its 2.65M downloads show that first-party quantized checkpoints remain highly trusted. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 648 | 1,334,820 | Uncensored GGUF build with llama.cpp and MTP support. With 1.33M downloads, it is one of the most popular community variants of Qwen3.8-27B. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 625 | 244,834 | Multi-format abliterated release covering MLX, safetensors, and GGUF. It offers a single-stop uncensored checkpoint for different inference stacks. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 535 | 676,697 | GGUF variant of Qwen3.8-27B with aggressive MTP and uncensored/multimodal support. Its 676k downloads indicate strong demand for performance-oriented local quantizations. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 373 | 108,666 | A separate orcarouter GGUF release of the abliterated Qwen3.8-27B. It extends the uncensored variant to llama.cpp-compatible local runtimes. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 296 | 943,360 | huihui-ai's celebrated GGUF of an abliterated Qwen3.8-27B. Its 943k downloads reflect high community trust in huihui's model safety edits. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 257 | 24,844 | Transformers/safetensors version of huihui-ai's abliterated Qwen3.8-27B. It is aimed at users who prefer direct HF inference over quantized formats. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 251 | 369,478 | GGUF quantization of Ornith-1.5-35B-A3B. It brings the MoE model to llama.cpp and is llama.cpp/endpoints-compatible, with 369k downloads. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 250 | 131,435 | Quantized "Ridge" GGUF of Qwen3.8-27B optimized for llama.cpp. It is trending alongside other community Qwen3.8 quantizations. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 244 | 579,334 | Aggressive "Heretic" abliterated and uncensored GGUF build. Its 579k downloads show strong appetite for heavily de-safetied Qwen3.8 variants. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 208 | 193,794 | Custom "Cold-Fusion" and "GAIN" merged Qwen3.8-27B with MTP in GGUF form. It represents a niche but active sub-community of experimental merge/quantization creators. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 176 | 359,078 | GGUF quantization of Ornith-1.5-9B for local text generation. With 359k downloads, it lowers the barrier for experimenting with the Ornith family on CPU/llama.cpp. |

---

## Ecosystem Signal

The Qwen family is the dominant ecosystem on Hugging Face this week: Qwen3.8-27B sits atop the likes chart, while its derivatives occupy more than a third of the trending list. Unsloth's GGUF quant is the most-downloaded model on the digest at 6.67M, confirming that local/quantized inference remains the primary deployment path. Abliterated/uncensored Qwen3.8 variants from orcarouter, huihui-ai, JonathanColetti, OBLITERATUS, and others have become a distinct sub-trend, indicating demand for fewer safety constraints in local multimodal chat.

The open-weight momentum is not limited to Qwen: DeepSeek-V4-Flash, MiniMax-H3, and Kimi-K3 are all approaching or exceeding 3M downloads, and MiniMax/Lightricks are pushing open video and music generation forward. MoE architectures such as Ornith-1.5-35B-A3B and speculative-decoding variants like DFlash2 show a maturing focus on inference efficiency. Meanwhile, chat-template fix repositories signal that community infrastructure is still catching up to rapid model releases.

---

## Worth Exploring

- **Qwen/Qwen3.8-27B** — The base model behind this week's largest ecosystem. Studying it helps explain why so many abliterated/quantized variants are needed, and its chat-template quirks are a practical learning point.
- **moonshotai/Kimi-K3** — With 10,949 likes and compressed-tensors/feature-extraction tags, Kimi-K3 represents a different multimodal design from Moonshot. It is a good benchmark comparison against Qwen3.8.
- **ornith-ai/Ornith-1.5-35B-A3B** — A 35B MoE with 3B active parameters is a compelling efficiency study. Its GGUF has 369k downloads, so local-deployment interest is real.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*