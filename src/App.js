
import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Routes from './router/router';

const Header = () =>
{
  return <nav style={{ 'background': '#fff' }} >
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </nav>
}

function App()
{
  return <div className="app">
    <Router>
      <React.Fragment>
        <Header />
        <Routes />
      </React.Fragment>
    </Router>
  </div>
}

export default App;
