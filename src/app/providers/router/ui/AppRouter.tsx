import { AboutPageAsync } from 'pages/AboutPage'
import { MainPageAsync } from 'pages/MainPage'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/lib/routeConfid/routeConfid'

export default function  () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(routeConfig).map(({element, path})=>(

              <Route
               key={path}
               path = {path}
               element = {(
              //element - компонент со страницей
              <div className='page-wrapper'>
                  {element}
              </div>
              )}
              />
            ))}
        </Routes>
    </Suspense>
  )
}
