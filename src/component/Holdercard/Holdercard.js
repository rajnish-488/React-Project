import React from 'react'
import './Holdercard.css';
import Card from "./Card.js";

const Holdercard = () => {
   return (
      <div>
         <h1 className="heading"> The Prediction Section</h1>
         <div className="card-section">
            <div className="cardblock">
               <Card path='../images/img1.jpg' title="Dibatese Prediction for the Females" link="/dibates"/>
            </div>

         </div>

      </div>
   )
}

export default Holdercard
