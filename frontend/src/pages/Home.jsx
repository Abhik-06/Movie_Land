    import "../css/Home.css"

    import { useState , useEffect } from "react"
    import MovieCard from "../components/MovieCard"
    import { searchMovies } from "../services/api";
    import { getPopularMovies } from "../services/api";

    function Home() {
        const [searchQuery, setSearchQuery] = useState("");
        const [movies, setMovies] = useState([]);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const loadPopularMovies = async () => {
                try {
                    const popularMovies = await getPopularMovies();
                    setMovies(popularMovies);
                } catch (err) { 
                    console.log(err);
                    setError("Failed to load popular movies...");

                } finally {
                    setLoading(false);
                }
            }

            loadPopularMovies();
        }, []);

        const handleSearchBar = async (e) => {
            e.preventDefault();
            if(!searchQuery.trim()){ return }
            if(loading){ return }

            setLoading(true);
            try {
                const searchResults = await searchMovies(searchQuery);
                setMovies(searchResults);
                setError(null);
            } catch(err){
                console.log(err);
                setError("Failed to load the movie...");
            } finally {
                setLoading(false);
            }

            setSearchQuery("");
        }

        return (
            <div className="home">
                <form onSubmit={handleSearchBar} className="searchForm">
                    <input
                        type="text"
                        placeholder="Search for movies..."
                        className="searchInput"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="searchButton">Search</button>
                </form>

                {error && <div className="errorMessage">{error}</div>}
                
                {loading ? (
                    <div className="loading">Loading...</div>
                
                ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
                )}
            </div>
            
        )
    }

    export default Home