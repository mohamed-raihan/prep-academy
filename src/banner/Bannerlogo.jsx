import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './bannerlogo.css';
import Form from './Formpage';
import cat1 from '../assets/images/cat1.png'
import cat2 from '../assets/images/cat2.png'
import cat3 from '../assets/images/cat3.png'

const Banner = () => {
  return (
    <div className="banner-container">
      <Container className="d-flex align-items-center justify-content-between flex-column flex-md-row">
        <div className="banner-content">
          <h1 className="text-white">Make Yourself An <br /> IIM Alumni</h1>
          {/* <div className="" style={{width:"78px",height:"78px"}}>
            <img src={cat1} alt="" />
            
            </div> */}
          <p className="text-white">
           
           <img src={cat1} alt="" width={"78px"} height={"78px"}/>  <b>CAT online and Offline classes</b>. Cover your syllabus well in advance with a regular flow of live online or classroom classes.
          </p>
          <p className="text-white">
           <img src={cat2} alt="" width={"78px"} height={"78px"} /> <b>Regular Tests</b>. Chapter tests, part tests, Mock tests are held regularly to  help you introspect.
          </p>
          <p className="text-white">
          <img src={cat3} alt="" width={"78px"} height={"78px"}/>
          <b>Mentoring</b>. Regular mentoring by our esteemed mentors from top engineering colleges.
          </p>
         
          <Button className="banner-button bg-warning rounded" style={{ width: '160px', height: '45px' }}>Enquire Now</Button>
        </div>

        {/* Right Side: Form for Larger Screens */}
        <div className="form-container d-none d-md-block">
          <Form />
        </div>
      </Container>

      {/* Form After the Banner Content for Smaller Screens */}
      <div className="form-containermobile d-block d-md-none mt-4">
        <Form />
      </div>
    </div>
  );
};

export default Banner;
