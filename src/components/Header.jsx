import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#A8D5BA", padding: "1rem" }}>
      <nav>
        <Link to="/">Головна</Link> | <Link to="/login">Увійти</Link>
      </nav>
    </header>
  );
};

export default Header;
