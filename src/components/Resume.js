import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
export default class Resume extends Component {
    render() {
       return(
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Experience</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Works</Card.Subtitle>
        <Card.Text>
          Works
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
};
