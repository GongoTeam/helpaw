import React, { useState } from "react";
import AnimalCard from "../components/AnimalCard";
import RequestForm from "../components/RequestForm";
import animals from "../data/animals";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    shelter: "",
  });
  const navigate = useNavigate();
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    const check = (field, value) =>
      !value || field?.toLowerCase().includes(value.toLowerCase());

    return animals.filter(
      (animal) =>
        check(animal.type, filters.type) &&
        check(animal.location, filters.location) &&
        check(animal.shelter, filters.shelter),
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Пошук тварин</h1>
      <div style={styles.filters}>
        <input
          type="text"
          name="type"
          placeholder="Тип (кіт, собака...)"
          value={filters.type}
          onChange={handleFilterChange}
          style={styles.input}
        />
        <input
          type="text"
          name="location"
          placeholder="Місце розташування"
          value={filters.location}
          onChange={handleFilterChange}
          style={styles.input}
        />
        <input
          type="text"
          name="shelter"
          placeholder="Притулок"
          value={filters.shelter}
          onChange={handleFilterChange}
          style={styles.input}
        />
        <button style={styles.button} onClick={() => navigate("/request")}>
          Залишити запит 📝
        </button>
      </div>

      <div style={styles.grid}>
        {applyFilters().map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            onClick={() => setSelectedAnimal(animal)}
          />
        ))}
      </div>

      {selectedAnimal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button
              style={styles.closeButton}
              onClick={() => setSelectedAnimal(null)}
            >
              ✖
            </button>
            <h2>{selectedAnimal.name}</h2>
            <img
              src={selectedAnimal.image}
              alt={selectedAnimal.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p>{selectedAnimal.description}</p>
          </div>
        </div>
      )}

      {showForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button
              style={styles.closeButton}
              onClick={() => setShowForm(false)}
            >
              ✖
            </button>
            <RequestForm />
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "sans-serif",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  filters: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "20px",
    gap: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "200px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#A8D5BA",
    color: "#fff",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginLeft: "530px",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "600px",
    position: "relative",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
    fontSize: "1.2rem",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

export default Search;
