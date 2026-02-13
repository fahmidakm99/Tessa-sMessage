import { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const [daysTogether, setDaysTogether] = useState<number>(0);
  const [daysToAnniversary, setDaysToAnniversary] = useState<number>(0);

  // Function to calculate days of relationship
  const getDaysOfRelationship = () => {
    const today = new Date();
    const startDate = new Date("2023-04-24"); // Relationship start date
    const diffInMs = today.getTime() - startDate.getTime();
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  };

  // Function to calculate days until next anniversary
  const getDaysUntilAnniversary = () => {
    const today = new Date();
    const currentYear = today.getFullYear();

    // Target: December 3rd
    let anniversary = new Date(currentYear, 11, 3); // 0-indexed months

    // If anniversary has passed this year, set to next year
    if (today > anniversary) {
      anniversary.setFullYear(currentYear + 1);
    }

    const diffInMs = anniversary.getTime() - today.getTime();
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  };

  useEffect(() => {
    // Initialize once
    setDaysTogether(getDaysOfRelationship());
    setDaysToAnniversary(getDaysUntilAnniversary());

    // Update every day at midnight
    const interval = setInterval(() => {
      setDaysTogether(getDaysOfRelationship());
      setDaysToAnniversary(getDaysUntilAnniversary());
    }, 1000 * 60 * 60); // Update every hour (more efficient than every second)

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <p>💖 Days of Relationship: {daysTogether}</p>
      <p>🎉 Days Until Wedding Anniversary: {daysToAnniversary}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginTop: "20px",
    fontSize: "22px",
    color: "#ff4d94",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    textAlign: "center"
  }
};

export default Countdown;
