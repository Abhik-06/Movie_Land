function MovieCard({ movie }) {

    function onFavouriteClick() {
        alert('clicked !');
    }

    return <div className="movieCard">
        <div className="moviePoster">
            <img src={movie.url} alt={movie.title} />
            <div className="moviePosterOverlay">
                <button className="favouriteButton" onClick={onFavouriteClick}>
                    ❤
                </button>
            </div>
            <div className="movieInfo">
                <h3 className="movieTitle">{movie.title}</h3>
                <h3 className="movieReleaseDate">{movie.releaseDate}</h3>
            </div>
        </div>
    </div>
}

export default MovieCard;