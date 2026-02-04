import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-prime flex items-center justify-center group-hover:animate-glow-pulse transition-all">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-display tracking-wider text-foreground group-hover:text-primary transition-colors">
            DHRUTI
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative px-5 py-2 font-medium transition-all duration-300 rounded-lg group ${
                activeSection === link.href.substring(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              <div
                className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "bg-primary/10"
                    : "bg-transparent group-hover:bg-muted/50"
                }`}
              />
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-prime rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Resume Button */}
        <Button
          className="hidden md:flex gap-2 bg-gradient-prime hover:opacity-90 transition-all hover:scale-105 font-semibold"
          onClick={() => window.open("/resume.pdf", "_blank")}
        >
          Resume
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-muted"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-card transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-80 py-6 border-t border-border" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg font-medium transition-all animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
          <Button
            className="mt-4 bg-gradient-prime font-semibold"
            onClick={() => {
              window.open("/resume.pdf", "_blank");
              setIsOpen(false);
            }}
          >
            Download Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;