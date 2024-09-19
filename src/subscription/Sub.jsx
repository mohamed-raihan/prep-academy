
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Subscription.css'; 
import logo from '../assets/images/Hero.png'
import Data from '../Data.json'



const Subscription = () => {
  return (
    <div className="responsive-section mt-5">
      {Data.cat.map((item,index)=>(
        <React.Fragment key={index}>
  <Container fluid className="h-100">
        <Row className="h-100">
          {/* Left Side: Header and Content */}

          <Col md={6} className="d-flex flex-column justify-content-center align-items-start text-left p-4">
       <h1 className="section-header" >
       <span dangerouslySetInnerHTML={{__html:item.Subscription.heading}}></span>
        <span style={{color:"#FD661F"}}> Prep </span>
        <span style={{color:"#0B7077"}}> academy</span>
       </h1>
       <p className="section-content">
        {item.Subscription.content}
       </p>
        <button className="btn  btn-sm" style={{width:"292px",height:"62px",backgroundColor:"#0B7077",fontWeight:"bold",color:"white"}}>Subscription</button>
</Col>



          {/* Right Side: Image */}
          <Col md={6} className="position-relative">
          <img src={item.Subscription.image} alt="image" className="img-fluid" />
          <div className="dots-container">
            <span className="dot big-dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </Col>
         

         
        </Row>
      </Container>
        </React.Fragment>
      ))}
    
    </div>
  );
};

export default Subscription;
