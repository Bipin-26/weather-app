import { useContext, useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/home.pages'
import { WeatherContext } from './contexts/weather.context'

function App() {
  return (
    <>
        <HomePage />
    </>
  )
}

export default App
