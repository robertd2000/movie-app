import { useEffect } from "react";
import { useParams } from "react-router-dom"
import Loader from "../components/Loader";
import { MovieDetails } from "../components/MovieDetails";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getMovieDetails } from "../redux/movieDetailsReducer";
import { addMovie } from "../redux/savedReducer";
import errImg from '../ops.png'

export const Movie = () => {
    const {id = ''} = useParams()
    const dispatch = useAppDispatch()
    const {movieDetails, loading, error} = useAppSelector(state => state.movieDetailsReducer)
    
    useEffect(() => {
        dispatch(getMovieDetails(id))
    }, [])

    const saveMovie = (data: any) => {
        dispatch(addMovie(data))
    }

    if(movieDetails.Response === 'False') {
        console.log('error');
        
        return <div>
            <img src={errImg} width={'600px'} />
            <h1>{movieDetails.Error}</h1>
            </div> 
    }

    if (error) {
        return <div>
            <img src={errImg} width={'600px'} />
        </div>
    }
    return (
        <div>
            {
                !loading && !error  ? 
                movieDetails ? 
                <MovieDetails movieDetails={movieDetails} saveMovie={saveMovie} imdbID={id}/> : 
                'No data' : 
                <Loader />
            }
        </div>
    )
}