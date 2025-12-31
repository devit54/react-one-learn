import {
  Lightbulb,
  Users,
  Clock,
  MessageCircle,
  Globe,
  Award,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-brand-blue" />,
      title: "Học theo lộ trình riêng",
      description:
        "Lộ trình học tập được điều chỉnh riêng cho từng học viên dựa trên trình độ và mục tiêu cá nhân.",
    },
    {
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      title: "Dạy kèm 1-1",
      description:
        "Tương tác trực tiếp với giảng viên chuyên nghiệp, giải đáp mọi thắc mắc ngay lập tức.",
    },
    {
      icon: <Clock className="h-8 w-8 text-brand-blue" />,
      title: "Thời gian linh hoạt",
      description:
        "Tự do lựa chọn thời gian học phù hợp với lịch trình cá nhân của bạn.",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-brand-blue" />,
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc của bạn mọi lúc mọi nơi.",
    },
    {
      icon: <Globe className="h-8 w-8 text-brand-blue" />,
      title: "Dự án thực tế",
      description:
        "Thực hành với các dự án thực tế, xây dựng portfolio ấn tượng ngay trong khóa học.",
    },
    {
      icon: <Award className="h-8 w-8 text-brand-blue" />,
      title: "Cam kết học và làm thực tế",
      description:
        "Cam kết hoàn thành khóa học và hỗ trợ học viên trong suốt quá trình trước-trong-sau khi học",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-20 bg-brand-gray">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold heading">
            Tại sao chọn phương pháp<span className="gradient-text">dạy kèm 1-1</span> của chúng tôi?
          </h2>
          <p className="text-lg text-muted-foreground">
            Khám phá những lợi ích độc đáo từ phương pháp giảng dạy tập trung
            vào từng cá nhân
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-brand-lightBlue flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
