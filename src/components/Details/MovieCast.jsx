const MovieCast = ({ cast }) => (
    <div className="mt-10">
        <h2 className="text-2xl font-bold border-l-4 border-amber-400 pl-3 mb-6">Reparto principal</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {cast.map(actor => (
                <div key={actor.id} className="text-center">
                    <img 
                        src={actor.profile_path ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` : 'https://via.placeholder.com/185x185?text=No+Photo'} 
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-2 border-2 border-neutral-800"
                        alt={actor.name}
                    />
                    <p className="text-sm font-bold truncate">{actor.name}</p>
                    <p className="text-xs text-gray-400 truncate">{actor.character}</p>
                </div>
            ))}
        </div>
    </div>
);
export default MovieCast;