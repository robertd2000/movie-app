import { useEffect } from "react";
import { useParams } from "react-router-dom"
import Loader from "../components/Loader";
import { MovieDetails } from "../components/MovieDetails";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getMovieDetails } from "../redux/movieDetailsReducer";
import { addMovie } from "../redux/savedReducer";

export const Movie = () => {
    const {id = ''} = useParams()
    const dispatch = useAppDispatch()
    const {movieDetails, loading} = useAppSelector(state => state.movieDetailsReducer)
    
    useEffect(() => {
        dispatch(getMovieDetails(id))
    }, [])

    const saveMovie = (data: any) => {
        dispatch(addMovie(data))
    }

    return (
        <div>
            {
                !loading ? 
                movieDetails ? 
                <MovieDetails movieDetails={movieDetails} saveMovie={saveMovie} imdbID={id}/> : 
                'No data' : 
                <Loader />
            }
        </div>
    )
}