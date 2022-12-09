
import './App.css';
import React, { Component } from 'react';
import background from "./components/assets/background.jpg";

import NavBar from './components/NavBar'
import Footer from './components/Footer'


import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


class App extends Component {
  render() {
    const myStyle={
        backgroundImage: `url(${background})`,
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        <div> 
          <NavBar/>
        <Footer/>
        </div>
      </div> 
    );
  }
}
   
export default App;

