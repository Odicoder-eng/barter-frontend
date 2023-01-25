import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Gallery from './component/Gallery';
import NavBar from './component/NavBar';
import Service from './component/Services';



function App() {
  return (
    <div>
      <NavBar/>
        <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/services' element = {<Service/>}/>
        <Route path='/gallery' element = {<Gallery/>}/>
        <Route path='/about' element = {<About/>}/>
        </Routes>

    </div>
  );
}

export default App;
