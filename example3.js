export const questions = [
  {
    question: "What is one potential benefit of using a test automation tool?",
    translation: {
      vi: "Lợi ích tiềm năng của việc sử dụng công cụ tự động hóa kiểm thử là gì?",
    },
    answers: [
      {
        text: "The quality of defects will improve",
        correct: false,
        translation: {
          vi: "Chất lượng lỗi sẽ được cải thiện",
        },
      },
      {
        text: "Ease of access to statistics about test progress",
        correct: true,
        translation: {
          vi: "Dễ dàng truy cập vào các thống kê về tiến độ kiểm thử",
        },
      },
      {
        text: "Disk space is not required to track versions of test artifacts",
        correct: false,
        translation: {
          vi: "Không cần dung lượng đĩa để theo dõi các phiên bản của các tạo phẩm kiểm thử",
        },
      },
      {
        text: "Less network traffic generated",
        correct: false,
        translation: {
          vi: "Giảm lưu lượng mạng được tạo ra",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a benefit of early stakeholder feedback?",
    translation: {
      vi: "Điều nào sau đây là một lợi ích của việc thu thập phản hồi sớm từ các bên liên quan (stakeholder)?",
    },
    answers: [
      {
        text: "It can be gathered early and then used to make changes after the product goes to production to make it more user friendly",
        correct: false,
        translation: {
          vi: "Nó có thể được thu thập sớm và sau đó được sử dụng để thực hiện các thay đổi sau khi sản phẩm được đưa vào sản xuất để làm cho nó thân thiện hơn với người dùng",
        },
      },
      {
        text: "It allows the project manager to get a better view of the changes that will be needed for the next version",
        correct: false,
        translation: {
          vi: "Nó cho phép người quản lý dự án có cái nhìn tốt hơn về những thay đổi sẽ cần thiết cho phiên bản tiếp theo",
        },
      },
      {
        text: "The developers get a better understanding of what they are building",
        correct: true,
        translation: {
          vi: "Các nhà phát triển hiểu rõ hơn về những gì họ đang xây dựng",
        },
      },
      {
        text: "The testers get a better understanding of the test automation requirements",
        correct: false,
        translation: {
          vi: "Các kiểm thử viên hiểu rõ hơn về các yêu cầu tự động hóa kiểm thử",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a good testing practice that applies regardless of the specific software development lifecycle being used?",
    translation: {
      vi: "Điều nào sau đây là một thực hành kiểm thử tốt áp dụng bất kể chu trình phát triển phần mềm cụ thể nào đang được sử dụng?",
    },
    answers: [
      {
        text: "Prompt and prepared attendance to stand-up meetings",
        correct: false,
        translation: {
          vi: "Tham dự các cuộc họp đứng (stand-up meetings) một cách kịp thời và chuẩn bị",
        },
      },
      {
        text: "Step-by-step test case documentation",
        correct: false,
        translation: {
          vi: "Tài liệu hóa trường hợp kiểm thử từng bước (step-by-step test case documentation)",
        },
      },
      {
        text: "Ensuring there is a corresponding testing activity for every software development activity",
        correct: true,
        translation: {
          vi: "Đảm bảo có một hoạt động kiểm thử tương ứng cho mọi hoạt động phát triển phần mềm",
        },
      },
      {
        text: "Involving the stakeholders in reviewing all acceptance criteria prior to designing test cases",
        correct: false,
        translation: {
          vi: "Thu hút các bên liên quan xem xét tất cả các tiêu chí chấp nhận trước khi thiết kế các trường hợp kiểm thử",
        },
      },
    ],
  },
  {
    question:
      "In an Agile development model, the completion of testing or “done” is defined by which of the following?",
    translation: {
      vi: "Trong mô hình phát triển Agile, việc hoàn thành kiểm thử hoặc “done” được định nghĩa bởi điều nào sau đây?",
    },
    answers: [
      {
        text: "Project management",
        correct: false,
        translation: {
          vi: "Quản lý dự án",
        },
      },
      {
        text: "Entry criteria",
        correct: false,
        translation: {
          vi: "Tiêu chí vào (Entry criteria)",
        },
      },
      {
        text: "Exit criteria",
        correct: true,
        translation: {
          vi: "Tiêu chí ra (Exit criteria)",
        },
      },
      {
        text: "The expected test completion date",
        correct: false,
        translation: {
          vi: "Ngày hoàn thành kiểm thử dự kiến",
        },
      },
    ],
  },
  {
    question:
      "You are testing web application software that allows a person to use their travel points to make flight and hotel reservations.\nWhen the user logs into the software (username/password) they are presented with a set of options. From that set of options, they can pick the following:\n1. View points balance\n2. Make flight reservation\n3. Make hotel reservation\nFrom the login page, they can log in successfully or might fail and need to try again. Once they login successfully they can go to either the view points, flight reservation or hotel reservation page.\nWhich of the following is the correct list of the transitions (a transition is shown as >) that should be tested, assuming that the test ends when a reservation state is reached.",
    translation: {
      vi: "Bạn đang kiểm thử phần mềm ứng dụng web cho phép một người sử dụng điểm du lịch của họ để đặt vé máy bay và phòng khách sạn. \nKhi người dùng đăng nhập vào phần mềm (tên người dùng/mật khẩu), họ được hiển thị một tập hợp các tùy chọn. Từ tập hợp các tùy chọn đó, họ có thể chọn những điều sau: 1. Xem số dư điểm 2. Đặt vé máy bay 3. Đặt phòng khách sạn. Từ trang đăng nhập, họ có thể đăng nhập thành công hoặc có thể thất bại và cần thử lại. Sau khi đăng nhập thành công, họ có thể đi đến trang xem điểm, đặt vé máy bay hoặc đặt phòng khách sạn. Danh sách chuyển đổi (chuyển đổi được hiển thị là >) nào sau đây là đúng nên được kiểm thử, giả sử rằng việc kiểm thử kết thúc khi đạt đến trạng thái đặt chỗ.",
    },
    answers: [
      {
        text: "Points > Reservation",
        correct: false,
        translation: {
          vi: "Points > Reservation",
        },
      },
      {
        text: "Login > Points, Points > Flight, Points > Hotel",
        correct: false,
        translation: {
          vi: "Login > Points, Points > Flight, Points > Hotel",
        },
      },
      {
        text: "Login > Login, Login > Points, Login > Flight, Login > Hotel, Points > Flight, Points > Hotel",
        correct: true,
        translation: {
          vi: "Login > Login, Login > Points, Login > Flight, Login > Hotel, Points > Flight, Points > Hotel",
        },
      },
      {
        text: "Login > Login, Login > Points, Login > Flight, Login > Hotel, Flight > Hotel, Hotel > Flight, Flight > Login, Hotel > Login",
        correct: false,
        translation: {
          vi: "Login > Login, Login > Points, Login > Flight, Login > Hotel, Flight > Hotel, Hotel > Flight, Flight > Login, Hotel > Login",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is an advantage of the whole team approach?",
    translation: {
      vi: "Điều nào sau đây là một lợi thế của phương pháp tiếp cận toàn đội (whole team approach)?",
    },
    answers: [
      {
        text: "Any person in the team with the right skills can perform any task",
        correct: true,
        translation: {
          vi: "Bất kỳ người nào trong đội có kỹ năng phù hợp đều có thể thực hiện bất kỳ nhiệm vụ nào",
        },
      },
      {
        text: "Tasks are assigned to specific team members who will own that task until completion",
        correct: false,
        translation: {
          vi: "Các nhiệm vụ được giao cho các thành viên cụ thể trong đội, những người sẽ sở hữu nhiệm vụ đó cho đến khi hoàn thành",
        },
      },
      {
        text: "Testers have clear ownership of quality and this eliminates confusion and overlap",
        correct: false,
        translation: {
          vi: "Các kiểm thử viên có quyền sở hữu rõ ràng về chất lượng và điều này loại bỏ sự nhầm lẫn và chồng chéo",
        },
      },
      {
        text: "Business representatives are not included in the team so they can supply independent assessment during UAT",
        correct: false,
        translation: {
          vi: "Đại diện kinh doanh không được đưa vào đội để họ có thể cung cấp đánh giá độc lập trong quá trình UAT",
        },
      },
    ],
  },
  {
    question:
      "If you are using test results to learn more about the software and are then creating additional tests based on those results, what type of testing are you doing?",
    translation: {
      vi: "Nếu bạn đang sử dụng kết quả kiểm thử để tìm hiểu thêm về phần mềm và sau đó tạo thêm các bài kiểm thử dựa trên những kết quả đó, bạn đang thực hiện loại kiểm thử nào?",
    },
    answers: [
      {
        text: "Exploratory",
        correct: true,
        translation: {
          vi: "Khám phá (Exploratory)",
        },
      },
      {
        text: "Decision-based",
        correct: false,
        translation: {
          vi: "Dựa trên quyết định (Decision-based)",
        },
      },
      {
        text: "Checklist-based",
        correct: false,
        translation: {
          vi: "Dựa trên danh sách kiểm tra (Checklist-based)",
        },
      },
      {
        text: "Control flow",
        correct: false,
        translation: {
          vi: "Luồng kiểm soát (Control flow)",
        },
      },
    ],
  },
  {
    question:
      "You are working on calculating the estimation for a project. You have been given the following numbers by your manager, who is considered to be an expert in estimation:\nOptimistic = 35 days\nLikely = 40 days\nPessimistic = 65 days\nApply the three-point estimation technique, what is the proper expression of the final estimate?",
    translation: {
      vi: "Bạn đang làm việc để tính toán ước tính cho một dự án. Bạn đã được người quản lý của mình, người được coi là chuyên gia trong việc ước tính, cung cấp các con số sau: Lạc quan (Optimistic) = 35 ngày, Có khả năng (Likely) = 40 ngày, Bi quan (Pessimistic) = 65 ngày. Áp dụng kỹ thuật ước tính ba điểm (three-point estimation), cách diễn đạt thích hợp cho ước tính cuối cùng là gì?",
    },
    answers: [
      {
        text: "E is 46.3 days, SD = 35",
        correct: false,
        translation: {
          vi: "E là 46.3 ngày, SD = 35",
        },
      },
      {
        text: "E is 40 days, SD = 6.67",
        correct: false,
        translation: {
          vi: "E là 40 ngày, SD = 6.67",
        },
      },
      {
        text: "E is 37.3 days, SD = 43.3",
        correct: false,
        translation: {
          vi: "E là 37.3 ngày, SD = 43.3",
        },
      },
      {
        text: "E is 43.3 days, SD = 5",
        correct: true,
        translation: {
          vi: "E là 43.3 ngày, SD = 5",
        },
      },
    ],
  },
  {
    question:
      "Which black-box technique should be used to verify different responses of the system, depending on its current conditions or previous history?",
    translation: {
      vi: "Kỹ thuật hộp đen (black-box) nào nên được sử dụng để xác minh các phản hồi khác nhau của hệ thống, tùy thuộc vào điều kiện hiện tại hoặc lịch sử trước đó của nó?",
    },
    answers: [
      {
        text: "Use case testing",
        correct: false,
        translation: {
          vi: "Kiểm thử trường hợp sử dụng (Use case testing)",
        },
      },
      {
        text: "Decision table testing",
        correct: false,
        translation: {
          vi: "Kiểm thử bảng quyết định (Decision table testing)",
        },
      },
      {
        text: "State transition testing",
        correct: true,
        translation: {
          vi: "Kiểm thử chuyển đổi trạng thái (State transition testing)",
        },
      },
      {
        text: "Equivalence partitioning",
        correct: false,
        translation: {
          vi: "Phân vùng tương đương (Equivalence partitioning)",
        },
      },
    ],
  },
  {
    question:
      "You have been given the following story:\nAs a help desk worker\nI want to enter a caller’s birth date\nSo the system can display the caller’s account information\nAs a team, you have developed the following table of acceptance criteria:\n\nYou have developed the following test cases and will execute them in the specified order:\n1. Enter a valid date and verify that the account retrieved matches the birth date entered.\n2. Enter an invalid date and verify that the error indicates the date is invalid.\n3. Verify that the date prompt is already formatted for the date with xx/xx/xx format.\n4. Enter a valid date and verify that two pages of account information are readable.\n5. Enter a valid date and verify that the response occurs within 2 seconds when the system is under an average load.\nWhat is incorrect about this approach?",
    translation: {
      vi: "Bạn đã được cung cấp câu chuyện sau: *Là một nhân viên hỗ trợ, tôi muốn nhập ngày sinh của người gọi để hệ thống có thể hiển thị thông tin tài khoản của người gọi*. Bạn đã phát triển các trường hợp kiểm thử sau và sẽ thực hiện chúng theo thứ tự được chỉ định: 1. Nhập ngày hợp lệ và xác minh rằng tài khoản được truy xuất khớp với ngày sinh đã nhập. 2. Nhập ngày không hợp lệ và xác minh rằng lỗi cho biết ngày không hợp lệ. 3. Xác minh rằng lời nhắc ngày đã được định dạng cho ngày với định dạng xx/xx/xx. 4. Nhập ngày hợp lệ và xác minh rằng hai trang thông tin tài khoản có thể đọc được. 5. Nhập ngày hợp lệ và xác minh rằng phản hồi xảy ra trong vòng 2 giây khi hệ thống đang ở mức tải trung bình. Điều gì là không chính xác về phương pháp này?",
    },
    answers: [
      {
        text: "The security test case should be executed first as it is related to access control",
        correct: false,
        translation: {
          vi: "Trường hợp kiểm thử bảo mật nên được thực hiện trước vì nó liên quan đến kiểm soát truy cập",
        },
      },
      {
        text: "The test cases should contain all steps required for execution, including navigation information and SQL statements required to perform the verification",
        correct: false,
        translation: {
          vi: "Các trường hợp kiểm thử nên chứa tất cả các bước cần thiết để thực hiện, bao gồm thông tin điều hướng và các câu lệnh SQL cần thiết để thực hiện xác minh",
        },
      },
      {
        text: "The test cases are not being executed in the proper order",
        correct: true,
        translation: {
          vi: "Các trường hợp kiểm thử không được thực hiện theo đúng thứ tự",
        },
      },
      {
        text: "The test cases do not indicate the expected result",
        correct: false,
        translation: {
          vi: "Các trường hợp kiểm thử không chỉ ra kết quả mong đợi",
        },
      },
    ],
  },
  {
    question: "In what way does configuration management help the tester?",
    translation: {
      vi: "Quản lý cấu hình (configuration management) giúp ích cho kiểm thử viên theo cách nào?",
    },
    answers: [
      {
        text: "It verifies that the test cases are executed in the correct order",
        correct: false,
        translation: {
          vi: "Nó xác minh rằng các trường hợp kiểm thử được thực hiện theo đúng thứ tự",
        },
      },
      {
        text: "It ensures that regressions do not occur",
        correct: false,
        translation: {
          vi: "Nó đảm bảo rằng lỗi hồi quy (regressions) không xảy ra",
        },
      },
      {
        text: "It enforces proper unit testing and measurement",
        correct: false,
        translation: {
          vi: "Nó thực thi kiểm thử đơn vị và đo lường thích hợp",
        },
      },
      {
        text: "It uniquely identifies the items to be tested",
        correct: true,
        translation: {
          vi: "Nó xác định duy nhất các mục cần được kiểm thử",
        },
      },
    ],
  },
  {
    question:
      "If you are responsible for test analysis and test design what is your primary role in your team?",
    translation: {
      vi: "Nếu bạn chịu trách nhiệm phân tích kiểm thử và thiết kế kiểm thử, vai trò chính của bạn trong đội là gì?",
    },
    answers: [
      {
        text: "Business analyst",
        correct: false,
        translation: {
          vi: "Chuyên viên phân tích nghiệp vụ (Business analyst)",
        },
      },
      {
        text: "Test manager",
        correct: false,
        translation: {
          vi: "Quản lý kiểm thử (Test manager)",
        },
      },
      {
        text: "Developer",
        correct: false,
        translation: {
          vi: "Nhà phát triển (Developer)",
        },
      },
      {
        text: "Tester",
        correct: true,
        translation: {
          vi: "Kiểm thử viên (Tester)",
        },
      },
    ],
  },
  {
    question:
      "A functional requirement states that pressure values must always be positive and stay within a range of 100 to 200 pounds for a particular tank (100 and 200 are valid within the range).\nWhich of the following is the minimum set of values that would achieve coverage using the equivalence partitioning technique?",
    translation: {
      vi: "Một yêu cầu chức năng nêu rõ rằng các giá trị áp suất phải luôn dương và nằm trong phạm vi từ 100 đến 200 pound đối với một bồn cụ thể (100 và 200 là hợp lệ trong phạm vi). Điều nào sau đây là tập hợp giá trị tối thiểu đạt được độ bao phủ bằng cách sử dụng kỹ thuật phân vùng tương đương (equivalence partitioning)?",
    },
    answers: [
      {
        text: "A series of tests where pressure is set to 98, 110, and 201 pounds",
        correct: true,
        translation: {
          vi: "Một loạt các bài kiểm thử trong đó áp suất được đặt thành 98, 110 và 201 pound",
        },
      },
      {
        text: "A series of tests where pressure is set to 98, 100, and 200 pounds",
        correct: false,
        translation: {
          vi: "Một loạt các bài kiểm thử trong đó áp suất được đặt thành 98, 100 và 200 pound",
        },
      },
      {
        text: "A series of tests where pressure is set to 100, 110, and 200 pounds",
        correct: false,
        translation: {
          vi: "Một loạt các bài kiểm thử trong đó áp suất được đặt thành 100, 110 và 200 pound",
        },
      },
      {
        text: "A series of tests where pressure is set to -1, 0, 175, and 297 pounds",
        correct: false,
        translation: {
          vi: "Một loạt các bài kiểm thử trong đó áp suất được đặt thành -1, 0, 175 và 297 pound",
        },
      },
    ],
  },
  {
    question:
      "You have been given the following test cases for execution. You have been told that security and usability are the highest priorities respectively for this banking application. What is the proper execution order for these test cases?\n1. Update a customer’s account balance\n2. Query a customer’s account balance\n3. Delete a request for a paper statement\n4. Change the font size on the page to improve readability\n5. Create a new payee in a customer’s automatic bill pay list",
    translation: {
      vi: "Bạn đã được cung cấp các trường hợp kiểm thử sau để thực hiện. Bạn đã được cho biết rằng bảo mật (security) và khả năng sử dụng (usability) lần lượt là các ưu tiên cao nhất cho ứng dụng ngân hàng này. Thứ tự thực hiện thích hợp cho các trường hợp kiểm thử này là gì? \n1. Cập nhật số dư tài khoản của khách hàng. \n2. Truy vấn số dư tài khoản của khách hàng. \n3. Xóa yêu cầu sao kê giấy. \n4. Thay đổi kích thước phông chữ trên trang để cải thiện khả năng đọc. \n5. Tạo người thụ hưởng mới trong danh sách thanh toán hóa đơn tự động của khách hàng.",
    },
    answers: [
      {
        text: "3, 1, 5, 2, 4",
        correct: false,
        translation: {
          vi: "3, 1, 5, 2, 4",
        },
      },
      {
        text: "1, 2, 5, 4, 3",
        correct: true,
        translation: {
          vi: "1, 2, 5, 4, 3",
        },
      },
      {
        text: "1, 3, 5, 2, 4",
        correct: false,
        translation: {
          vi: "1, 3, 5, 2, 4",
        },
      },
      {
        text: "4, 3, 1, 2, 5",
        correct: false,
        translation: {
          vi: "4, 3, 1, 2, 5",
        },
      },
    ],
  },
  {
    question: "When is the detailed risk analysis for a story first conducted?",
    translation: {
      vi: "Phân tích rủi ro chi tiết cho một câu chuyện (story) được thực hiện lần đầu tiên khi nào?",
    },
    answers: [
      {
        text: "Project planning",
        correct: false,
        translation: {
          vi: "Lập kế hoạch dự án",
        },
      },
      {
        text: "Iteration planning",
        correct: true,
        translation: {
          vi: "Lập kế hoạch lặp (Iteration planning)",
        },
      },
      {
        text: "Release planning",
        correct: false,
        translation: {
          vi: "Lập kế hoạch phát hành (Release planning)",
        },
      },
      {
        text: "Epic planning",
        correct: false,
        translation: {
          vi: "Lập kế hoạch Epic (Epic planning)",
        },
      },
    ],
  },
  {
    question:
      "When tests are being created to achieve statement coverage, what are they exercising?",
    translation: {
      vi: "Khi các bài kiểm thử được tạo để đạt được độ bao phủ câu lệnh (statement coverage), chúng đang thực hiện điều gì?",
    },
    answers: [
      {
        text: "Only the decisions in the code",
        correct: false,
        translation: {
          vi: "Chỉ các quyết định (decisions) trong mã",
        },
      },
      {
        text: "Only the loops in the code",
        correct: false,
        translation: {
          vi: "Chỉ các vòng lặp (loops) trong mã",
        },
      },
      {
        text: "Only the executable statements in the code",
        correct: true,
        translation: {
          vi: "Chỉ các câu lệnh có thể thực thi (executable statements) trong mã",
        },
      },
      {
        text: "All lines of code including executable statements and comments",
        correct: false,
        translation: {
          vi: "Tất cả các dòng mã bao gồm các câu lệnh có thể thực thi và nhận xét (comments)",
        },
      },
    ],
  },
  {
    question:
      "You have just completed a retrospective at the end of a sprint. One of the developers raised an issue with defect reports not containing information about the configuration, data, and system being used when the failure occurred. When this happens, they reject the defect report and the tester has to update it and send it again. This sometimes takes three or four iterations to get all the information on the report. The test team will take this feedback and will improve the details included in the defect reports.\nThis is an example of which type of benefit for testing?",
    translation: {
      vi: "Bạn vừa hoàn thành một cuộc họp hồi cứu (retrospective) vào cuối một sprint. Một nhà phát triển đã nêu ra một vấn đề với các báo cáo lỗi không chứa thông tin về cấu hình, dữ liệu và hệ thống đang được sử dụng khi lỗi xảy ra. Khi điều này xảy ra, họ từ chối báo cáo lỗi và kiểm thử viên phải cập nhật nó và gửi lại. Điều này đôi khi mất ba hoặc bốn lần lặp lại để có được tất cả thông tin trong báo cáo. Đội kiểm thử sẽ tiếp thu phản hồi này và sẽ cải thiện các chi tiết được bao gồm trong các báo cáo lỗi. Đây là một ví dụ về loại lợi ích nào của kiểm thử?",
    },
    answers: [
      {
        text: "Increased test effectiveness / efficiency",
        correct: true,
        translation: {
          vi: "Tăng hiệu quả / năng suất kiểm thử",
        },
      },
      {
        text: "Team bonding and learning",
        correct: false,
        translation: {
          vi: "Gắn kết và học hỏi trong đội",
        },
      },
      {
        text: "Improved quality of the test basis",
        correct: false,
        translation: {
          vi: "Cải thiện chất lượng cơ sở kiểm thử (test basis)",
        },
      },
      {
        text: "Increased quality of the test cases",
        correct: false,
        translation: {
          vi: "Tăng chất lượng các trường hợp kiểm thử",
        },
      },
    ],
  },
  {
    question:
      "What is a reasonable way to control and minimize the cost of testing and development?",
    translation: {
      vi: "Cách hợp lý để kiểm soát và giảm thiểu chi phí kiểm thử và phát triển là gì?",
    },
    answers: [
      {
        text: "Conduct formal reviews to detect defects as early as possible.",
        correct: true,
        translation: {
          vi: "Tiến hành các buổi xem xét (reviews) chính thức để phát hiện lỗi càng sớm càng tốt.",
        },
      },
      {
        text: "Perform a usability analysis prior to user interface design.",
        correct: false,
        translation: {
          vi: "Thực hiện phân tích khả năng sử dụng trước khi thiết kế giao diện người dùng.",
        },
      },
      {
        text: "Automate error detection at the beginning of acceptance testing.",
        correct: false,
        translation: {
          vi: "Tự động hóa việc phát hiện lỗi khi bắt đầu kiểm thử chấp nhận.",
        },
      },
      {
        text: "Hire low-cost, outsourced testing staff for system testing.",
        correct: false,
        translation: {
          vi: "Thuê nhân viên kiểm thử thuê ngoài chi phí thấp cho kiểm thử hệ thống.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a technique that can be used to develop user stories with the collaboration of developers and business?",
    translation: {
      vi: "Điều nào sau đây là một kỹ thuật có thể được sử dụng để phát triển các câu chuyện người dùng (user stories) với sự cộng tác của các nhà phát triển và nghiệp vụ?",
    },
    answers: [
      {
        text: "DevOps",
        correct: false,
        translation: {
          vi: "DevOps",
        },
      },
      {
        text: "CI/CD",
        correct: false,
        translation: {
          vi: "CI/CD",
        },
      },
      {
        text: "Brainstorming",
        correct: true,
        translation: {
          vi: "Động não (Brainstorming)",
        },
      },
      {
        text: "Equivalence Partitioning",
        correct: false,
        translation: {
          vi: "Phân vùng tương đương (Equivalence Partitioning)",
        },
      },
    ],
  },
  {
    question: "What is the primary function of a test management tool?",
    translation: {
      vi: "Chức năng chính của công cụ quản lý kiểm thử là gì?",
    },
    answers: [
      {
        text: "To facilitate the management and control of testing activities",
        correct: true,
        translation: {
          vi: "Tạo điều kiện quản lý và kiểm soát các hoạt động kiểm thử",
        },
      },
      {
        text: "To generate test data based on test management criteria",
        correct: false,
        translation: {
          vi: "Tạo dữ liệu kiểm thử dựa trên tiêu chí quản lý kiểm thử",
        },
      },
      {
        text: "To generate detailed test specifications based on the test plan",
        correct: false,
        translation: {
          vi: "Tạo thông số kỹ thuật kiểm thử chi tiết dựa trên kế hoạch kiểm thử",
        },
      },
      {
        text: "To analyze and enforce coding and testing standards",
        correct: false,
        translation: {
          vi: "Phân tích và thực thi các tiêu chuẩn mã hóa và kiểm thử",
        },
      },
    ],
  },
  {
    question:
      "Which of the following best suggests the need for maintenance testing?",
    translation: {
      vi: "Điều nào sau đây gợi ý rõ nhất về nhu cầu kiểm thử bảo trì (maintenance testing)?",
    },
    answers: [
      {
        text: "Defects being found during alpha testing",
        correct: false,
        translation: {
          vi: "Các lỗi được tìm thấy trong kiểm thử alpha",
        },
      },
      {
        text: "The initial software release",
        correct: false,
        translation: {
          vi: "Phát hành phần mềm ban đầu",
        },
      },
      {
        text: "A requirements change during pre-deployment activities",
        correct: false,
        translation: {
          vi: "Thay đổi yêu cầu trong các hoạt động trước khi triển khai",
        },
      },
      {
        text: "Adding a new feature to an existing system",
        correct: true,
        translation: {
          vi: "Thêm một tính năng mới vào một hệ thống hiện có",
        },
      },
    ],
  },
  {
    question: "What is the primary purpose of confirmation testing?",
    translation: {
      vi: "Mục đích chính của kiểm thử xác nhận (confirmation testing) là gì?",
    },
    answers: [
      {
        text: "To ensure that the software is ready for release",
        correct: false,
        translation: {
          vi: "Để đảm bảo rằng phần mềm đã sẵn sàng để phát hành",
        },
      },
      {
        text: "To verify that all reported defects have been fixed",
        correct: true,
        translation: {
          vi: "Để xác minh rằng tất cả các lỗi đã báo cáo đã được khắc phục",
        },
      },
      {
        text: "To test that previously developed and tested functionality works correctly after a change",
        correct: false,
        translation: {
          vi: "Để kiểm thử rằng chức năng đã được phát triển và kiểm thử trước đó hoạt động chính xác sau khi có thay đổi",
        },
      },
      {
        text: "To ensure that the business requirements are met",
        correct: false,
        translation: {
          vi: "Để đảm bảo rằng các yêu cầu kinh doanh được đáp ứng",
        },
      },
    ],
  },
  {
    question:
      "You are running system testing. Which of the following is an example of what you would find during the system testing activity?",
    translation: {
      vi: "Bạn đang chạy kiểm thử hệ thống. Điều nào sau đây là một ví dụ về những gì bạn sẽ tìm thấy trong quá trình hoạt động kiểm thử hệ thống?",
    },
    answers: [
      {
        text: "The system does not meet the specified availability requirements",
        correct: true,
        translation: {
          vi: "Hệ thống không đáp ứng các yêu cầu về tính khả dụng (availability) đã được chỉ định",
        },
      },
      {
        text: "The system does not retrieve accurate information from the database",
        correct: false,
        translation: {
          vi: "Hệ thống không truy xuất thông tin chính xác từ cơ sở dữ liệu",
        },
      },
      {
        text: "An incorrect calculation is found in a unit",
        correct: false,
        translation: {
          vi: "Một phép tính không chính xác được tìm thấy trong một đơn vị",
        },
      },
      {
        text: "The system is found to be non-compliant with the license agreement",
        correct: false,
        translation: {
          vi: "Hệ thống được phát hiện là không tuân thủ thỏa thuận cấp phép",
        },
      },
    ],
  },
  {
    question: "Which of the following is a common test design technique?",
    translation: {
      vi: "Kỹ thuật thiết kế kiểm thử phổ biến nào sau đây?",
    },
    answers: [
      {
        text: "Static testing",
        correct: false,
        translation: {
          vi: "Kiểm thử tĩnh (Static testing)",
        },
      },
      {
        text: "Stress testing",
        correct: false,
        translation: {
          vi: "Kiểm thử chịu tải (Stress testing)",
        },
      },
      {
        text: "Test basis development",
        correct: false,
        translation: {
          vi: "Phát triển cơ sở kiểm thử (Test basis development)",
        },
      },
      {
        text: "State transition testing",
        correct: true,
        translation: {
          vi: "Kiểm thử chuyển đổi trạng thái (State transition testing)",
        },
      },
    ],
  },
  {
    question:
      "You are performing unit testing. What is the main objective of this level of testing?",
    translation: {
      vi: "Bạn đang thực hiện kiểm thử đơn vị (unit testing). Mục tiêu chính của cấp độ kiểm thử này là gì?",
    },
    answers: [
      {
        text: "To find defects in the functional and non-functional behavior of a system",
        correct: false,
        translation: {
          vi: "Tìm lỗi trong hành vi chức năng và phi chức năng của một hệ thống",
        },
      },
      {
        text: "To gain confidence in the fitness for operational use of the software",
        correct: false,
        translation: {
          vi: "Có được sự tin tưởng vào tính phù hợp của phần mềm để sử dụng trong vận hành",
        },
      },
      {
        text: "To reduce risk by ensuring that components and/or systems work correctly",
        correct: false,
        translation: {
          vi: "Giảm rủi ro bằng cách đảm bảo rằng các thành phần và/hoặc hệ thống hoạt động chính xác",
        },
      },
      {
        text: "To build confidence in the quality of the component",
        correct: true,
        translation: {
          vi: "Xây dựng niềm tin vào chất lượng của thành phần",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is one of the tasks performed by the test manager during the test monitoring and control phase?",
    translation: {
      vi: "Điều nào là một trong những nhiệm vụ được thực hiện bởi người quản lý kiểm thử trong giai đoạn giám sát và kiểm soát kiểm thử?",
    },
    answers: [
      {
        text: "Analyzing defect reports",
        correct: false,
        translation: {
          vi: "Phân tích báo cáo lỗi",
        },
      },
      {
        text: "Conducting reviews of test cases",
        correct: false,
        translation: {
          vi: "Tiến hành xem xét các trường hợp kiểm thử",
        },
      },
      {
        text: "Preparing test reports",
        correct: true,
        translation: {
          vi: "Chuẩn bị báo cáo kiểm thử",
        },
      },
      {
        text: "Identifying test objectives",
        correct: false,
        translation: {
          vi: "Xác định mục tiêu kiểm thử",
        },
      },
    ],
  },
  {
    question: "Which of the following is a common objective of testing?",
    translation: {
      vi: "Điều nào sau đây là một mục tiêu phổ biến của kiểm thử?",
    },
    answers: [
      {
        text: "To prevent defects",
        correct: true,
        translation: {
          vi: "Để ngăn ngừa lỗi",
        },
      },
      {
        text: "To gather information for decision making",
        correct: false,
        translation: {
          vi: "Để thu thập thông tin cho việc ra quyết định",
        },
      },
      {
        text: "To satisfy legal or regulatory requirements",
        correct: false,
        translation: {
          vi: "Để đáp ứng các yêu cầu pháp lý hoặc quy định",
        },
      },
      {
        text: "To reduce the likelihood of failures",
        correct: false,
        translation: {
          vi: "Để giảm khả năng xảy ra lỗi",
        },
      },
    ],
  },
  {
    question:
      "You are testing a retail point of sale system. One of the requirements is that if a customer returns an item, the refund must be applied back to the original form of payment (cash, credit card, gift card, etc.). The system must prevent a cashier from overriding this business rule.\nWhich of the following is a non-functional quality characteristic that should be covered by your tests?",
    translation: {
      vi: "Bạn đang kiểm thử một hệ thống điểm bán hàng bán lẻ. Một trong những yêu cầu là nếu khách hàng trả lại một mặt hàng, tiền hoàn lại phải được áp dụng trở lại phương thức thanh toán ban đầu (tiền mặt, thẻ tín dụng, thẻ quà tặng, v.v.). Hệ thống phải ngăn một thu ngân ghi đè quy tắc nghiệp vụ này. Điều nào sau đây là một đặc tính chất lượng phi chức năng nên được bao phủ bởi các bài kiểm thử của bạn?",
    },
    answers: [
      {
        text: "Reliability",
        correct: false,
        translation: {
          vi: "Độ tin cậy (Reliability)",
        },
      },
      {
        text: "Security",
        correct: true,
        translation: {
          vi: "Bảo mật (Security)",
        },
      },
      {
        text: "Efficiency",
        correct: false,
        translation: {
          vi: "Hiệu suất (Efficiency)",
        },
      },
      {
        text: "Usability",
        correct: false,
        translation: {
          vi: "Khả năng sử dụng (Usability)",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is an example of using test results to meet the test objective of reducing the risk of insufficient quality?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về việc sử dụng kết quả kiểm thử để đáp ứng mục tiêu kiểm thử là giảm nguy cơ chất lượng không đủ?",
    },
    answers: [
      {
        text: "Analyzing the defects found at the end of a sprint to improve the next sprint",
        correct: false,
        translation: {
          vi: "Phân tích các lỗi được tìm thấy ở cuối sprint để cải thiện sprint tiếp theo",
        },
      },
      {
        text: "Running regression tests to prevent a release that has known defects",
        correct: true,
        translation: {
          vi: "Chạy các bài kiểm thử hồi quy để ngăn chặn một bản phát hành có các lỗi đã biết",
        },
      },
      {
        text: "Providing a report on which tests passed and which tests failed",
        correct: false,
        translation: {
          vi: "Cung cấp báo cáo về những bài kiểm thử nào đã vượt qua và những bài kiểm thử nào đã thất bại",
        },
      },
      {
        text: "Performing a customer feedback analysis for improvements in the next release",
        correct: false,
        translation: {
          vi: "Thực hiện phân tích phản hồi của khách hàng để cải tiến trong bản phát hành tiếp theo",
        },
      },
    ],
  },
  {
    question: "What characteristic best describes a good test management tool?",
    translation: {
      vi: "Đặc điểm nào mô tả tốt nhất một công cụ quản lý kiểm thử tốt?",
    },
    answers: [
      {
        text: "It reduces the need for the testers to learn about the business domain",
        correct: false,
        translation: {
          vi: "Nó làm giảm nhu cầu kiểm thử viên tìm hiểu về lĩnh vực kinh doanh",
        },
      },
      {
        text: "It automatically generates test scripts for any functional requirement",
        correct: false,
        translation: {
          vi: "Nó tự động tạo tập lệnh kiểm thử cho bất kỳ yêu cầu chức năng nào",
        },
      },
      {
        text: "It allows for traceability between the test plan, test cases, and test results",
        correct: true,
        translation: {
          vi: "Nó cho phép truy xuất nguồn gốc giữa kế hoạch kiểm thử, các trường hợp kiểm thử và kết quả kiểm thử",
        },
      },
      {
        text: "It reduces the need for regression testing after code changes",
        correct: false,
        translation: {
          vi: "Nó làm giảm nhu cầu kiểm thử hồi quy sau khi thay đổi mã",
        },
      },
    ],
  },
  {
    question:
      "A test summary report is being prepared at the end of the system testing phase. Which of the following metrics should be included in the report?",
    translation: {
      vi: "Một báo cáo tóm tắt kiểm thử đang được chuẩn bị vào cuối giai đoạn kiểm thử hệ thống. Chỉ số nào sau đây nên được đưa vào báo cáo?",
    },
    answers: [
      {
        text: "The percentage of test environments that were successfully set up and configured",
        correct: false,
        translation: {
          vi: "Phần trăm môi trường kiểm thử được thiết lập và cấu hình thành công",
        },
      },
      {
        text: "The total number of test conditions identified by the team",
        correct: false,
        translation: {
          vi: "Tổng số điều kiện kiểm thử được xác định bởi đội",
        },
      },
      {
        text: "The team’s confidence level about project completion",
        correct: false,
        translation: {
          vi: "Mức độ tin cậy của đội về việc hoàn thành dự án",
        },
      },
      {
        text: "The percentage of test cases that passed",
        correct: true,
        translation: {
          vi: "Phần trăm các trường hợp kiểm thử đã vượt qua",
        },
      },
    ],
  },
  {
    question:
      "Which of the following statements about testing in different development life cycles is **TRUE**?",
    translation: {
      vi: "Tuyên bố nào sau đây về kiểm thử trong các chu trình phát triển khác nhau là **ĐÚNG**?",
    },
    answers: [
      {
        text: "In a linear life cycle model, acceptance testing is typically performed by end-users.",
        correct: true,
        translation: {
          vi: "Trong mô hình chu trình sống tuyến tính (linear life cycle model), kiểm thử chấp nhận thường được thực hiện bởi người dùng cuối.",
        },
      },
      {
        text: "In an iterative development model, testing activities are grouped together in a phase.",
        correct: false,
        translation: {
          vi: "Trong mô hình phát triển lặp (iterative development model), các hoạt động kiểm thử được nhóm lại với nhau trong một giai đoạn.",
        },
      },
      {
        text: "In a linear life cycle model, the test manager does not need to allocate time for test analysis and design.",
        correct: false,
        translation: {
          vi: "Trong mô hình chu trình sống tuyến tính, người quản lý kiểm thử không cần phân bổ thời gian cho việc phân tích và thiết kế kiểm thử.",
        },
      },
      {
        text: "In an iterative development model, testing activities are limited to a single iteration.",
        correct: false,
        translation: {
          vi: "Trong mô hình phát triển lặp, các hoạt động kiểm thử bị giới hạn trong một lần lặp.",
        },
      },
    ],
  },
  {
    question:
      "Which activity within the basic test process produces test data?",
    translation: {
      vi: "Hoạt động nào trong quy trình kiểm thử cơ bản tạo ra dữ liệu kiểm thử?",
    },
    answers: [
      {
        text: "Test design",
        correct: false,
        translation: {
          vi: "Thiết kế kiểm thử (Test design)",
        },
      },
      {
        text: "Test implementation",
        correct: true,
        translation: {
          vi: "Thực hiện kiểm thử (Test implementation)",
        },
      },
      {
        text: "Test planning",
        correct: false,
        translation: {
          vi: "Lập kế hoạch kiểm thử (Test planning)",
        },
      },
      {
        text: "Test analysis",
        correct: false,
        translation: {
          vi: "Phân tích kiểm thử (Test analysis)",
        },
      },
    ],
  },
  {
    question:
      "The budget and schedule for testing is defined in which document?",
    translation: {
      vi: "Ngân sách và lịch trình kiểm thử được xác định trong tài liệu nào?",
    },
    answers: [
      {
        text: "Test report",
        correct: false,
        translation: {
          vi: "Báo cáo kiểm thử (Test report)",
        },
      },
      {
        text: "Test summary",
        correct: false,
        translation: {
          vi: "Tóm tắt kiểm thử (Test summary)",
        },
      },
      {
        text: "Test charter",
        correct: false,
        translation: {
          vi: "Bản điều lệ kiểm thử (Test charter)",
        },
      },
      {
        text: "Test plan",
        correct: true,
        translation: {
          vi: "Kế hoạch kiểm thử (Test plan)",
        },
      },
    ],
  },
  {
    question:
      "Which of the following statements best describes component testing?",
    translation: {
      vi: "Tuyên bố nào sau đây mô tả tốt nhất kiểm thử thành phần (component testing)?",
    },
    answers: [
      {
        text: "Component testing focuses on testing the interfaces between components or systems.",
        correct: false,
        translation: {
          vi: "Kiểm thử thành phần tập trung vào việc kiểm thử các giao diện giữa các thành phần hoặc hệ thống.",
        },
      },
      {
        text: "Component testing is a type of non-functional testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử thành phần là một loại kiểm thử phi chức năng.",
        },
      },
      {
        text: "Component testing should be performed by an independent test team.",
        correct: false,
        translation: {
          vi: "Kiểm thử thành phần nên được thực hiện bởi một đội kiểm thử độc lập.",
        },
      },
      {
        text: "Component testing is usually performed by the developer who developed the code.",
        correct: true,
        translation: {
          vi: "Kiểm thử thành phần thường được thực hiện bởi nhà phát triển đã phát triển mã.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a critical factor in ensuring good communication within a team?",
    translation: {
      vi: "Điều nào sau đây là một yếu tố quan trọng trong việc đảm bảo giao tiếp tốt trong một đội?",
    },
    answers: [
      {
        text: "Ensuring that team members all work the same location and work the same hours.",
        correct: false,
        translation: {
          vi: "Đảm bảo rằng các thành viên trong đội đều làm việc cùng một địa điểm và làm việc cùng một giờ.",
        },
      },
      {
        text: "Developing a shared understanding of information by using formal reviews.",
        correct: true,
        translation: {
          vi: "Phát triển sự hiểu biết chung về thông tin bằng cách sử dụng các buổi xem xét chính thức.",
        },
      },
      {
        text: "Using automated tools to ensure that all communication is logged and recorded.",
        correct: false,
        translation: {
          vi: "Sử dụng các công cụ tự động để đảm bảo rằng tất cả giao tiếp được ghi lại và ghi âm.",
        },
      },
      {
        text: "Providing formal training to all team members on proper communication techniques.",
        correct: false,
        translation: {
          vi: "Cung cấp đào tạo chính thức cho tất cả các thành viên trong đội về các kỹ thuật giao tiếp thích hợp.",
        },
      },
    ],
  },
  {
    question: "The test execution log is produced during which testing phase?",
    translation: {
      vi: "Nhật ký thực hiện kiểm thử (test execution log) được tạo ra trong giai đoạn kiểm thử nào?",
    },
    answers: [
      {
        text: "Test planning",
        correct: false,
        translation: {
          vi: "Lập kế hoạch kiểm thử",
        },
      },
      {
        text: "Test analysis",
        correct: false,
        translation: {
          vi: "Phân tích kiểm thử",
        },
      },
      {
        text: "Test implementation",
        correct: false,
        translation: {
          vi: "Thực hiện kiểm thử",
        },
      },
      {
        text: "Test execution",
        correct: true,
        translation: {
          vi: "Thực thi kiểm thử",
        },
      },
    ],
  },
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
    question: "What is a main objective of testing?",
    translation: {
      vi: "Mục tiêu chính của kiểm thử là gì?",
    },
    answers: [
      {
        text: "To prove the absence of defects",
        correct: false,
        translation: {
          vi: "Để chứng minh sự vắng mặt của lỗi",
        },
      },
      {
        text: "To reduce the probability of undetected failures",
        correct: true,
        translation: {
          vi: "Để giảm xác suất lỗi không được phát hiện",
        },
      },
      {
        text: "To ensure that the software is 100% defect free",
        correct: false,
        translation: {
          vi: "Để đảm bảo rằng phần mềm không có lỗi 100%",
        },
      },
      {
        text: "To ensure that the software meets the projected delivery date",
        correct: false,
        translation: {
          vi: "Để đảm bảo rằng phần mềm đáp ứng ngày giao hàng dự kiến",
        },
      },
    ],
  },
  {
    question:
      "When using the boundary value analysis (BVA) test design technique for a valid input range of 1 to 500, which of the following is the proper set of test values?",
    translation: {
      vi: "Khi sử dụng kỹ thuật thiết kế kiểm thử phân tích giá trị biên (boundary value analysis - BVA) cho phạm vi đầu vào hợp lệ từ 1 đến 500, tập hợp các giá trị kiểm thử thích hợp nào sau đây?",
    },
    answers: [
      {
        text: "0, 1, 500, 501",
        correct: false,
        translation: {
          vi: "0, 1, 500, 501",
        },
      },
      {
        text: "1, 2, 499, 500",
        correct: false,
        translation: {
          vi: "1, 2, 499, 500",
        },
      },
      {
        text: "0, 1, 250, 499, 500, 501",
        correct: false,
        translation: {
          vi: "0, 1, 250, 499, 500, 501",
        },
      },
      {
        text: "0, 1, 2, 499, 500, 501",
        correct: true,
        translation: {
          vi: "0, 1, 2, 499, 500, 501",
        },
      },
    ],
  },
  {
    question:
      "You are reviewing a document with the intent of giving feedback on the test cases that have been developed. You notice that the test case is missing the steps to execute the test. Which quality characteristic of the test case is affected?",
    translation: {
      vi: "Bạn đang xem xét một tài liệu với ý định đưa ra phản hồi về các trường hợp kiểm thử đã được phát triển. Bạn nhận thấy rằng trường hợp kiểm thử bị thiếu các bước để thực hiện kiểm thử. Đặc tính chất lượng nào của trường hợp kiểm thử bị ảnh hưởng?",
    },
    answers: [
      {
        text: "Completeness",
        correct: true,
        translation: {
          vi: "Tính đầy đủ (Completeness)",
        },
      },
      {
        text: "Consistency",
        correct: false,
        translation: {
          vi: "Tính nhất quán (Consistency)",
        },
      },
      {
        text: "Accuracy",
        correct: false,
        translation: {
          vi: "Tính chính xác (Accuracy)",
        },
      },
      {
        text: "Clarity",
        correct: false,
        translation: {
          vi: "Tính rõ ràng (Clarity)",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a common risk to an Agile team that does not adopt the whole team approach?",
    translation: {
      vi: "Điều nào sau đây là một rủi ro phổ biến đối với một đội Agile không áp dụng phương pháp tiếp cận toàn đội (whole team approach)?",
    },
    answers: [
      {
        text: "The team will not be able to utilize an automated test tool.",
        correct: false,
        translation: {
          vi: "Đội sẽ không thể sử dụng một công cụ kiểm thử tự động.",
        },
      },
      {
        text: "The tester will not be able to participate in defect management activities.",
        correct: false,
        translation: {
          vi: "Kiểm thử viên sẽ không thể tham gia vào các hoạt động quản lý lỗi.",
        },
      },
      {
        text: "The product owner will not be involved in the test strategy.",
        correct: true,
        translation: {
          vi: "Chủ sở hữu sản phẩm (product owner) sẽ không tham gia vào chiến lược kiểm thử.",
        },
      },
      {
        text: "The team will lack technical skills.",
        correct: false,
        translation: {
          vi: "Đội sẽ thiếu kỹ năng kỹ thuật.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is one of the tasks performed by the test manager during the test planning phase?",
    translation: {
      vi: "Điều nào là một trong những nhiệm vụ được thực hiện bởi người quản lý kiểm thử trong giai đoạn lập kế hoạch kiểm thử?",
    },
    answers: [
      {
        text: "Logging test results",
        correct: false,
        translation: {
          vi: "Ghi lại kết quả kiểm thử",
        },
      },
      {
        text: "Conducting static testing",
        correct: false,
        translation: {
          vi: "Tiến hành kiểm thử tĩnh",
        },
      },
      {
        text: "Identifying test objectives",
        correct: true,
        translation: {
          vi: "Xác định mục tiêu kiểm thử",
        },
      },
      {
        text: "Setting up the test environment",
        correct: false,
        translation: {
          vi: "Thiết lập môi trường kiểm thử",
        },
      },
    ],
  },
  {
    question:
      "Which of the following describes the correct order of a formal review?",
    translation: {
      vi: "Điều nào sau đây mô tả thứ tự đúng của một buổi xem xét chính thức (formal review)?",
    },
    answers: [
      {
        text: "Planning > Initiate > Prepare > Review meeting > Rework > Follow-up",
        correct: true,
        translation: {
          vi: "Lập kế hoạch > Khởi động > Chuẩn bị > Họp xem xét > Sửa chữa > Theo dõi",
        },
      },
      {
        text: "Planning > Initiate > Review meeting > Rework > Prepare > Follow-up",
        correct: false,
        translation: {
          vi: "Lập kế hoạch > Khởi động > Họp xem xét > Sửa chữa > Chuẩn bị > Theo dõi",
        },
      },
      {
        text: "Planning > Prepare > Initiate > Review meeting > Rework > Follow-up",
        correct: false,
        translation: {
          vi: "Lập kế hoạch > Chuẩn bị > Khởi động > Họp xem xét > Sửa chữa > Theo dõi",
        },
      },
      {
        text: "Initiate > Planning > Prepare > Review meeting > Rework > Follow-up",
        correct: false,
        translation: {
          vi: "Khởi động > Lập kế hoạch > Chuẩn bị > Họp xem xét > Sửa chữa > Theo dõi",
        },
      },
    ],
  },
  {
    question:
      "Which of the following statements is a valid reason why a tester may choose to utilize an existing tool for a specific testing activity?",
    translation: {
      vi: "Tuyên bố nào sau đây là một lý do hợp lệ tại sao một kiểm thử viên có thể chọn sử dụng một công cụ hiện có cho một hoạt động kiểm thử cụ thể?",
    },
    answers: [
      {
        text: "The tool is being used by the business analyst.",
        correct: false,
        translation: {
          vi: "Công cụ đang được chuyên viên phân tích nghiệp vụ sử dụng.",
        },
      },
      {
        text: "The tool is free and easy to use.",
        correct: false,
        translation: {
          vi: "Công cụ miễn phí và dễ sử dụng.",
        },
      },
      {
        text: "The tool has been tested and certified by ISTQB.",
        correct: false,
        translation: {
          vi: "Công cụ đã được ISTQB kiểm thử và chứng nhận.",
        },
      },
      {
        text: "The tool can be seamlessly integrated with other tools",
        correct: true,
        translation: {
          vi: "Công cụ có thể được tích hợp liền mạch với các công cụ khác",
        },
      },
    ],
  },
];
