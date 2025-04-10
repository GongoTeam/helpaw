import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#F8EFD4", padding: "1rem", marginTop: "2rem" }}
    >
      <p>&copy; {new Date().getFullYear()} Helpaw</p>
    </footer>
  );
};

export default Footer;
