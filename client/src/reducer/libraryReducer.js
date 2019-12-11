import {
  GET_ALL_BOOKS,
  SELECT_BOOK,
  ADD_BOOK,
  DELETE_BOOK,
  UPDATE_BOOK,
  SEARCH_BOOKS,
  SET_LOADING
} from "../actions/types";

const initialState = {
  books: [],
  filteredBooks: [],
  currentBook: {},
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS: {
      return {
        ...state,
        books: action.payload,
        filteredBooks: action.payload,
        isLoading: false
      };
    }
    case SELECT_BOOK: {
      return {
        ...state,
        currentBook: action.payload
      };
    }
    case ADD_BOOK: {
      return {
        ...state,
        books: [...state.books, action.payload],
        isLoading: false
      };
    }
    case DELETE_BOOK: {
      return {
        ...state,
        books: state.books.filter(book => book._id !== action.payload._id),
        isLoading: false
      };
    }
    case UPDATE_BOOK: {
      return {
        ...state,
        books: state.books.map(book =>
          book._id === action.payload.book._id ? action.payload.book : book
        ),
        isLoading: false
      };
    }
    case SEARCH_BOOKS: {
      return {
        ...state,
        filteredBooks: state.books.filter(book =>
          book.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default:
      return state;
  }
};
