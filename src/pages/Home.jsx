import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
    {/* Yatay şerit SVG */}
      <Header />
      <div className="page-content"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)"
        }}
      >
        <section className="home-main-section" style={{width: '100%', background: '#fff', padding: '48px 0 32px 0'}}>
          <div className="home-main-grid">
            <div className="home-title" style={{fontSize: '2.3rem', fontWeight: 400, color: '#222', lineHeight: 1.18, letterSpacing: 0.5, minWidth: 320}}>
              Profesyonel İş<br />Kıyafetleri ve<br />Tekstil Ürünleri:<br />Kalite, Güven ve<br />Yenilik
            </div>
            <div style={{fontSize: '1.18rem', color: '#444', lineHeight: 1.7, maxWidth: 700}}>
              <p>Fabrik Tekstil, İzmir ve Manisa merkezli, iş kıyafetleri ve promosyon tekstil üretiminde 28 yıllık bir geçmişe sahip lider bir firmadır. Kurulduğumuz günden bu yana, müşteri memnuniyetini her zaman en ön sırada tutarak, yenilikçi ve özelleştirilmiş çözümler sunmaktayız.</p>
              <p>İş güvenliği ve konforunu ön planda tutan ürün yelpazemizle, her sektörden işletmenin ihtiyaçlarına yanıt veriyoruz.<br/>Sektördeki uzun yıllara dayanan tecrübemiz ve sürekli gelişen üretim teknolojilerimizle, kaliteden ödün vermeden, dayanıklı ve estetik iş kıyafetleri üretmekteyiz.</p>
            </div>
          </div>
        </section>
        {/* Yatay şerit SVG */}
        <div className="home-svg" style={{width: '100%', display: 'flex', justifyContent: 'center', background: 'transparent', margin: '0 0 0 0'}}>
          <svg width="100%" height="60" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '1440px', minWidth: '320px', display: 'block'}}>
            <defs>
              <linearGradient id="headerWave" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#eaf3ff" />
                <stop offset="30%" stopColor="#b3d8fd" />
                <stop offset="60%" stopColor="#7fc7fa" />
                <stop offset="85%" stopColor="#aee7ff" />
                <stop offset="100%" stopColor="#eaf3ff" />
              </linearGradient>
            </defs>
            <path d="M0 30 Q 360 60 720 30 T 1440 30 V60 H0V30Z" fill="url(#headerWave)"/>
          </svg>
        </div>
        {/* 2x2 grid kutular */}
        <section className="home-2x2-section" style={{width: '100%', background: '#fff', padding: '24px 0 48px 0'}}>
          <div className="home-2x2-grid">
            {/* 1 */}
            <div style={{display: 'flex', alignItems: 'flex-start', gap: 24}}>
              <span style={{minWidth: 48, minHeight: 48, display: 'flex', alignItems: 'center'}}>
                {/* worker icon */}
                <svg width="48" height="48" fill="none" stroke="#5b7c8b" strokeWidth="2" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22"/><path d="M16 32v-4a8 8 0 0 1 16 0v4"/><circle cx="24" cy="20" r="4"/><path d="M20 36h8"/></svg>
              </span>
              <div>
                <div style={{fontSize: '1.6rem', fontWeight: 400, marginBottom: 8, color: '#234'}}>İş Kıyafetleri</div>
                <div style={{fontSize: '1.08rem', color: '#444', lineHeight: 1.7}}>İnşaat ve üretim alanlarında kullanıma uygun iş güvenliği kıyafetlerinden, sağlık sektörü için özel tasarlanmış tıbbi kıyafetlere kadar geniş bir ürün yelpazesi sunuyoruz. Endüstriyel çalışma ortamları için yüksek standartlarda üretilen iş elbiseleri, hizmet sektörü çalışanları için şık ve rahat üniformalar tasarlıyoruz.</div>
              </div>
            </div>
            {/* 2 */}
            <div style={{display: 'flex', alignItems: 'flex-start', gap: 24}}>
              <span style={{minWidth: 48, minHeight: 48, display: 'flex', alignItems: 'center'}}>
                {/* tshirt icon */}
                <svg width="48" height="48" fill="none" stroke="#5b7c8b" strokeWidth="2" viewBox="0 0 48 48"><path d="M8 12l8-8h16l8 8"/><path d="M8 12v28a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V12"/><path d="M16 44V24h16v20"/></svg>
              </span>
              <div>
                <div style={{fontSize: '1.6rem', fontWeight: 400, marginBottom: 8, color: '#234'}}>Tekstil Promosyon Ürünleri</div>
                <div style={{fontSize: '1.08rem', color: '#444', lineHeight: 1.7}}>Kurumsal marka kimliğinizi yansıtan promosyon ürünleriyle, marka bilinirliğinizi artırmak için baskılı tişörtler, şapkalar, çantalar ve birçok özelleştirilmiş promosyon ürünü sunuyoruz. İşletmenizin logosu ve marka mesajıyla özelleştirilmiş ürünler, müşterileriniz ve çalışanlarınız arasında kalıcı bir izlenim bırakır.</div>
              </div>
            </div>
            {/* 3 */}
            <div style={{display: 'flex', alignItems: 'flex-start', gap: 24}}>
              <span style={{minWidth: 48, minHeight: 48, display: 'flex', alignItems: 'center'}}>
                {/* pencil icon */}
                <svg width="48" height="48" fill="none" stroke="#5b7c8b" strokeWidth="2" viewBox="0 0 48 48"><path d="M36 12l-24 24"/><path d="M32 8l8 8-4 4-8-8z"/><path d="M8 40l8-8"/></svg>
              </span>
              <div>
                <div style={{fontSize: '1.6rem', fontWeight: 400, marginBottom: 8, color: '#234'}}>Özel Tasarım ve Üretim Hizmetleri</div>
                <div style={{fontSize: '1.08rem', color: '#444', lineHeight: 1.7}}>Kurumsal ihtiyaçlarınıza özel çözümler sunan özel tasarım hizmetlerimizle, işletmenizin kimliğini ve değerlerini yansıtan, özgün iş kıyafetleri ve promosyon ürünleri üretiyoruz. Markanızın vizyonunu ve misyonunu ön plana çıkaran, özelleştirilmiş tasarım ve üretim hizmetlerimizle fark yaratın.</div>
              </div>
            </div>
            {/* 4 */}
            <div style={{display: 'flex', alignItems: 'flex-start', gap: 24}}>
              <span style={{minWidth: 48, minHeight: 48, display: 'flex', alignItems: 'center'}}>
                {/* location icon */}
                <svg width="48" height="48" fill="none" stroke="#5b7c8b" strokeWidth="2" viewBox="0 0 48 48"><circle cx="24" cy="20" r="8"/><path d="M24 4v4"/><path d="M24 44c-8-8-16-16-16-24a16 16 0 1 1 32 0c0 8-8 16-16 24z"/></svg>
              </span>
              <div>
                <div style={{fontSize: '1.6rem', fontWeight: 400, marginBottom: 8, color: '#234'}}>Stratejik Konum: İzmir ve Manisa</div>
                <div style={{fontSize: '1.08rem', color: '#444', lineHeight: 1.7}}>İzmir ve Manisa'da bulunan lokasyonlarımız, bölgesel müşterilerimize hızlı ve etkin hizmet sunmamızda önemli bir avantaj sağlar. Bu stratejik konum, Ege Bölgesi'nin kalbinde, müşteri ihtiyaçlarına hızlı yanıt verme kapasitemizi artırırken, Türkiye'nin dört bir yanındaki işletmelere yönelik üretim ve dağıtım süreçlerimizde de bize esneklik kazandırıyor.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Tekstil temalı yatay şerit görsel */}
      <div style={{width: '100%', overflow: 'hidden', margin: '48px 0 0 0'}}>
        <img 
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1500&q=80" 
          alt="Tekstil şerit" 
          style={{width: '100%', height: '300px', objectFit: 'cover', display: 'block'}} 
        />
      </div>
      {/* Katalog başlığı */}
      <div style={{width: '100%', background: '#fff', padding: '32px 0 0 0', textAlign: 'center'}}>
        
      </div>
      <Categories />
      <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '32px 0'}}>
        <button
          className="home-btn"
          onClick={() => navigate('/katalog')}
          style={{
            background: '#5b7c8b',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            padding: '16px 48px',
            fontSize: 18,
            fontWeight: 500,
            cursor: 'pointer',
            boxShadow: '0 2px 12px #b3c6e633',
            letterSpacing: 1,
            transition: 'background 0.25s, box-shadow 0.25s, transform 0.18s',
            outline: 'none',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #aee7ff 0%, #7fc7fa 100%)';
            e.currentTarget.style.boxShadow = '0 4px 24px #aee7ff99, 0 2px 12px #b3c6e633';
            e.currentTarget.style.transform = 'scale(1.045)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = '#5b7c8b';
            e.currentTarget.style.boxShadow = '0 2px 12px #b3c6e633';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onMouseDown={e => {
            e.currentTarget.style.transform = 'scale(0.97)';
          }}
          onMouseUp={e => {
            e.currentTarget.style.transform = 'scale(1.045)';
          }}
        >
          Daha Fazla Göster
        </button>
      </div>
      <Footer />
      <style>{`
        .home-main-grid {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
          align-items: center;
          padding: 0 24px;
        }
        .home-2x2-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          padding: 0 24px;
        }
        @media (max-width: 900px) {
          .home-main-grid { gap: 24px; }
          .home-2x2-grid { gap: 24px; }
        }
        @media (max-width: 700px) {
          .home-main-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 0 8px;
          }
          .home-2x2-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 0 8px;
          }
        }
        @media (max-width: 480px) {
          .home-main-grid, .home-2x2-grid {
            gap: 8px;
            padding: 0 2px;
          }
          .home-title { font-size: 1.2rem !important; }
          .home-svg { height: 32px !important; }
          .home-img { height: 120px !important; }
          .home-btn { padding: 8px 18px !important; font-size: 0.95rem !important; }
        }
      `}</style>
    </>
  );
};

export default Home; 