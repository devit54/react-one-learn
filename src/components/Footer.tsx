import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">LearnCode</h3>
            <p className="text-gray-400">
              Khóa học lập trình chất lượng cao với phương pháp dạy 1-1 giúp bạn
              tiến bộ nhanh chóng.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Khóa Học</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  HTML & CSS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  JavaScript
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  React.js
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Next.js
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Thông Tin</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Về Chúng Tôi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Giảng Viên
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chính Sách Bảo Mật
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Liên Hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-blue" />
                <span className="text-gray-400">vothanhloi.29@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-blue" />
                <span className="text-gray-400">+84 379 386 629</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} LearnCode. Tất cả quyền được bảo
            lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
