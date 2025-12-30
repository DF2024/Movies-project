import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import Navbar from '../layouts/Navbar'

const AppRoutes = () => {
    return(
        <Routes>
            <Route element={<Navbar/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/movie/:id' element={<MovieDetails/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes