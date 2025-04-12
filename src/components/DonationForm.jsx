import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("oneTime");
  const navigate = useNavigate();

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "40px",
      maxWidth: "900px",
      margin: "0 auto",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    paw: {
      fontSize: "28px",
    },
    sectionWrapper: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "30px",
      gap: "15px",
    },
    section: {
      border: "1px solid #94b49f",
      borderRadius: "10px",
      padding: "20px",
      width: "45%",
    },
    sectionTitle: {
      backgroundColor: "#94b49f",
      padding: "5px 10px",
      borderRadius: "5px",
      display: "inline-block",
      marginBottom: "20px",
      fontWeight: "bold",
    },
    buttonsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "10px",
      marginBottom: "20px",
    },
    button: {
      padding: "10px",
      border: "1px solid #999",
      borderRadius: "5px",
      cursor: "pointer",
      fontWeight: "bold",
      backgroundColor: "#fff",
    },
    donateButton: {
      padding: "10px 20px",
      backgroundColor: "#94b49f",
      color: "white",
      fontWeight: "bold",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    footer: {
      marginTop: "30px",
      fontSize: "14px",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.heading}>
        ВРЯТУЙ ЖИТТЯ ХВОСТИКУ <span style={styles.paw}>🐾</span>
        <br />
        ЗРОБИ ДОНАТ
      </div>

      <div style={styles.sectionWrapper}>
        {/* Разовий донат */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Разовий донат</div>
          <div style={styles.buttonsGrid}>
            {["50", "100", "200", "500", "1000", "Інша сума"].map((value) => (
              <div
                key={value}
                style={styles.button}
                onClick={() => {
                  setType("oneTime");
                  setAmount(value);
                }}
              >
                {value} UAH
              </div>
            ))}
          </div>
          <button
            style={styles.donateButton}
            onClick={() => navigate("/donate")}
          >
            Задонатити
          </button>
        </div>

        {/* Щомісячний донат */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Щомісячний донат</div>
          <div style={styles.buttonsGrid}>
            {["50", "100", "200", "500", "1000", "Інша сума"].map((value) => (
              <div
                key={value + "-monthly"}
                style={styles.button}
                onClick={() => {
                  setType("monthly");
                  setAmount(value);
                }}
              >
                {value} UAH
              </div>
            ))}
          </div>
          <button
            style={styles.donateButton}
            onClick={() => navigate("/donate")}
          >
            Задонатити
          </button>
        </div>
      </div>

      <div style={styles.footer}>
        Після переказу ви отримаєте лист подяки, а також зможете побачити, як
        саме були використані ваші кошти — бо прозорість для нас важлива.
      </div>
    </div>
  );
};

export default DonationForm;
