import React, { Component } from "react";
import './Main.css';
import { Col, Row, Container, Card } from 'react-bootstrap';

export default class main extends Component {
    render() {
        return (
            <div>

<br></br>
<Container>
  <Row style={{paddingLeft: '100px', marginLeft:'300px', marginRight:'300px', border:'black 2px', borderRadius:'7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
    <Col id="user"><h6>Name</h6> <h1>m </h1></Col>
     
    <Col id="user"><h6>National ID Number </h6> <h1>s</h1></Col>
  </Row>
  </Container>
<br></br>

  <Card style={{marginLeft:'420px',marginRight:'420px', border: 'black 1px', borderRadius:'7px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}className="text-center">
  <Card.Header></Card.Header>
  <Card.Body>
    <Card.Text className=""><br></br> <br></br> <br></br> <br></br> <br></br>
    <h4> No permits exist</h4>
        </Card.Text><br></br> <br></br> <br></br> <br></br> <br></br>
  </Card.Body>
  <Card.Footer className="text-muted">1 days ago</Card.Footer>
</Card>




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

