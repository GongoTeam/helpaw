import React from "react";
import { FaDog, FaPhoneAlt, FaHome } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaDog size={48} />,
      title: "Вибери тварину",
      description:
        "Знайдіть того, хто чекає саме на вас — перегляньте анкети собак і котів, готових до всиновлення.",
    },
    {
      icon: <FaPhoneAlt size={48} />,
      title: "Зв'яжись з притулком",
      description:
        "Натисніть “Хочу всиновити” — і з вами зв'яжеться представник притулку, щоб відповісти на всі питання.",
    },
    {
      icon: <FaHome size={48} />,
      title: "Забери додому",
      description:
        "Прийдіть знайомитись, і якщо все взаємно — подаруйте тваринці нове життя та справжню родину.",
    },
  ];

  const styles = {
    section: {
      padding: "60px 20px",
      textAlign: "center",
    },
    title: {
      fontSize: "42px",
      fontWeight: "bold",
      marginBottom: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      flexWrap: "wrap",
    },
    paw: {
      fontSize: "30px",
    },
    stepsWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
    },
    stepsRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    },
    stepBox: {
      backgroundColor: "#cce8d8",
      borderRadius: "12px",
      padding: "30px 20px",
      width: "280px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    icon: {
      marginBottom: "20px",
      color: "#000",
    },
    h3: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "12px",
    },
    p: {
      fontSize: "14px",
      color: "#444",
      lineHeight: "1.5",
    },
    arrow: {
      color: "#999",
      margin: "0 10px",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>
        ЯК ЦЕ ПРАЦЮЄ?<span style={styles.paw}>🐾</span>
      </h2>

      <div style={styles.stepsWrapper}>
        <div style={styles.stepsRow}>
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div style={styles.stepBox}>
                <div style={styles.icon}>{step.icon}</div>
                <h3 style={styles.h3}>{step.title}</h3>
                <p style={styles.p}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <HiArrowNarrowRight size={36} style={styles.arrow} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
