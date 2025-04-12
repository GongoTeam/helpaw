import React from "react";
import { useNavigate } from "react-router-dom";

const HappyStory = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const styles = {
    container: {
      maxWidth: "100%",
      margin: "0 auto",
      padding: "40px 20px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      backgroundImage: "url(/assets/happy.png)",
      backgroundSize: "cover",
      backgroundPosition: "top",
      height: "673px",
      backgroundRepeat: "no-repeat",
      borderRadius: "8px",
      position: "relative",
      color: "#fff",
      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.4)",
      borderRadius: "8px",
      zIndex: 0,
    },
    content: {
      position: "relative",
      zIndex: 1,
    },
    title: {
      fontSize: "28px",
      marginTop: "300px",
      marginBottom: "15px",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: "18px",
      marginBottom: "30px",
      fontWeight: "bold",
    },
    divider: {
      height: "2px",
      backgroundColor: "rgba(255,255,255,0.3)",
      margin: "25px 0",
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    submitButton: {
      backgroundColor: "#6ba586",
      color: "white",
      border: "none",
      padding: "12px 30px",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "4px",
      transition: "all 0.3s",
      fontWeight: "bold",
      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    },
    submitButtonHover: {
      backgroundColor: "#6ba586",
      transform: "translateY(-2px)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.title}>ТЕЖ МАЄШ ЩАСЛИВУ ІСТОРІЮ?</h1>
        <p style={styles.subtitle}>
          <strong>
            РОЗКАЖИ НАМ СВОЮ — ВОНА МОЖЕ КОГОСЬ НАДИХНУТИ НА ДОБРУ СПРАВУ.
          </strong>
        </p>

        <div style={styles.divider}></div>

        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            style={styles.submitButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor =
                styles.submitButtonHover.backgroundColor;
              e.target.style.transform = styles.submitButtonHover.transform;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor =
                styles.submitButton.backgroundColor;
              e.target.style.transform = "none";
            }}
            onClick={() => navigate("/stories")}
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
};

export default HappyStory;
