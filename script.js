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

  {
    question: 'Trong kĩ thuật quản lý bộ nhớ theo phân chương động:',
    answers: [
      {text: 'Bộ nhớ là một vùng nhớ trống bên ngoài bộ nhớ được cấp cho HĐH', correct: false},
      {text: 'Bộ nhớ chia thành các phân vùng với kích thước phù hợp với yêu cầu của tiến trình', correct: true},
      {text: 'Bộ nhớ chia thành các phân vùng có kích thước cố định', correct: false},
      {text: 'Bộ nhớ chia thành các phân vùng có kích thước bằng nhau ', correct: false}
      ]
    },

  {
    question: 'Với một hệ thống đa chương trình thì bộ nhớ sẽ chứa nhứng gì?',
    answers: [
      {text: 'Bộ nhớ là một vùng nhớ trống bên ngoài bộ nhớ được cấp cho HĐH', correct: false},
      {text: 'Hệ điều hành và nhiều tiến trình', correct: true},
      {text: 'Bộ nhớ chia thành các phân vùng có kích thước cố định', correct: false},
      {text: 'Trong khi các chương trình ứng dụng được kích hoạt ', correct: false}
    ]
  },
  {
    question: 'Trong kĩ thuật quản lí bộ nhớ theo phân chương động',
    answers: [
      {text: 'Bộ nhớ vật lí có cấu trúc phân trang', correct: false},
      {text: 'Sử dụng danh sách quản lí bộ nhớ tự do riêng', correct: false},
      {text: 'Sử dụng danh sách quản lí bộ nhớ tự do chung', correct: true},
      {text: 'Bộ nhớ vật lý được áp dụng theo cơ chế hoàn chuyển Swapking ', correct: false}
    ]
  },
  {
    question: 'Hệ điều hành quản lí bộ nhớ chính gồm những gì',
    answers: [
      {text: 'A.	Cấp phát và thu hồi bộ nhớ', correct: false},
      {text: 'B.	Ghi nhận trạng thái của bộ nhớ chính', correct: false},
      {text: 'C.	Quyết định tiến trình nào được nạp vào bộ nhớ và bảo mật bộ nhớ', correct: false},
      {text: 'D.	Tất cả đều đúng ', correct: true}
    ]
  },
  {
    question: 'Khối mô tả tiến trình là vùng nhớ các thông tin về',
    answers: [
      {text: 'A.	Vùng bộ nhớ chứa chương trình đang thực hiện', correct: false},
      {text: 'B.	Vùng bộ nhớ trao đổi thông tin giữa các tiến trình', correct: false},
      {text: 'C.	Vùng bộ nhớ chứa dữ liệu của chương trình đang thực hiện', correct: false},
      {text: 'D.	Vùng bộ nhớ chứa giá trị của các thanh ghi mà tiến trình đang sử dụng ', correct: true}
      ]
  },   
  {
    question: ' Hành động nào của HĐH sẽ thực thi khi một tiến trình mới khi sinh ra',
    answers: [
      {text: 'A.	Phân phối CPU ngay trên tiến trình', correct: false},
      {text: 'B.	Tạo ngay khối mô tả tiến trình để quản lí', correct: true},
      {text: 'C.	Phân phối ngay tài nguyên mà tiến trình yêu cầu', correct: false},
      {text: 'D.	Đưa tiến trình về trạng thái thực hiện ', correct: false}
      ]
  },
  {
    question: ' Độ ưu tiên của các tiến trình cho biết điều gì?',
    answers: [
      {text: 'A.	Tiến trình sử dụng CPU nhiều hay ít', correct: false},
      {text: 'B.	Tiến trình có quan trọng hay không', correct: true},
      {text: 'C.	Tiến trình chiếm dụng tài nguyên nhiều hay ít', correct: false},
      {text: 'D.	Thời gian thực hiện tiến trình lâu hay ít ', correct: false}
    ]
  },
  {
    question: ' Các công cụ điều độ quản lí tiến trình của HĐH thực hiện chức năng:',
    answers: [
      {text: 'A.	Tạo lập để hủy bỏ tiến trình, tạm dừng và tái kích hoạt tiến trình', correct: false},
      {text: 'B.	Tạo cơ chế thông tin liên lạc giữa các tiến trình', correct: false},
      {text: 'C.	Tạo cơ chế đồng bộ hóa giữa các tiến trình', correct: false},
      {text: 'D.	Tất cả đ.án đều đúng ', correct: true}
    ]
  },  
  {
  question: ' Nguyên tắc Hệ điều hành có quan hệ với ngôn ngữ nào?',
  answers: [
      {text: 'A.	Ngôn ngữ giao tiếp, ngôn ngữ thực hiện, ngôn ngữ máy', correct: false},
      {text: 'B.	ngôn ngữ máy, ngôn ngữ thực hiện, ngôn ngữ thuật toán', correct: false},
      {text: 'C.	ngôn ngữ thuật toán, ngôn ngữ vận hành, ngôn ngữ thực hiện', correct: true},
      {text: 'D.	ngôn ngữ thực hiện, ngôn ngữ vận hành, ngôn ngữ máy', correct: false}
    ]
  },
  {
  question: ' Để đảm bảo tính chất thuận tiện HĐH cần:',
  answers: [
      {text: 'A.	Kế thừa public trước', correct: false},
      {text: 'B.	Có nhiều mức hiệu quả tùy thuộc vào kinh nghiệm, kiến thức người dùng', correct: true},
      {text: 'C.	Đảm bảo chương trình, dữ liệu không bị xóa theo ý muốn', correct: false},
      {text: 'D.	Thích nghi với sự thay đổi có trong tương lai', correct: false}
    ]
  },
  {
  question: ' : Đảm bảo tính chất tin cậy, HĐH cần: ',
  answers: [
      {text: 'A.	Tiến trình được bảo vệ theo nhiều mức không dùng hệ thống', correct: false},
      {text: 'B.	Đảm bảo sự đồng bộ trong toàn hệ thống', correct: false},
      {text: 'C.	Mọi công việc có thể thực hiện được trên nhiều phương tiện khác nhau', correct: false},
      {text: 'D.	Mọi công việc có thể được kiểm tra và đánh giá', correct: true}
    ]
  },
  {
  question: ' : Nhiệm vụ chính của HĐH ',
  answers: [
      {text: 'A.	Tiến trình được bảo vệ theo nhiều mức không dùng hệ thống', correct: false},
      {text: 'B.	Đảm bảo sự đồng bộ trong toàn hệ thống', correct: false},
      {text: 'C.	Mọi công việc có thể thực hiện được trên nhiều phương tiện khác nhau', correct: false},
      {text: 'D.	Quản lí tài nguyên', correct: true}
    ]
   },
   {
  question: ' Trong hệ điều hành Windows tên tệp có độ dài tối đa là',
  answers: [
      {text: 'A.	  11 ki tự', correct: false},
      {text: 'B.	  255 kí tự', correct: true},
      {text: 'C.	  256 kí tự', correct: false},
      {text: 'D.	  8 kí tự', correct: false}
    ]
   },  
   {
  question: '	Trong chế độ phân chương tĩnh của quản lý bộ nhớ vật lý',
  answers: [
      {text: 'A.	   Không có hiện tượng phân đoạn ngoài', correct: false},
      {text: 'B.	   Tồn tại một danh sách quản lý bộ nhớ tự do chung', correct: false},
      {text: 'C.	   Hệ thống điều khiển không bị sao chép đi nơi khác', correct: false},
      {text: 'D.	   Đơn giản, dễ bảo vệ', correct: true}
    ]
   },  
   {
  question: '	Để một chương trình có thể thực hiện được, nó phải',
  answers: [
      {text: 'A.	Cần phải được dịch sang mã máy', correct: false},
      {text: 'B.	 Tất cả đều đúng', correct: false},
      {text: 'C.	 Được nạp và định vị trong bộ nhớ bất kỳ', correct: false},
      {text: 'D.	 Được phân phối đầy đủ tài nguyên yêu cầu và được quyền sử dụng Processor', correct: true}
    ]
   }, 
   {
  question: '	Trong cấu trúc phân đoạn của quản lý bộ nhớ logic',
  answers: [
      {text: 'A.	   Cần có sự hỗ trợ của phần cứng', correct: false},
      {text: 'B.	   Người dùng phải dùng các lệnh macro để nạp, định vị các modul của chương trình', correct: false},
      {text: 'C.	   Hiệu quả tăng dần theo kích thước bộ nhớ', correct: true},
      {text: 'D.	   Hạn chế một số cách gọi chương trình con', correct: false}
    ]
   },  
   {
  question: 'Trong quản lý bộ nhớ vật lý theo kỹ thuật phân trang, cách khắc phục hiện tượng thiêu bộ nhớ là',
  answers: [
      {text: 'A.	   Chuyển một số trang của các chương trình ra bộ nhớ ngoài', correct: false},
      {text: 'B.	   Tuỳ thuộc vào tình trạng cụ thể của bộ nhớ', correct: false},
      {text: 'C.	   Thực hiện thay thế các trang', correct: true},
      {text: 'D.	   Loại bớt các chương trình không cần thiết', correct: false}
    ]
   },  
   {
  question: 'Việc phân bổ không gian nhớ cho một tiến trình dùng phương pháp phân đoạn sử dụng thanh ghi cơ sở và thanh ghi giới hạn, biết tiến trình được phân bổ vùng nhớ 4 đoạn: mã lệnh, dữ liệu, ngăn xếp, và vùng nhớ heap, số các thanh ghi cần dùng là:',
  answers: [
      {text: 'A.	4', correct: false},
      {text: 'B.	2', correct: false},
      {text: 'C.	 8', correct: true},
      {text: 'D.	 16', correct: false}
    ]
   },  
   {
  question: '	Khi một tiến trình đang thực hiện yêu cầu một tài nguyên, nhưng chưa được đáp ứng do tài nguyên chưa được sẵn sàng, tiến trình này sẽ chuyển về trạng thái',
  answers: [
      {text: 'A.	    Kết thúc', correct: false},
      {text: 'B.	    Khởi tạo', correct: false},
      {text: 'C.	    Khóa ( Ngắt )', correct: true},
      {text: 'D.	    sẵn sàng', correct: false}
    ]
   },  
   {
  question: 'Phát biểu nào sau đây là không đúng',
  answers: [
      {text: 'A.	Tiến trình là một quá trình đang được thực hiện 1 chương trình trong hệ thống máy tính', correct: false},
      {text: 'B.	Các tiến trình độc lập không có quan hệ gì trực tiếp với nhau', correct: false},
      {text: 'C.	Tiến trình là chương trình đang được thực hiện ở trong hệ thống máy tính', correct: true},
      {text: 'D.	Tiến trình được hình thành khi có yêu cầu và kết thúc khi công việc được hoàn tất', correct: false}
    ]
   },  
   {
  question: '	Các công cụ điều độ, quản lý tiến trình của hệ điều hành thực hiện chức năng:',
  answers: [
      {text: 'A.	  Tạo lập, hủy bỏ tiến trình, tạm dừng, tái kích hoạt tiến trình', correct: false},
      {text: 'B.	   Tất cả đều đúng', correct: true},
      {text: 'C.	   Tạo cơ chế đồng bộ hóa giữa các tiến trình', correct: false},
      {text: 'D.	  Tạo cơ chế thông tin liên lạc giữa các tiến trình', correct: false}
    ]
   },
   {
  question: 'Khi xác định có tiến trình nằm trong trang thái tắc nghẽn, Hệ điều hành phải	',
  answers: [
      {text: 'A.	   Kiểm tra việc phân phối tài nguyên', correct: false},
      {text: 'B.	   Yêu cầu người dung xử lý', correct: false},
      {text: 'C.	    Mô phỏng tài nguyên và tiếp tục cấp phát tài nguyên cho tiến tình', correct: false},
      {text: 'D.	    Khóa tiến trình và thu hồi tài nguyên', correct: true}
           ]
   },  
   {
  question: 'Hệ điều hành của một máy tính đóng vai trò như một giao tiếp phần mềm giữa người sử dụng và:	',
  answers: [
      {text: 'A.	Phần cứng', correct: true},
      {text: 'B.	Màn hình', correct: false},
      {text: 'C.	Thiết bị ngoại vi', correct: false},
      {text: 'D.	Bộ nhớ', correct: false}
           ]
   },
   {
  question: 'Cơ chế phòng đệm cho phép	',
  answers: [
      {text: 'A.	Thực hiện trước các phép nhập liệu', correct: false},
      {text: 'B.	Giảm số lần truy cập vật lý', correct: false},
      {text: 'C.	Tất cả đều đúng', correct: true},
      {text: 'D.	Dùng một số vùng nhớ chung làm phòng đệ', correct: false}
           ]
   }, 
      {
    question: 'Việc áp dụng nguyên tắc tương đối trong định vị khi xây dựng hệ điều hành cần phải:',
    answers: [
      {text: 'Sử dụng bộ nhớ hiệu quả hơn', correct: true},
      {text: 'Cho phép người dùng chọn giải pháp tối ưu với bài toán của mình', correct: false},
      {text: 'Tồn tại cơ chế liên kết các Modul độc lập', correct: false},
      {text: 'Dễ dàng bảo vệ chương trình và dữ liệu.',correct: false}
    ]
  },
  {
    question: 'Chỉ ra phương án nào không phải là tầng của hệ điều hành',
    answers: [
      {text: 'Shell', correct: false},
      {text: 'Đoạn găng', correct: true},
      {text: 'Chương trình ứng dụng', correct: false},
      {text: 'Kernel.',correct: false}
    ]
  },
  {
    question: 'Các phiên bản của hệ điều hành được viết sao cho các chương trình được thiết kế cho các phiên bản trước đây vẫn có thể chạy. Điều này được gọi là:',
    answers: [
      {text: 'Có thể phân mức lên trên', correct: false},
      {text: 'Tính tương thích hướng lên', correct: true},
      {text: 'Tính vạn năng', correct: false},
      {text: 'Tính cơ động hướng lên',correct: false}
    ]
  },
  {
    question: 'Trong cấu trúc phân đoạn của quản lý bộ nhớ logic',
    answers: 
[
    {text: 'Hiệu quả phụ thuộc vào cấu trúc ban đầu của chương trình nguồn ', correct: true},
    {text: 'Có tính lưu động cao', correct: false},
    {text: 'Thời gian thực hiện lớn (vừa thực hiện, vừa định vị)', correct: false},
    {text: 'Đẩy hệ số tích trữ bộ nhớ lên cao', correct: false}
    ]},


