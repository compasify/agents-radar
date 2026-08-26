# Hugging Face Trending Models Digest 2026-08-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-26 00:00 UTC

---

# Hugging Face Trending Models Digest — 2026-08-26

## 1. Today's Highlights

Qwen3.8-27B is the clear center of gravity this week: 15 of the top 30 models are official Qwen3.8-27B releases or community derivatives, spanning GGUF, MLX, FP8, abliterated, and speculative-decoding variants. The official Qwen model leads by likes (12,706), while Unsloth's GGUF quant leads by downloads at 7.3M. Outside Qwen, open-weight frontier releases continue to gain traction: DeepSeek-V4-Flash has over 3.5M downloads, Kimi-K3 has 10,996 likes, and MiniMax-H3 dominates video generation with 4.6M downloads. A notable sub-trend is the proliferation of “uncensored” / abliterated Qwen fine-tunes, indicating strong demand for locally deployable, low-restriction chat models.

## 2. Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,714 | 3,528,373 | A fast open-weight conversational LLM from DeepSeek, tagged DeepSeek-V4. It has attracted over 3.5M downloads, making it one of the most-adopted open LLM releases this week. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 758 | 74,707 | The higher-end Pro variant in the DeepSeek-V4 lineup for text generation. It is gaining attention as a stronger open-weight alternative to hosted conversational APIs. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 419 | 70,158 | A 35B-parameter MoE language model with about 3B active parameters, built on Qwen3.5-MoE and tagged for image-text-to-text. It provides a strong efficiency/quality trade-off for open-weight multimodal LLMs. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 214 | 98,323 | A more compact 9B Ornith language model with text-generation and image-text-to-text capability. Its size and near-100K downloads make it a practical local-deployment entry point. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,706 | 2,945,415 | The official Qwen3.8-27B multimodal model for image-text-to-text conversation. With 12.7K likes and almost 3M downloads, it anchors the largest model ecosystem in this ranking. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,996 | 2,865,293 | Moonshot AI's image-text-to-text model, tagged for feature extraction and compressed tensors. With 10,996 likes and 2.9M downloads, it is one of the most prominent open multimodal releases. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,455 | 4,639,786 | An image-text-to-video model supporting text-to-video and image-to-video generation. It leads all generation models here with 4.6M downloads and broad ecosystem adoption. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,797 | 833,845 | A single-file diffusion model for image-to-video, text-to-video, and video-to-video tasks. Its 833K downloads make it a leading open video-generation model. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,245 | 18,705 | A diffusers-based text-to-music model for high-quality prompt-conditioned music generation. The rapid like count indicates strong early interest in open music AI. |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 155 | 3,640 | A small preview text-to-speech model using the ArktTS pipeline. It represents an early open-weight entrant in lightweight TTS. |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 152 | 2,682 | A native multimodal any-to-any model from SenseNova with feature-extraction support. Its MoT architecture is worth watching for unified multimodal reasoning. |

### 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,467 | 0 | A configuration-only repository that fixes Qwen chat templates for MLX/Jinja environments. It is widely liked as a compatibility resource, despite having no downloadable model weights. |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 244 | 0 | Another chat-template utility for Qwen 3.5 MLX deployments, focused on sharper template handling. It is useful for developers running Qwen models outside the transformers stack. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 238 | 3,474 | A compact Qwen3-based model tagged for both text generation and ASR. It is an interesting candidate for speech-language hybrid applications on constrained hardware. |

