# Hugging Face Trending Models Digest 2026-07-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-17 01:29 UTC

---

Here is the structured Hugging Face Trending Models Digest for July 17, 2026.

---

### 1. Today's Highlights

This week's trending models are dominated by the explosive growth of the **Qwen 3.5/3.6** ecosystem, with community fine-tunes and quantizations of these architectures capturing massive download counts. A major shift toward **extreme quantization** is evident, led by **prism-ml**'s 1-bit and 2-bit ternary "Bonsai" models, alongside rising interest in **Mixture-of-Experts (MoE)** architectures like **GLM-5.2**. The **emperor-ai** team continues to dominate the top-10 with their high-performing "Qwythos" variants, while new entrants like **Tencent's Hy3** and **Cactus-Compute's needle** signal a push toward specialized agents and tool-use models.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,029 | 513,061 | Text-generation MoE model using GLM_MoE_DSA architecture. Trending as a powerful open-weight alternative, topping the likes chart and signaling strong interest in efficient mixture-of-experts designs. |
| [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 902 | 1,785,575 | A 35B parameter GGUF quantization optimized for local inference. Its massive download count indicates high demand for large, but performant, local LLMs. |
| [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 1,207 | 506,068 | A GGUF quantization of Gemma 4 fine-tuned for agentic coding and terminal use. Its rapid ascent highlights growing demand for specialized, agent-capable models. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,235 | 2,042,670 | Image-text-to-text model from the Qwythos series, combining Qwen3.5 with a "Claude-Mythos" fine-tune. The highest download count this week reflects its exceptional performance and community trust. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,787 | 2,328,315 | An uncensored, vision-capable MoE model with 35B total parameters (3B active). Combines high performance with aggressive uncensoring, leading both likes and downloads. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,010 | 1,852,722 | A specialized image-text-to-text model for OCR tasks from Baidu. Its massive adoption demonstrates the enterprise appetite for robust, domain-specific vision-language solutions. |
| [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 92 | 1,884 | A new image-to-video diffusion model specifically designed for generating dance motions. Captures the growing interest in controllable video generation. |
| [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 167 | 0 | A LoRA for LTX-Video that enables identity-preserving text-to-video generation. Highlights the community's focus on personalization and consistent character generation. |

#### 🔧 Specialized Models (code, math, medical, embeddings, tools)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle) | Cactus-Compute | 248 | 733 | A specialized JAX model designed for function-calling and tool-use workflows. Its presence signals a move toward agent-native architectures built for deterministic tool execution. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, MLX)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 602 | 74,007 | A groundbreaking 2-bit ternary quantization of a 27B model, representing a frontier in extreme compression. High interest despite the low bit-depth suggests the community is exploring viability of ultra-small models. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 340 | 559,267 | The 1-bit variant of the Bonsai series, pushing the boundaries of model quantization. Its huge download count shows that even at 1-bit, the quality trade-off is acceptable for many use cases. |
| [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 119 | 2,621 | An INT4 CPU-optimized quantization of GLM-5.2 using expert-streaming (Colibri). Points to a trend of making large MoE models accessible on consumer hardware. |
| [unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4) | unsloth | 216 | 1,712,974 | A Qwen3.6 quantization in NVFP4 format by unsloth. Extremely high downloads confirm unsloth's role as the go-to provider for fast, high-quality quants of leading models. |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | GnLOLot | 264 | 121,296 | A 1B parameter GGUF model fine-tuned for "thinking" (chain-of-thought reasoning). Demonstrates the enduring trend of community-level fine-tunes to add reasoning capabilities to smaller, fast models. |

### 3. Ecosystem Signal

The ecosystem is currently defined by a **post-Qwen 3.5/3.6 land grab**, with the community heavily investing in fine-tunes and quantizations of this base architecture. The **Qwen** family has effectively become the new "LLaMA" for open-source, dominating both vision-language and pure text categories. Alongside this, **prism-ml's Bonsai** series is pioneering **ternary (2-bit) and 1-bit quantization**, a surprising trend that suggests hardware-software co-design is enabling previously unthinkable compression ratios. Meanwhile, **Mixture-of-Experts (MoE)** models like **GLM-5.2** and **Qwen3.6-35B-A3B** are gaining traction as a way to offer high capability without proportional compute costs. The open-weight model ecosystem appears healthy, with no single proprietary model squeezing them out; instead, the community is aggressively optimizing and fine-tuning within the open ecosystem. Quantization formats are fragmenting—GGUF, MLX, NVFP4, and Colibri all have niches—highlighting a diverse hardware landscape from Apple Silicon to NVidia GPUs.

### 4. Worth Exploring

- **Cactus-Compute/needle**: If you are building agentic workflows, this JAX-based function-calling model is a must-study. It represents a shift from general chatbots to "tool-native" architectures that are optimized for deterministic execution and API calls, a key bottleneck for current agent systems.

- **prism-ml/Ternary-Bonsai-27B-gguf**: For anyone interested in the frontier of efficiency, this 2-bit ternary model is a fascinating case study. While its absolute quality may not match full-precision models, its performance per bit is remarkable and could unlock entirely new categories of on-device AI.

- **zai-org/GLM-5.2**: As the highest-liked model on the list, it is a strong candidate for evaluating the latest MoE architectures. Its community traction suggests it competes directly with the Qwen series, making it a valuable point of comparison for both researchers and builders.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*