import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./reducer";
import movieDetailsReducer from './movieDetailsReducer'
import savedReducer from './savedReducer'


export const store = configureStore({
    reducer: {
        movieListReducer,
        movieDetailsReducer,
        savedReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch