# 社区动态日报：AI CLI 工具 2026-03-26

> 生成时间: 2026-03-26 00:11 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# 2026-03-26 Phân tích Toàn diện Hệ sinh thái Công cụ AI CLI

## 1. Toàn cảnh hệ sinh thái

Hệ sinh thái công cụ AI CLI hiện tại có xu hướng **"phân cực ba cực, đào sâu theo chiều dọc"**: Claude Code và OpenAI Codex chiếm lĩnh thị trường doanh nghiệp nhờ lợi thế đi đầu, nhưng lại tích lũy nợ kỹ thuật về độ ổn định; Gemini CLI tạo sự khác biệt bằng quy trình làm việc SDD (Spec-Driven Development), nhưng lại bị hạn chế bởi nút thắt hiệu suất của Agent; các nhà sản xuất Trung Quốc (Kimi, Qwen, OpenCode) đang tăng tốc đuổi kịp, hình thành các đặc điểm kỹ thuật trong các lĩnh vực như tương thích plugin, tích hợp hệ sinh thái Alibaba Cloud, và kiến trúc Effect. Nhìn chung, **hệ sinh thái MCP trở thành chiến địa tranh giành** và **hệ thống quyền hạn, phát triển từ xa, rò rỉ tài nguyên** cấu thành các khoản nợ kỹ thuật chung của toàn ngành.

---

## 2. So sánh mức độ hoạt động của từng công cụ

| Công cụ | Số lượng Issue hôm nay | Số lượng PR hôm nay | Bản phát hành phiên bản | Tin tức quan trọng |
|:---|:---:|:---:|:---|:---|
| **Claude Code** | Nhiều Issue, độ nóng cao | 8 PR đang hoạt động | v2.1.83 | Tăng cường quản lý cấu hình doanh nghiệp, nhưng lại gây ra lỗi nghiêm trọng khi quay lại chế độ nhập liệu Linux, chế độ pipe |
| **OpenAI Codex** | 10 Issue nóng | 10 PR đang hoạt động | 5 bản alpha liên tiếp (v0.117.0-a15~a19) | Lõi Rust lặp lại tần suất cao, khủng hoảng quyền hạn sandbox trở thành điểm yếu lớn nhất |
| **Gemini CLI** | 10 Issue nóng | 10 PR đang hoạt động | v0.35.1 + v0.36.0-preview.3 | Thúc đẩy kiến trúc SDD/Tracker, lỗi Agent bị treo gây phẫn nộ cộng đồng |
| **GitHub Copilot CLI** | 10 Issue nóng | **0 PR** | v1.0.12-1 / v1.0.12-0 | Báo động sai chính sách tổ chức MCP, vấn đề giới hạn tốc độ bùng phát tập trung |
| **Kimi Code CLI** | **17 Issue mới** | **22 PR đang hoạt động** | v1.26.0 | Hệ thống plugin thử nghiệm Beta, hiệu suất trên kho mã lớn, tùy chỉnh phím tắt trở thành tâm điểm |
| **OpenCode** | 10 Issue nóng | 10 PR đang hoạt động | Không có | Đẩy mạnh chuyển đổi kiến trúc Effect, giá trị mặc định an toàn, rò rỉ MCP thu hút sự chú ý |
| **Qwen Code** | **36 bản cập nhật** | **27 PR đang hoạt động** | v0.14.0-preview.0 | Tích hợp sâu hệ sinh thái Alibaba Cloud, sửa lỗi ổn định tích hợp IDE dày đặc |

> **Thứ tự hoạt động**: Qwen Code (63) > Kimi Code CLI (39) > OpenCode/Codex/Gemini/Claude (~20) > Copilot CLI (10)

---

## 3. Hướng chức năng được quan tâm chung

