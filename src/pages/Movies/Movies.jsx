import { MovieList } from 'components/MovieList/MovieList';
import SearchBox from 'components/SearchBox/SearchBox';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestSearchMovie } from 'services/api';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryValue = searchParams.get('query');

  useEffect(() => {
    if (queryValue === null) return;
    const fetchSearchMovie = async () => {
      try {
        const dataSearch = await requestSearchMovie(queryValue);
        setMovies(dataSearch);
      } catch (error) {
        toast(error.message);
      }
    };
    fetchSearchMovie();
  }, [queryValue]);

  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.searchField.value;
    setSearchParams({ query: searchValue });
  };

  return (
    <main className={css['search-page']}>
      <SearchBox onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </main>
  );
};

export default Movies;
