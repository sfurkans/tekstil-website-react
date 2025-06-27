import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Kategoriler ve resimleri (Categories.jsx ile aynı olmalı)
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

const slugify = (str) => str.toLowerCase().replace(/[^a-zçğıöşü0-9]+/g, '-').replace(/^-+|-+$/g, '').replace(/-+/g, '-');

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(true); }, []);
  const category = categories.find(cat => slugify(cat.name) === categorySlug);

  if (!category) {
    return (
      <>
        <Header />
        <div
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)"
          }}
        >
          <section style={{ minHeight: '60vh', padding: '64px 0', background: '#f7f7f7', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#234', marginBottom: 24 }}>Kategori Bulunamadı</h1>
            <p style={{ fontSize: '1.2rem', color: '#444' }}>Aradığınız kategoriye ait ürün bulunamadı.</p>
          </section>
        </div>
        <Footer />
      </>
    );
  }

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
            .category-main-section { padding: 12px 0 !important; }
            .category-title { font-size: 1.3rem !important; }
          }
          @media (max-width: 700px) {
            .category-main-section { padding: 4px 0 !important; }
            .category-title { font-size: 1.1rem !important; }
            .category-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          }
          @media (max-width: 480px) {
            .category-main-section { padding: 2px 0 !important; }
            .category-title { font-size: 0.95rem !important; }
            .category-grid { grid-template-columns: 1fr !important; gap: 6px !important; }
          }
        `}</style>
        {category.name === 'T-SHIRT' && (
          <>
            <section style={{ maxWidth: 1100, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #b3c6e633', padding: '36px 32px', marginTop: 32, textAlign: 'left' }}>
              <h2 style={{ textAlign: 'center', fontWeight: 400, fontSize: '2rem', marginBottom: 32 }}>Profesyonel ve Özelleştirilebilir T-Shirt Çözümleri</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="T-shirtler" style={{ width: 340, maxWidth: '100%', borderRadius: 12, boxShadow: '0 2px 12px #e3e9f7' }} />
                <div style={{ flex: 1, minWidth: 260, fontSize: '1.13rem', color: '#444', lineHeight: 1.7 }}>
                  FABRİK Tekstil olarak, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamak üzere geniş bir t-shirt yelpazesi sunuyoruz. İster logo baskılı iş kıyafeti t-shirtleri, ister etkinlik ve promosyon amaçlı baskılı t-shirtler, ister toptan baskısız t-shirt ihtiyaçlarınız olsun, her türlü talebinize özel çözümler üretiyoruz.
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <h3>İş Kıyafeti Olarak T-Shirtler</h3>
                <p>Firmaların çalışanları için aradığı konfor ve profesyonellik, logonuzun baskı veya nakış ile uygulandığı yüksek kaliteli t-shirtlerimizle sağlanır. İş kıyafeti t-shirt çözümlerimiz, dayanıklılık ve uzun süreli kullanımı garanti ederken, markanızın profesyonel bir şekilde temsil edilmesini sağlar.</p>
                <h3>Promosyon T-Shirtler</h3>
                <p>Etkinliklerinizde, kampanyalarınızda veya firmalarınızın promosyon ihtiyaçlarında kullanılmak üzere promosyon t-shirt seçeneklerimizle markanızı öne çıkarın. Özelleştirilebilir baskı ve tasarım seçeneklerimizle, hedef kitlenize ulaşmanın en etkili yolunu sunuyoruz.</p>
                <h3>Toptan T-Shirt Satışı</h3>
                <p>Toptan t-shirt ihtiyaçlarınız için geniş bir ürün yelpazesine sahibiz. Baskısız ve çeşitli renk seçenekleriyle, her türlü kullanım amacına uygun toptan t-shirtlerimiz, kalite ve uygun fiyatları bir arada sunar.</p>
              </div>
            </section>
            {/* T-shirt Kataloğu Grid */}
            <section style={{ maxWidth: 1100, margin: '48px auto 0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #b3c6e633', padding: '36px 32px', textAlign: 'center', position: 'relative', zIndex: 2, overflow: 'visible' }}>
              <h2 style={{ fontWeight: 400, fontSize: '2rem', marginBottom: 32 }}>T-shirt Kataloğu</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '40px 32px',
                justifyItems: 'center',
                alignItems: 'end',
                margin: '0 auto',
                maxWidth: 900
              }}>
                {/* Ürünler */}
                <div>
                  <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="T01" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} />
                  <div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>T01</div>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="T02" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} />
                  <div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>T02</div>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="T03" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} />
                  <div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>T03</div>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="T04" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} />
                  <div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>T04</div>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="T05" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} />
                  <div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>T05</div>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="T06" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} />
                  <div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>T06</div>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="T07" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} />
                  <div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>T07</div>
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="T08" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} />
                  <div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>T08</div>
                </div>
              </div>
            </section>
            {/* Kumaş Seçenekleri Tablosu */}
            <section style={{ maxWidth: 900, margin: '40px auto 0 auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #e3e9f7', padding: '32px 24px', textAlign: 'center' }}>
              <h3 style={{ textAlign: 'left', fontWeight: 400, fontSize: '1.3rem', marginBottom: 24, letterSpacing: 1 }}>KUMAŞ SEÇENEKLERİ</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.2fr 1fr',
                gap: '0 24px',
                alignItems: 'start',
                justifyItems: 'start',
                fontSize: '1.08rem',
                color: '#444',
                borderLeft: '1px solid #eee',
                borderRight: '1px solid #eee',
                padding: '0 12px'
              }}>
                <div style={{fontWeight: 500}}>30/1 Openend Süprem</div><div>%100 Pamuk</div><div>145-155 g/m2</div>
                <div style={{fontWeight: 500}}>30/1 Ring Süprem</div><div>%100 Pamuk</div><div>145-155 g/m2</div>
                <div style={{fontWeight: 500}}>20/1 Openend Süprem</div><div>%100 Pamuk</div><div>170-180 g/m2</div>
                <div style={{fontWeight: 500}}>20/1 Ring Süprem</div><div>%100 Pamuk</div><div>170-180 g/m2</div>
                <div style={{fontWeight: 500}}>30/1 Interlok</div><div>%100 Pamuk, Openend İplik</div><div>220 g/m2</div>
                <div style={{fontWeight: 500}}>30/1 Interlok</div><div>%100 Pamuk, Ring İplik</div><div>220 g/m2</div>
                <div style={{fontWeight: 500}}>30/1 Gri Melanj Openend Süprem</div><div>%70 Pamuk, %30 Polyester</div><div>145-155 g/m2</div>
                <div style={{fontWeight: 500}}>30/1 Pike</div><div>%100 Pamuk, Openend İplik</div><div>190-200 g/m2</div>
                <div style={{fontWeight: 500}}>30/1 Pike Kumaş, Ring İplik</div><div>%100 Pamuk</div><div>190-200 g/m2</div>
                <div style={{fontWeight: 500}}>30/1 Gri Melanj Pike</div><div>%70 Pamuk, %30 Polyester, Openend İplik</div><div>190-200 g/m2</div>
              </div>
            </section>
            {/* Neden Fabrik Tekstil? */}
            <section style={{ maxWidth: 900, margin: '40px auto 0 auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #e3e9f7', padding: '32px 24px', textAlign: 'left' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1.6rem', marginBottom: 18 }}>Neden Fabrik Tekstil?</h2>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Tekstil sektörü, işletmelerin kurumsal kimliğini yansıtan ve promosyon ihtiyaçlarını karşılayan ürünlerle doludur. Bu bağlamda, Fabrik Tekstil, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamak üzere geniş bir t-shirt yelpazesi sunarak işletmelerin bu ihtiyaçlarını kapsamlı bir şekilde karşılamaktadır. Peki, neden Fabrik Tekstil tercih edilmeli?
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Kurumsal Kimlik ve Promosyon İhtiyaçlarına Özel Çözümler</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Fabrik Tekstil, logo baskılı iş kıyafeti t-shirtleri, etkinlik ve promosyon amaçlı baskılı t-shirtler ve toptan baskısız t-shirt ihtiyaçlarınız için özel çözümler üretir. Her bir t-shirt, markanızın kurumsal kimliğini güçlendirirken, promosyon ihtiyaçlarınıza yenilikçi ve etkili çözümler sunar.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>İş Kıyafeti Olarak T-Shirtlerin Avantajları</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Çalışanlarınızın konforu ve profesyonellik ihtiyacı, Fabrik Tekstil'in yüksek kaliteli t-shirtleri ile karşılanır. Logonuzun baskı veya nakış ile uygulandığı bu t-shirtler, markanızın profesyonel bir şekilde temsil edilmesini sağlarken, dayanıklılık ve uzun süreli kullanım garantisi verir.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Promosyon T-Shirtler ile Marka Bilinirliğini Artırma</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Etkinliklerinizde ve kampanyalarınızda kullanılmak üzere tasarlanan promosyon t-shirtler, markanızı öne çıkarır. Özelleştirilebilir baskı ve tasarım seçenekleriyle, hedef kitlenize ulaşmanın en etkili yolunu sunan Fabrik Tekstil, marka bilinirliğinizi artırmada kilit bir rol oynar.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Toptan T-Shirt Satışının Avantajları</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Fabrik Tekstil, geniş bir ürün yelpazesi ile toptan t-shirt ihtiyaçlarınıza cevap verir. Baskısız ve çeşitli renk seçenekleriyle sunulan toptan t-shirtler, her türlü kullanım amacına uygunluk sağlar. Kalite ve uygun fiyatın bir arada sunulduğu bu hizmet, işletmeler için ideal bir çözüm oluşturur.
              </p>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 0 }}>
                Fabrik Tekstil, tekstil sektöründeki geniş deneyimi ve müşteri odaklı yaklaşımıyla, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamada öncü bir rol oynar. Sunduğu kaliteli ürünler ve uygun fiyat avantajlarıyla, markanızın değerini artıran ve ihtiyaçlarınıza yönelik bütüncül çözümler sunan bir partnerdir. Bu yüzden, işletmenize katacağı ihtiyaçlar için Fabrik Tekstil'i tercih etmek, kaliteyi, konforu ve profesyonelliği bir arada sunan akıllıca bir tercihtir.
              </p>
            </section>
          </>
        )}
        {category.name === 'SWEATSHIRT' && (
          <>
            <section style={{ maxWidth: 1100, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #b3c6e633', padding: '36px 32px', marginTop: 32, textAlign: 'left' }}>
              <h2 style={{ textAlign: 'center', fontWeight: 400, fontSize: '2rem', marginBottom: 32 }}>Profesyonel ve Özelleştirilebilir Sweatshirt Çözümleri</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="Sweatshirtler" style={{ width: 340, maxWidth: '100%', borderRadius: 12, boxShadow: '0 2px 12px #e3e9f7' }} />
                <div style={{ flex: 1, minWidth: 260, fontSize: '1.13rem', color: '#444', lineHeight: 1.7 }}>
                  Fabrik Tekstil olarak, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamak üzere geniş bir sweatshirt yelpazesi sunuyoruz. İster logo baskılı iş kıyafeti sweatshirtleri, ister etkinlik ve promosyon amaçlı baskılı sweatshirtler, ister toptan baskısız sweatshirt ihtiyaçlarınız olsun, her türlü talebinize özel çözümler üretiyoruz.
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <h3>İş Kıyafeti Olarak Sweatshirtler</h3>
                <p>Firmaların çalışanları için aradığı konfor ve profesyonellik, logonuzun baskı veya nakış ile uygulandığı yüksek kaliteli sweatshirtlerimizle sağlanır. İş kıyafeti sweatshirt çözümlerimiz, dayanıklılık ve uzun süreli kullanımı garanti ederken, markanızın profesyonel bir şekilde temsil edilmesini sağlar.</p>
                <h3>Promosyon Sweatshirtler</h3>
                <p>Etkinliklerinizde, kampanyalarınızda veya firmalarınızın promosyon ihtiyaçlarında kullanılmak üzere promosyon sweatshirt seçeneklerimizle markanızı öne çıkarın. Özelleştirilebilir baskı ve tasarım seçeneklerimizle, hedef kitlenize ulaşmanın en etkili yolunu sunuyoruz.</p>
                <h3>Toptan Sweatshirt Satışı</h3>
                <p>Toptan sweatshirt ihtiyaçlarınız için geniş bir ürün yelpazesine sahibiz. Baskısız ve çeşitli renk seçenekleriyle, her türlü kullanım amacına uygun toptan sweatshirtlerimiz, kalite ve uygun fiyatları bir arada sunar.</p>
              </div>
            </section>
            {/* Sweatshirt Kataloğu Grid */}
            <section style={{ maxWidth: 1100, margin: '48px auto 0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #b3c6e633', padding: '36px 32px', textAlign: 'center', position: 'relative', zIndex: 2, overflow: 'visible' }}>
              <h2 style={{ fontWeight: 400, fontSize: '2rem', marginBottom: 32 }}>Sweatshirt Kataloğu</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '40px 32px',
                justifyItems: 'center',
                alignItems: 'end',
                margin: '0 auto',
                maxWidth: 900
              }}>
                {/* Ürünler */}
                <div><img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="S01" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>S01</div></div>
                <div><img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="S02" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>S02</div></div>
                <div><img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="S03" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>S03</div></div>
                <div><img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="S04" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>S04</div></div>
                <div><img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="S05" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>S05</div></div>
                <div><img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="S06" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>S06</div></div>
                <div><img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="S07" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>S07</div></div>
                <div><img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80" alt="S08" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>S08</div></div>
              </div>
            </section>
            {/* Kumaş Seçenekleri Tablosu */}
            <section style={{ maxWidth: 900, margin: '40px auto 0 auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #e3e9f7', padding: '32px 24px', textAlign: 'center' }}>
              <h3 style={{ textAlign: 'left', fontWeight: 400, fontSize: '1.3rem', marginBottom: 24, letterSpacing: 1 }}>KUMAŞ SEÇENEKLERİ</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.2fr 1fr',
                gap: '0 24px',
                alignItems: 'start',
                justifyItems: 'start',
                fontSize: '1.08rem',
                color: '#444',
                borderLeft: '1px solid #eee',
                borderRight: '1px solid #eee',
                padding: '0 12px'
              }}>
                <div style={{fontWeight: 500}}>3 İplik Penye</div><div>%100 Pamuk</div><div>300-320 g/m2</div>
                <div style={{fontWeight: 500}}>2 İplik Penye</div><div>%100 Pamuk</div><div>260-280 g/m2</div>
                <div style={{fontWeight: 500}}>3 İplik Şardonlu</div><div>%80 Pamuk, %20 Polyester</div><div>320-340 g/m2</div>
                <div style={{fontWeight: 500}}>2 İplik Şardonlu</div><div>%80 Pamuk, %20 Polyester</div><div>280-300 g/m2</div>
              </div>
            </section>
            {/* Neden Fabrik Tekstil? */}
            <section style={{ maxWidth: 900, margin: '40px auto 0 auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #e3e9f7', padding: '32px 24px', textAlign: 'left' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1.6rem', marginBottom: 18 }}>Neden Fabrik Tekstil?</h2>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Tekstil sektörü, işletmelerin kurumsal kimliğini yansıtan ve promosyon ihtiyaçlarını karşılayan ürünlerle doludur. Bu bağlamda, Fabrik Tekstil, geniş bir sweatshirt yelpazesi sunarak işletmelerin bu ihtiyaçlarını kapsamlı bir şekilde karşılamaktadır. Peki, neden Fabrik Tekstil tercih edilmeli?
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Kurumsal Kimlik ve Promosyon İhtiyaçlarına Özel Çözümler</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Fabrik Tekstil, logo baskılı iş kıyafeti sweatshirtleri, etkinlik ve promosyon amaçlı baskılı sweatshirtler ve toptan baskısız sweatshirt ihtiyaçlarınız için özel çözümler üretir. Her bir sweatshirt, markanızın kurumsal kimliğini güçlendirirken, promosyon ihtiyaçlarınıza yenilikçi ve etkili çözümler sunar.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>İş Kıyafeti Olarak Sweatshirtlerin Avantajları</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Çalışanlarınızın konforu ve profesyonellik ihtiyacı, Fabrik Tekstil'in yüksek kaliteli sweatshirtleri ile karşılanır. Logonuzun baskı veya nakış ile uygulandığı bu sweatshirtler, markanızın profesyonel bir şekilde temsil edilmesini sağlarken, dayanıklılık ve uzun süreli kullanım garantisi verir.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Promosyon Sweatshirtler ile Marka Bilinirliğini Artırma</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Etkinliklerinizde ve kampanyalarınızda kullanılmak üzere tasarlanan promosyon sweatshirtler, markanızı öne çıkarır. Özelleştirilebilir baskı ve tasarım seçenekleriyle, hedef kitlenize ulaşmanın en etkili yolunu sunan Fabrik Tekstil, marka bilinirliğinizi artırmada kilit bir rol oynar.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Toptan Sweatshirt Satışının Avantajları</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Fabrik Tekstil, geniş bir ürün yelpazesi ile toptan sweatshirt ihtiyaçlarınıza cevap verir. Baskısız ve çeşitli renk seçenekleriyle sunulan toptan sweatshirtler, her türlü kullanım amacına uygunluk sağlar. Kalite ve uygun fiyatın bir arada sunulduğu bu hizmet, işletmeler için ideal bir çözüm oluşturur.
              </p>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 0 }}>
                Fabrik Tekstil, tekstil sektöründeki geniş deneyimi ve müşteri odaklı yaklaşımıyla, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamada öncü bir rol oynar. Sunduğu kaliteli ürünler ve uygun fiyat avantajlarıyla, markanızın değerini artıran ve ihtiyaçlarınıza yönelik bütüncül çözümler sunan bir partnerdir. Bu yüzden, işletmenize katacağı ihtiyaçlar için Fabrik Tekstil'i tercih etmek, kaliteyi, konforu ve profesyonelliği bir arada sunan akıllıca bir tercihtir.
              </p>
            </section>
          </>
        )}
        {category.name === 'PANTOLON' && (
          <>
            <section style={{ maxWidth: 1100, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #b3c6e633', padding: '36px 32px', marginTop: 32, textAlign: 'left' }}>
              <h2 style={{ textAlign: 'center', fontWeight: 400, fontSize: '2rem', marginBottom: 32 }}>Profesyonel ve Özelleştirilebilir Pantolon Çözümleri</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Pantolonlar" style={{ width: 340, maxWidth: '100%', borderRadius: 12, boxShadow: '0 2px 12px #e3e9f7' }} />
                <div style={{ flex: 1, minWidth: 260, fontSize: '1.13rem', color: '#444', lineHeight: 1.7 }}>
                  Fabrik Tekstil olarak, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamak üzere geniş bir pantolon yelpazesi sunuyoruz. İster logo baskılı iş kıyafeti pantolonları, ister etkinlik ve promosyon amaçlı pantolonlar, ister toptan baskısız pantolon ihtiyaçlarınız olsun, her türlü talebinize özel çözümler üretiyoruz.
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <h3>İş Kıyafeti Olarak Pantolonlar</h3>
                <p>Firmaların çalışanları için aradığı konfor ve profesyonellik, logonuzun baskı veya nakış ile uygulandığı yüksek kaliteli pantolonlarımızla sağlanır. İş kıyafeti pantolon çözümlerimiz, dayanıklılık ve uzun süreli kullanımı garanti ederken, markanızın profesyonel bir şekilde temsil edilmesini sağlar.</p>
                <h3>Promosyon Pantolonlar</h3>
                <p>Etkinliklerinizde, kampanyalarınızda veya firmalarınızın promosyon ihtiyaçlarında kullanılmak üzere promosyon pantolon seçeneklerimizle markanızı öne çıkarın. Özelleştirilebilir baskı ve tasarım seçeneklerimizle, hedef kitlenize ulaşmanın en etkili yolunu sunuyoruz.</p>
                <h3>Toptan Pantolon Satışı</h3>
                <p>Toptan pantolon ihtiyaçlarınız için geniş bir ürün yelpazesine sahibiz. Baskısız ve çeşitli renk seçenekleriyle, her türlü kullanım amacına uygun toptan pantolonlarımız, kalite ve uygun fiyatları bir arada sunar.</p>
              </div>
            </section>
            {/* Pantolon Kataloğu Grid */}
            <section style={{ maxWidth: 1100, margin: '48px auto 0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #b3c6e633', padding: '36px 32px', textAlign: 'center', position: 'relative', zIndex: 2, overflow: 'visible' }}>
              <h2 style={{ fontWeight: 400, fontSize: '2rem', marginBottom: 32 }}>Pantolon Kataloğu</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '40px 32px',
                justifyItems: 'center',
                alignItems: 'end',
                margin: '0 auto',
                maxWidth: 900
              }}>
                {/* Ürünler */}
                <div><img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="P01" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>P01</div></div>
                <div><img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="P02" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>P02</div></div>
                <div><img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="P03" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>P03</div></div>
                <div><img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="P04" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>P04</div></div>
                <div><img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="P05" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>P05</div></div>
                <div><img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="P06" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>P06</div></div>
                <div><img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="P07" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>P07</div></div>
                <div><img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="P08" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>P08</div></div>
              </div>
            </section>
            {/* Kumaş Seçenekleri Tablosu */}
            <section style={{ maxWidth: 900, margin: '40px auto 0 auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #e3e9f7', padding: '32px 24px', textAlign: 'center' }}>
              <h3 style={{ textAlign: 'left', fontWeight: 400, fontSize: '1.3rem', marginBottom: 24, letterSpacing: 1 }}>KUMAŞ SEÇENEKLERİ</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.2fr 1fr',
                gap: '0 24px',
                alignItems: 'start',
                justifyItems: 'start',
                fontSize: '1.08rem',
                color: '#444',
                borderLeft: '1px solid #eee',
                borderRight: '1px solid #eee',
                padding: '0 12px'
              }}>
                <div style={{fontWeight: 500}}>Gabardin</div><div>%100 Pamuk</div><div>240-260 g/m2</div>
                <div style={{fontWeight: 500}}>Pamuk-Polyester Karışım</div><div>%65 Polyester, %35 Pamuk</div><div>210-230 g/m2</div>
                <div style={{fontWeight: 500}}>Kanvas</div><div>%100 Pamuk</div><div>270-290 g/m2</div>
                <div style={{fontWeight: 500}}>Denim</div><div>%100 Pamuk</div><div>300-320 g/m2</div>
              </div>
            </section>
            {/* Neden Fabrik Tekstil? */}
            <section style={{ maxWidth: 900, margin: '40px auto 0 auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #e3e9f7', padding: '32px 24px', textAlign: 'left' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1.6rem', marginBottom: 18 }}>Neden Fabrik Tekstil?</h2>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Tekstil sektörü, işletmelerin kurumsal kimliğini yansıtan ve promosyon ihtiyaçlarını karşılayan ürünlerle doludur. Bu bağlamda, Fabrik Tekstil, geniş bir pantolon yelpazesi sunarak işletmelerin bu ihtiyaçlarını kapsamlı bir şekilde karşılamaktadır. Peki, neden Fabrik Tekstil tercih edilmeli?
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Kurumsal Kimlik ve Promosyon İhtiyaçlarına Özel Çözümler</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Fabrik Tekstil, logo baskılı iş kıyafeti pantolonları, etkinlik ve promosyon amaçlı pantolonlar ve toptan baskısız pantolon ihtiyaçlarınız için özel çözümler üretir. Her bir pantolon, markanızın kurumsal kimliğini güçlendirirken, promosyon ihtiyaçlarınıza yenilikçi ve etkili çözümler sunar.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>İş Kıyafeti Olarak Pantolonların Avantajları</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Çalışanlarınızın konforu ve profesyonellik ihtiyacı, Fabrik Tekstil'in yüksek kaliteli pantolonları ile karşılanır. Logonuzun baskı veya nakış ile uygulandığı bu pantolonlar, markanızın profesyonel bir şekilde temsil edilmesini sağlarken, dayanıklılık ve uzun süreli kullanım garantisi verir.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Promosyon Pantolonlar ile Marka Bilinirliğini Artırma</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Etkinliklerinizde ve kampanyalarınızda kullanılmak üzere tasarlanan promosyon pantolonlar, markanızı öne çıkarır. Özelleştirilebilir baskı ve tasarım seçenekleriyle, hedef kitlenize ulaşmanın en etkili yolunu sunan Fabrik Tekstil, marka bilinirliğinizi artırmada kilit bir rol oynar.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Toptan Pantolon Satışının Avantajları</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Fabrik Tekstil, geniş bir ürün yelpazesi ile toptan pantolon ihtiyaçlarınıza cevap verir. Baskısız ve çeşitli renk seçenekleriyle sunulan toptan pantolonlar, her türlü kullanım amacına uygunluk sağlar. Kalite ve uygun fiyatın bir arada sunulduğu bu hizmet, işletmeler için ideal bir çözüm oluşturur.
              </p>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 0 }}>
                Fabrik Tekstil, tekstil sektöründeki geniş deneyimi ve müşteri odaklı yaklaşımıyla, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamada öncü bir rol oynar. Sunduğu kaliteli ürünler ve uygun fiyat avantajlarıyla, markanızın değerini artıran ve ihtiyaçlarınıza yönelik bütüncül çözümler sunan bir partnerdir. Bu yüzden, işletmenize katacağı ihtiyaçlar için Fabrik Tekstil'i tercih etmek, kaliteyi, konforu ve profesyonelliği bir arada sunan akıllıca bir tercihtir.
              </p>
            </section>
          </>
        )}
        {category.name === 'YELEK' && (
          <>
            <section style={{ maxWidth: 1100, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #b3c6e633', padding: '36px 32px', marginTop: 32, textAlign: 'left' }}>
              <h2 style={{ textAlign: 'center', fontWeight: 400, fontSize: '2rem', marginBottom: 32 }}>Profesyonel ve Özelleştirilebilir Yelek Çözümleri</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Yelekler" style={{ width: 340, maxWidth: '100%', borderRadius: 12, boxShadow: '0 2px 12px #e3e9f7' }} />
                <div style={{ flex: 1, minWidth: 260, fontSize: '1.13rem', color: '#444', lineHeight: 1.7 }}>
                  Fabrik Tekstil olarak, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamak üzere geniş bir yelek yelpazesi sunuyoruz. İster logo baskılı iş kıyafeti yelekleri, ister etkinlik ve promosyon amaçlı yelekler, ister toptan baskısız yelek ihtiyaçlarınız olsun, her türlü talebinize özel çözümler üretiyoruz.
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <h3>İş Kıyafeti Olarak Yelekler</h3>
                <p>Firmaların çalışanları için aradığı konfor ve profesyonellik, logonuzun baskı veya nakış ile uygulandığı yüksek kaliteli yeleklerimizle sağlanır. İş kıyafeti yelek çözümlerimiz, dayanıklılık ve uzun süreli kullanımı garanti ederken, markanızın profesyonel bir şekilde temsil edilmesini sağlar.</p>
                <h3>Promosyon Yelekler</h3>
                <p>Etkinliklerinizde, kampanyalarınızda veya firmalarınızın promosyon ihtiyaçlarında kullanılmak üzere promosyon yelek seçeneklerimizle markanızı öne çıkarın. Özelleştirilebilir baskı ve tasarım seçeneklerimizle, hedef kitlenize ulaşmanın en etkili yolunu sunuyoruz.</p>
                <h3>Toptan Yelek Satışı</h3>
                <p>Toptan yelek ihtiyaçlarınız için geniş bir ürün yelpazesine sahibiz. Baskısız ve çeşitli renk seçenekleriyle, her türlü kullanım amacına uygun toptan yeleklerimiz, kalite ve uygun fiyatları bir arada sunar.</p>
              </div>
            </section>
            {/* Yelek Kataloğu Grid */}
            <section style={{ maxWidth: 1100, margin: '48px auto 0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #b3c6e633', padding: '36px 32px', textAlign: 'center', position: 'relative', zIndex: 2, overflow: 'visible' }}>
              <h2 style={{ fontWeight: 400, fontSize: '2rem', marginBottom: 32 }}>Yelek Kataloğu</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '40px 32px',
                justifyItems: 'center',
                alignItems: 'end',
                margin: '0 auto',
                maxWidth: 900
              }}>
                {/* Ürünler */}
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Y01" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>Y01</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Y02" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>Y02</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Y03" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>Y03</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Y04" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>Y04</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Y05" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>Y05</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Y06" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>Y06</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Y07" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>Y07</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Y08" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>Y08</div></div>
              </div>
            </section>
            {/* Kumaş Seçenekleri Tablosu */}
            <section style={{ maxWidth: 900, margin: '40px auto 0 auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #e3e9f7', padding: '32px 24px', textAlign: 'center' }}>
              <h3 style={{ textAlign: 'left', fontWeight: 400, fontSize: '1.3rem', marginBottom: 24, letterSpacing: 1 }}>KUMAŞ SEÇENEKLERİ</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.2fr 1fr',
                gap: '0 24px',
                alignItems: 'start',
                justifyItems: 'start',
                fontSize: '1.08rem',
                color: '#444',
                borderLeft: '1px solid #eee',
                borderRight: '1px solid #eee',
                padding: '0 12px'
              }}>
                <div style={{fontWeight: 500}}>Softshell Kumaş</div><div>%100 Polyester</div><div>320-340 g/m2</div>
                <div style={{fontWeight: 500}}>Polar Kumaş</div><div>%100 Polyester</div><div>280-300 g/m2</div>
                <div style={{fontWeight: 500}}>Pamuklu Kumaş</div><div>%100 Pamuk</div><div>220-240 g/m2</div>
                <div style={{fontWeight: 500}}>Gabardin</div><div>%100 Pamuk</div><div>240-260 g/m2</div>
              </div>
            </section>
            {/* Neden Fabrik Tekstil? */}
            <section style={{ maxWidth: 900, margin: '40px auto 0 auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #e3e9f7', padding: '32px 24px', textAlign: 'left' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1.6rem', marginBottom: 18 }}>Neden Fabrik Tekstil?</h2>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Tekstil sektörü, işletmelerin kurumsal kimliğini yansıtan ve promosyon ihtiyaçlarını karşılayan ürünlerle doludur. Bu bağlamda, Fabrik Tekstil, geniş bir yelek yelpazesi sunarak işletmelerin bu ihtiyaçlarını kapsamlı bir şekilde karşılamaktadır. Peki, neden Fabrik Tekstil tercih edilmeli?
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Kurumsal Kimlik ve Promosyon İhtiyaçlarına Özel Çözümler</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Fabrik Tekstil, logo baskılı iş kıyafeti yelekleri, etkinlik ve promosyon amaçlı yelekler ve toptan baskısız yelek ihtiyaçlarınız için özel çözümler üretir. Her bir yelek, markanızın kurumsal kimliğini güçlendirirken, promosyon ihtiyaçlarınıza yenilikçi ve etkili çözümler sunar.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>İş Kıyafeti Olarak Yeleklerin Avantajları</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Çalışanlarınızın konforu ve profesyonellik ihtiyacı, Fabrik Tekstil'in yüksek kaliteli yelekleri ile karşılanır. Logonuzun baskı veya nakış ile uygulandığı bu yelekler, markanızın profesyonel bir şekilde temsil edilmesini sağlarken, dayanıklılık ve uzun süreli kullanım garantisi verir.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Promosyon Yelekler ile Marka Bilinirliğini Artırma</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Etkinliklerinizde ve kampanyalarınızda kullanılmak üzere tasarlanan promosyon yelekler, markanızı öne çıkarır. Özelleştirilebilir baskı ve tasarım seçenekleriyle, hedef kitlenize ulaşmanın en etkili yolunu sunan Fabrik Tekstil, marka bilinirliğinizi artırmada kilit bir rol oynar.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Toptan Yelek Satışının Avantajları</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Fabrik Tekstil, geniş bir ürün yelpazesi ile toptan yelek ihtiyaçlarınıza cevap verir. Baskısız ve çeşitli renk seçenekleriyle sunulan toptan yelekler, her türlü kullanım amacına uygunluk sağlar. Kalite ve uygun fiyatın bir arada sunulduğu bu hizmet, işletmeler için ideal bir çözüm oluşturur.
              </p>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 0 }}>
                Fabrik Tekstil, tekstil sektöründeki geniş deneyimi ve müşteri odaklı yaklaşımıyla, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamada öncü bir rol oynar. Sunduğu kaliteli ürünler ve uygun fiyat avantajlarıyla, markanızın değerini artıran ve ihtiyaçlarınıza yönelik bütüncül çözümler sunan bir partnerdir. Bu yüzden, işletmenize katacağı ihtiyaçlar için Fabrik Tekstil'i tercih etmek, kaliteyi, konforu ve profesyonelliği bir arada sunan akıllıca bir tercihtir.
              </p>
            </section>
          </>
        )}
        {category.name === 'MONT, KABAN' && (
          <>
            <section style={{ maxWidth: 1100, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #b3c6e633', padding: '36px 32px', marginTop: 32, textAlign: 'left' }}>
              <h2 style={{ textAlign: 'center', fontWeight: 400, fontSize: '2rem', marginBottom: 32 }}>Profesyonel ve Özelleştirilebilir Mont & Kaban Çözümleri</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                <img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80" alt="Mont ve Kabanlar" style={{ width: 340, maxWidth: '100%', borderRadius: 12, boxShadow: '0 2px 12px #e3e9f7' }} />
                <div style={{ flex: 1, minWidth: 260, fontSize: '1.13rem', color: '#444', lineHeight: 1.7 }}>
                  Fabrik Tekstil olarak, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamak üzere geniş bir mont ve kaban yelpazesi sunuyoruz. İster logo baskılı iş kıyafeti mont ve kabanlar, ister etkinlik ve promosyon amaçlı mont ve kabanlar, ister toptan baskısız mont ve kaban ihtiyaçlarınız olsun, her türlü talebinize özel çözümler üretiyoruz.
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <h3>İş Kıyafeti Olarak Mont ve Kabanlar</h3>
                <p>Firmaların çalışanları için aradığı konfor ve profesyonellik, logonuzun baskı veya nakış ile uygulandığı yüksek kaliteli mont ve kabanlarımızla sağlanır. İş kıyafeti mont ve kaban çözümlerimiz, dayanıklılık ve uzun süreli kullanımı garanti ederken, markanızın profesyonel bir şekilde temsil edilmesini sağlar.</p>
                <h3>Promosyon Mont ve Kabanlar</h3>
                <p>Etkinliklerinizde, kampanyalarınızda veya firmalarınızın promosyon ihtiyaçlarında kullanılmak üzere promosyon mont ve kaban seçeneklerimizle markanızı öne çıkarın. Özelleştirilebilir baskı ve tasarım seçeneklerimizle, hedef kitlenize ulaşmanın en etkili yolunu sunuyoruz.</p>
                <h3>Toptan Mont ve Kaban Satışı</h3>
                <p>Toptan mont ve kaban ihtiyaçlarınız için geniş bir ürün yelpazesine sahibiz. Baskısız ve çeşitli renk seçenekleriyle, her türlü kullanım amacına uygun toptan mont ve kabanlarımız, kalite ve uygun fiyatları bir arada sunar.</p>
              </div>
            </section>
            {/* Mont & Kaban Kataloğu Grid */}
            <section style={{ maxWidth: 1100, margin: '48px auto 0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #b3c6e633', padding: '36px 32px', textAlign: 'center', position: 'relative', zIndex: 2, overflow: 'visible' }}>
              <h2 style={{ fontWeight: 400, fontSize: '2rem', marginBottom: 32 }}>Mont & Kaban Kataloğu</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '40px 32px',
                justifyItems: 'center',
                alignItems: 'end',
                margin: '0 auto',
                maxWidth: 900
              }}>
                {/* Ürünler */}
                <div><img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80" alt="M01" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>M01</div></div>
                <div><img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80" alt="M02" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>M02</div></div>
                <div><img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80" alt="M03" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>M03</div></div>
                <div><img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80" alt="M04" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>M04</div></div>
                <div><img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80" alt="M05" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>M05</div></div>
                <div><img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80" alt="M06" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>M06</div></div>
                <div><img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80" alt="M07" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>M07</div></div>
                <div><img src="https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80" alt="M08" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>M08</div></div>
              </div>
            </section>
            {/* Kumaş Seçenekleri Tablosu */}
            <section style={{ maxWidth: 900, margin: '40px auto 0 auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #e3e9f7', padding: '32px 24px', textAlign: 'center' }}>
              <h3 style={{ textAlign: 'left', fontWeight: 400, fontSize: '1.3rem', marginBottom: 24, letterSpacing: 1 }}>KUMAŞ SEÇENEKLERİ</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.2fr 1fr',
                gap: '0 24px',
                alignItems: 'start',
                justifyItems: 'start',
                fontSize: '1.08rem',
                color: '#444',
                borderLeft: '1px solid #eee',
                borderRight: '1px solid #eee',
                padding: '0 12px'
              }}>
                <div style={{fontWeight: 500}}>Softshell Kumaş</div><div>%100 Polyester</div><div>320-340 g/m2</div>
                <div style={{fontWeight: 500}}>Polar Kumaş</div><div>%100 Polyester</div><div>280-300 g/m2</div>
                <div style={{fontWeight: 500}}>Pamuklu Kumaş</div><div>%100 Pamuk</div><div>220-240 g/m2</div>
                <div style={{fontWeight: 500}}>Gabardin</div><div>%100 Pamuk</div><div>240-260 g/m2</div>
              </div>
            </section>
            {/* Neden Fabrik Tekstil? */}
            <section style={{ maxWidth: 900, margin: '40px auto 0 auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #e3e9f7', padding: '32px 24px', textAlign: 'left' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1.6rem', marginBottom: 18 }}>Neden Fabrik Tekstil?</h2>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Tekstil sektörü, işletmelerin kurumsal kimliğini yansıtan ve promosyon ihtiyaçlarını karşılayan ürünlerle doludur. Bu bağlamda, Fabrik Tekstil, geniş bir mont ve kaban yelpazesi sunarak işletmelerin bu ihtiyaçlarını kapsamlı bir şekilde karşılamaktadır. Peki, neden Fabrik Tekstil tercih edilmeli?
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Kurumsal Kimlik ve Promosyon İhtiyaçlarına Özel Çözümler</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Fabrik Tekstil, logo baskılı iş kıyafeti mont ve kabanlar, etkinlik ve promosyon amaçlı mont ve kabanlar ve toptan baskısız mont ve kaban ihtiyaçlarınız için özel çözümler üretir. Her bir mont ve kaban, markanızın kurumsal kimliğini güçlendirirken, promosyon ihtiyaçlarınıza yenilikçi ve etkili çözümler sunar.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>İş Kıyafeti Olarak Mont ve Kabanların Avantajları</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Çalışanlarınızın konforu ve profesyonellik ihtiyacı, Fabrik Tekstil'in yüksek kaliteli mont ve kabanları ile karşılanır. Logonuzun baskı veya nakış ile uygulandığı bu mont ve kabanlar, markanızın profesyonel bir şekilde temsil edilmesini sağlarken, dayanıklılık ve uzun süreli kullanım garantisi verir.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Promosyon Mont ve Kabanlar ile Marka Bilinirliğini Artırma</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Etkinliklerinizde ve kampanyalarınızda kullanılmak üzere tasarlanan promosyon mont ve kabanlar, markanızı öne çıkarır. Özelleştirilebilir baskı ve tasarım seçenekleriyle, hedef kitlenize ulaşmanın en etkili yolunu sunan Fabrik Tekstil, marka bilinirliğinizi artırmada kilit bir rol oynar.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Toptan Mont ve Kaban Satışının Avantajları</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Fabrik Tekstil, geniş bir ürün yelpazesi ile toptan mont ve kaban ihtiyaçlarınıza cevap verir. Baskısız ve çeşitli renk seçenekleriyle sunulan toptan mont ve kabanlar, her türlü kullanım amacına uygunluk sağlar. Kalite ve uygun fiyatın bir arada sunulduğu bu hizmet, işletmeler için ideal bir çözüm oluşturur.
              </p>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 0 }}>
                Fabrik Tekstil, tekstil sektöründeki geniş deneyimi ve müşteri odaklı yaklaşımıyla, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamada öncü bir rol oynar. Sunduğu kaliteli ürünler ve uygun fiyat avantajlarıyla, markanızın değerini artıran ve ihtiyaçlarınıza yönelik bütüncül çözümler sunan bir partnerdir. Bu yüzden, işletmenize katacağı ihtiyaçlar için Fabrik Tekstil'i tercih etmek, kaliteyi, konforu ve profesyonelliği bir arada sunan akıllıca bir tercihtir.
              </p>
            </section>
          </>
        )}
        {category.name === 'YÜKSEK GÖRÜNÜRLÜK...' && (
          <>
            <section style={{ maxWidth: 1100, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #b3c6e633', padding: '36px 32px', marginTop: 32, textAlign: 'left' }}>
              <h2 style={{ textAlign: 'center', fontWeight: 400, fontSize: '2rem', marginBottom: 32 }}>Profesyonel ve Özelleştirilebilir Yüksek Görünürlük Çözümleri</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
                <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="YG01" style={{ width: 340, maxWidth: '100%', borderRadius: 12, boxShadow: '0 2px 12px #e3e9f7' }} />
                <div style={{ flex: 1, minWidth: 260, fontSize: '1.13rem', color: '#444', lineHeight: 1.7 }}>
                  Fabrik Tekstil olarak, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamak üzere geniş bir yüksek görünürlük ürünleri sunuyoruz. İster iş güvenliği için, ister etkinlik ve promosyon amaçlı yüksek görünürlük ürünleri, ister toptan ihtiyaçlarınız olsun, her türlü talebinize özel çözümler üretiyoruz.
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <h3>İş Güvenliği ve Yüksek Görünürlük</h3>
                <p>Çalışanlarınızın güvenliği için yüksek görünürlük sağlayan ürünlerimiz, iş yerinde maksimum koruma ve profesyonellik sunar. Yüksek kaliteli malzemelerle üretilen bu ürünler, dayanıklılık ve uzun süreli kullanımı garanti ederken, markanızın profesyonel bir şekilde temsil edilmesini sağlar.</p>
                <h3>Promosyon Yüksek Görünürlük Ürünleri</h3>
                <p>Etkinliklerinizde veya promosyon amaçlı kullanabileceğiniz yüksek görünürlük ürünlerimizle markanızı öne çıkarın. Özelleştirilebilir baskı ve tasarım seçeneklerimizle, hedef kitlenize ulaşmanın en etkili yolunu sunuyoruz.</p>
                <h3>Toptan Yüksek Görünürlük Ürünleri Satışı</h3>
                <p>Toptan yüksek görünürlük ürünleri ihtiyaçlarınız için geniş bir ürün yelpazesine sahibiz. Baskısız ve çeşitli renk seçenekleriyle sunulan toptan yüksek görünürlük ürünler, kalite ve uygun fiyatları bir arada sunar.</p>
              </div>
            </section>
            {/* Yüksek Görünürlük Kataloğu Grid */}
            <section style={{ maxWidth: 1100, margin: '48px auto 0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #b3c6e633', padding: '36px 32px', textAlign: 'center', position: 'relative', zIndex: 2, overflow: 'visible' }}>
              <h2 style={{ fontWeight: 400, fontSize: '2rem', marginBottom: 32 }}>Yüksek Görünürlük Kataloğu</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '40px 32px',
                justifyItems: 'center',
                alignItems: 'end',
                margin: '0 auto',
                maxWidth: 900
              }}>
                {/* Ürünler */}
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="YG01" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>YG01</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="YG02" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>YG02</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="YG03" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>YG03</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="YG04" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>YG04</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="YG05" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>YG05</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="YG06" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>YG06</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="YG07" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>YG07</div></div>
                <div><img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="YG08" style={{ width: 150, height: 170, objectFit: 'contain', marginBottom: 8, display: 'block', background: '#fff' }} /><div style={{ fontSize: '1.08rem', color: '#444', marginTop: 4 }}>YG08</div></div>
              </div>
            </section>
            {/* Kumaş Seçenekleri Tablosu */}
            <section style={{ maxWidth: 900, margin: '40px auto 0 auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #e3e9f7', padding: '32px 24px', textAlign: 'center' }}>
              <h3 style={{ textAlign: 'left', fontWeight: 400, fontSize: '1.3rem', marginBottom: 24, letterSpacing: 1 }}>KUMAŞ SEÇENEKLERİ</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.2fr 1fr',
                gap: '0 24px',
                alignItems: 'start',
                justifyItems: 'start',
                fontSize: '1.08rem',
                color: '#444',
                borderLeft: '1px solid #eee',
                borderRight: '1px solid #eee',
                padding: '0 12px'
              }}>
                <div style={{fontWeight: 500}}>Reflektörlü Kumaş</div><div>%100 Polyester</div><div>320-340 g/m2</div>
                <div style={{fontWeight: 500}}>Fluoresan Kumaş</div><div>%100 Polyester</div><div>280-300 g/m2</div>
                <div style={{fontWeight: 500}}>Pamuklu Kumaş</div><div>%100 Pamuk</div><div>220-240 g/m2</div>
                <div style={{fontWeight: 500}}>Gabardin</div><div>%100 Pamuk</div><div>240-260 g/m2</div>
              </div>
            </section>
            {/* Neden Fabrik Tekstil? */}
            <section style={{ maxWidth: 900, margin: '40px auto 0 auto', background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #e3e9f7', padding: '32px 24px', textAlign: 'left' }}>
              <h2 style={{ fontWeight: 700, fontSize: '1.6rem', marginBottom: 18 }}>Neden Fabrik Tekstil?</h2>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Tekstil sektörü, işletmelerin kurumsal kimliğini yansıtan ve promosyon ihtiyaçlarını karşılayan ürünlerle doludur. Bu bağlamda, Fabrik Tekstil, geniş bir yüksek görünürlük ürünleri sunarak işletmelerin bu ihtiyaçlarını kapsamlı bir şekilde karşılamaktadır. Peki, neden Fabrik Tekstil tercih edilmeli?
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Kurumsal Kimlik ve Promosyon İhtiyaçlarına Özel Çözümler</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Fabrik Tekstil, logo baskılı iş kıyafeti yüksek görünürlük ürünleri, etkinlik ve promosyon amaçlı ürünler ve toptan ihtiyaçlarınız için özel çözümler üretir. Her bir ürün, markanızın kurumsal kimliğini güçlendirirken, promosyon ihtiyaçlarınıza yenilikçi ve etkili çözümler sunar.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>İş Güvenliği ve Yüksek Görünürlük Avantajları</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Çalışanlarınızın güvenliği ve profesyonellik ihtiyacı, Fabrik Tekstil'in yüksek kaliteli ürünleri ile karşılanır. Logonuzun baskı veya nakış ile uygulandığı bu ürünler, markanızın profesyonel bir şekilde temsil edilmesini sağlarken, dayanıklılık ve uzun süreli kullanım garantisi verir.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Promosyon Yüksek Görünürlük Ürünleri ile Marka Bilinirliğini Artırma</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Etkinliklerinizde ve kampanyalarınızda kullanılmak üzere tasarlanan promosyon yüksek görünürlük ürünler, markanızı öne çıkarır. Özelleştirilebilir baskı ve tasarım seçenekleriyle, hedef kitlenize ulaşmanın en etkili yolunu sunan Fabrik Tekstil, marka bilinirliğinizi artırmada kilit bir rol oynar.
              </p>
              <h3 style={{ fontWeight: 600, fontSize: '1.13rem', margin: '24px 0 8px 0' }}>Toptan Yüksek Görünürlük Ürünleri Satışının Avantajları</h3>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 18 }}>
                Fabrik Tekstil, geniş bir ürün yelpazesi ile toptan yüksek görünürlük ürünler ihtiyaçlarınıza cevap verir. Baskısız ve çeşitli renk seçenekleriyle sunulan toptan yüksek görünürlük ürünler, her türlü kullanım amacına uygunluk sağlar. Kalite ve uygun fiyatın bir arada sunulduğu bu hizmet, işletmeler için ideal bir çözüm oluşturur.
              </p>
              <p style={{ fontSize: '1.08rem', color: '#444', marginBottom: 0 }}>
                Fabrik Tekstil, tekstil sektöründeki geniş deneyimi ve müşteri odaklı yaklaşımıyla, işletmelerin kurumsal kimlik ve promosyon ihtiyaçlarını karşılamada öncü bir rol oynar. Sunduğu kaliteli ürünler ve uygun fiyat avantajlarıyla, markanızın değerini artıran ve ihtiyaçlarınıza yönelik bütüncül çözümler sunan bir partnerdir. Bu yüzden, işletmenize katacağı ihtiyaçlar için Fabrik Tekstil'i tercih etmek, kaliteyi, konforu ve profesyonelliği bir arada sunan akıllıca bir tercihtir.
              </p>
            </section>
          </>
        )}
        {category.name === 'TULUM' && (
          <>
            {/* TULUM içeriği buraya gelecek */}
          </>
        )}
        {category.name === 'İŞ TAKIMI' && (
          <>
            {/* İŞ TAKIMI içeriği buraya gelecek */}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;