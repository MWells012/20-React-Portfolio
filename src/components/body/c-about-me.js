import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Photo from './assets/photo-of-Michaela.jpg'

const About = () => {
    return (
        <React.Fragment> 
       
      
          <div className="container bg-light" style={{marginTop: '100px'}}>
         
            <h3 className="text-warning" style={{marginTop:'70px', textAlign:'center', fontSize: '50px'}}> Hi! I'm Michaela.</h3>
              <div className="row ">
                <div className="col-lg-5 col-md-6 col-sm-12 order-sm-first order-last">
                  
                  <div className="text-white-50">
                  <img style={{marginTop: '70px', marginBottom: '40px',  marginLeft:"40px", width: '300px', height: '400px',}} src={Photo} alt="photo of michaela, blonde hair black shirt in a field of tulips with a large old fashioned windmill in the background"></img>
                    
                
                  </div>
                </div>  
                <div className="col-lg-7 col-md-6 col-sm-12 text-dark" style={{marginTop: '70px', fontSize: '20px'}}>
                    <p> . </p>
                    <p>. </p>
                    <p> .</p>
                </div>
            </div>
          </div>
          
        </React.Fragment>
      );
  };

export default About;