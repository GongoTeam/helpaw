import React from "react";

const styles = {
  card: {
    padding: "16px",
    borderRadius: "16px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: "192px", // еквівалент h-48
    objectFit: "cover",
    borderRadius: "16px",
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginTop: "8px",
  },
  description: {
    color: "#4B5563", // gray-600
    marginTop: "4px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
  },
  button: {
    backgroundColor: "#22C55E", // green-500
    color: "white",
    padding: "8px 16px",
    border: "none",
    borderRadius: "9999px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
};

const AnimalCard = ({ animal, onClick }) => {
  if (!animal) return null;

  return (
    <div style={styles.card}>
      <img src={animal.image} alt={animal.name} style={styles.image} />
      <h2 style={styles.name}>{animal.name}</h2>
      <p style={styles.description}>{animal.description}</p>
      <div style={styles.actions}>
        <button
          onClick={onClick}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#16A34A")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#22C55E")}
        >
          Детальніше
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;
