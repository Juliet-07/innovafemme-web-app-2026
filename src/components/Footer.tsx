import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-primary/10">
      <div className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="text-primary font-display font-bold text-xl tracking-tight">
              Innovafemme
            </span>
            <p className="text-body mt-4 max-w-xs">
              Building impactful technology solutions while empowering the next generation of women in technology.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-overline mb-6">Company</h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Products</Link>
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-overline mb-6">Programs</h4>
            <div className="flex flex-col gap-3">
              <Link to="/programs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Impact</Link>
              <Link to="/partnership" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Partnerships</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-overline mb-6">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@innovafemme.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                hello@innovafemme.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Innovafemme Tech Solutions. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Engineering Excellence. Empowering Equity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
