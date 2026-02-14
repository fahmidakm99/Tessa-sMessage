import { useState } from "react";
import Countdown from "../components/Countdown";

const Home: React.FC = () => {
  const [openLetter, setOpenLetter] = useState<boolean>(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Echay ❤️ Tessa</h1>

      <p style={styles.subtitle}>
        Our journey started on 15 February 2022 💕
      </p>

      <Countdown />

      <p style={styles.blessing}>Alhamdulilah 🤍</p>

      {/* Button */}
      <button
        style={styles.openButton}
        onClick={() => setOpenLetter(!openLetter)}
      >
        {openLetter ? "Close Letter 💕" : "Open Your Letter 💌"}
      </button>

      {/* Letter */}
      {openLetter && (
        <div style={styles.letterBox}>
          <h2 style={styles.letterTitle}>💌 For You</h2>

          <p style={styles.letterText}>
            Dear Echay,
            <br /><br />
            Four years ago we started this journey,
            and every day since has been a gift. 
            These last four years has been the most 
            beautiful chapter of my life."
            <br /><br />
            Thankyou for being my partner, my best friend 
            and my home. Happy Anniversary to the person who 
            makes my heart full.
            <br /><br />
             I love you always 🤍
             Ami
          </p>
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "clamp(30px, 6vw, 100px) 20px",
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #fff0f5, #ffe6f0)"
  },

  title: {
    fontSize: "clamp(28px, 6vw, 48px)",
    color: "#ff4d94",
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "clamp(16px, 4vw, 20px)",
    color: "#666",
    marginBottom: "25px"
  },

  blessing: {
    marginTop: "25px",
    fontSize: "clamp(16px, 4vw, 20px)"
  },

  loveText: {
    fontSize: "clamp(18px, 5vw, 22px)",
    fontWeight: 500,
    marginBottom: "20px"
  },

  openButton: {
    marginTop: "25px",
    padding: "12px 30px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(135deg, #ff4d94, #ff99c8)",
    color: "white",
    fontSize: "clamp(14px, 4vw, 16px)",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },

  letterBox: {
    marginTop: "40px",
    maxWidth: "700px",
    marginInline: "auto",
    padding: "clamp(20px, 5vw, 40px)",
    borderRadius: "20px",
    backgroundColor: "white",
    border: "1px solid #ffccd9",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    animation: "fadeIn 0.5s ease-in-out"
  },

  letterTitle: {
    marginBottom: "20px",
    color: "#ff4d94",
    fontSize: "clamp(20px, 5vw, 28px)"
  },

  letterText: {
    lineHeight: "1.8",
    fontSize: "clamp(14px, 4vw, 18px)",
    color: "#444"
  }
};

export default Home;
