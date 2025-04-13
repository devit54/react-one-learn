
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  initials: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Nguyễn Văn A",
    role: "Frontend Developer",
    content: "Khóa học 1-1 về React đã giúp tôi tiến bộ rất nhanh. Giảng viên rất kiên nhẫn và luôn có những giải thích dễ hiểu cho các khái niệm phức tạp.",
    avatar: "/placeholder.svg",
    initials: "NVA",
    rating: 5,
  },
  {
    name: "Trần Thị B",
    role: "UI/UX Designer",
    content: "Tôi đã học khóa HTML & CSS và rất hài lòng với cách tiếp cận cá nhân hóa. Giờ đây tôi có thể tự tin thiết kế và xây dựng giao diện web chuyên nghiệp.",
    avatar: "/placeholder.svg",
    initials: "TTB",
    rating: 5,
  },
  {
    name: "Lê Văn C",
    role: "Sinh viên CNTT",
    content: "Từ không biết gì về lập trình, sau 3 tháng học JavaScript 1-1, tôi đã có thể tự phát triển ứng dụng web. Cảm ơn các giảng viên tận tâm!",
    avatar: "/placeholder.svg",
    initials: "LVC",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold heading">
            Học viên nói gì về <span className="gradient-text">chúng tôi</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Hàng trăm học viên đã thành công với phương pháp dạy 1-1 của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, content, avatar, initials, rating }: TestimonialProps) => (
  <Card className="h-full">
    <CardHeader className="pb-3">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{content}</p>
    </CardContent>
  </Card>
);

export default Testimonials;
