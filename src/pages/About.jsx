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
      {/* Header altı sağdan sola görsel */}
      <div style={{width: '100%', overflow: 'hidden', margin: '0 0 32px 0'}}>
        <img 
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1500&q=80" 
          alt="Hakkımızda Banner" 
          className="about-hero-img-anim"
          style={{width: '100%', height: '600px', objectFit: 'cover', display: 'block', float: 'right', transition: 'transform 0.9s cubic-bezier(.4,2,.6,1)'}} 
        />
        <style>{`
          .about-hero-img-anim:hover {
            transform: scale(1.08);
            z-index: 2;
          }
          @media (max-width: 700px) {
            .about-main-section { padding: 16px 0 !important; }
            .about-title { font-size: 1.3rem !important; }
          }
          @media (max-width: 480px) {
            .about-main-section { padding: 6px 0 !important; }
            .about-title { font-size: 1.05rem !important; }
          }
          .about-hero-img-anim {
            transition: transform 0.9s cubic-bezier(.4,2,.6,1) !important;
          }
        `}</style>
      </div>
      <div className="page-content"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)"
        }}
      >
        <About />
      </div>
      {/* Yatay şerit SVG */}
      <Footer />
    </>
  );
};

export default AboutPage; 