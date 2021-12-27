import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className='header'>
            <div className='headerInner'>
                <Link className='nav' to='/' >Home</Link>
                <Link className='nav' to='/savedMovies' >Saved</Link>
            </div>

        </div>
    )
}