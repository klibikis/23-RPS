import { useState } from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.page'
import Game from './Pages/Game/Game.page'
import Highscores from './Pages/Highscores/Highscores.page'

function App() {

  return (
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/play" element = {<Game/>} />
        <Route path = "/highscores" element = {<Highscores/>} />
      </Routes>
  )
}

export default App
