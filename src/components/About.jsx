import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const cardRefs = useRef([]);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observers = [];
    cardRefs.current.forEach((ref) => {
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
    // Mission & Vision observer
    [missionRef.current, visionRef.current].forEach((ref) => {
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
    <section style={{width: '100%', boxSizing: 'border-box', background: '#fff', padding: '32px 0 64px 0'}}>
      {/* Hero Section */}
      <div className="about-hero">
        <h1>Profesyonel İş Kıyafetleri ve Tekstil Promosyonları</h1>
        <p>
          <b>FABRİK Tekstil</b>, 28 yıllık derin birikimi ve zengin tecrübesiyle, personel kıyafetleri ve tekstil promosyon ürünleri alanında lider bir marka olarak karşınıza çıkar. İzmir ve Manisa'da bulunan modern tesislerimizde, siz değerli müşterilerimizin kurumsal kimliğini yansıtacak, işlevsel, estetik, kaliteli ve ekonomik iş kıyafetleri ve promosyon tekstil ürünleri üretmek için durmaksızın çalışıyoruz.
        </p>
      </div>
      
      {/* Info Cards */}
      <div className="about-cards">
        {[{
          img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
          title: "Kalite Anlayışımız",
          desc: "FABRİK Tekstil olarak, kaliteyi her zaman ön planda tutuyoruz. Sizler için yararlılığı ve verimliliği yüksek, müşteri ihtiyaçlarına tam uyum sağlayan iş kıyafetleri ve promosyon ürünleri üretmeyi temel prensibimiz olarak belirledik. Bu prensiple, ürünlerimizin her birinin, sektörünüzün özel ihtiyaçlarını karşılayacak şekilde tasarlandığını ve üretildiğini garanti ediyoruz."
        }, {
          img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
          title: "Yenilikçilik ve Esneklik",
          desc: "Sektörün dinamiklerini sürekli takip ederek, farklı çalışma koşullarına uygun yenilikçi materyaller ve tasarımlar kullanıyoruz. Yenilikçi iş kıyafeti tasarımlarımızla, sektördeki farkımızı ortaya koyuyoruz."
        }, {
          img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
          title: "İş Birliği ve Samimiyet",
          desc: "İş birliği ve samimiyet içinde, müşterilerimizin, çalışanlarımızın ve tedarikçilerimizin beklentilerini en üst düzeyde karşılamayı hedefliyoruz. Dürüstlük, şeffaflık ve karşılıklı güven, iş ilişkilerimizin temel taşlarıdır."
        }].map((card, i) => (
          <div
            className={`about-card about-animated-card${i === 1 ? " reverse" : ""}`}
            key={card.title}
            ref={el => cardRefs.current[i] = el}
          >
            <div className="about-card-img">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="about-card-content">
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{width: '100%', overflow: 'hidden', margin: '80px 0 64px 0'}}>
        <img 
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1500&q=80" 
          alt="Tekstil şerit" 
          style={{width: '100%', height: '300px', objectFit: 'cover', display: 'block'}} 
        />
      </div>
      {/* Mission & Vision */}
      <div className="about-mission-vision">
        <div className="about-mission about-animated-card" ref={missionRef}>
          <h3>MİSYONUMUZ</h3>
          <p>Müşterilerimizin ihtiyaçlarını tam anlamıyla karşılayan, kaliteyi ekonomik fiyatlarla buluşturan öncü bir iş kıyafeti ve tekstil promosyon ürünleri üreticisi olmaktır. Her bir müşterimizin kurumsal kimliğini en iyi şekilde yansıtacak, özelleştirilmiş çözümler sunarak, sektördeki lider konumumuzu pekiştirmeyi amaçlıyoruz.</p>
        </div>
        <div className="about-vision about-animated-card" ref={visionRef}>
          <h3>VİZYONUMUZ</h3>
          <p>Kısa vadede Türkiye'nin en tanınmış iş kıyafeti ve tekstil promosyon firması olmak; uzun vadede ise kalitemiz, yenilikçiliğimiz ve müşteri odaklı yaklaşımımızla Avrupa pazarında etkin bir rol oynamaktır. Sektörel liderlik vizyonumuz, sadece ürünlerimizin kalitesiyle değil, aynı zamanda sürdürülebilir ve etik iş uygulamalarımızla da desteklenmektedir.</p>
        </div>
      </div>
    </section>
  );
};

export default About; 