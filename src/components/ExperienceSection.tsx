import { MapPin, Calendar, ChevronRight, Building2 } from "lucide-react";

const experiences = [
  {
    company: "AIonix11 (Client: Broadridge)",
    role: "Senior Data Analyst / Data Consultant",
    period: "Jan 2023 - Present",
    location: "Lake Success, NY",
    highlights: [
      "Led end-to-end analytics for finance and audit initiatives, delivering insights supporting $50M+ portfolio decisions",
      "Designed scalable data models improving data accuracy by 30% and reducing reporting defects by 25%",
      "Optimized advanced SQL queries analyzing 5M+ financial records, improving query performance by 40%",
      "Conducted data profiling and validation, reducing recurring production defects by 35%",
      "Built Python workflows automating trend analysis, saving 25 hours/week in manual analysis",
    ],
    isCurrent: true,
  },
  {
    company: "Blue Cloud",
    role: "Data Analyst",
    period: "Aug 2019 - Aug 2022",
    location: "India",
    highlights: [
      "Analyzed large-scale datasets (500K+ records) using SQL, SAS, and Python for KPI reporting",
      "Designed interactive Power BI dashboards used by C-suite executives for strategic planning",
      "Conducted statistical analysis identifying 3 key cost drivers that led to $200K annual savings",
      "Performed cohort and variance analysis achieving 15% improvement in patient throughput",
      "Validated ETL pipelines improving data consistency across systems by 30%",
    ],
    isCurrent: false,
  },
  {
    company: "Easy Laser Tech",
    role: "Database Administrator",
    period: "Aug 2018 - Mar 2019",
    location: "India",
    highlights: [
      "Maintained and optimized 100TB big data systems with 99.5% system uptime",
      "Implemented data security protocols reducing security incidents by 60%",
      "Deployed data processing pipelines achieving 94% accuracy for 1,000+ concurrent users",
    ],
    isCurrent: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Career Journey</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 text-foreground">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="relative mb-12 last:mb-0 pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 md:left-6 w-4 h-4 rounded-full border-4 border-background z-10 ${
                    exp.isCurrent 
                      ? "bg-primary shadow-lg" 
                      : "bg-muted"
                  }`}
                  style={{ top: '1.5rem' }}
                />

                {/* Card */}
                <div className="modern-card p-6 group">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-prime flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                      <Building2 className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-foreground">
                        {exp.company}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-primary font-semibold">{exp.role}</span>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground group/item"
                      >
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                        <span className="group-hover/item:text-foreground transition-colors">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
