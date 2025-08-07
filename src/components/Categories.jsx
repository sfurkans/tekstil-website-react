import React from "react";
import { Link } from 'react-router-dom';

const categories = [
  { name: 'T-SHIRT', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { name: 'SWEATSHIRT', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { name: 'PANTOLON', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  { name: 'YELEK', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { name: 'MONT, KABAN', img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80' },
  { name: 'YÜKSEK GÖRÜNÜRLÜK...', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { name: 'TULUM', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { name: 'İŞ TAKIMI', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
];

const imgStyle = {
  width: '100%',
  aspectRatio: '1/1',
  objectFit: 'cover',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  display: 'block',
  transition: 'transform 0.35s cubic-bezier(.4,2,.6,1), opacity 0.35s',
};

const imgHoverStyle = {
  transform: 'scale(1.08)',
  opacity: 0.92,
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: 0,
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #e3f2fd 0%, #b6d6f7 100%)',
  boxShadow: '0 2px 12px #b3c6e633',
  transition: 'box-shadow 0.35s cubic-bezier(.4,2,.6,1), transform 0.35s cubic-bezier(.4,2,.6,1), background 0.35s, filter 0.35s',
  paddingBottom: 24,
  position: 'relative',
};

const cardHoverStyle = {
  boxShadow: '0 12px 36px 0 #6fa0b8cc, 0 0 0 8px #5b7c8b33',
  transform: 'scale(1.06) rotate(-2deg)',
  background: 'linear-gradient(135deg, #7fc0e0 0%, #457a99 100%)',
  filter: 'brightness(1.08) saturate(1.12)',
  zIndex: 2,
};

const titleStyle = {
  marginTop: 14,
  marginBottom: 0,
  background: 'none',
  color: '#174ea6',
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '1rem',
  letterSpacing: 0.5,
  textTransform: 'uppercase',
  borderRadius: 0,
  boxShadow: 'none',
  padding: '8px 0',
  width: '85%',
  alignSelf: 'center',
  zIndex: 1,
  transition: 'color 0.35s, background 0.35s, text-shadow 0.35s',
};

const titleHoverStyle = {
  background: 'linear-gradient(90deg, #fff 30%, #f9c846 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 2px 12px #fff8',
};

const slugify = (str) => str.toLowerCase().replace(/[^a-zçğıöşü0-9]+/g, '-').replace(/^-+|-+$/g, '').replace(/-+/g, '-');

const Categories = () => {
  const [hovered, setHovered] = React.useState(null);
  const cardRefs = React.useRef([]);

  React.useEffect(() => {
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
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section style={{marginTop: 0, padding: '0 0 64px 0', background: '#fff'}}>
      <style>{`
        @media (max-width: 900px) {
          .main-category-grid { gap: 24px !important; }
        }
        @media (max-width: 700px) {
          .main-category-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 480px) {
          .main-category-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .main-category-card img { height: 90px !important; }
          .main-category-card div { font-size: 0.95rem !important; }
        }
      `}</style>
      <h2 style={{textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: 24, borderBottom: '2px solid #bbb', paddingBottom: 16, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto'}}>İş Kıyafeti ve Tekstil Promosyon Kataloğu</h2>
      <div className="main-category-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 40,
        maxWidth: 1200,
        margin: '0 auto',
        justifyContent: 'center',
      }}>
        {categories.map((cat, i) => (
          <Link
            to={`/katalog/${slugify(cat.name)}`}
            key={cat.name}
            ref={el => cardRefs.current[i] = el}
            className="main-category-card catalog-animated-card"
            style={{...((hovered === i) ? {...cardStyle, ...cardHoverStyle} : cardStyle), cursor: 'pointer', textDecoration: 'none'}}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={cat.img}
              alt={cat.name}
              style={hovered === i ? {...imgStyle, ...imgHoverStyle} : imgStyle}
            />
            <div style={hovered === i ? {...titleStyle, ...titleHoverStyle} : titleStyle}>{cat.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories; 