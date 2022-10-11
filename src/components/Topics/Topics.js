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
      
        <div className='card-group  d-lg-flex  d-md-grid  d-sm-grid justify-content-sm-center justify-content-md-center  d-grid '>
            
            {
              data.map(topic=><Topic key={topic.id}  topic={topic}></Topic>)  
            }
        </div>
    );
};

export default Topics;