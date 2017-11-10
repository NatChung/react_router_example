import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import About from './About'
import Nav from './Nav'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route render={()=> <h1>Not Found</h1>} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
