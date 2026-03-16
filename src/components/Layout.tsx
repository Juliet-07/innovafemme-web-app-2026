import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
