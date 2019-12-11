import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteBook } from "../../actions/libraryActions";

const SelectBook = withRouter(({ currentBook, history, deleteBook }) => {
  let routerHistory = useHistory();
  if (Object.keys(currentBook).length === 0) {
    routerHistory.push("/");
  }

  const handleDelete = () => {
    deleteBook(currentBook);
    routerHistory.push("/");
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
});

const mapStateToProps = state => ({
  currentBook: state.library.currentBook
});

export default connect(mapStateToProps, { deleteBook })(SelectBook);
