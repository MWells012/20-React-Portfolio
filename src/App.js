import React from 'react';

import MainBody from './components/body/a-main-body';
import Navbar from './components/b-navbar'
import About from './components/body/c-about-me'
import Portfolio from './components/body/d-portfolio'
import Contact from './components/body/e-contact'
import Resume from './components/body/f-resume'
import Footer from './components/g-footer'

// this is for the background on the main page


import './App.css';



function App() {
  return (
    <div>
      <header> <Navbar/> </header>
      <body> <MainBody/> </body>
      <footer> <Footer/> </footer>

    </div>
  );
  
}

export default App;
