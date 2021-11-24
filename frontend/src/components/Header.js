import React from 'react';
import './Header.css'
import { Navbar, Button, Nav, NavDropdown, Form, Container, Offcanvas  } from 'react-bootstrap';
import home from '../components/home.png';
import permit from '../components/permit.png';
import report from '../components/report.jpg';
import noti from '../components/noti.png';
import organ from '../components/organ.png';
import dash1 from '../components/dash1.png';
// import family from '../components/family.png'
//import Tawa1 from './components/imgs/Tawa1';

function Header () {
// const Footer = () => {
	// return (
	// <div className="App">Footer component</div>

	return (
		<div>
		<Navbar bg="" expand={false}>
  <Container fluid>

  <NavDropdown  title="My Profile"  style={{ marginLeft:"70px"}} id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Sign out</NavDropdown.Item>
          </NavDropdown>


          <NavDropdown  title="Language" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action4">عربي</NavDropdown.Item>
            <NavDropdown.Item href="#action4">English</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Urdo</NavDropdown.Item>

          </NavDropdown>

          {/* <Navbar.Brand href="#">   */}
              <img
               src="./imgs/Tawa1.png" alt="" 
               style={{width: "170px", height: "90px", marginLeft: "750px"}}/>
               
			   {/* </Navbar.Brand> */}

  <Navbar.Toggle  style={{ marginRight:"100px"}} aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      >

               <img
               src="./imgs/Tawa1.png" alt="" 
               style={{width: "200px", height: "80px", marginRight:"200px"}}/>


<Offcanvas.Header closeButton>
      </Offcanvas.Header>
      <Offcanvas.Body id="body">
        <Nav className="justify-content-left flex-grow-1 pe-3"> <br></br>
          <Button id="home" variant="" style={{ width: '19rem',textAlign: "left", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}  size="lg"> <img src={home} style={{ width: "40px", marginTop: "10px", marginRight: "40px" ,marginLeft: "1px", marginBottom: "10px"}}/> Home </Button>{' '} <br></br> <br></br>
		  <Button id="home" variant=""style={{ width: '19rem',textAlign: "left", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}  size="lg"> <img src={permit} style={{ width: "30px", marginTop: "10px", marginRight: "40px" ,marginLeft: "1px", marginBottom: "10px"}}/> Permits</Button>{' '} <br></br> <br></br>
          <Button  id="home" variant=""style={{ width: '19rem',textAlign: "left", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}  size="lg"> <img src={dash1} style={{ width: "25px", marginTop: "10px", marginRight: "40px" ,marginLeft: "1px", marginBottom: "10px"}}/> Dashboard</Button>{' '} <br></br> <br></br>
		  <Button id="home" variant=""style={{ width: '19rem',textAlign: "left", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} size="lg"> <img src={noti} style={{ width: "28px", marginTop: "10px", marginRight: "30px" ,marginLeft: "1px", marginBottom: "10px"}}/> Notifications</Button>{' '} <br></br> <br></br>
		  <Button id="home" variant=""style={{ width: '19rem',textAlign: "left", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}  size="lg"> <img src={organ} style={{ width: "45px", marginTop: "10px", marginRight: "40px" ,marginLeft: "1px", marginBottom: "10px"}}/> Organ Donation</Button>{' '} <br></br> <br></br>
		  <Button id="home" variant=""style={{ width: '19rem',textAlign: "left", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}  size="lg"> <img src={report} style={{ width: "40px", marginTop: "10px", marginRight: "40px" ,marginLeft: "1px", marginBottom: "10px"}}/> Reports</Button>{' '} <br></br>
    
      
      {/* <Navbar.Brand href="#">
		
    <img
               src="./imgs/Tawa1.png" alt="" 
               style={{width: "200px", height: "80px"}}/>
               

			   </Navbar.Brand> */}
        
		  
{/* <Offcanvas.Header closeButton>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-left flex-grow-1 pe-3"> <br></br>
          <Button variant="outline-secondary">Home</Button>{' '} <br></br> <br></br>
		  <Button variant="outline-secondary">Permits</Button>{' '} <br></br> <br></br>
          <Button variant="outline-secondary">Dashboard</Button>{' '} <br></br> <br></br>
		  <Button variant="outline-secondary">Notifications</Button>{' '} <br></br> <br></br>
		  <Button variant="outline-secondary">Organ Donation</Button>{' '} <br></br> <br></br>
		  <Button variant="outline-secondary">Reports</Button>{' '} <br></br> */}

        </Nav>
        </Offcanvas.Body>
    </Navbar.Offcanvas>
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