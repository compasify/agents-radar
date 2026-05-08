# Hugging Face Trending Models Digest 2026-05-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-08 00:20 UTC

---

# Hugging Face Trending Models Digest — 2026-05-08

## Today's Highlights

This week's trending landscape is dominated by the **DeepSeek-V4** family and **Qwen3.6** series, with both seeing massive download volumes and significant community fine-tuning activity. Google's **Gemma-4-31B-it** continues its strong run, crossing 8.5 million downloads, while **Gemma-4-E4B-it** (a smaller 4B variant) also surges past 5 million downloads, signaling strong adoption of Google's latest open-weight family. The emergence of **uncensored and "abliterated" fine-tunes** (e.g., `dealignai/Gemma-4-31B-JANG_4M-CRACK`, `HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive`) points to a sustained community interest in less-restricted model variants. On the multimodal side, **Sulphur-2-base** (text-to-video) and **OmniVoice** (zero-shot voice cloning) are notable newcomers gaining rapid traction.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **deepseek-ai/DeepSeek-V4-Pro**  
  Author: deepseek-ai | Likes: 3,724 | Downloads: 946,264  
  Flagship text-generation model from DeepSeek's V4 family; trending due to strong benchmarks and massive community adoption for conversational AI.

- **deepseek-ai/DeepSeek-V4-Flash**  
  Author: deepseek-ai | Likes: 980 | Downloads: 751,333  
  Faster, lighter variant of DeepSeek-V4 optimized for inference speed; complements the Pro version for production use cases.

- **XiaomiMiMo/MiMo-V2.5-Pro**  
  Author: XiaomiMiMo | Likes: 469 | Downloads: 20,905  
  Long-context text-generation model from Xiaomi, with agent capabilities; gaining interest for enterprise and agentic workflows.

- **poolside/Laguna-XS.2**  
  Author: poolside | Likes: 232 | Downloads: 16,792  
  Text-generation model for code and software engineering; trending as poolside expands its developer-focused model lineup.

- **ibm-granite/granite-4.1-8b**  
  Author: ibm-granite | Likes: 162 | Downloads: 24,099  
  IBM's latest 8B Granite model for text generation; notable for enterprise-grade licensing and language coverage.

- **talkie-lm/talkie-1930-13b-it**  
  Author: talkie-lm | Likes: 242 | Downloads: 0  
  13B instruction-tuned chat model; listed but with zero downloads—likely recently uploaded or under review.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **google/gemma-4-31B-it**  
  Author: google | Likes: 2,555 | Downloads: 8,594,149  
  Google's flagship multimodal model (image-text-to-text); the most downloaded model this week, reflecting strong open-weight competition.

- **google/gemma-4-E4B-it**  
  Author: google | Likes: 942 | Downloads: 5,494,056  
  Smaller 4B parameter Gemma-4 variant (any-to-any); highly downloaded, ideal for efficient deployment on consumer hardware.

- **Qwen/Qwen3.6-35B-A3B**  
  Author: Qwen | Likes: 1,659 | Downloads: 3,211,156  
  Mixture-of-experts multimodal model (35B total, 3B active); trending for high performance-to-compute ratio and vision-language tasks.

- **Qwen/Qwen3.6-27B**  
  Author: Qwen | Likes: 1,174 | Downloads: 1,771,851  
  Dense multimodal model from Qwen's 3.6 family; strong adoption for image-text-to-text applications.

- **google/gemma-4-31B-it-assistant**  
  Author: google | Likes: 139 | Downloads: 19,908  
  Assistant-optimized variant of Gemma-4-31B with any-to-any pipeline; targets conversational agents and tool-use scenarios.

- **google/gemma-4-26B-A4B-it-assistant**  
  Author: google | Likes: 84 | Downloads: 12,868  
  MoE assistant variant (26B total, 4B active); efficient any-to-any model for multimodal assistant use cases.

- **sensenova/SenseNova-U1-8B-MoT**  
  Author: sensenova | Likes: 187 | Downloads: 2,724  
  Multimodal any-to-any model (8B) with feature extraction; from SenseTime's SenseNova lineup.

- **nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16**  
  Author: nvidia | Likes: 262 | Downloads: 65,066  
  NVIDIA's reasoning-optimized multimodal MoE (30B total, 3B active); notable for combining any-to-any capabilities with reasoning.

- **Zyphra/ZAYA1-8B**  
  Author: Zyphra | Likes: 194 | Downloads: 539  
  8B model with Apache-2.0 license and eval results; lightweight multimodal model with permissive licensing.

- **mistralai/Mistral-Medium-3.5-128B**  
  Author: mistralai | Likes: 295 | Downloads: 18,272  
  Mistral's large 128B model for multilingual (EN/FR) text generation; vLLM-compatible.

- **SulphurAI/Sulphur-2-base**  
  Author: SulphurAI | Likes: 375 | Downloads: 71,149  
  Text-to-video model with Diffusers and GGUF support; a major new entrant in the video generation space.

- **TenStrip/LTX2.3-10Eros**  
  Author: TenStrip | Likes: 150 | Downloads: 28,215  
  Image-to-video generation model; trending for creative video synthesis applications.

