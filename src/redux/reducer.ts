import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api/api";
import { movieType } from "../types";

interface MovieState {
    movieList: movieType[],
    loading: boolean,
    totalResults: number,
    search: string,
    currentPage: number
}

const initialState: MovieState = {
    movieList: [],
    loading: false,
    totalResults: 0,
    search: 'man',
    currentPage: 1
}

export const getMovieList = createAsyncThunk(
    'movies/getMovieList',
   async ({search, page}: {search: string, page: number}) => {
       const response = await Api.getMovieList(search, page)
       return response
   }
)
export const movieReducer = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.currentPage = action.payload
        },
        setSearchText: (state, action) => {
            state.search = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMovieList.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getMovieList.fulfilled, (state, action) => {
            state.movieList = action.payload.Search
            state.totalResults = action.payload.totalResults
            state.loading = false
        })
    }
})

export const {changePage, setSearchText} = movieReducer.actions
export default movieReducer.reducer