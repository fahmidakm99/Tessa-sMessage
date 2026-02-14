import { useState } from "react";
import type { ReactNode } from "react";

interface PrivateProps {
  children: ReactNode;
}

const Private: React.FC<PrivateProps> = ({ children }) => {
  const [password, setPassword] = useState<string>("");
  const [access, setAccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const checkPassword = () => {
    if (password.toLowerCase() === "pomegranate") {
      setAccess(true);
    } else {
      setError("Wrong password 💔 Try again!");
      setPassword("");
    }
  };

  if (access) return <>{children}</>;

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>Enter Password 💕</h1>
        <h2 style={styles.subtitle}>What is my favorite fruit ?</h2>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Secret code"
          style={styles.input}
        />
        <br />
        <button onClick={checkPassword} style={styles.button}>
          Enter
        </button>

        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #fff0f5, #ffe6f0)",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "20px",
  },

  box: {
    backgroundColor: "white",
    padding: "40px 30px",
    borderRadius: "25px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },

  title: {
    color: "#ff4d94",
    fontSize: "clamp(22px, 5vw, 30px)",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "clamp(16px, 4vw, 20px)",
    color: "#555",
    marginBottom: "20px",
  },

  input: {
    width: "80%",
    padding: "12px 15px",
    fontSize: "16px",
    borderRadius: "15px",
    border: "1px solid #ff99c8",
    outline: "none",
    marginBottom: "15px",
    textAlign: "center",
  },

  button: {
    padding: "12px 25px",
    fontSize: "16px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(135deg, #ff4d94, #ff99c8)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  },

  error: {
    marginTop: "15px",
    color: "red",
    fontWeight: "bold",
  },
};

export default Private;
