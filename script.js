// Lấy các element cần thiết từ HTML
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const translateButton = document.getElementById("translate-btn"); // Nút dịch
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const translatedAnswersElement = document.getElementById("translated-answers"); // THÊM DÒNG NÀY
const translatedQuestionElement = document.getElementById(
  "translated-question"
); // Vùng hiển thị bản dịch câu hỏi
const answerButtonsElement = document.getElementById("answer-buttons");
const confirmButton = document.getElementById("confirm-btn");

let availableQuestions, usedQuestions, currentQuestionIndex;
let score = 0;
let totalQuestions = 0;

// Gắn sự kiện cho các nút
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
translateButton.addEventListener("click", toggleTranslation); // Gắn hàm bật/tắt dịch

// Hàm bắt đầu trò chơi
function startGame() {
  startButton.classList.add("hide"); // Ẩn nút Start
  document.querySelector(".logo-container").classList.add("hide"); // Ẩn logo

  // Hiển thị lại phần câu hỏi và câu trả lời
  questionElement.classList.remove("hide");
  answerButtonsElement.classList.remove("hide");

  // Initialize question pools and score
  availableQuestions = [...questions]; // Create a copy of all questions
  usedQuestions = []; // Reset used questions array
  currentQuestionIndex = 0; // Đặt lại chỉ số câu hỏi
  score = 0; // Đặt lại điểm số
  totalQuestions = 0; // Đặt lại số câu hỏi đã trả lời
  questionContainerElement.classList.remove("hide"); // Hiển thị vùng chứa câu hỏi
  nextButton.classList.remove("hide"); // Hiển thị nút Next
  translateButton.classList.remove("hide"); // Hiển thị nút dịch
  setNextQuestion(); // Hiển thị câu hỏi đầu tiên
}

// Hàm thiết lập câu hỏi tiếp theo
function setNextQuestion() {
  resetState(); // Đặt lại trạng thái trước khi hiển thị câu hỏi mới

  // If we've used all questions, shuffle used questions back into available pool
  if (availableQuestions.length === 0) {
    availableQuestions = [...usedQuestions];
    usedQuestions = [];
  }

  // Get random question from available pool
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const nextQuestion = availableQuestions[randomIndex];

  // Move question from available to used pool
  availableQuestions.splice(randomIndex, 1);
  usedQuestions.push(nextQuestion);

  showQuestion(nextQuestion); // Hiển thị câu hỏi mới
}

// Hàm hiển thị câu hỏi và các lựa chọn trả lời
function showQuestion(question) {
  questionElement.innerText = question.question; // Hiển thị câu hỏi gốc
  translatedQuestionElement.classList.add("hide"); // Ẩn bản dịch ban đầu
  translatedQuestionElement.innerText = ""; // Xóa nội dung bản dịch cũ

  // Determine if question has multiple correct answers
  const multiCorrect = question.answers.filter((a) => a.correct).length > 1;

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    const option = String.fromCharCode(97 + index); // Convert 0,1,2,3 to a,b,c,d
    button.innerText = `${option}. ${answer.text}`; // Thêm a,b,c,d vào trước câu trả lời
    button.classList.add("btn");
    // store correctness on the button (string "true" / undefined)
    if (answer.correct) button.dataset.correct = answer.correct;
    // For multi-correct allow toggling selection; for single-correct still allow selection but treat on confirm
    button.addEventListener("click", (e) =>
      toggleSelectAnswer(e, multiCorrect)
    );
    answerButtonsElement.appendChild(button); // Thêm nút vào vùng chứa
  });

  // Hide confirm until a selection is made
  confirmButton.classList.add("hide");
}

