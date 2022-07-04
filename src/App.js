import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;