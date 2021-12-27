import React from "react"
import { movieDetailsType } from "../types"

interface MovieDetail {
    movieDetails: movieDetailsType 
    imdbID: string
    saveMovie: (data: any) => void
}

export const MovieDetails: React.FC<MovieDetail> = ({movieDetails, imdbID, saveMovie}) => {
    
    const {
        Title, 
        Director, 
        Plot, 
        Poster, 
        Actors, 
        Awards, 
        BoxOffice, 
        Country, 
        Genre, 
        Metascore, 
        Rated, 
        Ratings, 
        Realeased, 
        Runtime, 
        Year, 
        imdbRating,
    } = movieDetails

    const saveMovieHandler = (e: React.SyntheticEvent) => {
      e.stopPropagation()
      saveMovie({Title, Poster, Year, imdbRating, imdbID})
    }

    return <>
        <div className='wrapper'>
            <div className='container'>
            <div className='img'>
                {/* <Img img='large_cover_image' preloader={preloader} /> */}
                <img src={Poster} alt="" />
            </div>
            <div className='movieInfo'>
                <div className='title'>{Title}</div>
                <div>{Year}</div>
                <button className='saveBtn' onClick={saveMovieHandler}>Save</button>


                <div className='genresWrapper'>
                {/* {genres
                    ? genres.map((genre: string) => (
                        <span key={genre}>{genre}/</span>
                    ))
                    : ''} */}
                </div>
                <div className='rating'>
                    <img
                        src="https://yts.mx/assets/images/website/logo-imdb.svg"
                        alt="imdb"
                    />
                    <span>&#9733; {imdbRating}</span>
                </div>
            </div>
        </div>
        </div>
            <div className='synopsis'>
                <div>Director: {Director}</div>
                <div>Country: {Country}</div>
                <div>Genre: {Genre}</div>
                <h3>Synopsis</h3>
                <span>{Plot}</span>
                <div className='movieTechData'>
                    <div>Box office: {BoxOffice}</div>
                    <div>Runtime: {Runtime}</div>
                    <div>Actors: {Actors}</div>
                    <div>Awards: {Awards}</div>
                </div>
            </div>
        
    </>
}