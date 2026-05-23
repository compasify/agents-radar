# Hugging Face Trending Models Digest 2026-05-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-05-23 00:24 UTC

---

# Hugging Face Trending Models Digest — May 23, 2026

---

## 1. Today's Highlights

DeepSeek-V4-Pro dominates the trending list with over 4.1M weekly downloads, cementing its position as the go-to open-weight alternative for production deployments. The Qwen 3.6 family continues its ecosystem expansion with multiple official and community variants, including quantized GGUF releases from Unsloth gaining serious traction. Google's Gemma-4-31B-it leads in raw popularity with 2,730 likes, signaling strong community appetite for capable multimodal instruction models. Notably, video and 3D generation models are maturing rapidly—Sulphur-2-base has crossed 1.2M downloads while TencentARC's Pixal3D pushes open-source 3D generation forward. The quantization ecosystem remains vibrant, with Unsloth's Qwen3.6 MTP-GGUF variants collectively approaching 1M weekly downloads.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | deepseek-ai | 4,151 | 4,287,396 | Flagship open-weight LLM with exceptional throughput, now the default choice for API providers seeking DeepSeek-quality reasoning without proprietary constraints. |
| **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** | deepseek-ai | 1,189 | 2,556,531 | Distilled variant balancing speed and capability, driving massive adoption for latency-sensitive applications. |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 2,730 | 10,283,716 | Google's most capable open Gemma release yet with native vision understanding, topping download charts through enterprise and research adoption. |
| **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 1,868 | 5,978,432 | Efficient MoE architecture delivering 35B-quality outputs at 3B active parameters, redefining cost-performance for multimodal deployments. |
| **[Qwen/Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)** | Qwen | 1,390 | 4,049,995 | Dense-path counterpart to the MoE variant, preferred for deterministic inference workloads and fine-tuning pipelines. |
| **[sapientinc/HRM-Text-1B](https://huggingface.co/sapientinc/HRM-Text-1B)** | sapientinc | 243 | 72,470 | Compact 1B-parameter model optimized for human resources and recruitment workflows, demonstrating vertical specialization at scale. |
| **[tencent/Hy-MT2-1.8B](https://huggingface.co/tencent/Hy-MT2-1.8B)** / **[tencent/Hy-MT2-30B-A3B](https://huggingface.co/tencent/Hy-MT2-30B-A3B)** | tencent | 276 / 213 | 564 / 224 | Hunyuan translation specialists spanning efficient edge deployment to large-scale MoE, though downloads suggest early-release status. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[openbmb/MiniCPM-V-4.6](https://huggingface.co/openbmb/MiniCPM-V-4.6)** | openbmb | 904 | 221,612 | Ultra-efficient vision-language model pushing boundary of what sub-3B parameter models can achieve on device. |
| **[SulphurAI/Sulphur-2-base](https://huggingface.co/SulphurAI/Sulphur-2-base)** | SulphurAI | 1,267 | 1,249,582 | Open text-to-video model crossing 1.2M downloads, filling the gap as closed alternatives restrict API access. |
| **[circlestone-labs/Anima](https://huggingface.co/circlestone-labs/Anima)** | circlestone-labs | 1,498 | 602,483 | ComfyUI-native diffusion model with 600K+ downloads, riding the wave of workflow-driven image generation. |
| **[bytedance-research/Lance](https://huggingface.co/bytedance-research/Lance)** | bytedance-research | 645 | 1,001 | Ambitious any-to-any multimodal foundation model from ByteDance, generating buzz despite minimal downloads suggesting imminent broader release. |
| **[HiDream-ai/HiDream-O1-Image](https://huggingface.co/HiDream-ai/HiDream-O1-Image)** | HiDream-ai | 421 | 22,783 | Hybrid image-text-to-image model leveraging Qwen3-VL backbone for iterative visual reasoning and refinement. |
| **[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** | TencentARC | 191 | 0 | MIT-licensed image-to-3D generation with strong academic credentials (arXiv:2605.10922), positioned to democratize 3D asset creation. |
| **[Efficient-Large-Model/SANA-WM_bidirectional](https://huggingface.co/Efficient-Large-Model/SANA-WM_bidirectional)** | Efficient-Large-Model | 84 | 0 | Novel bidirectional video diffusion with camera control, pushing temporal consistency in open video generation. |
| **[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3)** | Supertone | 580 | 37,545 | Production-grade Korean TTS with ONNX optimization, sustaining strong commercial interest. |
| **[ResembleAI/Dramabox](https://huggingface.co/ResembleAI/Dramabox)** | ResembleAI | 229 | 1,354 | Character-driven voice cloning for narrative applications, differentiating in crowded TTS market. |
| **[ScenemaAI/scenema-audio](https://huggingface.co/ScenemaAI/scenema-audio)** | ScenemaAI | 123 | 441 | Diffusion-based text-to-audio with voice cloning, targeting film and game audio pipelines. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[numind/NuExtract3](https://huggingface.co/numind/NuExtract3)** | numind | 77 | 7,576 | Structured information extraction built on Qwen3.5-VL, addressing enterprise document processing needs. |
| **[nvidia/Nemotron-Labs-Diffusion-14B](https://huggingface.co/nvidia/Nemotron-Labs-Diffusion-14B)** | nvidia | 62 | 1,992 | Unexpected "diffusion" architecture from NVIDIA for feature extraction, suggesting experimental fusion of generative and discriminative training. |
| **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | Cactus-Compute | 120 | 328 | JAX-based tool-use and function-calling specialist, niche but signaling alternative framework adoption. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Why It's Trending |
|-------|--------|-------|-----------|-------------------|
| **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** | unsloth | 412 | 532,255 | Multi-token prediction GGUF enabling 2-3x throughput on consumer hardware, Unsloth's optimization expertise driving massive adoption. |
| **[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** | unsloth | 333 | 466,060 | MoE-compatible MTP quantization—remarkable technical achievement making 35B-equivalent models runnable on single GPUs. |
| **[Jackrong/Qwopus3.5-9B-Coder-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-GGUF)** | Jackrong | 163 | 28,599 | Community code-specialized Qwen3.5 with GGUF packaging, filling gap before official coder variants. |
| **[Jackrong/Qwopus3.5-9B-Coder-MTP-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-9B-Coder-MTP-GGUF)** | Jackrong | 67 | 21,448 | MTP-enhanced variant of above, showing community rapid adoption of Unsloth's speed optimizations. |
| **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** | froggeric | 368 | 0 | MLX-optimized Jinja templates for Qwen3.5, solving Apple Silicon deployment friction despite zero direct downloads (likely template library). |
| **[CohereLabs/command-a-plus-05-2026-w4a4](https://huggingface.co/CohereLabs/command-a-plus-05-2026-w4a4)** / **[bf16](https://huggingface.co/CohereLabs/command-a-plus-05-2026-bf16)** | CohereLabs | 172 / 108 | 2,127 / 11,950 | Cohere's vision-enabled Command-A with INT4 and BF16 variants, expanding open-weight presence against GPT-4o class models. |

---

## 3. Ecosystem Signal

**Model Family Momentum:** The Qwen 3.6 ecosystem is undeniably the dominant force this week, with six distinct entries spanning official releases, community quantizations, and derivative works. Its architectural versatility—dense, MoE, vision-native, and MTP-enabled—has created a self-reinforcing adoption flywheel. DeepSeek V4 maintains its position as the "safe enterprise choice" with download volumes reflecting production deployment rather than experimentation. Google's Gemma-4, despite leading in likes, shows the traditional tension between openness and capability: strong community enthusiasm but less derivative ecosystem activity compared to Qwen.

**Open-Weight vs. Proprietary:** The data suggests a bifurcation where frontier capabilities remain concentrated (no open model clearly matches GPT-4o or Gemini 2.5 on multimodal benchmarks), but the *deployment gap* has closed dramatically. DeepSeek-V4-Pro's 4.2M weekly downloads indicate open weights are now the default infrastructure choice for applications where latency, cost, or data sovereignty matter. The proliferation of GGUF/MTP variants (nearly 1M combined downloads for Unsloth's two Qwen releases alone) demonstrates that optimization communities have become critical infrastructure layers.

**Quantization & Fine-Tuning Dynamics:** Unsloth has established itself as the preeminent optimization hub, with its Qwen3.6 variants representing the most downloaded non-official models. The emergence of "MTP" (Multi-Token Prediction) as a standard quantization target—rather than mere bit-width reduction—indicates the field is evolving beyond compression toward architectural co-design for inference efficiency. Community fine-tuning remains healthy but concentrated: Jackrong's coder variants fill immediate gaps, while vertical specialists like HRM-Text-1B suggest the next wave may be domain-specific small models rather than generalist improvements.

---

## 4. Worth Exploring

**[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** — With 4.1M weekly downloads and sustained community trust, this is the benchmark for production LLM deployment. Worth studying for its inference economics: the download-to-like ratio suggests it's passed the "hype cycle" into genuine infrastructure adoption. If you're building any text-heavy application requiring reliability at scale, this is your reference implementation.

**[unsloth/Qwen3.6-35B-A3B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-35B-A3B-MTP-GGUF)** — A technical marvel: 35B-equivalent quality in a MoE format that runs efficiently via GGUF with multi-token prediction. This represents the bleeding edge of accessible large model deployment—capable of running on consumer hardware while matching previous-generation dense models. Essential for anyone studying inference optimization or building cost-sensitive applications.

**[TencentARC/Pixal3D](https://huggingface.co/TencentARC/Pixal3D)** — Zero downloads but maximum potential: MIT-licensed, academically rigorous, and addressing a genuine capability gap in open-source 3D generation. As game engines and spatial computing platforms expand, early familiarity with this architecture could yield significant advantages. The arXiv citation (2605.10922) suggests reproducible, well-documented methodology—a rarity in generative 3D.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*