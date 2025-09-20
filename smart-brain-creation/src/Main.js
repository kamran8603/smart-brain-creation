import React from 'react'
import { routes } from './routes/routes'
import {RouterProvider, createBrowserRouter} from "react-router-dom"

function Main() {
    const allRoutes = createBrowserRouter(routes)
  return <RouterProvider router={allRoutes} />
}

export default Main
