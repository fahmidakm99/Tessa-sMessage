import { useState } from "react";

interface Milestone {
  date: string;
  event: string;
  image: string;
  note: string;
  audio?: string; // Optional audio
}

const OurStory: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const milestones: Milestone[] = [
    {
      date: "24 April 2023",
      event: "We met for the first time virtually 💕",
      image: "/story/vdocall.png",
      note: "That first call wasn't just 'magical', Just us smiling and giggling like idiots, you in that grey t-shirt. Even then, there was this hidden truth neither of us had spoken yet, we were always meant to be together."
    },
    {
      date: "24 June 2023",
      event: "First Date 🌹",
      image: " /special/om9.jpg",
      note: "Nervous smiles, shy glances, and the sweetest beginning of our real-world love story."
    },
    {
      date: "25 June 2023",
      event: "Engaged 💍",
      image: "/story/IMG_2325.JPG",
      note: "The happiest yes of my life. The moment we promised forever to each other.",
      audio: "/music/savariya-song.mpeg" // 🎵 Add your song here
    },
    {
      date: "6 July 2023",
      event: "Secret dating at Cherai 🌊",
      image:  "/special/om5.jpg",
      note: "Hidden moments, beach waves, laughter, and memories only we know about."
    },
    {
      date: "14 Feb 2024",
      event: "Valentine's Day together ❤️",
      image:    "/us/us24.jpg",
      note: "Our first Valentine’s Day together — filled with love, surprises, and warm hugs."
    },
    {
      date: "3 December 2023",
      event: "It’s our wedding day 🎉",
      image:  "/images/w1.jpg",
      note: "The day our forever officially begins. A dream turning into reality."
    }
  ];

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Story 💖</h1>

      <div style={styles.timeline}>
        {milestones.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.card,
              transform: activeIndex === i ? "scale(1.02)" : "scale(1)"
            }}
          >
            <div
              style={styles.cardHeader}
              onClick={() => toggleCard(i)}
            >
              <div>
                <div style={styles.date}>{m.date}</div>
                <div style={styles.event}>{m.event}</div>
              </div>
              <span style={styles.arrow}>
                {activeIndex === i ? "▲" : "▼"}
              </span>
            </div>

            {activeIndex === i && (
              <div style={styles.expanded}>
                <img src={m.image} alt={m.event} style={styles.image} />
                <p style={styles.note}>{m.note}</p>

                {/* 🎵 Audio Player (only shows if audio exists) */}
                {m.audio && (
                  <audio controls autoPlay style={styles.audio }>
                    <source src={m.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "clamp(20px, 6vw, 80px)",
    textAlign: "center",
    background: "linear-gradient(to bottom, #fff0f5, #ffe6f0)",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', sans-serif"
  },

  title: {
    fontSize: "clamp(26px, 6vw, 42px)",
    color: "#ff4d94",
    marginBottom: "40px"
  },

  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    maxWidth: "700px",
    margin: "0 auto"
  },

  card: {
    backgroundColor: "white",
    padding: "clamp(15px, 4vw, 25px)",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    borderLeft: "6px solid #ff99c8",
    textAlign: "left",
    transition: "all 0.3s ease",
    cursor: "pointer"
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  arrow: {
    fontSize: "18px",
    color: "#ff4d94"
  },

  date: {
    fontWeight: "bold",
    color: "#ff4d94",
    fontSize: "clamp(14px, 4vw, 18px)",
    marginBottom: "5px"
  },

  event: {
    fontSize: "clamp(14px, 4vw, 18px)",
    color: "#555"
  },

  expanded: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  image: {
    width: "100%",
    borderRadius: "15px",
    objectFit: "cover",
    maxHeight: "300px"
  },

  note: {
    lineHeight: "1.6",
    color: "#444"
  },

  audio: {
    width: "100%",
    marginTop: "10px"
  }
};

export default OurStory;
