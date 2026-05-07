# Xu hướng AI mã nguồn mở hàng ngày | 2026-05-07

> Nguồn dữ liệu: GitHub Trending + GitHub Search API | Thời gian tạo: 2026-05-07 00:19 UTC

---

# Xu hướng AI mã nguồn mở hàng ngày | 2026-05-07

---

## Bước 1: Lọc theo mức độ liên quan của AI

**Kết quả lọc danh sách Trending**: Trong số 15 dự án, **12 dự án có liên quan rõ ràng đến AI/ML**, loại bỏ 3 dự án không liên quan đến AI:
- ❌ `docusealco/docuseal` — Công cụ ký điện tử (SaaS đa dụng)
- ❌ `LadybirdBrowser/ladybird` — Dự án trình duyệt độc lập
- ❌ `bwya77/vscode-dark-islands` — Chủ đề VSCode

**Dữ liệu tìm kiếm theo chủ đề**: Tất cả 80 dự án đều liên quan đến AI, không cần lọc.

---

## Bước 2: Hệ thống phân loại

| Chiều | Mô tả |
|:---|:---|
| 🔧 Công cụ cơ bản AI | Framework, SDK, engine suy luận, công cụ phát triển, CLI, tài nguyên API |
| 🤖 Agent/Luồng công việc AI | Framework Agent, điều phối đa agent, luồng công việc tự động, liên quan đến MCP |
| 📦 Ứng dụng AI | Sản phẩm theo kịch bản dọc (tài chính, nghiên cứu, văn phòng, tự động hóa trình duyệt, v.v.) |
| 🧠 Mô hình lớn/Huấn luyện | Trọng số mô hình, framework tiền huấn luyện/tinh chỉnh, triển khai LLM |
| 🔍 RAG/Kho kiến thức | Cơ sở dữ liệu vector, sinh tăng cường truy xuất, lớp bộ nhớ, đồ thị tri thức |

---

## Bước 3: Báo cáo đầy đủ

---

## 1. Tổng quan nhanh hôm nay

Xu hướng AI mã nguồn mở hôm nay cho thấy sự **bùng nổ của cơ sở hạ tầng agent**: `DeepSeek-TUI`, một agent mã hóa terminal bằng Rust, đã dẫn đầu với **+6.175 sao**, cho thấy nhu cầu mạnh mẽ của nhà phát triển đối với các công cụ Agent nhẹ, cục bộ. Hệ sinh thái Claude tiếp tục mở rộng, với `ruflo` (+2.192) và `everything-claude-code` tập trung vào điều phối đa agent và tối ưu hóa hiệu suất. Kho lưu trữ nghiên cứu tài chính chính thức của Anthropic cũng lọt vào danh sách thịnh hành. `deer-flow` của ByteDance, với vai trò là đại diện cho "SuperAgent dài hạn", cùng với `local-deep-research`, chỉ ra xu hướng hợp nhất của **"nghiên cứu sâu + triển khai cục bộ"**. Lĩnh vực tài chính dọc xuất hiện hai dự án là `Kronos` và `dexter`, biến AI cho Tài chính trở thành một điểm nóng mới.

---

## 2. Dự án phổ biến theo từng chiều

### 🔧 Công cụ cơ bản AI

