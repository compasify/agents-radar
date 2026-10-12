# Hugging Face Trending Models Weekly 2026-10-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-12 01:42 UTC

---

---

### **Today's Highlights**  
The Hugging Face ecosystem in October 2026 is dominated by high-performance, quantized multimodal models, particularly from Qwen and Cloudflare. The *Qwen3.8-27B* series leads with massive downloads—over 6.8 million for the base model—driven by aggressive community fine-tuning and GGUF quantization. Notably, *Lightricks/LTX-2.5* surges in popularity as a top-performing image-to-video diffusion model with over 1.7 million downloads, signaling strong momentum in generative video. Meanwhile, open-weight models like *unsloth/Qwen3.8-27B-GGUF* and *prism-ml/Ternary-Bonsai-2-27B-gguf* demonstrate the growing dominance of lightweight, efficient inference via 2-bit quantization and llama.cpp compatibility.

---

### **Trending Models**

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,509 | 6,843,108 | A highly capable image-text-to-text model with strong conversational abilities; one of the most downloaded models on HF, ideal for multimodal reasoning. |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 322 | 108,900 | A 2-bit quantized LLM optimized for tool calling and function execution, showing rising interest in low-resource, efficient inference. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,630 | 4,549,911 | A 2-bit quantized Llama-family model built for speed and efficiency via llama.cpp; stands out for its performance on consumer hardware. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,322 | 1,726,683 | A state-of-the-art image-to-video diffusion model that enables high-fidelity text-to-video generation; one of the fastest-growing models in 2026. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,989 | 2,188,658 | An uncensored, GGUF-quantized text-to-image model based on Qwen-Image 2.1; widely used in ComfyUI workflows due to its strong creative output. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,657 | 2,016,567 | A heavily fine-tuned, uncensored variant of Qwen3.8-27B with advanced coding and reasoning capabilities; popular among developers seeking maximal freedom. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,228 | 136,103 | Official Qwen-Image 2.1 model supporting image generation and editing; known for balanced quality and reliability. |

#### 🔧 Specialized Models (code, math, medical, embeddings)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,712 | 98,829 | A cutting-edge embedding model derived from Gemma 2, optimized for feature extraction in semantic search and retrieval tasks. |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 255 | 59,274 | A GGUF-quantized version of Google’s embeddinggemma-2, enabling fast on-device inference for multilingual NLP pipelines. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,073 | 2,081,596 | The latest iteration of Segment Anything Model (SAM), now extended to video segmentation; widely adopted for precise object masking. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)
| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,026 | 6,488,262 | A top-performing GGUF-quantized version of Qwen3.8-27B, praised for speed and compatibility with vLLM and llama.cpp. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 799 | 4,189,006 | A mixed-precision, GSQ-RCO quantized variant of Qwen3.8-Flash-Next, offering elite performance at low memory footprint. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 760 | 614,193 | An uncensored, GGUF-optimized version of Qwen3.8-Flash-Next, favored by users seeking unrestricted creativity. |

---

### **Ecosystem Signal**  
As of October 2026, the Hugging Face ecosystem reflects a clear shift toward **open-weight, quantized, and community-driven models**, with Qwen and Gemma emerging as dominant foundational families. Qwen’s presence across multiple categories—from image generation to multimodal reasoning—underscores its versatility and rapid adoption. The explosive growth of GGUF-quantized models (e.g., *unsloth/Qwen3.8-27B-GGUF*, *prism-ml/Ternary-Bonsai-2-27B-gguf*) signals a strong demand for efficient, deployable inference on edge devices. Notably, **2-bit quantization** (via llama.cpp and ternary compression) is gaining traction, enabling high-performance LLMs on consumer hardware. Community fine-tunes—especially uncensored, turbo, and coder-optimized variants—are proliferating, reflecting user appetite for customization and autonomy. While proprietary models remain influential, the open-weight movement continues to dominate in download volume and innovation velocity, with tools like GGUF, safetensors, and vLLM forming the backbone of accessible AI deployment.

---

### **Worth Exploring**  
1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** – With over 6.4 million downloads, this is the most popular model on HF. Its combination of high performance, GGUF format, and compatibility with vLLM makes it ideal for developers building local AI apps.  
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – A leading image-to-video model with 1.7 million downloads; perfect for creators exploring generative video workflows using diffusion-based pipelines.  
3. **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** – A standout in mixed-precision quantization; offers exceptional speed and accuracy trade-offs, making it a benchmark for efficient multimodal inference.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*