import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import {NavBar} from './NavBar';
import {Books} from "../books/Books";
import {getAllBooks} from "../../actions/libraryActions"

const Library = ({books, getAllBooks}) => {

    useEffect(() => {
        getAllBooks();
    },[]);

    return (
        <div>
            <NavBar />
            <Books books={books} />
        </div>
    )
}

const mapStateToParams = state => ({
    books: state.library.books
});

export default connect(mapStateToParams, {getAllBooks})(Library);
