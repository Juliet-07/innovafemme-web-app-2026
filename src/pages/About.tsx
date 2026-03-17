import Layout from "@/components/Layout";
import RevealSection from "@/components/RevealSection";
import { motion } from "framer-motion";

const values = [
  { name: "Innovation", description: "We continuously explore new ideas and technologies to create forward-thinking solutions that help businesses stay competitive in an evolving digital landscape." },
  { name: "Excellence", description: "We are committed to delivering high-quality products and services by maintaining strong engineering standards, attention to detail, and a culture of continuous improvement." },
  { name: "Empowerment", description: "We believe technology should create opportunities. Through our work and initiatives, we aim to empower businesses and individuals to reach their full potential." },
  { name: "Collaboration", description: "We believe the best solutions are built through teamwork and strong partnerships. We work closely with clients, partners, and collaborators to achieve shared goals." },
  { name: "Integrity", description: "We operate with transparency, accountability, and professionalism in all our engagements, ensuring trust and reliability in the relationships we build." },
  { name: "Inclusion", description: "We are committed to promoting diversity and creating opportunities for women and underrepresented groups to grow and succeed in the technology industry." },
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
                <p className="text-xl font-display font-bold leading-snug mb-4">
                  Innovafemme Tech Solutions exists to design and deliver practical, scalable technology solutions that help businesses operate more efficiently and adapt to the digital economy.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Through software development, technology consulting, and product innovation, we work with organizations to transform ideas into impactful digital tools that solve real-world problems. In addition to building technology solutions, Innovafemme is committed to fostering the growth of future technology leaders by creating opportunities for young women to gain practical exposure, mentorship, and experience within the technology ecosystem.
                </p>
              </div>
            </RevealSection>
            <RevealSection delay={0.1}>
              <div className="bg-background p-10 md:p-16">
                <p className="text-overline mb-4">Our Vision</p>
                <p className="text-xl font-display font-bold leading-snug">
                  To become a leading technology solutions company that empowers businesses with innovative digital products while creating meaningful opportunities for women to grow and thrive in the technology industry.
                </p>
              </div>
            </RevealSection>
          </div>

          {/* Values */}
          <RevealSection>
            <p className="text-overline mb-4">Core Values</p>
            <p className="text-lg text-muted-foreground max-w-2xl mb-4">
              The values of Innovafemme guide how we build products, work with clients, and contribute to the technology community.
            </p>
            <h2 className="text-heading mb-16">
              What drives <span className="text-primary">everything</span> we do
            </h2>
          </RevealSection>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="grid md:grid-cols-3 gap-0"
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
