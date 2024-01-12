import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <div className={css.logo}>
          <span>🎥 MovieSearch Story</span>
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
      <Suspense fallback={<div></div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
