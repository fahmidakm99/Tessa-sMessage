import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import RelationshipAI from "./RelationshipAI";

interface Note {
  id: number;
  message: string;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [input, setInput] = useState("");
  const [showNotes, setShowNotes] = useState(false);

  const BACKEND_URL = "https://couple-backend-5axe.onrender.com";

  const fetchNotes = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/notes`);
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error("Failed to fetch notes:", err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async () => {
    if (!input.trim()) return;

    try {
      await fetch(`${BACKEND_URL}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      setInput("");
      fetchNotes();
      if (!showNotes) setShowNotes(true);
    } catch (err) {
      console.error("Failed to add note:", err);
    }
  };

  const deleteNote = async (id: number) => {
    try {
      await fetch(`${BACKEND_URL}/notes/${id}`, { method: "DELETE" });
      fetchNotes();
    } catch (err) {
      console.error("Failed to delete note:", err);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>💖 Our Love Notes</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Write something sweet..."
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          style={styles.input}
        />
        <button onClick={addNote} style={styles.addButton}>
          Add
        </button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => setShowNotes(!showNotes)}
          style={styles.mysteryButton}
        >
          {showNotes ? "Close Mystery Box 📦" : "Open Mystery Box 📦"}
        </button>

        {showNotes && (
          <div style={styles.notesBox}>
            {notes.length === 0 && <p>No notes yet 💕</p>}
            {notes.map((note) => (
              <div key={note.id} style={styles.noteCard}>
                <span style={styles.noteText}>{note.message}</span>
                <button
                  onClick={() => deleteNote(note.id)}
                  style={styles.deleteButton}
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <RelationshipAI/>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "clamp(20px, 6vw, 60px)",
    fontFamily: "'Segoe UI', sans-serif",
    background: "linear-gradient(to bottom, #fff0f5, #ffe6f0)",
    minHeight: "100vh"
  },

  title: {
    fontSize: "clamp(22px, 5vw, 32px)",
    marginBottom: "20px",
    color: "#ff4d94"
  },

  inputContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap"
  },

  input: {
    padding: "12px",
    width: "clamp(180px, 60vw, 300px)",
    borderRadius: "25px",
    border: "1px solid #ff99c8",
    outline: "none",
    fontSize: "14px"
  },

  addButton: {
    padding: "12px 20px",
    borderRadius: "25px",
    background: "linear-gradient(135deg, #ff4d94, #ff99c8)",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold"
  },

  mysteryButton: {
    padding: "14px 30px",
    borderRadius: "30px",
    background: "#ff99c8",
    color: "white",
    border: "none",
    fontSize: "clamp(14px, 4vw, 18px)",
    fontWeight: "bold",
    cursor: "pointer"
  },

  notesBox: {
    marginTop: "25px",
    maxHeight: "350px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "clamp(15px, 4vw, 25px)",
    borderRadius: "20px",
    border: "2px dashed #ff99c8",
    backgroundColor: "white",
    width: "clamp(250px, 80vw, 450px)",
    marginInline: "auto"
  },

  noteCard: {
    backgroundColor: "#fff5f8",
    padding: "12px 15px",
    borderRadius: "15px",
    border: "1px solid #ff99c8",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px"
  },

  noteText: {
    flex: 1,
    textAlign: "left",
    wordBreak: "break-word"
  },

  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    cursor: "pointer",
    fontWeight: "bold",
    flexShrink: 0
  }
};

export default Notes;
