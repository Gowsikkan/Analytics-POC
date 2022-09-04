import React from "react";
import {useNavigate} from 'react-router-dom';
import "./App.css"

const Home = () => {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/dashboard');
  }
  
  const navigateToEmulator = () => {
    navigate('/emulator');
  }

  return (
    <div class="navbar">
    <div class="header">
    <h1> ANALYTICS POC</h1>
    </div>
      <button onClick={navigateToDashboard} className="button">Dashboard</button>
      <button onClick={navigateToEmulator} className="button">Mobile Emulator</button>
    </div>
  );
};
export default Home;