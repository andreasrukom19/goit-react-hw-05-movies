import React, { useEffect, useState } from 'react';
import { requestTrendListMovies } from 'services/api';
import css from './Home.module.css';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await requestTrendListMovies();
        setMovies(movies);
      } catch (error) {
        toast(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <main>
      <h1 className={css['home-page-title']}>Trending today</h1>
      <ul className={css['movies-list']}>
        {movies?.map(movie => (
          <li key={movie.id} className={css['movies-list-item']}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
