export const questions = [
  // --- ISTQB FL STYLE MOCK EXAM (40 QUESTIONS) ---
  // Note: Questions are newly written (not from official exams).
  {
    id: 1,
    question: "Which of the following is a common objective of testing?",
    translation: { vi: "Mục tiêu phổ biến nào sau đây của kiểm thử?" },
    answers: [
      {
        text: "To prove that the software is defect-free",
        correct: false,
        translation: { vi: "Chứng minh phần mềm không có lỗi" },
      },
      {
        text: "To find defects and provide information about quality",
        correct: true,
        translation: { vi: "Tìm lỗi và cung cấp thông tin về chất lượng" },
      },
      {
        text: "To ensure all requirements are implemented exactly as written",
        correct: false,
        translation: {
          vi: "Đảm bảo mọi yêu cầu được triển khai đúng nguyên văn",
        },
      },
      {
        text: "To remove the need for debugging",
        correct: false,
        translation: { vi: "Loại bỏ nhu cầu gỡ lỗi (debugging)" },
      },
    ],
  },
  {
    id: 2,
    question:
      "Which statement BEST describes the relationship between error, defect, and failure?",
    translation: {
      vi: "Phát biểu nào mô tả ĐÚNG NHẤT mối quan hệ giữa lỗi (error), khiếm khuyết (defect) và hư hỏng (failure)?",
    },
    answers: [
      {
        text: "A defect causes an error, which always causes a failure",
        correct: false,
        translation: {
          vi: "Khiếm khuyết (defect) gây ra lỗi (error), và luôn gây ra hư hỏng (failure)",
        },
      },
      {
        text: "An error may introduce a defect, which may cause a failure during execution",
        correct: true,
        translation: {
          vi: "Một lỗi (error) có thể tạo ra khiếm khuyết (defect), và khiếm khuyết có thể gây ra hư hỏng (failure) khi thực thi",
        },
      },
      {
        text: "A failure introduces a defect, which then causes an error",
        correct: false,
        translation: {
          vi: "Hư hỏng (failure) tạo ra khiếm khuyết (defect), rồi gây ra lỗi (error)",
        },
      },
      {
        text: "Error, defect, and failure are synonyms",
        correct: false,
        translation: {
          vi: "Lỗi (error), khiếm khuyết (defect), hư hỏng (failure) là từ đồng nghĩa",
        },
      },
    ],
  },
  {
    id: 3,
    question:
      "Which testing principle states that it is impossible to test everything?",
    translation: {
      vi: "Nguyên tắc kiểm thử nào nói rằng không thể kiểm thử tất cả?",
    },
    answers: [
      {
        text: "Defect clustering",
        correct: false,
        translation: { vi: "Sự tập trung lỗi" },
      },
      {
        text: "Pesticide paradox",
        correct: false,
        translation: { vi: "Nghịch lý thuốc trừ sâu" },
      },
      {
        text: "Exhaustive testing is impossible",
        correct: true,
        translation: {
          vi: "Kiểm thử vét cạn là không thể",
        },
      },
      {
        text: "Absence-of-errors fallacy",
        correct: false,
        translation: {
          vi: "Ảo tưởng về sự vắng mặt của lỗi",
        },
      },
    ],
  },
  {
    id: 4,
    question: "Which of the following BEST describes 'test basis'?",
    translation: {
      vi: "Mô tả nào sau đây ĐÚNG NHẤT về 'cơ sở kiểm thử' (test basis)?",
    },
    answers: [
      {
        text: "The set of tools used for testing",
        correct: false,
        translation: { vi: "Tập các công cụ dùng để kiểm thử" },
      },
      {
        text: "The work products used as a starting point for test analysis and design",
        correct: true,
        translation: {
          vi: "Các sản phẩm công việc dùng làm điểm xuất phát cho phân tích và thiết kế kiểm thử",
        },
      },
      {
        text: "A list of defects from previous releases",
        correct: false,
        translation: { vi: "Danh sách lỗi từ các bản phát hành trước" },
      },
      {
        text: "The final test summary report",
        correct: false,
        translation: { vi: "Báo cáo tổng kết kiểm thử cuối cùng" },
      },
    ],
  },
  {
    id: 5,
    question:
      "Testing is context dependent. Which example BEST illustrates this?",
    translation: {
      vi: "Kiểm thử phụ thuộc ngữ cảnh. Ví dụ nào minh họa ĐÚNG NHẤT?",
    },
    answers: [
      {
        text: "All projects must use the same regression test suite",
        correct: false,
        translation: { vi: "Mọi dự án phải dùng cùng một bộ kiểm thử hồi quy" },
      },
      {
        text: "A safety-critical system requires different testing than a social media app",
        correct: true,
        translation: {
          vi: "Hệ thống trọng yếu về an toàn (safety-critical) cần kiểm thử khác với ứng dụng mạng xã hội",
        },
      },
      {
        text: "Manual testing is always better than automated testing",
        correct: false,
        translation: { vi: "Kiểm thử thủ công luôn tốt hơn tự động" },
      },
      {
        text: "Unit testing can be skipped if system testing is thorough",
        correct: false,
        translation: {
          vi: "Có thể bỏ kiểm thử đơn vị nếu kiểm thử hệ thống kỹ",
        },
      },
    ],
  },
  {
    id: 6,
    question: "Which activity is part of test analysis?",
    translation: {
      vi: "Hoạt động nào thuộc giai đoạn phân tích kiểm thử (test analysis)?",
    },
    answers: [
      {
        text: "Creating test environment and tools",
        correct: false,
        translation: { vi: "Thiết lập môi trường và công cụ kiểm thử" },
      },
      {
        text: "Identifying test conditions from the test basis",
        correct: true,
        translation: { vi: "Xác định điều kiện kiểm thử từ cơ sở kiểm thử" },
      },
      {
        text: "Executing test procedures and logging results",
        correct: false,
        translation: { vi: "Thực thi quy trình kiểm thử và ghi nhận kết quả" },
      },
      {
        text: "Writing the test summary report",
        correct: false,
        translation: { vi: "Viết báo cáo tổng kết kiểm thử" },
      },
    ],
  },
  {
    id: 7,
    question: "Which statement about debugging is TRUE?",
    translation: { vi: "Phát biểu nào về gỡ lỗi (debugging) là ĐÚNG?" },
    answers: [
      {
        text: "Debugging is a test activity performed to find failures",
        correct: false,
        translation: { vi: "Gỡ lỗi là hoạt động kiểm thử để tìm sự cố" },
      },
      {
        text: "Debugging is a development activity used to find and fix the cause of failures",
        correct: true,
        translation: {
          vi: "Gỡ lỗi là hoạt động phát triển để tìm và sửa nguyên nhân của sự cố",
        },
      },
      {
        text: "Debugging can replace regression testing",
        correct: false,
        translation: { vi: "Gỡ lỗi có thể thay thế kiểm thử hồi quy" },
      },
      {
        text: "Debugging is only done after acceptance testing",
        correct: false,
        translation: { vi: "Gỡ lỗi chỉ thực hiện sau kiểm thử chấp nhận" },
      },
    ],
  },
  {
    id: 8,
    question:
      "Which of the following is a benefit of early testing (shift left)?",
    translation: { vi: "Lợi ích nào sau đây của kiểm thử sớm (shift left)?" },
    answers: [
      {
        text: "It guarantees there will be no defects in production",
        correct: false,
        translation: { vi: "Đảm bảo không có lỗi trên production" },
      },
      {
        text: "It can reduce the cost of fixing defects by finding them earlier",
        correct: true,
        translation: { vi: "Giảm chi phí sửa lỗi bằng cách tìm lỗi sớm hơn" },
      },
      {
        text: "It eliminates the need for system testing",
        correct: false,
        translation: { vi: "Loại bỏ nhu cầu kiểm thử hệ thống" },
      },
      {
        text: "It replaces the need for requirements",
        correct: false,
        translation: { vi: "Thay thế nhu cầu về yêu cầu" },
      },
    ],
  },
  {
    id: 9,
    question:
      "In the V-model, which test level is MOST closely related to the system requirements specification?",
    translation: {
      vi: "Trong mô hình chữ V, mức kiểm thử nào liên quan chặt nhất với đặc tả yêu cầu hệ thống?",
    },
    answers: [
      {
        text: "Component testing",
        correct: false,
        translation: { vi: "Kiểm thử thành phần" },
      },
      {
        text: "Integration testing",
        correct: false,
        translation: { vi: "Kiểm thử tích hợp" },
      },
      {
        text: "System testing",
        correct: true,
        translation: { vi: "Kiểm thử hệ thống" },
      },
      {
        text: "Acceptance testing",
        correct: false,
        translation: { vi: "Kiểm thử chấp nhận" },
      },
    ],
  },
  {
    id: 10,
    question: "Which of the following is an example of maintenance testing?",
    translation: {
      vi: "Ví dụ nào sau đây là kiểm thử bảo trì (maintenance testing)?",
    },
    answers: [
      {
        text: "Testing a new feature before first release",
        correct: false,
        translation: {
          vi: "Kiểm thử tính năng mới trước lần phát hành đầu tiên",
        },
      },
      {
        text: "Testing a defect fix and its side effects in a live system",
        correct: true,
        translation: {
          vi: "Kiểm thử bản sửa lỗi và tác động phụ trong hệ thống đang vận hành",
        },
      },
      {
        text: "Writing user stories",
        correct: false,
        translation: { vi: "Viết user story" },
      },
      {
        text: "Performing a code walkthrough for a new module",
        correct: false,
        translation: { vi: "Thực hiện walkthrough mã cho module mới" },
      },
    ],
  },
  {
    id: 11,
    question:
      "Which type of review is led by the author and is often used to educate stakeholders?",
    translation: {
      vi: "Loại rà soát (review) nào do tác giả dẫn dắt và thường dùng để truyền đạt/giải thích cho bên liên quan?",
    },
    answers: [
      {
        text: "Inspection",
        correct: false,
        translation: { vi: "Kiểm tra (Inspection)" },
      },
      {
        text: "Technical review",
        correct: false,
        translation: { vi: "Rà soát kỹ thuật (Technical review)" },
      },
      {
        text: "Walkthrough",
        correct: true,
        translation: { vi: "Hướng dẫn (Walkthrough)" },
      },
      {
        text: "Informal review",
        correct: false,
        translation: { vi: "Rà soát không chính thức (Informal review)" },
      },
    ],
  },
  {
    id: 12,
    question:
      "Which role is responsible for recording issues found during a formal review meeting?",
    translation: {
      vi: "Trong một buổi rà soát chính thức, ai chịu trách nhiệm ghi lại các vấn đề được phát hiện?",
    },
    answers: [
      { text: "Author", correct: false, translation: { vi: "Tác giả" } },
      {
        text: "Moderator",
        correct: false,
        translation: { vi: "Người điều phối" },
      },
      {
        text: "Reviewer",
        correct: false,
        translation: { vi: "Người rà soát" },
      },
      {
        text: "Scribe (Recorder)",
        correct: true,
        translation: { vi: "Người ghi chép (Thư ký)" },
      },
    ],
  },
  {
    id: 13,
    question: "Which statement about static testing is TRUE?",
    translation: {
      vi: "Phát biểu nào về kiểm thử tĩnh (static testing) là ĐÚNG?",
    },
    answers: [
      {
        text: "It can only be applied to source code",
        correct: false,
        translation: { vi: "Chỉ áp dụng cho mã nguồn" },
      },
      {
        text: "It requires executing the software",
        correct: false,
        translation: { vi: "Yêu cầu thực thi phần mềm" },
      },
      {
        text: "It can find defects in work products without executing them",
        correct: true,
        translation: {
          vi: "Có thể tìm lỗi trong sản phẩm công việc mà không cần thực thi",
        },
      },
      {
        text: "It is performed only after dynamic testing is complete",
        correct: false,
        translation: { vi: "Chỉ thực hiện sau khi kiểm thử động xong" },
      },
    ],
  },
  {
    id: 14,
    question: "Which is an example of a non-functional test type?",
    translation: { vi: "Ví dụ nào là một loại kiểm thử phi chức năng?" },
    answers: [
      {
        text: "Testing business rules for discounts",
        correct: false,
        translation: { vi: "Kiểm thử quy tắc nghiệp vụ giảm giá" },
      },
      {
        text: "Testing that invalid passwords are rejected",
        correct: false,
        translation: { vi: "Kiểm thử mật khẩu không hợp lệ bị từ chối" },
      },
      {
        text: "Measuring response time under expected user load",
        correct: true,
        translation: {
          vi: "Đo thời gian phản hồi dưới tải người dùng dự kiến",
        },
      },
      {
        text: "Testing the calculation of VAT",
        correct: false,
        translation: { vi: "Kiểm thử tính VAT" },
      },
    ],
  },
  {
    id: 15,
    question:
      "Which test technique is MOST suitable for testing a field that accepts values 1 to 100?",
    translation: {
      vi: "Kỹ thuật kiểm thử nào PHÙ HỢP NHẤT để kiểm thử trường nhận giá trị từ 1 đến 100?",
    },
    answers: [
      {
        text: "Decision table testing",
        correct: false,
        translation: { vi: "Kiểm thử bảng quyết định" },
      },
      {
        text: "Boundary value analysis",
        correct: true,
        translation: { vi: "Phân tích giá trị biên (BVA)" },
      },
      {
        text: "State transition testing",
        correct: false,
        translation: { vi: "Kiểm thử chuyển đổi trạng thái" },
      },
      {
        text: "Statement testing",
        correct: false,
        translation: { vi: "Kiểm thử câu lệnh" },
      },
    ],
  },
  {
    id: 16,
    question: "Equivalence partitioning is used to:",
    translation: { vi: "Phân vùng tương đương được dùng để:" },
    answers: [
      {
        text: "Test all combinations of conditions",
        correct: false,
        translation: { vi: "Kiểm thử mọi tổ hợp điều kiện" },
      },
      {
        text: "Reduce test cases by selecting representatives from partitions",
        correct: true,
        translation: {
          vi: "Giảm trường hợp kiểm thử bằng cách chọn đại diện từ các phân vùng",
        },
      },
      {
        text: "Achieve 100% path coverage",
        correct: false,
        translation: { vi: "Đạt 100% bao phủ đường dẫn" },
      },
      {
        text: "Test only boundary values",
        correct: false,
        translation: { vi: "Chỉ kiểm thử giá trị biên" },
      },
    ],
  },
  {
    id: 17,
    question:
      "Which technique is MOST appropriate for testing combinations of conditions and resulting actions?",
    translation: {
      vi: "Kỹ thuật nào PHÙ HỢP NHẤT để kiểm thử các tổ hợp điều kiện và hành động kết quả?",
    },
    answers: [
      {
        text: "Decision table testing",
        correct: true,
        translation: { vi: "Kiểm thử bảng quyết định" },
      },
      {
        text: "Use case testing",
        correct: false,
        translation: { vi: "Kiểm thử trường hợp sử dụng (use case)" },
      },
      {
        text: "Error guessing",
        correct: false,
        translation: { vi: "Đoán lỗi" },
      },
      {
        text: "Statement coverage",
        correct: false,
        translation: { vi: "Bao phủ câu lệnh" },
      },
    ],
  },
  {
    id: 18,
    question:
      "State transition testing is MOST useful when the system behavior depends on:",
    translation: {
      vi: "Kiểm thử chuyển đổi trạng thái hữu ích nhất khi hành vi hệ thống phụ thuộc vào:",
    },
    answers: [
      {
        text: "The internal code structure",
        correct: false,
        translation: { vi: "Cấu trúc bên trong mã" },
      },
      {
        text: "Previous events and current state",
        correct: true,
        translation: { vi: "Các sự kiện trước đó và trạng thái hiện tại" },
      },
      {
        text: "Numeric ranges only",
        correct: false,
        translation: { vi: "Chỉ các dải số" },
      },
      {
        text: "Developer experience",
        correct: false,
        translation: { vi: "Kinh nghiệm developer" },
      },
    ],
  },
  {
    id: 19,
    question: "Use case testing primarily helps to validate:",
    translation: {
      vi: "Kiểm thử trường hợp sử dụng (use case) chủ yếu giúp xác nhận:",
    },
    answers: [
      {
        text: "Internal control flow complexity",
        correct: false,
        translation: { vi: "Độ phức tạp luồng điều khiển nội bộ" },
      },
      {
        text: "User workflows and end-to-end business processes",
        correct: true,
        translation: {
          vi: "Luồng thao tác người dùng và quy trình nghiệp vụ đầu-cuối (end-to-end)",
        },
      },
      {
        text: "Compiler warnings",
        correct: false,
        translation: { vi: "Cảnh báo từ trình biên dịch" },
      },
      {
        text: "Code style compliance",
        correct: false,
        translation: { vi: "Tuân thủ phong cách mã nguồn (code style)" },
      },
    ],
  },
  {
    id: 20,
    question: "Which is TRUE about exploratory testing?",
    translation: {
      vi: "Phát biểu nào ĐÚNG về kiểm thử thăm dò (exploratory testing)?",
    },
    answers: [
      {
        text: "Test design and execution happen at separate phases",
        correct: false,
        translation: { vi: "Thiết kế và thực thi diễn ra tách biệt" },
      },
      {
        text: "It is random testing with no purpose",
        correct: false,
        translation: { vi: "Là kiểm thử ngẫu nhiên không mục đích" },
      },
      {
        text: "Learning, test design, and test execution happen simultaneously",
        correct: true,
        translation: {
          vi: "Học hỏi, thiết kế và thực thi kiểm thử diễn ra đồng thời",
        },
      },
      {
        text: "It is only possible when requirements are complete and stable",
        correct: false,
        translation: { vi: "Chỉ khả thi khi yêu cầu hoàn chỉnh và ổn định" },
      },
    ],
  },
  {
    id: 21,
    question: "Statement testing is an example of:",
    translation: { vi: "Kiểm thử câu lệnh (statement testing) là ví dụ của:" },
    answers: [
      {
        text: "A black-box technique",
        correct: false,
        translation: { vi: "Kỹ thuật hộp đen" },
      },
      {
        text: "A white-box (structural) technique",
        correct: true,
        translation: { vi: "Kỹ thuật hộp trắng (cấu trúc)" },
      },
      {
        text: "An experience-based technique",
        correct: false,
        translation: { vi: "Kỹ thuật dựa trên kinh nghiệm" },
      },
      {
        text: "A static review technique",
        correct: false,
        translation: { vi: "Kỹ thuật rà soát (review) tĩnh" },
      },
    ],
  },
  {
    id: 22,
    question:
      "Which coverage measure is generally stronger than statement coverage?",
    translation: {
      vi: "Chỉ số bao phủ nào thường mạnh hơn bao phủ câu lệnh?",
    },
    answers: [
      {
        text: "Requirements coverage",
        correct: false,
        translation: { vi: "Bao phủ yêu cầu" },
      },
      {
        text: "Decision (branch) coverage",
        correct: true,
        translation: { vi: "Bao phủ quyết định (nhánh)" },
      },
      {
        text: "Defect coverage",
        correct: false,
        translation: { vi: "Bao phủ lỗi" },
      },
      {
        text: "Risk coverage",
        correct: false,
        translation: { vi: "Bao phủ rủi ro" },
      },
    ],
  },
  {
    id: 23,
    question:
      "Which of the following is a valid reason for independent testing?",
    translation: {
      vi: "Lý do hợp lệ nào sau đây cho kiểm thử độc lập?",
    },
    answers: [
      {
        text: "It always costs less than developer testing",
        correct: false,
        translation: { vi: "Luôn rẻ hơn kiểm thử bởi lập trình viên" },
      },
      {
        text: "It reduces bias and provides different perspectives",
        correct: true,
        translation: { vi: "Giảm thiên kiến và cung cấp góc nhìn khác" },
      },
      {
        text: "It guarantees the software will meet all user needs",
        correct: false,
        translation: { vi: "Đảm bảo phần mềm đáp ứng mọi nhu cầu người dùng" },
      },
      {
        text: "It eliminates the need for unit testing",
        correct: false,
        translation: { vi: "Loại bỏ nhu cầu kiểm thử đơn vị" },
      },
    ],
  },
  {
    id: 24,
    question: "Which of the following BEST describes confirmation testing?",
    translation: {
      vi: "Mô tả nào ĐÚNG NHẤT về kiểm thử xác nhận (confirmation testing)?",
    },
    answers: [
      {
        text: "Testing to ensure a defect fix worked",
        correct: true,
        translation: { vi: "Kiểm thử để đảm bảo bản sửa lỗi đã hoạt động" },
      },
      {
        text: "Testing to find new defects caused by a change",
        correct: false,
        translation: { vi: "Kiểm thử để tìm lỗi mới do thay đổi gây ra" },
      },
      {
        text: "Testing performed by end users at their site",
        correct: false,
        translation: {
          vi: "Kiểm thử do người dùng cuối thực hiện tại nơi của họ",
        },
      },
      {
        text: "Testing done without documentation",
        correct: false,
        translation: { vi: "Kiểm thử không có tài liệu" },
      },
    ],
  },
  {
    id: 25,
    question: "Regression testing is primarily performed to:",
    translation: {
      vi: "Kiểm thử hồi quy (regression testing) chủ yếu được thực hiện để:",
    },
    answers: [
      {
        text: "Prove all defects are fixed",
        correct: false,
        translation: { vi: "Chứng minh mọi lỗi đã được sửa" },
      },
      {
        text: "Check that changes did not break existing functionality",
        correct: true,
        translation: {
          vi: "Kiểm tra thay đổi không làm hỏng chức năng hiện có",
        },
      },
      {
        text: "Find the root cause of failures",
        correct: false,
        translation: { vi: "Tìm nguyên nhân gốc của sự cố" },
      },
      {
        text: "Decide whether a defect is valid",
        correct: false,
        translation: { vi: "Quyết định khiếm khuyết có hợp lệ hay không" },
      },
    ],
  },
  {
    id: 26,
    question:
      "Which of the following is typically included in a good defect report?",
    translation: { vi: "Thông tin nào thường có trong một báo cáo lỗi tốt?" },
    answers: [
      {
        text: "Steps to reproduce and expected vs actual results",
        correct: true,
        translation: {
          vi: "Các bước tái hiện và kết quả mong đợi so với thực tế",
        },
      },
      {
        text: "A promise that the defect will be fixed by tomorrow",
        correct: false,
        translation: { vi: "Cam kết lỗi sẽ được sửa vào ngày mai" },
      },
      {
        text: "The full source code of the system",
        correct: false,
        translation: { vi: "Toàn bộ mã nguồn của hệ thống" },
      },
      {
        text: "Personal opinions about the developer",
        correct: false,
        translation: { vi: "Ý kiến cá nhân về lập trình viên" },
      },
    ],
  },
  {
    id: 27,
    question: "Severity of a defect indicates:",
    translation: { vi: "Mức độ nghiêm trọng (severity) của lỗi cho biết:" },
    answers: [
      {
        text: "How urgently it should be fixed",
        correct: false,
        translation: { vi: "Cần sửa gấp mức nào" },
      },
      {
        text: "The impact of the defect on the system or users",
        correct: true,
        translation: { vi: "Mức độ tác động của lỗi lên hệ thống/người dùng" },
      },
      {
        text: "Who introduced the defect",
        correct: false,
        translation: { vi: "Ai tạo ra lỗi" },
      },
      {
        text: "How many test cases found the defect",
        correct: false,
        translation: { vi: "Bao nhiêu trường hợp kiểm thử tìm ra lỗi" },
      },
    ],
  },
  {
    id: 28,
    question:
      "Which item is MOST likely a project risk (as opposed to a product risk)?",
    translation: {
      vi: "Mục nào sau đây có khả năng là rủi ro dự án (không phải rủi ro sản phẩm)?",
    },
    answers: [
      {
        text: "The login feature may allow unauthorized access",
        correct: false,
        translation: {
          vi: "Tính năng đăng nhập có thể cho phép truy cập trái phép",
        },
      },
      {
        text: "The payment calculation may be incorrect",
        correct: false,
        translation: { vi: "Tính toán thanh toán có thể sai" },
      },
      {
        text: "Test environment delivery may be delayed",
        correct: true,
        translation: { vi: "Việc bàn giao môi trường kiểm thử có thể bị trễ" },
      },
      {
        text: "Response time may exceed 2 seconds",
        correct: false,
        translation: { vi: "Thời gian phản hồi có thể vượt 2 giây" },
      },
    ],
  },
  {
    id: 29,
    question: "Risk-based testing uses risk to:",
    translation: { vi: "Kiểm thử dựa trên rủi ro dùng rủi ro để:" },
    answers: [
      {
        text: "Determine which developers get code review",
        correct: false,
        translation: { vi: "Quyết định developer nào được code review" },
      },
      {
        text: "Prioritize test activities and allocate effort",
        correct: true,
        translation: { vi: "Ưu tiên hoạt động kiểm thử và phân bổ nguồn lực" },
      },
      {
        text: "Eliminate the need for test planning",
        correct: false,
        translation: { vi: "Loại bỏ nhu cầu lập kế hoạch kiểm thử" },
      },
      {
        text: "Guarantee all critical defects are found",
        correct: false,
        translation: { vi: "Đảm bảo tìm được mọi lỗi quan trọng" },
      },
    ],
  },
  {
    id: 30,
    question:
      "Which document typically describes the test objectives, resources, and schedule?",
    translation: {
      vi: "Tài liệu nào thường mô tả mục tiêu kiểm thử, nguồn lực và lịch trình?",
    },
    answers: [
      {
        text: "Test plan",
        correct: true,
        translation: { vi: "Kế hoạch kiểm thử (Test plan)" },
      },
      {
        text: "Defect report",
        correct: false,
        translation: { vi: "Báo cáo lỗi (Defect report)" },
      },
      {
        text: "Test case",
        correct: false,
        translation: { vi: "Trường hợp kiểm thử (Test case)" },
      },
      {
        text: "User manual",
        correct: false,
        translation: { vi: "Tài liệu hướng dẫn sử dụng" },
      },
    ],
  },
  {
    id: 31,
    question: "Test monitoring and control primarily involves:",
    translation: { vi: "Giám sát và kiểm soát kiểm thử chủ yếu bao gồm:" },
    answers: [
      {
        text: "Designing test cases based on requirements",
        correct: false,
        translation: { vi: "Thiết kế trường hợp kiểm thử dựa trên yêu cầu" },
      },
      {
        text: "Comparing actual progress against plan and taking corrective actions",
        correct: true,
        translation: {
          vi: "So sánh tiến độ thực tế với kế hoạch và thực hiện hành động điều chỉnh",
        },
      },
      {
        text: "Executing tests only at the end of development",
        correct: false,
        translation: {
          vi: "Chỉ thực thi kiểm thử vào cuối giai đoạn phát triển",
        },
      },
      {
        text: "Writing code to fix defects",
        correct: false,
        translation: { vi: "Viết mã để sửa lỗi" },
      },
    ],
  },
  {
    id: 32,
    question: "Exit criteria are used to determine:",
    translation: { vi: "Tiêu chí kết thúc (exit criteria) dùng để xác định:" },
    answers: [
      {
        text: "When a test activity can start",
        correct: false,
        translation: { vi: "Khi nào một hoạt động kiểm thử có thể bắt đầu" },
      },
      {
        text: "When the cost of testing is fixed",
        correct: false,
        translation: { vi: "Khi nào chi phí kiểm thử được cố định" },
      },
      {
        text: "When a test level is complete and can stop",
        correct: true,
        translation: { vi: "Khi nào mức kiểm thử hoàn tất và có thể dừng" },
      },
      {
        text: "Who is responsible for defects",
        correct: false,
        translation: { vi: "Ai chịu trách nhiệm cho các lỗi" },
      },
    ],
  },
  {
    id: 33,
    question:
      "Which metric is MOST useful for tracking test execution progress?",
    translation: {
      vi: "Chỉ số nào hữu ích nhất để theo dõi tiến độ thực thi kiểm thử?",
    },
    answers: [
      {
        text: "Number of test cases designed",
        correct: false,
        translation: { vi: "Số lượng trường hợp kiểm thử đã thiết kế" },
      },
      {
        text: "Percentage of test cases executed (passed/failed/blocked)",
        correct: true,
        translation: {
          vi: "Tỷ lệ trường hợp kiểm thử đã thực thi (đạt/trượt/bị chặn)",
        },
      },
      {
        text: "Number of developers on the project",
        correct: false,
        translation: { vi: "Số lượng lập trình viên trong dự án" },
      },
      {
        text: "Lines of code written per day",
        correct: false,
        translation: { vi: "Số dòng mã viết mỗi ngày" },
      },
    ],
  },
  {
    id: 34,
    question: "Traceability between requirements and test cases helps to:",
    translation: {
      vi: "Khả năng truy vết giữa yêu cầu và trường hợp kiểm thử giúp:",
    },
    answers: [
      {
        text: "Increase defect severity",
        correct: false,
        translation: { vi: "Tăng mức độ nghiêm trọng của lỗi" },
      },
      {
        text: "Measure coverage and assess impact of changes",
        correct: true,
        translation: {
          vi: "Đo lường độ bao phủ và đánh giá tác động khi yêu cầu thay đổi",
        },
      },
      {
        text: "Remove the need for test data",
        correct: false,
        translation: { vi: "Loại bỏ nhu cầu về dữ liệu kiểm thử" },
      },
      {
        text: "Guarantee zero defects",
        correct: false,
        translation: { vi: "Đảm bảo không còn lỗi" },
      },
    ],
  },
  {
    id: 35,
    question: "Configuration management in testing is used to:",
    translation: { vi: "Quản lý cấu hình trong kiểm thử dùng để:" },
    answers: [
      {
        text: "Execute automated tests faster",
        correct: false,
        translation: { vi: "Chạy kiểm thử tự động nhanh hơn" },
      },
      {
        text: "Identify and control versions of testware and test items",
        correct: true,
        translation: {
          vi: "Định danh và kiểm soát phiên bản phần mềm kiểm thử (testware) và hạng mục kiểm thử",
        },
      },
      {
        text: "Generate random test data",
        correct: false,
        translation: { vi: "Sinh dữ liệu kiểm thử ngẫu nhiên" },
      },
      {
        text: "Decide product roadmap priorities",
        correct: false,
        translation: { vi: "Quyết định ưu tiên lộ trình sản phẩm" },
      },
    ],
  },
  {
    id: 36,
    question: "Which of the following is a key benefit of reviews?",
    translation: { vi: "Lợi ích chính nào sau đây của việc rà soát (review)?" },
    answers: [
      {
        text: "They replace dynamic testing",
        correct: false,
        translation: { vi: "Thay thế kiểm thử động" },
      },
      {
        text: "They find defects early and reduce rework cost",
        correct: true,
        translation: { vi: "Tìm lỗi sớm và giảm chi phí làm lại" },
      },
      {
        text: "They guarantee performance requirements are met",
        correct: false,
        translation: { vi: "Đảm bảo đáp ứng yêu cầu hiệu năng" },
      },
      {
        text: "They eliminate the need for test planning",
        correct: false,
        translation: { vi: "Loại bỏ nhu cầu lập kế hoạch kiểm thử" },
      },
    ],
  },
  {
    id: 37,
    question:
      "Which of the following BEST describes the purpose of a test summary report?",
    translation: {
      vi: "Mục đích của báo cáo tổng kết kiểm thử (test summary report) được mô tả ĐÚNG NHẤT là gì?",
    },
    answers: [
      {
        text: "To list all test cases in detail",
        correct: false,
        translation: { vi: "Liệt kê chi tiết tất cả trường hợp kiểm thử" },
      },
      {
        text: "To provide information about testing performed and evaluate exit criteria",
        correct: true,
        translation: {
          vi: "Cung cấp thông tin kiểm thử đã thực hiện và đánh giá so với tiêu chí kết thúc",
        },
      },
      {
        text: "To document coding standards for developers",
        correct: false,
        translation: { vi: "Tài liệu tiêu chuẩn lập trình cho lập trình viên" },
      },
      {
        text: "To replace defect reports",
        correct: false,
        translation: { vi: "Thay thế báo cáo lỗi" },
      },
    ],
  },
  {
    id: 38,
    question: "Which of the following is a common benefit of test automation?",
    translation: {
      vi: "Lợi ích phổ biến nào sau đây của tự động hóa kiểm thử?",
    },
    answers: [
      {
        text: "It is cheaper than manual testing from day one",
        correct: false,
        translation: { vi: "Rẻ hơn kiểm thử thủ công ngay từ ngày đầu" },
      },
      {
        text: "It enables fast, repeatable regression testing",
        correct: true,
        translation: { vi: "Cho phép kiểm thử hồi quy nhanh và lặp lại" },
      },
      {
        text: "It guarantees defect-free releases",
        correct: false,
        translation: { vi: "Đảm bảo phát hành không lỗi" },
      },
      {
        text: "It removes the need for test design",
        correct: false,
        translation: { vi: "Loại bỏ nhu cầu thiết kế kiểm thử" },
      },
    ],
  },
  {
    id: 39,
    question:
      "Which of the following is MOST likely to be found by static analysis tools?",
    translation: {
      vi: "Điều nào sau đây có khả năng CAO NHẤT được tìm thấy bởi công cụ phân tích tĩnh?",
    },
    answers: [
      {
        text: "A missing requirement",
        correct: false,
        translation: { vi: "Thiếu yêu cầu" },
      },
      {
        text: "A violation of coding standards and potential dead code",
        correct: true,
        translation: {
          vi: "Vi phạm tiêu chuẩn lập trình và khả năng có mã chết (dead code)",
        },
      },
      {
        text: "A failure that occurs under peak load",
        correct: false,
        translation: { vi: "Sự cố xảy ra khi tải cao điểm" },
      },
      {
        text: "A usability issue reported by beta users",
        correct: false,
        translation: { vi: "Vấn đề khả dụng do người dùng beta báo cáo" },
      },
    ],
  },
  {
    id: 40,
    question: "Which statement about the 'pesticide paradox' is TRUE?",
    translation: {
      vi: "Phát biểu nào về 'nghịch lý thuốc trừ sâu' (pesticide paradox) là ĐÚNG?",
    },
    answers: [
      {
        text: "If no defects are found, the software is correct",
        correct: false,
        translation: { vi: "Nếu không tìm thấy lỗi thì phần mềm đúng" },
      },
      {
        text: "Repeated execution of the same tests will eventually find all defects",
        correct: false,
        translation: { vi: "Chạy lặp cùng bài kiểm thử sẽ tìm hết lỗi" },
      },
      {
        text: "To find new defects, tests may need to be reviewed and updated",
        correct: true,
        translation: {
          vi: "Để tìm lỗi mới, bài kiểm thử cần được xem xét và cập nhật",
        },
      },
      {
        text: "More automation always solves the problem",
        correct: false,
        translation: { vi: "Tự động hóa nhiều hơn luôn giải quyết vấn đề" },
      },
    ],
  },
];
