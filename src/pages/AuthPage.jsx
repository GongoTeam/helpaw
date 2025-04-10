import React, { useState } from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
  signInWithPopup,
} from "../firebase/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import googleIcon from "../assets/google-icon.png";

const AuthPage = () => {
  const navigate = useNavigate();

  const [isRegistering, setIsRegistering] = useState(false);
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

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log("Logged in with Facebook:", result.user);
      navigate("/");
    } catch (error) {
      console.error("Facebook login error:", error.message);
      setError(error.message);
    }
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      return setError("Invalid email format");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    if (isRegistering) {
      if (!fullName.trim()) return setError("Full name is required");
      if (password !== confirmPassword)
        return setError("Passwords do not match");

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        await updateProfile(userCredential.user, { displayName: fullName });
        console.log("Registered:", userCredential.user);
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

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <span style={styles.logo}>HelPaw</span>
      </div>
      <div style={styles.container}>
        <h2>{isRegistering ? "Sign Up" : "Sign In"}</h2>

        {error && <div style={styles.error}>{error}</div>}

        <form onSubmit={handleEmailAuth}>
          {isRegistering && (
            <input
              type="text"
              placeholder="Full Name"
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
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {isRegistering && (
            <input
              type="password"
              placeholder="Confirm Password"
              style={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          <button style={styles.button} type="submit">
            {isRegistering ? "Create Account" : "Continue"}
          </button>
        </form>

        <div
          style={styles.switchMode}
          onClick={() => {
            setIsRegistering(!isRegistering);
            setError("");
          }}
        >
          {isRegistering
            ? "Already have an account? Sign in"
            : "Don't have an account? Sign Up"}
        </div>

        <div style={styles.divider}></div>

        <button style={styles.social} onClick={handleGoogleLogin}>
          <img src={googleIcon} alt="Google" style={styles.icon} />
          Continue with Google
        </button>

        <button style={styles.social} onClick={handleFacebookLogin}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt="Facebook"
            style={styles.icon}
          />
          Continue with Facebook
        </button>
      </div>
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
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#648f5d",
    padding: "1rem",
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
  },
  container: {
    maxWidth: "400px",
    width: "90%",
    margin: "auto",
    marginTop: "2rem",
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
  logo: {
    marginLeft: "10px",
  },
  error: {
    color: "red",
    marginBottom: "10px",
    fontSize: "14px",
  },
};
