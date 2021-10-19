import React, { useState } from 'react';
import "./navbar.css";
import logo from "./logo.png";

function Oldheader() {
   const [isToggle, setToggle] = useState(false);
   return (
      <div>
         <header>
            <nav className="rajnavbar rajsticky">
               <div className="rajlogo">
                  <div className="rajlogo-img"><img src={logo} alt="rajlogo" style={{ width: "30px" }} /></div>
                  <div className="rajlogo-name"><h3>PortFolio </h3></div>
               </div>


               <div>
                  <ul className={isToggle ? "rajnav-link rajnav-active" : "rajnav-link rajnav-inactive"} >
                     <li className={isToggle ? "rajnav-link-active" : "rajnav-link-inactive"}>
                        <a href="#home">HOME</a>
                     </li>
                     <li className={isToggle ? "rajnav-link-active" : "rajnav-link-inactive"}>
                        <a href="#about">ABOUT ME</a>
                     </li>
                     <li className={isToggle ? "rajnav-link-active" : "rajnav-link-inactive"}>
                        <a href="#project">SERVISES</a>
                     </li>
                     <li className={isToggle ? "rajnav-link-active" : "rajnav-link-inactive"}>
                        <a href="#skill">MEET DOCTOR</a>
                     </li>
                     <li className={isToggle ? "rajnav-link-active" : "rajnav-link-inactive"}>
                        <a href="#contact">CONTACT</a>
                     </li>
                  </ul>
               </div>

               <div className="rajburger" onClick={() => setToggle(!isToggle)}>
                  <div className="rajburger-box" >
                     <div className="rajline1"></div>
                     <div className="rajline1"></div>
                     <div className="rajline1"></div>
                  </div>
               </div>



            </nav>

         </header>
      </div>
   )
}

export default Oldheader
