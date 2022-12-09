import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from "react-router-dom";

function AlignmentExample() {
  return (
   
    
    <Navbar variant="light"  bg="light" sticky="top">
      <Container>
      <Navbar.Brand href="/HomePage">Home</Navbar.Brand>
        <Nav fill variant="tabs" className="justify-content-end" activeKey="/home">

          <Nav.Item>
            <Nav.Link href="/AboutMe" eventKey="link-1">About the Dev</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/Portfolio" eventKey="link-2">Portfolio</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/Contact" eventKey="link-3">Contact Page</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/Resume" eventKey="link-4">Resume Download</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/Github" eventKey="link-5">Github Link</Nav.Link>
          </Nav.Item>

        </Nav>
      </Container>
    </Navbar>
    
    
  );
}

export default AlignmentExample;