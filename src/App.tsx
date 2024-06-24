 import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdDashboard from './components/AdDashboard';
import './App.css'; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/dashboard" element={<AdDashboard />} />
            <Route path="/about" element={<div>About</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
