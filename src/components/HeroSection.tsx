import { ArrowDown, Download, Mail, Sparkles, Database, BarChart3, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const stats = [
  { icon: Database, value: "5+", label: "Years Experience" },
  { icon: BarChart3, value: "50+", label: "Dashboards Built" },
  { icon: Code, value: "1M+", label: "Data Points Analyzed" },
];

const HeroSection = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-hero"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-soft border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="animate-fade-up delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-foreground leading-tight">
              Hi, I'm <span className="text-gradient">Dhruti Gaudana</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up delay-200 text-2xl md:text-3xl font-display font-semibold text-foreground/80 mb-3">
              Data Analyst
            </p>
            
            <p className="animate-fade-up delay-250 text-lg text-muted-foreground max-w-xl mb-4">
              Finance & Healthcare Analytics Specialist
            </p>

            {/* AI Badge */}
            <div className="animate-fade-up delay-300 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Passionate about AI & LangChain</span>
            </div>

            {/* Description */}
            <p className="animate-fade-up delay-300 text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Results-driven analyst with expertise in SQL, Python, Power BI & Tableau. 
              Transforming complex datasets into strategic insights that drive business decisions.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up delay-400 flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="gap-3 bg-gradient-prime hover:opacity-90 transition-all hover:scale-105 px-8 py-6 text-base font-semibold shadow-lg"
                onClick={handleScrollToContact}
              >
                <Mail className="w-5 h-5" />
                Let's Connect
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 px-8 py-6 text-base font-semibold"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="animate-fade-up delay-500 flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/dhruti-gaudana-474995360"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group shadow-sm"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/dhruti9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group shadow-sm"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:dhrutigaudana.work@gmail.com"
                className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group shadow-sm"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="animate-fade-up delay-300 flex-shrink-0">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-prime opacity-20 blur-2xl" />
              <div className="absolute -inset-2 rounded-full bg-gradient-prime opacity-10" />
              
              {/* Profile image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src={profileImage}
                  alt="Dhruti Gaudana"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-card rounded-2xl px-4 py-2 shadow-lg border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Open to work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="animate-fade-up delay-500 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto mt-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group text-center p-4 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:shadow-lg transition-all cursor-default"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={handleScrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