{
    question: 'Hệ điều hành quản lý',
    answers: 
[
    {text: 'Bộ xử lý', correct: false},
    {text: 'Bộ nhớ', correct: false},
    {text: 'Các thiết bị vào ra và đĩa', correct: false},
    {text: 'Tất cả những tài nguyên trên', correct: true}
    ]},


{
    question: 'Một trong những đặc điểm của hệ điều hành đơn chương là?',
    answers: 
[
    {text: 'Là hệ thống có hai hay nhiều CPU cùng chia sẻ bộ nhớ', correct: false},
    {text: 'Tác vụ được thực hiện luân phiên và nhiều tác vụ được lưu trong bộ nhớ tại một thời điểm', correct: false},
    {text: 'Tác vụ được thực hiện luân phiên với thời gian đáp ứng nhỏ (1s) và nhiều tác vụ được lưu trong bộ nhớ tại một thời điểm.', correct: false},
    {text: 'Tác vụ được thực thi một cách tuần tự và chỉ có một tác vụ được lưu trong bộ nhớ', correct: true}
    ]},

{
    question: 'Trong phân loại, hệ điều hành được cài đặt trên hệ thống nhiều vi xử lý nhằm chia sẻ dữ liệu, đường truyền, các thiết bị ngoại vi… thuộc dạng:',
    answers: 
[
    {text: 'Hệ điều hành xử lý đa chương', correct: false},
    {text: 'Hệ điều hành xử lý thời gian thực', correct: false},
    {text: 'Hệ điều hành xử lý đa nhiệm', correct: false},
    {text: 'Hệ điều hành xử lý phân tán', correct: true}
    ]}, 


