import React, { useRef, useState } from "react";

const allCats = new Array(9).fill({
  name: "Tosdado",
  age: "1 year",
  img: "https://i.ibb.co/NrRz4z8/cat.png",
});

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const searchInputRef = useRef(null);

  const filteredCats = allCats.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f6f6f6",
      fontFamily: "Arial, sans-serif",
      height: "100vh",
      overflow: "hidden",
    },
    topBar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      borderBottom: "1px solid #ccc",
      backgroundColor: "#f6f6f6",
    },
    logo: {
      color: "green",
      fontWeight: "bold",
      fontSize: "18px",
    },
    search: {
      flex: 1,
      margin: "0 20px",
      padding: "6px 10px",
      border: "1px solid green",
      borderRadius: "5px",
    },
    iconGroup: {
      display: "flex",
      gap: "14px",
      alignItems: "center",
      cursor: "pointer",
    },
    icon: {
      width: "24px",
      height: "24px",
      fill: "#666",
      transition: "fill 0.2s ease",
    },
    iconHover: {
      fill: "#222",
    },
    main: {
      display: "flex",
      flex: 1,
    },
    sidebar: {
      width: "200px",
      border: "2px solid green",
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    lines: {
      width: "40px",
      height: "2px",
      backgroundColor: "black",
      margin: "6px 0",
    },
    content: {
      flex: 1,
      padding: "20px",
      overflowY: "auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
      justifyItems: "center",
    },
    card: {
      backgroundColor: "#fff",
      border: "1px solid #999",
      borderRadius: "10px",
      width: "150px",
      padding: "10px",
      textAlign: "center",
      boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    },
    img: {
      width: "100%",
      height: "auto",
      borderRadius: "6px",
    },
    name: {
      fontWeight: "bold",
      marginTop: "8px",
    },
    age: {
      fontSize: "13px",
      color: "#666",
    },
    modal: {
      position: "fixed",
      top: "30%",
      left: "50%",
      transform: "translate(-50%, -30%)",
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      zIndex: 1000,
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      zIndex: 999,
    },
  };

  return (
    <div style={styles.page}>
      {/* Top bar */}
      <div style={styles.topBar}>
        <div style={styles.logo}>HelPaw</div>
        <input
          type="text"
          placeholder="search"
          style={styles.search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={searchInputRef}
        />
        <div style={styles.iconGroup}>
          {/* Search Icon */}
          <svg
            onClick={() => searchInputRef.current?.focus()}
            xmlns="http://www.w3.org/2000/svg"
            style={styles.icon}
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" />
          </svg>

          {/* Profile Icon */}
          <svg
            onClick={() => setShowProfile(true)}
            xmlns="http://www.w3.org/2000/svg"
            style={styles.icon}
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V21h19.2v-1.8c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>
      </div>

      {/* Sidebar & content */}
      <div style={styles.main}>
        <aside style={styles.sidebar}>
          <div style={styles.lines}></div>
          <div style={styles.lines}></div>
          <div style={styles.lines}></div>
        </aside>

        <div style={styles.content}>
          <div style={styles.grid}>
            {filteredCats.map((cat, index) => (
              <div key={index} style={styles.card}>
                <img src={cat.img} alt={cat.name} style={styles.img} />
                <div style={styles.name}>{cat.name}</div>
                <div style={styles.age}>{cat.age}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal profile */}
      {showProfile && (
        <>
          <div
            style={styles.modalOverlay}
            onClick={() => setShowProfile(false)}
          />
          <div style={styles.modal}>
            <h3>👤 Профіль</h3>
            <p>Тут буде інформація про користувача.</p>
            <button onClick={() => setShowProfile(false)}>Закрити</button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
