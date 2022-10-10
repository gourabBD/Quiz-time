import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className='d-flex justify-content-center p-3'>
            <img className='pic' src="https://blog.hubspot.com/hubfs/google-quiz.jpg" alt="" />
            <p className='detail'>This is the place where people can learn with fun.Compete in positive vibe <br /> and know more things by participating in the quizes. Developing Knowlege about their interests.</p>
        </div>
    );
};

export default Header;