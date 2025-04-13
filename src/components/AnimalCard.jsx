import React from "react";
import { Link } from "react-router-dom";

const AnimalCard = ({ animal }) => {
  return (
    <div style={styles.card}>
      <img src={animal.image} alt={animal.name} style={styles.image} />
      <h2 style={styles.title}>{animal.name}</h2>
      <p style={styles.description}>
        {animal.description.length > 100
          ? animal.description.slice(0, 100) + "..."
          : animal.description}
      </p>
      <Link to={`/animal/${animal.id}`} style={styles.button}>
        Детальніше →
      </Link>
    </div>
  );
};

const styles = {
  card: {
    padding: "16px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  title: {
    fontSize: "20px",
    margin: "10px 0 5px",
  },
  description: {
    color: "#555",
    flexGrow: 1,
  },
  button: {
    marginTop: "15px",
    display: "inline-block",
    padding: "10px 15px",
    backgroundColor: "#A8D5BA",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    textAlign: "center",
  },
};

export default AnimalCard;
