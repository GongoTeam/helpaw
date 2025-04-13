import React, { useEffect, useState } from "react";

const UserActivity = () => {
  const [activity, setActivity] = useState([]);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Імітація завантаження та визначення ролі
    const mockFetch = () => {
      const userRole = localStorage.getItem("role") || "Volunteer"; // Volunteer або Shelter
      setRole(userRole);

      if (userRole === "Volunteer") {
        setActivity([
          { animalName: "Рекс" },
          { animalName: "Мурчик" },
          { animalName: "Барсик" },
        ]);
      } else {
        setActivity([
          { requesterName: "Іван", status: "Очікує" },
          { requesterName: "Оля", status: "Прийнято" },
        ]);
      }

      setLoading(false);
    };

    setTimeout(mockFetch, 500); // імітація затримки
  }, []);

  if (loading) return <div style={styles.loading}>Завантаження...</div>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Моя активність</h2>

      {role === "Volunteer" ? (
        <div>
          <h3>Збережені тварини:</h3>
          <ul>
            {activity.map((item, idx) => (
              <li key={idx}>🐾 {item.animalName}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h3>Запити до притулку:</h3>
          <ul>
            {activity.map((item, idx) => (
              <li key={idx}>
                📩 {item.requesterName} — <strong>{item.status}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserActivity;

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
  loading: {
    textAlign: "center",
    marginTop: "20px",
  },
};
