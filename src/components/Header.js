import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React, { Component } from 'react';
export default class Header extends Component {
    render ()  {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Arnol Segovia</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className="me-auto">
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#resume">Resume</Nav.Link>
                  <Nav.Link href="#works">Experience</Nav.Link>

                </Nav>
            </Container>
          </Navbar>
            
        )
        }
};

