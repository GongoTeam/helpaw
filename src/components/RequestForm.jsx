import React, { useState } from "react";

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "80px 16px 40px",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    boxSizing: "border-box",
  },
  container: {
    width: "100%",
    maxWidth: "460px",
    backgroundColor: "#fff",
    padding: "24px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    color: "#000",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "20px",
    marginBottom: "16px",
    textAlign: "center",
  },
  formGroup: {
    marginBottom: "12px",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "4px",
    fontWeight: "bold",
    fontSize: "14px",
  },
  input: {
    padding: "9px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  textarea: {
    padding: "9px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    resize: "vertical",
    minHeight: "70px",
  },
  button: {
    marginTop: "16px",
    padding: "10px 20px",
    backgroundColor: "#A8D5BA",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    alignSelf: "center",
  },
  success: {
    marginTop: "15px",
    color: "green",
    textAlign: "center",
  },
};

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferredType: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Заявка на пошук:", formData);
    setSubmitted(true);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h3 style={styles.title}>Не знайшли потрібну тварину?</h3>
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          Заповніть форму, і ми зв’яжемося з вами, якщо з’явиться відповідна
          тварина
        </p>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">
              Ім’я
            </label>
            <input
              style={styles.input}
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">
              Email
            </label>
            <input
              style={styles.input}
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="preferredType">
              Яку тварину ви шукаєте?
            </label>
            <input
              style={styles.input}
              type="text"
              id="preferredType"
              name="preferredType"
              value={formData.preferredType}
              onChange={handleChange}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="description">
              Додаткова інформація
            </label>
            <textarea
              style={styles.textarea}
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <button style={styles.button} type="submit">
            Надіслати заявку
          </button>
        </form>
        {submitted && (
          <div style={styles.success}>✅ Заявка успішно надіслана!</div>
        )}
      </div>
    </div>
  );
};

export default RequestForm;
