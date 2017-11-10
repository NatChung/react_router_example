import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About'
import {BrowserRouter} from 'react-router-dom'
import Nav from './Nav'


ReactDOM.render(
    <BrowserRouter>
        
        <App />
    </BrowserRouter>, 
document.getElementById('root'));
