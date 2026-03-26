# Xu hướng AI Mã Nguồn Mở Hàng Ngày 2026-03-26

> Nguồn dữ liệu: GitHub Trending + GitHub Search API | Thời gian tạo: 2026-03-26 00:11 UTC

---

# Xu hướng AI Mã Nguồn Mở Hàng Ngày | 2026-03-26

---

## Bước 1: Lọc theo Độ Liên quan của AI

**Kết quả sàng lọc bảng xếp hạng Trending**: Trong số 12 kho lưu trữ, **10 kho có liên quan đến AI**, loại trừ 2 dự án không liên quan đến AI sau:
- ❌ `pascalorg/editor` — Trình chỉnh sửa kiến trúc 3D (công cụ thiết kế thuần túy)
- ❌ `Crosstalk-Solutions/project-nomad` — Bộ công cụ máy tính sinh tồn ngoại tuyến (bộ công cụ phần cứng, AI chỉ là chức năng bổ sung)

**Kết quả tìm kiếm chủ đề**: 80 kho lưu trữ đều được giữ lại, tất cả đều liên quan đến AI/ML.

---

## Bước 2: Hệ Thống Phân Loại

| Chiều | Định nghĩa | Số lượng dự án hôm nay |
|:---|:---|:---|
| 🔧 Công cụ Cơ bản AI | SDK gọi mô hình, công cụ suy luận, cổng kết nối, công cụ phát triển, CLI | 12 |
| 🤖 Agent/Luồng làm việc AI | Khung Agent, điều phối đa Agent, luồng làm việc tự động, MCP | 18 |
| 📦 Ứng dụng AI | Sản phẩm cho các tình huống dọc (tài chính, bảo mật, tạo nội dung, v.v.) | 8 |
| 🧠 Mô hình Lớn/Huấn luyện | Triển khai mô hình, khung huấn luyện, tinh chỉnh, đánh giá | 14 |
| 🔍 RAG/Cơ sở tri thức | Cơ sở dữ liệu vector, tăng cường truy xuất, lớp bộ nhớ, xử lý tài liệu | 16 |

---

## Bước 3: Báo cáo Hoàn chỉnh

---

### 1. Tổng quan Hôm nay

Lĩnh vực AI mã nguồn mở hôm nay cho thấy xu hướng **"Cuộc đua hạ tầng Agent bùng nổ"**: `deer-flow` do ByteDance mã nguồn mở đã vươn lên dẫn đầu với 3.787 sao, định vị "SuperAgent harness" của nó đánh dấu sự tham gia chính thức của các công ty lớn vào tầng hệ điều hành Agent; đồng thời, sự bùng nổ của `ruflo` (nền tảng điều phối hệ sinh thái Claude) và `last30days-skill` (Agent nghiên cứu đa nền tảng) phản ánh nhu cầu cấp thiết của nhà phát triển đối với **điều phối đa Agent ở cấp độ sản xuất**. RAG/lớp bộ nhớ tiếp tục nóng, với `supermemory` và `cognee` đại diện cho hai lộ trình kỹ thuật "cơ chế bộ nhớ tốc độ cao có khả năng mở rộng" và "biểu đồ tri thức 6 dòng mã". Đáng chú ý, **các plugin cho Claude Code** (`claude-subconscious`, `claude-mem`) đã hình thành một phân khúc thị trường riêng biệt, và việc cải tạo "tầng ý thức" của trợ lý lập trình AI đã trở thành một điểm nóng mới.

---

### 2. Các Dự án Nổi bật theo Từng Chiều

#### 🔧 Công cụ Cơ bản AI

