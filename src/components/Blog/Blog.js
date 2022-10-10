import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='d-flex justify-content-center'>

        <div className='m-5 w-50'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the purpose of the react router?</Accordion.Header>
        <Accordion.Body>
        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does the context API work?</Accordion.Header>
        <Accordion.Body>
        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>About react useRef Hook...</Accordion.Header>
        <Accordion.Body>
        The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly.
If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
        </div>
    );
};

export default Blog;