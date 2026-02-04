export const questions = [
  {
    id: 1,
    question: "What is the primary purpose of testing?",
    translation: { vi: "Mục đích chính của kiểm thử là gì?" },
    answers: [
      {
        text: "To find defects",
        correct: true,
        translation: { vi: "Tìm lỗi" },
      },
      {
        text: "To prove there are no defects",
        correct: false,
        translation: { vi: "Chứng minh không có lỗi" },
      },
      {
        text: "To increase development speed",
        correct: false,
        translation: { vi: "Tăng tốc phát triển" },
      },
      {
        text: "To replace reviews",
        correct: false,
        translation: { vi: "Thay thế review" },
      },
    ],
  },
  {
    id: 2,
    question:
      "Which test level validates the whole system against requirements?",
    translation: {
      vi: "Mức kiểm thử nào xác nhận hệ thống toàn phần so với yêu cầu?",
    },
    answers: [
      {
        text: "System testing",
        correct: true,
        translation: { vi: "Kiểm thử hệ thống" },
      },
      {
        text: "Unit testing",
        correct: false,
        translation: { vi: "Kiểm thử đơn vị" },
      },
      {
        text: "Integration testing",
        correct: false,
        translation: { vi: "Kiểm thử tích hợp" },
      },
      {
        text: "Acceptance testing",
        correct: false,
        translation: { vi: "Kiểm thử chấp nhận" },
      },
    ],
  },
  {
    id: 3,
    question: "What does ‘test coverage’ measure?",
    translation: { vi: "'Độ bao phủ kiểm thử' đo lường điều gì?" },
    answers: [
      {
        text: "Extent to which tests cover specified items",
        correct: true,
        translation: { vi: "Mức độ mà kiểm thử bao phủ các mục đã chỉ định" },
      },
      {
        text: "Number of testers on the team",
        correct: false,
        translation: { vi: "Số lượng tester trong đội" },
      },
      {
        text: "Amount of test automation",
        correct: false,
        translation: { vi: "Lượng tự động hóa kiểm thử" },
      },
      {
        text: "Time spent writing test cases",
        correct: false,
        translation: { vi: "Thời gian viết kịch bản kiểm thử" },
      },
    ],
  },
  {
    id: 4,
    question: "Which technique is a black-box test technique?",
    translation: { vi: "Kỹ thuật nào là kỹ thuật kiểm thử hộp đen?" },
    answers: [
      {
        text: "Equivalence partitioning",
        correct: true,
        translation: { vi: "Phân vùng tương đương" },
      },
      {
        text: "Branch testing",
        correct: false,
        translation: { vi: "Kiểm thử nhánh" },
      },
      {
        text: "Path testing",
        correct: false,
        translation: { vi: "Kiểm thử đường đi" },
      },
      {
        text: "Statement coverage",
        correct: false,
        translation: { vi: "Độ bao phủ câu lệnh" },
      },
    ],
  },
  {
    id: 5,
    question: "Boundary Value Analysis focuses on:",
    translation: { vi: "Phân tích giá trị biên tập trung vào:" },
    answers: [
      {
        text: "Values at and near the boundaries",
        correct: true,
        translation: { vi: "Các giá trị tại và gần biên" },
      },
      {
        text: "Random data only",
        correct: false,
        translation: { vi: "Chỉ dữ liệu ngẫu nhiên" },
      },
      {
        text: "Internal code structure",
        correct: false,
        translation: { vi: "Cấu trúc mã nội bộ" },
      },
      {
        text: "Only valid inputs",
        correct: false,
        translation: { vi: "Chỉ dữ liệu hợp lệ" },
      },
    ],
  },
  {
    id: 6,
    question: "What is a Test Case?",
    translation: { vi: "Kịch bản kiểm thử là gì?" },
    answers: [
      {
        text: "Set of inputs, execution conditions and expected results",
        correct: true,
        translation: {
          vi: "Tập hợp dữ liệu đầu vào, điều kiện thực thi và kết quả mong đợi",
        },
      },
      {
        text: "A bug report",
        correct: false,
        translation: { vi: "Báo cáo lỗi" },
      },
      {
        text: "Only automated scripts",
        correct: false,
        translation: { vi: "Chỉ kịch bản tự động" },
      },
      {
        text: "Project plan",
        correct: false,
        translation: { vi: "Kế hoạch dự án" },
      },
    ],
  },
  {
    id: 7,
    question: "Which activity is part of test planning?",
    translation: { vi: "Hoạt động nào là một phần của lập kế hoạch kiểm thử?" },
    answers: [
      {
        text: "Identifying test objectives",
        correct: true,
        translation: { vi: "Xác định mục tiêu kiểm thử" },
      },
      {
        text: "Writing production code",
        correct: false,
        translation: { vi: "Viết mã sản xuất" },
      },
      {
        text: "Deploying to users",
        correct: false,
        translation: { vi: "Triển khai cho người dùng" },
      },
      {
        text: "Paying testers",
        correct: false,
        translation: { vi: "Trả lương cho testers" },
      },
    ],
  },
  {
    id: 8,
    question: "What is Regression Testing intended to detect?",
    translation: { vi: "Kiểm thử hồi quy nhằm phát hiện điều gì?" },
    answers: [
      {
        text: "New defects introduced by changes",
        correct: true,
        translation: { vi: "Lỗi mới phát sinh do thay đổi" },
      },
      {
        text: "Performance bottlenecks only",
        correct: false,
        translation: { vi: "Chỉ các nút thắt hiệu năng" },
      },
      {
        text: "Test case errors",
        correct: false,
        translation: { vi: "Lỗi ở kịch bản kiểm thử" },
      },
      {
        text: "User acceptance",
        correct: false,
        translation: { vi: "Chấp nhận của người dùng" },
      },
    ],
  },
  {
    id: 9,
    question: "Which review type is led by the author to explain a document?",
    translation: {
      vi: "Kiểu review nào do tác giả dẫn dắt để giải thích tài liệu?",
    },
    answers: [
      {
        text: "Walkthrough",
        correct: true,
        translation: { vi: "Walkthrough" },
      },
      { text: "Inspection", correct: false, translation: { vi: "Inspection" } },
      {
        text: "Technical review",
        correct: false,
        translation: { vi: "Review kỹ thuật" },
      },
      { text: "Audit", correct: false, translation: { vi: "Kiểm toán" } },
    ],
  },
  {
    id: 10,
    question: "What is the Pesticide Paradox?",
    translation: { vi: "Nghịch lý thuốc trừ sâu là gì?" },
    answers: [
      {
        text: "Repeated identical tests stop finding new defects",
        correct: true,
        translation: {
          vi: "Lặp lại các kiểm thử giống nhau sẽ ngừng tìm lỗi mới",
        },
      },
      {
        text: "Using pesticides in labs affects testers",
        correct: false,
        translation: { vi: "Sử dụng thuốc trừ sâu ảnh hưởng tester" },
      },
      {
        text: "Tests make software more stable",
        correct: false,
        translation: { vi: "Kiểm thử làm phần mềm ổn định hơn" },
      },
      {
        text: "All tests should be automated",
        correct: false,
        translation: { vi: "Tất cả kiểm thử nên tự động" },
      },
    ],
  },
  {
    id: 11,
    question: "Decision Table testing is best suited for:",
    translation: { vi: "Kiểm thử Bảng quyết định phù hợp nhất cho:" },
    answers: [
      {
        text: "Systems with combinations of input conditions",
        correct: true,
        translation: { vi: "Hệ thống có sự kết hợp của các điều kiện đầu vào" },
      },
      {
        text: "Simple input ranges",
        correct: false,
        translation: { vi: "Phạm vi đầu vào đơn giản" },
      },
      {
        text: "Performance testing",
        correct: false,
        translation: { vi: "Kiểm thử hiệu năng" },
      },
      {
        text: "User interface layout",
        correct: false,
        translation: { vi: "Bố cục giao diện người dùng" },
      },
    ],
  },
  {
    id: 12,
    question: "Which of the following is a white-box technique?",
    translation: { vi: "Kỹ thuật nào sau đây là kỹ thuật hộp trắng?" },
    answers: [
      {
        text: "Statement coverage",
        correct: true,
        translation: { vi: "Độ bao phủ câu lệnh" },
      },
      {
        text: "Equivalence partitioning",
        correct: false,
        translation: { vi: "Phân vùng tương đương" },
      },
      {
        text: "Use case testing",
        correct: false,
        translation: { vi: "Kiểm thử Use case" },
      },
      {
        text: "Boundary value analysis",
        correct: false,
        translation: { vi: "Phân tích giá trị biên" },
      },
    ],
  },
  {
    id: 13,
    question: "What is the main aim of Test Automation?",
    translation: { vi: "Mục tiêu chính của tự động hóa kiểm thử là gì?" },
    answers: [
      {
        text: "Increase efficiency and repeatability of tests",
        correct: true,
        translation: { vi: "Tăng hiệu quả và khả năng lặp lại của kiểm thử" },
      },
      {
        text: "Eliminate the need for testing skills",
        correct: false,
        translation: { vi: "Loại bỏ nhu cầu kỹ năng kiểm thử" },
      },
      {
        text: "Test everything manually",
        correct: false,
        translation: { vi: "Kiểm thử mọi thứ thủ công" },
      },
      {
        text: "Replace developers",
        correct: false,
        translation: { vi: "Thay thế lập trình viên" },
      },
    ],
  },
  {
    id: 14,
    question: "Risk-based testing focuses on:",
    translation: { vi: "Kiểm thử dựa trên rủi ro tập trung vào:" },
    answers: [
      {
        text: "Areas with highest risk to product or project",
        correct: true,
        translation: {
          vi: "Các khu vực có rủi ro cao nhất đối với sản phẩm hoặc dự án",
        },
      },
      {
        text: "Only new features",
        correct: false,
        translation: { vi: "Chỉ các tính năng mới" },
      },
      {
        text: "Performance only",
        correct: false,
        translation: { vi: "Chỉ hiệu năng" },
      },
      {
        text: "Cosmetic issues only",
        correct: false,
        translation: { vi: "Chỉ vấn đề giao diện" },
      },
    ],
  },
  {
    id: 15,
    question: "A Test Oracle is:",
    translation: { vi: "Test Oracle là gì?" },
    answers: [
      {
        text: "Source to determine expected outcome",
        correct: true,
        translation: { vi: "Nguồn để xác định kết quả mong đợi" },
      },
      {
        text: "Tool to run tests",
        correct: false,
        translation: { vi: "Công cụ chạy kiểm thử" },
      },
      {
        text: "A test environment server",
        correct: false,
        translation: { vi: "Máy chủ môi trường kiểm thử" },
      },
      {
        text: "Number of test cases",
        correct: false,
        translation: { vi: "Số lượng kịch bản" },
      },
    ],
  },
  {
    id: 16,
    question: "What is exploratory testing?",
    translation: { vi: "Kiểm thử thăm dò là gì?" },
    answers: [
      {
        text: "Simultaneous learning, test design and execution",
        correct: true,
        translation: {
          vi: "Vừa tìm hiểu, thiết kế và thực thi kiểm thử cùng lúc",
        },
      },
      {
        text: "Strictly scripted test execution",
        correct: false,
        translation: { vi: "Thực thi kịch bản nghiêm ngặt" },
      },
      {
        text: "Only automated checks",
        correct: false,
        translation: { vi: "Chỉ kiểm tra tự động" },
      },
      {
        text: "A kind of review",
        correct: false,
        translation: { vi: "Một dạng review" },
      },
    ],
  },
  {
    id: 17,
    question: "Which metric helps track test progress?",
    translation: { vi: "Chỉ số nào giúp theo dõi tiến độ kiểm thử?" },
    answers: [
      {
        text: "Test execution rate",
        correct: true,
        translation: { vi: "Tốc độ thực thi kiểm thử" },
      },
      {
        text: "Lines of code",
        correct: false,
        translation: { vi: "Số dòng mã" },
      },
      {
        text: "Number of developers",
        correct: false,
        translation: { vi: "Số lập trình viên" },
      },
      {
        text: "Test environment uptime",
        correct: false,
        translation: { vi: "Thời gian hoạt động của môi trường" },
      },
    ],
  },
  {
    id: 18,
    question:
      "Which of the following is NOT a software quality characteristic?",
    translation: {
      vi: "Điều nào sau đây KHÔNG phải là đặc tính chất lượng phần mềm?",
    },
    answers: [
      { text: "Price", correct: true, translation: { vi: "Giá cả" } },
      {
        text: "Reliability",
        correct: false,
        translation: { vi: "Độ tin cậy" },
      },
      {
        text: "Usability",
        correct: false,
        translation: { vi: "Tính khả dụng" },
      },
      {
        text: "Maintainability",
        correct: false,
        translation: { vi: "Khả năng bảo trì" },
      },
    ],
  },
  {
    id: 19,
    question: "Which is a static testing activity?",
    translation: { vi: "Hoạt động nào là kiểm thử tĩnh?" },
    answers: [
      {
        text: "Reviewing requirements document",
        correct: true,
        translation: { vi: "Đánh giá tài liệu yêu cầu" },
      },
      {
        text: "Running automated tests",
        correct: false,
        translation: { vi: "Chạy các kiểm thử tự động" },
      },
      {
        text: "Performance benchmarking",
        correct: false,
        translation: { vi: "Đo hiệu năng" },
      },
      {
        text: "Manual exploratory testing",
        correct: false,
        translation: { vi: "Kiểm thử thăm dò thủ công" },
      },
    ],
  },
  {
    id: 20,
    question: "What does Traceability ensure?",
    translation: { vi: "Tính truy xuất nguồn gốc đảm bảo điều gì?" },
    answers: [
      {
        text: "Requirements are linked to test cases",
        correct: true,
        translation: { vi: "Yêu cầu được liên kết với kịch bản kiểm thử" },
      },
      {
        text: "All tests are automated",
        correct: false,
        translation: { vi: "Tất cả kiểm thử được tự động" },
      },
      {
        text: "Developers sign off test cases",
        correct: false,
        translation: { vi: "Lập trình viên phê duyệt kịch bản" },
      },
      {
        text: "Test environment is secure",
        correct: false,
        translation: { vi: "Môi trường kiểm thử an toàn" },
      },
    ],
  },
  {
    id: 21,
    question: "Who typically performs acceptance testing?",
    translation: { vi: "Ai thường thực hiện kiểm thử chấp nhận?" },
    answers: [
      {
        text: "Customers or end-users",
        correct: true,
        translation: { vi: "Khách hàng hoặc người dùng cuối" },
      },
      {
        text: "Developers only",
        correct: false,
        translation: { vi: "Chỉ lập trình viên" },
      },
      {
        text: "Tool vendors",
        correct: false,
        translation: { vi: "Nhà cung cấp công cụ" },
      },
      {
        text: "HR department",
        correct: false,
        translation: { vi: "Phòng nhân sự" },
      },
    ],
  },
  {
    id: 22,
    question: "Which is an example of non-functional testing?",
    translation: { vi: "Ví dụ nào là kiểm thử phi chức năng?" },
    answers: [
      {
        text: "Performance testing",
        correct: true,
        translation: { vi: "Kiểm thử hiệu năng" },
      },
      {
        text: "Use case testing",
        correct: false,
        translation: { vi: "Kiểm thử use case" },
      },
      {
        text: "Statement testing",
        correct: false,
        translation: { vi: "Kiểm thử câu lệnh" },
      },
      {
        text: "Equivalence partitioning",
        correct: false,
        translation: { vi: "Phân vùng tương đương" },
      },
    ],
  },
  {
    id: 23,
    question: "What is a defect life cycle?",
    translation: { vi: "Chu kỳ sống của một lỗi là gì?" },
    answers: [
      {
        text: "States a defect goes through from discovery to closure",
        correct: true,
        translation: {
          vi: "Các trạng thái lỗi trải qua từ phát hiện đến đóng",
        },
      },
      {
        text: "The time it takes to write a test case",
        correct: false,
        translation: { vi: "Thời gian viết kịch bản" },
      },
      {
        text: "A set of test data",
        correct: false,
        translation: { vi: "Một tập dữ liệu kiểm thử" },
      },
      {
        text: "The automation framework lifecycle",
        correct: false,
        translation: { vi: "Chu kỳ của khung tự động" },
      },
    ],
  },
  {
    id: 24,
    question: "Which of the following is a benefit of test automation?",
    translation: { vi: "Lợi ích nào sau đây của tự động hóa kiểm thử?" },
    answers: [
      {
        text: "Faster regression checks",
        correct: true,
        translation: { vi: "Kiểm tra hồi quy nhanh hơn" },
      },
      {
        text: "No need for test maintenance",
        correct: false,
        translation: { vi: "Không cần bảo trì kiểm thử" },
      },
      {
        text: "Finds all defects",
        correct: false,
        translation: { vi: "Tìm mọi lỗi" },
      },
      {
        text: "Reduces requirement changes",
        correct: false,
        translation: { vi: "Giảm thay đổi yêu cầu" },
      },
    ],
  },
  {
    id: 25,
    question: "What is a test harness?",
    translation: { vi: "Test harness là gì?" },
    answers: [
      {
        text: "Infrastructure to run and evaluate tests",
        correct: true,
        translation: { vi: "Hạ tầng để chạy và đánh giá kiểm thử" },
      },
      {
        text: "A type of defect report",
        correct: false,
        translation: { vi: "Loại báo cáo lỗi" },
      },
      {
        text: "Only a test case repository",
        correct: false,
        translation: { vi: "Chỉ là kho kịch bản kiểm thử" },
      },
      {
        text: "A software license",
        correct: false,
        translation: { vi: "Giấy phép phần mềm" },
      },
    ],
  },
  {
    id: 26,
    question: "Which testing type checks behavior under stress?",
    translation: { vi: "Loại kiểm thử nào kiểm tra hành vi dưới tải nặng?" },
    answers: [
      {
        text: "Stress testing",
        correct: true,
        translation: { vi: "Kiểm thử stress" },
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
      {
        text: "Smoke testing",
        correct: false,
        translation: { vi: "Kiểm thử smoke" },
      },
    ],
  },
  {
    id: 27,
    question: "What is the main goal of a pilot project for a tool?",
    translation: {
      vi: "Mục tiêu chính của dự án thí điểm cho một công cụ là gì?",
    },
    answers: [
      {
        text: "To evaluate tool fit in real processes",
        correct: true,
        translation: {
          vi: "Đánh giá sự phù hợp của công cụ trong quy trình thực tế",
        },
      },
      {
        text: "To license software for all teams",
        correct: false,
        translation: { vi: "Cấp phép phần mềm cho tất cả đội" },
      },
      {
        text: "To replace all manual tests immediately",
        correct: false,
        translation: { vi: "Thay thế mọi kiểm thử thủ công ngay lập tức" },
      },
      {
        text: "To finalize project scope",
        correct: false,
        translation: { vi: "Hoàn thiện phạm vi dự án" },
      },
    ],
  },
  {
    id: 28,
    question: "Which activity should happen during test implementation?",
    translation: {
      vi: "Hoạt động nào nên diễn ra trong giai đoạn triển khai kiểm thử?",
    },
    answers: [
      {
        text: "Creating and preparing test cases and data",
        correct: true,
        translation: { vi: "Tạo và chuẩn bị kịch bản và dữ liệu kiểm thử" },
      },
      {
        text: "Hiring more testers",
        correct: false,
        translation: { vi: "Tuyển thêm tester" },
      },
      {
        text: "Writing production requirements",
        correct: false,
        translation: { vi: "Viết yêu cầu sản phẩm" },
      },
      {
        text: "Finalizing deployment scripts",
        correct: false,
        translation: { vi: "Hoàn thiện script triển khai" },
      },
    ],
  },
  {
    id: 29,
    question: "Who is most likely to use static analysis tools?",
    translation: { vi: "Ai có khả năng sử dụng công cụ phân tích tĩnh nhất?" },
    answers: [
      {
        text: "Developers",
        correct: true,
        translation: { vi: "Lập trình viên" },
      },
      {
        text: "End-users",
        correct: false,
        translation: { vi: "Người dùng cuối" },
      },
      {
        text: "Project sponsors",
        correct: false,
        translation: { vi: "Nhà tài trợ dự án" },
      },
      { text: "HR", correct: false, translation: { vi: "Phòng nhân sự" } },
    ],
  },
  {
    id: 30,
    question: "Which test approach uses models to design tests?",
    translation: {
      vi: "Cách tiếp cận kiểm thử nào sử dụng mô hình để thiết kế kiểm thử?",
    },
    answers: [
      {
        text: "Model-based testing",
        correct: true,
        translation: { vi: "Kiểm thử dựa trên mô hình" },
      },
      {
        text: "Ad-hoc testing",
        correct: false,
        translation: { vi: "Kiểm thử ngẫu hứng" },
      },
      {
        text: "Record and playback",
        correct: false,
        translation: { vi: "Ghi và phát lại" },
      },
      {
        text: "A/B testing",
        correct: false,
        translation: { vi: "Kiểm thử A/B" },
      },
    ],
  },
  {
    id: 31,
    question: "What is alpha testing?",
    translation: { vi: "Kiểm thử alpha là gì?" },
    answers: [
      {
        text: "Testing by potential customers at developer site",
        correct: true,
        translation: {
          vi: "Kiểm thử bởi khách hàng tiềm năng tại địa điểm nhà phát triển",
        },
      },
      {
        text: "Automated unit tests",
        correct: false,
        translation: { vi: "Kiểm thử đơn vị tự động" },
      },
      {
        text: "Security penetration testing",
        correct: false,
        translation: { vi: "Kiểm thử xâm nhập bảo mật" },
      },
      {
        text: "A type of review",
        correct: false,
        translation: { vi: "Một dạng review" },
      },
    ],
  },
  {
    id: 32,
    question: "Which of the following is a configuration management activity?",
    translation: { vi: "Hoạt động quản lý cấu hình nào sau đây?" },
    answers: [
      {
        text: "Version control of test items",
        correct: true,
        translation: { vi: "Kiểm soát phiên bản các mục kiểm thử" },
      },
      {
        text: "Executing test cases",
        correct: false,
        translation: { vi: "Thực thi kịch bản" },
      },
      {
        text: "Writing code style guides",
        correct: false,
        translation: { vi: "Viết hướng dẫn phong cách mã" },
      },
      {
        text: "Hiring external auditors",
        correct: false,
        translation: { vi: "Thuê kiểm toán viên ngoài" },
      },
    ],
  },
  {
    id: 33,
    question: "Which factor affects testability?",
    translation: { vi: "Yếu tố nào ảnh hưởng tới khả năng kiểm thử?" },
    answers: [
      {
        text: "Observability of outputs",
        correct: true,
        translation: { vi: "Khả năng quan sát đầu ra" },
      },
      {
        text: "Number of developers",
        correct: false,
        translation: { vi: "Số lập trình viên" },
      },
      {
        text: "Office location",
        correct: false,
        translation: { vi: "Vị trí văn phòng" },
      },
      {
        text: "Color of the logo",
        correct: false,
        translation: { vi: "Màu logo" },
      },
    ],
  },
  {
    id: 34,
    question: "Error guessing is based on:",
    translation: { vi: "Đoán lỗi dựa trên điều gì?" },
    answers: [
      {
        text: "Experience and intuition of testers",
        correct: true,
        translation: { vi: "Kinh nghiệm và trực giác của tester" },
      },
      {
        text: "Formal models only",
        correct: false,
        translation: { vi: "Chỉ mô hình chính thức" },
      },
      {
        text: "Automated tools only",
        correct: false,
        translation: { vi: "Chỉ công cụ tự động" },
      },
      {
        text: "Customer surveys",
        correct: false,
        translation: { vi: "Khảo sát khách hàng" },
      },
    ],
  },
  {
    id: 35,
    question: "Which is a characteristic of good test cases?",
    translation: { vi: "Đặc tính nào của kịch bản kiểm thử tốt?" },
    answers: [
      {
        text: "Repeatable and clear expected results",
        correct: true,
        translation: { vi: "Có thể lặp lại và kết quả mong đợi rõ ràng" },
      },
      {
        text: "Vague steps",
        correct: false,
        translation: { vi: "Các bước mơ hồ" },
      },
      {
        text: "Require special unpublished tools",
        correct: false,
        translation: { vi: "Yêu cầu công cụ đặc biệt chưa công bố" },
      },
      {
        text: "Depend on tester memory",
        correct: false,
        translation: { vi: "Phụ thuộc vào trí nhớ tester" },
      },
    ],
  },
  {
    id: 36,
    question: "When should test closure activities be performed?",
    translation: { vi: "Khi nào thực hiện các hoạt động đóng kiểm thử?" },
    answers: [
      {
        text: "After test execution is complete and exit criteria met",
        correct: true,
        translation: {
          vi: "Sau khi thực thi kiểm thử hoàn tất và tiêu chí dừng được đáp ứng",
        },
      },
      {
        text: "At the start of requirements gathering",
        correct: false,
        translation: { vi: "Khi bắt đầu thu thập yêu cầu" },
      },
      {
        text: "Only if there are no defects",
        correct: false,
        translation: { vi: "Chỉ khi không có lỗi" },
      },
      {
        text: "Every day during development",
        correct: false,
        translation: { vi: "Hàng ngày trong quá trình phát triển" },
      },
    ],
  },
  {
    id: 37,
    question: "Which of the following is a test management task?",
    translation: { vi: "Nhiệm vụ quản lý kiểm thử nào sau đây?" },
    answers: [
      {
        text: "Monitoring test progress and reporting",
        correct: true,
        translation: { vi: "Giám sát tiến độ kiểm thử và báo cáo" },
      },
      {
        text: "Writing production code",
        correct: false,
        translation: { vi: "Viết mã sản xuất" },
      },
      {
        text: "Designing the GUI",
        correct: false,
        translation: { vi: "Thiết kế GUI" },
      },
      {
        text: "Translating user manuals",
        correct: false,
        translation: { vi: "Dịch tài liệu người dùng" },
      },
    ],
  },
  {
    id: 38,
    question: "Which of these is an acceptance criterion?",
    translation: { vi: "Điều kiện chấp nhận nào sau đây?" },
    answers: [
      {
        text: "Specific measurable requirement agreed with the customer",
        correct: true,
        translation: {
          vi: "Yêu cầu cụ thể, đo lường được và đồng ý với khách hàng",
        },
      },
      {
        text: "Internal coding conventions",
        correct: false,
        translation: { vi: "Quy ước mã nội bộ" },
      },
      {
        text: "Tester personal preference",
        correct: false,
        translation: { vi: "Sở thích cá nhân của tester" },
      },
      {
        text: "Unrelated marketing goals",
        correct: false,
        translation: { vi: "Mục tiêu tiếp thị không liên quan" },
      },
    ],
  },
  {
    id: 39,
    question:
      "Which test type checks how the system copes with invalid inputs?",
    translation: {
      vi: "Loại kiểm thử nào kiểm tra hệ thống xử lý đầu vào không hợp lệ?",
    },
    answers: [
      {
        text: "Negative testing",
        correct: true,
        translation: { vi: "Kiểm thử tiêu cực" },
      },
      {
        text: "Positive testing",
        correct: false,
        translation: { vi: "Kiểm thử tích cực" },
      },
      {
        text: "Load testing",
        correct: false,
        translation: { vi: "Kiểm thử tải" },
      },
      {
        text: "UI testing",
        correct: false,
        translation: { vi: "Kiểm thử giao diện" },
      },
    ],
  },
  {
    id: 40,
    question: "What is the purpose of a defect priority?",
    translation: { vi: "Mục đích của độ ưu tiên lỗi là gì?" },
    answers: [
      {
        text: "Indicate order in which defects should be fixed",
        correct: true,
        translation: { vi: "Chỉ thứ tự sửa lỗi" },
      },
      {
        text: "Determine who filed the bug",
        correct: false,
        translation: { vi: "Xác định ai báo lỗi" },
      },
      {
        text: "Measure severity of code smells",
        correct: false,
        translation: { vi: "Đo mức nghiêm trọng của mùi mã" },
      },
      {
        text: "Rank testers by speed",
        correct: false,
        translation: { vi: "Xếp hạng tester theo tốc độ" },
      },
    ],
  },
];
