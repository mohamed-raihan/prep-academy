import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import Footerlogo from '../assets/images/footerlogo.png'
import Data from '../Data.json'

const Footer = () => {
  return (
    <footer className="footer">
      {Data.cat.map((items,index)=>(
        <React.Fragment key={index}>
 <Container>
        <Row>
         
          <Col md={4} className="footer-section">
            <h5>Do you have <br />
        
            any questions?</h5>
            <p>
            Feel free to send us your questions or request a free consultation.            </p>
            <button style={{width:"214",height:"50px",backgroundColor:"#DB2F15"}}>GET A CALLBACK</button>
            <div className="d-flex flex-row mt-3" style={{gap:"30px"}}  >
                <div className="">
                <h6>SIGN UP</h6>
                <p>+1 890 123-52-61</p>
                </div>
                <div className="">
                <h6>Opening hours</h6>
                <p>09:00 To 05:30</p>
                </div>
            
            
            </div>
           
            <h6>Email</h6>
            <p>info@logoipsum.com</p>
          </Col>

          <Col md={4} className="footer-section">
            {/* <h5>Links</h5> */}
            <ul className="footer-links list-unstyled">
              {/* <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li> */}
            </ul>
          </Col>

         
          <Col md={4} className="footer-section">
<p>{items.Footer.text}</p>
           <div className="mt-3" style={{width:"186px",height:"53px"}}>
            <img src={Footerlogo} alt="" />
           </div>
            <p className='mt-3'>
            Don't know where to get your car tinted?Logoipsum — practical, safe, and affordable.
            </p>
            <p>
            © 2023, All Rights Reserved by <span style={{color:"#FF0000"}}>KANNATTU EDUCATIONAL SERVICES LLP</span>. 
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
          </Col>
        </Row>
      </Container>
        </React.Fragment>
      ))}
     
    </footer>
  );
};

export default Footer;
