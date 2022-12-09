import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {  FaGithub, FaLinkedin} from "react-icons/fa";
import { IconContext } from "react-icons";
import Card from 'react-bootstrap/Card';


function Footer() {
    return (
        <React.Fragment>
            
        <IconContext.Provider value={{ color: 'white', size: '3em' }}>
        <footer className="blockquote-footer">
            <div style={{display: 'block',textAlign: 'center', position:'fixed', bottom:'0', width:'100%' }}>

                <a style={{marginRight:"30px"}} href= 'https://www.linkedin.com/in/michaela-wells-85606713b/'>
                     <FaLinkedin/>
                </a>

            
                <a style={{marginRight:"30px"}}  href= 'https://github.com/MWells012'>
                     <FaGithub/> 
                </a>
            
                
            </div>
    
       
    </footer>
    </IconContext.Provider>
  
        </React.Fragment>
      );
    }

export default Footer;