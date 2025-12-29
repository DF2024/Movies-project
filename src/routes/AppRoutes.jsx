import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
// import MovieDetails from '../pages/MovieDetails'
// import SearchMovies from '../pages/SearchResults'
import Navbar from '../layouts/Navbar'

const AppRoutes = () => {
    return(
        <Routes>
            <Route element={<Navbar/>}>
                <Route path='/' element={<Home/>}/>
                {/* <Route path='/details' element={<MovieDetails/>}/>
                <Route path='/search' element={<SearchMovies/>}/> */}
            </Route>
        </Routes>
    )
}

export default AppRoutes