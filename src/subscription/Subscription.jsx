import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Subscription.css";
import logo from "../assets/images/Hero.png";

const Subscription = () => {
  return (
    <div className="responsive-section mt-5">
      <Container fluid className="h-100">
        <Row className="h-100">
          {/* Left Side: Header and Content */}
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-start text-left p-4"
          >
            <h1 className="section-header">
              Crack CAT & Other MBA <br />
              Entrance Tests with <br />
              <span className="" style={{ color: "#FD661F" }}>
                Prep
              </span>{" "}
              <span style={{ color: "#0B7077" }}>Academy</span>
            </h1>
            <p className="section-content">
              Welcome to Prep Academy, your premier destination for unlocking
              the potential within you and achieving your dreams Carrier. With
              our years of experience and expertise, we have crafted a dynamic
              learning environment tailored to cater to the unique needs of
              every student.
            </p>
            <button
              className="btn  btn-sm"
              style={{
                width: "292px",
                height: "62px",
                backgroundColor: "#0B7077",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Subscription
            </button>
          </Col>

          {/* Right Side: Image */}
          <Col md={6} className="position-relative">
            <img src={logo} alt="Placeholder" className="img-fluid" />
            <div className="dots-container">
              <span className="dot big-dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subscription;
