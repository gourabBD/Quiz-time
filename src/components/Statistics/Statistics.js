import React from 'react';
import {
    useLoaderData,
    
  } from "react-router-dom";

import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts';

const Statistics = () => {
    const topicForChart= useLoaderData()
    const {data}=topicForChart;
    return (
        <div className='d-grid'>
         <h2 className='text-decoration-underline m-5'>Graph of total Quizes of each topic</h2> 
        <div className='d-flex justify-content-center m-auto'>
        
             <LineChart width={350} height={200} data={data}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
        </div>
        </div>
    );
};

export default Statistics;