{
    question: 'Hệ điều hành được nạp:',
    answers: 
[
    {text: 'Trong khi các chương trình ứng dụng được kích hoạt', correct: false},
    {text: 'Khi các chương trình ứng dụng có yêu cầu nạp hệ điều hành', correct: false},
    {text: 'Sau khi các chương trình ứng dụng được kích hoạt', correct: false},
    {text: 'Trước khi các chưong trình ứng dụng được kích hoạt', correct: true}
    ]},

{
    question: 'Hệ điều hành quản lý',
    answers: 
[
    {text: 'Bộ xử lý', correct: false},
    {text: 'Bộ nhớ', correct: false},
    {text: 'Các thiết bị vào ra và đĩa', correct: false},
    {text: 'Tất cả những tài nguyên trên', correct: true}
    ]},

    {
        question: 'Dưới góc độ người dùng, hệ điều hành có thể được phân thành các loại?',
        answers: [
          { text: 'HĐH ngang hàng, HĐH cho máy mainframe, HĐH multiprocessor', correct: false },
          { text: 'HĐH cho máy mainframe, HĐH cho server, HĐH multiprocessor', correct: false },
          { text: 'HĐH xử lý theo lô, HĐH chia sẻ, HĐH cho hệ thống song song, HĐH phân tán, HĐH xử lý thời gian thực', correct: false },
          { text: 'HĐH ngang hàng, HĐH có máy chủ', correct: true }
        ]
      },

    {
        question: 'Để đảm bảo tính chất an toàn, hệ điều hành cần phải',
        answers: [
          { text: 'Duy trì sự đồng bộ thông tin trong hệ thống', correct: false },
          { text: 'Mọi công việc đều phải được kiểm tra và đánh giá', correct: false },
          { text: 'Các tài nguyên được khai thác một cách triệt để ngay cả khi điều kiện tài nguyên hạn chế.', correct: false },
          { text: 'Tổ chức dữ liệu và chương trình không bị xóa hoặc thay đổi ngoài ý muốn', correct: true }
        ]
    },


    {
        question: 'Hệ điều hành là hệ thống chương trình phần mềm',
        answers: [
          { text: 'Hỗ trợ người dùng thực hiện một file bất kỳ', correct: false },
          { text: 'Quản lý bộ nhớ và thiết bị ngoại vi', correct: false },
          { text: 'Điều khiển thực hiện phần mềm', correct: true },
          { text: 'Quản lý các tài nguyên trên máy tính', correct: false }
        ]
    },

    {
        question: 'Khi khởi động máy tính, hệ điều hành được nạp vào:',
        answers: [
          { text: 'Bộ nhớ RAM', correct: true }
        ]
    },

    {
        question: 'Có mấy lớp giải thuật điều độ cấp thấp?',
        answers: [
          { text: '1', correct: false },
          { text: '2', correct: false },
          { text: '3', correct: true },
          { text: '4', correct: false }
        ]
    },

    {
        question: 'Nhiệm vụ nào sau đây không phải là nhiệm vụ của HĐH trong quản lý bộ nhớ chính?',
        answers: [
          { text: 'Theo dõi, quản lý các vùng nhớ trống và các vùng nhớ đã cấp phát', correct: false },
          { text: 'Cấp phát và thu hồi các vùng nhớ khi cần thiết', correct: false },
          { text: 'Quyết định sẽ nạp chương trình nào khi có vùng nhớ trống', correct: false },
          { text: 'Định thời hoạt động cho bộ nhớ thứ cấp', correct: true }
        ]
    },

    {
        question: 'Độ ưu tiên của các tiến trình cho biết:',
        answers: [
          { text: 'Tiến trình chiếm dụng tài nguyên nhiều hay ít', correct: false },
          { text: 'Thời gian thực hiện của tiến trình nhiều hay ít', correct: false },
          { text: 'Tiến trình sử dụng CPU nhiều hay ít', correct: false },
          { text: 'Tiến trình có tầm quan trọng hay không', correct: true }
        ]
    },

    {
        question: 'Đâu là mô tả thích hợp về nhiệm vụ quản lý tiến trình (process management) của hệ điều hành',
        answers: [
          { text: '111', correct: false },
          { text: '111', correct: false },
          { text: '111', correct: false },
          { text: '111', correct: true }
        ]
    },

    {
        question: 'Tiến trình đang thực thi sẽ chuyển về loại danh sách nào khi xảy ra sự kiện đợi một thao tác nhập/xuẩt hoàn tất, yêu cầu tài nguyên dữ liệu chưa được thoã mãn, yêu cầu tạm dừng:',
        answers: [
          { text: 'Tiến trình đang thực thi (Running)', correct: false },
          { text: 'Danh sách sẵn sàng (Ready list)', correct: false },
          { text: 'Danh sách tác vụ (Job list)', correct: false },
          { text: 'Danh sách chờ đợi (Waiting list)', correct: true }
        ]
    },

    {
        question: 'Khi một tiến trình nằm trong trạng thái tắc nghẽn, hệ điều hành cần thực hiện',
        answers: [
          { text: 'Xác định nguyên nhân gây tắc nghẽn', correct: false },
          { text: 'Phân phối thêm tài nguyên cho tiến trình', correct: false },
          { text: 'Đưa tiến trình về trạng thái thực hiện', correct: false },
          { text: 'Đình chỉ tiến trình và thu hồi tài nguyên', correct: true }
        ]
    },

    {
        question: 'Một tiến trình thông thường có mấy trạng thái?',
        answers: [
          { text: '3 trạng thái', correct: false },
          { text: '4 trạng thái', correct: false },
          { text: '6 trạng thái', correct: false },
          { text: '5 trạng thái', correct: true }
        ]
    },

    {
        question: 'Trạng thái của một tiến trình sau khi nó gặp một lệnh vào ra là trạng thái',
        answers: [
          { text: 'Trạng thái idle', correct: false },
          { text: 'Sẵn sàng (ready)', correct: false },
          { text: 'Đang chạy', correct: false },
          { text: 'Trạng thái bị chặn (hoặc chờ)', correct: true }
        ]
    },

    {
        question: 'Khi điều độ tiến trình, đối với phương pháp khóa trong, các tiến trình',
        answers: [
          { text: 'Sử dụng 1 Byte trong vùng nhớ chung làm khóa toàn cục', correct: false },
          { text: 'Sử dụng 1 Byte trong vùng nhớ riêng làm khóa toàn cục', correct: false },
          { text: 'Sử dụng 1 byte trong vùng nhớ riêng làm khóa', correct: false },
          { text: 'Sử dụng 1 byte trong vùng nhớ chung làm khóa', correct: true }
        ]
    },

    {
        question: 'Khi một tiến trình người dùng gọi đến một lời gọi hệ thống, tiến trình của hệ điều hành xử lí lời gọi này hoạt động theo chế độ:',
        answers: [
          { text: 'Không có chế độ nào cả', correct: false },
          { text: 'Cả 2 chế độ độc quyền và không độc quyền', correct: false },
          { text: 'Không độc quyền', correct: false },
          { text: 'Đặc quyền', correct: true }
        ]
    },

    {
        question: 'Các thanh ghi giới hạn',
        answers: [
          { text: 'Chỉ cần thiết với các đoạn cố định', correct: false },
          { text: 'Có trong việc lưu trữ biến trung gian của chương trình', correct: false },
          { text: 'Chỉ cần thiết với các đoạn cố định', correct: false },
          { text: 'Theo dõi vị trí bắt đầu và kết thúc của chương trình', correct: true }
        ]
    },

    {
        question: 'Nguyên tắc cục bộ tham chiếu giải thích cho việc sử dụng',
        answers: [
          { text: 'Cache', correct: false },
          { text: 'Bộ nhớ ảo', correct: false },
          { text: 'Bộ nhớ chính', correct: false },
          { text: 'Ngắt', correct: true }
        ]
    },

    {
        question: 'Trong kỹ thuật quản lý bộ nhớ theo phân chương động, phát biểu nào sau đây là đúng',
        answers: [
          { text: 'Bộ nhớ là một vùng nhớ trống ngoài vùng nhớ được cấp cho hệ điều hành', correct: false },
          { text: 'Bộ nhớ chia thành các phân vùng có kích thước bằng nhau', correct: false },
          { text: 'Bộ nhớ chia thành các phân vùng có kích thước cố định', correct: false },
          { text: 'Bộ nhớ chia thành các phân vùng với kích thước phù hợp yêu cầu của tiến trình', correct: true }
        ]
    },

