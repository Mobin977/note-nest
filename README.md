# 📝 NoteNest

A modern and responsive **Notes Management Application** built with **React and JavaScript**. NoteNest allows users to create, edit, delete, search, categorize, and pin notes while automatically saving data in the browser using LocalStorage.

## 🌐 Live Demo

https://mobin977.github.io/note-nest/

## 📂 GitHub Repository

https://github.com/Mobin977/note-nest

---

## ✨ Features

- 📝 Create new notes
- ✏️ Edit existing notes
- 🗑️ Delete notes
- 🔍 Search notes instantly
- 📌 Pin and unpin important notes
- 🏷️ Organize notes using categories
- 💾 Automatic LocalStorage persistence
- 📊 Display total number of notes
- 📱 Fully responsive design
- 🔎 Search by title, content, or category
- ⚡ Fast React-based interface
- 🧹 Clean and simple user interface

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- HTML5
- CSS3

### Development Tools

- Vite
- ESLint
- npm
- Git
- GitHub

### Browser Storage

- LocalStorage API

---

## 🧠 Application Features

### Create Notes

Users can create notes by entering:

- Note title
- Note category
- Note content

### Edit Notes

Existing notes can be edited and updated without creating a duplicate note.

### Delete Notes

Users can delete unwanted notes with a confirmation dialog.

### Search Notes

The search functionality allows users to search across:

- Note title
- Note content
- Note category

Search is case-insensitive.

### Pin Notes

Important notes can be pinned. Pinned notes automatically appear before regular notes.

### Categories

Notes can be organized into:

- General
- Work
- Study
- Personal
- Ideas
- Important

### LocalStorage

Notes are stored in the browser using the LocalStorage API, so the notes remain available after refreshing the page.

---

## 📁 Project Structure

```text
note-nest/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Mobin977/note-nest.git
```

### 2. Navigate to the project

```bash
cd note-nest
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local Vite URL shown in your terminal, usually:

```text
http://localhost:5173/
```

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔍 Search Example

Users can search for a keyword such as:

```text
React
```

The application searches the note's:

```text
Title
Content
Category
```

and displays matching notes instantly.

---

## 💾 Data Persistence

NoteNest uses the browser's **LocalStorage API**.

Notes are automatically saved whenever the notes collection changes.

This means users can:

1. Create a note
2. Refresh the browser
3. Return to the application
4. Continue using their saved notes

No external database is required for this project.

---

## 📱 Responsive Design

NoteNest is designed to work across:

- 💻 Desktop
- 💻 Laptop
- 📱 Mobile
- 📲 Tablet

The layout automatically adapts to different screen sizes.

---

## 🧪 Testing Checklist

Before deployment, verify:

- [x] Create note
- [x] Edit note
- [x] Delete note
- [x] Search by title
- [x] Search by content
- [x] Search by category
- [x] Pin note
- [x] Unpin note
- [x] LocalStorage persistence
- [x] Responsive layout
- [x] Production build

---

## 📚 What I Learned

Building NoteNest helped practice:

- React components
- React `useState`
- React `useEffect`
- Controlled form inputs
- Array methods such as `map`, `filter`, and `sort`
- CRUD operations
- Browser LocalStorage
- Search and filtering
- Conditional rendering
- Responsive CSS
- Vite
- ESLint
- Git and GitHub
- Production builds

---

## 🚀 Future Improvements

Possible future versions could include:

- 🌙 Dark mode
- ☁️ Cloud synchronization
- 🔐 User authentication
- 🗄️ MongoDB database
- 🔗 Backend API
- 🏷️ Custom tags
- 📅 Note reminders
- 📤 Export notes
- 📥 Import notes
- 🔒 Private notes
- 🔄 Real-time synchronization

---

## 👨‍💻 Author

**Shaik Mobin**

GitHub:
https://github.com/Mobin977

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

**NoteNest — Simple notes. Organized thoughts. 🚀**
