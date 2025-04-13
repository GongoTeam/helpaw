import React, { useState } from "react";

const Raffles = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    link: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {submitted ? (
          <div style={styles.thankYou}>
            <h2>🎉 Дякуємо за участь!</h2>
            <p>
              Ми зв’яжемось із переможцем після завершення розіграшу. Разом ми
              допомагаємо тваринам 💚
            </p>
          </div>
        ) : (
          <>
            <h1 style={styles.title}>Як взяти участь у розіграші</h1>
            <p style={styles.subtitle}>
              Просто виконай ці 3 кроки — і ти вже учасник!
            </p>

            {/* Кроки */}
            <ol style={styles.stepsList}>
              <li style={styles.step}>
                <strong>1.</strong> Зроби донат від 100 грн:
                <div style={styles.qrBlock}>
                  <img
                    src="/assets/qr-code.png"
                    alt="QR для донату"
                    style={styles.qr}
                  />
                  <br />
                  <a
                    href="https://send.monobank.ua/jar/85iN5uicrP"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.donateLink}
                  >
                    або перейди за посиланням
                  </a>
                </div>
              </li>
              <li style={styles.step}>
                <strong>2.</strong> Пошир платформу або інформацію про допомогу
                тваринам у соцмережах.
                <br />
                Рекомендуємо:
                <a
                  href="https://www.instagram.com/uanimals.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  @uanimals.official
                </a>
              </li>
              <li style={styles.step}>
                <strong>3.</strong> Заповни коротку форму нижче:
              </li>
            </ol>

            {/* Форма */}
            <form onSubmit={handleSubmit} style={styles.form}>
              <label style={styles.label}>
                Ім’я:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </label>
              <label style={styles.label}>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </label>
              <label style={styles.label}>
                Посилання на пост / сторіс:
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  required
                  placeholder="https://instagram.com/..."
                  style={styles.input}
                />
              </label>
              <button type="submit" style={styles.button}>
                Надіслати
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#F8F8F8",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "700px",
    width: "100%",
  },
  title: {
    fontSize: "28px",
    marginBottom: "12px",
    color: "#003a1b",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "16px",
    marginBottom: "24px",
    color: "#444",
    textAlign: "center",
  },
  stepsList: {
    listStyleType: "none",
    padding: 0,
    marginBottom: "24px",
  },
  step: {
    marginBottom: "16px",
    fontSize: "16px",
    color: "#222",
  },
  qrBlock: {
    marginTop: "12px",
    textAlign: "center",
  },
  qr: {
    width: "180px",
    marginBottom: "8px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  },
  donateLink: {
    display: "inline-block",
    color: "#1b5e20",
    textDecoration: "underline",
    fontSize: "14px",
  },
  link: {
    marginLeft: "6px",
    color: "#1b5e20",
    fontWeight: "bold",
    textDecoration: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  label: {
    fontSize: "16px",
    color: "#222",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginTop: "6px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#A8D5BA",
    color: "#003a1b",
    border: "none",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  thankYou: {
    textAlign: "center",
    color: "#003a1b",
  },
};

export default Raffles;
