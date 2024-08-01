import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import PetDetails from './pages/PetDetails/PetDetails'
import Dashboard from './pages/Dashboard/Dashboard'
import PostPet from './pages/PostPet/PostPet'
import EditPet from './pages/EditPet/EditPet'
import PetCatalog from './pages/PetCatalog/PetCatalog'
import Header from './components/Header/Header'


const App = () => {
  return (
      <div className='app'> 
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/petcatalog' element={<PetCatalog/>}/>
        <Route path='/:name' element={<PetDetails/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/post-pet' element={<PostPet/>}/>
        <Route path='/edit-pet/:id' element={<EditPet/>}/>
      </Routes>
      </div>
  )
}

export default App
