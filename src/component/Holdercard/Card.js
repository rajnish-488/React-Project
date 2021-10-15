import React from 'react'
import Link from 'react-router-dom';
import './Card.css';

const Card = (props) => {;
   return (
      <div>
         <div className='card' style={{backgroundImage:"url("+ props.path + ")"}}>
            <h1 className='title'>{props.title}</h1>
            <div style={{textAlign:'center'}}>
               <button className='cardbutton'>Predict</button>
            </div>
            
         
            
         </div>
         
      </div>
   )
}

export default Card
