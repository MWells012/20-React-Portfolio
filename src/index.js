import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// ^ this is the app.js file
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
<BrowserRouter> 
    <App/> 
</BrowserRouter>, document.getElementById('root'));

// root is in the index.html file in public ^ this is telling react that our app is taking over and rendering n the index.html page