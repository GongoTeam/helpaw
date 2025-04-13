import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://backendhelppaw-production.up.railway.app/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setUserData(res.data);
      } catch (err) {
        setError("Не вдалося завантажити дані профілю");
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm("Ви впевнені, що хочете видалити акаунт?");
    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:5001/api/user/delete", {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.removeItem("token");
      navigate("/login");
    } catch (err) {
      alert("Не вдалося видалити акаунт");
    }
  };

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  const handleViewAll = () => {
    navigate("/activity");
  };

  if (error) return <div style={styles.error}>{error}</div>;
  if (!userData) return <div style={styles.loading}>Завантаження...</div>;

  const isVolunteer = userData.role === "Volunteer";
  const isShelter = userData.role === "Shelter";

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Мій профіль</h2>
      <div style={styles.infoBox}>
        <p>
          <strong>ПІБ:</strong> {userData.fullName || "Не вказано"}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Місто:</strong> {userData.city || "Не вказано"}
        </p>
        <p>
          <strong>Роль:</strong> {isVolunteer ? "Волонтер" : "Притулок"}
        </p>

        <div style={styles.buttonGroup}>
          <button onClick={handleEditProfile} style={styles.button}>
            Редагувати профіль
          </button>
          <button onClick={handleViewAll} style={styles.button}>
            Переглянути всі
          </button>
        </div>

        {isVolunteer && (
          <div style={styles.roleInfo}>
            <p>🔸 Ви можете:</p>
            <ul>
              <li>Зберігати улюблені оголошення</li>
              <li>Передавати знайдених тварин до притулку</li>
            </ul>
          </div>
        )}

        {isShelter && (
          <div style={styles.roleInfo}>
            <p>🔹 Ви можете:</p>
            <ul>
              <li>Приймати запити від волонтерів</li>
              <li>Додавати тварин у базу притулку</li>
            </ul>
          </div>
        )}

        <div style={styles.dangerZone}>
          <button onClick={handleLogout} style={styles.logoutButton}>
            Вийти з акаунту
          </button>
          <button onClick={handleDeleteAccount} style={styles.deleteButton}>
            Видалити акаунт
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

const styles = {
  container: {
    maxWidth: "700px",
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
  buttonGroup: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  button: {
    padding: "10px 16px",
    backgroundColor: "#A8D5BA",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  roleInfo: {
    marginTop: "20px",
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  dangerZone: {
    marginTop: "30px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  logoutButton: {
    padding: "10px 16px",
    backgroundColor: "#A8D5BA",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "10px 16px",
    backgroundColor: "#A8D5BA",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
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
