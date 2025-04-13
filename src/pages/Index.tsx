
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { FileCode, Layout, Code, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Index = () => {
  const courses = [
    {
      title: "HTML & CSS Cơ Bản",
      description: "Xây dựng nền tảng vững chắc với HTML5 và CSS3 hiện đại",
      level: "Cơ bản" as const,
      icon: <FileCode className="h-6 w-6 text-brand-blue" />,
      features: [
        "Thiết kế web responsive",
        "Flexbox và Grid Layout",
        "CSS Animation và Transitions",
        "Dự án portfolio cá nhân",
        "Hỗ trợ 1-1 từ giảng viên"
      ],
      price: "1.990.000đ",
    },
    {
      title: "JavaScript Nâng Cao",
      description: "Thành thạo JavaScript hiện đại và các frameworks phổ biến",
      level: "Trung bình" as const,
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
    },
    {
      title: "React & Next.js",
      description: "Xây dựng ứng dụng web hiện đại với React và Next.js",
      level: "Nâng cao" as const,
      icon: <Layers className="h-6 w-6 text-brand-blue" />,
      features: [
        "React Hooks và Context API",
        "State Management với Redux",
        "SSR và SSG với Next.js",
        "API Routes và Authentication",
        "Hỗ trợ 1-1 từ giảng viên"
      ],
      price: "3.990.000đ",
    },
  ];

  return (
    <>
      <Helmet>
        <title>LearnCode - Khóa học lập trình 1-1 HTML, CSS, JS, React</title>
        <meta name="description" content="Học lập trình web với phương pháp dạy kèm 1-1 từ HTML, CSS, JavaScript đến React, Next.js. Khóa học cá nhân hóa giúp bạn tiến bộ nhanh chóng." />
        <meta name="keywords" content="học lập trình, HTML, CSS, JavaScript, React, Next.js, khoá học lập trình, dạy kèm 1-1, lập trình web" />
        
        {/* Open Graph tags for social media */}
        <meta property="og:title" content="LearnCode - Khóa học lập trình 1-1 HTML, CSS, JS, React" />
        <meta property="og:description" content="Học lập trình web với phương pháp dạy kèm 1-1 từ HTML, CSS đến React. Khóa học cá nhân hóa giúp bạn tiến bộ nhanh chóng." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/placeholder.svg" />
        
        {/* Canonical link */}
        <link rel="canonical" href="https://learncode.vn" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          
          <section id="courses" className="py-16 lg:py-24">
            <div className="container space-y-12">
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold heading">
                  Khám phá các <span className="gradient-text">khóa học</span> của chúng tôi
                </h2>
                <p className="text-lg text-muted-foreground">
                  Mỗi khóa học được thiết kế riêng biệt và giảng dạy với phương pháp 1-1, 
                  giúp bạn tiến bộ nhanh chóng
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course, index) => (
                  <CourseCard
                    key={index}
                    {...course}
                  />
                ))}
              </div>
            </div>
          </section>
          
          <Features />
          <Testimonials />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
