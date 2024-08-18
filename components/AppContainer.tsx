import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <section >
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default AppContainer;
