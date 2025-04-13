
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-brand-blue text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Sẵn sàng bắt đầu hành trình lập trình của bạn?
          </h2>
          <p className="text-lg text-white/90">
            Đăng ký ngay hôm nay và nhận ưu đãi 30% cho khóa học đầu tiên. 
            Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="px-4 py-2 rounded-md flex-grow text-foreground"
              required
            />
            <Button type="submit" className="bg-white text-brand-blue hover:bg-white/90">
              Đăng Ký Ngay
            </Button>
          </form>
          <p className="text-sm text-white/70">
            Chúng tôi cam kết bảo mật thông tin của bạn và không chia sẻ với bên thứ ba.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
