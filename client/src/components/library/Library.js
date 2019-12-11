import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Books } from "../books/Books";
import { getAllBooks } from "../../actions/libraryActions";
import "./library.css";

const Library = ({ books, getAllBooks }) => {
  useEffect(() => {
    getAllBooks();
  }, []);

  let history = useHistory();

  const [searchQuery, setSearchQuery] = useState("");

  const handleAddBook = () => {
    history.push("/createOrUpdate");
  };

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
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
      <Books books={books} />
      <button className="add-button" onClick={handleAddBook}>
        Add Book
      </button>
    </div>
  );
};

const mapStateToParams = state => ({
  books: state.library.books
});

export default connect(mapStateToParams, { getAllBooks })(Library);
