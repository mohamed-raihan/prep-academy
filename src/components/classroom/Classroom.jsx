import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import man from '../../assets/images/classroomMan.png'
import './Classroom.css'; 
import rectangle from '../../assets/images/rectangleN.png'
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Data from '../../Data.json'



function Classroom() {
  return (
    <div style={{backgroundColor:"#FBFBFB"}} className='d-flex justify-content-center pt-5 align-items-center '>
        {Data.cat.map((items,index)=>(
      <React.Fragment key={index}>
           <div className='shadowdiv m-5 w-lg-75 '>
            <Row Classname="row d-flex justify-content-center pt-5 align-items-center w-100">
                <Col className='column1' lg={6}>
                    <div className='rectangle'>
                        <img width={'100%'}  height={'600px'} src={rectangle} alt=""/>
                        <div className='content w-75'>
                            <h3 className='text-light'>{items.Classroom.heading}</h3>
                            <div className='content-child d-flex mt-5'>
                                <div><img width={'150px'} src={icon1} alt="" /></div><span className='text-light mt-4'>
                                    250 + Hours on CAT sessions & on non-CAT concepts.
                                    </span>
                            </div>
                            <div className='content-child d-flex'>
                                <div ><img width={'150px'} src={icon2} alt="" /></div>
                                <span className='text-light'>
                                    30 CAT + 70 non-CAT mocks 5600 topic-wise practice questions physical study material included.
                                    </span>
                            </div>
                            <div className='content-child d-flex'>
                                <div><img width={'150px'} src={icon3} alt="" /></div>
                                <span className='text-light'>45 CAT + 48 non-CAT Sectional tests Mentorship Programs GD/PI.</span>
                            </div>
                            <div>
                                <Button className='purchase-button d-flex  align-item-center justify-content-center  p-3 border' style={{backgroundColor:"#0B7077"}}>Purchase<FontAwesomeIcon style={{backgroundColor:"#FBFBFB",borderRadius:'50%',color:"#FD661F",display:'inline-block'}} className='ms-2 p-1' icon={faArrowRight} /></Button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='column2' lg={6}>
                    <img  height={'600px'} src={man} alt="" />
                </Col>
            </Row>
        </div>
</React.Fragment>
        ))}
        
    </div>
  )
}

export default Classroom