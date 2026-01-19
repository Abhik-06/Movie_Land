import "./css/App.css"

import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Favourite from './pages/Favourite.jsx';
import Navbar from './components/Navbar.jsx';
import { MovieProvider } from "./context/movieContext.jsx";

function App() {

  return (
    <MovieProvider>
      <Navbar />
      <main className='mainContent'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourite' element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App;