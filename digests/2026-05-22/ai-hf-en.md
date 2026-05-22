# Hugging Face Trending Models Digest 2026-05-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-22 00:25 UTC

---

Here is the **Hugging Face Trending Models Digest** for **2026-05-22**.

---

## 1. Today's Highlights

This week’s trending models reveal a clear shift toward **multimodal, vision-language systems** and **ultra-efficient quantized MoE architectures**. DeepSeek-V4 commands the largest absolute attention with both its Pro and Flash variants, while Qwen’s MoE-based 35B-A3B continues to dominate downloads among vision-language models. On the generation side, the rise of compact text-to-video models like **Sulphur-2-base** and a surge in community **GGUF quants** for the Qwen3.6 family indicate strong grassroots demand for deployable, high-performance multimodal inference. Notably, new entrants from **Cohere**, **Microsoft**, and **Tencent** are expanding the competitive landscape for on-device and vision-enabled LLMs.

---

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **deepseek-ai/DeepSeek-V4-Pro** – deepseek-ai | 4,111 likes, 4M+ downloads
  The latest flagship from DeepSeek, a dense conversational model setting new benchmarks for open-weight general intelligence.
- **deepseek-ai/DeepSeek-V4-Flash** – deepseek-ai | 1,174 likes, 2.4M downloads
  A faster, lighter sibling of V4-Pro optimized for low-latency text generation without significant quality loss.
- **inclusionAI/Ring-2.6-1T** – inclusionAI | 90 likes, 3.7K downloads
  A massive 1T-parameter hybrid model (Bailing architecture) targeting enterprise-grade conversational AI.
- **sapientinc/HRM-Text-1B** – sapientinc | 213 likes, 59K downloads
  Specialized text-generation model for human resources management tasks.
- **FrontiersMind/Nandi-Mini-600M-Early-Checkpoint** – FrontiersMind | 108 likes, 18.8K downloads
  Early checkpoint of a small, custom-code LLM; popular for research and fine-tuning experimentation.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **Qwen/Qwen3.6-35B-A3B** – Qwen | 1,850 likes, 5.9M downloads
  A Mixture-of-Experts vision-language model with 35B total parameters (3B active); the most downloaded model this week.
- **Qwen/Qwen3.6-27B** – Qwen | 1,370 likes, 3.9M downloads
  Dense companion to the 35B-A3B; strong image-text-to-text performance for multimodal conversational AI.
- **google/gemma-4-31B-it** – google | 2,716 likes, 10.2M downloads
  Google's latest open-weight vision-language instruction model; massive community adoption for multimodal chat.
- **microsoft/Fara-7B** – microsoft | 592 likes, 15K downloads
  A 7B multimodal model built on Qwen2.5-VL architecture, optimized for vision-language reasoning.
- **SulphurAI/Sulphur-2-base** – SulphurAI | 1,232 likes, 1.2M downloads
  A diffusion-based text-to-video base model; widely used with diffusers and GGUF for video generation.
- **bytedance-research/Lance** – bytedance-research | 567 likes, 739 downloads
  An any-to-any multimodal model covering both image and video generation from diverse inputs.
- **TencentARC/Pixal3D** – TencentARC | 180 likes, 0 downloads
  Academic image-to-3D pipeline (arXiv:2605.10922), for volumetric and mesh reconstruction.
- **HiDream-ai/HiDream-O1-Image** – HiDream-ai | 417 likes, 21.5K downloads
  Chain-of-thought-style reasoning for image generation; image-text-to-image with Qwen3-VL backbone.
- **Efficient-Large-Model/SANA-WM_bidirectional** – Efficient-Large-Model | 75 likes, 0 downloads
  Bidirectional image-to-video generation with camera control.
- **SeeSee21/Z-Anime** – SeeSee21 | 432 likes, 16.3K downloads
  Style-specific text-to-image model for anime generation, available in diffusers and GGUF formats.
- **Supertone/supertonic-3** – Supertone | 535 likes, 34.9K downloads
  Text-to-speech model with ONNX support; trending for high-quality voice synthesis.
- **ResembleAI/Dramabox** – ResembleAI | 214 likes, 1.2K downloads
  TTS and voice-cloning model specialized in dramatic, expressive audio generation.
