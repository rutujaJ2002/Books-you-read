import React, { useState} from "react";
import useBooksContext from "../hooks/useBooksContext";

const BookEdit = ({book, onSubmit})=>{

    const {editBook} = useBooksContext();

    const [title, setTitle]= useState(book.title);

    const handleChange=(e)=>{
        setTitle(e.target.value);
    }

    const handleFormSubmit =(e)=>{
        e.preventDefault();
        onSubmit();
        editBook(book.id,title);
    }

    return(
        <form className="book-edit" onSubmit={handleFormSubmit}>
            <label htmlFor="">Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary" >Save</button>
        </form>
    )
}

export default BookEdit;