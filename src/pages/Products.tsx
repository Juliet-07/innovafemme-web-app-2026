import Layout from "@/components/Layout";
import RevealSection from "@/components/RevealSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "01",
    name: "Pocket Mechanic",
    tag: "MARKETPLACE",
    problem: "Vehicle owners struggle to find reliable mechanics quickly, while skilled mechanics lack visibility and a steady stream of customers.",
    solution: "A digital platform that connects vehicle owners to certified mechanics, enabling instant booking, transparent pricing, and verified reviews.",
    features: ["Mechanic Discovery & Booking", "Real-time Tracking", "Payment Integration", "Rating & Review System"],
    tech: ["React Native", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "02",
    name: "MedStock AI",
    tag: "AI / HEALTHCARE",
    problem: "Pharmaceutical facilities face frequent stockouts and overstocking due to manual inventory processes, leading to wasted resources and compromised patient care.",
    solution: "An AI-powered inventory management system that predicts demand patterns, automates reordering, and provides real-time visibility across the supply chain.",
    features: ["Demand Forecasting", "Automated Reordering", "Expiry Tracking", "Analytics Dashboard"],
    tech: ["React", "Python", "TensorFlow", "Cloud Functions"],
  },
];

const Products = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <RevealSection>
            <p className="text-overline mb-4">Products</p>
            <h1 className="text-display mb-8 max-w-4xl">
              Products we've <span className="text-primary">built</span>
            </h1>
            <p className="text-body text-lg max-w-2xl mb-24">
              Innovafemme-owned digital products designed to solve real-world
              problems across industries.
            </p>
          </RevealSection>

          {products.map((product, i) => (
            <RevealSection key={product.name} delay={i * 0.1}>
              <div className="border-t border-primary/10 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-16">
                  <div>
                    <span className="font-mono text-xs text-primary mb-4 block">
                      {product.id} / {product.tag}
                    </span>
                    <h2 className="text-heading mb-6">{product.name}</h2>

                    <div className="mb-8">
                      <h3 className="text-overline mb-3">The Problem</h3>
                      <p className="text-body">{product.problem}</p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-overline mb-3">The Solution</h3>
                      <p className="text-body">{product.solution}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {product.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-overline mb-6">Key Features</h3>
                    <div className="space-y-4">
                      {product.features.map((f, fi) => (
                        <div key={f} className="gold-border-left py-3">
                          <span className="font-mono text-xs text-primary block mb-1">0{fi + 1}</span>
                          <span className="text-sm font-medium">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 aspect-video bg-card border border-primary/5 flex items-center justify-center">
                      <span className="text-overline">Product Interface</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}

          <RevealSection>
            <div className="text-center py-16">
              <p className="text-body mb-6">Interested in our products?</p>
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover-press hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
