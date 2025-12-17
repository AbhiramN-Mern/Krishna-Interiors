import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`text-xl md:text-2xl font-heading font-semibold transition-colors ${
            isScrolled ? "text-foreground" : "text-background"
          }`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Krishna <span className="text-primary">Interiors</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`font-body text-sm font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-background"
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="hero"
            size="sm"
            onClick={() => (window.location.href = "tel:+919876543210")}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-background"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg py-4">
          <nav className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-body text-foreground hover:text-primary transition-colors text-left py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="hero"
              onClick={() => (window.location.href = "tel:+919876543210")}
              className="mt-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
