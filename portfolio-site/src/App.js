import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Steveqwang',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about' },
        {title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'BeRelentless',
        subTitle: 'Projects the make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom">
            <Navbar.Brand>Steve Love</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle" />

          </Navbar>


        </Container>
      </Router>
    );
  }
}

export default App;
