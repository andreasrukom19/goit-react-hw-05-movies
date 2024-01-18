import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestMovieCredits } from 'services/api';

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
    <ul>
      {credits?.map(credit => (
        <li key={credit.id}>
          <img
            src={
              credit.profile_path
                ? `https://image.tmdb.org/t/p/w200${credit.profile_path}`
                : ''
            }
            alt=""
          />
          <p>{credit.name}</p>
          <p>Character: {credit.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
