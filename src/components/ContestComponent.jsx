import React from "react";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
    color: "#000",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "0",
    lineHeight: "1.2",
  },
  paw: {
    display: "inline-block",
    marginLeft: "10px",
    fontSize: "42px",
    verticalAlign: "middle",
  },
  subtitle: {
    fontSize: "20px",
    margin: "25px auto 50px",
    maxWidth: "700px",
    lineHeight: "1.6",
  },
  prizeSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "40px",
  },
  image: {
    width: "160px",
    height: "auto",
    objectFit: "contain",
  },
  prizeBox: {
    backgroundColor: "#fff",
    padding: "30px 25px",
    borderRadius: "12px",
    border: "2px solid #6a9c86",
    maxWidth: "320px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  prizeTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "16px",
  },
  prizeText: {
    fontSize: "16px",
    color: "#000",
    marginBottom: "8px",
  },
  howToText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
    margin: "24px 0",
  },
  button: {
    backgroundColor: "#6a9c86",
    color: "white",
    fontSize: "16px",
    padding: "10px 24px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

const ContestComponent = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        ДОПОМАГАЙ — І ВИГРАВАЙ
        <span style={styles.paw}>🐾</span>
        <br />
        ПРИЄМНІ ПОДАРУНКИ!
      </h1>

      <p style={styles.subtitle}>
        Кожен, хто підтримує наших хвостиків, автоматично стає учасником
        розіграшів! <br />
        Ми даруємо подарунки тим, хто донатить, поширює або допомагає тваринкам
        знайти дім. Це — наша подяка за доброту.
      </p>

      <div style={styles.prizeSection}>
        <img
          src="/assets/Contest1.png"
          alt="Набір подарунків"
          style={styles.image}
        />

        <div style={styles.prizeBox}>
          <div style={styles.prizeTitle}>ПРИЗ!</div>
          <div style={styles.prizeText}>
            Набір для улюбленця: миска, іграшка, корм
          </div>
          <div style={styles.prizeText}>Термін участі: до 30 квітня</div>
          <div style={styles.howToText}>ЯК ВЗЯТИ УЧАСТЬ:</div>
          <button style={styles.button}>Взяти участь</button>
        </div>

        <img
          src="/assets/Contest2.png"
          alt="Набір подарунків"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default ContestComponent;
