export const questions = [
  {
    question: "Which type of review should use a checklist?",
    translation: {
      vi: "Loại xem xét (review) nào nên sử dụng danh sách kiểm tra (checklist)?",
    },
    answers: [
      {
        text: "Inspection",
        correct: true,
        translation: {
          vi: "Thanh tra (Inspection)",
        },
      },
      {
        text: "Walkthrough",
        correct: false,
        translation: {
          vi: "Walkthrough",
        },
      },
      {
        text: "Technical Review",
        correct: false,
        translation: {
          vi: "Xem xét kỹ thuật (Technical Review)",
        },
      },
      {
        text: "Formal Review",
        correct: false,
        translation: {
          vi: "Xem xét chính thức (Formal Review)",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is an example of an operational characteristic that should be covered by non-functional testing?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về đặc tính vận hành (operational characteristic) nên được bao phủ bởi kiểm thử phi chức năng (non-functional testing)?",
    },
    answers: [
      {
        text: "The system should allow for both registered and unregistered users to view product details.",
        correct: false,
        translation: {
          vi: "Hệ thống nên cho phép cả người dùng đã đăng ký và chưa đăng ký xem chi tiết sản phẩm.",
        },
      },
      {
        text: "The system should correctly calculate the total amount of money to be paid at the checkout.",
        correct: false,
        translation: {
          vi: "Hệ thống nên tính toán chính xác tổng số tiền phải trả khi thanh toán.",
        },
      },
      {
        text: "The system should respond to a request for a product details page in less than 2 seconds when 100 concurrent users are accessing the website.",
        correct: true,
        translation: {
          vi: "Hệ thống nên phản hồi yêu cầu về trang chi tiết sản phẩm trong vòng chưa đầy 2 giây khi có 100 người dùng đồng thời truy cập trang web.",
        },
      },
      {
        text: "The system should integrate successfully with the 3rd party payment gateway.",
        correct: false,
        translation: {
          vi: "Hệ thống nên tích hợp thành công với cổng thanh toán bên thứ 3.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a possible outcome of the Test Execution activity?",
    translation: {
      vi: "Điều nào sau đây là một kết quả có thể có của hoạt động Thực thi Kiểm thử (Test Execution)?",
    },
    answers: [
      {
        text: "Creation of Test Cases and Test Data.",
        correct: false,
        translation: {
          vi: "Tạo Trường hợp Kiểm thử và Dữ liệu Kiểm thử.",
        },
      },
      {
        text: "Creation of a Test Summary Report.",
        correct: false,
        translation: {
          vi: "Tạo Báo cáo Tóm tắt Kiểm thử.",
        },
      },
      {
        text: "Creation of Test Conditions.",
        correct: false,
        translation: {
          vi: "Tạo Điều kiện Kiểm thử.",
        },
      },
      {
        text: "Creation of Incident Reports.",
        correct: true,
        translation: {
          vi: "Tạo Báo cáo Sự cố (Incident Reports).",
        },
      },
    ],
  },
  {
    question: "Which one of the following is the BEST example of a component?",
    translation: {
      vi: "Điều nào sau đây là ví dụ TỐT NHẤT về một thành phần (component)?",
    },
    answers: [
      {
        text: "A database management system (DBMS)",
        correct: true,
        translation: {
          vi: "Hệ thống quản lý cơ sở dữ liệu (DBMS)",
        },
      },
      {
        text: "An operating system",
        correct: false,
        translation: {
          vi: "Một hệ điều hành",
        },
      },
      {
        text: "A module of a new payroll application",
        correct: false,
        translation: {
          vi: "Một module của một ứng dụng tính lương mới",
        },
      },
      {
        text: "A website that allows online shopping",
        correct: false,
        translation: {
          vi: "Một trang web cho phép mua sắm trực tuyến",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a CORRECT statement about acceptance testing?",
    translation: {
      vi: "Điều nào sau đây là một tuyên bố ĐÚNG về kiểm thử chấp nhận (acceptance testing)?",
    },
    answers: [
      {
        text: "Acceptance testing should always be carried out by testers independent of the team.",
        correct: false,
        translation: {
          vi: "Kiểm thử chấp nhận nên luôn được thực hiện bởi các kiểm thử viên độc lập với đội.",
        },
      },
      {
        text: "Acceptance testing can sometimes be the same as system testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử chấp nhận đôi khi có thể giống như kiểm thử hệ thống.",
        },
      },
      {
        text: "Acceptance testing is about checking the overall quality of the system and its non-functional characteristics.",
        correct: false,
        translation: {
          vi: "Kiểm thử chấp nhận là về việc kiểm tra chất lượng tổng thể của hệ thống và các đặc tính phi chức năng của nó.",
        },
      },
      {
        text: "Acceptance testing is concerned with confirming that the system meets the needs of its users and other stakeholders.",
        correct: true,
        translation: {
          vi: "Kiểm thử chấp nhận liên quan đến việc xác nhận rằng hệ thống đáp ứng nhu cầu của người dùng và các bên liên quan khác.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following shows the CORRECT relationship between the term on the left and its corresponding definition on the right?",
    translation: {
      vi: "Điều nào sau đây cho thấy mối quan hệ ĐÚNG giữa thuật ngữ bên trái và định nghĩa tương ứng bên phải của nó?",
    },
    answers: [
      {
        text: "Condition: A testable aspect of a component or system",
        correct: false,
        translation: {
          vi: "Điều kiện: Một khía cạnh có thể kiểm thử được của một thành phần hoặc hệ thống",
        },
      },
      {
        text: "Test Case: A set of actual values, based on the test conditions, used to complete the execution of one or more test steps",
        correct: false,
        translation: {
          vi: "Trường hợp kiểm thử: Một tập hợp các giá trị thực tế, dựa trên các điều kiện kiểm thử, được sử dụng để hoàn thành việc thực thi một hoặc nhiều bước kiểm thử",
        },
      },
      {
        text: "Test Design: The process of taking general test objectives and transforming them into tangible test cases and test data",
        correct: true,
        translation: {
          vi: "Thiết kế Kiểm thử: Quá trình lấy các mục tiêu kiểm thử chung và chuyển đổi chúng thành các trường hợp kiểm thử và dữ liệu kiểm thử cụ thể.",
        },
      },
      {
        text: "Test Basis: The work product that acts as the starting point for test execution",
        correct: false,
        translation: {
          vi: "Cơ sở Kiểm thử: Sản phẩm công việc đóng vai trò là điểm bắt đầu cho việc thực thi kiểm thử",
        },
      },
    ],
  },
  {
    question: "The purpose of **Test Implementation** is to:",
    translation: {
      vi: "Mục đích của **Thực hiện Kiểm thử (Test Implementation)** là:",
    },
    answers: [
      {
        text: "Develop, prioritize and create test data, test environment and test cases.",
        correct: true,
        translation: {
          vi: "Phát triển, ưu tiên và tạo dữ liệu kiểm thử, môi trường kiểm thử và các trường hợp kiểm thử.",
        },
      },
      {
        text: "Check for completeness and consistency of the test conditions and test design.",
        correct: false,
        translation: {
          vi: "Kiểm tra tính đầy đủ và nhất quán của các điều kiện kiểm thử và thiết kế kiểm thử.",
        },
      },
      {
        text: "Manage the testing activities in a way that minimizes the chance of delays in the project.",
        correct: false,
        translation: {
          vi: "Quản lý các hoạt động kiểm thử theo cách giảm thiểu khả năng chậm trễ trong dự án.",
        },
      },
      {
        text: "Compare the actual outcomes with expected outcomes in order to determine what action to take.",
        correct: false,
        translation: {
          vi: "So sánh kết quả thực tế với kết quả mong đợi để xác định hành động cần thực hiện.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a CORRECT statement about the relationship between defects and failures?",
    translation: {
      vi: "Điều nào sau đây là một tuyên bố ĐÚNG về mối quan hệ giữa lỗi (defects) và sự cố (failures)?",
    },
    answers: [
      {
        text: "A defect is a manifestation of an error during execution, and a failure is the mechanism by which the error is introduced.",
        correct: false,
        translation: {
          vi: "Lỗi là biểu hiện của sai sót trong quá trình thực thi, và sự cố là cơ chế mà sai sót được đưa vào.",
        },
      },
      {
        text: "A failure is an error in the system which can cause a defect when executed.",
        correct: false,
        translation: {
          vi: "Sự cố là một sai sót trong hệ thống có thể gây ra lỗi khi được thực thi.",
        },
      },
      {
        text: "A defect is a flaw in a work product, and a failure is the inability of the system to perform a required function.",
        correct: true,
        translation: {
          vi: "Lỗi là một sai sót trong sản phẩm công việc, và sự cố là việc hệ thống không thể thực hiện một chức năng được yêu cầu.",
        },
      },
      {
        text: "A defect is a deviation from an expected result, and a failure is the unintended action of a component.",
        correct: false,
        translation: {
          vi: "Lỗi là độ lệch so với kết quả mong đợi, và sự cố là hành động không mong muốn của một thành phần.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a key testing task in an agile project?",
    translation: {
      vi: "Điều nào sau đây là một nhiệm vụ kiểm thử chính trong một dự án agile?",
    },
    answers: [
      {
        text: "Continuous testing, early and frequent feedback.",
        correct: true,
        translation: {
          vi: "Kiểm thử liên tục, phản hồi sớm và thường xuyên.",
        },
      },
      {
        text: "Formal reviews of user stories before testing begins.",
        correct: false,
        translation: {
          vi: "Xem xét chính thức các câu chuyện người dùng trước khi kiểm thử bắt đầu.",
        },
      },
      {
        text: "Prioritizing testing activities over development activities.",
        correct: false,
        translation: {
          vi: "Ưu tiên các hoạt động kiểm thử hơn các hoạt động phát triển.",
        },
      },
      {
        text: "Minimizing collaboration between testers and developers.",
        correct: false,
        translation: {
          vi: "Giảm thiểu sự cộng tác giữa kiểm thử viên và nhà phát triển.",
        },
      },
    ],
  },
  {
    question:
      "A test manager is deciding on the test approach. He knows that his system needs to integrate with a legacy system which is known to be unreliable. Which of the following risks is MOST likely to be found in his risk register?",
    translation: {
      vi: "Một người quản lý kiểm thử đang quyết định phương pháp kiểm thử. Anh ấy biết rằng hệ thống của mình cần tích hợp với một hệ thống kế thừa (legacy system) được biết là không đáng tin cậy. Rủi ro nào sau đây RẤT có khả năng được tìm thấy trong sổ đăng ký rủi ro của anh ấy?",
    },
    answers: [
      {
        text: "Insufficient funding for the project.",
        correct: false,
        translation: {
          vi: "Thiếu kinh phí cho dự án.",
        },
      },
      {
        text: "Unavailability of a skilled tester for performance testing.",
        correct: false,
        translation: {
          vi: "Không có sẵn kiểm thử viên có kỹ năng cho kiểm thử hiệu suất.",
        },
      },
      {
        text: "Not enough time available to perform testing.",
        correct: false,
        translation: {
          vi: "Không có đủ thời gian để thực hiện kiểm thử.",
        },
      },
      {
        text: "Unexpected failures of the legacy system due to its known unreliability.",
        correct: true,
        translation: {
          vi: "Các sự cố bất ngờ của hệ thống kế thừa do tính không đáng tin cậy đã biết của nó.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following describes the difference between dynamic testing and static testing?",
    translation: {
      vi: "Điều nào sau đây mô tả sự khác biệt giữa kiểm thử động (dynamic testing) và kiểm thử tĩnh (static testing)?",
    },
    answers: [
      {
        text: "Dynamic testing is concerned with checking if the system meets the user requirements while static testing is only checking for the defects in the code.",
        correct: false,
        translation: {
          vi: "Kiểm thử động liên quan đến việc kiểm tra xem hệ thống có đáp ứng các yêu cầu người dùng hay không trong khi kiểm thử tĩnh chỉ kiểm tra các lỗi trong mã.",
        },
      },
      {
        text: "Dynamic testing is conducted by executing the code, while static testing is performed without executing the code.",
        correct: true,
        translation: {
          vi: "Kiểm thử động được tiến hành bằng cách thực thi mã, trong khi kiểm thử tĩnh được thực hiện mà không thực thi mã.",
        },
      },
      {
        text: "Static testing is generally more expensive than dynamic testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử tĩnh thường đắt hơn kiểm thử động.",
        },
      },
      {
        text: "Static testing involves testing the component interfaces, while dynamic testing involves reviewing the requirements documents.",
        correct: false,
        translation: {
          vi: "Kiểm thử tĩnh liên quan đến việc kiểm thử giao diện thành phần, trong khi kiểm thử động liên quan đến việc xem xét các tài liệu yêu cầu.",
        },
      },
    ],
  },
  {
    question:
      "A financial application calculates the tax to be paid based on the income entered by the user. The range of income is from $1 to $10000. The tax is calculated as follows: If income is in the range of [$1, $1000] - 1% tax is charged; If income is in the range of [$1001, $5000] - 5% tax is charged; If income is in the range of [$5001, $10000] - 10% tax is charged. Which of the following values will you choose for testing the tax calculation logic using boundary value analysis?",
    translation: {
      vi: "Một ứng dụng tài chính tính thuế phải trả dựa trên thu nhập do người dùng nhập. Phạm vi thu nhập là từ $1 đến $10000. Thuế được tính như sau: Nếu thu nhập nằm trong phạm vi [$1, $1000] - tính thuế 1%; Nếu thu nhập nằm trong phạm vi [$1001, $5000] - tính thuế 5%; Nếu thu nhập nằm trong phạm vi [$5001, $10000] - tính thuế 10%. Bạn sẽ chọn tập hợp giá trị nào sau đây để kiểm thử logic tính thuế bằng cách sử dụng phân tích giá trị biên (boundary value analysis)?",
    },
    answers: [
      {
        text: "1, 1000, 1001, 5000, 5001, 10000",
        correct: false,
        translation: {
          vi: "1, 1000, 1001, 5000, 5001, 10000",
        },
      },
      {
        text: "1, 1000, 1001, 4999, 5000, 5001, 10000",
        correct: false,
        translation: {
          vi: "1, 1000, 1001, 4999, 5000, 5001, 10000",
        },
      },
      {
        text: "0, 1, 1000, 1001, 5000, 5001, 10000, 10001",
        correct: false,
        translation: {
          vi: "0, 1, 1000, 1001, 5000, 5001, 10000, 10001",
        },
      },
      {
        text: "0, 1, 2, 999, 1000, 1001, 5000, 5001, 10000, 10001",
        correct: true,
        translation: {
          vi: "0, 1, 2, 999, 1000, 1001, 5000, 5001, 10000, 10001",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a **test condition** for a login feature with two fields - **Username** and **Password**?",
    translation: {
      vi: "Điều nào sau đây là một **điều kiện kiểm thử (test condition)** cho tính năng đăng nhập với hai trường - **Tên người dùng** và **Mật khẩu**?",
    },
    answers: [
      {
        text: "Check that the user can login successfully with a valid Username and valid Password.",
        correct: false,
        translation: {
          vi: "Kiểm tra xem người dùng có thể đăng nhập thành công với Tên người dùng hợp lệ và Mật khẩu hợp lệ hay không.",
        },
      },
      {
        text: "Login with a valid Username and an invalid Password.",
        correct: false,
        translation: {
          vi: "Đăng nhập với Tên người dùng hợp lệ và Mật khẩu không hợp lệ.",
        },
      },
      {
        text: "Login with an invalid Username and a valid Password.",
        correct: false,
        translation: {
          vi: "Đăng nhập với Tên người dùng không hợp lệ và Mật khẩu hợp lệ.",
        },
      },
      {
        text: "Login functionality.",
        correct: true,
        translation: {
          vi: "Chức năng đăng nhập.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a key activity in the **test analysis** stage?",
    translation: {
      vi: "Điều nào sau đây là một hoạt động chính trong giai đoạn **phân tích kiểm thử (test analysis)**?",
    },
    answers: [
      {
        text: "Creating the **Test Plan**",
        correct: false,
        translation: {
          vi: "Tạo **Kế hoạch Kiểm thử**",
        },
      },
      {
        text: "**Executing** the test cases",
        correct: false,
        translation: {
          vi: "**Thực thi** các trường hợp kiểm thử",
        },
      },
      {
        text: "**Identifying** test conditions",
        correct: true,
        translation: {
          vi: "**Xác định** các điều kiện kiểm thử",
        },
      },
      {
        text: "**Developing** the test environment",
        correct: false,
        translation: {
          vi: "**Phát triển** môi trường kiểm thử",
        },
      },
    ],
  },
  {
    question:
      "An online e-commerce site has a promotion where customers can get a discount based on the number of items they purchase: 1. If a customer buys less than 5 items, they get a 5% discount. 2. If a customer buys 5 to 10 items, they get a 10% discount. 3. If a customer buys more than 10 items, they get a 15% discount. Which of the following set of values represent a set of valid **Equivalence Partitions** (EPs)?",
    translation: {
      vi: "Một trang thương mại điện tử trực tuyến có một chương trình khuyến mãi trong đó khách hàng có thể được giảm giá dựa trên số lượng mặt hàng họ mua: 1. Nếu khách hàng mua ít hơn 5 mặt hàng, họ được giảm giá 5%. 2. Nếu khách hàng mua từ 5 đến 10 mặt hàng, họ được giảm giá 10%. 3. Nếu khách hàng mua hơn 10 mặt hàng, họ được giảm giá 15%. Tập hợp các giá trị nào sau đây đại diện cho một tập hợp **Phân vùng Tương đương (EPs)** hợp lệ?",
    },
    answers: [
      {
        text: "{1, 5, 11}",
        correct: false,
        translation: {
          vi: "{1, 5, 11}",
        },
      },
      {
        text: "{4, 10, 11}",
        correct: false,
        translation: {
          vi: "{4, 10, 11}",
        },
      },
      {
        text: "{1, 7, 12}",
        correct: true,
        translation: {
          vi: "{1, 7, 12}",
        },
      },
      {
        text: "{4, 10, 15}",
        correct: false,
        translation: {
          vi: "{4, 10, 15}",
        },
      },
    ],
  },
  {
    question:
      "Which of the following BEST describes the concept of **shift-left**?",
    translation: {
      vi: "Điều nào sau đây mô tả TỐT NHẤT khái niệm **shift-left** (chuyển sang trái)?",
    },
    answers: [
      {
        text: "To start testing activities earlier in the development lifecycle.",
        correct: true,
        translation: {
          vi: "Bắt đầu các hoạt động kiểm thử sớm hơn trong vòng đời phát triển.",
        },
      },
      {
        text: "To move testing activities to the left side of the project timeline.",
        correct: false,
        translation: {
          vi: "Di chuyển các hoạt động kiểm thử sang phía bên trái của dòng thời gian dự án.",
        },
      },
      {
        text: "To involve developers in testing activities.",
        correct: false,
        translation: {
          vi: "Thu hút các nhà phát triển tham gia vào các hoạt động kiểm thử.",
        },
      },
      {
        text: "To perform more unit testing and less system testing.",
        correct: false,
        translation: {
          vi: "Thực hiện nhiều kiểm thử đơn vị hơn và ít kiểm thử hệ thống hơn.",
        },
      },
    ],
  },
  {
    question:
      "Which statement is a **CORRECT** description of test execution logging?",
    translation: {
      vi: "Tuyên bố nào là mô tả **ĐÚNG** về việc ghi nhật ký thực thi kiểm thử (test execution logging)?",
    },
    answers: [
      {
        text: "Logging the test execution results should be the final step in the test execution process.",
        correct: false,
        translation: {
          vi: "Ghi nhật ký kết quả thực thi kiểm thử phải là bước cuối cùng trong quy trình thực thi kiểm thử.",
        },
      },
      {
        text: "The purpose of logging is to compare the actual results with the expected results.",
        correct: true,
        translation: {
          vi: "Mục đích của việc ghi nhật ký là để so sánh kết quả thực tế với kết quả mong đợi.",
        },
      },
      {
        text: "Test execution logging is a prerequisite for creating incident reports.",
        correct: false,
        translation: {
          vi: "Ghi nhật ký thực thi kiểm thử là điều kiện tiên quyết để tạo báo cáo sự cố.",
        },
      },
      {
        text: "Logs should only be created when a defect is found.",
        correct: false,
        translation: {
          vi: "Chỉ nên tạo nhật ký khi tìm thấy lỗi.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a **disadvantage** of tool support for testing?",
    translation: {
      vi: "Điều nào sau đây là một **nhược điểm** của việc hỗ trợ công cụ cho kiểm thử?",
    },
    answers: [
      {
        text: "Increased test coverage.",
        correct: false,
        translation: {
          vi: "Tăng độ bao phủ kiểm thử.",
        },
      },
      {
        text: "Ease of maintenance of test cases.",
        correct: false,
        translation: {
          vi: "Dễ dàng bảo trì các trường hợp kiểm thử.",
        },
      },
      {
        text: "Faster test execution.",
        correct: false,
        translation: {
          vi: "Thực thi kiểm thử nhanh hơn.",
        },
      },
      {
        text: "Expecting too much from the tool.",
        correct: true,
        translation: {
          vi: "Kỳ vọng quá nhiều vào công cụ.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a **project risk** rather than a **product risk**?",
    translation: {
      vi: "Điều nào sau đây là một **rủi ro dự án (project risk)** hơn là một **rủi ro sản phẩm (product risk)**?",
    },
    answers: [
      {
        text: "The system does not meet the performance requirements.",
        correct: false,
        translation: {
          vi: "Hệ thống không đáp ứng các yêu cầu về hiệu suất.",
        },
      },
      {
        text: "The project sponsor withdraws the funding.",
        correct: true,
        translation: {
          vi: "Nhà tài trợ dự án rút lại kinh phí.",
        },
      },
      {
        text: "The software contains a large number of defects.",
        correct: false,
        translation: {
          vi: "Phần mềm chứa một số lượng lớn lỗi.",
        },
      },
      {
        text: "The system is difficult to use.",
        correct: false,
        translation: {
          vi: "Hệ thống khó sử dụng.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following statements is a **CORRECT** comparison of **Test Cases** and **Test Procedures**?",
    translation: {
      vi: "Tuyên bố nào sau đây là một so sánh **ĐÚNG** về **Trường hợp Kiểm thử (Test Cases)** và **Quy trình Kiểm thử (Test Procedures)**?",
    },
    answers: [
      {
        text: "Test cases are detailed, executable instructions while test procedures are high-level descriptions.",
        correct: false,
        translation: {
          vi: "Trường hợp kiểm thử là các hướng dẫn chi tiết, có thể thực thi được trong khi quy trình kiểm thử là các mô tả cấp cao.",
        },
      },
      {
        text: "Test cases are the sequence of actions for the execution of a test while test procedures are the data needed for a test.",
        correct: false,
        translation: {
          vi: "Trường hợp kiểm thử là chuỗi hành động để thực thi một bài kiểm thử trong khi quy trình kiểm thử là dữ liệu cần thiết cho một bài kiểm thử.",
        },
      },
      {
        text: "Test procedures are focused on the expected results while test cases are focused on the actual execution steps.",
        correct: false,
        translation: {
          vi: "Quy trình kiểm thử tập trung vào kết quả mong đợi trong khi trường hợp kiểm thử tập trung vào các bước thực thi thực tế.",
        },
      },
      {
        text: "A test procedure is the sequence of test cases for execution while a test case is a set of inputs, preconditions, and expected results.",
        correct: true,
        translation: {
          vi: "Một quy trình kiểm thử là chuỗi các trường hợp kiểm thử để thực thi trong khi một trường hợp kiểm thử là một tập hợp các đầu vào, điều kiện tiên quyết và kết quả mong đợi.",
        },
      },
    ],
  },
  {
    question:
      "You are writing a **Test Summary Report** at the end of the sprint. Which of the following should be included in your report?",
    translation: {
      vi: "Bạn đang viết **Báo cáo Tóm tắt Kiểm thử (Test Summary Report)** vào cuối sprint. Điều nào sau đây nên được đưa vào báo cáo của bạn?",
    },
    answers: [
      {
        text: "A full list of all test steps executed in the sprint.",
        correct: false,
        translation: {
          vi: "Một danh sách đầy đủ tất cả các bước kiểm thử đã được thực thi trong sprint.",
        },
      },
      {
        text: "A summary of the remaining risks and outstanding defects.",
        correct: true,
        translation: {
          vi: "Tóm tắt về các rủi ro còn lại và các lỗi tồn đọng.",
        },
      },
      {
        text: "The detailed explanation of all the defects found in the sprint.",
        correct: false,
        translation: {
          vi: "Giải thích chi tiết tất cả các lỗi được tìm thấy trong sprint.",
        },
      },
      {
        text: "The full list of all Test Cases used in the sprint.",
        correct: false,
        translation: {
          vi: "Danh sách đầy đủ tất cả các Trường hợp Kiểm thử được sử dụng trong sprint.",
        },
      },
    ],
  },
];
