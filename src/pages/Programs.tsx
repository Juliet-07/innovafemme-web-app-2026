import Layout from "@/components/Layout";
import RevealSection from "@/components/RevealSection";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Briefcase, Lightbulb, Target, Heart, Building2, GraduationCap, Globe, HandshakeIcon } from "lucide-react";

const trainingComponents = [
  {
    icon: BookOpen,
    title: "Project-Based Learning",
    description: "Participants work on practical technology projects that simulate real industry challenges and solutions — not theoretical coursework.",
  },
  {
    icon: Users,
    title: "Mentorship & Guidance",
    description: "Experienced professionals provide guidance on technical growth, career development, and navigating the technology industry.",
  },
  {
    icon: Briefcase,
    title: "Industry Exposure",
    description: "Participants collaborate with businesses and organizations working on live technology projects, gaining real-world context.",
  },
  {
    icon: Lightbulb,
    title: "Career Development",
    description: "Training includes soft skills — communication, teamwork, leadership, and professional growth — to prepare participants for successful careers.",
  },
];

const programObjectives = [
  "Bridge the gap between technical training and employment opportunities",
  "Provide participants with hands-on project experience",
  "Build strong portfolios and industry credibility for participants",
  "Increase the employability of young women in the technology sector",
  "Support businesses by connecting them with emerging technology talent",
];

const participantBenefits = [
  "Work on real-life projects with startups, SMEs, and organizations",
  "Gain practical experience in software development, design, and project collaboration",
  "Build strong portfolios that increase employability",
  "Receive mentorship and career guidance from experienced professionals",
  "Training in communication, problem-solving, teamwork, and leadership",
];

const impactGoals = [
  "Increase the number of women gaining practical experience in technology fields",
  "Create pathways for skilled women to transition into professional tech careers",
  "Support businesses by connecting them with motivated and capable emerging talent",
  "Contribute to the growth of a more inclusive and diverse technology ecosystem",
];

const partnerTypes = [
  { icon: Building2, label: "Technology companies" },
  { icon: Target, label: "Startups and SMEs" },
  { icon: Heart, label: "Non-governmental organizations (NGOs)" },
  { icon: GraduationCap, label: "Educational institutions" },
  { icon: Globe, label: "Development organizations" },
];

const partnerSupport = [
  "Providing real-life project opportunities for participants",
  "Mentorship and training support",
  "Internship and employment pathways for participants",
  "Sponsorship of training initiatives",
];

