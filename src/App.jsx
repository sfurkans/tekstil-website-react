import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';
import { useEffect, useState } from 'react';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function FadeTransition({ children, duration = 400 }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, [children]);
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transition: `opacity ${duration}ms cubic-bezier(.4,2,.6,1)`
    }}>
      {children}
    </div>
  );
}

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Routes location={location}>
        <Route path="/" element={<FadeTransition key={location.pathname}><Home /></FadeTransition>} />
        <Route path="/katalog" element={<FadeTransition key={location.pathname}><Catalog /></FadeTransition>} />
        <Route path="/hakkimizda" element={<FadeTransition key={location.pathname}><About /></FadeTransition>} />
        <Route path="/iletisim" element={<FadeTransition key={location.pathname}><Contact /></FadeTransition>} />
        <Route path="/katalog/:categorySlug" element={<FadeTransition key={location.pathname}><CategoryPage /></FadeTransition>} />
      </Routes>
    </>
  );
}

export default App;
