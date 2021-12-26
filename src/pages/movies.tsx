import { useEffect } from "react"
import { MovieList } from "../components/MovieList"
import { Paginator } from "../components/Pagination"
import { Search } from "../components/Search"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { changePage, getMovieList, setSearchText } from "../redux/reducer"

export const Movies = () => {
    const movies = useAppSelector(state => state.movieReducer.movieList)
    const loading = useAppSelector(state => state.movieReducer.loading)
    const totalPages = useAppSelector(state => state.movieReducer.totalResults)
    const page = useAppSelector(state => state.movieReducer.currentPage)
    const search = useAppSelector(state => state.movieReducer.search)

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
            !loading ? <MovieList movies={movies} /> : 'No data'
        }
        <Paginator totalPages={Math.floor(totalPages / 10)} currentPage={page} changePage={setPage} />
    </div>
}

