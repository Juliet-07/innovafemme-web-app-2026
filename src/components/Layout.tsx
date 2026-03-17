import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-5 md:py-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
