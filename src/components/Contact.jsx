import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: ""
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", subject: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section style={{ minHeight: '100vh', background: '#fff', padding: '48px 0 0 0' }}>
      <style>{`
        .contact-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 24px;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
        .contact-form-grid input {
          width: 100%;
          height: 48px;
          box-sizing: border-box;
          padding: 0 16px;
          border-radius: 8px;
          border: 1.5px solid #b7c9d6;
          font-size: 16px;
          background: #fff;
          transition: border 0.2s;
          outline: none;
          display: block;
        }
        .contact-form-grid input:focus {
          border: 1.5px solid #5b7c8b;
        }
        .contact-form-textarea {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 16px;
          border-radius: 8px;
          border: 1.5px solid #b7c9d6;
          font-size: 16px;
          background: #fff;
          outline: none;
          resize: vertical;
          min-height: 140px;
          transition: border 0.2s;
          box-sizing: border-box;
          display: block;
        }
        .contact-form-textarea:focus {
          border: 1.5px solid #5b7c8b;
        }
        @media (max-width: 700px) {
          .contact-form-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .contact-form-textarea {
            max-width: 100%;
          }
        }
        @media (max-width: 480px) {
          .contact-form-grid input, .contact-form-textarea {
            font-size: 14px;
            padding: 8px;
          }
          .contact-form-grid {
            gap: 10px;
          }
          form {
            padding: 16px 4px 12px 4px !important;
          }
          .adres-flex {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: stretch !important;
          }
        }
      `}</style>
      <h2 style={{
        textAlign: 'center',
        fontWeight: 400,
        fontSize: '2.4rem',
        color: '#17445e',
        marginBottom: 36,
        letterSpacing: 1
      }}>Bizimle İletişime Geçin</h2>
      <form onSubmit={handleSubmit} style={{
        maxWidth: 900,
        margin: '0 auto',
        background: 'linear-gradient(135deg, #eaf3ff 0%, #b3d8fd 100%)',
        borderRadius: 16,
        boxShadow: '0 4px 24px #b3c6e633',
        padding: '40px 32px 32px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
        <div className="contact-form-grid">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="İsim Soyisim"
          />
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            placeholder="Konu"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="E-mail Adres"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Telefon"
          />
        </div>
        <textarea
          className="contact-form-textarea"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Mesajınız ?"
          rows={7}
        />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <button type="submit" style={{
            background: 'linear-gradient(135deg, #5b7c8b 0%, #325a6d 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            padding: '14px 48px',
            fontSize: 18,
            fontWeight: 600,
            cursor: 'pointer',
            marginTop: 8,
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
            e.currentTarget.style.background = 'linear-gradient(135deg, #5b7c8b 0%, #325a6d 100%)';
            e.currentTarget.style.boxShadow = '0 2px 12px #b3c6e633';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onMouseDown={e => {
            e.currentTarget.style.transform = 'scale(0.97)';
          }}
          onMouseUp={e => {
            e.currentTarget.style.transform = 'scale(1.045)';
          }}
          >Gönder</button>
        </div>
        {sent && <div style={{ color: 'green', textAlign: 'center', fontWeight: 500 }}>Mesajınız gönderildi! (örnek)</div>}
      </form>
      {/* Mavi şeritli iletişim kutusu */}
      <div style={{
        width: '100%',
        background: 'linear-gradient(135deg, #5b7c8b 0%, #325a6d 100%)',
        marginTop: 48,
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 120
      }}>
        <div style={{
          color: '#fff',
          maxWidth: 900,
          width: '95%',
          textAlign: 'left',
        }}>
          <h2 style={{ fontWeight: 400, fontSize: '2.4rem', marginBottom: 32, color: '#fff', letterSpacing: 1, textAlign: 'center' }}>ADRESLERİMİZ</h2>
          <div style={{
            display: 'flex',
            gap: 48,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }} className="adres-flex">
            <div style={{ minWidth: 260, flex: 1, marginBottom: 24 }}>
              <div style={{ fontWeight: 700, letterSpacing: 1 }}>İZMİR</div>
              <div style={{ color: '#e0e0e0' }}>MTK Sitesi 6013 Ada 5746/4 Sk. No:3<br />Bornova İZMİR</div>
              <div style={{ color: '#b0bec5' }}>Telefon &nbsp;: <span style={{ color: '#fff' }}>+90 232 431 00 94 – 95</span></div>
            </div>
            <div style={{ minWidth: 260, flex: 1, marginBottom: 24 }}>
              <div style={{ fontWeight: 700, letterSpacing: 1 }}>MANİSA</div>
              <div style={{ color: '#e0e0e0' }}>Güzelyurt Mahallesi.5771 Sokak. 12/A<br />Yunusemre MANİSA</div>
              <div style={{ color: '#b0bec5' }}>Telefon &nbsp;: <span style={{ color: '#fff' }}>+90 236 236 24 24</span></div>
            </div>
            <div style={{ minWidth: 220, flex: 1, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <a href="mailto:info@fabriktekstil.com" style={{ color: '#fff', textDecoration: 'underline', fontSize: 18, textAlign: 'right', width: '100%' }}>info@fabriktekstil.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 