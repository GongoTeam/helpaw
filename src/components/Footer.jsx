import React from "react";

const Footer = () => {
  const styles = {
    header: {
      backgroundColor: "#4b6653", // темно-зелений
      padding: "20px 40px",
      display: "flex",
      alignItems: "center",
    },
    logo: {
      fontSize: "28px",
      marginRight: "10px",
    },
    title: {
      color: "white",
      fontSize: "24px",
      fontWeight: "500",
    },
  };

  return (
    <header style={styles.header}>
      <span style={styles.logo}>🐾</span>
      <span style={styles.title}>HelPaw</span>
    </header>
  );
};

export default Footer;
