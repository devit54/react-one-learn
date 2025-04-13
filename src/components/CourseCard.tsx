
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: "Cơ bản" | "Trung bình" | "Nâng cao";
  icon: React.ReactNode;
  features: string[];
  price: string;
  popular?: boolean;
}

const CourseCard = ({ 
  id,
  title, 
  description, 
  level, 
  icon, 
  features, 
  price, 
  popular = false 
}: CourseCardProps) => {
  const handleRegister = () => {
    // Registration logic can be added here
    // For now, just scroll to the contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleZaloContact = () => {
    window.open("https://zalo.me/your-zalo-id", "_blank");
  };

  return (
    <Card className={`course-card border ${popular ? 'border-brand-blue shadow-lg' : ''} hover:shadow-md transition-shadow`}>
      <Link to={`/khoa-hoc/${id}`} className="block">
        <CardHeader className="pb-3">
          {popular && (
            <Badge className="w-fit mb-2 bg-brand-blue">Phổ biến nhất</Badge>
          )}
          <div className="flex items-center justify-between">
            <div className="h-12 w-12 rounded-full bg-brand-lightBlue flex items-center justify-center">
              {icon}
            </div>
            <Badge variant="outline" className="text-xs">{level}</Badge>
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500 shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">{price}</span>
          <span className="text-muted-foreground">/ khóa học</span>
        </div>
        <div className="flex flex-col w-full gap-2">
          <Button 
            className={`w-full ${popular ? 'bg-brand-blue hover:bg-brand-darkBlue' : ''}`}
            onClick={handleRegister}
          >
            Đăng Ký Ngay
          </Button>
          <Button 
            variant="outline" 
            className="w-full flex items-center gap-2"
            onClick={handleZaloContact}
          >
            <MessageCircle size={16} className="text-[#0068ff]" />
            Liên Hệ Zalo
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
