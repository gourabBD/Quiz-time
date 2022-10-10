import React from 'react';
import { Button,Card } from 'react-bootstrap';

const Topic = ({topic}) => {
    return (
        <div className='m-2 '>
           <Card className='bg-warning p-2 ' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={topic.logo} />
      <Card.Body>
      <div className='d-flex justify-content-between align-items-center'>
      <Card.Title>{topic.name}</Card.Title>
         <Button variant="primary">Start Practice</Button>
      </div>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Topic;