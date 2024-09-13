import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Headerlogo from '../assets/images/headerlogo.png';
import Selectlanguage from '../assets/images/selectlanguage.png';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Headerlogo}
            alt="Logo"
            className="d-inline-block align-top"
            style={{ width: '257px', height: '74px' }}
          />
        </Navbar.Brand>

        {/* Move the toggle button to the right */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div
              style={{
                backgroundImage: `url(${Selectlanguage})`,
                width: '263px',
                height: '57px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>

            <Button
              variant=""
              className="ms-3 b rounded shadow"
              style={{
                backgroundColor: '#0B7077',
                width: '193px',
                height: '57px',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Enquire now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
