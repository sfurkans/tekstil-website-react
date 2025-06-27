import React, { useRef, useEffect, useState } from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import "../components/Catalog.css";

const processSteps = [
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#234" strokeWidth="2" viewBox="0 0 48 48"><path d="M8 40V8h32v32H8z" stroke="#234"/><path d="M16 20h16M16 28h16" stroke="#234"/><path d="M20 16v16M28 16v16" stroke="#234"/></svg>
    ),
    title: "Tasarım Danışmanlığı",
    desc: "İşletmenizin ihtiyaçlarını anlamaya yönelik birinci adımımız, sizinle detaylı bir görüşme yapmaktır. Bu görüşmede, markanızın değerleri, tercih edilen renkler ve logonuzun kullanımı gibi konular ele alınır."
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#234" strokeWidth="2" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" stroke="#234"/><circle cx="24" cy="24" r="8" stroke="#234"/></svg>
    ),
    title: "Malzeme Seçimi",
    desc: "Dayanıklılık, konfor, estetik ve bütçe açısından en uygun malzemeleri birlikte seçeriz. Bu seçim, çalışanlarınızın ihtiyaçları ve işinizin doğası göz önünde bulundurularak yapılır."
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#234" strokeWidth="2" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" stroke="#234"/><path d="M24 16v8l6 6" stroke="#234"/></svg>
    ),
    title: "Numune Üretimi",
    desc: "Tasarım ve malzeme seçimlerinizin ardından, gerçek üretim sürecine geçmeden önce, tasarımlarınızın fiziksel bir örneğini üretiriz. Bu adım, ürünlerin görünümü ve kalitesi konusunda hem sizin hem de bizim için bir onay aşamasıdır."
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#234" strokeWidth="2" viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="4" stroke="#234"/><path d="M16 32V16h16v16H16z" stroke="#234"/></svg>
    ),
    title: "Üretim",
    desc: "Tasarım ve malzeme seçimleriniz doğrultusunda üretim sürecimiz başlar. Modern üretim teknikleri ve deneyimli ekibimizle, ürünlerin kalitesinden ödün vermeden üretimi gerçekleştiririz."
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" stroke="#234" strokeWidth="2" viewBox="0 0 48 48"><path d="M24 4l8 8-8 8-8-8 8-8z" stroke="#234"/><circle cx="24" cy="32" r="12" stroke="#234"/></svg>
    ),
    title: "Kalite Kontrol",
    desc: "Her bir ürün, teslimat öncesi detaylı bir kalite kontrol sürecinden geçer. Bu, ürünlerin marka standartlarınıza uygunluğunu ve uzun süreli kullanımını garanti eder."
  }
];

const workerImg = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"; // yüksek çözünürlüklü tekstil görseli

const galleryImgs = [
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
];

