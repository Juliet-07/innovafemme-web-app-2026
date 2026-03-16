import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Smartphone, GraduationCap, Landmark, Heart, BookOpen, Building2, Truck, ShoppingCart, Wheat, Hotel } from "lucide-react";
import Layout from "@/components/Layout";
import RevealSection from "@/components/RevealSection";

const industries = [
  { name: "Finance", icon: Landmark },
  { name: "Healthcare", icon: Heart },
  { name: "Education", icon: BookOpen },
  { name: "Government", icon: Building2 },
  { name: "Logistics", icon: Truck },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Agriculture", icon: Wheat },
  { name: "Hospitality", icon: Hotel },
];

const products = [
  {
    id: "01",
    name: "Pocket Mechanic",
    description: "Digital platform connecting vehicle owners to certified mechanics for seamless auto-care management.",
    tag: "MARKETPLACE",
  },
  {
    id: "02",
    name: "MedStock AI",
    description: "AI-powered pharmaceutical inventory management system that predicts demand and prevents stockouts.",
    tag: "AI / HEALTHCARE",
  },
];

const projects = [
  { name: "ABH", industry: "Finance", tech: ["React", "Node.js", "AWS"] },
  { name: "E-Kaze", industry: "E-commerce", tech: ["React", "Python", "PostgreSQL"] },
  { name: "Gatsibo", industry: "Government", tech: ["Next.js", "TypeScript", "Cloud"] },
  { name: "Kujua360", industry: "Education", tech: ["React", "AI/ML", "Firebase"] },
];

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom web and mobile platforms designed for scale and performance.",
  },
  {
    icon: Smartphone,
    title: "Digital Product Development",
    description: "From concept to deployment — scalable digital products that solve real problems.",
  },
  {
    icon: GraduationCap,
    title: "Technology Training & Mentorship",
    description: "Real project opportunities for emerging tech talent, especially women in technology.",
  },
];

const stagger = {
  container: { transition: { staggerChildren: 0.08 } },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  },
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[70vh]">
            <div className="lg:col-span-3">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-overline mb-6"
              >
                Innovafemme Tech Solutions
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-display mb-6"
              >
                Building Digital Solutions.{" "}
                <span className="text-primary">Empowering Equity.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-body max-w-xl mb-10 text-lg"
              >
                We design and build innovative software platforms for businesses
                while creating opportunities for skilled women in tech to gain
                real-world experience.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover-press hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  Explore Our Work <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-primary/30 text-foreground font-bold uppercase tracking-widest text-sm hover-press hover:border-primary/60 transition-colors"
                >
                  Work With Us
                </Link>
              </motion.div>
            </div>
            <div className="lg:col-span-2 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="aspect-square bg-card border border-primary/10 relative overflow-hidden"
              >
                {/* Abstract grid pattern */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.3, 0.1] }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className={`border border-primary/5 ${i % 3 === 0 ? "bg-primary/5" : ""}`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-2 border-primary mx-auto mb-4 flex items-center justify-center">
                      <Code2 className="text-primary" size={28} />
                    </div>
                    <p className="text-overline">Engineering Excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding-sm bg-card">
        <div className="container-wide">
          <RevealSection>
            <p className="text-overline mb-4">What We Do</p>
            <h2 className="text-heading mb-16 max-w-2xl">
              Technology solutions that drive{" "}
              <span className="text-primary">real impact</span>
            </h2>
          </RevealSection>
          <motion.div
            variants={stagger.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-0"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={stagger.item}
                className={`p-8 md:p-10 ${i > 0 ? "border-l border-primary/10" : ""}`}
              >
                <service.icon className="text-primary mb-6" size={28} />
                <h3 className="text-xl font-bold mb-3 font-display">{service.title}</h3>
                <p className="text-body">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <RevealSection>
            <p className="text-overline mb-4">Industries We Serve</p>
            <h2 className="text-heading mb-16 max-w-2xl">
              Cross-sector expertise for <span className="text-primary">diverse markets</span>
            </h2>
          </RevealSection>
          <motion.div
            variants={stagger.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/10"
          >
            {industries.map((ind) => (
              <motion.div
                key={ind.name}
                variants={stagger.item}
                className="bg-background p-8 flex flex-col items-center gap-3 group hover:bg-card transition-colors"
              >
                <ind.icon className="text-primary/60 group-hover:text-primary transition-colors" size={24} />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {ind.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <RevealSection>
            <p className="text-overline mb-4">Featured Products</p>
            <h2 className="text-heading mb-16">
              Products we've <span className="text-primary">built</span>
            </h2>
          </RevealSection>
          <div className="grid md:grid-cols-2 gap-px bg-primary/10">
            {products.map((product, i) => (
              <RevealSection key={product.name} delay={i * 0.1}>
                <Link
                  to="/products"
                  className="block bg-background p-8 md:p-12 group hover:bg-card transition-colors h-full"
                >
                  <span className="font-mono text-xs text-primary mb-4 block">
                    {product.id} / {product.tag}
                  </span>
                  <h3 className="text-heading mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-body mb-8">{product.description}</p>
                  <div className="aspect-video bg-card border border-primary/5 flex items-center justify-center">
                    <span className="text-overline">Product Preview</span>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <RevealSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-overline mb-4">Our Work</p>
                <h2 className="text-heading">
                  Selected <span className="text-primary">projects</span>
                </h2>
              </div>
              <Link
                to="/portfolio"
                className="hidden md:inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </RevealSection>
          <motion.div
            variants={stagger.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.name} variants={stagger.item}>
                <Link
                  to="/portfolio"
                  className="card-surface block group"
                >
                  <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.industry}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <p className="text-overline mb-4">Our Impact</p>
              <h2 className="text-heading mb-6">
                The <span className="text-primary">Skilled but Stuck</span> Program
              </h2>
              <p className="text-body mb-8">
                Many talented women in technology have the skills but lack access to real-world
                opportunities. Our program bridges this gap through mentorship, project-based
                learning, and portfolio development.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {["Mentorship", "Project-Based Learning", "Real-World Experience", "Portfolio Development"].map(
                  (item, i) => (
                    <div key={item} className="gold-border-left">
                      <span className="font-mono text-xs text-primary block mb-1">0{i + 1}</span>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  )
                )}
              </div>
            </RevealSection>
            <RevealSection delay={0.2}>
              <div className="aspect-[4/3] bg-background border border-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-display font-bold text-primary mb-2">40%</p>
                  <p className="text-overline">Increase in Operational Efficiency</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <RevealSection>
            <p className="text-overline mb-6">Ready to Build?</p>
            <h2 className="text-display mb-6 max-w-3xl mx-auto">
              Have a project idea?{" "}
              <span className="text-primary">Let's build it together.</span>
            </h2>
            <p className="text-body mb-10 max-w-xl mx-auto text-lg">
              Whether you're a business seeking a technology partner or a developer looking
              to make an impact, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover-press hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link
                to="/partnership"
                className="px-8 py-4 border border-primary/30 text-foreground font-bold uppercase tracking-widest text-sm hover-press hover:border-primary/60 transition-colors"
              >
                Partner With Us
              </Link>
              <Link
                to="/programs"
                className="px-8 py-4 border border-primary/30 text-foreground font-bold uppercase tracking-widest text-sm hover-press hover:border-primary/60 transition-colors"
              >
                Join Our Community
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
