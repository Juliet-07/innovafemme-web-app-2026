import Layout from "@/components/Layout";
import RevealSection from "@/components/RevealSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const partnerTypes = [
  {
    title: "Technology Partnerships",
    description: "Collaborate on cutting-edge technology solutions. We partner with organizations that share our commitment to technical excellence.",
  },
  {
    title: "Product Collaborations",
    description: "Co-develop digital products that address market gaps. Bring your domain expertise; we'll bring the engineering.",
  },
  {
    title: "Institutional Partnerships",
    description: "Work with educational institutions, government bodies, and NGOs on technology-driven development initiatives.",
  },
  {
    title: "Innovation Initiatives",
    description: "Join us in exploring emerging technologies — from AI to blockchain — through joint research and pilot programs.",
  },
];

const Partnership = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <RevealSection>
            <p className="text-overline mb-4">Partnerships</p>
            <h1 className="text-display mb-8 max-w-4xl">
              Let's build the <span className="text-primary">future together</span>
            </h1>
            <p className="text-body text-lg max-w-2xl mb-24">
              We believe the most impactful solutions come from collaboration. Explore
              how your organization can partner with Innovafemme.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-px bg-primary/10 mb-24">
            {partnerTypes.map((type, i) => (
              <RevealSection key={type.title} delay={i * 0.08}>
                <div className="bg-background p-10 md:p-12 h-full">
                  <span className="font-mono text-xs text-primary block mb-4">0{i + 1}</span>
                  <h3 className="text-xl font-bold font-display mb-3">{type.title}</h3>
                  <p className="text-body">{type.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection>
            <div className="text-center py-16">
              <h2 className="text-heading mb-6">
                Interested in <span className="text-primary">partnering</span>?
              </h2>
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover-press hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Partner With Us <ArrowRight size={16} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </Layout>
  );
};

export default Partnership;
