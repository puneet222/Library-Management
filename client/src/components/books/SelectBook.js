import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteBook } from "../../actions/libraryActions";

const SelectBook = ({ currentBook, deleteBook }) => {
  let history = useHistory();
  if (Object.keys(currentBook).length === 0) {
    history.push("/");
  }

  const handleDelete = () => {
    deleteBook(currentBook);
    history.push("/");
  };

  const handleUpdate = () => {
    const updateObj = {
      isEdit: true,
      bookUpdate: currentBook
    };
    history.push("/createOrUpdate", updateObj);
  };

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>{currentBook.name}</b>
        </h4>
        <p>{currentBook.author}</p>
        <h5>{currentBook.description}</h5>
      </div>
      <div className="action">
        <button className="action-btn blue-button" onClick={handleUpdate}>
          Update
        </button>
        <button className="action-btn red-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

SelectBook.propTypes = {
  currentBook: PropTypes.object.isRequired,
  deleteBook: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentBook: state.library.currentBook
});

export default connect(mapStateToProps, { deleteBook })(SelectBook);
