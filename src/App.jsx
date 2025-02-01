import React from 'react'
import { Routes,Route } from 'react-router-dom'
import GamePage from './Pages/GamePage'
import HomePage from './Pages/HomePage'
import PlayGame from './Pages/PlayGame'
import SinglePlayerGame from './Pages/SinglePlayerGame'
function App() {
  return (
   <>
   <Routes>
    <Route path="/game" element={<GamePage/>}>

    </Route>
    <Route path="/" element={<HomePage/>}>

    </Route>
    <Route path='/startGame' element={<PlayGame/>}>

    </Route>
    <Route path="/singlePlayer" element={<SinglePlayerGame/>}>

    </Route>
    </Routes></>
  )
}

export default App