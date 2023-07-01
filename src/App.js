import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import VrajMandal from './Pages/VrajMandal';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import Govardhan from './Pages/VrajMandal places/Govardhan';
import Vrindavan from "./Pages/VrajMandal places/Vrindavan"
import Belvan from './Pages/VrajMandal places/Belvan';
import { useState, useContext } from 'react';
import {AudioContext} from "./AudioContext"
import Audiopage from './Pages/Audio';
function App() {
  const [isSidebarOpen,s]=useState(false)
  const [audio,setaudio]=useState([1,2,3,4])
  return (
  <AudioContext.Provider value={{audio,setaudio}}>
  <div>
      <div id="sidebar">
        <ul>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2QH83AR-ZmgyL2Rr1CI8GjmPYgNpAqWiXA&usqp=CAU" alt=" " width="250px"></img>
          
          <li>About</li>
          <li>Rate the App</li>
          <li>Give Feedback</li>
          <li>Contact</li>
        </ul>
      </div>
      <div id="sidebar1">
        
      </div>
      <button id="hamburger-btn" onClick={()=>{
        var sidebar = document.getElementById('sidebar');
        var sidebar1 = document.getElementById('sidebar1');
        var hamburgerBtn = document.getElementById('hamburger-btn');
        function openSidebar() {
          console.log(0)
          sidebar.style.left = '0';
          sidebar1.style.left = '250px';
          document.getElementById("main").style.opacity="0.5"
          hamburgerBtn.innerHTML = '&#x2715;'; 
          document.addEventListener('click', closeSidebarOnClickOutside);
          s(true);
        }
        
        function closeSidebarOnClickOutside(event) {
          console.log(1)
          if (!sidebar.contains(event.target) && event.target !== hamburgerBtn) {
            closeSidebar();
          }
        }
        
        function closeSidebar() {
          console.log(2)
          sidebar.style.left = '-250px';
          document.getElementById("main").style.opacity=""
          sidebar1.style.left = '-250px';
          hamburgerBtn.innerHTML = '&#9776;'; 
          document.removeEventListener('click', closeSidebarOnClickOutside);
          s(false);
        }
        
         if (isSidebarOpen===false) {
            openSidebar();
          } else {
            closeSidebar();
          }
        
      }}>&#9776;</button>
       <Router> 
        <div className="App" id="main"> 
           <Routes>  
          <Route path="/" element={<Home/>} />
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/vraj" element={<VrajMandal/>} /> 
          <Route path="/govardhan" element={<Govardhan/>} />
          <Route path="/vrindavan" element={<Vrindavan/>} />
          <Route path="/belvan" element={<Belvan/>} />
          <Route path="/audio" element={<Audiopage/>} />
        </Routes>  
          </div>  
    </Router>
    </div>
    </AudioContext.Provider>
  );
}

export default App;