{
    question: 'Ưu điểm nào sau đây không phải là ưu điểm của cấu trúc phân chương',
    answers: [
      { text: 'Tồn tại công cụ bên trong bộ nhớ có thể phân chia lại hệ thống', correct: true },
      { text: 'Đơn giản, dễ bảo vệ', correct: false },
      { text: 'Có thể phân loại các chương trình trước khi thực hiện, có thể tổ chức phục vụ gần tối ưu', correct: false },
      { text: 'Hệ thống điều khiển không bị sao chép đi nơi khác', correct: false }
    ]
},

{
    question: 'Cấp phát bộ nhớ theo phương pháp “Phân trang” có đặc trưng nào sau đây?',
    answers: [
      { text: 'Tiến trình được cấp phát đủ số khung trang mà tiến trình đó yêu cầu', correct: false },
      { text: 'Bộ nhớ được phân thành các khung trang có nhiều loại kích thước', correct: false },
      { text: 'Một trang có kích thước đủ để chứa toàn bộ kích thước của tiến trình.', correct: false },
      { text: 'Kích thước một trang (page) và một khung trang (frame) bằng nhau.', correct: true }
    ]
},

{
    question: 'Cơ chế quản lý bộ nhớ vật lý nào sau đây chịu ảnh hưởng của việc phân mảnh bộ nhớ ngoài',
    answers: [
      { text: 'Phân trang', correct: false },
      { text: 'Tráo trang (Swappiing)', correct: false },
      { text: 'Phân trang theo yêu cầu thuần túy', correct: false },
      { text: 'Phân đoạn', correct: true }
    ]
},

