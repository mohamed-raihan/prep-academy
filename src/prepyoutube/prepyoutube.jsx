import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './prep.css'
import elephant from '../assets/images/elephant.png'

const VideoContentSection = () => {
  return (
    <Container fluid className="my-5" style={{backgroundColor:"#0B7077"}}>
      <Row className="align-items-center">
        {/* Left Side: YouTube Video Section */}
        <Col md={6} className="mb-4 mb-md-0 ">
          <div className="video-container">
            <h2>Crack CAT & Other MBA <br /> Entrance Tests with Unacademy</h2>
            <iframe
              width="70%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>

        {/* Right Side: Content Section */}
        <Col md={6}>
        <div className="" style={{position:"relative",left:"10%",width:"307px"}}><img src={elephant} alt="" width={"307px"} height={"307px"} /></div>

          <div className="content-section">
            <h6 style={{color:"#FD661F"}}>CAT 2024 SUCCESS MANTRA</h6>
            <h3>Crack CAT & Other MBA <br />Entrance Tests with Prep Acdemy</h3>
            <p style={{color:"#FD661F"}}>576,969 views . 3 weeks ago</p>
            <p>
            Stay in the loop and never miss out! Subscribe to our YouTube channel for the latest updates and insightful classes. 
            We are keep updating exam notification, syllabus and other educational videos all related to CAT exam preparatins.
            </p>
            {/* <button className="btn btn-primary"><i class="fa-solid fa-angle-right"></i></button>
            <button className="btn btn-primary"><i class="fa-solid fa-angle-right"></i></button> */}

            <div className='buttons' style={{width:"100px",height:"60px",position:"relative",top:"10%"}}>
                
              <i class="fa-solid fa-angle-left" style={{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"#FD661F",border:"1px",textAlign:"center",alignContent:"center",color:"white"}}></i>
              <i class="fa-solid fa-angle-right" style={{width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"#FD661F",border:"1px",textAlign:"center",alignContent:"center",color:"white"}}></i>
                 
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoContentSection;
