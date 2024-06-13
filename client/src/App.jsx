import { useContext } from 'react'
import UserProvider from './components/provider/UserProvider'
import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import './App.css'
import OneMovie from './components/OneMovie'
import Login from './views/Login'
import Register from './views/Register'
import TvShow from './components/TvShow'
import Movies from './components/Movies'
import OneTvShow from './components/OneTvShow'

function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/TvShow' element={<TvShow />} />
          <Route path='/TvShow/:id' element={<OneTvShow />} />
          <Route path='/movies/:id' element={<OneMovie />} />
          <Route path='*' element={<Navigate to='/' replace />} />

        </Routes>
      </UserProvider>


    </div>
  )
}

export default App