{
    question: 'Trong chế độ kết hợp phân đoạn và phân trang của quản lý bộ nhớ vật lý',
    answers: [
      { text: '(p,d,s)', correct: false },
      { text: '(s,d,p)', correct: false },
      { text: '(s,p,d)', correct: false },
      { text: '(p,s,a)', correct: true }
    ]
},

{
    question: 'Đâu không phải đặc điểm của chế độ phân trang?',
    answers: [
      { text: '111', correct: false },
      { text: '111', correct: false },
      { text: '111', correct: false },
      { text: '111', correct: true }
    ]
},

{
    question: 'Địa chỉ của bảng phân trang được lưu trữ ở đâu',
    answers: [
      { text: 'Con trỏ stack của bảng phân trang', correct: false },
      { text: 'Con trỏ trang', correct: false },
      { text: 'Program counter', correct: false },
      { text: 'Con trỏ base của bảng phân trang', correct: true }
    ]
},

{
    question: 'Trong quan hệ phân cấp và quản lý thiết bị ngoại vi',
    answers: [
      { text: 'Vi xử lý điều khiển thiết bị ngoại vi thực hiện theo nguyên tắc MacroProcessor', correct: false },
      { text: 'Vi xử lý và các thiết bị ngoại vi phụ thuộc nó tạo thành một kênh (chanel)', correct: false },
      { text: 'Vi xử lý và thiết bị ngoại vi dung chung một ngôn ngữ', correct: false },
      { text: 'Một thiết bị điều khiển và các thiết bị ngoại vi phụ thuộc nó tạo thành một kênh (channel)', correct: true }
    ]
},

{
    question: 'Hệ điều hành DOS thường sử dụng hệ thống tập tin nào?',
    answers: [
      { text: 'FAT32', correct: false },
      { text: 'WNFS', correct: false },
      { text: 'NTFS', correct: false },
      { text: 'FAT16', correct: true }
    ]
},

{
    question: 'Để xác định vị trí một tệp tin, trong các hệ đều hành thường',
    answers: [
      { text: 'Xác định danh sách móc nối của tệp', correct: false },
      { text: 'Xác định đường dẫn đến thư mục chứa tệp', correct: true },
      { text: 'Xác định tên tệp và phần mở rộng của tệp', correct: false },
      { text: 'Xác định ổ đĩa chứa tệp', correct: false }
    ]
},

{
    question: 'Bộ nhớ lưu trữ là khái niệm mô tả',
    answers: [
      { text: 'Ram, CPU, các thiết bị nhập/ xuất', correct: false },
      { text: 'Ram, thanh ghi, cache', correct: false },
      { text: 'Bộ nhớ ảo, đĩa từ, đĩa quang', correct: false },
      { text: 'Các loại đĩa từ, đĩa quang, thẻ nhớ', correct: true }
    ]
},

{
    question: 'Đâu không phải là vai trò của SPOOL',
    answers: [
      { text: 'Giải phóng hệ thống khỏi sự ràng buộc về số lượng thiết bị.', correct: false },
      { text: 'Cho phép khai thác tối ưu thiết bị ngoại vi', correct: false },
      { text: 'Tăng độ an toàn thông tin', correct: false },
      { text: 'Tăng hiệu suất hệ thống', correct: true }
    ]
},

{
    question: 'Đặc điểm nào không phải của Phòng đệm truy nhập theo giá trị?',
    answers: [
      { text: 'Vạn năng', correct: false },
      { text: 'Tốn bộ nhớ', correct: false },
      { text: 'Hệ số song song cao', correct: false },
      { text: 'Tiết kiệm thời gian chuyển thông tin', correct: true }
    ]
},

{
    question: 'Hệ quản lý file không có tính chất nào sau đây',
    answers: [
      { text: 'Tổ chức hiệu quả dữ liệu', correct: false },
      { text: 'Bảo vệ dữ liệu', correct: false },
      { text: 'Độc lập với vi xử lý và với thiết bị ngoại vi', correct: false },
      { text: 'Thích nghi với những sự thay đổi có thể có trong tương lai', correct: true }
    ]
},

