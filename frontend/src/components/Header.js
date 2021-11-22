import React from 'react';
import './Header.css'
import { Navbar, Button, Nav, NavDropdown, Form, Container, Offcanvas, FormControl } from 'react-bootstrap';
//import Tawa1 from './components/imgs/Tawa1';

function Header () {
// const Footer = () => {
	// return (
	// <div className="App">Footer component</div>

	return (
		<div>
		<Navbar bg="" expand={false}>
  <Container fluid>

  <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      >

		  
<Offcanvas.Header closeButton>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-left flex-grow-1 pe-3">
          <Button variant="outline-secondary">Home</Button>{' '} <br></br>
		  <Button variant="outline-secondary">Permits</Button>{' '} <br></br>
          <Button variant="outline-secondary">Dashboard</Button>{' '} <br></br>
		  <Button variant="outline-secondary">Notifications</Button>{' '} <br></br>
		  <Button variant="outline-secondary">Organ Donation</Button>{' '} <br></br>
		  <Button variant="outline-secondary">Reports</Button>{' '} <br></br>

        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>

    <Navbar.Brand href="#">
		
    <img
               src="./imgs/Tawa1.png" alt="" 
               style={{width: "200px", height: "80px", marginRight:"900px"}}/>
               

			   </Navbar.Brand>
			   <NavDropdown  title="My Profile"  style={{ marginRight:"100px"}} id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Sign out</NavDropdown.Item>
          </NavDropdown>
  </Container>
</Navbar>
</div>
	);
};


export default Header;



          {/* <Button variant="outline-success">Search</Button> */}

		//   <NavDropdown title="My Profile" id="offcanvasNavbarDropdown">
        //     <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
        //     <NavDropdown.Item href="#action4">Sign out</NavDropdown.Item>
        //     <NavDropdown.Divider />
        //   </NavDropdown>