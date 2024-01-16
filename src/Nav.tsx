import { Routes, Route } from 'react-router-dom'
import Home from './root/pages/Home'
import UserPage from './root/pages/UserPage'
import CreateThread from './root/pages/CreateThread'


 
 const Nav = () => {
   return (
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/userPage" element = {<UserPage/>} />
      <Route path = "/createThread" element = {<CreateThread/>} />
      
    </Routes>
    
   )
 }
 
 export default Nav