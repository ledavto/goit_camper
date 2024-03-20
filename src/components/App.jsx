import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<MainPage />} />
        {/* <Route path="/farm/:farmId" element={<MainPage />} /> */}
      </Routes>
    </>
  );
};
