import "../css/Navbar.css"

import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbarLinks">
            <div className="navbarBrand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="routerMenu">
                <div className="routerToHome">
                    <Link to='/'>Home</Link>
                </div>
                <div className="routerToFavourites">
                    <Link to="/Favourite">Favourites</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar