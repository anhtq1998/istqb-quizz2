export const questions = [
  // CHƯƠNG 1: NGUYÊN LÝ CƠ BẢN (1-8)
  {
    id: 1,
    question: "What is the main objective of testing?",
    translation: { vi: "Mục tiêu chính của kiểm thử là gì?" },
    answers: [
      {
        text: "Reducing risk and building confidence.",
        correct: true,
        translation: { vi: "Giảm thiểu rủi ro và xây dựng niềm tin." },
      },
      {
        text: "Proving there are no bugs.",
        correct: false,
        translation: { vi: "Chứng minh không có lỗi." },
      },
      {
        text: "Ensuring all users are happy.",
        correct: false,
        translation: { vi: "Đảm bảo mọi người dùng đều hài lòng." },
      },
      {
        text: "Completing coding faster.",
        correct: false,
        translation: { vi: "Hoàn thành code nhanh hơn." },
      },
    ],
  },
  {
    id: 2,
    question: "Which principle says testing shows the presence of defects?",
    translation: {
      vi: "Nguyên lý nào nói kiểm thử chỉ ra sự hiện diện của lỗi?",
    },
    answers: [
      {
        text: "Pesticide paradox",
        correct: false,
        translation: { vi: "Nghịch lý thuốc trừ sâu" },
      },
      {
        text: "Testing shows presence of defects",
        correct: true,
        translation: { vi: "Kiểm thử cho thấy sự hiện diện của lỗi" },
      },
      {
        text: "Absence of errors fallacy",
        correct: false,
        translation: { vi: "Sự sai lầm về việc không có lỗi" },
      },
      {
        text: "Exhaustive testing",
        correct: false,
        translation: { vi: "Kiểm thử vét cạn" },
      },
    ],
  },
  {
    id: 3,
    question: "Testing everything is impossible. What is this called?",
    translation: {
      vi: "Kiểm thử tất cả mọi thứ là không thể. Điều này gọi là gì?",
    },
    answers: [
      {
        text: "Defect clustering",
        correct: false,
        translation: { vi: "Lỗi tập trung" },
      },
      {
        text: "Exhaustive testing is impossible",
        correct: true,
        translation: { vi: "Kiểm thử vét cạn là không thể" },
      },
      {
        text: "Early testing",
        correct: false,
        translation: { vi: "Kiểm thử sớm" },
      },
      {
        text: "Pesticide paradox",
        correct: false,
        translation: { vi: "Nghịch lý thuốc trừ sâu" },
      },
    ],
  },
  {
    id: 4,
    question: "What is 'Early Testing' purpose?",
    translation: { vi: "Mục đích của 'Kiểm thử sớm' là gì?" },
    answers: [
      {
        text: "Find defects earlier in SDLC",
        correct: true,
        translation: { vi: "Tìm lỗi sớm hơn trong vòng đời phát triển" },
      },
      {
        text: "Run tests quickly",
        correct: false,
        translation: { vi: "Chạy test nhanh" },
      },
      {
        text: "Use tools early",
        correct: false,
        translation: { vi: "Dùng tool sớm" },
      },
      {
        text: "Train users early",
        correct: false,
        translation: { vi: "Đào tạo người dùng sớm" },
      },
    ],
  },
  {
    id: 5,
    question: "Defects cluster together in certain modules. This is:",
    translation: { vi: "Lỗi tập trung ở một số module nhất định. Đây là:" },
    answers: [
      {
        text: "Defect clustering",
        correct: true,
        translation: { vi: "Sự tập trung lỗi" },
      },
      {
        text: "Pesticide paradox",
        correct: false,
        translation: { vi: "Nghịch lý thuốc trừ sâu" },
      },
      {
        text: "Absence of error fallacy",
        correct: false,
        translation: { vi: "Sai lầm về việc không có lỗi" },
      },
      {
        text: "Early testing",
        correct: false,
        translation: { vi: "Kiểm thử sớm" },
      },
    ],
  },
  {
    id: 6,
    question: "What is a 'failure'?",
    translation: { vi: "Thế nào là một 'failure'?" },
    answers: [
      {
        text: "A mistake by person",
        correct: false,
        translation: { vi: "Sai lầm của con người" },
      },
      {
        text: "Deviation from expected behavior",
        correct: true,
        translation: { vi: "Sai lệch so với hành vi mong đợi" },
      },
      {
        text: "A bug in the code",
        correct: false,
        translation: { vi: "Một lỗi trong code" },
      },
      {
        text: "A missing requirement",
        correct: false,
        translation: { vi: "Thiếu yêu cầu" },
      },
    ],
  },
  {
    id: 7,
    question: "What is the difference between QA and Testing?",
    translation: { vi: "Sự khác biệt giữa QA và Testing?" },
    answers: [
      {
        text: "QA is process-oriented, Testing is product-oriented",
        correct: true,
        translation: { vi: "QA hướng quy trình, Testing hướng sản phẩm" },
      },
      {
        text: "They are the same",
        correct: false,
        translation: { vi: "Chúng giống nhau" },
      },
      {
        text: "Testing includes QA",
        correct: false,
        translation: { vi: "Testing bao gồm cả QA" },
      },
      {
        text: "QA is only for managers",
        correct: false,
        translation: { vi: "QA chỉ dành cho quản lý" },
      },
    ],
  },
  {
    id: 8,
    question: "Which is a test activity?",
    translation: { vi: "Đâu là một hoạt động kiểm thử?" },
    answers: [
      {
        text: "Test Analysis",
        correct: true,
        translation: { vi: "Phân tích kiểm thử" },
      },
      { text: "Debugging", correct: false, translation: { vi: "Gỡ lỗi" } },
      {
        text: "Requirement gathering",
        correct: false,
        translation: { vi: "Thu thập yêu cầu" },
      },
      { text: "Deployment", correct: false, translation: { vi: "Triển khai" } },
    ],
  },

  // CHƯƠNG 2: VÒNG ĐỜI PHÁT TRIỂN (9-14)
  {
    id: 9,
    question: "Which is a level of testing?",
    translation: { vi: "Đâu là một cấp độ kiểm thử?" },
    answers: [
      {
        text: "Component testing",
        correct: true,
        translation: { vi: "Kiểm thử thành phần" },
      },
      {
        text: "Regression testing",
        correct: false,
        translation: { vi: "Kiểm thử hồi quy" },
      },
      {
        text: "Static testing",
        correct: false,
        translation: { vi: "Kiểm thử tĩnh" },
      },
      {
        text: "Black-box testing",
        correct: false,
        translation: { vi: "Kiểm thử hộp đen" },
      },
    ],
  },
  {
    id: 10,
    question: "Who usually performs Unit Testing?",
    translation: { vi: "Ai thường thực hiện kiểm thử đơn vị?" },
    answers: [
      {
        text: "Developers",
        correct: true,
        translation: { vi: "Lập trình viên" },
      },
      { text: "Testers", correct: false, translation: { vi: "Kiểm thử viên" } },
      { text: "Users", correct: false, translation: { vi: "Người dùng" } },
      {
        text: "Business Analysts",
        correct: false,
        translation: { vi: "Phân tích nghiệp vụ" },
      },
    ],
  },
  {
    id: 11,
    question: "What is the goal of Acceptance Testing?",
    translation: { vi: "Mục tiêu của kiểm thử chấp nhận là gì?" },
    answers: [
      { text: "Find bugs", correct: false, translation: { vi: "Tìm lỗi" } },
      {
        text: "Build confidence and confirm requirements",
        correct: true,
        translation: { vi: "Xây dựng niềm tin và xác nhận yêu cầu" },
      },
      {
        text: "Check code structure",
        correct: false,
        translation: { vi: "Kiểm tra cấu trúc code" },
      },
      {
        text: "Fix performance issues",
        correct: false,
        translation: { vi: "Sửa lỗi hiệu năng" },
      },
    ],
  },
  {
    id: 12,
    question: "Which test type is about 'how well' it works?",
    translation: {
      vi: "Loại kiểm thử nào nói về việc hệ thống hoạt động 'tốt thế nào'?",
    },
    answers: [
      {
        text: "Functional testing",
        correct: false,
        translation: { vi: "Kiểm thử chức năng" },
      },
      {
        text: "Non-functional testing",
        correct: true,
        translation: { vi: "Kiểm thử phi chức năng" },
      },
      {
        text: "White-box testing",
        correct: false,
        translation: { vi: "Kiểm thử hộp trắng" },
      },
      {
        text: "Regression testing",
        correct: false,
        translation: { vi: "Kiểm thử hồi quy" },
      },
    ],
  },
  {
    id: 13,
    question: "What is Regression Testing?",
    translation: { vi: "Kiểm thử hồi quy là gì?" },
    answers: [
      {
        text: "Testing new features",
        correct: false,
        translation: { vi: "Kiểm thử tính năng mới" },
      },
      {
        text: "Testing to ensure changes didn't break existing features",
        correct: true,
        translation: {
          vi: "Kiểm thử đảm bảo thay đổi không làm hỏng tính năng cũ",
        },
      },
      {
        text: "Testing for speed",
        correct: false,
        translation: { vi: "Kiểm thử tốc độ" },
      },
      {
        text: "Testing manually",
        correct: false,
        translation: { vi: "Kiểm thử thủ công" },
      },
    ],
  },
  {
    id: 14,
    question: "What is the V-model?",
    translation: { vi: "Mô hình chữ V là gì?" },
    answers: [
      {
        text: "A sequential SDLC model",
        correct: true,
        translation: { vi: "Mô hình phát triển tuần tự" },
      },
      {
        text: "An Agile method",
        correct: false,
        translation: { vi: "Một phương pháp Agile" },
      },
      {
        text: "A tool for automation",
        correct: false,
        translation: { vi: "Một công cụ tự động hóa" },
      },
      {
        text: "A type of bug",
        correct: false,
        translation: { vi: "Một loại lỗi" },
      },
    ],
  },

  // CHƯƠNG 3: KIỂM THỬ TĨNH (15-18)
  {
    id: 15,
    question: "Static testing includes:",
    translation: { vi: "Kiểm thử tĩnh bao gồm:" },
    answers: [
      {
        text: "Executing the code",
        correct: false,
        translation: { vi: "Thực thi mã nguồn" },
      },
      {
        text: "Reviews and static analysis",
        correct: true,
        translation: { vi: "Đánh giá và phân tích tĩnh" },
      },
      {
        text: "Running test cases",
        correct: false,
        translation: { vi: "Chạy các trường hợp kiểm thử" },
      },
      {
        text: "Unit testing",
        correct: false,
        translation: { vi: "Kiểm thử đơn vị" },
      },
    ],
  },
  {
    id: 16,
    question: "Who leads a Formal Review?",
    translation: { vi: "Ai là người dẫn dắt một buổi đánh giá chính thức?" },
    answers: [
      { text: "Author", correct: false, translation: { vi: "Tác giả" } },
      {
        text: "Moderator/Facilitator",
        correct: true,
        translation: { vi: "Người điều phối" },
      },
      { text: "Manager", correct: false, translation: { vi: "Quản lý" } },
      { text: "Tester", correct: false, translation: { vi: "Kiểm thử viên" } },
    ],
  },
  {
    id: 17,
    question: "Benefit of Static Testing?",
    translation: { vi: "Lợi ích của kiểm thử tĩnh?" },
    answers: [
      {
        text: "Finds defects early and cheaply",
        correct: true,
        translation: { vi: "Tìm lỗi sớm và rẻ" },
      },
      {
        text: "Finds memory leaks",
        correct: false,
        translation: { vi: "Tìm rò rỉ bộ nhớ" },
      },
      {
        text: "Requires a running environment",
        correct: false,
        translation: { vi: "Yêu cầu môi trường chạy" },
      },
      {
        text: "Takes more time than execution",
        correct: false,
        translation: { vi: "Mất nhiều thời gian hơn thực thi" },
      },
    ],
  },
  {
    id: 18,
    question: "What can be reviewed?",
    translation: { vi: "Cái gì có thể được review?" },
    answers: [
      {
        text: "Requirements, Code, Design",
        correct: true,
        translation: { vi: "Yêu cầu, Code, Thiết kế" },
      },
      { text: "Only Code", correct: false, translation: { vi: "Chỉ Code" } },
      {
        text: "Only Test Cases",
        correct: false,
        translation: { vi: "Chỉ Test Cases" },
      },
      {
        text: "Running software",
        correct: false,
        translation: { vi: "Phần mềm đang chạy" },
      },
    ],
  },

  // CHƯƠNG 4: KỸ THUẬT KIỂM THỬ (19-29)
  {
    id: 19,
    question: "Equivalence Partitioning is:",
    translation: { vi: "Phân vùng tương đương là:" },
    answers: [
      {
        text: "Black-box technique",
        correct: true,
        translation: { vi: "Kỹ thuật hộp đen" },
      },
      {
        text: "White-box technique",
        correct: false,
        translation: { vi: "Kỹ thuật hộp trắng" },
      },
      {
        text: "Static technique",
        correct: false,
        translation: { vi: "Kỹ thuật tĩnh" },
      },
      {
        text: "Experience-based",
        correct: false,
        translation: { vi: "Dựa trên kinh nghiệm" },
      },
    ],
  },
  {
    id: 20,
    question: "Boundary Value Analysis tests:",
    translation: { vi: "Phân tích giá trị biên kiểm tra:" },
    answers: [
      {
        text: "Middle values",
        correct: false,
        translation: { vi: "Giá trị ở giữa" },
      },
      {
        text: "Edges of partitions",
        correct: true,
        translation: { vi: "Các cạnh của phân vùng" },
      },
      {
        text: "Random values",
        correct: false,
        translation: { vi: "Giá trị ngẫu nhiên" },
      },
      {
        text: "Wrong values only",
        correct: false,
        translation: { vi: "Chỉ các giá trị sai" },
      },
    ],
  },
  {
    id: 21,
    question: "Which technique uses a table of inputs and actions?",
    translation: { vi: "Kỹ thuật nào dùng bảng đầu vào và hành động?" },
    answers: [
      {
        text: "Decision Table Testing",
        correct: true,
        translation: { vi: "Kiểm thử bảng quyết định" },
      },
      {
        text: "State Transition",
        correct: false,
        translation: { vi: "Chuyển đổi trạng thái" },
      },
      {
        text: "Use Case Testing",
        correct: false,
        translation: { vi: "Kiểm thử Use Case" },
      },
      {
        text: "BVA",
        correct: false,
        translation: { vi: "Phân tích giá trị biên" },
      },
    ],
  },
  {
    id: 22,
    question: "State Transition Testing is best for:",
    translation: { vi: "Kiểm thử chuyển đổi trạng thái tốt nhất cho:" },
    answers: [
      {
        text: "Calculations",
        correct: false,
        translation: { vi: "Các phép tính" },
      },
      {
        text: "Systems with various states",
        correct: true,
        translation: { vi: "Hệ thống có nhiều trạng thái" },
      },
      {
        text: "Database queries",
        correct: false,
        translation: { vi: "Truy vấn DB" },
      },
      {
        text: "Static web pages",
        correct: false,
        translation: { vi: "Trang web tĩnh" },
      },
    ],
  },
  {
    id: 23,
    question: "Statement testing is a type of:",
    translation: { vi: "Kiểm thử câu lệnh là một loại của:" },
    answers: [
      {
        text: "White-box testing",
        correct: true,
        translation: { vi: "Kiểm thử hộp trắng" },
      },
      {
        text: "Black-box testing",
        correct: false,
        translation: { vi: "Kiểm thử hộp đen" },
      },
      {
        text: "Ad-hoc testing",
        correct: false,
        translation: { vi: "Kiểm thử tùy hứng" },
      },
      {
        text: "User testing",
        correct: false,
        translation: { vi: "Kiểm thử người dùng" },
      },
    ],
  },
  {
    id: 24,
    question: "What is Error Guessing?",
    translation: { vi: "Đoán lỗi (Error Guessing) là gì?" },
    answers: [
      {
        text: "Randomly clicking",
        correct: false,
        translation: { vi: "Click ngẫu nhiên" },
      },
      {
        text: "Using experience to find common mistakes",
        correct: true,
        translation: { vi: "Dùng kinh nghiệm để tìm lỗi phổ biến" },
      },
      {
        text: "Following a script",
        correct: false,
        translation: { vi: "Làm theo kịch bản" },
      },
      {
        text: "Testing with 100% coverage",
        correct: false,
        translation: { vi: "Test bao phủ 100%" },
      },
    ],
  },
  {
    id: 25,
    question: "Decision coverage achieves:",
    translation: { vi: "Độ bao phủ quyết định đạt được:" },
    answers: [
      {
        text: "Statement coverage",
        correct: true,
        translation: { vi: "Bao phủ câu lệnh" },
      },
      {
        text: "Nothing extra",
        correct: false,
        translation: { vi: "Không thêm gì" },
      },
      {
        text: "100% bug detection",
        correct: false,
        translation: { vi: "Tìm 100% lỗi" },
      },
      {
        text: "Fast execution",
        correct: false,
        translation: { vi: "Thực thi nhanh" },
      },
    ],
  },
  {
    id: 26,
    question: "Use Case testing is based on:",
    translation: { vi: "Kiểm thử Use Case dựa trên:" },
    answers: [
      {
        text: "User interactions",
        correct: true,
        translation: { vi: "Tương tác người dùng" },
      },
      {
        text: "Code structure",
        correct: false,
        translation: { vi: "Cấu trúc code" },
      },
      {
        text: "Data flow",
        correct: false,
        translation: { vi: "Dòng dữ liệu" },
      },
      {
        text: "Memory usage",
        correct: false,
        translation: { vi: "Sử dụng bộ nhớ" },
      },
    ],
  },
  {
    id: 27,
    question: "Checklist-based testing is:",
    translation: { vi: "Kiểm thử dựa trên danh sách kiểm tra là:" },
    answers: [
      {
        text: "Experience-based",
        correct: true,
        translation: { vi: "Dựa trên kinh nghiệm" },
      },
      { text: "Formal", correct: false, translation: { vi: "Chính thức" } },
      {
        text: "Structural",
        correct: false,
        translation: { vi: "Theo cấu trúc" },
      },
      { text: "Automated", correct: false, translation: { vi: "Tự động" } },
    ],
  },
  {
    id: 28,
    question: "Exploratory testing is best when:",
    translation: { vi: "Kiểm thử khám phá tốt nhất khi:" },
    answers: [
      {
        text: "Time is limited and requirements are few",
        correct: true,
        translation: { vi: "Thời gian ít và yêu cầu hạn chế" },
      },
      {
        text: "Everything is documented",
        correct: false,
        translation: { vi: "Mọi thứ đã được viết tài liệu" },
      },
      {
        text: "Testing mission-critical systems",
        correct: false,
        translation: { vi: "Test hệ thống tối quan trọng" },
      },
      {
        text: "Automating tests",
        correct: false,
        translation: { vi: "Tự động hóa test" },
      },
    ],
  },
  {
    id: 29,
    question: "White-box techniques are used at:",
    translation: { vi: "Kỹ thuật hộp trắng được dùng tại:" },
    answers: [
      { text: "Any level", correct: true, translation: { vi: "Mọi cấp độ" } },
      {
        text: "Only Unit Level",
        correct: false,
        translation: { vi: "Chỉ cấp độ đơn vị" },
      },
      {
        text: "Only System Level",
        correct: false,
        translation: { vi: "Chỉ cấp độ hệ thống" },
      },
      {
        text: "Only Acceptance Level",
        correct: false,
        translation: { vi: "Chỉ cấp độ chấp nhận" },
      },
    ],
  },

  // CHƯƠNG 5: QUẢN LÝ KIỂM THỬ (30-38)
  {
    id: 30,
    question: "What is a Test Plan?",
    translation: { vi: "Kế hoạch kiểm thử là gì?" },
    answers: [
      {
        text: "Documenting test objectives and approach",
        correct: true,
        translation: { vi: "Tài liệu về mục tiêu và phương pháp test" },
      },
      {
        text: "A list of bugs",
        correct: false,
        translation: { vi: "Một danh sách lỗi" },
      },
      {
        text: "The code itself",
        correct: false,
        translation: { vi: "Chính là mã nguồn" },
      },
      {
        text: "User manual",
        correct: false,
        translation: { vi: "Hướng dẫn sử dụng" },
      },
    ],
  },
  {
    id: 31,
    question: "Who is responsible for the Test Plan?",
    translation: { vi: "Ai chịu trách nhiệm cho Test Plan?" },
    answers: [
      {
        text: "Test Manager",
        correct: true,
        translation: { vi: "Quản lý kiểm thử" },
      },
      { text: "Tester", correct: false, translation: { vi: "Kiểm thử viên" } },
      {
        text: "Developer",
        correct: false,
        translation: { vi: "Lập trình viên" },
      },
      { text: "Customer", correct: false, translation: { vi: "Khách hàng" } },
    ],
  },
  {
    id: 32,
    question: "Risk-based testing uses:",
    translation: { vi: "Kiểm thử dựa trên rủi ro sử dụng:" },
    answers: [
      {
        text: "Likelihood and Impact",
        correct: true,
        translation: { vi: "Khả năng xảy ra và tác động" },
      },
      {
        text: "Random choice",
        correct: false,
        translation: { vi: "Lựa chọn ngẫu nhiên" },
      },
      {
        text: "Tester's mood",
        correct: false,
        translation: { vi: "Tâm trạng tester" },
      },
      {
        text: "Only Impact",
        correct: false,
        translation: { vi: "Chỉ tác động" },
      },
    ],
  },
  {
    id: 33,
    question: "Entry Criteria defines:",
    translation: { vi: "Tiêu chí bắt đầu (Entry Criteria) định nghĩa:" },
    answers: [
      {
        text: "When to start testing",
        correct: true,
        translation: { vi: "Khi nào bắt đầu test" },
      },
      {
        text: "When to stop testing",
        correct: false,
        translation: { vi: "Khi nào dừng test" },
      },
      { text: "Who to hire", correct: false, translation: { vi: "Thuê ai" } },
      {
        text: "How to fix bugs",
        correct: false,
        translation: { vi: "Cách sửa lỗi" },
      },
    ],
  },
  {
    id: 34,
    question: "Exit Criteria defines:",
    translation: { vi: "Tiêu chí kết thúc (Exit Criteria) định nghĩa:" },
    answers: [
      {
        text: "When testing is complete",
        correct: true,
        translation: { vi: "Khi nào test hoàn tất" },
      },
      {
        text: "The first test case",
        correct: false,
        translation: { vi: "Test case đầu tiên" },
      },
      {
        text: "The bug severity",
        correct: false,
        translation: { vi: "Độ nghiêm trọng của lỗi" },
      },
      {
        text: "Project budget",
        correct: false,
        translation: { vi: "Ngân sách dự án" },
      },
    ],
  },
  {
    id: 35,
    question: "Defect Management includes:",
    translation: { vi: "Quản lý lỗi bao gồm:" },
    answers: [
      {
        text: "Logging and tracking bugs",
        correct: true,
        translation: { vi: "Ghi lại và theo dõi lỗi" },
      },
      {
        text: "Writing code",
        correct: false,
        translation: { vi: "Viết code" },
      },
      {
        text: "Hiring people",
        correct: false,
        translation: { vi: "Thuê người" },
      },
      {
        text: "Buying computers",
        correct: false,
        translation: { vi: "Mua máy tính" },
      },
    ],
  },
  {
    id: 36,
    question: "What is Independence of Testing?",
    translation: { vi: "Tính độc lập của kiểm thử là gì?" },
    answers: [
      {
        text: "Testing by someone other than the author",
        correct: true,
        translation: { vi: "Được test bởi người khác không phải tác giả" },
      },
      {
        text: "Testing without tools",
        correct: false,
        translation: { vi: "Test không dùng công cụ" },
      },
      {
        text: "Testing alone",
        correct: false,
        translation: { vi: "Test một mình" },
      },
      {
        text: "Testing at night",
        correct: false,
        translation: { vi: "Test vào ban đêm" },
      },
    ],
  },
  {
    id: 37,
    question: "Which is a Test Metric?",
    translation: { vi: "Đâu là một số liệu đo lường kiểm thử?" },
    answers: [
      {
        text: "Percentage of test cases passed",
        correct: true,
        translation: { vi: "Phần trăm test case thành công" },
      },
      {
        text: "Lines of code",
        correct: false,
        translation: { vi: "Số dòng code" },
      },
      {
        text: "Number of developers",
        correct: false,
        translation: { vi: "Số lập trình viên" },
      },
      {
        text: "Coffee consumed",
        correct: false,
        translation: { vi: "Lượng cà phê đã uống" },
      },
    ],
  },
  {
    id: 38,
    question: "Configuration Management helps to:",
    translation: { vi: "Quản lý cấu hình giúp:" },
    answers: [
      {
        text: "Keep track of versions of test items",
        correct: true,
        translation: { vi: "Theo dõi các phiên bản của đối tượng test" },
      },
      {
        text: "Run tests faster",
        correct: false,
        translation: { vi: "Chạy test nhanh hơn" },
      },
      {
        text: "Design test cases",
        correct: false,
        translation: { vi: "Thiết kế test case" },
      },
      { text: "Fix bugs", correct: false, translation: { vi: "Sửa lỗi" } },
    ],
  },

  // CHƯƠNG 6: CÔNG CỤ KIỂM THỬ (39-40)
  {
    id: 39,
    question: "Risk of Test Automation?",
    translation: { vi: "Rủi ro của tự động hóa kiểm thử?" },
    answers: [
      {
        text: "Maintenance effort is underestimated",
        correct: true,
        translation: { vi: "Nỗ lực bảo trì bị đánh giá thấp" },
      },
      {
        text: "Tests run too fast",
        correct: false,
        translation: { vi: "Test chạy quá nhanh" },
      },
      {
        text: "Consistency increases",
        correct: false,
        translation: { vi: "Tính nhất quán tăng" },
      },
      {
        text: "Reduced human error",
        correct: false,
        translation: { vi: "Giảm lỗi do con người" },
      },
    ],
  },
  {
    id: 40,
    question: "What is a 'Pilot Project' for a tool?",
    translation: { vi: "Dự án thí điểm (Pilot) cho công cụ là gì?" },
    answers: [
      {
        text: "Small scale test to learn the tool",
        correct: true,
        translation: { vi: "Thử nghiệm quy mô nhỏ để học cách dùng tool" },
      },
      {
        text: "The main project",
        correct: false,
        translation: { vi: "Dự án chính" },
      },
      {
        text: "A failed project",
        correct: false,
        translation: { vi: "Một dự án thất bại" },
      },
      {
        text: "Building the tool",
        correct: false,
        translation: { vi: "Xây dựng công cụ" },
      },
    ],
  },
];
