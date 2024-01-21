import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestMovieCredits } from 'services/api';
import img from '../../img/no-photo-icon-22.png';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const credits = await requestMovieCredits(movieId);
        setCredits(credits);
      } catch (error) {
        toast(error.message);
      }
    };
    fetchMovieCredits();
  }, [movieId]);

  return (
    <ul className={css['credits-list']}>
      {credits?.map(credit => (
        <li key={credit.id} className={css['credits-list-item']}>
          <img
            className={css['photo-actor']}
            src={
              credit.profile_path
                ? `https://image.tmdb.org/t/p/w200${credit.profile_path}`
                : img
            }
            alt={credit.original_name}
            width="200"
          />
          <p className={css['credit-name']}>{credit.name}</p>
          <p>Character: {credit.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
