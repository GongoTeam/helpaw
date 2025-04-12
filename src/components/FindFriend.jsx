import React, { useState } from "react";

const animalsData = [
  {
    id: 1,
    type: "Собака",
    age: "До 1 року",
    region: "Київ",
    size: "Малий",
    vaccinated: "Так",
    gender: "Хлопчик",
    name: "Бім",
  },
  {
    id: 2,
    type: "Кіт",
    age: "До 1 року",
    region: "Львів",
    size: "Малий",
    vaccinated: "Ні",
    gender: "Дівчинка",
    name: "Мурка",
  },
];

const FindFriend = () => {
  const [filters, setFilters] = useState({
    type: "",
    region: "",
    age: "",
    size: "",
    vaccinated: "",
    gender: "",
  });

  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filtered = animalsData.filter((animal) => {
      return (
        (!filters.type || animal.type === filters.type) &&
        (!filters.region || animal.region.includes(filters.region)) &&
        (!filters.age || animal.age === filters.age) &&
        (!filters.size || animal.size === filters.size) &&
        (!filters.vaccinated || animal.vaccinated === filters.vaccinated) &&
        (!filters.gender || animal.gender === filters.gender)
      );
    });

    setResults(filtered);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: "40px",
      padding: "60px 20px",
      flexWrap: "wrap",
    },
    title: {
      fontSize: "42px",
      fontWeight: "bold",
      textAlign: "center",
    },
    paw: {
      fontSize: "30px",
      marginLeft: "10px",
    },
    formBox: {
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "30px",
      width: "300px",
      height: "600px",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "16px",
      borderRadius: "8px",
      border: "1px solid #aaa",
    },
    button: {
      padding: "10px",
      width: "100%",
      backgroundColor: "#6ba586",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    resultBox: {
      marginTop: "30px",
      textAlign: "left",
    },
    image: {
      borderRadius: "12px",
      maxWidth: "750px",
      height: "auto",
    },
  };

  return (
    <>
      <h2 style={styles.title}>
        ЗНАЙДІТЬ СВОГО ДРУГА <span style={styles.paw}>🐾</span>
      </h2>
      <div style={styles.container}>
        <form style={styles.formBox} onSubmit={handleSubmit}>
          <h3>Фільтри</h3>
          <hr style={{ marginBottom: "20px" }} />

          <label style={styles.label}>Вид тварини</label>
          <select name="type" onChange={handleChange} style={styles.input}>
            <option value="">Собака / Інше</option>
            <option value="Собака">Собака</option>
            <option value="Кіт">Кіт</option>
          </select>

          <label style={styles.label}>Регіон / місто</label>
          <input
            type="text"
            name="region"
            placeholder="Київ, Львів..."
            onChange={handleChange}
            style={styles.input}
          />

          <label style={styles.label}>Вік</label>
          <select name="age" onChange={handleChange} style={styles.input}>
            <option value="">Будь-який</option>
            <option value="До 1 року">До 1 року</option>
            <option value="Старше 1 року">Старше 1 року</option>
          </select>

          <label style={styles.label}>Розмір</label>
          <select name="size" onChange={handleChange} style={styles.input}>
            <option value="">Будь-який</option>
            <option value="Малий">Малий</option>
            <option value="Середній">Середній</option>
            <option value="Великий">Великий</option>
          </select>

          <label style={styles.label}>Привитий / стерилізований</label>
          <select
            name="vaccinated"
            onChange={handleChange}
            style={styles.input}
          >
            <option value="">Так / Ні</option>
            <option value="Так">Так</option>
            <option value="Ні">Ні</option>
          </select>

          <label style={styles.label}>Стать</label>
          <select name="gender" onChange={handleChange} style={styles.input}>
            <option value="">Хлопчик / Дівчинка</option>
            <option value="Хлопчик">Хлопчик</option>
            <option value="Дівчинка">Дівчинка</option>
          </select>

          <button type="submit" style={styles.button}>
            Знайти
          </button>

          {results.length > 0 && (
            <div style={styles.resultBox}>
              <h4>Результати:</h4>
              <ul>
                {results.map((a) => (
                  <li key={a.id}>
                    {a.name} — {a.type}, {a.age}, {a.region}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>

        <img src="/assets/FindFriend.png" alt="kitten" style={styles.image} />
      </div>
    </>
  );
};

export default FindFriend;
