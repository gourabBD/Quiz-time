import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

const NavBars = () => {
    return (
        <div >
        
             <Navbar bg="warning" variant="dark">
        <Container className='justify-content-space-between'>
        <div> <Navbar.Brand className='text-dark'>Quiz <span className='text-primary'>Time</span></Navbar.Brand>
        </div>
        <div>
        <Nav className="me-auto">
            <Nav.Link ><Link className='text-decoration-none fw-bold' to={'/'}>Topics</Link></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none fw-bold' to={'stat'}> Statistics</Link></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none fw-bold' to={'blog'}>Blog</Link></Nav.Link>
          </Nav>
        </div>
        </Container>
      </Navbar>
        </div>
    );
};

export default NavBars;