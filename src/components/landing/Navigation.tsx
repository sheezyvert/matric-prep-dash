
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "./LanguageSelector";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="font-bold text-xl text-primary">CAPS AI Tutor</a>
          <div className="hidden md:flex space-x-6">
            <a href="#curriculum" className="text-sm hover:text-primary transition-colors">Curriculum</a>
            <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <LanguageSelector />
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/login">Login</a>
            </Button>
            <Button size="sm" asChild>
              <a href="/signup">Sign Up</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
