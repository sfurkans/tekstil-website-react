import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";

const AboutPage = () => {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(true); }, []);
  return (
    <>
      <Header />
      <div className="page-content"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)"
        }}
      >
        <style>{`
          @media (max-width: 700px) {
            .about-main-section { padding: 16px 0 !important; }
            .about-title { font-size: 1.3rem !important; }
          }
          @media (max-width: 480px) {
            .about-main-section { padding: 6px 0 !important; }
            .about-title { font-size: 1.05rem !important; }
          }
        `}</style>
        <About />
      </div>
      {/* Yatay şerit SVG */}
      <Footer />
    </>
  );
};

export default AboutPage; 