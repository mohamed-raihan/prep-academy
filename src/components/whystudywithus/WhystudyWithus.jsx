import React from 'react'
import './WhystudyWithus.css'
import heading from '../../assets/images/whystudywithus.png'
import vector1 from '../../assets/images/vector1.png'
import vector2 from '../../assets/images/vector2.png'
import vector3 from '../../assets/images/vector3.png'
import vector4 from '../../assets/images/vector4.png'
import vector5 from '../../assets/images/vector5.png'
import vector6 from '../../assets/images/vector6.png'

import { Button, Card, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

function WhystudyWithus() {
  return (
    <div className='py-5' style={{backgroundColor:"#FBFBFB"}}>
      <div className='head d-flex flex-column justify-content-center  align-items-center'>
        <div className='header-container'>
          <span className='text-left fw-bold'>Why Study</span>
          <span className='text-right fw-bold'>With Us?</span>
        </div>
        <div className='d-flex mt-3 justify-content-center align-items-center  w-75' 
             style={{width:"1476.99px", height:"153px", position:"relative"}}>
          <p  className='paragraph text-center mt-3 fs-md-1 fs-sm-5'>
            Are you ready to conquer the world? Your CAT 2024 journey might seem daunting, but remember, every great achievement starts with a single step. Believe in yourself, because you hold the power to make your dreams a reality!
          </p>
        </div>
      </div>

      <div className='mt-5 d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex justify-content-center align-items-center'>
          <Row>
            <Col md={4} className='d-flex justify-content-center align-items-center'>
              <Card className='d-flex flex-column justify-content-center align-items-center p-3 shadow border-light pt-5 card' 
                    style={{ width: '22rem', height:'20rem' }}>
                <Card.Img className='icons' style={{width:"4rem"}} variant="top" src={vector1} />
                <Card.Body>
                  <Card.Title className='card-title text-center'>
                    Innovative LIVE Platform
                  </Card.Title>
                  <Card.Text className='text-center card-text'>
                    Our custom innovative LIVE platform for classes makes students keep in pace with the content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className='col-center d-flex justify-content-center align-items-center '>
              <Card className='d-flex flex-column justify-content-center align-items-center p-3 shadow border-light pt-5 card' 
                    style={{ width: '22rem', height:'20rem' }}>
                <Card.Img className='icons' style={{width:"4rem"}} variant="top" src={vector2} />
                <Card.Body>
                  <Card.Title className='card-title text-center'>
                    State-Of-The-Art Reporting System
                  </Card.Title>
                  <Card.Text className='text-center card-text'>
                    Our state-of-the-art reporting system offers detailed live progress reports.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className='d-flex justify-content-center align-items-center'>
              <Card className='d-flex flex-column justify-content-center align-items-center p-3 shadow border-light pt-5 card' 
                    style={{ width: '22rem', height:'20rem' }}>
                <Card.Img className='icons' style={{width:"4rem"}} variant="top" src={vector4} />
                <Card.Body>
                  <Card.Title className='card-title text-center'>
                    Hybrid Model Coaching Programs
                  </Card.Title>
                  <Card.Text className='text-center card-text'>
                    We employ a hybrid model coaching program for students to get maximum input.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <div className='d-flex justify-content-center mt-5 align-items-center'>
          <Row className='.container-fluid'>
            <Col md={4} className='d-flex justify-content-center align-items-center'>
              <Card className='d-flex flex-column justify-content-center align-items-center p-3 shadow border-light pt-5 card' 
                    style={{ width: '22rem', height:'20rem' }}>
                <Card.Img className='icons' style={{width:"4rem"}} variant="top" src={vector3} />
                <Card.Body>
                  <Card.Title className='card-title text-center'>
                    Latest Study Materials
                  </Card.Title>
                  <Card.Text className='text-center card-text'>
                    Latest study materials enhance the effectiveness of learning.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className='col-center d-flex justify-content-center align-items-center '>
              <Card className='d-flex flex-column justify-content-center align-items-center p-3 shadow border-light pt-5 card' 
                    style={{ width: '22rem', height:'20rem' }}>
                <Card.Img className='icons' style={{width:"4rem"}} variant="top" src={vector5} />
                <Card.Body>
                  <Card.Title className='card-title text-center'>
                    Experiential and Digital Learning Activities
                  </Card.Title>
                  <Card.Text className='text-center card-text'>
                    Experiential learning activities and digitally enabled worksheets offer hands-on practice and real-time feedback.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className='d-flex justify-content-center align-items-center'>
              <Card className='d-flex flex-column justify-content-center align-items-center p-3 shadow border-light pt-5 card' 
                    style={{ width: '22rem', height:'20rem' }}>
                <Card.Img className='icons' style={{width:"4rem"}} variant="top" src={vector6} />
                <Card.Body>
                  <Card.Title className='card-title text-center'>
                    One-on-One Mentoring & Counselling
                  </Card.Title>
                  <Card.Text className='text-center card-text'>
                    We offer students one-on-one mentoring and counselling.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default WhystudyWithus;
