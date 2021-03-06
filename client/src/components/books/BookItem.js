import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectBook } from "../../actions/libraryActions";
import PropTypes from "prop-types";
import "./books.css";

const BookItem = ({ book, selectBook }) => {
  let history = useHistory();

  const handleSelectBook = () => {
    selectBook(book);
    history.push("/select");
  };

  return (
    <div className="card" onClick={handleSelectBook}>
      <div className="container">
        <h4>
          <b>{book.name}</b>
        </h4>
        <p>{book.author}</p>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  selectBook: PropTypes.func.isRequired
};

export default connect(null, { selectBook })(BookItem);