const Catalog = () => {
  const boxRef = useRef(null);
  const [boxHeight, setBoxHeight] = useState(340);
  const processCardRefs = useRef([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    if (boxRef.current) {
      setBoxHeight(boxRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (boxRef.current) setBoxHeight(boxRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observers = [];
    processCardRefs.current.forEach((ref) => {
      if (ref) {
        const observer = new window.IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              ref.classList.add("show");
              observer.disconnect();
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

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
          @media (max-width: 900px) {
            .catalog-hero-section, .catalog-process-section { padding: 12px 0 !important; }
            .catalog-hero-box h2 { font-size: 1.3rem !important; }
          }
          @media (max-width: 700px) {
            .catalog-hero-section, .catalog-process-section { padding: 4px 0 !important; }
            .catalog-hero-box h2 { font-size: 1.1rem !important; }
            .catalog-process-steps { grid-template-columns: 1fr !important; gap: 12px !important; }
          }
          @media (max-width: 480px) {
            .catalog-hero-section, .catalog-process-section { padding: 2px 0 !important; }
            .catalog-hero-box h2 { font-size: 0.95rem !important; }
            .catalog-process-steps { grid-template-columns: 1fr !important; gap: 6px !important; }
          }
        `}</style>
        {/* Hero Section */}
        <section className="catalog-hero-section">
          <div ref={boxRef} className="catalog-hero-box">
            <div className="catalog-hero-icon">
              
            </div>
            <h2>Özel Üretim İş Kıyafetleri ve Promosyon Tekstili</h2>
            <p>
              Firmanızın ihtiyaçlarına, kurumsal renklerinize ve logonuza uygun olarak tasarlanmış iş kıyafetleri ve promosyon tekstil ürünleri
            </p>
          </div>
          <div className="catalog-hero-img" style={{ minHeight: boxHeight, height: boxHeight }}>
            <img src={workerImg} alt="İşçi" className="catalog-worker-img" />
          </div>
        </section>
        {/* Process Steps */}
        <section className="catalog-process-section">
          <h3>Özel Üretim Süreci Nasıl İşler?</h3>
          <div className="catalog-process-steps">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="catalog-process-card catalog-animated-card"
                ref={el => processCardRefs.current[i] = el}
              >
                <div className="catalog-process-icon">{step.icon}</div>
                <div className="catalog-process-title">{step.title}</div>
                <div className="catalog-process-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Kategoriler */}
        <Categories />
        {/* Neden Özel Üretim ve SSS Bölümü */}
        <section style={{ maxWidth: '900px', margin: '40px auto', padding: '0 16px', fontFamily: 'inherit' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '18px' }}>Neden Özel Üretim Tercih Edilmeli?</h2>
          <ul style={{ fontSize: '1.1rem', marginBottom: '32px' }}>
            <li><b>Kurumsal Kimlikle Uyum:</b> Markanızın kimliğine özel tasarımlarla, kurumsal imajınızı güçlendirirsiniz.</li>
            <li><b>Rekabet Avantajı:</b> Özgün ve kaliteli iş kıyafetleri ile sektördeki diğer firmalardan ayrılırsınız.</li>
            <li><b>Çalışan Memnuniyeti:</b> Konforlu ve işlevsel kıyafetler, çalışanlarınızın memnuniyetini ve verimliliğini artırır.</li>
          </ul>
          <h2 style={{ textAlign: 'center', marginBottom: '18px' }}>Sıkça Sorulan Sorular</h2>
          <div style={{ fontSize: '1.08rem', lineHeight: '1.7' }}>
            <p><b>1. Özel üretim iş kıyafetleri ve promosyon tekstilleri siparişi vermek istiyorum. Süreç nasıl işliyor?</b></p>
            <p>Özel üretim sürecimiz, tasarım danışmanlığı ile başlar. Sizinle markanızın ihtiyaçlarını ve vizyonunu detaylı bir şekilde ele alırız. Ardından malzeme seçimi, numune üretimi, kalite kontrol ve teslimat aşamalarını içeren bir dizi adımı takip ederiz. Bu süreç, markanızın özgün ve kaliteli iş kıyafetleri ve promosyon tekstilleri ile öne çıkmasını sağlar.</p>
            <p><b>2. Minimum sipariş miktarınız nedir?</b></p>
            <p>Minimum sipariş miktarımız, ürün türüne ve tasarım karmaşıklığına göre değişiklik gösterebilir. Özel üretim ihtiyaçlarınız için lütfen bizimle doğrudan iletişime geçin, böylece sizin için en uygun çözümü sunabiliriz.</p>
            <p><b>3. Tasarımımızı nasıl iletebiliriz?</b></p>
            <p>Tasarımınızı doğrudan bizimle e-posta yoluyla paylaşabilirsiniz. Eğer bir tasarım fikriniz varsa ancak bu fikri nasıl gerçeğe dönüştüreceğinizi bilmiyorsanız, tasarım ekibimiz sizinle birlikte çalışarak fikirlerinizi hayata geçirebilir.</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Catalog; 