// Hàm đặt lại trạng thái ứng dụng
function resetState() {
  clearStatusClass(document.body); // Xóa trạng thái đúng/sai trên body
  nextButton.classList.add("hide"); // Ẩn nút Next
  confirmButton.classList.add("hide");

  // ẨN CẢ BẢN DỊCH CÂU HỎI VÀ CÂU TRẢ LỜI KHI ĐI ĐẾN CÂU HỎI MỚI
  translatedQuestionElement.classList.add("hide");
  translatedQuestionElement.innerText = "";
  translatedAnswersElement.classList.add("hide");
  translatedAnswersElement.innerText = "";

  // Xóa hộp kết quả cuối cùng nếu có
  const resultBox = questionContainerElement.querySelector(
    'div[style*="pre-line"]'
  );
  if (resultBox) {
    questionContainerElement.removeChild(resultBox);
  }

  // Xóa tất cả các nút trả lời cũ
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// Hàm xử lý khi người dùng chọn câu trả lời
// Toggle selection state for an answer button
function toggleSelectAnswer(e, multiCorrect) {
  const button = e.target;
  // If question is single-correct, behave like selecting one option (toggle selection but deselect others)
  if (!multiCorrect) {
    // Deselect other buttons
    Array.from(answerButtonsElement.children).forEach((b) => {
      if (b !== button) b.classList.remove("selected");
    });
    // Toggle this one
    button.classList.toggle("selected");
  } else {
    // Multiple corrects: just toggle this button
    button.classList.toggle("selected");
  }

  // Show confirm button if any selected
  const anySelected = Array.from(answerButtonsElement.children).some((b) =>
    b.classList.contains("selected")
  );
  if (anySelected) confirmButton.classList.remove("hide");
  else confirmButton.classList.add("hide");
}

// Evaluate selected answers when user clicks Confirm
confirmButton.addEventListener("click", () => {
  totalQuestions++; // Tăng số câu hỏi đã trả lời

  // Disable further selection by disabling the buttons (removing ability to click)
  Array.from(answerButtonsElement.children).forEach((b) => {
    b.disabled = true;
    b.setAttribute("aria-disabled", "true");
    // Remove selected cursor and tabindex
    b.tabIndex = -1;
  });

  // Only show checkmark for correct answers
  const buttons = Array.from(answerButtonsElement.children);
  buttons.forEach((btn) => {
    const isCorrect =
      btn.dataset.correct === "true" || btn.dataset.correct === true;

    // Show checkmark next to correct answers only
    if (isCorrect) {
      btn.classList.add("correct"); // Add checkmark
    }
  }); // Set body status: correct only if user selected exactly all correct answers and no incorrect ones
  const correctButtons = buttons.filter(
    (b) => b.dataset.correct === "true" || b.dataset.correct === true
  );
  const selectedButtons = buttons.filter((b) =>
    b.classList.contains("selected")
  );

  const selectedIsExactlyCorrect =
    selectedButtons.length === correctButtons.length &&
    selectedButtons.every(
      (b) => b.dataset.correct === "true" || b.dataset.correct === true
    );

  // Tăng điểm nếu trả lời đúng
  if (selectedIsExactlyCorrect) {
    score++;
  }

  setStatusClass(document.body, selectedIsExactlyCorrect);

  // After evaluation, hide confirm and show next/restart
  confirmButton.classList.add("hide");
  if (availableQuestions.length > 0) {
    nextButton.classList.remove("hide");
  } else {
    // Ẩn phần câu hỏi và câu trả lời
    questionElement.classList.add("hide");
    answerButtonsElement.classList.add("hide");
    translatedQuestionElement.classList.add("hide");
    translatedAnswersElement.classList.add("hide");

    // Hiển thị kết quả cuối cùng
    const finalScore = Math.round((score / totalQuestions) * 100);
    const resultMessage = `
      🎯 Kết quả bài thi của bạn:
      ✅ Số câu đúng: ${score}/${totalQuestions}
      📊 Tỷ lệ đúng: ${finalScore}%
      ${
        finalScore >= 70
          ? "🎉 Chúc mừng! Bạn đã vượt qua bài thi!"
          : "💪 Cố gắng hơn vào lần sau nhé!"
      }
    `;

    // Tạo và hiển thị hộp kết quả
    const resultBox = document.createElement("div");
    resultBox.style.backgroundColor = "#f8f9fa";
    resultBox.style.padding = "20px";
    resultBox.style.borderRadius = "10px";
    resultBox.style.marginTop = "20px";
    resultBox.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    resultBox.style.whiteSpace = "pre-line";
    resultBox.style.textAlign = "center";
    resultBox.style.fontSize = "1.2em";
    resultBox.textContent = resultMessage;

    // Thêm hộp kết quả vào trước nút Start
    questionContainerElement.appendChild(resultBox);

    startButton.innerText = "Làm lại bài thi";
    startButton.classList.remove("hide");
    translateButton.classList.add("hide");
  }
});

// Hàm đặt lớp CSS trạng thái (đúng/sai)
function setStatusClass(element, correct) {
  clearStatusClass(element); // Xóa các lớp trạng thái cũ
  if (correct) {
    element.classList.add("correct"); // Thêm lớp 'correct' nếu đúng
  } else {
    element.classList.add("wrong"); // Thêm lớp 'wrong' nếu sai
  }
}

// Hàm xóa các lớp CSS trạng thái
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// --- Hàm bật/tắt bản dịch ---
function toggleTranslation() {
  // Get current question from usedQuestions array since it contains the current question
  const currentQuestion = usedQuestions[usedQuestions.length - 1];

  // Kiểm tra xem có câu hỏi hiện tại và bản dịch tiếng Việt không
  if (
    !currentQuestion ||
    !currentQuestion.translation ||
    !currentQuestion.translation.vi
  ) {
    translatedQuestionElement.innerText = "Không có bản dịch cho câu hỏi này.";
    translatedQuestionElement.classList.remove("hide");
    translatedAnswersElement.classList.add("hide"); // Ẩn bản dịch câu trả lời nếu không có bản dịch câu hỏi
    translatedAnswersElement.innerText = "";
    return;
  }

  // Nếu bản dịch đang ẩn (cả câu hỏi và câu trả lời)
  if (translatedQuestionElement.classList.contains("hide")) {
    // HIỂN THỊ BẢN DỊCH CÂU HỎI
    translatedQuestionElement.innerText = `(Câu hỏi dịch): ${currentQuestion.translation.vi}`;
    translatedQuestionElement.classList.remove("hide");

    // HIỂN THỊ BẢN DỊCH CÁC CÂU TRẢ LỜI
    const translatedAnswers = currentQuestion.answers.map((answer, index) => {
      // Thêm chữ cái a, b, c, d vào trước mỗi câu trả lời
      const option = String.fromCharCode(97 + index); // Convert 0,1,2,3 to a,b,c,d
      const translatedText =
        answer.translation && answer.translation.vi
          ? answer.translation.vi
          : answer.text;
      return `${option}. ${translatedText}`;
    });
    // *** THAY ĐỔI DÒNG NÀY ***
    translatedAnswersElement.innerHTML = `(Đáp án dịch):<br>${translatedAnswers.join(
      "<br>"
    )}`; // Nối các bản dịch bằng thẻ <br>
    translatedAnswersElement.classList.remove("hide");
  } else {
    // Nếu bản dịch đang hiển thị, ẨN CẢ CÂU HỎI VÀ CÂU TRẢ LỜI
    translatedQuestionElement.classList.add("hide");
    translatedQuestionElement.innerText = "";
    translatedAnswersElement.classList.add("hide");
    translatedAnswersElement.innerText = "";
  }
}

// Mảng chứa các câu hỏi và câu trả lời đã bao gồm bản dịch
const questions = [
  {
    question:
      "The Agile Manifesto has four core values. Match the Agile value on the left (1-4) with its traditional counterpart on the right (i-iv). \n\n1) Customer collaboration over\n2) Responding to change over\n3) Individuals and interactions over\n4) Working software over\n\ni) processes and tools\nii) following a plan\niii) contract negotiation\niv) comprehensive documentation",
    translation: {
      vi: "Bản Tuyên ngôn Agile (Agile Manifesto) có 4 giá trị cốt lõi. Hãy ghép giá trị Agile ở cột bên trái (1-4) với đối trọng truyền thống của nó ở cột bên phải (i-iv).\n\n1) Hợp tác với khách hàng quan trọng hơn\n2) Phản hồi với thay đổi quan trọng hơn\n3) Cá nhân và tương tác quan trọng hơn\n4) Phần mềm hoạt động tốt quan trọng hơn\n\ni) quy trình và công cụ\nii) tuân thủ một kế hoạch\niii) đàm phán hợp đồng\niv) tài liệu toàn diện",
    },
    answers: [
      {
        text: "1-iii, 2-iv, 3-ii, 4-i",
        correct: false,
        translation: {
          vi: "1-iii, 2-iv, 3-ii, 4-i",
        },
      },
      {
        text: "1-iii, 2-ii, 3-i, 4-iv",
        correct: true,
        translation: {
          vi: "1-iii, 2-ii, 3-i, 4-iv",
        },
      },
      {
        text: "1-iv, 2-ii, 3-i, 4-iii",
        correct: false,
        translation: {
          vi: "1-iv, 2-ii, 3-i, 4-iii",
        },
      },
      {
        text: "1-ii, 2-iii, 3-iv, 4-i",
        correct: false,
        translation: {
          vi: "1-ii, 2-iii, 3-iv, 4-i",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is one of the twelve principles of the Agile Manifesto?",
    translation: {
      vi: "Điều nào sau đây là một trong mười hai nguyên tắc của Bản Tuyên ngôn Agile (Agile Manifesto)?",
    },
    answers: [
      {
        text: "Working software is the primary measure of progress.",
        correct: true,
        translation: {
          vi: "Phần mềm hoạt động là thước đo chính của tiến độ.",
        },
      },
      {
        text: "The most efficient and effective method of conveying information to and within a development team is via comprehensive documentation.",
        correct: false,
        translation: {
          vi: "Phương pháp truyền đạt thông tin hiệu quả nhất trong đội phát triển là thông qua tài liệu toàn diện.",
        },
      },
      {
        text: "Continuous attention to excellent technical design and good design enhances business value.",
        correct: false,
        translation: {
          vi: "Liên tục chú ý đến thiết kế kỹ thuật xuất sắc và thiết kế tốt giúp tăng cường giá trị kinh doanh.",
        },
      },
      {
        text: "Agile processes harness change for the customer's competitive advantage.",
        correct: false,
        translation: {
          vi: "Các quy trình Agile tận dụng sự thay đổi để tạo lợi thế cạnh tranh cho khách hàng.",
        },
      },
    ],
  },
  {
    question:
      "According to the Agile Manifesto, what is the most efficient and effective method of conveying information to and within a development team?",
    translation: {
      vi: "Theo Bản Tuyên ngôn Agile, phương pháp truyền đạt thông tin hiệu quả nhất trong và ngoài đội phát triển là gì?",
    },
    answers: [
      {
        text: "Comprehensive documentation",
        correct: false,
        translation: {
          vi: "Tài liệu toàn diện",
        },
      },
      {
        text: "Pair programming",
        correct: false,
        translation: {
          vi: "Lập trình cặp đôi (Pair programming)",
        },
      },
      {
        text: "Face-to-face conversation",
        correct: true,
        translation: {
          vi: "Trò chuyện trực tiếp (Face-to-face conversation)",
        },
      },
      {
        text: "Automated test cases",
        correct: false,
        translation: {
          vi: "Các trường hợp kiểm thử tự động (Automated test cases)",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is an advantage of having the whole team take responsibility for quality?",
    translation: {
      vi: "Điều nào sau đây là một lợi thế của việc toàn bộ nhóm (whole team) chịu trách nhiệm về chất lượng?",
    },
    answers: [
      {
        text: "Companies no longer need to hire and train software testing specialists",
        correct: false,
        translation: {
          vi: "Các công ty không cần tuyển dụng và đào tạo chuyên gia kiểm thử phần mềm nữa",
        },
      },
      {
        text: "Test automation tasks are now the responsibility of the development team instead of the testing team",
        correct: false,
        translation: {
          vi: "Các nhiệm vụ tự động hóa kiểm thử giờ đây là trách nhiệm của nhóm phát triển thay vì nhóm kiểm thử",
        },
      },
      {
        text: "Role barriers are removed, and team members contribute to project success based on their unique skills and perspectives",
        correct: true,
        translation: {
          vi: "Rào cản vai trò được loại bỏ, và các thành viên trong nhóm đóng góp vào thành công của dự án dựa trên các kỹ năng và quan điểm độc đáo của họ",
        },
      },
      {
        text: "Project costs are lower as there is no need for a dedicated testing team",
        correct: false,
        translation: {
          vi: "Chi phí dự án thấp hơn vì không cần đến một nhóm kiểm thử chuyên biệt",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a benefit of collaboration and active stakeholder participation in an Agile project?",
    translation: {
      vi: "Điều nào sau đây là lợi ích của sự hợp tác và sự tham gia tích cực của các bên liên quan trong một dự án Agile?",
    },
    answers: [
      {
        text: "A reduction in the time needed to develop the business case for the project.",
        correct: false,
        translation: {
          vi: "Giảm thời gian cần thiết để phát triển bản kế hoạch kinh doanh cho dự án.",
        },
      },
      {
        text: "An increase in the likelihood that the developed software will be fit for purpose.",
        correct: true,
        translation: {
          vi: "Tăng khả năng phần mềm được phát triển sẽ phù hợp với mục đích sử dụng.",
        },
      },
      {
        text: "An improvement in the overall test process.",
        correct: false,
        translation: {
          vi: "Cải thiện quy trình kiểm thử tổng thể.",
        },
      },
      {
        text: "A reduction in the time needed to estimate the cost of the project.",
        correct: false,
        translation: {
          vi: "Giảm thời gian cần thiết để ước tính chi phí của dự án.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is an example of 'Sustainable development' in an Agile project?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về 'Phát triển bền vững' trong một dự án Agile?",
    },
    answers: [
      {
        text: "Ensuring the system is environmentally friendly.",
        correct: false,
        translation: {
          vi: "Đảm bảo hệ thống thân thiện với môi trường.",
        },
      },
      {
        text: "Ensuring the Product Owner has a maximum capacity for work.",
        correct: false,
        translation: {
          vi: "Đảm bảo Product Owner có công suất làm việc tối đa.",
        },
      },
      {
        text: "Ensuring the team is able to maintain a constant pace indefinitely.",
        correct: true,
        translation: {
          vi: "Đảm bảo nhóm có thể duy trì tốc độ ổn định vô thời hạn.",
        },
      },
      {
        text: "Ensuring the project maintains a constant level of technical debt.",
        correct: false,
        translation: {
          vi: "Đảm bảo dự án duy trì mức nợ kỹ thuật (technical debt) không đổi.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a good reason for a tester to attend the Daily Standup?",
    translation: {
      vi: "Điều nào sau đây là lý do chính đáng để một tester tham gia cuộc họp Daily Standup?",
    },
    answers: [
      {
        text: "To report which test cases were passed and which failed on the previous day.",
        correct: false,
        translation: {
          vi: "Để báo cáo trường hợp kiểm thử nào đã qua và trường hợp nào thất bại vào ngày hôm trước.",
        },
      },
      {
        text: "To find out if any of the User Stories are suitable for acceptance testing on the current day.",
        correct: true,
        translation: {
          vi: "Để tìm hiểu xem có User Story nào phù hợp cho việc kiểm thử chấp nhận (acceptance testing) trong ngày hiện tại hay không.",
        },
      },
      {
        text: "To ask the Product Owner what to test next.",
        correct: false,
        translation: {
          vi: "Để hỏi Product Owner nên kiểm thử cái gì tiếp theo.",
        },
      },
      {
        text: "To check if any of the other team members can help them with their assigned testing tasks.",
        correct: false,
        translation: {
          vi: "Để kiểm tra xem có thành viên nào khác trong nhóm có thể giúp họ với các nhiệm vụ kiểm thử được giao hay không.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following characteristics best describes the role of an Agile team member?",
    translation: {
      vi: "Đặc điểm nào sau đây mô tả tốt nhất vai trò của một thành viên trong nhóm Agile?",
    },
    answers: [
      {
        text: "A specialist focused on only one type of task, such as only design or only testing.",
        correct: false,
        translation: {
          vi: "Một chuyên gia chỉ tập trung vào một loại nhiệm vụ duy nhất, ví dụ như chỉ thiết kế hoặc chỉ kiểm thử.",
        },
      },
      {
        text: "A person who is adaptable, collaborative, and takes responsibility for quality.",
        correct: true,
        translation: {
          vi: "Một người dễ thích nghi, hợp tác và chịu trách nhiệm về chất lượng.",
        },
      },
      {
        text: "A generalist who may do a variety of tasks, but whose main focus is documentation.",
        correct: false,
        translation: {
          vi: "Một người tổng quát có thể làm nhiều loại nhiệm vụ, nhưng trọng tâm chính là tài liệu.",
        },
      },
      {
        text: "A multi-skilled person who can quickly adapt to working independently on any task.",
        correct: false,
        translation: {
          vi: "Một người đa kỹ năng có thể nhanh chóng thích nghi để làm việc độc lập với bất kỳ nhiệm vụ nào.",
        },
      },
    ],
  },
  {
    question:
      "During an iteration planning meeting, the team is sharing ideas about a User Story. The Product Owner recommends that the customer should have a single screen to enter information. A developer explains that there are technical constraints for this feature, given the amount of information that needs to be collected on the screen. Another developer states there is a performance risk because the information will be stored in an external database.\n\nWhich of the following contributions would best represent the role of the tester in this discussion?",
    translation: {
      vi: "Trong một cuộc họp lập kế hoạch vòng lặp (iteration planning meeting), nhóm đang chia sẻ ý kiến về một User Story. Product Owner khuyên rằng khách hàng nên có một màn hình duy nhất để nhập thông tin. Nhà phát triển giải thích rằng có những hạn chế kỹ thuật đối với tính năng này, do lượng thông tin cần thu thập trên màn hình. Một nhà phát triển khác cho biết có rủi ro về hiệu suất vì thông tin sẽ được lưu trữ trong một cơ sở dữ liệu bên ngoài.\n\nĐóng góp nào sau đây sẽ đại diện tốt nhất cho vai trò của tester trong cuộc thảo luận này?",
    },
    answers: [
      {
        text: "The tester recommends that the screen for the User Story needs to be a single page to reduce the test automation effort.",
        correct: false,
        translation: {
          vi: "Tester khuyên rằng màn hình cho User Story cần phải là một trang duy nhất để giảm nỗ lực tự động hóa kiểm thử.",
        },
      },
      {
        text: "The tester recommends that usability is more important than performance.",
        correct: false,
        translation: {
          vi: "Tester khuyên rằng khả năng sử dụng (usability) quan trọng hơn hiệu suất (performance).",
        },
      },
      {
        text: "The tester recommends that the performance acceptance criteria should be a maximum of 1 second to store the data.",
        correct: false,
        translation: {
          vi: "Tester khuyên rằng tiêu chí chấp nhận về hiệu suất nên là tối đa 1 giây để lưu trữ dữ liệu.",
        },
      },
      {
        text: "The tester recommends that the User Story needs to have testable acceptance criteria.",
        correct: true,
        translation: {
          vi: "Tester khuyên rằng User Story cần có tiêu chí chấp nhận (acceptance criteria) để có thể kiểm thử được.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a common challenge for testers in an Agile project?",
    translation: {
      vi: "Điều nào sau đây là một thách thức phổ biến đối với các tester trong một dự án Agile?",
    },
    answers: [
      {
        text: "Testers are only involved in acceptance testing, which limits their understanding of the user story.",
        correct: false,
        translation: {
          vi: "Tester chỉ tham gia vào kiểm thử chấp nhận, điều này giới hạn sự hiểu biết của họ về câu chuyện người dùng (user story).",
        },
      },
      {
        text: "Testers can be under pressure to complete testing within a short iteration/sprint.",
        correct: true,
        translation: {
          vi: "Tester có thể chịu áp lực phải hoàn thành kiểm thử trong một vòng lặp/sprint ngắn.",
        },
      },
      {
        text: "Testers are unable to participate in requirements-related activities.",
        correct: false,
        translation: {
          vi: "Tester không thể tham gia vào các hoạt động liên quan đến yêu cầu.",
        },
      },
      {
        text: "Testers must focus their attention only on technical testing.",
        correct: false,
        translation: {
          vi: "Tester phải tập trung sự chú ý của họ chỉ vào kiểm thử kỹ thuật.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following activities performed by an Agile tester would best support the principle of 'self-organizing teams'?",
    translation: {
      vi: "Hoạt động nào sau đây được thực hiện bởi một tester Agile sẽ hỗ trợ tốt nhất cho nguyên tắc 'nhóm tự tổ chức'?",
    },
    answers: [
      {
        text: "Communicating test progress during the daily stand-up.",
        correct: false,
        translation: {
          vi: "Thông báo tiến độ kiểm thử trong cuộc họp hàng ngày (daily stand-up).",
        },
      },
      {
        text: "Prioritizing the tester's own work for the iteration.",
        correct: true,
        translation: {
          vi: "Tự ưu tiên công việc của tester cho vòng lặp (iteration).",
        },
      },
      {
        text: "Recommending an architectural change to the team during a sprint review.",
        correct: false,
        translation: {
          vi: "Đề xuất thay đổi kiến trúc cho nhóm trong buổi đánh giá sprint (sprint review).",
        },
      },
      {
        text: "Reporting testing effort metrics for the sprint to the Project Manager.",
        correct: false,
        translation: {
          vi: "Báo cáo số liệu nỗ lực kiểm thử (testing effort metrics) của sprint cho Quản lý Dự án (Project Manager).",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a primary characteristic of a Retrospective?",
    translation: {
      vi: "Đặc điểm chính nào sau đây mô tả về cuộc họp Hồi tưởng (Retrospective)?",
    },
    answers: [
      {
        text: "Stakeholders review and formally accept the tested features.",
        correct: false,
        translation: {
          vi: "Các bên liên quan đánh giá và chấp nhận chính thức các tính năng đã được kiểm thử.",
        },
      },
      {
        text: "The team discusses how to adapt the development process.",
        correct: true,
        translation: {
          vi: "Nhóm thảo luận về cách điều chỉnh quy trình phát triển.",
        },
      },
      {
        text: "The team estimates the effort required for the next iteration.",
        correct: false,
        translation: {
          vi: "Nhóm ước tính nỗ lực cần thiết cho vòng lặp tiếp theo.",
        },
      },
      {
        text: "Individual team members review their own performance and set improvement goals.",
        correct: false,
        translation: {
          vi: "Các thành viên nhóm cá nhân xem xét hiệu suất của bản thân và đặt mục tiêu cải thiện.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is an effective technique for an Agile tester to use when communicating a defect report to a developer?",
    translation: {
      vi: "Kỹ thuật nào sau đây là hiệu quả để một tester Agile sử dụng khi truyền đạt báo cáo lỗi (defect report) cho một developer?",
    },
    answers: [
      {
        text: "Avoid using technical language to ensure the developer understands the context of the defect.",
        correct: false,
        translation: {
          vi: "Tránh sử dụng ngôn ngữ kỹ thuật để đảm bảo developer hiểu được ngữ cảnh của lỗi.",
        },
      },
      {
        text: "Explain the expected behavior and observed behavior in a clear, concise, and non-judgmental way.",
        correct: true,
        translation: {
          vi: "Giải thích hành vi mong đợi và hành vi quan sát được một cách rõ ràng, súc tích và không phán xét.",
        },
      },
      {
        text: "Suggest the best way for the developer to fix the defect.",
        correct: false,
        translation: {
          vi: "Đề xuất cách tốt nhất để developer khắc phục lỗi.",
        },
      },
      {
        text: "Create an automated test case that demonstrates the defect and provide this to the developer.",
        correct: false,
        translation: {
          vi: "Tạo một trường hợp kiểm thử tự động thể hiện lỗi và cung cấp cho developer.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following describes the purpose of a Sprint Review?",
    translation: {
      vi: "Điều nào sau đây mô tả mục đích của Buổi Đánh giá Sprint (Sprint Review)?",
    },
    answers: [
      {
        text: "To allow the Product Owner to inspect the Product Backlog and adjust it based on feedback.",
        correct: false,
        translation: {
          vi: "Để cho phép Product Owner kiểm tra Product Backlog và điều chỉnh dựa trên phản hồi.",
        },
      },
      {
        text: "To allow the team to present the completed work (increment) to the stakeholders for inspection and feedback.",
        correct: true,
        translation: {
          vi: "Để cho phép nhóm trình bày công việc đã hoàn thành (increment) cho các bên liên quan kiểm tra và đưa ra phản hồi.",
        },
      },
      {
        text: "To identify improvements to the way the team works.",
        correct: false,
        translation: {
          vi: "Để xác định các cải tiến cho cách làm việc của nhóm.",
        },
      },
      {
        text: "To allow the team to plan the work for the next Sprint.",
        correct: false,
        translation: {
          vi: "Để cho phép nhóm lập kế hoạch công việc cho Sprint tiếp theo.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a common practice in a Kanban project that helps with managing flow?",
    translation: {
      vi: "Điều nào sau đây là một thực hành phổ biến trong dự án Kanban giúp quản lý luồng công việc (flow)?",
    },
    answers: [
      {
        text: "Maintaining a time-boxed iteration length, such as two weeks.",
        correct: false,
        translation: {
          vi: "Duy trì độ dài vòng lặp có giới hạn thời gian (time-boxed), ví dụ hai tuần.",
        },
      },
      {
        text: "Limiting the Work-In-Progress (WIP) on the board.",
        correct: true,
        translation: {
          vi: "Giới hạn Công việc Đang Tiến hành (WIP) trên bảng.",
        },
      },
      {
        text: "Prioritizing items in the Product Backlog by Business Value.",
        correct: false,
        translation: {
          vi: "Ưu tiên các mục trong Product Backlog theo Giá trị Kinh doanh (Business Value).",
        },
      },
      {
        text: "Holding a Daily Scrum to discuss blockers.",
        correct: false,
        translation: {
          vi: "Tổ chức một Daily Scrum để thảo luận về các vật cản (blockers).",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is the most important reason for a tester to collaborate closely with the Product Owner?",
    translation: {
      vi: "Điều nào sau đây là lý do quan trọng nhất để tester hợp tác chặt chẽ với Product Owner?",
    },
    answers: [
      {
        text: "To ensure the tester is able to deliver a detailed test plan for the whole project.",
        correct: false,
        translation: {
          vi: "Để đảm bảo tester có thể cung cấp một kế hoạch kiểm thử chi tiết cho toàn bộ dự án.",
        },
      },
      {
        text: "To assist with the creation and prioritization of the test backlog.",
        correct: false,
        translation: {
          vi: "Để hỗ trợ việc tạo và ưu tiên test backlog.",
        },
      },
      {
        text: "To clarify acceptance criteria and test coverage before development begins.",
        correct: true,
        translation: {
          vi: "Để làm rõ tiêu chí chấp nhận (acceptance criteria) và phạm vi kiểm thử (test coverage) trước khi quá trình phát triển bắt đầu.",
        },
      },
      {
        text: "To get timely notification of any changes to the project scope.",
        correct: false,
        translation: {
          vi: "Để nhận được thông báo kịp thời về bất kỳ thay đổi nào đối với phạm vi dự án.",
        },
      },
    ],
  },
  {
    question:
      "When working in an Agile team, what is the best way for a tester to ensure that testing is effective?",
    translation: {
      vi: "Khi làm việc trong một nhóm Agile, cách tốt nhất để tester đảm bảo rằng việc kiểm thử là hiệu quả là gì?",
    },
    answers: [
      {
        text: "By performing all the testing activities themselves and refusing to accept help from other team members.",
        correct: false,
        translation: {
          vi: "Bằng cách tự mình thực hiện tất cả các hoạt động kiểm thử và từ chối sự giúp đỡ từ các thành viên khác trong nhóm.",
        },
      },
      {
        text: "By performing testing activities concurrently with the development activities and collaborating with the whole team.",
        correct: true,
        translation: {
          vi: "Bằng cách thực hiện các hoạt động kiểm thử đồng thời với các hoạt động phát triển và hợp tác với toàn bộ nhóm.",
        },
      },
      {
        text: "By maintaining and executing a comprehensive set of regression tests at the end of each sprint.",
        correct: false,
        translation: {
          vi: "Bằng cách duy trì và thực hiện một bộ kiểm thử hồi quy (regression tests) toàn diện vào cuối mỗi sprint.",
        },
      },
      {
        text: "By ensuring that all test cases are automatically executed before they are handed over to the development team.",
        correct: false,
        translation: {
          vi: "Bằng cách đảm bảo rằng tất cả các trường hợp kiểm thử được tự động thực hiện trước khi chúng được giao cho nhóm phát triển.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following test practices is MOST useful for an Agile team to identify defects early?",
    translation: {
      vi: "Thực hành kiểm thử nào sau đây là HỮU ÍCH NHẤT cho một nhóm Agile để xác định lỗi sớm?",
    },
    answers: [
      {
        text: "Risk-based testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử dựa trên rủi ro (Risk-based testing).",
        },
      },
      {
        text: "Session-based testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử dựa trên phiên (Session-based testing).",
        },
      },
      {
        text: "Exploratory testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử thăm dò (Exploratory testing).",
        },
      },
      {
        text: "Reviewing and clarifying requirements.",
        correct: true,
        translation: {
          vi: "Xem xét và làm rõ các yêu cầu (Reviewing and clarifying requirements).",
        },
      },
    ],
  },
  {
    question:
      "How does the role of the tester in an Agile team change compared to a traditional (waterfall) team?",
    translation: {
      vi: "Vai trò của tester trong nhóm Agile thay đổi như thế nào so với nhóm truyền thống (waterfall)?",
    },
    answers: [
      {
        text: "Agile testers are more technical and write more documentation.",
        correct: false,
        translation: {
          vi: "Tester Agile mang tính kỹ thuật hơn và viết nhiều tài liệu hơn.",
        },
      },
      {
        text: "Agile testers are responsible for all the testing, including acceptance testing, user acceptance testing, and system testing.",
        correct: false,
        translation: {
          vi: "Tester Agile chịu trách nhiệm về tất cả các loại kiểm thử, bao gồm kiểm thử chấp nhận, kiểm thử chấp nhận của người dùng và kiểm thử hệ thống.",
        },
      },
      {
        text: "Agile testers are expected to collaborate more, be multi-skilled, and work more frequently with Product Owners and developers.",
        correct: true,
        translation: {
          vi: "Tester Agile được kỳ vọng hợp tác nhiều hơn, đa kỹ năng và làm việc thường xuyên hơn với Product Owners và developers.",
        },
      },
      {
        text: "Agile testers are expected to define the quality of the product and define the 'Definition of Done'.",
        correct: false,
        translation: {
          vi: "Tester Agile được kỳ vọng xác định chất lượng của sản phẩm và xác định 'Định nghĩa Hoàn thành' (Definition of Done).",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a key testing challenge for a tester on a new Agile team that is transitioning from a traditional model?",
    translation: {
      vi: "Điều nào sau đây là một thách thức kiểm thử quan trọng đối với một tester trong một nhóm Agile mới đang chuyển đổi từ mô hình truyền thống?",
    },
    answers: [
      {
        text: "The team will not have enough time to do any exploratory testing.",
        correct: false,
        translation: {
          vi: "Nhóm sẽ không có đủ thời gian để thực hiện bất kỳ kiểm thử thăm dò nào.",
        },
      },
      {
        text: "The Product Owner will not be available to clarify the acceptance criteria.",
        correct: false,
        translation: {
          vi: "Product Owner sẽ không sẵn sàng để làm rõ các tiêu chí chấp nhận.",
        },
      },
      {
        text: "The developers are not used to testing their own work.",
        correct: true,
        translation: {
          vi: "Các developer không quen với việc tự kiểm thử công việc của họ.",
        },
      },
      {
        text: "The tester will not be able to design test cases before the code is ready.",
        correct: false,
        translation: {
          vi: "Tester sẽ không thể thiết kế trường hợp kiểm thử trước khi code sẵn sàng.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following techniques is MOST useful for an Agile tester to use for identifying test conditions and designing test cases for a User Story?",
    translation: {
      vi: "Kỹ thuật nào sau đây là HỮU ÍCH NHẤT để tester Agile sử dụng nhằm xác định điều kiện kiểm thử và thiết kế các trường hợp kiểm thử cho một User Story?",
    },
    answers: [
      {
        text: "Creating test cases from the User Story and acceptance criteria.",
        correct: true,
        translation: {
          vi: "Tạo các trường hợp kiểm thử từ User Story và các tiêu chí chấp nhận (acceptance criteria).",
        },
      },
      {
        text: "Using checklists to guide exploratory testing.",
        correct: false,
        translation: {
          vi: "Sử dụng danh sách kiểm tra (checklists) để hướng dẫn kiểm thử thăm dò (exploratory testing).",
        },
      },
      {
        text: "Creating a traceability matrix between the user story and the test cases.",
        correct: false,
        translation: {
          vi: "Tạo ma trận truy xuất nguồn gốc (traceability matrix) giữa user story và các trường hợp kiểm thử.",
        },
      },
      {
        text: "Implementing test automation to increase the test coverage.",
        correct: false,
        translation: {
          vi: "Thực hiện tự động hóa kiểm thử để tăng phạm vi kiểm thử (test coverage).",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a primary purpose of having a 'Definition of Done'?",
    translation: {
      vi: "Mục đích chính nào sau đây của việc có 'Định nghĩa Hoàn thành' (Definition of Done)?",
    },
    answers: [
      {
        text: "To ensure that the Product Backlog is ordered correctly.",
        correct: false,
        translation: {
          vi: "Để đảm bảo rằng Product Backlog được sắp xếp đúng.",
        },
      },
      {
        text: "To define the activities to be performed by the developers.",
        correct: false,
        translation: {
          vi: "Để xác định các hoạt động được thực hiện bởi các developer.",
        },
      },
      {
        text: "To describe the quality criteria that must be met for the increment to be released.",
        correct: true,
        translation: {
          vi: "Để mô tả các tiêu chí chất lượng phải được đáp ứng để phiên bản tăng trưởng (increment) được phát hành.",
        },
      },
      {
        text: "To provide a template for creating User Stories.",
        correct: false,
        translation: {
          vi: "Để cung cấp một mẫu cho việc tạo User Stories.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST approach for managing and organizing test-related information and artifacts in an Agile project?",
    translation: {
      vi: "Cách tiếp cận TỐT NHẤT nào sau đây để quản lý và tổ chức thông tin và tài liệu liên quan đến kiểm thử trong một dự án Agile?",
    },
    answers: [
      {
        text: "Store all test cases and test data in a version-controlled repository to ensure traceability.",
        correct: false,
        translation: {
          vi: "Lưu trữ tất cả các trường hợp kiểm thử và dữ liệu kiểm thử trong một kho lưu trữ được kiểm soát phiên bản (version-controlled repository) để đảm bảo khả năng truy xuất nguồn gốc (traceability).",
        },
      },
      {
        text: "Keep all test-related information in a single, comprehensive test plan that is maintained by the tester.",
        correct: false,
        translation: {
          vi: "Giữ tất cả thông tin liên quan đến kiểm thử trong một kế hoạch kiểm thử duy nhất, toàn diện do tester duy trì.",
        },
      },
      {
        text: "Use the same tools and conventions as the rest of the team to store and organize test-related information.",
        correct: true,
        translation: {
          vi: "Sử dụng cùng các công cụ và quy ước với phần còn lại của nhóm để lưu trữ và tổ chức thông tin liên quan đến kiểm thử.",
        },
      },
      {
        text: "Focus on automating all test documentation, rather than manual documentation.",
        correct: false,
        translation: {
          vi: "Tập trung vào việc tự động hóa tất cả tài liệu kiểm thử, thay vì tài liệu thủ công.",
        },
      },
    ],
  },
  {
    question: "How does risk-based testing align with Agile principles?",
    translation: {
      vi: "Kiểm thử dựa trên rủi ro (risk-based testing) phù hợp với các nguyên tắc Agile như thế nào?",
    },
    answers: [
      {
        text: "It focuses on testing areas that have the highest technical complexity.",
        correct: false,
        translation: {
          vi: "Nó tập trung vào việc kiểm thử các khu vực có độ phức tạp kỹ thuật cao nhất.",
        },
      },
      {
        text: "It ensures that only the features requested by the Product Owner are tested.",
        correct: false,
        translation: {
          vi: "Nó đảm bảo rằng chỉ các tính năng được yêu cầu bởi Product Owner mới được kiểm thử.",
        },
      },
      {
        text: "It focuses on delivering business value by prioritizing the testing of the most important and high-risk features.",
        correct: true,
        translation: {
          vi: "Nó tập trung vào việc mang lại giá trị kinh doanh bằng cách ưu tiên kiểm thử các tính năng quan trọng và có rủi ro cao nhất.",
        },
      },
      {
        text: "It eliminates the need for any regression testing, thus saving time in an iteration.",
        correct: false,
        translation: {
          vi: "Nó loại bỏ nhu cầu về bất kỳ kiểm thử hồi quy nào, từ đó tiết kiệm thời gian trong một vòng lặp.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a primary benefit of test automation in an Agile project?",
    translation: {
      vi: "Điều nào sau đây là một lợi ích chính của tự động hóa kiểm thử trong một dự án Agile?",
    },
    answers: [
      {
        text: "Automated tests can serve as technical documentation for the system.",
        correct: false,
        translation: {
          vi: "Các kiểm thử tự động có thể đóng vai trò là tài liệu kỹ thuật cho hệ thống.",
        },
      },
      {
        text: "The team can create a large suite of regression tests that can be run quickly and repeatedly.",
        correct: true,
        translation: {
          vi: "Nhóm có thể tạo một bộ lớn các kiểm thử hồi quy (regression tests) có thể chạy nhanh chóng và lặp lại.",
        },
      },
      {
        text: "Test automation is generally less expensive than manual testing over the whole project life cycle.",
        correct: false,
        translation: {
          vi: "Tự động hóa kiểm thử thường ít tốn kém hơn kiểm thử thủ công trong suốt vòng đời dự án.",
        },
      },
      {
        text: "It allows testers to focus on testing only new features in each iteration.",
        correct: false,
        translation: {
          vi: "Nó cho phép tester tập trung vào việc chỉ kiểm thử các tính năng mới trong mỗi vòng lặp.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following should be considered the HIGHEST priority when selecting tests for automation?",
    translation: {
      vi: "Điều nào sau đây nên được coi là ưu tiên CAO NHẤT khi chọn các kiểm thử để tự động hóa?",
    },
    answers: [
      {
        text: "Tests that verify new features in the current iteration.",
        correct: false,
        translation: {
          vi: "Các kiểm thử xác minh các tính năng mới trong vòng lặp hiện tại.",
        },
      },
      {
        text: "Tests that cover the highest business risk areas of the system.",
        correct: false,
        translation: {
          vi: "Các kiểm thử bao gồm các khu vực rủi ro kinh doanh cao nhất của hệ thống.",
        },
      },
      {
        text: "Tests that need to be run repeatedly to confirm the existing functionality still works.",
        correct: true,
        translation: {
          vi: "Các kiểm thử cần được chạy lặp đi lặp lại để xác nhận chức năng hiện có vẫn hoạt động.",
        },
      },
      {
        text: "Tests that are easy to automate and require minimal maintenance.",
        correct: false,
        translation: {
          vi: "Các kiểm thử dễ tự động hóa và yêu cầu bảo trì tối thiểu.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a key risk of a fully manual regression testing approach in an Agile project?",
    translation: {
      vi: "Điều nào sau đây là rủi ro chính của một phương pháp kiểm thử hồi quy hoàn toàn thủ công trong một dự án Agile?",
    },
    answers: [
      {
        text: "The cost of testing will be too high.",
        correct: false,
        translation: {
          vi: "Chi phí kiểm thử sẽ quá cao.",
        },
      },
      {
        text: "The test team will lack the necessary technical skills.",
        correct: false,
        translation: {
          vi: "Nhóm kiểm thử sẽ thiếu các kỹ năng kỹ thuật cần thiết.",
        },
      },
      {
        text: "It may lead to poor test coverage for newly developed features.",
        correct: false,
        translation: {
          vi: "Nó có thể dẫn đến phạm vi kiểm thử kém cho các tính năng mới được phát triển.",
        },
      },
      {
        text: "The elapsed time needed for regression testing at the end of each iteration may increase, potentially delaying releases.",
        correct: true,
        translation: {
          vi: "Thời gian cần thiết cho việc kiểm thử hồi quy vào cuối mỗi vòng lặp có thể tăng lên, có khả năng làm chậm trễ việc phát hành.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following describes the PRIMARY focus of the first level of the Test Automation Pyramid (Unit Tests)?",
    translation: {
      vi: "Điều nào sau đây mô tả trọng tâm CHÍNH của cấp độ đầu tiên của Kim tự tháp Tự động hóa Kiểm thử (Test Automation Pyramid) - Kiểm thử Đơn vị (Unit Tests)?",
    },
    answers: [
      {
        text: "Testing the whole system from a user's perspective.",
        correct: false,
        translation: {
          vi: "Kiểm thử toàn bộ hệ thống từ góc độ người dùng.",
        },
      },
      {
        text: "Testing the individual components (e.g., classes or methods) of the code.",
        correct: true,
        translation: {
          vi: "Kiểm thử các thành phần riêng lẻ (ví dụ: các lớp hoặc phương thức) của mã code.",
        },
      },
      {
        text: "Testing the interactions between major parts of the system.",
        correct: false,
        translation: {
          vi: "Kiểm thử sự tương tác giữa các phần chính của hệ thống.",
        },
      },
      {
        text: "Testing the user interface and performance of the system.",
        correct: false,
        translation: {
          vi: "Kiểm thử giao diện người dùng và hiệu suất của hệ thống.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a key benefit of using Behavior-Driven Development (BDD) in an Agile project?",
    translation: {
      vi: "Điều nào sau đây là một lợi ích chính của việc sử dụng Phát triển Hướng hành vi (Behavior-Driven Development - BDD) trong một dự án Agile?",
    },
    answers: [
      {
        text: "It ensures that all testing is automated, thus saving time and cost.",
        correct: false,
        translation: {
          vi: "Nó đảm bảo rằng tất cả việc kiểm thử được tự động hóa, do đó tiết kiệm thời gian và chi phí.",
        },
      },
      {
        text: "It facilitates collaboration between the business, development, and testing teams using a common language.",
        correct: true,
        translation: {
          vi: "Nó tạo điều kiện hợp tác giữa các nhóm kinh doanh, phát triển và kiểm thử bằng cách sử dụng một ngôn ngữ chung.",
        },
      },
      {
        text: "It focuses the testing effort primarily on non-functional quality characteristics.",
        correct: false,
        translation: {
          vi: "Nó tập trung nỗ lực kiểm thử chủ yếu vào các đặc tính chất lượng phi chức năng.",
        },
      },
      {
        text: "It eliminates the need for any formal acceptance criteria for User Stories.",
        correct: false,
        translation: {
          vi: "Nó loại bỏ nhu cầu về bất kỳ tiêu chí chấp nhận chính thức nào cho User Stories.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is an example of an 'Agile Testing Quadrant 2' activity?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về hoạt động 'Agile Testing Quadrant 2'?",
    },
    answers: [
      {
        text: "Unit testing and refactoring.",
        correct: false,
        translation: {
          vi: "Kiểm thử đơn vị (Unit testing) và tái cấu trúc (refactoring).",
        },
      },
      {
        text: "Exploratory testing and scenario-based testing.",
        correct: true,
        translation: {
          vi: "Kiểm thử thăm dò (Exploratory testing) và kiểm thử dựa trên kịch bản (scenario-based testing).",
        },
      },
      {
        text: "Load testing and security testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử tải (Load testing) và kiểm thử bảo mật (security testing).",
        },
      },
      {
        text: "User acceptance testing and beta testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử chấp nhận của người dùng (User acceptance testing) và kiểm thử beta.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is an example of an 'Agile Testing Quadrant 3' activity?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về hoạt động 'Agile Testing Quadrant 3'?",
    },
    answers: [
      {
        text: "Testing user experience (UX) and usability.",
        correct: false,
        translation: {
          vi: "Kiểm thử trải nghiệm người dùng (UX) và khả năng sử dụng (usability).",
        },
      },
      {
        text: "Automating acceptance tests using BDD.",
        correct: false,
        translation: {
          vi: "Tự động hóa kiểm thử chấp nhận (acceptance tests) bằng cách sử dụng BDD.",
        },
      },
      {
        text: "Exploratory testing with stakeholders.",
        correct: false,
        translation: {
          vi: "Kiểm thử thăm dò (Exploratory testing) với các bên liên quan.",
        },
      },
      {
        text: "Usability testing and alpha/beta testing.",
        correct: true,
        translation: {
          vi: "Kiểm thử khả năng sử dụng (Usability testing) và kiểm thử alpha/beta.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following test types is typically found in 'Agile Testing Quadrant 4'?",
    translation: {
      vi: "Loại kiểm thử nào sau đây thường được tìm thấy trong 'Agile Testing Quadrant 4'?",
    },
    answers: [
      {
        text: "Functional acceptance testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử chấp nhận chức năng (Functional acceptance testing).",
        },
      },
      {
        text: "Security testing.",
        correct: true,
        translation: {
          vi: "Kiểm thử bảo mật (Security testing).",
        },
      },
      {
        text: "Unit testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử đơn vị (Unit testing).",
        },
      },
      {
        text: "Examples testing.",
        correct: false,
        translation: {
          vi: "Kiểm thử theo ví dụ (Examples testing).",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a primary goal of Acceptance Test-Driven Development (ATDD)?",
    translation: {
      vi: "Mục tiêu chính nào sau đây của Phát triển Hướng kiểm thử Chấp nhận (Acceptance Test-Driven Development - ATDD)?",
    },
    answers: [
      {
        text: "To remove the need for human testers by automating all acceptance tests.",
        correct: false,
        translation: {
          vi: "Để loại bỏ nhu cầu về tester con người bằng cách tự động hóa tất cả kiểm thử chấp nhận.",
        },
      },
      {
        text: "To help the team understand the true requirements of the business before development begins.",
        correct: true,
        translation: {
          vi: "Để giúp nhóm hiểu được các yêu cầu thực sự của nghiệp vụ trước khi quá trình phát triển bắt đầu.",
        },
      },
      {
        text: "To ensure that all code is written with 100% code coverage.",
        correct: false,
        translation: {
          vi: "Để đảm bảo rằng tất cả code được viết với độ bao phủ mã (code coverage) 100%.",
        },
      },
      {
        text: "To allow the Product Owner to approve the completion of each User Story during the Daily Standup.",
        correct: false,
        translation: {
          vi: "Để cho phép Product Owner phê duyệt việc hoàn thành mỗi User Story trong cuộc họp Daily Standup.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following BEST describes the primary output of using Test-Driven Development (TDD) at the code level?",
    translation: {
      vi: "Điều nào sau đây mô tả TỐT NHẤT đầu ra chính của việc sử dụng Phát triển Hướng kiểm thử (Test-Driven Development - TDD) ở cấp độ mã code?",
    },
    answers: [
      {
        text: "A comprehensive test plan that lists all unit tests to be automated.",
        correct: false,
        translation: {
          vi: "Một kế hoạch kiểm thử toàn diện liệt kê tất cả các kiểm thử đơn vị cần được tự động hóa.",
        },
      },
      {
        text: "High-quality code that is unit tested and designed for testability.",
        correct: true,
        translation: {
          vi: "Mã code chất lượng cao, đã được kiểm thử đơn vị và được thiết kế để dễ kiểm thử (testability).",
        },
      },
      {
        text: "A list of acceptance criteria for all User Stories in the Product Backlog.",
        correct: false,
        translation: {
          vi: "Một danh sách các tiêu chí chấp nhận cho tất cả User Stories trong Product Backlog.",
        },
      },
      {
        text: "A detailed defect report for each bug found during the coding process.",
        correct: false,
        translation: {
          vi: "Một báo cáo lỗi chi tiết cho mỗi lỗi được tìm thấy trong quá trình coding.",
        },
      },
    ],
  },
  {
    question: "Which of the following is an example of 'Exploratory testing'?",
    translation: {
      vi: "Điều nào sau đây là một ví dụ về 'Kiểm thử thăm dò' (Exploratory testing)?",
    },
    answers: [
      {
        text: "Designing test cases based on the requirements specification before any code is written.",
        correct: false,
        translation: {
          vi: "Thiết kế các trường hợp kiểm thử dựa trên đặc tả yêu cầu trước khi bất kỳ mã code nào được viết.",
        },
      },
      {
        text: "An experienced tester spontaneously designing and executing tests to discover bugs and learn about the system.",
        correct: true,
        translation: {
          vi: "Một tester có kinh nghiệm tự phát thiết kế và thực hiện các kiểm thử để khám phá lỗi và tìm hiểu về hệ thống.",
        },
      },
      {
        text: "Running a comprehensive suite of automated tests on the whole system to check the latest build.",
        correct: false,
        translation: {
          vi: "Chạy một bộ kiểm thử tự động toàn diện trên toàn bộ hệ thống để kiểm tra bản dựng (build) mới nhất.",
        },
      },
      {
        text: "Performing a test coverage analysis to determine the percentage of requirements that have been tested.",
        correct: false,
        translation: {
          vi: "Thực hiện phân tích phạm vi kiểm thử để xác định tỷ lệ phần trăm các yêu cầu đã được kiểm thử.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a key characteristic of 'Session-Based Test Management'?",
    translation: {
      vi: "Đặc điểm chính nào sau đây của 'Quản lý Kiểm thử Dựa trên Phiên' (Session-Based Test Management)?",
    },
    answers: [
      {
        text: "Testing is structured using test scripts that detail every test step.",
        correct: false,
        translation: {
          vi: "Kiểm thử được cấu trúc bằng cách sử dụng các kịch bản kiểm thử (test scripts) mô tả chi tiết từng bước kiểm thử.",
        },
      },
      {
        text: "Testing is time-boxed and includes a charter, execution, and debriefing.",
        correct: true,
        translation: {
          vi: "Kiểm thử được giới hạn thời gian (time-boxed) và bao gồm một điều lệ (charter), việc thực hiện (execution) và báo cáo tóm tắt (debriefing).",
        },
      },
      {
        text: "Testing is primarily focused on functional areas with high business risk.",
        correct: false,
        translation: {
          vi: "Kiểm thử chủ yếu tập trung vào các khu vực chức năng có rủi ro kinh doanh cao.",
        },
      },
      {
        text: "Testing is conducted collaboratively by developers and testers.",
        correct: false,
        translation: {
          vi: "Kiểm thử được tiến hành hợp tác bởi các developer và tester.",
        },
      },
    ],
  },
  {
    question:
      'Given the following User Story: "An online application calculates shipping costs for purchased goods to customers, based on the following criteria: Standard shipping cost for under 6 items; Shipping fee of $5 for 6-10 items; Free shipping for over 10 items".\n\nWhich of the following black box test design techniques is best for this User Story?',
    translation: {
      vi: 'Cho User Story sau: "Một ứng dụng trực tuyến tính phí vận chuyển hàng hóa đã mua cho khách hàng, dựa trên các tiêu chí sau: Chi phí vận chuyển tiêu chuẩn cho dưới 6 mặt hàng; Phí vận chuyển là $5 cho 6-10 mặt hàng; Miễn phí vận chuyển cho hơn 10 mặt hàng".\n\nKỹ thuật thiết kế kiểm thử hộp đen (black box test design technique) nào sau đây là tốt nhất cho User Story này?',
    },
    answers: [
      {
        text: "State Transition testing: Testing the following states - browse, log in, select, purchase, confirm and exit.",
        correct: false,
        translation: {
          vi: "Kiểm thử Chuyển đổi Trạng thái (State Transition testing): Kiểm thử các trạng thái sau - duyệt, đăng nhập, chọn, mua, xác nhận và thoát.",
        },
      },
      {
        text: "Decision tables: Testing the following conditions - User logged in; At least 1 item in the basket; Purchase confirmed; Funding accepted; with the resulting action being - Delivery.",
        correct: false,
        translation: {
          vi: "Bảng Quyết định (Decision tables): Kiểm thử các điều kiện sau - Người dùng đăng nhập; Có ít nhất 1 mặt hàng trong giỏ hàng; Xác nhận mua hàng; Nguồn tiền được chấp thuận; với hành động kết quả là - Giao hàng.",
        },
      },
      {
        text: "Boundary Value Analysis: Testing the following inputs - 0, 5, 6, 10, 11, max.",
        correct: true,
        translation: {
          vi: "Phân tích Giá trị Biên (Boundary Value Analysis): Kiểm thử các đầu vào sau - 0, 5, 6, 10, 11, max.",
        },
      },
      {
        text: "Use Case Testing: Actor = customer; Precondition = customer logged in, selected and purchased goods; Postcondition = goods shipped.",
        correct: false,
        translation: {
          vi: "Kiểm thử Trường hợp Sử dụng (Use Case Testing): Tác nhân = khách hàng; Điều kiện tiên quyết = khách hàng đăng nhập, chọn và mua hàng; Điều kiện hậu kỳ = hàng được vận chuyển.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is a common challenge when using Specification by Example (SBE) in an Agile project?",
    translation: {
      vi: "Điều nào sau đây là một thách thức phổ biến khi sử dụng Đặc tả theo Ví dụ (Specification by Example - SBE) trong một dự án Agile?",
    },
    answers: [
      {
        text: "The business stakeholders may not be available to define the examples.",
        correct: true,
        translation: {
          vi: "Các bên liên quan nghiệp vụ có thể không sẵn sàng để định nghĩa các ví dụ.",
        },
      },
      {
        text: "The test tool to implement SBE may be too expensive.",
        correct: false,
        translation: {
          vi: "Công cụ kiểm thử để thực hiện SBE có thể quá đắt.",
        },
      },
      {
        text: "The examples may not cover all the boundary values, thus reducing test coverage.",
        correct: false,
        translation: {
          vi: "Các ví dụ có thể không bao phủ tất cả các giá trị biên, từ đó làm giảm phạm vi kiểm thử.",
        },
      },
      {
        text: "The team members may not be interested in sharing a common language.",
        correct: false,
        translation: {
          vi: "Các thành viên nhóm có thể không quan tâm đến việc chia sẻ một ngôn ngữ chung.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is the MOST appropriate technique for estimating testing effort for User Stories in an Agile environment?",
    translation: {
      vi: "Kỹ thuật nào sau đây là PHÙ HỢP NHẤT để ước tính nỗ lực kiểm thử cho User Stories trong môi trường Agile?",
    },
    answers: [
      {
        text: "Analogy-based estimation using past project data.",
        correct: false,
        translation: {
          vi: "Ước tính dựa trên phép loại suy (Analogy-based estimation) bằng cách sử dụng dữ liệu dự án cũ.",
        },
      },
      {
        text: "Planning Poker to gain consensus on the relative size of User Stories.",
        correct: true,
        translation: {
          vi: "Planning Poker để đạt được sự đồng thuận về kích thước tương đối của User Stories.",
        },
      },
      {
        text: "Expert judgment based on the tester's experience on the current project.",
        correct: false,
        translation: {
          vi: "Đánh giá của chuyên gia dựa trên kinh nghiệm của tester trong dự án hiện tại.",
        },
      },
      {
        text: "Estimation based on a percentage of the development effort.",
        correct: false,
        translation: {
          vi: "Ước tính dựa trên tỷ lệ phần trăm của nỗ lực phát triển.",
        },
      },
    ],
  },
  {
    question:
      "Which of the following is the BEST Agile testing metric for measuring progress towards the 'Definition of Done'?",
    translation: {
      vi: "Số liệu kiểm thử Agile nào sau đây là TỐT NHẤT để đo lường tiến độ hướng tới 'Định nghĩa Hoàn thành' (Definition of Done)?",
    },
    answers: [
      {
        text: "The number of defects found per day.",
        correct: false,
        translation: {
          vi: "Số lượng lỗi được tìm thấy mỗi ngày.",
        },
      },
      {
        text: "The percentage of automated test cases.",
        correct: false,
        translation: {
          vi: "Phần trăm các trường hợp kiểm thử được tự động hóa.",
        },
      },
      {
        text: "The number of automated regression test failures.",
        correct: false,
        translation: {
          vi: "Số lần kiểm thử hồi quy tự động thất bại.",
        },
      },
      {
        text: "The cumulative number of User Stories that have been passed and accepted.",
        correct: true,
        translation: {
          vi: "Tổng số tích lũy (cumulative number) các User Stories đã được thông qua và chấp nhận.",
        },
      },
    ],
  },
];
