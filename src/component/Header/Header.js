import React, { Component } from 'react'
import "./Header.css";
import { MenuItems } from './MenuItems';

class Header extends Component {
   state = { clicked: false }



   render() {
      return (
         <nav className="NavbarItems">
            <h1 className="navbar-logo">React</h1>

            <div className="menu-icon" onClick={this.handleClick}>

            </div>
            <ul>
               {MenuItems.map((item, index) => {
                  return (
                     <li key={index}>
                        <a className={item.cName} href={item.url}>
                           {item.title}
                        </a>
                     </li>
                  )
               })}

            </ul>
         </nav>
      )
   }
}

export default Header

