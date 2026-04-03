# Xu hướng AI mã nguồn mở hàng ngày | 03-04-2026

> Nguồn dữ liệu: GitHub Trending + GitHub Search API | Thời gian tạo: 03-04-2026 00:11 UTC

---

# Xu hướng AI mã nguồn mở hàng ngày | 03-04-2026

---

## Bước 1: Sàng lọc mức độ liên quan đến AI

**Kết quả sàng lọc bảng xếp hạng Trending** (4 vào 3):
| Dự án | Mức độ liên quan đến AI | Quyết định |
|:---|:---|:---|
| openscreen | ❌ Công cụ quay màn hình | Loại bỏ |
| **oh-my-codex** | ✅ Khung tăng cường trợ lý lập trình AI | **Giữ lại** |
| **system_prompts_leaks** | ✅ Nghiên cứu prompt hệ thống cho mô hình lớn | **Giữ lại** |
| sherlock | ❌ Công cụ OSINT mạng xã hội | Loại bỏ |

**Tìm kiếm theo chủ đề**: Tất cả 80 dự án đều liên quan đến AI/ML, tất cả đều được giữ lại.

---

## Bước 2: Hệ thống phân loại

| Chiều | Số lượng dự án | Đặc điểm cốt lõi |
|:---|:---|:---|
| 🔧 Công cụ nền tảng AI | 18 | Khung, SDK, công cụ suy luận, công cụ CLI |
| 🤖 Tác tử/Luồng công việc AI | 15 | Khung tác tử, hợp tác đa tác tử, điều phối tự động |
| 📦 Ứng dụng AI | 12 | Sản phẩm theo kịch bản dọc, ứng dụng người dùng cuối |
| 🧠 Mô hình lớn/Huấn luyện | 16 | Tiền huấn luyện, tinh chỉnh, đánh giá, triển khai mô hình |
| 🔍 RAG/Kho kiến thức | 19 | Cơ sở dữ liệu vector, tăng cường truy xuất, lớp bộ nhớ |

---

## Bước 3: Báo cáo đầy đủ

### 1. Tổng quan nhanh hôm nay

Bảng xếp hạng GitHub Trending hôm nay cho thấy sự bùng nổ của **chuỗi công cụ lập trình AI**: `oh-my-codex` dẫn đầu với 2867 sao mới, đánh dấu sự gia tăng mạnh mẽ nhu cầu về **hệ sinh thái lớp tăng cường** cho các trợ lý lập trình AI như Codex/Claude Code. Đồng thời, sự quan tâm liên tục đến `system_prompts_leaks` (+306) phản ánh sự tò mò sâu sắc của cộng đồng đối với **kỹ thuật prompt và cơ chế căn chỉnh** của mô hình lớn. Về phía tìm kiếm theo chủ đề, **cơ sở hạ tầng tác tử** (giao thức MCP, môi trường sandbox, lớp bộ nhớ) và **RAG cấp doanh nghiệp** là hai trục chính của các dự án hoạt động trong 7 ngày qua, cho thấy các ứng dụng AI đang chuyển từ nguyên mẫu sang sẵn sàng cho sản xuất.

---

### 2. Dự án nổi bật theo từng chiều

#### 🔧 Công cụ nền tảng AI

