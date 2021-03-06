import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api/api";
import { movieType } from "../types";

interface MovieState {
    movieList: movieType[],
    loading: boolean,
    totalResults: number,
    search: string,
    currentPage: number,
    error: boolean
}

const initialState: MovieState = {
    movieList: [],
    loading: false,
    totalResults: 0,
    search: 'man',
    currentPage: 1,
    error: false
}

export const getMovieList = createAsyncThunk(
    'movies/getMovieList',
   async ({search, page}: {search: string, page: number}) => {
       const response = await Api.getMovieList(search, page)
       return response
   }
)

export const movieListReducer = createSlice({
    name: 'movieList',
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
            state.error = false
        })
        .addCase(getMovieList.rejected, (state, action) =>{
            state.error = true
        })
    }
})

export const {changePage, setSearchText} = movieListReducer.actions
export default movieListReducer.reducer