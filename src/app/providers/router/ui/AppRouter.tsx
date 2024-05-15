import { AboutPageAsync } from 'pages/AboutPage'
import { MainPageAsync } from 'pages/MainPage'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/lib/routeConfid/routeConfid'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
const AppRouter = () => (
  <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
          <Route
              key={path}
              path={path}
              element={(
                  <Suspense fallback={<PageLoader />}>
                      <div className="page-wrapper">
                          {element}
                      </div>
                  </Suspense>
              )}
          />
      ))}
  </Routes>
);

export default AppRouter;