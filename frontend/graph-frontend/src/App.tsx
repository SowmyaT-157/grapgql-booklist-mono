import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/HomePage';
import { Authors } from './components/AuthorPage';
import { Titles } from './components/BookName';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authors" element={<Authors />} />
      <Route path="/titles" element={<Titles />} />
    </Routes>
  );
};

export default App;

