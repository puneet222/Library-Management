import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Books } from "../books/Books";
import { Loader } from "../loader/Loader";
import {
  getAllBooks,
  searchBooks,
  setLoading
} from "../../actions/libraryActions";
import "./library.css";

const Library = ({
  books,
  isLoading,
  filteredBooks,
  getAllBooks,
  searchBooks,
  setLoading
}) => {
  useEffect(() => {
    setLoading(true);
    getAllBooks();
  }, [getAllBooks]);

  let history = useHistory();

  const [searchQuery, setSearchQuery] = useState("");
  const [isFilter, setIsFilter] = useState(false);

  const handleAddBook = () => {
    history.push("/createOrUpdate");
  };

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
    setIsFilter(true);
    searchBooks(e.target.value);
  };

  return (
    <div className="library-home">
      <input
        type="text"
        className="search-bar"
        placeholder="Search Books"
        value={searchQuery}
        onChange={handleSearchChange}
      ></input>
      {!isLoading && isFilter ? (
        <Books books={filteredBooks} />
      ) : !isLoading ? (
        <Books books={books} />
      ) : (
        <Loader />
      )}
      <button className="add-button" onClick={handleAddBook}>
        Add Book
      </button>
    </div>
  );
};

Library.propTypes = {
  books: PropTypes.array,
  isLoading: PropTypes.bool,
  filteredBooks: PropTypes.array,
  getAllBooks: PropTypes.func.isRequired,
  searchBooks: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
};

const mapStateToParams = state => ({
  books: state.library.books,
  filteredBooks: state.library.filteredBooks,
  isLoading: state.library.isLoading
});

export default connect(mapStateToParams, {
  getAllBooks,
  searchBooks,
  setLoading
})(Library);
