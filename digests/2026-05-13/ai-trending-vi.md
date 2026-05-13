# Xu hướng AI mã nguồn mở hàng ngày 2026-05-13

> Nguồn dữ liệu: GitHub Trending + GitHub Search API | Thời gian tạo: 2026-05-13 00:24 UTC

---

# Xu hướng AI mã nguồn mở hàng ngày | 2026-05-13

---

## Bước 1: Lọc theo mức độ liên quan của AI

**Kết quả lọc danh sách Trending** (loại trừ các dự án không liên quan đến AI):
| Dự án được giữ lại | Dự án bị loại trừ | Lý do loại trừ |
|---------|---------|---------|
| tinyhumansai/openhuman | CloakHQ/CloakBrowser | Trình duyệt chống phát hiện, công cụ bảo mật chung |
| rohitg00/agentmemory | apernet/hysteria | Công cụ proxy mạng, không liên quan đến AI |
| millionco/react-doctor | mattpocock/skills | Danh sách kỹ năng cho kỹ sư, không phải dự án kỹ thuật |
| rasbt/LLMs-from-scratch | anonfaded/FadCam | Công cụ quay video Android, ứng dụng chung |
| datawhalechina/hello-agents | | |
| yikart/AiToEarn | | |
| HKUDS/AI-Trader | | |

> **Lưu ý**: Mặc dù `mattpocock/skills` chứa từ khóa `.claude`, nhưng về bản chất đây là danh sách các kỹ năng mềm cho kỹ sư, không phải dự án công nghệ AI nên bị loại trừ.

---

## Bước 2: Phân loại đa chiều

| Dự án | Danh mục chính | Danh mục phụ |
|-----|---------|---------|
| tinyhumansai/openhuman | 🔧 Công cụ cơ bản AI | 🤖 Tác tử AI |
| rohitg00/agentmemory | 🤖 Tác tử AI/Luồng công việc | 🔍 RAG/Cơ sở kiến thức |
| millionco/react-doctor | 🔧 Công cụ cơ bản AI | |
| rasbt/LLMs-from-scratch | 🧠 Mô hình lớn/Huấn luyện | |
| datawhalechina/hello-agents | 🧠 Mô hình lớn/Huấn luyện | 🤖 Tác tử AI |
| yikart/AiToEarn | 📦 Ứng dụng AI | 🤖 Tác tử AI |
| HKUDS/AI-Trader | 📦 Ứng dụng AI | 🤖 Tác tử AI |
| NousResearch/hermes-agent | 🤖 Tác tử AI/Luồng công việc | |
| shareAI-lab/learn-claude-code | 🔧 Công cụ cơ bản AI | 🤖 Tác tử AI |
| ruvnet/ruflo | 🤖 Tác tử AI/Luồng công việc | |
| CherryHQ/cherry-studio | 📦 Ứng dụng AI | 🤖 Tác tử AI |
| zhayujie/CowAgent | 🤖 Tác tử AI/Luồng công việc | 📦 Ứng dụng AI |
| langgenius/dify | 🤖 Tác tử AI/Luồng công việc | 🔍 RAG/Cơ sở kiến thức |
| open-webui/open-webui | 🔧 Công cụ cơ bản AI | 🔍 RAG/Cơ sở kiến thức |
| ollama/ollama | 🔧 Công cụ cơ bản AI | 🧠 Mô hình lớn/Huấn luyện |
| vllm-project/vllm | 🔧 Công cụ cơ bản AI | 🧠 Mô hình lớn/Huấn luyện |
| huggingface/transformers | 🧠 Mô hình lớn/Huấn luyện | 🔧 Công cụ cơ bản AI |
| jingyaogong/minimind | 🧠 Mô hình lớn/Huấn luyện | |
| milvus-io/milvus | 🔍 RAG/Cơ sở kiến thức | |
| qdrant/qdrant | 🔍 RAG/Cơ sở kiến thức | |
| mem0ai/mem0 | 🔍 RAG/Cơ sở kiến thức | 🤖 Tác tử AI |
| infiniflow/ragflow | 🔍 RAG/Cơ sở kiến thức | 🤖 Tác tử AI |

---

## Bước 3: Báo cáo đầy đủ

