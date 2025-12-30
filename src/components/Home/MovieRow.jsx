import { Link } from "react-router-dom";

const MovieRow = ({ title, movies }) => {
    const POSTER_BASE_URL = import.meta.env.VITE_POSTER_BASE_URL
    return(
        <div className="mb-10">
            <h2 className="text-2xl font-bold border-l-4 border-amber-400 pl-3 mb-6 uppercase tracking-wider">
                {title}
            </h2>
            

            <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
                {movies.map((movie) => (
                    <div key={movie.id} className="min-w-[160px] md:min-w-[200px] bg-neutral-900 rounded-lg overflow-hidden hover:scale-105 transition duration-300 cursor-pointer shadow-lg">
                        <img 
                            src={`${POSTER_BASE_URL}${movie.poster_path}`} 
                            alt={movie.title}
                            className="w-full h-[250px] md:h-[300px] object-cover"
                        />
                        <div className="p-3">
                            <div className="flex items-center space-x-1 text-amber-400 mb-1">
                                <span>⭐</span>
                                <span className="text-white text-sm font-bold">{movie.vote_average.toFixed(1)}</span>
                            </div>
                            <h3 className="text-sm font-semibold truncate">{movie.title}</h3>
                            <Link to={`/movie/${movie.id}`}>
                                <button className="w-full mt-3 py-1 border border-neutral-700 text-blue-400 text-xs font-bold rounded hover:bg-neutral-800">
                                    Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default MovieRow