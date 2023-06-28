import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface childrenProps {
  children: ReactNode;
}

const Layout: React.FC<childrenProps> = ({ children }: childrenProps) => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
