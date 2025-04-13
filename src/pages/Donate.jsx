import React from "react";

const Donate = () => {
  return (
    <div
      className="donate-page"
      style={{
        backgroundImage: "url('/assets/donateBg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        className="overlay"
        style={{
          backgroundColor: "rgba(0, 80, 50, 0.7)",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "16px" }}>
          Допоможи безпритульним тваринам
        </h1>
        <p style={{ fontSize: "18px", marginBottom: "32px" }}>
          Твій донат змінює життя! Кожна гривня — це крок до порятунку.
        </p>
        <div
          className="qr-section"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/assets/qr-code.png"
            alt="QR code for donation"
            style={{
              width: "220px",
              height: "auto",
              marginBottom: "16px",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
            }}
          />
          <p style={{ marginBottom: "12px", fontSize: "16px" }}>
            Скануй QR-код або переказуй за посиланням нижче:
          </p>
          <a
            href="https://send.monobank.ua/jar/85iN5uicrP"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#A8D5BA",
              color: "#003a1b",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#92c3a5")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#A8D5BA")}
          >
            Підтримати зараз
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donate;
