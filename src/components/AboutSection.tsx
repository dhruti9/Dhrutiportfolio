import { Briefcase, GraduationCap, Sparkles, TrendingUp, Shield, Lightbulb, Brain } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "5+ Years Experience",
    description: "Finance, Healthcare & Banking Analytics",
  },
  {
    icon: GraduationCap,
    title: "Master's in Cybersecurity",
    description: "University of New Haven, 2024",
  },
  {
    icon: Brain,
    title: "AI Enthusiast",
    description: "LangChain • LLMs • RAG • NLP",
  },
];

const skills = [
  { name: "SQL (CTEs, Window Functions)", level: 95 },
  { name: "Python (Pandas, NumPy)", level: 90 },
  { name: "Power BI & DAX", level: 92 },
  { name: "Tableau", level: 88 },
  { name: "AWS/Azure", level: 82 },
  { name: "ETL & Data Pipelines", level: 87 },
];

const coreCompetencies = [
  "Statistical Analysis",
  "A/B Testing",
  "Data Modeling",
  "Hypothesis Testing",
  "Data Governance",
  "KPI Design",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">About Me</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            Transforming Data into <span className="text-gradient">Strategic Insights</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="modern-card p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Results-driven <span className="text-primary font-semibold">Data Analyst</span> with 5+ years of experience 
                transforming complex datasets into strategic insights across 
                <span className="text-foreground font-semibold"> Finance, Healthcare, and Banking</span> sectors.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Proven expertise in advanced SQL, Python, and data visualization tools with a track record of 
                <span className="text-primary font-semibold"> improving data quality by 30%</span>, reducing operational costs, 
                and delivering analytics solutions that drive business decisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-accent font-semibold">✨ AI Enthusiast</span> — Currently building an intelligent 
                medical chatbot using LangChain, LLMs, and RAG architecture for contextual healthcare responses.
              </p>

              {/* Key Strengths */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                <div className="text-center group cursor-default">
                  <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground">Strategic<br/>Insights</span>
                </div>
                <div className="text-center group cursor-default">
                  <Shield className="w-6 h-6 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground">Data<br/>Governance</span>
                </div>
                <div className="text-center group cursor-default">
                  <Lightbulb className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground">Business<br/>Solutions</span>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="modern-card p-6">
              <h3 className="text-lg font-display font-bold text-foreground mb-4">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreCompetencies.map((comp) => (
                  <span
                    key={comp}
                    className="px-4 py-2 bg-gradient-soft text-primary text-sm font-medium rounded-full border border-primary/20"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Cards */}
          <div className="space-y-6">
            {/* Highlight Cards */}
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="modern-card p-6 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-prime flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Skills Progress */}
            <div className="modern-card p-6">
              <h3 className="text-lg font-display font-bold text-foreground mb-6">
                Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-prime rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
