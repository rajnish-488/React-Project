import React from 'react'
import ReactDOM from 'react-dom';
import "./navbar.css";
import logo from "./logo.png";
/*
const navSlide = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav-link');
   const navLinks = document.querySelectorAll('.nav-link li');

   burger.addEventListener('click', () => {
      // for toggle
      nav.classList.toggle('nav-active');
      // for nav-list
      navLinks.forEach((link, index) => {
         if (link.style.animation) {
            link.style.animation = '';
         } else {
            link.style.animation = "navLinkFade 0.5s ease-in 0.5s forwards";
         }

      });

   });






}
*/

const Header = () => {

   return (
      <div>
         <header>
            <nav className="navbar sticky">
               <div className="logo">
                  <div className="logo-img"><img src={logo} alt="error" style={{ width: "30px" }} /></div>
                  <div className="logo-name"><h3>PortFolio </h3></div>
               </div>


               <div>
                  <ul className="nav-link">
                     <li>
                        <a href="">HOME</a>
                     </li>
                     <li>
                        <a href="">ABOUT ME</a>
                     </li>
                     <li>
                        <a href="">PROJECTS</a>
                     </li>
                     <li>
                        <a href="">SKILLS</a>
                     </li>
                     <li>
                        <a href="">CONTACT</a>
                     </li>
                  </ul>
               </div>

               <div className="burger">
                  <div className="burger-box">
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

export default Header
