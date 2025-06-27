import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home; 