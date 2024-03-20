import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/farm/:farmId" element={<MainPage />} />
      </Routes>
    </div>
  );
};