import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'; 
import { Container } from 'react-bootstrap';




const Portfolio = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <React.Fragment>
        
    <div className="container, border" style={{marginTop: '100px', background:'#D4D4D4'}}>
      
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div style={{ background:'#D4D4D4', opacity:'85%'}}>
            <h4 style={{paddingTop:'2pt'}}><a class='btn border-dark' href=''>View on Github</a></h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum. </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div style={{ background:'#D4D4D4', opacity:'85%'}}>
          <h4 style={{paddingTop:'2pt'}}><a class='btn border-dark' href=''>View on Github</a></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div style={{ background:'#D4D4D4', opacity:'85%'}}>
          <h4 style={{paddingTop:'2pt'}}><a class='btn border-dark' href=''>View on Github</a></h4>
            <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/new/slides/041.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div style={{ background:'#D4D4D4', opacity:'85%'}}>
          <h4 style={{paddingTop:'2pt'}}><a class='btn border-dark' href=''>View on Github</a></h4>
            <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/new/slides/042.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div style={{ background:'#D4D4D4', opacity:'85%'}}>
          <h4 style={{paddingTop:'2pt'}}><a class='btn border-dark' href=''>View on Github</a></h4>
            <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/new/slides/043.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div style={{ background:'#D4D4D4', opacity:'85%'}}>
          <h4 style={{paddingTop:'2pt'}}><a class='btn border-dark' href=''>View on Github</a></h4>
            <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
      
    </div>
    
    
</React.Fragment>
  );
}
    

export default Portfolio;
