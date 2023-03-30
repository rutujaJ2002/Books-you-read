import React from "react";
import useBooksContext from "../hooks/useBooksContext";
import BookShow from "./BookShow";

const BookList = ()=>{
    const {books}= useBooksContext()

    const redneredBooks= books.map(
        (book) => <BookShow book={book} key={book.id} />

    )
    
    return(
        <div className="book-list">
            {redneredBooks}
        </div>
    )
}

export default BookList;