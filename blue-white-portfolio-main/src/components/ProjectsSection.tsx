import { ExternalLink, Github, BarChart3, ShoppingCart, Database, ArrowUpRight, Star, Bot, LineChart, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Medical Chatbot (LangChain)",
    description:
      "Building an AI-powered medical assistant using LLMs and RAG architecture. Features vector database (FAISS/Pinecone) for contextual conversations and sub-2-second response times.",
    icon: Bot,
    tags: ["LangChain", "Python", "LLM", "RAG", "NLP"],
    link: "https://github.com/dhruti9/chatbot-",
    featured: true,
    highlight: "AI Project",
  },
  {
    title: "American Bank Loan Analytics",
    description:
      "Comprehensive Power BI dashboard analyzing 50,000+ bank loan records with advanced DAX calculations for KPIs, MTD/MoM tracking, and risk assessment metrics.",
    icon: CreditCard,
    tags: ["Power BI", "DAX", "Data Modeling", "Finance"],
    link: "https://github.com/dhruti9/american-bank-power-bi",
    featured: true,
    highlight: "Power BI",
  },
  {
    title: "Retail Sales Analysis (SQL)",
    description:
      "SQL-based analysis of 100,000+ retail transactions using CTEs, window functions, and aggregations to uncover sales patterns and customer behavior trends.",
    icon: Database,
    tags: ["SQL", "PostgreSQL", "Analytics", "Python"],
    link: "https://github.com/dhruti9/sql_retail_sales",
    featured: true,
    highlight: "SQL",
  },
  {
    title: "Python Diwali Sales Analysis",
    description:
      "Comprehensive data analysis exploring customer demographics, purchasing patterns, and product performance insights using Python and visualization libraries.",
    icon: BarChart3,
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    link: "https://github.com/dhruti9/python_diwali_analysis",
    featured: true,
    highlight: "Python",
  },
  {
    title: "Amazon Sales Dashboard",
    description:
      "Interactive sales analytics project analyzing Amazon sales data to uncover revenue trends, product performance, and actionable business insights.",
    icon: ShoppingCart,
    tags: ["Data Analytics", "Visualization", "Sales"],
    link: "https://github.com/dhruti9/Amazon_sales-",
    featured: true,
    highlight: "Dashboard",
  },
  {
    title: "Power BI Portfolio",
    description:
      "Collection of enterprise-grade Power BI dashboards across retail, finance, and healthcare domains with drill-through capabilities and mobile-responsive layouts.",
    icon: LineChart,
    tags: ["Power BI", "DAX", "Data Viz"],
    link: "https://github.com/dhruti9/power-bi-",
    featured: true,
    highlight: "Portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world data analytics projects showcasing SQL, Python, Power BI, and AI skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="modern-card h-full overflow-hidden">
                {/* Header with gradient */}
                <div className="h-40 bg-gradient-soft flex items-center justify-center relative overflow-hidden">
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.2) 1px, transparent 0)`,
                      backgroundSize: '20px 20px',
                    }} />
                  </div>
                  
                  {/* Icon */}
                  <project.icon className="w-16 h-16 text-primary group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
                  
                  {/* Featured badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 bg-gradient-prime text-primary-foreground rounded-full text-xs font-semibold shadow-md">
                    <Star className="w-3 h-3" />
                    {project.highlight}
                  </div>

                  {/* External link indicator */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-card/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3 group-hover:text-foreground/80 transition-colors">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all group font-semibold"
            asChild
          >
            <a href="https://github.com/dhruti9" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
