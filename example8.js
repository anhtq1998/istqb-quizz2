export const questions = [
  {
    question: "Which one of the following answers describes a test condition?",
    translation: {
      vi: "Câu trả lời nào sau đây mô tả một **điều kiện kiểm thử (test condition)**?",
    },
    answers: [
      {
        text: "A distinguishing characteristic of a component or system.",
        correct: false,
        translation: {
          vi: "Một đặc điểm phân biệt của một thành phần hoặc hệ thống.",
        },
      },
      {
        text: "A testable aspect of a component or system identified as a basis for testing.",
        correct: true,
        translation: {
          vi: "Một khía cạnh có thể kiểm thử được của một thành phần hoặc hệ thống được xác định làm cơ sở cho việc kiểm thử.",
        },
      },
      {
        text: "The degree to which a software product provides functions which meet stated and implied needs when the product is used under specified conditions.",
        correct: false,
        translation: {
          vi: "Mức độ một sản phẩm phần mềm cung cấp các chức năng đáp ứng các nhu cầu đã nêu và ngụ ý khi sản phẩm được sử dụng trong các điều kiện xác định.",
        },
      },
      {
        text: "A set of input values, execution preconditions, expected results and execution postconditions, developed for a particular objective or test condition.",
        correct: false,
        translation: {
          vi: "Một tập hợp các giá trị đầu vào, điều kiện tiên quyết thực thi, kết quả mong đợi và điều kiện hậu thực thi, được phát triển cho một mục tiêu hoặc điều kiện kiểm thử cụ thể.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following statements is a valid objective for testing?",
    translation: {
      vi: "Tuyên bố nào sau đây là một **mục tiêu hợp lệ** cho kiểm thử?",
    },
    answers: [
      {
        text: "The test should start as late as possible so that development had enough time to create a good product.",
        correct: false,
        translation: {
          vi: "Kiểm thử nên bắt đầu càng muộn càng tốt để phát triển có đủ thời gian tạo ra một sản phẩm tốt.",
        },
      },
      {
        text: "To validate whether the test object works as expected by the users and other stakeholders.",
        correct: true,
        translation: {
          vi: "Để xác nhận xem đối tượng kiểm thử có hoạt động như mong đợi của người dùng và các bên liên quan khác hay không.",
        },
      },
      {
        text: "To determine whether enough component tests were executed within system testing.",
        correct: false,
        translation: {
          vi: "Để xác định xem liệu có đủ kiểm thử thành phần đã được thực thi trong kiểm thử hệ thống hay không.",
        },
      },
      {
        text: "To determine whether the product is fault free.",
        correct: false,
        translation: {
          vi: "Để xác định xem sản phẩm có không có lỗi hay không.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following describes the difference between debugging and testing?",
    translation: {
      vi: "Điều nào sau đây mô tả sự khác biệt giữa **gỡ lỗi (debugging)** và **kiểm thử (testing)**?",
    },
    answers: [
      {
        text: "Testing is the process of executing a program with the intent of finding failures; debugging is the process of identifying the cause of the failure and correcting the defect.",
        correct: true,
        translation: {
          vi: "Kiểm thử là quá trình thực thi một chương trình với mục đích tìm ra sự cố; gỡ lỗi là quá trình xác định nguyên nhân của sự cố và sửa chữa lỗi.",
        },
      },
      {
        text: "The debugging process includes the performance of the correction, while the testing process is about proving correctness.",
        correct: false,
        translation: {
          vi: "Quá trình gỡ lỗi bao gồm việc thực hiện sửa chữa, trong khi quá trình kiểm thử là về việc chứng minh tính đúng đắn.",
        },
      },
      {
        text: "Testing is performed by developers, while debugging is performed by testers.",
        correct: false,
        translation: {
          vi: "Kiểm thử được thực hiện bởi các nhà phát triển, trong khi gỡ lỗi được thực hiện bởi các kiểm thử viên.",
        },
      },
      {
        text: "Debugging is part of the validation process, while testing is part of the verification process.",
        correct: false,
        translation: {
          vi: "Gỡ lỗi là một phần của quá trình xác nhận (validation), trong khi kiểm thử là một phần của quá trình xác minh (verification).",
        },
      },
    ],
  },
  {
    question:
      "A tester found a defect in a requirements specification during the requirements analysis phase. Which one of the following is an example of the tester applying a principle of testing?",
    translation: {
      vi: "Một kiểm thử viên tìm thấy một lỗi trong đặc tả yêu cầu trong giai đoạn phân tích yêu cầu. Điều nào sau đây là một ví dụ về việc kiểm thử viên đang áp dụng một **nguyên tắc kiểm thử**?",
    },
    answers: [
      {
        text: "Testing is context dependent.",
        correct: false,
        translation: {
          vi: "Kiểm thử phụ thuộc vào ngữ cảnh.",
        },
      },
      {
        text: "Testing shows the presence of defects.",
        correct: false,
        translation: {
          vi: "Kiểm thử cho thấy sự hiện diện của lỗi.",
        },
      },
      {
        text: "Absence-of-errors fallacy.",
        correct: false,
        translation: {
          vi: "Ngụy biện vắng mặt lỗi (Absence-of-errors fallacy).",
        },
      },
      {
        text: "Early testing saves time and money.",
        correct: true,
        translation: {
          vi: "Kiểm thử sớm tiết kiệm thời gian và tiền bạc.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following characteristics best describes how the “whole-team approach” supports testing?",
    translation: {
      vi: "Đặc điểm nào sau đây mô tả tốt nhất cách tiếp cận **“toàn đội (whole-team approach)”** hỗ trợ kiểm thử?",
    },
    answers: [
      {
        text: "Testers should not be involved in reviews.",
        correct: false,
        translation: {
          vi: "Kiểm thử viên không nên tham gia vào các buổi xem xét (reviews).",
        },
      },
      {
        text: "The entire team takes responsibility for the quality of the product, so testing is a whole-team activity.",
        correct: true,
        translation: {
          vi: "Toàn bộ đội chịu trách nhiệm về chất lượng sản phẩm, do đó kiểm thử là một hoạt động của toàn đội.",
        },
      },
      {
        text: "Testing is mostly an activity for people with the role of a tester.",
        correct: false,
        translation: {
          vi: "Kiểm thử chủ yếu là một hoạt động dành cho những người có vai trò kiểm thử viên.",
        },
      },
      {
        text: "The developers are responsible for the quality of the product, while the testers are only responsible for finding defects.",
        correct: false,
        translation: {
          vi: "Các nhà phát triển chịu trách nhiệm về chất lượng sản phẩm, trong khi các kiểm thử viên chỉ chịu trách nhiệm tìm lỗi.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a major risk of using test automation?",
    translation: {
      vi: "Điều nào sau đây là một **rủi ro lớn** của việc sử dụng tự động hóa kiểm thử?",
    },
    answers: [
      {
        text: "The test cases are difficult to maintain, which increases the time required to update them.",
        correct: true,
        translation: {
          vi: "Các trường hợp kiểm thử khó bảo trì, điều này làm tăng thời gian cần thiết để cập nhật chúng.",
        },
      },
      {
        text: "The tests are easier to repeat, which leads to too many test runs.",
        correct: false,
        translation: {
          vi: "Các bài kiểm thử dễ lặp lại hơn, điều này dẫn đến quá nhiều lần chạy kiểm thử.",
        },
      },
      {
        text: "The required performance tests are not executed because the tool is too complex.",
        correct: false,
        translation: {
          vi: "Các kiểm thử hiệu năng cần thiết không được thực thi vì công cụ quá phức tạp.",
        },
      },
      {
        text: "The tests are less objective, leading to bias in the test results.",
        correct: false,
        translation: {
          vi: "Các bài kiểm thử kém khách quan hơn, dẫn đến sự thiên vị trong kết quả kiểm thử.",
        },
      },
    ],
  },
  {
    question:
      "Which of the below tasks is performed during the **test analysis** activity of the ISTQB Test Process?",
    translation: {
      vi: "Nhiệm vụ nào dưới đây được thực hiện trong hoạt động **phân tích kiểm thử (test analysis)** của Quy trình kiểm thử ISTQB?",
    },
    answers: [
      {
        text: "Identifying any required infrastructure and tools.",
        correct: false,
        translation: {
          vi: "Xác định bất kỳ cơ sở hạ tầng và công cụ cần thiết nào.",
        },
      },
      {
        text: "Creating test suites from test procedures.",
        correct: false,
        translation: {
          vi: "Tạo bộ kiểm thử từ các quy trình kiểm thử.",
        },
      },
      {
        text: "Analyzing lessons learned for process improvement.",
        correct: false,
        translation: {
          vi: "Phân tích các bài học kinh nghiệm để cải tiến quy trình.",
        },
      },
      {
        text: "Identifying test conditions.",
        correct: true,
        translation: {
          vi: "Xác định các điều kiện kiểm thử (test conditions).",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following characteristics best describes the difference between the **Test Basis** and the **Test Object**?",
    translation: {
      vi: "Đặc điểm nào sau đây mô tả tốt nhất sự khác biệt giữa **Cơ sở Kiểm thử (Test Basis)** và **Đối tượng Kiểm thử (Test Object)**?",
    },
    answers: [
      {
        text: "The Test Basis is the component or system to be tested, while the Test Object is the documentation that is used to start the test analysis.",
        correct: false,
        translation: {
          vi: "Cơ sở Kiểm thử là thành phần hoặc hệ thống sẽ được kiểm thử, trong khi Đối tượng Kiểm thử là tài liệu được sử dụng để bắt đầu phân tích kiểm thử.",
        },
      },
      {
        text: "The Test Basis is the documentation that is used to start the test analysis, while the Test Object is the component or system to be tested.",
        correct: true,
        translation: {
          vi: "Cơ sở Kiểm thử là tài liệu được sử dụng để bắt đầu phân tích kiểm thử, trong khi Đối tượng Kiểm thử là thành phần hoặc hệ thống sẽ được kiểm thử.",
        },
      },
      {
        text: "The Test Basis is part of the test object, so there is no difference.",
        correct: false,
        translation: {
          vi: "Cơ sở Kiểm thử là một phần của đối tượng kiểm thử, vì vậy không có sự khác biệt.",
        },
      },
      {
        text: "The Test Basis is the documentation describing the desired outcome, while the Test Object is the documentation describing the actual outcome.",
        correct: false,
        translation: {
          vi: "Cơ sở Kiểm thử là tài liệu mô tả kết quả mong muốn, trong khi Đối tượng Kiểm thử là tài liệu mô tả kết quả thực tế.",
        },
      },
    ],
  },
  {
    question:
      "How can **white-box testing** be applied during **acceptance testing**?",
    translation: {
      vi: "**Kiểm thử hộp trắng (white-box testing)** có thể được áp dụng như thế nào trong giai đoạn **kiểm thử chấp nhận (acceptance testing)**?",
    },
    answers: [
      {
        text: "To check if large volumes of data can be transferred between integrated systems.",
        correct: false,
        translation: {
          vi: "Để kiểm tra xem liệu khối lượng dữ liệu lớn có thể được truyền giữa các hệ thống tích hợp hay không.",
        },
      },
      {
        text: "To check if all code statements and code decision paths have been executed.",
        correct: false,
        translation: {
          vi: "Để kiểm tra xem tất cả các câu lệnh mã và đường dẫn quyết định mã đã được thực thi hay chưa.",
        },
      },
      {
        text: "To check if all work process flows have been covered.",
        correct: true,
        translation: {
          vi: "Để kiểm tra xem tất cả các luồng quy trình công việc (work process flows) đã được bao phủ hay chưa.",
        },
      },
      {
        text: "To check if all parts of the system have been tested by the system test team.",
        correct: false,
        translation: {
          vi: "Để kiểm tra xem tất cả các phần của hệ thống đã được đội kiểm thử hệ thống kiểm thử hay chưa.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a benefit of having **independent testers**?",
    translation: {
      vi: "Điều nào sau đây là một lợi ích của việc có **kiểm thử viên độc lập (independent testers)**?",
    },
    answers: [
      {
        text: "They are highly motivated to find defects.",
        correct: false,
        translation: {
          vi: "Họ có động lực cao để tìm ra lỗi.",
        },
      },
      {
        text: "They can question the assumptions behind the specification.",
        correct: true,
        translation: {
          vi: "Họ có thể đặt câu hỏi về các giả định đằng sau đặc tả.",
        },
      },
      {
        text: "They can always work more quickly than the developers.",
        correct: false,
        translation: {
          vi: "Họ luôn có thể làm việc nhanh hơn các nhà phát triển.",
        },
      },
      {
        text: "They are more technical than the developers.",
        correct: false,
        translation: {
          vi: "Họ có tính kỹ thuật hơn các nhà phát triển.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following roles is responsible for deciding which version of the software is used for testing?",
    translation: {
      vi: "Vai trò nào sau đây chịu trách nhiệm quyết định phiên bản phần mềm nào được sử dụng để kiểm thử?",
    },
    answers: [
      {
        text: "Configuration Manager",
        correct: true,
        translation: {
          vi: "Quản lý Cấu hình (Configuration Manager)",
        },
      },
      {
        text: "Test Manager",
        correct: false,
        translation: {
          vi: "Quản lý Kiểm thử (Test Manager)",
        },
      },
      {
        text: "Project Manager",
        correct: false,
        translation: {
          vi: "Quản lý Dự án (Project Manager)",
        },
      },
      {
        text: "Tester",
        correct: false,
        translation: {
          vi: "Kiểm thử viên (Tester)",
        },
      },
    ],
  },
  {
    question: "Which one of the following is an example of a **test type**?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về **loại kiểm thử (test type)**?",
    },
    answers: [
      {
        text: "Component testing",
        correct: false,
        translation: {
          vi: "Kiểm thử thành phần (Component testing)",
        },
      },
      {
        text: "Exploratory testing",
        correct: false,
        translation: {
          vi: "Kiểm thử thăm dò (Exploratory testing)",
        },
      },
      {
        text: "Usability testing",
        correct: true,
        translation: {
          vi: "Kiểm thử khả năng sử dụng (Usability testing)",
        },
      },
      {
        text: "Non-functional testing",
        correct: false,
        translation: {
          vi: "Kiểm thử phi chức năng (Non-functional testing)",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a CORRECT statement about the relationship between **Statement Coverage** and **Decision Coverage**?",
    translation: {
      vi: "Tuyên bố nào sau đây là một tuyên bố **ĐÚNG** về mối quan hệ giữa **Độ bao phủ Câu lệnh (Statement Coverage)** và **Độ bao phủ Quyết định (Decision Coverage)**?",
    },
    answers: [
      {
        text: "100% statement coverage guarantees 100% decision coverage.",
        correct: false,
        translation: {
          vi: "Độ bao phủ câu lệnh 100% đảm bảo độ bao phủ quyết định 100%.",
        },
      },
      {
        text: "100% decision coverage guarantees 100% statement coverage.",
        correct: true,
        translation: {
          vi: "Độ bao phủ quyết định 100% đảm bảo độ bao phủ câu lệnh 100%.",
        },
      },
      {
        text: "100% decision coverage is only possible if 100% statement coverage is also achieved.",
        correct: false,
        translation: {
          vi: "Độ bao phủ quyết định 100% chỉ có thể nếu độ bao phủ câu lệnh 100% cũng đạt được.",
        },
      },
      {
        text: "Statement coverage and decision coverage measure the same thing.",
        correct: false,
        translation: {
          vi: "Độ bao phủ câu lệnh và độ bao phủ quyết định đo lường cùng một thứ.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following options describes the purpose of **Statement Coverage**?",
    translation: {
      vi: "Điều nào sau đây mô tả mục đích của **Độ bao phủ Câu lệnh (Statement Coverage)**?",
    },
    answers: [
      {
        text: "To design test cases to execute all executable statements in the code.",
        correct: true,
        translation: {
          vi: "Thiết kế các trường hợp kiểm thử để thực thi tất cả các câu lệnh có thể thực thi được trong mã.",
        },
      },
      {
        text: "To design test cases to exercise all decision outcomes in the code.",
        correct: false,
        translation: {
          vi: "Thiết kế các trường hợp kiểm thử để thực hiện tất cả các kết quả quyết định trong mã.",
        },
      },
      {
        text: "To design test cases to execute all possible paths in the code.",
        correct: false,
        translation: {
          vi: "Thiết kế các trường hợp kiểm thử để thực thi tất cả các đường dẫn có thể có trong mã.",
        },
      },
      {
        text: "To design test cases to check all possible combinations of conditions.",
        correct: false,
        translation: {
          vi: "Thiết kế các trường hợp kiểm thử để kiểm tra tất cả các tổ hợp điều kiện có thể có.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following options is a characteristic of **informal reviews**?",
    translation: {
      vi: "Điều nào sau đây là một đặc điểm của **xem xét không chính thức (informal reviews)**?",
    },
    answers: [
      {
        text: "The review leader assigns the participants to their roles.",
        correct: false,
        translation: {
          vi: "Trưởng nhóm xem xét phân công vai trò cho những người tham gia.",
        },
      },
      {
        text: "The review process is documented, and a formal output is produced.",
        correct: false,
        translation: {
          vi: "Quy trình xem xét được ghi lại và một đầu ra chính thức được tạo ra.",
        },
      },
      {
        text: "The purpose is to find potential defects quickly and cheaply.",
        correct: true,
        translation: {
          vi: "Mục đích là tìm ra các lỗi tiềm ẩn một cách nhanh chóng và rẻ tiền.",
        },
      },
      {
        text: "The results of the review are checked by an independent moderator.",
        correct: false,
        translation: {
          vi: "Kết quả của việc xem xét được kiểm tra bởi một người điều phối độc lập.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following activities is part of the **review process**?",
    translation: {
      vi: "Hoạt động nào sau đây là một phần của **quy trình xem xét (review process)**?",
    },
    answers: [
      {
        text: "Test implementation",
        correct: false,
        translation: {
          vi: "Thực hiện kiểm thử (Test implementation)",
        },
      },
      {
        text: "Preparation",
        correct: true,
        translation: {
          vi: "Chuẩn bị (Preparation)",
        },
      },
      {
        text: "Test execution",
        correct: false,
        translation: {
          vi: "Thực thi kiểm thử (Test execution)",
        },
      },
      {
        text: "Test reporting",
        correct: false,
        translation: {
          vi: "Báo cáo kiểm thử (Test reporting)",
        },
      },
    ],
  },
  {
    question: "Which one of the following is a benefit of **static testing**?",
    translation: {
      vi: "Điều nào sau đây là một lợi ích của **kiểm thử tĩnh (static testing)**?",
    },
    answers: [
      {
        text: "It finds defects only in the code.",
        correct: false,
        translation: {
          vi: "Nó chỉ tìm thấy lỗi trong mã.",
        },
      },
      {
        text: "It can detect defects early in the SDLC.",
        correct: true,
        translation: {
          vi: "Nó có thể phát hiện lỗi sớm trong Vòng đời Phát triển Phần mềm (SDLC).",
        },
      },
      {
        text: "It requires the execution of the code.",
        correct: false,
        translation: {
          vi: "Nó yêu cầu thực thi mã.",
        },
      },
      {
        text: "It is less expensive than dynamic testing.",
        correct: false,
        translation: {
          vi: "Nó ít tốn kém hơn kiểm thử động.",
        },
      },
    ],
  },
  {
    question:
      "An e-commerce system grants the following discounts for orders: 1. A 10% discount is applied to orders with an amount in the range of [$100.00, $500.00]. 2. A 15% discount is applied to orders with an amount in the range of [$500.01, $1000.00]. The rest of the values in the “order amount” domain are subject to no discount. Which of the following test data set achieves the highest **Boundary Value Analysis** coverage?",
    translation: {
      vi: "Một hệ thống thương mại điện tử cấp các mức giảm giá sau cho các đơn hàng: 1. Giảm giá 10% được áp dụng cho các đơn hàng có số tiền nằm trong phạm vi [$100.00, $500.00]. 2. Giảm giá 15% được áp dụng cho các đơn hàng có số tiền nằm trong phạm vi [$500.01, $1000.00]. Phần còn lại của các giá trị trong miền “số tiền đặt hàng” không được giảm giá. Tập hợp dữ liệu kiểm thử nào sau đây đạt được độ bao phủ **Phân tích Giá trị Biên (Boundary Value Analysis)** cao nhất?",
    },
    answers: [
      {
        text: "100.01, 499.99, 500.01",
        correct: false,
        translation: {
          vi: "100.01, 499.99, 500.01",
        },
      },
      {
        text: "99.99, 100.00, 500.00, 500.01, 1000.00, 1000.01",
        correct: true,
        translation: {
          vi: "99.99, 100.00, 500.00, 500.01, 1000.00, 1000.01",
        },
      },
      {
        text: "50.99, 500.00, 500.10",
        correct: false,
        translation: {
          vi: "50.99, 500.00, 500.10",
        },
      },
      {
        text: "0, 100, 500, 1000",
        correct: false,
        translation: {
          vi: "0, 100, 500, 1000",
        },
      },
    ],
  },
  {
    question:
      'The requirements for granting a driving license are: The applicant must be at least 18 years old, must pass a vision test, and must pass a driving test. You have three existing test cases that all resulted in granting a license. Which of the following test cases is needed to achieve **100% decision coverage** for the decision: "If age >= 18 AND vision_passed = True AND driving_passed = True THEN grant license ELSE do not grant license"?',
    translation: {
      vi: 'Các yêu cầu để cấp giấy phép lái xe là: Người nộp đơn phải từ 18 tuổi trở lên, phải vượt qua bài kiểm tra thị lực, và phải vượt qua bài kiểm tra lái xe. Bạn có ba trường hợp kiểm thử hiện có đều dẫn đến việc cấp giấy phép. Trường hợp kiểm thử nào sau đây là cần thiết để đạt được **độ bao phủ quyết định 100% (100% decision coverage)** cho quyết định: "Nếu age >= 18 VÀ vision_passed = True VÀ driving_passed = True THÌ cấp giấy phép NGƯỢC LẠI không cấp giấy phép"?',
    },
    answers: [
      {
        text: "17 years old, passed both vision and driving test; expected result: grant a license",
        correct: false,
        translation: {
          vi: "17 tuổi, vượt qua cả kiểm tra thị lực và lái xe; kết quả mong đợi: cấp giấy phép",
        },
      },
      {
        text: "18 years old, passed vision test, failed driving test; expected result: do not grant a license",
        correct: true,
        translation: {
          vi: "18 tuổi, vượt qua kiểm tra thị lực, **thất bại** kiểm tra lái xe; kết quả mong đợi: không cấp giấy phép",
        },
      },
      {
        text: "20 years old, failed vision test, passed driving test; expected result: do not grant a license",
        correct: false,
        translation: {
          vi: "20 tuổi, **thất bại** kiểm tra thị lực, vượt qua kiểm tra lái xe; kết quả mong đợi: không cấp giấy phép",
        },
      },
      {
        text: "No test case is needed; the existing test cases already achieve the required coverage",
        correct: false,
        translation: {
          vi: "Không cần trường hợp kiểm thử nào; các trường hợp kiểm thử hiện có đã đạt được độ bao phủ yêu cầu",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is an example of a good **Test Control** activity?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về hoạt động **Kiểm soát Kiểm thử (Test Control)** tốt?",
    },
    answers: [
      {
        text: "Creating a test summary report at the end of the testing process.",
        correct: false,
        translation: {
          vi: "Tạo một báo cáo tóm tắt kiểm thử vào cuối quy trình kiểm thử.",
        },
      },
      {
        text: "Identifying test conditions based on the requirements.",
        correct: false,
        translation: {
          vi: "Xác định các điều kiện kiểm thử dựa trên các yêu cầu.",
        },
      },
      {
        text: "Re-prioritizing test cases based on the discovered risk level.",
        correct: true,
        translation: {
          vi: "Tái ưu tiên các trường hợp kiểm thử dựa trên mức độ rủi ro đã phát hiện.",
        },
      },
      {
        text: "Analyzing the system and component specifications.",
        correct: false,
        translation: {
          vi: "Phân tích các đặc tả hệ thống và thành phần.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a possible outcome of the **Test Completion** activity?",
    translation: {
      vi: "Điều nào sau đây là một kết quả có thể có của hoạt động **Hoàn thành Kiểm thử (Test Completion)**?",
    },
    answers: [
      {
        text: "Archiving the testware and the test environment.",
        correct: true,
        translation: {
          vi: "Lưu trữ (archiving) các tài sản kiểm thử (testware) và môi trường kiểm thử.",
        },
      },
      {
        text: "The creation of a list of test conditions.",
        correct: false,
        translation: {
          vi: "Việc tạo ra một danh sách các điều kiện kiểm thử.",
        },
      },
      {
        text: "The creation of a test summary report.",
        correct: false,
        translation: {
          vi: "Việc tạo ra một báo cáo tóm tắt kiểm thử.",
        },
      },
      {
        text: "The creation of test cases and test procedures.",
        correct: false,
        translation: {
          vi: "Việc tạo ra các trường hợp kiểm thử và quy trình kiểm thử.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following options describes the purpose of **Boundary Value Analysis**?",
    translation: {
      vi: "Điều nào sau đây mô tả mục đích của **Phân tích Giá trị Biên (Boundary Value Analysis)**?",
    },
    answers: [
      {
        text: "To design test cases that exercise the boundaries of equivalence partitions.",
        correct: true,
        translation: {
          vi: "Thiết kế các trường hợp kiểm thử thực hiện các giá trị biên của các phân vùng tương đương.",
        },
      },
      {
        text: "To design test cases to execute all executable statements in the code.",
        correct: false,
        translation: {
          vi: "Thiết kế các trường hợp kiểm thử để thực thi tất cả các câu lệnh có thể thực thi được trong mã.",
        },
      },
      {
        text: "To design test cases to check all possible combinations of conditions.",
        correct: false,
        translation: {
          vi: "Thiết kế các trường hợp kiểm thử để kiểm tra tất cả các tổ hợp điều kiện có thể có.",
        },
      },
      {
        text: "To design test cases to check all possible paths in the control flow graph.",
        correct: false,
        translation: {
          vi: "Thiết kế các trường hợp kiểm thử để kiểm tra tất cả các đường dẫn có thể trong biểu đồ luồng điều khiển.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a characteristic of effective **defect reports**?",
    translation: {
      vi: "Điều nào sau đây là một đặc điểm của **báo cáo lỗi (defect reports)** hiệu quả?",
    },
    answers: [
      {
        text: "The defect report should include the name of the person who reported the defect, but not the name of the person who will fix it.",
        correct: false,
        translation: {
          vi: "Báo cáo lỗi nên bao gồm tên của người đã báo cáo lỗi, nhưng không phải tên của người sẽ sửa lỗi.",
        },
      },
      {
        text: "The defect report should include information about the environment in which the failure occurred.",
        correct: true,
        translation: {
          vi: "Báo cáo lỗi nên bao gồm thông tin về môi trường mà lỗi đã xảy ra (failure occurred).",
        },
      },
      {
        text: "The defect report should include only technical information that is relevant for developers.",
        correct: false,
        translation: {
          vi: "Báo cáo lỗi chỉ nên bao gồm thông tin kỹ thuật liên quan đến các nhà phát triển.",
        },
      },
      {
        text: "The defect report should include the severity of the defect, but not the priority.",
        correct: false,
        translation: {
          vi: "Báo cáo lỗi nên bao gồm mức độ nghiêm trọng (severity) của lỗi, nhưng không phải mức độ ưu tiên (priority).",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following options describes the purpose of **Exploratory Testing**?",
    translation: {
      vi: "Điều nào sau đây mô tả mục đích của **Kiểm thử Thăm dò (Exploratory Testing)**?",
    },
    answers: [
      {
        text: "To define test cases and test procedures upfront.",
        correct: false,
        translation: {
          vi: "Để xác định trước các trường hợp kiểm thử và quy trình kiểm thử.",
        },
      },
      {
        text: "To execute tests that cover the paths through the structure of a component.",
        correct: false,
        translation: {
          vi: "Để thực thi các kiểm thử bao phủ các đường dẫn thông qua cấu trúc của một thành phần.",
        },
      },
      {
        text: "To learn the product, test design, and test execution simultaneously.",
        correct: true,
        translation: {
          vi: "Để học về sản phẩm, thiết kế kiểm thử và thực thi kiểm thử đồng thời.",
        },
      },
      {
        text: "To use test cases based on the tester’s knowledge, experience, and intuition.",
        correct: false,
        translation: {
          vi: "Để sử dụng các trường hợp kiểm thử dựa trên kiến thức, kinh nghiệm và trực giác của kiểm thử viên.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a possible **Entry Criterion** for component testing?",
    translation: {
      vi: "Điều nào sau đây là một **Tiêu chí Đầu vào (Entry Criterion)** có thể có cho kiểm thử thành phần?",
    },
    answers: [
      {
        text: "All component tests have been executed.",
        correct: false,
        translation: {
          vi: "Tất cả các kiểm thử thành phần đã được thực thi.",
        },
      },
      {
        text: "All known defects in the component have been fixed.",
        correct: false,
        translation: {
          vi: "Tất cả các lỗi đã biết trong thành phần đã được sửa.",
        },
      },
      {
        text: "The test environment is ready.",
        correct: true,
        translation: {
          vi: "Môi trường kiểm thử đã sẵn sàng.",
        },
      },
      {
        text: "The regression tests have been run successfully.",
        correct: false,
        translation: {
          vi: "Các kiểm thử hồi quy đã được chạy thành công.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a typical **exit criterion** for system testing?",
    translation: {
      vi: "Điều nào sau đây là một **tiêu chí thoát (exit criterion)** điển hình cho kiểm thử hệ thống?",
    },
    answers: [
      {
        text: "The test basis items are available.",
        correct: false,
        translation: {
          vi: "Các mục cơ sở kiểm thử đã có sẵn.",
        },
      },
      {
        text: "All planned tests have been executed.",
        correct: true,
        translation: {
          vi: "Tất cả các kiểm thử đã được lên kế hoạch đã được thực thi.",
        },
      },
      {
        text: "All test procedures have been approved.",
        correct: false,
        translation: {
          vi: "Tất cả các quy trình kiểm thử đã được phê duyệt.",
        },
      },
      {
        text: "The test environment is ready.",
        correct: false,
        translation: {
          vi: "Môi trường kiểm thử đã sẵn sàng.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a characteristic of a **Master Test Plan**?",
    translation: {
      vi: "Điều nào sau đây là một đặc điểm của **Kế hoạch Kiểm thử Tổng thể (Master Test Plan)**?",
    },
    answers: [
      {
        text: "It documents the process for a single testing level.",
        correct: false,
        translation: {
          vi: "Nó tài liệu hóa quy trình cho một cấp độ kiểm thử duy nhất.",
        },
      },
      {
        text: "It addresses testing across multiple test levels.",
        correct: true,
        translation: {
          vi: "Nó giải quyết việc kiểm thử trên nhiều cấp độ kiểm thử.",
        },
      },
      {
        text: "It focuses on the resources required for a single test level.",
        correct: false,
        translation: {
          vi: "Nó tập trung vào các tài nguyên cần thiết cho một cấp độ kiểm thử duy nhất.",
        },
      },
      {
        text: "It is not needed in small and simple projects.",
        correct: false,
        translation: {
          vi: "Nó không cần thiết trong các dự án nhỏ và đơn giản.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is an example of an **Error Guessing** test case?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về trường hợp kiểm thử **Dự đoán Lỗi (Error Guessing)**?",
    },
    answers: [
      {
        text: "Entering an order with a zero quantity.",
        correct: true,
        translation: {
          vi: "Nhập một đơn hàng với số lượng bằng không.",
        },
      },
      {
        text: "Testing the boundaries of an input field.",
        correct: false,
        translation: {
          vi: "Kiểm thử các giá trị biên của một trường nhập.",
        },
      },
      {
        text: "Executing all statements in the code.",
        correct: false,
        translation: {
          vi: "Thực thi tất cả các câu lệnh trong mã.",
        },
      },
      {
        text: "Testing all possible paths through a flowchart.",
        correct: false,
        translation: {
          vi: "Kiểm thử tất cả các đường dẫn có thể thông qua một lưu đồ.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following best describes the difference between **defect severity** and **defect priority**?",
    translation: {
      vi: "Điều nào sau đây mô tả tốt nhất sự khác biệt giữa **mức độ nghiêm trọng của lỗi (defect severity)** và **mức độ ưu tiên của lỗi (defect priority)**?",
    },
    answers: [
      {
        text: "Severity determines the urgency of fixing a defect, while priority describes the impact of the defect on the system.",
        correct: false,
        translation: {
          vi: "Mức độ nghiêm trọng xác định tính khẩn cấp của việc sửa lỗi, trong khi mức độ ưu tiên mô tả tác động của lỗi lên hệ thống.",
        },
      },
      {
        text: "Severity describes the impact of the defect on the system, while priority determines the urgency of fixing a defect.",
        correct: true,
        translation: {
          vi: "Mức độ nghiêm trọng mô tả tác động của lỗi lên hệ thống, trong khi mức độ ưu tiên xác định tính khẩn cấp của việc sửa lỗi.",
        },
      },
      {
        text: "Severity is assigned by the Test Manager, while priority is assigned by the developer.",
        correct: false,
        translation: {
          vi: "Mức độ nghiêm trọng được gán bởi Quản lý Kiểm thử, trong khi mức độ ưu tiên được gán bởi nhà phát triển.",
        },
      },
      {
        text: "There is no difference between defect severity and defect priority.",
        correct: false,
        translation: {
          vi: "Không có sự khác biệt giữa mức độ nghiêm trọng của lỗi và mức độ ưu tiên của lỗi.",
        },
      },
    ],
  },
  {
    question:
      "For a system that processes credit applications, the following rules apply: If the customer's income is greater than $50,000, they are eligible for a credit card. If the customer's income is between $30,000 and $50,000, they are eligible for a debit card. If the customer's income is less than $30,000, they are not eligible for any card. Which of the following is the minimum set of test inputs that achieves 100% **Equivalence Partitioning** coverage?",
    translation: {
      vi: "Đối với một hệ thống xử lý đơn xin cấp tín dụng, các quy tắc sau được áp dụng: Nếu thu nhập của khách hàng lớn hơn $50,000, họ đủ điều kiện nhận thẻ tín dụng. Nếu thu nhập của khách hàng nằm giữa $30,000 và $50,000, họ đủ điều kiện nhận thẻ ghi nợ. Nếu thu nhập của khách hàng dưới $30,000, họ không đủ điều kiện nhận bất kỳ thẻ nào. Tập hợp đầu vào kiểm thử tối thiểu nào sau đây đạt được độ bao phủ **Phân vùng Tương đương (Equivalence Partitioning)** 100%?",
    },
    answers: [
      {
        text: "$29,999, $30,000, $50,001",
        correct: false,
        translation: {
          vi: "$29,999, $30,000, $50,001",
        },
      },
      {
        text: "$25,000, $40,000, $60,000",
        correct: true,
        translation: {
          vi: "$25,000, $40,000, $60,000",
        },
      },
      {
        text: "$50,000, $50,001",
        correct: false,
        translation: {
          vi: "$50,000, $50,001",
        },
      },
      {
        text: "$30,000, $50,000",
        correct: false,
        translation: {
          vi: "$30,000, $50,000",
        },
      },
    ],
    explanation:
      "Các phân vùng tương đương là: P1 (Thu nhập < $30,000), P2 ($30,000 <= Thu nhập <= $50,000), P3 (Thu nhập > $50,000). Tập hợp tối thiểu cần một giá trị từ mỗi phân vùng, ví dụ: $25,000 (P1), $40,000 (P2), $60,000 (P3).",
  },
  {
    question:
      "The following is a list of potential test measures: 1. Percentage of planned test cases that have been run. 2. Percentage of requirements that have been tested. 3. Average time required for component testing. 4. Number of defects found during system testing. Which of these measures can be used to monitor test progress?",
    translation: {
      vi: "Sau đây là danh sách các thước đo kiểm thử tiềm năng: 1. Tỷ lệ phần trăm các trường hợp kiểm thử đã lên kế hoạch đã được chạy. 2. Tỷ lệ phần trăm các yêu cầu đã được kiểm thử. 3. Thời gian trung bình cần thiết cho kiểm thử thành phần. 4. Số lượng lỗi được tìm thấy trong kiểm thử hệ thống. Thước đo nào trong số này có thể được sử dụng để **giám sát tiến độ kiểm thử (monitor test progress)**?",
    },
    answers: [
      {
        text: "1, 2 and 4",
        correct: true,
        translation: {
          vi: "1, 2 và 4",
        },
      },
      {
        text: "1, 2 and 3",
        correct: false,
        translation: {
          vi: "1, 2 và 3",
        },
      },
      {
        text: "1, 3 and 4",
        correct: false,
        translation: {
          vi: "1, 3 và 4",
        },
      },
      {
        text: "2, 3 and 4",
        correct: false,
        translation: {
          vi: "2, 3 và 4",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following statements is a **purpose** of **test execution scheduling**?",
    translation: {
      vi: "Tuyên bố nào sau đây là một **mục đích** của **lập lịch thực thi kiểm thử (test execution scheduling)**?",
    },
    answers: [
      {
        text: "To determine the order in which test cases will be executed.",
        correct: true,
        translation: {
          vi: "Để xác định thứ tự mà các trường hợp kiểm thử sẽ được thực thi.",
        },
      },
      {
        text: "To identify test conditions and to derive test cases.",
        correct: false,
        translation: {
          vi: "Để xác định các điều kiện kiểm thử và để suy ra các trường hợp kiểm thử.",
        },
      },
      {
        text: "To determine when to stop testing.",
        correct: false,
        translation: {
          vi: "Để xác định khi nào dừng kiểm thử.",
        },
      },
      {
        text: "To identify the required test environment and infrastructure.",
        correct: false,
        translation: {
          vi: "Để xác định môi trường và cơ sở hạ tầng kiểm thử cần thiết.",
        },
      },
    ],
  },
  {
    question: "Which of the following describes the V-model?",
    translation: {
      vi: "Điều nào sau đây mô tả **Mô hình Chữ V (V-model)**?",
    },
    answers: [
      {
        text: "Testing starts with acceptance testing, then continues with system testing, integration testing, and component testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử bắt đầu bằng kiểm thử chấp nhận, sau đó tiếp tục với kiểm thử hệ thống, kiểm thử tích hợp và kiểm thử thành phần.",
        },
      },
      {
        text: "The test activities are aligned with corresponding development activities.",
        correct: true,
        translation: {
          vi: "Các hoạt động kiểm thử được căn chỉnh với các hoạt động phát triển tương ứng.",
        },
      },
      {
        text: "Testing is mostly done after all coding is completed.",
        correct: false,
        translation: {
          vi: "Kiểm thử chủ yếu được thực hiện sau khi tất cả mã hóa đã hoàn thành.",
        },
      },
      {
        text: "The focus is on the functional and non-functional requirements.",
        correct: false,
        translation: {
          vi: "Trọng tâm là các yêu cầu chức năng và phi chức năng.",
        },
      },
    ],
  },
  {
    question: "Which one of the following is a potential **product risk**?",
    translation: {
      vi: "Điều nào sau đây là một **rủi ro sản phẩm (product risk)** tiềm năng?",
    },
    answers: [
      {
        text: "The business will be disappointed with the appearance of the product.",
        correct: true,
        translation: {
          vi: "Doanh nghiệp sẽ thất vọng với giao diện của sản phẩm.",
        },
      },
      {
        text: "The environment may not be available for the scheduled testing.",
        correct: false,
        translation: {
          vi: "Môi trường có thể không có sẵn cho việc kiểm thử theo lịch trình.",
        },
      },
      {
        text: "The test tool being used may not be able to support a new operating system.",
        correct: false,
        translation: {
          vi: "Công cụ kiểm thử đang được sử dụng có thể không hỗ trợ hệ điều hành mới.",
        },
      },
      {
        text: "The test object may not be delivered on time.",
        correct: false,
        translation: {
          vi: "Đối tượng kiểm thử có thể không được giao đúng hạn.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is an example of **non-functional testing**?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về **kiểm thử phi chức năng (non-functional testing)**?",
    },
    answers: [
      {
        text: "Checking if a system feature works correctly.",
        correct: false,
        translation: {
          vi: "Kiểm tra xem một tính năng hệ thống có hoạt động chính xác không.",
        },
      },
      {
        text: "Checking how many users the system can support at the same time.",
        correct: true,
        translation: {
          vi: "Kiểm tra xem hệ thống có thể hỗ trợ bao nhiêu người dùng cùng một lúc.",
        },
      },
      {
        text: "Checking the interaction between two components.",
        correct: false,
        translation: {
          vi: "Kiểm tra sự tương tác giữa hai thành phần.",
        },
      },
      {
        text: "Checking if the new feature works after a bug fix.",
        correct: false,
        translation: {
          vi: "Kiểm tra xem tính năng mới có hoạt động sau khi sửa lỗi không.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is most often associated with **User Acceptance Testing (UAT)**?",
    translation: {
      vi: "Điều nào sau đây thường được liên kết nhất với **Kiểm thử Chấp nhận Người dùng (User Acceptance Testing - UAT)**?",
    },
    answers: [
      {
        text: "Testing conducted by end-users or customers to verify fitness for purpose.",
        correct: true,
        translation: {
          vi: "Kiểm thử được thực hiện bởi người dùng cuối hoặc khách hàng để xác minh tính phù hợp với mục đích.",
        },
      },
      {
        text: "Testing for memory leaks or buffer overflows.",
        correct: false,
        translation: {
          vi: "Kiểm thử rò rỉ bộ nhớ hoặc tràn bộ đệm.",
        },
      },
      {
        text: "Testing the functions of a single component.",
        correct: false,
        translation: {
          vi: "Kiểm thử các chức năng của một thành phần duy nhất.",
        },
      },
      {
        text: "Testing the interactions between multiple components.",
        correct: false,
        translation: {
          vi: "Kiểm thử sự tương tác giữa nhiều thành phần.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following techniques is classified as a **Specification-based** test technique?",
    translation: {
      vi: "Kỹ thuật nào sau đây được phân loại là kỹ thuật kiểm thử **Dựa trên Đặc tả (Specification-based)**?",
    },
    answers: [
      {
        text: "Statement coverage",
        correct: false,
        translation: {
          vi: "Độ bao phủ câu lệnh (Statement coverage)",
        },
      },
      {
        text: "Exploratory testing",
        correct: false,
        translation: {
          vi: "Kiểm thử thăm dò (Exploratory testing)",
        },
      },
      {
        text: "Decision table testing",
        correct: true,
        translation: {
          vi: "Kiểm thử bảng quyết định (Decision table testing)",
        },
      },
      {
        text: "Error guessing",
        correct: false,
        translation: {
          vi: "Dự đoán lỗi (Error guessing)",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a major risk when using a commercial **Test Management Tool**?",
    translation: {
      vi: "Điều nào sau đây là một rủi ro lớn khi sử dụng **Công cụ Quản lý Kiểm thử (Test Management Tool)** thương mại?",
    },
    answers: [
      {
        text: "Increased efficiency in test execution.",
        correct: false,
        translation: {
          vi: "Tăng hiệu quả trong việc thực thi kiểm thử.",
        },
      },
      {
        text: "The tool vendor may go out of business.",
        correct: true,
        translation: {
          vi: "Nhà cung cấp công cụ có thể ngừng kinh doanh.",
        },
      },
      {
        text: "Lack of integration with other test tools.",
        correct: false,
        translation: {
          vi: "Thiếu tích hợp với các công cụ kiểm thử khác.",
        },
      },
      {
        text: "The difficulty of managing test cases without a central repository.",
        correct: false,
        translation: {
          vi: "Khó khăn trong việc quản lý các trường hợp kiểm thử mà không có kho lưu trữ trung tâm.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following describes the relationship between **Decision Coverage** and **Modified Condition/Decision Coverage (MCDC)**?",
    translation: {
      vi: "Điều nào sau đây mô tả mối quan hệ giữa **Độ bao phủ Quyết định (Decision Coverage)** và **Độ bao phủ Điều kiện/Quyết định Đã sửa đổi (MCDC)**?",
    },
    answers: [
      {
        text: "100% Decision Coverage is equivalent to 100% MCDC.",
        correct: false,
        translation: {
          vi: "Độ bao phủ Quyết định 100% tương đương với MCDC 100%.",
        },
      },
      {
        text: "100% MCDC is generally easier to achieve than 100% Decision Coverage.",
        correct: false,
        translation: {
          vi: "MCDC 100% nhìn chung dễ đạt được hơn Độ bao phủ Quyết định 100%.",
        },
      },
      {
        text: "100% Decision Coverage guarantees 100% MCDC.",
        correct: false,
        translation: {
          vi: "Độ bao phủ Quyết định 100% đảm bảo MCDC 100%.",
        },
      },
      {
        text: "100% MCDC is more demanding and includes 100% Decision Coverage.",
        correct: true,
        translation: {
          vi: "MCDC 100% khắt khe hơn và bao gồm Độ bao phủ Quyết định 100%.",
        },
      },
    ],
  },
  {
    question:
      "Which one of the following is a **major risk** when using **open-source** testing tools?",
    translation: {
      vi: "Điều nào sau đây là một **rủi ro lớn** khi sử dụng các công cụ kiểm thử **nguồn mở (open-source)**?",
    },
    answers: [
      {
        text: "The need for a dedicated team to maintain the tools.",
        correct: true,
        translation: {
          vi: "Cần một đội ngũ chuyên trách để duy trì (maintain) các công cụ.",
        },
      },
      {
        text: "The tool does not fit into the existing infrastructure.",
        correct: false,
        translation: {
          vi: "Công cụ không phù hợp với cơ sở hạ tầng hiện có.",
        },
      },
      {
        text: "The vendor may stop selling the tool.",
        correct: false,
        translation: {
          vi: "Nhà cung cấp có thể ngừng bán công cụ.",
        },
      },
      {
        text: "The initial cost of the tool is too high.",
        correct: false,
        translation: {
          vi: "Chi phí ban đầu của công cụ quá cao.",
        },
      },
    ],
  },
];