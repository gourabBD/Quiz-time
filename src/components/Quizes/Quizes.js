
import React from 'react';

import {
    useLoaderData,
    
  } from "react-router-dom";
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes=useLoaderData()
    const {questions,name}=quizes.data
   
    
    
    return (
        <div className=''>
        <h1>Quiz of {name}</h1>
        <div >
        {
        questions.map(question=><Quiz key={question.id} question={question} ></Quiz>)
    }
        </div>
    
        </div>
    );
};

export default Quizes;