| Hướng chức năng | Công cụ liên quan | Yêu cầu cụ thể |
|:---|:---|:---|
| **Hoàn thiện hệ sinh thái MCP** | Claude Code, Codex, Copilot CLI, Kimi, OpenCode, Qwen | Quản lý vòng đời máy chủ (rò rỉ tiến trình #19168 OpenCode), phân tích chính sách tổ chức (Copilot #2236), cấu hình xác thực (Kimi #1566), độ ổn định gọi công cụ (Qwen #2530) |
| **Tái cấu trúc hệ thống quyền hạn** | Claude Code, Codex, Gemini, Qwen | Minh bạch hóa logic khớp quyền (Claude #30519), phê duyệt tự động theo từng công cụ (Qwen #2640), giá trị mặc định an toàn (OpenCode #5076), ranh giới rủi ro chế độ YOLO (Gemini #23837) |
| **Phát triển từ xa/đa thiết bị** | Codex, Gemini, Claude | Hỗ trợ từ xa SSH (Codex #10450, 445👍), môi trường phát triển trên đám mây (Workspaces Gemini #22714), điều khiển máy tính từ điện thoại (Codex #9224) |
| **Quản lý tài nguyên và rò rỉ** | OpenCode, Qwen, Gemini | Tích tụ tiến trình MCP (OpenCode #19168), phình bộ nhớ WebKit (OpenCode #19167), tiến trình mồ côi (Qwen #2665), ô nhiễm /tmp (Gemini #23571) |
| **Chuẩn hóa phím tắt và tương tác** | Copilot CLI, Kimi, OpenCode | Xuống dòng SHIFT+ENTER (Copilot #1481, Kimi #1585), tùy chỉnh phím tắt (Kimi #1574), điều hướng Vim (OpenCode #7056) |
| **Minh bạch thanh toán và kiểm soát chi phí** | Codex, OpenCode, Copilot | Token tiêu thụ quá nhanh (Codex #14593, 262 bình luận), thanh toán trùng lặp Copilot Premium (OpenCode #11753), giới hạn tốc độ gói Pro (Copilot #2289) |

---

## 4. Phân tích định vị khác biệt

| Công cụ | Tập trung chức năng cốt lõi | Chân dung người dùng mục tiêu | Đặc điểm tuyến công nghệ |
|:---|:---|:---|:---|
| **Claude Code** | Quản lý cấu hình cấp doanh nghiệp, trải nghiệm TUI | Nhóm lớn, doanh nghiệp đa kho mã | Thư mục cấu hình được quản lý (`managed-settings.d/`), hệ thống kỹ năng, nhưng nợ kỹ thuật về độ ổn định TUI nặng |
| **OpenAI Codex** | Thực thi an toàn Sandbox, hiệu suất lõi Rust | Doanh nghiệp nhạy cảm về bảo mật, kịch bản CI/CD | Sandbox bubblewrap, tái cấu trúc Rust, nhưng lỗi quyền hạn Linux xảy ra thường xuyên |
| **Gemini CLI** | Quy trình làm việc SDD, theo dõi tác vụ DAG | Nhóm phát triển dựa trên quy cách, người dùng hệ sinh thái Google | Kiến trúc Spec-Tracker, phân tích mã nhận biết AST, nút thắt hiệu suất Agent đang chờ giải quyết |
| **GitHub Copilot CLI** | Tích hợp sâu IDE, trải nghiệm gốc GitHub | Người dùng VS Code thường xuyên, liên kết với hệ sinh thái GitHub | Liên kết với hệ thống đăng ký Copilot, nhưng độ ổn định MCP, chiến lược hiệu suất thô |
| **Kimi Code CLI** | Tương thích hệ sinh thái plugin, hiệu suất kho mã lớn | Người dùng chuyển từ Claude Code, nhà phát triển Trung Quốc | Chủ động nhắm mục tiêu Claude Code (cơ chế hàng đợi, hệ thống ghi nhớ), tối ưu hóa kho mã lớn với `git ls-files` |
| **OpenCode** | Kiến trúc an toàn, lập trình hàm Effect | Nhà công nghệ, nhóm nhạy cảm về bảo mật | **Duy nhất áp dụng toàn diện Effect-TS**: an toàn đồng thời, quản lý vòng đời tài nguyên, khả năng kiểm thử |
| **Qwen Code** | Hệ sinh thái Alibaba Cloud, độ ổn định tích hợp IDE | Nhà phát triển cloud-native Trung Quốc, người dùng Alibaba Cloud | Tích hợp sâu CI/CD Yunxiao, API Model Studio, Kế hoạch Luyện tập Mã BaiLian |

---

## 5. Mức độ phổ biến và mức độ trưởng thành của cộng đồng

### Mức độ hoạt động cao · Giai đoạn lặp lại nhanh
| Công cụ | Đặc điểm | Tín hiệu rủi ro |
|:---|:---|:---|
| **Qwen Code** | 36 Issues + 27 PRs, xây dựng hệ sinh thái Alibaba Cloud dày đặc | Các vấn đề ổn định cơ bản như lỗi hệ thống quyền hạn Windows, tiến trình mồ côi IDE |
| **Kimi Code CLI** | 17 Issues + 22 PRs, hệ thống plugin thử nghiệm Beta | Hiệu suất kho mã lớn, phản hồi cảm tính về thiết kế phím tắt, tài liệu không đủ |
| **OpenCode** | Chuyển đổi toàn bộ dịch vụ sang kiến trúc Effect, tham vọng kỹ thuật lớn | Thiếu giá trị mặc định an toàn (#5076, 48👍) có thể cản trở việc áp dụng của doanh nghiệp |

### Mức độ hoạt động trung bình cao · Giai đoạn khủng hoảng ổn định
| Công cụ | Đặc điểm | Thách thức chính |
|:---|:---|:---|
| **OpenAI Codex** | 5 bản alpha liên tiếp, tái cấu trúc lõi Rust mạnh mẽ | Lỗi quay lại hàng loạt dòng bwrap 0.115.0+, người dùng doanh nghiệp được khuyến nghị khóa phiên bản cũ |
| **Claude Code** | Liên tục bàn giao chức năng doanh nghiệp, nhưng lỗi quay lại thường xuyên | Lỗi cuộn Bug #826 (344 bình luận) gần một năm chưa khắc phục, nợ kỹ thuật TUI nặng nề |

### Mức độ hoạt động thấp · Rủi ro chế độ bảo trì
| Công cụ | Đặc điểm | Cảnh báo |
|:---|:---|:---|
| **GitHub Copilot CLI** | **0 PR**, bản phát hành chủ yếu là bản vá | Đầu tư không đủ vào hệ sinh thái MCP, phản ứng chậm với các vấn đề cốt lõi như chính sách tổ chức, giới hạn tốc độ, có thể phân bổ tài nguyên cho phần mở rộng IDE |

### Mức độ hoạt động trung bình · Giai đoạn chuyển đổi kiến trúc
| Công cụ | Đặc điểm | Điểm cần quan sát |
|:---|:---|:---|
| **Gemini CLI** | Quy trình làm việc sáng tạo SDD/Tracker | Nếu lỗi Agent bị treo #22141 (38 bình luận) không được giải quyết nhanh chóng, có thể mất người dùng cốt lõi |

---

## 6. Tín hiệu xu hướng đáng chú ý

### 🔮 Xu hướng kiến trúc kỹ thuật
| Tín hiệu | Bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **Effect-TS trở thành lựa chọn kiến trúc CLI thế hệ mới** | OpenCode toàn bộ dịch vụ Effect, Kimi giới thiệu chế độ Effect | Các nhóm theo đuổi an toàn đồng thời, khả năng kiểm thử, quản lý vòng đời tài nguyên có thể theo dõi; đường cong học tập dốc, cần đánh giá nền tảng FP của nhóm |
| **Lõi Rust + Vỏ TypeScript trở thành tiêu chuẩn hiệu suất** | Component Rust của Codex, tối ưu hóa dưới cùng TUI của Claude Code | Mô hình công nghệ của các công cụ CLI hiệu suất cao, việc triển khai thuần Node.js đối mặt với trần hiệu suất |

### 🔮 Xu hướng hình thái sản phẩm
| Tín hiệu | Bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **MCP phát triển từ "plugin chức năng" thành "hệ điều hành sinh thái"** | Tỷ lệ Issue liên quan đến MCP của tất cả các công cụ trên 20%, chuẩn hóa cấu hình (`mcp.json`) | Ưu tiên đầu tư vào khả năng phát triển máy chủ MCP, chú ý đến các tính năng cao cấp như vòng đời công cụ, xác thực, đo lường từ xa |
| **Môi trường phát triển từ xa trở thành chiến trường tiếp theo** | Gemini Workspaces, Codex #10450 (445👍), tác vụ định kỳ /loop của Qwen | Mô hình phát triển kết hợp cục bộ-đám mây trưởng thành, đánh giá việc sửa đổi quy trình làm việc để loại bỏ các tác vụ nặng lên đám mây |
| **"Khả năng tương thích Claude Code" trở thành tiêu chuẩn thực tế** | Kimi chủ động nhắm mục tiêu, tên gọi AGENTS.md của Qwen tương thích, hệ thống kỹ năng của OpenCode | Giảm chi phí di chuyển plugin/cấu hình, nhưng cần đề phòng không gian cạnh tranh khác biệt bị nén trong cạnh tranh đồng nhất |

### 🔮 Xu hướng mô hình kinh doanh
| Tín hiệu | Bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **Minh bạch thanh toán trở thành yếu tố then chốt để chuyển đổi người dùng trả phí** | Codex #14593 (262 bình luận), OpenCode #11753, Copilot #2289 | Trong quyết định mua hàng của doanh nghiệp, trọng số của khả năng quan sát (tiêu thụ token/s, kiểm toán sử dụng) tăng lên, việc lựa chọn công cụ cần đánh giá rủi ro hộp đen thanh toán |
| **Mức độ tích hợp hệ sinh thái nhà cung cấp đám mây có sự khác biệt** | Qwen ưu tiên Alibaba Cloud, Gemini tích hợp Google Cloud | Các nhóm có chiến lược đa đám mây cần đánh giá rủi ro khóa nhà cung cấp, ưu tiên lựa chọn các công cụ tương thích đa đám mây hoặc lớp trừu tượng |

### 🔮 Xu hướng bảo mật và quản trị
| Tín hiệu | Bằng chứng | Giá trị tham khảo cho nhà phát triển |
|:---|:---|:---|
| **"Giá trị mặc định an toàn" từ yêu cầu tuân thủ trở thành yếu tố chặn việc áp dụng** | Phê bình "đại lý điều khiển từ xa đặc quyền cao" của OpenCode #5076 (48👍) | Sự tham gia của nhóm bảo mật doanh nghiệp ngày càng sâu, việc lựa chọn công cụ cần đánh giá trước mô hình quyền hạn, nhật ký kiểm toán, hỗ trợ MDM và các khả năng khác |
| **Lỗ hổng cơ chế tự xác minh của AI bị lộ** | "Không bao giờ thực sự xác minh bằng hình ảnh" của Claude Code #38948 | Bắt buộc giới thiệu xác nhận thủ công hoặc xác minh ảnh chụp màn hình cho các quy trình làm việc quan trọng, không thể hoàn toàn tin tưởng vào tuyên bố tự xác nhận của công cụ AI |

---

*Báo cáo dựa trên dữ liệu công khai GitHub của từng công cụ vào ngày 2026-03-26, phù hợp cho người ra quyết định kỹ thuật đánh giá việc lựa chọn công cụ, và nhà phát triển nắm bắt hướng phát triển hệ sinh thái.*

---

## Báo cáo chi tiết từng công cụ

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Các điểm nóng cộng đồng Claude Code Skills

> Nguồn dữ liệu: [anthropics/skills](https://github.com/anthropics/skills)

# Báo cáo các điểm nóng cộng đồng Claude Code Skills (2026-03-26)

---

## 1. Xếp hạng Skills phổ biến (theo mức độ quan tâm của cộng đồng)

| Thứ hạng | Skill | Mô tả chức năng | Trạng thái | Liên kết |
|:---|:---|:---|:---|:---|
| 1 | **document-typography** | Kiểm soát chất lượng bố cục tài liệu do AI tạo: ngăn chặn các vấn đề bố cục như cô lập dòng, cô lập từ, đánh số sai | 🟡 Mở | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 2 | **frontend-design** | Phiên bản cải tiến của Skill thiết kế frontend, nâng cao độ rõ ràng của chỉ dẫn và khả năng thực thi | 🟡 Mở | [PR #210](https://github.com/anthropics/skills/pull/210) |
| 3 | **skill-quality-analyzer / skill-security-analyzer** | Meta Skill: Tự động đánh giá chất lượng và bảo mật của các Skill khác (đánh giá theo 5 tiêu chí) | 🟡 Mở | [PR #83](https://github.com/anthropics/skills/pull/83) |
| 4 | **codebase-inventory-audit** | Kiểm tra làm sạch kho mã: xác định mã mồ côi, tệp không sử dụng, thiếu tài liệu | 🟡 Mở | [PR #147](https://github.com/anthropics/skills/pull/147) |
| 5 | **shodh-memory / session-memory / plan-task** | Loạt bộ nhớ bền vững: giữ lại ngữ cảnh, tiến độ tác vụ và kiến thức kỹ thuật giữa các phiên | 🟡 Mở | [PR #154](https://github.com/anthropics/skills/pull/154) [PR #629](https://github.com/anthropics/skills/pull/629) [PR #522](https://github.com/anthropics/skills/pull/522) |
| 6 | **masonry-generate-image-and-videos** | Tích hợp Masonry CLI để tạo ảnh/video (Imagen 3.0, Veo 3.1) | 🟡 Mở | [PR #335](https://github.com/anthropics/skills/pull/335) |
| 7 | **SAP-RPT-1-OSS predictor** | Tích hợp phân tích dự đoán cho mô hình dựa trên bảng mã nguồn mở SAP | 🟡 Mở | [PR #181](https://github.com/anthropics/skills/pull/181) |
| 8 | **management-consulting** | Khung tư vấn quản lý: giải quyết vấn đề có cấu trúc, phân tích chiến lược, phát triển trường hợp kinh doanh | 🟡 Mở | [PR #384](https://github.com/anthropics/skills/pull/384) |

**Điểm nóng thảo luận**: Chất lượng bố cục (#514) và bộ nhớ bền vững (#154, #629, #522) là các chủ đề sôi nổi nhất gần đây, phản ánh nhu cầu cốt lõi của người dùng về sự tinh tế của đầu ra AI và tính liên tục của công việc.

---

## 2. Xu hướng nhu cầu cộng đồng (từ Issues)

| Hướng nhu cầu | Issue đại diện | Yêu cầu cốt lõi |
|:---|:---|:---|
| **Quản trị và bảo mật Skill** | [#492](https://github.com/anthropics/skills/issues/492), [#412](https://github.com/anthropics/skills/issues/412) | Ranh giới tin cậy không gian tên Skill cộng đồng, mô hình quản trị Agent, kiểm toán bảo mật |
| **Độ ổn định cơ sở hạ tầng** | [#62](https://github.com/anthropics/skills/issues/62), [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403) | Skill bị mất, lỗi tải lên, lỗi API 500 và các vấn đề về độ tin cậy cấp doanh nghiệp |
| **Khả năng tương tác MCP** | [#16](https://github.com/anthropics/skills/issues/16), [#369](https://github.com/anthropics/skills/issues/369) | Skill được hiển thị dưới dạng MCP, hỗ trợ Ứng dụng MCP |
| **Công cụ đánh giá và kiểm thử** | [#556](https://github.com/anthropics/skills/issues/556), [#202](https://github.com/anthropics/skills/issues/202) | Đánh giá tỷ lệ kích hoạt Skill, nâng cấp các phương pháp hay nhất của skill-creator |
| **Tích hợp doanh nghiệp** | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532) | Hỗ trợ AWS Bedrock, tương thích xác thực SSO/doanh nghiệp |

---

## 3. Các Skill tiềm năng cao chờ hợp nhất (bình luận sôi nổi + cập nhật gần đây)

| Skill | Cập nhật lần cuối | Tiềm năng hợp nhất | Tiến triển chính |
|:---|:---|:---|:---|
| **document-typography** | 2026-03-13 | ⭐⭐⭐⭐⭐ | Giải quyết các điểm yếu phổ biến, tác giả liên tục phản hồi |
| **plan-task / record-knowledge** | 2026-03-09 | ⭐⭐⭐⭐⭐ | Hai PR từ cùng một tác giả, giải quyết có hệ thống vấn đề quên phiên |
| **session-memory** | 2026-03-17 | ⭐⭐⭐⭐⭐ | Thiết kế không phụ thuộc, giải quyết có mục tiêu vấn đề nén ngữ cảnh bị mất dữ liệu |
| **CONTRIBUTING.md** | 2026-03-19 | ⭐⭐⭐⭐⭐ | Khoảng trống tài liệu chính thức, chìa khóa để nâng cao sức khỏe cộng đồng |
| **frontend-design** | 2026-03-07 | ⭐⭐⭐⭐☆ | Trau chuốt lâu dài, lặp lại nhiều phiên bản |
| **skill-quality-analyzer** | 2026-01-07 | ⭐⭐⭐★☆ | Khái niệm Meta Skill tiên tiến, nhưng cần căn chỉnh với tiêu chuẩn đánh giá chất lượng chính thức |

---

## 4. Thông tin chi tiết về hệ sinh thái Skills

> **Nhu cầu cốt lõi**: Cộng đồng đang chuyển từ "tính năng phong phú" sang "sản xuất đáng tin cậy" - người dùng cấp thiết cần **bộ nhớ bền vững giữa các phiên** (trạng thái bộ nhớ/tác vụ), **kiểm soát chất lượng đầu ra chi tiết** (bố cục/định dạng), và **khung quản trị cấp doanh nghiệp** (bảo mật/đánh giá/SSO), đồng thời độ ổn định của cơ sở hạ tầng chính thức trở thành nút thắt lớn nhất cho việc áp dụng quy mô lớn.

---

---

# Nhật ký Động thái Cộng đồng Claude Code | 2026-03-26

---

## Tổng quan nhanh hôm nay

Phiên bản v2.1.83 phát hành mang đến các cải tiến quản lý cấu hình cấp doanh nghiệp, nhưng cùng ngày lại bộc lộ nhiều vấn đề lỗi nghiêm trọng — bao gồm lỗi nhập liệu ký tự in hoa trong Linux xterm, chế độ pipe `-p` trả về kết quả trống, v.v. Sự phẫn nộ của cộng đồng về lỗi cuộn nhảy (#826) tiếp tục gia tăng, Issue này đã có tổng cộng 344 bình luận, trở thành một trong những vấn đề được quan tâm nhất chưa được giải quyết trong lịch sử dự án.

---

## Phát hành phiên bản

### v2.1.83 (2026-03-25)

| Tính năng | Mô tả |
|:---|:---|
| **Thư mục cấu hình được quản lý** | Thêm thư mục triển khai `managed-settings.d/`, hỗ trợ các chiến lược triển khai độc lập của nhiều nhóm và hợp nhất theo thứ tự chữ cái |
| **Mở rộng sự kiện hook** | Thêm sự kiện `CwdChanged` và `FileChanged`, hỗ trợ quản lý môi trường phản ứng (như tích hợp direnv) |

> ⚠️ **Các vấn đề đã biết**: Phiên bản này có nhiều lỗi quay lại, xem chi tiết bên dưới Issues #38842, #39053

---

## Các Issue nóng trong cộng đồng

### 🔥 Vấn đề kinh niên

| # | Tiêu đề | Bình luận | Tiến triển chính |
|:---|:---|:---:|:---|
| [#826](https://github.com/anthropics/claude-code/issues/826) | Buộc cuộn đến đầu lịch sử khi xuất ra bảng điều khiển (macOS) | **344** | Gần một năm chưa khắc phục, người dùng buộc phải sử dụng `tmux` hoặc tắt đầu ra luồng để khắc phục; hôm qua Issue liên quan #33814 được thêm vào xác nhận đây không chỉ là một vấn đề cuộn đơn lẻ |
| [#33814](https://github.com/anthropics/claude-code/issues/33814) | Buộc cuộn lên trên khi xuất mã (lỗi quay lại TUI) | 31 | Khác với #826: vấn đề xảy ra trong giai đoạn hiển thị khối mã chứ không phải giai đoạn nhập liệu, xác nhận liên quan đến việc tái cấu trúc TUI phiên bản v2.1.7x |

### ⚠️ Lỗi quay lại trong v2.1.83

| # | Tiêu đề | Bình luận | Đánh giá ảnh hưởng |
|:---|:---|:---:|:---|
| [#38842](https://github.com/anthropics/claude-code/issues/38842) | Lỗi nhập liệu ký tự in hoa trong Linux xterm | 4 | **Nghiêm trọng**: Chặn nhập liệu cơ bản của người dùng máy chủ Linux; liên quan đến cập nhật thư viện TUI |
| [#39053](https://github.com/anthropics/claude-code/issues/39053) | Chế độ pipe `-p` trả về `result` trống | 2 | **Nghiêm trọng**: Phá vỡ kịch bản tích hợp CI/CD; đã nhanh chóng đóng nhưng cần xác minh sửa lỗi |

### 🏗️ Kiến trúc và quyền hạn

| # | Tiêu đề | Bình luận | Yêu cầu cộng đồng |
|:---|:---|:---:|:---|
| [#30519](https://github.com/anthropics/claude-code/issues/30519) | Lỗi cơ bản hệ thống khớp quyền - hơn 30 Issue mở chưa có phản hồi chính thức | 12 | Người dùng tự xây dựng giải pháp tạm thời PreTool, kêu gọi chính thức tái cấu trúc hệ thống quyền hạn |
| [#2266](https://github.com/anthropics/claude-code/issues/2266) | Hỗ trợ giao thức đồ họa terminal (Sixel/Kitty/iTerm2) | 20 | Nhu cầu cốt lõi cho kịch bản trực quan hóa dữ liệu, liên quan đến #39024 |
| [#16082](https://github.com/anthropics/claude-code/issues/16082) | Chế độ độc quyền thanh menu (ẩn biểu tượng Dock) | 14 | 62 👍, nhu cầu tối ưu hóa quy trình làm việc cho người dùng chuyên nghiệp macOS |

### 🔧 Chuỗi công cụ và tích hợp

| # | Tiêu đề | Bình luận | Kịch bản |
|:---|:---|:---:|:---|
| [#38887](https://github.com/anthropics/claude-code/issues/38887) | Phiên bản Windows không nhận diện môi trường Windows, bỏ qua quy tắc CRLF | 8 | Trải nghiệm phát triển đa nền tảng bị đứt gãy, cấu hình memory.md không hoạt động |
| [#38948](https://github.com/anthropics/claude-code/issues/38948) | Claude tuyên bố chức năng hoạt động bình thường nhưng chưa bao giờ thực sự xác minh bằng hình ảnh | 7 | Tiết lộ lỗ hổng cơ chế tự xác minh của công cụ AI - dựa vào kiểm thử API thay vì kiểm tra UI thực tế |
| [#28168](https://github.com/anthropics/claude-code/issues/28168) | Sonnet 4.6 bị tính phí nhầm là Opus (ước tính chi phí cao hơn 67%) | 4 | Vấn đề độ chính xác tính toán chi phí doanh nghiệp, có thể tái hiện |

### 🐛 Độ ổn định nền tảng

| # | Tiêu đề | Bình luận | Ghi chú |
|:---|:---|:---:|:---|
| [#39005](https://github.com/anthropics/claude-code/issues/39005) | Suy giảm hiệu suất nghiêm trọng vào giờ ban đêm ở EU | 2 | Người dùng gói Max (€90/tháng) ghi nhận hơn 54 phiên, nghi ngờ mất cân bằng tải khu vực |

---

## Tiến triển PR quan trọng

| # | Tiêu đề | Trạng thái | Đánh giá giá trị |
|:---|:---|:---:|:---|
| [#39043](https://github.com/anthropics/claude-code/pull/39043) | Xóa đề xuất "chủ nghĩa vị lai cổ điển" khỏi Skill Thiết kế Frontend | 🟡 Mở | PR thú vị của cộng đồng, phản ánh tranh cãi về thẩm mỹ mẫu Skill chính thức |
| [#39041](https://github.com/anthropics/claude-code/pull/39041) | Tương tự trên (gửi lại trùng lặp) | 🟡 Mở | — |
| [#38105](https://github.com/anthropics/claude-code/pull/38105) | Plugin kênh WhatsApp mới | 🟡 Mở | **Giá trị cao**：Triển khai giao thức Baileys, tương đương chức năng Telegram/Discord |
| [#38728](https://github.com/anthropics/claude-code/pull/38728) | Plugin memory-alert mới (giám sát bộ nhớ tiến trình) | 🟡 Mở | Công cụ vận hành hữu ích, giám sát RSS đa nền tảng |
| [#38636](https://github.com/anthropics/claude-code/pull/38636) | Plugin multi-setup mới (khu vực làm việc phát triển song song) | 🟡 Mở | Công cụ hiệu quả cho kịch bản đa nhiệm trên kho mã lớn |
| [#23853](https://github.com/anthropics/claude-code/pull/23853) | Dockerfile bỏ cài đặt npm, thay bằng tập lệnh chính thức | 🟡 Mở | Cải thiện bảo mật và bảo trì |
| [#38182](https://github.com/anthropics/claude-code/pull/38182) | Plugin session-rename mới | 🔴 Đã đóng | Cải thiện quản lý phiên, giải pháp .meta.json không phá vỡ |

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích gom nhóm 50 Issue đang hoạt động:

```
┌─────────────────────────────────────────────────────────┐
│  1. Tối ưu trải nghiệm TUI/terminal (28%)  ← Vấn đề cuộn, giao thức đồ họa, thanh trạng thái    │
│  2. Tái cấu trúc hệ thống quyền hạn và bảo mật (22%) ← Sai khớp quyền, quản lý chính sách          │
│  3. Tích hợp sâu IDE/editor (18%) ← Độ ổn định phần mở rộng VS Code          │
│  4. Tính nhất quán đa nền tảng (15%)      ← Các vấn đề dành riêng cho Windows/WSL        │
│  5. Kiểm soát mô hình và chi phí (12%)    ← Cửa sổ ngữ cảnh, độ chính xác định giá        │
│  6. Mở rộng hệ sinh thái plugin (5%)       ← Giao thức liên lạc, công cụ giám sát           │
└─────────────────────────────────────────────────────────┘
```

**Hướng mới nổi**: Giao thức đồ họa terminal (Kitty/Sixel) và trực quan hóa cửa sổ ngữ cảnh (#38971) trở thành tiêu điểm mới sau "Lỗi cuộn".

---

## Điểm quan tâm của nhà phát triển

| Loại điểm yếu | Biểu hiện cụ thể | Phản ứng của cộng đồng |
|:---|:---|:---|
| **Nợ kỹ thuật TUI** | Các lỗi quay lại liên tục về nhập liệu, cuộn, chế độ pipe trong dòng v2.1.8x | Một số người dùng khóa phiên bản v2.1.71 là "Phiên bản ổn định cuối cùng" |
| **Hộp đen hệ thống quyền hạn** | Hơn 30 Issue chưa có phản hồi kỹ thuật chính thức, logic khớp không minh bạch | Xuất hiện các middleware cộng đồng như [claude-pretool](https://github.com/search?q=claude+pretool) |
| **Công dân hạng hai Windows** | Xử lý đường dẫn, lỗi dịch vụ, quy tắc CRLF liên tục bất thường | WSL2 trở thành giải pháp đề xuất thực tế cho Windows |
| **Quản lý cấu hình doanh nghiệp** | `managed-settings.d/` trong v2.1.83 đáp ứng nhu cầu, nhưng tài liệu không đủ | Chờ hướng dẫn thực hành tốt nhất chính thức |
| **Bẫy tự xác minh AI** | Claude dựa vào đọc mã/kiểm thử API để khẳng định chức năng hoạt động, bỏ qua xác minh UI thực tế | Người dùng bắt buộc quy trình "xác nhận ảnh chụp màn hình" |

---

*Nhật ký hàng ngày dựa trên dữ liệu công khai GitHub, không đại diện cho lập trường chính thức của Anthropic*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Nhật ký Động thái Cộng đồng OpenAI Codex | 2026-03-26

## Tổng quan nhanh hôm nay

Cộng đồng Codex hôm nay tập trung vào **lặp lại dày đặc các thành phần lõi Rust** (5 bản alpha liên tiếp), đồng thời **vấn đề quyền hạn sandbox** trở thành điểm yếu lớn nhất, nhiều Issue có độ nóng cao chỉ ra lỗi quay lại của bubblewrap trên Linux trong phiên bản 0.115.0+. Hệ sinh thái MCP và chức năng phát triển từ xa tiếp tục nhận được sự quan tâm cao từ cộng đồng.

---

## Phát hành phiên bản

### Thành phần Rust v0.117.0-alpha.15 ~ alpha.19 (5 bản liên tiếp)

5 bản alpha được phát hành dày đặc trong 24 giờ qua, cho thấy thành phần lõi Rust đang trong giai đoạn lặp lại tần suất cao. Việc tiến triển số phiên bản nhanh chóng thường có nghĩa là:
- Xác minh khẩn cấp các sửa lỗi quan trọng
- Kiểm thử theo giai đoạn các chức năng mới

> Lưu ý: Ghi chú phát hành khá ngắn gọn, nên theo dõi commit tương ứng để biết chi tiết thay đổi.

---

## Các Issue nóng trong cộng đồng (Top 10)

| Ưu tiên | Issue | Vấn đề cốt lõi | Phản ứng của cộng đồng |
|:---|:---|:---|:---|
| 🔴 **P0** | [#14593](https://github.com/openai/codex/issues/14593) **Tiêu thụ Token quá nhanh** | Người dùng gói Business báo cáo tốc độ đốt token bất thường, nghi ngờ lỗi tính phí hoặc logic gọi mô hình | **262 bình luận, 86 👍**, độ nóng cao nhất, người dùng yêu cầu mạnh mẽ về cơ chế thanh toán minh bạch |
| 🔴 **P0** | [#14919](https://github.com/openai/codex/issues/14919) **Lỗi quyền RTM_NEWADDR: bwrap** | Cấu hình mạng sandbox Linux thất bại sau khi nâng cấp lên 0.115.0, proxy con hoàn toàn không thể thực thi | **30 👍, 15 bình luận**, liên quan đến #12572, lỗi quay lại sandbox |
| 🟡 **P1** | [#12764](https://github.com/openai/codex/issues/12764) **Lỗi 401 Không được phép của CLI** | Cơ chế làm mới token xác thực thất bại, ảnh hưởng đến kịch bản CI/tự động hóa | 88 bình luận, chưa khắc phục được trong 1 tháng |
| 🟡 **P1** | [#10450](https://github.com/openai/codex/issues/10450) **Hỗ trợ phát triển từ xa cho ứng dụng Desktop** | Yêu cầu ứng dụng Codex hỗ trợ quy trình làm việc từ xa như VS Code Remote-SSH | **445 👍**, phiếu bầu cao nhất cho yêu cầu chức năng, nhu cầu cốt lõi của người dùng doanh nghiệp |
| 🟡 **P1** | [#14936](https://github.com/openai/codex/issues/14936) **Hộp thoại cấp phép quá mức của bwrap** | Sau 0.115.0, hầu hết mọi lệnh đều hiển thị lời nhắc cấp phép sandbox, ảnh hưởng nghiêm trọng đến sự trôi chảy | 25 bình luận, cùng với #14919 về suy giảm trải nghiệm sandbox |
| 🟡 **P1** | [#8745](https://github.com/openai/codex/issues/8745) **Tích hợp tự động LSP** | Yêu cầu CLI tích hợp sẵn máy chủ ngôn ngữ, nâng cao độ chính xác hiểu mã | **212 👍**, nhu cầu quan trọng của việc tích hợp chuỗi công cụ nhà phát triển |
| 🟡 **P1** | [#9224](https://github.com/openai/codex/issues/9224) **Điều khiển từ xa Codex** | Điều khiển phiên CLI trên máy tính từ ứng dụng ChatGPT trên điện thoại | **213 👍**, kịch bản sáng tạo cho cộng tác đa thiết bị |
| 🟢 **P2** | [#11325](https://github.com/openai/codex/issues/11325) Lệnh `/compact` trên ứng dụng | Ứng dụng desktop thiếu chức năng nén ngữ cảnh thủ công, CLI đã hỗ trợ | 104 👍, yêu cầu chức năng tương đương |
| 🟢 **P2** | [#10601](https://github.com/openai/codex/issues/10601) Lỗi cài đặt Windows Sandbox | Lỗi khởi tạo sandbox trên môi trường Windows, ảnh hưởng triển khai doanh nghiệp | 35 bình luận, điểm yếu tương thích nền tảng |
| 🟢 **P2** | [#15777](https://github.com/openai/codex/issues/15777) Cài đặt sandbox phá vỡ ACL hệ thống | Sau khi cài đặt sandbox Codex, quyền AppData của Windows bị hỏng, ảnh hưởng đến sandbox GPU của trình duyệt Chromium | 6 bình luận nhưng ảnh hưởng nghiêm trọng, tác dụng phụ cấp hệ thống |

---

## Tiến triển PR quan trọng (Top 10)

| PR | Tác giả | Thay đổi cốt lõi | Phạm vi ảnh hưởng |
|:---|:---|:---|:---|
| [#15810](https://github.com/openai/codex/pull/15810) | euroelessar | **Tái cấu trúc lớp truyền tải App-server**: Hợp nhất logic truyền tải stdio/websocket, hỗ trợ nhiều giao thức truyền tải hơn | Khả năng mở rộng kiến trúc, chuẩn bị cho kết nối từ xa |
| [#15693](https://github.com/openai/codex/pull/15693) | viyatb-oai | **Sửa lỗi tương thích bubblewrap phiên bản cũ**: Ưu tiên sử dụng `/usr/bin/bwrap` của hệ thống, tránh lỗi không tương thích tham số `--argv0` | **Sửa lỗi trực tiếp #15283**, độ ổn định sandbox Linux |
| [#15800](https://github.com/openai/codex/pull/15800) | mzeng-openai | **Tối ưu hóa công cụ tùy chỉnh MCP**: Hỗ trợ tùy chọn "không hỏi nữa", sửa lỗi chiến lược thực thi arc trong chế độ yolo | Trải nghiệm người dùng MCP, chi tiết hóa chính sách bảo mật |
| [#15805](https://github.com/openai/codex/pull/15805) | nicholasclark-openai | **Chỉ số bộ kết nối MCP**: Thêm các trường đo lường từ xa như `codex.mcp.call.duration_ms` | Khả năng quan sát, giám sát hiệu suất |
| [#15531](https://github.com/openai/codex/pull/15531) | eternal-openai | **Hỗ trợ Hook PostToolUse**: Hook sau lệnh shell không luồng, ghép cặp với PreToolUse | Mở rộng quy trình làm việc tự động hóa |
| [#15561](https://github.com/openai/codex/pull/15561) | mifan-oai | **Lệnh `/create-api-key` mới**: Tạo key API trực tiếp trong CLI, tái sử dụng máy chủ callback OAuth | Trải nghiệm nhà phát triển, quản lý khóa |
| [#15197](https://github.com/openai/codex/pull/15197) | caseychow-oai | **Ánh xạ tệp Codex Apps**: Kết nối `_meta["openai/fileParams"]` với luồng tải tệp OpenAI | Hệ sinh thái Apps, xử lý tệp |
| [#15797](https://github.com/openai/codex/pull/15797) | mle-foo | **Sửa lỗi hiển thị công cụ MCP**: Vấn đề phân nhóm/hiển thị tên máy chủ gạch nối | Tính chính xác của UI, tính linh hoạt của cấu hình |
| [#15632](https://github.com/openai/codex/pull/15632) | mikhail-oai | **Phân tách lưu trữ JSON Keyring**: Cơ chế lưu trữ chứng chỉ thống nhất cho OAuth MCP và CLI | Kiến trúc bảo mật, tái sử dụng mã |
| [#15812](https://github.com/openai/codex/pull/15812) | bolinfest | **Loại bỏ xử lý execve đặc biệt cho tập lệnh skill**: Đơn giản hóa mô hình quyền thực thi, sửa lỗi `BUGB-15761` | Đơn giản hóa chính sách bảo mật, tính nhất quán của hành vi |

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích 50 Issue đang hoạt động, trọng tâm cộng đồng tập trung vào:

| Hướng | Chỉ số độ nóng | Yêu cầu điển hình |
|:---|:---|:---|
| **🖥️ Phát triển từ xa/đa thiết bị** | 658+ 👍 ( #10450 + #9224) | Hỗ trợ từ xa SSH, điều khiển máy tính từ điện thoại, môi trường phát triển trên đám mây |
| **🔒 Cân bằng bảo mật và trải nghiệm Sandbox** | Nhiều Issue có bình luận cao | Giảm thiểu ma sát cấp phép, sửa lỗi sandbox Linux/Windows, minh bạch hóa mô hình quyền hạn |
| **🔧 Tích hợp chuỗi công cụ nhà phát triển** | 212 👍 ( #8745) | Tích hợp tự động LSP, mở rộng hệ sinh thái MCP, tích hợp sâu phần mở rộng IDE |
| **💰 Minh bạch thanh toán và sử dụng** | 262 bình luận ( #14593) | Giải thích tiêu thụ Token, cảnh báo sử dụng, kiểm toán cấp doanh nghiệp |
| **🪟 Trải nghiệm gốc Windows** | Nhiều Issue | Gói cài đặt độc lập (không phải Microsoft Store), sửa lỗi bảo mật ACL, hiển thị phông chữ |

---

## Điểm quan tâm của nhà phát triển

### 🔥 Điểm yếu khẩn cấp
1. **Khủng hoảng độ ổn định Sandbox** (từ 0.115.0+)
   - Quyền mạng bubblewrap, hộp thoại cấp phép quá mức, phá vỡ ACL Windows
   - Đề xuất: Tạm dừng nâng cấp trong môi trường sản xuất, theo dõi tiến trình sửa lỗi #15693

2. **Độ tin cậy của hệ thống xác thực**
   - Lỗi 401, làm mới token thất bại, khó đăng nhập trong môi trường headless
   - Ảnh hưởng đến kịch bản tự động hóa CI/CD

### 📈 Nhu cầu tần suất cao
| Nhu cầu | Kịch bản | Trạng thái hiện tại |
|:---|:---|:---|
| Hỗ trợ phát triển từ xa | Máy chủ đám mây, container, môi trường SSH | Chỉ phần mở rộng VS Code hỗ trợ, ứng dụng/CLI thiếu |
| Kiểm soát nén ngữ cảnh | Tối ưu hóa chi phí phiên dài | CLI có `/compact`, ứng dụng thiếu |
| Hoàn thiện hệ sinh thái MCP | Tích hợp công cụ tùy chỉnh | Đang lặp lại nhanh, mô hình quyền hạn vẫn cần tối ưu hóa |
| Khả năng quan sát sử dụng | Kiểm toán doanh nghiệp, kiểm soát chi phí | Đang tăng cường dữ liệu đo lường từ xa (như #15805) |

### 💡 Đề xuất từ cộng đồng
- **Người dùng doanh nghiệp**: Theo dõi tiến triển phát triển từ xa #10450, giải pháp tạm thời hiện tại là VS Code + Remote-SSH + phần mở rộng
- **Người dùng Linux**: Nếu gặp lỗi bwrap, có thể tạm thời hạ cấp xuống 0.114.x hoặc theo dõi việc hợp nhất #15693
- **Người dùng Windows**: Tránh cài đặt trực tiếp trong môi trường doanh nghiệp, theo dõi sửa lỗi ACL #15777

---

*Nguồn dữ liệu: github.com/openai/codex | Chu kỳ thống kê: 2026-03-25 ~ 2026-03-26*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Nhật ký Động thái Cộng đồng Gemini CLI | 2026-03-26

## Tổng quan nhanh hôm nay

Hôm nay Gemini CLI phát hành phiên bản ổn định v0.35.1 và phiên bản xem trước v0.36.0-preview.3, tiếp tục lặp lại quy trình làm việc SDD (Spec-Driven Development). Chủ đề được cộng đồng thảo luận nhiều nhất vẫn là **nút thắt hiệu suất của Agent** — Issue #22141 phản ánh vấn đề nhiệm vụ nhỏ mất hơn 1 giờ đã có 38 lượt thảo luận, trở thành điểm yếu lớn nhất hiện tại. Đồng thời, nhóm đang đẩy nhanh quá trình tái cấu trúc hệ thống Tracker, nâng cấp kiến trúc cốt lõi như phân tích mã nhận biết AST.

---

## Phát hành phiên bản

### v0.35.1 (Phiên bản ổn định)
- Cập nhật bản vá thông thường, xem chi tiết thay đổi tại [Nhật ký so sánh](https://github.com/google-gemini/gemini-cli/compare/v0.35.0...v0.35.1)

### v0.36.0-preview.3 (Phiên bản xem trước)
- Sửa lỗi quản lý số phiên bản: cherry-pick bản vá vào nhánh release/v0.36.0-preview.0-pr-23672 [→ PR #23723](https://github.com/google-gemini/gemini-cli/pull/23723)

---

## Các Issue nóng trong cộng đồng (Top 10)

| # | Tiêu đề | Trạng thái | Bình luận | Điểm quan sát chính |
|---|------|------|------|---------|
| [#22141](https://github.com/google-gemini/gemini-cli/issues/22141) | Vòng lặp Agent khiến nhiệm vụ nhỏ mất hơn 1 giờ | 🔥 Mở | 38 | **Điểm yếu lớn nhất**: Các nhiệm vụ đơn giản chỉnh sửa 1-3 tệp thường xuyên bị treo, độ trễ phản hồi mô hình nghiêm trọng. Rất nhiều người dùng +1, cần tối ưu hóa khẩn cấp |
| [#23230](https://github.com/google-gemini/gemini-cli/issues/23230) | Chưa chuyển đổi mô hình sau khi thoát chế độ Plan | Mở | 10 | Sau khi xác nhận chế độ Plan, lẽ ra phải tự động chuyển sang gemini-3-flash-preview, thực tế cần ngắt thủ công mới có hiệu lực |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Đánh giá đọc/tìm kiếm tệp nhận biết AST | 🔒 Nội bộ | 4 | Khám phá kiến trúc cốt lõi: sử dụng AST để đọc chính xác ranh giới phương thức, giảm lãng phí token và đọc sai |
| [#23815](https://github.com/google-gemini/gemini-cli/issues/23815) | Hiển thị gỡ lỗi F12 trên Cloudtop không cập nhật | P1 | 3 | Vấn đề hiển thị UI trên môi trường đám mây, cần buộc làm mới nhật ký mới hiển thị |
| [#23837](https://github.com/google-gemini/gemini-cli/issues/23837) | Xóa nhầm toàn bộ thư mục dự án ở chế độ YOLO | 🆕 Mở | 2 | **Rủi ro bảo mật**: Kịch bản dọn dẹp do Agent tạo ra xóa nhầm toàn bộ nội dung, cần siết chặt ranh giới quyền hạn |
| [#22855](https://github.com/google-gemini/gemini-cli/issues/22855) | `/plan` hỗ trợ truyền tham số trực tiếp | 🔒 Nội bộ | 2 | Giảm các bước tương tác, hỗ trợ khởi động kế hoạch chỉ với `/plan <prompt>` |
| [#22822](https://github.com/google-gemini/gemini-cli/issues/22822) | `/spec setup` tương thích thư mục `/conductor` hiện có | 🔒 Nội bộ | 2 | Thiết kế đường dẫn di chuyển, chuyển đổi mượt mà quy trình làm việc cũ |
| [#23724](https://github.com/google-gemini/gemini-cli/issues/23724) | Lưu trữ Tracker cấp dự án bền vững | 🔒 Nội bộ | 1 | Cốt lõi SDD: trạng thái tác vụ chuyển từ thư mục tạm sang `.gemini/tracker/`, hỗ trợ cộng tác Git |
| [#23838](https://github.com/google-gemini/gemini-cli/issues/23838) | Đăng ký Google AI Plus không thể sử dụng Gemini 3.1 Pro | 🆕 Mở | 1 | Quyền lợi đăng ký và tính khả dụng của mô hình CLI không khớp, trải nghiệm người dùng trả phí bị ảnh hưởng |
| [#23582](https://github.com/google-gemini/gemini-cli/issues/23582) | Subagent nhận biết chế độ phê duyệt hiện tại | 🔒 Nội bộ | 1 | Subagent cần đồng bộ trạng thái chế độ Plan/Auto-Edit, tránh xung đột chính sách |

---

## Tiến triển PR quan trọng (Top 10)

| # | Tiêu đề | Trạng thái | Thay đổi cốt lõi |
|---|------|------|---------|
| [#23692](https://github.com/google-gemini/gemini-cli/pull/23692) | Sandbox Linux động và hỗ trợ Worktree | 🆕 Mở | Tương đương khả năng Seatbelt của macOS, hỗ trợ Git worktree và phân tích đường dẫn động |
| [#23836](https://github.com/google-gemini/gemini-cli/pull/23836) | Thư mục Tracker đóng góp mở rộng + ưu tiên cấp dự án | 🆕 Mở | Khả năng tiền đề SDD: Phần mở rộng có thể đăng ký thư mục tracker thông qua `gemini-extension.json` |
| [#23693](https://github.com/google-gemini/gemini-cli/pull/23693) | Thích ứng toàn chiều hộp thoại hỏi đáp | ✅ Đã hợp nhất | Loại bỏ giới hạn 15 dòng, terminal tự động tận dụng toàn bộ không gian |
| [#23818](https://github.com/google-gemini/gemini-cli/pull/23818) | Lưu trữ chính sách độc lập của máy khách ACP | 🆕 Mở | Cô lập cấu hình "luôn cho phép" của IDE như VS Code, ngăn chặn rò rỉ cấu hình |
| [#23751](https://github.com/google-gemini/gemini-cli/pull/23751) | Sửa lỗi bộ đệm không giới hạn tăng trưởng khi thực thi Shell | 🆕 Mở | Giải quyết vấn đề bộ nhớ tăng và treo UI/lỗi do lệnh đầu ra cao gây ra |
| [#23831](https://github.com/google-gemini/gemini-cli/pull/23831) | Sửa lỗi chính sách tương tác Máy chủ A2A | 🆕 Mở | Sửa lỗi chính sách ask không được chuyển tiếp trong môi trường không có TTY |
| [#23814](https://github.com/google-gemini/gemini-cli/pull/23814) | Cơ sở hạ tầng Worker phát triển GCP | 🆕 Mở | Chuẩn bị môi trường phát triển hiệu suất cao từ xa, hiện tại là no-op, chờ kích hoạt sau này |
| [#23508](https://github.com/google-gemini/gemini-cli/pull/23508) | Hợp nhất chỉ báo chế độ phiên + tái cấu trúc Composer | Mở | Tích hợp tất cả trạng thái chế độ trên thanh dưới cùng, giảm rung lắc UI |
| [#20974](https://github.com/google-gemini/gemini-cli/pull/20974) | Triển khai đầu ra công cụ nhỏ gọn | Mở | Chế độ hiển thị tín hiệu cao, rút ngắn khoảng cách giữa lời nhắc người dùng và phản hồi hệ thống |
| [#20289](https://github.com/google-gemini/gemini-cli/pull/20289) | Hỗ trợ tải tệp chính sách qua liên kết tượng trưng | ✅ Đã hợp nhất | Sửa lỗi liên kết tượng trưng `*.toml` bị bỏ qua một cách thầm lặng |

---

## Xu hướng nhu cầu chức năng

Bốn hướng chính được rút ra từ 50 Issue đang hoạt động:

| Hướng | Độ nóng | Issue điển hình | Mô tả |
|------|------|-----------|------|
| **Hiệu suất và độ tin cậy của Agent** | 🔥🔥🔥 | #22141, #23556, #23571 | Độ trễ phản hồi, nén quá mức, ô nhiễm tệp tạm thời là những điểm yếu cốt lõi |
| **Hoàn thiện quy trình làm việc SDD/Tracker** | 🔥🔥🔥 | #23724, #23320, #23804, #23802 | Theo dõi tác vụ DAG, cầu nối Spec-Tracker, lưu trữ bền vững là trọng tâm xây dựng |
| **Trải nghiệm cấp doanh nghiệp và đăng ký** | 🔥🔥 | #23838, #22855, #23582 | Căn chỉnh quyền mô hình, chi tiết hóa chế độ phê duyệt, hỗ trợ cộng tác nhóm |
| **Trí tuệ mã nguồn sâu** | 🔥🔥 | #22745, #22746 | Phân tích nhận biết AST, ánh xạ chính xác kho mã, giảm lãng phí token |

---

## Điểm quan tâm của nhà phát triển

### 🔴 Điểm yếu tần suất cao
1. **Agent bị treo/hết giờ** — 38 bình luận trong #22141 cho thấy nhiều người dùng gặp phải, nhiệm vụ nhỏ mất hàng giờ một cách không thể đoán trước
2. **Rủi ro bảo mật chế độ YOLO** — Sự cố xóa nhầm trong #23837 cảnh báo cần thiết kế lại ranh giới quyền thực thi tự động
3. **Sự không nhất quán của mô hình khả dụng** — Đăng ký Plus và mô hình khả dụng thực tế của CLI không khớp (#23838)

### 🟡 Ma sát trải nghiệm
- Sự kết nối không suôn sẻ giữa chế độ Plan và chuyển đổi mô hình ( #23230)
- Tệp tập lệnh tạm thời nằm rải rác, khó dọn dẹp ( #23571)
- Thông tin gỡ lỗi (F12) hiển thị bất thường trong môi trường đám mây ( #23815)

### 🟢 Kỳ vọng tích cực
- **Môi trường phát triển từ xa Gemini Workspaces** ( #22714, #23814) báo hiệu các tác vụ nặng có thể được chuyển lên đám mây
- **Chuỗi công cụ nhận biết AST** có thể cải thiện hiệu quả xử lý kho mã lớn về cơ bản
- **Lưu trữ bền vững Tracker** làm cho quy trình làm việc SDD có thể cộng tác với nhóm

---

*Nguồn dữ liệu: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | Chu kỳ thống kê: 2026-03-25 đến 2026-03-26*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# Nhật ký Động thái Cộng đồng GitHub Copilot CLI | 2026-03-26

## Tổng quan nhanh hôm nay

GitHub Copilot CLI hôm nay phát hành hai phiên bản **v1.0.12-1** và **v1.0.12-0**, tập trung sửa các vấn đề quan trọng như phân tích tham số PowerShell, siêu liên kết terminal VS Code, và bổ sung hỗ trợ tệp cấu hình Claude. Các Issue trong cộng đồng có mức độ hoạt động đáng kể, **báo động sai chính sách tổ chức máy chủ MCP** và **vấn đề giới hạn tốc độ** trở thành điểm yếu mà các nhà phát triển tập trung phản hồi, số lượng Issue yêu cầu chức năng mới tăng 6 trong một ngày.

---

## Phát hành phiên bản

### v1.0.12-1 (Mới nhất)
| Loại | Nội dung cập nhật |
|:---|:---|
| **Cải tiến** | Payload thanh trạng thái bổ sung trường `session_name`, song song với `session_id` |
| **Sửa lỗi** | Siêu liên kết OSC 8 trong terminal VS Code giờ có thể nhấp được; Sửa lỗi tham số `/flag` PowerShell bị nhận diện nhầm thành đường dẫn tệp; Cải thiện lời nhắc truy cập thư mục đáng tin cậy |

### v1.0.12-0
| Loại | Nội dung cập nhật |
|:---|:---|
| **Cải tiến** | Bổ sung `.claude/settings.json` và `.claude/settings.local.json` làm nguồn cấu hình kho mã; Bộ chọn mô hình hỗ trợ chế độ toàn màn hình, phím mũi tên ←/→ điều chỉnh cường độ suy luận theo thời gian thực; Hook OTEL thực thi chuyển sang ghi nhật ký sự kiện span, giảm chi phí đo lường từ xa |

---

## Các Issue nóng trong cộng đồng

| # | Trạng thái | Tiêu đề | Bình luận | 👍 | Điểm quan sát chính |
|:---|:---|:---|:---:|:---:|:---|
| [#1481](https://github.com/github/copilot-cli/issues/1481) | 🔴 Mở | SHIFT + ENTER nên xuống dòng thay vì thực thi gợi ý | 12 | 10 | **Điểm yếu tương tác tần suất cao**: Xung đột với thói quen phím tắt của ứng dụng trò chuyện phổ biến, cộng đồng yêu cầu mạnh mẽ, ảnh hưởng đến trải nghiệm nhập liệu |
| [#2101](https://github.com/github/copilot-cli/issues/2101) | 🔴 Mở | Lỗi API tạm thời gây ra việc kích hoạt giới hạn tốc độ thường xuyên | 7 | 2 | **Vấn đề độ ổn định**: Cơ chế thử lại xung đột với chiến lược giới hạn tốc độ, quy trình làm việc của người dùng doanh nghiệp bị gián đoạn |
| [#2236](https://github.com/github/copilot-cli/issues/2236) | 🔴 Mở | Máy chủ MCP biến mất khỏi sổ đăng ký tổ chức — báo động sai "bị tổ chức vô hiệu hóa" | 4 | 17 | **Khẩn cấp với lượt thích cao**: Lỗi phân tích chính sách tổ chức, ảnh hưởng nghiêm trọng đến việc áp dụng hệ sinh thái MCP của doanh nghiệp |
| [#970](https://github.com/github/copilot-cli/issues/970) | 🔴 Mở | Chặn chính sách bảo mật doanh nghiệp của macOS Gatekeeper | 5 | 18 | **Dài hạn với lượt thích cao**: Vấn đề ký/chứng thực liên tục làm phiền việc triển khai của doanh nghiệp, mỗi lần cập nhật cần cho phép thủ công |
| [#953](https://github.com/github/copilot-cli/issues/953) | 🔴 Mở | Yêu cầu quyền hạn quá mức, cần kiểm soát truy cập kho mã chi tiết | 6 | 1 | **Tuân thủ bảo mật**: Yêu cầu cốt lõi của người dùng doanh nghiệp, quyền đọc/ghi toàn tài khoản hiện tại không tuân thủ nguyên tắc quyền tối thiểu |
| [#1313](https://github.com/github/copilot-cli/issues/1313) | 🔴 Mở | Chức năng nhánh phiên (Session Branching) | 5 | 5 | **Cải thiện quy trình làm việc**: Cho phép phân nhánh từ phiên hiện tại để giữ lại lịch sử, nhu cầu cốt lõi cho quản lý tác vụ phức tạp |
| [#1723](https://github.com/github/copilot-cli/issues/1723) | 🔴 Mở | Lệnh `/ide` không hoạt động trong VS Code | 5 | 2 | **Đứt gãy tích hợp IDE**: Phát hiện kho mã CLI và VS Code thất bại, ảnh hưởng quy trình làm việc kết hợp |
| [#1422](https://github.com/github/copilot-cli/issues/1422) | 🔴 Mở | Xung đột CTRL+C và ESC hủy gợi ý | 4 | 0 | **Tính nhất quán tương tác**: Hành vi không khớp với gợi ý UI, dễ thao tác nhầm dẫn đến gián đoạn tác vụ |
| [#2289](https://github.com/github/copilot-cli/issues/2289) | 🔴 Mở | Vẫn bị giới hạn tốc độ ngay cả khi còn 75% hạn ngạch gói Pro | 0 | 0 | **Tranh cãi thanh toán**: Trải nghiệm người dùng trả phí không khớp với cam kết, phản hồi cảm tính phản ánh khủng hoảng niềm tin |
| [#2291](https://github.com/github/copilot-cli/issues/2291) | 🔴 Mở | Tải lại `.mcp.json` lặp lại gây lỗi máy chủ MCP từ xa | 0 | 0 | **Lỗi hệ thống cấu hình**: Tải lại gấp đôi trong thư mục gốc git phá vỡ kết nối MCP HTTP từ xa |

---

## Tiến triển PR quan trọng

> **Không có Pull Requests đang hoạt động hôm nay** (số lượng PR được cập nhật trong 24 giờ qua là 0)

---

## Xu hướng nhu cầu chức năng

Dựa trên phân tích 44 Issue đang hoạt động, trọng tâm cộng đồng cho thấy các xu hướng sau:

| Hướng xu hướng | Issue điển hình | Chỉ số độ nóng |
|:---|:---|:---:|
| **Độ ổn định hệ sinh thái MCP** | #2236, #2176, #1976, #2223, #2291 | 🔥🔥🔥🔥🔥 |
| **Chiến lược giới hạn tốc độ và độ tin cậy** | #2101, #2267, #2289 | 🔥🔥🔥🔥 |
| **Tích hợp sâu IDE/editor** | #1723, #1752 | 🔥🔥🔥 |
| **Chuẩn hóa trải nghiệm tương tác** | #1481, #1422, #2288, #2287 | 🔥🔥🔥 |
| **Bảo mật và tuân thủ doanh nghiệp** | #953, #970, #2157 | 🔥🔥🔥 |
| **Quản lý phiên và quy trình làm việc** | #1313, #2292, #2248 | 🔥🔥 |
| **Mở rộng hỗ trợ mô hình** | #1664 (Gemini 3.1 Pro) | 🔥🔥 |
| **Hoàn thiện hệ sinh thái plugin** | #2296, #2295, #2249 | 🔥🔥 |

**Thông tin chi tiết quan trọng**: Các Issue liên quan đến máy chủ MCP chiếm hơn 20%, phân tích chính sách tổ chức, kết nối máy chủ từ xa, và khả năng tương thích schema gọi công cụ cấu thành khu vực nợ kỹ thuật hiện tại.

---

## Điểm quan tâm của nhà phát triển

### 🔴 Điểm yếu tần suất cao

| Loại | Vấn đề cụ thể | Phạm vi ảnh hưởng |
|:---|:---|:---|
| **Báo động sai chính sách tổ chức MCP** | Máy chủ MCP được cấu hình trong sổ đăng ký doanh nghiệp bị gắn nhãn sai là "bị tổ chức vô hiệu hóa" | Nhóm doanh nghiệp |
| **Chiến lược giới hạn tốc độ không minh bạch** | Việc thử lại lỗi tạm thời kích hoạt giới hạn, hạn ngạch gói Pro không khớp với khả năng sử dụng thực tế | Toàn bộ người dùng trả phí |
| **Quyền/ký đa nền tảng** | Gatekeeper macOS liên tục chặn, xung đột chính sách bảo mật doanh nghiệp | Người dùng doanh nghiệp macOS |
| **Kết nối IDE không ổn định** | Lỗi phát hiện kho mã lệnh `/ide`, sự phối hợp CLI-VS Code bị đứt gãy | Người dùng quy trình làm việc kết hợp |

### 🟡 Nhu cầu tối ưu hóa trải nghiệm

- **Chuẩn hóa phím tắt**: SHIFT+ENTER xuống dòng phù hợp với thông lệ ngành (#1481)
- **Tăng cường phản hồi trực quan**: Phân biệt trực quan giữa nhập liệu người dùng và đầu ra AI (#2288)
- **Ngăn chặn thao tác nhầm khi hủy**: Hành vi nhất quán của ESC/CTRL+C (#1422, #2287)

### 🟢 Kỳ vọng chức năng mới nổi

- **Đặt tên phiên thông minh**: Hỗ trợ `/rename` tự động tạo tên liên quan đến ngữ cảnh (#2292)
- **Quản lý plugin hàng loạt**: Cơ chế nhắc cập nhật và `plugin update all` ( #2296, #2295)
- **Đơn giản hóa quy trình phản hồi**: Tuyến đường `/feedback` duy nhất giảm ma sát quyết định (#2297)

---

*Nhật ký hàng ngày dựa trên dữ liệu công khai github.com/github/copilot-cli*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Nhật ký Động thái Cộng đồng Kimi Code CLI | 2026-03-26

---

## Tổng quan nhanh hôm nay

Kimi Code CLI hôm nay phát hành **v1.26.0**, chính thức đánh dấu hệ thống plugin ở giai đoạn Beta, đồng thời sửa lỗi tương thích giao thức ACP terminal và vấn đề xử lý yêu cầu ở chế độ YOLO. Mức độ hoạt động của cộng đồng tăng đáng kể, 24 giờ qua ghi nhận 17 Issue mới và 22 PR, trọng tâm cốt lõi tập trung vào ba hướng chính: **hiệu suất hoàn thiện tham chiếu tệp**, **phím tắt tùy chỉnh** và **cơ chế hàng đợi tác vụ**.

---

## Phát hành phiên bản

### v1.26.0 (2026-03-25)

| Loại thay đổi | Nội dung |
|---------|------|
| 📚 Cập nhật tài liệu | Hệ thống plugin chính thức được đánh dấu là Beta giai đoạn ([#1558](https://github.com/MoonshotAI/kimi-cli/pull/1558)) |
| 🔧 Sửa lỗi | Thay thế `acp.TerminalHandle` đã bị xóa bằng phương thức terminal client ([#1400](https://github.com/MoonshotAI/kimi-cli/pull/1400)) |
| 🔧 Sửa lỗi | Tự động phân tích `QuestionRequest` ở chế độ YOLO |

> Cập nhật đi kèm: phụ thuộc `kosong` được nâng cấp từ 0.45.0 lên 0.46.0

---

## Các Issue nóng trong cộng đồng

### 🔴 Lỗi ưu tiên cao

| # | Tiêu đề | Trạng thái | Thông tin chính |
|---|------|------|---------|
| [#1375](https://github.com/MoonshotAI/kimi-cli/issues/1375) | Không tìm thấy tệp khi tham chiếu tệp `@` | **Mở** | Ảnh hưởng đến kho mã lớn từ v1.18.0, người dùng phản hồi lỗi hoàn thiện tệp trong thư mục sắp xếp theo thứ tự chữ cái cuối cùng, PR cộng đồng đã cố gắng sửa lỗi |
| [#1570](https://github.com/MoonshotAI/kimi-cli/issues/1570) | Công cụ Edit luôn bị treo | **Mở** | Vấn đề mới phát sinh từ v1.25