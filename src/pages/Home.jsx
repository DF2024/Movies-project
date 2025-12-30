import React, { useEffect, useState } from 'react';
import Hero from '../components/Home/Hero';
import MovieRow from '../components/Home/MovieRow';

import { getTrending, getTopRated, getUpcoming } from '../services/tmdbApi';

const Home = () => {
    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchAllData = async () => {
            try {
   
                const [trendingRes, topRes] = await Promise.all([
                    getTrending(),
                    getTopRated(),
                ]);

                setTrending(trendingRes.data.results);
                setTopRated(topRes.data.results);
                
            } catch (error) {
                console.error("Error al traer datos de TMDB:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    if (loading) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <div className="text-amber-400 text-2xl animate-pulse font-bold">Cargando IMDb</div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen text-white">

            {trending.length > 0 && <Hero movie={trending[0]} />}

            <div className="container mx-auto px-4 py-8 space-y-10">

                <MovieRow title="Tendencias de hoy" movies={trending} />
                <MovieRow title="Mejor valoradas" movies={topRated} />

            </div>
        </div>
    );
};

export default Home;