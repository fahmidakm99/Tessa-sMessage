import { useState } from "react";
import Countdown from "../components/Countdown";

const Home: React.FC = () => {
  const [openLetter, setOpenLetter] = useState<boolean>(false);

  return (
    <div style={styles.container}>
      <h1>Ajnu ❤️ Pammini</h1>
      <p>Our journey started on 24 April 2023 💕</p>

      <Countdown />

      <p style={{ marginTop: "20px" }}>Alhamdulilah 🤍</p>
      <p>I love you moreee Ajnuuu 💖</p>

      {/* Button to open letter */}
      <button
        style={styles.openButton}
        onClick={() => setOpenLetter(true)}
      >
        Open Your Letter 💌
      </button>

      {/* Letter Box */}
      {openLetter && (
        <div style={styles.letterBox}>
          <h2 style={styles.letterTitle}>💌 For You</h2>
          <p style={styles.letterText}>
            My dearest Ajnu,
            <br /><br />
            Every single day with you feels like a blessing I never want to lose.
            From the smallest laughs to the biggest dreams, everything feels
            better because you are beside me.
            <br /><br />
            Thank you for loving me, supporting me, and choosing me every day.
            I promise to stand by you, grow with you, and love you more than
            yesterday, but less than tomorrow.
            <br /><br />
            Forever yours 🤍
          </p>
        </div>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
    paddingBottom: "60px"
  },
  openButton: {
    marginTop: "30px",
    padding: "12px 25px",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "#ff4d94",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  },
  letterBox: {
    marginTop: "40px",
    maxWidth: "600px",
    marginInline: "auto",
    padding: "30px",
    borderRadius: "15px",
    backgroundColor: "#fff5f8",
    border: "1px solid #ffccd9",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
  },
  letterTitle: {
    marginBottom: "20px",
    color: "#ff4d94"
  },
  letterText: {
    lineHeight: "1.8",
    fontSize: "16px",
    color: "#444"
  }
};

export default Home;
