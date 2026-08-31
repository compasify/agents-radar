# Hugging Face Trending Models Weekly 2026-08-31

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-31 00:48 UTC

---

---

### **Today's Highlights**  
The Hugging Face ecosystem in August 2026 is dominated by ultra-efficient, quantized variants of large multimodal models—especially Qwen3.8 and MiniMax-H3. The **Qwen3.8-27B** series leads with over 4.5 million downloads, underscoring massive demand for high-capacity, open-weight models. Notably, community-driven GGUF quantizations (e.g., *unsloth/Qwen3.8-27B-GGUF*) have surged past 8.8M downloads, indicating strong adoption for local inference. Meanwhile, **MiniMax-H3** continues to dominate video generation, with its fine-tunes and Controlnet extensions gaining traction across creative workflows.

---

### **Trending Models**

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,389 | 121,976 | A lightweight, fast inference variant of Qwen3.8, optimized for real-time conversational use. Its popularity reflects growing demand for low-latency LLMs in edge applications. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,714 | 346,516 | A high-speed GLM-5.3 variant targeting text generation with improved throughput. Its widespread download count signals strong enterprise interest in Chinese-language LLMs. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,824 | 4,575,518 | One of the most downloaded models this week, combining speed and performance for long-context reasoning. Its Flash architecture enables efficient inference at scale. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,100 | 2,794,721 | A highly efficient multimodal model with compressed tensors; its 11K likes reflect user enthusiasm for compact yet powerful models. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,267 | 1,137,181 | A cutting-edge image-to-video model leveraging diffusion single-file architecture. Its rapid adoption highlights the rise of AI-powered visual storytelling tools. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,660 | 5,263,381 | The leading open-source model for image-to-video and text-to-video generation. Its high download volume confirms dominance in generative video workflows. |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 163 | 5,538 | A Controlnet-enhanced fine-tune enabling precise motion control in video generation. Represents a shift toward modular, controllable video synthesis. |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 193 | 0 | A preview version of a fast video generator using minimal data. Though not yet downloaded, its release signals innovation in lightweight, data-efficient video modeling. |

#### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 141 | 87,848 | A specialized code-generation model based on Qwen3.5 MoE, quantized via GGUF for local execution. Appeals to developers seeking high-performance coding assistants. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 505 | 147,038 | A 35B MoE model tuned for both text and multimodal tasks. Its dual capability suggests growing interest in versatile, scalable foundation models. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,240 | 8,839,153 | The most downloaded model this week, a GGUF quantization of Qwen3.8-27B. Its massive adoption proves the dominance of community-driven quantization for local inference. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 578 | 238,397 | An uncensored, GGUF-quantized version of Qwen3.8-27B. Reflects rising demand for unrestricted access to large models in niche and experimental use cases. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 850 | 1,991,437 | Another major uncensored GGUF release with high download volume. Demonstrates how community fine-tunes are shaping model accessibility beyond official releases. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 457 | 1,622,056 | A heavily modified, abliterated GGUF version showing the trend toward aggressive model personalization and bypassing safety filters. |

---

### **Ecosystem Signal**  
As of August 2026, the Hugging Face ecosystem is witnessing a clear bifurcation between **open-weight foundation models** and **community-driven optimization layers**. Qwen3.8 and MiniMax-H3 are the dominant families, with Qwen’s 27B series alone accounting for nearly 10% of all model downloads. This reflects strong momentum for **large-scale, open-access models** from Chinese tech firms—Qwen, GLM, Kimi—now competing globally.  

Quantization formats like **GGUF** have become the de facto standard for local deployment, with over 15 million total downloads across Qwen and GLM variants. The surge in “uncensored” and “abliterated” versions (e.g., *OBLITERATUS*, *orcarouter*) signals a growing underground demand for unrestricted model access, often bypassing safety constraints. Meanwhile, fine-tuning ecosystems around MiniMax-H3 and LTX-2.5 show increasing specialization in **video generation**, particularly through Controlnets and lightweight diffusion models. Open-weight models are no longer just research tools—they’re becoming infrastructure for consumer-grade AI creation.

---

### **Worth Exploring**  
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – With over 8.8M downloads, it’s the most popular model on HF today. Ideal for developers seeking high-performance, locally runnable LLMs without cloud dependency.  
2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** – The top-performing open-source video generation model. Worth studying for creators exploring AI-driven animation and content production.  
3. **[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)** – A rare example of a 35B MoE model available in GGUF format. Perfect for advanced users building custom coding assistants.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*