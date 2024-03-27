import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar.component'
import HomePage from './pages/home/home.component'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
