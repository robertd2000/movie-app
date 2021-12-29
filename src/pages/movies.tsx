import { useEffect } from "react"
import Loader from "../components/Loader"
import { MovieList } from "../components/MovieList"
import { Paginator } from "../components/Pagination"
import { Search } from "../components/Search"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { changePage, getMovieList, setSearchText } from "../redux/reducer"
import errImg from '../ops.png'
import nodata from '../nodata.png'


export const Movies = () => {
    const {
        movieList, 
        loading, 
        totalResults, 
        currentPage, 
        search,
        error
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

    if (error) {
        return <div>
            <img src={errImg} width={'600px'} />
        </div>
    }
    
    return <div className="container"> 
        <Search search={searchMovie} />
        {
            !loading && !error ? 
            movieList ? 
            <MovieList movies={movieList} /> : 
            <img src={nodata} /> : 
            <Loader />
        }
        {
            totalResults && <Paginator 
            totalPages={Math.floor(totalResults / 10)} 
            currentPage={currentPage} changePage={setPage} />
        }
        
    </div>
}

