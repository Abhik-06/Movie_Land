import "../css/favourites.css"
import { useMovieContext } from "../context/movieContext";
import MovieCard from "../components/MovieCard";

function Favourite() {
    const { favorites } = useMovieContext(); 
    
    if ( favorites ) {
        return <div className="moviesGrid">
            {favorites.map(movie => (
                <MovieCard movie = {movie} key = {movie.id}/>
            ))}
        </div>
    }
    return (
        <div className="favouritesEmpty">
            <h3>Favourites is empty !</h3>
            <p>Your favourited movies should appear here</p>
        </div>
    )
}

export default Favourite