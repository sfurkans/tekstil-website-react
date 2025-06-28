import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import fdnLogo3 from '../assets/fdn-logo3.png';

const navLinks = [
  { to: "/katalog", label: "KATALOG" },
  { to: "/hakkimizda", label: "HAKKIMIZDA" },
  { to: "/iletisim", label: "İLETİŞİM" },
];

const categories = [
  { name: 'T-SHIRT' },
  { name: 'SWEATSHIRT' },
  { name: 'PANTOLON' },
  { name: 'YELEK' },
  { name: 'MONT, KABAN' },
  { name: 'YÜKSEK GÖRÜNÜRLÜK...' },
  { name: 'TULUM' },
  { name: 'İŞ TAKIMI' },
];

const slugify = (str) =>
  str
    .toLocaleLowerCase('tr-TR')
    .replace(/[çÇ]/g, 'c')
    .replace(/[ğĞ]/g, 'g')
    .replace(/[ıİ]/g, 'i')
    .replace(/[öÖ]/g, 'o')
    .replace(/[şŞ]/g, 's')
    .replace(/[üÜ]/g, 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-+/g, '-');

const Header = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = React.useRef();

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 400);
  };

  React.useEffect(() => {
    return () => { if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current); };
  }, []);

  return (
    <header style={{
      background: 'linear-gradient(90deg, #3a5bdc 0%, #5b7c8b 60%, #325a6d 100%)',
      border: 'none',
      boxShadow: 'none',
      padding: '0'
    }}>
      <style>{`
        .header-fixed {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          z-index: 1000 !important;
          background: linear-gradient(90deg, #3a5bdc 0%, #5b7c8b 60%, #325a6d 100%);
        }
        .header-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
          padding: 24px 0;
          min-height: 90px;
          position: relative;
        }
        .header-logo {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 180px;
          z-index: 1;
        }
        .header-menu {
          display: flex;
          align-items: center;
          gap: 60px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
        }
        @media (max-width: 900px) {
          .header-nav {
            padding: 16px 0;
            min-height: 70px;
          }
          .header-menu {
            gap: 32px;
          }
          .header-logo span {
            font-size: 1.5rem !important;
          }
        }
        @media (max-width: 700px) {
          .header-nav {
            flex-direction: column;
            padding: 10px 0;
            min-height: 50px;
          }
          .header-menu {
            gap: 18px;
            font-size: 0.98rem;
          }
          .header-logo span {
            font-size: 1.1rem !important;
          }
        }
        @media (max-width: 480px) {
          .header-nav {
            padding: 4px 0;
            min-height: 36px;
          }
          .header-menu {
            gap: 8px;
            font-size: 0.89rem;
          }
          .header-logo span {
            font-size: 0.95rem !important;
          }
          .dropdown-menu {
            min-width: 160px !important;
            padding: 8px 0 !important;
          }
        }
      `}</style>

      <nav className="header-nav">
        {/* LOGO ARKASI BEYAZ BLOK */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: -80,
          width: 360,
          height: '100%',
          background: 'linear-gradient(90deg, transparent 0%, #e3ecfa 18%, #fff 38%, #fff 62%, #e3ecfa 82%, transparent 100%)',
          zIndex: 0,
          pointerEvents: 'none',
        }} />

        {/* LOGO */}
        <div className="header-logo">
          <Link to="/" style={{display: 'flex', alignItems: 'center', gap: 16, marginLeft: -24}}>
            <img src={fdnLogo3} alt="FDN TEX Logo" width={240} height="auto" style={{display: 'block'}} />
          </Link>
        </div>

        {/* MENÜ */}
        <ul className="header-menu">
          {navLinks.map((link, i) => (
            <React.Fragment key={link.to}>
              {i !== 0 && <li style={{width: 80, height: 1, background: '#b0b8c1', margin: '0 16px'}}></li>}
              <li
                style={{ position: link.label === 'KATALOG' ? 'relative' : 'static' }}
                onMouseEnter={() => link.label === 'KATALOG' && handleDropdownEnter()}
                onMouseLeave={() => link.label === 'KATALOG' && handleDropdownLeave()}
              >
                <Link
                  to={link.to}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1.1rem',
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    padding: '4px 0',
                    borderBottom: location.pathname === link.to ? '2px solid #fff' : '2px solid transparent',
                    transition: 'border 0.2s',
                  }}
                >
                  {link.label}
                </Link>

                {link.label === 'KATALOG' && dropdownOpen && (
                  <div
                    className="dropdown-menu"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 10px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(120deg, #b6d0e2 0%, #ffb3b3 50%, #4a6b8a 100%)',
                      borderRadius: 18,
                      boxShadow: '0 8px 32px 0 #2344, 0 1.5px 0 #e3e9f7',
                      padding: '18px 0',
                      minWidth: 260,
                      zIndex: 1000,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'stretch',
                      border: '1.5px solid #e3e9f7',
                      transition: 'box-shadow 0.25s',
                    }}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {categories.map((cat, idx) => (
                      <React.Fragment key={cat.name}>
                        <Link
                          to={`/katalog/${slugify(cat.name)}`}
                          style={{
                            color: '#234',
                            textDecoration: 'none',
                            padding: '13px 32px 13px 24px',
                            fontWeight: 500,
                            fontSize: '1.13rem',
                            border: 'none',
                            background: 'none',
                            textAlign: 'left',
                            borderRadius: 12,
                            margin: '0 10px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10,
                            transition: 'background 0.18s, color 0.18s',
                            position: 'relative',
                          }}
                          onClick={() => setDropdownOpen(false)}
                          onMouseDown={e => e.preventDefault()}
                          onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #e3e9f7 60%, #f9c84622 100%)'}
                          onMouseOut={e => e.currentTarget.style.background = 'none'}
                        >
                          <span>{cat.name}</span>
                          <span style={{marginLeft: 'auto', fontSize: 18, color: '#b3b3b3', transition: 'color 0.18s'}}>→</span>
                        </Link>
                        {idx !== categories.length - 1 && (
                          <div style={{height: 1, background: '#e3e9f7', margin: '0 18px'}} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
