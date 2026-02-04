export const questions = [
  {
    id: 1,
    question: "Which of the following best describes a test scenario?",
    translation: { vi: "Mô tả nào phù hợp nhất về một kịch bản kiểm thử?" },
    answers: [
      {
        text: "High-level description of what to test",
        correct: true,
        translation: { vi: "Mô tả ở mức cao về điều cần kiểm thử" },
      },
      {
        text: "A single defect report",
        correct: false,
        translation: { vi: "Một báo cáo lỗi" },
      },
      {
        text: "A configuration script",
        correct: false,
        translation: { vi: "Một script cấu hình" },
      },
      {
        text: "Production deployment plan",
        correct: false,
        translation: { vi: "Kế hoạch triển khai sản xuất" },
      },
    ],
  },
  {
    id: 2,
    question: "When should regression tests be executed?",
    translation: { vi: "Khi nào nên thực hiện regression tests?" },
    answers: [
      {
        text: "Whenever the software or its environment changes",
        correct: true,
        translation: { vi: "Bất cứ khi nào phần mềm hoặc môi trường thay đổi" },
      },
      {
        text: "Only after major releases",
        correct: false,
        translation: { vi: "Chỉ sau phát hành lớn" },
      },
      { text: "Never", correct: false, translation: { vi: "Không bao giờ" } },
      {
        text: "Only during beta testing",
        correct: false,
        translation: { vi: "Chỉ trong beta" },
      },
    ],
  },
  {
    id: 3,
    question: "Which type of testing focuses on interactions between modules?",
    translation: {
      vi: "Loại kiểm thử nào tập trung vào tương tác giữa các module?",
    },
    answers: [
      {
        text: "Integration testing",
        correct: true,
        translation: { vi: "Kiểm thử tích hợp" },
      },
      {
        text: "Component testing",
        correct: false,
        translation: { vi: "Kiểm thử thành phần" },
      },
      {
        text: "Usability testing",
        correct: false,
        translation: { vi: "Kiểm thử khả dụng" },
      },
      {
        text: "Acceptance testing",
        correct: false,
        translation: { vi: "Kiểm thử chấp nhận" },
      },
    ],
  },
  {
    id: 4,
    question: "Which of following is true about test automation maintenance?",
    translation: { vi: "Điều nào đúng về bảo trì tự động hóa kiểm thử?" },
    answers: [
      {
        text: "Automation needs ongoing maintenance as the system evolves",
        correct: true,
        translation: {
          vi: "Tự động hóa cần bảo trì liên tục khi hệ thống phát triển",
        },
      },
      {
        text: "Automation never needs updates",
        correct: false,
        translation: { vi: "Tự động hóa không bao giờ cần cập nhật" },
      },
      {
        text: "Automation replaces the need for test design",
        correct: false,
        translation: { vi: "Tự động hóa thay thế thiết kế kiểm thử" },
      },
      {
        text: "Maintenance decreases ROI",
        correct: false,
        translation: { vi: "Bảo trì giảm ROI" },
      },
    ],
  },
  {
    id: 5,
    question: "Which is a characteristic of an effective defect report?",
    translation: { vi: "Đặc tính nào của báo cáo lỗi hiệu quả?" },
    answers: [
      {
        text: "Clear steps to reproduce and expected vs actual results",
        correct: true,
        translation: {
          vi: "Các bước tái hiện rõ ràng và kết quả mong đợi so với thực tế",
        },
      },
      {
        text: "Vague description with no steps",
        correct: false,
        translation: { vi: "Mô tả mơ hồ không có bước" },
      },
      {
        text: "Only a screenshot without context",
        correct: false,
        translation: { vi: "Chỉ ảnh chụp màn hình không có ngữ cảnh" },
      },
      {
        text: "No priority assigned",
        correct: false,
        translation: { vi: "Không gán ưu tiên" },
      },
    ],
  },
  {
    id: 6,
    question: "What is statement testing used to measure?",
    translation: { vi: "Kiểm thử câu lệnh dùng để đo lường gì?" },
    answers: [
      {
        text: "Statement (code) coverage",
        correct: true,
        translation: { vi: "Độ bao phủ câu lệnh (mã)" },
      },
      {
        text: "User satisfaction",
        correct: false,
        translation: { vi: "Hài lòng người dùng" },
      },
      {
        text: "Number of test cases",
        correct: false,
        translation: { vi: "Số kịch bản" },
      },
      {
        text: "Test environment stability",
        correct: false,
        translation: { vi: "Ổn định môi trường" },
      },
    ],
  },
  {
    id: 7,
    question: "Which of the following is NOT a test level?",
    translation: { vi: "Điều nào sau đây KHÔNG phải là mức kiểm thử?" },
    answers: [
      {
        text: "Recruitment testing",
        correct: true,
        translation: { vi: "Kiểm thử tuyển dụng" },
      },
      {
        text: "Unit testing",
        correct: false,
        translation: { vi: "Kiểm thử đơn vị" },
      },
      {
        text: "System testing",
        correct: false,
        translation: { vi: "Kiểm thử hệ thống" },
      },
      {
        text: "Integration testing",
        correct: false,
        translation: { vi: "Kiểm thử tích hợp" },
      },
    ],
  },
  {
    id: 8,
    question: "Which of the following is a test design technique?",
    translation: { vi: "Kỹ thuật thiết kế kiểm thử nào sau đây?" },
    answers: [
      {
        text: "Boundary value analysis",
        correct: true,
        translation: { vi: "Phân tích giá trị biên" },
      },
      {
        text: "Continuous integration",
        correct: false,
        translation: { vi: "Tích hợp liên tục" },
      },
      {
        text: "Configuration management",
        correct: false,
        translation: { vi: "Quản lý cấu hình" },
      },
      {
        text: "Retrospective",
        correct: false,
        translation: { vi: "Retrospective" },
      },
    ],
  },
  {
    id: 9,
    question: "What does test estimation aim to provide?",
    translation: { vi: "Ước lượng kiểm thử nhằm cung cấp gì?" },
    answers: [
      {
        text: "Costs, effort and schedule for testing activities",
        correct: true,
        translation: {
          vi: "Chi phí, nỗ lực và lịch trình cho hoạt động kiểm thử",
        },
      },
      {
        text: "Detailed defect reports",
        correct: false,
        translation: { vi: "Báo cáo lỗi chi tiết" },
      },
      {
        text: "Final product release date only",
        correct: false,
        translation: { vi: "Chỉ ngày phát hành" },
      },
      {
        text: "Which developers to hire",
        correct: false,
        translation: { vi: "Tuyển lập trình viên nào" },
      },
    ],
  },
  {
    id: 10,
    question:
      "Which test technique is best for input field length constraints?",
    translation: {
      vi: "Kỹ thuật kiểm thử nào phù hợp nhất cho ràng buộc độ dài trường nhập liệu?",
    },
    answers: [
      {
        text: "Boundary value analysis",
        correct: true,
        translation: { vi: "Phân tích giá trị biên" },
      },
      {
        text: "State transition testing",
        correct: false,
        translation: { vi: "Kiểm thử chuyển đổi trạng thái" },
      },
      {
        text: "Load testing",
        correct: false,
        translation: { vi: "Kiểm thử tải" },
      },
      {
        text: "Decision table testing",
        correct: false,
        translation: { vi: "Bảng quyết định" },
      },
    ],
  },
  {
    id: 11,
    question: "What is the main benefit of reviews?",
    translation: { vi: "Lợi ích chính của review là gì?" },
    answers: [
      {
        text: "Early detection of defects before testing",
        correct: true,
        translation: { vi: "Phát hiện lỗi sớm trước khi kiểm thử" },
      },
      {
        text: "Replace testing entirely",
        correct: false,
        translation: { vi: "Thay thế hoàn toàn kiểm thử" },
      },
      {
        text: "Automate regression tests",
        correct: false,
        translation: { vi: "Tự động hóa kiểm thử hồi quy" },
      },
      {
        text: "Increase production defects",
        correct: false,
        translation: { vi: "Tăng lỗi sản xuất" },
      },
    ],
  },
  {
    id: 12,
    question: "Which test type is concerned with user-friendliness?",
    translation: {
      vi: "Loại kiểm thử nào quan tâm tới tính thân thiện với người dùng?",
    },
    answers: [
      {
        text: "Usability testing",
        correct: true,
        translation: { vi: "Kiểm thử khả dụng" },
      },
      {
        text: "Unit testing",
        correct: false,
        translation: { vi: "Kiểm thử đơn vị" },
      },
      {
        text: "Statement testing",
        correct: false,
        translation: { vi: "Kiểm thử câu lệnh" },
      },
      {
        text: "Control flow testing",
        correct: false,
        translation: { vi: "Kiểm thử luồng điều khiển" },
      },
    ],
  },
  {
    id: 13,
    question: "What is the typical result of a pilot automation project?",
    translation: {
      vi: "Kết quả điển hình của dự án tự động hóa thí điểm là gì?",
    },
    answers: [
      {
        text: "Assessment whether tool fits processes and delivers value",
        correct: true,
        translation: {
          vi: "Đánh giá xem công cụ có phù hợp và mang lại giá trị",
        },
      },
      {
        text: "Immediate company-wide automation",
        correct: false,
        translation: { vi: "Tự động hóa trên toàn công ty ngay lập tức" },
      },
      {
        text: "No need for testers anymore",
        correct: false,
        translation: { vi: "Không cần tester nữa" },
      },
      {
        text: "Guaranteed ROI in week one",
        correct: false,
        translation: { vi: "Đảm bảo ROI trong tuần đầu" },
      },
    ],
  },
  {
    id: 14,
    question:
      "Which testing technique is most appropriate for complex business rules?",
    translation: {
      vi: "Kỹ thuật kiểm thử nào phù hợp nhất cho các quy tắc nghiệp vụ phức tạp?",
    },
    answers: [
      {
        text: "Decision table testing",
        correct: true,
        translation: { vi: "Bảng quyết định" },
      },
      {
        text: "Boundary value analysis",
        correct: false,
        translation: { vi: "Phân tích giá trị biên" },
      },
      {
        text: "Equivalence partitioning",
        correct: false,
        translation: { vi: "Phân vùng tương đương" },
      },
      {
        text: "Statement testing",
        correct: false,
        translation: { vi: "Kiểm thử câu lệnh" },
      },
    ],
  },
  {
    id: 15,
    question: "Which of the following is a test closure activity?",
    translation: { vi: "Hoạt động đóng kiểm thử nào sau đây?" },
    answers: [
      {
        text: "Collecting metrics and lessons learned",
        correct: true,
        translation: { vi: "Thu thập chỉ số và bài học kinh nghiệm" },
      },
      {
        text: "Start test execution",
        correct: false,
        translation: { vi: "Bắt đầu thực thi kiểm thử" },
      },
      {
        text: "Hire new testers",
        correct: false,
        translation: { vi: "Tuyển tester mới" },
      },
      {
        text: "Design new features",
        correct: false,
        translation: { vi: "Thiết kế tính năng mới" },
      },
    ],
  },
  {
    id: 16,
    question: "Which of following best describes exploratory testing?",
    translation: { vi: "Mô tả nào phù hợp nhất về kiểm thử thăm dò?" },
    answers: [
      {
        text: "Simultaneous exploration, design and execution",
        correct: true,
        translation: { vi: "Khám phá, thiết kế và thực thi đồng thời" },
      },
      {
        text: "Strict scripting only",
        correct: false,
        translation: { vi: "Chỉ theo kịch bản nghiêm ngặt" },
      },
      {
        text: "Only run automated tests",
        correct: false,
        translation: { vi: "Chỉ chạy kiểm thử tự động" },
      },
      {
        text: "Only static activity",
        correct: false,
        translation: { vi: "Chỉ hoạt động tĩnh" },
      },
    ],
  },
  {
    id: 17,
    question: "What is the purpose of test monitoring and control?",
    translation: { vi: "Mục đích của giám sát và điều khiển kiểm thử là gì?" },
    answers: [
      {
        text: "Ensure testing stays on track and take corrective actions when needed",
        correct: true,
        translation: {
          vi: "Đảm bảo kiểm thử đúng tiến độ và thực hiện hành động khắc phục khi cần",
        },
      },
      {
        text: "To stop testing immediately at any sign of defect",
        correct: false,
        translation: { vi: "Dừng kiểm thử ngay khi có lỗi" },
      },
      {
        text: "Replace test planning",
        correct: false,
        translation: { vi: "Thay thế lập kế hoạch" },
      },
      {
        text: "Avoid reporting to stakeholders",
        correct: false,
        translation: { vi: "Tránh báo cáo cho bên liên quan" },
      },
    ],
  },
  {
    id: 18,
    question: "Which of the following is a white-box coverage measure?",
    translation: { vi: "Chỉ số bao phủ hộp trắng nào sau đây?" },
    answers: [
      {
        text: "Branch coverage",
        correct: true,
        translation: { vi: "Bao phủ nhánh" },
      },
      {
        text: "Equivalence coverage",
        correct: false,
        translation: { vi: "Bao phủ tương đương" },
      },
      {
        text: "User acceptance coverage",
        correct: false,
        translation: { vi: "Bao phủ chấp nhận người dùng" },
      },
      {
        text: "Requirement coverage",
        correct: false,
        translation: { vi: "Bao phủ yêu cầu" },
      },
    ],
  },
  {
    id: 19,
    question: "What is an exit criterion?",
    translation: { vi: "Tiêu chí dừng là gì?" },
    answers: [
      {
        text: "Condition that must be met to stop testing",
        correct: true,
        translation: { vi: "Điều kiện phải thỏa để dừng kiểm thử" },
      },
      {
        text: "A test case executing forever",
        correct: false,
        translation: { vi: "Một kịch bản chạy mãi" },
      },
      {
        text: "Rule to start coding",
        correct: false,
        translation: { vi: "Quy tắc bắt đầu viết mã" },
      },
      {
        text: "Requirement traceability matrix",
        correct: false,
        translation: { vi: "Ma trận truy xuất yêu cầu" },
      },
    ],
  },
  {
    id: 20,
    question: "Which of the following best helps detect defects early?",
    translation: { vi: "Điều gì giúp phát hiện lỗi sớm nhất?" },
    answers: [
      {
        text: "Reviews and static analysis",
        correct: true,
        translation: { vi: "Review và phân tích tĩnh" },
      },
      {
        text: "Only system testing",
        correct: false,
        translation: { vi: "Chỉ kiểm thử hệ thống" },
      },
      {
        text: "Only beta testing",
        correct: false,
        translation: { vi: "Chỉ beta testing" },
      },
      {
        text: "Skipping unit testing",
        correct: false,
        translation: { vi: "Bỏ qua unit testing" },
      },
    ],
  },
  {
    id: 21,
    question: "Which of the following defines a test objective?",
    translation: { vi: "Điều nào sau đây xác định mục tiêu kiểm thử?" },
    answers: [
      {
        text: "What to test and why (purpose of the tests)",
        correct: true,
        translation: { vi: "Cần kiểm thử gì và vì sao (mục đích kiểm thử)" },
      },
      {
        text: "Only the test budget",
        correct: false,
        translation: { vi: "Chỉ ngân sách kiểm thử" },
      },
      {
        text: "Who will be blamed for defects",
        correct: false,
        translation: { vi: "Ai bị đổ lỗi" },
      },
      {
        text: "How to write code",
        correct: false,
        translation: { vi: "Cách viết mã" },
      },
    ],
  },
  {
    id: 22,
    question: "Which is a typical cause of poor testability?",
    translation: { vi: "Nguyên nhân điển hình khiến khả năng kiểm thử kém?" },
    answers: [
      {
        text: "Low observability and controllability of the system",
        correct: true,
        translation: { vi: "Khả năng quan sát và điều khiển hệ thống thấp" },
      },
      {
        text: "Too many test cases",
        correct: false,
        translation: { vi: "Quá nhiều kịch bản" },
      },
      {
        text: "Experienced testers",
        correct: false,
        translation: { vi: "Tester kinh nghiệm" },
      },
      {
        text: "Good documentation",
        correct: false,
        translation: { vi: "Tài liệu tốt" },
      },
    ],
  },
  {
    id: 23,
    question:
      "Which technique is appropriate for testing combinations of inputs?",
    translation: {
      vi: "Kỹ thuật nào phù hợp để kiểm thử các kết hợp đầu vào?",
    },
    answers: [
      {
        text: "Decision table testing",
        correct: true,
        translation: { vi: "Bảng quyết định" },
      },
      {
        text: "Statement coverage",
        correct: false,
        translation: { vi: "Bao phủ câu lệnh" },
      },
      {
        text: "Usability testing",
        correct: false,
        translation: { vi: "Kiểm thử khả dụng" },
      },
      {
        text: "Unit testing",
        correct: false,
        translation: { vi: "Kiểm thử đơn vị" },
      },
    ],
  },
  {
    id: 24,
    question: "Which of the following is true about independent testing?",
    translation: { vi: "Điều nào đúng về kiểm thử độc lập?" },
    answers: [
      {
        text: "Performed by someone other than the author to reduce bias",
        correct: true,
        translation: {
          vi: "Thực hiện bởi người khác không phải tác giả để giảm thiên kiến",
        },
      },
      {
        text: "Always cheaper",
        correct: false,
        translation: { vi: "Luôn rẻ hơn" },
      },
      {
        text: "Not useful for complex systems",
        correct: false,
        translation: { vi: "Không hữu ích cho hệ thống phức tạp" },
      },
      {
        text: "Replaces user acceptance",
        correct: false,
        translation: { vi: "Thay thế chấp nhận người dùng" },
      },
    ],
  },
  {
    id: 25,
    question: "Which is a non-functional test objective?",
    translation: { vi: "Mục tiêu kiểm thử phi chức năng nào sau đây?" },
    answers: [
      {
        text: "Verify system meets performance and reliability requirements",
        correct: true,
        translation: {
          vi: "Xác minh hệ thống đáp ứng yêu cầu hiệu năng và độ tin cậy",
        },
      },
      {
        text: "Check spelling in UI",
        correct: false,
        translation: { vi: "Kiểm tra chính tả UI" },
      },
      {
        text: "Count number of unit tests",
        correct: false,
        translation: { vi: "Đếm số unit test" },
      },
      {
        text: "Assign tester schedules",
        correct: false,
        translation: { vi: "Phân lịch tester" },
      },
    ],
  },
  {
    id: 26,
    question: "Which of the following aids debugging?",
    translation: { vi: "Điều nào sau đây hỗ trợ gỡ lỗi?" },
    answers: [
      {
        text: "Clear, reproducible test cases and logs",
        correct: true,
        translation: { vi: "Kịch bản tái hiện rõ ràng và nhật ký" },
      },
      {
        text: "Vague error descriptions",
        correct: false,
        translation: { vi: "Mô tả lỗi mơ hồ" },
      },
      {
        text: "No test data",
        correct: false,
        translation: { vi: "Không có dữ liệu" },
      },
      {
        text: "Hidden defect reports",
        correct: false,
        translation: { vi: "Báo cáo lỗi bị ẩn" },
      },
    ],
  },
  {
    id: 27,
    question: "What does ‘test baseline’ mean?",
    translation: { vi: "'Test baseline' có nghĩa là gì?" },
    answers: [
      {
        text: "A set of testware that has been reviewed and agreed and serves as a basis for further testing",
        correct: true,
        translation: {
          vi: "Một tập testware đã được review và đồng ý, dùng làm cơ sở cho kiểm thử tiếp theo",
        },
      },
      {
        text: "Temporary test results",
        correct: false,
        translation: { vi: "Kết quả kiểm thử tạm thời" },
      },
      {
        text: "Final product release",
        correct: false,
        translation: { vi: "Phát hành sản phẩm cuối cùng" },
      },
      {
        text: "Test cases that are automated",
        correct: false,
        translation: { vi: "Kịch bản đã tự động" },
      },
    ],
  },
  {
    id: 28,
    question: "Which of these is a reason to stop testing early?",
    translation: { vi: "Lý do nào để dừng kiểm thử sớm?" },
    answers: [
      {
        text: "Exit criteria are met and residual risks are acceptable",
        correct: true,
        translation: {
          vi: "Tiêu chí dừng được đáp ứng và rủi ro còn lại chấp nhận được",
        },
      },
      {
        text: "Testers want a break",
        correct: false,
        translation: { vi: "Tester muốn nghỉ" },
      },
      {
        text: "Project budget is increased",
        correct: false,
        translation: { vi: "Ngân sách tăng" },
      },
      {
        text: "More test cases are added",
        correct: false,
        translation: { vi: "Thêm kịch bản" },
      },
    ],
  },
  {
    id: 29,
    question: "Which of following helps improve test effectiveness?",
    translation: { vi: "Điều gì giúp cải thiện hiệu quả kiểm thử?" },
    answers: [
      {
        text: "Using appropriate test techniques and focusing on risk",
        correct: true,
        translation: {
          vi: "Sử dụng kỹ thuật kiểm thử phù hợp và tập trung vào rủi ro",
        },
      },
      {
        text: "Run tests only once",
        correct: false,
        translation: { vi: "Chỉ chạy kiểm thử một lần" },
      },
      {
        text: "Avoid reviews",
        correct: false,
        translation: { vi: "Tránh review" },
      },
      {
        text: "Ignore production defects",
        correct: false,
        translation: { vi: "Bỏ qua lỗi sản xuất" },
      },
    ],
  },
  {
    id: 30,
    question: "Which activity is part of test monitoring?",
    translation: { vi: "Hoạt động nào là một phần của giám sát kiểm thử?" },
    answers: [
      {
        text: "Comparing actual progress against plan and taking corrective actions",
        correct: true,
        translation: {
          vi: "So sánh tiến độ thực tế so với kế hoạch và thực hiện hành động khắc phục",
        },
      },
      {
        text: "Designing the product architecture",
        correct: false,
        translation: { vi: "Thiết kế kiến trúc sản phẩm" },
      },
      {
        text: "Coding features",
        correct: false,
        translation: { vi: "Viết mã tính năng" },
      },
      {
        text: "Selling licenses",
        correct: false,
        translation: { vi: "Bán giấy phép" },
      },
    ],
  },
  {
    id: 31,
    question: "Which of the following is a test improvement activity?",
    translation: { vi: "Hoạt động nào là cải tiến kiểm thử?" },
    answers: [
      {
        text: "Implementing lessons learned and refining processes",
        correct: true,
        translation: { vi: "Triển khai bài học, tinh chỉnh quy trình" },
      },
      {
        text: "Creating more bugs",
        correct: false,
        translation: { vi: "Tạo nhiều lỗi hơn" },
      },
      {
        text: "Avoiding measurement",
        correct: false,
        translation: { vi: "Tránh đo lường" },
      },
      {
        text: "Closing the test team",
        correct: false,
        translation: { vi: "Đóng nhóm kiểm thử" },
      },
    ],
  },
  {
    id: 32,
    question: "Which is an example of a product risk?",
    translation: { vi: "Ví dụ nào là rủi ro sản phẩm?" },
    answers: [
      {
        text: "Software fails to perform intended functions",
        correct: true,
        translation: { vi: "Phần mềm không thực hiện được chức năng dự kiến" },
      },
      {
        text: "Late delivery of test environment",
        correct: false,
        translation: { vi: "Giao môi trường muộn" },
      },
      {
        text: "Shortage of testers",
        correct: false,
        translation: { vi: "Thiếu tester" },
      },
      {
        text: "Budget cuts",
        correct: false,
        translation: { vi: "Cắt ngân sách" },
      },
    ],
  },
  {
    id: 33,
    question: "Which of the following is a purpose of test metrics?",
    translation: { vi: "Mục đích của chỉ số kiểm thử là gì?" },
    answers: [
      {
        text: "Provide measurable data to support project decisions",
        correct: true,
        translation: {
          vi: "Cung cấp dữ liệu đo lường hỗ trợ quyết định dự án",
        },
      },
      {
        text: "Replace all qualitative assessments",
        correct: false,
        translation: { vi: "Thay thế mọi đánh giá định tính" },
      },
      {
        text: "Hide project status",
        correct: false,
        translation: { vi: "Che giấu trạng thái dự án" },
      },
      {
        text: "Automatically fix defects",
        correct: false,
        translation: { vi: "Tự động sửa lỗi" },
      },
    ],
  },
  {
    id: 34,
    question:
      "Which of the following is a good practice for defect management?",
    translation: { vi: "Thực hành tốt nào cho quản lý lỗi?" },
    answers: [
      {
        text: "Record, track and close defects with clear status and ownership",
        correct: true,
        translation: {
          vi: "Ghi lại, theo dõi và đóng lỗi với trạng thái và chủ sở hữu rõ ràng",
        },
      },
      {
        text: "Ignore low priority defects",
        correct: false,
        translation: { vi: "Bỏ qua lỗi ưu tiên thấp" },
      },
      {
        text: "Delete old defect records",
        correct: false,
        translation: { vi: "Xoá bản ghi lỗi cũ" },
      },
      {
        text: "Keep defects undocumented",
        correct: false,
        translation: { vi: "Không ghi tài liệu lỗi" },
      },
    ],
  },
  {
    id: 35,
    question: "Which of the following is true about alpha and beta testing?",
    translation: { vi: "Điều nào đúng về alpha và beta testing?" },
    answers: [
      {
        text: "Alpha is at developer site; beta is with end users at their site",
        correct: true,
        translation: {
          vi: "Alpha tại địa điểm nhà phát triển; beta cùng người dùng tại chỗ của họ",
        },
      },
      {
        text: "Alpha is done by end users, beta by developers",
        correct: false,
        translation: { vi: "Alpha bởi người dùng, beta bởi lập trình viên" },
      },
      {
        text: "Both are identical to unit tests",
        correct: false,
        translation: { vi: "Cả hai giống unit test" },
      },
      {
        text: "Neither involve users",
        correct: false,
        translation: { vi: "Không ai tham gia người dùng" },
      },
    ],
  },
  {
    id: 36,
    question: "Which of these is an example of measurement in testing?",
    translation: { vi: "Ví dụ nào về đo lường trong kiểm thử?" },
    answers: [
      {
        text: "Number of executed test cases per day",
        correct: true,
        translation: { vi: "Số kịch bản đã chạy mỗi ngày" },
      },
      {
        text: "Tester opinions without data",
        correct: false,
        translation: { vi: "Ý kiến tester không có dữ liệu" },
      },
      {
        text: "Unstructured comments",
        correct: false,
        translation: { vi: "Bình luận không cấu trúc" },
      },
      {
        text: "Secret estimates",
        correct: false,
        translation: { vi: "Ước lượng bí mật" },
      },
    ],
  },
  {
    id: 37,
    question: "Which is a reason to use automation for regression tests?",
    translation: { vi: "Lý do sử dụng tự động hoá cho regression tests?" },
    answers: [
      {
        text: "Regression tests are repeated frequently and benefit from automation",
        correct: true,
        translation: {
          vi: "Regression thường lặp lại thường xuyên và hưởng lợi từ tự động",
        },
      },
      {
        text: "They are never repeated",
        correct: false,
        translation: { vi: "Chúng không bao giờ lặp lại" },
      },
      {
        text: "They require no maintenance",
        correct: false,
        translation: { vi: "Không cần bảo trì" },
      },
      {
        text: "They always run faster manually",
        correct: false,
        translation: { vi: "Luôn chạy nhanh hơn thủ công" },
      },
    ],
  },
  {
    id: 38,
    question: "Which of the following is a white-box test technique?",
    translation: { vi: "Kỹ thuật kiểm thử hộp trắng nào sau đây?" },
    answers: [
      {
        text: "Control flow testing",
        correct: true,
        translation: { vi: "Kiểm thử luồng điều khiển" },
      },
      {
        text: "Decision table testing",
        correct: false,
        translation: { vi: "Bảng quyết định" },
      },
      {
        text: "Usability testing",
        correct: false,
        translation: { vi: "Kiểm thử khả dụng" },
      },
      {
        text: "Exploratory testing",
        correct: false,
        translation: { vi: "Kiểm thử thăm dò" },
      },
    ],
  },
  {
    id: 39,
    question: "Which of the following is a major objective of testing?",
    translation: { vi: "Mục tiêu chính của kiểm thử là gì?" },
    answers: [
      {
        text: "To prevent defects by evaluating work products",
        correct: true,
        translation: {
          vi: "Ngăn ngừa lỗi bằng cách đánh giá sản phẩm công việc",
        },
      },
      {
        text: "To prove software is 100% correct",
        correct: false,
        translation: { vi: "Chứng minh phần mềm đúng 100%" },
      },
      {
        text: "To increase the number of defects",
        correct: false,
        translation: { vi: "Tăng số lỗi" },
      },
      {
        text: "To ensure no testing is needed",
        correct: false,
        translation: { vi: "Đảm bảo không cần kiểm thử" },
      },
    ],
  },
  {
    id: 40,
    question: "Which is an important factor when selecting tests to automate?",
    translation: {
      vi: "Yếu tố quan trọng khi chọn kịch bản để tự động là gì?",
    },
    answers: [
      {
        text: "Frequency of execution and stability of the feature",
        correct: true,
        translation: { vi: "Tần suất thực thi và độ ổn định của tính năng" },
      },
      {
        text: "Only tests with complicated steps",
        correct: false,
        translation: { vi: "Chỉ kịch bản nhiều bước" },
      },
      {
        text: "Only low priority tests",
        correct: false,
        translation: { vi: "Chỉ test ưu tiên thấp" },
      },
      {
        text: "Never automated tests",
        correct: false,
        translation: { vi: "Không bao giờ tự động" },
      },
    ],
  },
];
