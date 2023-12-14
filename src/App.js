import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import NavbarBot from './Components/NavbarBot';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Html from './Components/Html';
import LandingPage from './LandingPage';
import Dashboard from './Components/Dashboard';
import MainNavbar from './Components/MainNavbar';
import MainFooter from './Components/MainFooter';
import ParticleBackground from './ParticleBackground';
import MouseCur from './Components/MouseCur';
import ContactUs from './Components/ContactForm/ContactUs';
import PageNotFound from './Components/PageNotFound';
import MainCourse from './Components/Courses/MainCourse';

// import useContentful from './UseContentful';
// import { useEffect, useState } from 'react';

function App() {

  // const [jsob,setJsob]=useState([]);
  // const { jsobject} = useContentful();

  // useEffect(()=>{
  //   jsobject().then((response)=>console.log(response.items[0].fields.html));
  // },[]);

  return (<>
    <Router>
      <MainNavbar />
      <NavbarBot />
      <Routes>
        <Route path='/main' element={<Html />} > </Route>
        <Route path='/' element={<LandingPage />} ></Route>
        <Route path='/dash' element={<Dashboard />} ></Route>
        <Route path='/cont' element={<ContactUs />} ></Route>
        <Route path='/course' element={<MainCourse />} ></Route>
        <Route path='*' element={<PageNotFound/>} ></Route>
      </Routes>
      <MainFooter/>
    </Router>
    
  </>
  );
}

export default App;
