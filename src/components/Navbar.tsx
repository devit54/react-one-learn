
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-brand-blue">LearnCode</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#courses" className="text-sm font-medium hover:text-brand-blue transition-colors">Khóa Học</a>
          <a href="#features" className="text-sm font-medium hover:text-brand-blue transition-colors">Tại Sao Chọn Chúng Tôi</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-brand-blue transition-colors">Đánh Giá</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-blue transition-colors">Liên Hệ</a>
          <Button variant="default" className="bg-brand-blue hover:bg-brand-darkBlue">Đăng Ký Ngay</Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-background border-b",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="container py-4 flex flex-col space-y-4">
          <a href="#courses" className="text-sm font-medium hover:text-brand-blue transition-colors" onClick={toggleMenu}>Khóa Học</a>
          <a href="#features" className="text-sm font-medium hover:text-brand-blue transition-colors" onClick={toggleMenu}>Tại Sao Chọn Chúng Tôi</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-brand-blue transition-colors" onClick={toggleMenu}>Đánh Giá</a>
          <a href="#contact" className="text-sm font-medium hover:text-brand-blue transition-colors" onClick={toggleMenu}>Liên Hệ</a>
          <Button variant="default" className="bg-brand-blue hover:bg-brand-darkBlue w-full">Đăng Ký Ngay</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
