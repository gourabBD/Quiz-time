import React from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const Options = ({opt,question}) => {
    const correct = () => toast("Correct Answer!");
    const falsy = () => toast("Wrong Answer!");
    return (
        <div className=' d-flex justify-content-center'>
        
            <Button onClick={opt===question.correctAnswer?correct: falsy} style={{ width: '50%',
            margin:'10px' }}>{opt}</Button>
            <ToastContainer></ToastContainer>
            
            
        
         
        </div>
    );
};

export default Options;