import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Col, Heading } from 'vandebron-styleguide';
import './bootstrap.min.css'
import Victory from './Charts/Victory'
import Chartist from './Charts/Chartist'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Col md={4}>
            left
          </Col>
          <Col md={4}>
            center
          </Col>
          <Col md={4}>
            right
          </Col>
        </Grid>
        <Grid>
          <Col md={6}>
            <Victory />
          </Col>
          <Col md={6}>
            <Chartist />
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;
