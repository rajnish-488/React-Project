import React from 'react'
//import Link from 'react-router-dom';
import './Card.css';

const Card = (props) => {;
   return (
      <div>
         <div className='rrcard' style={{backgroundImage:"url("+ props.path + ")"}}>
            <h1 className='rrtitle' style={{color: props.titlecolor}}>{props.title}</h1>
            <div style={{textAlign:'center'}}>
               <button className='rrcardbutton' style={{backgroundColor: props.buttoncolor,color: props.titlecolor }}><a href="https://magmainfotech.com">Predict</a></button>
            </div>

            
         
            
         </div>
         
      </div>
   )
}

export default Card
