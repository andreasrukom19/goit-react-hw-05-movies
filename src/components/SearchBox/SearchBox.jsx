import React, { useEffect, useState } from 'react';
import css from './SearchBox.module.css';
import { useSearchParams } from 'react-router-dom';

const SearchBox = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    setSearchInput(searchParams.get('query') ?? '');
  }, [searchParams]);

  const handleChangeInput = event => {
    setSearchInput(event.currentTarget.value);
  };

  return (
    <div>
      <form className={css['search-form']} onSubmit={onSubmit}>
        <input
          name="searchField"
          value={searchInput}
          className={css['search-input']}
          type="text"
          onChange={handleChangeInput}
          placeholder="Movie search"
          autoComplete="off"
          autoFocus
        />
        <button className={css['search-btn']} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