{
    question: 'Trong hệ điều hành Windows tên tệp có độ dài tối đa là',
    answers: [
      { text: '11', correct: false },
      { text: '8', correct: false },
      { text: '256', correct: false },
      { text: '255', correct: true }
    ]
},

{
    question: 'Vì sao cách tốt nhất để tổ chức lưu thông tin của một tệp trên đĩa trong một vùng liên tục là',
    answers: [
      { text: 'Giảm các lỗi khi đọc/ghi thông tin của tệp', correct: false },
      { text: 'Có khả năng sử dụng toàn bộ không gian lưu trữ của đĩa từ', correct: false },
      { text: 'Giảm bớt không gian dư thừa trên đĩa', correct: false },
      { text: 'Giảm thời gian dịch chuyển đầu từ khi thực hiện đọc/ghi', correct: true }
    ]
},    {
    question: 'Dưới góc độ người dùng, hệ điều hành có thể được phân thành các loại?',
    answers: [
      {text: 'HĐH ngang hàng, HĐH có máy chủ', correct: true},
      {text: 'HĐH cho máy mainframe, HĐH cho server, HĐH multiprocessor', correct: false},
      {text: 'HĐH ngang hàng, HĐH cho máy mainframe, HĐH multiprocessor', correct: false},
      {text: 'HĐH xử lý theo lô, HĐH chia sẻ, HĐH cho hệ thống song song, HĐH phân tán, HĐH xử lý thời gian thực',correct: false}
    ]
  },
  {
    question: 'Đâu là thành phần giám sát (supervisor) các hoạt động của máy tính',
    answers: [
      {text: 'Chương trình ứng dụng', correct: false},
      {text: 'Hệ điều hành', correct: true},
      {text: 'Đơn vị điều khiển', correct: false},
      {text: 'CPU.',correct: false}
    ]
  },
  {
    question: 'Nhiệm vụ chính của một hệ điều hành của máy tính là:',
    answers: [
      {text: 'Màn hình', correct: false},
      {text: 'Cung cấp các tiện ích', correct: false},
      {text: 'Ra lệnh cho các tài nguyên', correct: false},
      {text: 'Quản lý tài nguyên',correct: true}
    ]
  },
  {
    question: 'Khi khởi động máy tính, hệ điều hành được nạp vào:',
    answers: 
[
    {text: 'Bộ nhớ ngoài', correct: false},
    {text: 'Bộ nhớ chuyên dụng', correct: false},
    {text: 'Bộ nhớ RAM', correct: true},
    {text: 'Bộ nhớ ROM', correct: false}
]
},


