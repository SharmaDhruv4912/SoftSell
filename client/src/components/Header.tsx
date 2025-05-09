import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollToSection from "@/hooks/useScrollToSection";
import Logo from "@/components/Logo";

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const scrollToSection = useScrollToSection();

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Logo width={36} height={36} />
            <span className="text-2xl font-bold text-primary dark:text-primary">SoftSell</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("how-it-works")}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick("why-choose-us")}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick("testimonials")}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </Button>
            )}

            {/* CTA Button */}
            <Button
              onClick={() => handleNavClick("contact")}
              className="hidden md:block"
            >
              Get a Quote
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="md:hidden"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => handleNavClick("how-it-works")}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-2 py-1 rounded-md text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavClick("why-choose-us")}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-2 py-1 rounded-md text-left"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => handleNavClick("testimonials")}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-2 py-1 rounded-md text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-2 py-1 rounded-md text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => handleNavClick("contact")}
                className="w-full"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
