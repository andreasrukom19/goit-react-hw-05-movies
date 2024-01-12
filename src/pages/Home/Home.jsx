import React, { useEffect, useState } from 'react';
import { fetchTrendListMovies } from 'services/api';
import css from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchTrendListMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error.message);
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
            <Link to="/movies">{movie.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
