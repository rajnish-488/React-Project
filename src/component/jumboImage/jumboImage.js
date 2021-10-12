import React from 'react';
import './jumboImage.css';
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.jpg';
import image4 from '../images/img4.jpg';


const jumboImage = () => {
   return (
      <div>
         <div className="jumboimage">
            <div className="jimage">
               <img src={image1} alt="nating " />
            </div>
            <div className="jimage">
               <img src={image2} alt="nating " />
            </div>
            <div className="jimage">
               <img src={image3} alt="nating " />
            </div>
            <div className="jimage">
               <img src={image4} alt="nating " />
            </div>
         </div>

      </div>
   )
}

export default jumboImage
