import { useState } from "react"
import MovieCard from "../components/MovieCard"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "A Beautiful Mind", releaseDate: "1996" },
        { id: 2, title: "3 idiots", releaseDate: "2002" },
        { id: 3, title: "Malik", releaseDate: "2016" }
    ]

    const handleSearchBar = (e) => {
        e.preventDefault();
        alert(searchQuery);
    }

    return (
        <div className="home">
            <form onClick={handleSearchBar} className="searchForm">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="searchInput"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="searchButton">Search</button>
            </form>

            {movies.map((movie) => (
                movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    )
}

export default Home