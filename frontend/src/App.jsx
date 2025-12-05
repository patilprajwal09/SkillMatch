import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Navbar from './components/navbar.jsx';
import AddJob from './pages/addJob.jsx';
import AddCompany from './pages/addCompany.jsx';




function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add-job' element={<AddJob/>} />
        <Route path='/' element={<AddCompany/>} />


      </Routes>
    </>
  )
}

export default App
