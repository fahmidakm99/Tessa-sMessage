import React, { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  // Fetch notes from backend
  const fetchNotes = async () => {
    const res = await fetch("https://couple-backend-5axe.onrender.com/notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add note
  const addNote = async () => {
    if (!input.trim()) return;

    await fetch("https://couple-backend-5axe.onrender.com/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input })
    });

    setInput("");
    fetchNotes(); // refresh notes
  };

  // Delete note
  const deleteNote = async (id) => {
    await fetch(`https://couple-backend-5axe.onrender.com/notes/${id}`, {
      method: "DELETE"
    });

    fetchNotes(); // refresh notes
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>💖 Our Notes</h2>

      <input
        type="text"
        placeholder="Write something sweet..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginRight: "10px"
        }}
      />

      <button onClick={addNote} style={{ padding: "10px" }}>
        Add
      </button>

      <div style={{ marginTop: "20px" }}>
        {notes.map((note) => (
          <div
            key={note.id}
            style={{
              background: "#ffe6f0",
              padding: "10px",
              margin: "10px auto",
              width: "300px",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span>{note.message}</span>
            <button
              onClick={() => deleteNote(note.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
