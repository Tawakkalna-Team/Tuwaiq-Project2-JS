import React from "react";
import { Component } from "react";
import './Permits.css';
import { Card, Container, Row, Col } from 'react-bootstrap';


export default class Permits extends Component {
    render() {
        return (
            <div>
                <h1>Permits</h1>
                {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}


<Container>
  <Row>
    <Col>
    <Card className="myCard">
        <img className="myImg" src={"https://tawakkalna.sdaia.gov.sa/assets/img/images/cart.png"} alt="" />
        <div>

        <h5> hello </h5> 
        <h6> dkxqdeqxkj </h6> 
        </div>
        <p> > </p>
</Card>
    </Col>

<Col>
    <Card className="myCard">
        <img className="myImg" src={"https://tawakkalna.sdaia.gov.sa/assets/img/images/cart.png"} alt="" />
        <div>

        <h5> hello </h5> 
        <h6> dkxqdeqxkj </h6> 
        </div>
        <p> > </p>
</Card>
</Col>
    
    <Col>
    <Card className="myCard">
        <img className="myImg" src={"https://tawakkalna.sdaia.gov.sa/assets/img/images/cart.png"} alt="" />
        <div>

        <h5> hello </h5> 
        <h6> dkxqdeqxkj </h6> 
        </div>
        <p> > </p>
</Card>
    </Col>
    </Row>
  </Container>
  

<Container>
<Row>
  <Col>
  <Card className="myCard">
        <img className="myImg" src={"https://tawakkalna.sdaia.gov.sa/assets/img/images/cart.png"} alt="" />
        <div>

        <h5> hello </h5> 
        <h6> dkxqdeqxkj </h6> 
        </div>
        <p> > </p>
</Card>  
  </Col>
<Col>
    <Card className="myCard">
        <img className="myImg" src={"https://tawakkalna.sdaia.gov.sa/assets/img/images/cart.png"} alt="" />
        <div>

        <h5> hello </h5> 
        <h6> dkxqdeqxkj </h6> 
        </div>
        <p> > </p>
</Card>
    </Col>

    
    <Col>
    <Card className="Card">
        <img className="myImg" src={"https://tawakkalna.sdaia.gov.sa/assets/img/images/cart.png"} alt="" />
        <div>

        <h5> hello </h5> 
        <h6> dkxqdeqxkj </h6> 
        </div>
        <p> > </p>
</Card>
    </Col>
    </Row>
</Container>
            </div>
         )
    }
} 
