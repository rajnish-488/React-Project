import React, { useState } from 'react';
import "./navbar.css";
import logo from "./logo.png";

function Oldheader() {
   const [isToggle, setToggle] = useState(false);
   return (
      <div>
         <header>
            <nav className="navbar sticky">
               <div className="logo">
                  <div className="logo-img"><img src={logo} alt="logo" style={{ width: "30px" }} /></div>
                  <div className="logo-name"><h3>PortFolio </h3></div>
               </div>


               <div>
                  <ul className={isToggle ? "nav-link nav-active" : "nav-link nav-inactive"} >
                     <li className={isToggle ? "nav-link-active" : "nav-link-inactive"}>
                        <a href="#home">HOME</a>
                     </li>
                     <li className={isToggle ? "nav-link-active" : "nav-link-inactive"}>
                        <a href="#about">ABOUT ME</a>
                     </li>
                     <li className={isToggle ? "nav-link-active" : "nav-link-inactive"}>
                        <a href="#project">SERVISES</a>
                     </li>
                     <li className={isToggle ? "nav-link-active" : "nav-link-inactive"}>
                        <a href="#skill">MEET DOCTOR</a>
                     </li>
                     <li className={isToggle ? "nav-link-active" : "nav-link-inactive"}>
                        <a href="#contact">CONTACT</a>
                     </li>
                  </ul>
               </div>

               <div className="burger" onClick={() => setToggle(!isToggle)}>
                  <div className="burger-box" >
                     <div className="line1">CLICK IT</div>
                     <div className="line1">CLICK IT</div>
                     <div className="line1">CLICK IT</div>
                  </div>
               </div>



            </nav>

         </header>
      </div>
   )
}

export default Oldheader
