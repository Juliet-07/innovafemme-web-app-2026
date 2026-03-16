import Layout from "@/components/Layout";
import RevealSection from "@/components/RevealSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    name: "ABH",
    industry: "Finance",
    problem: "Manual financial processes creating bottlenecks and limiting operational efficiency across multiple branches.",
    solution: "A comprehensive digital platform streamlining financial operations with automated workflows and real-time reporting.",
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
    outcome: "40% increase in operational efficiency across all branches.",
  },
  {
    name: "E-Kaze",
    industry: "E-commerce",
    problem: "Fragmented marketplace experience for local vendors struggling to reach digital customers.",
    solution: "A unified e-commerce platform connecting local vendors with customers through an intuitive, mobile-first experience.",
    tech: ["React", "Python", "PostgreSQL", "Stripe"],
    outcome: "Onboarded 200+ vendors in the first quarter of launch.",
  },
  {
    name: "Gatsibo",
    industry: "Government",
    problem: "Lack of digital infrastructure for citizen service delivery in a rapidly growing district.",
    solution: "A digital governance platform enabling efficient service delivery, data management, and citizen engagement.",
    tech: ["Next.js", "TypeScript", "Cloud Infrastructure"],
    outcome: "Reduced average service processing time by 60%.",
  },
  {
    name: "Kujua360",
    industry: "Education",
    problem: "Limited access to quality learning resources and personalized education pathways for students.",
    solution: "An AI-enhanced learning platform providing personalized content, progress tracking, and adaptive assessments.",
    tech: ["React", "AI/ML", "Firebase", "Python"],
    outcome: "Improved student engagement scores by 45%.",
  },
];

const Portfolio = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <RevealSection>
            <p className="text-overline mb-4">Portfolio</p>
            <h1 className="text-display mb-8 max-w-4xl">
              Case <span className="text-primary">studies</span>
            </h1>
            <p className="text-body text-lg max-w-2xl mb-24">
              Real projects delivering measurable results for organizations across industries.
            </p>
          </RevealSection>

          {projects.map((project, i) => (
            <RevealSection key={project.name} delay={i * 0.05}>
              <div className="border-t border-primary/10 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-1">
                    <span className="font-mono text-xs text-primary block mb-2">0{i + 1} / {project.industry.toUpperCase()}</span>
                    <h2 className="text-heading mb-4">{project.name}</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-overline mb-2">Problem</h3>
                      <p className="text-body">{project.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-overline mb-2">Solution</h3>
                      <p className="text-body">{project.solution}</p>
                    </div>
                    <div className="gold-border-left">
                      <h3 className="text-overline mb-2">Outcome</h3>
                      <p className="text-lg font-display font-bold text-primary">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}

          <RevealSection>
            <div className="text-center py-16 border-t border-primary/10">
              <p className="text-body mb-6">Want results like these?</p>
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover-press hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Start a Project <ArrowRight size={16} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