- **SeeSee21/Z-Anime**  
  Author: SeeSee21 | Likes: 216 | Downloads: 4,460  
  Text-to-image anime-focused model with Diffusers and GGUF support; popular in the anime generation community.

- **k2-fsa/OmniVoice**  
  Author: k2-fsa | Likes: 797 | Downloads: 2,238,817  
  Zero-shot, multilingual text-to-speech with voice cloning; surging in popularity for voice AI applications.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **openai/privacy-filter**  
  Author: openai | Likes: 1,343 | Downloads: 165,240  
  Token-classification model for privacy filtering (ONNX, safetensors); trending as data privacy tools gain urgency.

- **froggeric/Qwen-Fixed-Chat-Templates**  
  Author: froggeric | Likes: 92 | Downloads: 0  
  Utility model providing corrected chat templates for Qwen models; useful for developers fixing template issues.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **dealignai/Gemma-4-31B-JANG_4M-CRACK**  
  Author: dealignai | Likes: 1,487 | Downloads: 169,511  
  "Abliterated" (uncensored) fine-tune of Gemma-4-31B; highly controversial but very popular for unrestricted applications.

- **unsloth/Qwen3.6-35B-A3B-GGUF**  
  Author: unsloth | Likes: 956 | Downloads: 2,417,319  
  GGUF quantization of Qwen3.6-35B-A3B; the most downloaded GGUF this week, essential for local inference.

- **unsloth/Qwen3.6-27B-GGUF**  
  Author: unsloth | Likes: 612 | Downloads: 1,264,430  
  GGUF version of Qwen3.6-27B; widely used for efficient CPU/edge deployment.

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
  Author: HauhauCS | Likes: 576 | Downloads: 973,262  
  Uncensored, MoE vision-language fine-tune in GGUF; trending for aggressive uncensoring of Qwen3.6.

- **z-lab/Qwen3.6-27B-DFlash**  
  Author: z-lab | Likes: 259 | Downloads: 28,767  
  Specialized fine-tune of Qwen3.6-27B with DFlash; targets enhanced feature extraction and generation performance.

- **DavidAU/Qwen3.6-27B-Heretic-Uncensored-FINETUNE-NEO-CODE-Di-IMatrix-MAX-GGUF**  
  Author: DavidAU | Likes: 91 | Downloads: 126,660  
  Uncensored code-oriented fine-tune of Qwen3.6-27B in GGUF format; combines uncensoring with code specialization.

- **Jackrong/Qwopus3.6-35B-A3B-v1-GGUF**  
  Author: Jackrong | Likes: 68 | Downloads: 4,754  
  GGUF quant of a Qwen3.6-35B variant; part of the growing Qwen3.6 quantization ecosystem.

- **Jackrong/Qwen3.5-9B-DeepSeek-V4-Flash-GGUF**  
  Author: Jackrong | Likes: 102 | Downloads: 104,723  
  Hybrid GGUF merging Qwen3.5-9B with DeepSeek-V4-Flash capabilities; creative community merge.

---

## Ecosystem Signal

The current trend landscape reveals several key dynamics. **DeepSeek-V4** and **Qwen3.6** families are the dominant "superclusters" this week, with combined download volumes in the millions and extensive community fine-tuning activity. Google's **Gemma-4** series continues to gain enterprise traction, particularly the 31B and 4B variants, while the **Gemma-4-E4B-it** (4B) variant is notably one of the fastest-growing models, suggesting strong demand for efficient multimodal models.

**Uncensored/abliterated fine-tunes** (Gemma-4-JANG, Qwen3.6-Heretic, Qwen3.6-Uncensored-Aggressive) are a persistent ecosystem trend—these models consistently attract high likes and downloads, indicating a vocal community segment prioritizing unrestricted outputs despite potential safety concerns. **GGUF quantization** remains the dominant format for local deployment, with unsloth leading GGUF conversions. The **text-to-video** space is heating up with Sulphur-2-base, while **OmniVoice** signals growing interest in zero-shot voice cloning. **Open-weight models** continue to dominate vs proprietary—every trending model above is open-weight or has open fine-tunes.

---

## Worth Exploring

1. **google/gemma-4-E4B-it** — At just 4B parameters with any-to-any multimodal capabilities, this is an ideal model for researchers and developers seeking a lightweight yet capable multimodal model for edge deployment or rapid prototyping. Its 5.5M downloads confirm strong practical utility.

2. **k2-fsa/OmniVoice** — With 2.2M downloads and 797 likes, this zero-shot multilingual TTS model is a standout in the audio generation space. Worth studying for its voice cloning approach and potential applications in accessibility, content creation, and voice assistants.

3. **dealignai/Gemma-4-31B-JANG_4M-CRACK** — Whether for research on model safety, alignment, or the ethics of uncensored models, this abliterated fine-tune of Gemma-4-31B is a key artifact for understanding community-driven efforts to bypass safety guardrails. Its high engagement (1,487 likes) makes it culturally significant in the open-weight ecosystem.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*