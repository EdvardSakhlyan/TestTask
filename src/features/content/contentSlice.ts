import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    content : [
        {
            id: 1,
            category: "popular",
            heading: "Illustration",
            lessons: 24,
            minute: 134
        },
        {
            id: 2,
            category: "favorite",
            heading: "OOP",
            lessons: 34,
            minute: 240
        },
        {
            id: 3,
            category: "new",
            heading: "Machine learning",
            lessons: 22,
            minute: 200
        },
        {
            id: 4,
            category: "new",
            heading: "JavaScript",
            lessons: 20,
            minute: 180
        },
        {
            id: 5,
            category: "favorite",
            heading: "Browser Tools",
            lessons: 10,
            minute: 100
        },
        {
            id: 6,
            category: "favorite",
            heading: "PHP",
            lessons: 24,
            minute: 240
        },
        {
            id: 7,
            category: "popular",
            heading: "C#",
            lessons: 30,
            minute: 320
        },
    ],
    category: "popular"
}

export const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers : {
        getFilteredContent: (state, action) => {
            state.content = initialState.content.filter(item => item.category === action.payload)
        },
        changeCategory: (state, action) => {
            state.category = action.payload
        }
    }
})

export const { getFilteredContent, changeCategory } = contentSlice.actions

export default contentSlice.reducer