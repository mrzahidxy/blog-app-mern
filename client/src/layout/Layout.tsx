import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
