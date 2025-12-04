import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Navbar from './components/navbar.jsx';




function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Register />} />

      </Routes>
    </>
  )
}

export default App
