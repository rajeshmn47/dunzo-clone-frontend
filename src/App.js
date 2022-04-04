import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar';
import Home from './components/home'
import Searc from './components/search/Tearch'
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
    
     <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Searc/>} />
    
        </Routes>
      </Router>
    </>
 
  )
}

export default App;