| Dự án | Sao | Tăng trưởng hôm nay | Mô tả ngắn gọn |
|:---|:---|:---|:---|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 3.787 | +3.787 | SuperAgent harness do ByteDance mã nguồn mở, tích hợp sandbox, bộ nhớ, công cụ, trợ lý con và cổng tin nhắn, hỗ trợ xử lý các tác vụ phức tạp từ vài phút đến vài giờ |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | Rất nhiều | +301 | SDK Python và máy chủ proxy thống nhất 100+ API LLM, theo dõi chi phí cấp doanh nghiệp, hàng rào bảo vệ và cân bằng tải |
| [ollama/ollama](https://github.com/ollama/ollama) | 166.156 | - | Công cụ tiêu chuẩn để chạy cục bộ các mô hình như Kimi-K2.5, GLM-5, DeepSeek, hỗ trợ mô hình cập nhật liên tục |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 74.326 | - | Công cụ suy luận và phục vụ LLM có thông lượng cao, hiệu quả bộ nhớ |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 98.271 | - | API Dữ liệu Web biến toàn bộ trang web thành dữ liệu sẵn sàng cho LLM, tiêu chuẩn cho quy trình RAG |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 84.428 | - | Cho phép các trang web có thể truy cập được bởi các Agent AI, tiêu chuẩn thực tế cho tự động hóa trình duyệt |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6.663 | - | Khung phát triển ứng dụng LLM mô-đun hóa cho hệ sinh thái Rust |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 11.293 | - | Thư viện tích hợp LLM cấp doanh nghiệp cho Java, hỗ trợ gốc MCP và RAG |

#### 🤖 Agent/Luồng làm việc AI

| Dự án | Sao | Tăng trưởng hôm nay | Mô tả ngắn gọn |
|:---|:---|:---|:---|
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 1.174 | +1.174 | Nền tảng điều phối Agent hàng đầu cho hệ sinh thái Claude, hỗ trợ cụm phân tán, tích hợp RAG và kết nối gốc với Claude Code |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 1.341 | +1.341 | Agent nghiên cứu đa nguồn trên Reddit/X/YouTube/HN/Polymarket, tạo tóm tắt có căn cứ |
| [letta-ai/claude-subconscious](https://github.com/letta-ai/claude-subconscious) | 71 | +71 | Thêm lớp "tiềm thức" cho Claude Code, thử nghiệm tích hợp IDE công nghệ bộ nhớ Letta |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21.420 | - | Nền tảng tự động hóa luồng công việc AI hỗ trợ ~400 máy chủ MCP |
| [trycua/cua](https://github.com/trycua/cua) | 13.269 | - | Cơ sở hạ tầng mã nguồn mở cho Agent Sử dụng Máy tính (Computer-Use Agents), hỗ trợ điều khiển máy tính để bàn macOS/Linux/Windows |
| [e2b-dev/E2B](https://github.com/e2b-dev/E2B) | 11.435 | - | Môi trường sandbox an toàn cho các Agent cấp doanh nghiệp, cung cấp quyền truy cập vào các công cụ thế giới thực |
| [alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox) | 9.296 | - | Sandbox chạy AI Agent an toàn, nhanh chóng và có khả năng mở rộng, được Alibaba mã nguồn mở |
| [crestalnetwork/intentkit](https://github.com/crestalnetwork/intentkit) | 6.499 | - | Cụm Agent đám mây tự lưu trữ, quản lý các đội Agent AI hợp tác |

#### 📦 Ứng dụng AI

| Dự án | Sao | Tăng trưởng hôm nay | Mô tả ngắn gọn |
|:---|:---|:---|:---|
| [FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2) | 1.065 | +1.065 | Luồng công việc tạo nội dung và kiếm tiền "kiếm tiền trực tuyến tự động" (cần lưu ý rủi ro tuân thủ) |
| [usestrix/strix](https://github.com/usestrix/strix) | 102 | +102 | Agent bảo mật mã nguồn mở, phát hiện và khắc phục lỗ hổng ứng dụng tự động |
| [hsliuping/TradingAgents-CN](https://github.com/hsliuping/TradingAgents-CN) | 449 | +449 | Khung giao dịch tài chính tiếng Trung dựa trên LLM đa Agent, phiên bản tăng cường tiếng Trung của TradingAgents |
| [saturndec/waoowaoo](https://github.com/saturndec/waoowaoo) | 10.407 | - | Nền tảng sản xuất phim và truyền hình AI toàn diện công nghiệp, quy trình làm việc tiêu chuẩn Hollywood từ video ngắn đến phim người thật |
| [ruvnet/RuView](https://github.com/ruvnet/RuView) | 1.082 | +1.082 | Hệ thống DensePose biến tín hiệu WiFi thành ước tính tư thế người theo thời gian thực, giám sát dấu hiệu sinh tồn (không cần camera) |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 63.569 | - | Nền tảng dữ liệu tài chính dành cho nhà phân tích, nhà nghiên cứu định lượng và Agent AI |
| [deepfakes/faceswap](https://github.com/deepfakes/faceswap) | 55.072 | - | Phần mềm Deepfakes mã nguồn mở, dự án kinh điển về thị giác AI |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | 54.988 | - | Phiên bản mới nhất của khung phát hiện đối tượng YOLO, cơ sở hạ tầng thị giác AI |

#### 🧠 Mô hình Lớn/Huấn luyện

| Dự án | Sao | Tăng trưởng hôm nay | Mô tả ngắn gọn |
|:---|:---|:---|:---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 43.705 | - | Hướng dẫn tối giản để huấn luyện GPT 64M tham số từ 0 trong 2 giờ, tiêu chuẩn giáo dục mô hình lớn |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 89.241 | - | Hướng dẫn uy tín để triển khai dần LLM giống ChatGPT bằng PyTorch |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 69.058 | - | Khung huấn luyện hiệu quả và thống nhất cho hơn 100 LLM/VLM (ACL 2024) |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 58.196 | - | Giao diện Web để huấn luyện và chạy cục bộ các mô hình như Qwen, DeepSeek |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 6.796 | - | Nền tảng đánh giá mô hình lớn hỗ trợ hơn 100 bộ dữ liệu |
| [BrainBlend-AI/atomic-agents](https://github.com/BrainBlend-AI/atomic-agents) | 5.812 | - | Khung xây dựng Agent AI nguyên tử, nhấn mạnh sự kết hợp mô-đun |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4.027 | - | Khóa học suy luận LLM trên Apple Silicon, triển khai vLLM + Qwen từ đầu |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 306 | - | Công cụ suy luận LLM trên thiết bị với lượng tử hóa X-Bit |

#### 🔍 RAG/Cơ sở tri thức

| Dự án | Sao | Tăng trưởng hôm nay | Mô tả ngắn gọn |
|:---|:---|:---|:---|
| [supermemoryai/supermemory](https://github.com/supermemoryai/supermemory) | 810 | +810 | Cơ chế bộ nhớ tốc độ cao có khả năng mở rộng, định vị là "API Bộ nhớ của Kỷ nguyên AI" |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 47.985 | - | Nền tảng tài liệu Agent và OCR hàng đầu, cơ sở hạ tầng cốt lõi cho RAG |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 76.130 | - | Công cụ truy xuất tăng cường tạo sinh kết hợp RAG tiên tiến và khả năng của Agent |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 14.628 | - | Công cụ biểu đồ tri thức cho phép Agent AI có bộ nhớ chỉ với 6 dòng mã |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 51.051 | - | Lớp bộ nhớ phổ quát cho Agent AI, bộ nhớ dài hạn liên tục theo phiên |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 40.605 | - | Plugin bộ nhớ tự động chụp phiên Claude Code, nén và đưa ngữ cảnh vào |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 22.938 | - | Giải pháp lập chỉ mục tài liệu RAG dựa trên suy luận, không cần vector |
| [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | 10.368 | - | RAG trên thiết bị với mức tiết kiệm dung lượng lưu trữ 97%, kết quả từ MLsys2026 |

---

### 3. Phân tích Tín hiệu Xu hướng

**Bùng nổ tầng hệ điều hành Agent**: Tín hiệu rõ rệt nhất hôm nay là sự trỗi dậy của khái niệm **"Agent Harness/Orchestration"** (Điều phối/Quản lý Agent). Định vị "SuperAgent harness" của `deer-flow` từ ByteDance, môi trường chạy an toàn `OpenSandbox` của Alibaba, và điều phối cụm phân tán `ruflo`, tất cả đều chỉ ra một kết luận: **khả năng của Agent đơn lẻ đã dần trưởng thành, và trọng tâm cộng đồng đang chuyển sang cơ sở hạ tầng cộng tác cho đa Agent**. Điều này liên quan trực tiếp đến việc quảng bá hệ sinh thái MCP (Model Context Protocol) gần đây của Anthropic — `activepieces` rõ ràng hỗ trợ ~400 máy chủ MCP, và `langchain4j` cũng đã bổ sung hỗ trợ MCP.

**Hệ sinh thái plugin Claude Code hình thành**: Sự xuất hiện của các dự án như `claude-subconscious` (lớp tiềm thức), `claude-mem` (nén bộ nhớ), `ralph-claude-code` (vòng lặp phát triển tự động), cho thấy Claude Code đang tiến hóa từ "trợ lý lập trình" thành **một nền tảng phát triển AI có khả năng mở rộng**, và các nhà phát triển đang bắt đầu xây dựng các tiện ích "tăng cường nhận thức" cho nó.

**Phân kỳ lộ trình kỹ thuật "RAG không vector"**: "Vectorless, Reasoning-based RAG" được đề xuất bởi `PageIndex` và giải pháp nén cực đoan của `LEANN` phản ánh sự suy ngẫm của cộng đồng về chi phí và sự phức tạp của cơ sở dữ liệu vector, và truy xuất tăng cường tạo sinh có thể đang bước vào **thời đại hậu cơ sở dữ liệu vector**.

---

### 4. Các Điểm Nóng Được Cộng đồng Quan tâm

- **🔥 `deer-flow` (ByteDance)** — Công ty lớn lần đầu tiên mã nguồn mở một khung hệ điều hành Agent hoàn chỉnh, thiết kế toàn diện bao gồm sandbox + bộ nhớ + trợ lý con + cổng tin nhắn, có khả năng định hình lại cục diện Agent mã nguồn mở
- **🔥 `ruflo` + `last30days-skill`** — Sự bùng nổ song hành của hệ sinh thái Claude và Agent nghiên cứu đa nền tảng, xác nhận tính khả thi của "thị trường kỹ năng Agent chuyên nghiệp"
- **🔥 `supermemory` vs `cognee`** — Cạnh tranh trực diện giữa hai lộ trình kỹ thuật lớp bộ nhớ "ưu tiên tốc độ" và "chiều sâu biểu đồ tri thức"
- **⚠️ Tranh cãi đạo đức của `MoneyPrinterV2`** — Sự phổ biến của các ứng dụng dạng "kiếm tiền tự động" nhắc nhở về tính cấp bách của việc quản trị các trang trại nội dung AI và công cụ tạo thông tin rác
- **🔬 `RuView` (WiFi DensePose)** — Mã hóa mã nguồn mở công nghệ nhận dạng cơ thể người không cần camera, sự đổi mới giao thoa giữa tính toán riêng tư và nhận thức thông minh

---

*Thời gian báo cáo được tạo: 2026-03-26*
*Nguồn dữ liệu: GitHub Trending & Search API*

---
*Báo cáo hàng ngày này được tạo tự động bởi [agents-radar](https://github.com/duanyytop/agents-radar).*