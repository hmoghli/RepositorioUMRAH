import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Cardguia({ title, text, imgSrc }) {
  return (
    <Card style={{ width: '18rem', backgroundColor: '#000', color: '#808080'  }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title style={{ width: '18rem', backgroundColor: '#000', color: '#808080'  }}>{title}</Card.Title>
        <Card.Text style={{  color: '#fff' }}>{text}</Card.Text>
        <Button variant="light">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardguia;


