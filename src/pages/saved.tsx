import { MovieList } from "../components/MovieList"
import { useAppSelector } from "../hooks/hooks"

export const SavedList = () => {
    const {savedList} = useAppSelector(state => state.savedReducer)
    
    return (
        <div className="container">
            {savedList.length > 0 ? <MovieList movies={savedList} /> : 'Your saved list is empty'}
        </div>
    )
}