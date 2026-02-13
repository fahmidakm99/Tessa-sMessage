import { useState } from "react";
import type { ChangeEvent } from "react";

const relationshipData: { [key: string]: string } = {
  "first date": "🌹 Our first date on 24 June 2023 was magical! Nervous smiles, shy laughs, and endless joy.",
  "first meeting": "💕 We met virtually on 24 April 2023. That call changed everything!",
  "engaged": "💍 On 25 June 2023, we promised forever to each other.",
  "cherai": "🌊 Secret dating at Cherai on 10 July 2023 – just you, me, and the waves.",
  "valentine": "❤️ First Valentine's together on 14 Feb 2024, full of love and surprises.",
  "wedding": "🎉 Our wedding day is on 3 Dec 2023! Forever begins."
};

const RelationshipAI: React.FC = () => {
  const [input, setInput] = useState("");
  const [responses, setResponses] = useState<string[]>([]);

  const handleSend = () => {
    if (!input.trim()) return;

    const key = input.toLowerCase();
    const reply = Object.keys(relationshipData).find(k => key.includes(k));

    setResponses(prev => [
      ...prev,
      `You: ${input}`,
      `💌 Memory: ${reply ? relationshipData[reply] : "I don't recall that... but every moment with you is special! 🤍"}`
    ]);

    setInput("");
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>AI here.. 💌 Ask About Our Memories</h3>

      <div style={styles.chatBox}>
        {responses.map((r, idx) => (
          <div key={idx} style={styles.chatMessage}>{r}</div>
        ))}
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type a memory keyword..."
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          style={styles.input}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} style={styles.sendButton}>Send</button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: { marginTop: "20px" },
  title: { color: "#ff4d94", marginBottom: "10px", textAlign: "center" },
  chatBox: {
    maxHeight: "250px",
    overflowY: "auto",
    background: "white",
    border: "1px solid #ff99c8",
    borderRadius: "20px",
    padding: "15px",
    marginBottom: "10px"
  },
  chatMessage: { marginBottom: "10px", textAlign: "left", wordBreak: "break-word" },
  inputContainer: { display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" },
  input: {
    flex: 1,
    minWidth: "150px",
    padding: "12px",
    borderRadius: "25px",
    border: "1px solid #ff99c8",
    outline: "none"
  },
  sendButton: {
    padding: "12px 20px",
    borderRadius: "25px",
    background: "linear-gradient(135deg, #ff4d94, #ff99c8)",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default RelationshipAI;
