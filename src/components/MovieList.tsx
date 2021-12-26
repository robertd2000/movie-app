import { movieType } from "../types"
import { MovieCard } from "./MovieCard";

interface MovieListType {
    movies: movieType[]
}

export const MovieList:React.FC<MovieListType> = ({movies}) => {
    return (
        <div className="movies">
            {
                movies.map(card => {
                    const {Type, Title, Poster, Year, imdbID} = card
                    
                    return <MovieCard 
                        Title={Title} 
                        Poster={Poster} 
                        Year={Year} 
                        Type={Type} 
                        imdbID={imdbID} 
                        key={card.imdbID + Math.random()} />
                })
            }
        </div>
    )
}