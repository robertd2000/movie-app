import { useEffect } from "react"
import Loader from "../components/Loader"
import { MovieList } from "../components/MovieList"
import { Paginator } from "../components/Pagination"
import { Search } from "../components/Search"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { changePage, getMovieList, setSearchText } from "../redux/reducer"

export const Movies = () => {
    const {
        movieList, 
        loading, 
        totalResults, 
        currentPage, 
        search
    } = useAppSelector(state => state.movieListReducer)


    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(getMovieList({search: 'man', page: 1}))
    }, [])

    const searchMovie = (text: string) => {
        dispatch(setSearchText(text))
        dispatch(getMovieList({search: text, page: 1}))
    }
    
    const setPage = (page: number) => {
        dispatch(changePage(page))
        dispatch(getMovieList({search, page}))
    }
    
    return <div className="container"> 
        <Search search={searchMovie} />
        {
            !loading ? 
            movieList ? 
            <MovieList movies={movieList} /> : 
            'No data' : 
            <Loader />
        }
        <Paginator 
            totalPages={Math.floor(totalResults / 10)} 
            currentPage={currentPage} changePage={setPage} />
    </div>
}

