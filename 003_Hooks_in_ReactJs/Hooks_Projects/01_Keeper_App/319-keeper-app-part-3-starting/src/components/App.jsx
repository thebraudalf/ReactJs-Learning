import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CreateArea from "./CreateArea.jsx";
import Note from "./Note.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes((prevNote) => {
      return prevNote.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNotes}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