const Programs = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pb-0">
        <div className="container-wide">
          <RevealSection>
            <p className="text-overline mb-4">Programs & Impact</p>
            <h1 className="text-display mb-8 max-w-4xl">
              Transforming skills into{" "}
              <span className="text-primary">opportunity</span>
            </h1>
            <p className="text-body text-lg max-w-3xl mb-6">
              At Innovafemme Tech Solutions, we believe that technology is not only a tool for business growth but also a powerful driver of social transformation. We are committed to supporting initiatives that expand access to opportunities within the technology ecosystem.
            </p>
            <p className="text-body text-lg max-w-3xl mb-24">
              Across many African communities, young people — particularly women — are acquiring technical skills but often struggle to transition into professional roles due to limited access to mentorship, real-world projects, and industry exposure. Innovafemme seeks to bridge this gap by creating structured pathways that connect learning with practical experience.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Dual audience callout */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-px bg-primary/10">
            <RevealSection>
              <div className="bg-card p-10 md:p-14 h-full">
                <span className="font-mono text-xs text-primary block mb-4">FOR WOMEN IN TECH</span>
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">You're skilled. Let's get you unstuck.</h2>
                <p className="text-muted-foreground mb-6">
                  If you've completed training but lack access to real projects, mentorship, or industry connections — our programs are built for you. Gain hands-on experience, build a portfolio of real work, and transition into a professional tech career.
                </p>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  Apply to Join <ArrowRight size={14} />
                </Link>
              </div>
            </RevealSection>
            <RevealSection delay={0.1}>
              <div className="bg-card p-10 md:p-14 h-full">
                <span className="font-mono text-xs text-primary block mb-4">FOR ORGANIZATIONS & PARTNERS</span>
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Access motivated, project-ready talent.</h2>
                <p className="text-muted-foreground mb-6">
                  Join our network to offer jobs, contracts, or project opportunities to women we've trained through real-world, project-based programs. You get capable talent — they get the break they deserve.
                </p>
                <Link
                  to="/contact"
                  className="px-6 py-3 border border-primary text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center gap-2"
                >
                  Partner With Us <ArrowRight size={14} />
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Training & Empowerment */}
      <section className="section-padding">
        <div className="container-wide">
          <RevealSection>
            <span className="font-mono text-xs text-primary block mb-4">TRAINING & EMPOWERMENT</span>
            <h2 className="text-heading mb-4 max-w-3xl">Building competence through real projects, not classrooms</h2>
            <p className="text-body text-lg max-w-3xl mb-16">
              Innovafemme runs training and empowerment initiatives designed to support young women pursuing careers in technology. Our focus is on practical learning and industry exposure — ensuring participants move beyond theoretical knowledge and gain meaningful experience.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {trainingComponents.map((item, i) => (
              <RevealSection key={item.title} delay={i * 0.06}>
                <div className={`p-8 h-full ${i > 0 ? "md:border-l border-primary/10" : ""}`}>
                  <item.icon className="text-primary mb-4" size={28} />
                  <h3 className="text-lg font-bold font-display mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skilled But Stuck */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <RevealSection>
            <div className="border border-primary/10 p-10 md:p-16 mb-16">
              <span className="font-mono text-xs text-primary block mb-6">FLAGSHIP PROGRAM</span>
              <h2 className="text-heading mb-6">The Skilled But Stuck Program</h2>
              <p className="text-body text-lg max-w-3xl mb-6">
                Across Africa, many young women successfully complete technical training programs but face significant challenges entering the workforce. Despite possessing foundational skills, they often lack access to the real-world experience required by employers.
              </p>
              <p className="text-body text-lg max-w-3xl">
                The Skilled But Stuck Program is designed to address this challenge by creating a bridge between technical training and real industry experience. Through this program, Innovafemme connects skilled young women with real technology projects, allowing them to apply their knowledge, gain confidence, and build portfolios that demonstrate their capabilities.
              </p>
            </div>
          </RevealSection>

          {/* What participants gain */}
          <RevealSection>
            <div className="grid md:grid-cols-2 gap-16 mb-16">
              <div>
                <span className="font-mono text-xs text-primary block mb-4">FOR PARTICIPANTS</span>
                <h3 className="text-xl font-bold font-display mb-6">What you'll gain</h3>
                <ul className="space-y-4">
                  {participantBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <ArrowRight className="text-primary mt-1 shrink-0" size={14} />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-mono text-xs text-primary block mb-4">PROGRAM OBJECTIVES</span>
                <h3 className="text-xl font-bold font-display mb-6">What we aim to achieve</h3>
                <ul className="space-y-4">
                  {programObjectives.map((obj) => (
                    <li key={obj} className="flex items-start gap-3">
                      <ArrowRight className="text-primary mt-1 shrink-0" size={14} />
                      <span className="text-muted-foreground">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="section-padding">
        <div className="container-wide">
          <RevealSection>
            <span className="font-mono text-xs text-primary block mb-4">EXPECTED IMPACT</span>
            <h2 className="text-heading mb-6 max-w-3xl">
              Turning technical knowledge into{" "}
              <span className="text-primary">meaningful careers</span>
            </h2>
            <p className="text-body text-lg max-w-3xl mb-12">
              By equipping participants with practical experience and industry exposure, Innovafemme helps transform technical knowledge into meaningful career opportunities.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-px bg-primary/10 mb-24">
            {impactGoals.map((goal, i) => (
              <RevealSection key={goal} delay={i * 0.06}>
                <div className="bg-background p-8 md:p-10 h-full">
                  <span className="font-mono text-xs text-primary block mb-3">0{i + 1}</span>
                  <p className="text-foreground font-medium">{goal}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <RevealSection>
            <span className="font-mono text-xs text-primary block mb-4">PARTNERSHIP OPPORTUNITIES</span>
            <h2 className="text-heading mb-6 max-w-3xl">
              Join us in building a more{" "}
              <span className="text-primary">inclusive</span> tech ecosystem
            </h2>
            <p className="text-body text-lg max-w-3xl mb-16">
              Innovafemme welcomes collaboration with organizations that share a commitment to expanding opportunities within the technology ecosystem. Through collaboration, we create sustainable pathways for emerging professionals to grow and contribute meaningfully to the digital economy.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <RevealSection>
              <div>
                <h3 className="text-lg font-bold font-display mb-6">Who can partner with us</h3>
                <div className="space-y-4">
                  {partnerTypes.map((partner) => (
                    <div key={partner.label} className="flex items-center gap-4 p-4 border border-primary/10">
                      <partner.icon className="text-primary shrink-0" size={20} />
                      <span className="text-foreground">{partner.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
            <RevealSection delay={0.1}>
              <div>
                <h3 className="text-lg font-bold font-display mb-6">How you can support</h3>
                <ul className="space-y-4">
                  {partnerSupport.map((item) => (
                    <li key={item} className="flex items-start gap-3 p-4 border border-primary/10">
                      <HandshakeIcon className="text-primary mt-0.5 shrink-0" size={20} />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <RevealSection>
            <div className="text-center py-16">
              <h2 className="text-heading mb-6">
                Ready to make an <span className="text-primary">impact</span>?
              </h2>
              <p className="text-body mb-10 max-w-xl mx-auto">
                Whether you're a skilled woman looking for your next opportunity, or an organization ready to invest in emerging talent — we'd love to connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Join as Talent <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border border-primary text-primary font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center justify-center gap-2"
                >
                  Partner With Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
