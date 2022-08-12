import booksReducer from "../Features/BooksSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
    }
})

export default store;