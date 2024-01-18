import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { requestMovieDetails } from 'services/api';
import { toast } from 'react-toastify';
import { GoArrowLeft } from 'react-icons/go';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await requestMovieDetails(movieId);
        setMovieInfo(movieDetails);
      } catch (error) {
        toast(error.message);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  const releaseDate = new Date(movieInfo.release_date);
  const releaseYear = releaseDate.getFullYear();

  return (
    <main>
      <Link to={backLinkRef.current} className={css['back-link']}>
        <GoArrowLeft />
        <span>Go back</span>
      </Link>
      <section className={css['movie-info-block']}>
        <img
          src={
            movieInfo.poster_path
              ? `https://image.tmdb.org/t/p/w200${movieInfo.poster_path}`
              : '🤷'
          }
          alt={movieInfo.original_title}
        />
        <div className={css['movie-description']}>
          <h1 className={css['movie-title']}>
            {movieInfo.original_title} ({releaseYear})
          </h1>
          <p className={css['text-block']}>
            User score: {Math.round(movieInfo.vote_average * 10)}%
          </p>
          <h2 className={css['title-block']}>Overview</h2>
          <p className={css['text-block']}>{movieInfo.overview}</p>
          <h2 className={css['title-block']}>Genres</h2>
          <p className={css['text-block']}>
            {movieInfo.genres?.map(genre => genre.name).join(' ')}
          </p>
        </div>
      </section>
      <section>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </main>
  );
};

export default MovieDetails;
