import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { createBook, updateBook } from "../../actions/libraryActions";
import { connect } from "react-redux";

const CreateBook = ({ createBook, updateBook }) => {
  let location = useLocation();
  let history = useHistory();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [bookId, setBookId] = useState("");

  if (location.state && location.state.isEdit) {
    setTitle(location.state.bookUpdate.name);
    setAuthor(location.state.bookUpdate.author);
    setDescription(location.state.bookUpdate.description);
    setBookId(location.state.bookUpdate._id);
    setIsEdit(location.state.isEdit);
    location.state.isEdit = false;
  }

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = e => {
    setAuthor(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handleUpdate = () => {
    const bookObj = {
      _id: bookId,
      name: title,
      author,
      description
    };
    updateBook(bookObj);
    history.push("/");
  };

  const handleAddBook = () => {
    const bookObj = {
      name: title,
      author,
      description
    };
    createBook(bookObj);
    history.push("/");
  };

  return (
    <div className="card">
      <div className="container">
        <div className="book-info">
          <label className="form-label" htmlFor="title">
            Book Title
          </label>
          <input
            type="text"
            name="title"
            className="form-input"
            placeholder="Book title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="book-info">
          <label className="form-label" htmlFor="title">
            Book Author
          </label>
          <input
            type="text"
            name="title"
            className="form-input"
            placeholder="Book Author"
            value={author}
            onChange={handleAuthorChange}
          />
        </div>
        <div className="book-info">
          <label className="form-label" htmlFor="title">
            Description
          </label>
          <textarea
            type="text"
            name="title"
            className="form-input"
            placeholder="Book description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="action">
          {isEdit ? (
            <button className="full-button blue-button" onClick={handleUpdate}>
              Update Book
            </button>
          ) : (
            <button className="full-button blue-button" onClick={handleAddBook}>
              Add Book
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(null, { createBook, updateBook })(CreateBook);
