import React from "react";
import BookItem from "./BookItem";
import PropTypes from "prop-types";

export const Books = ({ books }) => {
  return books && books.length > 0 ? (
    books.map(book => <BookItem key={book._id} book={book} />)
  ) : (
    <h4>No Books present in the Library</h4>
  );
};

Books.propTypes = {
  books: PropTypes.array.isRequired
};