| Dự án | Số sao | Tăng trong ngày | Mô tả |
|:---|:---|:---|:---|
| [DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) | Mới lên hạng | **+6.175** | Agent mã hóa terminal bằng Rust, giao diện TUI cho mô hình DeepSeek, chạy cục bộ không cần cloud |
| [ollama](https://github.com/ollama/ollama) | 170.860 | — | Tiêu chuẩn thực tế cho việc chạy các mô hình lớn cục bộ, hôm nay bổ sung hỗ trợ cho các mô hình tiên tiến như Kimi-K2.5, GLM-5 |
| [vllm](https://github.com/vllm-project/vllm) | 79.205 | — | Engine suy luận LLM thông lượng cao, cơ sở hạ tầng cốt lõi cho triển khai sản xuất |
| [free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources) | Mới lên hạng | +198 | Tổng hợp tài nguyên API LLM miễn phí, giảm rào cản gia nhập cho nhà phát triển |
| [OpenCLI](https://github.com/jackwener/OpenCLI) | 18.989 | — | Hub CLI đa dụng, biến bất kỳ trang web/công cụ nào thành giao diện chuẩn hóa mà Agent AI có thể gọi |
| [Google Workspace CLI](https://github.com/googleworkspace/cli) | 25.839 | — | Công cụ CLI chính thức của Google, tích hợp các Kỹ năng Agent AI, cổng vào tự động hóa văn phòng doanh nghiệp |

### 🤖 Agent/Luồng công việc AI

| Dự án | Số sao | Tăng trong ngày | Mô tả |
|:---|:---|:---|:---|
| [ruflo](https://github.com/ruvnet/ruflo) | Mới lên hạng | **+2.192** | Nền tảng điều phối đa agent hàng đầu trong hệ sinh thái Claude, hỗ trợ cụm thông minh tự học và tích hợp RAG |
| [deer-flow](https://github.com/bytedance/deer-flow) | Mới lên hạng | +337 | SuperAgent dài hạn mã nguồn mở của ByteDance, hỗ trợ sandbox, bộ nhớ, sub-agent, phạm vi nhiệm vụ từ vài phút đến vài giờ |
| [everything-claude-code](https://github.com/affaan-m/everything-claude-code) | 174.653 | — | Hệ thống tối ưu hóa hiệu suất Claude Code, bao gồm bốn khía cạnh: kỹ năng, bản năng, bộ nhớ, bảo mật |
| [OpenHands](https://github.com/OpenHands/OpenHands) | 72.760 | — | Nền tảng phát triển do AI điều khiển, dự án tiêu biểu cho hướng "kỹ sư phần mềm AI" |
| [browser-use](https://github.com/browser-use/browser-use) | 92.520 | — | Cho phép các trang web có thể truy cập bởi các Agent AI, cơ sở hạ tầng tự động hóa trình duyệt |
| [activepieces](https://github.com/activepieces/activepieces) | 22.076 | — | Tự động hóa luồng công việc AI, tích hợp ~400 máy chủ MCP |
| [agent-skills](https://github.com/addyosmani/agent-skills) | Mới lên hạng | +800 | Thư viện kỹ năng kỹ thuật agent mã hóa AI cấp sản xuất, do kỹ sư Google Addy Osmani dẫn đầu |

### 📦 Ứng dụng AI

| Dự án | Số sao | Tăng trong ngày | Mô tả |
|:---|:---|:---|:---|
| [dexter](https://github.com/virattt/dexter) | Mới lên hạng | +666 | Agent tự động nghiên cứu sâu tài chính, đại diện cho Agent theo kịch bản dọc |
| [local-deep-research](https://github.com/LearningCircuit/local-deep-research) | Mới lên hạng | +532 | Hệ thống nghiên cứu sâu cục bộ, Qwen3.6-27B đạt 95% SimpleQA trên 3090, hỗ trợ 10+ công cụ tìm kiếm |
| [Kronos](https://github.com/shiyu-coder/Kronos) | Mới lên hạng | +234 | Mô hình nền ngôn ngữ tài chính thị trường, tiền huấn luyện dữ liệu tài chính chuỗi thời gian |
| [Scrapling](https://github.com/D4Vinci/Scrapling) | Mới lên hạng | **+1.125** | Framework thu thập dữ liệu web thích ứng, cung cấp dữ liệu mạng có cấu trúc cho AI |
| [Cherry Studio](https://github.com/CherryHQ/cherry-studio) | 45.116 | — | Studio năng suất AI, tổng hợp 300+ trợ lý và kết nối đa mô hình |
| [CowAgent](https://github.com/zhayujie/CowAgent) | 44.076 | — | Trợ lý AI siêu cấp dựa trên mô hình lớn, nhẹ hơn OpenClaw, hỗ trợ kết nối đa nền tảng |
| [ppt-master](https://github.com/hugohe3/ppt-master) | 12.233 | — | Tạo PPTX gốc có thể chỉnh sửa bằng AI, không phải render ảnh, ứng dụng sâu trong kịch bản văn phòng |

### 🧠 Mô hình lớn/Huấn luyện

| Dự án | Số sao | Tăng trong ngày | Mô tả |
|:---|:---|:---|:---|
| [transformers](https://github.com/huggingface/transformers) | 160.313 | — | Framework định nghĩa mô hình của HuggingFace, cơ sở hạ tầng cho các mô hình đa phương thức SOTA |
| [LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 70.976 | — | Tinh chỉnh hiệu quả thống nhất cho 100+ LLM/VLM, kết quả ACL 2024 |
| [minimind](https://github.com/jingyaogong/minimind) | 49.024 | — | Huấn luyện LLM 64M tham số từ 0 trong 2 giờ, công cụ hữu ích cho giáo dục và nghiên cứu nguyên lý mô hình lớn |
| [TabPFN](https://github.com/PriorLabs/TabPFN) | Mới lên hạng | +218 | Mô hình nền cho dữ liệu bảng, lấp đầy khoảng trống Foundation Model trong lĩnh vực dữ liệu có cấu trúc |
| [LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 92.058 | — | Triển khai LLM cấp ChatGPT từ đầu, hướng dẫn từng bước bằng PyTorch |
| [stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 220 | — | Thư viện tiền huấn luyện mô hình nền đáng tin cậy, tối giản, có thể mở rộng |

### 🔍 RAG/Kho kiến thức

| Dự án | Số sao | Tăng trong ngày | Mô tả |
|:---|:---|:---|:---|
| [ragflow](https://github.com/infiniflow/ragflow) | 79.829 | — | Engine hợp nhất RAG + Agent, xây dựng lớp ngữ cảnh chất lượng cao cho LLM |
| [mem0](https://github.com/mem0ai/mem0) | 54.937 | — | Lớp bộ nhớ chung cho Agent AI, bộ nhớ dài hạn xuyên phiên |
| [claude-mem](https://github.com/thedotmack/claude-mem) | 72.944 | — | Plugin bộ nhớ phiên Claude Code, tự động chụp-nén-chèn ngữ cảnh |
| [graphify](https://github.com/safishamsi/graphify) | 43.891 | — | Xây dựng đồ thị tri thức mã nguồn, kỹ năng trợ lý mã hóa đa agent |
| [cognee](https://github.com/topoteretes/cognee) | 17.068 | — | Thực hiện mặt phẳng điều khiển bộ nhớ Agent AI chỉ với 6 dòng mã |
| [PageIndex](https://github.com/VectifyAI/PageIndex) | 28.755 | — | Chỉ mục tài liệu RAG dựa trên suy luận không vector, giảm chi phí lưu trữ |
| [LEANN](https://github.com/yichuan-w/LEANN) | 10.965 | — | RAG cho thiết bị cá nhân, tiết kiệm 97% dung lượng lưu trữ, kết quả MLsys2026 |
| [memvid](https://github.com/memvid/memvid) | 15.356 | — | Lớp bộ nhớ đơn tệp không máy chủ, thay thế cho các đường ống RAG phức tạp |

---

## 3. Phân tích tín hiệu xu hướng

**Cơ sở hạ tầng Agent bước vào "giai đoạn bùng nổ"**. Các dự án liên quan đến Agent chiếm 7/12 trong danh sách thịnh hành hôm nay, và thể hiện **ba lớp phân hóa**: điều phối cấp thấp (cụm đa agent `ruflo`), framework cấp trung (nhiệm vụ dài hạn `deer-flow`), kỹ năng cấp cao (thực hành tốt nhất kỹ thuật `agent-skills`). Điều này liên quan trực tiếp đến việc phát hành các mô hình lớn với ngữ cảnh dài và khả năng gọi công cụ như Claude 4 / Gemini 2.5 — sự tràn ra của năng lực mô hình thúc đẩy nhu cầu xây dựng cơ sở hạ tầng Agent.

**"Ưu tiên cục bộ" trở thành lựa chọn kiến trúc rõ ràng**. `DeepSeek-TUI`, `local-deep-research`, `LEANN` cùng nhấn mạnh chạy cục bộ, bảo vệ quyền riêng tư, triển khai chi phí thấp, phản ánh cả hai mối lo ngại về quyền sở hữu dữ liệu và chi phí suy luận của doanh nghiệp. Việc sử dụng ngôn ngữ Rust trong các công cụ terminal ( `DeepSeek-TUI`, `Google Workspace CLI`) cũng đáng chú ý, với lợi thế về an toàn bộ nhớ và hiệu suất phù hợp với kịch bản gọi tần suất cao của Agent.

**AI Tài chính lần đầu hình thành cụm dọc**. `dexter` (nghiên cứu sâu tài chính), `Kronos` (mô hình ngôn ngữ tài chính), kho lưu trữ chính thức `financial-services` của Anthropic cùng lọt vào danh sách thịnh hành hôm nay, cộng với mức độ phổ biến cao của OpenBB trong tìm kiếm theo chủ đề, cho thấy sự thẩm thấu của LLM vào lĩnh vực tài chính có giá trị cao đã từ giai đoạn xác minh khái niệm chuyển sang giai đoạn công cụ hóa.

**Hệ sinh thái MCP (Model Context Protocol) mở rộng một cách ngầm định**. `activepieces` ghi rõ ~400 máy chủ MCP, `zilliztech/claude-context` cung cấp MCP tìm kiếm mã nguồn, MCP đang chuyển từ tiêu chuẩn giao thức thành cơ sở hạ tầng thực tế cho khả năng tương tác giữa các agent.

---

## 4. Điểm nóng cộng đồng quan tâm

- **🔥 `DeepSeek-TUI`: Mô hình Rust cho Agent terminal**
  Sự tăng trưởng bùng nổ với +6.175 sao trong một ngày, chứng minh nhà phát triển khao khát một agent mã hóa "không cần mở trình duyệt, không cần dựa vào cloud". Sự kết hợp Rust + TUI có thể trở thành bộ công nghệ tiêu chuẩn cho các công cụ CLI AI thế hệ tiếp theo.

- **🔥 `ruflo` vs `deer-flow`: Cuộc đối đầu Trung-Mỹ trong điều phối đa agent**
  `ruflo` (hệ sinh thái Claude) do cộng đồng thúc đẩy và `deer-flow` chính thức của ByteDance cùng lọt vào danh sách thịnh hành hôm nay, lần lượt đại diện cho hai con đường "đổi mới cộng đồng mã nguồn mở" và "kỹ thuật hóa bởi các ông lớn", một cục diện cạnh tranh về điều phối đa agent đang hình thành.

- **🔥 `local-deep-research`: Dân chủ hóa nghiên cứu bằng GPU tiêu dùng**
  Giải pháp định lượng chạy 95% SimpleQA trên 3090, kết hợp với 10+ công cụ tìm kiếm và hỗ trợ tài liệu riêng tư, có thể cạnh tranh với các sản phẩm thương mại có tường phí như Perplexity, ChatGPT Search.

- **🔥 `TabPFN`: Đột phá Mô hình nền cho dữ liệu bảng**
  Dữ liệu có cấu trúc từ lâu đã bị LLM bỏ qua, sự xuất hiện của `TabPFN` lấp đầy khoảng trống quan trọng, quá trình AI hóa các kịch bản phân tích dữ liệu doanh nghiệp (BI, quản lý rủi ro, vận hành) có thể sẽ tăng tốc.

- **🔥 Anthropic chính thức gia nhập hệ sinh thái tài chính**
  Việc phát hành kho lưu trữ `financial-services` đánh dấu Anthropic mở rộng từ nhà cung cấp mô hình đa dụng sang giải pháp cho ngành dọc, tạo hiệu ứng cộng hưởng mã nguồn mở - thương mại với `dexter`, `Kronos`.

---

---
*Báo cáo hàng ngày này được tạo tự động bởi [agents-radar](https://github.com/duanyytop/agents-radar).*