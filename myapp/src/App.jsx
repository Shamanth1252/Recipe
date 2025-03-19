
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Type from './Pages/Type';
import Footer from './Components/Footer';
function App() {
  

  return (
    <>
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='type' element={<Type/>}/>
        </Routes>
        <Footer/>
      </Router>
     
    </>
  )
}

export default App
