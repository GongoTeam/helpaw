import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const shelters = [
  {
    id: 1,
    name: "Притулок «Лапа Друга», Львів",
    rating: 4.8,
    logo: "🐾",
    category: "Собаки",
    city: "Львів",
    hasRequests: true,
    recommended: true,
    email: "lapadruga@example.com",
    images: ["/assets/dog1.png", "/assets/dog2.png"],
  },
  {
    id: 2,
    name: "Притулок «Найкращий друг», Львів",
    rating: 4.7,
    logo: "🐶",
    category: "Коти",
    city: "Львів",
    hasRequests: false,
    recommended: false,
    email: "najkraschyidruh@example.com",
    images: ["/assets/cat1.png", "/assets/cat2.png"],
  },
  {
    id: 3,
    name: "Притулок «Милосердя», Київ",
    rating: 4.9,
    logo: "🐕",
    category: "Собаки",
    city: "Київ",
    hasRequests: true,
    recommended: true,
    email: "miloserdya@example.com",
    images: ["/assets/dog1.png", "/assets/dog2.png"],
  },
];

const Shelter = () => {
  const { id } = useParams();
  const shelter = shelters.find((s) => s.id === parseInt(id));

  if (!shelter) {
    return <p>Притулок не знайдено</p>;
  }

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      textAlign: "center",
      flexDirection: "column",
    },
    content: {
      flex: 1,
      padding: "2rem",
      fontFamily: "'PT Sans', sans-serif",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      justifyContent: "center",
      marginBottom: "1rem",
    },
    name: {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "bold",
    },
    info: {
      marginBottom: "1rem",
    },
    imageGallery: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      justifyContent: "center",
      marginBottom: "2rem",
    },
    image: {
      width: "250px",
      height: "180px",
      objectFit: "cover",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
    button: {
      padding: "0.75rem 1.5rem",
      backgroundColor: "#A8D5BA",
      border: "none",
      borderRadius: "6px",
      color: "#000",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.header}>
          <span style={{ fontSize: "2rem" }}>{shelter.logo}</span>
          <h1 style={styles.name}>{shelter.name}</h1>
        </div>
        <div style={styles.info}>
          <p>
            <strong>Місто:</strong> {shelter.city}
          </p>
          <p>
            <strong>Категорія:</strong> {shelter.category}
          </p>
          <p>
            <strong>Рейтинг:</strong> {shelter.rating}
          </p>
          <p>
            <strong>Статус запитів:</strong>{" "}
            {shelter.hasRequests
              ? "Є відкриті запити"
              : "Немає відкритих запитів"}
          </p>
        </div>

        <div style={styles.imageGallery}>
          {shelter.images.map((url, index) => (
            <img key={index} src={url} alt="Тварина" style={styles.image} />
          ))}
        </div>

        <a href={`mailto:${shelter.email}`}>
          <button style={styles.button}>Зв’язатися</button>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Shelter;
