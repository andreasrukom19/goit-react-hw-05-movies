import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestMovieReviews } from 'services/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const dataReviews = await requestMovieReviews(movieId);
        setReviews(dataReviews);
      } catch (error) {
        toast(error.message);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div className={css['review-list']}>
      <ul>
        {reviews?.length > 0 ? (
          reviews?.map(review => (
            <li key={review.id}>
              <h2 className={css['review-title']}>Author: {review.author}</h2>
              <p className={css['review-content']}>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
