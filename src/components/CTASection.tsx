import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const handleZaloContact = () => {
    window.open("https://zalo.me/your-zalo-id", "_blank");
  };

  return (
    <section className="py-16 lg:py-24 bg-brand-blue text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Sẵn sàng bắt đầu hành trình lập trình ?
          </h2>
          <p className="text-lg text-white/90">
            Đăng ký ngay hôm nay và nhận ưu đãi 5% cho khóa học đầu tiên.
          </p>
          <p className="text-lg text-white/90">
            Vui lòng nhắn tin hoặc kết bạn Zalo để được tư vấn miễn phí
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <form className="flex flex-col sm:flex-row gap-3 max-w-md w-full">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="px-4 py-2 rounded-md flex-grow text-foreground"
                required
              />
              <Button
                type="submit"
                className="bg-white text-brand-blue hover:bg-white/90"
              >
                Đăng Ký Ngay
              </Button>
            </form>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MessageCircle size={18} />
            Liên Hệ Zalo hoặc SĐT: 0379 386 629 (Lợi)
          </div>
          {/* <Button
            onClick={handleZaloContact}
            className="bg-[#0068ff] hover:bg-[#0055cc] text-white flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Liên Hệ Qua Zalo
          </Button> */}
          <p className="text-sm text-white/70">
            Chúng tôi cam kết bảo mật thông tin của bạn và không chia sẻ với bên
            thứ ba.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
