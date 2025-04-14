
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Users, Clock, Calendar, Laptop } from "lucide-react";
import { Helmet } from 'react-helmet';
import { courseData } from '@/data/courseData';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseData.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container py-16">
          <h1 className="text-3xl font-bold">Không tìm thấy khóa học</h1>
          <p className="mt-4">Khóa học bạn tìm kiếm không tồn tại.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const handleRegister = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleZaloContact = () => {
    window.open("https://zalo.me/your-zalo-id", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>{course.title} - LearnCode</title>
        <meta name="description" content={course.description} />
        <meta property="og:title" content={`${course.title} - LearnCode`} />
        <meta property="og:description" content={course.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder.svg" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-brand-blue to-blue-600 text-white py-16">
            <div className="container">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <Badge className="bg-white text-brand-blue mb-2">{course.level}</Badge>
                  <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
                  <p className="text-lg">{course.description}</p>
                  <div className="flex items-center gap-2 text-lg">
                    <span className="font-bold">{course.price}</span>
                    <span>/ khóa học</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button 
                      size="lg" 
                      onClick={handleRegister}
                      className="bg-white text-brand-blue hover:bg-white/90"
                    >
                      Đăng Ký Ngay
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={handleZaloContact}
                      className="bg-transparent border-white text-white hover:bg-white/10 flex items-center gap-2"
                    >
                      <MessageCircle size={20} />
                      Liên Hệ Qua Zalo
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                    <div className="text-6xl mb-4 flex justify-center">
                      {course.icon}
                    </div>
                    <div className="space-y-3">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle size={18} className="text-white" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Course Content */}
          <section className="py-16">
            <div className="container">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Giới thiệu khóa học</h2>
                    <div className="prose max-w-none">
                      <p>{course.longDescription || 'Khóa học được thiết kế để giúp bạn nắm vững các khái niệm từ cơ bản đến nâng cao với phương pháp học 1-1 hiệu quả.'}</p>
                      <p>Bạn sẽ được học trực tiếp với giảng viên có kinh nghiệm, thực hành qua các bài tập thực tế và nhận được sự hỗ trợ trong suốt quá trình học.</p>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Bạn sẽ học được gì</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {course.learningOutcomes && course.learningOutcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                      {!course.learningOutcomes && course.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Nội dung khóa học</h2>
                    <div className="space-y-4">
                      {course.curriculum && (
                        <Accordion type="single" collapsible className="w-full">
                          {course.curriculum.map((module, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                              <AccordionTrigger className="font-bold text-lg">{module.title}</AccordionTrigger>
                              <AccordionContent>
                                <ul className="mt-2 space-y-2">
                                  {module.lessons.map((lesson, lessonIndex) => (
                                    <li key={lessonIndex} className="flex items-start gap-2">
                                      <span className="w-6 h-6 rounded-full bg-brand-lightBlue text-brand-blue flex items-center justify-center text-sm font-medium">
                                        {lessonIndex + 1}
                                      </span>
                                      <span>{lesson}</span>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      )}
                      {!course.curriculum && (
                        <p>Chi tiết nội dung khóa học sẽ được cung cấp khi bạn đăng ký khóa học.</p>
                      )}
                    </div>
                  </div>
                  
                  {(courseId === 'react-nextjs' || courseId === 'javascript-advanced') && course.targetAudience && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Đối tượng học</h2>
                      <div className="space-y-4">
                        {course.targetAudience.map((audience, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                            <span>{audience}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {(courseId === 'react-nextjs' || courseId === 'javascript-advanced') && course.courseBenefits && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Lợi ích khi tham gia khóa học</h2>
                      <div className="space-y-8">
                        {course.courseBenefits.map((benefit, index) => (
                          <div key={index} className="border rounded-lg p-6">
                            <div className="flex items-center gap-4 mb-4">
                              {benefit.icon}
                              <h3 className="text-xl font-bold">{benefit.title}</h3>
                            </div>
                            <ul className="space-y-2">
                              {benefit.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start gap-2">
                                  <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="border rounded-lg p-6 sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Thông tin khóa học</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Cấp độ</div>
                        <div>{course.level}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Thời lượng</div>
                        <div>{course.duration || '30 giờ'}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Hình thức học</div>
                        <div>Học 1-1 trực tuyến</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Giá khóa học</div>
                        <div className="font-bold text-xl">{course.price}</div>
                      </div>
                      <div className="pt-4 space-y-3">
                        <Button 
                          className="w-full bg-brand-blue hover:bg-brand-darkBlue"
                          onClick={handleRegister}
                        >
                          Đăng Ký Ngay
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full flex items-center justify-center gap-2"
                          onClick={handleZaloContact}
                        >
                          <MessageCircle size={18} className="text-[#0068ff]" />
                          Liên Hệ Zalo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section id="contact" className="py-16 bg-gray-50">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">
                  Bắt đầu hành trình học tập với chúng tôi
                </h2>
                <p className="text-lg text-muted-foreground">
                  Đăng ký ngay hôm nay để nhận tư vấn miễn phí và ưu đãi đặc biệt
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="px-4 py-2 rounded-md flex-grow border"
                    required
                  />
                  <Button type="submit" className="bg-brand-blue hover:bg-brand-darkBlue text-white">
                    Đăng Ký Ngay
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CourseDetail;
