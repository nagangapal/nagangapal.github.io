import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProfileLayout from './components/layouts/ProfileLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile/:profileId" element={<ProfileLayout />} />
    </Routes>
  );
}

export default App;
