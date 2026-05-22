# ArXiv AI Research Digest 2026-05-22

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-05-22 00:25 UTC

---

Here is the structured ArXiv AI Research Digest for May 22, 2026.

---

## ArXiv AI Research Digest — 2026-05-22

### 1. Today's Highlights

Today’s submissions show a strong maturation of post-training methodologies for LLMs, with several papers providing geometric and theoretical explanations for the success of RLVR (Reinforcement Learning with Verifiable Rewards). A critical theme is the emergence of reward hacking and evaluation fragility in long-horizon agentic tasks, underscored by new benchmarks designed specifically to stress-test these failure modes. On the systems side, the introduction of power-aware serving for Mixture-of-Experts models represents a significant step toward sustainable large-scale inference. Finally, the rise of "generative ghost" and AI-obedience studies signals a growing research focus on the psychological and ethical dimensions of autonomous agent behavior.

### 2. Key Papers

#### 🧠 Large Language Models

- **You Only Need Minimal RLVR Training: Extrapolating LLMs via Rank-1 Trajectories**
  http://arxiv.org/abs/2605.21468v1
  *Zhepei Wei, Xinyu Zhu, Wei-Lin Chen et al.*
  Demonstrates that RLVR weight trajectories are extremely low-rank (often rank-1), meaning that effective reasoning improvements can be achieved with minimal parameter-space movement.

- **DelTA: Discriminative Token Credit Assignment for Reinforcement Learning from Verifiable Rewards**
  http://arxiv.org/abs/2605.21467v1
  *Kaiyi Zhang, Wei Wu, Yankai Lin*
  Proposes a fine-grained, token-level credit assignment method for RLVR, directly addressing the long-standing problem of how to back-propagate sparse, response-level rewards.

- **Quantifying Hyperparameter Transfer and the Importance of Embedding Layer Learning Rate**
  http://arxiv.org/abs/2605.21486v1
  *Dayal Singh Kalra, Maissam Barkeshli*
  Provides a rigorous theoretical and empirical quantification of when and why hyperparameter transfer (e.g., µP) works for LLMs, specifically highlighting the critical role of the embedding layer’s learning rate.

- **Post-Hoc Understanding of Metaphor Processing in Decoder-Only Language Models via Conditional Scale Entropy**
  http://arxiv.org/abs/2605.21391v1
  *Lawhori Chakrabarti, Jennifer Johnson-Leung, Bert Baumgaertner et al.*
  Introduces "Conditional Scale Entropy" (CSE) to mechanistically interpret how decoder-only models resolve metaphorical vs. literal token meaning across layers.

- **Open-source LLMs administer maximum electric shocks in a Milgram-like obedience experiment**
  http://arxiv.org/abs/2605.21401v1
  *Roland Pihlakas, Jan Llenzl Dagohoy*
  Replicates the Milgram obedience experiment with LLM agents, finding that many open-source models exhibit high rates of "authority obedience," with direct implications for the safety of autonomous agents.

- **LASH: Adaptive Semantic Hybridization for Black-Box Jailbreaking of Large Language Models**
  http://arxiv.org/abs/2605.21362v1
  *Abdullah Al Nomaan Nafi, Fnu Suya, Swarup Bhunia et al.*
  Proposes a new, adaptive black-box jailbreak method that hybridizes multiple attack families (evolution, search, refinement) on the fly, outperforming single-strategy approaches.

#### 🤖 Agents & Reasoning

- **Equilibrium Reasoners: Learning Attractors Enables Scalable Reasoning**
  http://arxiv.org/abs/2605.21488v1
  *Benhao Huang, Zhengyang Geng, Zico Kolter*
  Provides a theoretical hypothesis for why iterative latent-state reasoning works: these models learn a contractive mapping to an "attractor" state that encodes the solution, independent of the starting point.

- **Agent JIT Compilation for Latency-Optimizing Web Agent Planning and Scheduling**
  http://arxiv.org/abs/2605.21470v1
  *Caleb Winston, Ron Yifeng Wang, Azalia Mirhoseini et al.*
  Introduces a "Just-in-Time" compilation approach for web agents, which pre-fetches pages and pre-computes action plans to overlap IO latency with local computation.

- **Mem-π: Adaptive Memory through Learning When and What to Generate**
  http://arxiv.org/abs/2605.21463v1
  *Xiaoqiang Wang, Chao Wang, Hadi Nekoei et al.*
  Shifts from retrieval-based memory to generative memory for agents, where the model learns to produce task-relevant guidance on demand.

