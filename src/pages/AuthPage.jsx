import React, { useState } from "react";
import { auth, googleProvider, signInWithPopup } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthPage = () => {
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);
  const [showRoleSelect, setShowRoleSelect] = useState(true);
  const [role, setRole] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) return setError("Невірний формат email");
    if (password.length < 6) return setError("Мінімум 6 символів у паролі");

    try {
      if (isRegistering) {
        if (!role) return setError("Оберіть роль");

        await createUserWithEmailAndPassword(auth, email, password);

        await axios.post("http://localhost:5001/api/auth/register", {
          email,
          password,
          role,
        });

        setIsRegistering(false);
        setShowRoleSelect(false);
        setEmail("");
        setPassword("");
        return setError("Реєстрація успішна. Увійдіть.");
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    if (!role) {
      return setError("Оберіть роль перед входом через Google");
    }

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const googleEmail = result.user.email;

      const res = await axios.post(
        "http://localhost:5001/api/auth/google-login",
        {
          email: googleEmail,
          role,
        },
      );

      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setShowRoleSelect(false);
    setIsRegistering(true);
  };

  return (
    <div style={styles.wrapper}>
      {showRoleSelect ? (
        <div style={styles.roleBox}>
          <h2 style={styles.roleTitle}>ХТО ТИ?</h2>
          <div style={styles.roleButtons}>
            <button
              style={styles.roleButton}
              onClick={() => handleRoleSelection("Volunteer")}
            >
              ВОЛОНТЕР
            </button>
            <button
              style={styles.roleButton}
              onClick={() => handleRoleSelection("Shelter")}
            >
              ПРИТУЛОК
            </button>
          </div>
        </div>
      ) : (
        <div style={styles.container}>
          <h2>{isRegistering ? "Реєстрація" : "Вхід"}</h2>
          {error && <div style={styles.error}>{error}</div>}

          <form onSubmit={handleEmailAuth}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              {isRegistering ? "Зареєструватися" : "Увійти"}
            </button>
          </form>

          {!isRegistering && (
            <>
              <div style={styles.divider}></div>
              <button onClick={handleGoogleLogin} style={styles.social}>
                <img
                  src="/assets/google-icon.png"
                  alt="Google"
                  style={styles.icon}
                />
                Продовжити з Google
              </button>
            </>
          )}

          <div
            style={styles.switchMode}
            onClick={() => {
              if (isRegistering) {
                setIsRegistering(false);
                setShowRoleSelect(false);
              } else {
                setShowRoleSelect(true);
                setIsRegistering(true);
              }
              setError("");
            }}
          >
            {isRegistering
              ? "Вже маєш акаунт? Увійти"
              : "Не маєш акаунту? Реєстрація"}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;

const styles = {
  wrapper: {
    background: "#f4f4f4",
    minHeight: "100vh",
    fontFamily: "sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  roleBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
  roleTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  roleButtons: {
    display: "flex",
    gap: "20px",
  },
  roleButton: {
    padding: "15px 30px",
    border: "2px solid #648f5d",
    backgroundColor: "#fff",
    color: "#333",
    fontWeight: "bold",
    fontSize: "14px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  container: {
    maxWidth: "400px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  input: {
    width: "90%",
    padding: "10px",
    margin: "10px 0",
    border: "2px solid #648f5d",
    borderRadius: "6px",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#648f5d",
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  switchMode: {
    color: "#648f5d",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  },
  divider: {
    height: "1px",
    background: "#ccc",
    width: "100%",
    margin: "20px 0",
  },
  social: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    border: "1px solid #333",
    borderRadius: "6px",
    backgroundColor: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
  error: {
    color: "red",
    marginBottom: "10px",
    fontSize: "14px",
  },
};
