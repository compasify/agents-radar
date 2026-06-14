# Hugging Face Trending Models Digest 2026-06-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-06-14 00:28 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-06-14

## Today's Highlights

This week's trending models showcase a decisive shift toward **MoE (Mixture-of-Experts) architectures** and **unified multimodal systems**. DeepSeek-V4-Pro dominates by a wide margin with 4,813 weekly likes and 3.25M downloads, signaling strong community appetite for next-generation conversational MoE models. Google's **Gemma 4 family** continues to expand rapidly—now spanning unified any-to-any pipelines, quantized variants, and abliterated fine-tunes—while **nvidia/LocateAnything-3B** and **HauhauCS/Qwen3.6-35B-A3B** prove that mid-scale vision-language MoEs can achieve breakout community traction. The ecosystem is also seeing the emergence of specialized streaming ASR (nvidia's 0.6B streaming model) and real-time audio generation (Google's Magenta Realtime 2), indicating growing maturity in efficient, production-ready speech and audio models.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)**  
  *deepseek-ai* | 4,813 likes, 3.25M downloads  
  A massive MoE conversational model that has become the week's most-liked release, likely setting new benchmarks in reasoning and instruction-following.

- **[CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)**  
  *CohereLabs* | 355 likes, 6.5K downloads  
  A compact Cohere 2 MoE model optimized for code generation and conversational use, gaining traction among developers.

