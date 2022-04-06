import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar';
import Home from './components/home'
import Signin from './components/signin'
import Searc from './components/search/Tearch'
import Setlocation from './components/location/Setlocation'
import Profile from './components/user/profile'
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
        </Routes>
      </Router>
    </>
  )
}

export default App;
