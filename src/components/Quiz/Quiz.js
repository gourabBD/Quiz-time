import React from 'react';
import Button from 'react-bootstrap/Button';

import { ToastContainer, toast } from 'react-toastify';

const Quiz = ({question}) => {
    const correct = () => toast("Correct Answer!");
    const falsy = () => toast("Wrong Answer!");
    const {options}=question
    return (
        <div className='card m-2 '>
        
            <h3>Q: {question.question}</h3>
            <div >
            <div >
            {
                options.map(opt=>{
                    return(
         <div key={Math.random(500)} className=' d-flex justify-content-center'>
        <Button  onClick={opt===question.correctAnswer?correct: falsy} style={{ width: '50%',
        margin:'10px' }}>{opt}</Button>
        <ToastContainer 
    position="top-center"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light">

</ToastContainer>
    </div>
                    )
                })
            }

            </div>

            </div>
        </div>
    );
};

export default Quiz;