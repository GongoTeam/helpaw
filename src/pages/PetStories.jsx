import React, { useState } from "react";

const PetStories = () => {
  const [stories, setStories] = useState([
    {
      name: "Марті",
      before: "боявся людей, жив на вулиці",
      after: "став улюбленцем родини, обожнює прогулянки і спить на дивані",
      img: "/assets/dog1.png",
    },
    {
      name: "Макс",
      before: "боявся людей, жив на вулиці",
      after: "став улюбленцем родини, обожнює прогулянки і спить на дивані",
      img: "/assets/dog2.png",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    before: "",
    after: "",
    img: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, img: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.before && form.after) {
      setStories([{ ...form }, ...stories]);
      setForm({ name: "", before: "", after: "", img: null });
      // Очистити файл
      document.getElementById("fileInput").value = "";
    }
  };

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "36px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "30px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      marginBottom: "40px",
      maxWidth: "500px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "10px",
      fontSize: "16px",
      backgroundColor: "#6ba586",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "bold",
    },
    cardsWrapper: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
    },
    card: {
      width: "250px",
      backgroundColor: "#b8dbc4",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    cardText: {
      padding: "15px",
      fontSize: "14px",
      color: "#000",
    },
    fileLabel: {
      fontSize: "14px",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Поділись своєю історією</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ім’я"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="before"
          placeholder="До (наприклад: жив на вулиці...)"
          value={form.before}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="text"
          name="after"
          placeholder="Після (наприклад: знайшов дім...)"
          value={form.after}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <div>
          <label htmlFor="fileInput" style={styles.fileLabel}>
            Фото (опціонально):
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Додати історію
        </button>
      </form>

      <h2 style={styles.heading}>Усі історії</h2>
      <div style={styles.cardsWrapper}>
        {stories.map((story, index) => (
          <div key={index} style={styles.card}>
            {story.img && (
              <img src={story.img} alt={story.name} style={styles.image} />
            )}
            <div style={styles.cardText}>
              <strong>Ім’я:</strong> {story.name}
              <br />
              <strong>До:</strong> {story.before}
              <br />
              <strong>Після:</strong> {story.after}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetStories;
