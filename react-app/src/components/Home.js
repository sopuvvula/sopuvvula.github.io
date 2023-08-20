import React from 'react';
import './assets/css/Home.css';
import logo from './assets/imgs/logo3.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <div>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="navigation">
          {/* <Link to="/">About</Link>
          <Link to="/">Contact</Link> */}
        </nav>
      </header>
    </div>
  );
};

export default Home;