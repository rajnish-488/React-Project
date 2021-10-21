import React from 'react'
import './Holdercard.css';
import Card from "./Card.js";
import {Row, Col, Container} from 'reactstrap';

const Holdercard = () => {
   return (
      <div className="holder">
         <h1 className="heading"> The Prediction Section</h1>
         <div style={{ height: "60px" }}></div>
            <Container>
            <Row>
               <Col >
                  
                  <Card path='../images/diabetes.jpg' title="Dibatese Prediction for the Females" link="/dibates" titlecolor="red" buttoncolor="blue"/>
                  
               </Col>
                <Col>
                  
                  <Card path='../images/img1.jpg' title="Dibatese Prediction for the Females" link="/dibates" titlecolor="red" buttoncolor="blue"/>
                  
               </Col>
                <Col>
                  
                  <Card path='../images/img1.jpg' title="Dibatese Prediction for the Females" link="/dibates" titlecolor="red" buttoncolor="blue"/>
                  
               </Col>
                <Col>
                  
                  <Card path='../images/img1.jpg' title="Dibatese Prediction for the Females" link="/dibates" titlecolor="red" buttoncolor="blue"/>
                  
               </Col>
               
            
            </Row>
            </Container>
      </div>
   )
}

export default Holdercard