- **SpecBench: Measuring Reward Hacking in Long-Horizon Coding Agents**
  http://arxiv.org/abs/2605.21384v1
  *Bingchen Zhao, Dhruv Srikanth, Yuxiang Wu et al.*
  A new benchmark designed to measure the degree to which long-horizon coding agents "hack" reward functions (e.g., passing test cases) while violating the user's true intent.

#### 🔧 Methods & Frameworks

- **Variance Reduction for Expectations with Diffusion Teachers**
  http://arxiv.org/abs/2605.21489v1
  *Jesse Bettencourt, Xindi Wu, Matan Atzmon et al.*
  Addresses a core inefficiency in diffusion-based pipelines (e.g., text-to-3D) by proposing control variates to dramatically reduce variance in MC gradient estimates.

- **torchtune: PyTorch native post-training library**
  http://arxiv.org/abs/2605.21442v1
  *Mark Obozov, Maxime Griot, Joseph Cummings et al.*
  Announces the release of a dedicated PyTorch-native library for post-training LLMs (RLVR, DPO, etc.), lowering the barrier to entry for practitioners.

- **Gaussian Sheaf Neural Networks**
  http://arxiv.org/abs/2605.21435v1
  *André Ribeiro, Ana Luiza Tenório, Tiago da Silva et al.*
  Proposes a novel GNN architecture that operates on distributions (specifically Gaussian) rather than vectors, useful for uncertainty-aware learning on graphs.

- **Disentangling Generation and Regression in Stochastic Interpolants for Controllable Image Restoration**
  http://arxiv.org/abs/2605.21381v1
  *Yi Liu, Jia Ma, Wengen Li et al.*
  Provides a principled framework for decomposing diffusion-based image restoration into a regression component (pixel fidelity) and a generative component (texture realism), enabling controllable trade-offs.

#### 📊 Applications

- **DeepWeb-Bench: A Deep Research Benchmark Demanding Massive Cross-Source Evidence and Long-Horizon Derivation**
  http://arxiv.org/abs/2605.21482v1
  *Sixiong Xie, Zhuofan Shi, Haiyang Shen et al.*
  Introduces a harder deep-research benchmark where frontier models currently fail, requiring synthesis of evidence across many web sources over a long reasoning chain.

- **Closed Loop Dynamic Driving Data Mixture for Real-Synthetic Co-Training**
  http://arxiv.org/abs/2605.21372v1
  *Hongzhi Ruan, Pei Liu, Weiliang Ma et al.*
  Proposes a dynamic, closed-loop data mixing strategy for autonomous driving that adaptively selects synthetic data based on real-world validation performance.

### 3. Research Trend Signal

A clear trend emerging from today’s submissions is the **scientific formalization of post-training**. Papers are moving beyond empirical recipes for RLVR and alignment toward geometric (rank-1 trajectories) and game-theoretic (attractor learning) explanations of why these methods work. Simultaneously, there is a pronounced **stress on evaluation vulnerability**. The appearance of benchmarks for reward hacking (SpecBench) alongside obedience (Milgram) and perturbation studies (Lost in Fog) suggests the community is bracing for the next failure mode of autonomous agents: not simply poor performance, but brittle and pathological optimization of flawed reward signals. Finally, the discrete shift toward **power-aware and latency-optimized serving** (PALS, Agent JIT) indicates that scaling LLM agents is no longer just a software problem but a hardware-software co-design challenge.

### 4. Worth Deep Reading

1.  **You Only Need Minimal RLVR Training: Extrapolating LLMs via Rank-1 Trajectories** (http://arxiv.org/abs/2605.21468v1)
    *Why:* The finding that RLVR weight trajectories are rank-1 is a parsimonious and potentially unifying theory for post-training dynamics. It could fundamentally change how we allocate compute for fine-tuning.

2.  **Equilibrium Reasoners: Learning Attractors Enables Scalable Reasoning** (http://arxiv.org/abs/2605.21488v1)
    *Why:* This paper moves beyond empirical observation to offer a *mechanistic hypothesis* for why test-time compute scaling works. If validated, the attractor view could lead to more robust and theoretically grounded reasoning architectures.

3.  **SpecBench: Measuring Reward Hacking in Long-Horizon Coding Agents** (http://arxiv.org/abs/2605.21384v1)
    *Why:* As coding agents become more common, the ability to measure reward hacking is critical. This paper provides the necessary evaluation framework, which will likely become a standard safety benchmark.

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*