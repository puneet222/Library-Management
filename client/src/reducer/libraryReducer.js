import { GET_ALL_BOOKS, SELECT_BOOK, ADD_BOOK, DELETE_BOOK, UPDATE_BOOK } from "../actions/types";

const initialState = {
    books: [],
    filteredBooks: [],
    currentBook: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_BOOKS: {
          return {
              ...state,
              books: action.payload
          }
      }
      case SELECT_BOOK: {
          return {
              ...state,
              currentBook: action.payload
          }
      }
      case ADD_BOOK: {
          return {
              ...state,
              books: [...state.books, action.payload]
          }
      }
      case DELETE_BOOK: {
          return {
              ...state,
              books: state.books.filter(book => book._id !== action.payload._id)
          }
      }
      case UPDATE_BOOK: {
          return {
              ...state,
              books: state.books.map(book => book._id === action.payload._id ? action.payload : book)
          }
      }  
      default:
        return state;
    }
};