import { Link } from "react-router-dom"
import { movieType } from "../types"

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export const MovieCard: React.FC<movieType> = ({
    Title, Poster, Year, imdbID: id
}) => {

    
  let poster = !Poster || Poster == 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : Poster
    return <div className="movie">
      <Link to={`/movie/${id}`}>
        <h2>{Title}</h2>
        <div>
          <img
            width="200"
            alt={`The movie titled: ${Title}`}
            src={poster}
          />
        </div>
        <p>({Year})</p>
      </Link>

    </div>
}