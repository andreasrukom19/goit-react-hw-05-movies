import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css['movie-list']}>
      <ul>
        {movies?.map(movie => (
          <li key={movie.id} className={css['movies-list-item']}>
            <Link
              className={css['movies-list-item-link']}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
