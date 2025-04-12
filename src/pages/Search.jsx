import React, { useState } from "react";
import Footer from "../components/Footer";

const styles = {
  page: {
    minHeight: "100vh",
    color: "white",
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
  headerRow: { display: "flex", alignItems: "center", gap: "20px" },
  logoText: {
    margin: 0,
    fontWeight: 300,
    fontSize: "24px",
    marginLeft: "15px",
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
  navLink: { color: "white", textDecoration: "none", fontSize: "16px" },
  filterSection: {
    padding: "20px 30px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "center",
  },
  input: { padding: "6px 10px", border: "1px solid #ccc", borderRadius: "6px" },
  button: {
    padding: "6px 14px",
    backgroundColor: "#355E3B",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  sectionTitle: {
    padding: "0 30px",
    fontSize: "20px",
    marginTop: "30px",
    marginLeft: "455px",
    marginBottom: "45px",
    color: "#000",
  },
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginBottom: "30px",
    padding: "0 30px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    width: "200px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  cardImg: { width: "100%", height: "140px", objectFit: "cover" },
  cardContent: { padding: "10px", color: "#000" },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalOverlay: {
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
    padding: "20px",
    color: "#000",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "500px",
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: "150px",
    right: "506px",
    fontSize: "20px",
    border: "none",
    background: "none",
    cursor: "pointer",
  },
};

const animals = [
  {
    id: 1,
    name: "Сімба",
    age: "3 місяці",
    gender: "хлопчик",
    trait: "любить гратися",
    image: "/assets/animal1.png",
    description: "Малюк дуже активний і грайливий, любить увагу та обійми.",
  },
  {
    id: 2,
    name: "Мія",
    age: "1 рік",
    gender: "дівчинка",
    trait: "лагідна, довірлива",
    image: "/assets/animal2.png",
  },
  {
    id: 3,
    name: "Тайсон",
    age: "2 роки",
    gender: "хлопчик",
    trait: "розумний",
    image: "/assets/animal1.png",
    description: "Знає команди, дуже слухняний і прив’язується до людини.",
  },
];

const recommendations = [
  {
    name: "Боня",
    age: "6 місяців",
    gender: "дівчинка",
    trait: "мініатюрна",
    image: "/assets/animal2.png",
    description: "Маленька та весела, шукає люблячу родину.",
  },
  {
    name: "Барні",
    age: "4 роки",
    gender: "хлопчик",
    trait: "активний",
    image: "/assets/animal1.png",
    description: "Ідеальний для прогулянок і активного способу життя.",
  },
  {
    name: "Люсі",
    age: "1.5 року",
    gender: "дівчинка",
    trait: "ніжна",
    image: "/assets/animal2.png",
    description: "Дуже ніжна та лагідна, шукає затишний дім.",
  },
];

const AnimalCard = ({ animal, onClick }) => (
  <div style={styles.card}>
    <img src={animal.image} alt={animal.name} style={styles.cardImg} />
    <div style={styles.cardContent}>
      <h4>{animal.name}</h4>
      <p>
        {animal.age}, {animal.gender}, {animal.trait}
      </p>
      <div style={styles.cardFooter}>
        <span role="img" aria-label="paw">
          🐾
        </span>
        <button style={styles.button} onClick={onClick}>
          Детальніше
        </button>
      </div>
    </div>
  </div>
);

const AnimalModal = ({ animal, onClose }) => {
  if (!animal) return null;
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <button onClick={onClose} style={styles.closeButton}>
          ×
        </button>
        <h2>{animal.name}</h2>
        <img
          src={animal.image}
          alt={animal.name}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <p>
          <strong>Вік:</strong> {animal.age}
        </p>
        <p>
          <strong>Стать:</strong> {animal.gender}
        </p>
        <p>
          <strong>Особливості:</strong> {animal.trait}
        </p>
        <p>{animal.description}</p>
      </div>
    </div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [filters, setFilters] = useState({
    type: "",
    age: "",
    gender: "",
    size: "",
    temporary: "",
    traits: "",
    location: "",
    shelter: "",
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    const map = {
      "Вид тварини": "type",
      Вік: "age",
      Стать: "gender",
      Розмір: "size",
      "Потребує тимчасовості": "temporary",
      Специфікація: "traits",
      "Місто/регіон": "location",
      Притулок: "shelter",
    };
    const key = map[placeholder];
    setFilters((prev) => ({ ...prev, [key]: value.toLowerCase() }));
  };

  const applyFilters = (animalList) => {
    return animalList.filter((animal) => {
      const check = (field, filterVal) =>
        !filterVal || animal[field]?.toLowerCase().includes(filterVal);
      return (
        check("name", filters.type) &&
        check("age", filters.age) &&
        check("gender", filters.gender) &&
        check("trait", filters.traits)
      );
    });
  };

  const handleSearch = () => {
    const filtered = applyFilters(animals);
    setSearchResults(filtered);
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
          <a href="Auth" style={styles.navLink}>
            Вхід/Реєстрація
          </a>
        </nav>
      </header>

      <div style={styles.filterSection}>
        <input
          type="text"
          placeholder="Вид тварини"
          style={styles.input}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Вік"
          style={styles.input}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Стать"
          style={styles.input}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Розмір"
          style={styles.input}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Потребує тимчасовості"
          style={styles.input}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Специфікація"
          style={styles.input}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Місто/регіон"
          style={styles.input}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Притулок"
          style={styles.input}
          onChange={handleChange}
        />
        <button style={styles.button} onClick={handleSearch}>
          Знайти
        </button>
      </div>

      <h3 style={styles.sectionTitle}>Результати пошуку</h3>
      <div style={styles.cardGrid}>
        {(searchResults.length > 0 ? searchResults : animals).map(
          (a, index) => (
            <AnimalCard
              key={index}
              animal={a}
              onClick={() => setSelectedAnimal(a)}
            />
          ),
        )}
      </div>

      <h3 style={styles.sectionTitle}>Ви можете зацікавитись</h3>
      <div style={styles.cardGrid}>
        {recommendations.map((a, index) => (
          <AnimalCard
            key={index}
            animal={a}
            onClick={() => setSelectedAnimal(a)}
          />
        ))}
      </div>

      <AnimalModal
        animal={selectedAnimal}
        onClose={() => setSelectedAnimal(null)}
      />
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .burger { display: block; }
          .nav {
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            margin-top: 10px;
            gap: 10px;
          }
          .navClosed { display: none !important; }
        }

        @media (min-width: 769px) {
          .burger { display: none; }
          .nav {
            display: flex !important;
            flex-direction: row;
            align-items: center;
            gap: 20px;
            margin-top: 0;
          }
          .navClosed { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
