import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link } from 'react-router-dom';


function NavBar() {
  return (
   
    
    <Navbar variant="light"  bg="light" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/HomePage">Home</Navbar.Brand>
          <Nav fill variant="tabs" className="justify-content-end" activeKey="/home">

            <Nav.Item>
              <Nav.Link to="/AboutMe" as={Link} >About the Dev</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link to= "/Portfolio" as={Link} >Portfolio</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link to="/Contact" as={Link} >Contact Page</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link to="/Resume" as={Link} >Resume Download</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link to="/Github" as={Link} >Github Link</Nav.Link>
            </Nav.Item>

          </Nav>
      </Container>
    </Navbar>
    
    
  );
}

export default NavBar;