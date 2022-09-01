const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Nhiệm vụ chính của một hệ điều hành của máy tính là',
    answers: [
      { text: 'Ra lệnh cho các tài nguyên', correct: false },
      { text: 'Cung cấp các tiện ích', correct: false },
      { text: 'Quản lý tài nguyên ', correct: true},
      { text: 'Màn hình', correct: false}
    ]
  },
  {
    question: 'Hệ điều hành là hệ thống chương trình phần mềm',
    answers: [
      { text: 'Quản lý bộ nhớ và thiết bị ngoại vi', correct: false },
      { text: 'Quản lý các tài nguyên trên máy tính ', correct: false },
      { text: 'Điều khiển thực hiện phần mềm', correct: true },
      { text: 'Hỗ trợ người dùng thực hiện một file bất kỳ', correct: false }
    ]
  },
  {
    question: 'Khi khởi động máy tính, hệ điều hành được nạp vào:',
    answers: [
      { text: 'Bộ nhớ chuyên dụng', correct: false },
      { text: 'Bộ nhớ ROM', correct: false },
      { text: 'Bộ nhớ ngoài', correct: false },
      { text: 'Bộ nhớ RAM ', correct: true }
    ]
  },
  {
    question: 'Chỉ ra phương án nào không phải là tầng của hệ điều hành',
    answers: [
      { text: 'Kernel ', correct: false },
      { text: 'Shell', correct: false },
      { text: 'Đoạn găng', correct: true },
      { text: 'Chương trình ứng dụng ', correct: false }
    ]
  },
  {
    question: 'Đâu là tên của phần mềm mà giải quyết vấn đề thực thi của máy tính thực sự chứ không phải các vấn đề máy tính',
    answers: [
      { text: 'Chương trình nguồn ', correct: false },
      { text: 'Chương trình hệ thống', correct: true },
      { text: 'Chương trình đối tượng', correct: false },
      { text: 'Hệ điều hành  ', correct: false }
    ]
  },
  {
    question: 'Trong phân loại, hệ điều hành được cài đặt trên hệ thống nhiều vi xử lý nhằm chia sẻ dữ liệu, đường truyền, các thiết bị ngoại vi… thuộc dạng:',
    answers: [
      { text: 'Hệ điều hành xử lý đa nhiệm', correct: false },
      { text: 'Hệ điều hành xử lý thời gian thực', correct: false },
      { text: 'Hệ điều hành xử lý đa chương', correct: false },
      { text: 'Hệ điều hành xử lý phân tán  ', correct: true }
    ]
  },
  {
    question: 'Đâu là thành phần giám sát (supervisor) các hoạt động của máy tính',
    answers: [
      { text: 'Hệ điều hành ', correct: true },
      { text: 'CPU', correct: false },
      { text: 'Đơn vị điều khiển', correct: false },
      { text: 'Chương trình ứng dụng', correct: false }
    ]
  },
  {
    question: 'Hãy xác định đặc điểm đúng với hệ điều hành đa nhiệm:',
    answers: [
      { text: 'Quản lý tiến trình phân tán', correct: false },
      { text: 'Quản lý tiến trình theo chia sẻ thời gian', correct: true },
      { text: 'Quản lý tiến trình theo thời gian thực ', correct: false },
      { text: 'Quản lý tiến trình theo lô', correct: false }
    ]
  },


  {
    question: 'Việc áp dụng nguyên tắc tương đối trong định vị khi xây dựng hệ điều hành cần phải',
    answers: [
      {text: 'Sử dụng bộ nhớ hiệu quả hơn', correct: true},
      {text: 'Dễ dàng bảo vệ chương trình và dữ liệu.', correct: false},
      {text: 'Tồn tại cơ chế liên kết các Modul độc lập', correct: false},
      {text: 'Cho phép người dùn chọn giải pháp tối ưu với bài toán của mình', correct: false }

    ]
  },

  {
    question: 'Kỹ thuật nào ra đời do một công việc duy nhất không thể duy trì trạng thái bận của cả CPU và các thiết bị vào ra',
    answers: [
      {text: 'Lập lịch', correct: false},
      {text: 'SPOOLIing', correct: false},
      {text: 'Multiprogramming', correct: true},
      {text: 'Chia sẻ thời gian (time-sharing)',correct: false}
    ]
  },

  {
    question: 'Khi có nhiều tiến trình muốn sử dụng tài nguyên găng thì',
    answers: [
      {text: 'Không có tiến trình chiếm dụng tài nguyên ', correct: true},
      {text: 'Mô phỏng tài nguyên, và phân phối tài nguyên mô phỏng cho tiến trình', correct: false},
      {text: 'Sử dụng 1 byte trong bộ nhớ chung làm khóa cho tài nguyên', correct: false},
      {text: 'Phân phối tài nguyên cho tất cả các tiến trình', correct: false}
    ]
  },

  {
    question: 'Hãy chọn phát biểu nào sai: Trong điều độ tiến trình, Hề điều hành cần đảm bảo',
    answers: [
      {text: 'Xác định thời gian liên tục hợp lý để gắn Processor logic cho Processor vật lý ', correct: true},
      {text: 'Mỗi tiến trình cần được gắn một thứ tự ưu tiên', correct: false},
      {text: 'Mọi tiến trình phải được phục vụ bình đẳng như nhau', correct: false},
      {text: 'Tất cả đều sai', correct: false}

    ]
  },

  {
    question: 'Hành động nào Hệ điều hành sẽ thực thi một tiến trình mới sinh ra',
    answers: [
      {text: 'Phân phối ngay các tài nguyên mà tiến trình yêu cầu', correct:false},
      {text: 'Phân phối CPU ngay cho tiến trình', correct:false},
      {text: 'Đưa tiến trình vào trạng thái thực hiện', correct:false},
      {text: 'Tạo ngay khối mô tả tiến trình (PCB) để quản lý ', correct:true}

    ]
  },

  {
    question: 'Trong công cụ điều độ cấp cao, chương trình thư ký',
    answers: [
      {text: 'Được gắn với duy nhất một tiến trình', correct: true},
      {text: 'Dùng để điều độ tiến trình ', correct: false},
      {text: 'Được gắn với tất cả tiến trình', correct: false},
      {text: 'Dùng để quản lý tài nguyên', correct: false}
    ]
  },

  {
    question: 'Một tiến trình ở trạng thái khoá do',
    answers: [
      {text: 'Đang chờ một sự kiện nào đó chưa xảy ra', correct: false},
      {text: 'Không có chế độ phân phối lại tài nguyên', correct: false},
      {text: 'Đang chờ nhập xuất', correct: false},
      {text: 'Tất cả đều đúng ', correct: true}
    ]
  },

  {
    question: 'Khi điều độ tiến trình, đối với phương pháp khóa trong, các tiến trình',
    answers: [
      {text: 'Sử dụng 1 Byte trong vùng nhớ chung làm khóa toàn cục', correct: false},
      {text: 'Sử dụng 1 byte trong vùng nhớ riêng làm khóa', correct: false},
      {text: 'Sử dụng 1 Byte trong vùng nhớ riêng làm khóa toàn cục', correct: false},
      {text: 'Sử dụng 1 byte trong vùng nhớ chung làm khóa ', correct: true}
    ]
  },


  {
  question: 'Khối mô tả tiến trình là vùng nhớ lưu trữ các thông tin về',
  answers: [      
    {text: 'Vùng bộ nhớ chứa dữ liệu của chương trình đang thực hiên', correct: false},
    {text: 'Vùng bộ nhớ chứa chương trình đang thực hiện', correct: false},
    {text: 'Vùng bộ nhớ chứa thông tin trao đổi giữa các tiến trình', correct: false},
    {text: 'Vùng bộ nhớ chứa giá trị của các thanh ghi mà tiến trình đang sử dụng ', correct: true}
    ]
  },

  {
  question: 'Một tiến trình là',
  answers: [    
    {text: 'Bất kỳ cái gì mà ngăn chặn bế tắc (deadlock)', correct: false},
    {text: 'Một chương trình tương tranh', correct: false},
    {text: 'Bất kỳ một chương trình tuần tự nào', correct: false},
    {text: 'Một chương trình đang thực hiện ', correct: true}
    ]
  },

  {
    question: 'Trong sơ đồ chuyển trạng thái tiến trình, việc chuyển trạng thái từ trạng thái READY sang trạng thái RUNNING chỉ ra rằng',
    answers: [
    {text: 'Một tiến trình bị phong tỏa bởi một semaphore hoặc bởi các thao tác khác', correct: true},
    {text: 'Một tiến trình được hoàn thành việc chờ một thao tác vào/ra ', correct: false},
    {text: 'Một tiến trình được ưu tiên bởi một tiến trình khác', correct: false},
    {text: 'Một tiến trình vừa được tạo ra', correct: false}
    ]
  },

  {
    question: 'Tình huống trong đó tiến trình 1 chờ tiến trình 2, tiến trình 2 chờ tiến trình 3 hoàn tất,.., tiến trình (n-1) chờ tiến trình n, tiến trình n chờ tiến trình 1, tạo thành một vòng khép kín gọi là',
    answers: [
    {text: 'Ngủ (dormant)', correct: false},
    {text: 'Tất cả các phương án trên', correct: false},
    {text: 'Chết đói (starvation)', correct: false},
    {text: 'Bế tắc (deadlock) ', correct: true}
    ]
  },

  {
    question: 'Trong cấu trúc phân đoạn của quản lý bộ nhớ logic',
    answers: [
    {text: 'Hiệu quả phụ thuộc vào cấu trúc ban đầu của chương trình nguồn ', correct: true},
    {text: 'Có tính lưu động cao', correct: false},
    {text: 'Thời gian thực hiện lớn (vừa thực hiện, vừa định vị)', correct: false},
    {text: 'Đẩy hệ số tích trữ bộ nhớ lên cao', correct: false}
    ]
  },

  {
    question: 'Trong chế độ phân chương tĩnh của quản lý bộ nhớ vật lý',
    answers: [
    {text: 'Hệ thống điều khiển không bị sao chép đi nơi khác ', correct: false},
    {text: 'Số chương trình thực hiện có thể thay đổi', correct: false},
    {text: 'Cho phép dùng chung các modul trong bộ nhớ', correct: false},
    {text: 'Tồn tại công cụ bên trong bộ nhớ để có thể phân chia lại hệ thống', correct: true}
    ]
  },
  
  {
    question: 'Trong kỹ thuật phân trang, khi bộ nhớ thực đầy thì HĐH sẽ',
    answers: [
    {text: 'Tiến hành nạp lại các trang', correct: false},
    {text: 'Thực hiện chiến lược thay thế trang ', correct: true},
    {text: 'Loại bỏ các trang không cần thiết', correct: false},
    {text: 'Loại bỏ các trang bị lỗi', correct: false}
    ]
  },

  {
    question: 'Trong chế độ phân trang của quản lý bộ nhớ vật lý',
    answers: [
    {text: 'Hạn chế việc thiếu bộ nhớ', correct: true},
    {text: 'Hiệu quả phụ thuộc vào cấu trúc ban đầu của chương trình nguồn ', correct: false},
    {text: 'Xuất hiện hiện tượng phân đoạn ngoài', correct: false},
    {text: 'Nếu có sự cố kỹ thuật thì chương trình sẽ bị phá hủy', correct: false}
    ]
  },

  {
    question: 'Trong chế độ phân chương tĩnh của quản lý bộ nhớ vật lý',
    answers: [
    {text: 'Đơn giản, dễ bảo vệ', correct: true},
    {text: 'Hệ thống điều khiển không bị sao chép đi nơi khác', correct: false},
    {text: 'Tồn tại một danh sách quản lý bộ nhớ tự do chung', correct: false},
    {text: 'Không có hiện tượng phân đoạn ngoài', correct: false}
    ]
  },

  {
    question: 'Trong quản lý bộ nhớ, kỹ thuật phân trang chia bộ nhớ vật lý thành các khối có kích thước không đổi được gọi là',
    answers: [
    {text: 'Các trang (pages)', correct: false},
    {text: 'Các Khối (blocks)', correct: false},
    {text: 'Các khung trang (frames)', correct: true},
    {text: 'Các đoạn (segments) ', correct: false}
    ]
  },

  {
    question: 'Để một chương trình thực có thể hiện được, nó phải',
    answers: [
    {text: 'Cần phải được dịch sang mã máy', correct: false},
    {text: 'Được nạp và định vị trong bộ nhớ bất kỳ', correct: false},
    {text: 'Được phân phối đầy đủ tài nguyên yêu cầu và được quyền sử dụng Processor', correct: true},
    {text: 'Tất cả đều đúng', correct: false}
    ]
  },

  {
    question: 'Trong quản lý bộ nhớ vật lý theo kỹ thuật phân đoạn, cách khắc phục hiện tượng phân mảnh bộ nhớ là',
    answers: [
    {text: 'Tuỳ thuộc vào tình trạng cụ thể của bộ nhớ', correct: true},
    {text: 'Loại bớt các chương trình không cần thiết', correct: false},
    {text: 'Chuyển một số modul của các chương trình ra bộ nhớ ngoài', correct: false},
    {text: 'Thực hiện dịch chuyển vị trí các chương trình về phía cuối bộ nhớ ', correct: false}
    ]
  },

  {
    question: 'Phát biểu nào dưới đây không phải ưu điểm của kỹ thuật phân trang là',
    answers: [
    {text: 'Không lãng phí toàn bộ trang dữ liệu, các trang có kích thước cố định', correct: false},
    {text: 'Không cần tìm vùng nhớ RAM liên tục', correct: false},
    {text: 'Kích thước lưu trữ lớn, tốc độ truy nhập bộ nhớ chậm', correct: true},
    {text: 'Cấu trúc danh sách để quản lý các trang chưa sử dụng đơn giản, không cần cơ chế làm liền mảnh bộ nhớ', correct: false}
    ]
  },

  {
    question: 'Trong chế độ phân chương động của quản lý bộ nhớ vật lý',
    answers: [
    {text: 'Áp dụng được trên máy bất kỳ', correct: false},
    {text: 'Xuất hiện hiện tượng phân đoạn ngoài', correct: true},
    {text: 'Có sự hỗ trợ của phần cứng', correct: false},
    {text: 'Cho phép dùng chung các modul trong bộ nhớ ', correct: false}
    ]
  },
]
