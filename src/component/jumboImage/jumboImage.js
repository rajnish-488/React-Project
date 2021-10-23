import React from 'react';
import './jumboImage.css';
import image1 from '../images/jumbo3.jpg';
import { Jumbotron, Button } from 'reactstrap';


const jumboImage = () => {
   return (
      <div className="rrjumbo" style={{backgroundImage : "url("+ image1 + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
      <div style={{ height: "120px" }}></div>
      <Jumbotron>
        <h1 className=" rrjumbotitle">Hello, world!</h1>
        <p className="rrjumbocontent">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to fea is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        
        <hr className="my-2" />
        <div className="rrjumbobutton">
        <button className="">Watch videos</button>
        </div>
      </Jumbotron>
     
    </div>
   )
}

export default jumboImage
