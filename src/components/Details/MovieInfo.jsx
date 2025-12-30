const MovieInfo = ({ movie }) => (
    <div>
        <div className="flex flex-wrap gap-2 mb-6">
            {movie.genres?.map(g => (
                <span key={g.id} className="px-3 py-1 border border-gray-700 rounded-full text-sm">
                    {g.name}
                </span>
            ))}
        </div>
        <p className="text-lg leading-relaxed text-gray-200">
            {movie.overview}
        </p>
        <hr className="my-8 border-gray-800" />
    </div>
);
export default MovieInfo;