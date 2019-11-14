
import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Routes from './router/router';
import AppContext from './utils/context';
import * as Config from './utils/config';


const Header = () =>
{
    return <AppContext.Consumer>
        {
            (config) =>
            {
                const { routes } = config;

                return <nav style={{ 'background': '#fff' }} >
                    <ul>
                        <li>
                            <Link to={routes.home.path}>Home</Link>
                        </li>
                        <li>
                            <Link to={routes.about.path}>About</Link>
                        </li>
                        <li>
                            <Link to={routes.users.path}>Users</Link>
                        </li>
                    </ul>
                </nav>
            }

        }
    </AppContext.Consumer>
}

function App()
{
    return <div className="app">
        <Router>
            <AppContext.Provider value={{ ...Config }}>
                <Header />
                <Routes />
            </AppContext.Provider>
        </Router>
    </div>
}

export default App;
