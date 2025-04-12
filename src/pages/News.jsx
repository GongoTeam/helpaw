import React, { useRef, useState } from "react";
import Footer from "../components/Footer";

const styles = {
  container: {
    fontFamily: "'PT Sans', sans-serif",
    backgroundColor: "#ffffff",
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: "rgba(30, 30, 30, 0.85)",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  logoText: {
    margin: 0,
    fontWeight: "300",
    fontSize: "22px",
    color: "#fff",
    marginLeft: "10px",
  },
  burger: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "26px",
    cursor: "pointer",
    marginLeft: "auto",
  },
  nav: {
    display: "flex",
    gap: "30px",
    marginRight: "30px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    marginLeft: "25px",
  },
  headerSection: {
    backgroundImage: "url('/assets/Newsheader.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "60px 10px",
    height: "auto",
    textAlign: "center",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "0 0 8px",
    lineHeight: "1.2",
  },
  quote: {
    fontSize: "13px",
    margin: "12px 0 30px",
    maxWidth: "90%",
  },
  button: {
    backgroundColor: "#6EA283",
    color: "white",
    padding: "10px 20px",
    fontSize: "15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  descriptionSection: {
    padding: "30px 15px",
    textAlign: "center",
    fontSize: "16px",
    maxWidth: "100%",
    lineHeight: "1.6",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    padding: "30px 15px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  },
  cardImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  cardContent: {
    padding: "12px",
  },
  cardTitle: {
    fontSize: "17px",
    fontWeight: "bold",
    marginBottom: "6px",
  },
  cardText: {
    fontSize: "15px",
    lineHeight: "1.5",
  },
  shareSection: {
    backgroundColor: "#fff",
    textAlign: "center",
    border: "2px solid #6EA283",
    borderRadius: "5px",
    width: "90%",
    padding: "40px 15px",
    margin: "40px auto",
  },
  shareTitle: {
    fontSize: "20px",
    marginBottom: "16px",
  },
  shareButton: {
    backgroundColor: "#6EA283",
    color: "#fff",
    padding: "10px 20px",
    fontSize: "15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "8px",
    textAlign: "center",
    maxWidth: "400px",
    width: "90%",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  modalInput: {
    width: "80%",
    padding: "10px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  modalButton: {
    backgroundColor: "#6EA283",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  closeButton: {
    background: "transparent",
    border: "none",
    fontSize: "20px",
    position: "absolute",
    top: "270px",
    right: "556px",
    cursor: "pointer",
  },
};

const News = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const blogRef = useRef(null);
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = () => {
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setShowModal(false);
    }, 2000);
  };

  const handleScrollToBlog = () => {
    blogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logoText}>HelPaw</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={styles.burger}
          className="burger"
        >
          ☰
        </button>
        <style>{`
          @media (max-width: 768px) {
            .burger { display: block; }
            .nav {
              flex-direction: column;
              align-items: flex-start;
              width: 100%;
              gap: 10px;
              margin-top: 10px;
              padding-left: 10px;
            }
            .navClosed { display: none !important; }
          }
          @media (min-width: 769px) {
            .burger { display: none; }
            .nav {
              display: flex !important;
              flex-direction: row;
              align-items: center;
              gap: 20px;
            }
            .navClosed { display: flex !important; }
          }
        `}</style>
        <nav style={styles.nav} className={menuOpen ? "nav" : "nav navClosed"}>
          <a href="/" style={styles.navLink}>
            Головна
          </a>
          <a href="/news" style={styles.navLink}>
            Новини/блог
          </a>
          <a href="/search" style={styles.navLink}>
            Тварини
          </a>
          <a href="/shelters" style={styles.navLink}>
            Притулки
          </a>
          <a href="/volunteers" style={styles.navLink}>
            Волонтерам
          </a>
          <a href="/auth" style={styles.navLink}>
            Вхід/Реєстрація
          </a>
        </nav>
      </header>

      <section style={styles.headerSection}>
        <h1 style={styles.headerTitle}>ЧИТАЙТЕ,</h1>
        <h1 style={styles.headerTitle}>ДІЗНАВАЙТЕСЬ,</h1>
        <h1 style={styles.headerTitle}>НАДИХАЙТЕСЬ</h1>
        <p style={styles.quote}>
          Історії, поради, новини та натхнення — усе, що варто знати тим, хто
          хоче допомогти.
        </p>
        <button style={styles.button} onClick={handleScrollToBlog}>
          Перейти до блогу
        </button>
      </section>

      <section style={styles.descriptionSection}>
        <p>
          У нашому блозі — усе, що важливо знати тим, хто любить тварин. Ми
          публікуємо новини з притулків, поради по догляду та корисні інструкції
          для тих, хто хоче допомогти. Дізнавайтесь, як врятувати хвостика, як
          взяти з собою в притулок або як підготуватись до першої зустрічі з
          майбутнім другом.
        </p>
        <p>Тут — знання, які рятують життя.</p>
      </section>

      <section ref={blogRef} style={styles.cardGrid}>
        {[
          {
            title: "Як підготуватись до всиновлення тварини?",
            text: "Відповідальність — це не лише про любов, а й про обов'язки...",
            image: "/assets/news1.png",
          },
          {
            title: "Список речей, які варто взяти з собою в притулок",
            text: "Ласощі, лежанка, девайси, теплі речі — усе, що знадобиться...",
            image: "/assets/news2.png",
          },
          {
            title: "Поради для першого дня тварини в новому домі",
            text: "Перші 24 години — вирішальні...",
            image: "/assets/news3.png",
          },
        ].map((card, idx) => (
          <div key={idx} style={styles.card}>
            <img src={card.image} alt={card.title} style={styles.cardImage} />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardText}>{card.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section style={styles.shareSection}>
        <h2 style={styles.shareTitle}>Хочеш поділитись власною історією?</h2>
        <button style={styles.shareButton} onClick={() => setShowModal(true)}>
          Надіслати матеріал у блог
        </button>
      </section>

      {showModal && (
        <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowModal(false)}
              style={styles.closeButton}
            >
              ×
            </button>
            <h3>Надіслати історію</h3>
            <input type="text" placeholder="Ім'я" style={styles.modalInput} />
            <input type="email" placeholder="Email" style={styles.modalInput} />
            <textarea
              placeholder="Ваша історія..."
              rows={4}
              style={styles.modalInput}
            />
            <button style={styles.modalButton} onClick={handleSubmit}>
              Надіслати
            </button>
            {formSent && (
              <p
                style={{
                  color: "#6EA283",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Дякуємо! Ваш матеріал надіслано.
              </p>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default News;
