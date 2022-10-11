import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer, toast } from 'react-toastify';

const Quiz = ({question}) => {
    const {options,correctAnswer}=question
    const correct = () => toast("Correct Answer!");
    const falsy = () => toast("Wrong Answer!");
    const correctAnswerEye=()=>toast(`Correct Answer: ${correctAnswer}`);

   
    return (
        <div className='card m-5 p-3'>
        
            <h3>Q: {question.question}  <FontAwesomeIcon className='btn m-2' onClick={correctAnswerEye} icon={faEye} ></FontAwesomeIcon></h3>
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
    autoClose={4000}
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