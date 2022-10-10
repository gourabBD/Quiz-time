import React from 'react';
import {
    createBrowserRouter,
    useLoaderData,
    Route,
    Link,
  } from "react-router-dom";
import Topic from '../Topic/Topic';


const Topics = () => {
    const AllTopics=useLoaderData();
    const {data}=AllTopics
    return (
        <div className='m-5 d-lg-flex d-grid justify-content-center'>
            
            {
              data.map(topic=><Topic key={topic.id}  topic={topic}></Topic>)  
            }
        </div>
    );
};

export default Topics;