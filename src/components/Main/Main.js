import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import NavBars from '../NavBars/NavBars';

const Main = () => {
    return (
        <div>
            <NavBars></NavBars>
           
            <Outlet></Outlet>
        </div>
    );
};

export default Main;