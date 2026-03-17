import Layout from "@/components/Layout";
import RevealSection from "@/components/RevealSection";
import { Code2, Smartphone, Cloud, Brain, Cpu, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "We build robust web applications, mobile applications, and enterprise platforms tailored to your business needs.",
    features: ["Web Applications", "Mobile Applications", "Enterprise Platforms", "API Development"],
  },
  {
    icon: Smartphone,
    title: "Product Development",
    description: "From ideation to deployment — we design and build digital products that solve real-world problems at scale.",
    features: ["Product Strategy", "UI/UX Design", "MVP Development", "Iterative Scaling"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Reliable deployment, hosting, and scaling of applications on modern cloud infrastructure.",
    features: ["Cloud Migration", "DevOps", "CI/CD Pipelines", "Infrastructure as Code"],
  },
  {
    icon: Brain,
    title: "AI & Data Solutions",
    description: "Intelligent analytics platforms and AI-powered systems that transform data into actionable insights.",
    features: ["Data Analytics", "Machine Learning", "Predictive Systems", "Intelligent Automation"],
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "We design and develop Internet of Things systems that connect devices, collect data, and enable smart automation for businesses.",
    features: ["Sensor Integration", "Real-Time Monitoring", "Edge Computing", "Smart Automation"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description: "We help organizations protect their digital assets through proactive security strategies, assessments, and resilient system architectures.",
    features: ["Security Audits", "Penetration Testing", "Threat Monitoring", "Compliance & Governance"],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <RevealSection>
            <p className="text-overline mb-4">Services</p>
            <h1 className="text-display mb-8 max-w-4xl">
              End-to-end technology <span className="text-primary">solutions</span>
            </h1>
            <p className="text-body text-lg max-w-2xl mb-24">
              We deliver comprehensive technology services — from custom software
              development to AI-powered solutions — helping businesses transform
              and scale.
            </p>
          </RevealSection>

          <div className="space-y-0">
            {services.map((service, i) => (
              <RevealSection key={service.title} delay={i * 0.05}>
                <div className="grid md:grid-cols-2 gap-8 py-16 border-t border-primary/10">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <service.icon className="text-primary" size={24} />
                      <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    </div>
                    <h2 className="text-2xl font-bold font-display mb-4">{service.title}</h2>
                    <p className="text-body">{service.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((f) => (
                      <div key={f} className="gold-border-left py-2">
                        <span className="text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
