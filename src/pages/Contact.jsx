import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ContactPage = () => {
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
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage; 