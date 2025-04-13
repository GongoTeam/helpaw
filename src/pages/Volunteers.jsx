import React, { useState } from "react";
import Footer from "../components/Footer";

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

const Volunteers = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div style={styles.container}>
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
          <a href="Auth" style={styles.navLink}>
            Вхід/Реєстрація
          </a>
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
      <section style={styles.hero}>
        <h1>
          СТАНЬ ЧАСТИНОЮ ВЕЛИКОЇ СПРАВИ, <br /> СТАНЬ{" "}
          <span style={styles.highlight}>ВОЛОНТЕРОМ!</span>
        </h1>
        <p>
          Щодня тисячі тварин потребують не лише дому, а й уваги, турботи та
          людського тепла. І саме завдяки волонтерам — таким, як ти — ми можемо
          рятувати більше життів. Платформа об'єднує небайдужих по всій Україні:
          від водіїв і фотографів до людей, які просто можуть витягти песика або
          обійняти котика.
        </p>
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
          <li style={styles.listItem}>
            Натисни кнопку «Cтати волонтером на вкладці Головна»
          </li>
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
    </div>
  );
};

export default Volunteers;
