import {
  GET_ALL_BOOKS,
  GET_ALL_BOOKS_ERROR,
  SELECT_BOOK,
  ADD_BOOK,
  ADD_BOOK_ERROR,
  DELETE_BOOK,
  DELETE_BOOK_ERROR,
  UPDATE_BOOK_ERROR,
  UPDATE_BOOK
} from "./types";
import { BOOKS_API } from "./apis";
import axios from "axios";

// get all planets
export const getAllBooks = () => async dispatch => {
  try {
    //   setLoading();
    const res = await axios.get(BOOKS_API);
    dispatch({
      type: GET_ALL_BOOKS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_BOOKS_ERROR,
      payload: err
    });
  }
};

export const selectBook = book => {
  return {
    type: SELECT_BOOK,
    payload: book
  };
};

export const createBook = book => async dispatch => {
  try {
    const res = await axios.post(BOOKS_API, book);
    dispatch({
      type: ADD_BOOK,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ADD_BOOK_ERROR,
      payload: err
    });
  }
};

export const updateBook = book => async dispatch => {
  try {
    const updateURL = BOOKS_API + "/" + book._id;
    const res = await axios.put(updateURL, book);
    dispatch({
      type: UPDATE_BOOK,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: UPDATE_BOOK_ERROR,
      payload: err
    });
  }
};

export const deleteBook = book => async dispatch => {
  try {
    const res = await axios.delete(BOOKS_API + "/" + book._id);
    dispatch({
      type: DELETE_BOOK,
      payload: book
    });
  } catch (err) {
    dispatch({
      type: DELETE_BOOK_ERROR,
      payload: err
    });
  }
};
