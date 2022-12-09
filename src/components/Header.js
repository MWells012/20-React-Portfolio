import React from 'react';
import HomePage  from './HomePage';
import AboutMe from './AboutMe'
import NavBar from './NavBar';
import Portfolio from './Portfolio';
import Resume from './Resume'
import Contact from './Contact'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const Header = () =>{
    return(
        
        <Router>
           <NavBar/>
                <Routes>
                    <Route path="/" element ={<HomePage/>}/>
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