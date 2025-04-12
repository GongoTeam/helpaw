import React from "react";

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "60px 20px",
    backgroundColor: "#fff",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "40px",
    lineHeight: "1.2",
  },
  pawImage: {
    width: "30px",
    height: "30px",
    margin: "0 8px",
    verticalAlign: "top",
    transform: "rotate(10deg)",
  },
  cardsWrapper: {
    display: "flex",
    marginRight: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "60px",
  },
  card: {
    width: "200px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#b8dbc4",
    textAlign: "left",
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
    lineHeight: "1.4",
  },
};

const stories = [
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
  {
    name: "Нейт",
    before: "боявся людей, жив на вулиці",
    after: "став улюбленцем родини, обожнює прогулянки і спить на дивані",
    img: "/assets/cat1.png",
  },
  {
    name: "Кері",
    before: "боявся людей, жив на вулиці",
    after: "став улюбленцем родини, обожнює прогулянки і спить на дивані",
    img: "/assets/cat2.png",
  },
];

const Stories = () => {
  return (
    <div style={styles.container}>
      <div style={styles.heading}>
        ІСТОРІЇ ТИХ, ХТО
        <img src="/assets/paw.png" alt="Paw" style={styles.pawImage} />
        <br />
        ЗНАЙШОВ ДІМ
      </div>

      <div style={styles.cardsWrapper}>
        {stories.map((story, index) => (
          <div key={index} style={styles.card}>
            <img src={story.img} alt={story.name} style={styles.image} />
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

export default Stories;
