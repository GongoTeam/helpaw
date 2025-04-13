import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://localhost:5001/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(res.data);
      } catch (err) {
        setError("Не вдалося завантажити дані профілю");
      }
    };

    fetchUserData();
  }, []);

  if (error) return <div style={styles.error}>{error}</div>;

  if (!userData) return <div style={styles.loading}>Завантаження...</div>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Профіль</h2>
      <div style={styles.infoBox}>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Роль:</strong>{" "}
          {userData.role === "Volunteer" ? "Волонтер" : "Притулок"}
        </p>
        <p>
          <strong>ПІБ:</strong> {userData.fullName || "Не вказано"}
        </p>
        <p>
          <strong>Місто:</strong> {userData.city || "Не вказано"}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "sans-serif",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
    textAlign: "center",
  },
  infoBox: {
    fontSize: "16px",
    lineHeight: "1.6",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: "20px",
  },
  loading: {
    textAlign: "center",
    marginTop: "20px",
  },
};
