import React, { useState } from "react";
import { auth, googleProvider, signInWithPopup } from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);
  const [showRoleSelect, setShowRoleSelect] = useState(true);
  const [role, setRole] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Logged in with Google:", result.user);
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error.message);
      setError(error.message);
    }
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) return setError("Невірний формат email");
    if (password.length < 6)
      return setError("Пароль має містити щонайменше 6 символів");

    if (isRegistering) {
      if (!fullName.trim()) return setError("ПІБ обовʼязкове");
      if (password !== confirmPassword)
        return setError("Паролі не співпадають");

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        await updateProfile(userCredential.user, {
          displayName: fullName,
        });
        console.log("Зареєстровано:", userCredential.user, "Роль:", role);
        navigate("/");
      } catch (error) {
        console.error("Registration error:", error.message);
        setError(error.message);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password,
        );
        console.log("Logged in:", userCredential.user);
        navigate("/");
      } catch (error) {
        console.error("Login error:", error.message);
        setError(error.message);
      }
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
              onClick={() => handleRoleSelection("volunteer")}
            >
              ВОЛОНТЕР
            </button>
            <button
              style={styles.roleButton}
              onClick={() => handleRoleSelection("shelter")}
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
            {isRegistering && (
              <input
                type="text"
                placeholder="ПІБ / Назва"
                style={styles.input}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Пароль"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isRegistering && (
              <input
                type="password"
                placeholder="Підтвердити пароль"
                style={styles.input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}

            <button type="submit" style={styles.button}>
              {isRegistering ? "Зареєструватися" : "Увійти"}
            </button>
          </form>

          {!isRegistering && (
            <>
              <div style={styles.divider}></div>

              <button style={styles.social} onClick={handleGoogleLogin}>
                <img
                  src={"/assets/google-icon.png"}
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
    textAlign: "center",
    background: "white",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  roleButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  container: {
    width: "100%",
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
    marginBottom: "15px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px",
  },
  switchMode: {
    color: "#648f5d",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "14px",
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
  roleBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
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
    transition: "0.3s",
  },
};
