import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

import Card from 'react-bootstrap/Card';




const HomePage = () => {
  return(
    <React.Fragment>
        
        <div className="container, border" style={{marginTop: '100px', background:'#D4D4D4'}}>
          <h4 style={{paddingTop:'20px', color:'#283316', textAlign:'center', fontSize: '35px'}}> Well Hello there!</h4>
          <hr style={{height:'5px',backgroundColor:'#242d13',width: '80%',marginLeft: 'auto',marginRight: 'auto',}}/>
          <h4 style={{paddingBottom:'12px', color:'#283316', textAlign:'center', fontSize: '35px'}}> You've landed on the portfolio for Michaela Wells</h4>
        </div>

        <div className="container, border" style={{marginTop: '100px', background:'#D4D4D4'}}>
          <p style={{paddingTop:'20px', color:'#283316', textAlign:'center', fontSize: '18px', fontStyle:'bold'}}> Feel free to browse the tabs to view my past work, take a peak at my resume, learn more about me and even send me a message if you'd like to connect!</p>
        </div>
        
        
  </React.Fragment>
  )
}
export default HomePage;