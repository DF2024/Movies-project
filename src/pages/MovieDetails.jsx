import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getMovieCredits, getMovieVideos } from '../services/tmdbApi';


import MovieHeader from '../components/Details/MovieHeader'
import MovieMedia from '../components/Details/MovieMedia';
import MovieCast from '../components/Details/MovieCast';
import MovieInfo from '../components/Details/MovieInfo';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [trailer, setTrailer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const [detailsRes, creditsRes, videosRes] = await Promise.all([
                    getMovieDetails(id),
                    getMovieCredits(id),
                    getMovieVideos(id)
                ]);
                setMovie(detailsRes.data);
                setCast(creditsRes.data.cast.slice(0, 10));
                const officialTrailer = videosRes.data.results.find(
                    vid => vid.type === "Trailer" && vid.site === "YouTube"
                );
                setTrailer(officialTrailer);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchAllData();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return <div className="bg-black min-h-screen flex justify-center items-center text-white">Cargando...</div>;

    return (
        <div className="bg-[#121212] min-h-screen text-white pb-20">
            <div className="container mx-auto px-4">
     
                <MovieHeader movie={movie} />
                <MovieMedia movie={movie} trailer={trailer} />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
                    <div className="lg:col-span-2">
                        <MovieInfo movie={movie} />
                        <MovieCast cast={cast} />
                    </div>
                    

                    <div className="bg-[#1f1f1f] p-6 rounded-lg h-fit">
                        <h3 className="text-amber-400 font-bold mb-4 uppercase text-xs">Detalles adicionales</h3>
                        <p className="text-sm text-gray-400">Presupuesto</p>
                        <p className="mb-4">${movie.budget?.toLocaleString()}</p>
                        <p className="text-sm text-gray-400">Recaudación</p>
                        <p>${movie.revenue?.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;