import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import Headerlogo from '../assets/images/headerlogo.png';
import Dropdown from 'react-bootstrap/Dropdown';


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
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" style={{width:"50px"}} />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div
              style={{
               
                width: '263px',
                height: '57px',
                
              }}
            >
 <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic" style={{border:"3px solid",fontWeight:"bold",}}>
        Select language 
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>

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
