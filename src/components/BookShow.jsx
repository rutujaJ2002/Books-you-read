import React, { useState} from "react";
import useBooksContext from "../hooks/useBooksContext";
import BookEdit from "./BookEdit";

const BookShow = ({book})=>{

    const { deleteBook} = useBooksContext()

    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = ()=>{
        deleteBook(book.id);
    }

    const handleEditClick = ()=>{
        setShowEdit(!showEdit);
    }

    const handleSubmit=()=>{
        setShowEdit(false);
        // editBook(id,newTitle);
    }

    let content= <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit book={book} onSubmit={handleSubmit}/>
    }

    return(
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}300/200`} alt="book-image" />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow;