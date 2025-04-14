
import React from "react";
import { FileCode, Code, Layers } from "lucide-react";

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
}

export const courseData: Course[] = [
  {
    id: "html-css-basics",
    title: "HTML & CSS Cơ Bản",
    description: "Xây dựng nền tảng vững chắc với HTML5 và CSS3 hiện đại",
    level: "Cơ bản",
    icon: <FileCode className="h-6 w-6 text-brand-blue" />,
    features: [
      "Thiết kế web responsive",
      "Flexbox và Grid Layout",
      "CSS Animation và Transitions",
      "Dự án portfolio cá nhân",
      "Hỗ trợ 1-1 từ giảng viên"
    ],
    price: "1.990.000đ",
    longDescription: "Khóa học HTML & CSS cơ bản sẽ giúp bạn xây dựng nền tảng vững chắc trong lĩnh vực phát triển web. Bạn sẽ học cách tạo ra các trang web đẹp mắt, responsive và hiện đại.",
    duration: "25 giờ",
    learningOutcomes: [
      "Hiểu cấu trúc HTML5 và các thẻ semantic",
      "Thành thạo CSS3 và các thuộc tính styling hiện đại",
      "Xây dựng layout với Flexbox và CSS Grid",
      "Tạo các trang web responsive trên mọi thiết bị",
      "Thiết kế hiệu ứng và animation với CSS",
      "Xây dựng dự án portfolio cá nhân từ đầu đến cuối"
    ],
    curriculum: [
      {
        title: "Module 1: Nền tảng HTML",
        lessons: [
          "Cấu trúc HTML cơ bản",
          "Các thẻ HTML phổ biến",
          "HTML Semantic Elements",
          "Forms và Input Fields",
          "Thực hành: Xây dựng cấu trúc trang web"
        ]
      },
      {
        title: "Module 2: CSS Cơ bản và Selector",
        lessons: [
          "CSS Selectors và specificity",
          "Box Model và Layout",
          "Màu sắc, font chữ và styling text",
          "Styling links và buttons",
          "Thực hành: Styling cho trang web"
        ]
      },
      {
        title: "Module 3: Layout với Flexbox và CSS Grid",
        lessons: [
          "Flexbox layout",
          "CSS Grid layout",
          "Responsive design với media queries",
          "Mobile-first approach",
          "Thực hành: Xây dựng layout responsive"
        ]
      }
    ]
  },
  {
    id: "javascript-advanced",
    title: "JavaScript Nâng Cao",
    description: "Thành thạo JavaScript hiện đại và các frameworks phổ biến",
    level: "Trung bình",
    icon: <Code className="h-6 w-6 text-brand-blue" />,
    features: [
      "ES6+ và JavaScript hiện đại",
      "DOM Manipulation",
      "Async/Await và Promises",
      "HTTP Requests và APIs",
      "Hỗ trợ 1-1 từ giảng viên"
    ],
    price: "2.990.000đ",
    popular: true,
    longDescription: "Khóa học JavaScript nâng cao giúp bạn thành thạo ngôn ngữ lập trình phổ biến nhất hiện nay. Từ cú pháp ES6+ hiện đại đến xử lý bất đồng bộ và tương tác với APIs.",
    duration: "35 giờ",
    learningOutcomes: [
      "Nắm vững kiến thức JavaScript từ con số 0, từ cú pháp cơ bản đến các khái niệm chuyên sâu, đảm bảo bạn có nền tảng vững chắc để tiếp tục phát triển kỹ năng trong tương lai.",
      "Thành thạo các thuật toán phổ biến, rèn luyện tư duy logic, giải quyết vấn đề hiệu quả thông qua các thuật toán thường gặp trong lập trình.",
      "Đủ khả năng xây dựng ứng dụng web hoàn chỉnh, đáp ứng mọi nhu cầu từ thị trường.",
      "Tự tin tham gia các dự án thực tế, tích lũy kinh nghiệm và nâng cao kỹ năng.",
      "Kỹ năng xử lý lỗi chuyên nghiệp, trang bị khả năng phát hiện, phân tích và sửa lỗi nhanh chóng, đảm bảo chương trình hoạt động ổn định và trơn tru.",
      "Phát triển tư duy lập trình logic, rèn luyện tư duy sáng tạo, phân tích yêu cầu, xây dựng thuật toán tối ưu, tạo ra những ứng dụng thông minh và hiệu quả.",
      "Mở ra cơ hội việc làm hấp dẫn, nắm vững kiến thức và kỹ năng cần thiết để tự tin ứng tuyển vào các công ty CNTT lớn, có mức lương cao và phúc lợi tốt."
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
          "Dùng console.log: Hiển thị kết quả bằng console.log."
        ]
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
          "Chuyển đổi kiểu: Boolean, Number, String: Chuyển đổi giữa các kiểu dữ liệu"
        ]
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
          "Toán tử Ternary: Viết điều kiện ngắn gọn."
        ]
      },
      {
        title: "Câu lệnh Điều kiện",
        lessons: [
          "if: Chạy code dựa trên điều kiện cụ thể.",
          "truthy, falsy: Hiểu giá trị true/false trong JS.",
          "switch: Xử lý nhiều trường hợp thay if-else."
        ]
      },
      {
        title: "Câu lệnh Vòng lặp",
        lessons: [
          "for: Lặp với số lần xác định.",
          "while: Lặp khi điều kiện đúng.",
          "do-while: Chạy ít nhất một lần trước khi kiểm tra.",
          "Debug: Tìm và sửa lỗi bằng công cụ debug."
        ]
      },
      {
        title: "Các Thuật toán Cơ bản",
        lessons: [
          "Tính tổng: Tính tổng dãy số.",
          "Cờ tín hiệu: Dùng biến cờ để điều khiển.",
          "Tìm max, min: Tìm giá trị lớn/nhỏ nhất.",
          "So sánh phần tử: So sánh phần tử hiện tại và trước đó."
        ]
      },
      {
        title: "Hàm Cơ bản",
        lessons: [
          "Khai báo: Định nghĩa hàm trong JS.",
          "Parameter và argument: Truyền và dùng dữ liệu trong hàm.",
          "Khai báo kiểu 2: Cú pháp khai báo hàm khác.",
          "return: Trả giá trị từ hàm.",
          "Hàm ẩn danh: Dùng hàm không tên."
        ]
      },
      {
        title: "HTML & CSS Cơ bản",
        lessons: [
          "HTML cơ bản: Cấu trúc cơ bản của một trang web.",
          "CSS cơ bản: Định dạng và tạo kiểu cho trang web."
        ]
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
          "Event cơ bản: Xử lý sự kiện như click, hover."
        ]
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
          "hoisting: Hiện tượng \"hoisting\" trong JS."
        ]
      },
      {
        title: "Giá trị Tham chiếu & Nguyên thủy",
        lessons: [
          "Giá trị nguyên thuỷ: Cách lưu số, chuỗi, v.v.",
          "Giá trị tham chiếu: Cách object, array hoạt động.",
          "Array là tham chiếu: Đặc điểm của mảng.",
          "So sánh tham chiếu: So sánh giá trị và tham chiếu.",
          "Truyền vào hàm: Truyền tham chiếu/nguyên thuỷ."
        ]
      },
      {
        title: "Hàm Nâng cao",
        lessons: [
          "Arrow function: Sử dụng cú pháp ngắn gọn và hiểu sự khác biệt với hàm thường.",
          "Callback function: Truyền hàm làm tham số để xử lý bất đồng bộ.",
          "Default parameters: Đặt giá trị mặc định cho tham số hàm.",
          "Rest parameters: Thu thập nhiều tham số thành một mảng."
        ]
      },
      {
        title: "Array Nâng cao",
        lessons: [
          "Các hàm tiện ích trong array: Sử dụng map, filter, reduce, v.v. để thao tác mảng.",
          "Array destructuring: Trích xuất dữ liệu từ mảng một cách gọn gàng.",
          "for…of: Lặp qua mảng với cú pháp đơn giản và hiện đại."
        ]
      },
      {
        title: "Cách xác định từ khoá \"this\"",
        lessons: [
          "this tại Global: \"this\" trong phạm vi toàn cục.",
          "this trong function và method: \"this\" trong các ngữ cảnh.",
          "bind, call, apply: Thay đổi giá trị \"this\".",
          "this trong arrow function: Đặc điểm của \"this\" trong arrow."
        ]
      },
      {
        title: "Object Nâng cao",
        lessons: [
          "Object destructuring: Trích xuất dữ liệu từ object một cách ngắn gọn.",
          "Xoá thuộc tính: Loại bỏ thuộc tính khỏi object.",
          "Truy cập bằng cặp dấu ngoặc vuông: Truy cập linh hoạt hơn so với dấu chấm.",
          "Class: Định nghĩa và sử dụng class trong lập trình hướng đối tượng.",
          "Kế thừa: Cơ chế kế thừa trong class, tái sử dụng code.",
          "Override: Ghi đè phương thức từ class cha."
        ]
      },
      {
        title: "Thao tác với String",
        lessons: [
          "Các hàm tiện ích thao tác với string: Sử dụng split, join, v.v.",
          "Template String (string literal): Viết chuỗi linh hoạt với cú pháp hiện đại."
        ]
      },
      {
        title: "Module (import/export)",
        lessons: [
          "Module là gì: Khái niệm module và lợi ích trong lập trình.",
          "Export: Xuất biến, hàm hoặc class từ một file.",
          "Import: Nhập dữ liệu từ module khác vào file hiện tại.",
          "Default export/import: Export/import mặc định cho thành phần chính.",
          "Named export/import: Xuất/nhập nhiều thành phần với tên cụ thể."
        ]
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
          "ajax (fetch): Gửi yêu cầu server bằng fetch."
        ]
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
          "...hoặc bất kỳ chủ đề nào dựa trên ý tưởng của học viên"
        ]
      }
    ],
    targetAudience: [
      "Sinh viên CNTT mong muốn bổ túc kiến thức để đủ điều kiện đi làm công ty.",
      "Đang học lập trình nhưng mất gốc hoặc không tự tin.",
      "Chưa có kiến thức lập trình (zero) và muốn bắt đầu học bài bản từ đầu.",
      "Làm trái ngành và mong muốn chuyển đổi sang lĩnh vực lập trình an toàn và hiệu quả.",
      "Đang đi làm nhưng muốn cải thiện kiến thức để tiến xa hơn trong sự nghiệp (senior)."
    ],
    courseBenefits: [
      {
        title: "Học 1 Kèm 1 - Đảm bảo chất lượng Tốt Nhất",
        details: [
          "Bạn sẽ được theo sát và hỗ trợ 1-1 bởi giảng viên. Đảm bảo chất lượng học tập đạt kết quả tốt nhất.",
          "Nếu HỌC CHẬM bạn không cần lo lắng không theo kịp chương trình, giảng viên sẽ đi chậm để đảm bảo bạn nắm chắc 100% kiến thức.",
          "Nếu học nhanh, bạn có thể nhanh chóng kết thúc chương trình để đi làm công ty."
        ],
        icon: <Users className="w-10 h-10 text-brand-blue" />
      },
      {
        title: "Học online - Tiết kiệm thời gian di chuyển",
        details: [
          "Thay vì phải di chuyển vất vả trên đường giữa dòng người đông đúc. Giờ đây, bạn chỉ cần mở laptop để bắt đầu học ngay tại nhà. Tiết kiệm thời gian, tránh căng thẳng, và tập trung hoàn toàn vào việc học!"
        ],
        icon: <Laptop className="w-10 h-10 text-brand-blue" />
      },
      {
        title: "Lịch học linh hoạt",
        details: [
          "LetDiv sắp xếp lịch học theo ý của bạn. Học đúng thời điểm mà bạn cảm thấy thoải mái nhất.",
          "Dễ dàng thay đổi lịch học trong khi học nếu bạn có việc bận. Không làm gián đoạn tiến độ học tập của bạn.",
          "LetDiv có thể sắp xếp thời gian học cho bạn từ 8h đến 23h, kể cả cuối tuần."
        ],
        icon: <Calendar className="w-10 h-10 text-brand-blue" />
      }
    ]
  },
  {
    id: "react-nextjs",
    title: "React & Next.js",
    description: "Xây dựng ứng dụng web hiện đại với React và Next.js",
    level: "Nâng cao",
    icon: <Layers className="h-6 w-6 text-brand-blue" />,
    features: [
      "React Hooks và Context API",
      "State Management với Redux",
      "SSR và SSG với Next.js",
      "API Routes và Authentication",
      "Hỗ trợ 1-1 từ giảng viên"
    ],
    price: "3.990.000đ",
    longDescription: "Khóa học React & Next.js giúp bạn làm chủ các công nghệ hiện đại nhất trong phát triển frontend. Bạn sẽ học cách xây dựng các ứng dụng web đa nền tảng, nhanh chóng và tối ưu.",
    duration: "40 giờ",
    learningOutcomes: [
      "Hiểu rõ khái niệm nền tảng của React, cách thức hoạt động và các thành phần cốt lõi",
      "Thành thạo React Cơ bản, bao gồm cú pháp JSX, components, state, props, lifecycle",
      "Làm chủ React Hooks, công cụ mạnh mẽ giúp viết code React dễ dàng, hiệu quả và tái sử dụng cao",
      "Tự tin sử dụng React Router 7.x để tạo ứng dụng web SPA mượt mà, linh hoạt",
      "Hiểu rõ cách thức quản lý state phức tạp với Context API và Redux",
      "Tối ưu hóa hiệu suất ứng dụng React bằng Redux Toolkit",
      "Học cách triển khai authentication cho ứng dụng React",
      "Áp dụng các kỹ thuật tối ưu hóa ứng dụng React nâng cao",
      "Hoàn thành project cuối môn, áp dụng kiến thức đã học vào thực tế"
    ],
    curriculum: [
      {
        title: "Khái Niệm Nền Tảng",
        lessons: [
          "React là gì? Tại sao dùng React: Khái niệm React và lợi ích khi sử dụng",
          "Virtual DOM: Hiểu cách Virtual DOM tăng hiệu suất",
          "Imperative và Declarative: So sánh 2 cách lập trình trong React",
          "Cài đặt môi trường: Thiết lập Node.js, Vite để phát triển",
          "Cấu trúc folder: Làm quen với cách tổ chức dự án React"
        ]
      },
      {
        title: "JSX và kiến thức cơ bản",
        lessons: [
          "JSX syntax và cách hoạt động",
          "Components và Props",
          "State và Lifecycle",
          "Handling Events",
          "Conditional Rendering"
        ]
      },
      {
        title: "React Hooks",
        lessons: [
          "useState & useEffect",
          "useContext & useReducer",
          "useMemo & useCallback",
          "Custom Hooks",
          "Rules of Hooks"
        ]
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
          "Đồ Án Cuối Khoá"
        ]
      }
    ],
    targetAudience: [
      "Sinh viên CNTT mong muốn bổ túc kiến thức để đủ điều kiện đi làm công ty",
      "Đang học lập trình nhưng mất gốc hoặc không tự tin",
      "Chưa có kiến thức lập trình (zero) và muốn bắt đầu học bài bản từ đầu",
      "Làm trái ngành và mong muốn chuyển đổi sang lĩnh vực lập trình an toàn và hiệu quả",
      "Đang đi làm nhưng muốn cải thiện kiến thức để tiến xa hơn trong sự nghiệp (senior)",
      "Đã có kiến thức cơ bản JavaScript"
    ],
    courseBenefits: [
      {
        title: "Học 1 Kèm 1 - Đảm bảo chất lượng Tốt Nhất",
        details: [
          "Bạn sẽ được theo sát và hỗ trợ 1-1 bởi giảng viên. Đảm bảo chất lượng học tập đạt kết quả tốt nhất.",
          "Nếu HỌC CHẬM bạn không cần lo lắng không theo kịp chương trình, giảng viên sẽ đi chậm để đảm bảo bạn nắm chắc 100% kiến thức.",
          "Nếu học nhanh, bạn có thể nhanh chóng kết thúc chương trình để đi làm công ty."
        ],
        icon: <Users className="w-10 h-10 text-brand-blue" />
      },
      {
        title: "Học online - Tiết kiệm thời gian di chuyển",
        details: [
          "Thay vì phải di chuyển vất vả trên đường giữa dòng người đông đúc. Giờ đây, bạn chỉ cần mở laptop để bắt đầu học ngay tại nhà. Tiết kiệm thời gian, tránh căng thẳng, và tập trung hoàn toàn vào việc học!"
        ],
        icon: <Laptop className="w-10 h-10 text-brand-blue" />
      },
      {
        title: "Lịch học linh hoạt",
        details: [
          "LetDiv sắp xếp lịch học theo ý của bạn. Học đúng thời điểm mà bạn cảm thấy thoải mái nhất.",
          "Dễ dàng thay đổi lịch học trong khi học nếu bạn có việc bận. Không làm gián đoạn tiến độ học tập của bạn.",
          "LetDiv có thể sắp xếp thời gian học cho bạn từ 8h đến 23h, kể cả cuối tuần."
        ],
        icon: <Calendar className="w-10 h-10 text-brand-blue" />
      }
    ]
  }
];
