import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './form.css';
import Data from '../Data.json';
import ReCAPTCHA from 'react-google-recaptcha';

const LoginForm = () => {
  // const [capval,setcapval] = useState(null)
  return (
    <div className="login-form">
      {Data.cat.map((items, index) => (
        <React.Fragment key={index}>
          <h3>{items.Banner.form.heading}</h3>
          <Form>
            {/* Name Input */}
            <Form.Group controlId="formName" className="form-group">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            {/* Mobile Input */}
            <Form.Group controlId="formMobile" className="form-group">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="tel" placeholder="" />
            </Form.Group>

            <Row>
              {/* Email Input */}
              <Col md={6}>
                <Form.Group controlId="formEmail" className="form-group">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>
              </Col>

              {/* Pincode Input */}
              <Col md={6}>
                <Form.Group controlId="formPincode" className="form-group">
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
            </Row>

            {/* School/Institute Input */}
            <Form.Group controlId="formSchool" className="form-group">
              <Form.Label>School/Institute</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            {/* "I'm not a robot" Checkbox */}
            <Form.Group controlId="formBasicCheckbox" className="form-group" style={{ height: "70px", width: "250px", alignContent: "center" }}>
             <ReCAPTCHA
             sitekey={"6Let6kgqAAAAALZ9JUhNbV-5L5H1fj8Xm4cn_oxw"}
            //  onChange={(val) = setcapval(val)}
             />
             
            </Form.Group>

            {/* Submit Button */}
            <Button variant="" type="submit" style={{ backgroundColor: "#0B7077" }} > 
              Get a Callback
            </Button>
          </Form>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LoginForm;