---

### 1. Tổng quan hôm nay

Lĩnh vực mã nguồn mở AI hôm nay cho thấy **sự bùng nổ về "cơ sở hạ tầng tác tử thông minh"**: **bộ nhớ bền vững** cho các trợ lý mã hóa AI đã trở thành một vấn đề cốt lõi, các dự án lớp bộ nhớ như `agentmemory` và `claude-mem` thu hút sự chú ý lớn; xuất hiện những người chơi mới trong phân khúc **trợ lý AI cá nhân nhẹ nhàng**, `openhuman` sử dụng Rust nhấn mạnh vào quyền riêng tư và triển khai cục bộ cho một siêu tác tử; hướng **giao dịch tài chính AI** tiếp tục nóng lên, `AI-Trader` và `TradingAgents` đại diện cho sự trưởng thành của các ứng dụng dọc "Agent-Native". Đồng thời, cộng đồng nhà phát triển Trung Quốc hoạt động tích cực trong lĩnh vực giáo dục tác tử (`hello-agents`) và phân tích cổ phiếu miễn phí (`daily_stock_analysis`).

---

### 2. Các dự án nổi bật theo từng chiều

#### 🔧 Công cụ cơ bản AI

| Dự án | Sao | Tăng trong ngày | Mô tả ngắn gọn |
|-----|-------|---------|-----------|
| [mattpocock/skills](https://github.com/mattpocock/skills) | — | +3,867 | **Đã loại trừ**: Danh sách kỹ năng mềm cho kỹ sư, không phải dự án công nghệ AI |
| [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) | 0 | **+1,014** | Siêu tác tử AI cá nhân được xây dựng bằng Rust, tập trung vào triển khai riêng tư và kiến trúc tối giản, là giải pháp thay thế cục bộ cho hệ sinh thái OpenAI |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 60,037 | — | Xây dựng từ đầu hệ thống tác tử giống Claude Code, thực hành tối giản với khẩu hiệu "Bash is all you need" |
| [ollama/ollama](https://github.com/ollama/ollama) | 171,283 | — | Tiêu chuẩn thực tế cho việc chạy các mô hình lớn cục bộ, hôm nay đã hỗ trợ các mô hình tiên tiến như Kimi-K2.5, GLM-5 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 79,803 | — | Công cụ suy luận LLM có thông lượng cao, cơ sở hạ tầng cốt lõi cho Serving cấp sản xuất |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 136,802 | — | Giao diện AI cục bộ thân thiện nhất, điểm truy cập hợp nhất cho Ollama + API OpenAI |
| [millionco/react-doctor](https://github.com/millionco/react-doctor) | 0 | **+788** | Công cụ kiểm tra chất lượng mã React được tạo bởi AI theo thời gian thực, lấp đầy khoảng trống "Tạo mã AI → Kiểm tra mã" |

#### 🤖 Tác tử AI/Luồng công việc

| Dự án | Sao | Tăng trong ngày | Mô tả ngắn gọn |
|-----|-------|---------|-----------|
| [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | 0 | **+1,048** | Giải pháp bộ nhớ bền vững cho tác tử mã hóa AI dựa trên bài kiểm tra hiệu năng thực tế, giải quyết vấn đề mất ngữ cảnh đa phiên làm việc |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 146,851 | — | Tác tử "phát triển" của Nous Research, nhấn mạnh kiến trúc bộ nhớ dài hạn cùng phát triển với người dùng |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 49,740 | — | Nền tảng điều phối tác tử hàng đầu trong hệ sinh thái Claude, hỗ trợ Swarm đa tác tử và cụm tự học |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 44,375 | — | "Trợ lý AI siêu cấp" nội địa, tích hợp đa nền tảng như WeChat/Feishu/DingTalk, giải pháp nhân viên số doanh nghiệp nhẹ nhàng hơn OpenClaw |
| [langgenius/dify](https://github.com/langgenius/dify) | 141,126 | — | Nền tảng phát triển luồng công việc Agent cấp sản xuất, giải pháp kỹ thuật hóa hoàn chỉnh từ RAG đến tác tử đa bước phức tạp |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 42,278 | — | Tác tử AI cá nhân siêu nhẹ do Đại học Hồng Kông phát triển, tiêu chuẩn mới cho tác tử "tối giản" |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 22,164 | — | Nền tảng tự động hóa AI tích hợp ~400 máy chủ MCP, nút quan trọng trong hệ sinh thái MCP |

#### 📦 Ứng dụng AI (Kịch bản dọc)

| Dự án | Sao | Tăng trong ngày | Mô tả ngắn gọn |
|-----|-------|---------|-----------|
| [yikart/AiToEarn](https://github.com/yikart/AiToEarn) | 0 | **+1,282** | Nền tảng tổng hợp thực tế "Kiếm tiền bằng AI", nhắm vào thị trường kinh tế nhà phát triển cho việc kiếm tiền từ AI |
| [HKUDS/AI-Trader](https://github.com/HKUDS/AI-Trader) | 0 | **+229** | Hệ thống "Giao dịch Agent-Native hoàn toàn tự động 100%" do Đại học Hồng Kông ra mắt, vòng lặp khép kín đầu cuối cho AI tài chính |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 45,524 | — | Studio năng suất AI với hơn 300 trợ lý, "dao quân Thụy Sĩ" cho phép truy cập LLM tiên tiến một cách thống nhất |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 35,591 | — | Phân tích chứng khoán A/H/Mỹ thông minh được điều khiển bởi LLM, chạy định kỳ miễn phí, thực hành tối đa "kinh tế học ăn mày" |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | 74,398 | — | Khung giao dịch tài chính LLM đa tác tử, mô hình cộng tác tác tử từ nghiên cứu đầu tư → ra quyết định → thực thi |

#### 🧠 Mô hình lớn/Huấn luyện

| Dự án | Sao | Tăng trong ngày | Mô tả ngắn gọn |
|-----|-------|---------|-----------|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 93,761 | **+772** | Hướng dẫn kinh điển về việc tự xây dựng ChatGPT bằng PyTorch tiếp tục giữ nhiệt, dự án "kinh điển" cho giáo dục nguyên lý LLM |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 49,606 | — | Huấn luyện LLM 64M tham số từ đầu trong 2 giờ, tiêu chuẩn "nhập môn tốc độ cao" cho giáo dục mô hình lớn |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 160,536 | — | Tiêu chuẩn thực tế cho khung định nghĩa mô hình, cơ sở hạ tầng hợp nhất cho văn bản/hình ảnh/âm thanh/đa phương thức |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 7,251 | — | Khung ứng dụng LLM mô-đun hóa trong hệ sinh thái Rust, lựa chọn mới để xây dựng AI hiệu năng cao ở cấp độ hệ thống |

#### 🔍 RAG/Cơ sở kiến thức

| Dự án | Sao | Tăng trong ngày | Mô tả ngắn gọn |
|-----|-------|---------|-----------|
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 75,219 | — | Chụp ngữ cảnh bền vững liên phiên, "middleware bộ nhớ" tương thích hoàn toàn với Claude Code/Codex/Gemini |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 55,523 | — | Lớp bộ nhớ chung cho tác tử AI, cơ sở hạ tầng bộ nhớ từ cá nhân hóa đến học tập dài hạn |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 80,360 | — | Công cụ kết hợp RAG + Agent, giải pháp truy xuất tăng cường thế hệ tiếp theo cho "hiểu tài liệu sâu sắc" |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,256 | — | Cơ sở dữ liệu vector hiệu năng cao trên nền tảng đám mây, cơ sở hạ tầng cho tìm kiếm ANN quy mô lớn |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 31,264 | — | Công cụ tìm kiếm vector hiệu năng cao được xây dựng bằng Rust, cơ sở hạ tầng vector cho AI thế hệ tiếp theo |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 30,845 | — | Chỉ mục tài liệu RAG "không vector, dựa trên suy luận", mô hình mới thách thức tìm kiếm Embedding truyền thống |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 17,199 | — | Mặt phẳng điều khiển bộ nhớ tác tử AI được triển khai chỉ với 6 dòng mã, đơn giản hóa tối đa việc quản lý bộ nhớ |

---

### 3. Phân tích tín hiệu xu hướng

**Danh mục được quan tâm bùng nổ: "Lớp bộ nhớ" và "Ngữ cảnh bền vững" của Tác tử AI**. Hôm nay, `agentmemory` (+1,048), `claude-mem` (75K sao), `mem0` (55K sao) cùng chỉ ra một điểm yếu cốt lõi: việc cô lập phiên làm việc của các trợ lý mã hóa AI hiện tại (Claude Code, Codex, Cursor, v.v.) khiến kiến thức không thể tích lũy, các nhà phát triển khẩn cấp cần **cơ sở hạ tầng bộ nhớ liên phiên**. Điều này đánh dấu sự chuyển đổi quan trọng của hệ sinh thái Agent từ "trí thông minh hội thoại đơn lẻ" sang "trí thông minh tiến hóa dài hạn".

**Ngăn xếp công nghệ/hướng mới nổi**: **Sự thâm nhập của Rust vào cơ sở hạ tầng AI đang tăng tốc** — `openhuman` (AI cá nhân), `qdrant` (tìm kiếm vector), `rig` (khung LLM) đều được xây dựng bằng Rust, nhấn mạnh hiệu năng, bảo mật và triển khai riêng tư; **ứng dụng dọc "Agent-Native"** xuất hiện lần đầu tiên một cách rõ ràng (`AI-Trader` giao dịch hoàn toàn tự động 100%), dự báo Agent tiến hóa từ công cụ chung sang giải pháp vòng lặp khép kín đầu cuối.

**Liên kết sự kiện ngành**: Việc phát hành các mô hình như Claude 4 / Gemini 2.5 Pro với khả năng ngữ cảnh dài đã làm nổi bật khuyết điểm kiến trúc là **"ngữ cảnh dài ≠ bộ nhớ dài hạn"**, thúc đẩy sự bùng nổ của các dự án lớp bộ nhớ; đồng thời, sự mở rộng của hệ sinh thái MCP (Model Context Protocol) (`activepieces` tích hợp ~400 máy chủ) cho thấy việc gọi công cụ theo tiêu chuẩn đã trở thành chìa khóa cho khả năng tương tác của Agent.

---

### 4. Điểm nóng được cộng đồng quan tâm

- **🔥 Lớp bộ nhớ của Tác tử trở thành chiến trường mới**
  `agentmemory` + `claude-mem` + `mem0` tạo thành "bộ ba kiếm khách bộ nhớ", giải quyết vấn đề mất trí nhớ đa phiên của các công cụ như Claude Code/Codex, dự kiến sẽ trở thành thành phần tiêu chuẩn của IDE AI

- **🔥 Trợ lý AI cục bộ nhẹ nhàng thay thế giải pháp đám mây**
  `openhuman` (Rust, +1,014) và `nanobot` (ĐH Hồng Kông, 42K sao) đại diện cho xu hướng "phi OpenAI hóa", tác tử cá nhân tập trung vào quyền riêng tư + kiến trúc tối giản thách thức hệ sinh thái ChatGPT

- **🔥 Giao dịch tài chính AI đầu cuối với vòng lặp khép kín trưởng thành**
  `AI-Trader` (229 hôm nay) + `TradingAgents` (74K) + `daily_stock_analysis` (35K) tạo thành chuỗi hoàn chỉnh "nghiên cứu đầu tư - ra quyết định - thực thi", ứng dụng tài chính Agent-Native bước vào giai đoạn triển khai được

- **🔥 Phổ cập giáo dục Agent của cộng đồng nhà phát triển Trung Quốc**
  `hello-agents` (DataWhale, +599 hôm nay, tổng 48K) và `minimind` (49K) đại diện cho con đường giáo dục AI bản địa hóa "từ đầu", giảm rào cản phát triển tác tử thông minh

- **🔥 "RAG không vector" thách thức mô hình tìm kiếm truyền thống**
  `PageIndex` (30K) đề xuất chỉ mục tài liệu dựa trên suy luận, có khả năng cách mạng hóa kiến trúc phổ biến Embedding + Vector DB, xứng đáng được các nhà lãnh đạo kỹ thuật chú ý

---

---
*Bản tin hôm nay được tạo tự động bởi [agents-radar](https://github.com/duanyytop/agents-radar).*