import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Photo from '../components/assets/profile.jpg';



const About = () => {
  return(
    <React.Fragment>
        
        <div className="container, border" style={{marginTop: '100px', background:'#D4D4D4'}}>
          
          <h4 style={{paddingTop:'12px', color:'#283316', textAlign:'center', fontSize: '35px'}}> Get to Know Me, Michaela Wells</h4>
          <hr style={{height:'5px',backgroundColor:'#242d13',width: '80%',marginLeft: 'auto',marginRight: 'auto',}}/>
            <div className="row ">
              <div className="col-lg-5 col-md-6 col-sm-12 order-sm-first order-last">
                
                <div>
                <img style={{marginTop: '40px', marginBottom: '40px',  marginLeft:"40px", width: '225px', height: '300px',}} src={Photo} alt="..."></img>
                  
              
                </div>
              </div>  
              <div className="col-lg-7 col-md-6 col-sm-12 text-dark" style={{marginTop: '40px', fontSize: '15px'}}>
                  <p style={{ color: '#283316'}}> Hello! Thanks for stopping by. </p>
                  <p style={{ color: '#283316'}}> I'm Michaela, an aspiring web developer. I am currently working my way through a coding bootcamp through Michigan State University. Before this camp I got my bachelor degree from Grand Valley State University for Marketing and Supply Chain Management. </p>
                  <p style={{ color: '#283316'}}> When I am not trying to learn more about coding I spend a lot of my free time playing video games, going to the gym and flying around the US to see live music. </p>
              </div>
          </div>
        </div>
        
        
  </React.Fragment>
)
}
export default About;






{/* <Container>

<Card className="d-flex flex-column container" style={{ width: '70rem', height: '50rem', margin: 'auto', marginTop: '100px', background:'#D4D4D4', color:'#283316', textAlign: 'center',  }}>
  <h1 style={{marginTop:'12px'}}> Get to Know Me, Michaela Wells</h1>
  
 
  <div className="col-lg-7 col-md-6 col-sm-12 text-dark" style={{marginTop: '70px', fontSize: '20px'}}>
  
        <p> I am a 25 year old full stack web developer based in Grand Rapids, Michigan. I am a problem solver and a creative with an eye for detail specializing in building responsive, user friendly websites. </p>
        <p>I have a bachelor's degree from Michigan State University and am currently getting my Full Stack Web Development certificate though Michigan State. I am actively seeking employment as a Web Developer or related feild.
          When i'm not coding, I enjoy spending my free time outdoors; snowboarding or hiking, going to the gym and reading books.
        </p>
        <p>I have a passion for learning and trying different things and love to take on new and challenging projects.</p>
    
  </div>
</Card>
</Container> */}