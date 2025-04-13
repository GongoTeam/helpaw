import React, { useState } from "react";

const VolunteerPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f4f4f4",
      color: "#000",
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
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
      marginLeft: "15px",
      color: "white",
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
    volunteerTab: {
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      margin: "40px auto",
    },
    title: {
      fontSize: "24px",
      color: "#2d6a4f",
      marginBottom: "16px",
    },
    section: {
      marginBottom: "24px",
    },
    subtitle: {
      fontSize: "20px",
      color: "#1d3557",
      marginBottom: "8px",
    },
    list: {
      paddingLeft: "20px",
      color: "#333333",
      marginTop: "8px",
    },
    listItem: {
      marginBottom: "6px",
    },
    contact: {
      color: "#333333",
    },
    link: {
      color: "#2d6a4f",
      textDecoration: "underline",
    },
  };

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

      <div style={styles.volunteerTab}>
        <h2 style={styles.title}>Інформація для волонтерів</h2>

        <section style={styles.section}>
          <h3 style={styles.subtitle}>Як допомогти?</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Допомагайте з вигулом тварин</li>
            <li style={styles.listItem}>Приходьте на прибирання території</li>
            <li style={styles.listItem}>
              Привозьте корм, медикаменти або іграшки
            </li>
            <li style={styles.listItem}>
              Поширюйте інформацію про притулок у соцмережах
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subtitle}>Вимоги до волонтерів</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Вік від 16 років (з письмовим дозволом батьків до 18)
            </li>
            <li style={styles.listItem}>Любов до тварин і відповідальність</li>
            <li style={styles.listItem}>Попередній запис на волонтерство</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subtitle}>Контакти для запису</h3>
          <p style={styles.contact}>
            Звертайтесь за телефоном:{" "}
            <a href="tel:+380123456789" style={styles.link}>
              +38 (012) 345 67 89
            </a>
            <br />
            або напишіть на email:{" "}
            <a href="mailto:volunteers@shelter.ua" style={styles.link}>
              volunteers@shelter.ua
            </a>
          </p>
        </section>
      </div>

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
};

export default VolunteerPage;
