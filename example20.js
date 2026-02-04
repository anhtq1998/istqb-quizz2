export const questions = [
  {
    id: 1,
    question: "Which is the first activity in the standard test process?",
    translation: {
      vi: "Hoạt động đầu tiên trong quy trình kiểm thử chuẩn là gì?",
    },
    answers: [
      { text: "Planning", correct: true, translation: { vi: "Lập kế hoạch" } },
      { text: "Execution", correct: false, translation: { vi: "Thực thi" } },
      { text: "Design", correct: false, translation: { vi: "Thiết kế" } },
      { text: "Completion", correct: false, translation: { vi: "Hoàn tất" } },
    ],
  },
  {
    id: 2,
    question: "Which is an example of dynamic testing?",
    translation: { vi: "Ví dụ nào là kiểm thử động?" },
    answers: [
      {
        text: "Running test cases",
        correct: true,
        translation: { vi: "Chạy kịch bản kiểm thử" },
      },
      {
        text: "Reviewing code on paper",
        correct: false,
        translation: { vi: "Đọc mã trên giấy" },
      },
      {
        text: "Inspecting requirements",
        correct: false,
        translation: { vi: "Kiểm tra yêu cầu" },
      },
      {
        text: "Static analysis only",
        correct: false,
        translation: { vi: "Chỉ phân tích tĩnh" },
      },
    ],
  },
  {
    id: 3,
    question: "Which of these is a black-box technique used for functionality?",
    translation: { vi: "Kỹ thuật hộp đen nào dùng cho chức năng?" },
    answers: [
      {
        text: "Use case testing",
        correct: true,
        translation: { vi: "Kiểm thử use case" },
      },
      {
        text: "Branch coverage",
        correct: false,
        translation: { vi: "Bao phủ nhánh" },
      },
      {
        text: "Statement coverage",
        correct: false,
        translation: { vi: "Bao phủ câu lệnh" },
      },
      {
        text: "Path coverage",
        correct: false,
        translation: { vi: "Bao phủ đường đi" },
      },
    ],
  },
  {
    id: 4,
    question: "A smoke test is used to:",
    translation: { vi: "Kiểm thử smoke được dùng để:" },
    answers: [
      {
        text: "Confirm basic functionality works after a build",
        correct: true,
        translation: { vi: "Xác nhận chức năng cơ bản hoạt động sau build" },
      },
      {
        text: "Measure performance under heavy load",
        correct: false,
        translation: { vi: "Đo hiệu năng dưới tải cao" },
      },
      {
        text: "Replace full regression test",
        correct: false,
        translation: { vi: "Thay thế toàn bộ regression" },
      },
      {
        text: "Verify UI aesthetics",
        correct: false,
        translation: { vi: "Xác minh thẩm mỹ UI" },
      },
    ],
  },
  {
    id: 5,
    question: "Which is the best definition of testability?",
    translation: { vi: "Định nghĩa tốt nhất về khả năng kiểm thử là gì?" },
    answers: [
      {
        text: "Extent to which tests can reveal faults",
        correct: true,
        translation: { vi: "Mức độ kiểm thử có thể phát hiện lỗi" },
      },
      {
        text: "Number of test cases per feature",
        correct: false,
        translation: { vi: "Số kịch bản trên mỗi tính năng" },
      },
      {
        text: "Amount of automation",
        correct: false,
        translation: { vi: "Mức độ tự động" },
      },
      {
        text: "Size of the team",
        correct: false,
        translation: { vi: "Qui mô đội" },
      },
    ],
  },
  {
    id: 6,
    question: "Which test type is focused on structure of the code?",
    translation: { vi: "Loại kiểm thử nào tập trung vào cấu trúc mã?" },
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
        text: "Acceptance testing",
        correct: false,
        translation: { vi: "Kiểm thử chấp nhận" },
      },
      {
        text: "Usability testing",
        correct: false,
        translation: { vi: "Kiểm thử khả dụng" },
      },
    ],
  },
  {
    id: 7,
    question: "Equivalence partitioning reduces:",
    translation: { vi: "Phân vùng tương đương giảm thiểu:" },
    answers: [
      {
        text: "Number of test cases by grouping inputs",
        correct: true,
        translation: { vi: "Số kịch bản bằng cách gom nhóm đầu vào" },
      },
      {
        text: "Need for requirements",
        correct: false,
        translation: { vi: "Cần thiết cho yêu cầu" },
      },
      {
        text: "Time to write code",
        correct: false,
        translation: { vi: "Thời gian viết mã" },
      },
      {
        text: "Team size needed",
        correct: false,
        translation: { vi: "Qui mô đội" },
      },
    ],
  },
  {
    id: 8,
    question: "What is the meaning of an ‘X’ in a decision table action cell?",
    translation: {
      vi: "Ý nghĩa của 'X' trong ô hành động của bảng quyết định là gì?",
    },
    answers: [
      {
        text: "Action should be performed",
        correct: true,
        translation: { vi: "Hành động cần thực hiện" },
      },
      {
        text: "Condition is false",
        correct: false,
        translation: { vi: "Điều kiện sai" },
      },
      {
        text: "Invalid data",
        correct: false,
        translation: { vi: "Dữ liệu không hợp lệ" },
      },
      {
        text: "Test failed",
        correct: false,
        translation: { vi: "Kiểm thử thất bại" },
      },
    ],
  },
  {
    id: 9,
    question: "Which role is responsible for quality in Agile?",
    translation: {
      vi: "Vai trò nào chịu trách nhiệm về chất lượng trong Agile?",
    },
    answers: [
      {
        text: "The whole team",
        correct: true,
        translation: { vi: "Toàn bộ đội" },
      },
      {
        text: "Only the tester",
        correct: false,
        translation: { vi: "Chỉ tester" },
      },
      {
        text: "Only the manager",
        correct: false,
        translation: { vi: "Chỉ quản lý" },
      },
      {
        text: "Only the developer",
        correct: false,
        translation: { vi: "Chỉ lập trình viên" },
      },
    ],
  },
  {
    id: 10,
    question: "What should a Defect Report always include?",
    translation: { vi: "Báo cáo lỗi nên luôn bao gồm gì?" },
    answers: [
      {
        text: "Steps to reproduce, expected and actual results",
        correct: true,
        translation: { vi: "Các bước tái hiện, kết quả mong đợi và thực tế" },
      },
      {
        text: "Tester salary",
        correct: false,
        translation: { vi: "Lương tester" },
      },
      {
        text: "Only a title",
        correct: false,
        translation: { vi: "Chỉ tiêu đề" },
      },
      { text: "Source code", correct: false, translation: { vi: "Mã nguồn" } },
    ],
  },
  {
    id: 11,
    question: "Which is an objective of test planning?",
    translation: { vi: "Mục tiêu của lập kế hoạch kiểm thử là gì?" },
    answers: [
      {
        text: "Define scope, approach, resources and schedule",
        correct: true,
        translation: {
          vi: "Xác định phạm vi, phương pháp, nguồn lực và lịch trình",
        },
      },
      {
        text: "Write all production code",
        correct: false,
        translation: { vi: "Viết tất cả mã sản xuất" },
      },
      {
        text: "Design UI screens",
        correct: false,
        translation: { vi: "Thiết kế màn hình UI" },
      },
      {
        text: "Manage HR policies",
        correct: false,
        translation: { vi: "Quản lý chính sách nhân sự" },
      },
    ],
  },
  {
    id: 12,
    question: "Statement coverage measures:",
    translation: { vi: "Độ bao phủ câu lệnh đo lường:" },
    answers: [
      {
        text: "Executed statements divided by total statements times 100%",
        correct: true,
        translation: {
          vi: "Số câu lệnh đã thực thi / tổng số câu lệnh * 100%",
        },
      },
      {
        text: "Number of test engineers",
        correct: false,
        translation: { vi: "Số kỹ sư kiểm thử" },
      },
      {
        text: "Time spent on testing",
        correct: false,
        translation: { vi: "Thời gian dành cho kiểm thử" },
      },
      {
        text: "Number of defects found",
        correct: false,
        translation: { vi: "Số lỗi tìm được" },
      },
    ],
  },
  {
    id: 13,
    question: "Which approach helps detect defects early and cheaply?",
    translation: { vi: "Cách tiếp cận nào giúp phát hiện lỗi sớm và rẻ?" },
    answers: [
      {
        text: "Static testing (reviews, inspections)",
        correct: true,
        translation: { vi: "Kiểm thử tĩnh (review, inspection)" },
      },
      {
        text: "Only integration testing",
        correct: false,
        translation: { vi: "Chỉ kiểm thử tích hợp" },
      },
      {
        text: "Only exploratory testing",
        correct: false,
        translation: { vi: "Chỉ kiểm thử thăm dò" },
      },
      {
        text: "Skipping tests",
        correct: false,
        translation: { vi: "Bỏ qua kiểm thử" },
      },
    ],
  },
  {
    id: 14,
    question: "Which is a potential risk of test automation?",
    translation: { vi: "Rủi ro tiềm năng của tự động hóa kiểm thử là gì?" },
    answers: [
      {
        text: "High maintenance overhead if poorly designed",
        correct: true,
        translation: { vi: "Chi phí bảo trì cao nếu thiết kế kém" },
      },
      {
        text: "Tests always find all defects",
        correct: false,
        translation: { vi: "Tests luôn tìm tất cả lỗi" },
      },
      {
        text: "Removes the need for any human testing",
        correct: false,
        translation: { vi: "Loại bỏ nhu cầu kiểm thử của con người" },
      },
      {
        text: "Reduces test execution time to zero",
        correct: false,
        translation: { vi: "Giảm thời gian chạy kiểm thử về 0" },
      },
    ],
  },
  {
    id: 15,
    question: "Which of the following is a test tool category?",
    translation: { vi: "Danh mục công cụ kiểm thử nào sau đây?" },
    answers: [
      {
        text: "Test execution tools",
        correct: true,
        translation: { vi: "Công cụ thực thi kiểm thử" },
      },
      {
        text: "Sales tools",
        correct: false,
        translation: { vi: "Công cụ bán hàng" },
      },
      {
        text: "Payroll tools",
        correct: false,
        translation: { vi: "Công cụ lương" },
      },
      {
        text: "Catering tools",
        correct: false,
        translation: { vi: "Công cụ ẩm thực" },
      },
    ],
  },
  {
    id: 16,
    question: "What is the goal of confirmation testing (re-testing)?",
    translation: { vi: "Mục tiêu của kiểm thử xác nhận (re-testing) là gì?" },
    answers: [
      {
        text: "Verify a previously reported defect has been fixed",
        correct: true,
        translation: { vi: "Xác minh lỗi đã báo trước đó đã được sửa" },
      },
      {
        text: "Search for new unrelated defects only",
        correct: false,
        translation: { vi: "Chỉ tìm lỗi mới không liên quan" },
      },
      {
        text: "Automate all tests",
        correct: false,
        translation: { vi: "Tự động hóa tất cả kiểm thử" },
      },
      {
        text: "Replace system testing",
        correct: false,
        translation: { vi: "Thay thế kiểm thử hệ thống" },
      },
    ],
  },
  {
    id: 17,
    question: "Which is a project risk rather than a product risk?",
    translation: { vi: "Rủi ro nào là rủi ro dự án hơn rủi ro sản phẩm?" },
    answers: [
      {
        text: "Shortage of skilled staff",
        correct: true,
        translation: { vi: "Thiếu nhân sự có kỹ năng" },
      },
      {
        text: "Incorrect calculation in software",
        correct: false,
        translation: { vi: "Sai sót tính toán trong phần mềm" },
      },
      {
        text: "Slow system response",
        correct: false,
        translation: { vi: "Phản hồi hệ thống chậm" },
      },
      {
        text: "Crash on mobile",
        correct: false,
        translation: { vi: "Ứng dụng treo trên mobile" },
      },
    ],
  },
  {
    id: 18,
    question: "What is the purpose of a test plan?",
    translation: { vi: "Mục đích của kế hoạch kiểm thử là gì?" },
    answers: [
      {
        text: "To set scope, approach, resources and schedule for testing",
        correct: true,
        translation: {
          vi: "Đặt phạm vi, phương pháp, nguồn lực và lịch trình cho kiểm thử",
        },
      },
      {
        text: "To write test scripts only",
        correct: false,
        translation: { vi: "Chỉ để viết script kiểm thử" },
      },
      {
        text: "To store defects",
        correct: false,
        translation: { vi: "Để lưu lỗi" },
      },
      {
        text: "To specify UI look and feel",
        correct: false,
        translation: { vi: "Chỉ định giao diện" },
      },
    ],
  },
  {
    id: 19,
    question: "Which test design technique is ad-hoc and experience-based?",
    translation: {
      vi: "Kỹ thuật thiết kế kiểm thử nào là ngẫu hứng và dựa trên kinh nghiệm?",
    },
    answers: [
      {
        text: "Error guessing",
        correct: true,
        translation: { vi: "Đoán lỗi" },
      },
      {
        text: "State transition testing",
        correct: false,
        translation: { vi: "Kiểm thử chuyển đổi trạng thái" },
      },
      {
        text: "Decision table testing",
        correct: false,
        translation: { vi: "Bảng quyết định" },
      },
      {
        text: "Equivalence partitioning",
        correct: false,
        translation: { vi: "Phân vùng tương đương" },
      },
    ],
  },
  {
    id: 20,
    question: "Which of the following is an exit criterion for testing?",
    translation: { vi: "Tiêu chí dừng nào sau đây cho kiểm thử?" },
    answers: [
      {
        text: "All test cases executed or agreed residual risk",
        correct: true,
        translation: {
          vi: "Tất cả kịch bản đã chạy hoặc rủi ro còn lại đã thỏa thuận",
        },
      },
      {
        text: "When the manager is on holiday",
        correct: false,
        translation: { vi: "Khi quản lý nghỉ phép" },
      },
      {
        text: "When budgets remain",
        correct: false,
        translation: { vi: "Khi còn ngân sách" },
      },
      {
        text: "After one failed test",
        correct: false,
        translation: { vi: "Sau một kiểm thử thất bại" },
      },
    ],
  },
  {
    id: 21,
    question: "Which is not a typical result of reviews?",
    translation: {
      vi: "Kết quả nào không phải là kết quả điển hình của review?",
    },
    answers: [
      {
        text: "Increased number of production defects",
        correct: true,
        translation: { vi: "Tăng số lỗi sản xuất" },
      },
      {
        text: "Early detection of defects",
        correct: false,
        translation: { vi: "Phát hiện lỗi sớm" },
      },
      {
        text: "Improved quality of artifacts",
        correct: false,
        translation: { vi: "Cải thiện chất lượng sản phẩm" },
      },
      {
        text: "Better shared understanding",
        correct: false,
        translation: { vi: "Hiểu biết chung tốt hơn" },
      },
    ],
  },
  {
    id: 22,
    question: "What is test independence?",
    translation: { vi: "Kiểm thử độc lập là gì?" },
    answers: [
      {
        text: "Tests performed by someone other than the author",
        correct: true,
        translation: {
          vi: "Kiểm thử được thực hiện bởi người khác không phải tác giả",
        },
      },
      {
        text: "No communication between team members",
        correct: false,
        translation: { vi: "Không giao tiếp giữa thành viên" },
      },
      {
        text: "Only automated tests",
        correct: false,
        translation: { vi: "Chỉ kiểm thử tự động" },
      },
      {
        text: "Testing in production only",
        correct: false,
        translation: { vi: "Chỉ kiểm thử trên sản xuất" },
      },
    ],
  },
  {
    id: 23,
    question: "Which is true about defect severity?",
    translation: { vi: "Điều nào đúng về mức nghiêm trọng lỗi?" },
    answers: [
      {
        text: "Severity reflects impact on system operation",
        correct: true,
        translation: {
          vi: "Mức nghiêm trọng phản ánh ảnh hưởng tới hoạt động hệ thống",
        },
      },
      {
        text: "Severity is the same as priority",
        correct: false,
        translation: { vi: "Nghiêm trọng giống như ưu tiên" },
      },
      {
        text: "Higher severity always fixed first regardless of business need",
        correct: false,
        translation: {
          vi: "Lỗi nghiêm trọng luôn sửa trước bất kể nhu cầu kinh doanh",
        },
      },
      {
        text: "Severity depends on tester seniority",
        correct: false,
        translation: { vi: "Mức nghiêm trọng phụ thuộc vào cấp bậc tester" },
      },
    ],
  },
  {
    id: 24,
    question: "Which of these is a test execution activity?",
    translation: { vi: "Hoạt động nào là thực thi kiểm thử?" },
    answers: [
      {
        text: "Running test cases and logging results",
        correct: true,
        translation: { vi: "Chạy kịch bản kiểm thử và ghi kết quả" },
      },
      {
        text: "Defining requirements",
        correct: false,
        translation: { vi: "Xác định yêu cầu" },
      },
      {
        text: "Automating the build system",
        correct: false,
        translation: { vi: "Tự động hóa hệ thống build" },
      },
      {
        text: "Project budgeting",
        correct: false,
        translation: { vi: "Lập ngân sách dự án" },
      },
    ],
  },
  {
    id: 25,
    question: "State transition testing is appropriate when:",
    translation: { vi: "Kiểm thử chuyển đổi trạng thái phù hợp khi:" },
    answers: [
      {
        text: "System behavior depends on previous state and events",
        correct: true,
        translation: {
          vi: "Hành vi hệ thống phụ thuộc vào trạng thái trước đó và sự kiện",
        },
      },
      {
        text: "Only numeric ranges matter",
        correct: false,
        translation: { vi: "Chỉ các phạm vi số quan trọng" },
      },
      {
        text: "No state is maintained",
        correct: false,
        translation: { vi: "Không duy trì trạng thái" },
      },
      {
        text: "For load testing only",
        correct: false,
        translation: { vi: "Chỉ cho kiểm thử tải" },
      },
    ],
  },
  {
    id: 26,
    question: "Which is a characteristic of exploratory testing?",
    translation: { vi: "Đặc tính nào của kiểm thử thăm dò?" },
    answers: [
      {
        text: "Simultaneous test design and execution",
        correct: true,
        translation: { vi: "Thiết kế và thực thi kiểm thử đồng thời" },
      },
      {
        text: "Strict adherence to pre-written scripts",
        correct: false,
        translation: { vi: "Tuân thủ chặt chẽ kịch bản viết sẵn" },
      },
      {
        text: "Requires a high degree of automation",
        correct: false,
        translation: { vi: "Cần mức độ tự động cao" },
      },
      {
        text: "Only done after release",
        correct: false,
        translation: { vi: "Chỉ thực hiện sau phát hành" },
      },
    ],
  },
  {
    id: 27,
    question: "Which document lists test items and features to be tested?",
    translation: {
      vi: "Tài liệu nào liệt kê các mục kiểm thử và tính năng cần kiểm thử?",
    },
    answers: [
      {
        text: "Test plan",
        correct: true,
        translation: { vi: "Kế hoạch kiểm thử" },
      },
      {
        text: "Defect report",
        correct: false,
        translation: { vi: "Báo cáo lỗi" },
      },
      {
        text: "Release notes",
        correct: false,
        translation: { vi: "Ghi chú phát hành" },
      },
      {
        text: "User manual",
        correct: false,
        translation: { vi: "Sổ tay người dùng" },
      },
    ],
  },
  {
    id: 28,
    question: "Which is a non-functional quality attribute?",
    translation: { vi: "Thuộc tính chất lượng phi chức năng nào sau đây?" },
    answers: [
      { text: "Performance", correct: true, translation: { vi: "Hiệu năng" } },
      {
        text: "Correctness of outputs",
        correct: false,
        translation: { vi: "Độ chính xác đầu ra" },
      },
      {
        text: "Functional completeness",
        correct: false,
        translation: { vi: "Đầy đủ chức năng" },
      },
      {
        text: "Business logic",
        correct: false,
        translation: { vi: "Logic nghiệp vụ" },
      },
    ],
  },
  {
    id: 29,
    question:
      "Which of the following helps ensure tests are up to date after changes?",
    translation: {
      vi: "Điều gì giúp đảm bảo kiểm thử được cập nhật sau thay đổi?",
    },
    answers: [
      {
        text: "Regression testing",
        correct: true,
        translation: { vi: "Kiểm thử hồi quy" },
      },
      {
        text: "Smoke testing only",
        correct: false,
        translation: { vi: "Chỉ kiểm thử smoke" },
      },
      {
        text: "Only static reviews",
        correct: false,
        translation: { vi: "Chỉ review tĩnh" },
      },
      {
        text: "Ignoring test maintenance",
        correct: false,
        translation: { vi: "Bỏ qua bảo trì kiểm thử" },
      },
    ],
  },
  {
    id: 30,
    question: "What is the benefit of independent testing?",
    translation: { vi: "Lợi ích của kiểm thử độc lập là gì?" },
    answers: [
      {
        text: "Reduces author bias and increases objectivity",
        correct: true,
        translation: { vi: "Giảm thiên kiến tác giả và tăng tính khách quan" },
      },
      {
        text: "Removes need for communication",
        correct: false,
        translation: { vi: "Loại bỏ nhu cầu giao tiếp" },
      },
      {
        text: "Guarantees no defects",
        correct: false,
        translation: { vi: "Đảm bảo không có lỗi" },
      },
      {
        text: "Cuts testing duration to zero",
        correct: false,
        translation: { vi: "Giảm thời gian kiểm thử về 0" },
      },
    ],
  },
  {
    id: 31,
    question: "What does configuration management help with?",
    translation: { vi: "Quản lý cấu hình giúp gì?" },
    answers: [
      {
        text: "Tracking versions of testware and artifacts",
        correct: true,
        translation: { vi: "Theo dõi phiên bản testware và tài liệu" },
      },
      {
        text: "Fixing defects",
        correct: false,
        translation: { vi: "Sửa lỗi" },
      },
      {
        text: "Recruiting testers",
        correct: false,
        translation: { vi: "Tuyển tester" },
      },
      {
        text: "Designing features",
        correct: false,
        translation: { vi: "Thiết kế tính năng" },
      },
    ],
  },
  {
    id: 32,
    question: "Which testing is performed when the system is retired?",
    translation: {
      vi: "Loại kiểm thử nào thực hiện khi hệ thống bị ngừng hoạt động?",
    },
    answers: [
      {
        text: "Maintenance testing",
        correct: true,
        translation: { vi: "Kiểm thử bảo trì" },
      },
      {
        text: "Acceptance testing",
        correct: false,
        translation: { vi: "Kiểm thử chấp nhận" },
      },
      {
        text: "Unit testing",
        correct: false,
        translation: { vi: "Kiểm thử đơn vị" },
      },
      {
        text: "Alpha testing",
        correct: false,
        translation: { vi: "Alpha testing" },
      },
    ],
  },
  {
    id: 33,
    question: "Which is true of test metrics?",
    translation: { vi: "Điều nào đúng về chỉ số kiểm thử?" },
    answers: [
      {
        text: "They provide objective data to support decisions",
        correct: true,
        translation: { vi: "Cung cấp dữ liệu khách quan để hỗ trợ quyết định" },
      },
      {
        text: "They replace qualitative judgment entirely",
        correct: false,
        translation: { vi: "Thay thế hoàn toàn đánh giá định tính" },
      },
      {
        text: "They should be secret",
        correct: false,
        translation: { vi: "Nên giữ bí mật" },
      },
      {
        text: "They always show progress as positive",
        correct: false,
        translation: { vi: "Luôn cho thấy tiến độ tích cực" },
      },
    ],
  },
  {
    id: 34,
    question: "Which tool category supports static testing?",
    translation: { vi: "Danh mục công cụ nào hỗ trợ kiểm thử tĩnh?" },
    answers: [
      {
        text: "Review support tools",
        correct: true,
        translation: { vi: "Công cụ hỗ trợ review" },
      },
      {
        text: "Stress testing tools",
        correct: false,
        translation: { vi: "Công cụ stress" },
      },
      {
        text: "Load generators",
        correct: false,
        translation: { vi: "Trình tạo tải" },
      },
      {
        text: "Performance profilers",
        correct: false,
        translation: { vi: "Trình phân tích hiệu năng" },
      },
    ],
  },
  {
    id: 35,
    question: "Which is an objective of a retrospective meeting?",
    translation: { vi: "Mục tiêu của buổi họp retrospective là gì?" },
    answers: [
      {
        text: "Learn from the past and improve processes",
        correct: true,
        translation: { vi: "Học hỏi từ quá khứ và cải tiến quy trình" },
      },
      {
        text: "Assign blame for defects",
        correct: false,
        translation: { vi: "Đổ lỗi cho lỗi" },
      },
      {
        text: "Write test cases only",
        correct: false,
        translation: { vi: "Chỉ viết kịch bản" },
      },
      {
        text: "Plan marketing campaigns",
        correct: false,
        translation: { vi: "Lập kế hoạch marketing" },
      },
    ],
  },
  {
    id: 36,
    question: "Which is a way to design test data?",
    translation: { vi: "Cách nào dùng để thiết kế dữ liệu kiểm thử?" },
    answers: [
      {
        text: "Use equivalence classes and boundary values",
        correct: true,
        translation: { vi: "Sử dụng lớp tương đương và giá trị biên" },
      },
      {
        text: "Only random values",
        correct: false,
        translation: { vi: "Chỉ giá trị ngẫu nhiên" },
      },
      {
        text: "Only large files",
        correct: false,
        translation: { vi: "Chỉ tệp lớn" },
      },
      {
        text: "Ignore invalid inputs",
        correct: false,
        translation: { vi: "Bỏ qua đầu vào không hợp lệ" },
      },
    ],
  },
  {
    id: 37,
    question: "Which is true about test automation ROI?",
    translation: { vi: "Điều nào đúng về ROI của tự động hóa kiểm thử?" },
    answers: [
      {
        text: "It depends on frequency of reuse and maintenance cost",
        correct: true,
        translation: {
          vi: "Phụ thuộc vào tần suất dùng lại và chi phí bảo trì",
        },
      },
      {
        text: "Always positive in first month",
        correct: false,
        translation: { vi: "Luôn dương trong tháng đầu" },
      },
      {
        text: "Independent of test design quality",
        correct: false,
        translation: { vi: "Không phụ thuộc vào chất lượng thiết kế kiểm thử" },
      },
      {
        text: "Irrelevant to decision making",
        correct: false,
        translation: { vi: "Không liên quan tới quyết định" },
      },
    ],
  },
  {
    id: 38,
    question:
      "What is the main purpose of configuration management for testing?",
    translation: {
      vi: "Mục đích chính của quản lý cấu hình cho kiểm thử là gì?",
    },
    answers: [
      {
        text: "Ensure consistent versions of testware and artifacts",
        correct: true,
        translation: {
          vi: "Đảm bảo phiên bản nhất quán của testware và tài liệu",
        },
      },
      {
        text: "Reduce the number of tests",
        correct: false,
        translation: { vi: "Giảm số lượng kiểm thử" },
      },
      {
        text: "Replace defect tracking",
        correct: false,
        translation: { vi: "Thay thế theo dõi lỗi" },
      },
      {
        text: "Guarantee zero defects",
        correct: false,
        translation: { vi: "Đảm bảo không lỗi" },
      },
    ],
  },
  {
    id: 39,
    question: "Which of the following is a suitable exit criterion?",
    translation: { vi: "Tiêu chí dừng phù hợp nào sau đây?" },
    answers: [
      {
        text: "Pre-defined test completion percentage and risk level",
        correct: true,
        translation: {
          vi: "Phần trăm hoàn thành test và mức rủi ro đã xác định",
        },
      },
      {
        text: "Only when developers decide so",
        correct: false,
        translation: { vi: "Chỉ khi lập trình viên quyết định" },
      },
      {
        text: "When the last test fails",
        correct: false,
        translation: { vi: "Khi kiểm thử cuối thất bại" },
      },
      {
        text: "When the testers are bored",
        correct: false,
        translation: { vi: "Khi tester chán" },
      },
    ],
  },
  {
    id: 40,
    question: "Which of these is a risk related to test environments?",
    translation: { vi: "Rủi ro nào liên quan tới môi trường kiểm thử?" },
    answers: [
      {
        text: "Environment not available or configured incorrectly",
        correct: true,
        translation: { vi: "Môi trường không sẵn sàng hoặc cấu hình sai" },
      },
      {
        text: "Test cases are too many",
        correct: false,
        translation: { vi: "Quá nhiều kịch bản" },
      },
      {
        text: "Tester lacks skill",
        correct: false,
        translation: { vi: "Tester thiếu kỹ năng" },
      },
      {
        text: "Product is late",
        correct: false,
        translation: { vi: "Sản phẩm trễ hạn" },
      },
    ],
  },
];
