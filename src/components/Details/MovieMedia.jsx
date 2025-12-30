const MovieMedia = ({ movie, trailer }) => {
    const POSTER_URL = import.meta.env.VITE_POSTER_BASE_URL;
    const BACKDROP_URL = import.meta.env.VITE_IMAGE_BASE_URL;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="hidden md:block">
                <img src={`${POSTER_URL}${movie.poster_path}`} className="rounded-l-lg w-full h-full object-cover" alt={movie.title} />
            </div>
            <div className="md:col-span-2 aspect-video bg-neutral-900">
                {trailer ? (
                    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${trailer.key}`} allowFullScreen></iframe>
                ) : (
                    <img src={`${BACKDROP_URL}${movie.backdrop_path}`} className="w-full h-full object-cover opacity-50" />
                )}
            </div>
        </div>
    );
};
export default MovieMedia;