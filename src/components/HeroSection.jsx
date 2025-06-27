import React from "react";

const HeroSection = () => {
  return (
    <section style={{
      padding: '100px 0 80px 0',
      textAlign: 'center',
      background: 'linear-gradient(120deg, #e3e9f7 0%, #f5f5f5 100%) url(/vite.svg) no-repeat right 10% top 30%',
      backgroundSize: '180px',
      position: 'relative',
      minHeight: '340px',
    }}>
      <style>{`
        @media (max-width: 900px) {
          .hero-title { font-size: 2.1rem !important; }
          .hero-img { height: 220px !important; }
        }
        @media (max-width: 700px) {
          .hero-title { font-size: 1.5rem !important; }
          .hero-section { padding: 48px 0 32px 0 !important; }
          .hero-img { height: 140px !important; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 1.1rem !important; }
          .hero-section { padding: 18px 0 8px 0 !important; }
          .hero-img { height: 80px !important; }
        }
      `}</style>
      <h1 className="hero-title" style={{fontSize: '2.8rem', marginBottom: '1rem', color: '#1a237e', fontWeight: 700, textShadow: '0 2px 8px #e3e9f7'}}>Profesyonel İş Kıyafetleri ve Tekstil Ürünleri</h1>
      <p style={{fontSize: '1.3rem', color: '#444', maxWidth: '600px', margin: '0 auto'}}>Fabrik Tekstil, İzmir ve Manisa merkezli, iş kıyafetleri ve promosyon tekstil üretiminde 28 yıllık bir geçmişe sahip lider bir firmadır.</p>
      <img
        className="hero-img"
        src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80"
        alt="Tekstil Banner"
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
    </section>
  );
};

export default HeroSection; 