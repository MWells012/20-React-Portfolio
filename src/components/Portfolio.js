import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import NoteTaker from './assets/note-taker.png';
import ProfileGenerator from './assets/profile-generator.png'
import ReadMe from './assets/readme-generator.png'
import QuestionGame from './assets/question-game.png'
import TimeSchedule from './assets/time-schedule.png'
import OriginalPortfolio from './assets/original-portfolio.png'

import Carousel from 'react-bootstrap/Carousel';





const Portfolio = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <React.Fragment>
        
    <div className="container" style={{marginTop: '50px', width:'auto'}}>
      
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} slide={false}>
      <Carousel.Item>
        <img
      
          className="d-block w-100"
          src= { TimeSchedule }
          alt="First slide"
          
        />
        <Carousel.Caption>
          <div style={{ background:'#D4D4D4', opacity:'85%'}}>
            <h4 style={{paddingTop:'2pt'}}><a class='btn border-dark' href='https://github.com/MWells012/5-TimeToPlan'>View on Github</a></h4>
            <p> Time Scheduler </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {ReadMe}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div style={{ background:'#D4D4D4', opacity:'85%'}}>
            <h4 style={{paddingTop:'2pt'}}><a class='btn border-dark' href='https://github.com/MWells012/9-Generate-Your-ReadMe'>View on Github</a></h4>
            <p> Generate a Professional ReadMe </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
        
          className="d-block w-100"
          src= { NoteTaker}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div style={{ background:'#D4D4D4', opacity:'85%'}}>
            <h4 style={{paddingTop:'2pt'}}><a class='btn border-dark' href='https://github.com/MWells012/11-Note-Taker'>View on Github</a></h4>
            <p> Note Taker </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {QuestionGame}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div style={{ background:'#D4D4D4', opacity:'85%'}}>
            <h4 style={{paddingTop:'2pt'}}><a class='btn border-dark' href='https://github.com/MWells012/4-TheQuestionGame'>View on Github</a></h4>
            <p> Question / Quiz </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
        
          className="d-block w-100"
          src= {ProfileGenerator}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div style={{ background:'#D4D4D4', opacity:'85%'}}>
            <h4 style={{paddingTop:'2pt'}}><a class='btn border-dark' href='https://github.com/MWells012/10-Team-Profile-Generator'>View on Github</a></h4>
            <p> Team Profile Generator </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
        
          className="d-block w-100"
          src= {OriginalPortfolio}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div style={{ background:'#D4D4D4', opacity:'85%'}}>
            <h4 style={{paddingTop:'2pt'}}><a class='btn border-dark' href='https://github.com/MWells012/assignment-2'>View on Github</a></h4>
            <p> Original/First Portfolio </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
      
    </div>
    
    
</React.Fragment>
  );
}
    

export default Portfolio;
