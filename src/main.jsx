import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={'error'} >
      {/* <Route index element={ <Navigate to={'/login'} replace /> } /> */}
      <Route index element={ <Home/> } />
      <Route path='login' element={ <Login/> } />
      <Route path='register' element={ <Register/> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
