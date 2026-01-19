import "../css/MovieCard.css"
import { useMovieContext } from "../context/movieContext";

function MovieCard({ movie }) {
    const {isFavourite, addToFavourites, removeFromFavourites} = useMovieContext();
    const favourite = isFavourite(movie.id);

    function onFavouriteClick(e) {
        e.preventDefault();

        if(favourite) {
            removeFromFavourites(movie.id);
            console.log("Removed from favourites:", movie.title);
        } else {
            addToFavourites(movie.id);
            console.log("Added to favourites:", movie.title);
        }
    }
    
    return <div className="movieCard">
        <div className="moviePoster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="moviePosterOverlay">
                <button className={`favouriteButton ${favourite ? 'active' : ''}`} onClick={onFavouriteClick}>
                    ❤
                </button>
            </div>
        </div>

        <div className="movieInfo">
            <h3 className="movieTitle">{movie.title}</h3>
            <p className="movieReleaseDate">{movie.release_date?.split('-')[0]}</p>
        </div>
    </div>
}

export default MovieCard;