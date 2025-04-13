
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  level: "Cơ bản" | "Trung bình" | "Nâng cao";
  icon: React.ReactNode;
  features: string[];
  price: string;
  popular?: boolean;
}

const CourseCard = ({ 
  title, 
  description, 
  level, 
  icon, 
  features, 
  price, 
  popular = false 
}: CourseCardProps) => {
  return (
    <Card className={`course-card border ${popular ? 'border-brand-blue shadow-lg' : ''}`}>
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
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">{price}</span>
          <span className="text-muted-foreground">/ khóa học</span>
        </div>
        <Button className={`w-full ${popular ? 'bg-brand-blue hover:bg-brand-darkBlue' : ''}`}>
          Đăng Ký Ngay
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
