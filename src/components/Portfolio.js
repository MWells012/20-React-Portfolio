import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';


const Portfolio = () => {
  return (
    <Container>
      <h1 style={{marginTop: '40px', color:'white', fontSize:'30px'}} >
        Here are some of the things I've written!
      </h1>


    <Card style={{ marginLeft:'0px', marginTop: '20px',height: '30rem',width: '20rem' }}>
      <Card.Img variant="top"  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Container>
    
  );
}

export default Portfolio;
