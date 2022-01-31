import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HomeScreen, AboutScreen } from 'views'
import { routesPath } from 'constants.js'
import { initGA, logPageView } from 'utils/analytics'

const Analytics = () => {
  const location = useLocation()

  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    const currentPath = location.pathname + location.search
    logPageView(currentPath)
  }, [location])

  return null
}

const Router = () => {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        <Route path={routesPath.HOME} element={<HomeScreen />} />
        <Route path={routesPath.ABOUT} element={<AboutScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
