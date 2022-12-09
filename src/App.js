
import './App.css';
import React, { Component } from 'react';
import background from "./components/assets/background.jpg";

import Header from './components/Header'
import Footer from './components/Footer'

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
  
        <Header/>
        <Footer/>
  
      </div> 
    );
  }
}
   
export default App;

