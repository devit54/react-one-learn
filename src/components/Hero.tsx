
import { Button } from "@/components/ui/button";
import { Code, BookOpen, Monitor, PenTool } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 space-y-6 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight heading">
            Làm chủ lập trình web với<br />
            <span className="gradient-text">phương pháp dạy 1-1</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Khám phá cách học lập trình hiệu quả với sự hướng dẫn cá nhân từ các chuyên gia.
            Từ HTML, CSS đến JavaScript và React - chúng tôi giúp bạn trở thành lập trình viên web chuyên nghiệp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-darkBlue text-white">
              Bắt Đầu Học Ngay
            </Button>
            <Button size="lg" variant="outline">
              Tìm Hiểu Thêm
            </Button>
          </div>
          <div className="pt-4 flex flex-wrap gap-4 lg:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code size={18} className="text-brand-blue" />
              <span>Dạy 1-1 trực tiếp</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-brand-blue" />
              <span>Chứng chỉ quốc tế</span>
            </div>
            <div className="flex items-center gap-2">
              <Monitor size={18} className="text-brand-blue" />
              <span>Học từ xa linh hoạt</span>
            </div>
            <div className="flex items-center gap-2">
              <PenTool size={18} className="text-brand-blue" />
              <span>Hỗ trợ 24/7</span>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="bg-brand-blue/10 rounded-full w-72 h-72 absolute -top-6 -left-6 blur-3xl"></div>
          <div className="relative bg-white rounded-lg shadow-xl border p-6 lg:p-8">
            <div className="bg-brand-lightBlue p-4 rounded-lg mb-4 w-full border border-brand-blue/20">
              <pre className="text-sm text-brand-darkBlue font-mono overflow-x-auto">
                <code>{'const App = () => {\n  return <h1>Hello World!</h1>;\n};'}</code>
              </pre>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-blue flex items-center justify-center text-white">
                  <Code size={20} />
                </div>
                <div>
                  <h3 className="font-bold">HTML, CSS & JavaScript</h3>
                  <p className="text-sm text-muted-foreground">Nền tảng web cần thiết</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-brand-blue flex items-center justify-center text-white">
                  <Monitor size={20} />
                </div>
                <div>
                  <h3 className="font-bold">React & Next.js</h3>
                  <p className="text-sm text-muted-foreground">Phát triển ứng dụng hiện đại</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
