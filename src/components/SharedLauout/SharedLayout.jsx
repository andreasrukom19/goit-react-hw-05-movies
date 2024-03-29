import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Loader } from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <div className={css.logo}>
          <span>🎥 MovieSearch</span>
        </div>
        <nav className={css['nav-list']}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${css['nav-link']} ${isActive ? css.active : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `${css['nav-link']} ${isActive ? css.active : ''}`
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
