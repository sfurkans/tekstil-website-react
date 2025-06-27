import React from "react";

const Footer = () => {
  return (
    <footer style={{background: 'linear-gradient(135deg, #5b7c8b 0%, #325a6d 100%)', color: '#fff', padding: '12px 0 6px 0', marginTop: '24px', position: 'relative'}}>
      <style>{`
        .footer-flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          gap: 0;
        }
        .footer-col {
          flex: 1 1 0;
          min-width: 180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .footer-logo {
          align-items: center;
        }
        .footer-logo img {
          height: 32px;
          margin-bottom: 2px;
        }
        .footer-logo span {
          font-size: 1.15rem;
        }
        .footer-pay img {
          height: 18px;
          margin: 0 2px;
        }
        .footer-social {
          font-size: 1.1rem;
          display: flex;
          gap: 8px;
          margin-top: 4px;
          justify-content: center;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          line-height: 1.7;
        }
        .footer-links a { color: #fff; }
        .footer-links a:hover { text-decoration: underline; }
        @media (max-width: 900px) {
          .footer-flex {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }
          .footer-col {
            min-width: 0;
            margin-bottom: 8px;
          }
        }
      `}</style>
      <div className="footer-flex">
        {/* Kurumsal linkler */}
        <div className="footer-col">
          <div style={{fontWeight: 500, fontSize: '1.05rem', marginBottom: 4, color: '#fff'}}>Kurumsal</div>
          <ul className="footer-links">
            <li><a href="/hakkimizda">Hakkımızda</a></li>
            <li><a href="/iletisim">İletişim</a></li>
            <li><a href="#">Mesafeli Satış Sözleşmesi</a></li>
            <li><a href="#">Gizlilik Politikası</a></li>
            <li><a href="#">İade ve Değişim Şartları</a></li>
          </ul>
        </div>
        {/* Logo ve sertifika */}
        <div className="footer-col footer-logo">
          <img src="/vite.svg" alt="Logo" />
          <span style={{fontWeight: 600, fontSize: '1.2rem', color: '#fff', fontFamily: 'inherit'}}>fabrik</span>
          <span style={{fontSize: '0.8rem', color: '#e0e0e0', letterSpacing: 2}}>TEKSTİL</span>
          <div style={{margin: '4px 0'}}>
            <img src="https://www.oeko-tex.com/media/otex-web/logos/labels/ots100_label_standard100_4c_en_2022_150dpi.png" alt="OEKO-TEX" style={{height: 18, margin: '0 4px', verticalAlign: 'middle'}} />
            <span style={{fontWeight: 700, color: '#f9c846', fontSize: '0.95rem'}}>STANDARD 100</span>
          </div>
        </div>
        {/* Ödeme ve sosyal medya ikonları */}
        <div className="footer-col" style={{alignItems: 'center'}}>
          <div className="footer-pay" style={{marginBottom: 2}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Iyzico_logo.svg" alt="iyzico" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png" alt="Mastercard" />
          </div>
          <div className="footer-social">
            <a href="#" title="LinkedIn"><i className="fa-brands fa-linkedin"></i>🔗</a>
            <a href="#" title="Instagram"><i className="fa-brands fa-instagram"></i>📸</a>
            <a href="#" title="Facebook"><i className="fa-brands fa-facebook"></i>📘</a>
          </div>
        </div>
      </div>
      <div style={{textAlign: 'center', marginTop: 8, color: '#fff', fontSize: '0.95rem'}}>
        <a href="mailto:info@fabriktekstil.com" style={{color: '#fff', fontWeight: 600, textDecoration: 'underline'}}>info@fabriktekstil.com</a>
      </div>
      <div style={{textAlign: 'center', marginTop: 2, color: '#e0e0e0', fontSize: '0.85rem', fontWeight: 500}}>
        Fabrik Tekstil © 2024
      </div>
    </footer>
  );
};

export default Footer; 