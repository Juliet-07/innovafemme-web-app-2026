import Layout from "@/components/Layout";
import RevealSection from "@/components/RevealSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "Mentorship",
    description: "Pairing emerging talent with experienced professionals who guide their growth through hands-on collaboration.",
  },
  {
    title: "Project-Based Learning",
    description: "Learning by doing — participants work on real client projects, building production-grade software from day one.",
  },
  {
    title: "Real-World Experience",
    description: "No simulations. Participants contribute to live projects, gaining experience that employers value.",
  },
  {
    title: "Portfolio Development",
    description: "Every participant leaves with a portfolio of real, deployed projects that demonstrate their capabilities.",
  },
];

const Programs = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <RevealSection>
            <p className="text-overline mb-4">Programs & Impact</p>
            <h1 className="text-display mb-8 max-w-4xl">
              Empowering the next generation of{" "}
              <span className="text-primary">women in technology</span>
            </h1>
            <p className="text-body text-lg max-w-2xl mb-24">
              Beyond building software, Innovafemme is committed to creating pathways
              for skilled women who are ready to contribute but lack access to opportunities.
            </p>
          </RevealSection>

          {/* Skilled but Stuck */}
          <RevealSection>
            <div className="bg-card border border-primary/10 p-10 md:p-16 mb-24">
              <span className="font-mono text-xs text-primary block mb-6">FLAGSHIP PROGRAM</span>
              <h2 className="text-heading mb-6">The Skilled but Stuck Program</h2>
              <p className="text-body text-lg max-w-3xl mb-12">
                Many talented women in technology have the skills but lack access to real-world
                project opportunities. They're skilled, but stuck. This program changes that by
                integrating them into real projects where they learn, contribute, and grow.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
                {pillars.map((pillar, i) => (
                  <div
                    key={pillar.title}
                    className={`p-6 ${i > 0 ? "border-l border-primary/10" : ""}`}
                  >
                    <span className="font-mono text-xs text-primary block mb-3">0{i + 1}</span>
                    <h3 className="text-lg font-bold font-display mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="text-center py-16">
              <h2 className="text-heading mb-6">
                Ready to <span className="text-primary">join</span>?
              </h2>
              <p className="text-body mb-8 max-w-xl mx-auto">
                Whether you're a developer, designer, or data analyst — if you're skilled
                and looking for real opportunities, we want to hear from you.
              </p>
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover-press hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Join Our Community <ArrowRight size={16} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
