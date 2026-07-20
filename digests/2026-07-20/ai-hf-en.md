# Hugging Face Trending Models Digest 2026-07-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-20 01:53 UTC

---

Here is the structured Hugging Face Trending Models Digest for 2026-07-20.

---

### 1. Today's Highlights

The ecosystem is currently dominated by two major trends: the explosive popularity of ternary and 1-bit quantization techniques, exemplified by **prism-ml**'s "Bonsai" family achieving massive download counts, and a strong shift toward multimodal models, with nearly half of the top 30 models supporting image or video inputs. **zai-org/GLM-5.2** stands out as the highest-liked model (4,168) not named "Gemma," showcasing the continued momentum of the GLM architecture, while **google/gemma-4-31B-it** leads in absolute downloads (12.3M), proving its dominance as a foundational model. The "Qwen" ecosystem remains a hotbed for community fine-tuning, with uncensored and merged variants like **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** accruing over 2 million downloads.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,152 | 13,462 | A new foundational multimodal "Inkling" model designed for conversational image-text-to-text tasks. It is gaining traction as a base for quantization and fine-tuning by other developers. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,168 | 536,177 | The latest flagship GLM model using MoE and DSA architecture, holding the highest likes outside of Gemma. Its strong open-weight release is driving significant developer interest and community integration. |
| [tencent/Hy3](https://guggingface.co/tencent/Hy3) | tencent | 835 | 13,698 | Tencent’s Hy3 text-generation model from the Hunyuan family, serving as the base for several community quantizations (see Hy3-GGUF). It represents Tencent's push into general-purpose open-source LLMs. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,346 | 2,118,995 | A highly popular GGUF quantized vision-language model with "reasoning" capabilities. Its unique synthetic alignment style is driving massive adoption for local deployment. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,191 | 2,122,848 | Baidu’s unlimited OCR model for image-text-to-text tasks, showing how enterprise-grade OCR is becoming a core multimodal capability. It commands one of the highest download-to-like ratios, indicating high utility. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 2,901 | 2,084,530 | An uncensored, aggressive fine-tune of the Qwen3.6 MoE vision model with high engagement. It highlights the community's strong demand for expressive and unrestricted multimodal models. |
| [Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B) | Wan-AI | 128 | 2,408 | A new image-to-video model specialized for dance generation, using a Diffusers pipeline. It is a niche but strong signal of growth in controllable video generation. |
| [google/gemma-4-31B-it](https://guggingface.co/google/gemma-4-31B-it) | google | 3,273 | 12,337,374 | Google’s flagship instruct model for image-text-to-text, topping absolute downloads. It is a reference point for high-performance open-weight multimodal conversational AI. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | ---: |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 793 | 338,945 | A 2-bit ternary quantized LLM, pioneering extreme compression for a 27B model. It is a top performer in the new "ternary" quantization category, attracting significant attention. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 498 | 1,262,894 | The 1-bit version of the Bonsai family, this is the most downloaded quantization on the list. It demonstrates the immense demand for extremely lightweight conversational models. |
| [empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) | empero-ai | 183 | 105,749 | A follow-up GGUF release for the Qwythos vision model family. Its consistent downloads show a sustained user base for streamlined, quantized multimodal inference. |
| [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4) | jlnsrk | 141 | 4,035 | A 4-bit quantized version of GLM-5.2 optimized for CPU inference via "expert-streaming." It is a key release for making large MoE models accessible on consumer hardware. |

### 3. Ecosystem Signal

The ecosystem is undergoing a clear "compression revolution," led by **prism-ml** and their **Bonsai** series, which demonstrates that 1-bit and ternary models (2-bit) can achieve high engagement and massive download counts (over 1.2M for a 27B model). This signals a paradigm shift toward edge and consumer-grade deployment. Concurrently, the **Qwen 3.5/3.6** family has solidified itself as the primary base for community experimentation, spawning dozens of uncensored and merged variants (e.g., HauhauCS, DavidAU). Open-weight models continue to dominate the chart, with **GLM-5.2** and **Gemma-4** serving as the top two "public" foundation models by likes, while enterprise contributions like **Baidu/Unlimited-OCR** and **Tencent/Hy3** prove that major corporations are now fully engaged in open-source distribution. The trend toward "thinking" and "reasoning" tags in GGUF models (e.g., GnLOLot, empero-ai) suggests that chain-of-thought capabilities are becoming a standard requirement even for quantized variants.

### 4. Worth Exploring

- **prism-ml/Bonsai-27B-gguf**: This is the must-study model for anyone interested in the future of model efficiency. Its 1-bit quantization achieving over 1.2 million downloads indicates it is not just a novelty but a viable product for real-world use, making it a critical reference for further research into extreme compression.
- **Cactus-Compute/needle**: A JAX-based model (a rare pipeline in this list) focused on **function-calling** and **tool-use**, it represents a shift in how models are used—from chatbots to autonomous agents. Its "needle" tag suggests a lean, specialized architecture for agentic workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*