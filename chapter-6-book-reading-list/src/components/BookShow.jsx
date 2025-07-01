import { useState } from 'react'
import BookEdit from "./BookEdit" 

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false)

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle)
    setShowEdit(false)
  }

  return <div className="book-show">
    <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
    <div>
      {!showEdit ?
        <h3>{book.title}</h3> :
        <BookEdit book={book} onSubmit={handleSubmit}/>
      }
    </div>

    <div className="actions">
      <button className="edit" onClick={() => setShowEdit(!showEdit)}>
        Edit
      </button>
      <button className="delete" onClick={() => onDelete(book.id)}>
        Delete
      </button>
    </div>
  </div>
}

export default BookShow