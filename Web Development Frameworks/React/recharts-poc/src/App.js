import React from 'react';
import data from './components/cars.json';
import Charts from './components/charts';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Emulator from './components/Emulator';
import Home from './Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Charts data={data}/>} />
        <Route path="/emulator" element={<Emulator/>} />
      </Routes>
    </Router>
  );
}
