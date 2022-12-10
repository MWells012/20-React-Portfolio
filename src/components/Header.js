import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

import HomePage  from './HomePage';
import AboutMe from './AboutMe'
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import Resume from './Resume'
import Contact from './Contact'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Header = () =>{
    return(
        
        <Router>
           <NavBar/>
                <Routes>
                    <Route path="/20-React-Portfolio" element ={<HomePage/>}/>
                    <Route path="/AboutMe"  element ={<AboutMe/>}/>
                    <Route path="/HomePage"  element ={<HomePage/>}/>
                    <Route path="/Portfolio"  element ={<Portfolio/>}/>
                    <Route path="/Resume"  element ={<Resume/>}/>
                    <Route path="/Contact"  element ={<Contact/>}/>
                </Routes>
           
        </Router>
    );
};

export default Header;