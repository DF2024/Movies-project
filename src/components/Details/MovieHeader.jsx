const MovieHeader = ({ movie }) => (
    <div className="flex justify-between items-end py-6">
        <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{movie.title}</h1>
            <p className="text-gray-400">
                {movie.release_date?.split('-')[0]} • {movie.runtime}m • {movie.genres?.map(g => g.name).join(', ')}
            </p>
        </div>
        <div className="text-right">
            <p className="text-gray-400 text-xs font-bold uppercase">IMDb Rating</p>
            <div className="flex items-center space-x-2">
                <span className="text-amber-400 text-2xl">⭐</span>
                <span className="text-xl font-bold">{movie.vote_average?.toFixed(1)}/10</span>
            </div>
        </div>
    </div>
);
export default MovieHeader;