import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import animals from "../data/animals";

const AnimalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Знаходимо тварину за її id
  const animal = animals.find((a) => String(a.id) === id);

  // Якщо тварина не знайдена, показуємо повідомлення
  if (!animal) {
    return <div>Тварину не знайдено 🐾</div>;
  }

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate(-1)}>
        ← Назад
      </button>
      <h1>{animal.name}</h1>
      <img src={animal.image} alt={animal.name} style={styles.image} />
      <p style={styles.text}>
        <strong>Опис:</strong> {animal.description}
      </p>
      <p style={styles.text}>
        <strong>Вік:</strong> {animal.age}
      </p>
      <p style={styles.text}>
        <strong>Стать:</strong> {animal.gender}
      </p>
      <p style={styles.text}>
        <strong>Тип:</strong> {animal.type} {/* Відображення типу */}
      </p>
      <p style={styles.text}>
        <strong>Притулок:</strong> {animal.shelter}{" "}
        {/* Відображення притулку */}
      </p>
      <p style={styles.text}>
        <strong>Локація:</strong> {animal.location} {/* Відображення локації */}
      </p>
      <p style={styles.text}>
        <strong>Особливість:</strong> {animal.trait}
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    fontFamily: "sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
  },
  image: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#000",
    marginBottom: "10px",
  },
  shelter: {
    color: "#000",
  },
  backButton: {
    marginBottom: "20px",
    padding: "8px 12px",
    borderRadius: "5px",
    backgroundColor: "#ccc",
    border: "none",
    cursor: "pointer",
  },
};

export default AnimalPage;
