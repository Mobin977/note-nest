import { useEffect, useState } from "react";
import "./App.css";

const categories = [
  "General",
  "Work",
  "Study",
  "Personal",
  "Ideas",
  "Important",
];

function App() {
  const [notes, setNotes] = useState(() => {
    try {
      const savedNotes = localStorage.getItem("notenest-notes");
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (error) {
      console.error("Failed to load notes:", error);
      return [];
    }
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    localStorage.setItem("notenest-notes", JSON.stringify(notes));
  }, [notes]);

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      alert("Please enter a note title.");
      return;
    }

    if (!content.trim()) {
      alert("Please enter note content.");
      return;
    }

    if (editingId !== null) {
      setNotes((currentNotes) =>
        currentNotes.map((note) =>
          note.id === editingId
            ? {
                ...note,
                title: title.trim(),
                content: content.trim(),
                category,
              }
            : note
        )
      );
    } else {
      const newNote = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        category,
        pinned: false,
        createdAt: new Date().toLocaleDateString("en-IN"),
      };

      setNotes((currentNotes) => [newNote, ...currentNotes]);
    }

    clearForm();
  }

  function clearForm() {
    setTitle("");
    setContent("");
    setCategory("General");
    setEditingId(null);
  }

  function deleteNote(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmed) {
      return;
    }

    setNotes((currentNotes) =>
      currentNotes.filter((note) => note.id !== id)
    );

    if (editingId === id) {
      clearForm();
    }
  }

  function editNote(note) {
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
    setEditingId(note.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function togglePin(id) {
    setNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              pinned: !note.pinned,
            }
          : note
      )
    );
  }

  // Search notes
  const filteredNotes = notes
    .filter((note) => {
      const searchText = search.trim().toLowerCase();

      const noteTitle = String(note.title || "").toLowerCase();
      const noteContent = String(note.content || "").toLowerCase();
      const noteCategory = String(note.category || "").toLowerCase();

      if (searchText === "") {
        return true;
      }

      return (
        noteTitle.includes(searchText) ||
        noteContent.includes(searchText) ||
        noteCategory.includes(searchText)
      );
    })
    .sort((a, b) => Number(b.pinned) - Number(a.pinned));

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div>
            <h1>📝 NoteNest</h1>

            <p>
              Capture your ideas, thoughts, and important notes.
            </p>
          </div>

          <div className="note-count">
            <span>{notes.length}</span>
            <small>Total Notes</small>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="container">
        {/* Create/Edit Note */}
        <section className="note-form-card">
          <div className="section-heading">
            <div>
              <h2>
                {editingId !== null
                  ? "Edit Note"
                  : "Create a Note"}
              </h2>

              <p>
                {editingId !== null
                  ? "Update your existing note."
                  : "Write down something important."}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="form-group">
              <label htmlFor="title">Note Title</label>

              <input
                id="title"
                type="text"
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
                placeholder="Enter note title"
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label htmlFor="category">Category</label>

              <select
                id="category"
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value)
                }
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Content */}
            <div className="form-group">
              <label htmlFor="content">Note Content</label>

              <textarea
                id="content"
                value={content}
                onChange={(event) =>
                  setContent(event.target.value)
                }
                placeholder="Write your note here..."
                rows="6"
              />
            </div>

            {/* Buttons */}
            <div className="form-buttons">
              <button type="submit" className="primary-btn">
                {editingId !== null
                  ? "Update Note"
                  : "Add Note"}
              </button>

              {editingId !== null && (
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={clearForm}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Notes Section */}
        <section className="notes-section">
          <div className="notes-header">
            <div>
              <h2>Your Notes</h2>

              <p>
                {filteredNotes.length}{" "}
                {filteredNotes.length === 1
                  ? "note"
                  : "notes"}{" "}
                found
              </p>
            </div>

            {/* Search */}
            <div className="search-box">
              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="🔍 Search notes..."
                aria-label="Search notes"
              />
            </div>
          </div>

          {/* Empty State */}
          {filteredNotes.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📝</div>

              <h3>
                {search
                  ? "No notes found"
                  : "No notes yet"}
              </h3>

              <p>
                {search
                  ? `No notes match "${search}". Try another keyword.`
                  : "Create your first note using the form above."}
              </p>
            </div>
          ) : (
            /* Notes */
            <div className="notes-grid">
              {filteredNotes.map((note) => (
                <article
                  className="note-card"
                  key={note.id}
                >
                  {/* Top */}
                  <div className="note-card-top">
                    <span className="category-badge">
                      {note.category}
                    </span>

                    <button
                      type="button"
                      className={`pin-btn ${
                        note.pinned ? "pinned" : ""
                      }`}
                      onClick={() =>
                        togglePin(note.id)
                      }
                      title={
                        note.pinned
                          ? "Unpin note"
                          : "Pin note"
                      }
                    >
                      {note.pinned ? "📌" : "📍"}
                    </button>
                  </div>

                  {/* Title */}
                  <h3>{note.title}</h3>

                  {/* Content */}
                  <p className="note-content">
                    {note.content}
                  </p>

                  {/* Date */}
                  <div className="note-footer">
                    <span>
                      Created: {note.createdAt}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="note-actions">
                    <button
                      type="button"
                      className="edit-btn"
                      onClick={() =>
                        editNote(note)
                      }
                    >
                      ✏️ Edit
                    </button>

                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() =>
                        deleteNote(note.id)
                      }
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          NoteNest • Built with React + JavaScript
        </p>
      </footer>
    </div>
  );
}

export default App;