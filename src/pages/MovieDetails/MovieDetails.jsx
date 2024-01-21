import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { requestMovieDetails } from 'services/api';
import { toast } from 'react-toastify';
import { GoArrowLeft } from 'react-icons/go';
import css from './MovieDetails.module.css';
import img from '../../img/no-photo-icon-22.png';
import { Loader } from 'components/Loader/Loader';

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
    <main className={css.container}>
      <div className={css['back-link-container']}>
        <Link to={backLinkRef.current} className={css['back-link']}>
          <GoArrowLeft />
          <span>Go back</span>
        </Link>
      </div>
      <section className={css['movie-info-block']}>
        <img
          src={
            movieInfo.poster_path
              ? `https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`
              : img
          }
          alt={movieInfo.original_title}
        />
        <div className={css['movie-description']}>
          <h1 className={css['movie-title']}>
            {movieInfo.original_title} ({releaseYear ? releaseYear : ''})
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
      <div className={css.line}></div>
      <section className={css['additional-info-block']}>
        <p className={css['additional-info-block-title']}>
          Additional information
        </p>
        <ul className={css['info-link-list']}>
          <li className={css['info-link-item']}>
            <Link className={css['info-link']} to="cast">
              Cast
            </Link>
          </li>
          <li className={css['info-link-item']}>
            <Link className={css['info-link']} to="reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </section>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
