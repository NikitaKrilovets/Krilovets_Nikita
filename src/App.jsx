import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  // GET
  const fetchBooks = async () => {
    const response = await fetch("http://localhost:3001/books");
    const data = await response.json();
    setBooks(data);
  };

  // POST
  const addBook = async (book) => {
    const response = await fetch("http://localhost:3001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    const newBook = await response.json();

    setBooks([...books, newBook]);
  };

  // DELETE
  const deleteBook = async (id) => {
    await fetch(`http://localhost:3001/books/${id}`, {
      method: "DELETE",
    });

    setBooks(books.filter((book) => book.id !== id));
  };

  // Пошук
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />

      <BookForm onAdd={addBook} />

      <input
        type="text"
        placeholder="Пошук книги..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <BookList
        books={filteredBooks}
        onDelete={deleteBook}
      />

      <Footer />
    </div>
  );
}

export default App;