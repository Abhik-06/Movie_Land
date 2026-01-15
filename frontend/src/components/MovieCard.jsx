import "../css/MovieCard.css"

function MovieCard({ movie }) {

    function onFavouriteClick() {
        alert('clicked !');
    }

    return <div className="movieCard">
        <div className="moviePoster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="moviePosterOverlay">
                <button className="favouriteButton" onClick={onFavouriteClick}>
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