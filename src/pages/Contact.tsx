import { useState } from "react";
import Layout from "@/components/Layout";
import RevealSection from "@/components/RevealSection";
import { toast } from "sonner";
import { Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll be in touch soon.");
    setForm({ name: "", organization: "", email: "", description: "" });
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <RevealSection>
                <p className="text-overline mb-4">Contact</p>
                <h1 className="text-display mb-8">
                  Let's <span className="text-primary">talk</span>
                </h1>
                <p className="text-body text-lg mb-12">
                  Whether you have a project in mind, want to explore a partnership,
                  or are interested in joining our community, we would love to hear from you.
                </p>
              </RevealSection>

              <RevealSection delay={0.1}>
                <div className="space-y-8">
                  <div className="gold-border-left">
                    <p className="text-overline mb-1">Email</p>
                    <a href="mailto:innovafemmetechsolutions@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      innovafemmetechsolutions@gmail.com
                    </a>
                  </div>
                  <div className="gold-border-left">
                    <p className="text-overline mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/company/innovafemme-tech-solutions" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                      Innovafemme Tech Solutions
                    </a>
                  </div>
                  <div className="gold-border-left">
                    <p className="text-overline mb-1">Location</p>
                    <p className="text-muted-foreground">Kigali, Rwanda</p>
                  </div>
                </div>
              </RevealSection>
            </div>

            <RevealSection delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-overline block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-card border border-primary/10 px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-overline block mb-2">Organization</label>
                  <input
                    type="text"
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    className="w-full bg-card border border-primary/10 px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label className="text-overline block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-card border border-primary/10 px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-overline block mb-2">Project Description</label>
                  <textarea
                    required
                    rows={5}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full bg-card border border-primary/10 px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell us about your project or how we can work together..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover-press hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </RevealSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
