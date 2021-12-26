import { movieType } from "../types"

export const MovieCard: React.FC<movieType> = ({
    Title, Poster, Year
}) => {
    
    return <div className="movie">
      <h2>{Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${Title}`}
          src={Poster}
        />
      </div>
      <p>({Year})</p>
    </div>
}