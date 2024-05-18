import React, {Suspense, useContext, useEffect, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import 'app/styles/index.scss';


import {classNames} from "../shared/lib/classNames/classNames";
import { useTheme } from 'app/providers/ThemeProvider';


import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/Sidebar';
import { error } from 'console';



const App = () => {
    const { theme } = useTheme();
   
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
            
          

                <Navbar/>
                <div className="content-page">
                <Sidebar />
                <AppRouter /> 
                </div>
            </Suspense>
             
        </div>
    );
};

export default App;
