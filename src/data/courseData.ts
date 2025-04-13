
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
      "Hiểu sâu về JavaScript và cách hoạt động của ngôn ngữ",
      "Sử dụng thành thạo các tính năng của ES6+ và JavaScript hiện đại",
      "Xây dựng ứng dụng web động với DOM Manipulation",
      "Làm việc với dữ liệu bất đồng bộ qua Promises và Async/Await",
      "Tương tác với REST APIs và xử lý dữ liệu JSON",
      "Xây dựng ứng dụng web hoàn chỉnh với JavaScript thuần"
    ],
    curriculum: [
      {
        title: "Module 1: JavaScript Fundamentals",
        lessons: [
          "Biến, kiểu dữ liệu và phạm vi",
          "Functions và arrow functions",
          "Objects, arrays và destructuring",
          "ES6+ features: let/const, template literals, spread operator",
          "Thực hành: JavaScript logic"
        ]
      },
      {
        title: "Module 2: DOM Manipulation",
        lessons: [
          "Truy cập và thao tác với DOM",
          "Event handling",
          "Creating và removing elements",
          "Local storage và session storage",
          "Thực hành: Xây dựng ứng dụng To-do List"
        ]
      },
      {
        title: "Module 3: Asynchronous JavaScript",
        lessons: [
          "Callbacks và callback hell",
          "Promises và cách sử dụng",
          "Async/Await và error handling",
          "Fetch API và Axios",
          "Thực hành: Xây dựng ứng dụng lấy dữ liệu từ API"
        ]
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
      "Hiểu sâu về React và cách hoạt động của Components",
      "Sử dụng thành thạo React Hooks và quản lý state",
      "Xây dựng UI với các thư viện UI hiện đại như Tailwind CSS",
      "Quản lý state phức tạp với Context API và Redux",
      "Phát triển ứng dụng server-side rendering với Next.js",
      "Xây dựng API routes và tích hợp authentication",
      "Tối ưu hiệu năng cho ứng dụng React"
    ],
    curriculum: [
      {
        title: "Module 1: React Fundamentals",
        lessons: [
          "JSX và Components",
          "Props và State",
          "Lifecycle và useEffect hook",
          "Event handling trong React",
          "Thực hành: Xây dựng ứng dụng React đầu tiên"
        ]
      },
      {
        title: "Module 2: React Hooks và State Management",
        lessons: [
          "useState và useEffect",
          "useContext và useReducer",
          "Custom hooks",
          "Context API cho global state",
          "Redux và Redux Toolkit",
          "Thực hành: Xây dựng ứng dụng quản lý sản phẩm"
        ]
      },
      {
        title: "Module 3: Next.js",
        lessons: [
          "Server-side rendering và Static site generation",
          "File-based routing",
          "API Routes",
          "Authentication với NextAuth.js",
          "Deployment và optimization",
          "Thực hành: Xây dựng blog cá nhân với Next.js"
        ]
      }
    ]
  }
];
