import React from 'react';
import "./books.css"
import { connect } from 'react-redux';
import { selectBook } from "../../actions/libraryActions";

const BookItem = ({book, selectBook}) => {

  const handleSelectBook = () => {
    selectBook(book);
  }  

  return (
    <div className="card" onClick={handleSelectBook}>
        <div className="container">
            <h4><b>{book.name}</b></h4>
            <p>{book.author}</p>
        </div>
    </div>
  );
}

export default connect(null, {selectBook})(BookItem);
