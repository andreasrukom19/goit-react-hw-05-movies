import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLauout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
