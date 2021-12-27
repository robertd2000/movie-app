import { createSlice } from "@reduxjs/toolkit";
import { movieType } from "../types";

interface savedType {
    savedList: movieType[]
}
const initialState: savedType = {
    savedList: JSON.parse(localStorage.getItem('saved-movies') || '[]')  || []
}
const savedMoviesReducer = createSlice({
    name: 'savedMoviesReducer',
    initialState,
    reducers: {
        addMovie: (state, action) => {
            if (!state.savedList.some(i => i.Title == action.payload.Title)) {
                state.savedList.push(action.payload)
                localStorage.setItem('saved-movies', JSON.stringify(state.savedList))
            }

        },
        deleteMovie: (state, action) => {
            state.savedList.filter(i => i != action.payload)
        }
    }
})

export const {addMovie, deleteMovie} = savedMoviesReducer.actions
export default savedMoviesReducer.reducer