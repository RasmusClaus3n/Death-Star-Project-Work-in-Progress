import CallSWAPI from './components/CallSWAPI';
import Navbar from './components/Nav';
import LandingPage from './components/LandingPage';
import Planets from './components/Planets';
import PlanetDetails from './components/PlanetDetails';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/global.css';
import './css/style.css';
import './css/planets.css';
import './css/loader.css';
import './css/animations.css';
import './css/navbar.css';
import './css/arrows.css';
import './css/planet-details.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/planets' element={<Planets />} />
        <Route path='/planets/:id' element={<PlanetDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