- **[nex-agi/Nex-N2-Pro](https://huggingface.co/nex-agi/Nex-N2-Pro)**  
  *nex-agi* | 236 likes, 3.1K downloads  
  A Qwen3.5-based MoE language model positioning itself for high-performance general and vision-language tasks.

- **[nex-agi/Nex-N2-mini](https://huggingface.co/nex-agi/Nex-N2-mini)**  
  *nex-agi* | 193 likes, 3.8K downloads  
  The smaller sibling of Nex-N2-Pro, designed for efficient deployment while retaining multimodal capabilities.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)**  
  *nvidia* | 1,959 likes, 69.4K downloads  
  A 3B image-text-to-text model for visual grounding and object localization, trending for its combination of compact size and strong spatial reasoning.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  *HauhauCS* | 1,761 likes, 2.41M downloads  
  An uncensored MoE vision-language model that has attracted massive download volumes, reflecting community appetite for unrestricted multimodal generation.

- **[google/gemma-4-12B-it](https://huggingface.co/google/gemma-4-12B-it)**  
  *google* | 995 likes, 1M downloads  
  A 12B unified any-to-any model supporting text, image, and possibly audio inputs—part of Google's next-generation multimodal strategy.

- **[ideogram-ai/ideogram-4-fp8](https://huggingface.co/ideogram-ai/ideogram-4-fp8)**  
  *ideogram-ai* | 517 likes, 6.5K downloads  
  A FP8-precision text-to-image diffusion model offering high-quality generation with reduced memory footprint.

- **[google/gemma-4-12B](https://huggingface.co/google/gemma-4-12B)**  
  *google* | 533 likes, 207K downloads  
  The base any-to-any Gemma 4 model without instruction tuning, giving developers a foundation for custom fine-tuning.

- **[bosonai/higgs-audio-v3-tts-4b](https://huggingface.co/bosonai/higgs-audio-v3-tts-4b)**  
  *bosonai* | 414 likes, 32.2K downloads  
  A 4B text-to-speech model built on Qwen3, notable for integrating multimodal generation with high-quality audio output.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**  
  *moonshotai* | 515 likes, 1.7K downloads  
  A compressed, image-feature-extraction model optimized for code-related vision tasks, reflecting Moonshot AI's focus on efficient multimodal coding.

- **[ideogram-ai/ideogram-4-nf4](https://huggingface.co/ideogram-ai/ideogram-4-nf4)**  
  *ideogram-ai* | 334 likes, 3.3K downloads  
  An NF4-quantized version of Ideogram 4, enabling even lower memory usage for high-fidelity text-to-image generation.

- **[ByteDance/Bernini-R](https://huggingface.co/ByteDance/Bernini-R)**  
  *ByteDance* | 235 likes, 426 downloads  
  An image-text-to-video renderer from ByteDance, leveraging the Bernini architecture for controllable video generation.

- **[google/magenta-realtime-2](https://huggingface.co/google/magenta-realtime-2)**  
  *google* | 187 likes, 7.3K downloads  
  A real-time text-to-audio TFLite model for low-latency music and sound generation, targeting interactive applications.

- **[zai-org/SCAIL-2](https://huggingface.co/zai-org/SCAIL-2)**  
  *zai-org* | 151 likes, 0 downloads  
  A pose-driven character animation diffusion model for image-to-video, gaining early interest despite being newly released.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**  
  *nvidia* | 400 likes, 4.0K downloads  
  A cache-aware streaming automatic speech recognition model at just 0.6B parameters, pushing efficient real-time ASR.

- **[MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)**  
  *MiniMaxAI* | 412 likes, 1.0K downloads  
  A multimodal image-text-to-text model from MiniMax, likely targeting enterprise vision-language applications.

- **[prefeitura-rio/Rio-3.5-Open-397B](https://huggingface.co/prefeitura-rio/Rio-3.5-Open-397B)**  
  *prefeitura-rio* | 109 likes, 5.9K downloads  
  A massive 397B Qwen3.5-based MoE conversational model, notable for being open and developed by a city government.

- **[XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro-FP4-DFlash)**  
  *XiaomiMiMo* | 106 likes, 3.6K downloads  
  A 4-bit FP4 quantized agent-oriented text-generation model optimized for on-device deployment.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)**  
  *Jiunsong* | 818 likes, 98.9K downloads  
  A fast, uncensored GGUF variant of the 26B Gemma 4 model, highly popular among users seeking unfiltered responses.

- **[unsloth/gemma-4-12b-it-GGUF](https://huggingface.co/unsloth/gemma-4-12b-it-GGUF)**  
  *unsloth* | 580 likes, 873K downloads  
  The most downloaded Gemma 4 GGUF variant, enabling efficient local inference of the instruction-tuned 12B model.

- **[unsloth/diffusiongemma-26B-A4B-it-GGUF](https://huggingface.co/unsloth/diffusiongemma-26B-A4B-it-GGUF)**  
  *unsloth* | 246 likes, 42.9K downloads  
  GGUF quantization of Google's 26B MoE diffusion-language model, making it accessible for local deployment.

- **[OBLITERATUS/Gemma-4-12B-OBLITERATED](https://huggingface.co/OBLITERATUS/Gemma-4-12B-OBLITERATED)**  
  *OBLITERATUS* | 277 likes, 50.3K downloads  
  An "obliterated" (abliterated) Gemma 4 12B fine-tune that removes safety filters for unrestricted use cases.

- **[unsloth/gemma-4-12B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-12B-it-qat-GGUF)**  
  *unsloth* | 213 likes, 227.8K downloads  
  A QAT (Quantization-Aware Training) GGUF version of the 12B Gemma 4, offering improved accuracy in 4-bit.

- **[huihui-ai/Huihui-gemma-4-12B-it-abliterated](https://huggingface.co/huihui-ai/Huihui-gemma-4-12B-it-abliterated)**  
  *huihui-ai* | 152 likes, 8.3K downloads  
  Another abliterated Gemma 4 12B variant, reflecting sustained community demand for uncensored model versions.

- **[unsloth/gemma-4-26B-A4B-it-qat-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-qat-GGUF)**  
  *unsloth* | 151 likes, 260.8K downloads  
  QAT GGUF quantization of the 26B Gemma 4 MoE model, offering substantial memory savings for larger deployments.

- **[Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.6-27B-Coder-MTP-GGUF)**  
  *Jackrong* | 157 likes, 11.3K downloads  
  A 27B vision-language coder GGUF model, optimized for code generation with llama.cpp.

---

## Ecosystem Signal

Several clear trends define this week's ecosystem. **MoE architectures are now dominant**—nearly every top new release (DeepSeek-V4-Pro, Gemma 4 26B, Nex-N2, Qwen3.6, Rio-3.5) employs mixture-of-experts designs, with parameter counts ranging from 3B active to 397B total. This reflects a hardware-efficient paradigm where sparse activation enables larger model capacity at lower inference cost.

The **Gemma 4 family has become the most actively fine-tuned and quantized model line** this week, with 9 of the 30 trending models being Gemma 4 derivatives. The simultaneous emergence of abliterated, QAT-GGUF, and standard GGUF variants indicates Google's open-weight strategy is catalyzing a vibrant community ecosystem.

**Uncensored/abliterated models continue to be a major niche**, with HauhauCS's Qwen3.6 uncensored variant and OBLITERATUS's Gemma 4 abliteration both attracting large download counts—suggesting a persistent demand for models without alignment guardrails.

On the **specialized front**, we see a move toward compact, production-ready models: nvidia's 0.6B streaming ASR and Google's Magenta Realtime 2 demonstrate that **small, efficient models capable of real-time inference** are gaining traction beyond the large-model hype cycle.

Finally, **ideogram-ai's sustained release of multiple Ideogram 4 quantizations** (FP8, NF4) alongside Comfy-Org integration points highlights that the **text-to-image space is bifurcating** between high-end diffusion models and optimized deployment formats for workflow tools.

---

## Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — At just 3B parameters, this model demonstrates that strong visual grounding and object localization do not require massive models. It's an excellent study case for efficient multimodal perception and a great candidate for edge or robotics applications.

2. **[google/diffusiongemma-26B-A4B-it](https://huggingface.co/google/diffusiongemma-26B-A4B-it)** — As one of the first large-scale "diffusion + language" hybrid models, diffusiongemma represents an architectural innovation that merges generative diffusion with autoregressive language modeling. Researchers and practitioners interested in next-gen multimodal generation should examine this carefully.

3. **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — This streaming ASR model with cache-aware design is a standout for production speech systems. Its sub-1B size and streaming capability make it a strong candidate for real-time applications, and its architecture may influence the next wave of efficient speech models.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*