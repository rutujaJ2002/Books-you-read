import React, { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

const BookCreate = ()=>{

    const [title, setTitle] = useState('');
    const {createBook} = useBooksContext()

    const handleChange = (e)=>{
        setTitle(e.target.value);
    }

    const handleFormSubmit = (e)=>{
        createBook(title);
        e.preventDefault();
        setTitle('');
    }

    return(
        <div className="book-create">
            <h3>Add A Book</h3>
            <form action="" onSubmit={handleFormSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" className="input" placeholder="Enter book title..." onChange={handleChange} value={title} />
                <button className="button">Create</button>
            </form>
        </div>
    )
}

export default BookCreate;