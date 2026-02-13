const OurStory: React.FC = () => {
  const milestones = [
    { date: "24 April 2023", event: "We met for the first time Virtually💕" },
    { date: "24 June 2023", event: "First Date 🌹" },
    { date: "25 june 2023", event: "Engaged" },
    { date: "10 july 2023", event: "Secret dating at cheraii" },
    { date: "3 December 2024", event: "Its our wedding day.. 🎉" },
    { date: "14 Feb 2024", event: "Valentine's Day together ❤️" }
  ];

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Our Story</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {milestones.map((m, i) => (
          <li key={i} style={{ margin: "20px 0" }}>
            <strong>{m.date}:</strong> {m.event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurStory;
