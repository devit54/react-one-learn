import React from "react";
import { FileCode, Code, Layers, Users, Calendar, Laptop, Coffee, Cpu } from "lucide-react";

export type CourseLevel = "Cơ bản" | "Trung bình" | "Nâng cao";

export interface Course {
  id: string;
  title: string;
  description: string;
  level: CourseLevel;
  icon: React.ReactNode;
  features: string[];
  price: string;
  popular?: boolean;
  longDescription?: string;
  duration?: string;
  learningOutcomes?: string[];
  curriculum?: {
    title: string;
    lessons: string[];
  }[];
  targetAudience?: string[];
  courseBenefits?: {
    title: string;
    details: string[];
    icon: React.ReactNode;
  }[];
  updateDate?: string;
  students?: number;
}

export const courseData: Course[] = [
  {
    id: "html-css-basics",
    title: "Khóa Học HTML CSS Từ (1 Kèm 1 Online) – Cơ Bản Đến Nâng Cao",
    description:
      "Khóa học Lập trình HTML & CSS từ Cơ Bản đến Nâng Cao giúp nắm vững kiến thức HTML & CSS một cách bài bản, tự tin xây dựng các trang web đẹp mắt, ấn tượng và hiển thị tốt trên nhiều thiết bị khác nhau.",
    level: "Cơ bản",
    icon: <FileCode className="h-6 w-6 text-brand-blue" />,
    features: [
      "Thiết kế web responsive",
      "Flexbox và Grid Layout",
      "CSS Animation và Transitions",
      "Dự án portfolio cá nhân",
      "Hỗ trợ 1-1 từ giảng viên",
    ],
    price: "5.500.000đ",
    updateDate: "12/2025",
    students: 8891,
    learningOutcomes: [
      "Tự tin xây dựng và thiết kế website từ đầu đến cuối.",
      "Nắm vững cú pháp HTML & CSS một cách bài bản và chuyên sâu.",
      "Sử dụng thành thạo các công cụ và kỹ thuật lập trình web tiên tiến.",
      "Biết cách tạo các trang web với giao diện bắt mắt, thu hút người dùng.",
      "Có khả năng xây dựng các trang web tương thích với mọi thiết bị, từ máy tính đến điện thoại di động.",
      "Tự tin tham gia các dự án lập trình web thực tế. Mở ra cơ hội phát triển sự nghiệp trong lĩnh vực lập trình web đầy tiềm năng.",
    ],
    curriculum: [
      {
        title: "Giới Thiệu & Cài Đặt Môi Trường",
        lessons: [
          "Giới thiệu lộ trình: Tổng quan về nội dung học.",
          "Cài VS Code và Live Server: Thiết lập công cụ lập trình.",
          "Khởi tạo folder dự án: Tạo thư mục cho dự án đầu tiên.",
        ],
      },
      {
        title: "HTML Cơ Bản",
        lessons: [
          "Tổng quan HTML: Hiểu HTML và thẻ self-close.",
          "Thẻ quan trọng: Dùng h1-h6, p, b, i, ul, ol, li, a, img, div, span.",
          "Semantic HTML: Giới thiệu header, main, nav, section, article, aside, footer và so sánh với div.",
        ],
      },
      {
        title: "CSS Cơ Bản",
        lessons: [
          "CSS là gì: Khái niệm cơ bản về CSS.",
          "Nhúng CSS: Dùng inline, internal, external CSS.",
          "Cú pháp CSS: Hiểu selector, property, value.",
          'Selector cơ bản: Chọn theo thẻ, class, id, attribute (input[type="text"]).',
          "CSS chữ: Định dạng font-size, font-weight, font-family, color, line-height.",
          "Selector nâng cao: Dùng div p, div > p, h1 + p.",
          "Pseudo-class: Tập trung :hover, :active, :focus.",
          "Border: Thiết lập viền cho phần tử.",
          "Màu nền: Đặt background cho phần tử.",
          "Thứ tự ưu tiên: Quy tắc áp dụng CSS.",
          "Tính kế thừa: Hiểu cách CSS kế thừa thuộc tính.",
          "Form cơ bản: Dùng <input>, <textarea>, <button>, <label>.",
        ],
      },
      {
        title: "CSS Box Model & Kích Thước Phần Tử",
        lessons: [
          "Universal Selector: Chọn tất cả phần tử với *.",
          "box-sizing: Điều chỉnh cách tính kích thước.",
          "Box model: Hiểu content, padding, border, margin.",
          "Margin-collapse: Hiện tượng gộp margin.",
          "Kích thước: Đặt width, height, max-width, v.v.",
          "Display: Dùng block, inline, inline-block, none.",
          "Canh giữa: Sử dụng margin để căn giữa block-level elements.",
        ],
      },
      {
        title: "CSS Layout Cơ Bản",
        lessons: [
          "Định vị: Dùng static, relative, absolute, fixed.",
          "Pseudo-element: Tập trung ::before, ::after.",
          "Shadow: Thêm box-shadow, text-shadow.",
          "Visibility và overflow: Ẩn/hiện và xử lý tràn nội dung.",
          "object-fit: Điều chỉnh cách hiển thị ảnh/video.",
          "z-index: Quản lý thứ tự lớp chồng lấn.",
        ],
      },
      {
        title: "CSS Layout - Flex",
        lessons: [
          "Thuật ngữ: Hiểu khái niệm Flex cơ bản.",
          "Flex container: Thiết lập hiển thị flex.",
          "Flex item: Điều chỉnh các phần tử con.",
          "object-fit: Tái khám phá thuộc tính này trong Flex.",
          "Google Font: Thêm font từ Google vào web.",
        ],
      },
      {
        title: "CSS Layout - Grid",
        lessons: [
          "Thuật ngữ: Hiểu khái niệm Grid cơ bản.",
          "Grid vs Flexbox: So sánh và chọn cách dùng.",
          "Grid container: Đặt grid-template-columns, grid-template-rows, gap.",
          "Định vị trong Grid: Dùng grid-column, grid-row.",
        ],
      },
      {
        title: "CSS Responsive Design (Media Queries)",
        lessons: [
          "Media Queries: Điều chỉnh giao diện theo kích thước màn hình.",
          "Breakpoints: Đặt điểm ngắt cho mobile, tablet, desktop.",
          "Đơn vị tương đối: Dùng %, vw, vh, rem, em để linh hoạt.",
          "Ẩn/hiện phần tử: Điều chỉnh hiển thị trên các thiết bị.",
          "Responsive hình ảnh: Tối ưu ảnh với max-width và object-fit.",
        ],
      },
    ],
    targetAudience: [
      "Sinh viên CNTT mong muốn bổ túc kiến thức để đủ điều kiện đi làm công ty.",
      "Đang học lập trình nhưng mất gốc hoặc không tự tin.",
      "Chưa có kiến thức lập trình (zero) và muốn bắt đầu học bài bản từ đầu.",
      "Làm trái ngành và mong muốn chuyển đổi sang lĩnh vực lập trình an toàn và hiệu quả.",
      "Đang đi làm nhưng muốn cải thiện kiến thức để tiến xa hơn trong sự nghiệp (senior).",
    ],
    courseBenefits: [
      {
        title: "Học 1 Kèm 1 - Đảm bảo chất lượng Tốt Nhất",
        details: [
          "Bạn sẽ được theo sát và hỗ trợ 1-1 bởi giảng viên. Đảm bảo chất lượng học tập đạt kết quả tốt nhất.",
          "Nếu HỌC CHẬM bạn không cần lo lắng không theo kịp chương trình, giảng viên sẽ đi chậm để đảm bảo bạn nắm chắc 100% kiến thức.",
          "Nếu học nhanh, bạn có thể nhanh chóng kết thúc chương trình để đi làm công ty.",
        ],
        icon: <Users className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Học online - Tiết kiệm thời gian di chuyển",
        details: [
          "Thay vì phải di chuyển vất vả trên đường giữa dòng người đông đúc. Giờ đây, bạn chỉ cần mở laptop để bắt đầu học ngay tại nhà. Tiết kiệm thời gian, tránh căng thẳng, và tập trung hoàn toàn vào việc học!",
        ],
        icon: <Laptop className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Lịch học linh hoạt",
        details: [
          "LearnCode sắp xếp lịch học theo ý của bạn. Học đúng thời điểm mà bạn cảm thấy thoải mái nhất.",
          "Dễ dàng thay đổi lịch học trong khi học nếu bạn có việc bận. Không làm gián đoạn tiến độ học tập của bạn.",
          "LearnCode có thể sắp xếp thời gian học cho bạn từ 8h đến 23h, kể cả cuối tuần.",
        ],
        icon: <Calendar className="w-10 h-10 text-brand-blue" />,
      },
    ],
  },
  {
    id: "javascript-advanced",
    title: "JavaScript",
    description: "Thành thạo JavaScript hiện đại và các frameworks phổ biến",
    level: "Trung bình",
    icon: <Code className="h-6 w-6 text-brand-blue" />,
    features: [
      "ES6+ và JavaScript hiện đại",
      "DOM Manipulation",
      "Async/Await và Promises",
      "HTTP Requests và APIs",
      "Hỗ trợ 1-1 từ giảng viên",
    ],
    price: "9.000.000đ",
    popular: true,
    longDescription:
      "Khóa học JavaScript giúp bạn thành thạo ngôn ngữ lập trình phổ biến nhất hiện nay. Từ cú pháp ES6+ hiện đại đến xử lý bất đồng bộ và tương tác với APIs.",
    duration: "50 giờ (20 buổi)",
    learningOutcomes: [
      "Nắm vững kiến thức JavaScript từ con số 0, từ cú pháp cơ bản đến các khái niệm chuyên sâu, đảm bảo bạn có nền tảng vững chắc để tiếp tục phát triển kỹ năng trong tương lai.",
      "Thành thạo các thuật toán phổ biến, rèn luyện tư duy logic, giải quyết vấn đề hiệu quả thông qua các thuật toán thường gặp trong lập trình.",
      "Đủ khả năng xây dựng ứng dụng web hoàn chỉnh, đáp ứng mọi nhu cầu từ thị trường.",
      "Tự tin tham gia các dự án thực tế, tích lũy kinh nghiệm và nâng cao kỹ năng.",
      "Kỹ năng xử lý lỗi chuyên nghiệp, trang bị khả năng phát hiện, phân tích và sửa lỗi nhanh chóng, đảm bảo chương trình hoạt động ổn định và trơn tru.",
      "Phát triển tư duy lập trình logic, rèn luyện tư duy sáng tạo, phân tích yêu cầu, xây dựng thuật toán tối ưu, tạo ra những ứng dụng thông minh và hiệu quả.",
      "Mở ra cơ hội việc làm hấp dẫn, nắm vững kiến thức và kỹ năng cần thiết để tự tin ứng tuyển vào các công ty CNTT lớn, có mức lương cao và phúc lợi tốt.",
    ],
    curriculum: [
      {
        title: "Định Hướng Và Cài Đặt Môi Trường",
        lessons: [
          "Giới thiệu JS và chương trình: Tổng quan về JavaScript và lộ trình học.",
          "Cài đặt VS Code: Hướng dẫn cài công cụ lập trình VS Code.",
          "Giao diện VS Code: Làm quen với giao diện VS Code.",
          "Khởi tạo dự án: Thiết lập dự án JavaScript đầu tiên.",
          "Cài Live Server: Dùng Live Server để xem code thay đổi tức thì.",
          "Dùng console.log: Hiển thị kết quả bằng console.log.",
        ],
      },
      {
        title: "Nền Tảng",
        lessons: [
          "Biến: Khai báo và dùng biến để lưu dữ liệu.",
          "Ghi chú: Viết ghi chú để quản lý code.",
          "Kiểu dữ liệu cơ bản: Làm quen với số, chuỗi, boolean, v.v.",
          "Array cơ bản: Dùng mảng để lưu danh sách dữ liệu.",
          "Object cơ bản: Tổ chức dữ liệu bằng object.",
          "Giá trị đặc biệt: null, undefined, NaN: Phân biệt các giá trị đặc biệt.",
          "Chuyển đổi kiểu: Boolean, Number, String: Chuyển đổi giữa các kiểu dữ liệu",
        ],
      },
      {
        title: "Toán Tử (Operators)",
        lessons: [
          "Toán tử số học: cộng, trừ, nhân, chia: Dùng phép tính cơ bản.",
          "Toán tử ++ và —: Tăng/giảm giá trị biến nhanh.",
          "Toán tử %: Dùng phép chia lấy dư.",
          "Toán tử gán: Gán giá trị kết hợp phép tính.",
          "So sánh bằng và khác: So sánh giá trị và kiểu dữ liệu.",
          "Các Toán tử so sánh còn lại: Lớn hơn, nhỏ hơn, v.v.",
          "Toán tử logic: Kết hợp điều kiện với AND, OR, NOT.",
          "Độ ưu tiên toán tử: Thứ tự thực hiện các toán tử.",
          "Toán tử Ternary: Viết điều kiện ngắn gọn.",
        ],
      },
      {
        title: "Câu lệnh Điều kiện",
        lessons: [
          "if: Chạy code dựa trên điều kiện cụ thể.",
          "truthy, falsy: Hiểu giá trị true/false trong JS.",
          "switch: Xử lý nhiều trường hợp thay if-else.",
        ],
      },
      {
        title: "Câu lệnh Vòng lặp",
        lessons: [
          "for: Lặp với số lần xác định.",
          "while: Lặp khi điều kiện đúng.",
          "do-while: Chạy ít nhất một lần trước khi kiểm tra.",
          "Debug: Tìm và sửa lỗi bằng công cụ debug.",
        ],
      },
      {
        title: "Các Thuật toán Cơ bản",
        lessons: [
          "Tính tổng: Tính tổng dãy số.",
          "Cờ tín hiệu: Dùng biến cờ để điều khiển.",
          "Tìm max, min: Tìm giá trị lớn/nhỏ nhất.",
          "So sánh phần tử: So sánh phần tử hiện tại và trước đó.",
        ],
      },
      {
        title: "Hàm Cơ bản",
        lessons: [
          "Khai báo: Định nghĩa hàm trong JS.",
          "Parameter và argument: Truyền và dùng dữ liệu trong hàm.",
          "Khai báo kiểu 2: Cú pháp khai báo hàm khác.",
          "return: Trả giá trị từ hàm.",
          "Hàm ẩn danh: Dùng hàm không tên.",
        ],
      },
      {
        title: "HTML & CSS Cơ bản",
        lessons: [
          "HTML cơ bản: Cấu trúc cơ bản của một trang web.",
          "CSS cơ bản: Định dạng và tạo kiểu cho trang web.",
        ],
      },
      {
        title: "DOM & Event Cơ bản",
        lessons: [
          "Thuật ngữ: Hiểu DOM và Event.",
          "Traverse: Di chuyển giữa các phần tử DOM.",
          "Truy vấn: Chọn phần tử HTML bằng JS.",
          "Thao tác attribute: Thay đổi thuộc tính HTML.",
          "textContent, innerHTML: Sửa nội dung văn bản/HTML.",
          "Thêm, xoá node: Tạo/xoá phần tử trên web.",
          "Event cơ bản: Xử lý sự kiện như click, hover.",
        ],
      },
      {
        title: "Scope",
        lessons: [
          "Scope là gì: Khái niệm phạm vi trong JS.",
          "Global scope: Biến toàn cục.",
          "Function scope: Biến cục bộ trong hàm.",
          "Nested Scope: Phạm vi lồng nhau.",
          "let, const: Quản lý biến với let, const.",
          "use strict: Chế độ nghiêm ngặt tránh lỗi.",
          'hoisting: Hiện tượng "hoisting" trong JS.',
        ],
      },
      {
        title: "Giá trị Tham chiếu & Nguyên thủy",
        lessons: [
          "Giá trị nguyên thuỷ: Cách lưu số, chuỗi, v.v.",
          "Giá trị tham chiếu: Cách object, array hoạt động.",
          "Array là tham chiếu: Đặc điểm của mảng.",
          "So sánh tham chiếu: So sánh giá trị và tham chiếu.",
          "Truyền vào hàm: Truyền tham chiếu/nguyên thuỷ.",
        ],
      },
      {
        title: "Hàm Nâng cao",
        lessons: [
          "Arrow function: Sử dụng cú pháp ngắn gọn và hiểu sự khác biệt với hàm thường.",
          "Callback function: Truyền hàm làm tham số để xử lý bất đồng bộ.",
          "Default parameters: Đặt giá trị mặc định cho tham số hàm.",
          "Rest parameters: Thu thập nhiều tham số thành một mảng.",
        ],
      },
      {
        title: "Array Nâng cao",
        lessons: [
          "Các hàm tiện ích trong array: Sử dụng map, filter, reduce, v.v. để thao tác mảng.",
          "Array destructuring: Trích xuất dữ liệu từ mảng một cách gọn gàng.",
          "for…of: Lặp qua mảng với cú pháp đơn giản và hiện đại.",
        ],
      },
      {
        title: 'Cách xác định từ khoá "this"',
        lessons: [
          'this tại Global: "this" trong phạm vi toàn cục.',
          'this trong function và method: "this" trong các ngữ cảnh.',
          'bind, call, apply: Thay đổi giá trị "this".',
          'this trong arrow function: Đặc điểm của "this" trong arrow.',
        ],
      },
      {
        title: "Object Nâng cao",
        lessons: [
          "Object destructuring: Trích xuất dữ liệu từ object một cách ngắn gọn.",
          "Xoá thuộc tính: Loại bỏ thuộc tính khỏi object.",
          "Truy cập bằng cặp dấu ngoặc vuông: Truy cập linh hoạt hơn so với dấu chấm.",
          "Class: Định nghĩa và sử dụng class trong lập trình hướng đối tượng.",
          "Kế thừa: Cơ chế kế thừa trong class, tái sử dụng code.",
          "Override: Ghi đè phương thức từ class cha.",
        ],
      },
      {
        title: "Thao tác với String",
        lessons: [
          "Các hàm tiện ích thao tác với string: Sử dụng split, join, v.v.",
          "Template String (string literal): Viết chuỗi linh hoạt với cú pháp hiện đại.",
        ],
      },
      {
        title: "Module (import/export)",
        lessons: [
          "Module là gì: Khái niệm module và lợi ích trong lập trình.",
          "Export: Xuất biến, hàm hoặc class từ một file.",
          "Import: Nhập dữ liệu từ module khác vào file hiện tại.",
          "Default export/import: Export/import mặc định cho thành phần chính.",
          "Named export/import: Xuất/nhập nhiều thành phần với tên cụ thể.",
        ],
      },
      {
        title: "Bất đồng bộ",
        lessons: [
          "Bất đồng bộ là gì: Khái niệm bất đồng bộ.",
          "Callback hell: Vấn đề lồng callback.",
          "Promise: Quản lý bất đồng bộ với Promise.",
          "Promise chain: Xâu chuỗi Promise.",
          "Hàm Promise tiện ích: Dùng Promise.all, Promise.race, v.v.",
          "async await: Viết code bất đồng bộ dễ đọc.",
          "ajax (fetch): Gửi yêu cầu server bằng fetch.",
        ],
      },
      {
        title: "Đồ Án Cuối Khoá",
        lessons: [
          "Ứng dụng thương mại điện tử (E-commerce)",
          "Ứng dụng đặt đồ ăn (Food Delivery)",
          "Ứng dụng học trực tuyến (E-learning)",
          "Ứng dụng quản lý sinh viên",
          "Hệ thống quản lý thư viện",
          "Blog cá nhân",
          "Hệ thống quản lý đặt phòng khách sạn",
          "Ứng dụng theo dõi sức khỏe (Health Tracker)",
          "Ứng dụng quản lý chi tiêu cá nhân",
          "Mạng xã hội mini",
          "...hoặc bất kỳ chủ đề nào dựa trên ý tưởng của học viên",
        ],
      },
    ],
    targetAudience: [
      "Sinh viên CNTT mong muốn bổ túc kiến thức để đủ điều kiện đi làm công ty.",
      "Đang học lập trình nhưng mất gốc hoặc không tự tin.",
      "Chưa có kiến thức lập trình (zero) và muốn bắt đầu học bài bản từ đầu.",
      "Làm trái ngành và mong muốn chuyển đổi sang lĩnh vực lập trình an toàn và hiệu quả.",
      "Đang đi làm nhưng muốn cải thiện kiến thức để tiến xa hơn trong sự nghiệp (senior).",
    ],
    courseBenefits: [
      {
        title: "Học 1 Kèm 1 - Đảm bảo chất lượng Tốt Nhất",
        details: [
          "Bạn sẽ được theo sát và hỗ trợ 1-1 bởi giảng viên. Đảm bảo chất lượng học tập đạt kết quả tốt nhất.",
          "Nếu HỌC CHẬM bạn không cần lo lắng không theo kịp chương trình, giảng viên sẽ đi chậm để đảm bảo bạn nắm chắc 100% kiến thức.",
          "Nếu học nhanh, bạn có thể nhanh chóng kết thúc chương trình để đi làm công ty.",
        ],
        icon: <Users className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Học online - Tiết kiệm thời gian di chuyển",
        details: [
          "Thay vì phải di chuyển vất vả trên đường giữa dòng người đông đúc. Giờ đây, bạn chỉ cần mở laptop để bắt đầu học ngay tại nhà. Tiết kiệm thời gian, tránh căng thẳng, và tập trung hoàn toàn vào việc học!",
        ],
        icon: <Laptop className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Lịch học linh hoạt",
        details: [
          "LearnCode sắp xếp lịch học theo ý của bạn. Học đúng thời điểm mà bạn cảm thấy thoải mái nhất.",
          "Dễ dàng thay đổi lịch học trong khi học nếu bạn có việc bận. Không làm gián đoạn tiến độ học tập của bạn.",
          "LearnCode có thể sắp xếp thời gian học cho bạn từ 8h đến 23h, kể cả cuối tuần.",
        ],
        icon: <Calendar className="w-10 h-10 text-brand-blue" />,
      },
    ],
  },
  {
    id: "react",
    title: "React",
    description: "Xây dựng ứng dụng web hiện đại với React",
    level: "Nâng cao",
    icon: <Layers className="h-6 w-6 text-brand-blue" />,
    features: [
      "React Hooks và Context API",
      "State Management với Redux",
      "API Routes và Authentication",
      "Hỗ trợ 1-1 từ giảng viên",
    ],
    price: "8.990.000đ",
    longDescription:
      "Khóa học React giúp bạn làm chủ các công nghệ hiện đại nhất trong phát triển frontend. Bạn sẽ học cách xây dựng các ứng dụng web đa nền tảng, nhanh chóng và tối ưu.",
    duration: "42 giờ (17 buổi)",
    learningOutcomes: [
      "Hiểu rõ khái niệm nền tảng của React, cách thức hoạt động và các thành phần cốt lõi",
      "Thành thạo React Cơ bản, bao gồm cú pháp JSX, components, state, props, lifecycle",
      "Làm chủ React Hooks, công cụ mạnh mẽ giúp viết code React dễ dàng, hiệu quả và tái sử dụng cao",
      "Tự tin sử dụng React Router 7.x để tạo ứng dụng web SPA mượt mà, linh hoạt",
      "Hiểu rõ cách thức quản lý state phức tạp với Context API và Redux",
      "Tối ưu hóa hiệu suất ứng dụng React bằng Redux Toolkit",
      "Học cách triển khai authentication cho ứng dụng React",
      "Áp dụng các kỹ thuật tối ưu hóa ứng dụng React nâng cao",
      "Hoàn thành project cuối môn, áp dụng kiến thức đã học vào thực tế",
    ],
    curriculum: [
      {
        title: "Khái Niệm Nền Tảng",
        lessons: [
          "React là gì? Tại sao dùng React: Khái niệm React và lợi ích khi sử dụng",
          "Virtual DOM: Hiểu cách Virtual DOM tăng hiệu suất",
          "Imperative và Declarative: So sánh 2 cách lập trình trong React",
          "Cài đặt môi trường: Thiết lập Node.js, Vite để phát triển",
          "Cấu trúc folder: Làm quen với cách tổ chức dự án React",
        ],
      },
      {
        title: "JSX và kiến thức cơ bản",
        lessons: [
          "JSX syntax và cách hoạt động",
          "Components và Props",
          "State và Lifecycle",
          "Handling Events",
          "Conditional Rendering",
        ],
      },
      {
        title: "React Hooks",
        lessons: [
          "useState & useEffect",
          "useContext & useReducer",
          "useMemo & useCallback",
          "Custom Hooks",
          "Rules of Hooks",
        ],
      },
      {
        title: "Advanced Topics",
        lessons: [
          "Context API",
          "React Router DOM v7",
          "Redux Toolkit",
          "API CRUD với ExpressJS",
          "Redux Thunk & API",
          "Authentication & Authorization",
          "Tối ưu ứng dụng React",
          "Đồ Án Cuối Khoá",
        ],
      },
    ],
    targetAudience: [
      "Sinh viên CNTT mong muốn bổ túc kiến thức để đủ điều kiện đi làm công ty",
      "Đang học lập trình nhưng mất gốc hoặc không tự tin",
      "Chưa có kiến thức lập trình (zero) và muốn bắt đầu học bài bản từ đầu",
      "Làm trái ngành và mong muốn chuyển đổi sang lĩnh vực lập trình an toàn và hiệu quả",
      "Đang đi làm nhưng muốn cải thiện kiến thức để tiến xa hơn trong sự nghiệp (senior)",
      "Đã có kiến thức cơ bản JavaScript",
    ],
    courseBenefits: [
      {
        title: "Học 1 Kèm 1 - Đảm bảo chất lượng Tốt Nhất",
        details: [
          "Bạn sẽ được theo sát và hỗ trợ 1-1 bởi giảng viên. Đảm bảo chất lượng học tập đạt kết quả tốt nhất.",
          "Nếu HỌC CHẬM bạn không cần lo lắng không theo kịp chương trình, giảng viên sẽ đi chậm để đảm bảo bạn nắm chắc 100% kiến thức.",
          "Nếu học nhanh, bạn có thể nhanh chóng kết thúc chương trình để đi làm công ty.",
        ],
        icon: <Users className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Học online - Tiết kiệm thời gian di chuyển",
        details: [
          "Thay vì phải di chuyển vất vả trên đường giữa dòng người đông đúc. Giờ đây, bạn chỉ cần mở laptop để bắt đầu học ngay tại nhà. Tiết kiệm thời gian, tránh căng thẳng, và tập trung hoàn toàn vào việc học!",
        ],
        icon: <Laptop className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Lịch học linh hoạt",
        details: [
          "LearnCode sắp xếp lịch học theo ý của bạn. Học đúng thời điểm mà bạn cảm thấy thoải mái nhất.",
          "Dễ dàng thay đổi lịch học trong khi học nếu bạn có việc bận. Không làm gián đoạn tiến độ học tập của bạn.",
          "LearnCode có thể sắp xếp thời gian học cho bạn từ 8h đến 23h, kể cả cuối tuần.",
        ],
        icon: <Calendar className="w-10 h-10 text-brand-blue" />,
      },
    ],
  },
  {
    id: "nextJs",
    title: "NextJs",
    description: "Xây dựng ứng dụng web hiện đại với Next.js",
    level: "Nâng cao",
    icon: <Layers className="h-6 w-6 text-brand-blue" />,
    features: [
      "Dynamic Routing và SSR",
      "Xây dựng API Routes",
      "Tích hợp Redux vào Next.js",
      "Xác thực - phân quyền",
      "Tối ưu về SEO",
      "Hỗ trợ 1-1 từ giảng viên",
    ],
    price: "6.990.000đ",
    longDescription:
      "Khóa học Next.js sẽ giúp bạn làm chủ App Router và các tính năng mới nhất trong phiên bản Next.js 16. Học cách xây dựng ứng dụng web hiệu suất cao với thư viện Redux, tối ưu SEO, và triển khai nhanh chóng trên các nền tảng cloud như Vercel.",
    duration: "30 giờ (12 buổi)",
    learningOutcomes: [
      "Hiểu rõ kiến trúc và lợi ích của App Router trong Next.js 16.",
      "Thành thạo quản lý routes, layouts, và nested routing trong App Router.",
      "Tích hợp các phương pháp lấy dữ liệu như fetching trong Server Components.",
      "Triển khai hệ thống Authentication & Authorization an toàn với JWT.",
      "Xây dựng ứng dụng web hiệu suất cao với Server Components và Client Components.",
      "Áp dụng Redux để quản lý trạng thái toàn cục của ứng dụng.",
      "Xây dựng API routes và xử lý middleware để kiểm soát truy cập.",
      "Tối ưu hóa và triển khai ứng dụng Next.js lên các nền tảng cloud như Vercel.",
    ],
    curriculum: [
      {
        title: "Giới thiệu về Next.js 16 và App Router",
        lessons: [
          "Tổng quan về Next.js 16 và những cải tiến mới.",
          "Hiểu về App Router: Lợi ích và sự khác biệt so với Pages Router.",
          "Thiết lập môi trường phát triển Next.js 16.",
        ],
      },
      {
        title: "Kiến trúc App Router",
        lessons: [
          "Cấu trúc thư mục trong App Router.",
          "Giới thiệu app/ directory.",
          "Cấu hình routes với App Router.",
        ],
      },
      {
        title: "Server Components và Client Components",
        lessons: [
          "Sự khác biệt giữa Server Components và Client Components.",
          "Khi nào sử dụng Server Components.",
          "Tích hợp Server Components vào App Router.",
        ],
      },
      {
        title: "Data Fetching trong App Router",
        lessons: [
          "Tính năng React Server Components và cách nó hoạt động.",
          "Sử dụng fetch và các phương thức khác trong Server Components.",
          "Dynamic routes với App Router",
          "Lấy dữ liệu phía client với React hooks.",
        ],
      },
      {
        title: "Layouts và Nested Routing",
        lessons: [
          "Tạo Layouts với App Router.",
          "Nested routing và phân quyền.",
          "Tích hợp Middleware trong App Router.",
        ],
      },
      {
        title: "Quản lý trạng thái với Redux trong Next.js",
        lessons: [
          "Giới thiệu về Redux và khi nào cần sử dụng nó.",
          "Thiết lập Redux trong ứng dụng Next.js 14.",
          "Tích hợp Redux với App Router và quản lý trạng thái giữa các components.",
          "Sử dụng Redux Toolkit: Tạo slice và quản lý actions, reducers.",
        ],
      },
      {
        title: "Form Handling và Xử lý dữ liệu người dùng",
        lessons: [
          "Cách xử lý form submission với App Router.",
          "Xác thực dữ liệu và xử lý lỗi.",
          "Tích hợp các thư viện React Hook Form.",
        ],
      },
      {
        title: "API Routes và Middleware",
        lessons: [
          "Giới thiệu về API routes trong App Router.",
          "Tạo các API route với App Router.",
          "Sử dụng Middleware để kiểm soát truy cập.",
        ],
      },
      {
        title: "Authentication & Authorization",
        lessons: [
          "Tích hợp các phương pháp xác thực người dùng với JWT.",
          "Quản lý phiên đăng nhập và bảo mật với Cookies, Session.",
        ],
      },
      {
        title: "Tối ưu hóa và triển khai ứng dụng",
        lessons: [
          "Tối ưu hóa hiệu năng ứng dụng Next.js 16.",
          "Tối ưu hóa cho SEO với App Router.",
          "Triển khai ứng dụng Next.js lên Vercel.",
        ],
      },
    ],
    targetAudience: [
      "Sinh viên CNTT mong muốn bổ túc kiến thức để đủ điều kiện đi làm công ty",
      "Đang học lập trình nhưng mất gốc hoặc không tự tin",
      "Chưa có kiến thức lập trình (zero) và muốn bắt đầu học bài bản từ đầu",
      "Làm trái ngành và mong muốn chuyển đổi sang lĩnh vực lập trình an toàn và hiệu quả",
      "Đang đi làm nhưng muốn cải thiện kiến thức để tiến xa hơn trong sự nghiệp (senior)",
      "Đã có kiến thức cơ bản React. Nếu chưa nắm vững React, bạn nên học trước React",
    ],
    courseBenefits: [
      {
        title: "Học 1 Kèm 1 - Đảm bảo chất lượng Tốt Nhất",
        details: [
          "Bạn sẽ được theo sát và hỗ trợ 1-1 bởi giảng viên. Đảm bảo chất lượng học tập đạt kết quả tốt nhất.",
          "Nếu HỌC CHẬM bạn không cần lo lắng không theo kịp chương trình, giảng viên sẽ đi chậm để đảm bảo bạn nắm chắc 100% kiến thức.",
          "Nếu học nhanh, bạn có thể nhanh chóng kết thúc chương trình để đi làm công ty.",
        ],
        icon: <Users className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Học online - Tiết kiệm thời gian di chuyển",
        details: [
          "Thay vì phải di chuyển vất vả trên đường giữa dòng người đông đúc. Giờ đây, bạn chỉ cần mở laptop để bắt đầu học ngay tại nhà. Tiết kiệm thời gian, tránh căng thẳng, và tập trung hoàn toàn vào việc học!",
        ],
        icon: <Laptop className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Lịch học linh hoạt",
        details: [
          "LearnCode sắp xếp lịch học theo ý của bạn. Học đúng thời điểm mà bạn cảm thấy thoải mái nhất.",
          "Dễ dàng thay đổi lịch học trong khi học nếu bạn có việc bận. Không làm gián đoạn tiến độ học tập của bạn.",
          "LearnCode có thể sắp xếp thời gian học cho bạn từ 8h đến 23h, kể cả cuối tuần.",
        ],
        icon: <Calendar className="w-10 h-10 text-brand-blue" />,
      },
    ],
  },
  {
    id: "Git",
    title: "Khóa Học Git Từ Cơ Bản Đến Nâng Cao",
    description:
      "Chinh phục kiến thức Git toàn diện từ A đến Z. Hệ thống bài giảng chi tiết, bám sát thực tế, giúp bạn nắm vững kiến thức Git từ cơ bản đến nâng cao.",
    level: "Cơ bản",
    icon: <FileCode className="h-6 w-6 text-brand-blue" />,
    duration: "15 giờ (6 buổi)",
    features: [
      "Thiết lập git và GitHub",
      "Các lệnh Git cơ bản và nâng cao",
      "Deploy dự án lên GitHub",
      "Quản lý các phiên bản thay đổi tiện lợi, nhanh chóng",
      "Hỗ trợ 1-1 từ giảng viên",
    ],
    price: "2.500.000đ",
    updateDate: "12/2025",
    students: 10000,
    learningOutcomes: [
      "Nắm vững các khái niệm Git cơ bản: repository, branch, commit, merge, HEAD, working directory, staging area,...",
      "Khám phá các tính năng nâng cao của Git: giải quyết xung đột branch, merge code chuyên nghiệp,...",
      "Nắm vững các nguyên tắc làm việc nhóm hiệu quả với Git: quản lý branch, giải quyết xung đột code, đồng bộ hóa dự án,...",
      "Kỹ năng đồng bộ dữ liệu giữa máy tính và GitHub một cách hiệu quả.",
      "Hiểu rõ quy trình làm việc với Git: khởi tạo repository, theo dõi thay đổi, lưu trữ và chia sẻ mã nguồn hiệu quả.",
      "Thành thạo các lệnh thao tác với Git: clone, add, commit, push, pull, fetch, merge,...",
      "Khả năng thiết lập và sử dụng GitHub, nền tảng quản lý kho lưu trữ Git phổ biến nhất.",
      "Nắm vững Git Flow - quy trình làm việc hiệu quả với Git cho các dự án phần mềm.",
    ],
    curriculum: [
      {
        title: "Giới Thiệu & Cài Đặt Môi Trường",
        lessons: [
          "Cài đặt môi trường: Cài Git trên máy tính.",
          "VCS và Git: Hiểu hệ thống quản lý phiên bản và Git.",
          "Repository: Khái niệm kho lưu trữ code.",
          "Commit: Ghi lại thay đổi trong dự án.",
          "Vùng làm việc: Làm quen Working Directory, Staging Area.",
          "Vẽ sơ đồ: Thực hành minh họa vùng làm việc Git.",
        ],
      },
      {
        title: "Thiết Lập & Quản Lý Thay Đổi",
        lessons: [
          "Cấu hình Git: Dùng git config để thiết lập thông tin.",
          "Gộp nhánh: Kết hợp nhánh bằng git merge, xóa nhánh với git branch -d.",
          "Hoàn tác thay đổi: Dùng git restore, git revert để quay lại.",
          "Thực hành: Tạo branch, merge và xử lý xung đột cơ bản.",
        ],
      },
      {
        title: "Remote & GitHub - Làm Việc Nhóm",
        lessons: [
          "Kết nối Remote: Liên kết với remote repository bằng git remote add.",
          "Đẩy và kéo code: Dùng git push, git pull, git fetch để đồng bộ.",
          "GitHub: Tạo Repository và Pull Request trên GitHub.",
          "Thực hành: Đẩy code và tạo PR trên GitHub.",
        ],
      },
      {
        title: "Quy Trình Thực Tế (Git Flow)",
        lessons: [
          "Git Flow: Quy trình làm việc với nhánh tính năng.",
          "Thực hành dự án: Tạo branch, đẩy code, tạo PR cho dự án mẫu.",
        ],
      },
    ],
    targetAudience: [
      "Sinh viên CNTT mong muốn bổ túc kiến thức để đủ điều kiện đi làm công ty.",
      "Đang học lập trình nhưng mất gốc hoặc không tự tin.",
      "Chưa có kiến thức lập trình (zero) và muốn bắt đầu học bài bản từ đầu.",
      "Làm trái ngành và mong muốn chuyển đổi sang lĩnh vực lập trình an toàn và hiệu quả.",
      "Đang đi làm nhưng muốn cải thiện kiến thức để tiến xa hơn trong sự nghiệp (senior).",
    ],
    courseBenefits: [
      {
        title: "Học 1 Kèm 1 - Đảm bảo chất lượng Tốt Nhất",
        details: [
          "Bạn sẽ được theo sát và hỗ trợ 1-1 bởi giảng viên. Đảm bảo chất lượng học tập đạt kết quả tốt nhất.",
          "Nếu HỌC CHẬM bạn không cần lo lắng không theo kịp chương trình, giảng viên sẽ đi chậm để đảm bảo bạn nắm chắc 100% kiến thức.",
          "Nếu học nhanh, bạn có thể nhanh chóng kết thúc chương trình để đi làm công ty.",
        ],
        icon: <Users className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Học online - Tiết kiệm thời gian di chuyển",
        details: [
          "Thay vì phải di chuyển vất vả trên đường giữa dòng người đông đúc. Giờ đây, bạn chỉ cần mở laptop để bắt đầu học ngay tại nhà. Tiết kiệm thời gian, tránh căng thẳng, và tập trung hoàn toàn vào việc học!",
        ],
        icon: <Laptop className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Lịch học linh hoạt",
        details: [
          "LearnCode sắp xếp lịch học theo ý của bạn. Học đúng thời điểm mà bạn cảm thấy thoải mái nhất.",
          "Dễ dàng thay đổi lịch học trong khi học nếu bạn có việc bận. Không làm gián đoạn tiến độ học tập của bạn.",
          "LearnCode có thể sắp xếp thời gian học cho bạn từ 8h đến 23h, kể cả cuối tuần.",
        ],
        icon: <Calendar className="w-10 h-10 text-brand-blue" />,
      },
    ],
  },
  {
    id: "oop",
    title: "Khóa Học Lập Trình Hướng Đối Tượng (OOP)",
    description: "Nắm vững tư duy và kỹ thuật lập trình hướng đối tượng – nền tảng cốt lõi cho mọi ngôn ngữ lập trình hiện đại.",
    level: "Cơ bản",
    icon: <Layers className="h-6 w-6 text-brand-blue" />,
    features: [
      "Bốn nguyên lý OOP: Encapsulation, Inheritance, Polymorphism, Abstraction",
      "Thiết kế Class và Object bài bản",
      "Abstract Class và Interface",
      "Thực hành bài tập cuối chương",
      "Hỗ trợ 1-1 từ giảng viên",
    ],
    price: "4.000.000đ",
    longDescription:
      "Khóa học Lập Trình Hướng Đối Tượng (OOP) giúp bạn nắm vững tư duy thiết kế phần mềm hiện đại. Từ khái niệm Class, Object đến 4 tính chất cốt lõi: Encapsulation, Inheritance, Abstraction và Polymorphism – bạn sẽ có nền tảng vững chắc để học bất kỳ ngôn ngữ lập trình nào.",
    duration: "20 giờ (8 buổi)",
    learningOutcomes: [
      "Hiểu rõ sự khác biệt giữa lập trình thủ tục và lập trình hướng đối tượng.",
      "Định nghĩa và sử dụng Class, Object, Attributes, Methods thành thạo.",
      "Nắm vững vai trò của Constructor và từ khóa this.",
      "Áp dụng Tính Đóng Gói (Encapsulation) với Access Modifiers, Getter và Setter.",
      "Triển khai Kế Thừa (Inheritance) với extends, Method Overriding và từ khóa super.",
      "Hiểu và sử dụng Abstract Class và Interface để đạt Tính Trừu Tượng (Abstraction).",
      "Vận dụng Tính Đa Hình (Polymorphism): Runtime Polymorphism và Interface Polymorphism.",
      "Tự tin tham gia các dự án OOP thực tế và học các framework hiện đại.",
    ],
    curriculum: [
      {
        title: "Giới Thiệu OOP",
        lessons: [
          "Lập trình thủ tục vs lập trình hướng đối tượng: Sự khác biệt và lý do cần OOP.",
          "Giới thiệu 4 tính chất OOP: Encapsulation, Inheritance, Polymorphism, Abstraction.",
          "Ví dụ thực tế: Mô hình hóa thế giới thực vào chương trình máy tính.",
          "Lợi ích OOP: Tái sử dụng code, dễ bảo trì và mở rộng.",
        ],
      },
      {
        title: "Class và Object",
        lessons: [
          "Lớp (Class): Bản thiết kế – khai báo bằng từ khóa class.",
          "Đối tượng (Object): Thể hiện cụ thể của lớp – tạo bằng từ khóa new.",
          "Mối quan hệ Class → Object: Một lớp có thể tạo ra nhiều đối tượng.",
          "Cú pháp khai báo lớp và khởi tạo đối tượng.",
        ],
      },
      {
        title: "Thuộc Tính (Attributes) và Phương Thức (Methods)",
        lessons: [
          "Thuộc tính (Attributes): Biến lưu trữ trạng thái đặc trưng của đối tượng.",
          "Phương thức (Methods): Hàm định nghĩa hành vi của đối tượng.",
          "Cú pháp khai báo thuộc tính và phương thức trong Java.",
          "Truy cập thuộc tính và gọi phương thức bằng toán tử dấu chấm (.).",
          "Ví dụ xuyên suốt: Lớp SinhVien với các thuộc tính maSV, hoTen, diemTB.",
        ],
      },
      {
        title: "Hàm Tạo (Constructor) & Từ Khóa this",
        lessons: [
          "Constructor là gì: Phương thức đặc biệt được gọi tự động khi tạo đối tượng.",
          "Hàm tạo mặc định (Default Constructor) và hàm tạo có tham số.",
          "Nạp chồng Constructor (Constructor Overloading).",
          "Từ khóa this: Phân biệt thuộc tính lớp và tham số cùng tên.",
          "Bài tập cuối chương.",
        ],
      },
      {
        title: "Tính Đóng Gói (Encapsulation)",
        lessons: [
          "Vấn đề khi truy cập trực tiếp dữ liệu: Mất kiểm soát, dữ liệu không hợp lệ.",
          "Access Modifiers: private, public, protected, default – bảng so sánh phạm vi truy cập.",
          "Getter Methods: Cung cấp quyền đọc thuộc tính private.",
          "Setter Methods: Kiểm soát việc thay đổi dữ liệu (có validation).",
          "Ví dụ hoàn chỉnh: Refactor lớp Student với private fields và public getter/setter.",
          "Bài tập cuối chương.",
        ],
      },
      {
        title: "Tính Kế Thừa (Inheritance)",
        lessons: [
          "Khái niệm kế thừa: Mối quan hệ IS-A, lớp cha (Superclass) và lớp con (Subclass).",
          "Từ khóa extends: Cú pháp khai báo lớp con.",
          "Những thành phần được kế thừa: public, protected và private.",
          "Đơn kế thừa trong Java và lý do tránh đa kế thừa lớp.",
          "Ghi đè phương thức (Method Overriding) và annotation @Override.",
          "Từ khóa super: Gọi constructor lớp cha và truy cập phương thức/thuộc tính lớp cha.",
          "Bài tập cuối chương.",
        ],
      },
      {
        title: "Tính Trừu Tượng (Abstraction)",
        lessons: [
          "Khái niệm trừu tượng: Tập trung vào 'Cái gì' thay vì 'Làm thế nào'.",
          "Abstract Class: Khai báo, abstract method, đặc điểm và quy tắc.",
          "Interface: Khai báo, abstract methods, constants, default/static methods (Java 8+).",
          "Đa kế thừa kiểu qua Interface: Một lớp implements nhiều interface.",
          "So sánh Abstract Class vs Interface: Khi nào dùng cái nào.",
          "Bài tập cuối chương.",
        ],
      },
      {
        title: "Tính Đa Hình (Polymorphism)",
        lessons: [
          "Khái niệm đa hình: Compile-time Polymorphism và Runtime Polymorphism.",
          "Runtime Polymorphism qua Method Overriding và Upcasting.",
          "Dynamic Method Dispatch: JVM xác định phương thức nào được gọi tại thời điểm chạy.",
          "Đa hình với Interface: 'Lập trình theo Interface' (Programming to an Interface).",
          "Ép kiểu đối tượng: Upcasting (an toàn) và Downcasting (tiềm ẩn rủi ro).",
          "Toán tử instanceof và xử lý ClassCastException.",
          "Bài tập cuối chương.",
        ],
      },
    ],
    targetAudience: [
      "Sinh viên CNTT mong muốn bổ túc kiến thức để đủ điều kiện đi làm công ty.",
      "Đang học lập trình nhưng chưa hiểu rõ tư duy OOP.",
      "Đã biết lập trình cơ bản và muốn học cách thiết kế code chuyên nghiệp hơn.",
      "Chuẩn bị học các ngôn ngữ/framework như Java, C++, C#, Python OOP.",
      "Đang đi làm nhưng muốn cải thiện kỹ năng thiết kế phần mềm.",
    ],
    courseBenefits: [
      {
        title: "Học 1 Kèm 1 - Đảm bảo chất lượng Tốt Nhất",
        details: [
          "Bạn sẽ được theo sát và hỗ trợ 1-1 bởi giảng viên. Đảm bảo chất lượng học tập đạt kết quả tốt nhất.",
          "Nếu HỌC CHẬM bạn không cần lo lắng không theo kịp chương trình, giảng viên sẽ đi chậm để đảm bảo bạn nắm chắc 100% kiến thức.",
          "Nếu học nhanh, bạn có thể nhanh chóng kết thúc chương trình để đi làm công ty.",
        ],
        icon: <Users className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Học online - Tiết kiệm thời gian di chuyển",
        details: [
          "Thay vì phải di chuyển vất vả trên đường giữa dòng người đông đúc. Giờ đây, bạn chỉ cần mở laptop để bắt đầu học ngay tại nhà. Tiết kiệm thời gian, tránh căng thẳng, và tập trung hoàn toàn vào việc học!",
        ],
        icon: <Laptop className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Lịch học linh hoạt",
        details: [
          "LearnCode sắp xếp lịch học theo ý của bạn. Học đúng thời điểm mà bạn cảm thấy thoải mái nhất.",
          "Dễ dàng thay đổi lịch học trong khi học nếu bạn có việc bận. Không làm gián đoạn tiến độ học tập của bạn.",
          "LearnCode có thể sắp xếp thời gian học cho bạn từ 8h đến 23h, kể cả cuối tuần.",
        ],
        icon: <Calendar className="w-10 h-10 text-brand-blue" />,
      },
    ],
  },
  {
    id: "cpp-basics",
    title: "Khóa Học C++ Từ Cơ Bản Đến Thành Thạo",
    description: "Học lập trình C++ từ nền tảng – ngôn ngữ mạnh mẽ được dùng rộng rãi trong hệ thống, game, nhúng và thi đấu lập trình.",
    level: "Cơ bản",
    icon: <Code className="h-6 w-6 text-brand-blue" />,
    features: [
      "Cú pháp C++ từ Hello World đến con trỏ",
      "Hàm, mảng, chuỗi và sắp xếp",
      "Con trỏ, tham chiếu và quản lý bộ nhớ động",
      "Thực hành code trực tiếp mỗi buổi",
      "Hỗ trợ 1-1 từ giảng viên",
    ],
    price: "5.000.000đ",
    longDescription:
      "Khóa học C++ Cơ Bản dẫn dắt bạn từ những dòng code đầu tiên đến các khái niệm nền tảng quan trọng nhất của ngôn ngữ C++. Với phương pháp thực hành 60-70% mỗi buổi, bạn sẽ tự tin viết và chạy code ngay từ buổi học đầu tiên.",
    duration: "28 tiết (9 buổi)",
    learningOutcomes: [
      "Cài đặt và sử dụng thành thạo môi trường lập trình C++ với VS Code và GCC.",
      "Nắm vững các kiểu dữ liệu, khai báo biến, hằng số và phạm vi biến trong C++.",
      "Sử dụng thành thạo tất cả các loại toán tử và hiểu thứ tự ưu tiên.",
      "Viết cấu trúc điều kiện (if/else, switch) và vòng lặp (for, while, do-while) hiệu quả.",
      "Thiết kế hàm: truyền tham trị, tham chiếu, hàm đệ quy và nạp chồng hàm.",
      "Làm việc thành thạo với mảng 1D/2D, kiểu string và các thuật toán sắp xếp cơ bản.",
      "Hiểu và sử dụng con trỏ, tham chiếu, cấp phát bộ nhớ động an toàn.",
      "Tự tin giải các bài toán lập trình cơ bản và có nền tảng vững để học C++ nâng cao.",
    ],
    curriculum: [
      {
        title: "Chương 1: Làm Quen Với C++",
        lessons: [
          "Cài đặt môi trường: VS Code, GCC/MinGW trên Windows/macOS/Linux.",
          "Cấu trúc file .cpp: #include, using namespace std, int main(), return 0.",
          "Lệnh xuất cout: in chuỗi, in biến, in nhiều giá trị liên tiếp.",
          "Lệnh nhập cin: đọc dữ liệu từ bàn phím.",
          "Viết và chạy chương trình Hello World đầu tiên.",
        ],
      },
      {
        title: "Chương 2: Biến & Kiểu Dữ Liệu",
        lessons: [
          "Các kiểu dữ liệu cơ bản: int, long long, float, double, char, bool, string.",
          "Khai báo và khởi tạo biến: cú pháp C++11 và từ khóa auto.",
          "Hằng số: khai báo bằng const.",
          "Chuyển đổi kiểu (Type Casting): C-style và static_cast<> kiểu C++.",
          "Phạm vi biến (Scope): biến toàn cục, biến cục bộ, biến trong khối {}.",
        ],
      },
      {
        title: "Chương 3: Toán Tử & Biểu Thức",
        lessons: [
          "Toán tử số học: +, -, *, /, % và gán kết hợp +=, -=, *=, /=, %=.",
          "Toán tử tăng giảm ++ và --: pre/post increment – cẩn thận với thứ tự.",
          "Toán tử so sánh: ==, !=, >, <, >=, <=.",
          "Toán tử logic: && (AND), || (OR), ! (NOT) và short-circuit evaluation.",
          "Thứ tự ưu tiên toán tử và nguyên tắc dùng ngoặc đơn khi nghi ngờ.",
        ],
      },
      {
        title: "Chương 4: Cấu Trúc Điều Kiện",
        lessons: [
          "Lệnh if, if/else, if/else if/else: phân nhánh theo điều kiện.",
          "switch-case: xử lý nhiều trường hợp, lưu ý fall-through và break.",
          "Toán tử ba ngôi (Ternary): điều_kiện ? giá_trị_đúng : giá_trị_sai.",
          "if lồng nhau (Nested if): ví dụ kiểm tra năm nhuận.",
        ],
      },
      {
        title: "Chương 5: Vòng Lặp",
        lessons: [
          "Vòng lặp for: cú pháp, đếm ngược, bước nhảy, range-based for (C++11).",
          "Vòng lặp while: kiểm tra điều kiện trước khi chạy.",
          "Vòng lặp do-while: chạy ít nhất 1 lần, kiểm tra điều kiện sau.",
          "break: thoát khỏi vòng lặp; continue: bỏ qua iteration hiện tại.",
          "Vòng lặp lồng nhau (Nested loop): ví dụ in bảng cửu chương.",
        ],
      },
      {
        title: "Chương 6: Hàm (Functions)",
        lessons: [
          "Khai báo và định nghĩa hàm: kiểu trả về, tên hàm, danh sách tham số.",
          "Hàm void và hàm trả về giá trị; tham số mặc định (default parameter).",
          "Truyền tham số: by value (bản sao) và by reference & (thay đổi biến gốc).",
          "Hàm đệ quy (Recursion): base case và recursive case – giai thừa, Fibonacci.",
          "Hàm nạp chồng (Function Overloading): cùng tên, khác tham số.",
        ],
      },
      {
        title: "Chương 7: Mảng & Chuỗi",
        lessons: [
          "Mảng 1 chiều: khai báo, khởi tạo, truy cập phần tử, duyệt bằng for.",
          "Mảng 2 chiều: khai báo ma trận, truy cập hàng/cột, duyệt vòng lặp lồng.",
          "Kiểu string: length(), at(), substr(), find(), replace(), nối chuỗi, so sánh.",
          "Sắp xếp mảng: Bubble Sort và hàm sort() từ thư viện <algorithm>.",
        ],
      },
      {
        title: "Chương 8: Con Trỏ & Tham Chiếu",
        lessons: [
          "Tham chiếu (Reference): &ref là bí danh của biến, ứng dụng truyền hàm.",
          "Con trỏ (Pointer): khai báo int* p, toán tử & (địa chỉ) và * (giải tham chiếu).",
          "Con trỏ null: nullptr – luôn kiểm tra trước khi sử dụng.",
          "Cấp phát bộ nhớ động: new/delete cho 1 phần tử và new[]/delete[] cho mảng.",
          "Con trỏ và mảng: pointer arithmetic và truyền mảng cho hàm.",
        ],
      },
    ],
    targetAudience: [
      "Người mới bắt đầu học lập trình, chưa biết bất kỳ ngôn ngữ nào.",
      "Sinh viên CNTT muốn học C++ để thi lập trình hoặc phỏng vấn.",
      "Đã biết ngôn ngữ khác (Python, Java...) và muốn học thêm C++.",
      "Muốn học lập trình hệ thống, nhúng, game hoặc thi đấu lập trình (competitive programming).",
      "Chuẩn bị nền tảng để học khóa C++ Nâng Cao.",
    ],
    courseBenefits: [
      {
        title: "Học 1 Kèm 1 - Đảm bảo chất lượng Tốt Nhất",
        details: [
          "Bạn sẽ được theo sát và hỗ trợ 1-1 bởi giảng viên. Đảm bảo chất lượng học tập đạt kết quả tốt nhất.",
          "Nếu HỌC CHẬM bạn không cần lo lắng không theo kịp chương trình, giảng viên sẽ đi chậm để đảm bảo bạn nắm chắc 100% kiến thức.",
          "Nếu học nhanh, bạn có thể nhanh chóng kết thúc chương trình để đi làm công ty.",
        ],
        icon: <Users className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Học online - Tiết kiệm thời gian di chuyển",
        details: [
          "Thay vì phải di chuyển vất vả trên đường giữa dòng người đông đúc. Giờ đây, bạn chỉ cần mở laptop để bắt đầu học ngay tại nhà. Tiết kiệm thời gian, tránh căng thẳng, và tập trung hoàn toàn vào việc học!",
        ],
        icon: <Laptop className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Lịch học linh hoạt",
        details: [
          "LearnCode sắp xếp lịch học theo ý của bạn. Học đúng thời điểm mà bạn cảm thấy thoải mái nhất.",
          "Dễ dàng thay đổi lịch học trong khi học nếu bạn có việc bận. Không làm gián đoạn tiến độ học tập của bạn.",
          "LearnCode có thể sắp xếp thời gian học cho bạn từ 8h đến 23h, kể cả cuối tuần.",
        ],
        icon: <Calendar className="w-10 h-10 text-brand-blue" />,
      },
    ],
  },
  {
    id: "cpp-advanced",
    title: "Khóa Học C++ Nâng Cao",
    description: "Chinh phục C++ chuyên sâu: OOP, Template, STL, xử lý ngoại lệ, File I/O và dự án tổng hợp thực tế.",
    level: "Nâng cao",
    icon: <Cpu className="h-6 w-6 text-brand-blue" />,
    features: [
      "OOP C++: Class, Kế thừa, Đa hình, vtable",
      "Template & STL: vector, map, set, algorithm",
      "Xử lý ngoại lệ chuyên nghiệp (RAII)",
      "File I/O và Filesystem C++17",
      "Dự án tổng hợp cuối khoá",
      "Hỗ trợ 1-1 từ giảng viên",
    ],
    price: "6.000.000đ",
    longDescription:
      "Khóa học C++ Nâng Cao đưa bạn từ lập trình thủ tục lên tư duy thiết kế hướng đối tượng chuyên nghiệp trong C++. Bạn sẽ nắm vững OOP, Generic Programming với Template, toàn bộ STL, xử lý ngoại lệ, File I/O và hoàn thành một dự án mini hoàn chỉnh.",
    duration: "11 buổi",
    learningOutcomes: [
      "Thiết kế Class chuyên nghiệp: Constructor, Destructor, Member Initializer List, this pointer.",
      "Áp dụng tính đóng gói với Access Modifiers, Operator Overloading và Static Members.",
      "Triển khai kế thừa đơn và bội, hàm ảo (virtual), abstract class trong C++.",
      "Hiểu sâu cơ chế đa hình tại thời điểm chạy: vtable, vptr, dynamic_cast, RTTI.",
      "Viết Generic Programming với Function Template và Class Template.",
      "Sử dụng thành thạo STL: vector, map, set, queue, stack, unordered_map và các thuật toán.",
      "Xử lý ngoại lệ chuyên nghiệp: try/catch/throw, custom exception, mô hình RAII.",
      "Đọc/ghi file text và binary, xử lý chuỗi với stringstream, quản lý file với filesystem C++17.",
      "Hoàn thành dự án Hệ Thống Quản Lý Thư Viện tích hợp toàn bộ kiến thức.",
    ],
    curriculum: [
      {
        title: "Chương 1: OOP Cơ Bản trong C++",
        lessons: [
          "Class và Object: định nghĩa class, tạo object, truy cập thành viên bằng (.).",
          "Constructor mặc định và Constructor có tham số.",
          "Destructor: tự động giải phóng tài nguyên khi object bị hủy.",
          "Member Initializer List: cách khởi tạo hiệu quả, bắt buộc với const member.",
          "this pointer: phân biệt thuộc tính và tham số; method chaining với return *this.",
        ],
      },
      {
        title: "Chương 2: Tính Đóng Gói (Encapsulation)",
        lessons: [
          "Access Modifiers: private, protected, public – ứng dụng thực tế qua ví dụ TaiKhoanNganHang.",
          "Getter (const) và Setter có validation logic.",
          "Operator Overloading: nạp chồng +, -, ==, << cho class Vector2D.",
          "Static Members: biến và phương thức tĩnh dùng chung cho toàn bộ class.",
        ],
      },
      {
        title: "Chương 3: Kế Thừa (Inheritance)",
        lessons: [
          "Kế thừa đơn: từ khóa public, protected, private inheritance.",
          "Gọi Constructor lớp cha từ lớp con qua initializer list.",
          "Hàm ảo (virtual function) và từ khóa override – kiểm tra tại compile-time.",
          "Abstract Class: pure virtual function (= 0) và không thể khởi tạo trực tiếp.",
          "Kế thừa bội (Multiple Inheritance) và cảnh báo Diamond Problem.",
        ],
      },
      {
        title: "Chương 4: Đa Hình (Polymorphism)",
        lessons: [
          "Runtime Polymorphism qua con trỏ base class trỏ đến object derived.",
          "Cơ chế vtable và vptr: cách C++ thực hiện dynamic dispatch.",
          "dynamic_cast an toàn và static_cast – sự khác biệt và rủi ro.",
          "RTTI với typeid(): lấy thông tin kiểu tại runtime.",
          "Đa hình với std::vector và unique_ptr (Modern C++ style).",
        ],
      },
      {
        title: "Chương 5: Template & STL",
        lessons: [
          "Function Template: viết một hàm dùng cho nhiều kiểu dữ liệu.",
          "Class Template: ví dụ Generic Stack<T> hoạt động với mọi kiểu.",
          "STL Containers: vector, map, set, queue, stack, unordered_map.",
          "STL Algorithms: sort, find, accumulate, for_each với lambda expression.",
          "Iterator và C++17 Structured Bindings (auto& [key, val]).",
        ],
      },
      {
        title: "Chương 6: Xử Lý Ngoại Lệ (Exception Handling)",
        lessons: [
          "try / catch / throw: cơ chế cơ bản và catch(...) bắt mọi ngoại lệ.",
          "Các class exception có sẵn: runtime_error, logic_error, out_of_range.",
          "Custom Exception: tạo lớp exception riêng kế thừa từ std::exception.",
          "Mô hình RAII (Resource Acquisition Is Initialization): quản lý tài nguyên tự động.",
          "noexcept: đánh dấu hàm không ném ngoại lệ để trình biên dịch tối ưu.",
        ],
      },
      {
        title: "Chương 7: File I/O",
        lessons: [
          "Ghi/đọc file text với ofstream và ifstream: getline(), đọc từng từ.",
          "Append vào file với ios::app; kiểm tra lỗi mở file.",
          "File binary: ghi/đọc raw bytes với write() và read() – ví dụ struct HocSinh.",
          "stringstream: xây dựng chuỗi phức tạp (ostringstream) và parse chuỗi (istringstream).",
          "Filesystem C++17: kiểm tra tồn tại, tạo thư mục, liệt kê, copy, xóa file.",
        ],
      },
      {
        title: "Chương 8: Dự Án Tổng Hợp – Hệ Thống Quản Lý Thư Viện",
        lessons: [
          "Thiết kế class diagram: Item (abstract), Sach, TapChi, DocGia, ThuVien.",
          "CRUD Sách và Độc Giả với STL map và unique_ptr.",
          "Chức năng mượn/trả sách có kiểm tra hợp lệ bằng Exception Handling.",
          "Tìm kiếm theo tên, tác giả, năm bằng STL algorithm và lambda.",
          "Lưu/tải dữ liệu từ file; thống kê sách mượn nhiều nhất.",
        ],
      },
    ],
    targetAudience: [
      "Đã hoàn thành khóa C++ Cơ Bản hoặc có kiến thức tương đương.",
      "Sinh viên CNTT muốn nắm vững OOP và các kỹ thuật C++ hiện đại.",
      "Lập trình viên muốn viết code C++ chuyên nghiệp, hiệu năng cao.",
      "Người chuẩn bị phỏng vấn các vị trí Backend, Embedded hoặc Game Developer.",
    ],
    courseBenefits: [
      {
        title: "Học 1 Kèm 1 - Đảm bảo chất lượng Tốt Nhất",
        details: [
          "Bạn sẽ được theo sát và hỗ trợ 1-1 bởi giảng viên. Đảm bảo chất lượng học tập đạt kết quả tốt nhất.",
          "Nếu HỌC CHẬM bạn không cần lo lắng không theo kịp chương trình, giảng viên sẽ đi chậm để đảm bảo bạn nắm chắc 100% kiến thức.",
          "Nếu học nhanh, bạn có thể nhanh chóng kết thúc chương trình để đi làm công ty.",
        ],
        icon: <Users className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Học online - Tiết kiệm thời gian di chuyển",
        details: [
          "Thay vì phải di chuyển vất vả trên đường giữa dòng người đông đúc. Giờ đây, bạn chỉ cần mở laptop để bắt đầu học ngay tại nhà. Tiết kiệm thời gian, tránh căng thẳng, và tập trung hoàn toàn vào việc học!",
        ],
        icon: <Laptop className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Lịch học linh hoạt",
        details: [
          "LearnCode sắp xếp lịch học theo ý của bạn. Học đúng thời điểm mà bạn cảm thấy thoải mái nhất.",
          "Dễ dàng thay đổi lịch học trong khi học nếu bạn có việc bận. Không làm gián đoạn tiến độ học tập của bạn.",
          "LearnCode có thể sắp xếp thời gian học cho bạn từ 8h đến 23h, kể cả cuối tuần.",
        ],
        icon: <Calendar className="w-10 h-10 text-brand-blue" />,
      },
    ],
  },
  {
    id: "java",
    title: "Khóa Học Java Từ Cơ Bản Đến Nâng Cao",
    description: "Học Java bài bản từ cú pháp đến OOP, Collections, xử lý ngoại lệ và lập trình ứng dụng thực tế.",
    level: "Trung bình",
    icon: <Coffee className="h-6 w-6 text-brand-blue" />,
    features: [
      "Cú pháp Java và kiểu dữ liệu nguyên thủy",
      "Câu lệnh điều kiện và vòng lặp",
      "Mảng một chiều và đa chiều",
      "Thuật toán cơ bản thực chiến",
      "Hỗ trợ 1-1 từ giảng viên",
    ],
    price: "8.000.000đ",
    longDescription:
      "Khóa học Java giúp bạn xây dựng nền tảng lập trình vững chắc với ngôn ngữ đa nền tảng được sử dụng rộng rãi trong doanh nghiệp, Android và big data. Từ cú pháp cơ bản, kiểu dữ liệu, vòng lặp, mảng cho đến các thuật toán cơ bản – bạn sẽ được thực hành code trực tiếp mỗi buổi học.",
    duration: "56 tiết (14 buổi)",
    updateDate: "05/2026",
    learningOutcomes: [
      "Cài đặt và sử dụng thành thạo JDK và IntelliJ IDEA để lập trình Java.",
      "Nắm vững cấu trúc chương trình Java: class, main method, System.out.println().",
      "Khai báo và sử dụng thành thạo các kiểu dữ liệu nguyên thủy: byte, short, int, long, float, double, boolean, char.",
      "Hiểu và áp dụng ép kiểu ngầm định (implicit) và ép kiểu tường minh (explicit).",
      "Sử dụng Scanner để đọc dữ liệu từ người dùng qua bàn phím.",
      "Thành thạo các loại toán tử: số học, gán, so sánh, logic, ba ngôi và độ ưu tiên.",
      "Viết câu lệnh điều kiện if, if-else, if-else if-else và switch-case hiệu quả.",
      "Sử dụng thành thạo vòng lặp for, while, do-while, break, continue và vòng lặp lồng nhau.",
      "Khai báo, khởi tạo và duyệt mảng một chiều và mảng đa chiều.",
      "Triển khai các thuật toán cơ bản: tính tổng, tìm Max/Min, cờ tín hiệu và phần tử liền kề.",
    ],
    curriculum: [
      {
        title: "Chương 1: Giới Thiệu & Cài Đặt Môi Trường",
        lessons: [
          "Cài đặt JDK và IntelliJ IDEA Community Edition.",
          "Giới thiệu Java: đa nền tảng, hướng đối tượng, ứng dụng thực tế.",
          "Cấu trúc chương trình Java: từ khóa class, phương thức main.",
          "System.out.println(): in ra màn hình console.",
          "Comment: // một dòng và /* ... */ nhiều dòng.",
          "Viết và chạy chương trình Hello World đầu tiên.",
        ],
      },
      {
        title: "Chương 2: Biến & Kiểu Dữ Liệu Nguyên Thủy",
        lessons: [
          "Khái niệm biến: khai báo và khởi tạo biến trong Java.",
          "Quy tắc đặt tên biến: CamelCase và các ký tự hợp lệ.",
          "Kiểu dữ liệu byte và short: phạm vi và cách dùng.",
          "Kiểu dữ liệu int và long: kiểu số nguyên phổ biến nhất, hậu tố L.",
          "Kiểu dữ liệu float và double: số thực, hậu tố f và độ chính xác.",
          "Kiểu boolean: true/false và ứng dụng trong biểu thức điều kiện.",
          "Kiểu char: ký tự Unicode 16-bit.",
          "Giá trị mặc định của từng kiểu dữ liệu khi không khởi tạo.",
        ],
      },
      {
        title: "Chương 3: Ép Kiểu & Hằng Số",
        lessons: [
          "Khái niệm ép kiểu: chuyển đổi giữa các kiểu dữ liệu.",
          "Implicit Casting (ép kiểu ngầm định): an toàn, không mất dữ liệu.",
          "Explicit Casting (ép kiểu tường minh): có thể mất phần thập phân hoặc tràn số.",
          "Hằng số với từ khóa final: khai báo và quy ước đặt tên HOA_TOÀN_BỘ.",
          "Lợi ích của hằng số trong lập trình.",
        ],
      },
      {
        title: "Chương 4: Nhập Dữ Liệu & Toán Tử",
        lessons: [
          "Scanner: giới thiệu và các bước sử dụng (import, tạo đối tượng, đọc, đóng).",
          "Các phương thức Scanner: nextInt(), nextDouble(), nextLine(), next(), nextBoolean().",
          "Lỗi thường gặp sau nextInt() và cách xử lý bằng scanner.nextLine().",
          "Toán tử số học: +, -, *, /, %, ++ (tiền tố/hậu tố), -- (tiền tố/hậu tố).",
          "Toán tử gán kết hợp: +=, -=, *=, /=, %=.",
          "Toán tử so sánh: ==, !=, >, <, >=, <= – kết quả luôn là boolean.",
          "Toán tử logic: && (AND), || (OR), ! (NOT).",
          "Toán tử ba ngôi: biểu_thức ? giá_trị_true : giá_trị_false.",
          "Độ ưu tiên toán tử và sử dụng dấu ngoặc đơn () để kiểm soát thứ tự.",
        ],
      },
      {
        title: "Chương 5: Câu Lệnh Điều Kiện",
        lessons: [
          "Câu lệnh if đơn giản: kiểm tra điều kiện và thực thi khối lệnh.",
          "Câu lệnh if-else: xử lý hai trường hợp đúng/sai.",
          "Câu lệnh if-else if-else: xử lý nhiều trường hợp tuần tự.",
          "Câu lệnh switch-case: so sánh bằng (==) với nhiều giá trị cụ thể.",
          "Vai trò của break và default trong switch-case.",
          "Fall-through trong switch-case: gom nhóm case cùng kết quả.",
          "So sánh if-else if-else vs switch-case: khi nào dùng loại nào.",
        ],
      },
      {
        title: "Chương 6: Vòng Lặp",
        lessons: [
          "Tại sao cần vòng lặp: tránh lặp code, xử lý dữ liệu hiệu quả.",
          "Vòng lặp for: cú pháp, luồng thực thi, dùng khi biết trước số lần lặp.",
          "Vòng lặp while: kiểm tra điều kiện trước, dùng khi số lần lặp không xác định.",
          "Vòng lặp do-while: chạy ít nhất 1 lần trước khi kiểm tra điều kiện.",
          "Câu lệnh break: thoát khỏi vòng lặp ngay lập tức.",
          "Câu lệnh continue: bỏ qua lần lặp hiện tại, chuyển sang lần tiếp theo.",
          "Vòng lặp lồng nhau (Nested Loops): in bảng cửu chương, vẽ hình.",
        ],
      },
      {
        title: "Chương 7: Mảng (Arrays)",
        lessons: [
          "Giới thiệu mảng: cùng kiểu dữ liệu, kích thước cố định, truy cập bằng chỉ số.",
          "Khai báo và khởi tạo mảng một chiều: dùng new hoặc array literal.",
          "Truy cập phần tử: chỉ số bắt đầu từ 0, thuộc tính length.",
          "Lỗi ArrayIndexOutOfBoundsException và cách tránh.",
          "Duyệt mảng bằng vòng lặp for truyền thống: toàn quyền kiểm soát.",
          "Duyệt mảng bằng for-each: đơn giản, dùng khi chỉ cần đọc giá trị.",
          "Mảng đa chiều (2D Array): khai báo, khởi tạo và truy cập phần tử.",
          "Duyệt mảng 2D bằng vòng lặp lồng nhau: array.length và array[i].length.",
        ],
      },
      {
        title: "Chương 8: Thuật Toán Cơ Bản",
        lessons: [
          "Thuật toán tính tổng: khởi tạo biến tổng, duyệt mảng, cộng dồn.",
          "Kỹ thuật cờ tín hiệu (Flag Variable): biến boolean theo dõi trạng thái trong vòng lặp.",
          "Kiểm tra sự tồn tại: khởi tạo cờ false, cập nhật khi tìm thấy điều kiện.",
          "Kiểm tra tính chất duy trì: khởi tạo cờ true, cập nhật khi vi phạm.",
          "Thuật toán tìm Max: khởi tạo bằng phần tử đầu tiên, duyệt từ phần tử thứ hai.",
          "Thuật toán tìm Min: tương tự Max, cập nhật khi tìm thấy số nhỏ hơn.",
          "Kỹ thuật duyệt phần tử liền kề: so sánh array[i] và array[i+1], giới hạn i < length - 1.",
        ],
      },
      {
        title: "Chương 9: Hướng Dẫn Giải Bài Tập Theo Chuyên Đề (4 buổi)",
        lessons: [
          "Hướng dẫn giải bài tập theo chuyên đề thực tế do giảng viên đưa ra.",
          "Giải bài tập theo chuyên đề chuyên sâu (mỗi buổi 2.5h – thêm 500.000đ/buổi).",
        ],
      },
    ],
    targetAudience: [
      "Sinh viên CNTT mong muốn bổ túc kiến thức để đủ điều kiện đi làm công ty.",
      "Đang học lập trình nhưng mất gốc hoặc không tự tin với Java.",
      "Chưa có kiến thức lập trình (zero) và muốn bắt đầu học bài bản từ đầu.",
      "Làm trái ngành và mong muốn chuyển đổi sang lĩnh vực lập trình an toàn và hiệu quả.",
      "Đang đi làm nhưng muốn học Java để phát triển sự nghiệp (backend, Android, doanh nghiệp).",
      "Đã biết ngôn ngữ khác (C++, Python...) và muốn học thêm Java.",
    ],
    courseBenefits: [
      {
        title: "Học 1 Kèm 1 - Đảm bảo chất lượng Tốt Nhất",
        details: [
          "Bạn sẽ được theo sát và hỗ trợ 1-1 bởi giảng viên. Đảm bảo chất lượng học tập đạt kết quả tốt nhất.",
          "Nếu HỌC CHẬM bạn không cần lo lắng không theo kịp chương trình, giảng viên sẽ đi chậm để đảm bảo bạn nắm chắc 100% kiến thức.",
          "Nếu học nhanh, bạn có thể nhanh chóng kết thúc chương trình để đi làm công ty.",
        ],
        icon: <Users className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Học online - Tiết kiệm thời gian di chuyển",
        details: [
          "Thay vì phải di chuyển vất vả trên đường giữa dòng người đông đúc. Giờ đây, bạn chỉ cần mở laptop để bắt đầu học ngay tại nhà. Tiết kiệm thời gian, tránh căng thẳng, và tập trung hoàn toàn vào việc học!",
        ],
        icon: <Laptop className="w-10 h-10 text-brand-blue" />,
      },
      {
        title: "Lịch học linh hoạt",
        details: [
          "LearnCode sắp xếp lịch học theo ý của bạn. Học đúng thời điểm mà bạn cảm thấy thoải mái nhất.",
          "Dễ dàng thay đổi lịch học trong khi học nếu bạn có việc bận. Không làm gián đoạn tiến độ học tập của bạn.",
          "LearnCode có thể sắp xếp thời gian học cho bạn từ 8h đến 23h, kể cả cuối tuần.",
        ],
        icon: <Calendar className="w-10 h-10 text-brand-blue" />,
      },
    ],
  },
];
