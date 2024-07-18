import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import DashboardUser from './comps/dashUser'
import SendMoney from './comps/dashUser/SendMoney'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={ <ErrorPage/> } >
      <Route index element={ <Home/> } />
      <Route path='login' element={ <Login/> } />
      <Route path='register' element={ <Register/> } />
      <Route path='dash-user' element={ <DashboardUser /> }>
        <Route path='send-money' element={ <SendMoney/> } />

      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
