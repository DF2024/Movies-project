import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

const api = axios.create({
    baseURL: BASE_URL,
    params: { 
        api_key: API_KEY, 
        language: 'es-ES' 
    }
})

export const getTrending = () => api.get('/trending/movie/day')
export const getTopRated = () => api.get('/movie/top_rated')
export const getMovieDetails = (id) => api.get(`/movie/${id}`);
export const searchMovies = (query) => api.get('/search/movie', { params: { query } })
export const getUpcoming = () => api.get('/movie/upcoming')
export const getPopular = () => api.get('/movie/popular')
export const getMovieCredits = (id) => api.get(`/movie/${id}/credits`);
export const getMovieVideos = (id) => api.get(`/movie/${id}/videos`);