import Layout from "@/components/Layout";
import RevealSection from "@/components/RevealSection";
import { motion } from "framer-motion";

const values = [
  { name: "Innovation", description: "Pushing boundaries with every solution we build." },
  { name: "Excellence", description: "Uncompromising quality in every line of code." },
  { name: "Collaboration", description: "Building together with clients, partners, and communities." },
  { name: "Integrity", description: "Transparency and honesty in all we do." },
  { name: "Empowerment", description: "Creating pathways for underrepresented talent in tech." },
];

const About = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <RevealSection>
            <p className="text-overline mb-4">About Us</p>
            <h1 className="text-display mb-8 max-w-4xl">
              A technology company with <span className="text-primary">purpose</span>
            </h1>
          </RevealSection>
          <RevealSection delay={0.1}>
            <p className="text-body text-lg max-w-2xl mb-16">
              Innovafemme Tech Solutions is a technology company focused on building
              software platforms and developing innovative digital products. We combine
              technical excellence with a deep commitment to social impact.
            </p>
          </RevealSection>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-px bg-primary/10 mb-24">
            <RevealSection>
              <div className="bg-background p-10 md:p-16">
                <p className="text-overline mb-4">Our Mission</p>
                <p className="text-xl font-display font-bold leading-snug">
                  To build impactful technology solutions while creating opportunities
                  for skilled women in technology to grow through real-world experience.
                </p>
              </div>
            </RevealSection>
            <RevealSection delay={0.1}>
              <div className="bg-background p-10 md:p-16">
                <p className="text-overline mb-4">Our Vision</p>
                <p className="text-xl font-display font-bold leading-snug">
                  To become a leading technology solutions provider in Africa while
                  fostering a new generation of innovative technology professionals.
                </p>
              </div>
            </RevealSection>
          </div>

          {/* Values */}
          <RevealSection>
            <p className="text-overline mb-4">Core Values</p>
            <h2 className="text-heading mb-16">
              What drives <span className="text-primary">everything</span> we do
            </h2>
          </RevealSection>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="grid md:grid-cols-5 gap-0"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`p-8 ${i > 0 ? "border-l border-primary/10" : ""}`}
              >
                <span className="font-mono text-xs text-primary block mb-3">0{i + 1}</span>
                <h3 className="text-lg font-bold font-display mb-2">{value.name}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
