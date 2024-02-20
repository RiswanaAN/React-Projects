import React from 'react'
import {createBrowserRouter } from 'react-router-dom'
import Register from './authentication/Register'
import MusicPlayer from './components/MusicPlayer'
import App from './App'

const router= createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/register", element: <Register />},
    {path: "/musicplayer", element: <MusicPlayer />},
   ])

export default router