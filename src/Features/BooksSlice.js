import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books : [
        {
            id: 1, title: "Love Bangladesh", author: "Komol"
        },
        {
            id: 2, title: "Love Bangladeshis People", author: "Abdur R. Komol"
        }
    ]
};

const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers:{
        showBooks: (state) => state,
    },
})
export const {showBooks} = booksSlice.actions;
export default booksSlice.reducer;