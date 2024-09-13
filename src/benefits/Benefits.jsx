import React from 'react';
import { Row, Col } from 'react-bootstrap';
import benefitslogo from '../assets/images/benefits.png'; 

function Benefits() {
  return (
    <div className="container py-5">
      <Row className="align-items-center">
       
        <Col md={6} className="mb-4 mb-md-0">
          <h1 style={{ color: "#FD661F" }}>
            Why choose CAT Exam? How can <br /> the IIM brand fast track your career?
          </h1>
          <p>
          <i class="fa-solid fa-angles-right fa-beat me-3"></i>Better career options
          </p>
          <p>
          <i class="fa-solid fa-angles-right fa-beat me-3"></i>Salary Difference between an IIM graduate and others
          </p>
          <p>
          <i class="fa-solid fa-angles-right fa-beat me-3"></i>Develop your business and entrepreneurship skills
          </p>
          <p>
          <i class="fa-solid fa-angles-right fa-beat me-3"></i>Strengthen your people network and job security
          </p>
        </Col>

        
        <Col md={6}>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "100%", 
              height: "100%", 
            }}
          >
           
            <img
              src={benefitslogo}
              alt="Benefits"
              className="img-fluid" 
              style={{ maxWidth: "100%", height: "auto" }} 
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Benefits;
