import Book from "./Book";
export default function Library({ books }) {
  return (
    <div>
      <h3>This is my private Library.</h3>
      <p>Book Collection: {books.length}</p>
      <p>Address:</p>
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </ul>
    </div>
  );
}
