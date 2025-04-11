import React, { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={styles.page}>
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
          <a href="#" style={styles.navLink}>
            Головна
          </a>
          <a href="#" style={styles.navLink}>
            Новини/блог
          </a>
          <a href="#" style={styles.navLink}>
            Тварини
          </a>
          <a href="#" style={styles.navLink}>
            Притулки
          </a>
          <a href="#" style={styles.navLink}>
            Волонтерам
          </a>
          <a href="#" style={styles.navLink}>
            Вхід/Реєстрація
          </a>
        </nav>
      </header>

      <main style={styles.main}>
        <h2 style={styles.headline}>
          ВОНА ЧЕКАЄ НА ДІМ,
          <br />
          МОЖЛИВО, <span style={styles.highlight}>ТВІЙ?</span>
        </h2>
        <p style={styles.subtitle}>
          Ти можеш допомогти знайти дім для безпритульної тварини, або стати
          волонтером.
        </p>

        <div style={styles.buttons}>
          <button style={styles.button}>Стати волонтером</button>
          <button style={styles.button}>Пошук тварин</button>
          <button style={styles.button}>Допомогти притулку</button>
        </div>
      </main>

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
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage: "url('/assets/MainBG.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "rgba(30, 30, 30, 0.85)",
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
  main: {
    flexGrow: 1,
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "rgba(40, 40, 40, 0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  headline: {
    fontSize: "calc(28px + 1.5vw)",
    fontWeight: "bold",
    lineHeight: "1.3",
    marginBottom: "20px",
  },
  highlight: {
    color: "#A8D5BA",
  },
  subtitle: {
    fontSize: "18px",
    maxWidth: "600px",
    margin: "0 auto 30px",
    color: "#ccc",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    gap: "45px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#76b893",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    minWidth: "200px",
  },
};
