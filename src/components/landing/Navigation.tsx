
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "./LanguageSelector";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="font-bold text-xl text-sa-emerald">UpGrade</a>
          <div className="hidden md:flex space-x-6">
            <a href="#curriculum" className="text-sm hover:text-sa-emerald transition-colors">Curriculum</a>
            <a href="#features" className="text-sm hover:text-sa-emerald transition-colors">Features</a>
            <a href="#teachers" className="text-sm hover:text-sa-emerald transition-colors">For Teachers</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <LanguageSelector />
          </div>
          <div className="hidden md:flex space-x-2">
            <Button variant="outline" size="sm" className="border-sa-sky text-sa-sky hover:bg-sa-sky/10" asChild>
              <a href="/auth?mode=login">Login</a>
            </Button>
            <Button size="sm" className="bg-sa-emerald hover:bg-sa-emerald/90" asChild>
              <a href="/auth?mode=signup">Sign Up</a>
            </Button>
          </div>
          
          <button 
            className="block md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 top-16 bg-white z-40 px-4 py-6 transform transition-transform duration-300 md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-6">
          <a 
            href="#curriculum" 
            className="text-lg font-medium hover:text-sa-emerald transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Curriculum
          </a>
          <a 
            href="#features" 
            className="text-lg font-medium hover:text-sa-emerald transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#teachers" 
            className="text-lg font-medium hover:text-sa-emerald transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            For Teachers
          </a>
          
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-500 mb-2">Select Language</p>
            <LanguageSelector />
          </div>
          
          <div className="flex flex-col space-y-3 pt-4">
            <Button 
              className="w-full bg-sa-emerald hover:bg-sa-emerald/90"
              onClick={() => setIsMobileMenuOpen(false)} 
              asChild
            >
              <a href="/auth?mode=signup">Sign Up</a>
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-sa-sky text-sa-sky hover:bg-sa-sky/10"
              onClick={() => setIsMobileMenuOpen(false)} 
              asChild
            >
              <a href="/auth?mode=login">Login</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
