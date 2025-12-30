const Hero = ({ movie }) => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL
    
    console.log("URL de Pósters:", import.meta.env.VITE_POSTER_BASE_URL);
    return(
        <div className="relative h-[60vh] md:h-[80vh] w-full">

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            <img 
                src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} 
                alt={movie.title}
                className="w-full h-full object-cover"
            />
        
            <div className="absolute bottom-10 left-10 z-20 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
                <p className="text-lg text-gray-300 line-clamp-3">{movie.overview}</p>
                <button className="mt-6 bg-amber-400 text-black px-6 py-2 rounded font-bold hover:bg-amber-500 transition">
                    Ver Detalles
                </button>
            </div>
        </div>
    )
}



export default Hero