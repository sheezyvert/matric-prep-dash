
import { Github, Instagram, Twitter } from "lucide-react";

// Links organized by sections
const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Curriculum", href: "#curriculum" },
      { name: "For Teachers", href: "#teachers" },
      { name: "Pricing", href: "/pricing" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Tutorials", href: "/tutorials" },
      { name: "Support", href: "/support" },
      { name: "Documentation", href: "/docs" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" }
    ]
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sa-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold">UpGrade</h2>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              AI-powered tutoring in all 11 South African languages. Helping students and teachers excel in their educational journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold mb-4 text-sa-gold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} UpGrade. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