{
    question: 'Hệ điều hành của một máy tính đóng vai trò như một giao tiếp phần mềm giữa người sử dụng và',
    answers: 
[
    {text: 'Màn hình', correct: false},
    {text: 'Phần cứng', correct: true},
    {text: 'Thiết bị ngoại vi', correct: false},
    {text: 'Bộ nhớ', correct: false}
 ]
},
  {
    question: 'Phần mềm là chương trình mà điều khiển hoạt động chung của một máy tính, đơn giản hóa việc sử dụng của nó và tương tác với người dùng. Đâu là các kiểu khác nhau của phần mềm này',
    answers: [
      {text: 'Hệ điều hành', correct: false},
      {text: 'Các tiện ích', correct: false},
      {text: 'Tất cả các phần mềm trên', correct: true},
      {text: 'Trình biên dịch ngôn ngữ',correct: false}
    ]
  },
    {
    question: 'Hệ điều hành quản lý',
    answers: [
      {text: 'Bộ xử lý', correct: false},
      {text: 'Các thiết bị vào ra và đĩa', correct: false},
      {text: 'Bộ nhớ', correct: false},
      {text: 'Tất cả những tài nguyên trên',correct: true}
    ]
  },
  {
    question: 'Khi có nhiều tiến trình muốn sử dụng tài nguyên găng thì',
    answers: [
      {text: 'Phân phối tài nguyên cho tất cả các tiến trình', correct: false},
      {text: 'Sử dụng 1 byte trong bộ nhớ chung làm khóa cho tài nguyên', correct: false},
      {text: 'Mô phỏng tài nguyên, và phân phối tài nguyên mô phỏng cho tiến trình', correct: false},
      {text: 'Không có tiến trình chiếm dụng tài nguyên.',correct: true}
    ]
  },
  {
    question: 'Khi điều độ tiến trình, đối với phương pháp khóa trong, các tiến trình',
    answers: [
      {text: 'Sử dụng 1 byte trong vùng nhớ chung làm khóa', correct: true},
      {text: 'Sử dụng 1 byte trong vùng nhớ riêng làm khóa', correct: false},
      {text: 'Sử dụng 1 Byte trong vùng nhớ riêng làm khóa toàn cục', correct: false},
      {text: 'Sử dụng 1 Byte trong vùng nhớ chung làm khóa toàn cục',correct: false}
    ]
  },
  {
    question: 'Tiến trình đang thực thi sẽ chuyển về loại danh sách nào khi xảy ra sự kiện đợi một thao tác nhập/xuẩt hoàn tất, yêu cầu tài nguyên dữ liệu chưa được thoã mãn, yêu cầu tạm dừng:',
    answers: [
      {text: 'Danh sách tác vụ (Job list)', correct: false},
      {text: 'Danh sách chờ đợi (Waiting list)', correct: true},
      {text: 'Tiến trình đang thực thi (Running)', correct: false},
      {text: 'Danh sách sẵn sàng (Ready list) ',correct: false}
    ]
  },
  {
    question: 'Khi một tiến trình người dùng gọi đến một lời gọi hệ thống, tiến trình của hệ điều hành xử lí lời gọi này hoạt động theo chế độ:',
    answers: [
      {text: 'Đặc quyền', correct: true},
      {text: 'Không có chế độ nào cả', correct: false},
      {text: 'Cả 2 chế độ độc quyền và không độc quyền', correct: false},
      {text: 'Không độc quyền',correct: false}
    ]
  },
      {
    question: ' Để khắc phục chờ đợi vòng khi điều độ tiến trình, hệ thống phải:',
    answers: [
      {text: 'A.	Phân phối trước tài nguyên', correct: false},
      {text: 'B.	Tạo các điểm gác', correct: false},
      {text: 'C.	Phân lớp tài nguyên', correct: true},
      {text: 'D.	Mô phỏng tài nguyên', correct: false}
    ]
  },
  {
    question: 'Tiến trình yêu cầu một tài nguyên nhưng chưa được đáp ứng vì tài nguyên chưa sẵn sàng, hoặc tiến trình phải chờ một sự kiện hay thao tác nhập xuất ” thuộc dạng chuyển trạng thái nào sau đây',
    answers: [
      {text: 'A.	Running ® End.', correct: false},
      {text: 'B.	Running ® Ready', correct: false},
      {text: 'C.	Ready ® Running', correct: false},
      {text: 'D.	Running ® Blocked', correct: true}
    ]
  },
  {
    question: 'Tiến trình là:',
    answers: [
      {text: 'A.	Một chương trình được nạp trong bộ nhớ và đã thực hiện xong', correct: false},
      {text: 'B.	Một chương trình lưu trên đĩa.', correct: false},
      {text: 'C.	Một chương trình đã nạp trong bộ nhớ', correct: false},
      {text: 'D.	Một quá trình thực hiện của một chương trình', correct: true}
    ]
  },
  {
    question: 'Khi phát hiện tắc nghẽn, hệ thống cần',
    answers: [
      {text: 'A.	Đưa tiến trình tắc nghẽn về về trạng thái ngắt', correct: false},
      {text: 'B.	Đình chỉ hoạt động của các tiến trình liên quan về trạng thái ngắt', correct: true},
      {text: 'C.	Phục hồi trạng thái của tiến trình trước thời điểm bị tắc nghẽn', correct: false},
      {text: 'D.	Thu hồi tất cả tài nguyên của tiến trình ở tình trạng tắc nghẽn', correct: false}
    ]
  },
  {
    question: 'Khi phát hiện tắc nghẽn, hệ thống cần',
    answers: [
      {text: 'A.	Đưa tiến trình tắc nghẽn về về trạng thái ngắt', correct: false},
      {text: 'B.	Đình chỉ hoạt động của các tiến trình liên quan về trạng thái ngắt', correct: true},
      {text: 'C.	Phục hồi trạng thái của tiến trình trước thời điểm bị tắc nghẽn', correct: false},
      {text: 'D.	Thu hồi tất cả tài nguyên của tiến trình ở tình trạng tắc nghẽn', correct: false}
    ]
  },
  {
    question: 'Trong hệ điều hành đa nhiệm, các tiến trình thực hiện trao đổi thông tin với nhau thông qua cơ chế',
    answers: [
      {text: 'A.	Trao đổi thông qua các thông điệp', correct: false},
      {text: 'B.	Trao đổi thông qua tiến trình thứ 3', correct: true},
      {text: 'C.	Trao đổi thông qua hộp thư', correct: false},
      {text: 'D.	Trao đổi trực tiếp với nhau', correct: false}
    ]
  },
  {
    question: 'Trong chế độ phân trang của quản lý bộ nhớ vật lý',
    answers: [
      {text: 'A.	Hiệu quả phụ thuộc vào cấu trúc ban đầu của chương trình nguồn', correct: false},
      {text: 'B.	Nếu có sự cố kỹ thuật thì chương trình sẽ bị phá hủy', correct: false},
      {text: 'C.	Hạn chế việc thiếu bộ nhớ', correct: true},
      {text: 'D.	Xuất hiện hiện tượng phân đoạn ngoài', correct: false}
    ]
  },
  {
    question: 'Bộ nhớ ảo (Virtual Memory) là gì?',
    answers: [
      {text: 'A.	vùng nhớ chứa giá trị các biến số trong khi bộ nhớ chính chứa lệnh.', correct: false},
      {text: 'B.	vùng nhớ mở rộng của bộ nhớ chính nhằm gia tăng kích thước bộ nhớ.', correct: false},
      {text: 'C.	vùng nhớ chứa những phần của tiến trình chưa được nạp vào bộ nhớ chính.', correct: true},
      {text: 'D.	là một bản sao chép của bộ nhớ chính nhằm mục đích chia sẻ.', correct: false}
    ]
  },
  {
    question: 'Trong kỹ thuật quản lý bộ nhớ phân vùng cố định sử dụng phương pháp nào để quản lý bộ nhớ tự do:',
    answers: [
      {text: 'A.	Bản đồ bitmap.', correct: false},
      {text: 'B.	Danh sách các vùng bộ nhớ tự do.', correct: true},
      {text: 'C.	Cả 3 đều sai', correct: false},
      {text: 'D.	Danh sách các vùng bộ nhớ đã cấp phát.', correct: false}
    ]
  },
  {
    question: 'Trong kỹ thuật quản lý bộ nhớ phân vùng cố định sử dụng phương pháp nào để quản lý bộ nhớ tự do:',
    answers: [
      {text: 'A.	Đoạn chương trình sử dụng tài nguyên ngoài.', correct: false},
      {text: 'B.	Đoạn chương trình sử dụng tài nguyên trong.', correct: false},
      {text: 'C.	Đoạn chương trình sử dụng tài nguyên trong', correct: true},
      {text: 'D.	Đoạn chương trình cho tài nguyên găng.', correct: false}
    ]
  },
  {
  question: 'Trong chế độ phân đoạn của quản lý bộ nhớ vật lý',
    answers: [
      { text: 'Không có hiện tượng phân đoạn ngoài', correct: false },
      { text: 'Cho phép sử dụng chung các modul trong bộ nhớ', correct: true },
      { text: 'Cả 3 đáp án còn lại đều sai', correct: false},
      { text: 'Bộ nhớ vật lý phải có cấu trúc phân đoạn', correct: false}
    ]
  },
  {
    question: 'Nhược điểm nào sau đây không phải là nhược điểm của cấu trúc phương chương (động)',
    answers: [
      { text: 'Xuất hiện hiện tượng phân đoạn ngoài', correct: false },
      { text: 'Cơ chế quản lí phức tạp', correct: false },
      { text: 'Khi gặp sự cố kỹ thuật, chương trình sẽ bị phá huỷ', correct: false },
      { text: 'Bộ nhớ bị phân đoạn nên khi phân chia lại sẽ thay đổi đường biên thông tin bị xoá', correct: true }
    ]
  },
{
    question: 'Các thanh ghi giới hạn',
    answers: [
      { text: 'Chỉ cần thiết với các đoạn cố định', correct: false },
      { text: 'Theo dõi vị trí bắt đầu và kết thúc của chương trình', correct: true },
      { text: 'Theo dõi ranh giới của các trang', correct: false },
      { text: 'Có trong việc lưu trữ biến trung gian của chương trình', correct: false }
    ]
  },
{
    question: 'Đâu là đặc điểm của chế độ quản lí bộ nhớ theo module?',
    answers: [
      { text: 'Không cần phân phối bộ nhớ liên tục.', correct: false },
      { text: 'Tất cả các đáp án trên', correct: true },
      { text: 'Tồn tại hiện tượng phân đoạn ngoài.', correct: false },
      { text: 'Hiệu quả phụ thuộc vào cấu trúc chương trình nguồn.', correct: false }
    ]
  },
{
    question: 'Trong chế độ phân chương tĩnh của quản lý bộ nhớ vật lý',
    answers: [
      { text: 'Không có hiện tượng phân đoạn ngoài', correct: false },
      { text: 'Đơn giản, dễ bảo vệ', correct: true },
      { text: 'Tồn tại một danh sách quản lý bộ nhớ tự do chung', correct: false },
      { text: 'Hệ thống điều khiển không bị sao chép đi nơi khác', correct: false }
    ]
  },
{
    question: 'Thông tin chứa trong Bảng phân trang là dùng để:',
    answers: [
      { text: 'Cho biết thông tin các tiến trình có bao nhiêu trang.', correct: false },
      { text: 'Lưu số trang của tiến trình đang hoạt động trong bộ nhớ chính.', correct: false },
      { text: 'Lưu số trang hợp lệ của tiến trình đã được cấp phát trước đó.', correct: false },
      { text: 'Lưu thông tin vị trí nạp các trang của tiến trình trong bộ nhớ chính.', correct: true }
    ]
  },
{
    question: 'Cơ chế phòng đệm cho phép',
    answers: [
      { text: 'Tất cả đều đúng', correct: true },
      { text: 'Giảm số lần truy cập vật lý', correct: false },
      { text: 'Thực hiện trước các phép nhập liệu', correct: false },
      { text: 'Dùng một số vùng nhớ chung làm phòng đệm', correct: false }
    ]
  },
{
    question: 'Một hệ thống thư mục tập tin có cấu trúc cây',
    answers: [
      { text: 'Là một đặc trưng không cần thiết gây nhiều tranh cãi', correct: false },
      { text: 'Không phương án nào ở trên', correct: false },
      { text: 'Không có tính chất căn bản khi chúng ta có hàng triệu tập tin', correct: false },
      { text: 'Cho phép lưu trữ và tìm kiếm các tập tin dễ dàng', correct: true }
    ]
  },
{
    question: 'Thiết bị ngoại vi trả lại cho vi xử lý một trị số (mã trở về) để vi xử lý',
    answers: [
      { text: 'Điều khiển thiết bị ngoại vi dừng trao đổi vào/ra', correct: false },
      { text: 'Dùng giá trị để thực hiện các thao tác xử lý khác', correct: false },
      { text: 'Thông báo giá trị mã trở về cho người sử dụng biết', correct: false },
      { text: 'Đánh giá chất lượng thực hiện phép vào/ra', correct: true }
    ]
  },
{
    question: 'Trong hệ điều hành để tổ chức, quản lý dữ liệu trên thiết bị lưu trữ cần',
    answers: [
      { text: 'Phân vùng lưu trữ liên tiếp riêng độc lập cho từng file', correct: false },
      { text: 'Tổ chức các bảng quản lý theo từng nhóm file', correct: false },
      { text: 'Tất cả đều đúng', correct: false },
      { text: 'Tổ chức danh sách móc nối thông tin về file', correct: true }
    ]
  },
{
    question: 'Khi nhận được yêu cầu ngắt từ thiết bị ngoại vi, tùy theo tín hiệu ngắt, vi xử lý sẽ',
    answers: [
      { text: 'Lưu trữ lại và cờ xử lý ngắt sau đó', correct: false },
      { text: 'Hủy bỏ tín hiệu ngắt', correct: false },
      { text: 'Tất cả đều đúng', correct: true },
      { text: 'Thực hiện ngắt ngay', correct: false }
    ]
  },
{
    question: 'SPOOL có mấy giai đoạn, là những giai đoạn nào?',
    answers: [
      { text: '2 giai đoạn: thực hiện, xử lí kết thúc', correct: true },
      { text: '3 giai đoạn: khởi tạo, thực hiện, kết thúc.', correct: false },
      { text: '3 giai đoạn: khởi tạo, xử lí, kết thúc.', correct: false },
      { text: '4 giai đoạn: khởi tạo, thực hiện, xử lí, kết thúc.', correct: false }
    ]
  },
{
    question: 'Thư mục gốc của đĩa chứa thông tin',
    answers: [
      { text: 'Danh mục hệ thống file trên đĩa', correct: true },
      { text: 'Thông tin về phân vùng khởi động đĩa.', correct: false },
      { text: 'Thông số các bảng phân vùng đĩa', correct: false },
      { text: 'Danh sách móc nối các liên cung của cùng một tệp', correct: false }
    ]
},
{
    question: 'Cài đặt thư mục nào được sử dụng trong phần lớn các hệ điều hành',
    answers: [
      { text: 'Cấu trúc thư mục không có chu trình', correct: false },
      { text: 'Cấu trúc thư mục một mức', correct: false },
      { text: 'Cấu trúc thư mục hai mức', correct: false },
      { text: 'Cấu trúc thư mục dạng cây', correct: true }
    ]
  }
]