| Dự án | Số sao | Sao mới hôm nay | Mô tả ngắn gọn |
|:---|:---|:---|:---|
| [**oh-my-codex**](https://github.com/Yeachan-Heo/oh-my-codex) | 2,867 | ⭐+2,867 | **Nóng nhất hôm nay**: Khung nguồn mở để thêm các chức năng tăng cường như hooks, đội tác tử, HUD cho Codex/Claude Code, lấp đầy khoảng trống trong hệ sinh thái trợ lý lập trình AI. |
| [**ollama**](https://github.com/ollama/ollama) | 166,846 | - | Tiêu chuẩn thực tế cho việc chạy các mô hình lớn cục bộ, hôm nay đã thêm hỗ trợ cho các mô hình tiên tiến như Kimi-K2.5, GLM-5, MiniMax. |
| [**vllm**](https://github.com/vllm-project/vllm) | 75,030 | - | Công cụ suy luận LLM có thông lượng cao, cơ sở hạ tầng cốt lõi cho triển khai môi trường sản xuất. |
| [**langchain-ai/langchain**](https://github.com/langchain-ai/langchain) | 132,133 | - | Đổi thương hiệu từ "Khung LLM" thành "Nền tảng kỹ thuật tác tử", phản ánh sự thay đổi trọng tâm chiến lược. |
| [**open-webui/open-webui**](https://github.com/open-webui/open-webui) | 129,714 | - | Giao diện AI thân thiện hỗ trợ nhiều backend (Ollama/OpenAI API), giảm ngưỡng triển khai cục bộ. |
| [**firecrawl/firecrawl**](https://github.com/firecrawl/firecrawl) | 103,128 | - | API dữ liệu web cho Tác tử AI, giải quyết các điểm khó khăn cốt lõi của Tác tử trong việc lấy dữ liệu web sạch. |

#### 🤖 Tác tử/Luồng công việc AI

| Dự án | Số sao | Sao mới hôm nay | Mô tả ngắn gọn |
|:---|:---|:---|:---|
| [**shareAI-lab/learn-claude-code**](https://github.com/shareAI-lab/learn-claude-code) | 47,223 | - | "Bash là tất cả những gì bạn cần" – Dự án mang tính giáo dục để xây dựng một harness tác tử theo phong cách Claude Code từ đầu. |
| [**everything-claude-code**](https://github.com/affaan-m/everything-claude-code) | 133,570 | - | Hệ thống tối ưu hóa hiệu suất tác tử, bao gồm các khía cạnh kỹ năng, bản năng, bộ nhớ, bảo mật, hỗ trợ bộ công cụ Claude Code/Codex/Cursor. |
| [**activepieces/activepieces**](https://github.com/activepieces/activepieces) | 21,530 | - | Nền tảng tự động hóa luồng công việc AI tích hợp ~400 máy chủ MCP, người tập hợp hệ sinh thái MCP. |
| [**trycua/cua**](https://github.com/trycua/cua) | 13,365 | - | Cơ sở hạ tầng mã nguồn mở cho Tác tử Sử dụng Máy tính (Computer-Use Agent), cung cấp môi trường sandbox đa nền tảng và tiêu chuẩn đánh giá. |
| [**e2b-dev/E2B**](https://github.com/e2b-dev/E2B) | 11,552 | - | Môi trường chạy tác tử cấp doanh nghiệp an toàn, sandbox trên đám mây hỗ trợ chuỗi công cụ thực tế. |
| [**alibaba/OpenSandbox**](https://github.com/alibaba/OpenSandbox) | 9,698 | - | Sandbox tác tử mã nguồn mở của Alibaba, nhấn mạnh tính bảo mật, tốc độ và khả năng mở rộng. |
| [**jackwener/opencli**](https://github.com/jackwener/opencli) | 11,479 | - | Chuyển đổi bất kỳ trang web/ứng dụng Electron/nhị phân cục bộ nào thành CLI tiêu chuẩn hóa, tạo lớp khám phá công cụ thống nhất cho Tác tử AI. |

#### 📦 Ứng dụng AI

| Dự án | Số sao | Sao mới hôm nay | Mô tả ngắn gọn |
|:---|:---|:---|:---|
| [**siddharthvaddem/openscreen**](https://github.com/siddharthvaddem/openscreen) | 2,573 | ⭐+2,573 | ❌ Đã loại bỏ: Không liên quan đến AI (công cụ quay màn hình) |
| [**langgenius/dify**](https://github.com/langgenius/dify) | 135,526 | - | Nền tảng phát triển luồng công việc tác tử cấp sản xuất, giải pháp một cửa từ nguyên mẫu đến triển khai. |
| [**CherryHQ/cherry-studio**](https://github.com/CherryHQ/cherry-studio) | 42,792 | - | Bộ công cụ năng suất AI tích hợp hơn 300 trợ lý, hỗ trợ tác tử tự chủ và truy cập mô hình thống nhất. |
| [**zhayujie/chatgpt-on-wechat**](https://github.com/zhayujie/chatgpt-on-wechat) | 42,720 | - | Trợ lý AI siêu đa nền tảng (CowAgent), nhẹ hơn OpenClaw, hỗ trợ tư duy chủ động và lập kế hoạch nhiệm vụ. |
| [**iOfficeAI/AionUi**](https://github.com/iOfficeAI/AionUi) | 20,857 | - | Ứng dụng cộng tác cục bộ 24/7, hỗ trợ giao diện thống nhất cho các công cụ lập trình AI chính như Gemini CLI, Claude Code, Codex. |
| [**saturndec/waoowaoo**](https://github.com/saturndec/waoowaoo) | 10,762 | - | Nền tảng sản xuất phim và truyền hình AI cấp công nghiệp, quy trình làm việc tiêu chuẩn Hollywood từ phim ngắn đến phim người đóng. |

#### 🧠 Mô hình lớn/Huấn luyện

| Dự án | Số sao | Sao mới hôm nay | Mô tả ngắn gọn |
|:---|:---|:---|:---|
| [**system_prompts_leaks**](https://github.com/asgeirtj/system_prompts_leaks) | 306 | ⭐+306 | Liên tục theo dõi và trích xuất các prompt hệ thống cho các mô hình tiên tiến như GPT-5.4/5.3, Claude Opus 4.6, Gemini 3.1, là tài liệu tham khảo quan trọng cho nghiên cứu kỹ thuật prompt. |
| [**huggingface/transformers**](https://github.com/huggingface/transformers) | 158,707 | - | Khung định nghĩa mô hình đa phương thức, cơ sở hạ tầng thống nhất cho văn bản/hình ảnh/âm thanh/đa phương thức. |
| [**rasbt/LLMs-from-scratch**](https://github.com/rasbt/LLMs-from-scratch) | 89,852 | - | Hướng dẫn PyTorch để triển khai LLM theo phong cách ChatGPT từ đầu, dự án tiêu chuẩn trong lĩnh vực giáo dục. |
| [**hiyouga/LlamaFactory**](https://github.com/hiyouga/LlamaFactory) | 69,405 | - | Khung tinh chỉnh hiệu quả thống nhất cho hơn 100 LLM/VLM (ACL 2024), công cụ quan trọng cho việc thích ứng nội địa hóa. |
| [**jingyaogong/minimind**](https://github.com/jingyaogong/minimind) | 45,418 | - | Huấn luyện GPT 64M tham số từ đầu trong 2 giờ, triển khai khả thi tối thiểu cho giáo dục mô hình lớn. |
| [**open-compass/opencompass**](https://github.com/open-compass/opencompass) | 6,828 | - | Nền tảng đánh giá LLM hỗ trợ hơn 100 bộ dữ liệu, bao gồm các mô hình chính trong và ngoài nước. |

#### 🔍 RAG/Kho kiến thức

| Dự án | Số sao | Sao mới hôm nay | Mô tả ngắn gọn |
|:---|:---|:---|:---|
| [**infiniflow/ragflow**](https://github.com/infiniflow/ragflow) | 76,942 | - | Công cụ sinh tăng cường truy xuất kết hợp khả năng RAG và Tác tử tiên tiến, xây dựng lớp ngữ cảnh chất lượng cao cho LLM. |
| [**mem0ai/mem0**](https://github.com/mem0ai/mem0) | 51,804 | - | Lớp bộ nhớ phổ quát cho Tác tử AI, giải quyết các điểm khó khăn cốt lõi về ngữ cảnh dài hạn và cá nhân hóa. |
| [**thedotmack/claude-mem**](https://github.com/thedotmack/claude-mem) | 44,691 | - | Plugin bộ nhớ dành riêng cho Claude Code, tự động nắm bắt, nén và chèn ngữ cảnh hội thoại. |
| [**milvus-io/milvus**](https://github.com/milvus-io/milvus) | 43,582 | - | Cơ sở dữ liệu vector hiệu suất cao, đám mây gốc, tiêu chuẩn ngành cho tìm kiếm ANN có thể mở rộng. |
| [**run-llama/llama_index**](https://github.com/run-llama/llama_index) | 48,243 | - | Tiến hóa từ "Khung RAG" thành "Nền tảng Tác tử Tài liệu và OCR", nâng cấp định vị. |
| [**meilisearch/meilisearch**](https://github.com/meilisearch/meilisearch) | 56,919 | - | Công cụ tìm kiếm lai AI tốc độ cao, cung cấp khả năng tìm kiếm cắm và chạy cho các trang web và ứng dụng. |
| [**qdrant/qdrant**](https://github.com/qdrant/qdrant) | 29,996 | - | Cơ sở dữ liệu vector hiệu suất cao, quy mô lớn, công cụ tìm kiếm vector cho AI thế hệ tiếp theo. |
| [**topoteretes/cognee**](https://github.com/topoteretes/cognee) | 14,872 | - | Công cụ kiến thức xây dựng bộ nhớ tác tử AI bằng 6 dòng mã, thiết kế API cực kỳ đơn giản. |

---

### 3. Phân tích tín hiệu xu hướng

**Lĩnh vực quan tâm bùng nổ: Hệ sinh thái "lớp tăng cường" cho trợ lý lập trình AI**

2867 sao mới của `oh-my-codex` hôm nay đã hé lộ một tín hiệu quan trọng: các nhà phát triển không còn hài lòng với khả năng mặc định của các công cụ lập trình AI gốc (Codex, Claude Code, Cursor), mà đang khẩn thiết tìm kiếm **khung tăng cường có thể mở rộng** – hỗ trợ các chức năng cao cấp như hooks tùy chỉnh, hợp tác đa tác tử, trực quan hóa HUD, v.v. Điều này tương tự như con đường bùng nổ của hệ sinh thái plugin VS Code vào năm 2023-2024, đánh dấu sự tiến hóa của các công cụ lập trình AI từ "công cụ đơn lẻ" sang "hệ sinh thái nền tảng".

**Ngăn xếp công nghệ mới nổi: Chuẩn hóa MCP và sandbox tác tử cho sản xuất**

Sự hoạt động của các dự án như `activepieces` (~400 máy chủ MCP), `trycua/cua` (cơ sở hạ tầng Tác tử Sử dụng Máy tính), `alibaba/OpenSandbox` cho thấy **Giao thức Ngữ cảnh Mô hình (MCP)** đang nhanh chóng trở thành tiêu chuẩn thực tế cho tương tác giữa tác tử và công cụ bên ngoài, trong khi **sandbox bảo mật** đã trở thành "thành phần bắt buộc cho sản xuất" thay vì "thành phần tùy chọn". Xu hướng này liên quan trực tiếp đến việc Anthropic quảng bá chính thức MCP gần đây và nhu cầu cứng nhắc của khách hàng doanh nghiệp về bảo mật tác tử.

**Liên hệ với các sự kiện ngành**

Sự quan tâm liên tục đến `system_prompts_leaks` phản ánh sự ra mắt dày đặc gần đây của các mô hình như GPT-5.4, Claude Opus 4.6, Gemini 3.1, đưa sự quan tâm của cộng đồng đối với **cơ chế hoạt động nội bộ của mô hình lớn** (prompt hệ thống, chiến lược căn chỉnh, giới hạn năng lực) lên mức cao mới. Đồng thời, sự hỗ trợ nhanh chóng của `ollama` cho Kimi-K2.5, GLM-5, MiniMax cho thấy tốc độ tích hợp của cộng đồng mã nguồn mở đối với **mô hình lớn của Trung Quốc** đang bắt kịp các mô hình châu Âu và Mỹ truyền thống.

---

### 4. Điểm nóng được cộng đồng quan tâm

- **🔥 `oh-my-codex` —— Thời khắc "Oh My Zsh" của trợ lý lập trình AI**
  Tương tự như Oh My Zsh trong hệ sinh thái shell, dự án này có tiềm năng trở thành khung tăng cường được ưa chuộng nhất cho người dùng Codex/Claude Code, những người đóng góp sớm có cơ hội xác định tiêu chuẩn plugin.

- **🛡️ Tam giác cạnh tranh sandbox tác tử AI: `trycua/cua` vs `e2b-dev/E2B` vs `alibaba/OpenSandbox`**
  Các giải pháp mã nguồn mở đa nền tảng (cua), dịch vụ đám mây cấp doanh nghiệp (E2B), và triển khai được bảo chứng bởi các ông lớn (OpenSandbox) tạo ra sự cạnh tranh khác biệt, các nhà phát triển cần lựa chọn dựa trên kịch bản (phát triển cục bộ/triển khai doanh nghiệp/đám mây gốc).

- **🧠 Cuộc chiến lớp bộ nhớ của `mem0` và `claude-mem`**
  Lớp bộ nhớ phổ quát (mem0) vs plugin bộ nhớ chuyên dụng (claude-mem) đại diện cho hai triết lý sản phẩm: nền tảng hóa theo chiều ngang vs tối ưu hóa sâu theo chiều dọc, về lâu dài có thể hợp nhất hoặc phân lớp.

- **📡 Hiệu ứng "App Store" của hệ sinh thái MCP**
  Việc `activepieces` tích hợp ~400 máy chủ MCP báo hiệu: MCP đang tái tạo con đường bùng nổ của hệ sinh thái API HTTP trước đây, nút thắt quan trọng tiếp theo là cơ chế khám phá, xếp hạng và kiếm tiền của máy chủ MCP.

- **🎬 `waoowaoo` —— Nỗ lực công nghiệp hóa sản xuất phim và truyền hình bằng AI**
  Bước nhảy vọt từ "tạo video bằng AI" (Runway/Pika) sang "luồng công việc sản xuất phim và truyền hình bằng AI" đánh dấu sự gia nhập của AI tạo sinh vào lĩnh vực sản xuất nội dung chuyên nghiệp, việc mở hóa workflow tiêu chuẩn Hollywood có thể làm đảo lộn ngành công nghiệp điện ảnh truyền thống.

---

*Thời gian tạo báo cáo: 03-04-2026*
*Nguồn dữ liệu: GitHub Trending + GitHub Search API (hoạt động 7 ngày)*

---
*Bản tin này được tạo tự động bởi [agents-radar](https://github.com/duanyytop/agents-radar).*