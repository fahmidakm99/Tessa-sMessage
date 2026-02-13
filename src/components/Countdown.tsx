import { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const [daysTogether, setDaysTogether] = useState<number>(0);
  const [daysToAnniversary, setDaysToAnniversary] = useState<number>(0);

  const getDaysOfRelationship = () => {
    const today = new Date();
    const startDate = new Date("2023-04-24");
    const diffInMs = today.getTime() - startDate.getTime();
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  };

  const getDaysUntilAnniversary = () => {
    const today = new Date();
    const currentYear = today.getFullYear();

    let anniversary = new Date(currentYear, 11, 3);

    if (today > anniversary) {
      anniversary.setFullYear(currentYear + 1);
    }

    const diffInMs = anniversary.getTime() - today.getTime();
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  };

  useEffect(() => {
    const update = () => {
      setDaysTogether(getDaysOfRelationship());
      setDaysToAnniversary(getDaysUntilAnniversary());
    };

    update();

    const interval = setInterval(update, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <p style={styles.text}>
          💖 Days of Relationship:
          <span style={styles.number}> {daysTogether}</span>
        </p>

        <p style={styles.text}>
          🎉 Days Until Wedding Anniversary:
          <span style={styles.number}> {daysToAnniversary}</span>
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
  },

  card: {
    width: "100%",
    maxWidth: "500px",
    padding: "clamp(16px, 4vw, 30px)",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #fff0f5, #ffe6f0)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  text: {
    fontSize: "clamp(16px, 4vw, 24px)",
    margin: "10px 0",
    color: "#ff4d94",
    wordWrap: "break-word",
  },

  number: {
    fontWeight: "bold",
    fontSize: "clamp(20px, 5vw, 28px)",
  },
};

export default Countdown;
