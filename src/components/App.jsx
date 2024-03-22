import CatalogPage from 'pages/CatalogPage';
import FavoritePage from 'pages/FavoritePage';
import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </>
  );
};
