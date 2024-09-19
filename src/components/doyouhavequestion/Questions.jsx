import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import './question.css'; // Import your custom CSS
import Data from '../../Data.json'

const ResponsiveComponent = () => {
  return (
    <div className="responsive-container">
{Data.cat.map((items,index)=>(
  <React.Fragment key={index}>
  <Container className="p-4">
        <Row>
          <Col md={6}>
            <div
              className="d-flex flex-column align-items-center rounded position-relative custom-div"
              style={{
                backgroundColor: "#0B7077",
                border: "3px solid white",
              }}
            >
              <div className="m-3">
                <h2 style={{ color: "white" }}>Do you have any Questions?</h2>
              </div>
              <Accordion defaultActiveKey="0" className="mb-3 w-100 custom-accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <div className="accordion-header-content">
                      <div className="accordion-title">
                        {items.doyouhaveanyquestions.accordian.accordian1}
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
Lorem ipsum dolor sit amet consectetur. Senectus suspendisse enim cras porttitor sed mi sit scelerisque.
 Morbi dui interdum tristique nunc ornare. Risus ac dolor fermentum ullamcorper. Purus imperdiet et non eu. Quisque.
                 </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0" className="mb-3 w-100 custom-accordion">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <div className="accordion-header-content">
                      <div className="accordion-title">
                      {items.doyouhaveanyquestions.accordian.accordian2}
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
Yes, we offer international shipping to select countries. Please refer to our shipping policies or contact customer support for specific details regarding international shipments.

                 </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0" className="mb-3 w-100 custom-accordion">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="accordion-header-content">
                      <div className="accordion-title">
                          {items.doyouhaveanyquestions.accordian.accordian3}
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
If you receive a damaged or defective product, please contact our 
customer support team immediately for assistance with returns or exchanges.

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0" className="mb-3 w-100 custom-accordion">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="accordion-header-content">
                      <div className="accordion-title">
                        {items.doyouhaveanyquestions.accordian.accordian4}
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                  Do you have questions?

Our website strives to accurately depict product colors, but slight variations may occur due to screen settings. We recommend referring to product descriptions for additional details.
We offer a 15-day return window for a full refund or exchange on unused items. Returns must include original packaging and proof of purchase for processing.                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>


              <Accordion defaultActiveKey="0" className="mb-3 w-100 custom-accordion">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="accordion-header-content">
                      <div className="accordion-title">
                       {items.doyouhaveanyquestions.accordian.accordian5}
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                  Do you have questions?

               We offer a 15-day return window for a full refund or exchange on unused items.
                Returns must include original packaging and proof of purchase for processing.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

             
            </div>
          </Col>
          <Col md={6}>
  <div className="bottom-right-wrapper">
    <p className="bottom-text">Need more help?</p>
    <button className="bottom-button" style={{borderRadius:"15px"}} variant="light">
      Contact Us
    </button>
  </div>
</Col>

        </Row>
      </Container>
  </React.Fragment>
))}
    
    </div>
  );
};

export default ResponsiveComponent;
