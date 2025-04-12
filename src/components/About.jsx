import React from "react";

export default function About() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>
          ПРО ПЛАТФОРМУ <span style={styles.paw}>🐾</span>
        </h2>
        <div style={styles.content}>
          {/* Ліва колонка */}
          <div style={styles.leftColumn}>
            <img
              src="/assets/about1.png"
              alt="Cat interaction"
              style={styles.image}
              width="325px"
              height="548px"
            />
          </div>

          {/* Права колонка */}
          <div style={styles.rightColumn}>
            <p style={styles.paragraph}>
              Ми створили цю платформу, щоб врятувати тих, хто не може попросити
              про допомогу. Щодня сотні тварин залишаються на вулиці без дому,
              турботи й тепла. Ми об’єднуємо волонтерів, небайдужих людей та
              притулки з усієї України, щоб кожна лапка знайшла люблячу сім’ю.
            </p>
            {/* Нижній рядок: зображення + переваги */}
            <div style={styles.bottomRow}>
              <img
                src="/assets/about2.png"
                alt="Dog hug"
                style={{ ...styles.image, ...styles.dogImage }}
                width="398px"
                height="320px"
              />
              <div style={styles.benefits}>
                <h3 style={styles.subtitle}>На нашій платформі ви можете:</h3>
                <ul style={styles.list}>
                  <li>
                    <span style={styles.number}>01</span>знайти друга серед
                    безпритульних тварин;
                  </li>
                  <li>
                    <span style={styles.number}>02</span>допомогти притулкам
                    фінансово або волонтерською працею;
                  </li>
                  <li>
                    <span style={styles.number}>03</span>розповсюдити інформацію
                    й дати шанс на життя.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "#fff",
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "1200px",
    width: "100%",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "40px",
  },
  paw: {
    fontSize: "28px",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    gap: "40px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  leftColumn: {
    flex: "1 1 300px",
    display: "flex",
    flexDirection: "column",
  },
  rightColumn: {
    flex: "2 1 600px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    fontSize: "18px",
    color: "#333",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  },
  dogImage: {
    flex: "1",
    maxWidth: "50%",
    marginTop: "12px",
    marginRight: "20px",
  },
  paragraph: {
    marginTop: "0",
    fontSize: "24px",
    lineHeight: "1.5",
    marginBottom: "20px",
  },
  bottomRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
  },
  benefits: {
    flex: "1",
    minWidth: "260px",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "10px",
  },

  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    fontSize: "20px",
    lineHeight: "1.6",
  },
  li: {
    textAlign: "justify",
  },
  number: {
    color: "#76b893",
    fontWeight: "bold",
    marginRight: "10px",
    fontSize: "30px",
  },
};
