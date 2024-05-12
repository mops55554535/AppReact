import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import 'app/styles/index.scss';

import {Theme, ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";

import {classNames} from "../shared/lib/classNames";
import { useTheme } from 'app/providers/ThemeProvider';


import { AboutPageAsync } from 'pages/AboutPage';
import { MainPageAsync } from 'pages/MainPage';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';




const App = () => {
   const { theme, toggleTheme } = useTheme();
    const bool = true;
    return (
        <div className={classNames('app', {}, [theme])}>
             <Navbar/>
            <button onClick={toggleTheme}>TOGGLE</button>
           
        <AppRouter />
        </div>
    );
};

export default App;
