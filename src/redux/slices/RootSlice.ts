import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        title: 'Title',
        author_name: 'Author Name',
        isbn: 'ISBN',
        length: 'Length',
        cover: 'Cover',
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload },
        chooseAuthorName: (state, action) => { state.author_name = action.payload },
        chooseISBN: (state, action) => { state.isbn = action.payload },
        chooseLength: (state, action) => { state.length = action.payload },
        chooseCover: (state, action) => { state.cover = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthorName, chooseISBN, chooseLength, chooseCover } = rootSlice.actions