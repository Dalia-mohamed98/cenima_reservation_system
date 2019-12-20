import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Login from './components/pages/Login'
import Movies from './components/pages/Movies'

import axios from 'axios'
import uuid from 'uuid'

import './App.css';

function App() {


  return (
    <Router>
      <div className="App">
      <Header/>
        <div className="container">
          
          <Route exact path="/" render={props => (
            <React.Fragment>
               {}
            </React.Fragment>
          )}/>

          <Route path="/login" component={Login}/>
          <Route path="/Movies" component={Movies}/>

          
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
