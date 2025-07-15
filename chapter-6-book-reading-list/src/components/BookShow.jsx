import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>
        {!showEdit ? (
          <h3>{book.title}</h3>
        ) : (
          <BookEdit book={book} onSubmit={handleSubmit} />
        )}
      </div>

      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;

