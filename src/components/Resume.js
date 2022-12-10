import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import '../App.css';

import pdfResume from '../components/assets/Michaela-Wells-Resume.pdf'


const Resume = () =>{
    return(
        <React.Fragment> 
            <Container className="mt-4">
                
                    <div>
                        <h2 style={{ color:'#6c883b'}}> Download My Resume</h2>
                        
                        <embed id="Resume" src={pdfResume} width="100%" height="730px" />
                    </div>
              
            </Container>
        </React.Fragment> 
    )
}

export default Resume;