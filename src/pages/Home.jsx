import { useEffect, useState } from 'react'
import { getTrending } from '../services/tmdbApi'


const Home = () => {
     const [movies, setMovies] = useState([])

     useEffect(() => {
       getTrending()
         .then((response) => {
           setMovies(response.data.results)
         })
         .catch((error) => {
           console.error(error.message)
         })
     }, [])
        
    return(
     <div>
       <h1 className="text-3xl font-bold underline">
           API MOVIES
       </h1>
       <ul>
         {movies.map(movie => (
           <li key={movie.id}>
             {movie.title || movie.name}
             </li>
         ))}
       </ul>
     </div>
    )
}

export default Home