import React from 'react';
import { Button,Card } from 'react-bootstrap';
import { Link} from "react-router-dom";

const Topic = ({topic}) => {
    const {id}=topic;

    return (
        <div className='m-2 '>
           <Card className='bg-warning p-2 ' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={topic.logo} />
      <Card.Body className='bg-secondary'>
      <div className='d-flex justify-content-between align-items-center'>
      <Card.Title >{topic.name} <br /> <small className='ms-2'>Total:{topic.total}</small></Card.Title>
     
         <Link to={`quiz/${id}`}><Button variant="primary">Start Practice</Button></Link>
      </div>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Topic;