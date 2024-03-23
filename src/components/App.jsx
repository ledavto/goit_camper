import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import Reviews from './Reviews';
import Features from './Features';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="features" element={<Features />} />
        </Route>
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </>
  );
};