### 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,914 | 7,334,695 | Unsloth's GGUF quant of Qwen3.8-27B for llama.cpp. It is the highest-download model in this list at 7.3M downloads, making it the default local Qwen3.8 release. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,147 | 249,744 | FP8-quantized abliterated Qwen3.8-27B for reduced memory use with transformer pipelines. It balances uncensored behavior with more efficient deployment. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,094 | 68,855 | MLX-quantized, abliterated Qwen3.8-27B optimized for Apple silicon. It offers an uncensored multimodal experience in an efficient Apple-native format. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 747 | 389,747 | A heavily abliterated Qwen3.8-27B fine-tune released in safetensors, GGUF, and MLX formats. It is a popular “safety-removed” choice for unrestricted text generation. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 721 | 1,525,645 | A llama.cpp-compatible GGUF of uncensored Qwen3.8-27B with MTP support. Its 1.5M downloads make it one of the most-used local uncensored Qwen variants. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 623 | 832,185 | A GGUF variant of uncensored Qwen3.8-27B with aggressive MTP support and multimodal/vision capability. Its 832K downloads reflect strong demand for feature-packed local GGUF files. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 452 | 154,225 | Another GGUF from the orcarouter uncensored series, targeting local text and image-text pipelines. It is part of a multiformat release family centered on abliterated Qwen3.8. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 356 | 1,230,831 | A popular abliterated/uncensored GGUF from huihui-ai, built on Qwen3.8-27B. It has over 1.2M downloads, cementing huihui-ai as a major publisher of local safe-removal models. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 297 | 1,156,903 | GGUF quantization of the Ornith-1.5-35B-A3B MoE model, tagged endpoints_compatible and MIT-licensed. It has surpassed 1.15M downloads, signaling demand for efficient local MoE inference. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 274 | 735,183 | A “Heretic” abliterated uncensored GGUF variant of Qwen3.8-27B. The 735K downloads show steady appetite for heavily de-safetied local model releases. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 240 | 221,918 | A highly customized GGUF merge combining GAIN Training, Cold-Fusion, and MTP support. It is a niche but popular community experiment, with 221K downloads. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 227 | 64,984 | A Qwen3.8-27B variant optimized for DFlash2 speculative decoding. It is relevant to teams working on faster LLM inference and draft-based generation. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 201 | 1,144,037 | GGUF quantization of the Ornith-1.5-9B model for local deployment. It has 1.14M downloads, showing strong adoption for the smaller Ornith variant. |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 183 | 15,341 | The safetensors abliterated base behind orcarouter's uncensored Qwen3.8 series. It offers the unquantized starting point for the broader uncensored lineage. |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 179 | 105,786 | Another DFlash2 speculative-decoding release of Qwen3.8-27B. Its 105K downloads indicate practical interest in latency-optimized open LLMs. |
| [EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2) | EschaLabs | 126 | 2,319 | An aggressive 2-bit quantization of Qwen3.8-27B for ultra-low memory environments. It is an experimental option for running 27B-scale models on constrained hardware. |

## 3. Ecosystem Signal

Qwen3.8 is the clear ecosystem center of gravity: the official model, quantization, and community fine-tunes account for half of the ranked list. Unsloth's GGUF release has more than 7M downloads, showing that local and edge inference is a primary consumption pattern. At the same time, abliterated/uncensored variants are unusually prominent, suggesting strong demand for unrestricted chat in low-friction formats. Multimodal generation is also accelerating: MiniMax-H3 and Lightricks LTX-2.5 demonstrate open video generation at scale, while MiniMax-Music3 and Audio8 push audio generation. Alongside these checkpoints, DFlash2 speculative-decoding releases and chat-template-only repos reveal growing interest in inference speed and tooling. DeepSeek and Kimi are consolidating open-weight competition with large conversational models, and MoE designs like Ornith-1.5-35B-A3B are making high-capacity open models more cost-effective. Overall, the trend is toward open-weight systems that are immediately deployable, quantized, uncensored where possible, and multi-format.

## 4. Worth Exploring

- **Qwen/Qwen3.8-27B** — The base model is the root of almost every other trend here. It is worth studying for multimodal chat quality, prompt handling, and as the reference for GGUF, MLX, and abliteration variants; its 12.7K likes signal broad developer trust.

- **deepseek-ai/DeepSeek-V4-Flash-0731** — The highest-liked pure LLM in this digest, with 3.5M downloads. It is a strong reference point for current open conversational model performance and serving efficiency.

- **MiniMaxAI/MiniMax-H3** — The leading open video-generation model by downloads (4.6M). If you work with image/video pipelines, this is one of the best-maintained open checkpoints to test in 2026.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*