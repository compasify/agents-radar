# Hugging Face Trending Models Digest 2026-08-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-22 23:10 UTC

---

## 1. Today's Highlights

Qwen’s **Qwen3.8-27B** is the clear center of gravity this week, with the base multimodal model earning 12,127 likes and 2,090,699 downloads while an extensive ecosystem of GGUF, FP8, NVFP4 and abliterated variants fills the trending list. DeepSeek’s **V4-Flash-0731** shows exceptional adoption at nearly 3M downloads, confirming demand for efficient open-weight chat models. On the generation side, **MiniMax-H3** and **Lightricks/LTX-2.5** highlight the rapid shift toward open video-generation models, while **Kimi-K3** stands out as a highly liked compressed multimodal release. Overall, the week is defined by fast quantization/fine-tuning cycles around Qwen3.8 and a strong community niche for uncensored/abliterated local models.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,629 | 2,976,281 | A fast, open-weight DeepSeek V4 chat model optimized for broad deployment. Its near-3M downloads and 3.6K likes make it one of the week’s most adopted language releases. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,146 | 17,386 | Qwen’s massive MoE text-generation model with 2.4T total parameters and 95B active parameters. It demonstrates sparse-scaling ambition and is worth studying for large-scale open-weight inference. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 718 | 54,566 | The Pro-tier DeepSeek V4 text-generation model for high-end conversational and reasoning tasks. It is trending as the capable counterpart to V4-Flash, with strong community interest in open frontier LLMs. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,127 | 2,090,699 | Qwen’s flagship 27B multimodal chat model, accepting text and image inputs. It anchors this week’s trend with 12,127 likes and 2,090,699 downloads, and is the base for many quantized and abliterated variants. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,925 | 2,612,739 | Kimi-K3 is Moonshot’s image-text-to-text model with compressed-tensor support. Its 10,925 likes and 2,612,739 downloads make it one of the most liked multimodal releases on this list. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,335 | 3,899,160 | A major open video-generation model supporting text-to-video and image-to-video tasks. With 4,335 likes and 3,899,160 downloads, it is one of the most downloaded generative video models this week. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,755 | 517,564 | A 30B multimodal image-text-to-text conversational model. Its 1,755 likes and 517,564 downloads show sustained demand for open multimodal assistants. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,562 | 694,670 | A single-file video generation model from Lightricks supporting image-to-video, text-to-video and video-to-video. Its 1,562 likes and 694,670 downloads reflect rising demand for flexible open video tools. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,181 | 16,644 | MiniMax’s text-to-music diffusion model for high-quality music generation. It is one of the few dedicated music-generation entries on the trending list, with 1,181 likes and 16,644 downloads. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 320 | 12,611 | A 35B MoE model with 3B active parameters for text and image-text tasks. It trends as an efficient open-weight option in the Qwen3.5-MoE lineage, with 320 likes and 12,611 downloads. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,396 | 0 | A utility repository providing corrected Jinja chat templates for Qwen models. It is notable for 1,396 likes despite zero downloads, showing broad interest in fixing chat-template compatibility issues. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 200 | 1,913 | A compact Qwen3-based text-generation model with ASR capabilities. It is specialized for automatic speech recognition and lightweight deployment. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 192 | 29,705 | Qwen3.8-27B enhanced with DFlash2 speculative decoding. It is trending for its potential inference speedups, with 192 likes and 29,705 downloads. |
| [LBH-123-AI/Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 159 | 0 | A latent upscaler companion for MiniMax H3 video generation. It has not recorded downloads yet but is relevant for users aiming to improve MiniMax-H3 output resolution. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,620 | 6,320,542 | Unsloth’s GGUF quantization of Qwen3.8-27B for efficient local execution. It leads all quantized variants with 6,320,542 downloads, making it the most-downloaded GGUF on the list. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 987 | 142,846 | FP8-quantized, abliterated Qwen3.8-27B for efficient GPU serving. Its 987 likes and 142,846 downloads reflect strong appetite for low-footprint, uncensored multimodal models. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 884 | 34,909 | MLX-format abliterated version of Qwen3.8-27B optimized for Apple silicon. It brings an uncensored style to local multimodal inference, with 884 likes and 34,909 downloads. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 664 | 2,306,777 | Official FP8 quantized version of Qwen3.8-27B from the Qwen team. It offers reduced GPU memory requirements and has already accumulated 2,306,777 downloads. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 622 | 1,223,422 | Community GGUF with uncensored tuning and multi-token prediction support. It has gained 1,223,422 downloads, one of the highest counts among uncensored Qwen variants. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 527 | 164,950 | An “obliterated” abliterated Qwen3.8-27B release available in MLX, safetensors and GGUF. It is trending as part of the community uncensored Qwen wave, with 164,950 downloads. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 483 | 486,221 | An aggressive MTP-enabled GGUF of Qwen3.8-27B with uncensored and vision capabilities. Its 486,221 downloads show demand for multimodal GGUFs with specialized decoding. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 335 | 85,371 | GGUF version of orcarouter’s uncensored Qwen3.8-27B. It offers a lower-barrier local deployment path for the abliterated model, with 85,371 downloads. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 334 | 1,202,168 | Unsloth’s NVFP4 quantization of Qwen3.8-27B for NVIDIA hardware. It provides a memory-efficient alternative for multimodal inference, with 1,202,168 downloads. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 316 | 0 | Community fine-tune of MiniMax-H3 for video generation. It is trending despite zero downloads, likely due to specialized “Eros” styling and the broader H3 ecosystem. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 254 | 635,416 | Huihui’s GGUF conversion of the abliterated Qwen3.8-27B. It is a popular uncensored local option with 635,416 downloads and 254 likes. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 244 | 21,612 | Non-quantized abliterated version of Qwen3.8-27B by Huihui. It serves as a base for further community adaptation and has 21,612 downloads. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 243 | 97,247 | A llama.cpp-oriented GGUF optimization of Qwen3.8-27B. Its “Ridge” tuning targets efficient CPU/edge inference, with 97,247 downloads. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 231 | 173,935 | GGUF quantization of Ornith-1.5-35B-A3B for local text generation. It makes the efficient MoE model easier to run on consumer hardware, reaching 173,935 downloads. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 226 | 505,813 | A “Heretic” abliterated, uncensored GGUF from the Qwen3.8-27B community. It has gained 505,813 downloads, confirming the strong niche for uncensored local models. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 189 | 176,969 | Highly customized GGUF of Qwen3.8-27B with GAIN training, Cold-Fusion and MTP. Its 176,969 downloads show strong interest in heavily tuned, maximum-performance Qwen GGUFs. |

## 3. Ecosystem Signal

This week’s list is dominated by the **Qwen3.8-27B family**: the base model and its quantized/fine-tuned derivatives span multiple categories, from Unsloth GGUF and official FP8 to community abliterated variants. This points to an ecosystem where one strong open-weight release can rapidly spawn a broad deployment stack. DeepSeek’s V4-Flash and V4-Pro show that frontier open-weight labs continue to attract large audiences, with V4-Flash’s ~3M downloads indicating efficiency is a priority. On the open-weight vs proprietary front, the top 30 contains no closed API-exclusive model; open weights and community derivatives dominate. Quantization activity remains intense, with GGUF as the default for local and edge use, FP8 and NVFP4 for GPU serving, and MLX for Apple silicon. The large number of “uncensored/abliterated” Qwen variants is a notable community signal, while MoE designs and speculative decoding methods point to continued focus on inference efficiency.

## 4. Worth Exploring

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — With 10,925 likes and 2,612,739 downloads, it is one of the most liked models this week. Its compressed-tensors tag makes it a valuable case study for reducing serving and storage overhead in multimodal models.

- **[Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — This is an extreme example of sparse MoE scaling, with 2.4T total parameters and only 95B active per token. Studying its performance and deployment trade-offs can inform future open-weight efficiency choices.

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — Its 3,899,160 downloads show exceptional real-world demand for open video generation. Trying its image-to-video workflow is practical for creators, researchers, and builders of generative video pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*