import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    content : [
        {
            id: 1,
            category: "popular"
        },
        {
            id: 2,
            category: "favorite"
        },
        {
            id: 3,
            category: "new"
        },
        {
            id: 4,
            category: "new"
        },
        {
            id: 5,
            category: "favorite"
        },
        {
            id: 6,
            category: "favorite"
        },
        {
            id: 7,
            category: "popular"
        },
    ]
}

export const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers : {
        getFilteredContent: (state, action) => {
            state.content.filter(item => item.category !== action.type)
        },
    }
})

export const { getFilteredContent } = contentSlice.actions


export default contentSlice.reducer