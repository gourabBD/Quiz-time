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
        <div className=' d-grid w-auto'>
        
             <Navbar  bg="warning" variant="dark">
        <Container className='justify-content-space-between p-4'>
        <div> <Navbar.Brand className='text-dark'>Quiz <span className='text-primary'>Time</span></Navbar.Brand>
        </div>
        <div>
        <Nav className="me-auto ">
           <Link className='text-decoration-none fw-bold m-2' to={'/'}>Topics</Link>
           <Link className='text-decoration-none fw-bold m-2' to={'stat'}> Statistics</Link>
           <Link className='text-decoration-none fw-bold m-2' to={'blog'}>Blog</Link>
          </Nav>
        </div>
        </Container>
      </Navbar>
        </div>
    );
};

export default NavBars;