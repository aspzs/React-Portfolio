import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';


export default class Footer extends Component {
    render(){
      return (
        <Card>
        <Card.Header>Thank you for visit my page</Card.Header>
        <Card.Body>
          <Card.Title>Arol Segovia</Card.Title>
          <Card.Text>
            Created with ReactJS
          </Card.Text>
        </Card.Body>
      </Card>
      );
    }
}