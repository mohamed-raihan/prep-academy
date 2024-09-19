import React from 'react';
import { Row, Col } from 'react-bootstrap';
import benefitslogo from '../assets/images/benefits.png'; 
import Data from '../Data.json'

function Benefits() {
  return (
    <div className="container py-5">
{Data.cat.map((items,index)=>(
  <React.Fragment>
<Row className="align-items-center">
       
       <Col md={6} className="mb-4 mb-md-0">
         <h1 style={{ color: "#FD661F" }} dangerouslySetInnerHTML={{__html:items.Benefits.heading}}>
          
         </h1>
         <p>
         <i class="fa-solid fa-angles-right fa-beat me-3"></i>{items.Benefits.benefits.benefits1}
         </p>
         <p>
         <i class="fa-solid fa-angles-right fa-beat me-3"></i>{items.Benefits.benefits.benefits2}
         </p>
         <p>
         <i class="fa-solid fa-angles-right fa-beat me-3"></i>{items.Benefits.benefits.benefits3}
         </p>
         <p>
         <i class="fa-solid fa-angles-right fa-beat me-3"></i>{items.Benefits.benefits.benefits4}
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
  </React.Fragment>
))}
      
    </div>
  );
}

export default Benefits;
