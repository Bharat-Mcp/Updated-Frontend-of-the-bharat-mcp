import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TalkWithUs from './pages/TalkWithUs';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/talk-with-us" element={<TalkWithUs />} />
      </Routes>
    </Router>
  );
}

export default App;