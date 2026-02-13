import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";

interface Note {
  id: number;
  message: string;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [input, setInput] = useState("");
  const [showNotes, setShowNotes] = useState(false);

  const BACKEND_URL = "https://couple-backend-5axe.onrender.com";

  // Fetch notes
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

  // Add note
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
      if (!showNotes) setShowNotes(true); // open box automatically
    } catch (err) {
      console.error("Failed to add note:", err);
    }
  };

  // Delete note
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
      <h2>💖 Our Love Notes</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Write something sweet..."
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={addNote} style={styles.addButton}>
          Add
        </button>
      </div>

      {/* Mystery Box */}
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
                <span>{note.message}</span>
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
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff0f5",
    minHeight: "100vh"
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px"
  },
  input: {
    padding: "10px",
    width: "250px",
    borderRadius: "10px",
    border: "1px solid #ff99c8",
    outline: "none"
  },
  addButton: {
    padding: "10px 20px",
    borderRadius: "10px",
    backgroundColor: "#ff4d94",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold"
  },
  mysteryButton: {
    padding: "15px 30px",
    borderRadius: "15px",
    backgroundColor: "#ff99c8",
    color: "white",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer"
  },
  notesBox: {
    marginTop: "20px",
    maxHeight: "300px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    border: "2px dashed #ff99c8",
    backgroundColor: "#fff5f8",
    width: "300px",
    margin: "0 auto"
  },
  noteCard: {
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ff99c8",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Notes;
