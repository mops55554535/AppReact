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
import { Sidebar } from 'widgets/Sidebar';




const App = () => {
    const { theme } = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
             <Navbar/>
            <div className="content-page">
            <Sidebar />
            <AppRouter />
            </div>
        </div>
    );
};

export default App;
