import { Mail, Linkedin, MapPin, Send, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "dhrutigaudana.work@gmail.com",
    href: "mailto:dhrutigaudana.work@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/dhruti-gaudana-474995360",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 475-209-0761",
    href: "tel:+14752090761",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about data analytics and AI
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === "LinkedIn" ? "_blank" : undefined}
                rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="modern-card p-8 text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-prime flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <contact.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
                  {contact.label}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors text-sm">
                  {contact.value}
                </p>
                <ArrowUpRight className="w-4 h-4 mx-auto mt-3 text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ))}
          </div>

          {/* Main CTA */}
          <div className="modern-card p-8 md:p-12 text-center bg-gradient-soft">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Whether you have a project in mind or just want to explore possibilities, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="gap-3 bg-gradient-prime hover:opacity-90 transition-all hover:scale-105 px-8 py-6 text-base font-semibold group shadow-lg"
                onClick={() => window.open("mailto:dhrutigaudana.work@gmail.com")}
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send a Message
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-3 border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 px-8 py-6 text-base font-semibold"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
