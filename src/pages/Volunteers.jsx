import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Volunteers = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleAuthClick = () => {
    navigate(isAuthenticated ? "/profile" : "/auth");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Відправлено:", formData);
    alert("Дякуємо за вашу заявку! Ми зв'яжемося з вами.");
    setFormData({ name: "", email: "", message: "" });
    setShowModal(false);
  };

  return (
    <div style={{ fontFamily: "sans-serif", color: "#000", lineHeight: "1.6" }}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerRow}>
          <h1 style={styles.logoText}>HelPaw</h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={styles.burger}
            className="burger"
          >
            ☰
          </button>
        </div>
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
          <button onClick={handleAuthClick} style={styles.navLink2}>
            {isAuthenticated ? "Профіль" : "Вхід/Реєстрація"}
          </button>
        </nav>
      </header>
      <style>{`
        @media (max-width: 768px) {
          .burger {
            display: block;
          }
          .nav {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            margin-top: 10px;
            gap: 10px;
          }
          .navClosed {
            display: none !important;
          }
        }

        @media (min-width: 769px) {
          .burger {
            display: none;
          }
          .nav {
            display: flex !important;
            flex-direction: row;
            align-items: center;
            gap: 20px;
            margin-top: 0;
          }
          .navClosed {
            display: flex !important;
          }
        }
      `}</style>
      {/* Hero */}
      <section
        style={{
          backgroundImage: 'url("/assets/volunteers.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h1>
          СТАНЬ ЧАСТИНОЮ ВЕЛИКОЇ СПРАВИ, <br /> СТАНЬ{" "}
          <span style={{ color: "#91d2b3" }}>ВОЛОНТЕРОМ!</span>
        </h1>
        <p>
          Щодня тисячі тварин потребують не лише дому, а й уваги, турботи та
          людського тепла. І саме завдяки волонтерам — таким, як ти — ми можемо
          рятувати більше життів.
        </p>
        <button
          onClick={() => setShowModal(true)}
          style={{
            marginTop: "20px",
            backgroundColor: "#91d2b3",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Стати волонтером
        </button>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          КОГО МИ ШУКАЄМО?<span style={styles.pawIcon}>🐾</span>
        </h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>маєш трохи вільного часу</li>
          <li style={styles.listItem}>любиш тварин</li>
          <li style={styles.listItem}>хочеш допомагати й бачити результат</li>
          <li style={styles.listItem}>
            готовий бути поруч з тими, хто ще не має до
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          ЯК МОЖНА ДОПОМОГТИ<span style={styles.pawIcon}>🐾</span>
        </h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Вигул тварин</li>
          <li style={styles.listItem}>
            Допомога в притулку (прибирання, годування, ігри)
          </li>
          <li style={styles.listItem}>
            Фотографування/зйомка відео для оголошень
          </li>
          <li style={styles.listItem}>
            Перевезення тварин/передач гуманітарної допомоги
          </li>
          <li style={styles.listItem}>Копірайтинг, дизайн, ведення соцмереж</li>
          <li style={styles.listItem}>Пошук домівок, кураторство</li>
          <li style={styles.listItem}>
            Просто бути другом — тварини це відчувають
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          ЩО ТИ ОТРИМАЄШ<span style={styles.pawIcon}>🐾</span>
        </h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            справжню вдячність — очима й серцем тваринки
          </li>
          <li style={styles.listItem}>підтримку нашої спільноти</li>
          <li style={styles.listItem}>волонтерський досвід</li>
          <li style={styles.listItem}>
            змогу змінити чиєсь життя (а іноді й своє)
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>
          ЯК ПРИЄДНАТИСЬ?<span style={styles.pawIcon}>🐾</span>
        </h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Натисни кнопку «Cтати волонтером»</li>
          <li style={styles.listItem}>Обери зручне місто та спосіб допомоги</li>
          <li style={styles.listItem}>волонтерський досвід</li>
          <li style={styles.listItem}>
            Ми зв'яжемося з тобою, і разом знайдемо найкращий формат співпраці
          </li>
        </ul>
        <br />
        <br />
      </section>
      <Footer />
      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "10px",
              maxWidth: "400px",
              width: "100%",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            <h2>Заявка волонтера</h2>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              <input
                type="text"
                placeholder="Ім’я"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Чому ви хочете стати волонтером?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                required
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "10px",
                }}
              >
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  style={{
                    backgroundColor: "#ccc",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                  }}
                >
                  Скасувати
                </button>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#91d2b3",
                    color: "#fff",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                  }}
                >
                  Надіслати
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
const styles = {
  container: {
    fontFamily: "sans-serif",
    color: "#000",
    lineHeight: "1.6",
  },

  header: {
    backgroundColor: "rgba(30, 30, 30, 0.85)",
    fontFamily: "'PT Sans', sans-serif",
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  logoText: {
    margin: 0,
    fontWeight: 300,
    fontSize: "24px",
    color: "#fff",
    marginLeft: "15px",
  },
  burger: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "28px",
    cursor: "pointer",
    marginLeft: "165px",
  },
  nav: {
    display: "flex",
    gap: "50px",
    marginRight: "40px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
  navLink2: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "none",
    outline: "none",
    fontSize: "15px",
  },
  hero: {
    backgroundImage: 'url("/assets/volunteers.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    padding: "100px 20px",
    textAlign: "center",
  },
  highlight: {
    color: "#91d2b3",
  },
  section: {
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  list: {
    paddingLeft: "0",
  },
  listItem: {
    marginBottom: "10px",
  },
  pawIcon: {
    fontSize: "30px",
    display: "inline-block",
    marginLeft: "10px",
  },
};
export default Volunteers;
