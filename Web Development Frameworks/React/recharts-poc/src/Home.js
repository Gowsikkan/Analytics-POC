import React from "react";
import { Link } from "react-router-dom";
import "./App.css"

const Home = () => {
  return (
    <div class="navbar">
    <div class="header">
    <h1> ANALYTICS POC</h1>
    </div>
      <button> <Link to="/dashboard">Dashboard</Link></button>
      <button> <Link to="/emulator">Mobile Emulator</Link></button>
    </div>
  );
};
export default Home;