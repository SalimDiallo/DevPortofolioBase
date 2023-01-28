import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Services from './pages/Services';
import Skylls from './pages/Skylls';

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/skills' element={<Skylls/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
  </BrowserRouter>
  );
};

export default App;