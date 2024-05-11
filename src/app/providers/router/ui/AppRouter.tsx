import { AboutPageAsync } from 'pages/AboutPage'
import { MainPageAsync } from 'pages/MainPage'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/lib/routeConfid/routeConfid'

export default function  () {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(routeConfig).map(({element, path})=>(

              <Route
               key={path}
               path = {path}
               element = {element}
              />
            ))}
        </Routes>
    </Suspense>
  )
}
