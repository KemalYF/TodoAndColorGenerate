import { useState, useEffect } from "react";

import "../App.css";

function Todo() {
  useEffect(() => {
    document.title = "Todo App";
  });

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [inputNote, setInputNote] = useState("");

  function handleInputChange(e) {
    setInputNote(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputNote.trim() !== "") {
      const newNote = {
        id: new Date().getTime(),
        text: inputNote,
      };

      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));

      setInputNote("");
    }
  }

  function handleDeleteNote(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }

  return (
    <div className="App">
      <h1>Notes</h1>
      <form className="note-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a note"
          name=""
          id=""
          value={inputNote}
          onChange={handleInputChange}
        />
        <button className="add-btn">Add</button>
      </form>

      <div className="note-list">
        {notes.map((note) => (
          <div className="note-item" key={note.id}>
            {note.text}
            <button
              onClick={() => handleDeleteNote(note.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
