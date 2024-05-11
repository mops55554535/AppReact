import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';

import {Theme, ThemeContext} from "./providers/ThemeProvider/lib/ThemeContext";

import {classNames} from "../shared/config/lib/classNames";
import { useTheme } from './providers/ThemeProvider';


import { AboutPageAsync } from 'pages/AboutPage';
import { MainPageAsync } from 'pages/MainPage';
import { AppRouter } from './providers/router';




const App = () => {
   const { theme, toggleTheme } = useTheme();
    const bool = true;
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
        <AppRouter />
        </div>
    );
};

export default App;
