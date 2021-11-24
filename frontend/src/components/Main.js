import React, { Component } from "react";
import './Main.css';
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
// import { FontAwesomeIcon, house-user } from '@fortawesome/react-fontawesome'
import family from '../components/family.png';
import health from '../components/health.png';
import MOH from '../components/MOH.png';
import qr from '../components/qr.png';
import barcode2 from '../components/barcode2.png';

export default class main extends Component {
  render() {
    return (
      <div>

        <br></br>

        <Container>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row>
            <Col xs={6} md={3}>
            
              <Card id="green" border="success" style={{ width: '19rem', border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                <Card.Body>
               
                  <Card.Title id="immune"><img src={barcode2} style={{width: "40px", marginLeft: "1px"}}/><br></br>
                   Immune <br></br>                                                                                               
                   Last updated<br></br>
                   Wed, Nov 01:42 PM</Card.Title>
                </Card.Body>
              </Card>
              </Col>
              

          
            <Col xs={6} md={6} style={{  border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
              <Row>
                <Col xs={6}>
                <h6>Name</h6> <h1>m </h1>
                </Col>
                <Col xs={6}>
                <h6>National ID Number </h6> <h1>s</h1>
                </Col>
              </Row>
            </Col>
            <Col xs={6} md={3}>
              
            </Col>
          </Row>
          <br></br>
          
          <Row>
            <Col xs={6} md={3}>
        
            <div className="mb-2"> 
    <Button id="health" style={{ width: '19rem', paddingRight: "40px",textAlign: "center", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} variant="succuss" size="lg"><img src={health} style={{ width: "30px", marginTop: "10px", marginRight: "40px" ,marginLeft: "1px", marginBottom: "10px"}}/>
 Health Condition <h6>Health status details and colors</h6>
     </Button>{' '} 
     

    <Button id="health" style={{ width: '19rem', paddingLeft: "1px", textAlign: "center", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} variant="succuss" size="lg"><img src={family} style={{ width: "30px", marginTop: "10px", marginRight: "30px" , marginBottom: "10px"}}/>
    Family Members and Sponsored Members
    </Button>{' '}

    <Button className="covid" style={{ width: '19rem', paddingRight: "50px", textAlign: "center", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} variant="succuss" size="lg"><img src={MOH} style={{ width: "30px", marginTop: "10px", marginRight: "50px" ,paddingLeft: "1px"}}/>
    MOH COVID-19 <br></br>Dashboard
    </Button>{' '}

    <Button className="covid" style={{ width: '19rem', textAlign: "center", border: 'black 2px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} variant="succuss" size="lg"><img src={qr} style={{ width: "30px", marginTop: "10px", marginRight: "10px" }}/>
    Use QR Code to visit the gathering place
    </Button>{' '}
  

  </div>
              
            </Col>

            <Col xs={6} md={6}>
               <Card style={{ border: 'black 1px', borderRadius: '7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                  <Card.Text className="permit"><br></br> <br></br> <br></br> <br></br> <br></br>
                 No permits exist
                  </Card.Text><br></br> <br></br> <br></br> <br></br> <br></br>
                </Card.Body>
                <Card.Footer className="text-muted">1 days ago</Card.Footer>
              </Card>

            </Col>
            <Col xs={6} md={3}>
            </Col>
          </Row>
        <br></br>
<Row>
  <Col>
  
  </Col>
</Row>
        </Container>
        

        {/* No permits exist */}

        {/* <Card>
  <Card.Header style={{display:"flex", justifyContent:"center"}} ><h5>Name</h5><h5>National ID </h5></Card.Header>
  {/* <Card.Header style={{display:"flex"}} as="h5"></Card.Header> */}

        {/* <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card> */}
      </div>
    )
  }
}

// import React from 'react';

// const Main = () => {
// 	return <div className="App">App component</div>;
// };

// export default Main;

