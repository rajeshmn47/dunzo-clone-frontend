import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar';
import Home from './components/home'
import Signin from './components/signin'
import Searc from './components/search/Tearch'
import Setlocation from './components/location/Setlocation'
import Storedetails from './components/search/storedetails'
import Profile from './components/user/profile'
import Otpauth from './components/authentication/Otpauthentication'
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Searc/>} />
          <Route path='/set-location' element={<Setlocation/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/store/:id' element={<Storedetails/>} />
          <Route path='/auth' element={<Otpauth/>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App;
