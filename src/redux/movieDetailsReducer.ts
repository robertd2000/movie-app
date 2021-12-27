import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../api/api";
import { movieDetailsType, movieType } from "../types";



interface MovieState {
    movieDetails: movieDetailsType
    loading: boolean

}


const initialState: MovieState = {
    movieDetails: {
        Title: '',
        Year: '',
        Rated: '',
        Realeased: '',
        Runtime: '',
        Genre: '',
        Director: '',
        Actors: '',
        Plot: '',
        Country: '',
        Awards: '',
        Poster: '',
        Metascore: '',
        imdbRating: '',
        BoxOffice: '',
        Ratings: []
    },
    loading: false
}


export const getMovieDetails = createAsyncThunk(
    'movies/getMovieDetails',
   async (id: string) => {
       const response = await Api.getMovie(id)
       return response
   }
)

export const movieDetailsReducer = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getMovieDetails.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getMovieDetails.fulfilled, (state, action) => {
            state.movieDetails = action.payload
            state.loading = false
        })
    }
})

// export const {changePage, setSearchText} = movieDetailsReducer.actions
export default movieDetailsReducer.reducer