- **ScenemaAI/scenema-audio** – ScenemaAI | 117 likes, 418 downloads
  Diffusion-based text-to-audio with voice-cloning capabilities.
- **NemoStation/Marlin-2B** – NemoStation | 215 likes, 2.3K downloads
  Video-text-to-text model; combines Qwen3.5 backbone with video understanding.

### 🔧 Specialized Models (code, math, medical, embeddings, tools)

- **Cactus-Compute/needle** – Cactus-Compute | 113 likes, 319 downloads
  A JAX-based encoder-decoder model optimized for function-calling and tool-use agents.
- **froggeric/Qwen-Fixed-Chat-Templates** – froggeric | 353 likes, 0 downloads
  MLX-compatible chat template fix for Qwen3.5 family; a niche but popular utility model.
- **facebook/VGGT-Omega** – facebook | 81 likes, 0 downloads
  Meta's PyTorch research model (CC-BY-NC); likely a vision transformer for 3D or video tasks.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **unsloth/Qwen3.6-27B-MTP-GGUF** – unsloth | 373 likes, 478K downloads
  Multi-Token Prediction variant of Qwen3.6-27B in GGUF format; key for efficient local deployment.
- **unsloth/Qwen3.6-35B-A3B-MTP-GGUF** – unsloth | 312 likes, 421K downloads
  Quantized GGUF version of Qwen3.6 MoE with MTP; enables near-native inference on consumer hardware.
- **Jackrong/Qwopus3.5-9B-Coder-GGUF** – Jackrong | 148 likes, 24.4K downloads
  Community GGUF quantization of a code-specialized Qwen3.5 variant.
- **CohereLabs/command-a-plus-05-2026-w4a4** – CohereLabs | 149 likes, 575 downloads
  A 4-bit quantized Cohere Command-A+ vision-language model, optimized for deployment.
- **CohereLabs/command-a-plus-05-2026-bf16** – CohereLabs | 97 likes, 10K downloads
  BF16 full-precision version of the same Cohere model, suitable for cloud and research.
- **circlestone-labs/Anima** – circlestone-labs | 1,465 likes, 591K downloads
  A diffusion single-file model for ComfyUI; trending heavily in the stable-diffusion community.
- **internlm/Intern-S2-Preview** – internlm | 92 likes, 2.2K downloads
  Preview of Intern's updated vision-language model; a contender in the open multimodal space.

---

## 3. Ecosystem Signal

The dominant trend is the **rapid commoditization of vision-language models**. Qwen3.6 (both dense and MoE), Google’s Gemma-4, and Cohere’s Command-A+ all compete in the same image-text-to-text space, pushing open-weight multimodal performance downward in size and cost. **MoE architectures** (Qwen3.6-35B-A3B) are particularly hot—users download them at rates 50% higher than similarly-sized dense models, likely due to their favorable quality-per-active-parameter ratio for local inference.

**Quantization via GGUF** remains the primary vehicle for democratizing these large models. Unsloth’s Qwen3.6 quantizations accumulated over 900K combined downloads, signaling a user base that prioritizes local, private, and low-latency inference over cloud reliance. Meanwhile, **DeepSeek-V4** (Pro and Flash) remains the top “pure” LLM, with the Flash variant indicating demand for tiered performance/ latency offerings.

On the generation side, **text-to-video** is accelerating: Sulphur-2-base (1.2M downloads) and SANA-WM show that lightweight diffusion models for video are gaining traction. **Voice and audio models** (Supertonic, Dramabox, Scenema) are seeing a renaissance as TTS quality improves dramatically and voice cloning becomes accessible to smaller developers.

---

## 4. Worth Exploring

- **Qwen/Qwen3.6-35B-A3B** – The best ratio of quality to compute cost in multimodal today. Its MoE architecture makes it uniquely suited for both cloud and edge deployment. If you’re building a vision-enabled chat agent, start here.
- **SulphurAI/Sulphur-2-base** – With over 1.2M downloads, this is the go-to open text-to-video foundation model. Explore its diffusers integration and GGUF options to see how far video generation has come on consumer GPUs.
- **unsloth/Qwen3.6-35B-A3B-MTP-GGUF** – For those interested in quantized deployment, this is the most capable MoE vision-language model in a deployable format. Investigate the Multi-Token Prediction approach—it offers a glimpse of the next frontier in efficient causal generation.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*